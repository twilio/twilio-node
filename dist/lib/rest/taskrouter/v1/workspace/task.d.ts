/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
import { ReservationListInstance } from "./task/reservation";
declare type TaskStatus = "pending" | "reserved" | "assigned" | "canceled" | "completed" | "wrapping";
/**
 * Options to pass to remove a TaskInstance
 *
 * @property { string } [ifMatch] If provided, deletes this Task if (and only if) the [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) header of the Task matches the provided value. This matches the semantics of (and is implemented with) the HTTP [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match).
 */
export interface TaskContextRemoveOptions {
    ifMatch?: string;
}
/**
 * Options to pass to update a TaskInstance
 *
 * @property { string } [ifMatch] If provided, applies this mutation if (and only if) the [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) header of the Task matches the provided value. This matches the semantics of (and is implemented with) the HTTP [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match).
 * @property { string } [attributes] The JSON string that describes the custom attributes of the task.
 * @property { TaskStatus } [assignmentStatus]
 * @property { string } [reason] The reason that the Task was canceled or completed. This parameter is required only if the Task is canceled or completed. Setting this value queues the task for deletion and logs the reason.
 * @property { number } [priority] The Task\\\'s new priority value. When supplied, the Task takes on the specified priority unless it matches a Workflow Target with a Priority set. Value can be 0 to 2^31^ (2,147,483,647).
 * @property { string } [taskChannel] When MultiTasking is enabled, specify the TaskChannel with the task to update. Can be the TaskChannel\\\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 */
export interface TaskContextUpdateOptions {
    ifMatch?: string;
    attributes?: string;
    assignmentStatus?: TaskStatus;
    reason?: string;
    priority?: number;
    taskChannel?: string;
}
/**
 * Options to pass to create a TaskInstance
 *
 * @property { number } [timeout] The amount of time in seconds the new task can live before being assigned. Can be up to a maximum of 2 weeks (1,209,600 seconds). The default value is 24 hours (86,400 seconds). On timeout, the `task.canceled` event will fire with description `Task TTL Exceeded`.
 * @property { number } [priority] The priority to assign the new task and override the default. When supplied, the new Task will have this priority unless it matches a Workflow Target with a Priority set. When not supplied, the new Task will have the priority of the matching Workflow Target. Value can be 0 to 2^31^ (2,147,483,647).
 * @property { string } [taskChannel] When MultiTasking is enabled, specify the TaskChannel by passing either its `unique_name` or `sid`. Default value is `default`.
 * @property { string } [workflowSid] The SID of the Workflow that you would like to handle routing for the new Task. If there is only one Workflow defined for the Workspace that you are posting the new task to, this parameter is optional.
 * @property { string } [attributes] A URL-encoded JSON string with the attributes of the new task. This value is passed to the Workflow\\\'s `assignment_callback_url` when the Task is assigned to a Worker. For example: `{ \\\"task_type\\\": \\\"call\\\", \\\"twilio_call_sid\\\": \\\"CAxxx\\\", \\\"customer_ticket_number\\\": \\\"12345\\\" }`.
 */
