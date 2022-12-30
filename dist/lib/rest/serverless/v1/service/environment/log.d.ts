/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
declare type LogLevel = "info" | "warn" | "error";
/**
 * Options to pass to each
 *
 * @property { string } [functionSid] The SID of the function whose invocation produced the Log resources to read.
 * @property { Date } [startDate] The date/time (in GMT, ISO 8601) after which the Log resources must have been created. Defaults to 1 day prior to current date/time.
 * @property { Date } [endDate] The date/time (in GMT, ISO 8601) before which the Log resources must have been created. Defaults to current date/time.
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
export interface LogListInstanceEachOptions {
    functionSid?: string;
    startDate?: Date;
    endDate?: Date;
    pageSize?: number;
    callback?: (item: LogInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [functionSid] The SID of the function whose invocation produced the Log resources to read.
 * @property { Date } [startDate] The date/time (in GMT, ISO 8601) after which the Log resources must have been created. Defaults to 1 day prior to current date/time.
 * @property { Date } [endDate] The date/time (in GMT, ISO 8601) before which the Log resources must have been created. Defaults to current date/time.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface LogListInstanceOptions {
    functionSid?: string;
    startDate?: Date;
    endDate?: Date;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [functionSid] The SID of the function whose invocation produced the Log resources to read.
 * @property { Date } [startDate] The date/time (in GMT, ISO 8601) after which the Log resources must have been created. Defaults to 1 day prior to current date/time.
 * @property { Date } [endDate] The date/time (in GMT, ISO 8601) before which the Log resources must have been created. Defaults to current date/time.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface LogListInstancePageOptions {
    functionSid?: string;
    startDate?: Date;
    endDate?: Date;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface LogContext {
    /**
     * Fetch a LogInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed LogInstance
     */
    fetch(callback?: (error: Error | null, item?: LogInstance) => any): Promise<LogInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface LogContextSolution {
    serviceSid?: string;
    environmentSid?: string;
    sid?: string;
}
export declare class LogContextImpl implements LogContext {
    protected _version: V1;
    protected _solution: LogContextSolution;
    protected _uri: string;
    constructor(_version: V1, serviceSid: string, environmentSid: string, sid: string);
    fetch(callback?: any): Promise<LogInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): LogContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface LogPayload extends TwilioResponsePayload {
    logs: LogResource[];
}
interface LogResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    environment_sid?: string | null;
    build_sid?: string | null;
    deployment_sid?: string | null;
    function_sid?: string | null;
    request_sid?: string | null;
    level?: LogLevel;
    message?: string | null;
    date_created?: Date | null;
    url?: string | null;
}
export declare class LogInstance {
    protected _version: V1;
    protected _solution: LogContextSolution;
    protected _context?: LogContext;
    constructor(_version: V1, payload: LogResource, serviceSid: string, environmentSid: string, sid?: string);
    /**
     * The unique string that identifies the Log resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the Log resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Service that the Log resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The SID of the environment in which the log occurred
     */
    environmentSid?: string | null;
    /**
     * The SID of the build that corresponds to the log
     */
    buildSid?: string | null;
    /**
     * The SID of the deployment that corresponds to the log
     */
    deploymentSid?: string | null;
    /**
     * The SID of the function whose invocation produced the log
     */
    functionSid?: string | null;
    /**
     * The SID of the request associated with the log
     */
    requestSid?: string | null;
    level?: LogLevel;
    /**
     * The log message
     */
    message?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the Log resource was created
     */
    dateCreated?: Date | null;
    /**
     * The absolute URL of the Log resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a LogInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed LogInstance
     */
    fetch(callback?: (error: Error | null, item?: LogInstance) => any): Promise<LogInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        environmentSid: string | null | undefined;
        buildSid: string | null | undefined;
        deploymentSid: string | null | undefined;
        functionSid: string | null | undefined;
        requestSid: string | null | undefined;
        level: LogLevel | undefined;
        message: string | null | undefined;
        dateCreated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface LogListInstance {
    (sid: string): LogContext;
    get(sid: string): LogContext;
    /**
     * Streams LogInstance records from the API.
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
    each(callback?: (item: LogInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams LogInstance records from the API.
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
     * @param { LogListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: LogListInstanceEachOptions, callback?: (item: LogInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of LogInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: LogPage) => any): Promise<LogPage>;
    /**
     * Retrieve a single target page of LogInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: LogPage) => any): Promise<LogPage>;
    getPage(params?: any, callback?: any): Promise<LogPage>;
    /**
     * Lists LogInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: LogInstance[]) => any): Promise<LogInstance[]>;
    /**
     * Lists LogInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { LogListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: LogListInstanceOptions, callback?: (error: Error | null, items: LogInstance[]) => any): Promise<LogInstance[]>;
    list(params?: any, callback?: any): Promise<LogInstance[]>;
    /**
     * Retrieve a single page of LogInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: LogPage) => any): Promise<LogPage>;
    /**
     * Retrieve a single page of LogInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { LogListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: LogListInstancePageOptions, callback?: (error: Error | null, items: LogPage) => any): Promise<LogPage>;
    page(params?: any, callback?: any): Promise<LogPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface LogSolution {
    serviceSid?: string;
    environmentSid?: string;
}
export declare function LogListInstance(version: V1, serviceSid: string, environmentSid: string): LogListInstance;
export declare class LogPage extends Page<V1, LogPayload, LogResource, LogInstance> {
    /**
     * Initialize the LogPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: LogSolution);
    /**
     * Build an instance of LogInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: LogResource): LogInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
