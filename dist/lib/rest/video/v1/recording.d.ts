/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
declare type RecordingCodec = "VP8" | "H264" | "OPUS" | "PCMU";
declare type RecordingFormat = "mka" | "mkv";
declare type RecordingStatus = "processing" | "completed" | "deleted" | "failed";
declare type RecordingType = "audio" | "video" | "data";
/**
 * Options to pass to each
 *
 * @property { RecordingStatus } [status] Read only the recordings that have this status. Can be: `processing`, `completed`, or `deleted`.
 * @property { string } [sourceSid] Read only the recordings that have this `source_sid`.
 * @property { Array<string> } [groupingSid] Read only recordings with this `grouping_sid`, which may include a `participant_sid` and/or a `room_sid`.
 * @property { Date } [dateCreatedAfter] Read only recordings that started on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone.
 * @property { Date } [dateCreatedBefore] Read only recordings that started before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone, given as `YYYY-MM-DDThh:mm:ss+|-hh:mm` or `YYYY-MM-DDThh:mm:ssZ`.
 * @property { RecordingType } [mediaType] Read only recordings that have this media type. Can be either `audio` or `video`.
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
export interface RecordingListInstanceEachOptions {
    status?: RecordingStatus;
    sourceSid?: string;
    groupingSid?: Array<string>;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    mediaType?: RecordingType;
    pageSize?: number;
    callback?: (item: RecordingInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { RecordingStatus } [status] Read only the recordings that have this status. Can be: `processing`, `completed`, or `deleted`.
 * @property { string } [sourceSid] Read only the recordings that have this `source_sid`.
 * @property { Array<string> } [groupingSid] Read only recordings with this `grouping_sid`, which may include a `participant_sid` and/or a `room_sid`.
 * @property { Date } [dateCreatedAfter] Read only recordings that started on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone.
 * @property { Date } [dateCreatedBefore] Read only recordings that started before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone, given as `YYYY-MM-DDThh:mm:ss+|-hh:mm` or `YYYY-MM-DDThh:mm:ssZ`.
 * @property { RecordingType } [mediaType] Read only recordings that have this media type. Can be either `audio` or `video`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface RecordingListInstanceOptions {
    status?: RecordingStatus;
    sourceSid?: string;
    groupingSid?: Array<string>;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    mediaType?: RecordingType;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { RecordingStatus } [status] Read only the recordings that have this status. Can be: `processing`, `completed`, or `deleted`.
 * @property { string } [sourceSid] Read only the recordings that have this `source_sid`.
 * @property { Array<string> } [groupingSid] Read only recordings with this `grouping_sid`, which may include a `participant_sid` and/or a `room_sid`.
 * @property { Date } [dateCreatedAfter] Read only recordings that started on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone.
 * @property { Date } [dateCreatedBefore] Read only recordings that started before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone, given as `YYYY-MM-DDThh:mm:ss+|-hh:mm` or `YYYY-MM-DDThh:mm:ssZ`.
 * @property { RecordingType } [mediaType] Read only recordings that have this media type. Can be either `audio` or `video`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface RecordingListInstancePageOptions {
    status?: RecordingStatus;
    sourceSid?: string;
    groupingSid?: Array<string>;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    mediaType?: RecordingType;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface RecordingContext {
    /**
     * Remove a RecordingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a RecordingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RecordingInstance
     */
    fetch(callback?: (error: Error | null, item?: RecordingInstance) => any): Promise<RecordingInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RecordingContextSolution {
    sid?: string;
}
export declare class RecordingContextImpl implements RecordingContext {
    protected _version: V1;
    protected _solution: RecordingContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<RecordingInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): RecordingContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare type RecordingStatusCallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
