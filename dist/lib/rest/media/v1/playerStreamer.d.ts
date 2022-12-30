/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { PlaybackGrantListInstance } from "./playerStreamer/playbackGrant";
declare type PlayerStreamerEndedReason = "ended-via-api" | "max-duration-exceeded" | "stream-disconnected-by-source" | "unexpected-failure";
declare type PlayerStreamerOrder = "asc" | "desc";
declare type PlayerStreamerStatus = "created" | "started" | "ended" | "failed";
declare type PlayerStreamerUpdateStatus = "ended";
/**
 * Options to pass to update a PlayerStreamerInstance
 *
 * @property { PlayerStreamerUpdateStatus } status
 */
export interface PlayerStreamerContextUpdateOptions {
    status: PlayerStreamerUpdateStatus;
}
/**
 * Options to pass to create a PlayerStreamerInstance
 *
 * @property { boolean } [video] Specifies whether the PlayerStreamer is configured to stream video. Defaults to `true`.
 * @property { string } [statusCallback] The URL to which Twilio will send asynchronous webhook requests for every PlayerStreamer event. See [Status Callbacks](/docs/live/status-callbacks) for more details.
 * @property { string } [statusCallbackMethod] The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`.
 * @property { number } [maxDuration] The maximum time, in seconds, that the PlayerStreamer is active (`created` or `started`) before automatically ends. The default value is 300 seconds, and the maximum value is 90000 seconds. Once this maximum duration is reached, Twilio will end the PlayerStreamer, regardless of whether media is still streaming.
 */
