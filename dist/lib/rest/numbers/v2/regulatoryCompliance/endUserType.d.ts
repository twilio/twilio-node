/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2 from "../../V2";
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
export interface EndUserTypeListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: EndUserTypeInstance, done: (err?: Error) => void) => void;
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
export interface EndUserTypeListInstanceOptions {
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
export interface EndUserTypeListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface EndUserTypeContext {
    /**
     * Fetch a EndUserTypeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EndUserTypeInstance
     */
    fetch(callback?: (error: Error | null, item?: EndUserTypeInstance) => any): Promise<EndUserTypeInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface EndUserTypeContextSolution {
    sid?: string;
}
export declare class EndUserTypeContextImpl implements EndUserTypeContext {
    protected _version: V2;
    protected _solution: EndUserTypeContextSolution;
    protected _uri: string;
    constructor(_version: V2, sid: string);
    fetch(callback?: any): Promise<EndUserTypeInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): EndUserTypeContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface EndUserTypePayload extends TwilioResponsePayload {
    end_user_types: EndUserTypeResource[];
}
interface EndUserTypeResource {
    sid?: string | null;
    friendly_name?: string | null;
    machine_name?: string | null;
    fields?: Array<any> | null;
    url?: string | null;
}
export declare class EndUserTypeInstance {
    protected _version: V2;
    protected _solution: EndUserTypeContextSolution;
    protected _context?: EndUserTypeContext;
    constructor(_version: V2, payload: EndUserTypeResource, sid?: string);
    /**
     * The unique string that identifies the End-User Type resource
     */
    sid?: string | null;
    /**
     * A human-readable description of the End-User Type resource
     */
    friendlyName?: string | null;
    /**
     * A machine-readable description of the End-User Type resource
     */
    machineName?: string | null;
    /**
     * The required information for creating an End-User.
     */
    fields?: Array<any> | null;
    /**
     * The absolute URL of the End-User Type resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a EndUserTypeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EndUserTypeInstance
     */
    fetch(callback?: (error: Error | null, item?: EndUserTypeInstance) => any): Promise<EndUserTypeInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        friendlyName: string | null | undefined;
        machineName: string | null | undefined;
        fields: any[] | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface EndUserTypeListInstance {
    (sid: string): EndUserTypeContext;
    get(sid: string): EndUserTypeContext;
    /**
     * Streams EndUserTypeInstance records from the API.
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
    each(callback?: (item: EndUserTypeInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams EndUserTypeInstance records from the API.
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
     * @param { EndUserTypeListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: EndUserTypeListInstanceEachOptions, callback?: (item: EndUserTypeInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of EndUserTypeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: EndUserTypePage) => any): Promise<EndUserTypePage>;
    /**
     * Retrieve a single target page of EndUserTypeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: EndUserTypePage) => any): Promise<EndUserTypePage>;
    getPage(params?: any, callback?: any): Promise<EndUserTypePage>;
    /**
     * Lists EndUserTypeInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: EndUserTypeInstance[]) => any): Promise<EndUserTypeInstance[]>;
    /**
     * Lists EndUserTypeInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { EndUserTypeListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: EndUserTypeListInstanceOptions, callback?: (error: Error | null, items: EndUserTypeInstance[]) => any): Promise<EndUserTypeInstance[]>;
    list(params?: any, callback?: any): Promise<EndUserTypeInstance[]>;
    /**
     * Retrieve a single page of EndUserTypeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: EndUserTypePage) => any): Promise<EndUserTypePage>;
    /**
     * Retrieve a single page of EndUserTypeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { EndUserTypeListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: EndUserTypeListInstancePageOptions, callback?: (error: Error | null, items: EndUserTypePage) => any): Promise<EndUserTypePage>;
    page(params?: any, callback?: any): Promise<EndUserTypePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface EndUserTypeSolution {
}
export declare function EndUserTypeListInstance(version: V2): EndUserTypeListInstance;
export declare class EndUserTypePage extends Page<V2, EndUserTypePayload, EndUserTypeResource, EndUserTypeInstance> {
    /**
     * Initialize the EndUserTypePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: EndUserTypeSolution);
    /**
     * Build an instance of EndUserTypeInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: EndUserTypeResource): EndUserTypeInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
