/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
/**
 * Options to pass to update a TaskActionsInstance
 *
 * @property { any } [actions] The JSON string that specifies the [actions](https://www.twilio.com/docs/autopilot/actions) that instruct the Assistant on how to perform the task.
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
    protected _version: V1;
    protected _solution: TaskActionsContextSolution;
    protected _uri: string;
    constructor(_version: V1, assistantSid: string, taskSid: string);
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
    protected _version: V1;
    protected _solution: TaskActionsContextSolution;
    protected _context?: TaskActionsContext;
    constructor(_version: V1, payload: TaskActionsResource, assistantSid: string, taskSid: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Assistant that is the parent of the Task associated with the resource
     */
    assistantSid?: string | null;
    /**
     * The SID of the Task associated with the resource
     */
    taskSid?: string | null;
    /**
     * The absolute URL of the TaskActions resource
     */
    url?: string | null;
    /**
     * The JSON string that specifies the actions that instruct the Assistant on how to perform the task
     */
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
export declare function TaskActionsListInstance(version: V1, assistantSid: string, taskSid: string): TaskActionsListInstance;
export {};
