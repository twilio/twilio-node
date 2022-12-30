/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
/**
 * Options to pass to each
 *
 * @property { string } [logLevel] Only show alerts for this log-level.  Can be: `error`, `warning`, `notice`, or `debug`.
 * @property { Date } [startDate] Only include alerts that occurred on or after this date and time. Specify the date and time in GMT and format as `YYYY-MM-DD` or `YYYY-MM-DDThh:mm:ssZ`. Queries for alerts older than 30 days are not supported.
 * @property { Date } [endDate] Only include alerts that occurred on or before this date and time. Specify the date and time in GMT and format as `YYYY-MM-DD` or `YYYY-MM-DDThh:mm:ssZ`. Queries for alerts older than 30 days are not supported.
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
export interface AlertListInstanceEachOptions {
    logLevel?: string;
    startDate?: Date;
    endDate?: Date;
    pageSize?: number;
    callback?: (item: AlertInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [logLevel] Only show alerts for this log-level.  Can be: `error`, `warning`, `notice`, or `debug`.
 * @property { Date } [startDate] Only include alerts that occurred on or after this date and time. Specify the date and time in GMT and format as `YYYY-MM-DD` or `YYYY-MM-DDThh:mm:ssZ`. Queries for alerts older than 30 days are not supported.
 * @property { Date } [endDate] Only include alerts that occurred on or before this date and time. Specify the date and time in GMT and format as `YYYY-MM-DD` or `YYYY-MM-DDThh:mm:ssZ`. Queries for alerts older than 30 days are not supported.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface AlertListInstanceOptions {
    logLevel?: string;
    startDate?: Date;
    endDate?: Date;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [logLevel] Only show alerts for this log-level.  Can be: `error`, `warning`, `notice`, or `debug`.
 * @property { Date } [startDate] Only include alerts that occurred on or after this date and time. Specify the date and time in GMT and format as `YYYY-MM-DD` or `YYYY-MM-DDThh:mm:ssZ`. Queries for alerts older than 30 days are not supported.
 * @property { Date } [endDate] Only include alerts that occurred on or before this date and time. Specify the date and time in GMT and format as `YYYY-MM-DD` or `YYYY-MM-DDThh:mm:ssZ`. Queries for alerts older than 30 days are not supported.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface AlertListInstancePageOptions {
    logLevel?: string;
    startDate?: Date;
    endDate?: Date;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface AlertContext {
    /**
     * Fetch a AlertInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AlertInstance
     */
    fetch(callback?: (error: Error | null, item?: AlertInstance) => any): Promise<AlertInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AlertContextSolution {
    sid?: string;
}
export declare class AlertContextImpl implements AlertContext {
    protected _version: V1;
    protected _solution: AlertContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    fetch(callback?: any): Promise<AlertInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AlertContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare type AlertRequestMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
interface AlertPayload extends TwilioResponsePayload {
    alerts: AlertResource[];
}
interface AlertResource {
    account_sid?: string | null;
    alert_text?: string | null;
    api_version?: string | null;
    date_created?: Date | null;
    date_generated?: Date | null;
    date_updated?: Date | null;
    error_code?: string | null;
    log_level?: string | null;
    more_info?: string | null;
    request_method?: AlertRequestMethod;
    request_url?: string | null;
    request_variables?: string | null;
    resource_sid?: string | null;
    response_body?: string | null;
    response_headers?: string | null;
    sid?: string | null;
    url?: string | null;
    request_headers?: string | null;
    service_sid?: string | null;
}
export declare class AlertInstance {
    protected _version: V1;
    protected _solution: AlertContextSolution;
    protected _context?: AlertContext;
    constructor(_version: V1, payload: AlertResource, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The text of the alert
     */
    alertText?: string | null;
    /**
     * The API version used when the alert was generated
     */
    apiVersion?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The date and time when the alert was generated specified in ISO 8601 format
     */
    dateGenerated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The error code for the condition that generated the alert
     */
    errorCode?: string | null;
    /**
     * The log level
     */
    logLevel?: string | null;
    /**
     * The URL of the page in our Error Dictionary with more information about the error condition
     */
    moreInfo?: string | null;
    /**
     * The method used by the request that generated the alert
     */
    requestMethod?: AlertRequestMethod;
    /**
     * The URL of the request that generated the alert
     */
    requestUrl?: string | null;
    /**
     * The variables passed in the request that generated the alert
     */
    requestVariables?: string | null;
    /**
     * The SID of the resource for which the alert was generated
     */
    resourceSid?: string | null;
    /**
     * The response body of the request that generated the alert
     */
    responseBody?: string | null;
    /**
     * The response headers of the request that generated the alert
     */
    responseHeaders?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The absolute URL of the Alert resource
     */
    url?: string | null;
    /**
     * The request headers of the request that generated the alert
     */
    requestHeaders?: string | null;
    /**
     * The SID of the service or resource that generated the alert
     */
    serviceSid?: string | null;
    private get _proxy();
    /**
     * Fetch a AlertInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AlertInstance
     */
    fetch(callback?: (error: Error | null, item?: AlertInstance) => any): Promise<AlertInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        alertText: string | null | undefined;
        apiVersion: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateGenerated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        errorCode: string | null | undefined;
        logLevel: string | null | undefined;
        moreInfo: string | null | undefined;
        requestMethod: AlertRequestMethod | undefined;
        requestUrl: string | null | undefined;
        requestVariables: string | null | undefined;
        resourceSid: string | null | undefined;
        responseBody: string | null | undefined;
        responseHeaders: string | null | undefined;
        sid: string | null | undefined;
        url: string | null | undefined;
        requestHeaders: string | null | undefined;
        serviceSid: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AlertListInstance {
    (sid: string): AlertContext;
    get(sid: string): AlertContext;
    /**
     * Streams AlertInstance records from the API.
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
    each(callback?: (item: AlertInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams AlertInstance records from the API.
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
     * @param { AlertListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: AlertListInstanceEachOptions, callback?: (item: AlertInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of AlertInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: AlertPage) => any): Promise<AlertPage>;
    /**
     * Retrieve a single target page of AlertInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: AlertPage) => any): Promise<AlertPage>;
    getPage(params?: any, callback?: any): Promise<AlertPage>;
    /**
     * Lists AlertInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: AlertInstance[]) => any): Promise<AlertInstance[]>;
    /**
     * Lists AlertInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AlertListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: AlertListInstanceOptions, callback?: (error: Error | null, items: AlertInstance[]) => any): Promise<AlertInstance[]>;
    list(params?: any, callback?: any): Promise<AlertInstance[]>;
    /**
     * Retrieve a single page of AlertInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: AlertPage) => any): Promise<AlertPage>;
    /**
     * Retrieve a single page of AlertInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AlertListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: AlertListInstancePageOptions, callback?: (error: Error | null, items: AlertPage) => any): Promise<AlertPage>;
    page(params?: any, callback?: any): Promise<AlertPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AlertSolution {
}
export declare function AlertListInstance(version: V1): AlertListInstance;
export declare class AlertPage extends Page<V1, AlertPayload, AlertResource, AlertInstance> {
    /**
     * Initialize the AlertPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: AlertSolution);
    /**
     * Build an instance of AlertInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: AlertResource): AlertInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
