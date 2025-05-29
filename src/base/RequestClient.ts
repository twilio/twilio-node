import { HttpMethod } from "../interfaces";
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import * as fs from "fs";
import HttpsProxyAgent from "https-proxy-agent";
import qs from "qs";
import * as https from "https";
import Response from "../http/response";
import Request, {
  Headers,
  RequestOptions as LastRequestOptions,
} from "../http/request";
import AuthStrategy from "../auth_strategy/AuthStrategy";
import ValidationToken from "../jwt/validation/ValidationToken";
import { ValidationClientOptions } from "./ValidationClient";

const DEFAULT_CONTENT_TYPE = "application/x-www-form-urlencoded";
const DEFAULT_TIMEOUT = 30000;
const DEFAULT_INITIAL_RETRY_INTERVAL_MILLIS = 100;
const DEFAULT_MAX_RETRY_DELAY = 3000;
const DEFAULT_MAX_RETRIES = 3;
const DEFAULT_MAX_SOCKETS = 20;
const DEFAULT_MAX_FREE_SOCKETS = 5;
const DEFAULT_MAX_TOTAL_SOCKETS = 100;

interface BackoffAxiosRequestConfig extends AxiosRequestConfig {
  /**
   * Current retry attempt performed by Axios
   */
  retryCount?: number;
}

interface ExponentialBackoffResponseHandlerOptions {
  /**
   * Maximum retry delay in milliseconds
   */
  maxIntervalMillis: number;
  /**
   * Maximum number of request retries
   */
  maxRetries: number;
}

function getExponentialBackoffResponseHandler(
  axios: AxiosInstance,
  opts: ExponentialBackoffResponseHandlerOptions
) {
  const maxIntervalMillis = opts.maxIntervalMillis;
  const maxRetries = opts.maxRetries;

  return function (res: AxiosResponse<any, any>) {
    const config: BackoffAxiosRequestConfig = res.config;

    if (res.status !== 429) {
      return res;
    }

    const retryCount = (config.retryCount || 0) + 1;
    if (retryCount <= maxRetries) {
      config.retryCount = retryCount;
      const baseDelay = Math.min(
        maxIntervalMillis,
        DEFAULT_INITIAL_RETRY_INTERVAL_MILLIS * Math.pow(2, retryCount)
      );
      const delay = Math.floor(baseDelay * Math.random()); // Full jitter backoff

      return new Promise((resolve: (value: Promise<AxiosResponse>) => void) => {
        setTimeout(() => resolve(axios(config)), delay);
      });
    }
    return res;
  };
}

