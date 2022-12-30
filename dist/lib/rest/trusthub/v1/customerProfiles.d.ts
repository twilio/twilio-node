/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { CustomerProfilesChannelEndpointAssignmentListInstance } from "./customerProfiles/customerProfilesChannelEndpointAssignment";
import { CustomerProfilesEntityAssignmentsListInstance } from "./customerProfiles/customerProfilesEntityAssignments";
import { CustomerProfilesEvaluationsListInstance } from "./customerProfiles/customerProfilesEvaluations";
declare type CustomerProfileStatus = "draft" | "pending-review" | "in-review" | "twilio-rejected" | "twilio-approved";
/**
 * Options to pass to update a CustomerProfilesInstance
 *
 * @property { CustomerProfileStatus } [status]
 * @property { string } [statusCallback] The URL we call to inform your application of status changes.
 * @property { string } [friendlyName] The string that you assigned to describe the resource.
 * @property { string } [email] The email address that will receive updates when the Customer-Profile resource changes status.
 */
export interface CustomerProfilesContextUpdateOptions {
    status?: CustomerProfileStatus;
    statusCallback?: string;
    friendlyName?: string;
    email?: string;
}
/**
 * Options to pass to create a CustomerProfilesInstance
 *
 * @property { string } friendlyName The string that you assigned to describe the resource.
 * @property { string } email The email address that will receive updates when the Customer-Profile resource changes status.
 * @property { string } policySid The unique string of a policy that is associated to the Customer-Profile resource.
 * @property { string } [statusCallback] The URL we call to inform your application of status changes.
 */
