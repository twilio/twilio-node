/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { ActivityListInstance } from "./workspace/activity";
import { EventListInstance } from "./workspace/event";
import { TaskListInstance } from "./workspace/task";
import { TaskChannelListInstance } from "./workspace/taskChannel";
import { TaskQueueListInstance } from "./workspace/taskQueue";
import { WorkerListInstance } from "./workspace/worker";
import { WorkflowListInstance } from "./workspace/workflow";
import { WorkspaceCumulativeStatisticsListInstance } from "./workspace/workspaceCumulativeStatistics";
import { WorkspaceRealTimeStatisticsListInstance } from "./workspace/workspaceRealTimeStatistics";
import { WorkspaceStatisticsListInstance } from "./workspace/workspaceStatistics";
declare type WorkspaceQueueOrder = "FIFO" | "LIFO";
/**
 * Options to pass to update a WorkspaceInstance
 *
 * @property { string } [defaultActivitySid] The SID of the Activity that will be used when new Workers are created in the Workspace.
 * @property { string } [eventCallbackUrl] The URL we should call when an event occurs. See [Workspace Events](https://www.twilio.com/docs/taskrouter/api/event) for more information. This parameter supports Twilio\\\'s [Webhooks (HTTP callbacks) Connection Overrides](https://www.twilio.com/docs/usage/webhooks/webhooks-connection-overrides).
 * @property { string } [eventsFilter] The list of Workspace events for which to call event_callback_url. For example if `EventsFilter=task.created,task.canceled,worker.activity.update`, then TaskRouter will call event_callback_url only when a task is created, canceled, or a Worker activity is updated.
 * @property { string } [friendlyName] A descriptive string that you create to describe the Workspace resource. For example: `Sales Call Center` or `Customer Support Team`.
 * @property { boolean } [multiTaskEnabled] Whether to enable multi-tasking. Can be: `true` to enable multi-tasking, or `false` to disable it. However, all workspaces should be maintained as multi-tasking. There is no default when omitting this parameter. A multi-tasking Workspace can\\\'t be updated to single-tasking unless it is not a Flex Project and another (legacy) single-tasking Workspace exists. Multi-tasking allows Workers to handle multiple Tasks simultaneously. In multi-tasking mode, each Worker can receive parallel reservations up to the per-channel maximums defined in the Workers section. In single-tasking mode (legacy mode), each Worker will only receive a new reservation when the previous task is completed. Learn more at [Multitasking](https://www.twilio.com/docs/taskrouter/multitasking).
 * @property { string } [timeoutActivitySid] The SID of the Activity that will be assigned to a Worker when a Task reservation times out without a response.
 * @property { WorkspaceQueueOrder } [prioritizeQueueOrder]
 */
export interface WorkspaceContextUpdateOptions {
    defaultActivitySid?: string;
    eventCallbackUrl?: string;
    eventsFilter?: string;
    friendlyName?: string;
    multiTaskEnabled?: boolean;
    timeoutActivitySid?: string;
    prioritizeQueueOrder?: WorkspaceQueueOrder;
}
/**
 * Options to pass to create a WorkspaceInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the Workspace resource. It can be up to 64 characters long. For example: `Customer Support` or `2014 Election Campaign`.
 * @property { string } [eventCallbackUrl] The URL we should call when an event occurs. If provided, the Workspace will publish events to this URL, for example, to collect data for reporting. See [Workspace Events](https://www.twilio.com/docs/taskrouter/api/event) for more information. This parameter supports Twilio\\\'s [Webhooks (HTTP callbacks) Connection Overrides](https://www.twilio.com/docs/usage/webhooks/webhooks-connection-overrides).
 * @property { string } [eventsFilter] The list of Workspace events for which to call event_callback_url. For example, if `EventsFilter=task.created, task.canceled, worker.activity.update`, then TaskRouter will call event_callback_url only when a task is created, canceled, or a Worker activity is updated.
 * @property { boolean } [multiTaskEnabled] Whether to enable multi-tasking. Can be: `true` to enable multi-tasking, or `false` to disable it. However, all workspaces should be created as multi-tasking. The default is `true`. Multi-tasking allows Workers to handle multiple Tasks simultaneously. When enabled (`true`), each Worker can receive parallel reservations up to the per-channel maximums defined in the Workers section. In single-tasking mode (legacy mode), each Worker will only receive a new reservation when the previous task is completed. Learn more at [Multitasking](https://www.twilio.com/docs/taskrouter/multitasking).
 * @property { string } [template] An available template name. Can be: `NONE` or `FIFO` and the default is `NONE`. Pre-configures the Workspace with the Workflow and Activities specified in the template. `NONE` will create a Workspace with only a set of default activities. `FIFO` will configure TaskRouter with a set of default activities and a single TaskQueue for first-in, first-out distribution, which can be useful when you are getting started with TaskRouter.
 * @property { WorkspaceQueueOrder } [prioritizeQueueOrder]
 */
