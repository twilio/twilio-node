/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
import { FunctionVersionListInstance } from "./function/functionVersion";
/**
 * Options to pass to update a FunctionInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the Function resource. It can be a maximum of 255 characters.
 */
export interface FunctionContextUpdateOptions {
    friendlyName: string;
}
/**
 * Options to pass to create a FunctionInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the Function resource. It can be a maximum of 255 characters.
 */
export interface FunctionListInstanceCreateOptions {
    friendlyName: string;
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
export interface FunctionListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: FunctionInstance, done: (err?: Error) => void) => void;
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
export interface FunctionListInstanceOptions {
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
export interface FunctionListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface FunctionContext {
    functionVersions: FunctionVersionListInstance;
    /**
     * Remove a FunctionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FunctionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FunctionInstance
     */
    fetch(callback?: (error: Error | null, item?: FunctionInstance) => any): Promise<FunctionInstance>;
    /**
     * Update a FunctionInstance
     *
     * @param { FunctionContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FunctionInstance
     */
    update(params: FunctionContextUpdateOptions, callback?: (error: Error | null, item?: FunctionInstance) => any): Promise<FunctionInstance>;
    update(params: any, callback?: any): Promise<FunctionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FunctionContextSolution {
    serviceSid?: string;
    sid?: string;
}
export declare class FunctionContextImpl implements FunctionContext {
    protected _version: V1;
    protected _solution: FunctionContextSolution;
    protected _uri: string;
    protected _functionVersions?: FunctionVersionListInstance;
    constructor(_version: V1, serviceSid: string, sid: string);
    get functionVersions(): FunctionVersionListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<FunctionInstance>;
    update(params: any, callback?: any): Promise<FunctionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FunctionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface FunctionPayload extends TwilioResponsePayload {
    functions: FunctionResource[];
}
interface FunctionResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    friendly_name?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class FunctionInstance {
    protected _version: V1;
    protected _solution: FunctionContextSolution;
    protected _context?: FunctionContext;
    constructor(_version: V1, payload: FunctionResource, serviceSid: string, sid?: string);
    /**
     * The unique string that identifies the Function resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the Function resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Service that the Function resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The string that you assigned to describe the Function resource
     */
    friendlyName?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the Function resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the Function resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the Function resource
     */
    url?: string | null;
    /**
     * The URLs of nested resources of the Function resource
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a FunctionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FunctionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FunctionInstance
     */
    fetch(callback?: (error: Error | null, item?: FunctionInstance) => any): Promise<FunctionInstance>;
    /**
     * Update a FunctionInstance
     *
     * @param { FunctionContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FunctionInstance
     */
    update(params: FunctionContextUpdateOptions, callback?: (error: Error | null, item?: FunctionInstance) => any): Promise<FunctionInstance>;
    /**
     * Access the functionVersions.
     */
    functionVersions(): FunctionVersionListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        friendlyName: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FunctionListInstance {
    (sid: string): FunctionContext;
    get(sid: string): FunctionContext;
    /**
     * Create a FunctionInstance
     *
     * @param { FunctionListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FunctionInstance
     */
    create(params: FunctionListInstanceCreateOptions, callback?: (error: Error | null, item?: FunctionInstance) => any): Promise<FunctionInstance>;
    create(params: any, callback?: any): Promise<FunctionInstance>;
    /**
     * Streams FunctionInstance records from the API.
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
    each(callback?: (item: FunctionInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams FunctionInstance records from the API.
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
     * @param { FunctionListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: FunctionListInstanceEachOptions, callback?: (item: FunctionInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of FunctionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: FunctionPage) => any): Promise<FunctionPage>;
    /**
     * Retrieve a single target page of FunctionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: FunctionPage) => any): Promise<FunctionPage>;
    getPage(params?: any, callback?: any): Promise<FunctionPage>;
    /**
     * Lists FunctionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: FunctionInstance[]) => any): Promise<FunctionInstance[]>;
    /**
     * Lists FunctionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FunctionListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: FunctionListInstanceOptions, callback?: (error: Error | null, items: FunctionInstance[]) => any): Promise<FunctionInstance[]>;
    list(params?: any, callback?: any): Promise<FunctionInstance[]>;
    /**
     * Retrieve a single page of FunctionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: FunctionPage) => any): Promise<FunctionPage>;
    /**
     * Retrieve a single page of FunctionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FunctionListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: FunctionListInstancePageOptions, callback?: (error: Error | null, items: FunctionPage) => any): Promise<FunctionPage>;
    page(params?: any, callback?: any): Promise<FunctionPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FunctionSolution {
    serviceSid?: string;
}
export declare function FunctionListInstance(version: V1, serviceSid: string): FunctionListInstance;
export declare class FunctionPage extends Page<V1, FunctionPayload, FunctionResource, FunctionInstance> {
    /**
     * Initialize the FunctionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: FunctionSolution);
    /**
     * Build an instance of FunctionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: FunctionResource): FunctionInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
