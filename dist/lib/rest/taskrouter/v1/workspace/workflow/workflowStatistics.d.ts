/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
/**
 * Options to pass to fetch a WorkflowStatisticsInstance
 *
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { Date } [endDate] Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { string } [taskChannel] Only calculate real-time statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 * @property { string } [splitByWaitTime] A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed. For example, `5,30` would show splits of Tasks that were canceled or accepted before and after 5 seconds and before and after 30 seconds. This can be used to show short abandoned Tasks or Tasks that failed to meet an SLA.
 */
export interface WorkflowStatisticsContextFetchOptions {
    minutes?: number;
    startDate?: Date;
    endDate?: Date;
    taskChannel?: string;
    splitByWaitTime?: string;
}
export interface WorkflowStatisticsContext {
    /**
     * Fetch a WorkflowStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkflowStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkflowStatisticsInstance) => any): Promise<WorkflowStatisticsInstance>;
    /**
     * Fetch a WorkflowStatisticsInstance
     *
     * @param { WorkflowStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkflowStatisticsInstance
     */
    fetch(params: WorkflowStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkflowStatisticsInstance) => any): Promise<WorkflowStatisticsInstance>;
    fetch(params?: any, callback?: any): Promise<WorkflowStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkflowStatisticsContextSolution {
    workspaceSid?: string;
    workflowSid?: string;
}
export declare class WorkflowStatisticsContextImpl implements WorkflowStatisticsContext {
    protected _version: V1;
    protected _solution: WorkflowStatisticsContextSolution;
    protected _uri: string;
    constructor(_version: V1, workspaceSid: string, workflowSid: string);
    fetch(params?: any, callback?: any): Promise<WorkflowStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): WorkflowStatisticsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface WorkflowStatisticsResource {
    account_sid?: string | null;
    cumulative?: any | null;
    realtime?: any | null;
    workflow_sid?: string | null;
    workspace_sid?: string | null;
    url?: string | null;
}
export declare class WorkflowStatisticsInstance {
    protected _version: V1;
    protected _solution: WorkflowStatisticsContextSolution;
    protected _context?: WorkflowStatisticsContext;
    constructor(_version: V1, payload: WorkflowStatisticsResource, workspaceSid: string, workflowSid: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * An object that contains the cumulative statistics for the Workflow
     */
    cumulative?: any | null;
    /**
     * An object that contains the real-time statistics for the Workflow
     */
    realtime?: any | null;
    /**
     * Returns the list of Tasks that are being controlled by the Workflow with the specified SID value
     */
    workflowSid?: string | null;
    /**
     * The SID of the Workspace that contains the Workflow
     */
    workspaceSid?: string | null;
    /**
     * The absolute URL of the Workflow statistics resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a WorkflowStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkflowStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkflowStatisticsInstance) => any): Promise<WorkflowStatisticsInstance>;
    /**
     * Fetch a WorkflowStatisticsInstance
     *
     * @param { WorkflowStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkflowStatisticsInstance
     */
    fetch(params: WorkflowStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkflowStatisticsInstance) => any): Promise<WorkflowStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        cumulative: any;
        realtime: any;
        workflowSid: string | null | undefined;
        workspaceSid: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface WorkflowStatisticsListInstance {
    (): WorkflowStatisticsContext;
    get(): WorkflowStatisticsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkflowStatisticsSolution {
    workspaceSid?: string;
    workflowSid?: string;
}
export declare function WorkflowStatisticsListInstance(version: V1, workspaceSid: string, workflowSid: string): WorkflowStatisticsListInstance;
export {};
