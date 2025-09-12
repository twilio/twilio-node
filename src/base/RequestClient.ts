import { HttpMethod } from "../interfaces";
import Response from "../http/response";
import Request, {
  Headers,
  RequestOptions as LastRequestOptions,
} from "../http/request";
import AuthStrategy from "../auth_strategy/AuthStrategy";
import { isNode } from "./runtime";
import FetchRequestClient from "./FetchRequestClient";

// Declare Node.js-specific globals that might not be available in all environments
declare const require: any;
declare const process: any;
declare const Buffer: any;

// Interface definitions
interface RequestOptions<TData = any, TParams = object> {
  method: HttpMethod;
  uri: string;
  username?: string;
  password?: string;
  authStrategy?: AuthStrategy;
  headers?: Headers;
  params?: TParams;
  data?: TData;
  timeout?: number;
  allowRedirects?: boolean;
  forever?: boolean;
  logLevel?: string;
}

interface RequestClientOptions {
  timeout?: number;
  keepAlive?: boolean;
  keepAliveMsecs?: number;
  maxSockets?: number;
  maxTotalSockets?: number;
  maxFreeSockets?: number;
  scheduling?: "fifo" | "lifo" | undefined;
  ca?: string | any;
  autoRetry?: boolean;
  maxRetryDelay?: number;
  maxRetries?: number;
  validationClient?: any;
}

/**
 * Cross-platform RequestClient that automatically chooses the best implementation
 * based on the runtime environment
 */
class RequestClient {
  private implementation: any;
  
  constructor(opts?: RequestClientOptions) {
    if (isNode()) {
      // Try to use original Node.js implementation first
      try {
        // Import axios and related modules dynamically
        const axios = require("axios");
        const fs = require("fs");
        const HttpsProxyAgent = require("https-proxy-agent");
        const qs = require("qs");
        const https = require("https");
        const ValidationToken = require("../jwt/validation/ValidationToken");
        
        // If we can load Node.js modules, use the inline Node.js implementation
        this.implementation = new NodeRequestClientInline(opts, {
          axios,
          fs,
          HttpsProxyAgent,
          qs,
          https,
          ValidationToken
        });
      } catch (error) {
        // Fall back to fetch-based client if Node.js modules aren't available
        this.implementation = new FetchRequestClient(opts);
      }
    } else {
      // Use fetch-based client for Workers and browsers
      this.implementation = new FetchRequestClient(opts);
    }
  }

  async request<TData>(
    opts: RequestOptions<TData>
  ): Promise<Response<TData>> {
    return this.implementation.request(opts);
  }

  get defaultTimeout(): number {
    return this.implementation.defaultTimeout;
  }

  get lastResponse(): Response<any> | undefined {
    return this.implementation.lastResponse;
  }

  get lastRequest(): Request<any> | undefined {
    return this.implementation.lastRequest;
  }

  get autoRetry(): boolean {
    return this.implementation.autoRetry;
  }

  get maxRetryDelay(): number {
    return this.implementation.maxRetryDelay;
  }

  get maxRetries(): number {
    return this.implementation.maxRetries;
  }

  get keepAlive(): boolean {
    return this.implementation.keepAlive || false;
  }

  get axios(): any {
    return this.implementation.axios;
  }
}

/**
 * Inline Node.js RequestClient implementation to avoid import issues
 */
class NodeRequestClientInline {
  defaultTimeout: number;
  axios: any;
  lastResponse?: Response<any>;
  lastRequest?: Request<any>;
  autoRetry: boolean;
  maxRetryDelay: number;
  maxRetries: number;
  keepAlive: boolean;
  private modules: any;

