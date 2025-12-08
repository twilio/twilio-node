import Page, { TwilioResponsePayload } from "./Page";
import Version from "./Version";
import Response from "../http/response";

/**
 * Token-based pagination metadata structure
 * Used for APIs that return pagination tokens instead of URLs
 */
export interface TokenPaginationPayload extends TwilioResponsePayload {
  meta: {
    key: string;
    pageSize?: number;
    nextToken?: string | null;
    previousToken?: string | null;
  };
}

interface Solution {
  [name: string]: any;
  _baseUri?: string;
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
> extends Page<TVersion, TPayload, TResource, TInstance> {

  /**
   * Base page object to maintain request state for token-based pagination.
   *
   * @param version - A twilio version instance
   * @param response - The http response
   * @param solution - path solution (will be modified to include _baseUri)
   * @param baseUri - The base URI for constructing pagination URLs with tokens
   */
  constructor(
    version: TVersion,
    response: Response<string | TPayload>,
    solution: Solution,
    baseUri: string
  ) {
    // Store baseUri in solution so it's available during parent constructor
    solution._baseUri = baseUri;
    super(version, response, solution);
  }

  /**
   * Get the url of the previous page of records using previousToken
   *
   * @returns url of the previous page with token, or undefined if no previous token
   */
  getPreviousPageUrl(): string | undefined {
    if (
      this._payload.meta &&
      this._payload.meta.previousToken !== undefined &&
      this._payload.meta.previousToken !== null
    ) {
      return this.buildUrlWithToken(this._payload.meta.previousToken);
    }

    return undefined;
  }

  /**
   * Get the url of the next page of records using nextToken
   *
   * @returns url of the next page with token, or undefined if no next token
   */
  getNextPageUrl(): string | undefined {
    if (
      this._payload.meta &&
      this._payload.meta.nextToken !== undefined &&
      this._payload.meta.nextToken !== null
    ) {
      return this.buildUrlWithToken(this._payload.meta.nextToken);
    }

    return undefined;
  }

  /**
   * Build a URL with the given page token
   *
   * @param token - The pagination token
   * @returns Full URL with token as query parameter
   */
  protected buildUrlWithToken(token: string): string {
    const baseUri = this._solution._baseUri || '';
    const separator = baseUri.includes('?') ? '&' : '?';
    return this._version._domain.absoluteUrl(
      `${baseUri}${separator}PageToken=${encodeURIComponent(token)}`
    );
  }
}
