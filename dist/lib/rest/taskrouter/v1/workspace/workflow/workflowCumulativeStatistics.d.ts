/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
/**
 * Options to pass to fetch a WorkflowCumulativeStatisticsInstance
 *
 * @property { Date } [endDate] Only include usage that occurred on or before this date, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { string } [taskChannel] Only calculate cumulative statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 * @property { string } [splitByWaitTime] A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed. For example, `5,30` would show splits of Tasks that were canceled or accepted before and after 5 seconds and before and after 30 seconds. This can be used to show short abandoned Tasks or Tasks that failed to meet an SLA. TaskRouter will calculate statistics on up to 10,000 Tasks for any given threshold.
 */
export interface WorkflowCumulativeStatisticsContextFetchOptions {
    endDate?: Date;
    minutes?: number;
    startDate?: Date;
    taskChannel?: string;
    splitByWaitTime?: string;
}
export interface WorkflowCumulativeStatisticsContext {
    /**
     * Fetch a WorkflowCumulativeStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkflowCumulativeStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkflowCumulativeStatisticsInstance) => any): Promise<WorkflowCumulativeStatisticsInstance>;
    /**
     * Fetch a WorkflowCumulativeStatisticsInstance
     *
     * @param { WorkflowCumulativeStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkflowCumulativeStatisticsInstance
     */
    fetch(params: WorkflowCumulativeStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkflowCumulativeStatisticsInstance) => any): Promise<WorkflowCumulativeStatisticsInstance>;
    fetch(params?: any, callback?: any): Promise<WorkflowCumulativeStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkflowCumulativeStatisticsContextSolution {
    workspaceSid?: string;
    workflowSid?: string;
}
export declare class WorkflowCumulativeStatisticsContextImpl implements WorkflowCumulativeStatisticsContext {
    protected _version: V1;
    protected _solution: WorkflowCumulativeStatisticsContextSolution;
    protected _uri: string;
    constructor(_version: V1, workspaceSid: string, workflowSid: string);
    fetch(params?: any, callback?: any): Promise<WorkflowCumulativeStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): WorkflowCumulativeStatisticsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface WorkflowCumulativeStatisticsResource {
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
    wait_duration_until_accepted?: any | null;
    wait_duration_until_canceled?: any | null;
    tasks_canceled?: number | null;
    tasks_completed?: number | null;
    tasks_entered?: number | null;
    tasks_deleted?: number | null;
    tasks_moved?: number | null;
    tasks_timed_out_in_workflow?: number | null;
    workflow_sid?: string | null;
    workspace_sid?: string | null;
    url?: string | null;
}
export declare class WorkflowCumulativeStatisticsInstance {
    protected _version: V1;
    protected _solution: WorkflowCumulativeStatisticsContextSolution;
    protected _context?: WorkflowCumulativeStatisticsContext;
    constructor(_version: V1, payload: WorkflowCumulativeStatisticsResource, workspaceSid: string, workflowSid: string);
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
     * The total number of Reservations that were created for Workers
     */
    reservationsCreated?: number | null;
    /**
     * The total number of Reservations accepted by Workers
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
     * A list of objects that describe the Tasks canceled and reservations accepted above and below the specified thresholds
     */
    splitByWaitTime?: any | null;
    /**
     * The wait duration statistics for Tasks that were accepted
     */
    waitDurationUntilAccepted?: any | null;
    /**
     * The wait duration statistics for Tasks that were canceled
     */
    waitDurationUntilCanceled?: any | null;
    /**
     * The total number of Tasks that were canceled
     */
    tasksCanceled?: number | null;
    /**
     * The total number of Tasks that were completed
     */
    tasksCompleted?: number | null;
    /**
     * The total number of Tasks that entered the Workflow
     */
    tasksEntered?: number | null;
    /**
     * The total number of Tasks that were deleted
     */
    tasksDeleted?: number | null;
    /**
     * The total number of Tasks that were moved from one queue to another
     */
    tasksMoved?: number | null;
    /**
     * The total number of Tasks that were timed out of their Workflows
     */
    tasksTimedOutInWorkflow?: number | null;
    /**
     * Returns the list of Tasks that are being controlled by the Workflow with the specified Sid value
     */
    workflowSid?: string | null;
    /**
     * The SID of the Workspace that contains the Workflow.
     */
    workspaceSid?: string | null;
    /**
     * The absolute URL of the Workflow statistics resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a WorkflowCumulativeStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkflowCumulativeStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkflowCumulativeStatisticsInstance) => any): Promise<WorkflowCumulativeStatisticsInstance>;
    /**
     * Fetch a WorkflowCumulativeStatisticsInstance
     *
     * @param { WorkflowCumulativeStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkflowCumulativeStatisticsInstance
     */
    fetch(params: WorkflowCumulativeStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkflowCumulativeStatisticsInstance) => any): Promise<WorkflowCumulativeStatisticsInstance>;
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
        waitDurationUntilAccepted: any;
        waitDurationUntilCanceled: any;
        tasksCanceled: number | null | undefined;
        tasksCompleted: number | null | undefined;
        tasksEntered: number | null | undefined;
        tasksDeleted: number | null | undefined;
        tasksMoved: number | null | undefined;
        tasksTimedOutInWorkflow: number | null | undefined;
        workflowSid: string | null | undefined;
        workspaceSid: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface WorkflowCumulativeStatisticsListInstance {
    (): WorkflowCumulativeStatisticsContext;
    get(): WorkflowCumulativeStatisticsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkflowCumulativeStatisticsSolution {
    workspaceSid?: string;
    workflowSid?: string;
}
export declare function WorkflowCumulativeStatisticsListInstance(version: V1, workspaceSid: string, workflowSid: string): WorkflowCumulativeStatisticsListInstance;
export {};
