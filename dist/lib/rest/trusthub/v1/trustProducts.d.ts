/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { TrustProductsChannelEndpointAssignmentListInstance } from "./trustProducts/trustProductsChannelEndpointAssignment";
import { TrustProductsEntityAssignmentsListInstance } from "./trustProducts/trustProductsEntityAssignments";
import { TrustProductsEvaluationsListInstance } from "./trustProducts/trustProductsEvaluations";
declare type TrustProductStatus = "draft" | "pending-review" | "in-review" | "twilio-rejected" | "twilio-approved";
/**
 * Options to pass to update a TrustProductsInstance
 *
 * @property { TrustProductStatus } [status]
 * @property { string } [statusCallback] The URL we call to inform your application of status changes.
 * @property { string } [friendlyName] The string that you assigned to describe the resource.
 * @property { string } [email] The email address that will receive updates when the Customer-Profile resource changes status.
 */
export interface TrustProductsContextUpdateOptions {
    status?: TrustProductStatus;
    statusCallback?: string;
    friendlyName?: string;
    email?: string;
}
/**
 * Options to pass to create a TrustProductsInstance
 *
 * @property { string } friendlyName The string that you assigned to describe the resource.
 * @property { string } email The email address that will receive updates when the Customer-Profile resource changes status.
 * @property { string } policySid The unique string of a policy that is associated to the Customer-Profile resource.
 * @property { string } [statusCallback] The URL we call to inform your application of status changes.
 */
