/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
import { ReservationListInstance } from "./worker/reservation";
import { WorkerChannelListInstance } from "./worker/workerChannel";
import { WorkerStatisticsListInstance } from "./worker/workerStatistics";
import { WorkersCumulativeStatisticsListInstance } from "./worker/workersCumulativeStatistics";
import { WorkersRealTimeStatisticsListInstance } from "./worker/workersRealTimeStatistics";
import { WorkersStatisticsListInstance } from "./worker/workersStatistics";
/**
 * Options to pass to remove a WorkerInstance
 *
 * @property { string } [ifMatch] The If-Match HTTP request header
 */
export interface WorkerContextRemoveOptions {
    ifMatch?: string;
}
/**
 * Options to pass to update a WorkerInstance
 *
 * @property { string } [ifMatch] The If-Match HTTP request header
 * @property { string } [activitySid] The SID of a valid Activity that will describe the Worker\\\'s initial state. See [Activities](https://www.twilio.com/docs/taskrouter/api/activity) for more information.
 * @property { string } [attributes] The JSON string that describes the Worker. For example: `{ \\\"email\\\": \\\"Bob@example.com\\\", \\\"phone\\\": \\\"+5095551234\\\" }`. This data is passed to the `assignment_callback_url` when TaskRouter assigns a Task to the Worker. Defaults to {}.
 * @property { string } [friendlyName] A descriptive string that you create to describe the Worker. It can be up to 64 characters long.
 * @property { boolean } [rejectPendingReservations] Whether to reject the Worker\\\'s pending reservations. This option is only valid if the Worker\\\'s new [Activity](https://www.twilio.com/docs/taskrouter/api/activity) resource has its `availability` property set to `False`.
 */
export interface WorkerContextUpdateOptions {
    ifMatch?: string;
    activitySid?: string;
    attributes?: string;
    friendlyName?: string;
    rejectPendingReservations?: boolean;
}
/**
 * Options to pass to create a WorkerInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the new Worker. It can be up to 64 characters long.
 * @property { string } [activitySid] The SID of a valid Activity that will describe the new Worker\\\'s initial state. See [Activities](https://www.twilio.com/docs/taskrouter/api/activity) for more information. If not provided, the new Worker\\\'s initial state is the `default_activity_sid` configured on the Workspace.
 * @property { string } [attributes] A valid JSON string that describes the new Worker. For example: `{ \\\"email\\\": \\\"Bob@example.com\\\", \\\"phone\\\": \\\"+5095551234\\\" }`. This data is passed to the `assignment_callback_url` when TaskRouter assigns a Task to the Worker. Defaults to {}.
 */
