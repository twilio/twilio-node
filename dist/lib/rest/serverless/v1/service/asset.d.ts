/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
import { AssetVersionListInstance } from "./asset/assetVersion";
/**
 * Options to pass to update a AssetInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the Asset resource. It can be a maximum of 255 characters.
 */
export interface AssetContextUpdateOptions {
    friendlyName: string;
}
/**
 * Options to pass to create a AssetInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the Asset resource. It can be a maximum of 255 characters.
 */
export interface AssetListInstanceCreateOptions {
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
export interface AssetListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: AssetInstance, done: (err?: Error) => void) => void;
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
export interface AssetListInstanceOptions {
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
export interface AssetListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface AssetContext {
    assetVersions: AssetVersionListInstance;
    /**
     * Remove a AssetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a AssetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssetInstance
     */
    fetch(callback?: (error: Error | null, item?: AssetInstance) => any): Promise<AssetInstance>;
    /**
     * Update a AssetInstance
     *
     * @param { AssetContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssetInstance
     */
    update(params: AssetContextUpdateOptions, callback?: (error: Error | null, item?: AssetInstance) => any): Promise<AssetInstance>;
    update(params: any, callback?: any): Promise<AssetInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AssetContextSolution {
    serviceSid?: string;
    sid?: string;
}
export declare class AssetContextImpl implements AssetContext {
    protected _version: V1;
    protected _solution: AssetContextSolution;
    protected _uri: string;
    protected _assetVersions?: AssetVersionListInstance;
    constructor(_version: V1, serviceSid: string, sid: string);
    get assetVersions(): AssetVersionListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<AssetInstance>;
    update(params: any, callback?: any): Promise<AssetInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AssetContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AssetPayload extends TwilioResponsePayload {
    assets: AssetResource[];
}
interface AssetResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    friendly_name?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class AssetInstance {
    protected _version: V1;
    protected _solution: AssetContextSolution;
    protected _context?: AssetContext;
    constructor(_version: V1, payload: AssetResource, serviceSid: string, sid?: string);
    /**
     * The unique string that identifies the Asset resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the Asset resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Service that the Asset resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The string that you assigned to describe the Asset resource
     */
    friendlyName?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the Asset resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the Asset resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the Asset resource
     */
    url?: string | null;
    /**
     * The URLs of the Asset resource\'s nested resources
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a AssetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a AssetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssetInstance
     */
    fetch(callback?: (error: Error | null, item?: AssetInstance) => any): Promise<AssetInstance>;
    /**
     * Update a AssetInstance
     *
     * @param { AssetContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssetInstance
     */
    update(params: AssetContextUpdateOptions, callback?: (error: Error | null, item?: AssetInstance) => any): Promise<AssetInstance>;
    /**
     * Access the assetVersions.
     */
    assetVersions(): AssetVersionListInstance;
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
export interface AssetListInstance {
    (sid: string): AssetContext;
    get(sid: string): AssetContext;
    /**
     * Create a AssetInstance
     *
     * @param { AssetListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssetInstance
     */
    create(params: AssetListInstanceCreateOptions, callback?: (error: Error | null, item?: AssetInstance) => any): Promise<AssetInstance>;
    create(params: any, callback?: any): Promise<AssetInstance>;
    /**
     * Streams AssetInstance records from the API.
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
    each(callback?: (item: AssetInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams AssetInstance records from the API.
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
     * @param { AssetListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: AssetListInstanceEachOptions, callback?: (item: AssetInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of AssetInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: AssetPage) => any): Promise<AssetPage>;
    /**
     * Retrieve a single target page of AssetInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: AssetPage) => any): Promise<AssetPage>;
    getPage(params?: any, callback?: any): Promise<AssetPage>;
    /**
     * Lists AssetInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: AssetInstance[]) => any): Promise<AssetInstance[]>;
    /**
     * Lists AssetInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AssetListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: AssetListInstanceOptions, callback?: (error: Error | null, items: AssetInstance[]) => any): Promise<AssetInstance[]>;
    list(params?: any, callback?: any): Promise<AssetInstance[]>;
    /**
     * Retrieve a single page of AssetInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: AssetPage) => any): Promise<AssetPage>;
    /**
     * Retrieve a single page of AssetInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AssetListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: AssetListInstancePageOptions, callback?: (error: Error | null, items: AssetPage) => any): Promise<AssetPage>;
    page(params?: any, callback?: any): Promise<AssetPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AssetSolution {
    serviceSid?: string;
}
export declare function AssetListInstance(version: V1, serviceSid: string): AssetListInstance;
export declare class AssetPage extends Page<V1, AssetPayload, AssetResource, AssetInstance> {
    /**
     * Initialize the AssetPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: AssetSolution);
    /**
     * Build an instance of AssetInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: AssetResource): AssetInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
