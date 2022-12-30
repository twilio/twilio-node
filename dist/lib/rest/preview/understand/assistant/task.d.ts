/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import Understand from "../../Understand";
import { FieldListInstance } from "./task/field";
import { SampleListInstance } from "./task/sample";
import { TaskActionsListInstance } from "./task/taskActions";
import { TaskStatisticsListInstance } from "./task/taskStatistics";
/**
 * Options to pass to update a TaskInstance
 *
 * @property { string } [friendlyName] A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long.
 * @property { string } [uniqueName] A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
 * @property { any } [actions] A user-provided JSON object encoded as a string to specify the actions for this task. It is optional and non-unique.
 * @property { string } [actionsUrl] User-provided HTTP endpoint where from the assistant fetches actions
 */
export interface TaskContextUpdateOptions {
    friendlyName?: string;
    uniqueName?: string;
    actions?: any;
    actionsUrl?: string;
}
/**
 * Options to pass to create a TaskInstance
 *
 * @property { string } uniqueName A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
 * @property { string } [friendlyName] A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long.
 * @property { any } [actions] A user-provided JSON object encoded as a string to specify the actions for this task. It is optional and non-unique.
 * @property { string } [actionsUrl] User-provided HTTP endpoint where from the assistant fetches actions
 */
export interface TaskListInstanceCreateOptions {
    uniqueName: string;
    friendlyName?: string;
    actions?: any;
    actionsUrl?: string;
}
/**
 * Options to pass to each
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface TaskListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: TaskInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface TaskListInstanceOptions {
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface TaskListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface TaskContext {
    fields: FieldListInstance;
    samples: SampleListInstance;
    taskActions: TaskActionsListInstance;
    statistics: TaskStatisticsListInstance;
    /**
     * Remove a TaskInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a TaskInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskInstance
     */
    fetch(callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
    /**
     * Update a TaskInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskInstance
     */
    update(callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
    /**
     * Update a TaskInstance
     *
     * @param { TaskContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskInstance
     */
    update(params: TaskContextUpdateOptions, callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
    update(params?: any, callback?: any): Promise<TaskInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TaskContextSolution {
    assistantSid?: string;
    sid?: string;
}
export declare class TaskContextImpl implements TaskContext {
    protected _version: Understand;
    protected _solution: TaskContextSolution;
    protected _uri: string;
    protected _fields?: FieldListInstance;
    protected _samples?: SampleListInstance;
    protected _taskActions?: TaskActionsListInstance;
    protected _statistics?: TaskStatisticsListInstance;
    constructor(_version: Understand, assistantSid: string, sid: string);
    get fields(): FieldListInstance;
    get samples(): SampleListInstance;
    get taskActions(): TaskActionsListInstance;
    get statistics(): TaskStatisticsListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<TaskInstance>;
    update(params?: any, callback?: any): Promise<TaskInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): TaskContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface TaskPayload extends TwilioResponsePayload {
    tasks: TaskResource[];
}
interface TaskResource {
    account_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    friendly_name?: string | null;
    links?: object | null;
    assistant_sid?: string | null;
    sid?: string | null;
    unique_name?: string | null;
    actions_url?: string | null;
    url?: string | null;
}
export declare class TaskInstance {
    protected _version: Understand;
    protected _solution: TaskContextSolution;
    protected _context?: TaskContext;
    constructor(_version: Understand, payload: TaskResource, assistantSid: string, sid?: string);
    /**
     * The unique ID of the Account that created this Task.
     */
    accountSid?: string | null;
    /**
     * The date that this resource was created
     */
    dateCreated?: Date | null;
    /**
     * The date that this resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long.
     */
    friendlyName?: string | null;
    links?: object | null;
    /**
     * The unique ID of the Assistant.
     */
    assistantSid?: string | null;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string | null;
    /**
     * A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
     */
    uniqueName?: string | null;
    /**
     * User-provided HTTP endpoint where from the assistant fetches actions
     */
    actionsUrl?: string | null;
    url?: string | null;
    private get _proxy();
    /**
     * Remove a TaskInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a TaskInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskInstance
     */
    fetch(callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
    /**
     * Update a TaskInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskInstance
     */
    update(callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
    /**
     * Update a TaskInstance
     *
     * @param { TaskContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskInstance
     */
    update(params: TaskContextUpdateOptions, callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
    /**
     * Access the fields.
     */
    fields(): FieldListInstance;
    /**
     * Access the samples.
     */
    samples(): SampleListInstance;
    /**
     * Access the taskActions.
     */
    taskActions(): TaskActionsListInstance;
    /**
     * Access the statistics.
     */
    statistics(): TaskStatisticsListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        friendlyName: string | null | undefined;
        links: object | null | undefined;
        assistantSid: string | null | undefined;
        sid: string | null | undefined;
        uniqueName: string | null | undefined;
        actionsUrl: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface TaskListInstance {
    (sid: string): TaskContext;
    get(sid: string): TaskContext;
    /**
     * Create a TaskInstance
     *
     * @param { TaskListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskInstance
     */
    create(params: TaskListInstanceCreateOptions, callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
    create(params: any, callback?: any): Promise<TaskInstance>;
    /**
     * Streams TaskInstance records from the API.
     *
     * This operation lazily loads records as efficiently as possible until the limit
     * is reached.
     *
     * The results are passed into the callback function, so this operation is memory
     * efficient.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: TaskInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams TaskInstance records from the API.
     *
     * This operation lazily loads records as efficiently as possible until the limit
     * is reached.
     *
     * The results are passed into the callback function, so this operation is memory
     * efficient.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TaskListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: TaskListInstanceEachOptions, callback?: (item: TaskInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of TaskInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: TaskPage) => any): Promise<TaskPage>;
    /**
     * Retrieve a single target page of TaskInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: TaskPage) => any): Promise<TaskPage>;
    getPage(params?: any, callback?: any): Promise<TaskPage>;
    /**
     * Lists TaskInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: TaskInstance[]) => any): Promise<TaskInstance[]>;
    /**
     * Lists TaskInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TaskListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: TaskListInstanceOptions, callback?: (error: Error | null, items: TaskInstance[]) => any): Promise<TaskInstance[]>;
    list(params?: any, callback?: any): Promise<TaskInstance[]>;
    /**
     * Retrieve a single page of TaskInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: TaskPage) => any): Promise<TaskPage>;
    /**
     * Retrieve a single page of TaskInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TaskListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: TaskListInstancePageOptions, callback?: (error: Error | null, items: TaskPage) => any): Promise<TaskPage>;
    page(params?: any, callback?: any): Promise<TaskPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TaskSolution {
    assistantSid?: string;
}
export declare function TaskListInstance(version: Understand, assistantSid: string): TaskListInstance;
export declare class TaskPage extends Page<Understand, TaskPayload, TaskResource, TaskInstance> {
    /**
     * Initialize the TaskPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Understand, response: Response<string>, solution: TaskSolution);
    /**
     * Build an instance of TaskInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: TaskResource): TaskInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
