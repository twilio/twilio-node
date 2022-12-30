/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to update a SubscribedEventInstance
 *
 * @property { number } [schemaVersion] The schema version that the subscription should use.
 */
export interface SubscribedEventContextUpdateOptions {
    schemaVersion?: number;
}
/**
 * Options to pass to create a SubscribedEventInstance
 *
 * @property { string } type Type of event being subscribed to.
 * @property { number } [schemaVersion] The schema version that the subscription should use.
 */
export interface SubscribedEventListInstanceCreateOptions {
    type: string;
    schemaVersion?: number;
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
export interface SubscribedEventListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: SubscribedEventInstance, done: (err?: Error) => void) => void;
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
export interface SubscribedEventListInstanceOptions {
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
export interface SubscribedEventListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SubscribedEventContext {
    /**
     * Remove a SubscribedEventInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SubscribedEventInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SubscribedEventInstance
     */
    fetch(callback?: (error: Error | null, item?: SubscribedEventInstance) => any): Promise<SubscribedEventInstance>;
    /**
     * Update a SubscribedEventInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SubscribedEventInstance
     */
    update(callback?: (error: Error | null, item?: SubscribedEventInstance) => any): Promise<SubscribedEventInstance>;
    /**
     * Update a SubscribedEventInstance
     *
     * @param { SubscribedEventContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SubscribedEventInstance
     */
    update(params: SubscribedEventContextUpdateOptions, callback?: (error: Error | null, item?: SubscribedEventInstance) => any): Promise<SubscribedEventInstance>;
    update(params?: any, callback?: any): Promise<SubscribedEventInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SubscribedEventContextSolution {
    subscriptionSid?: string;
    type?: string;
}
export declare class SubscribedEventContextImpl implements SubscribedEventContext {
    protected _version: V1;
    protected _solution: SubscribedEventContextSolution;
    protected _uri: string;
    constructor(_version: V1, subscriptionSid: string, type: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<SubscribedEventInstance>;
    update(params?: any, callback?: any): Promise<SubscribedEventInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SubscribedEventContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SubscribedEventPayload extends TwilioResponsePayload {
    types: SubscribedEventResource[];
}
interface SubscribedEventResource {
    account_sid?: string | null;
    type?: string | null;
    schema_version?: number | null;
    subscription_sid?: string | null;
    url?: string | null;
}
export declare class SubscribedEventInstance {
    protected _version: V1;
    protected _solution: SubscribedEventContextSolution;
    protected _context?: SubscribedEventContext;
    constructor(_version: V1, payload: SubscribedEventResource, subscriptionSid: string, type?: string);
    /**
     * Account SID.
     */
    accountSid?: string | null;
    /**
     * Type of event being subscribed to.
     */
    type?: string | null;
    /**
     * The schema version that the subscription should use.
     */
    schemaVersion?: number | null;
    /**
     * Subscription SID.
     */
    subscriptionSid?: string | null;
    /**
     * The URL of this resource.
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a SubscribedEventInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SubscribedEventInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SubscribedEventInstance
     */
    fetch(callback?: (error: Error | null, item?: SubscribedEventInstance) => any): Promise<SubscribedEventInstance>;
    /**
     * Update a SubscribedEventInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SubscribedEventInstance
     */
    update(callback?: (error: Error | null, item?: SubscribedEventInstance) => any): Promise<SubscribedEventInstance>;
    /**
     * Update a SubscribedEventInstance
     *
     * @param { SubscribedEventContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SubscribedEventInstance
     */
    update(params: SubscribedEventContextUpdateOptions, callback?: (error: Error | null, item?: SubscribedEventInstance) => any): Promise<SubscribedEventInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        type: string | null | undefined;
        schemaVersion: number | null | undefined;
        subscriptionSid: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SubscribedEventListInstance {
    (type: string): SubscribedEventContext;
    get(type: string): SubscribedEventContext;
    /**
     * Create a SubscribedEventInstance
     *
     * @param { SubscribedEventListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SubscribedEventInstance
     */
    create(params: SubscribedEventListInstanceCreateOptions, callback?: (error: Error | null, item?: SubscribedEventInstance) => any): Promise<SubscribedEventInstance>;
    create(params: any, callback?: any): Promise<SubscribedEventInstance>;
    /**
     * Streams SubscribedEventInstance records from the API.
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
    each(callback?: (item: SubscribedEventInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams SubscribedEventInstance records from the API.
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
     * @param { SubscribedEventListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: SubscribedEventListInstanceEachOptions, callback?: (item: SubscribedEventInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of SubscribedEventInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: SubscribedEventPage) => any): Promise<SubscribedEventPage>;
    /**
     * Retrieve a single target page of SubscribedEventInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: SubscribedEventPage) => any): Promise<SubscribedEventPage>;
    getPage(params?: any, callback?: any): Promise<SubscribedEventPage>;
    /**
     * Lists SubscribedEventInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SubscribedEventInstance[]) => any): Promise<SubscribedEventInstance[]>;
    /**
     * Lists SubscribedEventInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SubscribedEventListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: SubscribedEventListInstanceOptions, callback?: (error: Error | null, items: SubscribedEventInstance[]) => any): Promise<SubscribedEventInstance[]>;
    list(params?: any, callback?: any): Promise<SubscribedEventInstance[]>;
    /**
     * Retrieve a single page of SubscribedEventInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SubscribedEventPage) => any): Promise<SubscribedEventPage>;
    /**
     * Retrieve a single page of SubscribedEventInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SubscribedEventListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: SubscribedEventListInstancePageOptions, callback?: (error: Error | null, items: SubscribedEventPage) => any): Promise<SubscribedEventPage>;
    page(params?: any, callback?: any): Promise<SubscribedEventPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SubscribedEventSolution {
    subscriptionSid?: string;
}
export declare function SubscribedEventListInstance(version: V1, subscriptionSid: string): SubscribedEventListInstance;
export declare class SubscribedEventPage extends Page<V1, SubscribedEventPayload, SubscribedEventResource, SubscribedEventInstance> {
    /**
     * Initialize the SubscribedEventPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SubscribedEventSolution);
    /**
     * Build an instance of SubscribedEventInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SubscribedEventResource): SubscribedEventInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
