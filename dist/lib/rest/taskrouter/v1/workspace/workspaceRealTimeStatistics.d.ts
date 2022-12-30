/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
/**
 * Options to pass to fetch a WorkspaceRealTimeStatisticsInstance
 *
 * @property { string } [taskChannel] Only calculate real-time statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 */
export interface WorkspaceRealTimeStatisticsContextFetchOptions {
    taskChannel?: string;
}
export interface WorkspaceRealTimeStatisticsContext {
    /**
     * Fetch a WorkspaceRealTimeStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkspaceRealTimeStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkspaceRealTimeStatisticsInstance) => any): Promise<WorkspaceRealTimeStatisticsInstance>;
    /**
     * Fetch a WorkspaceRealTimeStatisticsInstance
     *
     * @param { WorkspaceRealTimeStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkspaceRealTimeStatisticsInstance
     */
    fetch(params: WorkspaceRealTimeStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkspaceRealTimeStatisticsInstance) => any): Promise<WorkspaceRealTimeStatisticsInstance>;
    fetch(params?: any, callback?: any): Promise<WorkspaceRealTimeStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkspaceRealTimeStatisticsContextSolution {
    workspaceSid?: string;
}
export declare class WorkspaceRealTimeStatisticsContextImpl implements WorkspaceRealTimeStatisticsContext {
    protected _version: V1;
    protected _solution: WorkspaceRealTimeStatisticsContextSolution;
    protected _uri: string;
    constructor(_version: V1, workspaceSid: string);
    fetch(params?: any, callback?: any): Promise<WorkspaceRealTimeStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): WorkspaceRealTimeStatisticsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface WorkspaceRealTimeStatisticsResource {
    account_sid?: string | null;
    activity_statistics?: Array<any> | null;
    longest_task_waiting_age?: number | null;
    longest_task_waiting_sid?: string | null;
    tasks_by_priority?: any | null;
    tasks_by_status?: any | null;
    total_tasks?: number | null;
    total_workers?: number | null;
    workspace_sid?: string | null;
    url?: string | null;
}
export declare class WorkspaceRealTimeStatisticsInstance {
    protected _version: V1;
    protected _solution: WorkspaceRealTimeStatisticsContextSolution;
    protected _context?: WorkspaceRealTimeStatisticsContext;
    constructor(_version: V1, payload: WorkspaceRealTimeStatisticsResource, workspaceSid: string);
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
     * The number of Tasks by priority
     */
    tasksByPriority?: any | null;
    /**
     * The number of Tasks by their current status
     */
    tasksByStatus?: any | null;
    /**
     * The total number of Tasks
     */
    totalTasks?: number | null;
    /**
     * The total number of Workers in the Workspace
     */
    totalWorkers?: number | null;
    /**
     * The SID of the Workspace
     */
    workspaceSid?: string | null;
    /**
     * The absolute URL of the Workspace statistics resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a WorkspaceRealTimeStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkspaceRealTimeStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkspaceRealTimeStatisticsInstance) => any): Promise<WorkspaceRealTimeStatisticsInstance>;
    /**
     * Fetch a WorkspaceRealTimeStatisticsInstance
     *
     * @param { WorkspaceRealTimeStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkspaceRealTimeStatisticsInstance
     */
    fetch(params: WorkspaceRealTimeStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkspaceRealTimeStatisticsInstance) => any): Promise<WorkspaceRealTimeStatisticsInstance>;
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
        tasksByPriority: any;
        tasksByStatus: any;
        totalTasks: number | null | undefined;
        totalWorkers: number | null | undefined;
        workspaceSid: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface WorkspaceRealTimeStatisticsListInstance {
    (): WorkspaceRealTimeStatisticsContext;
    get(): WorkspaceRealTimeStatisticsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkspaceRealTimeStatisticsSolution {
    workspaceSid?: string;
}
export declare function WorkspaceRealTimeStatisticsListInstance(version: V1, workspaceSid: string): WorkspaceRealTimeStatisticsListInstance;
export {};