export interface WorkerListInstanceCreateOptions {
    friendlyName: string;
    activitySid?: string;
    attributes?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [activityName] The `activity_name` of the Worker resources to read.
 * @property { string } [activitySid] The `activity_sid` of the Worker resources to read.
 * @property { string } [available] Whether to return only Worker resources that are available or unavailable. Can be `true`, `1`, or `yes` to return Worker resources that are available, and `false`, or any value returns the Worker resources that are not available.
 * @property { string } [friendlyName] The `friendly_name` of the Worker resources to read.
 * @property { string } [targetWorkersExpression] Filter by Workers that would match an expression on a TaskQueue. This is helpful for debugging which Workers would match a potential queue.
 * @property { string } [taskQueueName] The `friendly_name` of the TaskQueue that the Workers to read are eligible for.
 * @property { string } [taskQueueSid] The SID of the TaskQueue that the Workers to read are eligible for.
 * @property { string } [ordering] Sorting parameter for Workers
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
export interface WorkerListInstanceEachOptions {
    activityName?: string;
    activitySid?: string;
    available?: string;
    friendlyName?: string;
    targetWorkersExpression?: string;
    taskQueueName?: string;
    taskQueueSid?: string;
    ordering?: string;
    pageSize?: number;
    callback?: (item: WorkerInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [activityName] The `activity_name` of the Worker resources to read.
 * @property { string } [activitySid] The `activity_sid` of the Worker resources to read.
 * @property { string } [available] Whether to return only Worker resources that are available or unavailable. Can be `true`, `1`, or `yes` to return Worker resources that are available, and `false`, or any value returns the Worker resources that are not available.
 * @property { string } [friendlyName] The `friendly_name` of the Worker resources to read.
 * @property { string } [targetWorkersExpression] Filter by Workers that would match an expression on a TaskQueue. This is helpful for debugging which Workers would match a potential queue.
 * @property { string } [taskQueueName] The `friendly_name` of the TaskQueue that the Workers to read are eligible for.
 * @property { string } [taskQueueSid] The SID of the TaskQueue that the Workers to read are eligible for.
 * @property { string } [ordering] Sorting parameter for Workers
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface WorkerListInstanceOptions {
    activityName?: string;
    activitySid?: string;
    available?: string;
    friendlyName?: string;
    targetWorkersExpression?: string;
    taskQueueName?: string;
    taskQueueSid?: string;
    ordering?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [activityName] The `activity_name` of the Worker resources to read.
 * @property { string } [activitySid] The `activity_sid` of the Worker resources to read.
 * @property { string } [available] Whether to return only Worker resources that are available or unavailable. Can be `true`, `1`, or `yes` to return Worker resources that are available, and `false`, or any value returns the Worker resources that are not available.
 * @property { string } [friendlyName] The `friendly_name` of the Worker resources to read.
 * @property { string } [targetWorkersExpression] Filter by Workers that would match an expression on a TaskQueue. This is helpful for debugging which Workers would match a potential queue.
 * @property { string } [taskQueueName] The `friendly_name` of the TaskQueue that the Workers to read are eligible for.
 * @property { string } [taskQueueSid] The SID of the TaskQueue that the Workers to read are eligible for.
 * @property { string } [ordering] Sorting parameter for Workers
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface WorkerListInstancePageOptions {
    activityName?: string;
    activitySid?: string;
    available?: string;
    friendlyName?: string;
    targetWorkersExpression?: string;
    taskQueueName?: string;
    taskQueueSid?: string;
    ordering?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface WorkerContext {
    reservations: ReservationListInstance;
    workerChannels: WorkerChannelListInstance;
    statistics: WorkerStatisticsListInstance;
    /**
     * Remove a WorkerInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Remove a WorkerInstance
     *
     * @param { WorkerContextRemoveOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkerInstance
     */
    remove(params: WorkerContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    remove(params?: any, callback?: any): Promise<boolean>;
    /**
     * Fetch a WorkerInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkerInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkerInstance) => any): Promise<WorkerInstance>;
    /**
     * Update a WorkerInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkerInstance
     */
    update(callback?: (error: Error | null, item?: WorkerInstance) => any): Promise<WorkerInstance>;
    /**
     * Update a WorkerInstance
     *
     * @param { WorkerContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkerInstance
     */
    update(params: WorkerContextUpdateOptions, callback?: (error: Error | null, item?: WorkerInstance) => any): Promise<WorkerInstance>;
    update(params?: any, callback?: any): Promise<WorkerInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkerContextSolution {
    workspaceSid?: string;
    sid?: string;
}
export declare class WorkerContextImpl implements WorkerContext {
    protected _version: V1;
    protected _solution: WorkerContextSolution;
    protected _uri: string;
    protected _reservations?: ReservationListInstance;
    protected _workerChannels?: WorkerChannelListInstance;
    protected _statistics?: WorkerStatisticsListInstance;
    constructor(_version: V1, workspaceSid: string, sid: string);
    get reservations(): ReservationListInstance;
    get workerChannels(): WorkerChannelListInstance;
    get statistics(): WorkerStatisticsListInstance;
    remove(params?: any, callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<WorkerInstance>;
    update(params?: any, callback?: any): Promise<WorkerInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): WorkerContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface WorkerPayload extends TwilioResponsePayload {
    workers: WorkerResource[];
}
interface WorkerResource {
    account_sid?: string | null;
    activity_name?: string | null;
    activity_sid?: string | null;
    attributes?: string | null;
    available?: boolean | null;
    date_created?: Date | null;
    date_status_changed?: Date | null;
    date_updated?: Date | null;
    friendly_name?: string | null;
    sid?: string | null;
    workspace_sid?: string | null;
    url?: string | null;
    links?: object | null;
}
export declare class WorkerInstance {
    protected _version: V1;
    protected _solution: WorkerContextSolution;
    protected _context?: WorkerContext;
    constructor(_version: V1, payload: WorkerResource, workspaceSid: string, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The friendly_name of the Worker\'s current Activity
     */
    activityName?: string | null;
    /**
     * The SID of the Worker\'s current Activity
     */
    activitySid?: string | null;
    /**
     * The JSON string that describes the Worker
     */
    attributes?: string | null;
    /**
     * Whether the Worker is available to perform tasks
     */
    available?: boolean | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The date and time in GMT of the last change to the Worker\'s activity
     */
    dateStatusChanged?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Workspace that contains the Worker
     */
    workspaceSid?: string | null;
    /**
     * The absolute URL of the Worker resource
     */
    url?: string | null;
    /**
     * The URLs of related resources
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a WorkerInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Remove a WorkerInstance
     *
     * @param { WorkerContextRemoveOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkerInstance
     */
    remove(params: WorkerContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a WorkerInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkerInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkerInstance) => any): Promise<WorkerInstance>;
    /**
     * Update a WorkerInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkerInstance
     */
    update(callback?: (error: Error | null, item?: WorkerInstance) => any): Promise<WorkerInstance>;
    /**
     * Update a WorkerInstance
     *
     * @param { WorkerContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkerInstance
     */
    update(params: WorkerContextUpdateOptions, callback?: (error: Error | null, item?: WorkerInstance) => any): Promise<WorkerInstance>;
    /**
     * Access the reservations.
     */
    reservations(): ReservationListInstance;
    /**
     * Access the workerChannels.
     */
    workerChannels(): WorkerChannelListInstance;
    /**
     * Access the statistics.
     */
    statistics(): WorkerStatisticsListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        activityName: string | null | undefined;
        activitySid: string | null | undefined;
        attributes: string | null | undefined;
        available: boolean | null | undefined;
        dateCreated: Date | null | undefined;
        dateStatusChanged: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        friendlyName: string | null | undefined;
        sid: string | null | undefined;
        workspaceSid: string | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface WorkerListInstance {
    (sid: string): WorkerContext;
    get(sid: string): WorkerContext;
    cumulativeStatistics: WorkersCumulativeStatisticsListInstance;
    realTimeStatistics: WorkersRealTimeStatisticsListInstance;
    statistics: WorkersStatisticsListInstance;
    /**
     * Create a WorkerInstance
     *
     * @param { WorkerListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkerInstance
     */
    create(params: WorkerListInstanceCreateOptions, callback?: (error: Error | null, item?: WorkerInstance) => any): Promise<WorkerInstance>;
    create(params: any, callback?: any): Promise<WorkerInstance>;
    /**
     * Streams WorkerInstance records from the API.
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
    each(callback?: (item: WorkerInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams WorkerInstance records from the API.
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
     * @param { WorkerListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: WorkerListInstanceEachOptions, callback?: (item: WorkerInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of WorkerInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: WorkerPage) => any): Promise<WorkerPage>;
    /**
     * Retrieve a single target page of WorkerInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: WorkerPage) => any): Promise<WorkerPage>;
    getPage(params?: any, callback?: any): Promise<WorkerPage>;
    /**
     * Lists WorkerInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: WorkerInstance[]) => any): Promise<WorkerInstance[]>;
    /**
     * Lists WorkerInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { WorkerListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: WorkerListInstanceOptions, callback?: (error: Error | null, items: WorkerInstance[]) => any): Promise<WorkerInstance[]>;
    list(params?: any, callback?: any): Promise<WorkerInstance[]>;
    /**
     * Retrieve a single page of WorkerInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: WorkerPage) => any): Promise<WorkerPage>;
    /**
     * Retrieve a single page of WorkerInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { WorkerListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: WorkerListInstancePageOptions, callback?: (error: Error | null, items: WorkerPage) => any): Promise<WorkerPage>;
    page(params?: any, callback?: any): Promise<WorkerPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkerSolution {
    workspaceSid?: string;
}
export declare function WorkerListInstance(version: V1, workspaceSid: string): WorkerListInstance;
export declare class WorkerPage extends Page<V1, WorkerPayload, WorkerResource, WorkerInstance> {
    /**
     * Initialize the WorkerPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: WorkerSolution);
    /**
     * Build an instance of WorkerInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: WorkerResource): WorkerInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
