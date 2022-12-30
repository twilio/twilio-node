/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2 from "../../V2";
import { BucketListInstance } from "./rateLimit/bucket";
/**
 * Options to pass to update a RateLimitInstance
 *
 * @property { string } [description] Description of this Rate Limit
 */
export interface RateLimitContextUpdateOptions {
    description?: string;
}
/**
 * Options to pass to create a RateLimitInstance
 *
 * @property { string } uniqueName Provides a unique and addressable name to be assigned to this Rate Limit, assigned by the developer, to be optionally used in addition to SID. **This value should not contain PII.**
 * @property { string } [description] Description of this Rate Limit
 */
export interface RateLimitListInstanceCreateOptions {
    uniqueName: string;
    description?: string;
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
export interface RateLimitListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: RateLimitInstance, done: (err?: Error) => void) => void;
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
export interface RateLimitListInstanceOptions {
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
export interface RateLimitListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface RateLimitContext {
    buckets: BucketListInstance;
    /**
     * Remove a RateLimitInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a RateLimitInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RateLimitInstance
     */
    fetch(callback?: (error: Error | null, item?: RateLimitInstance) => any): Promise<RateLimitInstance>;
    /**
     * Update a RateLimitInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RateLimitInstance
     */
    update(callback?: (error: Error | null, item?: RateLimitInstance) => any): Promise<RateLimitInstance>;
    /**
     * Update a RateLimitInstance
     *
     * @param { RateLimitContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RateLimitInstance
     */
    update(params: RateLimitContextUpdateOptions, callback?: (error: Error | null, item?: RateLimitInstance) => any): Promise<RateLimitInstance>;
    update(params?: any, callback?: any): Promise<RateLimitInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RateLimitContextSolution {
    serviceSid?: string;
    sid?: string;
}
export declare class RateLimitContextImpl implements RateLimitContext {
    protected _version: V2;
    protected _solution: RateLimitContextSolution;
    protected _uri: string;
    protected _buckets?: BucketListInstance;
    constructor(_version: V2, serviceSid: string, sid: string);
    get buckets(): BucketListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<RateLimitInstance>;
    update(params?: any, callback?: any): Promise<RateLimitInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): RateLimitContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface RateLimitPayload extends TwilioResponsePayload {
    rate_limits: RateLimitResource[];
}
interface RateLimitResource {
    sid?: string | null;
    service_sid?: string | null;
    account_sid?: string | null;
    unique_name?: string | null;
    description?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class RateLimitInstance {
    protected _version: V2;
    protected _solution: RateLimitContextSolution;
    protected _context?: RateLimitContext;
    constructor(_version: V2, payload: RateLimitResource, serviceSid: string, sid?: string);
    /**
     * A string that uniquely identifies this Rate Limit.
     */
    sid?: string | null;
    /**
     * The SID of the Service that the resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * A unique, developer assigned name of this Rate Limit.
     */
    uniqueName?: string | null;
    /**
     * Description of this Rate Limit
     */
    description?: string | null;
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
    /**
     * The URLs of related resources
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a RateLimitInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a RateLimitInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RateLimitInstance
     */
    fetch(callback?: (error: Error | null, item?: RateLimitInstance) => any): Promise<RateLimitInstance>;
    /**
     * Update a RateLimitInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RateLimitInstance
     */
    update(callback?: (error: Error | null, item?: RateLimitInstance) => any): Promise<RateLimitInstance>;
    /**
     * Update a RateLimitInstance
     *
     * @param { RateLimitContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RateLimitInstance
     */
    update(params: RateLimitContextUpdateOptions, callback?: (error: Error | null, item?: RateLimitInstance) => any): Promise<RateLimitInstance>;
    /**
     * Access the buckets.
     */
    buckets(): BucketListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        serviceSid: string | null | undefined;
        accountSid: string | null | undefined;
        uniqueName: string | null | undefined;
        description: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface RateLimitListInstance {
    (sid: string): RateLimitContext;
    get(sid: string): RateLimitContext;
    /**
     * Create a RateLimitInstance
     *
     * @param { RateLimitListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RateLimitInstance
     */
    create(params: RateLimitListInstanceCreateOptions, callback?: (error: Error | null, item?: RateLimitInstance) => any): Promise<RateLimitInstance>;
    create(params: any, callback?: any): Promise<RateLimitInstance>;
    /**
     * Streams RateLimitInstance records from the API.
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
    each(callback?: (item: RateLimitInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams RateLimitInstance records from the API.
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
     * @param { RateLimitListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: RateLimitListInstanceEachOptions, callback?: (item: RateLimitInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of RateLimitInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: RateLimitPage) => any): Promise<RateLimitPage>;
    /**
     * Retrieve a single target page of RateLimitInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: RateLimitPage) => any): Promise<RateLimitPage>;
    getPage(params?: any, callback?: any): Promise<RateLimitPage>;
    /**
     * Lists RateLimitInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: RateLimitInstance[]) => any): Promise<RateLimitInstance[]>;
    /**
     * Lists RateLimitInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { RateLimitListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: RateLimitListInstanceOptions, callback?: (error: Error | null, items: RateLimitInstance[]) => any): Promise<RateLimitInstance[]>;
    list(params?: any, callback?: any): Promise<RateLimitInstance[]>;
    /**
     * Retrieve a single page of RateLimitInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: RateLimitPage) => any): Promise<RateLimitPage>;
    /**
     * Retrieve a single page of RateLimitInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { RateLimitListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: RateLimitListInstancePageOptions, callback?: (error: Error | null, items: RateLimitPage) => any): Promise<RateLimitPage>;
    page(params?: any, callback?: any): Promise<RateLimitPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RateLimitSolution {
    serviceSid?: string;
}
export declare function RateLimitListInstance(version: V2, serviceSid: string): RateLimitListInstance;
export declare class RateLimitPage extends Page<V2, RateLimitPayload, RateLimitResource, RateLimitInstance> {
    /**
     * Initialize the RateLimitPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: RateLimitSolution);
    /**
     * Build an instance of RateLimitInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: RateLimitResource): RateLimitInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
