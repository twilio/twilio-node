/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
declare type RoomRecordingCodec = "VP8" | "H264" | "OPUS" | "PCMU";
declare type RoomRecordingFormat = "mka" | "mkv";
declare type RoomRecordingStatus = "processing" | "completed" | "deleted" | "failed";
declare type RoomRecordingType = "audio" | "video" | "data";
/**
 * Options to pass to each
 *
 * @property { RoomRecordingStatus } [status] Read only the recordings with this status. Can be: `processing`, `completed`, or `deleted`.
 * @property { string } [sourceSid] Read only the recordings that have this `source_sid`.
 * @property { Date } [dateCreatedAfter] Read only recordings that started on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
 * @property { Date } [dateCreatedBefore] Read only Recordings that started before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
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
export interface RoomRecordingListInstanceEachOptions {
    status?: RoomRecordingStatus;
    sourceSid?: string;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    pageSize?: number;
    callback?: (item: RoomRecordingInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { RoomRecordingStatus } [status] Read only the recordings with this status. Can be: `processing`, `completed`, or `deleted`.
 * @property { string } [sourceSid] Read only the recordings that have this `source_sid`.
 * @property { Date } [dateCreatedAfter] Read only recordings that started on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
 * @property { Date } [dateCreatedBefore] Read only Recordings that started before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface RoomRecordingListInstanceOptions {
    status?: RoomRecordingStatus;
    sourceSid?: string;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { RoomRecordingStatus } [status] Read only the recordings with this status. Can be: `processing`, `completed`, or `deleted`.
 * @property { string } [sourceSid] Read only the recordings that have this `source_sid`.
 * @property { Date } [dateCreatedAfter] Read only recordings that started on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
 * @property { Date } [dateCreatedBefore] Read only Recordings that started before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface RoomRecordingListInstancePageOptions {
    status?: RoomRecordingStatus;
    sourceSid?: string;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface RoomRecordingContext {
    /**
     * Remove a RoomRecordingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a RoomRecordingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RoomRecordingInstance
     */
    fetch(callback?: (error: Error | null, item?: RoomRecordingInstance) => any): Promise<RoomRecordingInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RoomRecordingContextSolution {
    roomSid?: string;
    sid?: string;
}
export declare class RoomRecordingContextImpl implements RoomRecordingContext {
    protected _version: V1;
    protected _solution: RoomRecordingContextSolution;
    protected _uri: string;
    constructor(_version: V1, roomSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<RoomRecordingInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): RoomRecordingContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface RoomRecordingPayload extends TwilioResponsePayload {
    recordings: RoomRecordingResource[];
}
interface RoomRecordingResource {
    account_sid?: string | null;
    status?: RoomRecordingStatus;
    date_created?: Date | null;
    sid?: string | null;
    source_sid?: string | null;
    size?: number | null;
    url?: string | null;
    type?: RoomRecordingType;
    duration?: number | null;
    container_format?: RoomRecordingFormat;
    codec?: RoomRecordingCodec;
    grouping_sids?: any | null;
    track_name?: string | null;
    offset?: number | null;
    media_external_location?: string | null;
    room_sid?: string | null;
    links?: object | null;
}
export declare class RoomRecordingInstance {
    protected _version: V1;
    protected _solution: RoomRecordingContextSolution;
    protected _context?: RoomRecordingContext;
    constructor(_version: V1, payload: RoomRecordingResource, roomSid: string, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    status?: RoomRecordingStatus;
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
     * The size of the recorded track in bytes
     */
    size?: number | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    type?: RoomRecordingType;
    /**
     * The duration of the recording in seconds
     */
    duration?: number | null;
    containerFormat?: RoomRecordingFormat;
    codec?: RoomRecordingCodec;
    /**
     * A list of SIDs related to the Recording
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
     * The SID of the Room resource the recording is associated with
     */
    roomSid?: string | null;
    /**
     * The URLs of related resources
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a RoomRecordingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a RoomRecordingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RoomRecordingInstance
     */
    fetch(callback?: (error: Error | null, item?: RoomRecordingInstance) => any): Promise<RoomRecordingInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        status: RoomRecordingStatus | undefined;
        dateCreated: Date | null | undefined;
        sid: string | null | undefined;
        sourceSid: string | null | undefined;
        size: number | null | undefined;
        url: string | null | undefined;
        type: RoomRecordingType | undefined;
        duration: number | null | undefined;
        containerFormat: RoomRecordingFormat | undefined;
        codec: RoomRecordingCodec | undefined;
        groupingSids: any;
        trackName: string | null | undefined;
        offset: number | null | undefined;
        mediaExternalLocation: string | null | undefined;
        roomSid: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface RoomRecordingListInstance {
    (sid: string): RoomRecordingContext;
    get(sid: string): RoomRecordingContext;
    /**
     * Streams RoomRecordingInstance records from the API.
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
    each(callback?: (item: RoomRecordingInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams RoomRecordingInstance records from the API.
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
     * @param { RoomRecordingListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: RoomRecordingListInstanceEachOptions, callback?: (item: RoomRecordingInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of RoomRecordingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: RoomRecordingPage) => any): Promise<RoomRecordingPage>;
    /**
     * Retrieve a single target page of RoomRecordingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: RoomRecordingPage) => any): Promise<RoomRecordingPage>;
    getPage(params?: any, callback?: any): Promise<RoomRecordingPage>;
    /**
     * Lists RoomRecordingInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: RoomRecordingInstance[]) => any): Promise<RoomRecordingInstance[]>;
    /**
     * Lists RoomRecordingInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { RoomRecordingListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: RoomRecordingListInstanceOptions, callback?: (error: Error | null, items: RoomRecordingInstance[]) => any): Promise<RoomRecordingInstance[]>;
    list(params?: any, callback?: any): Promise<RoomRecordingInstance[]>;
    /**
     * Retrieve a single page of RoomRecordingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: RoomRecordingPage) => any): Promise<RoomRecordingPage>;
    /**
     * Retrieve a single page of RoomRecordingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { RoomRecordingListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: RoomRecordingListInstancePageOptions, callback?: (error: Error | null, items: RoomRecordingPage) => any): Promise<RoomRecordingPage>;
    page(params?: any, callback?: any): Promise<RoomRecordingPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RoomRecordingSolution {
    roomSid?: string;
}
export declare function RoomRecordingListInstance(version: V1, roomSid: string): RoomRecordingListInstance;
export declare class RoomRecordingPage extends Page<V1, RoomRecordingPayload, RoomRecordingResource, RoomRecordingInstance> {
    /**
     * Initialize the RoomRecordingPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: RoomRecordingSolution);
    /**
     * Build an instance of RoomRecordingInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: RoomRecordingResource): RoomRecordingInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
