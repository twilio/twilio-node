import Domain from "./Domain";
import { RequestOpts } from "./BaseTwilio";
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
export default class Version {
    _domain: Domain;
    _version: Version | string;
    /**
     * @constructor
     *
     * @description Base version object
     *
     * @param {Domain} domain twilio domain
     * @param {Version} version api version
     */
    constructor(domain: Domain, version: string | Version);
    get domain(): Domain;
    /**
     * Generate absolute url from a uri
     *
     * @param  {string} uri uri to transform
     * @return {string} transformed url
     */
    absoluteUrl(uri: string): string;
    /**
     * Generate relative url from a uri
     *
     * @param  {string} uri uri to transform
     * @return {string} transformed url
     */
    relativeUrl(uri: string): string;
    /**
     * Make a request against the domain
     *
     * @param  {object} opts request options
     * @return {Promise} promise that resolves to request response
     */
    request(opts: RequestOpts): Promise<any>;
    /**
     * Create a new record
     * @throws {Error} If response returns non 2xx or 201 status code
     *
     * @param  {object} opts request options
     * @return {Promise} promise that resolves to created record
     */
    create(opts: RequestOpts): Promise<any>;
    /**
     * Fetch a instance of a record
     * @throws {Error} If response returns non 2xx or 3xx status code
     *
     * @param  {object} opts request options
     * @return {Promise} promise that resolves to fetched result
     */
    fetch(opts: RequestOpts): Promise<any>;
    /**
     * Fetch a page of records
     *
     * @param  {object} opts request options
     * @return {Promise} promise that resolves to page of records
     */
    page(opts: RequestOpts): Promise<any>;
    /**
     * Update a record
     * @throws {Error} If response returns non 2xx status code
     *
     * @param  {object} opts request options
     * @return {Promise} promise that resolves to updated result
     */
    update(opts: RequestOpts): Promise<any>;
    /**
     * Delete a record
     * @throws {Error} If response returns a 5xx status
     *
     * @param  {object} opts request options
     * @return {Promise} promise that resolves to true if record was deleted
     */
    remove(opts: RequestOpts): Promise<boolean>;
    /**
     * Process limits for list requests
     *
     * @param {object} [opts] ...
     * @param {number} [opts.limit] The maximum number of items to fetch
     * @param {number} [opts.pageSize] The maximum number of items to return
     *                                  with every request
     */
    readLimits(opts: PageLimitOptions): PageLimit;
    setPromiseCallback(operationPromise: any, callback: any): Promise<any>;
    each<T>(params?: any, callback?: (item: T, done: (err?: Error) => void) => void): void;
    list<T>(params?: any, callback?: (error: Error | null, items: T) => any): Promise<any>;
}
