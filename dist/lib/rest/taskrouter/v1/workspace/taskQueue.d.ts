/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
import { TaskQueueCumulativeStatisticsListInstance } from "./taskQueue/taskQueueCumulativeStatistics";
import { TaskQueueRealTimeStatisticsListInstance } from "./taskQueue/taskQueueRealTimeStatistics";
import { TaskQueueStatisticsListInstance } from "./taskQueue/taskQueueStatistics";
import { TaskQueuesStatisticsListInstance } from "./taskQueue/taskQueuesStatistics";
declare type TaskQueueTaskOrder = "FIFO" | "LIFO";
/**
 * Options to pass to update a TaskQueueInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the TaskQueue. For example `Support-Tier 1`, `Sales`, or `Escalation`.
 * @property { string } [targetWorkers] A string describing the Worker selection criteria for any Tasks that enter the TaskQueue. For example \\\'\\\"language\\\" == \\\"spanish\\\"\\\' If no TargetWorkers parameter is provided, Tasks will wait in the queue until they are either deleted or moved to another queue. Additional examples on how to describing Worker selection criteria below.
 * @property { string } [reservationActivitySid] The SID of the Activity to assign Workers when a task is reserved for them.
 * @property { string } [assignmentActivitySid] The SID of the Activity to assign Workers when a task is assigned for them.
 * @property { number } [maxReservedWorkers] The maximum number of Workers to create reservations for the assignment of a task while in the queue. Maximum of 50.
 * @property { TaskQueueTaskOrder } [taskOrder]
 */
export interface TaskQueueContextUpdateOptions {
    friendlyName?: string;
    targetWorkers?: string;
    reservationActivitySid?: string;
    assignmentActivitySid?: string;
    maxReservedWorkers?: number;
    taskOrder?: TaskQueueTaskOrder;
}
/**
 * Options to pass to create a TaskQueueInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the TaskQueue. For example `Support-Tier 1`, `Sales`, or `Escalation`.
 * @property { string } [targetWorkers] A string that describes the Worker selection criteria for any Tasks that enter the TaskQueue. For example, `\\\'\\\"language\\\" == \\\"spanish\\\"\\\'`. The default value is `1==1`. If this value is empty, Tasks will wait in the TaskQueue until they are deleted or moved to another TaskQueue. For more information about Worker selection, see [Describing Worker selection criteria](https://www.twilio.com/docs/taskrouter/api/taskqueues#target-workers).
 * @property { number } [maxReservedWorkers] The maximum number of Workers to reserve for the assignment of a Task in the queue. Can be an integer between 1 and 50, inclusive and defaults to 1.
 * @property { TaskQueueTaskOrder } [taskOrder]
 * @property { string } [reservationActivitySid] The SID of the Activity to assign Workers when a task is reserved for them.
 * @property { string } [assignmentActivitySid] The SID of the Activity to assign Workers when a task is assigned to them.
 */
