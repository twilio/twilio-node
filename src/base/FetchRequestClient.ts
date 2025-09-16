import { HttpMethod } from "../interfaces";
import Response from "../http/response";
import Request, {
  Headers,
  RequestOptions as LastRequestOptions,
} from "../http/request";
import AuthStrategy from "../auth_strategy/AuthStrategy";
import { isNode, encodeBase64 } from "./runtime";

// Declare Web APIs that might not be available in all environments
declare const fetch: any;
declare const URLSearchParams: any;
declare const AbortController: any;
declare const setTimeout: any;
declare const clearTimeout: any;

const DEFAULT_CONTENT_TYPE = "application/x-www-form-urlencoded";
const DEFAULT_TIMEOUT = 30000;
const DEFAULT_INITIAL_RETRY_INTERVAL_MILLIS = 100;
const DEFAULT_MAX_RETRY_DELAY = 3000;
const DEFAULT_MAX_RETRIES = 3;

/**
 * Cross-platform HTTP client using fetch API
 * Works in Node.js, Cloudflare Workers, and browsers
 */
class FetchRequestClient {
  defaultTimeout: number;
  lastResponse?: Response<any>;
  lastRequest?: Request<any>;
  autoRetry: boolean;
  maxRetryDelay: number;
  maxRetries: number;

  constructor(opts?: FetchRequestClient.RequestClientOptions) {
    opts = opts || {};
    this.defaultTimeout = opts.timeout || DEFAULT_TIMEOUT;
    this.autoRetry = opts.autoRetry || false;
    this.maxRetryDelay = opts.maxRetryDelay || DEFAULT_MAX_RETRY_DELAY;
    this.maxRetries = opts.maxRetries || DEFAULT_MAX_RETRIES;
  }

  /**
   * Make http request using fetch API
   */
  async request<TData>(
    opts: FetchRequestClient.RequestOptions<TData>
  ): Promise<Response<TData>> {
    if (!opts.method) {
      throw new Error("http method is required");
    }

    if (!opts.uri) {
      throw new Error("uri is required");
    }

    const headers: Headers = opts.headers || {};

    // Set authorization header
    if (opts.username && opts.password) {
      const auth = encodeBase64(opts.username + ":" + opts.password);
      headers.Authorization = "Basic " + auth;
    } else if (opts.authStrategy) {
      headers.Authorization = await opts.authStrategy.getAuthString();
    }

    // Default content type for POST requests
    if ((opts.method as string) === "POST" && !headers["Content-Type"]) {
      headers["Content-Type"] = DEFAULT_CONTENT_TYPE;
    }

    // Build URL with query parameters
    let url = opts.uri;
    if (opts.params) {
      const urlParams = new URLSearchParams();
      Object.entries(opts.params).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => urlParams.append(key, String(v)));
        } else {
          urlParams.append(key, String(value));
        }
      });
      const queryString = urlParams.toString();
      if (queryString) {
        url += (url.includes("?") ? "&" : "?") + queryString;
      }
    }

    // Prepare request body
    let body: string | undefined;
    if (opts.data && (opts.method as string) !== "GET") {
      if (headers["Content-Type"] === "application/json") {
        body = JSON.stringify(opts.data);
      } else if (headers["Content-Type"] === DEFAULT_CONTENT_TYPE) {
        const formData = new URLSearchParams();
        Object.entries(opts.data).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            value.forEach((v) => formData.append(key, String(v)));
          } else {
            formData.append(key, String(value));
          }
        });
        body = formData.toString();
      }
    }

    const requestOptions: LastRequestOptions<TData> = {
      method: opts.method,
      url: opts.uri,
      auth: headers.Authorization,
      params: opts.params,
      data: opts.data,
      headers: opts.headers,
    };

    if (opts.logLevel === "debug") {
      this.logRequest(requestOptions);
    }

    this.lastRequest = new Request(requestOptions);
    this.lastResponse = undefined;

    try {
      // Create fetch options
      const fetchOptions: RequestInit = {
        method: opts.method,
        headers: headers as Record<string, string>,
        body: body,
      };

      // Add timeout support
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        controller.abort();
      }, opts.timeout || this.defaultTimeout);

      fetchOptions.signal = controller.signal;

      let response: any;
      let retryCount = 0;

      // Retry logic
      while (true) {
        try {
          response = await fetch(url, fetchOptions);
          clearTimeout(timeoutId);

          // Handle rate limiting with exponential backoff
          if (response.status === 429 && this.autoRetry && retryCount < this.maxRetries) {
            retryCount++;
            const baseDelay = Math.min(
              this.maxRetryDelay,
              DEFAULT_INITIAL_RETRY_INTERVAL_MILLIS * Math.pow(2, retryCount)
            );
            const delay = Math.floor(baseDelay * Math.random()); // Full jitter backoff
            
            await new Promise((resolve) => setTimeout(resolve, delay));
            continue;
          }

          break;
        } catch (error) {
          clearTimeout(timeoutId);
          if (retryCount < this.maxRetries && this.autoRetry) {
            retryCount++;
            const baseDelay = Math.min(
              this.maxRetryDelay,
              DEFAULT_INITIAL_RETRY_INTERVAL_MILLIS * Math.pow(2, retryCount)
            );
            const delay = Math.floor(baseDelay * Math.random());
            await new Promise((resolve) => setTimeout(resolve, delay));
            continue;
          }
          throw error;
        }
      }

      // Parse response body
      const responseText = await response.text();
      let responseData: any = responseText;
      
      try {
        responseData = JSON.parse(responseText);
      } catch {
        // If JSON parsing fails, keep as text
      }

      // Convert Headers object to plain object
      const responseHeaders: { [key: string]: string } = {};
      response.headers.forEach((value: string, key: string) => {
        responseHeaders[key] = value;
      });

      if (opts.logLevel === "debug") {
        console.log(`response.statusCode: ${response.status}`);
        console.log(`response.headers: ${JSON.stringify(responseHeaders)}`);
      }

      this.lastResponse = new Response(
        response.status,
        responseData,
        responseHeaders
      );

      return {
        statusCode: response.status,
        body: responseData,
        headers: responseHeaders,
      };
    } catch (error) {
      this.lastResponse = undefined;
      throw error;
    }
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
        console.log(`${header}: ${options.headers?.[header]}`)
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

namespace FetchRequestClient {
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
     * A timeout in milliseconds.
     */
    timeout?: number;
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
  }
}

export = FetchRequestClient;