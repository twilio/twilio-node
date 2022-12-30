/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
declare type CompositionHookFormat = "mp4" | "webm";
/**
 * Options to pass to update a CompositionHookInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the resource. It can be up to  100 characters long and it must be unique within the account.
 * @property { boolean } [enabled] Whether the composition hook is active. When `true`, the composition hook will be triggered for every completed Group Room in the account. When `false`, the composition hook never triggers.
 * @property { any } [videoLayout] A JSON object that describes the video layout of the composition hook in terms of regions. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info.
 * @property { Array<string> } [audioSources] An array of track names from the same group room to merge into the compositions created by the composition hook. Can include zero or more track names. A composition triggered by the composition hook includes all audio sources specified in `audio_sources` except those specified in `audio_sources_excluded`. The track names in this parameter can include an asterisk as a wild card character, which matches zero or more characters in a track name. For example, `student*` includes tracks named `student` as well as `studentTeam`.
 * @property { Array<string> } [audioSourcesExcluded] An array of track names to exclude. A composition triggered by the composition hook includes all audio sources specified in `audio_sources` except for those specified in `audio_sources_excluded`. The track names in this parameter can include an asterisk as a wild card character, which matches zero or more characters in a track name. For example, `student*` excludes `student` as well as `studentTeam`. This parameter can also be empty.
 * @property { boolean } [trim] Whether to clip the intervals where there is no active media in the compositions triggered by the composition hook. The default is `true`. Compositions with `trim` enabled are shorter when the Room is created and no Participant joins for a while as well as if all the Participants leave the room and join later, because those gaps will be removed. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info.
 * @property { CompositionHookFormat } [format]
 * @property { string } [resolution] A string that describes the columns (width) and rows (height) of the generated composed video in pixels. Defaults to `640x480`.  The string\\\'s format is `{width}x{height}` where:   * 16 <= `{width}` <= 1280 * 16 <= `{height}` <= 1280 * `{width}` * `{height}` <= 921,600  Typical values are:   * HD = `1280x720` * PAL = `1024x576` * VGA = `640x480` * CIF = `320x240`  Note that the `resolution` imposes an aspect ratio to the resulting composition. When the original video tracks are constrained by the aspect ratio, they are scaled to fit. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info.
 * @property { string } [statusCallback] The URL we should call using the `status_callback_method` to send status information to your application on every composition event. If not provided, status callback events will not be dispatched.
 * @property { string } [statusCallbackMethod] The HTTP method we should use to call `status_callback`. Can be: `POST` or `GET` and the default is `POST`.
 */
export interface CompositionHookContextUpdateOptions {
    friendlyName: string;
    enabled?: boolean;
    videoLayout?: any;
    audioSources?: Array<string>;
    audioSourcesExcluded?: Array<string>;
    trim?: boolean;
    format?: CompositionHookFormat;
    resolution?: string;
    statusCallback?: string;
    statusCallbackMethod?: string;
}
/**
 * Options to pass to create a CompositionHookInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the resource. It can be up to  100 characters long and it must be unique within the account.
 * @property { boolean } [enabled] Whether the composition hook is active. When `true`, the composition hook will be triggered for every completed Group Room in the account. When `false`, the composition hook will never be triggered.
 * @property { any } [videoLayout] An object that describes the video layout of the composition hook in terms of regions. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info.
 * @property { Array<string> } [audioSources] An array of track names from the same group room to merge into the compositions created by the composition hook. Can include zero or more track names. A composition triggered by the composition hook includes all audio sources specified in `audio_sources` except those specified in `audio_sources_excluded`. The track names in this parameter can include an asterisk as a wild card character, which matches zero or more characters in a track name. For example, `student*` includes tracks named `student` as well as `studentTeam`.
 * @property { Array<string> } [audioSourcesExcluded] An array of track names to exclude. A composition triggered by the composition hook includes all audio sources specified in `audio_sources` except for those specified in `audio_sources_excluded`. The track names in this parameter can include an asterisk as a wild card character, which matches zero or more characters in a track name. For example, `student*` excludes `student` as well as `studentTeam`. This parameter can also be empty.
 * @property { string } [resolution] A string that describes the columns (width) and rows (height) of the generated composed video in pixels. Defaults to `640x480`.  The string\\\'s format is `{width}x{height}` where:   * 16 <= `{width}` <= 1280 * 16 <= `{height}` <= 1280 * `{width}` * `{height}` <= 921,600  Typical values are:   * HD = `1280x720` * PAL = `1024x576` * VGA = `640x480` * CIF = `320x240`  Note that the `resolution` imposes an aspect ratio to the resulting composition. When the original video tracks are constrained by the aspect ratio, they are scaled to fit. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info.
 * @property { CompositionHookFormat } [format]
 * @property { string } [statusCallback] The URL we should call using the `status_callback_method` to send status information to your application on every composition event. If not provided, status callback events will not be dispatched.
 * @property { string } [statusCallbackMethod] The HTTP method we should use to call `status_callback`. Can be: `POST` or `GET` and the default is `POST`.
 * @property { boolean } [trim] Whether to clip the intervals where there is no active media in the Compositions triggered by the composition hook. The default is `true`. Compositions with `trim` enabled are shorter when the Room is created and no Participant joins for a while as well as if all the Participants leave the room and join later, because those gaps will be removed. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info.
 */
