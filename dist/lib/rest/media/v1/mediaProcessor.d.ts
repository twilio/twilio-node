/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
declare type MediaProcessorOrder = "asc" | "desc";
declare type MediaProcessorStatus = "failed" | "started" | "ended";
declare type MediaProcessorUpdateStatus = "ended";
/**
 * Options to pass to update a MediaProcessorInstance
 *
 * @property { MediaProcessorUpdateStatus } status
 */
export interface MediaProcessorContextUpdateOptions {
    status: MediaProcessorUpdateStatus;
}
/**
 * Options to pass to create a MediaProcessorInstance
 *
 * @property { string } extension The [Media Extension](/docs/live/api/media-extensions-overview) name or URL. Ex: `video-composer-v2`
 * @property { string } extensionContext The context of the Media Extension, represented as a JSON dictionary. See the documentation for the specific [Media Extension](/docs/live/api/media-extensions-overview) you are using for more information about the context to send.
 * @property { any } [extensionEnvironment] User-defined environment variables for the Media Extension, represented as a JSON dictionary of key/value strings. See the documentation for the specific [Media Extension](/docs/live/api/media-extensions-overview) you are using for more information about whether you need to provide this.
 * @property { string } [statusCallback] The URL to which Twilio will send asynchronous webhook requests for every MediaProcessor event. See [Status Callbacks](/docs/live/status-callbacks) for details.
 * @property { string } [statusCallbackMethod] The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`.
 * @property { number } [maxDuration] The maximum time, in seconds, that the MediaProcessor can run before automatically ends. The default value is 300 seconds, and the maximum value is 90000 seconds. Once this maximum duration is reached, Twilio will end the MediaProcessor, regardless of whether media is still streaming.
 */
export interface MediaProcessorListInstanceCreateOptions {
    extension: string;
    extensionContext: string;
    extensionEnvironment?: any;
    statusCallback?: string;
    statusCallbackMethod?: string;
    maxDuration?: number;
}
/**
 * Options to pass to each
 *
 * @property { MediaProcessorOrder } [order] The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default.
 * @property { MediaProcessorStatus } [status] Status to filter by, with possible values `started`, `ended` or `failed`.
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
export interface MediaProcessorListInstanceEachOptions {
    order?: MediaProcessorOrder;
    status?: MediaProcessorStatus;
    pageSize?: number;
    callback?: (item: MediaProcessorInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { MediaProcessorOrder } [order] The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default.
 * @property { MediaProcessorStatus } [status] Status to filter by, with possible values `started`, `ended` or `failed`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface MediaProcessorListInstanceOptions {
    order?: MediaProcessorOrder;
    status?: MediaProcessorStatus;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { MediaProcessorOrder } [order] The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default.
 * @property { MediaProcessorStatus } [status] Status to filter by, with possible values `started`, `ended` or `failed`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface MediaProcessorListInstancePageOptions {
    order?: MediaProcessorOrder;
    status?: MediaProcessorStatus;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface MediaProcessorContext {
    /**
     * Fetch a MediaProcessorInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MediaProcessorInstance
     */
    fetch(callback?: (error: Error | null, item?: MediaProcessorInstance) => any): Promise<MediaProcessorInstance>;
    /**
     * Update a MediaProcessorInstance
     *
     * @param { MediaProcessorContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MediaProcessorInstance
     */
    update(params: MediaProcessorContextUpdateOptions, callback?: (error: Error | null, item?: MediaProcessorInstance) => any): Promise<MediaProcessorInstance>;
    update(params: any, callback?: any): Promise<MediaProcessorInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface MediaProcessorContextSolution {
    sid?: string;
}
export declare class MediaProcessorContextImpl implements MediaProcessorContext {
    protected _version: V1;
    protected _solution: MediaProcessorContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    fetch(callback?: any): Promise<MediaProcessorInstance>;
    update(params: any, callback?: any): Promise<MediaProcessorInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): MediaProcessorContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare type MediaProcessorStatusCallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
