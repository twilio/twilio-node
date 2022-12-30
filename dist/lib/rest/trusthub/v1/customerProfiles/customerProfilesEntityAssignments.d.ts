/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to create a CustomerProfilesEntityAssignmentsInstance
 *
 * @property { string } objectSid The SID of an object bag that holds information of the different items.
 */
export interface CustomerProfilesEntityAssignmentsListInstanceCreateOptions {
    objectSid: string;
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
export interface CustomerProfilesEntityAssignmentsListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: CustomerProfilesEntityAssignmentsInstance, done: (err?: Error) => void) => void;
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
export interface CustomerProfilesEntityAssignmentsListInstanceOptions {
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
export interface CustomerProfilesEntityAssignmentsListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface CustomerProfilesEntityAssignmentsContext {
    /**
     * Remove a CustomerProfilesEntityAssignmentsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a CustomerProfilesEntityAssignmentsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CustomerProfilesEntityAssignmentsInstance
     */
    fetch(callback?: (error: Error | null, item?: CustomerProfilesEntityAssignmentsInstance) => any): Promise<CustomerProfilesEntityAssignmentsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CustomerProfilesEntityAssignmentsContextSolution {
    customerProfileSid?: string;
    sid?: string;
}
export declare class CustomerProfilesEntityAssignmentsContextImpl implements CustomerProfilesEntityAssignmentsContext {
    protected _version: V1;
    protected _solution: CustomerProfilesEntityAssignmentsContextSolution;
    protected _uri: string;
    constructor(_version: V1, customerProfileSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<CustomerProfilesEntityAssignmentsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): CustomerProfilesEntityAssignmentsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface CustomerProfilesEntityAssignmentsPayload extends TwilioResponsePayload {
    results: CustomerProfilesEntityAssignmentsResource[];
}
interface CustomerProfilesEntityAssignmentsResource {
    sid?: string | null;
    customer_profile_sid?: string | null;
    account_sid?: string | null;
    object_sid?: string | null;
    date_created?: Date | null;
    url?: string | null;
}
export declare class CustomerProfilesEntityAssignmentsInstance {
    protected _version: V1;
    protected _solution: CustomerProfilesEntityAssignmentsContextSolution;
    protected _context?: CustomerProfilesEntityAssignmentsContext;
    constructor(_version: V1, payload: CustomerProfilesEntityAssignmentsResource, customerProfileSid: string, sid?: string);
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
     * The sid of an object bag
     */
    objectSid?: string | null;
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
     * Remove a CustomerProfilesEntityAssignmentsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a CustomerProfilesEntityAssignmentsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CustomerProfilesEntityAssignmentsInstance
     */
    fetch(callback?: (error: Error | null, item?: CustomerProfilesEntityAssignmentsInstance) => any): Promise<CustomerProfilesEntityAssignmentsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        customerProfileSid: string | null | undefined;
        accountSid: string | null | undefined;
        objectSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface CustomerProfilesEntityAssignmentsListInstance {
    (sid: string): CustomerProfilesEntityAssignmentsContext;
    get(sid: string): CustomerProfilesEntityAssignmentsContext;
    /**
     * Create a CustomerProfilesEntityAssignmentsInstance
     *
     * @param { CustomerProfilesEntityAssignmentsListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CustomerProfilesEntityAssignmentsInstance
     */
    create(params: CustomerProfilesEntityAssignmentsListInstanceCreateOptions, callback?: (error: Error | null, item?: CustomerProfilesEntityAssignmentsInstance) => any): Promise<CustomerProfilesEntityAssignmentsInstance>;
    create(params: any, callback?: any): Promise<CustomerProfilesEntityAssignmentsInstance>;
    /**
     * Streams CustomerProfilesEntityAssignmentsInstance records from the API.
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
    each(callback?: (item: CustomerProfilesEntityAssignmentsInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams CustomerProfilesEntityAssignmentsInstance records from the API.
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
     * @param { CustomerProfilesEntityAssignmentsListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: CustomerProfilesEntityAssignmentsListInstanceEachOptions, callback?: (item: CustomerProfilesEntityAssignmentsInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of CustomerProfilesEntityAssignmentsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: CustomerProfilesEntityAssignmentsPage) => any): Promise<CustomerProfilesEntityAssignmentsPage>;
    /**
     * Retrieve a single target page of CustomerProfilesEntityAssignmentsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: CustomerProfilesEntityAssignmentsPage) => any): Promise<CustomerProfilesEntityAssignmentsPage>;
    getPage(params?: any, callback?: any): Promise<CustomerProfilesEntityAssignmentsPage>;
    /**
     * Lists CustomerProfilesEntityAssignmentsInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: CustomerProfilesEntityAssignmentsInstance[]) => any): Promise<CustomerProfilesEntityAssignmentsInstance[]>;
    /**
     * Lists CustomerProfilesEntityAssignmentsInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CustomerProfilesEntityAssignmentsListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: CustomerProfilesEntityAssignmentsListInstanceOptions, callback?: (error: Error | null, items: CustomerProfilesEntityAssignmentsInstance[]) => any): Promise<CustomerProfilesEntityAssignmentsInstance[]>;
    list(params?: any, callback?: any): Promise<CustomerProfilesEntityAssignmentsInstance[]>;
    /**
     * Retrieve a single page of CustomerProfilesEntityAssignmentsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: CustomerProfilesEntityAssignmentsPage) => any): Promise<CustomerProfilesEntityAssignmentsPage>;
    /**
     * Retrieve a single page of CustomerProfilesEntityAssignmentsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CustomerProfilesEntityAssignmentsListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: CustomerProfilesEntityAssignmentsListInstancePageOptions, callback?: (error: Error | null, items: CustomerProfilesEntityAssignmentsPage) => any): Promise<CustomerProfilesEntityAssignmentsPage>;
    page(params?: any, callback?: any): Promise<CustomerProfilesEntityAssignmentsPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CustomerProfilesEntityAssignmentsSolution {
    customerProfileSid?: string;
}
export declare function CustomerProfilesEntityAssignmentsListInstance(version: V1, customerProfileSid: string): CustomerProfilesEntityAssignmentsListInstance;
export declare class CustomerProfilesEntityAssignmentsPage extends Page<V1, CustomerProfilesEntityAssignmentsPayload, CustomerProfilesEntityAssignmentsResource, CustomerProfilesEntityAssignmentsInstance> {
    /**
     * Initialize the CustomerProfilesEntityAssignmentsPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: CustomerProfilesEntityAssignmentsSolution);
    /**
     * Build an instance of CustomerProfilesEntityAssignmentsInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: CustomerProfilesEntityAssignmentsResource): CustomerProfilesEntityAssignmentsInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
