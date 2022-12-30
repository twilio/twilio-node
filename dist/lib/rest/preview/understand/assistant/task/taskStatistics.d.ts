/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Understand from "../../../Understand";
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
    protected _version: Understand;
    protected _solution: TaskStatisticsContextSolution;
    protected _uri: string;
    constructor(_version: Understand, assistantSid: string, taskSid: string);
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
    protected _version: Understand;
    protected _solution: TaskStatisticsContextSolution;
    protected _context?: TaskStatisticsContext;
    constructor(_version: Understand, payload: TaskStatisticsResource, assistantSid: string, taskSid: string);
    /**
     * The unique ID of the Account that created this Field.
     */
    accountSid?: string | null;
    /**
     * The unique ID of the parent Assistant.
     */
    assistantSid?: string | null;
    /**
     * The unique ID of the Task associated with this Field.
     */
    taskSid?: string | null;
    /**
     * The total number of Samples associated with this Task.
     */
    samplesCount?: number | null;
    /**
     * The total number of Fields associated with this Task.
     */
    fieldsCount?: number | null;
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
export declare function TaskStatisticsListInstance(version: Understand, assistantSid: string, taskSid: string): TaskStatisticsListInstance;
export {};
