/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
export interface TaskStatisticsContext {
    /**
     * Fetch a TaskStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: TaskStatisticsInstance) => any): Promise<TaskStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TaskStatisticsContextSolution {
    assistantSid?: string;
    taskSid?: string;
}
export declare class TaskStatisticsContextImpl implements TaskStatisticsContext {
    protected _version: V1;
    protected _solution: TaskStatisticsContextSolution;
    protected _uri: string;
    constructor(_version: V1, assistantSid: string, taskSid: string);
    fetch(callback?: any): Promise<TaskStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): TaskStatisticsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface TaskStatisticsResource {
    account_sid?: string | null;
    assistant_sid?: string | null;
    task_sid?: string | null;
    samples_count?: number | null;
    fields_count?: number | null;
    url?: string | null;
}
export declare class TaskStatisticsInstance {
    protected _version: V1;
    protected _solution: TaskStatisticsContextSolution;
    protected _context?: TaskStatisticsContext;
    constructor(_version: V1, payload: TaskStatisticsResource, assistantSid: string, taskSid: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Assistant that is the parent of the Task associated with the resource
     */
    assistantSid?: string | null;
    /**
     * The SID of the Task for which the statistics were collected
     */
    taskSid?: string | null;
    /**
     * The total number of Samples associated with the Task
     */
    samplesCount?: number | null;
    /**
     * The total number of Fields associated with the Task
     */
    fieldsCount?: number | null;
    /**
     * The absolute URL of the TaskStatistics resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a TaskStatisticsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: TaskStatisticsInstance) => any): Promise<TaskStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        assistantSid: string | null | undefined;
        taskSid: string | null | undefined;
        samplesCount: number | null | undefined;
        fieldsCount: number | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface TaskStatisticsListInstance {
    (): TaskStatisticsContext;
    get(): TaskStatisticsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TaskStatisticsSolution {
    assistantSid?: string;
    taskSid?: string;
}
export declare function TaskStatisticsListInstance(version: V1, assistantSid: string, taskSid: string): TaskStatisticsListInstance;
export {};
