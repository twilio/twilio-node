/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
/**
 * Options to pass to fetch a TaskQueueRealTimeStatisticsInstance
 *
 * @property { string } [taskChannel] The TaskChannel for which to fetch statistics. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 */
export interface TaskQueueRealTimeStatisticsContextFetchOptions {
    taskChannel?: string;
}
export interface TaskQueueRealTimeStatisticsContext {
    /**
     * Fetch a TaskQueueRealTimeStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskQueueRealTimeStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: TaskQueueRealTimeStatisticsInstance) => any): Promise<TaskQueueRealTimeStatisticsInstance>;
    /**
     * Fetch a TaskQueueRealTimeStatisticsInstance
     *
     * @param { TaskQueueRealTimeStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskQueueRealTimeStatisticsInstance
     */
    fetch(params: TaskQueueRealTimeStatisticsContextFetchOptions, callback?: (error: Error | null, item?: TaskQueueRealTimeStatisticsInstance) => any): Promise<TaskQueueRealTimeStatisticsInstance>;
    fetch(params?: any, callback?: any): Promise<TaskQueueRealTimeStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TaskQueueRealTimeStatisticsContextSolution {
    workspaceSid?: string;
    taskQueueSid?: string;
}
export declare class TaskQueueRealTimeStatisticsContextImpl implements TaskQueueRealTimeStatisticsContext {
    protected _version: V1;
    protected _solution: TaskQueueRealTimeStatisticsContextSolution;
    protected _uri: string;
    constructor(_version: V1, workspaceSid: string, taskQueueSid: string);
    fetch(params?: any, callback?: any): Promise<TaskQueueRealTimeStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): TaskQueueRealTimeStatisticsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface TaskQueueRealTimeStatisticsResource {
    account_sid?: string | null;
    activity_statistics?: Array<any> | null;
    longest_task_waiting_age?: number | null;
    longest_task_waiting_sid?: string | null;
    longest_relative_task_age_in_queue?: number | null;
    longest_relative_task_sid_in_queue?: string | null;
    task_queue_sid?: string | null;
    tasks_by_priority?: any | null;
    tasks_by_status?: any | null;
    total_available_workers?: number | null;
    total_eligible_workers?: number | null;
    total_tasks?: number | null;
    workspace_sid?: string | null;
    url?: string | null;
}
export declare class TaskQueueRealTimeStatisticsInstance {
    protected _version: V1;
    protected _solution: TaskQueueRealTimeStatisticsContextSolution;
    protected _context?: TaskQueueRealTimeStatisticsContext;
    constructor(_version: V1, payload: TaskQueueRealTimeStatisticsResource, workspaceSid: string, taskQueueSid: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The number of current Workers by Activity
     */
    activityStatistics?: Array<any> | null;
    /**
     * The age of the longest waiting Task
     */
    longestTaskWaitingAge?: number | null;
    /**
     * The SID of the longest waiting Task
     */
    longestTaskWaitingSid?: string | null;
    /**
     * The relative age in the TaskQueue for the longest waiting Task.
     */
    longestRelativeTaskAgeInQueue?: number | null;
    /**
     * The SID of the Task waiting in the TaskQueue the longest.
     */
    longestRelativeTaskSidInQueue?: string | null;
    /**
     * The SID of the TaskQueue from which these statistics were calculated
     */
    taskQueueSid?: string | null;
    /**
     * The number of Tasks by priority
     */
    tasksByPriority?: any | null;
    /**
     * The number of Tasks by their current status
     */
    tasksByStatus?: any | null;
    /**
     * The total number of Workers available for Tasks in the TaskQueue
     */
    totalAvailableWorkers?: number | null;
    /**
     * The total number of Workers eligible for Tasks in the TaskQueue, independent of their Activity state
     */
    totalEligibleWorkers?: number | null;
    /**
     * The total number of Tasks
     */
    totalTasks?: number | null;
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
     * Fetch a TaskQueueRealTimeStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskQueueRealTimeStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: TaskQueueRealTimeStatisticsInstance) => any): Promise<TaskQueueRealTimeStatisticsInstance>;
    /**
     * Fetch a TaskQueueRealTimeStatisticsInstance
     *
     * @param { TaskQueueRealTimeStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskQueueRealTimeStatisticsInstance
     */
    fetch(params: TaskQueueRealTimeStatisticsContextFetchOptions, callback?: (error: Error | null, item?: TaskQueueRealTimeStatisticsInstance) => any): Promise<TaskQueueRealTimeStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        activityStatistics: any[] | null | undefined;
        longestTaskWaitingAge: number | null | undefined;
        longestTaskWaitingSid: string | null | undefined;
        longestRelativeTaskAgeInQueue: number | null | undefined;
        longestRelativeTaskSidInQueue: string | null | undefined;
        taskQueueSid: string | null | undefined;
        tasksByPriority: any;
        tasksByStatus: any;
        totalAvailableWorkers: number | null | undefined;
        totalEligibleWorkers: number | null | undefined;
        totalTasks: number | null | undefined;
        workspaceSid: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface TaskQueueRealTimeStatisticsListInstance {
    (): TaskQueueRealTimeStatisticsContext;
    get(): TaskQueueRealTimeStatisticsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TaskQueueRealTimeStatisticsSolution {
    workspaceSid?: string;
    taskQueueSid?: string;
}
export declare function TaskQueueRealTimeStatisticsListInstance(version: V1, workspaceSid: string, taskQueueSid: string): TaskQueueRealTimeStatisticsListInstance;
export {};
