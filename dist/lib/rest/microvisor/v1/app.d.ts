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
export interface AppListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: AppInstance, done: (err?: Error) => void) => void;
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
export interface AppListInstanceOptions {
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
export interface AppListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface AppContext {
    /**
     * Remove a AppInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a AppInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AppInstance
     */
    fetch(callback?: (error: Error | null, item?: AppInstance) => any): Promise<AppInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AppContextSolution {
    sid?: string;
}
export declare class AppContextImpl implements AppContext {
    protected _version: V1;
    protected _solution: AppContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<AppInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AppContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AppPayload extends TwilioResponsePayload {
    apps: AppResource[];
}
interface AppResource {
    sid?: string | null;
    account_sid?: string | null;
    hash?: string | null;
    unique_name?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class AppInstance {
    protected _version: V1;
    protected _solution: AppContextSolution;
    protected _context?: AppContext;
    constructor(_version: V1, payload: AppResource, sid?: string);
    /**
     * A string that uniquely identifies this App.
     */
    sid?: string | null;
    /**
     * The Account SID.
     */
    accountSid?: string | null;
    /**
     * App manifest hash represented as hash_algorithm:hash_value.
     */
    hash?: string | null;
    /**
     * An developer-defined string that uniquely identifies the App.
     */
    uniqueName?: string | null;
    /**
     * The date that this App was created.
     */
    dateCreated?: Date | null;
    /**
     * The date that this App was last updated.
     */
    dateUpdated?: Date | null;
    /**
     * The URL of this resource.
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a AppInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a AppInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AppInstance
     */
    fetch(callback?: (error: Error | null, item?: AppInstance) => any): Promise<AppInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        hash: string | null | undefined;
        uniqueName: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AppListInstance {
    (sid: string): AppContext;
    get(sid: string): AppContext;
    /**
     * Streams AppInstance records from the API.
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
    each(callback?: (item: AppInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams AppInstance records from the API.
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
     * @param { AppListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: AppListInstanceEachOptions, callback?: (item: AppInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of AppInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: AppPage) => any): Promise<AppPage>;
    /**
     * Retrieve a single target page of AppInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: AppPage) => any): Promise<AppPage>;
    getPage(params?: any, callback?: any): Promise<AppPage>;
    /**
     * Lists AppInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: AppInstance[]) => any): Promise<AppInstance[]>;
    /**
     * Lists AppInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AppListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: AppListInstanceOptions, callback?: (error: Error | null, items: AppInstance[]) => any): Promise<AppInstance[]>;
    list(params?: any, callback?: any): Promise<AppInstance[]>;
    /**
     * Retrieve a single page of AppInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: AppPage) => any): Promise<AppPage>;
    /**
     * Retrieve a single page of AppInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AppListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: AppListInstancePageOptions, callback?: (error: Error | null, items: AppPage) => any): Promise<AppPage>;
    page(params?: any, callback?: any): Promise<AppPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AppSolution {
}
export declare function AppListInstance(version: V1): AppListInstance;
export declare class AppPage extends Page<V1, AppPayload, AppResource, AppInstance> {
    /**
     * Initialize the AppPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: AppSolution);
    /**
     * Build an instance of AppInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: AppResource): AppInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