class RequestClient {
  defaultTimeout: number;
  axios: AxiosInstance;
  lastResponse?: Response<any>;
  lastRequest?: Request<any>;
  autoRetry: boolean;
  maxRetryDelay: number;
  maxRetries: number;
  keepAlive: boolean;

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
   * @param opts.autoRetry - Enable auto-retry requests with exponential backoff on 429 responses. Defaults to false.
   * @param opts.maxRetryDelay - Max retry delay in milliseconds for 429 Too Many Request response retries. Defaults to 3000.
   * @param opts.maxRetries - Max number of request retries for 429 Too Many Request responses. Defaults to 3.
   * @param opts.validationClient - Validation client for PKCV
   */
  constructor(opts?: RequestClient.RequestClientOptions) {
    opts = opts || {};
    this.defaultTimeout = opts.timeout || DEFAULT_TIMEOUT;
    this.autoRetry = opts.autoRetry || false;
    this.maxRetryDelay = opts.maxRetryDelay || DEFAULT_MAX_RETRY_DELAY;
    this.maxRetries = opts.maxRetries || DEFAULT_MAX_RETRIES;
    this.keepAlive = opts.keepAlive !== false;

    // construct an https agent
    let agentOpts: https.AgentOptions = {
      timeout: this.defaultTimeout,
      keepAlive: this.keepAlive,
      keepAliveMsecs: opts.keepAliveMsecs,
      maxSockets: opts.maxSockets || DEFAULT_MAX_SOCKETS, // no of sockets open per host
      maxTotalSockets: opts.maxTotalSockets || DEFAULT_MAX_TOTAL_SOCKETS, // no of sockets open in total
      maxFreeSockets: opts.maxFreeSockets || DEFAULT_MAX_FREE_SOCKETS, // no of free sockets open per host
      scheduling: opts.scheduling,
      ca: opts.ca,
    };

    // sets https agent CA bundle if defined in CA bundle filepath env variable
    if (process.env.TWILIO_CA_BUNDLE !== undefined) {
      if (agentOpts.ca === undefined) {
        agentOpts.ca = fs.readFileSync(process.env.TWILIO_CA_BUNDLE);
      }
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
    if (opts.autoRetry) {
      this.axios.interceptors.response.use(
        getExponentialBackoffResponseHandler(this.axios, {
          maxIntervalMillis: this.maxRetryDelay,
          maxRetries: this.maxRetries,
        })
      );
    }

    // if validation client is set, intercept the request using ValidationInterceptor
    if (opts.validationClient) {
      this.axios.interceptors.request.use(
        this.validationInterceptor(opts.validationClient)
      );
    }
  }

  /**
   * Make http request
   * @param opts - The options argument
   * @param opts.method - The http method
   * @param opts.uri - The request uri
   * @param opts.username - The username used for auth
   * @param opts.password - The password used for auth
   * @param opts.authStrategy - The authStrategy for API call
   * @param opts.headers - The request headers
   * @param opts.params - The request params
   * @param opts.data - The request data
   * @param opts.timeout - The request timeout in milliseconds (default 30000)
   * @param opts.allowRedirects - Should the client follow redirects
   * @param opts.forever - Set to true to use the forever-agent
   * @param opts.logLevel - Show debug logs
   */
  async request<TData>(
    opts: RequestClient.RequestOptions<TData>
  ): Promise<Response<TData>> {
    if (!opts.method) {
      throw new Error("http method is required");
    }

    if (!opts.uri) {
      throw new Error("uri is required");
    }

    var headers = opts.headers || {};

    if (!headers.Connection && !headers.connection)
      headers.Connection = this.keepAlive ? "keep-alive" : "close";

    let auth = undefined;

    if (opts.username && opts.password) {
      auth = Buffer.from(opts.username + ":" + opts.password).toString(
        "base64"
      );
      headers.Authorization = "Basic " + auth;
    } else if (opts.authStrategy) {
      headers.Authorization = await opts.authStrategy.getAuthString();
    }

    const options: AxiosRequestConfig = {
      timeout: opts.timeout || this.defaultTimeout,
      maxRedirects: opts.allowRedirects ? 10 : 0,
      url: opts.uri,
      method: opts.method,
      headers: opts.headers,
      proxy: false,
      validateStatus: (status) => status >= 100 && status < 600,
    };

    if (opts.data && options.headers) {
      if (
        options.headers["Content-Type"] === "application/x-www-form-urlencoded"
      ) {
        options.data = qs.stringify(opts.data, { arrayFormat: "repeat" });
      } else if (options.headers["Content-Type"] === "application/json") {
        options.data = opts.data;
      }
    }

    if (opts.params) {
      options.params = opts.params;
      options.paramsSerializer = (params) => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      };
    }

    const requestOptions: LastRequestOptions<TData> = {
      method: opts.method,
      url: opts.uri,
      auth: auth,
      params: options.params,
      data: opts.data,
      headers: opts.headers,
    };

    if (opts.logLevel === "debug") {
      this.logRequest(requestOptions);
    }

    const _this = this;
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

  filterLoggingHeaders(headers: Headers) {
    return Object.keys(headers).filter((header) => {
      return !"authorization".includes(header.toLowerCase());
    });
  }

  /**
   * ValidationInterceptor adds the Twilio-Client-Validation header to the request
   * @param validationClient - The validation client for PKCV
   * <p>Usage Example:</p>
   * ```javascript
   * import axios from "axios";
   * // Initialize validation client with credentials
   * const validationClient = {
   *           accountSid: "ACXXXXXXXXXXXXXXXX",
   *           credentialSid: "CRXXXXXXXXXXXXXXXX",
   *           signingKey: "SKXXXXXXXXXXXXXXXX",
   *           privateKey: "private key",
   *           algorithm: "PS256",
   *         }
   * // construct an axios instance
   * const instance = axios.create();
   * instance.interceptors.request.use(
   *   ValidationInterceptor(opts.validationClient)
   * );
   * ```
   */
  validationInterceptor(validationClient: ValidationClientOptions) {
    return function (config: InternalAxiosRequestConfig) {
      config.headers = config.headers || {};
      try {
        config.headers["Twilio-Client-Validation"] = new ValidationToken(
          validationClient
        ).fromHttpRequest(config);
      } catch (err) {
        console.log("Error creating Twilio-Client-Validation header:", err);
        throw err;
      }
      return config;
    };
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
      const filteredHeaderKeys = this.filterLoggingHeaders(
        options.headers as Headers
      );
      filteredHeaderKeys.forEach((header) =>
        console.log(`${header}: ${options.headers?.header}`)
      );
    }

    console.log("-- END Twilio API Request --");
  }
}

namespace RequestClient {
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
     * The AuthStrategy for API Call
     */
    authStrategy?: AuthStrategy;
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
    scheduling?: "fifo" | "lifo" | undefined;
    /**
     * The private CA certificate bundle (if private SSL certificate)
     */
    ca?: string | Buffer;
    /**
     * Enable auto-retry with exponential backoff when receiving 429 Errors from
     * the API. Disabled by default.
     */
    autoRetry?: boolean;
    /**
     * Maximum retry delay in milliseconds for 429 Error response retries.
     * Defaults to 3000.
     */
    maxRetryDelay?: number;
    /**
     * Maximum number of request retries for 429 Error responses. Defaults to 3.
     */
    maxRetries?: number;
    /**
     * Validation client for Public Key Client Validation
     * On setting this with your credentials, Twilio validates:
     <ul>
        <li>The request comes from a sender who is in control of the private key.</li>
        <li>The message has not been modified in transit.</li>
     </ul>
     * That the message has not been modified in transit.
     * Refer our doc for details - https://www.twilio.com/docs/iam/pkcv
     */
    validationClient?: ValidationClientOptions;
  }
}
export = RequestClient;
