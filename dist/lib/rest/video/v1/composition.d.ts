/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
declare type CompositionFormat = "mp4" | "webm";
declare type CompositionStatus = "enqueued" | "processing" | "completed" | "deleted" | "failed";
/**
 * Options to pass to create a CompositionInstance
 *
 * @property { string } roomSid The SID of the Group Room with the media tracks to be used as composition sources.
 * @property { any } [videoLayout] An object that describes the video layout of the composition in terms of regions. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info. Please, be aware that either video_layout or audio_sources have to be provided to get a valid creation request
 * @property { Array<string> } [audioSources] An array of track names from the same group room to merge into the new composition. Can include zero or more track names. The new composition includes all audio sources specified in `audio_sources` except for those specified in `audio_sources_excluded`. The track names in this parameter can include an asterisk as a wild card character, which will match zero or more characters in a track name. For example, `student*` includes `student` as well as `studentTeam`. Please, be aware that either video_layout or audio_sources have to be provided to get a valid creation request
 * @property { Array<string> } [audioSourcesExcluded] An array of track names to exclude. The new composition includes all audio sources specified in `audio_sources` except for those specified in `audio_sources_excluded`. The track names in this parameter can include an asterisk as a wild card character, which will match zero or more characters in a track name. For example, `student*` excludes `student` as well as `studentTeam`. This parameter can also be empty.
 * @property { string } [resolution] A string that describes the columns (width) and rows (height) of the generated composed video in pixels. Defaults to `640x480`.  The string\\\'s format is `{width}x{height}` where:   * 16 <= `{width}` <= 1280 * 16 <= `{height}` <= 1280 * `{width}` * `{height}` <= 921,600  Typical values are:   * HD = `1280x720` * PAL = `1024x576` * VGA = `640x480` * CIF = `320x240`  Note that the `resolution` imposes an aspect ratio to the resulting composition. When the original video tracks are constrained by the aspect ratio, they are scaled to fit. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info.
 * @property { CompositionFormat } [format]
 * @property { string } [statusCallback] The URL we should call using the `status_callback_method` to send status information to your application on every composition event. If not provided, status callback events will not be dispatched.
 * @property { string } [statusCallbackMethod] The HTTP method we should use to call `status_callback`. Can be: `POST` or `GET` and the default is `POST`.
 * @property { boolean } [trim] Whether to clip the intervals where there is no active media in the composition. The default is `true`. Compositions with `trim` enabled are shorter when the Room is created and no Participant joins for a while as well as if all the Participants leave the room and join later, because those gaps will be removed. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info.
 */
export interface CompositionListInstanceCreateOptions {
    roomSid: string;
    videoLayout?: any;
    audioSources?: Array<string>;
    audioSourcesExcluded?: Array<string>;
    resolution?: string;
    format?: CompositionFormat;
    statusCallback?: string;
    statusCallbackMethod?: string;
    trim?: boolean;
}
/**
 * Options to pass to each
 *
 * @property { CompositionStatus } [status] Read only Composition resources with this status. Can be: `enqueued`, `processing`, `completed`, `deleted`, or `failed`.
 * @property { Date } [dateCreatedAfter] Read only Composition resources created on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone.
 * @property { Date } [dateCreatedBefore] Read only Composition resources created before this ISO 8601 date-time with time zone.
 * @property { string } [roomSid] Read only Composition resources with this Room SID.
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
export interface CompositionListInstanceEachOptions {
    status?: CompositionStatus;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    roomSid?: string;
    pageSize?: number;
    callback?: (item: CompositionInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { CompositionStatus } [status] Read only Composition resources with this status. Can be: `enqueued`, `processing`, `completed`, `deleted`, or `failed`.
 * @property { Date } [dateCreatedAfter] Read only Composition resources created on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone.
 * @property { Date } [dateCreatedBefore] Read only Composition resources created before this ISO 8601 date-time with time zone.
 * @property { string } [roomSid] Read only Composition resources with this Room SID.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface CompositionListInstanceOptions {
    status?: CompositionStatus;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    roomSid?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { CompositionStatus } [status] Read only Composition resources with this status. Can be: `enqueued`, `processing`, `completed`, `deleted`, or `failed`.
 * @property { Date } [dateCreatedAfter] Read only Composition resources created on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone.
 * @property { Date } [dateCreatedBefore] Read only Composition resources created before this ISO 8601 date-time with time zone.
 * @property { string } [roomSid] Read only Composition resources with this Room SID.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface CompositionListInstancePageOptions {
    status?: CompositionStatus;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    roomSid?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface CompositionContext {
    /**
     * Remove a CompositionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a CompositionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CompositionInstance
     */
    fetch(callback?: (error: Error | null, item?: CompositionInstance) => any): Promise<CompositionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CompositionContextSolution {
    sid?: string;
}
export declare class CompositionContextImpl implements CompositionContext {
    protected _version: V1;
    protected _solution: CompositionContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<CompositionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): CompositionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare type CompositionStatusCallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