export interface CompositionHookListInstanceCreateOptions {
    friendlyName: string;
    enabled?: boolean;
    videoLayout?: any;
    audioSources?: Array<string>;
    audioSourcesExcluded?: Array<string>;
    resolution?: string;
    format?: CompositionHookFormat;
    statusCallback?: string;
    statusCallbackMethod?: string;
    trim?: boolean;
}
/**
 * Options to pass to each
 *
 * @property { boolean } [enabled] Read only CompositionHook resources with an `enabled` value that matches this parameter.
 * @property { Date } [dateCreatedAfter] Read only CompositionHook resources created on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
 * @property { Date } [dateCreatedBefore] Read only CompositionHook resources created before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
 * @property { string } [friendlyName] Read only CompositionHook resources with friendly names that match this string. The match is not case sensitive and can include asterisk `*` characters as wildcard match.
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
export interface CompositionHookListInstanceEachOptions {
    enabled?: boolean;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    friendlyName?: string;
    pageSize?: number;
    callback?: (item: CompositionHookInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { boolean } [enabled] Read only CompositionHook resources with an `enabled` value that matches this parameter.
 * @property { Date } [dateCreatedAfter] Read only CompositionHook resources created on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
 * @property { Date } [dateCreatedBefore] Read only CompositionHook resources created before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
 * @property { string } [friendlyName] Read only CompositionHook resources with friendly names that match this string. The match is not case sensitive and can include asterisk `*` characters as wildcard match.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface CompositionHookListInstanceOptions {
    enabled?: boolean;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    friendlyName?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { boolean } [enabled] Read only CompositionHook resources with an `enabled` value that matches this parameter.
 * @property { Date } [dateCreatedAfter] Read only CompositionHook resources created on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
 * @property { Date } [dateCreatedBefore] Read only CompositionHook resources created before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
 * @property { string } [friendlyName] Read only CompositionHook resources with friendly names that match this string. The match is not case sensitive and can include asterisk `*` characters as wildcard match.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface CompositionHookListInstancePageOptions {
    enabled?: boolean;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    friendlyName?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface CompositionHookContext {
    /**
     * Remove a CompositionHookInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a CompositionHookInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CompositionHookInstance
     */
    fetch(callback?: (error: Error | null, item?: CompositionHookInstance) => any): Promise<CompositionHookInstance>;
    /**
     * Update a CompositionHookInstance
     *
     * @param { CompositionHookContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CompositionHookInstance
     */
    update(params: CompositionHookContextUpdateOptions, callback?: (error: Error | null, item?: CompositionHookInstance) => any): Promise<CompositionHookInstance>;
    update(params: any, callback?: any): Promise<CompositionHookInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CompositionHookContextSolution {
    sid?: string;
}
export declare class CompositionHookContextImpl implements CompositionHookContext {
    protected _version: V1;
    protected _solution: CompositionHookContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<CompositionHookInstance>;
    update(params: any, callback?: any): Promise<CompositionHookInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): CompositionHookContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare type CompositionHookStatusCallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
