/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
/**
 * Options to pass to fetch a WorkersRealTimeStatisticsInstance
 *
 * @property { string } [taskChannel] Only calculate real-time statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 */
export interface WorkersRealTimeStatisticsContextFetchOptions {
    taskChannel?: string;
}
export interface WorkersRealTimeStatisticsContext {
    /**
     * Fetch a WorkersRealTimeStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkersRealTimeStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkersRealTimeStatisticsInstance) => any): Promise<WorkersRealTimeStatisticsInstance>;
    /**
     * Fetch a WorkersRealTimeStatisticsInstance
     *
     * @param { WorkersRealTimeStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkersRealTimeStatisticsInstance
     */
    fetch(params: WorkersRealTimeStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkersRealTimeStatisticsInstance) => any): Promise<WorkersRealTimeStatisticsInstance>;
    fetch(params?: any, callback?: any): Promise<WorkersRealTimeStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkersRealTimeStatisticsContextSolution {
    workspaceSid?: string;
}
export declare class WorkersRealTimeStatisticsContextImpl implements WorkersRealTimeStatisticsContext {
    protected _version: V1;
    protected _solution: WorkersRealTimeStatisticsContextSolution;
    protected _uri: string;
    constructor(_version: V1, workspaceSid: string);
    fetch(params?: any, callback?: any): Promise<WorkersRealTimeStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): WorkersRealTimeStatisticsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface WorkersRealTimeStatisticsResource {
    account_sid?: string | null;
    activity_statistics?: Array<any> | null;
    total_workers?: number | null;
    workspace_sid?: string | null;
    url?: string | null;
}
export declare class WorkersRealTimeStatisticsInstance {
    protected _version: V1;
    protected _solution: WorkersRealTimeStatisticsContextSolution;
    protected _context?: WorkersRealTimeStatisticsContext;
    constructor(_version: V1, payload: WorkersRealTimeStatisticsResource, workspaceSid: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The number of current Workers by Activity
     */
    activityStatistics?: Array<any> | null;
    /**
     * The total number of Workers
     */
    totalWorkers?: number | null;
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
     * Fetch a WorkersRealTimeStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkersRealTimeStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkersRealTimeStatisticsInstance) => any): Promise<WorkersRealTimeStatisticsInstance>;
    /**
     * Fetch a WorkersRealTimeStatisticsInstance
     *
     * @param { WorkersRealTimeStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkersRealTimeStatisticsInstance
     */
    fetch(params: WorkersRealTimeStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkersRealTimeStatisticsInstance) => any): Promise<WorkersRealTimeStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        activityStatistics: any[] | null | undefined;
        totalWorkers: number | null | undefined;
        workspaceSid: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface WorkersRealTimeStatisticsListInstance {
    (): WorkersRealTimeStatisticsContext;
    get(): WorkersRealTimeStatisticsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkersRealTimeStatisticsSolution {
    workspaceSid?: string;
}
export declare function WorkersRealTimeStatisticsListInstance(version: V1, workspaceSid: string): WorkersRealTimeStatisticsListInstance;
export {};
