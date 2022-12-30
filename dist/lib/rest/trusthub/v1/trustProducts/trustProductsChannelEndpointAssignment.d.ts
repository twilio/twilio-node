/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to create a TrustProductsChannelEndpointAssignmentInstance
 *
 * @property { string } channelEndpointType The type of channel endpoint. eg: phone-number
 * @property { string } channelEndpointSid The SID of an channel endpoint
 */
export interface TrustProductsChannelEndpointAssignmentListInstanceCreateOptions {
    channelEndpointType: string;
    channelEndpointSid: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [channelEndpointSid] The SID of an channel endpoint
 * @property { string } [channelEndpointSids] comma separated list of channel endpoint sids
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
export interface TrustProductsChannelEndpointAssignmentListInstanceEachOptions {
    channelEndpointSid?: string;
    channelEndpointSids?: string;
    pageSize?: number;
    callback?: (item: TrustProductsChannelEndpointAssignmentInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [channelEndpointSid] The SID of an channel endpoint
 * @property { string } [channelEndpointSids] comma separated list of channel endpoint sids
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface TrustProductsChannelEndpointAssignmentListInstanceOptions {
    channelEndpointSid?: string;
    channelEndpointSids?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [channelEndpointSid] The SID of an channel endpoint
 * @property { string } [channelEndpointSids] comma separated list of channel endpoint sids
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface TrustProductsChannelEndpointAssignmentListInstancePageOptions {
    channelEndpointSid?: string;
    channelEndpointSids?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface TrustProductsChannelEndpointAssignmentContext {
    /**
     * Remove a TrustProductsChannelEndpointAssignmentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a TrustProductsChannelEndpointAssignmentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrustProductsChannelEndpointAssignmentInstance
     */
    fetch(callback?: (error: Error | null, item?: TrustProductsChannelEndpointAssignmentInstance) => any): Promise<TrustProductsChannelEndpointAssignmentInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TrustProductsChannelEndpointAssignmentContextSolution {
    trustProductSid?: string;
    sid?: string;
}
export declare class TrustProductsChannelEndpointAssignmentContextImpl implements TrustProductsChannelEndpointAssignmentContext {
    protected _version: V1;
    protected _solution: TrustProductsChannelEndpointAssignmentContextSolution;
    protected _uri: string;
    constructor(_version: V1, trustProductSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<TrustProductsChannelEndpointAssignmentInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): TrustProductsChannelEndpointAssignmentContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface TrustProductsChannelEndpointAssignmentPayload extends TwilioResponsePayload {
    results: TrustProductsChannelEndpointAssignmentResource[];
}
interface TrustProductsChannelEndpointAssignmentResource {
    sid?: string | null;
    trust_product_sid?: string | null;
    account_sid?: string | null;
    channel_endpoint_type?: string | null;
    channel_endpoint_sid?: string | null;
    date_created?: Date | null;
    url?: string | null;
}
export declare class TrustProductsChannelEndpointAssignmentInstance {
    protected _version: V1;
    protected _solution: TrustProductsChannelEndpointAssignmentContextSolution;
    protected _context?: TrustProductsChannelEndpointAssignmentContext;
    constructor(_version: V1, payload: TrustProductsChannelEndpointAssignmentResource, trustProductSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The unique string that identifies the CustomerProfile resource.
     */
    trustProductSid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The type of channel endpoint
     */
    channelEndpointType?: string | null;
    /**
     * The sid of an channel endpoint
     */
    channelEndpointSid?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The absolute URL of the Identity resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a TrustProductsChannelEndpointAssignmentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a TrustProductsChannelEndpointAssignmentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrustProductsChannelEndpointAssignmentInstance
     */
    fetch(callback?: (error: Error | null, item?: TrustProductsChannelEndpointAssignmentInstance) => any): Promise<TrustProductsChannelEndpointAssignmentInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        trustProductSid: string | null | undefined;
        accountSid: string | null | undefined;
        channelEndpointType: string | null | undefined;
        channelEndpointSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface TrustProductsChannelEndpointAssignmentListInstance {
    (sid: string): TrustProductsChannelEndpointAssignmentContext;
    get(sid: string): TrustProductsChannelEndpointAssignmentContext;
    /**
     * Create a TrustProductsChannelEndpointAssignmentInstance
     *
     * @param { TrustProductsChannelEndpointAssignmentListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrustProductsChannelEndpointAssignmentInstance
     */
    create(params: TrustProductsChannelEndpointAssignmentListInstanceCreateOptions, callback?: (error: Error | null, item?: TrustProductsChannelEndpointAssignmentInstance) => any): Promise<TrustProductsChannelEndpointAssignmentInstance>;
    create(params: any, callback?: any): Promise<TrustProductsChannelEndpointAssignmentInstance>;
    /**
     * Streams TrustProductsChannelEndpointAssignmentInstance records from the API.
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
    each(callback?: (item: TrustProductsChannelEndpointAssignmentInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams TrustProductsChannelEndpointAssignmentInstance records from the API.
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
     * @param { TrustProductsChannelEndpointAssignmentListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: TrustProductsChannelEndpointAssignmentListInstanceEachOptions, callback?: (item: TrustProductsChannelEndpointAssignmentInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of TrustProductsChannelEndpointAssignmentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: TrustProductsChannelEndpointAssignmentPage) => any): Promise<TrustProductsChannelEndpointAssignmentPage>;
    /**
     * Retrieve a single target page of TrustProductsChannelEndpointAssignmentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: TrustProductsChannelEndpointAssignmentPage) => any): Promise<TrustProductsChannelEndpointAssignmentPage>;
    getPage(params?: any, callback?: any): Promise<TrustProductsChannelEndpointAssignmentPage>;
    /**
     * Lists TrustProductsChannelEndpointAssignmentInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: TrustProductsChannelEndpointAssignmentInstance[]) => any): Promise<TrustProductsChannelEndpointAssignmentInstance[]>;
    /**
     * Lists TrustProductsChannelEndpointAssignmentInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TrustProductsChannelEndpointAssignmentListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: TrustProductsChannelEndpointAssignmentListInstanceOptions, callback?: (error: Error | null, items: TrustProductsChannelEndpointAssignmentInstance[]) => any): Promise<TrustProductsChannelEndpointAssignmentInstance[]>;
    list(params?: any, callback?: any): Promise<TrustProductsChannelEndpointAssignmentInstance[]>;
    /**
     * Retrieve a single page of TrustProductsChannelEndpointAssignmentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: TrustProductsChannelEndpointAssignmentPage) => any): Promise<TrustProductsChannelEndpointAssignmentPage>;
    /**
     * Retrieve a single page of TrustProductsChannelEndpointAssignmentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TrustProductsChannelEndpointAssignmentListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: TrustProductsChannelEndpointAssignmentListInstancePageOptions, callback?: (error: Error | null, items: TrustProductsChannelEndpointAssignmentPage) => any): Promise<TrustProductsChannelEndpointAssignmentPage>;
    page(params?: any, callback?: any): Promise<TrustProductsChannelEndpointAssignmentPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TrustProductsChannelEndpointAssignmentSolution {
    trustProductSid?: string;
}
export declare function TrustProductsChannelEndpointAssignmentListInstance(version: V1, trustProductSid: string): TrustProductsChannelEndpointAssignmentListInstance;
export declare class TrustProductsChannelEndpointAssignmentPage extends Page<V1, TrustProductsChannelEndpointAssignmentPayload, TrustProductsChannelEndpointAssignmentResource, TrustProductsChannelEndpointAssignmentInstance> {
    /**
     * Initialize the TrustProductsChannelEndpointAssignmentPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: TrustProductsChannelEndpointAssignmentSolution);
    /**
     * Build an instance of TrustProductsChannelEndpointAssignmentInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: TrustProductsChannelEndpointAssignmentResource): TrustProductsChannelEndpointAssignmentInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