  constructor(opts: RequestClientOptions = {}, modules: any) {
    this.modules = modules;
    const { axios, fs, HttpsProxyAgent, qs, https } = modules;
    
    const DEFAULT_TIMEOUT = 30000;
    const DEFAULT_MAX_RETRY_DELAY = 3000;
    const DEFAULT_MAX_RETRIES = 3;
    const DEFAULT_MAX_SOCKETS = 20;
    const DEFAULT_MAX_FREE_SOCKETS = 5;
    const DEFAULT_MAX_TOTAL_SOCKETS = 100;
    
    this.defaultTimeout = opts.timeout || DEFAULT_TIMEOUT;
    this.autoRetry = opts.autoRetry || false;
    this.maxRetryDelay = opts.maxRetryDelay || DEFAULT_MAX_RETRY_DELAY;
    this.maxRetries = opts.maxRetries || DEFAULT_MAX_RETRIES;
    this.keepAlive = opts.keepAlive !== false;

    // construct an https agent
    let agentOpts = {
      timeout: this.defaultTimeout,
      keepAlive: this.keepAlive,
      keepAliveMsecs: opts.keepAliveMsecs,
      maxSockets: opts.maxSockets || DEFAULT_MAX_SOCKETS,
      maxTotalSockets: opts.maxTotalSockets || DEFAULT_MAX_TOTAL_SOCKETS,
      maxFreeSockets: opts.maxFreeSockets || DEFAULT_MAX_FREE_SOCKETS,
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
      agent = HttpsProxyAgent(process.env.HTTP_PROXY);
    } else {
      agent = new https.Agent(agentOpts);
    }

    // construct an axios instance
    this.axios = axios.create();
    this.axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    this.axios.defaults.httpsAgent = agent;
    
    if (opts.autoRetry) {
      this.axios.interceptors.response.use(
        this.getExponentialBackoffResponseHandler(this.axios, {
          maxIntervalMillis: this.maxRetryDelay,
          maxRetries: this.maxRetries,
        })
      );
    }
  }

  private getExponentialBackoffResponseHandler(axios: any, opts: any) {
    const maxIntervalMillis = opts.maxIntervalMillis;
    const maxRetries = opts.maxRetries;

    return function (res: any) {
      const config = res.config;

      if (res.status !== 429) {
        return res;
      }

      const retryCount = (config.retryCount || 0) + 1;
      if (retryCount <= maxRetries) {
        config.retryCount = retryCount;
        const baseDelay = Math.min(
          maxIntervalMillis,
          100 * Math.pow(2, retryCount)
        );
        const delay = Math.floor(baseDelay * Math.random());

        return new Promise((resolve: any) => {
          setTimeout(() => resolve(axios(config)), delay);
        });
      }
      return res;
    };
  }

  async request<TData>(
    opts: RequestOptions<TData>
  ): Promise<Response<TData>> {
    const { qs } = this.modules;
    
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

    const options = {
      timeout: opts.timeout || this.defaultTimeout,
      maxRedirects: opts.allowRedirects ? 10 : 0,
      url: opts.uri,
      method: opts.method,
      headers: opts.headers,
      proxy: false,
      validateStatus: (status: number) => status >= 100 && status < 600,
    };

    if (opts.data && (options as any).headers) {
      if (
        (options as any).headers["Content-Type"] === "application/x-www-form-urlencoded"
      ) {
        (options as any).data = qs.stringify(opts.data, { arrayFormat: "repeat" });
      } else if ((options as any).headers["Content-Type"] === "application/json") {
        (options as any).data = opts.data;
      }
    }

    if (opts.params) {
      (options as any).params = opts.params;
      (options as any).paramsSerializer = (params: any) => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      };
    }

    const requestOptions: LastRequestOptions<TData> = {
      method: opts.method,
      url: opts.uri,
      auth: auth,
      params: (options as any).params,
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
      .then((response: any) => {
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
      .catch((error: any) => {
        _this.lastResponse = undefined;
        throw error;
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
        console.log(`${header}: ${(options.headers as any)[header]}`)
      );
    }

    console.log("-- END Twilio API Request --");
  }

  private filterLoggingHeaders(headers: Headers) {
    return Object.keys(headers).filter((header) => {
      return !header.toLowerCase().includes("authorization");
    });
  }
}

namespace RequestClient {
  export type RequestOptions<TData = any, TParams = object> = {
    method: HttpMethod;
    uri: string;
    username?: string;
    password?: string;
    authStrategy?: AuthStrategy;
    headers?: Headers;
    params?: TParams;
    data?: TData;
    timeout?: number;
    allowRedirects?: boolean;
    forever?: boolean;
    logLevel?: string;
  };
  export type RequestClientOptions = {
    timeout?: number;
    keepAlive?: boolean;
    keepAliveMsecs?: number;
    maxSockets?: number;
    maxTotalSockets?: number;
    maxFreeSockets?: number;
    scheduling?: "fifo" | "lifo" | undefined;
    ca?: string | any;
    autoRetry?: boolean;
    maxRetryDelay?: number;
    maxRetries?: number;
    validationClient?: any;
  };
}

export = RequestClient;