export interface TaskListInstanceCreateOptions {
    timeout?: number;
    priority?: number;
    taskChannel?: string;
    workflowSid?: string;
    attributes?: string;
}
/**
 * Options to pass to each
 *
 * @property { number } [priority] The priority value of the Tasks to read. Returns the list of all Tasks in the Workspace with the specified priority.
 * @property { Array<string> } [assignmentStatus] The `assignment_status` of the Tasks you want to read. Can be: `pending`, `reserved`, `assigned`, `canceled`, `wrapping`, or `completed`. Returns all Tasks in the Workspace with the specified `assignment_status`.
 * @property { string } [workflowSid] The SID of the Workflow with the Tasks to read. Returns the Tasks controlled by the Workflow identified by this SID.
 * @property { string } [workflowName] The friendly name of the Workflow with the Tasks to read. Returns the Tasks controlled by the Workflow identified by this friendly name.
 * @property { string } [taskQueueSid] The SID of the TaskQueue with the Tasks to read. Returns the Tasks waiting in the TaskQueue identified by this SID.
 * @property { string } [taskQueueName] The `friendly_name` of the TaskQueue with the Tasks to read. Returns the Tasks waiting in the TaskQueue identified by this friendly name.
 * @property { string } [evaluateTaskAttributes] The attributes of the Tasks to read. Returns the Tasks that match the attributes specified in this parameter.
 * @property { string } [ordering] How to order the returned Task resources. y default, Tasks are sorted by ascending DateCreated. This value is specified as: `Attribute:Order`, where `Attribute` can be either `Priority` or `DateCreated` and `Order` can be either `asc` or `desc`. For example, `Priority:desc` returns Tasks ordered in descending order of their Priority. Multiple sort orders can be specified in a comma-separated list such as `Priority:desc,DateCreated:asc`, which returns the Tasks in descending Priority order and ascending DateCreated Order.
 * @property { boolean } [hasAddons] Whether to read Tasks with addons. If `true`, returns only Tasks with addons. If `false`, returns only Tasks without addons.
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
    priority?: number;
    assignmentStatus?: Array<string>;
    workflowSid?: string;
    workflowName?: string;
    taskQueueSid?: string;
    taskQueueName?: string;
    evaluateTaskAttributes?: string;
    ordering?: string;
    hasAddons?: boolean;
    pageSize?: number;
    callback?: (item: TaskInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { number } [priority] The priority value of the Tasks to read. Returns the list of all Tasks in the Workspace with the specified priority.
 * @property { Array<string> } [assignmentStatus] The `assignment_status` of the Tasks you want to read. Can be: `pending`, `reserved`, `assigned`, `canceled`, `wrapping`, or `completed`. Returns all Tasks in the Workspace with the specified `assignment_status`.
 * @property { string } [workflowSid] The SID of the Workflow with the Tasks to read. Returns the Tasks controlled by the Workflow identified by this SID.
 * @property { string } [workflowName] The friendly name of the Workflow with the Tasks to read. Returns the Tasks controlled by the Workflow identified by this friendly name.
 * @property { string } [taskQueueSid] The SID of the TaskQueue with the Tasks to read. Returns the Tasks waiting in the TaskQueue identified by this SID.
 * @property { string } [taskQueueName] The `friendly_name` of the TaskQueue with the Tasks to read. Returns the Tasks waiting in the TaskQueue identified by this friendly name.
 * @property { string } [evaluateTaskAttributes] The attributes of the Tasks to read. Returns the Tasks that match the attributes specified in this parameter.
 * @property { string } [ordering] How to order the returned Task resources. y default, Tasks are sorted by ascending DateCreated. This value is specified as: `Attribute:Order`, where `Attribute` can be either `Priority` or `DateCreated` and `Order` can be either `asc` or `desc`. For example, `Priority:desc` returns Tasks ordered in descending order of their Priority. Multiple sort orders can be specified in a comma-separated list such as `Priority:desc,DateCreated:asc`, which returns the Tasks in descending Priority order and ascending DateCreated Order.
 * @property { boolean } [hasAddons] Whether to read Tasks with addons. If `true`, returns only Tasks with addons. If `false`, returns only Tasks without addons.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface TaskListInstanceOptions {
    priority?: number;
    assignmentStatus?: Array<string>;
    workflowSid?: string;
    workflowName?: string;
    taskQueueSid?: string;
    taskQueueName?: string;
    evaluateTaskAttributes?: string;
    ordering?: string;
    hasAddons?: boolean;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { number } [priority] The priority value of the Tasks to read. Returns the list of all Tasks in the Workspace with the specified priority.
 * @property { Array<string> } [assignmentStatus] The `assignment_status` of the Tasks you want to read. Can be: `pending`, `reserved`, `assigned`, `canceled`, `wrapping`, or `completed`. Returns all Tasks in the Workspace with the specified `assignment_status`.
 * @property { string } [workflowSid] The SID of the Workflow with the Tasks to read. Returns the Tasks controlled by the Workflow identified by this SID.
 * @property { string } [workflowName] The friendly name of the Workflow with the Tasks to read. Returns the Tasks controlled by the Workflow identified by this friendly name.
 * @property { string } [taskQueueSid] The SID of the TaskQueue with the Tasks to read. Returns the Tasks waiting in the TaskQueue identified by this SID.
 * @property { string } [taskQueueName] The `friendly_name` of the TaskQueue with the Tasks to read. Returns the Tasks waiting in the TaskQueue identified by this friendly name.
 * @property { string } [evaluateTaskAttributes] The attributes of the Tasks to read. Returns the Tasks that match the attributes specified in this parameter.
 * @property { string } [ordering] How to order the returned Task resources. y default, Tasks are sorted by ascending DateCreated. This value is specified as: `Attribute:Order`, where `Attribute` can be either `Priority` or `DateCreated` and `Order` can be either `asc` or `desc`. For example, `Priority:desc` returns Tasks ordered in descending order of their Priority. Multiple sort orders can be specified in a comma-separated list such as `Priority:desc,DateCreated:asc`, which returns the Tasks in descending Priority order and ascending DateCreated Order.
 * @property { boolean } [hasAddons] Whether to read Tasks with addons. If `true`, returns only Tasks with addons. If `false`, returns only Tasks without addons.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface TaskListInstancePageOptions {
    priority?: number;
    assignmentStatus?: Array<string>;
    workflowSid?: string;
    workflowName?: string;
    taskQueueSid?: string;
    taskQueueName?: string;
    evaluateTaskAttributes?: string;
    ordering?: string;
    hasAddons?: boolean;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface TaskContext {
    reservations: ReservationListInstance;
    /**
     * Remove a TaskInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Remove a TaskInstance
     *
     * @param { TaskContextRemoveOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskInstance
     */
    remove(params: TaskContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    remove(params?: any, callback?: any): Promise<boolean>;
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
    workspaceSid?: string;
    sid?: string;
}
export declare class TaskContextImpl implements TaskContext {
    protected _version: V1;
    protected _solution: TaskContextSolution;
    protected _uri: string;
    protected _reservations?: ReservationListInstance;
    constructor(_version: V1, workspaceSid: string, sid: string);
    get reservations(): ReservationListInstance;
    remove(params?: any, callback?: any): Promise<boolean>;
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
    age?: number | null;
    assignment_status?: TaskStatus;
    attributes?: string | null;
    addons?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    task_queue_entered_date?: Date | null;
    priority?: number | null;
    reason?: string | null;
    sid?: string | null;
    task_queue_sid?: string | null;
    task_queue_friendly_name?: string | null;
    task_channel_sid?: string | null;
    task_channel_unique_name?: string | null;
    timeout?: number | null;
    workflow_sid?: string | null;
    workflow_friendly_name?: string | null;
    workspace_sid?: string | null;
    url?: string | null;
    links?: object | null;
}
export declare class TaskInstance {
    protected _version: V1;
    protected _solution: TaskContextSolution;
    protected _context?: TaskContext;
    constructor(_version: V1, payload: TaskResource, workspaceSid: string, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The number of seconds since the Task was created
     */
    age?: number | null;
    assignmentStatus?: TaskStatus;
    /**
     * The JSON string with custom attributes of the work
     */
    attributes?: string | null;
    /**
     * An object that contains the addon data for all installed addons
     */
    addons?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the Task entered the TaskQueue.
     */
    taskQueueEnteredDate?: Date | null;
    /**
     * Retrieve the list of all Tasks in the Workspace with the specified priority
     */
    priority?: number | null;
    /**
     * The reason the Task was canceled or completed
     */
    reason?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the TaskQueue
     */
    taskQueueSid?: string | null;
    /**
     * The friendly name of the TaskQueue
     */
    taskQueueFriendlyName?: string | null;
    /**
     * The SID of the TaskChannel
     */
    taskChannelSid?: string | null;
    /**
     * The unique name of the TaskChannel
     */
    taskChannelUniqueName?: string | null;
    /**
     * The amount of time in seconds that the Task can live before being assigned
     */
    timeout?: number | null;
    /**
     * The SID of the Workflow that is controlling the Task
     */
    workflowSid?: string | null;
    /**
     * The friendly name of the Workflow that is controlling the Task
     */
    workflowFriendlyName?: string | null;
    /**
     * The SID of the Workspace that contains the Task
     */
    workspaceSid?: string | null;
    /**
     * The absolute URL of the Task resource
     */
    url?: string | null;
    /**
     * The URLs of related resources
     */
    links?: object | null;
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
     * Remove a TaskInstance
     *
     * @param { TaskContextRemoveOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskInstance
     */
    remove(params: TaskContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
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
     * Access the reservations.
     */
    reservations(): ReservationListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        age: number | null | undefined;
        assignmentStatus: TaskStatus | undefined;
        attributes: string | null | undefined;
        addons: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        taskQueueEnteredDate: Date | null | undefined;
        priority: number | null | undefined;
        reason: string | null | undefined;
        sid: string | null | undefined;
        taskQueueSid: string | null | undefined;
        taskQueueFriendlyName: string | null | undefined;
        taskChannelSid: string | null | undefined;
        taskChannelUniqueName: string | null | undefined;
        timeout: number | null | undefined;
        workflowSid: string | null | undefined;
        workflowFriendlyName: string | null | undefined;
        workspaceSid: string | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface TaskListInstance {
    (sid: string): TaskContext;
    get(sid: string): TaskContext;
    /**
     * Create a TaskInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskInstance
     */
    create(callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
    /**
     * Create a TaskInstance
     *
     * @param { TaskListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskInstance
     */
    create(params: TaskListInstanceCreateOptions, callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
    create(params?: any, callback?: any): Promise<TaskInstance>;
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
    workspaceSid?: string;
}
export declare function TaskListInstance(version: V1, workspaceSid: string): TaskListInstance;
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
