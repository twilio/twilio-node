import Version from "./Version";
import Response from "../http/response";
import RestException from "./RestException";

/**
 * Token-based pagination metadata structure
 * Used for APIs that return pagination tokens instead of URLs
 */
export interface TokenPaginationPayload {
  [key: string]: any;
  meta: {
    key: string;
    pageSize?: number;
    nextToken?: string | null;
    previousToken?: string | null;
  };
}

interface Solution {
  [name: string]: any;
}

/**
 * TokenPage handles token-based pagination where the API returns
 * nextToken/previousToken strings instead of full URLs.
 *
 * Example response format:
 * {
 *   "meta": {
 *     "key": "items",
 *     "pageSize": 50,
 *     "nextToken": "abc123",
 *     "previousToken": "xyz789"
 *   },
 *   "items": [
 *     { "id": 1, "name": "Item 1" },
 *     { "id": 2, "name": "Item 2" }
 *   ]
 * }
 */
export default class TokenPage<
  TVersion extends Version,
  TPayload extends TokenPaginationPayload,
  TResource,
  TInstance
> {
  instances: TInstance[];
  protected _version: TVersion;
  protected _payload: TPayload;
  protected _solution: Solution;
  private readonly _uri: string;
  private readonly _params: Record<string, any>;

  /**
   * Base page object to maintain request state for token-based pagination.
   *
   * @param version - A twilio version instance
   * @param response - The http response
   * @param uri - The URI for making pagination requests
   * @param params - The request parameters
   * @param solution - path solution
   */
  constructor(
    version: TVersion,
    response: Response<string | TPayload>,
    uri: string,
    params: Record<string, any> = {},
    solution: Solution = {}
  ) {
    const payload = this.processResponse(response);

    this._version = version;
    this._payload = payload;
    this._solution = solution;
    this._uri = uri;
    this._params = params;

    this.instances = this.loadInstances(this.loadPage(payload));
  }

  /**
   * Parse json response from API
   *
   * @param response - API response
   *
   * @throws Error If non 200 status code is returned
   *
   * @returns json parsed response
   */
  processResponse(response: Response<string | TPayload>): TPayload {
    if (response.statusCode !== 200) {
      throw new RestException(response);
    }

    if (typeof response.body === "string") {
      return JSON.parse(response.body);
    }
    return response.body;
  }

  /**
   * Load a page of records from the payload
   *
   * @param payload - json payload
   * @returns the page of records
   */
  loadPage(payload: TPayload): TResource[] {
    if (payload.meta?.key) {
      return payload[payload.meta.key];
    }
    throw new Error(
      "Token pagination requires meta.key to be present in response"
    );
  }

  /**
   * Build a new instance given a json payload
   *
   * @param payload - Payload response from the API
   * @returns instance of a resource
   */
  getInstance(payload: TResource): TInstance {
    throw new Error(
      "TokenPage.getInstance() must be implemented in the derived class"
    );
  }

  /**
   * Load a list of records
   *
   * @param resources - json payload of records
   * @returns list of resources
   */
  loadInstances(resources: TResource[]): TInstance[] {
    const instances: TInstance[] = [];
    resources.forEach((resource) => {
      instances.push(this.getInstance(resource));
    });
    return instances;
  }

  toJSON(): object {
    const clone: Record<string, any> = {};
    Object.entries(this).forEach(([key, value]) => {
      if (!key.startsWith("_") && typeof value !== "function") {
        clone[key] = value;
      }
    });
    return clone;
  }

  /**
   * Returns the key that identifies the collection in the response.
   *
   * @returns the key or undefined if doesn't exist
   */
  get key(): string | undefined {
    if (this._payload.meta && this._payload.meta.key) {
      return this._payload.meta.key;
    }
    return undefined;
  }

  /**
   * Returns the page size or undefined if doesn't exist.
   *
   * @returns the page size or undefined
   */
  get pageSize(): number | undefined {
    if (this._payload.meta && this._payload.meta.pageSize) {
      return this._payload.meta.pageSize;
    }
    return undefined;
  }

  /**
   * Returns the next_token for pagination or undefined if doesn't exist.
   *
   * @returns the next token or undefined
   */
  get nextToken(): string | undefined {
    if (
      this._payload.meta &&
      this._payload.meta.nextToken !== undefined &&
      this._payload.meta.nextToken !== null
    ) {
      return this._payload.meta.nextToken;
    }
    return undefined;
  }

  /**
   * Returns the previous_token for pagination or undefined if doesn't exist.
   *
   * @returns the previous token or undefined
   */
  get previousToken(): string | undefined {
    if (
      this._payload.meta &&
      this._payload.meta.previousToken !== undefined &&
      this._payload.meta.previousToken !== null
    ) {
      return this._payload.meta.previousToken;
    }
    return undefined;
  }

  /**
   * Internal helper to fetch a page using a given token.
   *
   * @param token - The pagination token to use
   * @returns promise that resolves to the page or undefined if no token exists
   */
  private _getPage(
    token: string | undefined
  ): Promise<TokenPage<TVersion, TPayload, TResource, TInstance>> | undefined {
    if (!token) {
      return undefined;
    }

    if (!this._uri) {
      throw new Error("URI must be provided for token pagination");
    }

    const params = { ...this._params, pageToken: token };

    const responsePromise = this._version.page({
      method: "get",
      uri: this._uri,
      params: params,
    });

    return responsePromise.then((response: Response<string | TPayload>) => {
      return new (this.constructor as any)(
        this._version,
        response,
        this._uri,
        this._params,
        this._solution
      );
    });
  }

  /**
   * Fetch the next page of records using token-based pagination.
   * Makes a request to the same URI with pageToken set to nextToken.
   *
   * @returns promise that resolves to next page of results,
   * or undefined if there isn't a nextToken.
   */
  nextPage():
    | Promise<TokenPage<TVersion, TPayload, TResource, TInstance>>
    | undefined {
    return this._getPage(this.nextToken);
  }

  /**
   * Fetch the previous page of records using token-based pagination.
   * Makes a request to the same URI with pageToken set to previousToken.
   *
   * @returns promise that resolves to previous page of results,
   * or undefined if there isn't a previousToken.
   */
  previousPage():
    | Promise<TokenPage<TVersion, TPayload, TResource, TInstance>>
    | undefined {
    return this._getPage(this.previousToken);
  }
}
