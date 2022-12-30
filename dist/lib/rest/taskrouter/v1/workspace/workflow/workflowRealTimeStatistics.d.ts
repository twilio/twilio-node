/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
/**
 * Options to pass to fetch a WorkflowRealTimeStatisticsInstance
 *
 * @property { string } [taskChannel] Only calculate real-time statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 */
export interface WorkflowRealTimeStatisticsContextFetchOptions {
    taskChannel?: string;
}
export interface WorkflowRealTimeStatisticsContext {
    /**
     * Fetch a WorkflowRealTimeStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkflowRealTimeStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkflowRealTimeStatisticsInstance) => any): Promise<WorkflowRealTimeStatisticsInstance>;
    /**
     * Fetch a WorkflowRealTimeStatisticsInstance
     *
     * @param { WorkflowRealTimeStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkflowRealTimeStatisticsInstance
     */
    fetch(params: WorkflowRealTimeStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkflowRealTimeStatisticsInstance) => any): Promise<WorkflowRealTimeStatisticsInstance>;
    fetch(params?: any, callback?: any): Promise<WorkflowRealTimeStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkflowRealTimeStatisticsContextSolution {
    workspaceSid?: string;
    workflowSid?: string;
}
export declare class WorkflowRealTimeStatisticsContextImpl implements WorkflowRealTimeStatisticsContext {
    protected _version: V1;
    protected _solution: WorkflowRealTimeStatisticsContextSolution;
    protected _uri: string;
    constructor(_version: V1, workspaceSid: string, workflowSid: string);
    fetch(params?: any, callback?: any): Promise<WorkflowRealTimeStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): WorkflowRealTimeStatisticsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface WorkflowRealTimeStatisticsResource {
    account_sid?: string | null;
    longest_task_waiting_age?: number | null;
    longest_task_waiting_sid?: string | null;
    tasks_by_priority?: any | null;
    tasks_by_status?: any | null;
    total_tasks?: number | null;
    workflow_sid?: string | null;
    workspace_sid?: string | null;
    url?: string | null;
}
export declare class WorkflowRealTimeStatisticsInstance {
    protected _version: V1;
    protected _solution: WorkflowRealTimeStatisticsContextSolution;
    protected _context?: WorkflowRealTimeStatisticsContext;
    constructor(_version: V1, payload: WorkflowRealTimeStatisticsResource, workspaceSid: string, workflowSid: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
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
     * Returns the list of Tasks that are being controlled by the Workflow with the specified SID value
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
     * Fetch a WorkflowRealTimeStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkflowRealTimeStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkflowRealTimeStatisticsInstance) => any): Promise<WorkflowRealTimeStatisticsInstance>;
    /**
     * Fetch a WorkflowRealTimeStatisticsInstance
     *
     * @param { WorkflowRealTimeStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkflowRealTimeStatisticsInstance
     */
    fetch(params: WorkflowRealTimeStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkflowRealTimeStatisticsInstance) => any): Promise<WorkflowRealTimeStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        longestTaskWaitingAge: number | null | undefined;
        longestTaskWaitingSid: string | null | undefined;
        tasksByPriority: any;
        tasksByStatus: any;
        totalTasks: number | null | undefined;
        workflowSid: string | null | undefined;
        workspaceSid: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface WorkflowRealTimeStatisticsListInstance {
    (): WorkflowRealTimeStatisticsContext;
    get(): WorkflowRealTimeStatisticsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkflowRealTimeStatisticsSolution {
    workspaceSid?: string;
    workflowSid?: string;
}
export declare function WorkflowRealTimeStatisticsListInstance(version: V1, workspaceSid: string, workflowSid: string): WorkflowRealTimeStatisticsListInstance;
export {};
