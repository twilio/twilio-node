/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to update a TaskChannelInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the Task Channel. It can be up to 64 characters long.
 * @property { boolean } [channelOptimizedRouting] Whether the TaskChannel should prioritize Workers that have been idle. If `true`, Workers that have been idle the longest are prioritized.
 */
export interface TaskChannelContextUpdateOptions {
    friendlyName?: string;
    channelOptimizedRouting?: boolean;
}
/**
 * Options to pass to create a TaskChannelInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the Task Channel. It can be up to 64 characters long.
 * @property { string } uniqueName An application-defined string that uniquely identifies the Task Channel, such as `voice` or `sms`.
 * @property { boolean } [channelOptimizedRouting] Whether the Task Channel should prioritize Workers that have been idle. If `true`, Workers that have been idle the longest are prioritized.
 */
export interface TaskChannelListInstanceCreateOptions {
    friendlyName: string;
    uniqueName: string;
    channelOptimizedRouting?: boolean;
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
export interface TaskChannelListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: TaskChannelInstance, done: (err?: Error) => void) => void;
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
export interface TaskChannelListInstanceOptions {
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
export interface TaskChannelListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface TaskChannelContext {
    /**
     * Remove a TaskChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a TaskChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskChannelInstance
     */
    fetch(callback?: (error: Error | null, item?: TaskChannelInstance) => any): Promise<TaskChannelInstance>;
    /**
     * Update a TaskChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskChannelInstance
     */
    update(callback?: (error: Error | null, item?: TaskChannelInstance) => any): Promise<TaskChannelInstance>;
    /**
     * Update a TaskChannelInstance
     *
     * @param { TaskChannelContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskChannelInstance
     */
    update(params: TaskChannelContextUpdateOptions, callback?: (error: Error | null, item?: TaskChannelInstance) => any): Promise<TaskChannelInstance>;
    update(params?: any, callback?: any): Promise<TaskChannelInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TaskChannelContextSolution {
    workspaceSid?: string;
    sid?: string;
}
export declare class TaskChannelContextImpl implements TaskChannelContext {
    protected _version: V1;
    protected _solution: TaskChannelContextSolution;
    protected _uri: string;
    constructor(_version: V1, workspaceSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<TaskChannelInstance>;
    update(params?: any, callback?: any): Promise<TaskChannelInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): TaskChannelContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface TaskChannelPayload extends TwilioResponsePayload {
    channels: TaskChannelResource[];
}
interface TaskChannelResource {
    account_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    friendly_name?: string | null;
    sid?: string | null;
    unique_name?: string | null;
    workspace_sid?: string | null;
    channel_optimized_routing?: boolean | null;
    url?: string | null;
    links?: object | null;
}
export declare class TaskChannelInstance {
    protected _version: V1;
    protected _solution: TaskChannelContextSolution;
    protected _context?: TaskChannelContext;
    constructor(_version: V1, payload: TaskChannelResource, workspaceSid: string, sid?: string);
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
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * An application-defined string that uniquely identifies the Task Channel
     */
    uniqueName?: string | null;
    /**
     * The SID of the Workspace that contains the Task Channel
     */
    workspaceSid?: string | null;
    /**
     * Whether the Task Channel will prioritize Workers that have been idle
     */
    channelOptimizedRouting?: boolean | null;
    /**
     * The absolute URL of the Task Channel resource
     */
    url?: string | null;
    /**
     * The URLs of related resources
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a TaskChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a TaskChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskChannelInstance
     */
    fetch(callback?: (error: Error | null, item?: TaskChannelInstance) => any): Promise<TaskChannelInstance>;
    /**
     * Update a TaskChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskChannelInstance
     */
    update(callback?: (error: Error | null, item?: TaskChannelInstance) => any): Promise<TaskChannelInstance>;
    /**
     * Update a TaskChannelInstance
     *
     * @param { TaskChannelContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskChannelInstance
     */
    update(params: TaskChannelContextUpdateOptions, callback?: (error: Error | null, item?: TaskChannelInstance) => any): Promise<TaskChannelInstance>;
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
        sid: string | null | undefined;
        uniqueName: string | null | undefined;
        workspaceSid: string | null | undefined;
        channelOptimizedRouting: boolean | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface TaskChannelListInstance {
    (sid: string): TaskChannelContext;
    get(sid: string): TaskChannelContext;
    /**
     * Create a TaskChannelInstance
     *
     * @param { TaskChannelListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TaskChannelInstance
     */
    create(params: TaskChannelListInstanceCreateOptions, callback?: (error: Error | null, item?: TaskChannelInstance) => any): Promise<TaskChannelInstance>;
    create(params: any, callback?: any): Promise<TaskChannelInstance>;
    /**
     * Streams TaskChannelInstance records from the API.
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
    each(callback?: (item: TaskChannelInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams TaskChannelInstance records from the API.
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
     * @param { TaskChannelListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: TaskChannelListInstanceEachOptions, callback?: (item: TaskChannelInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of TaskChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: TaskChannelPage) => any): Promise<TaskChannelPage>;
    /**
     * Retrieve a single target page of TaskChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: TaskChannelPage) => any): Promise<TaskChannelPage>;
    getPage(params?: any, callback?: any): Promise<TaskChannelPage>;
    /**
     * Lists TaskChannelInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: TaskChannelInstance[]) => any): Promise<TaskChannelInstance[]>;
    /**
     * Lists TaskChannelInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TaskChannelListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: TaskChannelListInstanceOptions, callback?: (error: Error | null, items: TaskChannelInstance[]) => any): Promise<TaskChannelInstance[]>;
    list(params?: any, callback?: any): Promise<TaskChannelInstance[]>;
    /**
     * Retrieve a single page of TaskChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: TaskChannelPage) => any): Promise<TaskChannelPage>;
    /**
     * Retrieve a single page of TaskChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TaskChannelListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: TaskChannelListInstancePageOptions, callback?: (error: Error | null, items: TaskChannelPage) => any): Promise<TaskChannelPage>;
    page(params?: any, callback?: any): Promise<TaskChannelPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TaskChannelSolution {
    workspaceSid?: string;
}
export declare function TaskChannelListInstance(version: V1, workspaceSid: string): TaskChannelListInstance;
export declare class TaskChannelPage extends Page<V1, TaskChannelPayload, TaskChannelResource, TaskChannelInstance> {
    /**
     * Initialize the TaskChannelPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: TaskChannelSolution);
    /**
     * Build an instance of TaskChannelInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: TaskChannelResource): TaskChannelInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
