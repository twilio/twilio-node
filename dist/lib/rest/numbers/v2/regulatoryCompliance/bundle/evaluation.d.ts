/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
declare type EvaluationStatus = "compliant" | "noncompliant";
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
export interface EvaluationListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: EvaluationInstance, done: (err?: Error) => void) => void;
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
export interface EvaluationListInstanceOptions {
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
export interface EvaluationListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface EvaluationContext {
    /**
     * Fetch a EvaluationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EvaluationInstance
     */
    fetch(callback?: (error: Error | null, item?: EvaluationInstance) => any): Promise<EvaluationInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface EvaluationContextSolution {
    bundleSid?: string;
    sid?: string;
}
export declare class EvaluationContextImpl implements EvaluationContext {
    protected _version: V2;
    protected _solution: EvaluationContextSolution;
    protected _uri: string;
    constructor(_version: V2, bundleSid: string, sid: string);
    fetch(callback?: any): Promise<EvaluationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): EvaluationContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface EvaluationPayload extends TwilioResponsePayload {
    results: EvaluationResource[];
}
interface EvaluationResource {
    sid?: string | null;
    account_sid?: string | null;
    regulation_sid?: string | null;
    bundle_sid?: string | null;
    status?: EvaluationStatus;
    results?: Array<any> | null;
    date_created?: Date | null;
    url?: string | null;
}
export declare class EvaluationInstance {
    protected _version: V2;
    protected _solution: EvaluationContextSolution;
    protected _context?: EvaluationContext;
    constructor(_version: V2, payload: EvaluationResource, bundleSid: string, sid?: string);
    /**
     * The unique string that identifies the Evaluation resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The unique string of a regulation
     */
    regulationSid?: string | null;
    /**
     * The unique string that identifies the resource
     */
    bundleSid?: string | null;
    status?: EvaluationStatus;
    /**
     * The results of the Evaluation resource
     */
    results?: Array<any> | null;
    dateCreated?: Date | null;
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a EvaluationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EvaluationInstance
     */
    fetch(callback?: (error: Error | null, item?: EvaluationInstance) => any): Promise<EvaluationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        regulationSid: string | null | undefined;
        bundleSid: string | null | undefined;
        status: EvaluationStatus | undefined;
        results: any[] | null | undefined;
        dateCreated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface EvaluationListInstance {
    (sid: string): EvaluationContext;
    get(sid: string): EvaluationContext;
    /**
     * Create a EvaluationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EvaluationInstance
     */
    create(callback?: (error: Error | null, item?: EvaluationInstance) => any): Promise<EvaluationInstance>;
    /**
     * Streams EvaluationInstance records from the API.
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
    each(callback?: (item: EvaluationInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams EvaluationInstance records from the API.
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
     * @param { EvaluationListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: EvaluationListInstanceEachOptions, callback?: (item: EvaluationInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of EvaluationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: EvaluationPage) => any): Promise<EvaluationPage>;
    /**
     * Retrieve a single target page of EvaluationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: EvaluationPage) => any): Promise<EvaluationPage>;
    getPage(params?: any, callback?: any): Promise<EvaluationPage>;
    /**
     * Lists EvaluationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: EvaluationInstance[]) => any): Promise<EvaluationInstance[]>;
    /**
     * Lists EvaluationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { EvaluationListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: EvaluationListInstanceOptions, callback?: (error: Error | null, items: EvaluationInstance[]) => any): Promise<EvaluationInstance[]>;
    list(params?: any, callback?: any): Promise<EvaluationInstance[]>;
    /**
     * Retrieve a single page of EvaluationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: EvaluationPage) => any): Promise<EvaluationPage>;
    /**
     * Retrieve a single page of EvaluationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { EvaluationListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: EvaluationListInstancePageOptions, callback?: (error: Error | null, items: EvaluationPage) => any): Promise<EvaluationPage>;
    page(params?: any, callback?: any): Promise<EvaluationPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface EvaluationSolution {
    bundleSid?: string;
}
export declare function EvaluationListInstance(version: V2, bundleSid: string): EvaluationListInstance;
export declare class EvaluationPage extends Page<V2, EvaluationPayload, EvaluationResource, EvaluationInstance> {
    /**
     * Initialize the EvaluationPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: EvaluationSolution);
    /**
     * Build an instance of EvaluationInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: EvaluationResource): EvaluationInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
