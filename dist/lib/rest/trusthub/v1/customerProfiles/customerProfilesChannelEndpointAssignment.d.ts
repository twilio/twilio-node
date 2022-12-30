/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to create a CustomerProfilesChannelEndpointAssignmentInstance
 *
 * @property { string } channelEndpointType The type of channel endpoint. eg: phone-number
 * @property { string } channelEndpointSid The SID of an channel endpoint
 */
export interface CustomerProfilesChannelEndpointAssignmentListInstanceCreateOptions {
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
export interface CustomerProfilesChannelEndpointAssignmentListInstanceEachOptions {
    channelEndpointSid?: string;
    channelEndpointSids?: string;
    pageSize?: number;
    callback?: (item: CustomerProfilesChannelEndpointAssignmentInstance, done: (err?: Error) => void) => void;
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
export interface CustomerProfilesChannelEndpointAssignmentListInstanceOptions {
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
export interface CustomerProfilesChannelEndpointAssignmentListInstancePageOptions {
    channelEndpointSid?: string;
    channelEndpointSids?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface CustomerProfilesChannelEndpointAssignmentContext {
    /**
     * Remove a CustomerProfilesChannelEndpointAssignmentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a CustomerProfilesChannelEndpointAssignmentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CustomerProfilesChannelEndpointAssignmentInstance
     */
    fetch(callback?: (error: Error | null, item?: CustomerProfilesChannelEndpointAssignmentInstance) => any): Promise<CustomerProfilesChannelEndpointAssignmentInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CustomerProfilesChannelEndpointAssignmentContextSolution {
    customerProfileSid?: string;
    sid?: string;
}
export declare class CustomerProfilesChannelEndpointAssignmentContextImpl implements CustomerProfilesChannelEndpointAssignmentContext {
    protected _version: V1;
    protected _solution: CustomerProfilesChannelEndpointAssignmentContextSolution;
    protected _uri: string;
    constructor(_version: V1, customerProfileSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<CustomerProfilesChannelEndpointAssignmentInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): CustomerProfilesChannelEndpointAssignmentContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface CustomerProfilesChannelEndpointAssignmentPayload extends TwilioResponsePayload {
    results: CustomerProfilesChannelEndpointAssignmentResource[];
}
interface CustomerProfilesChannelEndpointAssignmentResource {
    sid?: string | null;
    customer_profile_sid?: string | null;
    account_sid?: string | null;
    channel_endpoint_type?: string | null;
    channel_endpoint_sid?: string | null;
    date_created?: Date | null;
    url?: string | null;
}
export declare class CustomerProfilesChannelEndpointAssignmentInstance {
    protected _version: V1;
    protected _solution: CustomerProfilesChannelEndpointAssignmentContextSolution;
    protected _context?: CustomerProfilesChannelEndpointAssignmentContext;
    constructor(_version: V1, payload: CustomerProfilesChannelEndpointAssignmentResource, customerProfileSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The unique string that identifies the CustomerProfile resource.
     */
    customerProfileSid?: string | null;
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
     * Remove a CustomerProfilesChannelEndpointAssignmentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a CustomerProfilesChannelEndpointAssignmentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CustomerProfilesChannelEndpointAssignmentInstance
     */
    fetch(callback?: (error: Error | null, item?: CustomerProfilesChannelEndpointAssignmentInstance) => any): Promise<CustomerProfilesChannelEndpointAssignmentInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        customerProfileSid: string | null | undefined;
        accountSid: string | null | undefined;
        channelEndpointType: string | null | undefined;
        channelEndpointSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface CustomerProfilesChannelEndpointAssignmentListInstance {
    (sid: string): CustomerProfilesChannelEndpointAssignmentContext;
    get(sid: string): CustomerProfilesChannelEndpointAssignmentContext;
    /**
     * Create a CustomerProfilesChannelEndpointAssignmentInstance
     *
     * @param { CustomerProfilesChannelEndpointAssignmentListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CustomerProfilesChannelEndpointAssignmentInstance
     */
    create(params: CustomerProfilesChannelEndpointAssignmentListInstanceCreateOptions, callback?: (error: Error | null, item?: CustomerProfilesChannelEndpointAssignmentInstance) => any): Promise<CustomerProfilesChannelEndpointAssignmentInstance>;
    create(params: any, callback?: any): Promise<CustomerProfilesChannelEndpointAssignmentInstance>;
    /**
     * Streams CustomerProfilesChannelEndpointAssignmentInstance records from the API.
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
    each(callback?: (item: CustomerProfilesChannelEndpointAssignmentInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams CustomerProfilesChannelEndpointAssignmentInstance records from the API.
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
     * @param { CustomerProfilesChannelEndpointAssignmentListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: CustomerProfilesChannelEndpointAssignmentListInstanceEachOptions, callback?: (item: CustomerProfilesChannelEndpointAssignmentInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of CustomerProfilesChannelEndpointAssignmentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: CustomerProfilesChannelEndpointAssignmentPage) => any): Promise<CustomerProfilesChannelEndpointAssignmentPage>;
    /**
     * Retrieve a single target page of CustomerProfilesChannelEndpointAssignmentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: CustomerProfilesChannelEndpointAssignmentPage) => any): Promise<CustomerProfilesChannelEndpointAssignmentPage>;
    getPage(params?: any, callback?: any): Promise<CustomerProfilesChannelEndpointAssignmentPage>;
    /**
     * Lists CustomerProfilesChannelEndpointAssignmentInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: CustomerProfilesChannelEndpointAssignmentInstance[]) => any): Promise<CustomerProfilesChannelEndpointAssignmentInstance[]>;
    /**
     * Lists CustomerProfilesChannelEndpointAssignmentInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CustomerProfilesChannelEndpointAssignmentListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: CustomerProfilesChannelEndpointAssignmentListInstanceOptions, callback?: (error: Error | null, items: CustomerProfilesChannelEndpointAssignmentInstance[]) => any): Promise<CustomerProfilesChannelEndpointAssignmentInstance[]>;
    list(params?: any, callback?: any): Promise<CustomerProfilesChannelEndpointAssignmentInstance[]>;
    /**
     * Retrieve a single page of CustomerProfilesChannelEndpointAssignmentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: CustomerProfilesChannelEndpointAssignmentPage) => any): Promise<CustomerProfilesChannelEndpointAssignmentPage>;
    /**
     * Retrieve a single page of CustomerProfilesChannelEndpointAssignmentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CustomerProfilesChannelEndpointAssignmentListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: CustomerProfilesChannelEndpointAssignmentListInstancePageOptions, callback?: (error: Error | null, items: CustomerProfilesChannelEndpointAssignmentPage) => any): Promise<CustomerProfilesChannelEndpointAssignmentPage>;
    page(params?: any, callback?: any): Promise<CustomerProfilesChannelEndpointAssignmentPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CustomerProfilesChannelEndpointAssignmentSolution {
    customerProfileSid?: string;
}
export declare function CustomerProfilesChannelEndpointAssignmentListInstance(version: V1, customerProfileSid: string): CustomerProfilesChannelEndpointAssignmentListInstance;
export declare class CustomerProfilesChannelEndpointAssignmentPage extends Page<V1, CustomerProfilesChannelEndpointAssignmentPayload, CustomerProfilesChannelEndpointAssignmentResource, CustomerProfilesChannelEndpointAssignmentInstance> {
    /**
     * Initialize the CustomerProfilesChannelEndpointAssignmentPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: CustomerProfilesChannelEndpointAssignmentSolution);
    /**
     * Build an instance of CustomerProfilesChannelEndpointAssignmentInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: CustomerProfilesChannelEndpointAssignmentResource): CustomerProfilesChannelEndpointAssignmentInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
