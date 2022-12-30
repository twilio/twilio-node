/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
declare type AssetVersionVisibility = "public" | "private" | "protected";
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
export interface AssetVersionListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: AssetVersionInstance, done: (err?: Error) => void) => void;
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
export interface AssetVersionListInstanceOptions {
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
export interface AssetVersionListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface AssetVersionContext {
    /**
     * Fetch a AssetVersionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssetVersionInstance
     */
    fetch(callback?: (error: Error | null, item?: AssetVersionInstance) => any): Promise<AssetVersionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AssetVersionContextSolution {
    serviceSid?: string;
    assetSid?: string;
    sid?: string;
}
export declare class AssetVersionContextImpl implements AssetVersionContext {
    protected _version: V1;
    protected _solution: AssetVersionContextSolution;
    protected _uri: string;
    constructor(_version: V1, serviceSid: string, assetSid: string, sid: string);
    fetch(callback?: any): Promise<AssetVersionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AssetVersionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AssetVersionPayload extends TwilioResponsePayload {
    asset_versions: AssetVersionResource[];
}
interface AssetVersionResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    asset_sid?: string | null;
    path?: string | null;
    visibility?: AssetVersionVisibility;
    date_created?: Date | null;
    url?: string | null;
}
export declare class AssetVersionInstance {
    protected _version: V1;
    protected _solution: AssetVersionContextSolution;
    protected _context?: AssetVersionContext;
    constructor(_version: V1, payload: AssetVersionResource, serviceSid: string, assetSid: string, sid?: string);
    /**
     * The unique string that identifies the Asset Version resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the Asset Version resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Service that the Asset Version resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The SID of the Asset resource that is the parent of the Asset Version
     */
    assetSid?: string | null;
    /**
     * The URL-friendly string by which the Asset Version can be referenced
     */
    path?: string | null;
    visibility?: AssetVersionVisibility;
    /**
     * The ISO 8601 date and time in GMT when the Asset Version resource was created
     */
    dateCreated?: Date | null;
    /**
     * The absolute URL of the Asset Version resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a AssetVersionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssetVersionInstance
     */
    fetch(callback?: (error: Error | null, item?: AssetVersionInstance) => any): Promise<AssetVersionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        assetSid: string | null | undefined;
        path: string | null | undefined;
        visibility: AssetVersionVisibility | undefined;
        dateCreated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AssetVersionListInstance {
    (sid: string): AssetVersionContext;
    get(sid: string): AssetVersionContext;
    /**
     * Streams AssetVersionInstance records from the API.
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
    each(callback?: (item: AssetVersionInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams AssetVersionInstance records from the API.
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
     * @param { AssetVersionListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: AssetVersionListInstanceEachOptions, callback?: (item: AssetVersionInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of AssetVersionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: AssetVersionPage) => any): Promise<AssetVersionPage>;
    /**
     * Retrieve a single target page of AssetVersionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: AssetVersionPage) => any): Promise<AssetVersionPage>;
    getPage(params?: any, callback?: any): Promise<AssetVersionPage>;
    /**
     * Lists AssetVersionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: AssetVersionInstance[]) => any): Promise<AssetVersionInstance[]>;
    /**
     * Lists AssetVersionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AssetVersionListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: AssetVersionListInstanceOptions, callback?: (error: Error | null, items: AssetVersionInstance[]) => any): Promise<AssetVersionInstance[]>;
    list(params?: any, callback?: any): Promise<AssetVersionInstance[]>;
    /**
     * Retrieve a single page of AssetVersionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: AssetVersionPage) => any): Promise<AssetVersionPage>;
    /**
     * Retrieve a single page of AssetVersionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AssetVersionListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: AssetVersionListInstancePageOptions, callback?: (error: Error | null, items: AssetVersionPage) => any): Promise<AssetVersionPage>;
    page(params?: any, callback?: any): Promise<AssetVersionPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AssetVersionSolution {
    serviceSid?: string;
    assetSid?: string;
}
export declare function AssetVersionListInstance(version: V1, serviceSid: string, assetSid: string): AssetVersionListInstance;
export declare class AssetVersionPage extends Page<V1, AssetVersionPayload, AssetVersionResource, AssetVersionInstance> {
    /**
     * Initialize the AssetVersionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: AssetVersionSolution);
    /**
     * Build an instance of AssetVersionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: AssetVersionResource): AssetVersionInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
