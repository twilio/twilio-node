/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
/**
 * Options to pass to fetch a WorkersStatisticsInstance
 *
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { Date } [endDate] Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { string } [taskQueueSid] The SID of the TaskQueue for which to fetch Worker statistics.
 * @property { string } [taskQueueName] The `friendly_name` of the TaskQueue for which to fetch Worker statistics.
 * @property { string } [friendlyName] Only include Workers with `friendly_name` values that match this parameter.
 * @property { string } [taskChannel] Only calculate statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 */
export interface WorkersStatisticsContextFetchOptions {
    minutes?: number;
    startDate?: Date;
    endDate?: Date;
    taskQueueSid?: string;
    taskQueueName?: string;
    friendlyName?: string;
    taskChannel?: string;
}
export interface WorkersStatisticsContext {
    /**
     * Fetch a WorkersStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkersStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkersStatisticsInstance) => any): Promise<WorkersStatisticsInstance>;
    /**
     * Fetch a WorkersStatisticsInstance
     *
     * @param { WorkersStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkersStatisticsInstance
     */
    fetch(params: WorkersStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkersStatisticsInstance) => any): Promise<WorkersStatisticsInstance>;
    fetch(params?: any, callback?: any): Promise<WorkersStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkersStatisticsContextSolution {
    workspaceSid?: string;
}
export declare class WorkersStatisticsContextImpl implements WorkersStatisticsContext {
    protected _version: V1;
    protected _solution: WorkersStatisticsContextSolution;
    protected _uri: string;
    constructor(_version: V1, workspaceSid: string);
    fetch(params?: any, callback?: any): Promise<WorkersStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): WorkersStatisticsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface WorkersStatisticsResource {
    realtime?: any | null;
    cumulative?: any | null;
    account_sid?: string | null;
    workspace_sid?: string | null;
    url?: string | null;
}
export declare class WorkersStatisticsInstance {
    protected _version: V1;
    protected _solution: WorkersStatisticsContextSolution;
    protected _context?: WorkersStatisticsContext;
    constructor(_version: V1, payload: WorkersStatisticsResource, workspaceSid: string);
    /**
     * An object that contains the real-time statistics for the Worker
     */
    realtime?: any | null;
    /**
     * An object that contains the cumulative statistics for the Worker
     */
    cumulative?: any | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Workspace that contains the Worker
     */
    workspaceSid?: string | null;
    /**
     * The absolute URL of the Worker statistics resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a WorkersStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkersStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkersStatisticsInstance) => any): Promise<WorkersStatisticsInstance>;
    /**
     * Fetch a WorkersStatisticsInstance
     *
     * @param { WorkersStatisticsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkersStatisticsInstance
     */
    fetch(params: WorkersStatisticsContextFetchOptions, callback?: (error: Error | null, item?: WorkersStatisticsInstance) => any): Promise<WorkersStatisticsInstance>;
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
export interface WorkersStatisticsListInstance {
    (): WorkersStatisticsContext;
    get(): WorkersStatisticsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkersStatisticsSolution {
    workspaceSid?: string;
}
export declare function WorkersStatisticsListInstance(version: V1, workspaceSid: string): WorkersStatisticsListInstance;
export {};
