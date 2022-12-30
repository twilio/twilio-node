/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
import { FunctionVersionContentListInstance } from "./functionVersion/functionVersionContent";
declare type FunctionVersionVisibility = "public" | "private" | "protected";
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
export interface FunctionVersionListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: FunctionVersionInstance, done: (err?: Error) => void) => void;
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
export interface FunctionVersionListInstanceOptions {
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
export interface FunctionVersionListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface FunctionVersionContext {
    functionVersionContent: FunctionVersionContentListInstance;
    /**
     * Fetch a FunctionVersionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FunctionVersionInstance
     */
    fetch(callback?: (error: Error | null, item?: FunctionVersionInstance) => any): Promise<FunctionVersionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FunctionVersionContextSolution {
    serviceSid?: string;
    functionSid?: string;
    sid?: string;
}
export declare class FunctionVersionContextImpl implements FunctionVersionContext {
    protected _version: V1;
    protected _solution: FunctionVersionContextSolution;
    protected _uri: string;
    protected _functionVersionContent?: FunctionVersionContentListInstance;
    constructor(_version: V1, serviceSid: string, functionSid: string, sid: string);
    get functionVersionContent(): FunctionVersionContentListInstance;
    fetch(callback?: any): Promise<FunctionVersionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FunctionVersionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface FunctionVersionPayload extends TwilioResponsePayload {
    function_versions: FunctionVersionResource[];
}
interface FunctionVersionResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    function_sid?: string | null;
    path?: string | null;
    visibility?: FunctionVersionVisibility;
    date_created?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class FunctionVersionInstance {
    protected _version: V1;
    protected _solution: FunctionVersionContextSolution;
    protected _context?: FunctionVersionContext;
    constructor(_version: V1, payload: FunctionVersionResource, serviceSid: string, functionSid: string, sid?: string);
    /**
     * The unique string that identifies the Function Version resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the Function Version resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Service that the Function Version resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The SID of the Function resource that is the parent of the Function Version resource
     */
    functionSid?: string | null;
    /**
     * The URL-friendly string by which the Function Version resource can be referenced
     */
    path?: string | null;
    visibility?: FunctionVersionVisibility;
    /**
     * The ISO 8601 date and time in GMT when the Function Version resource was created
     */
    dateCreated?: Date | null;
    /**
     * The absolute URL of the Function Version resource
     */
    url?: string | null;
    links?: object | null;
    private get _proxy();
    /**
     * Fetch a FunctionVersionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FunctionVersionInstance
     */
    fetch(callback?: (error: Error | null, item?: FunctionVersionInstance) => any): Promise<FunctionVersionInstance>;
    /**
     * Access the functionVersionContent.
     */
    functionVersionContent(): FunctionVersionContentListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        functionSid: string | null | undefined;
        path: string | null | undefined;
        visibility: FunctionVersionVisibility | undefined;
        dateCreated: Date | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FunctionVersionListInstance {
    (sid: string): FunctionVersionContext;
    get(sid: string): FunctionVersionContext;
    /**
     * Streams FunctionVersionInstance records from the API.
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
    each(callback?: (item: FunctionVersionInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams FunctionVersionInstance records from the API.
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
     * @param { FunctionVersionListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: FunctionVersionListInstanceEachOptions, callback?: (item: FunctionVersionInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of FunctionVersionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: FunctionVersionPage) => any): Promise<FunctionVersionPage>;
    /**
     * Retrieve a single target page of FunctionVersionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: FunctionVersionPage) => any): Promise<FunctionVersionPage>;
    getPage(params?: any, callback?: any): Promise<FunctionVersionPage>;
    /**
     * Lists FunctionVersionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: FunctionVersionInstance[]) => any): Promise<FunctionVersionInstance[]>;
    /**
     * Lists FunctionVersionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FunctionVersionListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: FunctionVersionListInstanceOptions, callback?: (error: Error | null, items: FunctionVersionInstance[]) => any): Promise<FunctionVersionInstance[]>;
    list(params?: any, callback?: any): Promise<FunctionVersionInstance[]>;
    /**
     * Retrieve a single page of FunctionVersionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: FunctionVersionPage) => any): Promise<FunctionVersionPage>;
    /**
     * Retrieve a single page of FunctionVersionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FunctionVersionListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: FunctionVersionListInstancePageOptions, callback?: (error: Error | null, items: FunctionVersionPage) => any): Promise<FunctionVersionPage>;
    page(params?: any, callback?: any): Promise<FunctionVersionPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FunctionVersionSolution {
    serviceSid?: string;
    functionSid?: string;
}
export declare function FunctionVersionListInstance(version: V1, serviceSid: string, functionSid: string): FunctionVersionListInstance;
export declare class FunctionVersionPage extends Page<V1, FunctionVersionPayload, FunctionVersionResource, FunctionVersionInstance> {
    /**
     * Initialize the FunctionVersionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: FunctionVersionSolution);
    /**
     * Build an instance of FunctionVersionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: FunctionVersionResource): FunctionVersionInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