export interface CustomerProfilesListInstanceCreateOptions {
    friendlyName: string;
    email: string;
    policySid: string;
    statusCallback?: string;
}
/**
 * Options to pass to each
 *
 * @property { CustomerProfileStatus } [status] The verification status of the Customer-Profile resource.
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
export interface CustomerProfilesListInstanceEachOptions {
    status?: CustomerProfileStatus;
    friendlyName?: string;
    policySid?: string;
    pageSize?: number;
    callback?: (item: CustomerProfilesInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { CustomerProfileStatus } [status] The verification status of the Customer-Profile resource.
 * @property { string } [friendlyName] The string that you assigned to describe the resource.
 * @property { string } [policySid] The unique string of a policy that is associated to the Customer-Profile resource.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface CustomerProfilesListInstanceOptions {
    status?: CustomerProfileStatus;
    friendlyName?: string;
    policySid?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { CustomerProfileStatus } [status] The verification status of the Customer-Profile resource.
 * @property { string } [friendlyName] The string that you assigned to describe the resource.
 * @property { string } [policySid] The unique string of a policy that is associated to the Customer-Profile resource.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface CustomerProfilesListInstancePageOptions {
    status?: CustomerProfileStatus;
    friendlyName?: string;
    policySid?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface CustomerProfilesContext {
    customerProfilesChannelEndpointAssignment: CustomerProfilesChannelEndpointAssignmentListInstance;
    customerProfilesEntityAssignments: CustomerProfilesEntityAssignmentsListInstance;
    customerProfilesEvaluations: CustomerProfilesEvaluationsListInstance;
    /**
     * Remove a CustomerProfilesInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a CustomerProfilesInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CustomerProfilesInstance
     */
    fetch(callback?: (error: Error | null, item?: CustomerProfilesInstance) => any): Promise<CustomerProfilesInstance>;
    /**
     * Update a CustomerProfilesInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CustomerProfilesInstance
     */
    update(callback?: (error: Error | null, item?: CustomerProfilesInstance) => any): Promise<CustomerProfilesInstance>;
    /**
     * Update a CustomerProfilesInstance
     *
     * @param { CustomerProfilesContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CustomerProfilesInstance
     */
    update(params: CustomerProfilesContextUpdateOptions, callback?: (error: Error | null, item?: CustomerProfilesInstance) => any): Promise<CustomerProfilesInstance>;
    update(params?: any, callback?: any): Promise<CustomerProfilesInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CustomerProfilesContextSolution {
    sid?: string;
}
export declare class CustomerProfilesContextImpl implements CustomerProfilesContext {
    protected _version: V1;
    protected _solution: CustomerProfilesContextSolution;
    protected _uri: string;
    protected _customerProfilesChannelEndpointAssignment?: CustomerProfilesChannelEndpointAssignmentListInstance;
    protected _customerProfilesEntityAssignments?: CustomerProfilesEntityAssignmentsListInstance;
    protected _customerProfilesEvaluations?: CustomerProfilesEvaluationsListInstance;
    constructor(_version: V1, sid: string);
    get customerProfilesChannelEndpointAssignment(): CustomerProfilesChannelEndpointAssignmentListInstance;
    get customerProfilesEntityAssignments(): CustomerProfilesEntityAssignmentsListInstance;
    get customerProfilesEvaluations(): CustomerProfilesEvaluationsListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<CustomerProfilesInstance>;
    update(params?: any, callback?: any): Promise<CustomerProfilesInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): CustomerProfilesContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface CustomerProfilesPayload extends TwilioResponsePayload {
    results: CustomerProfilesResource[];
}
interface CustomerProfilesResource {
    sid?: string | null;
    account_sid?: string | null;
    policy_sid?: string | null;
    friendly_name?: string | null;
    status?: CustomerProfileStatus;
    valid_until?: Date | null;
    email?: string | null;
    status_callback?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class CustomerProfilesInstance {
    protected _version: V1;
    protected _solution: CustomerProfilesContextSolution;
    protected _context?: CustomerProfilesContext;
    constructor(_version: V1, payload: CustomerProfilesResource, sid?: string);
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
    status?: CustomerProfileStatus;
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
     * Remove a CustomerProfilesInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a CustomerProfilesInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CustomerProfilesInstance
     */
    fetch(callback?: (error: Error | null, item?: CustomerProfilesInstance) => any): Promise<CustomerProfilesInstance>;
    /**
     * Update a CustomerProfilesInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CustomerProfilesInstance
     */
    update(callback?: (error: Error | null, item?: CustomerProfilesInstance) => any): Promise<CustomerProfilesInstance>;
    /**
     * Update a CustomerProfilesInstance
     *
     * @param { CustomerProfilesContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CustomerProfilesInstance
     */
    update(params: CustomerProfilesContextUpdateOptions, callback?: (error: Error | null, item?: CustomerProfilesInstance) => any): Promise<CustomerProfilesInstance>;
    /**
     * Access the customerProfilesChannelEndpointAssignment.
     */
    customerProfilesChannelEndpointAssignment(): CustomerProfilesChannelEndpointAssignmentListInstance;
    /**
     * Access the customerProfilesEntityAssignments.
     */
    customerProfilesEntityAssignments(): CustomerProfilesEntityAssignmentsListInstance;
    /**
     * Access the customerProfilesEvaluations.
     */
    customerProfilesEvaluations(): CustomerProfilesEvaluationsListInstance;
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
        status: CustomerProfileStatus | undefined;
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
export interface CustomerProfilesListInstance {
    (sid: string): CustomerProfilesContext;
    get(sid: string): CustomerProfilesContext;
    /**
     * Create a CustomerProfilesInstance
     *
     * @param { CustomerProfilesListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CustomerProfilesInstance
     */
    create(params: CustomerProfilesListInstanceCreateOptions, callback?: (error: Error | null, item?: CustomerProfilesInstance) => any): Promise<CustomerProfilesInstance>;
    create(params: any, callback?: any): Promise<CustomerProfilesInstance>;
    /**
     * Streams CustomerProfilesInstance records from the API.
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
    each(callback?: (item: CustomerProfilesInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams CustomerProfilesInstance records from the API.
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
     * @param { CustomerProfilesListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: CustomerProfilesListInstanceEachOptions, callback?: (item: CustomerProfilesInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of CustomerProfilesInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: CustomerProfilesPage) => any): Promise<CustomerProfilesPage>;
    /**
     * Retrieve a single target page of CustomerProfilesInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: CustomerProfilesPage) => any): Promise<CustomerProfilesPage>;
    getPage(params?: any, callback?: any): Promise<CustomerProfilesPage>;
    /**
     * Lists CustomerProfilesInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: CustomerProfilesInstance[]) => any): Promise<CustomerProfilesInstance[]>;
    /**
     * Lists CustomerProfilesInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CustomerProfilesListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: CustomerProfilesListInstanceOptions, callback?: (error: Error | null, items: CustomerProfilesInstance[]) => any): Promise<CustomerProfilesInstance[]>;
    list(params?: any, callback?: any): Promise<CustomerProfilesInstance[]>;
    /**
     * Retrieve a single page of CustomerProfilesInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: CustomerProfilesPage) => any): Promise<CustomerProfilesPage>;
    /**
     * Retrieve a single page of CustomerProfilesInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CustomerProfilesListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: CustomerProfilesListInstancePageOptions, callback?: (error: Error | null, items: CustomerProfilesPage) => any): Promise<CustomerProfilesPage>;
    page(params?: any, callback?: any): Promise<CustomerProfilesPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CustomerProfilesSolution {
}
export declare function CustomerProfilesListInstance(version: V1): CustomerProfilesListInstance;
export declare class CustomerProfilesPage extends Page<V1, CustomerProfilesPayload, CustomerProfilesResource, CustomerProfilesInstance> {
    /**
     * Initialize the CustomerProfilesPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: CustomerProfilesSolution);
    /**
     * Build an instance of CustomerProfilesInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: CustomerProfilesResource): CustomerProfilesInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
