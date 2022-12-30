/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import Sync from "../../../Sync";
declare type SyncListItemQueryFromBoundType = "inclusive" | "exclusive";
declare type SyncListItemQueryResultOrder = "asc" | "desc";
/**
 * Options to pass to remove a SyncListItemInstance
 *
 * @property { string } [ifMatch] The If-Match HTTP request header
 */
export interface SyncListItemContextRemoveOptions {
    ifMatch?: string;
}
/**
 * Options to pass to update a SyncListItemInstance
 *
 * @property { any } data
 * @property { string } [ifMatch] The If-Match HTTP request header
 */
export interface SyncListItemContextUpdateOptions {
    data: any;
    ifMatch?: string;
}
/**
 * Options to pass to create a SyncListItemInstance
 *
 * @property { any } data
 */
export interface SyncListItemListInstanceCreateOptions {
    data: any;
}
/**
 * Options to pass to each
 *
 * @property { SyncListItemQueryResultOrder } [order]
 * @property { string } [from]
 * @property { SyncListItemQueryFromBoundType } [bounds]
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
export interface SyncListItemListInstanceEachOptions {
    order?: SyncListItemQueryResultOrder;
    from?: string;
    bounds?: SyncListItemQueryFromBoundType;
    pageSize?: number;
    callback?: (item: SyncListItemInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { SyncListItemQueryResultOrder } [order]
 * @property { string } [from]
 * @property { SyncListItemQueryFromBoundType } [bounds]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SyncListItemListInstanceOptions {
    order?: SyncListItemQueryResultOrder;
    from?: string;
    bounds?: SyncListItemQueryFromBoundType;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { SyncListItemQueryResultOrder } [order]
 * @property { string } [from]
 * @property { SyncListItemQueryFromBoundType } [bounds]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface SyncListItemListInstancePageOptions {
    order?: SyncListItemQueryResultOrder;
    from?: string;
    bounds?: SyncListItemQueryFromBoundType;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SyncListItemContext {
    /**
     * Remove a SyncListItemInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Remove a SyncListItemInstance
     *
     * @param { SyncListItemContextRemoveOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListItemInstance
     */
    remove(params: SyncListItemContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    remove(params?: any, callback?: any): Promise<boolean>;
    /**
     * Fetch a SyncListItemInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListItemInstance
     */
    fetch(callback?: (error: Error | null, item?: SyncListItemInstance) => any): Promise<SyncListItemInstance>;
    /**
     * Update a SyncListItemInstance
     *
     * @param { SyncListItemContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListItemInstance
     */
    update(params: SyncListItemContextUpdateOptions, callback?: (error: Error | null, item?: SyncListItemInstance) => any): Promise<SyncListItemInstance>;
    update(params: any, callback?: any): Promise<SyncListItemInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SyncListItemContextSolution {
    serviceSid?: string;
    listSid?: string;
    index?: number;
}
export declare class SyncListItemContextImpl implements SyncListItemContext {
    protected _version: Sync;
    protected _solution: SyncListItemContextSolution;
    protected _uri: string;
    constructor(_version: Sync, serviceSid: string, listSid: string, index: number);
    remove(params?: any, callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<SyncListItemInstance>;
    update(params: any, callback?: any): Promise<SyncListItemInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SyncListItemContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SyncListItemPayload extends TwilioResponsePayload {
    items: SyncListItemResource[];
}
interface SyncListItemResource {
    index?: number | null;
    account_sid?: string | null;
    service_sid?: string | null;
    list_sid?: string | null;
    url?: string | null;
    revision?: string | null;
    data?: any | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    created_by?: string | null;
}
export declare class SyncListItemInstance {
    protected _version: Sync;
    protected _solution: SyncListItemContextSolution;
    protected _context?: SyncListItemContext;
    constructor(_version: Sync, payload: SyncListItemResource, serviceSid: string, listSid: string, index?: number);
    index?: number | null;
    accountSid?: string | null;
    serviceSid?: string | null;
    listSid?: string | null;
    url?: string | null;
    revision?: string | null;
    data?: any | null;
    dateCreated?: Date | null;
    dateUpdated?: Date | null;
    createdBy?: string | null;
    private get _proxy();
    /**
     * Remove a SyncListItemInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Remove a SyncListItemInstance
     *
     * @param { SyncListItemContextRemoveOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListItemInstance
     */
    remove(params: SyncListItemContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SyncListItemInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListItemInstance
     */
    fetch(callback?: (error: Error | null, item?: SyncListItemInstance) => any): Promise<SyncListItemInstance>;
    /**
     * Update a SyncListItemInstance
     *
     * @param { SyncListItemContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListItemInstance
     */
    update(params: SyncListItemContextUpdateOptions, callback?: (error: Error | null, item?: SyncListItemInstance) => any): Promise<SyncListItemInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        index: number | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        listSid: string | null | undefined;
        url: string | null | undefined;
        revision: string | null | undefined;
        data: any;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        createdBy: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SyncListItemListInstance {
    (index: number): SyncListItemContext;
    get(index: number): SyncListItemContext;
    /**
     * Create a SyncListItemInstance
     *
     * @param { SyncListItemListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListItemInstance
     */
    create(params: SyncListItemListInstanceCreateOptions, callback?: (error: Error | null, item?: SyncListItemInstance) => any): Promise<SyncListItemInstance>;
    create(params: any, callback?: any): Promise<SyncListItemInstance>;
    /**
     * Streams SyncListItemInstance records from the API.
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
    each(callback?: (item: SyncListItemInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams SyncListItemInstance records from the API.
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
     * @param { SyncListItemListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: SyncListItemListInstanceEachOptions, callback?: (item: SyncListItemInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of SyncListItemInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: SyncListItemPage) => any): Promise<SyncListItemPage>;
    /**
     * Retrieve a single target page of SyncListItemInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: SyncListItemPage) => any): Promise<SyncListItemPage>;
    getPage(params?: any, callback?: any): Promise<SyncListItemPage>;
    /**
     * Lists SyncListItemInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SyncListItemInstance[]) => any): Promise<SyncListItemInstance[]>;
    /**
     * Lists SyncListItemInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SyncListItemListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: SyncListItemListInstanceOptions, callback?: (error: Error | null, items: SyncListItemInstance[]) => any): Promise<SyncListItemInstance[]>;
    list(params?: any, callback?: any): Promise<SyncListItemInstance[]>;
    /**
     * Retrieve a single page of SyncListItemInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SyncListItemPage) => any): Promise<SyncListItemPage>;
    /**
     * Retrieve a single page of SyncListItemInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SyncListItemListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: SyncListItemListInstancePageOptions, callback?: (error: Error | null, items: SyncListItemPage) => any): Promise<SyncListItemPage>;
    page(params?: any, callback?: any): Promise<SyncListItemPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SyncListItemSolution {
    serviceSid?: string;
    listSid?: string;
}
export declare function SyncListItemListInstance(version: Sync, serviceSid: string, listSid: string): SyncListItemListInstance;
export declare class SyncListItemPage extends Page<Sync, SyncListItemPayload, SyncListItemResource, SyncListItemInstance> {
    /**
     * Initialize the SyncListItemPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Sync, response: Response<string>, solution: SyncListItemSolution);
    /**
     * Build an instance of SyncListItemInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SyncListItemResource): SyncListItemInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
