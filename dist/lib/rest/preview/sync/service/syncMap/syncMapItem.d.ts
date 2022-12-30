/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import Sync from "../../../Sync";
declare type SyncMapItemQueryFromBoundType = "inclusive" | "exclusive";
declare type SyncMapItemQueryResultOrder = "asc" | "desc";
/**
 * Options to pass to remove a SyncMapItemInstance
 *
 * @property { string } [ifMatch] The If-Match HTTP request header
 */
export interface SyncMapItemContextRemoveOptions {
    ifMatch?: string;
}
/**
 * Options to pass to update a SyncMapItemInstance
 *
 * @property { any } data
 * @property { string } [ifMatch] The If-Match HTTP request header
 */
export interface SyncMapItemContextUpdateOptions {
    data: any;
    ifMatch?: string;
}
/**
 * Options to pass to create a SyncMapItemInstance
 *
 * @property { string } key
 * @property { any } data
 */
export interface SyncMapItemListInstanceCreateOptions {
    key: string;
    data: any;
}
/**
 * Options to pass to each
 *
 * @property { SyncMapItemQueryResultOrder } [order]
 * @property { string } [from]
 * @property { SyncMapItemQueryFromBoundType } [bounds]
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
export interface SyncMapItemListInstanceEachOptions {
    order?: SyncMapItemQueryResultOrder;
    from?: string;
    bounds?: SyncMapItemQueryFromBoundType;
    pageSize?: number;
    callback?: (item: SyncMapItemInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { SyncMapItemQueryResultOrder } [order]
 * @property { string } [from]
 * @property { SyncMapItemQueryFromBoundType } [bounds]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SyncMapItemListInstanceOptions {
    order?: SyncMapItemQueryResultOrder;
    from?: string;
    bounds?: SyncMapItemQueryFromBoundType;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { SyncMapItemQueryResultOrder } [order]
 * @property { string } [from]
 * @property { SyncMapItemQueryFromBoundType } [bounds]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface SyncMapItemListInstancePageOptions {
    order?: SyncMapItemQueryResultOrder;
    from?: string;
    bounds?: SyncMapItemQueryFromBoundType;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SyncMapItemContext {
    /**
     * Remove a SyncMapItemInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Remove a SyncMapItemInstance
     *
     * @param { SyncMapItemContextRemoveOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncMapItemInstance
     */
    remove(params: SyncMapItemContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    remove(params?: any, callback?: any): Promise<boolean>;
    /**
     * Fetch a SyncMapItemInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncMapItemInstance
     */
    fetch(callback?: (error: Error | null, item?: SyncMapItemInstance) => any): Promise<SyncMapItemInstance>;
    /**
     * Update a SyncMapItemInstance
     *
     * @param { SyncMapItemContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncMapItemInstance
     */
    update(params: SyncMapItemContextUpdateOptions, callback?: (error: Error | null, item?: SyncMapItemInstance) => any): Promise<SyncMapItemInstance>;
    update(params: any, callback?: any): Promise<SyncMapItemInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SyncMapItemContextSolution {
    serviceSid?: string;
    mapSid?: string;
    key?: string;
}
export declare class SyncMapItemContextImpl implements SyncMapItemContext {
    protected _version: Sync;
    protected _solution: SyncMapItemContextSolution;
    protected _uri: string;
    constructor(_version: Sync, serviceSid: string, mapSid: string, key: string);
    remove(params?: any, callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<SyncMapItemInstance>;
    update(params: any, callback?: any): Promise<SyncMapItemInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SyncMapItemContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SyncMapItemPayload extends TwilioResponsePayload {
    items: SyncMapItemResource[];
}
interface SyncMapItemResource {
    key?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    map_sid?: string | null;
    url?: string | null;
    revision?: string | null;
    data?: any | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    created_by?: string | null;
}
export declare class SyncMapItemInstance {
    protected _version: Sync;
    protected _solution: SyncMapItemContextSolution;
    protected _context?: SyncMapItemContext;
    constructor(_version: Sync, payload: SyncMapItemResource, serviceSid: string, mapSid: string, key?: string);
    key?: string | null;
    accountSid?: string | null;
    serviceSid?: string | null;
    mapSid?: string | null;
    url?: string | null;
    revision?: string | null;
    data?: any | null;
    dateCreated?: Date | null;
    dateUpdated?: Date | null;
    createdBy?: string | null;
    private get _proxy();
    /**
     * Remove a SyncMapItemInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Remove a SyncMapItemInstance
     *
     * @param { SyncMapItemContextRemoveOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncMapItemInstance
     */
    remove(params: SyncMapItemContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SyncMapItemInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncMapItemInstance
     */
    fetch(callback?: (error: Error | null, item?: SyncMapItemInstance) => any): Promise<SyncMapItemInstance>;
    /**
     * Update a SyncMapItemInstance
     *
     * @param { SyncMapItemContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncMapItemInstance
     */
    update(params: SyncMapItemContextUpdateOptions, callback?: (error: Error | null, item?: SyncMapItemInstance) => any): Promise<SyncMapItemInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        key: string | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        mapSid: string | null | undefined;
        url: string | null | undefined;
        revision: string | null | undefined;
        data: any;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        createdBy: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SyncMapItemListInstance {
    (key: string): SyncMapItemContext;
    get(key: string): SyncMapItemContext;
    /**
     * Create a SyncMapItemInstance
     *
     * @param { SyncMapItemListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncMapItemInstance
     */
    create(params: SyncMapItemListInstanceCreateOptions, callback?: (error: Error | null, item?: SyncMapItemInstance) => any): Promise<SyncMapItemInstance>;
    create(params: any, callback?: any): Promise<SyncMapItemInstance>;
    /**
     * Streams SyncMapItemInstance records from the API.
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
    each(callback?: (item: SyncMapItemInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams SyncMapItemInstance records from the API.
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
     * @param { SyncMapItemListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: SyncMapItemListInstanceEachOptions, callback?: (item: SyncMapItemInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of SyncMapItemInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: SyncMapItemPage) => any): Promise<SyncMapItemPage>;
    /**
     * Retrieve a single target page of SyncMapItemInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: SyncMapItemPage) => any): Promise<SyncMapItemPage>;
    getPage(params?: any, callback?: any): Promise<SyncMapItemPage>;
    /**
     * Lists SyncMapItemInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SyncMapItemInstance[]) => any): Promise<SyncMapItemInstance[]>;
    /**
     * Lists SyncMapItemInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SyncMapItemListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: SyncMapItemListInstanceOptions, callback?: (error: Error | null, items: SyncMapItemInstance[]) => any): Promise<SyncMapItemInstance[]>;
    list(params?: any, callback?: any): Promise<SyncMapItemInstance[]>;
    /**
     * Retrieve a single page of SyncMapItemInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SyncMapItemPage) => any): Promise<SyncMapItemPage>;
    /**
     * Retrieve a single page of SyncMapItemInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SyncMapItemListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: SyncMapItemListInstancePageOptions, callback?: (error: Error | null, items: SyncMapItemPage) => any): Promise<SyncMapItemPage>;
    page(params?: any, callback?: any): Promise<SyncMapItemPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SyncMapItemSolution {
    serviceSid?: string;
    mapSid?: string;
}
export declare function SyncMapItemListInstance(version: Sync, serviceSid: string, mapSid: string): SyncMapItemListInstance;
export declare class SyncMapItemPage extends Page<Sync, SyncMapItemPayload, SyncMapItemResource, SyncMapItemInstance> {
    /**
     * Initialize the SyncMapItemPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Sync, response: Response<string>, solution: SyncMapItemSolution);
    /**
     * Build an instance of SyncMapItemInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SyncMapItemResource): SyncMapItemInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
