/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
/**
 * Options to pass to update a WorkerChannelInstance
 *
 * @property { number } [capacity] The total number of Tasks that the Worker should handle for the TaskChannel type. TaskRouter creates reservations for Tasks of this TaskChannel type up to the specified capacity. If the capacity is 0, no new reservations will be created.
 * @property { boolean } [available] Whether the WorkerChannel is available. Set to `false` to prevent the Worker from receiving any new Tasks of this TaskChannel type.
 */
export interface WorkerChannelContextUpdateOptions {
    capacity?: number;
    available?: boolean;
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
export interface WorkerChannelListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: WorkerChannelInstance, done: (err?: Error) => void) => void;
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
export interface WorkerChannelListInstanceOptions {
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
export interface WorkerChannelListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface WorkerChannelContext {
    /**
     * Fetch a WorkerChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkerChannelInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkerChannelInstance) => any): Promise<WorkerChannelInstance>;
    /**
     * Update a WorkerChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkerChannelInstance
     */
    update(callback?: (error: Error | null, item?: WorkerChannelInstance) => any): Promise<WorkerChannelInstance>;
    /**
     * Update a WorkerChannelInstance
     *
     * @param { WorkerChannelContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkerChannelInstance
     */
    update(params: WorkerChannelContextUpdateOptions, callback?: (error: Error | null, item?: WorkerChannelInstance) => any): Promise<WorkerChannelInstance>;
    update(params?: any, callback?: any): Promise<WorkerChannelInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkerChannelContextSolution {
    workspaceSid?: string;
    workerSid?: string;
    sid?: string;
}
export declare class WorkerChannelContextImpl implements WorkerChannelContext {
    protected _version: V1;
    protected _solution: WorkerChannelContextSolution;
    protected _uri: string;
    constructor(_version: V1, workspaceSid: string, workerSid: string, sid: string);
    fetch(callback?: any): Promise<WorkerChannelInstance>;
    update(params?: any, callback?: any): Promise<WorkerChannelInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): WorkerChannelContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface WorkerChannelPayload extends TwilioResponsePayload {
    channels: WorkerChannelResource[];
}
interface WorkerChannelResource {
    account_sid?: string | null;
    assigned_tasks?: number | null;
    available?: boolean | null;
    available_capacity_percentage?: number | null;
    configured_capacity?: number | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    sid?: string | null;
    task_channel_sid?: string | null;
    task_channel_unique_name?: string | null;
    worker_sid?: string | null;
    workspace_sid?: string | null;
    url?: string | null;
}
export declare class WorkerChannelInstance {
    protected _version: V1;
    protected _solution: WorkerChannelContextSolution;
    protected _context?: WorkerChannelContext;
    constructor(_version: V1, payload: WorkerChannelResource, workspaceSid: string, workerSid: string, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The total number of Tasks assigned to Worker for the TaskChannel type
     */
    assignedTasks?: number | null;
    /**
     * Whether the Worker should receive Tasks of the TaskChannel type
     */
    available?: boolean | null;
    /**
     * The current available capacity between 0 to 100 for the TaskChannel
     */
    availableCapacityPercentage?: number | null;
    /**
     * The current configured capacity for the WorkerChannel
     */
    configuredCapacity?: number | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the TaskChannel
     */
    taskChannelSid?: string | null;
    /**
     * The unique name of the TaskChannel, such as \'voice\' or \'sms\'
     */
    taskChannelUniqueName?: string | null;
    /**
     * The SID of the Worker that contains the WorkerChannel
     */
    workerSid?: string | null;
    /**
     * The SID of the Workspace that contains the WorkerChannel
     */
    workspaceSid?: string | null;
    /**
     * The absolute URL of the WorkerChannel resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a WorkerChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkerChannelInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkerChannelInstance) => any): Promise<WorkerChannelInstance>;
    /**
     * Update a WorkerChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkerChannelInstance
     */
    update(callback?: (error: Error | null, item?: WorkerChannelInstance) => any): Promise<WorkerChannelInstance>;
    /**
     * Update a WorkerChannelInstance
     *
     * @param { WorkerChannelContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkerChannelInstance
     */
    update(params: WorkerChannelContextUpdateOptions, callback?: (error: Error | null, item?: WorkerChannelInstance) => any): Promise<WorkerChannelInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        assignedTasks: number | null | undefined;
        available: boolean | null | undefined;
        availableCapacityPercentage: number | null | undefined;
        configuredCapacity: number | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        sid: string | null | undefined;
        taskChannelSid: string | null | undefined;
        taskChannelUniqueName: string | null | undefined;
        workerSid: string | null | undefined;
        workspaceSid: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface WorkerChannelListInstance {
    (sid: string): WorkerChannelContext;
    get(sid: string): WorkerChannelContext;
    /**
     * Streams WorkerChannelInstance records from the API.
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
    each(callback?: (item: WorkerChannelInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams WorkerChannelInstance records from the API.
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
     * @param { WorkerChannelListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: WorkerChannelListInstanceEachOptions, callback?: (item: WorkerChannelInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of WorkerChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: WorkerChannelPage) => any): Promise<WorkerChannelPage>;
    /**
     * Retrieve a single target page of WorkerChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: WorkerChannelPage) => any): Promise<WorkerChannelPage>;
    getPage(params?: any, callback?: any): Promise<WorkerChannelPage>;
    /**
     * Lists WorkerChannelInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: WorkerChannelInstance[]) => any): Promise<WorkerChannelInstance[]>;
    /**
     * Lists WorkerChannelInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { WorkerChannelListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: WorkerChannelListInstanceOptions, callback?: (error: Error | null, items: WorkerChannelInstance[]) => any): Promise<WorkerChannelInstance[]>;
    list(params?: any, callback?: any): Promise<WorkerChannelInstance[]>;
    /**
     * Retrieve a single page of WorkerChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: WorkerChannelPage) => any): Promise<WorkerChannelPage>;
    /**
     * Retrieve a single page of WorkerChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { WorkerChannelListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: WorkerChannelListInstancePageOptions, callback?: (error: Error | null, items: WorkerChannelPage) => any): Promise<WorkerChannelPage>;
    page(params?: any, callback?: any): Promise<WorkerChannelPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkerChannelSolution {
    workspaceSid?: string;
    workerSid?: string;
}
export declare function WorkerChannelListInstance(version: V1, workspaceSid: string, workerSid: string): WorkerChannelListInstance;
export declare class WorkerChannelPage extends Page<V1, WorkerChannelPayload, WorkerChannelResource, WorkerChannelInstance> {
    /**
     * Initialize the WorkerChannelPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: WorkerChannelSolution);
    /**
     * Build an instance of WorkerChannelInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: WorkerChannelResource): WorkerChannelInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