interface CompositionPayload extends TwilioResponsePayload {
    compositions: CompositionResource[];
}
interface CompositionResource {
    account_sid?: string | null;
    status?: CompositionStatus;
    date_created?: Date | null;
    date_completed?: Date | null;
    date_deleted?: Date | null;
    sid?: string | null;
    room_sid?: string | null;
    audio_sources?: Array<string> | null;
    audio_sources_excluded?: Array<string> | null;
    video_layout?: any | null;
    resolution?: string | null;
    trim?: boolean | null;
    format?: CompositionFormat;
    bitrate?: number | null;
    size?: number | null;
    duration?: number | null;
    media_external_location?: string | null;
    status_callback?: string | null;
    status_callback_method?: CompositionStatusCallbackMethod;
    url?: string | null;
    links?: object | null;
}
export declare class CompositionInstance {
    protected _version: V1;
    protected _solution: CompositionContextSolution;
    protected _context?: CompositionContext;
    constructor(_version: V1, payload: CompositionResource, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    status?: CompositionStatus;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * Date when the media processing task finished
     */
    dateCompleted?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the composition generated media was deleted
     */
    dateDeleted?: Date | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Group Room that generated the audio and video tracks used in the composition
     */
    roomSid?: string | null;
    /**
     * The array of track names to include in the composition
     */
    audioSources?: Array<string> | null;
    /**
     * The array of track names to exclude from the composition
     */
    audioSourcesExcluded?: Array<string> | null;
    /**
     * An object that describes the video layout of the composition
     */
    videoLayout?: any | null;
    /**
     * The dimensions of the video image in pixels expressed as columns (width) and rows (height)
     */
    resolution?: string | null;
    /**
     * Whether to remove intervals with no media
     */
    trim?: boolean | null;
    format?: CompositionFormat;
    /**
     * The average bit rate of the composition\'s media
     */
    bitrate?: number | null;
    /**
     * The size of the composed media file in bytes
     */
    size?: number | null;
    /**
     * The duration of the composition\'s media file in seconds
     */
    duration?: number | null;
    /**
     * The URL of the media file associated with the composition when stored externally
     */
    mediaExternalLocation?: string | null;
    /**
     * The URL called to send status information on every composition event.
     */
    statusCallback?: string | null;
    /**
     * The HTTP method used to call `status_callback`
     */
    statusCallbackMethod?: CompositionStatusCallbackMethod;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    /**
     * The URL of the media file associated with the composition
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a CompositionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a CompositionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CompositionInstance
     */
    fetch(callback?: (error: Error | null, item?: CompositionInstance) => any): Promise<CompositionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        status: CompositionStatus | undefined;
        dateCreated: Date | null | undefined;
        dateCompleted: Date | null | undefined;
        dateDeleted: Date | null | undefined;
        sid: string | null | undefined;
        roomSid: string | null | undefined;
        audioSources: string[] | null | undefined;
        audioSourcesExcluded: string[] | null | undefined;
        videoLayout: any;
        resolution: string | null | undefined;
        trim: boolean | null | undefined;
        format: CompositionFormat | undefined;
        bitrate: number | null | undefined;
        size: number | null | undefined;
        duration: number | null | undefined;
        mediaExternalLocation: string | null | undefined;
        statusCallback: string | null | undefined;
        statusCallbackMethod: CompositionStatusCallbackMethod | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface CompositionListInstance {
    (sid: string): CompositionContext;
    get(sid: string): CompositionContext;
    /**
     * Create a CompositionInstance
     *
     * @param { CompositionListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CompositionInstance
     */
    create(params: CompositionListInstanceCreateOptions, callback?: (error: Error | null, item?: CompositionInstance) => any): Promise<CompositionInstance>;
    create(params: any, callback?: any): Promise<CompositionInstance>;
    /**
     * Streams CompositionInstance records from the API.
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
    each(callback?: (item: CompositionInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams CompositionInstance records from the API.
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
     * @param { CompositionListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: CompositionListInstanceEachOptions, callback?: (item: CompositionInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of CompositionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: CompositionPage) => any): Promise<CompositionPage>;
    /**
     * Retrieve a single target page of CompositionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: CompositionPage) => any): Promise<CompositionPage>;
    getPage(params?: any, callback?: any): Promise<CompositionPage>;
    /**
     * Lists CompositionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: CompositionInstance[]) => any): Promise<CompositionInstance[]>;
    /**
     * Lists CompositionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CompositionListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: CompositionListInstanceOptions, callback?: (error: Error | null, items: CompositionInstance[]) => any): Promise<CompositionInstance[]>;
    list(params?: any, callback?: any): Promise<CompositionInstance[]>;
    /**
     * Retrieve a single page of CompositionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: CompositionPage) => any): Promise<CompositionPage>;
    /**
     * Retrieve a single page of CompositionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CompositionListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: CompositionListInstancePageOptions, callback?: (error: Error | null, items: CompositionPage) => any): Promise<CompositionPage>;
    page(params?: any, callback?: any): Promise<CompositionPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CompositionSolution {
}
export declare function CompositionListInstance(version: V1): CompositionListInstance;
export declare class CompositionPage extends Page<V1, CompositionPayload, CompositionResource, CompositionInstance> {
    /**
     * Initialize the CompositionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: CompositionSolution);
    /**
     * Build an instance of CompositionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: CompositionResource): CompositionInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
