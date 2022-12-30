/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
/**
 * Options to pass to each
 *
 * @property { number } [log] Only read notifications of the specified log level. Can be:  `0` to read only ERROR notifications or `1` to read only WARNING notifications. By default, all notifications are read.
 * @property { Date } [messageDate] Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date.
 * @property { Date } [messageDateBefore] Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date.
 * @property { Date } [messageDateAfter] Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date.
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
export interface NotificationListInstanceEachOptions {
    log?: number;
    messageDate?: Date;
    messageDateBefore?: Date;
    messageDateAfter?: Date;
    pageSize?: number;
    callback?: (item: NotificationInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { number } [log] Only read notifications of the specified log level. Can be:  `0` to read only ERROR notifications or `1` to read only WARNING notifications. By default, all notifications are read.
 * @property { Date } [messageDate] Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date.
 * @property { Date } [messageDateBefore] Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date.
 * @property { Date } [messageDateAfter] Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface NotificationListInstanceOptions {
    log?: number;
    messageDate?: Date;
    messageDateBefore?: Date;
    messageDateAfter?: Date;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { number } [log] Only read notifications of the specified log level. Can be:  `0` to read only ERROR notifications or `1` to read only WARNING notifications. By default, all notifications are read.
 * @property { Date } [messageDate] Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date.
 * @property { Date } [messageDateBefore] Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date.
 * @property { Date } [messageDateAfter] Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface NotificationListInstancePageOptions {
    log?: number;
    messageDate?: Date;
    messageDateBefore?: Date;
    messageDateAfter?: Date;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface NotificationContext {
    /**
     * Fetch a NotificationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NotificationInstance
     */
    fetch(callback?: (error: Error | null, item?: NotificationInstance) => any): Promise<NotificationInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface NotificationContextSolution {
    accountSid?: string;
    sid?: string;
}
export declare class NotificationContextImpl implements NotificationContext {
    protected _version: V2010;
    protected _solution: NotificationContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, sid: string);
    fetch(callback?: any): Promise<NotificationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): NotificationContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare type NotificationRequestMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
interface NotificationPayload extends TwilioResponsePayload {
    notifications: NotificationResource[];
}
interface NotificationResource {
    account_sid?: string | null;
    api_version?: string | null;
    call_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    error_code?: string | null;
    log?: string | null;
    message_date?: Date | null;
    message_text?: string | null;
    more_info?: string | null;
    request_method?: NotificationRequestMethod;
    request_url?: string | null;
    request_variables?: string | null;
    response_body?: string | null;
    response_headers?: string | null;
    sid?: string | null;
    uri?: string | null;
}
export declare class NotificationInstance {
    protected _version: V2010;
    protected _solution: NotificationContextSolution;
    protected _context?: NotificationContext;
    constructor(_version: V2010, payload: NotificationResource, accountSid: string, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The API version used to generate the notification
     */
    apiVersion?: string | null;
    /**
     * The SID of the Call the resource is associated with
     */
    callSid?: string | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * A unique error code corresponding to the notification
     */
    errorCode?: string | null;
    /**
     * An integer log level
     */
    log?: string | null;
    /**
     * The date the notification was generated
     */
    messageDate?: Date | null;
    /**
     * The text of the notification
     */
    messageText?: string | null;
    /**
     * A URL for more information about the error code
     */
    moreInfo?: string | null;
    /**
     * HTTP method used with the request url
     */
    requestMethod?: NotificationRequestMethod;
    /**
     * URL of the resource that generated the notification
     */
    requestUrl?: string | null;
    /**
     * Twilio-generated HTTP variables sent to the server
     */
    requestVariables?: string | null;
    /**
     * The HTTP body returned by your server
     */
    responseBody?: string | null;
    /**
     * The HTTP headers returned by your server
     */
    responseHeaders?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    private get _proxy();
    /**
     * Fetch a NotificationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NotificationInstance
     */
    fetch(callback?: (error: Error | null, item?: NotificationInstance) => any): Promise<NotificationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        apiVersion: string | null | undefined;
        callSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        errorCode: string | null | undefined;
        log: string | null | undefined;
        messageDate: Date | null | undefined;
        messageText: string | null | undefined;
        moreInfo: string | null | undefined;
        requestMethod: NotificationRequestMethod | undefined;
        requestUrl: string | null | undefined;
        requestVariables: string | null | undefined;
        responseBody: string | null | undefined;
        responseHeaders: string | null | undefined;
        sid: string | null | undefined;
        uri: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface NotificationListInstance {
    (sid: string): NotificationContext;
    get(sid: string): NotificationContext;
    /**
     * Streams NotificationInstance records from the API.
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
    each(callback?: (item: NotificationInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams NotificationInstance records from the API.
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
     * @param { NotificationListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: NotificationListInstanceEachOptions, callback?: (item: NotificationInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of NotificationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: NotificationPage) => any): Promise<NotificationPage>;
    /**
     * Retrieve a single target page of NotificationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: NotificationPage) => any): Promise<NotificationPage>;
    getPage(params?: any, callback?: any): Promise<NotificationPage>;
    /**
     * Lists NotificationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: NotificationInstance[]) => any): Promise<NotificationInstance[]>;
    /**
     * Lists NotificationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { NotificationListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: NotificationListInstanceOptions, callback?: (error: Error | null, items: NotificationInstance[]) => any): Promise<NotificationInstance[]>;
    list(params?: any, callback?: any): Promise<NotificationInstance[]>;
    /**
     * Retrieve a single page of NotificationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: NotificationPage) => any): Promise<NotificationPage>;
    /**
     * Retrieve a single page of NotificationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { NotificationListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: NotificationListInstancePageOptions, callback?: (error: Error | null, items: NotificationPage) => any): Promise<NotificationPage>;
    page(params?: any, callback?: any): Promise<NotificationPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface NotificationSolution {
    accountSid?: string;
}
export declare function NotificationListInstance(version: V2010, accountSid: string): NotificationListInstance;
export declare class NotificationPage extends Page<V2010, NotificationPayload, NotificationResource, NotificationInstance> {
    /**
     * Initialize the NotificationPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: NotificationSolution);
    /**
     * Build an instance of NotificationInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: NotificationResource): NotificationInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