interface MediaProcessorPayload extends TwilioResponsePayload {
    media_processors: MediaProcessorResource[];
}
interface MediaProcessorResource {
    account_sid?: string | null;
    sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    extension?: string | null;
    extension_context?: string | null;
    status?: MediaProcessorStatus;
    url?: string | null;
    ended_reason?: string | null;
    status_callback?: string | null;
    status_callback_method?: MediaProcessorStatusCallbackMethod;
    max_duration?: number | null;
}
export declare class MediaProcessorInstance {
    protected _version: V1;
    protected _solution: MediaProcessorContextSolution;
    protected _context?: MediaProcessorContext;
    constructor(_version: V1, payload: MediaProcessorResource, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The Media Extension name or URL
     */
    extension?: string | null;
    /**
     * The Media Extension context
     */
    extensionContext?: string | null;
    status?: MediaProcessorStatus;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    /**
     * The reason why a MediaProcessor ended
     */
    endedReason?: string | null;
    /**
     * The URL to which Twilio will send MediaProcessor event updates
     */
    statusCallback?: string | null;
    /**
     * The HTTP method Twilio should use to call the `status_callback` URL
     */
    statusCallbackMethod?: MediaProcessorStatusCallbackMethod;
    /**
     * Maximum MediaProcessor duration in seconds
     */
    maxDuration?: number | null;
    private get _proxy();
    /**
     * Fetch a MediaProcessorInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MediaProcessorInstance
     */
    fetch(callback?: (error: Error | null, item?: MediaProcessorInstance) => any): Promise<MediaProcessorInstance>;
    /**
     * Update a MediaProcessorInstance
     *
     * @param { MediaProcessorContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MediaProcessorInstance
     */
    update(params: MediaProcessorContextUpdateOptions, callback?: (error: Error | null, item?: MediaProcessorInstance) => any): Promise<MediaProcessorInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        sid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        extension: string | null | undefined;
        extensionContext: string | null | undefined;
        status: MediaProcessorStatus | undefined;
        url: string | null | undefined;
        endedReason: string | null | undefined;
        statusCallback: string | null | undefined;
        statusCallbackMethod: MediaProcessorStatusCallbackMethod | undefined;
        maxDuration: number | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface MediaProcessorListInstance {
    (sid: string): MediaProcessorContext;
    get(sid: string): MediaProcessorContext;
    /**
     * Create a MediaProcessorInstance
     *
     * @param { MediaProcessorListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MediaProcessorInstance
     */
    create(params: MediaProcessorListInstanceCreateOptions, callback?: (error: Error | null, item?: MediaProcessorInstance) => any): Promise<MediaProcessorInstance>;
    create(params: any, callback?: any): Promise<MediaProcessorInstance>;
    /**
     * Streams MediaProcessorInstance records from the API.
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
    each(callback?: (item: MediaProcessorInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams MediaProcessorInstance records from the API.
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
     * @param { MediaProcessorListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: MediaProcessorListInstanceEachOptions, callback?: (item: MediaProcessorInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of MediaProcessorInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: MediaProcessorPage) => any): Promise<MediaProcessorPage>;
    /**
     * Retrieve a single target page of MediaProcessorInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: MediaProcessorPage) => any): Promise<MediaProcessorPage>;
    getPage(params?: any, callback?: any): Promise<MediaProcessorPage>;
    /**
     * Lists MediaProcessorInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: MediaProcessorInstance[]) => any): Promise<MediaProcessorInstance[]>;
    /**
     * Lists MediaProcessorInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MediaProcessorListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: MediaProcessorListInstanceOptions, callback?: (error: Error | null, items: MediaProcessorInstance[]) => any): Promise<MediaProcessorInstance[]>;
    list(params?: any, callback?: any): Promise<MediaProcessorInstance[]>;
    /**
     * Retrieve a single page of MediaProcessorInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: MediaProcessorPage) => any): Promise<MediaProcessorPage>;
    /**
     * Retrieve a single page of MediaProcessorInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MediaProcessorListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: MediaProcessorListInstancePageOptions, callback?: (error: Error | null, items: MediaProcessorPage) => any): Promise<MediaProcessorPage>;
    page(params?: any, callback?: any): Promise<MediaProcessorPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface MediaProcessorSolution {
}
export declare function MediaProcessorListInstance(version: V1): MediaProcessorListInstance;
export declare class MediaProcessorPage extends Page<V1, MediaProcessorPayload, MediaProcessorResource, MediaProcessorInstance> {
    /**
     * Initialize the MediaProcessorPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: MediaProcessorSolution);
    /**
     * Build an instance of MediaProcessorInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: MediaProcessorResource): MediaProcessorInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
