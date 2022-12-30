/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
/**
 * Options to pass to each
 *
 * @property { Date } [endDate] Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { string } [friendlyName] The `friendly_name` of the TaskQueue statistics to read.
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default is 15 minutes.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { string } [taskChannel] Only calculate statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 * @property { string } [splitByWaitTime] A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed.
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
export interface TaskQueuesStatisticsListInstanceEachOptions {
    endDate?: Date;
    friendlyName?: string;
    minutes?: number;
    startDate?: Date;
    taskChannel?: string;
    splitByWaitTime?: string;
    pageSize?: number;
    callback?: (item: TaskQueuesStatisticsInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { Date } [endDate] Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { string } [friendlyName] The `friendly_name` of the TaskQueue statistics to read.
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default is 15 minutes.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { string } [taskChannel] Only calculate statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 * @property { string } [splitByWaitTime] A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface TaskQueuesStatisticsListInstanceOptions {
    endDate?: Date;
    friendlyName?: string;
    minutes?: number;
    startDate?: Date;
    taskChannel?: string;
    splitByWaitTime?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { Date } [endDate] Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { string } [friendlyName] The `friendly_name` of the TaskQueue statistics to read.
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default is 15 minutes.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { string } [taskChannel] Only calculate statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 * @property { string } [splitByWaitTime] A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface TaskQueuesStatisticsListInstancePageOptions {
    endDate?: Date;
    friendlyName?: string;
    minutes?: number;
    startDate?: Date;
    taskChannel?: string;
    splitByWaitTime?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface TaskQueuesStatisticsListInstance {
    /**
     * Streams TaskQueuesStatisticsInstance records from the API.
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
    each(callback?: (item: TaskQueuesStatisticsInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams TaskQueuesStatisticsInstance records from the API.
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
     * @param { TaskQueuesStatisticsListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: TaskQueuesStatisticsListInstanceEachOptions, callback?: (item: TaskQueuesStatisticsInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of TaskQueuesStatisticsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: TaskQueuesStatisticsPage) => any): Promise<TaskQueuesStatisticsPage>;
    /**
     * Retrieve a single target page of TaskQueuesStatisticsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: TaskQueuesStatisticsPage) => any): Promise<TaskQueuesStatisticsPage>;
    getPage(params?: any, callback?: any): Promise<TaskQueuesStatisticsPage>;
    /**
     * Lists TaskQueuesStatisticsInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: TaskQueuesStatisticsInstance[]) => any): Promise<TaskQueuesStatisticsInstance[]>;
    /**
     * Lists TaskQueuesStatisticsInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TaskQueuesStatisticsListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: TaskQueuesStatisticsListInstanceOptions, callback?: (error: Error | null, items: TaskQueuesStatisticsInstance[]) => any): Promise<TaskQueuesStatisticsInstance[]>;
    list(params?: any, callback?: any): Promise<TaskQueuesStatisticsInstance[]>;
    /**
     * Retrieve a single page of TaskQueuesStatisticsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: TaskQueuesStatisticsPage) => any): Promise<TaskQueuesStatisticsPage>;
    /**
     * Retrieve a single page of TaskQueuesStatisticsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TaskQueuesStatisticsListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: TaskQueuesStatisticsListInstancePageOptions, callback?: (error: Error | null, items: TaskQueuesStatisticsPage) => any): Promise<TaskQueuesStatisticsPage>;
    page(params?: any, callback?: any): Promise<TaskQueuesStatisticsPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TaskQueuesStatisticsSolution {
    workspaceSid?: string;
}
export declare function TaskQueuesStatisticsListInstance(version: V1, workspaceSid: string): TaskQueuesStatisticsListInstance;
interface TaskQueuesStatisticsPayload extends TwilioResponsePayload {
    task_queues_statistics: TaskQueuesStatisticsResource[];
}
interface TaskQueuesStatisticsResource {
    account_sid?: string | null;
    cumulative?: any | null;
    realtime?: any | null;
    task_queue_sid?: string | null;
    workspace_sid?: string | null;
}
export declare class TaskQueuesStatisticsInstance {
    protected _version: V1;
    constructor(_version: V1, payload: TaskQueuesStatisticsResource, workspaceSid: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * An object that contains the cumulative statistics for the TaskQueues
     */
    cumulative?: any | null;
    /**
     * An object that contains the real-time statistics for the TaskQueues
     */
    realtime?: any | null;
    /**
     * The SID of the TaskQueue from which these statistics were calculated
     */
    taskQueueSid?: string | null;
    /**
     * The SID of the Workspace that contains the TaskQueues
     */
    workspaceSid?: string | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        cumulative: any;
        realtime: any;
        taskQueueSid: string | null | undefined;
        workspaceSid: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class TaskQueuesStatisticsPage extends Page<V1, TaskQueuesStatisticsPayload, TaskQueuesStatisticsResource, TaskQueuesStatisticsInstance> {
    /**
     * Initialize the TaskQueuesStatisticsPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: TaskQueuesStatisticsSolution);
    /**
     * Build an instance of TaskQueuesStatisticsInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: TaskQueuesStatisticsResource): TaskQueuesStatisticsInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
