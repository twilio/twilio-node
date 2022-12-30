/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
/**
 * Options to pass to update a MemberInstance
 *
 * @property { string } url The absolute URL of the Queue resource.
 * @property { string } [method] How to pass the update request data. Can be `GET` or `POST` and the default is `POST`. `POST` sends the data as encoded form data and `GET` sends the data as query parameters.
 */
export interface MemberContextUpdateOptions {
    url: string;
    method?: string;
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
export interface MemberListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: MemberInstance, done: (err?: Error) => void) => void;
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
export interface MemberListInstanceOptions {
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
export interface MemberListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface MemberContext {
    /**
     * Fetch a MemberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MemberInstance
     */
    fetch(callback?: (error: Error | null, item?: MemberInstance) => any): Promise<MemberInstance>;
    /**
     * Update a MemberInstance
     *
     * @param { MemberContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MemberInstance
     */
    update(params: MemberContextUpdateOptions, callback?: (error: Error | null, item?: MemberInstance) => any): Promise<MemberInstance>;
    update(params: any, callback?: any): Promise<MemberInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface MemberContextSolution {
    accountSid?: string;
    queueSid?: string;
    callSid?: string;
}
export declare class MemberContextImpl implements MemberContext {
    protected _version: V2010;
    protected _solution: MemberContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, queueSid: string, callSid: string);
    fetch(callback?: any): Promise<MemberInstance>;
    update(params: any, callback?: any): Promise<MemberInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): MemberContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface MemberPayload extends TwilioResponsePayload {
    queue_members: MemberResource[];
}
interface MemberResource {
    call_sid?: string | null;
    date_enqueued?: Date | null;
    position?: number | null;
    uri?: string | null;
    wait_time?: number | null;
    queue_sid?: string | null;
}
export declare class MemberInstance {
    protected _version: V2010;
    protected _solution: MemberContextSolution;
    protected _context?: MemberContext;
    constructor(_version: V2010, payload: MemberResource, accountSid: string, queueSid: string, callSid?: string);
    /**
     * The SID of the Call the resource is associated with
     */
    callSid?: string | null;
    /**
     * The date the member was enqueued
     */
    dateEnqueued?: Date | null;
    /**
     * This member\'s current position in the queue.
     */
    position?: number | null;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    /**
     * The number of seconds the member has been in the queue.
     */
    waitTime?: number | null;
    /**
     * The SID of the Queue the member is in
     */
    queueSid?: string | null;
    private get _proxy();
    /**
     * Fetch a MemberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MemberInstance
     */
    fetch(callback?: (error: Error | null, item?: MemberInstance) => any): Promise<MemberInstance>;
    /**
     * Update a MemberInstance
     *
     * @param { MemberContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MemberInstance
     */
    update(params: MemberContextUpdateOptions, callback?: (error: Error | null, item?: MemberInstance) => any): Promise<MemberInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        callSid: string | null | undefined;
        dateEnqueued: Date | null | undefined;
        position: number | null | undefined;
        uri: string | null | undefined;
        waitTime: number | null | undefined;
        queueSid: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface MemberListInstance {
    (callSid: string): MemberContext;
    get(callSid: string): MemberContext;
    /**
     * Streams MemberInstance records from the API.
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
    each(callback?: (item: MemberInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams MemberInstance records from the API.
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
     * @param { MemberListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: MemberListInstanceEachOptions, callback?: (item: MemberInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of MemberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: MemberPage) => any): Promise<MemberPage>;
    /**
     * Retrieve a single target page of MemberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: MemberPage) => any): Promise<MemberPage>;
    getPage(params?: any, callback?: any): Promise<MemberPage>;
    /**
     * Lists MemberInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: MemberInstance[]) => any): Promise<MemberInstance[]>;
    /**
     * Lists MemberInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MemberListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: MemberListInstanceOptions, callback?: (error: Error | null, items: MemberInstance[]) => any): Promise<MemberInstance[]>;
    list(params?: any, callback?: any): Promise<MemberInstance[]>;
    /**
     * Retrieve a single page of MemberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: MemberPage) => any): Promise<MemberPage>;
    /**
     * Retrieve a single page of MemberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MemberListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: MemberListInstancePageOptions, callback?: (error: Error | null, items: MemberPage) => any): Promise<MemberPage>;
    page(params?: any, callback?: any): Promise<MemberPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface MemberSolution {
    accountSid?: string;
    queueSid?: string;
}
export declare function MemberListInstance(version: V2010, accountSid: string, queueSid: string): MemberListInstance;
export declare class MemberPage extends Page<V2010, MemberPayload, MemberResource, MemberInstance> {
    /**
     * Initialize the MemberPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: MemberSolution);
    /**
     * Build an instance of MemberInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: MemberResource): MemberInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
