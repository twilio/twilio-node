/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
/**
 * Options to pass to fetch a WorkspaceStatisticsInstance
 *
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { Date } [endDate] Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { string } [taskChannel] Only calculate statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 * @property { string } [splitByWaitTime] A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed. For example, `5,30` would show splits of Tasks that were canceled or accepted before and after 5 seconds and before and after 30 seconds. This can be used to show short abandoned Tasks or Tasks that failed to meet an SLA.
 */
export interface WorkspaceStatisticsContextFetchOptions {
    minutes?: number;
    startDate?: Date;
    endDate?: Date;
    taskChannel?: string;
    splitByWaitTime?: string;
}
export interface WorkspaceStatisticsContext {
    /**
     * Fetch a WorkspaceStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkspaceStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkspaceStatisticsInstance) => any): Promise<WorkspaceStatisticsInstance>;
    /**
     * Fetch a WorkspaceStatisticsInstance
     *
     * @param { WorkspaceStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkspaceStatisticsInstance
     */
    fetch(params: WorkspaceStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkspaceStatisticsInstance) => any): Promise<WorkspaceStatisticsInstance>;
    fetch(params?: any, callback?: any): Promise<WorkspaceStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkspaceStatisticsContextSolution {
    workspaceSid?: string;
}
export declare class WorkspaceStatisticsContextImpl implements WorkspaceStatisticsContext {
    protected _version: V1;
    protected _solution: WorkspaceStatisticsContextSolution;
    protected _uri: string;
    constructor(_version: V1, workspaceSid: string);
    fetch(params?: any, callback?: any): Promise<WorkspaceStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): WorkspaceStatisticsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface WorkspaceStatisticsResource {
    realtime?: any | null;
    cumulative?: any | null;
    account_sid?: string | null;
    workspace_sid?: string | null;
    url?: string | null;
}
export declare class WorkspaceStatisticsInstance {
    protected _version: V1;
    protected _solution: WorkspaceStatisticsContextSolution;
    protected _context?: WorkspaceStatisticsContext;
    constructor(_version: V1, payload: WorkspaceStatisticsResource, workspaceSid: string);
    /**
     * n object that contains the real-time statistics for the Workspace
     */
    realtime?: any | null;
    /**
     * An object that contains the cumulative statistics for the Workspace
     */
    cumulative?: any | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
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
     * Fetch a WorkspaceStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkspaceStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkspaceStatisticsInstance) => any): Promise<WorkspaceStatisticsInstance>;
    /**
     * Fetch a WorkspaceStatisticsInstance
     *
     * @param { WorkspaceStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkspaceStatisticsInstance
     */
    fetch(params: WorkspaceStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkspaceStatisticsInstance) => any): Promise<WorkspaceStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        realtime: any;
        cumulative: any;
        accountSid: string | null | undefined;
        workspaceSid: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface WorkspaceStatisticsListInstance {
    (): WorkspaceStatisticsContext;
    get(): WorkspaceStatisticsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkspaceStatisticsSolution {
    workspaceSid?: string;
}
export declare function WorkspaceStatisticsListInstance(version: V1, workspaceSid: string): WorkspaceStatisticsListInstance;
export {};