interface RecordingPayload extends TwilioResponsePayload {
    recordings: RecordingResource[];
}
interface RecordingResource {
    account_sid?: string | null;
    status?: RecordingStatus;
    date_created?: Date | null;
    sid?: string | null;
    source_sid?: string | null;
    size?: number | null;
    url?: string | null;
    type?: RecordingType;
    duration?: number | null;
    container_format?: RecordingFormat;
    codec?: RecordingCodec;
    grouping_sids?: any | null;
    track_name?: string | null;
    offset?: number | null;
    media_external_location?: string | null;
    status_callback?: string | null;
    status_callback_method?: RecordingStatusCallbackMethod;
    links?: object | null;
}
export declare class RecordingInstance {
    protected _version: V1;
    protected _solution: RecordingContextSolution;
    protected _context?: RecordingContext;
    constructor(_version: V1, payload: RecordingResource, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    status?: RecordingStatus;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the recording source
     */
    sourceSid?: string | null;
    /**
     * The size of the recorded track, in bytes
     */
    size?: number | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    type?: RecordingType;
    /**
     * The duration of the recording in seconds
     */
    duration?: number | null;
    containerFormat?: RecordingFormat;
    codec?: RecordingCodec;
    /**
     * A list of SIDs related to the recording
     */
    groupingSids?: any | null;
    /**
     * The name that was given to the source track of the recording
     */
    trackName?: string | null;
    /**
     * The number of milliseconds between a point in time that is common to all rooms in a group and when the source room of the recording started
     */
    offset?: number | null;
    /**
     * The URL of the media file associated with the recording when stored externally
     */
    mediaExternalLocation?: string | null;
    /**
     * The URL called to send status information on every recording event.
     */
    statusCallback?: string | null;
    /**
     * The HTTP method used to call `status_callback`
     */
    statusCallbackMethod?: RecordingStatusCallbackMethod;
    /**
     * The URLs of related resources
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a RecordingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a RecordingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RecordingInstance
     */
    fetch(callback?: (error: Error | null, item?: RecordingInstance) => any): Promise<RecordingInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        status: RecordingStatus | undefined;
        dateCreated: Date | null | undefined;
        sid: string | null | undefined;
        sourceSid: string | null | undefined;
        size: number | null | undefined;
        url: string | null | undefined;
        type: RecordingType | undefined;
        duration: number | null | undefined;
        containerFormat: RecordingFormat | undefined;
        codec: RecordingCodec | undefined;
        groupingSids: any;
        trackName: string | null | undefined;
        offset: number | null | undefined;
        mediaExternalLocation: string | null | undefined;
        statusCallback: string | null | undefined;
        statusCallbackMethod: RecordingStatusCallbackMethod | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface RecordingListInstance {
    (sid: string): RecordingContext;
    get(sid: string): RecordingContext;
    /**
     * Streams RecordingInstance records from the API.
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
    each(callback?: (item: RecordingInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams RecordingInstance records from the API.
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
     * @param { RecordingListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: RecordingListInstanceEachOptions, callback?: (item: RecordingInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of RecordingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: RecordingPage) => any): Promise<RecordingPage>;
    /**
     * Retrieve a single target page of RecordingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: RecordingPage) => any): Promise<RecordingPage>;
    getPage(params?: any, callback?: any): Promise<RecordingPage>;
    /**
     * Lists RecordingInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: RecordingInstance[]) => any): Promise<RecordingInstance[]>;
    /**
     * Lists RecordingInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { RecordingListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: RecordingListInstanceOptions, callback?: (error: Error | null, items: RecordingInstance[]) => any): Promise<RecordingInstance[]>;
    list(params?: any, callback?: any): Promise<RecordingInstance[]>;
    /**
     * Retrieve a single page of RecordingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: RecordingPage) => any): Promise<RecordingPage>;
    /**
     * Retrieve a single page of RecordingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { RecordingListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: RecordingListInstancePageOptions, callback?: (error: Error | null, items: RecordingPage) => any): Promise<RecordingPage>;
    page(params?: any, callback?: any): Promise<RecordingPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RecordingSolution {
}
export declare function RecordingListInstance(version: V1): RecordingListInstance;
export declare class RecordingPage extends Page<V1, RecordingPayload, RecordingResource, RecordingInstance> {
    /**
     * Initialize the RecordingPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: RecordingSolution);
    /**
     * Build an instance of RecordingInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: RecordingResource): RecordingInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
