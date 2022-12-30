/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
import { FieldListInstance } from "./task/field";
import { SampleListInstance } from "./task/sample";
import { TaskActionsListInstance } from "./task/taskActions";
import { TaskStatisticsListInstance } from "./task/taskStatistics";
/**
 * Options to pass to update a TaskInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. This value must be 64 characters or less in length and be unique. It can be used as an alternative to the `sid` in the URL path to address the resource.
 * @property { any } [actions] The JSON string that specifies the [actions](https://www.twilio.com/docs/autopilot/actions) that instruct the Assistant on how to perform the task.
 * @property { string } [actionsUrl] The URL from which the Assistant can fetch actions.
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
 * @property { string } uniqueName An application-defined string that uniquely identifies the new resource. It can be used as an alternative to the `sid` in the URL path to address the resource. This value must be unique and 64 characters or less in length.
 * @property { string } [friendlyName] A descriptive string that you create to describe the new resource. It is not unique and can be up to 255 characters long.
 * @property { any } [actions] The JSON string that specifies the [actions](https://www.twilio.com/docs/autopilot/actions) that instruct the Assistant on how to perform the task. It is optional and not unique.
 * @property { string } [actionsUrl] The URL from which the Assistant can fetch actions.
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
    protected _version: V1;
    protected _solution: TaskContextSolution;
    protected _uri: string;
    protected _fields?: FieldListInstance;
    protected _samples?: SampleListInstance;
    protected _taskActions?: TaskActionsListInstance;
    protected _statistics?: TaskStatisticsListInstance;
    constructor(_version: V1, assistantSid: string, sid: string);
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
    protected _version: V1;
    protected _solution: TaskContextSolution;
    protected _context?: TaskContext;
    constructor(_version: V1, payload: TaskResource, assistantSid: string, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * A list of the URLs of related resources
     */
    links?: object | null;
    /**
     * The SID of the Assistant that is the parent of the resource
     */
    assistantSid?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * An application-defined string that uniquely identifies the resource
     */
    uniqueName?: string | null;
    /**
     * The URL from which the Assistant can fetch actions
     */
    actionsUrl?: string | null;
    /**
     * The absolute URL of the Task resource
     */
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
export declare function TaskListInstance(version: V1, assistantSid: string): TaskListInstance;
export declare class TaskPage extends Page<V1, TaskPayload, TaskResource, TaskInstance> {
    /**
     * Initialize the TaskPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: TaskSolution);
    /**
     * Build an instance of TaskInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: TaskResource): TaskInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
