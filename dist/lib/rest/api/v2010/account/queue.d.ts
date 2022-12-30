/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
import { MemberListInstance } from "./queue/member";
/**
 * Options to pass to update a QueueInstance
 *
 * @property { string } [friendlyName] A descriptive string that you created to describe this resource. It can be up to 64 characters long.
 * @property { number } [maxSize] The maximum number of calls allowed to be in the queue. The default is 100. The maximum is 5000.
 */
export interface QueueContextUpdateOptions {
    friendlyName?: string;
    maxSize?: number;
}
/**
 * Options to pass to create a QueueInstance
 *
 * @property { string } friendlyName A descriptive string that you created to describe this resource. It can be up to 64 characters long.
 * @property { number } [maxSize] The maximum number of calls allowed to be in the queue. The default is 100. The maximum is 5000.
 */
export interface QueueListInstanceCreateOptions {
    friendlyName: string;
    maxSize?: number;
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
export interface QueueListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: QueueInstance, done: (err?: Error) => void) => void;
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
export interface QueueListInstanceOptions {
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
export interface QueueListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface QueueContext {
    members: MemberListInstance;
    /**
     * Remove a QueueInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a QueueInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed QueueInstance
     */
    fetch(callback?: (error: Error | null, item?: QueueInstance) => any): Promise<QueueInstance>;
    /**
     * Update a QueueInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed QueueInstance
     */
    update(callback?: (error: Error | null, item?: QueueInstance) => any): Promise<QueueInstance>;
    /**
     * Update a QueueInstance
     *
     * @param { QueueContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed QueueInstance
     */
    update(params: QueueContextUpdateOptions, callback?: (error: Error | null, item?: QueueInstance) => any): Promise<QueueInstance>;
    update(params?: any, callback?: any): Promise<QueueInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface QueueContextSolution {
    accountSid?: string;
    sid?: string;
}
export declare class QueueContextImpl implements QueueContext {
    protected _version: V2010;
    protected _solution: QueueContextSolution;
    protected _uri: string;
    protected _members?: MemberListInstance;
    constructor(_version: V2010, accountSid: string, sid: string);
    get members(): MemberListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<QueueInstance>;
    update(params?: any, callback?: any): Promise<QueueInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): QueueContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface QueuePayload extends TwilioResponsePayload {
    queues: QueueResource[];
}
interface QueueResource {
    date_updated?: Date | null;
    current_size?: number | null;
    friendly_name?: string | null;
    uri?: string | null;
    account_sid?: string | null;
    average_wait_time?: number | null;
    sid?: string | null;
    date_created?: Date | null;
    max_size?: number | null;
}
export declare class QueueInstance {
    protected _version: V2010;
    protected _solution: QueueContextSolution;
    protected _context?: QueueContext;
    constructor(_version: V2010, payload: QueueResource, accountSid: string, sid?: string);
    /**
     * The RFC 2822 date and time in GMT that this resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The number of calls currently in the queue.
     */
    currentSize?: number | null;
    /**
     * A string that you assigned to describe this resource
     */
    friendlyName?: string | null;
    /**
     * The URI of this resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    /**
     * The SID of the Account that created this resource
     */
    accountSid?: string | null;
    /**
     * Average wait time of members in the queue
     */
    averageWaitTime?: number | null;
    /**
     * The unique string that identifies this resource
     */
    sid?: string | null;
    /**
     * The RFC 2822 date and time in GMT that this resource was created
     */
    dateCreated?: Date | null;
    /**
     * The max number of calls allowed in the queue
     */
    maxSize?: number | null;
    private get _proxy();
    /**
     * Remove a QueueInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a QueueInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed QueueInstance
     */
    fetch(callback?: (error: Error | null, item?: QueueInstance) => any): Promise<QueueInstance>;
    /**
     * Update a QueueInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed QueueInstance
     */
    update(callback?: (error: Error | null, item?: QueueInstance) => any): Promise<QueueInstance>;
    /**
     * Update a QueueInstance
     *
     * @param { QueueContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed QueueInstance
     */
    update(params: QueueContextUpdateOptions, callback?: (error: Error | null, item?: QueueInstance) => any): Promise<QueueInstance>;
    /**
     * Access the members.
     */
    members(): MemberListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        dateUpdated: Date | null | undefined;
        currentSize: number | null | undefined;
        friendlyName: string | null | undefined;
        uri: string | null | undefined;
        accountSid: string | null | undefined;
        averageWaitTime: number | null | undefined;
        sid: string | null | undefined;
        dateCreated: Date | null | undefined;
        maxSize: number | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface QueueListInstance {
    (sid: string): QueueContext;
    get(sid: string): QueueContext;
    /**
     * Create a QueueInstance
     *
     * @param { QueueListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed QueueInstance
     */
    create(params: QueueListInstanceCreateOptions, callback?: (error: Error | null, item?: QueueInstance) => any): Promise<QueueInstance>;
    create(params: any, callback?: any): Promise<QueueInstance>;
    /**
     * Streams QueueInstance records from the API.
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
    each(callback?: (item: QueueInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams QueueInstance records from the API.
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
     * @param { QueueListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: QueueListInstanceEachOptions, callback?: (item: QueueInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of QueueInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: QueuePage) => any): Promise<QueuePage>;
    /**
     * Retrieve a single target page of QueueInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: QueuePage) => any): Promise<QueuePage>;
    getPage(params?: any, callback?: any): Promise<QueuePage>;
    /**
     * Lists QueueInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: QueueInstance[]) => any): Promise<QueueInstance[]>;
    /**
     * Lists QueueInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { QueueListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: QueueListInstanceOptions, callback?: (error: Error | null, items: QueueInstance[]) => any): Promise<QueueInstance[]>;
    list(params?: any, callback?: any): Promise<QueueInstance[]>;
    /**
     * Retrieve a single page of QueueInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: QueuePage) => any): Promise<QueuePage>;
    /**
     * Retrieve a single page of QueueInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { QueueListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: QueueListInstancePageOptions, callback?: (error: Error | null, items: QueuePage) => any): Promise<QueuePage>;
    page(params?: any, callback?: any): Promise<QueuePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface QueueSolution {
    accountSid?: string;
}
export declare function QueueListInstance(version: V2010, accountSid: string): QueueListInstance;
export declare class QueuePage extends Page<V2010, QueuePayload, QueueResource, QueueInstance> {
    /**
     * Initialize the QueuePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: QueueSolution);
    /**
     * Build an instance of QueueInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: QueueResource): QueueInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
