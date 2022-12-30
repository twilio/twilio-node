/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
declare type CustomerProfileEvaluationStatus = "compliant" | "noncompliant";
/**
 * Options to pass to create a CustomerProfilesEvaluationsInstance
 *
 * @property { string } policySid The unique string of a policy that is associated to the customer_profile resource.
 */
export interface CustomerProfilesEvaluationsListInstanceCreateOptions {
    policySid: string;
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
export interface CustomerProfilesEvaluationsListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: CustomerProfilesEvaluationsInstance, done: (err?: Error) => void) => void;
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
export interface CustomerProfilesEvaluationsListInstanceOptions {
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
export interface CustomerProfilesEvaluationsListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface CustomerProfilesEvaluationsContext {
    /**
     * Fetch a CustomerProfilesEvaluationsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CustomerProfilesEvaluationsInstance
     */
    fetch(callback?: (error: Error | null, item?: CustomerProfilesEvaluationsInstance) => any): Promise<CustomerProfilesEvaluationsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CustomerProfilesEvaluationsContextSolution {
    customerProfileSid?: string;
    sid?: string;
}
export declare class CustomerProfilesEvaluationsContextImpl implements CustomerProfilesEvaluationsContext {
    protected _version: V1;
    protected _solution: CustomerProfilesEvaluationsContextSolution;
    protected _uri: string;
    constructor(_version: V1, customerProfileSid: string, sid: string);
    fetch(callback?: any): Promise<CustomerProfilesEvaluationsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): CustomerProfilesEvaluationsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface CustomerProfilesEvaluationsPayload extends TwilioResponsePayload {
    results: CustomerProfilesEvaluationsResource[];
}
interface CustomerProfilesEvaluationsResource {
    sid?: string | null;
    account_sid?: string | null;
    policy_sid?: string | null;
    customer_profile_sid?: string | null;
    status?: CustomerProfileEvaluationStatus;
    results?: Array<any> | null;
    date_created?: Date | null;
    url?: string | null;
}
export declare class CustomerProfilesEvaluationsInstance {
    protected _version: V1;
    protected _solution: CustomerProfilesEvaluationsContextSolution;
    protected _context?: CustomerProfilesEvaluationsContext;
    constructor(_version: V1, payload: CustomerProfilesEvaluationsResource, customerProfileSid: string, sid?: string);
    /**
     * The unique string that identifies the Evaluation resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The unique string of a policy
     */
    policySid?: string | null;
    /**
     * The unique string that identifies the resource
     */
    customerProfileSid?: string | null;
    status?: CustomerProfileEvaluationStatus;
    /**
     * The results of the Evaluation resource
     */
    results?: Array<any> | null;
    dateCreated?: Date | null;
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a CustomerProfilesEvaluationsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CustomerProfilesEvaluationsInstance
     */
    fetch(callback?: (error: Error | null, item?: CustomerProfilesEvaluationsInstance) => any): Promise<CustomerProfilesEvaluationsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        policySid: string | null | undefined;
        customerProfileSid: string | null | undefined;
        status: CustomerProfileEvaluationStatus | undefined;
        results: any[] | null | undefined;
        dateCreated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface CustomerProfilesEvaluationsListInstance {
    (sid: string): CustomerProfilesEvaluationsContext;
    get(sid: string): CustomerProfilesEvaluationsContext;
    /**
     * Create a CustomerProfilesEvaluationsInstance
     *
     * @param { CustomerProfilesEvaluationsListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CustomerProfilesEvaluationsInstance
     */
    create(params: CustomerProfilesEvaluationsListInstanceCreateOptions, callback?: (error: Error | null, item?: CustomerProfilesEvaluationsInstance) => any): Promise<CustomerProfilesEvaluationsInstance>;
    create(params: any, callback?: any): Promise<CustomerProfilesEvaluationsInstance>;
    /**
     * Streams CustomerProfilesEvaluationsInstance records from the API.
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
    each(callback?: (item: CustomerProfilesEvaluationsInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams CustomerProfilesEvaluationsInstance records from the API.
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
     * @param { CustomerProfilesEvaluationsListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: CustomerProfilesEvaluationsListInstanceEachOptions, callback?: (item: CustomerProfilesEvaluationsInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of CustomerProfilesEvaluationsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: CustomerProfilesEvaluationsPage) => any): Promise<CustomerProfilesEvaluationsPage>;
    /**
     * Retrieve a single target page of CustomerProfilesEvaluationsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: CustomerProfilesEvaluationsPage) => any): Promise<CustomerProfilesEvaluationsPage>;
    getPage(params?: any, callback?: any): Promise<CustomerProfilesEvaluationsPage>;
    /**
     * Lists CustomerProfilesEvaluationsInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: CustomerProfilesEvaluationsInstance[]) => any): Promise<CustomerProfilesEvaluationsInstance[]>;
    /**
     * Lists CustomerProfilesEvaluationsInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CustomerProfilesEvaluationsListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: CustomerProfilesEvaluationsListInstanceOptions, callback?: (error: Error | null, items: CustomerProfilesEvaluationsInstance[]) => any): Promise<CustomerProfilesEvaluationsInstance[]>;
    list(params?: any, callback?: any): Promise<CustomerProfilesEvaluationsInstance[]>;
    /**
     * Retrieve a single page of CustomerProfilesEvaluationsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: CustomerProfilesEvaluationsPage) => any): Promise<CustomerProfilesEvaluationsPage>;
    /**
     * Retrieve a single page of CustomerProfilesEvaluationsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CustomerProfilesEvaluationsListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: CustomerProfilesEvaluationsListInstancePageOptions, callback?: (error: Error | null, items: CustomerProfilesEvaluationsPage) => any): Promise<CustomerProfilesEvaluationsPage>;
    page(params?: any, callback?: any): Promise<CustomerProfilesEvaluationsPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CustomerProfilesEvaluationsSolution {
    customerProfileSid?: string;
}
export declare function CustomerProfilesEvaluationsListInstance(version: V1, customerProfileSid: string): CustomerProfilesEvaluationsListInstance;
export declare class CustomerProfilesEvaluationsPage extends Page<V1, CustomerProfilesEvaluationsPayload, CustomerProfilesEvaluationsResource, CustomerProfilesEvaluationsInstance> {
    /**
     * Initialize the CustomerProfilesEvaluationsPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: CustomerProfilesEvaluationsSolution);
    /**
     * Build an instance of CustomerProfilesEvaluationsInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: CustomerProfilesEvaluationsResource): CustomerProfilesEvaluationsInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
