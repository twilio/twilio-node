/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
/**
 * Options to pass to fetch a WorkersCumulativeStatisticsInstance
 *
 * @property { Date } [endDate] Only calculate statistics from this date and time and earlier, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { string } [taskChannel] Only calculate cumulative statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 */
export interface WorkersCumulativeStatisticsContextFetchOptions {
    endDate?: Date;
    minutes?: number;
    startDate?: Date;
    taskChannel?: string;
}
export interface WorkersCumulativeStatisticsContext {
    /**
     * Fetch a WorkersCumulativeStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkersCumulativeStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkersCumulativeStatisticsInstance) => any): Promise<WorkersCumulativeStatisticsInstance>;
    /**
     * Fetch a WorkersCumulativeStatisticsInstance
     *
     * @param { WorkersCumulativeStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkersCumulativeStatisticsInstance
     */
    fetch(params: WorkersCumulativeStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkersCumulativeStatisticsInstance) => any): Promise<WorkersCumulativeStatisticsInstance>;
    fetch(params?: any, callback?: any): Promise<WorkersCumulativeStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkersCumulativeStatisticsContextSolution {
    workspaceSid?: string;
}
export declare class WorkersCumulativeStatisticsContextImpl implements WorkersCumulativeStatisticsContext {
    protected _version: V1;
    protected _solution: WorkersCumulativeStatisticsContextSolution;
    protected _uri: string;
    constructor(_version: V1, workspaceSid: string);
    fetch(params?: any, callback?: any): Promise<WorkersCumulativeStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): WorkersCumulativeStatisticsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface WorkersCumulativeStatisticsResource {
    account_sid?: string | null;
    start_time?: Date | null;
    end_time?: Date | null;
    activity_durations?: Array<any> | null;
    reservations_created?: number | null;
    reservations_accepted?: number | null;
    reservations_rejected?: number | null;
    reservations_timed_out?: number | null;
    reservations_canceled?: number | null;
    reservations_rescinded?: number | null;
    workspace_sid?: string | null;
    url?: string | null;
}
export declare class WorkersCumulativeStatisticsInstance {
    protected _version: V1;
    protected _solution: WorkersCumulativeStatisticsContextSolution;
    protected _context?: WorkersCumulativeStatisticsContext;
    constructor(_version: V1, payload: WorkersCumulativeStatisticsResource, workspaceSid: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The beginning of the interval during which these statistics were calculated
     */
    startTime?: Date | null;
    /**
     * The end of the interval during which these statistics were calculated
     */
    endTime?: Date | null;
    /**
     * The minimum, average, maximum, and total time that Workers spent in each Activity
     */
    activityDurations?: Array<any> | null;
    /**
     * The total number of Reservations that were created
     */
    reservationsCreated?: number | null;
    /**
     * The total number of Reservations that were accepted
     */
    reservationsAccepted?: number | null;
    /**
     * The total number of Reservations that were rejected
     */
    reservationsRejected?: number | null;
    /**
     * The total number of Reservations that were timed out
     */
    reservationsTimedOut?: number | null;
    /**
     * The total number of Reservations that were canceled
     */
    reservationsCanceled?: number | null;
    /**
     * The total number of Reservations that were rescinded
     */
    reservationsRescinded?: number | null;
    /**
     * The SID of the Workspace that contains the Workers
     */
    workspaceSid?: string | null;
    /**
     * The absolute URL of the Workers statistics resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a WorkersCumulativeStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkersCumulativeStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkersCumulativeStatisticsInstance) => any): Promise<WorkersCumulativeStatisticsInstance>;
    /**
     * Fetch a WorkersCumulativeStatisticsInstance
     *
     * @param { WorkersCumulativeStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkersCumulativeStatisticsInstance
     */
    fetch(params: WorkersCumulativeStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkersCumulativeStatisticsInstance) => any): Promise<WorkersCumulativeStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        startTime: Date | null | undefined;
        endTime: Date | null | undefined;
        activityDurations: any[] | null | undefined;
        reservationsCreated: number | null | undefined;
        reservationsAccepted: number | null | undefined;
        reservationsRejected: number | null | undefined;
        reservationsTimedOut: number | null | undefined;
        reservationsCanceled: number | null | undefined;
        reservationsRescinded: number | null | undefined;
        workspaceSid: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface WorkersCumulativeStatisticsListInstance {
    (): WorkersCumulativeStatisticsContext;
    get(): WorkersCumulativeStatisticsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkersCumulativeStatisticsSolution {
    workspaceSid?: string;
}
export declare function WorkersCumulativeStatisticsListInstance(version: V1, workspaceSid: string): WorkersCumulativeStatisticsListInstance;
export {};