interface CompositionHookPayload extends TwilioResponsePayload {
    composition_hooks: CompositionHookResource[];
}
interface CompositionHookResource {
    account_sid?: string | null;
    friendly_name?: string | null;
    enabled?: boolean | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    sid?: string | null;
    audio_sources?: Array<string> | null;
    audio_sources_excluded?: Array<string> | null;
    video_layout?: any | null;
    resolution?: string | null;
    trim?: boolean | null;
    format?: CompositionHookFormat;
    status_callback?: string | null;
    status_callback_method?: CompositionHookStatusCallbackMethod;
    url?: string | null;
}
export declare class CompositionHookInstance {
    protected _version: V1;
    protected _solution: CompositionHookContextSolution;
    protected _context?: CompositionHookContext;
    constructor(_version: V1, payload: CompositionHookResource, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * Whether the CompositionHook is active
     */
    enabled?: boolean | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The array of track names to include in the compositions created by the composition hook
     */
    audioSources?: Array<string> | null;
    /**
     * The array of track names to exclude from the compositions created by the composition hook
     */
    audioSourcesExcluded?: Array<string> | null;
    /**
     * A JSON object that describes the video layout of the Composition
     */
    videoLayout?: any | null;
    /**
     * The dimensions of the video image in pixels expressed as columns (width) and rows (height)
     */
    resolution?: string | null;
    /**
     * Whether intervals with no media are clipped
     */
    trim?: boolean | null;
    format?: CompositionHookFormat;
    /**
     * The URL to send status information to your application
     */
    statusCallback?: string | null;
    /**
     * The HTTP method we should use to call status_callback
     */
    statusCallbackMethod?: CompositionHookStatusCallbackMethod;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a CompositionHookInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a CompositionHookInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CompositionHookInstance
     */
    fetch(callback?: (error: Error | null, item?: CompositionHookInstance) => any): Promise<CompositionHookInstance>;
    /**
     * Update a CompositionHookInstance
     *
     * @param { CompositionHookContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CompositionHookInstance
     */
    update(params: CompositionHookContextUpdateOptions, callback?: (error: Error | null, item?: CompositionHookInstance) => any): Promise<CompositionHookInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        friendlyName: string | null | undefined;
        enabled: boolean | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        sid: string | null | undefined;
        audioSources: string[] | null | undefined;
        audioSourcesExcluded: string[] | null | undefined;
        videoLayout: any;
        resolution: string | null | undefined;
        trim: boolean | null | undefined;
        format: CompositionHookFormat | undefined;
        statusCallback: string | null | undefined;
        statusCallbackMethod: CompositionHookStatusCallbackMethod | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface CompositionHookListInstance {
    (sid: string): CompositionHookContext;
    get(sid: string): CompositionHookContext;
    /**
     * Create a CompositionHookInstance
     *
     * @param { CompositionHookListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CompositionHookInstance
     */
    create(params: CompositionHookListInstanceCreateOptions, callback?: (error: Error | null, item?: CompositionHookInstance) => any): Promise<CompositionHookInstance>;
    create(params: any, callback?: any): Promise<CompositionHookInstance>;
    /**
     * Streams CompositionHookInstance records from the API.
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
    each(callback?: (item: CompositionHookInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams CompositionHookInstance records from the API.
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
     * @param { CompositionHookListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: CompositionHookListInstanceEachOptions, callback?: (item: CompositionHookInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of CompositionHookInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: CompositionHookPage) => any): Promise<CompositionHookPage>;
    /**
     * Retrieve a single target page of CompositionHookInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: CompositionHookPage) => any): Promise<CompositionHookPage>;
    getPage(params?: any, callback?: any): Promise<CompositionHookPage>;
    /**
     * Lists CompositionHookInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: CompositionHookInstance[]) => any): Promise<CompositionHookInstance[]>;
    /**
     * Lists CompositionHookInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CompositionHookListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: CompositionHookListInstanceOptions, callback?: (error: Error | null, items: CompositionHookInstance[]) => any): Promise<CompositionHookInstance[]>;
    list(params?: any, callback?: any): Promise<CompositionHookInstance[]>;
    /**
     * Retrieve a single page of CompositionHookInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: CompositionHookPage) => any): Promise<CompositionHookPage>;
    /**
     * Retrieve a single page of CompositionHookInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CompositionHookListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: CompositionHookListInstancePageOptions, callback?: (error: Error | null, items: CompositionHookPage) => any): Promise<CompositionHookPage>;
    page(params?: any, callback?: any): Promise<CompositionHookPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CompositionHookSolution {
}
export declare function CompositionHookListInstance(version: V1): CompositionHookListInstance;
export declare class CompositionHookPage extends Page<V1, CompositionHookPayload, CompositionHookResource, CompositionHookInstance> {
    /**
     * Initialize the CompositionHookPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: CompositionHookSolution);
    /**
     * Build an instance of CompositionHookInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: CompositionHookResource): CompositionHookInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