export interface PlayerStreamerListInstanceCreateOptions {
    video?: boolean;
    statusCallback?: string;
    statusCallbackMethod?: string;
    maxDuration?: number;
}
/**
 * Options to pass to each
 *
 * @property { PlayerStreamerOrder } [order] The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default.
 * @property { PlayerStreamerStatus } [status] Status to filter by, with possible values `created`, `started`, `ended`, or `failed`.
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
export interface PlayerStreamerListInstanceEachOptions {
    order?: PlayerStreamerOrder;
    status?: PlayerStreamerStatus;
    pageSize?: number;
    callback?: (item: PlayerStreamerInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { PlayerStreamerOrder } [order] The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default.
 * @property { PlayerStreamerStatus } [status] Status to filter by, with possible values `created`, `started`, `ended`, or `failed`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface PlayerStreamerListInstanceOptions {
    order?: PlayerStreamerOrder;
    status?: PlayerStreamerStatus;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { PlayerStreamerOrder } [order] The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default.
 * @property { PlayerStreamerStatus } [status] Status to filter by, with possible values `created`, `started`, `ended`, or `failed`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface PlayerStreamerListInstancePageOptions {
    order?: PlayerStreamerOrder;
    status?: PlayerStreamerStatus;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface PlayerStreamerContext {
    playbackGrant: PlaybackGrantListInstance;
    /**
     * Fetch a PlayerStreamerInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PlayerStreamerInstance
     */
    fetch(callback?: (error: Error | null, item?: PlayerStreamerInstance) => any): Promise<PlayerStreamerInstance>;
    /**
     * Update a PlayerStreamerInstance
     *
     * @param { PlayerStreamerContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PlayerStreamerInstance
     */
    update(params: PlayerStreamerContextUpdateOptions, callback?: (error: Error | null, item?: PlayerStreamerInstance) => any): Promise<PlayerStreamerInstance>;
    update(params: any, callback?: any): Promise<PlayerStreamerInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PlayerStreamerContextSolution {
    sid?: string;
}
export declare class PlayerStreamerContextImpl implements PlayerStreamerContext {
    protected _version: V1;
    protected _solution: PlayerStreamerContextSolution;
    protected _uri: string;
    protected _playbackGrant?: PlaybackGrantListInstance;
    constructor(_version: V1, sid: string);
    get playbackGrant(): PlaybackGrantListInstance;
    fetch(callback?: any): Promise<PlayerStreamerInstance>;
    update(params: any, callback?: any): Promise<PlayerStreamerInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PlayerStreamerContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare type PlayerStreamerStatusCallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
interface PlayerStreamerPayload extends TwilioResponsePayload {
    player_streamers: PlayerStreamerResource[];
}
interface PlayerStreamerResource {
    account_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    video?: boolean | null;
    links?: object | null;
    sid?: string | null;
    status?: PlayerStreamerStatus;
    url?: string | null;
    status_callback?: string | null;
    status_callback_method?: PlayerStreamerStatusCallbackMethod;
    ended_reason?: PlayerStreamerEndedReason;
    max_duration?: number | null;
}
export declare class PlayerStreamerInstance {
    protected _version: V1;
    protected _solution: PlayerStreamerContextSolution;
    protected _context?: PlayerStreamerContext;
    constructor(_version: V1, payload: PlayerStreamerResource, sid?: string);
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
     * Whether the PlayerStreamer is configured to stream video
     */
    video?: boolean | null;
    /**
     * The URLs of related resources
     */
    links?: object | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    status?: PlayerStreamerStatus;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    /**
     * The URL to which Twilio will send PlayerStreamer event updates
     */
    statusCallback?: string | null;
    /**
     * The HTTP method Twilio should use to call the `status_callback` URL
     */
    statusCallbackMethod?: PlayerStreamerStatusCallbackMethod;
    endedReason?: PlayerStreamerEndedReason;
    /**
     * Maximum PlayerStreamer duration in seconds
     */
    maxDuration?: number | null;
    private get _proxy();
    /**
     * Fetch a PlayerStreamerInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PlayerStreamerInstance
     */
    fetch(callback?: (error: Error | null, item?: PlayerStreamerInstance) => any): Promise<PlayerStreamerInstance>;
    /**
     * Update a PlayerStreamerInstance
     *
     * @param { PlayerStreamerContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PlayerStreamerInstance
     */
    update(params: PlayerStreamerContextUpdateOptions, callback?: (error: Error | null, item?: PlayerStreamerInstance) => any): Promise<PlayerStreamerInstance>;
    /**
     * Access the playbackGrant.
     */
    playbackGrant(): PlaybackGrantListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        video: boolean | null | undefined;
        links: object | null | undefined;
        sid: string | null | undefined;
        status: PlayerStreamerStatus | undefined;
        url: string | null | undefined;
        statusCallback: string | null | undefined;
        statusCallbackMethod: PlayerStreamerStatusCallbackMethod | undefined;
        endedReason: PlayerStreamerEndedReason | undefined;
        maxDuration: number | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PlayerStreamerListInstance {
    (sid: string): PlayerStreamerContext;
    get(sid: string): PlayerStreamerContext;
    /**
     * Create a PlayerStreamerInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PlayerStreamerInstance
     */
    create(callback?: (error: Error | null, item?: PlayerStreamerInstance) => any): Promise<PlayerStreamerInstance>;
    /**
     * Create a PlayerStreamerInstance
     *
     * @param { PlayerStreamerListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PlayerStreamerInstance
     */
    create(params: PlayerStreamerListInstanceCreateOptions, callback?: (error: Error | null, item?: PlayerStreamerInstance) => any): Promise<PlayerStreamerInstance>;
    create(params?: any, callback?: any): Promise<PlayerStreamerInstance>;
    /**
     * Streams PlayerStreamerInstance records from the API.
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
    each(callback?: (item: PlayerStreamerInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams PlayerStreamerInstance records from the API.
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
     * @param { PlayerStreamerListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: PlayerStreamerListInstanceEachOptions, callback?: (item: PlayerStreamerInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of PlayerStreamerInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: PlayerStreamerPage) => any): Promise<PlayerStreamerPage>;
    /**
     * Retrieve a single target page of PlayerStreamerInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: PlayerStreamerPage) => any): Promise<PlayerStreamerPage>;
    getPage(params?: any, callback?: any): Promise<PlayerStreamerPage>;
    /**
     * Lists PlayerStreamerInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: PlayerStreamerInstance[]) => any): Promise<PlayerStreamerInstance[]>;
    /**
     * Lists PlayerStreamerInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PlayerStreamerListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: PlayerStreamerListInstanceOptions, callback?: (error: Error | null, items: PlayerStreamerInstance[]) => any): Promise<PlayerStreamerInstance[]>;
    list(params?: any, callback?: any): Promise<PlayerStreamerInstance[]>;
    /**
     * Retrieve a single page of PlayerStreamerInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: PlayerStreamerPage) => any): Promise<PlayerStreamerPage>;
    /**
     * Retrieve a single page of PlayerStreamerInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PlayerStreamerListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: PlayerStreamerListInstancePageOptions, callback?: (error: Error | null, items: PlayerStreamerPage) => any): Promise<PlayerStreamerPage>;
    page(params?: any, callback?: any): Promise<PlayerStreamerPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PlayerStreamerSolution {
}
export declare function PlayerStreamerListInstance(version: V1): PlayerStreamerListInstance;
export declare class PlayerStreamerPage extends Page<V1, PlayerStreamerPayload, PlayerStreamerResource, PlayerStreamerInstance> {
    /**
     * Initialize the PlayerStreamerPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: PlayerStreamerSolution);
    /**
     * Build an instance of PlayerStreamerInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: PlayerStreamerResource): PlayerStreamerInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