export interface TaskQueueListInstanceCreateOptions {
    friendlyName: string;
    targetWorkers?: string;
    maxReservedWorkers?: number;
    taskOrder?: TaskQueueTaskOrder;
    reservationActivitySid?: string;
    assignmentActivitySid?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [friendlyName] The `friendly_name` of the TaskQueue resources to read.
 * @property { string } [evaluateWorkerAttributes] The attributes of the Workers to read. Returns the TaskQueues with Workers that match the attributes specified in this parameter.
 * @property { string } [workerSid] The SID of the Worker with the TaskQueue resources to read.
 * @property { string } [ordering] Sorting parameter for TaskQueues
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
export interface TaskQueueListInstanceEachOptions {
    friendlyName?: string;
    evaluateWorkerAttributes?: string;
    workerSid?: string;
    ordering?: string;
    pageSize?: number;
    callback?: (item: TaskQueueInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [friendlyName] The `friendly_name` of the TaskQueue resources to read.
 * @property { string } [evaluateWorkerAttributes] The attributes of the Workers to read. Returns the TaskQueues with Workers that match the attributes specified in this parameter.
 * @property { string } [workerSid] The SID of the Worker with the TaskQueue resources to read.
 * @property { string } [ordering] Sorting parameter for TaskQueues
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface TaskQueueListInstanceOptions {
    friendlyName?: string;
    evaluateWorkerAttributes?: string;
    workerSid?: string;
    ordering?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [friendlyName] The `friendly_name` of the TaskQueue resources to read.
 * @property { string } [evaluateWorkerAttributes] The attributes of the Workers to read. Returns the TaskQueues with Workers that match the attributes specified in this parameter.
 * @property { string } [workerSid] The SID of the Worker with the TaskQueue resources to read.
 * @property { string } [ordering] Sorting parameter for TaskQueues
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface TaskQueueListInstancePageOptions {
    friendlyName?: string;
    evaluateWorkerAttributes?: string;
    workerSid?: string;
    ordering?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface TaskQueueContext {
    cumulativeStatistics: TaskQueueCumulativeStatisticsListInstance;
    realTimeStatistics: TaskQueueRealTimeStatisticsListInstance;
    statistics: TaskQueueStatisticsListInstance;
    /**
     * Remove a TaskQueueInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a TaskQueueInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskQueueInstance
     */
    fetch(callback?: (error: Error | null, item?: TaskQueueInstance) => any): Promise<TaskQueueInstance>;
    /**
     * Update a TaskQueueInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskQueueInstance
     */
    update(callback?: (error: Error | null, item?: TaskQueueInstance) => any): Promise<TaskQueueInstance>;
    /**
     * Update a TaskQueueInstance
     *
     * @param { TaskQueueContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskQueueInstance
     */
    update(params: TaskQueueContextUpdateOptions, callback?: (error: Error | null, item?: TaskQueueInstance) => any): Promise<TaskQueueInstance>;
    update(params?: any, callback?: any): Promise<TaskQueueInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TaskQueueContextSolution {
    workspaceSid?: string;
    sid?: string;
}
export declare class TaskQueueContextImpl implements TaskQueueContext {
    protected _version: V1;
    protected _solution: TaskQueueContextSolution;
    protected _uri: string;
    protected _cumulativeStatistics?: TaskQueueCumulativeStatisticsListInstance;
    protected _realTimeStatistics?: TaskQueueRealTimeStatisticsListInstance;
    protected _statistics?: TaskQueueStatisticsListInstance;
    constructor(_version: V1, workspaceSid: string, sid: string);
    get cumulativeStatistics(): TaskQueueCumulativeStatisticsListInstance;
    get realTimeStatistics(): TaskQueueRealTimeStatisticsListInstance;
    get statistics(): TaskQueueStatisticsListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<TaskQueueInstance>;
    update(params?: any, callback?: any): Promise<TaskQueueInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): TaskQueueContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface TaskQueuePayload extends TwilioResponsePayload {
    task_queues: TaskQueueResource[];
}
interface TaskQueueResource {
    account_sid?: string | null;
    assignment_activity_sid?: string | null;
    assignment_activity_name?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    friendly_name?: string | null;
    max_reserved_workers?: number | null;
    reservation_activity_sid?: string | null;
    reservation_activity_name?: string | null;
    sid?: string | null;
    target_workers?: string | null;
    task_order?: TaskQueueTaskOrder;
    url?: string | null;
    workspace_sid?: string | null;
    links?: object | null;
}
export declare class TaskQueueInstance {
    protected _version: V1;
    protected _solution: TaskQueueContextSolution;
    protected _context?: TaskQueueContext;
    constructor(_version: V1, payload: TaskQueueResource, workspaceSid: string, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Activity to assign Workers when a task is assigned for them
     */
    assignmentActivitySid?: string | null;
    /**
     * The name of the Activity to assign Workers when a task is assigned for them
     */
    assignmentActivityName?: string | null;
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
     * The maximum number of Workers to reserve
     */
    maxReservedWorkers?: number | null;
    /**
     * The SID of the Activity to assign Workers once a task is reserved for them
     */
    reservationActivitySid?: string | null;
    /**
     * The name of the Activity to assign Workers once a task is reserved for them
     */
    reservationActivityName?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * A string describing the Worker selection criteria for any Tasks that enter the TaskQueue
     */
    targetWorkers?: string | null;
    taskOrder?: TaskQueueTaskOrder;
    /**
     * The absolute URL of the TaskQueue resource
     */
    url?: string | null;
    /**
     * The SID of the Workspace that contains the TaskQueue
     */
    workspaceSid?: string | null;
    /**
     * The URLs of related resources
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a TaskQueueInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a TaskQueueInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskQueueInstance
     */
    fetch(callback?: (error: Error | null, item?: TaskQueueInstance) => any): Promise<TaskQueueInstance>;
    /**
     * Update a TaskQueueInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskQueueInstance
     */
    update(callback?: (error: Error | null, item?: TaskQueueInstance) => any): Promise<TaskQueueInstance>;
    /**
     * Update a TaskQueueInstance
     *
     * @param { TaskQueueContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskQueueInstance
     */
    update(params: TaskQueueContextUpdateOptions, callback?: (error: Error | null, item?: TaskQueueInstance) => any): Promise<TaskQueueInstance>;
    /**
     * Access the cumulativeStatistics.
     */
    cumulativeStatistics(): TaskQueueCumulativeStatisticsListInstance;
    /**
     * Access the realTimeStatistics.
     */
    realTimeStatistics(): TaskQueueRealTimeStatisticsListInstance;
    /**
     * Access the statistics.
     */
    statistics(): TaskQueueStatisticsListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        assignmentActivitySid: string | null | undefined;
        assignmentActivityName: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        friendlyName: string | null | undefined;
        maxReservedWorkers: number | null | undefined;
        reservationActivitySid: string | null | undefined;
        reservationActivityName: string | null | undefined;
        sid: string | null | undefined;
        targetWorkers: string | null | undefined;
        taskOrder: TaskQueueTaskOrder | undefined;
        url: string | null | undefined;
        workspaceSid: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface TaskQueueListInstance {
    (sid: string): TaskQueueContext;
    get(sid: string): TaskQueueContext;
    statistics: TaskQueuesStatisticsListInstance;
    /**
     * Create a TaskQueueInstance
     *
     * @param { TaskQueueListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskQueueInstance
     */
    create(params: TaskQueueListInstanceCreateOptions, callback?: (error: Error | null, item?: TaskQueueInstance) => any): Promise<TaskQueueInstance>;
    create(params: any, callback?: any): Promise<TaskQueueInstance>;
    /**
     * Streams TaskQueueInstance records from the API.
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
    each(callback?: (item: TaskQueueInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams TaskQueueInstance records from the API.
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
     * @param { TaskQueueListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: TaskQueueListInstanceEachOptions, callback?: (item: TaskQueueInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of TaskQueueInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: TaskQueuePage) => any): Promise<TaskQueuePage>;
    /**
     * Retrieve a single target page of TaskQueueInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: TaskQueuePage) => any): Promise<TaskQueuePage>;
    getPage(params?: any, callback?: any): Promise<TaskQueuePage>;
    /**
     * Lists TaskQueueInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: TaskQueueInstance[]) => any): Promise<TaskQueueInstance[]>;
    /**
     * Lists TaskQueueInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TaskQueueListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: TaskQueueListInstanceOptions, callback?: (error: Error | null, items: TaskQueueInstance[]) => any): Promise<TaskQueueInstance[]>;
    list(params?: any, callback?: any): Promise<TaskQueueInstance[]>;
    /**
     * Retrieve a single page of TaskQueueInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: TaskQueuePage) => any): Promise<TaskQueuePage>;
    /**
     * Retrieve a single page of TaskQueueInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TaskQueueListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: TaskQueueListInstancePageOptions, callback?: (error: Error | null, items: TaskQueuePage) => any): Promise<TaskQueuePage>;
    page(params?: any, callback?: any): Promise<TaskQueuePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TaskQueueSolution {
    workspaceSid?: string;
}
export declare function TaskQueueListInstance(version: V1, workspaceSid: string): TaskQueueListInstance;
export declare class TaskQueuePage extends Page<V1, TaskQueuePayload, TaskQueueResource, TaskQueueInstance> {
    /**
     * Initialize the TaskQueuePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: TaskQueueSolution);
    /**
     * Build an instance of TaskQueueInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: TaskQueueResource): TaskQueueInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
