import { HttpMethod } from "../interfaces";
import Response from "../http/response";
import Request, {
  Headers,
  RequestOptions as LastRequestOptions,
} from "../http/request";
import AuthStrategy from "../auth_strategy/AuthStrategy";
import { isNode } from "./runtime";

// Import implementations
import FetchRequestClient from "./FetchRequestClient";

/**
 * Cross-platform RequestClient that automatically chooses the best implementation
 * based on the runtime environment
 */
class RequestClient {
  private implementation: any;
  
  constructor(opts?: RequestClientOptions) {
    if (isNode()) {
      // Try to load Node.js-specific RequestClient
      try {
        const NodeRequestClient = require("./NodeRequestClient");
        this.implementation = new NodeRequestClient(opts);
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
    opts: FetchRequestClient.RequestOptions<TData>
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
    return this.implementation.keepAlive;
  }

  get axios(): any {
    return this.implementation.axios;
  }
}

namespace RequestClient {
  export type RequestOptions<TData = any, TParams = object> = FetchRequestClient.RequestOptions<TData, TParams>;
  export type RequestClientOptions = FetchRequestClient.RequestClientOptions;
}

export = RequestClient;
