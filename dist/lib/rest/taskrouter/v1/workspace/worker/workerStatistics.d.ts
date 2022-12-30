/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
/**
 * Options to pass to fetch a WorkerStatisticsInstance
 *
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { Date } [endDate] Only include usage that occurred on or before this date, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { string } [taskChannel] Only calculate statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 */
export interface WorkerStatisticsContextFetchOptions {
    minutes?: number;
    startDate?: Date;
    endDate?: Date;
    taskChannel?: string;
}
export interface WorkerStatisticsContext {
    /**
     * Fetch a WorkerStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkerStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkerStatisticsInstance) => any): Promise<WorkerStatisticsInstance>;
    /**
     * Fetch a WorkerStatisticsInstance
     *
     * @param { WorkerStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkerStatisticsInstance
     */
    fetch(params: WorkerStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkerStatisticsInstance) => any): Promise<WorkerStatisticsInstance>;
    fetch(params?: any, callback?: any): Promise<WorkerStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkerStatisticsContextSolution {
    workspaceSid?: string;
    workerSid?: string;
}
export declare class WorkerStatisticsContextImpl implements WorkerStatisticsContext {
    protected _version: V1;
    protected _solution: WorkerStatisticsContextSolution;
    protected _uri: string;
    constructor(_version: V1, workspaceSid: string, workerSid: string);
    fetch(params?: any, callback?: any): Promise<WorkerStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): WorkerStatisticsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface WorkerStatisticsResource {
    account_sid?: string | null;
    cumulative?: any | null;
    worker_sid?: string | null;
    workspace_sid?: string | null;
    url?: string | null;
}
export declare class WorkerStatisticsInstance {
    protected _version: V1;
    protected _solution: WorkerStatisticsContextSolution;
    protected _context?: WorkerStatisticsContext;
    constructor(_version: V1, payload: WorkerStatisticsResource, workspaceSid: string, workerSid: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * An object that contains the cumulative statistics for the Worker
     */
    cumulative?: any | null;
    /**
     * The SID of the Worker that contains the WorkerChannel
     */
    workerSid?: string | null;
    /**
     * The SID of the Workspace that contains the WorkerChannel
     */
    workspaceSid?: string | null;
    /**
     * The absolute URL of the WorkerChannel statistics resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a WorkerStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkerStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkerStatisticsInstance) => any): Promise<WorkerStatisticsInstance>;
    /**
     * Fetch a WorkerStatisticsInstance
     *
     * @param { WorkerStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkerStatisticsInstance
     */
    fetch(params: WorkerStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkerStatisticsInstance) => any): Promise<WorkerStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        cumulative: any;
        workerSid: string | null | undefined;
        workspaceSid: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface WorkerStatisticsListInstance {
    (): WorkerStatisticsContext;
    get(): WorkerStatisticsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkerStatisticsSolution {
    workspaceSid?: string;
    workerSid?: string;
}
export declare function WorkerStatisticsListInstance(version: V1, workspaceSid: string, workerSid: string): WorkerStatisticsListInstance;
export {};
