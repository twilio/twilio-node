/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
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
export interface PoliciesListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: PoliciesInstance, done: (err?: Error) => void) => void;
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
export interface PoliciesListInstanceOptions {
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
export interface PoliciesListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface PoliciesContext {
    /**
     * Fetch a PoliciesInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PoliciesInstance
     */
    fetch(callback?: (error: Error | null, item?: PoliciesInstance) => any): Promise<PoliciesInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PoliciesContextSolution {
    sid?: string;
}
export declare class PoliciesContextImpl implements PoliciesContext {
    protected _version: V1;
    protected _solution: PoliciesContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    fetch(callback?: any): Promise<PoliciesInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PoliciesContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface PoliciesPayload extends TwilioResponsePayload {
    results: PoliciesResource[];
}
interface PoliciesResource {
    sid?: string | null;
    friendly_name?: string | null;
    requirements?: any | null;
    url?: string | null;
}
export declare class PoliciesInstance {
    protected _version: V1;
    protected _solution: PoliciesContextSolution;
    protected _context?: PoliciesContext;
    constructor(_version: V1, payload: PoliciesResource, sid?: string);
    /**
     * The unique string that identifies the Policy resource
     */
    sid?: string | null;
    /**
     * A human-readable description of the Policy resource
     */
    friendlyName?: string | null;
    /**
     * The sid of a Policy object that dictates requirements
     */
    requirements?: any | null;
    /**
     * The absolute URL of the Policy resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a PoliciesInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PoliciesInstance
     */
    fetch(callback?: (error: Error | null, item?: PoliciesInstance) => any): Promise<PoliciesInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        friendlyName: string | null | undefined;
        requirements: any;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PoliciesListInstance {
    (sid: string): PoliciesContext;
    get(sid: string): PoliciesContext;
    /**
     * Streams PoliciesInstance records from the API.
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
    each(callback?: (item: PoliciesInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams PoliciesInstance records from the API.
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
     * @param { PoliciesListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: PoliciesListInstanceEachOptions, callback?: (item: PoliciesInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of PoliciesInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: PoliciesPage) => any): Promise<PoliciesPage>;
    /**
     * Retrieve a single target page of PoliciesInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: PoliciesPage) => any): Promise<PoliciesPage>;
    getPage(params?: any, callback?: any): Promise<PoliciesPage>;
    /**
     * Lists PoliciesInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: PoliciesInstance[]) => any): Promise<PoliciesInstance[]>;
    /**
     * Lists PoliciesInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PoliciesListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: PoliciesListInstanceOptions, callback?: (error: Error | null, items: PoliciesInstance[]) => any): Promise<PoliciesInstance[]>;
    list(params?: any, callback?: any): Promise<PoliciesInstance[]>;
    /**
     * Retrieve a single page of PoliciesInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: PoliciesPage) => any): Promise<PoliciesPage>;
    /**
     * Retrieve a single page of PoliciesInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PoliciesListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: PoliciesListInstancePageOptions, callback?: (error: Error | null, items: PoliciesPage) => any): Promise<PoliciesPage>;
    page(params?: any, callback?: any): Promise<PoliciesPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PoliciesSolution {
}
export declare function PoliciesListInstance(version: V1): PoliciesListInstance;
export declare class PoliciesPage extends Page<V1, PoliciesPayload, PoliciesResource, PoliciesInstance> {
    /**
     * Initialize the PoliciesPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: PoliciesSolution);
    /**
     * Build an instance of PoliciesInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: PoliciesResource): PoliciesInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