export interface TrustProductsListInstanceCreateOptions {
    friendlyName: string;
    email: string;
    policySid: string;
    statusCallback?: string;
}
/**
 * Options to pass to each
 *
 * @property { TrustProductStatus } [status] The verification status of the Customer-Profile resource.
 * @property { string } [friendlyName] The string that you assigned to describe the resource.
 * @property { string } [policySid] The unique string of a policy that is associated to the Customer-Profile resource.
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
export interface TrustProductsListInstanceEachOptions {
    status?: TrustProductStatus;
    friendlyName?: string;
    policySid?: string;
    pageSize?: number;
    callback?: (item: TrustProductsInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { TrustProductStatus } [status] The verification status of the Customer-Profile resource.
 * @property { string } [friendlyName] The string that you assigned to describe the resource.
 * @property { string } [policySid] The unique string of a policy that is associated to the Customer-Profile resource.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface TrustProductsListInstanceOptions {
    status?: TrustProductStatus;
    friendlyName?: string;
    policySid?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { TrustProductStatus } [status] The verification status of the Customer-Profile resource.
 * @property { string } [friendlyName] The string that you assigned to describe the resource.
 * @property { string } [policySid] The unique string of a policy that is associated to the Customer-Profile resource.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface TrustProductsListInstancePageOptions {
    status?: TrustProductStatus;
    friendlyName?: string;
    policySid?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface TrustProductsContext {
    trustProductsChannelEndpointAssignment: TrustProductsChannelEndpointAssignmentListInstance;
    trustProductsEntityAssignments: TrustProductsEntityAssignmentsListInstance;
    trustProductsEvaluations: TrustProductsEvaluationsListInstance;
    /**
     * Remove a TrustProductsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a TrustProductsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrustProductsInstance
     */
    fetch(callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance>;
    /**
     * Update a TrustProductsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrustProductsInstance
     */
    update(callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance>;
    /**
     * Update a TrustProductsInstance
     *
     * @param { TrustProductsContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrustProductsInstance
     */
    update(params: TrustProductsContextUpdateOptions, callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance>;
    update(params?: any, callback?: any): Promise<TrustProductsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TrustProductsContextSolution {
    sid?: string;
}
export declare class TrustProductsContextImpl implements TrustProductsContext {
    protected _version: V1;
    protected _solution: TrustProductsContextSolution;
    protected _uri: string;
    protected _trustProductsChannelEndpointAssignment?: TrustProductsChannelEndpointAssignmentListInstance;
    protected _trustProductsEntityAssignments?: TrustProductsEntityAssignmentsListInstance;
    protected _trustProductsEvaluations?: TrustProductsEvaluationsListInstance;
    constructor(_version: V1, sid: string);
    get trustProductsChannelEndpointAssignment(): TrustProductsChannelEndpointAssignmentListInstance;
    get trustProductsEntityAssignments(): TrustProductsEntityAssignmentsListInstance;
    get trustProductsEvaluations(): TrustProductsEvaluationsListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<TrustProductsInstance>;
    update(params?: any, callback?: any): Promise<TrustProductsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): TrustProductsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface TrustProductsPayload extends TwilioResponsePayload {
    results: TrustProductsResource[];
}
interface TrustProductsResource {
    sid?: string | null;
    account_sid?: string | null;
    policy_sid?: string | null;
    friendly_name?: string | null;
    status?: TrustProductStatus;
    valid_until?: Date | null;
    email?: string | null;
    status_callback?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class TrustProductsInstance {
    protected _version: V1;
    protected _solution: TrustProductsContextSolution;
    protected _context?: TrustProductsContext;
    constructor(_version: V1, payload: TrustProductsResource, sid?: string);
    /**
     * The unique string that identifies the resource.
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The unique string of a policy.
     */
    policySid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    status?: TrustProductStatus;
    /**
     * The ISO 8601 date and time in GMT when the resource will be valid until.
     */
    validUntil?: Date | null;
    /**
     * The email address
     */
    email?: string | null;
    /**
     * The URL we call to inform your application of status changes.
     */
    statusCallback?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the Customer-Profile resource
     */
    url?: string | null;
    /**
     * The URLs of the Assigned Items of the Customer-Profile resource
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a TrustProductsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a TrustProductsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrustProductsInstance
     */
    fetch(callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance>;
    /**
     * Update a TrustProductsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrustProductsInstance
     */
    update(callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance>;
    /**
     * Update a TrustProductsInstance
     *
     * @param { TrustProductsContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrustProductsInstance
     */
    update(params: TrustProductsContextUpdateOptions, callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance>;
    /**
     * Access the trustProductsChannelEndpointAssignment.
     */
    trustProductsChannelEndpointAssignment(): TrustProductsChannelEndpointAssignmentListInstance;
    /**
     * Access the trustProductsEntityAssignments.
     */
    trustProductsEntityAssignments(): TrustProductsEntityAssignmentsListInstance;
    /**
     * Access the trustProductsEvaluations.
     */
    trustProductsEvaluations(): TrustProductsEvaluationsListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        policySid: string | null | undefined;
        friendlyName: string | null | undefined;
        status: TrustProductStatus | undefined;
        validUntil: Date | null | undefined;
        email: string | null | undefined;
        statusCallback: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface TrustProductsListInstance {
    (sid: string): TrustProductsContext;
    get(sid: string): TrustProductsContext;
    /**
     * Create a TrustProductsInstance
     *
     * @param { TrustProductsListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrustProductsInstance
     */
    create(params: TrustProductsListInstanceCreateOptions, callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance>;
    create(params: any, callback?: any): Promise<TrustProductsInstance>;
    /**
     * Streams TrustProductsInstance records from the API.
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
    each(callback?: (item: TrustProductsInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams TrustProductsInstance records from the API.
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
     * @param { TrustProductsListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: TrustProductsListInstanceEachOptions, callback?: (item: TrustProductsInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of TrustProductsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: TrustProductsPage) => any): Promise<TrustProductsPage>;
    /**
     * Retrieve a single target page of TrustProductsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: TrustProductsPage) => any): Promise<TrustProductsPage>;
    getPage(params?: any, callback?: any): Promise<TrustProductsPage>;
    /**
     * Lists TrustProductsInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: TrustProductsInstance[]) => any): Promise<TrustProductsInstance[]>;
    /**
     * Lists TrustProductsInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TrustProductsListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: TrustProductsListInstanceOptions, callback?: (error: Error | null, items: TrustProductsInstance[]) => any): Promise<TrustProductsInstance[]>;
    list(params?: any, callback?: any): Promise<TrustProductsInstance[]>;
    /**
     * Retrieve a single page of TrustProductsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: TrustProductsPage) => any): Promise<TrustProductsPage>;
    /**
     * Retrieve a single page of TrustProductsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TrustProductsListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: TrustProductsListInstancePageOptions, callback?: (error: Error | null, items: TrustProductsPage) => any): Promise<TrustProductsPage>;
    page(params?: any, callback?: any): Promise<TrustProductsPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TrustProductsSolution {
}
export declare function TrustProductsListInstance(version: V1): TrustProductsListInstance;
export declare class TrustProductsPage extends Page<V1, TrustProductsPayload, TrustProductsResource, TrustProductsInstance> {
    /**
     * Initialize the TrustProductsPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: TrustProductsSolution);
    /**
     * Build an instance of TrustProductsInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: TrustProductsResource): TrustProductsInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