export interface WorkspaceListInstanceCreateOptions {
    friendlyName: string;
    eventCallbackUrl?: string;
    eventsFilter?: string;
    multiTaskEnabled?: boolean;
    template?: string;
    prioritizeQueueOrder?: WorkspaceQueueOrder;
}
/**
 * Options to pass to each
 *
 * @property { string } [friendlyName] The `friendly_name` of the Workspace resources to read. For example `Customer Support` or `2014 Election Campaign`.
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
export interface WorkspaceListInstanceEachOptions {
    friendlyName?: string;
    pageSize?: number;
    callback?: (item: WorkspaceInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [friendlyName] The `friendly_name` of the Workspace resources to read. For example `Customer Support` or `2014 Election Campaign`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface WorkspaceListInstanceOptions {
    friendlyName?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [friendlyName] The `friendly_name` of the Workspace resources to read. For example `Customer Support` or `2014 Election Campaign`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface WorkspaceListInstancePageOptions {
    friendlyName?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface WorkspaceContext {
    activities: ActivityListInstance;
    events: EventListInstance;
    tasks: TaskListInstance;
    taskChannels: TaskChannelListInstance;
    taskQueues: TaskQueueListInstance;
    workers: WorkerListInstance;
    workflows: WorkflowListInstance;
    cumulativeStatistics: WorkspaceCumulativeStatisticsListInstance;
    realTimeStatistics: WorkspaceRealTimeStatisticsListInstance;
    statistics: WorkspaceStatisticsListInstance;
    /**
     * Remove a WorkspaceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a WorkspaceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkspaceInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkspaceInstance) => any): Promise<WorkspaceInstance>;
    /**
     * Update a WorkspaceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkspaceInstance
     */
    update(callback?: (error: Error | null, item?: WorkspaceInstance) => any): Promise<WorkspaceInstance>;
    /**
     * Update a WorkspaceInstance
     *
     * @param { WorkspaceContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkspaceInstance
     */
    update(params: WorkspaceContextUpdateOptions, callback?: (error: Error | null, item?: WorkspaceInstance) => any): Promise<WorkspaceInstance>;
    update(params?: any, callback?: any): Promise<WorkspaceInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkspaceContextSolution {
    sid?: string;
}
export declare class WorkspaceContextImpl implements WorkspaceContext {
    protected _version: V1;
    protected _solution: WorkspaceContextSolution;
    protected _uri: string;
    protected _activities?: ActivityListInstance;
    protected _events?: EventListInstance;
    protected _tasks?: TaskListInstance;
    protected _taskChannels?: TaskChannelListInstance;
    protected _taskQueues?: TaskQueueListInstance;
    protected _workers?: WorkerListInstance;
    protected _workflows?: WorkflowListInstance;
    protected _cumulativeStatistics?: WorkspaceCumulativeStatisticsListInstance;
    protected _realTimeStatistics?: WorkspaceRealTimeStatisticsListInstance;
    protected _statistics?: WorkspaceStatisticsListInstance;
    constructor(_version: V1, sid: string);
    get activities(): ActivityListInstance;
    get events(): EventListInstance;
    get tasks(): TaskListInstance;
    get taskChannels(): TaskChannelListInstance;
    get taskQueues(): TaskQueueListInstance;
    get workers(): WorkerListInstance;
    get workflows(): WorkflowListInstance;
    get cumulativeStatistics(): WorkspaceCumulativeStatisticsListInstance;
    get realTimeStatistics(): WorkspaceRealTimeStatisticsListInstance;
    get statistics(): WorkspaceStatisticsListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<WorkspaceInstance>;
    update(params?: any, callback?: any): Promise<WorkspaceInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): WorkspaceContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface WorkspacePayload extends TwilioResponsePayload {
    workspaces: WorkspaceResource[];
}
interface WorkspaceResource {
    account_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    default_activity_name?: string | null;
    default_activity_sid?: string | null;
    event_callback_url?: string | null;
    events_filter?: string | null;
    friendly_name?: string | null;
    multi_task_enabled?: boolean | null;
    sid?: string | null;
    timeout_activity_name?: string | null;
    timeout_activity_sid?: string | null;
    prioritize_queue_order?: WorkspaceQueueOrder;
    url?: string | null;
    links?: object | null;
}
export declare class WorkspaceInstance {
    protected _version: V1;
    protected _solution: WorkspaceContextSolution;
    protected _context?: WorkspaceContext;
    constructor(_version: V1, payload: WorkspaceResource, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The name of the default activity
     */
    defaultActivityName?: string | null;
    /**
     * The SID of the Activity that will be used when new Workers are created in the Workspace
     */
    defaultActivitySid?: string | null;
    /**
     * The URL we call when an event occurs
     */
    eventCallbackUrl?: string | null;
    /**
     * The list of Workspace events for which to call event_callback_url
     */
    eventsFilter?: string | null;
    /**
     * The string that you assigned to describe the Workspace resource
     */
    friendlyName?: string | null;
    /**
     * Whether multi-tasking is enabled
     */
    multiTaskEnabled?: boolean | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The name of the timeout activity
     */
    timeoutActivityName?: string | null;
    /**
     * The SID of the Activity that will be assigned to a Worker when a Task reservation times out without a response
     */
    timeoutActivitySid?: string | null;
    prioritizeQueueOrder?: WorkspaceQueueOrder;
    /**
     * The absolute URL of the Workspace resource
     */
    url?: string | null;
    /**
     * The URLs of related resources
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a WorkspaceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a WorkspaceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkspaceInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkspaceInstance) => any): Promise<WorkspaceInstance>;
    /**
     * Update a WorkspaceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkspaceInstance
     */
    update(callback?: (error: Error | null, item?: WorkspaceInstance) => any): Promise<WorkspaceInstance>;
    /**
     * Update a WorkspaceInstance
     *
     * @param { WorkspaceContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkspaceInstance
     */
    update(params: WorkspaceContextUpdateOptions, callback?: (error: Error | null, item?: WorkspaceInstance) => any): Promise<WorkspaceInstance>;
    /**
     * Access the activities.
     */
    activities(): ActivityListInstance;
    /**
     * Access the events.
     */
    events(): EventListInstance;
    /**
     * Access the tasks.
     */
    tasks(): TaskListInstance;
    /**
     * Access the taskChannels.
     */
    taskChannels(): TaskChannelListInstance;
    /**
     * Access the taskQueues.
     */
    taskQueues(): TaskQueueListInstance;
    /**
     * Access the workers.
     */
    workers(): WorkerListInstance;
    /**
     * Access the workflows.
     */
    workflows(): WorkflowListInstance;
    /**
     * Access the cumulativeStatistics.
     */
    cumulativeStatistics(): WorkspaceCumulativeStatisticsListInstance;
    /**
     * Access the realTimeStatistics.
     */
    realTimeStatistics(): WorkspaceRealTimeStatisticsListInstance;
    /**
     * Access the statistics.
     */
    statistics(): WorkspaceStatisticsListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        defaultActivityName: string | null | undefined;
        defaultActivitySid: string | null | undefined;
        eventCallbackUrl: string | null | undefined;
        eventsFilter: string | null | undefined;
        friendlyName: string | null | undefined;
        multiTaskEnabled: boolean | null | undefined;
        sid: string | null | undefined;
        timeoutActivityName: string | null | undefined;
        timeoutActivitySid: string | null | undefined;
        prioritizeQueueOrder: WorkspaceQueueOrder | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface WorkspaceListInstance {
    (sid: string): WorkspaceContext;
    get(sid: string): WorkspaceContext;
    /**
     * Create a WorkspaceInstance
     *
     * @param { WorkspaceListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkspaceInstance
     */
    create(params: WorkspaceListInstanceCreateOptions, callback?: (error: Error | null, item?: WorkspaceInstance) => any): Promise<WorkspaceInstance>;
    create(params: any, callback?: any): Promise<WorkspaceInstance>;
    /**
     * Streams WorkspaceInstance records from the API.
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
    each(callback?: (item: WorkspaceInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams WorkspaceInstance records from the API.
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
     * @param { WorkspaceListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: WorkspaceListInstanceEachOptions, callback?: (item: WorkspaceInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of WorkspaceInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: WorkspacePage) => any): Promise<WorkspacePage>;
    /**
     * Retrieve a single target page of WorkspaceInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: WorkspacePage) => any): Promise<WorkspacePage>;
    getPage(params?: any, callback?: any): Promise<WorkspacePage>;
    /**
     * Lists WorkspaceInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: WorkspaceInstance[]) => any): Promise<WorkspaceInstance[]>;
    /**
     * Lists WorkspaceInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { WorkspaceListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: WorkspaceListInstanceOptions, callback?: (error: Error | null, items: WorkspaceInstance[]) => any): Promise<WorkspaceInstance[]>;
    list(params?: any, callback?: any): Promise<WorkspaceInstance[]>;
    /**
     * Retrieve a single page of WorkspaceInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: WorkspacePage) => any): Promise<WorkspacePage>;
    /**
     * Retrieve a single page of WorkspaceInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { WorkspaceListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: WorkspaceListInstancePageOptions, callback?: (error: Error | null, items: WorkspacePage) => any): Promise<WorkspacePage>;
    page(params?: any, callback?: any): Promise<WorkspacePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkspaceSolution {
}
export declare function WorkspaceListInstance(version: V1): WorkspaceListInstance;
export declare class WorkspacePage extends Page<V1, WorkspacePayload, WorkspaceResource, WorkspaceInstance> {
    /**
     * Initialize the WorkspacePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: WorkspaceSolution);
    /**
     * Build an instance of WorkspaceInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: WorkspaceResource): WorkspaceInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
