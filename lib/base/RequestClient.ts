import { HttpMethod } from "../interfaces";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import * as fs from "fs";
import HttpsProxyAgent from "https-proxy-agent";
import qs from "qs";
import * as https from "https";
import Response from "../http/response";
import Request from "../http/request";
import { RequestOptions as LastRequestOptions, Headers } from "../http/request";

const DEFAULT_CONTENT_TYPE = "application/x-www-form-urlencoded";
const DEFAULT_TIMEOUT = 30000;

export interface RequestOptions<TData = any, TParams = object> {
  /**
   * The HTTP method
   */
  method: HttpMethod;
  /**
   * The request URI
   */
  uri: string;
  /**
   * The username used for auth
   */
  username?: string;
  /**
   * The password used for auth
   */
  password?: string;
  /**
   * The request headers
   */
  headers?: Headers;
  /**
   * The object of params added as query string to the request
   */
  params?: TParams;
  /**
   * The form data that should be submitted
   */
  data?: TData;
  /**
   * The request timeout in milliseconds
   */
  timeout?: number;
  /**
   * Should the client follow redirects
   */
  allowRedirects?: boolean;
  /**
   * Set to true to use the forever-agent
   */
  forever?: boolean;
  /**
   * Set to 'debug' to enable debug logging
   */
  logLevel?: string;
}

export interface RequestClientOptions {
  /**
   * A timeout in milliseconds. This will be used as the HTTPS agent's socket
   * timeout, AND as the default request timeout.
   */
  timeout?: number;
  /**
   * https.Agent keepAlive option
   */
  keepAlive?: boolean;
  /**
   * https.Agent keepAliveMSecs option
   */
  keepAliveMsecs?: number;
  /**
   * https.Agent maxSockets option
   */
  maxSockets?: number;
  /**
   * https.Agent maxTotalSockets option
   */
  maxTotalSockets?: number;
  /**
   * https.Agent maxFreeSockets option
   */
  maxFreeSockets?: number;
  /**
   * https.Agent scheduling option
   */
  scheduling?: string;
  /**
   * The private CA certificate bundle (if private SSL certificate)
   */
  ca?: string | Buffer;
}

export default class RequestClient {
  defaultTimeout: number;
  axios: AxiosInstance;
  ca?: string | Buffer;
  lastResponse?: Response<any>;
  lastRequest?: Request<any>;

  /**
   * Make http request
   * @param opts - The options passed to https.Agent
   * @param opts.timeout - https.Agent timeout option. Used as the socket timeout, AND as the default request timeout.
   * @param opts.keepAlive - https.Agent keepAlive option
   * @param opts.keepAliveMsecs - https.Agent keepAliveMsecs option
   * @param opts.maxSockets - https.Agent maxSockets option
   * @param opts.maxTotalSockets - https.Agent maxTotalSockets option
   * @param opts.maxFreeSockets - https.Agent maxFreeSockets option
   * @param opts.scheduling - https.Agent scheduling option
   */
  constructor(opts?: RequestClientOptions) {
    opts = opts || {};
    this.defaultTimeout = opts.timeout || DEFAULT_TIMEOUT;

    // construct an https agent
    let agentOpts = {
      timeout: this.defaultTimeout,
      keepAlive: opts.keepAlive,
      keepAliveMsecs: opts.keepAliveMsecs,
      maxSockets: opts.maxSockets,
      maxTotalSockets: opts.maxTotalSockets,
      maxFreeSockets: opts.maxFreeSockets,
      scheduling: opts.scheduling,
      ca: opts.ca,
    };

    // sets https agent CA bundle if defined in CA bundle filepath env variable
    if (process.env.TWILIO_CA_BUNDLE !== undefined) {
      if (agentOpts.ca === undefined) {
        this.ca = fs.readFileSync(process.env.TWILIO_CA_BUNDLE);
      }
      agentOpts.ca = this.ca;
    }

    let agent;
    if (process.env.HTTP_PROXY) {
      // Note: if process.env.HTTP_PROXY is set, we're not able to apply the given
      // socket timeout. See: https://github.com/TooTallNate/node-https-proxy-agent/pull/96
      agent = HttpsProxyAgent(process.env.HTTP_PROXY);
    } else {
      agent = new https.Agent(agentOpts);
    }

    // construct an axios instance
    this.axios = axios.create();
    this.axios.defaults.headers.post["Content-Type"] = DEFAULT_CONTENT_TYPE;
    this.axios.defaults.httpsAgent = agent;
  }

