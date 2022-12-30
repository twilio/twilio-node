/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { SubscribedEventListInstance } from "./subscription/subscribedEvent";
/**
 * Options to pass to update a SubscriptionInstance
 *
 * @property { string } [description] A human readable description for the Subscription.
 * @property { string } [sinkSid] The SID of the sink that events selected by this subscription should be sent to. Sink must be active for the subscription to be created.
 */
export interface SubscriptionContextUpdateOptions {
    description?: string;
    sinkSid?: string;
}
/**
 * Options to pass to create a SubscriptionInstance
 *
 * @property { string } description A human readable description for the Subscription **This value should not contain PII.**
 * @property { string } sinkSid The SID of the sink that events selected by this subscription should be sent to. Sink must be active for the subscription to be created.
 * @property { Array<any> } types An array of objects containing the subscribed Event Types
 */
export interface SubscriptionListInstanceCreateOptions {
    description: string;
    sinkSid: string;
    types: Array<any>;
}
/**
 * Options to pass to each
 *
 * @property { string } [sinkSid] The SID of the sink that the list of Subscriptions should be filtered by.
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
export interface SubscriptionListInstanceEachOptions {
    sinkSid?: string;
    pageSize?: number;
    callback?: (item: SubscriptionInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [sinkSid] The SID of the sink that the list of Subscriptions should be filtered by.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SubscriptionListInstanceOptions {
    sinkSid?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [sinkSid] The SID of the sink that the list of Subscriptions should be filtered by.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface SubscriptionListInstancePageOptions {
    sinkSid?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SubscriptionContext {
    subscribedEvents: SubscribedEventListInstance;
    /**
     * Remove a SubscriptionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SubscriptionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SubscriptionInstance
     */
    fetch(callback?: (error: Error | null, item?: SubscriptionInstance) => any): Promise<SubscriptionInstance>;
    /**
     * Update a SubscriptionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SubscriptionInstance
     */
    update(callback?: (error: Error | null, item?: SubscriptionInstance) => any): Promise<SubscriptionInstance>;
    /**
     * Update a SubscriptionInstance
     *
     * @param { SubscriptionContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SubscriptionInstance
     */
    update(params: SubscriptionContextUpdateOptions, callback?: (error: Error | null, item?: SubscriptionInstance) => any): Promise<SubscriptionInstance>;
    update(params?: any, callback?: any): Promise<SubscriptionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SubscriptionContextSolution {
    sid?: string;
}
export declare class SubscriptionContextImpl implements SubscriptionContext {
    protected _version: V1;
    protected _solution: SubscriptionContextSolution;
    protected _uri: string;
    protected _subscribedEvents?: SubscribedEventListInstance;
    constructor(_version: V1, sid: string);
    get subscribedEvents(): SubscribedEventListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<SubscriptionInstance>;
    update(params?: any, callback?: any): Promise<SubscriptionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SubscriptionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SubscriptionPayload extends TwilioResponsePayload {
    subscriptions: SubscriptionResource[];
}
interface SubscriptionResource {
    account_sid?: string | null;
    sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    description?: string | null;
    sink_sid?: string | null;
    url?: string | null;
    links?: object | null;
}
export declare class SubscriptionInstance {
    protected _version: V1;
    protected _solution: SubscriptionContextSolution;
    protected _context?: SubscriptionContext;
    constructor(_version: V1, payload: SubscriptionResource, sid?: string);
    /**
     * Account SID.
     */
    accountSid?: string | null;
    /**
     * A string that uniquely identifies this Subscription.
     */
    sid?: string | null;
    /**
     * The date this Subscription was created
     */
    dateCreated?: Date | null;
    /**
     * The date this Subscription was updated
     */
    dateUpdated?: Date | null;
    /**
     * Subscription description
     */
    description?: string | null;
    /**
     * Sink SID.
     */
    sinkSid?: string | null;
    /**
     * The URL of this resource.
     */
    url?: string | null;
    /**
     * Nested resource URLs.
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a SubscriptionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SubscriptionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SubscriptionInstance
     */
    fetch(callback?: (error: Error | null, item?: SubscriptionInstance) => any): Promise<SubscriptionInstance>;
    /**
     * Update a SubscriptionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SubscriptionInstance
     */
    update(callback?: (error: Error | null, item?: SubscriptionInstance) => any): Promise<SubscriptionInstance>;
    /**
     * Update a SubscriptionInstance
     *
     * @param { SubscriptionContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SubscriptionInstance
     */
    update(params: SubscriptionContextUpdateOptions, callback?: (error: Error | null, item?: SubscriptionInstance) => any): Promise<SubscriptionInstance>;
    /**
     * Access the subscribedEvents.
     */
    subscribedEvents(): SubscribedEventListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        sid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        description: string | null | undefined;
        sinkSid: string | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SubscriptionListInstance {
    (sid: string): SubscriptionContext;
    get(sid: string): SubscriptionContext;
    /**
     * Create a SubscriptionInstance
     *
     * @param { SubscriptionListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SubscriptionInstance
     */
    create(params: SubscriptionListInstanceCreateOptions, callback?: (error: Error | null, item?: SubscriptionInstance) => any): Promise<SubscriptionInstance>;
    create(params: any, callback?: any): Promise<SubscriptionInstance>;
    /**
     * Streams SubscriptionInstance records from the API.
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
    each(callback?: (item: SubscriptionInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams SubscriptionInstance records from the API.
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
     * @param { SubscriptionListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: SubscriptionListInstanceEachOptions, callback?: (item: SubscriptionInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of SubscriptionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: SubscriptionPage) => any): Promise<SubscriptionPage>;
    /**
     * Retrieve a single target page of SubscriptionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: SubscriptionPage) => any): Promise<SubscriptionPage>;
    getPage(params?: any, callback?: any): Promise<SubscriptionPage>;
    /**
     * Lists SubscriptionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SubscriptionInstance[]) => any): Promise<SubscriptionInstance[]>;
    /**
     * Lists SubscriptionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SubscriptionListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: SubscriptionListInstanceOptions, callback?: (error: Error | null, items: SubscriptionInstance[]) => any): Promise<SubscriptionInstance[]>;
    list(params?: any, callback?: any): Promise<SubscriptionInstance[]>;
    /**
     * Retrieve a single page of SubscriptionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SubscriptionPage) => any): Promise<SubscriptionPage>;
    /**
     * Retrieve a single page of SubscriptionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SubscriptionListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: SubscriptionListInstancePageOptions, callback?: (error: Error | null, items: SubscriptionPage) => any): Promise<SubscriptionPage>;
    page(params?: any, callback?: any): Promise<SubscriptionPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SubscriptionSolution {
}
export declare function SubscriptionListInstance(version: V1): SubscriptionListInstance;
export declare class SubscriptionPage extends Page<V1, SubscriptionPayload, SubscriptionResource, SubscriptionInstance> {
    /**
     * Initialize the SubscriptionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SubscriptionSolution);
    /**
     * Build an instance of SubscriptionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SubscriptionResource): SubscriptionInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
