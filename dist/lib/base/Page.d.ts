import Version from "./Version";
import Response from "../http/response";
export interface TwilioResponsePayload {
    first_page_uri: string;
    next_page_uri: string;
    page: number;
    page_size: number;
    previous_page_uri: string;
    uri: string;
    meta?: {
        key?: string;
        next_page_url?: string;
        previous_page_url?: string;
    };
}
interface Solution {
    [name: string]: any;
}
declare type META_KEYS = "end" | "first_page_uri" | "last_page_uri" | "next_page_uri" | "num_pages" | "page" | "page_size" | "previous_page_uri" | "start" | "total" | "uri";
export default class Page<TVersion extends Version, TPayload extends TwilioResponsePayload, TResource, TInstance> {
    nextPageUrl: string;
    previousPageUrl: string;
    instances: TInstance[];
    _version: TVersion;
    _payload: TPayload;
    _solution: Solution;
    /**
     * @constructor
     *
     * @description Base page object to maintain request state.
     *
     * @param {Version} version - A twilio version instance
     * @param {Object} response - The http response
     * @param {Object} solution - path solution
     */
    constructor(version: TVersion, response: Response<string | TPayload>, solution: Solution);
    /**
     * @constant META_KEYS
     * @description meta keys returned in a list request
     */
    static META_KEYS: META_KEYS[];
    /**
     * Get the url of the previous page of records
     *
     * @return {string|undefined} url of the previous page, or undefined if the
     * previous page URI/URL is not defined.
     */
    getPreviousPageUrl(): string | undefined;
    /**
     * Get the url of the next page of records
     *
     * @return {string|undefined} url of the next page, or undefined if the
     * next page URI/URL is not defined.
     */
    getNextPageUrl(): string | undefined;
    /**
     * Build a new instance given a json payload
     * @abstract
     *
     * @param {object} payload - Payload response from the API
     * @return {object} instance of a resource
     */
    getInstance(payload: any): void;
    /**
     * Load a list of records
     *
     * @param  {object} resources json payload of records
     * @return {Array} list of resources
     */
    loadInstances(resources: TResource[]): TInstance[];
    /**
     * Fetch the next page of records
     *
     * @return {promise|undefined} promise that resolves to next page of results,
     * or undefined if there isn't a nextPageUrl undefined.
     */
    nextPage(): Promise<Page<TVersion, TPayload, TResource, TInstance>> | undefined;
    /**
     * Fetch the previous page of records
     *
     * @return {promise|undefined} promise that resolves to previous page of
     * results, or undefined if there isn't a previousPageUrl undefined.
     */
    previousPage(): Promise<Page<TVersion, TPayload, TResource, TInstance>> | undefined;
    /**
     * Parse json response from API
     * @throws {Error} If non 200 status code is returned
     *
     * @param  {object} response API response
     * @return {object} json parsed response
     */
    processResponse(response: Response<string | TPayload>): TPayload;
    /**
     * Load a page of records
     * @throws {Error} If records cannot be deserialized
     *
     * @param  {object} payload json payload
     * @return {array} the page of records
     */
    loadPage(payload: TPayload): TResource[];
    forOwn(obj: object, iteratee: (val: any, key: string, object: any) => void): void;
    toJSON(): object;
}
export {};
