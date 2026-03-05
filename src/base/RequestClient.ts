import { HttpMethod } from "../interfaces.js";
import * as fs from "node:fs";
import * as https from "node:https";
import { Response } from "../http/response.js";
import { Request, Headers,
  RequestOptions as LastRequestOptions, } from "../http/request.js";
import { AuthStrategy } from "../auth_strategy/AuthStrategy.js";
import { ValidationToken } from "../jwt/validation/ValidationToken.js";
import { ValidationClientOptions } from "./ValidationClient.js";

const DEFAULT_CONTENT_TYPE = "application/x-www-form-urlencoded";
const DEFAULT_TIMEOUT = 30000;
const DEFAULT_INITIAL_RETRY_INTERVAL_MILLIS = 100;
const DEFAULT_MAX_RETRY_DELAY = 3000;
const DEFAULT_MAX_RETRIES = 3;

function stringifyParams(obj: Record<string, any>): string {
  return Object.entries(obj)
    .flatMap(([k, v]) =>
      Array.isArray(v)
        ? v.map(
            (val) =>
              `${encodeURIComponent(k)}=${encodeURIComponent(val)}`
          )
        : [
            `${encodeURIComponent(k)}=${encodeURIComponent(
              v == null ? "" : v
            )}`,
          ]
    )
    .join("&");
}

class RequestClient {
  defaultTimeout: number;
  lastResponse?: Response<any>;
  lastRequest?: Request<any>;
  autoRetry: boolean;
  maxRetryDelay: number;
  maxRetries: number;
  keepAlive: boolean;
  private validationClient?: ValidationClientOptions;
  private ca?: string | Buffer;

