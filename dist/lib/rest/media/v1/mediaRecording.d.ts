/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
declare type MediaRecordingFormat = "mp4" | "webm";
declare type MediaRecordingOrder = "asc" | "desc";
declare type MediaRecordingStatus = "processing" | "completed" | "deleted" | "failed";
/**
 * Options to pass to each
 *
 * @property { MediaRecordingOrder } [order] The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default.
 * @property { MediaRecordingStatus } [status] Status to filter by, with possible values `processing`, `completed`, `deleted`, or `failed`.
 * @property { string } [processorSid] SID of a MediaProcessor to filter by.
 * @property { string } [sourceSid] SID of a MediaRecording source to filter by.
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
export interface MediaRecordingListInstanceEachOptions {
    order?: MediaRecordingOrder;
    status?: MediaRecordingStatus;
    processorSid?: string;
    sourceSid?: string;
    pageSize?: number;
    callback?: (item: MediaRecordingInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { MediaRecordingOrder } [order] The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default.
 * @property { MediaRecordingStatus } [status] Status to filter by, with possible values `processing`, `completed`, `deleted`, or `failed`.
 * @property { string } [processorSid] SID of a MediaProcessor to filter by.
 * @property { string } [sourceSid] SID of a MediaRecording source to filter by.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface MediaRecordingListInstanceOptions {
    order?: MediaRecordingOrder;
    status?: MediaRecordingStatus;
    processorSid?: string;
    sourceSid?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { MediaRecordingOrder } [order] The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default.
 * @property { MediaRecordingStatus } [status] Status to filter by, with possible values `processing`, `completed`, `deleted`, or `failed`.
 * @property { string } [processorSid] SID of a MediaProcessor to filter by.
 * @property { string } [sourceSid] SID of a MediaRecording source to filter by.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface MediaRecordingListInstancePageOptions {
    order?: MediaRecordingOrder;
    status?: MediaRecordingStatus;
    processorSid?: string;
    sourceSid?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface MediaRecordingContext {
    /**
     * Remove a MediaRecordingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a MediaRecordingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MediaRecordingInstance
     */
    fetch(callback?: (error: Error | null, item?: MediaRecordingInstance) => any): Promise<MediaRecordingInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface MediaRecordingContextSolution {
    sid?: string;
}
export declare class MediaRecordingContextImpl implements MediaRecordingContext {
    protected _version: V1;
    protected _solution: MediaRecordingContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<MediaRecordingInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): MediaRecordingContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare type MediaRecordingStatusCallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
interface MediaRecordingPayload extends TwilioResponsePayload {
    media_recordings: MediaRecordingResource[];
}
interface MediaRecordingResource {
    account_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    duration?: number | null;
    format?: MediaRecordingFormat;
    links?: object | null;
    processor_sid?: string | null;
    resolution?: string | null;
    source_sid?: string | null;
    sid?: string | null;
    media_size?: number | null;
    status?: MediaRecordingStatus;
    status_callback?: string | null;
    status_callback_method?: MediaRecordingStatusCallbackMethod;
    url?: string | null;
}
export declare class MediaRecordingInstance {
    protected _version: V1;
    protected _solution: MediaRecordingContextSolution;
    protected _context?: MediaRecordingContext;
    constructor(_version: V1, payload: MediaRecordingResource, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The duration of the MediaRecording
     */
    duration?: number | null;
    format?: MediaRecordingFormat;
    /**
     * The URLs of related resources
     */
    links?: object | null;
    /**
     * The SID of the MediaProcessor
     */
    processorSid?: string | null;
    /**
     * The dimensions of the video image in pixels
     */
    resolution?: string | null;
    /**
     * The SID of the resource that generated the original media
     */
    sourceSid?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The size of the recording media
     */
    mediaSize?: number | null;
    status?: MediaRecordingStatus;
    /**
     * The URL to which Twilio will send MediaRecording event updates
     */
    statusCallback?: string | null;
    /**
     * The HTTP method Twilio should use to call the `status_callback` URL
     */
    statusCallbackMethod?: MediaRecordingStatusCallbackMethod;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a MediaRecordingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a MediaRecordingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MediaRecordingInstance
     */
    fetch(callback?: (error: Error | null, item?: MediaRecordingInstance) => any): Promise<MediaRecordingInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        duration: number | null | undefined;
        format: MediaRecordingFormat | undefined;
        links: object | null | undefined;
        processorSid: string | null | undefined;
        resolution: string | null | undefined;
        sourceSid: string | null | undefined;
        sid: string | null | undefined;
        mediaSize: number | null | undefined;
        status: MediaRecordingStatus | undefined;
        statusCallback: string | null | undefined;
        statusCallbackMethod: MediaRecordingStatusCallbackMethod | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface MediaRecordingListInstance {
    (sid: string): MediaRecordingContext;
    get(sid: string): MediaRecordingContext;
    /**
     * Streams MediaRecordingInstance records from the API.
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
    each(callback?: (item: MediaRecordingInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams MediaRecordingInstance records from the API.
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
     * @param { MediaRecordingListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: MediaRecordingListInstanceEachOptions, callback?: (item: MediaRecordingInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of MediaRecordingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: MediaRecordingPage) => any): Promise<MediaRecordingPage>;
    /**
     * Retrieve a single target page of MediaRecordingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: MediaRecordingPage) => any): Promise<MediaRecordingPage>;
    getPage(params?: any, callback?: any): Promise<MediaRecordingPage>;
    /**
     * Lists MediaRecordingInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: MediaRecordingInstance[]) => any): Promise<MediaRecordingInstance[]>;
    /**
     * Lists MediaRecordingInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MediaRecordingListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: MediaRecordingListInstanceOptions, callback?: (error: Error | null, items: MediaRecordingInstance[]) => any): Promise<MediaRecordingInstance[]>;
    list(params?: any, callback?: any): Promise<MediaRecordingInstance[]>;
    /**
     * Retrieve a single page of MediaRecordingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: MediaRecordingPage) => any): Promise<MediaRecordingPage>;
    /**
     * Retrieve a single page of MediaRecordingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MediaRecordingListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: MediaRecordingListInstancePageOptions, callback?: (error: Error | null, items: MediaRecordingPage) => any): Promise<MediaRecordingPage>;
    page(params?: any, callback?: any): Promise<MediaRecordingPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface MediaRecordingSolution {
}
export declare function MediaRecordingListInstance(version: V1): MediaRecordingListInstance;
export declare class MediaRecordingPage extends Page<V1, MediaRecordingPayload, MediaRecordingResource, MediaRecordingInstance> {
    /**
     * Initialize the MediaRecordingPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: MediaRecordingSolution);
    /**
     * Build an instance of MediaRecordingInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: MediaRecordingResource): MediaRecordingInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
