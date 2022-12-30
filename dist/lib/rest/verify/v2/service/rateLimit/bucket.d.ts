/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
/**
 * Options to pass to update a BucketInstance
 *
 * @property { number } [max] Maximum number of requests permitted in during the interval.
 * @property { number } [interval] Number of seconds that the rate limit will be enforced over.
 */
export interface BucketContextUpdateOptions {
    max?: number;
    interval?: number;
}
/**
 * Options to pass to create a BucketInstance
 *
 * @property { number } max Maximum number of requests permitted in during the interval.
 * @property { number } interval Number of seconds that the rate limit will be enforced over.
 */
export interface BucketListInstanceCreateOptions {
    max: number;
    interval: number;
}
/**
 * Options to pass to each
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface BucketListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: BucketInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface BucketListInstanceOptions {
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface BucketListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface BucketContext {
    /**
     * Remove a BucketInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a BucketInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BucketInstance
     */
    fetch(callback?: (error: Error | null, item?: BucketInstance) => any): Promise<BucketInstance>;
    /**
     * Update a BucketInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BucketInstance
     */
    update(callback?: (error: Error | null, item?: BucketInstance) => any): Promise<BucketInstance>;
    /**
     * Update a BucketInstance
     *
     * @param { BucketContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BucketInstance
     */
    update(params: BucketContextUpdateOptions, callback?: (error: Error | null, item?: BucketInstance) => any): Promise<BucketInstance>;
    update(params?: any, callback?: any): Promise<BucketInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface BucketContextSolution {
    serviceSid?: string;
    rateLimitSid?: string;
    sid?: string;
}
export declare class BucketContextImpl implements BucketContext {
    protected _version: V2;
    protected _solution: BucketContextSolution;
    protected _uri: string;
    constructor(_version: V2, serviceSid: string, rateLimitSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<BucketInstance>;
    update(params?: any, callback?: any): Promise<BucketInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): BucketContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface BucketPayload extends TwilioResponsePayload {
    buckets: BucketResource[];
}
interface BucketResource {
    sid?: string | null;
    rate_limit_sid?: string | null;
    service_sid?: string | null;
    account_sid?: string | null;
    max?: number | null;
    interval?: number | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class BucketInstance {
    protected _version: V2;
    protected _solution: BucketContextSolution;
    protected _context?: BucketContext;
    constructor(_version: V2, payload: BucketResource, serviceSid: string, rateLimitSid: string, sid?: string);
    /**
     * A string that uniquely identifies this Bucket.
     */
    sid?: string | null;
    /**
     * Rate Limit Sid.
     */
    rateLimitSid?: string | null;
    /**
     * The SID of the Service that the resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * Max number of requests.
     */
    max?: number | null;
    /**
     * Number of seconds that the rate limit will be enforced over.
     */
    interval?: number | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The URL of this resource.
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a BucketInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a BucketInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BucketInstance
     */
    fetch(callback?: (error: Error | null, item?: BucketInstance) => any): Promise<BucketInstance>;
    /**
     * Update a BucketInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BucketInstance
     */
    update(callback?: (error: Error | null, item?: BucketInstance) => any): Promise<BucketInstance>;
    /**
     * Update a BucketInstance
     *
     * @param { BucketContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BucketInstance
     */
    update(params: BucketContextUpdateOptions, callback?: (error: Error | null, item?: BucketInstance) => any): Promise<BucketInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        rateLimitSid: string | null | undefined;
        serviceSid: string | null | undefined;
        accountSid: string | null | undefined;
        max: number | null | undefined;
        interval: number | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface BucketListInstance {
    (sid: string): BucketContext;
    get(sid: string): BucketContext;
    /**
     * Create a BucketInstance
     *
     * @param { BucketListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BucketInstance
     */
    create(params: BucketListInstanceCreateOptions, callback?: (error: Error | null, item?: BucketInstance) => any): Promise<BucketInstance>;
    create(params: any, callback?: any): Promise<BucketInstance>;
    /**
     * Streams BucketInstance records from the API.
     *
     * This operation lazily loads records as efficiently as possible until the limit
     * is reached.
     *
     * The results are passed into the callback function, so this operation is memory
     * efficient.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: BucketInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams BucketInstance records from the API.
     *
     * This operation lazily loads records as efficiently as possible until the limit
     * is reached.
     *
     * The results are passed into the callback function, so this operation is memory
     * efficient.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { BucketListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: BucketListInstanceEachOptions, callback?: (item: BucketInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of BucketInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: BucketPage) => any): Promise<BucketPage>;
    /**
     * Retrieve a single target page of BucketInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: BucketPage) => any): Promise<BucketPage>;
    getPage(params?: any, callback?: any): Promise<BucketPage>;
    /**
     * Lists BucketInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: BucketInstance[]) => any): Promise<BucketInstance[]>;
    /**
     * Lists BucketInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { BucketListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: BucketListInstanceOptions, callback?: (error: Error | null, items: BucketInstance[]) => any): Promise<BucketInstance[]>;
    list(params?: any, callback?: any): Promise<BucketInstance[]>;
    /**
     * Retrieve a single page of BucketInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: BucketPage) => any): Promise<BucketPage>;
    /**
     * Retrieve a single page of BucketInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { BucketListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: BucketListInstancePageOptions, callback?: (error: Error | null, items: BucketPage) => any): Promise<BucketPage>;
    page(params?: any, callback?: any): Promise<BucketPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface BucketSolution {
    serviceSid?: string;
    rateLimitSid?: string;
}
export declare function BucketListInstance(version: V2, serviceSid: string, rateLimitSid: string): BucketListInstance;
export declare class BucketPage extends Page<V2, BucketPayload, BucketResource, BucketInstance> {
    /**
     * Initialize the BucketPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: BucketSolution);
    /**
     * Build an instance of BucketInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: BucketResource): BucketInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
