/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
/**
 * Options to pass to fetch a TaskQueueStatisticsInstance
 *
 * @property { Date } [endDate] Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default is 15 minutes.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { string } [taskChannel] Only calculate real-time and cumulative statistics for the specified TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 * @property { string } [splitByWaitTime] A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed.
 */
export interface TaskQueueStatisticsContextFetchOptions {
    endDate?: Date;
    minutes?: number;
    startDate?: Date;
    taskChannel?: string;
    splitByWaitTime?: string;
}
export interface TaskQueueStatisticsContext {
    /**
     * Fetch a TaskQueueStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskQueueStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: TaskQueueStatisticsInstance) => any): Promise<TaskQueueStatisticsInstance>;
    /**
     * Fetch a TaskQueueStatisticsInstance
     *
     * @param { TaskQueueStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskQueueStatisticsInstance
     */
    fetch(params: TaskQueueStatisticsContextFetchOptions, callback?: (error: Error | null, item?: TaskQueueStatisticsInstance) => any): Promise<TaskQueueStatisticsInstance>;
    fetch(params?: any, callback?: any): Promise<TaskQueueStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TaskQueueStatisticsContextSolution {
    workspaceSid?: string;
    taskQueueSid?: string;
}
export declare class TaskQueueStatisticsContextImpl implements TaskQueueStatisticsContext {
    protected _version: V1;
    protected _solution: TaskQueueStatisticsContextSolution;
    protected _uri: string;
    constructor(_version: V1, workspaceSid: string, taskQueueSid: string);
    fetch(params?: any, callback?: any): Promise<TaskQueueStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): TaskQueueStatisticsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface TaskQueueStatisticsResource {
    account_sid?: string | null;
    cumulative?: any | null;
    realtime?: any | null;
    task_queue_sid?: string | null;
    workspace_sid?: string | null;
    url?: string | null;
}
export declare class TaskQueueStatisticsInstance {
    protected _version: V1;
    protected _solution: TaskQueueStatisticsContextSolution;
    protected _context?: TaskQueueStatisticsContext;
    constructor(_version: V1, payload: TaskQueueStatisticsResource, workspaceSid: string, taskQueueSid: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * An object that contains the cumulative statistics for the TaskQueue
     */
    cumulative?: any | null;
    /**
     * An object that contains the real-time statistics for the TaskQueue
     */
    realtime?: any | null;
    /**
     * The SID of the TaskQueue from which these statistics were calculated
     */
    taskQueueSid?: string | null;
    /**
     * The SID of the Workspace that contains the TaskQueue
     */
    workspaceSid?: string | null;
    /**
     * The absolute URL of the TaskQueue statistics resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a TaskQueueStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskQueueStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: TaskQueueStatisticsInstance) => any): Promise<TaskQueueStatisticsInstance>;
    /**
     * Fetch a TaskQueueStatisticsInstance
     *
     * @param { TaskQueueStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskQueueStatisticsInstance
     */
    fetch(params: TaskQueueStatisticsContextFetchOptions, callback?: (error: Error | null, item?: TaskQueueStatisticsInstance) => any): Promise<TaskQueueStatisticsInstance>;
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
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface TaskQueueStatisticsListInstance {
    (): TaskQueueStatisticsContext;
    get(): TaskQueueStatisticsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TaskQueueStatisticsSolution {
    workspaceSid?: string;
    taskQueueSid?: string;
}
export declare function TaskQueueStatisticsListInstance(version: V1, workspaceSid: string, taskQueueSid: string): TaskQueueStatisticsListInstance;
export {};
