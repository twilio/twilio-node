/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Understand from "../../../Understand";
/**
 * Options to pass to update a TaskActionsInstance
 *
 * @property { any } [actions] The JSON actions that instruct the Assistant how to perform this task.
 */
export interface TaskActionsContextUpdateOptions {
    actions?: any;
}
export interface TaskActionsContext {
    /**
     * Fetch a TaskActionsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskActionsInstance
     */
    fetch(callback?: (error: Error | null, item?: TaskActionsInstance) => any): Promise<TaskActionsInstance>;
    /**
     * Update a TaskActionsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskActionsInstance
     */
    update(callback?: (error: Error | null, item?: TaskActionsInstance) => any): Promise<TaskActionsInstance>;
    /**
     * Update a TaskActionsInstance
     *
     * @param { TaskActionsContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskActionsInstance
     */
    update(params: TaskActionsContextUpdateOptions, callback?: (error: Error | null, item?: TaskActionsInstance) => any): Promise<TaskActionsInstance>;
    update(params?: any, callback?: any): Promise<TaskActionsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TaskActionsContextSolution {
    assistantSid?: string;
    taskSid?: string;
}
export declare class TaskActionsContextImpl implements TaskActionsContext {
    protected _version: Understand;
    protected _solution: TaskActionsContextSolution;
    protected _uri: string;
    constructor(_version: Understand, assistantSid: string, taskSid: string);
    fetch(callback?: any): Promise<TaskActionsInstance>;
    update(params?: any, callback?: any): Promise<TaskActionsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): TaskActionsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface TaskActionsResource {
    account_sid?: string | null;
    assistant_sid?: string | null;
    task_sid?: string | null;
    url?: string | null;
    data?: any | null;
}
export declare class TaskActionsInstance {
    protected _version: Understand;
    protected _solution: TaskActionsContextSolution;
    protected _context?: TaskActionsContext;
    constructor(_version: Understand, payload: TaskActionsResource, assistantSid: string, taskSid: string);
    /**
     * The unique ID of the Account that created this Field.
     */
    accountSid?: string | null;
    /**
     * The unique ID of the parent Assistant.
     */
    assistantSid?: string | null;
    /**
     * The unique ID of the Task.
     */
    taskSid?: string | null;
    url?: string | null;
    data?: any | null;
    private get _proxy();
    /**
     * Fetch a TaskActionsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskActionsInstance
     */
    fetch(callback?: (error: Error | null, item?: TaskActionsInstance) => any): Promise<TaskActionsInstance>;
    /**
     * Update a TaskActionsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskActionsInstance
     */
    update(callback?: (error: Error | null, item?: TaskActionsInstance) => any): Promise<TaskActionsInstance>;
    /**
     * Update a TaskActionsInstance
     *
     * @param { TaskActionsContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskActionsInstance
     */
    update(params: TaskActionsContextUpdateOptions, callback?: (error: Error | null, item?: TaskActionsInstance) => any): Promise<TaskActionsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        assistantSid: string | null | undefined;
        taskSid: string | null | undefined;
        url: string | null | undefined;
        data: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface TaskActionsListInstance {
    (): TaskActionsContext;
    get(): TaskActionsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TaskActionsSolution {
    assistantSid?: string;
    taskSid?: string;
}
export declare function TaskActionsListInstance(version: Understand, assistantSid: string, taskSid: string): TaskActionsListInstance;
export {};
