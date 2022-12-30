/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
/**
 * Options to pass to each
 *
 * @property { Date } [dateCreated] Only include media that was created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read media that was created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read media that was created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read media that was created on or after midnight of this date.
 * @property { Date } [dateCreatedBefore] Only include media that was created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read media that was created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read media that was created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read media that was created on or after midnight of this date.
 * @property { Date } [dateCreatedAfter] Only include media that was created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read media that was created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read media that was created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read media that was created on or after midnight of this date.
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
export interface MediaListInstanceEachOptions {
    dateCreated?: Date;
    dateCreatedBefore?: Date;
    dateCreatedAfter?: Date;
    pageSize?: number;
    callback?: (item: MediaInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { Date } [dateCreated] Only include media that was created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read media that was created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read media that was created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read media that was created on or after midnight of this date.
 * @property { Date } [dateCreatedBefore] Only include media that was created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read media that was created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read media that was created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read media that was created on or after midnight of this date.
 * @property { Date } [dateCreatedAfter] Only include media that was created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read media that was created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read media that was created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read media that was created on or after midnight of this date.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface MediaListInstanceOptions {
    dateCreated?: Date;
    dateCreatedBefore?: Date;
    dateCreatedAfter?: Date;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { Date } [dateCreated] Only include media that was created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read media that was created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read media that was created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read media that was created on or after midnight of this date.
 * @property { Date } [dateCreatedBefore] Only include media that was created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read media that was created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read media that was created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read media that was created on or after midnight of this date.
 * @property { Date } [dateCreatedAfter] Only include media that was created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read media that was created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read media that was created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read media that was created on or after midnight of this date.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface MediaListInstancePageOptions {
    dateCreated?: Date;
    dateCreatedBefore?: Date;
    dateCreatedAfter?: Date;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface MediaContext {
    /**
     * Remove a MediaInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a MediaInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MediaInstance
     */
    fetch(callback?: (error: Error | null, item?: MediaInstance) => any): Promise<MediaInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface MediaContextSolution {
    accountSid?: string;
    messageSid?: string;
    sid?: string;
}
export declare class MediaContextImpl implements MediaContext {
    protected _version: V2010;
    protected _solution: MediaContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, messageSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<MediaInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): MediaContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface MediaPayload extends TwilioResponsePayload {
    media_list: MediaResource[];
}
interface MediaResource {
    account_sid?: string | null;
    content_type?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    parent_sid?: string | null;
    sid?: string | null;
    uri?: string | null;
}
export declare class MediaInstance {
    protected _version: V2010;
    protected _solution: MediaContextSolution;
    protected _context?: MediaContext;
    constructor(_version: V2010, payload: MediaResource, accountSid: string, messageSid: string, sid?: string);
    /**
     * The SID of the Account that created this resource
     */
    accountSid?: string | null;
    /**
     * The default mime-type of the media
     */
    contentType?: string | null;
    /**
     * The RFC 2822 date and time in GMT that this resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that this resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The SID of the resource that created the media
     */
    parentSid?: string | null;
    /**
     * The unique string that identifies this resource
     */
    sid?: string | null;
    /**
     * The URI of this resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    private get _proxy();
    /**
     * Remove a MediaInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a MediaInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MediaInstance
     */
    fetch(callback?: (error: Error | null, item?: MediaInstance) => any): Promise<MediaInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        contentType: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        parentSid: string | null | undefined;
        sid: string | null | undefined;
        uri: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface MediaListInstance {
    (sid: string): MediaContext;
    get(sid: string): MediaContext;
    /**
     * Streams MediaInstance records from the API.
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
    each(callback?: (item: MediaInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams MediaInstance records from the API.
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
     * @param { MediaListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: MediaListInstanceEachOptions, callback?: (item: MediaInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of MediaInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: MediaPage) => any): Promise<MediaPage>;
    /**
     * Retrieve a single target page of MediaInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: MediaPage) => any): Promise<MediaPage>;
    getPage(params?: any, callback?: any): Promise<MediaPage>;
    /**
     * Lists MediaInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: MediaInstance[]) => any): Promise<MediaInstance[]>;
    /**
     * Lists MediaInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MediaListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: MediaListInstanceOptions, callback?: (error: Error | null, items: MediaInstance[]) => any): Promise<MediaInstance[]>;
    list(params?: any, callback?: any): Promise<MediaInstance[]>;
    /**
     * Retrieve a single page of MediaInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: MediaPage) => any): Promise<MediaPage>;
    /**
     * Retrieve a single page of MediaInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MediaListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: MediaListInstancePageOptions, callback?: (error: Error | null, items: MediaPage) => any): Promise<MediaPage>;
    page(params?: any, callback?: any): Promise<MediaPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface MediaSolution {
    accountSid?: string;
    messageSid?: string;
}
export declare function MediaListInstance(version: V2010, accountSid: string, messageSid: string): MediaListInstance;
export declare class MediaPage extends Page<V2010, MediaPayload, MediaResource, MediaInstance> {
    /**
     * Initialize the MediaPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: MediaSolution);
    /**
     * Build an instance of MediaInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: MediaResource): MediaInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
