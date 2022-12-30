/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
declare type TrustProductEvaluationStatus = "compliant" | "noncompliant";
/**
 * Options to pass to create a TrustProductsEvaluationsInstance
 *
 * @property { string } policySid The unique string of a policy that is associated to the customer_profile resource.
 */
export interface TrustProductsEvaluationsListInstanceCreateOptions {
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
export interface TrustProductsEvaluationsListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: TrustProductsEvaluationsInstance, done: (err?: Error) => void) => void;
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
export interface TrustProductsEvaluationsListInstanceOptions {
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
export interface TrustProductsEvaluationsListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface TrustProductsEvaluationsContext {
    /**
     * Fetch a TrustProductsEvaluationsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrustProductsEvaluationsInstance
     */
    fetch(callback?: (error: Error | null, item?: TrustProductsEvaluationsInstance) => any): Promise<TrustProductsEvaluationsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TrustProductsEvaluationsContextSolution {
    trustProductSid?: string;
    sid?: string;
}
export declare class TrustProductsEvaluationsContextImpl implements TrustProductsEvaluationsContext {
    protected _version: V1;
    protected _solution: TrustProductsEvaluationsContextSolution;
    protected _uri: string;
    constructor(_version: V1, trustProductSid: string, sid: string);
    fetch(callback?: any): Promise<TrustProductsEvaluationsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): TrustProductsEvaluationsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface TrustProductsEvaluationsPayload extends TwilioResponsePayload {
    results: TrustProductsEvaluationsResource[];
}
interface TrustProductsEvaluationsResource {
    sid?: string | null;
    account_sid?: string | null;
    policy_sid?: string | null;
    trust_product_sid?: string | null;
    status?: TrustProductEvaluationStatus;
    results?: Array<any> | null;
    date_created?: Date | null;
    url?: string | null;
}
export declare class TrustProductsEvaluationsInstance {
    protected _version: V1;
    protected _solution: TrustProductsEvaluationsContextSolution;
    protected _context?: TrustProductsEvaluationsContext;
    constructor(_version: V1, payload: TrustProductsEvaluationsResource, trustProductSid: string, sid?: string);
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
    trustProductSid?: string | null;
    status?: TrustProductEvaluationStatus;
    /**
     * The results of the Evaluation resource
     */
    results?: Array<any> | null;
    dateCreated?: Date | null;
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a TrustProductsEvaluationsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrustProductsEvaluationsInstance
     */
    fetch(callback?: (error: Error | null, item?: TrustProductsEvaluationsInstance) => any): Promise<TrustProductsEvaluationsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        policySid: string | null | undefined;
        trustProductSid: string | null | undefined;
        status: TrustProductEvaluationStatus | undefined;
        results: any[] | null | undefined;
        dateCreated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface TrustProductsEvaluationsListInstance {
    (sid: string): TrustProductsEvaluationsContext;
    get(sid: string): TrustProductsEvaluationsContext;
    /**
     * Create a TrustProductsEvaluationsInstance
     *
     * @param { TrustProductsEvaluationsListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrustProductsEvaluationsInstance
     */
    create(params: TrustProductsEvaluationsListInstanceCreateOptions, callback?: (error: Error | null, item?: TrustProductsEvaluationsInstance) => any): Promise<TrustProductsEvaluationsInstance>;
    create(params: any, callback?: any): Promise<TrustProductsEvaluationsInstance>;
    /**
     * Streams TrustProductsEvaluationsInstance records from the API.
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
    each(callback?: (item: TrustProductsEvaluationsInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams TrustProductsEvaluationsInstance records from the API.
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
     * @param { TrustProductsEvaluationsListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: TrustProductsEvaluationsListInstanceEachOptions, callback?: (item: TrustProductsEvaluationsInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of TrustProductsEvaluationsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: TrustProductsEvaluationsPage) => any): Promise<TrustProductsEvaluationsPage>;
    /**
     * Retrieve a single target page of TrustProductsEvaluationsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: TrustProductsEvaluationsPage) => any): Promise<TrustProductsEvaluationsPage>;
    getPage(params?: any, callback?: any): Promise<TrustProductsEvaluationsPage>;
    /**
     * Lists TrustProductsEvaluationsInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: TrustProductsEvaluationsInstance[]) => any): Promise<TrustProductsEvaluationsInstance[]>;
    /**
     * Lists TrustProductsEvaluationsInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TrustProductsEvaluationsListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: TrustProductsEvaluationsListInstanceOptions, callback?: (error: Error | null, items: TrustProductsEvaluationsInstance[]) => any): Promise<TrustProductsEvaluationsInstance[]>;
    list(params?: any, callback?: any): Promise<TrustProductsEvaluationsInstance[]>;
    /**
     * Retrieve a single page of TrustProductsEvaluationsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: TrustProductsEvaluationsPage) => any): Promise<TrustProductsEvaluationsPage>;
    /**
     * Retrieve a single page of TrustProductsEvaluationsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TrustProductsEvaluationsListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: TrustProductsEvaluationsListInstancePageOptions, callback?: (error: Error | null, items: TrustProductsEvaluationsPage) => any): Promise<TrustProductsEvaluationsPage>;
    page(params?: any, callback?: any): Promise<TrustProductsEvaluationsPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TrustProductsEvaluationsSolution {
    trustProductSid?: string;
}
export declare function TrustProductsEvaluationsListInstance(version: V1, trustProductSid: string): TrustProductsEvaluationsListInstance;
export declare class TrustProductsEvaluationsPage extends Page<V1, TrustProductsEvaluationsPayload, TrustProductsEvaluationsResource, TrustProductsEvaluationsInstance> {
    /**
     * Initialize the TrustProductsEvaluationsPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: TrustProductsEvaluationsSolution);
    /**
     * Build an instance of TrustProductsEvaluationsInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: TrustProductsEvaluationsResource): TrustProductsEvaluationsInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
