import Domain = require("./Domain");
import { RequestOpts } from "./BaseTwilio";

declare class Version {
  constructor(domain: Domain, version: string);

  get domain(): Domain;

  /**
   * Generate absolute url from a uri
   *
   * @param  uri uri to transform
   * @return transformed url
   */
  absoluteUrl(uri: string): string;
  /**
   * Generate relative url from a uri
   *
   * @param  uri uri to transform
   * @return transformed url
   */
  relativeUrl(uri: string): string;
  /**
   * Make a request against the domain
   *
   * @param  opts request options
   * @return promise that resolves to request response
   */
  request(opts: RequestOpts): Promise<any>;
  /**
   * Fetch a instance of a record
   * @throws {Error} If response returns non 2xx or 3xx status code
   *
   * @param  opts request options
   * @return promise that resolves to fetched result
   */
  fetch(opts: RequestOpts): Promise<any>;
  /**
   * Update a record
   * @throws {Error} If response returns non 2xx status code
   *
   * @param  opts request options
   * @return promise that resolves to updated result
   */
  update(opts: RequestOpts): Promise<any>;
  /**
   * Delete a record
   * @throws {Error} If response returns a 5xx status
   *
   * @param  opts request options
   * @return promise that resolves to true if record was deleted
   */
  remove(opts: RequestOpts): Promise<boolean>;
  /**
   * Create a new record
   * @throws {Error} If response returns non 2xx or 201 status code
   *
   * @param  opts request options
   * @return promise that resolves to created record
   */
  create(opts: RequestOpts): Promise<any>;
  /**
   * Fetch a page of records
   *
   * @param  opts request options
   * @return promise that resolves to page of records
   */
  page(opts: RequestOpts): Promise<any>;
  /**
   * Process limits for list requests
   *
   * @param opts Page limit options passed to the request
   */
  readLimits(opts: Version.PageLimitOptions): Version.PageLimit;

  setPromiseCallback(operationPromise: any, callback: any): Promise<any>;
  each<T>(
    params?: any,
    callback?: (item: T, done: (err?: Error) => void) => void
  ): void;
  list<T>(
    params?: any,
    callback?: (error: Error | null, items: T) => any
  ): Promise<T>;
}

declare namespace Version {
  export interface PageLimitOptions {
    /**
     * The maximum number of items to fetch
     */
    limit: number;
    /**
     * The maximum number of items to return with every request
     */
    pageSize: number;
  }

  export interface PageLimit {
    limit: number;
    pageSize: number;
  }
}

export = Version;
