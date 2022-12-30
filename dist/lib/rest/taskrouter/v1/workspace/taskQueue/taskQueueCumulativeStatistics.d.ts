/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
/**
 * Options to pass to fetch a TaskQueueCumulativeStatisticsInstance
 *
 * @property { Date } [endDate] Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default is 15 minutes.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { string } [taskChannel] Only calculate cumulative statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 * @property { string } [splitByWaitTime] A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed. TaskRouter will calculate statistics on up to 10,000 Tasks/Reservations for any given threshold.
 */
export interface TaskQueueCumulativeStatisticsContextFetchOptions {
    endDate?: Date;
    minutes?: number;
    startDate?: Date;
    taskChannel?: string;
    splitByWaitTime?: string;
}
export interface TaskQueueCumulativeStatisticsContext {
    /**
     * Fetch a TaskQueueCumulativeStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskQueueCumulativeStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: TaskQueueCumulativeStatisticsInstance) => any): Promise<TaskQueueCumulativeStatisticsInstance>;
    /**
     * Fetch a TaskQueueCumulativeStatisticsInstance
     *
     * @param { TaskQueueCumulativeStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskQueueCumulativeStatisticsInstance
     */
    fetch(params: TaskQueueCumulativeStatisticsContextFetchOptions, callback?: (error: Error | null, item?: TaskQueueCumulativeStatisticsInstance) => any): Promise<TaskQueueCumulativeStatisticsInstance>;
    fetch(params?: any, callback?: any): Promise<TaskQueueCumulativeStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TaskQueueCumulativeStatisticsContextSolution {
    workspaceSid?: string;
    taskQueueSid?: string;
}
export declare class TaskQueueCumulativeStatisticsContextImpl implements TaskQueueCumulativeStatisticsContext {
    protected _version: V1;
    protected _solution: TaskQueueCumulativeStatisticsContextSolution;
    protected _uri: string;
    constructor(_version: V1, workspaceSid: string, taskQueueSid: string);
    fetch(params?: any, callback?: any): Promise<TaskQueueCumulativeStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): TaskQueueCumulativeStatisticsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface TaskQueueCumulativeStatisticsResource {
    account_sid?: string | null;
    avg_task_acceptance_time?: number | null;
    start_time?: Date | null;
    end_time?: Date | null;
    reservations_created?: number | null;
    reservations_accepted?: number | null;
    reservations_rejected?: number | null;
    reservations_timed_out?: number | null;
    reservations_canceled?: number | null;
    reservations_rescinded?: number | null;
    split_by_wait_time?: any | null;
    task_queue_sid?: string | null;
    wait_duration_until_accepted?: any | null;
    wait_duration_until_canceled?: any | null;
    wait_duration_in_queue_until_accepted?: any | null;
    tasks_canceled?: number | null;
    tasks_completed?: number | null;
    tasks_deleted?: number | null;
    tasks_entered?: number | null;
    tasks_moved?: number | null;
    workspace_sid?: string | null;
    url?: string | null;
}
export declare class TaskQueueCumulativeStatisticsInstance {
    protected _version: V1;
    protected _solution: TaskQueueCumulativeStatisticsContextSolution;
    protected _context?: TaskQueueCumulativeStatisticsContext;
    constructor(_version: V1, payload: TaskQueueCumulativeStatisticsResource, workspaceSid: string, taskQueueSid: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The average time in seconds between Task creation and acceptance
     */
    avgTaskAcceptanceTime?: number | null;
    /**
     * The beginning of the interval during which these statistics were calculated
     */
    startTime?: Date | null;
    /**
     * The end of the interval during which these statistics were calculated
     */
    endTime?: Date | null;
    /**
     * The total number of Reservations created for Tasks in the TaskQueue
     */
    reservationsCreated?: number | null;
    /**
     * The total number of Reservations accepted for Tasks in the TaskQueue
     */
    reservationsAccepted?: number | null;
    /**
     * The total number of Reservations rejected for Tasks in the TaskQueue
     */
    reservationsRejected?: number | null;
    /**
     * The total number of Reservations that timed out for Tasks in the TaskQueue
     */
    reservationsTimedOut?: number | null;
    /**
     * The total number of Reservations canceled for Tasks in the TaskQueue
     */
    reservationsCanceled?: number | null;
    /**
     * The total number of Reservations rescinded
     */
    reservationsRescinded?: number | null;
    /**
     * A list of objects that describe the Tasks canceled and reservations accepted above and below the specified thresholds
     */
    splitByWaitTime?: any | null;
    /**
     * The SID of the TaskQueue from which these statistics were calculated
     */
    taskQueueSid?: string | null;
    /**
     * The wait duration statistics for Tasks accepted while in the TaskQueue
     */
    waitDurationUntilAccepted?: any | null;
    /**
     * The wait duration statistics for Tasks canceled while in the TaskQueue
     */
    waitDurationUntilCanceled?: any | null;
    /**
     * The relative wait duration statistics for Tasks accepted while in the TaskQueue
     */
    waitDurationInQueueUntilAccepted?: any | null;
    /**
     * The total number of Tasks canceled in the TaskQueue
     */
    tasksCanceled?: number | null;
    /**
     * The total number of Tasks completed in the TaskQueue
     */
    tasksCompleted?: number | null;
    /**
     * The total number of Tasks deleted in the TaskQueue
     */
    tasksDeleted?: number | null;
    /**
     * The total number of Tasks entered into the TaskQueue
     */
    tasksEntered?: number | null;
    /**
     * The total number of Tasks that were moved from one queue to another
     */
    tasksMoved?: number | null;
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
     * Fetch a TaskQueueCumulativeStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskQueueCumulativeStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: TaskQueueCumulativeStatisticsInstance) => any): Promise<TaskQueueCumulativeStatisticsInstance>;
    /**
     * Fetch a TaskQueueCumulativeStatisticsInstance
     *
     * @param { TaskQueueCumulativeStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskQueueCumulativeStatisticsInstance
     */
    fetch(params: TaskQueueCumulativeStatisticsContextFetchOptions, callback?: (error: Error | null, item?: TaskQueueCumulativeStatisticsInstance) => any): Promise<TaskQueueCumulativeStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        avgTaskAcceptanceTime: number | null | undefined;
        startTime: Date | null | undefined;
        endTime: Date | null | undefined;
        reservationsCreated: number | null | undefined;
        reservationsAccepted: number | null | undefined;
        reservationsRejected: number | null | undefined;
        reservationsTimedOut: number | null | undefined;
        reservationsCanceled: number | null | undefined;
        reservationsRescinded: number | null | undefined;
        splitByWaitTime: any;
        taskQueueSid: string | null | undefined;
        waitDurationUntilAccepted: any;
        waitDurationUntilCanceled: any;
        waitDurationInQueueUntilAccepted: any;
        tasksCanceled: number | null | undefined;
        tasksCompleted: number | null | undefined;
        tasksDeleted: number | null | undefined;
        tasksEntered: number | null | undefined;
        tasksMoved: number | null | undefined;
        workspaceSid: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface TaskQueueCumulativeStatisticsListInstance {
    (): TaskQueueCumulativeStatisticsContext;
    get(): TaskQueueCumulativeStatisticsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TaskQueueCumulativeStatisticsSolution {
    workspaceSid?: string;
    taskQueueSid?: string;
}
export declare function TaskQueueCumulativeStatisticsListInstance(version: V1, workspaceSid: string, taskQueueSid: string): TaskQueueCumulativeStatisticsListInstance;
export {};
