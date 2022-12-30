/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
declare type UsageRecordGranularity = "hourly" | "daily" | "all";
/**
 * Options to pass to each
 *
 * @property { Date } [end] Only include usage that occurred on or before this date, specified in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html). The default is the current time.
 * @property { Date } [start] Only include usage that has occurred on or after this date, specified in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html). The default is one month before the `end` parameter value.
 * @property { UsageRecordGranularity } [granularity] How to summarize the usage by time. Can be: `daily`, `hourly`, or `all`. The default is `all`. A value of `all` returns one Usage Record that describes the usage for the entire period.
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
export interface UsageRecordListInstanceEachOptions {
    end?: Date;
    start?: Date;
    granularity?: UsageRecordGranularity;
    pageSize?: number;
    callback?: (item: UsageRecordInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { Date } [end] Only include usage that occurred on or before this date, specified in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html). The default is the current time.
 * @property { Date } [start] Only include usage that has occurred on or after this date, specified in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html). The default is one month before the `end` parameter value.
 * @property { UsageRecordGranularity } [granularity] How to summarize the usage by time. Can be: `daily`, `hourly`, or `all`. The default is `all`. A value of `all` returns one Usage Record that describes the usage for the entire period.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface UsageRecordListInstanceOptions {
    end?: Date;
    start?: Date;
    granularity?: UsageRecordGranularity;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { Date } [end] Only include usage that occurred on or before this date, specified in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html). The default is the current time.
 * @property { Date } [start] Only include usage that has occurred on or after this date, specified in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html). The default is one month before the `end` parameter value.
 * @property { UsageRecordGranularity } [granularity] How to summarize the usage by time. Can be: `daily`, `hourly`, or `all`. The default is `all`. A value of `all` returns one Usage Record that describes the usage for the entire period.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface UsageRecordListInstancePageOptions {
    end?: Date;
    start?: Date;
    granularity?: UsageRecordGranularity;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface UsageRecordListInstance {
    /**
     * Streams UsageRecordInstance records from the API.
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
    each(callback?: (item: UsageRecordInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams UsageRecordInstance records from the API.
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
     * @param { UsageRecordListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: UsageRecordListInstanceEachOptions, callback?: (item: UsageRecordInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of UsageRecordInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: UsageRecordPage) => any): Promise<UsageRecordPage>;
    /**
     * Retrieve a single target page of UsageRecordInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: UsageRecordPage) => any): Promise<UsageRecordPage>;
    getPage(params?: any, callback?: any): Promise<UsageRecordPage>;
    /**
     * Lists UsageRecordInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: UsageRecordInstance[]) => any): Promise<UsageRecordInstance[]>;
    /**
     * Lists UsageRecordInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { UsageRecordListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: UsageRecordListInstanceOptions, callback?: (error: Error | null, items: UsageRecordInstance[]) => any): Promise<UsageRecordInstance[]>;
    list(params?: any, callback?: any): Promise<UsageRecordInstance[]>;
    /**
     * Retrieve a single page of UsageRecordInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: UsageRecordPage) => any): Promise<UsageRecordPage>;
    /**
     * Retrieve a single page of UsageRecordInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { UsageRecordListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: UsageRecordListInstancePageOptions, callback?: (error: Error | null, items: UsageRecordPage) => any): Promise<UsageRecordPage>;
    page(params?: any, callback?: any): Promise<UsageRecordPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UsageRecordSolution {
    simSid?: string;
}
export declare function UsageRecordListInstance(version: V1, simSid: string): UsageRecordListInstance;
interface UsageRecordPayload extends TwilioResponsePayload {
    usage_records: UsageRecordResource[];
}
interface UsageRecordResource {
    sim_sid?: string | null;
    account_sid?: string | null;
    period?: any | null;
    commands?: any | null;
    data?: any | null;
}
export declare class UsageRecordInstance {
    protected _version: V1;
    constructor(_version: V1, payload: UsageRecordResource, simSid: string);
    /**
     * The SID of the Sim resource that this Usage Record is for
     */
    simSid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The time period for which the usage is reported
     */
    period?: any | null;
    /**
     * An object that describes the SIM\'s usage of Commands during the specified period
     */
    commands?: any | null;
    /**
     * An object that describes the SIM\'s data usage during the specified period
     */
    data?: any | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        simSid: string | null | undefined;
        accountSid: string | null | undefined;
        period: any;
        commands: any;
        data: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class UsageRecordPage extends Page<V1, UsageRecordPayload, UsageRecordResource, UsageRecordInstance> {
    /**
     * Initialize the UsageRecordPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: UsageRecordSolution);
    /**
     * Build an instance of UsageRecordInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: UsageRecordResource): UsageRecordInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
