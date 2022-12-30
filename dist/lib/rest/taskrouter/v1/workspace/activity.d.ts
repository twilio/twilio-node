/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to update a ActivityInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the Activity resource. It can be up to 64 characters long. These names are used to calculate and expose statistics about Workers, and provide visibility into the state of each Worker. Examples of friendly names include: `on-call`, `break`, and `email`.
 */
export interface ActivityContextUpdateOptions {
    friendlyName?: string;
}
/**
 * Options to pass to create a ActivityInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the Activity resource. It can be up to 64 characters long. These names are used to calculate and expose statistics about Workers, and provide visibility into the state of each Worker. Examples of friendly names include: `on-call`, `break`, and `email`.
 * @property { boolean } [available] Whether the Worker should be eligible to receive a Task when it occupies the Activity. A value of `true`, `1`, or `yes` specifies the Activity is available. All other values specify that it is not. The value cannot be changed after the Activity is created.
 */
export interface ActivityListInstanceCreateOptions {
    friendlyName: string;
    available?: boolean;
}
/**
 * Options to pass to each
 *
 * @property { string } [friendlyName] The `friendly_name` of the Activity resources to read.
 * @property { string } [available] Whether return only Activity resources that are available or unavailable. A value of `true` returns only available activities. Values of \'1\' or `yes` also indicate `true`. All other values represent `false` and return activities that are unavailable.
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
export interface ActivityListInstanceEachOptions {
    friendlyName?: string;
    available?: string;
    pageSize?: number;
    callback?: (item: ActivityInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [friendlyName] The `friendly_name` of the Activity resources to read.
 * @property { string } [available] Whether return only Activity resources that are available or unavailable. A value of `true` returns only available activities. Values of \'1\' or `yes` also indicate `true`. All other values represent `false` and return activities that are unavailable.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ActivityListInstanceOptions {
    friendlyName?: string;
    available?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [friendlyName] The `friendly_name` of the Activity resources to read.
 * @property { string } [available] Whether return only Activity resources that are available or unavailable. A value of `true` returns only available activities. Values of \'1\' or `yes` also indicate `true`. All other values represent `false` and return activities that are unavailable.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ActivityListInstancePageOptions {
    friendlyName?: string;
    available?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ActivityContext {
    /**
     * Remove a ActivityInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ActivityInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ActivityInstance
     */
    fetch(callback?: (error: Error | null, item?: ActivityInstance) => any): Promise<ActivityInstance>;
    /**
     * Update a ActivityInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ActivityInstance
     */
    update(callback?: (error: Error | null, item?: ActivityInstance) => any): Promise<ActivityInstance>;
    /**
     * Update a ActivityInstance
     *
     * @param { ActivityContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ActivityInstance
     */
    update(params: ActivityContextUpdateOptions, callback?: (error: Error | null, item?: ActivityInstance) => any): Promise<ActivityInstance>;
    update(params?: any, callback?: any): Promise<ActivityInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ActivityContextSolution {
    workspaceSid?: string;
    sid?: string;
}
export declare class ActivityContextImpl implements ActivityContext {
    protected _version: V1;
    protected _solution: ActivityContextSolution;
    protected _uri: string;
    constructor(_version: V1, workspaceSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<ActivityInstance>;
    update(params?: any, callback?: any): Promise<ActivityInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ActivityContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ActivityPayload extends TwilioResponsePayload {
    activities: ActivityResource[];
}
interface ActivityResource {
    account_sid?: string | null;
    available?: boolean | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    friendly_name?: string | null;
    sid?: string | null;
    workspace_sid?: string | null;
    url?: string | null;
    links?: object | null;
}
export declare class ActivityInstance {
    protected _version: V1;
    protected _solution: ActivityContextSolution;
    protected _context?: ActivityContext;
    constructor(_version: V1, payload: ActivityResource, workspaceSid: string, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * Whether the Worker should be eligible to receive a Task when it occupies the Activity
     */
    available?: boolean | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The string that you assigned to describe the Activity resource
     */
    friendlyName?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Workspace that contains the Activity
     */
    workspaceSid?: string | null;
    /**
     * The absolute URL of the Activity resource
     */
    url?: string | null;
    links?: object | null;
    private get _proxy();
    /**
     * Remove a ActivityInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ActivityInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ActivityInstance
     */
    fetch(callback?: (error: Error | null, item?: ActivityInstance) => any): Promise<ActivityInstance>;
    /**
     * Update a ActivityInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ActivityInstance
     */
    update(callback?: (error: Error | null, item?: ActivityInstance) => any): Promise<ActivityInstance>;
    /**
     * Update a ActivityInstance
     *
     * @param { ActivityContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ActivityInstance
     */
    update(params: ActivityContextUpdateOptions, callback?: (error: Error | null, item?: ActivityInstance) => any): Promise<ActivityInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        available: boolean | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        friendlyName: string | null | undefined;
        sid: string | null | undefined;
        workspaceSid: string | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ActivityListInstance {
    (sid: string): ActivityContext;
    get(sid: string): ActivityContext;
    /**
     * Create a ActivityInstance
     *
     * @param { ActivityListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ActivityInstance
     */
    create(params: ActivityListInstanceCreateOptions, callback?: (error: Error | null, item?: ActivityInstance) => any): Promise<ActivityInstance>;
    create(params: any, callback?: any): Promise<ActivityInstance>;
    /**
     * Streams ActivityInstance records from the API.
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
    each(callback?: (item: ActivityInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ActivityInstance records from the API.
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
     * @param { ActivityListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ActivityListInstanceEachOptions, callback?: (item: ActivityInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ActivityInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ActivityPage) => any): Promise<ActivityPage>;
    /**
     * Retrieve a single target page of ActivityInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ActivityPage) => any): Promise<ActivityPage>;
    getPage(params?: any, callback?: any): Promise<ActivityPage>;
    /**
     * Lists ActivityInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ActivityInstance[]) => any): Promise<ActivityInstance[]>;
    /**
     * Lists ActivityInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ActivityListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ActivityListInstanceOptions, callback?: (error: Error | null, items: ActivityInstance[]) => any): Promise<ActivityInstance[]>;
    list(params?: any, callback?: any): Promise<ActivityInstance[]>;
    /**
     * Retrieve a single page of ActivityInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ActivityPage) => any): Promise<ActivityPage>;
    /**
     * Retrieve a single page of ActivityInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ActivityListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ActivityListInstancePageOptions, callback?: (error: Error | null, items: ActivityPage) => any): Promise<ActivityPage>;
    page(params?: any, callback?: any): Promise<ActivityPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ActivitySolution {
    workspaceSid?: string;
}
export declare function ActivityListInstance(version: V1, workspaceSid: string): ActivityListInstance;
export declare class ActivityPage extends Page<V1, ActivityPayload, ActivityResource, ActivityInstance> {
    /**
     * Initialize the ActivityPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: ActivitySolution);
    /**
     * Build an instance of ActivityInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ActivityResource): ActivityInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