  /**
   * Make http request
   * @param opts - The options argument
   * @param opts.method - The http method
   * @param opts.uri - The request uri
   * @param opts.username - The username used for auth
   * @param opts.password - The password used for auth
   * @param opts.headers - The request headers
   * @param opts.params - The request params
   * @param opts.data - The request data
   * @param opts.timeout - The request timeout in milliseconds (default 30000)
   * @param opts.allowRedirects - Should the client follow redirects
   * @param opts.forever - Set to true to use the forever-agent
   * @param opts.logLevel - Show debug logs
   */
  request<TData>(opts: RequestOptions<TData>): Promise<Response<TData>> {
    if (!opts.method) {
      throw new Error("http method is required");
    }

    if (!opts.uri) {
      throw new Error("uri is required");
    }

    var headers = opts.headers || {};

    if (!headers.Connection && !headers.connection && opts.forever) {
      headers.Connection = "keep-alive";
    } else if (!headers.Connection && !headers.connection) {
      headers.Connection = "close";
    }

    let auth = undefined;

    if (opts.username && opts.password) {
      auth = Buffer.from(opts.username + ":" + opts.password).toString(
        "base64"
      );
      headers.Authorization = "Basic " + auth;
    }

    var options: AxiosRequestConfig = {
      timeout: opts.timeout || this.defaultTimeout,
      maxRedirects: opts.allowRedirects ? 10 : 0,
      url: opts.uri,
      method: opts.method,
      headers: opts.headers,
      proxy: false,
      validateStatus: (status) => status >= 100 && status < 600,
    };

    if (opts.data) {
      options.data = qs.stringify(opts.data, { arrayFormat: "repeat" });
    }

    if (opts.params) {
      options.params = opts.params;
      options.paramsSerializer = (params) => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      };
    }

    var requestOptions: LastRequestOptions<TData> = {
      method: opts.method,
      url: opts.uri,
      auth: auth,
      params: options.params,
      data: opts.data,
      headers: opts.headers,
      ca: this.ca,
    };

    if (opts.logLevel === "debug") {
      this.logRequest(requestOptions);
    }

    var _this = this;
    this.lastResponse = undefined;
    this.lastRequest = new Request(requestOptions);

    return this.axios(options)
      .then((response) => {
        if (opts.logLevel === "debug") {
          console.log(`response.statusCode: ${response.status}`);
          console.log(`response.headers: ${JSON.stringify(response.headers)}`);
        }
        _this.lastResponse = new Response(
          response.status,
          response.data,
          response.headers
        );
        return {
          statusCode: response.status,
          body: response.data,
          headers: response.headers,
        };
      })
      .catch((error) => {
        _this.lastResponse = undefined;
        throw error;
      });
  }

  filterLoggingHeaders(headers: Headers | "*") {
    return Object.keys(headers).filter((header) => {
      return !"authorization".includes(header.toLowerCase());
    });
  }

  private logRequest<TData>(options: LastRequestOptions<TData>) {
    console.log("-- BEGIN Twilio API Request --");
    console.log(`${options.method} ${options.url}`);

    if (options.params) {
      console.log("Querystring:");
      console.log(options.params);
    }

    if (options.headers) {
      console.log("Headers:");
      const filteredHeaderKeys = this.filterLoggingHeaders(options.headers);
      filteredHeaderKeys.forEach((header) =>
        console.log(`${header}: ${options.headers?.header}`)
      );
    }

    console.log("-- END Twilio API Request --");
  }
}