  /**
   * Make http request
   * @param opts - The options passed to the client
   * @param opts.timeout - Used as the default request timeout in milliseconds.
   * @param opts.keepAlive - Whether to use keep-alive connections
   * @param opts.autoRetry - Enable auto-retry requests with exponential backoff on 429 responses. Defaults to false.
   * @param opts.maxRetryDelay - Max retry delay in milliseconds for 429 Too Many Request response retries. Defaults to 3000.
   * @param opts.maxRetries - Max number of request retries for 429 Too Many Request responses. Defaults to 3.
   * @param opts.validationClient - Validation client for PKCV
   */
  constructor(opts?: RequestClientOptions) {
    opts = opts || {};
    this.defaultTimeout = opts.timeout || DEFAULT_TIMEOUT;
    this.autoRetry = opts.autoRetry || false;
    this.maxRetryDelay = opts.maxRetryDelay || DEFAULT_MAX_RETRY_DELAY;
    this.maxRetries = opts.maxRetries || DEFAULT_MAX_RETRIES;
    this.keepAlive = opts.keepAlive !== false;
    this.validationClient = opts.validationClient;

    this.ca = opts.ca;
    if (process.env.TWILIO_CA_BUNDLE !== undefined && this.ca === undefined) {
      this.ca = fs.readFileSync(process.env.TWILIO_CA_BUNDLE);
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
    opts: RequestOptions<TData>
  ): Promise<Response<TData>> {
    if (!opts.method) {
      throw new Error("http method is required");
    }

    if (!opts.uri) {
      throw new Error("uri is required");
    }

    const headers: Record<string, string> = {
      ...(opts.headers as Record<string, string>),
    };

    if (!headers.Connection && !headers.connection) {
      headers.Connection = this.keepAlive ? "keep-alive" : "close";
    }

    const method = opts.method.toUpperCase();
    if (
      !headers["Content-Type"] &&
      !headers["content-type"] &&
      (method === "POST" || method === "PUT" || method === "PATCH")
    ) {
      headers["Content-Type"] = DEFAULT_CONTENT_TYPE;
    }

    let auth: string | undefined = undefined;

    if (opts.username && opts.password) {
      auth = Buffer.from(opts.username + ":" + opts.password).toString(
        "base64"
      );
      headers.Authorization = "Basic " + auth;
    } else if (opts.authStrategy) {
      headers.Authorization = await opts.authStrategy.getAuthString();
    }

    let url = opts.uri;
    if (opts.params) {
      const qs = stringifyParams(opts.params as Record<string, any>);
      if (qs) {
        url += (url.includes("?") ? "&" : "?") + qs;
      }
    }

    let body: string | undefined = undefined;
    if (opts.data) {
      if (
        headers["Content-Type"] === "application/x-www-form-urlencoded" ||
        headers["content-type"] === "application/x-www-form-urlencoded"
      ) {
        body = stringifyParams(opts.data as Record<string, any>);
      } else if (
        headers["Content-Type"] === "application/json" ||
        headers["content-type"] === "application/json"
      ) {
        body = JSON.stringify(opts.data);
      }
    }

    if (this.validationClient) {
      const validationRequest = {
        url: url,
        method: opts.method,
        headers: headers,
        params: opts.params,
        data: body,
      };
      try {
        headers["Twilio-Client-Validation"] = new ValidationToken(
          this.validationClient
        ).fromHttpRequest(validationRequest);
      } catch (err) {
        console.log("Error creating Twilio-Client-Validation header:", err);
        throw err;
      }
    }

    const requestOptions: LastRequestOptions<TData> = {
      method: opts.method,
      url: opts.uri,
      auth: auth,
      params: opts.params,
      data: opts.data,
      headers: opts.headers,
    };

    if (opts.logLevel === "debug") {
      this.logRequest(requestOptions);
    }

    this.lastResponse = undefined;
    this.lastRequest = new Request(requestOptions);

    const timeout = opts.timeout || this.defaultTimeout;
    const redirect = opts.allowRedirects ? "follow" : "manual";

    const fetchResponse = await this.fetchWithRetry(
      url,
      {
        method: opts.method,
        headers,
        body,
        redirect,
      },
      timeout,
      0
    );

    const responseHeaders: Record<string, string> = {};
    fetchResponse.headers.forEach((value, key) => {
      responseHeaders[key] = value;
    });

    const contentType = fetchResponse.headers.get("content-type") || "";
    let responseBody: any;
    if (contentType.includes("application/json")) {
      responseBody = await fetchResponse.json();
    } else {
      const text = await fetchResponse.text();
      try {
        responseBody = JSON.parse(text);
      } catch {
        responseBody = text;
      }
    }

    if (opts.logLevel === "debug") {
      console.log(`response.statusCode: ${fetchResponse.status}`);
      console.log(`response.headers: ${JSON.stringify(responseHeaders)}`);
    }

    this.lastResponse = new Response(
      fetchResponse.status,
      responseBody,
      responseHeaders
    );
    return {
      statusCode: fetchResponse.status,
      body: responseBody,
      headers: responseHeaders,
    };
  }

  private async fetchWithRetry(
    url: string,
    init: RequestInit,
    timeout: number,
    retryCount: number
  ): Promise<globalThis.Response> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...init,
        signal: controller.signal,
      });

      if (
        this.autoRetry &&
        response.status === 429 &&
        retryCount < this.maxRetries
      ) {
        const nextRetry = retryCount + 1;
        const baseDelay = Math.min(
          this.maxRetryDelay,
          DEFAULT_INITIAL_RETRY_INTERVAL_MILLIS * Math.pow(2, nextRetry)
        );
        const delay = Math.floor(baseDelay * Math.random());
        await new Promise((resolve) => setTimeout(resolve, delay));
        return this.fetchWithRetry(url, init, timeout, nextRetry);
      }

      return response;
    } finally {
      clearTimeout(timer);
    }
  }

  filterLoggingHeaders(headers: Headers) {
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
   * A timeout in milliseconds. This will be used as the default request timeout.
   */
  timeout?: number;
  /**
   * Whether to use keep-alive connections
   */
  keepAlive?: boolean;
  /**
   * keepAliveMsecs option (retained for API compatibility)
   */
  keepAliveMsecs?: number;
  /**
   * maxSockets option (retained for API compatibility)
   */
  maxSockets?: number;
  /**
   * maxTotalSockets option (retained for API compatibility)
   */
  maxTotalSockets?: number;
  /**
   * maxFreeSockets option (retained for API compatibility)
   */
  maxFreeSockets?: number;
  /**
   * scheduling option (retained for API compatibility)
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
   */
  validationClient?: ValidationClientOptions;
}

export { RequestClient };
