/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
declare type SyncListItemQueryFromBoundType = "inclusive" | "exclusive";
declare type SyncListItemQueryResultOrder = "asc" | "desc";
/**
 * Options to pass to remove a SyncListItemInstance
 *
 * @property { string } [ifMatch] If provided, applies this mutation if (and only if) the “revision” field of this [map item] matches the provided value. This matches the semantics of (and is implemented with) the HTTP [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match).
 */
export interface SyncListItemContextRemoveOptions {
    ifMatch?: string;
}
/**
 * Options to pass to update a SyncListItemInstance
 *
 * @property { string } [ifMatch] If provided, applies this mutation if (and only if) the “revision” field of this [map item] matches the provided value. This matches the semantics of (and is implemented with) the HTTP [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match).
 * @property { any } [data] A JSON string that represents an arbitrary, schema-less object that the List Item stores. Can be up to 16 KiB in length.
 * @property { number } [ttl] An alias for `item_ttl`. If both parameters are provided, this value is ignored.
 * @property { number } [itemTtl] How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the List Item expires (time-to-live) and is deleted.
 * @property { number } [collectionTtl] How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the List Item\\\'s parent Sync List expires (time-to-live) and is deleted. This parameter can only be used when the List Item\\\'s `data` or `ttl` is updated in the same request.
 */
export interface SyncListItemContextUpdateOptions {
    ifMatch?: string;
    data?: any;
    ttl?: number;
    itemTtl?: number;
    collectionTtl?: number;
}
/**
 * Options to pass to create a SyncListItemInstance
 *
 * @property { any } data A JSON string that represents an arbitrary, schema-less object that the List Item stores. Can be up to 16 KiB in length.
 * @property { number } [ttl] An alias for `item_ttl`. If both parameters are provided, this value is ignored.
 * @property { number } [itemTtl] How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the List Item expires (time-to-live) and is deleted.
 * @property { number } [collectionTtl] How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the List Item\\\'s parent Sync List expires (time-to-live) and is deleted.
 */
export interface SyncListItemListInstanceCreateOptions {
    data: any;
    ttl?: number;
    itemTtl?: number;
    collectionTtl?: number;
}
/**
 * Options to pass to each
 *
 * @property { SyncListItemQueryResultOrder } [order] How to order the List Items returned by their `index` value. Can be: `asc` (ascending) or `desc` (descending) and the default is ascending.
 * @property { string } [from] The `index` of the first Sync List Item resource to read. See also `bounds`.
 * @property { SyncListItemQueryFromBoundType } [bounds] Whether to include the List Item referenced by the `from` parameter. Can be: `inclusive` to include the List Item referenced by the `from` parameter or `exclusive` to start with the next List Item. The default value is `inclusive`.
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
 * @property { SyncListItemQueryResultOrder } [order] How to order the List Items returned by their `index` value. Can be: `asc` (ascending) or `desc` (descending) and the default is ascending.
 * @property { string } [from] The `index` of the first Sync List Item resource to read. See also `bounds`.
 * @property { SyncListItemQueryFromBoundType } [bounds] Whether to include the List Item referenced by the `from` parameter. Can be: `inclusive` to include the List Item referenced by the `from` parameter or `exclusive` to start with the next List Item. The default value is `inclusive`.
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
 * @property { SyncListItemQueryResultOrder } [order] How to order the List Items returned by their `index` value. Can be: `asc` (ascending) or `desc` (descending) and the default is ascending.
 * @property { string } [from] The `index` of the first Sync List Item resource to read. See also `bounds`.
 * @property { SyncListItemQueryFromBoundType } [bounds] Whether to include the List Item referenced by the `from` parameter. Can be: `inclusive` to include the List Item referenced by the `from` parameter or `exclusive` to start with the next List Item. The default value is `inclusive`.
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
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListItemInstance
     */
    update(callback?: (error: Error | null, item?: SyncListItemInstance) => any): Promise<SyncListItemInstance>;
    /**
     * Update a SyncListItemInstance
     *
     * @param { SyncListItemContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListItemInstance
     */
    update(params: SyncListItemContextUpdateOptions, callback?: (error: Error | null, item?: SyncListItemInstance) => any): Promise<SyncListItemInstance>;
    update(params?: any, callback?: any): Promise<SyncListItemInstance>;
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
    protected _version: V1;
    protected _solution: SyncListItemContextSolution;
    protected _uri: string;
    constructor(_version: V1, serviceSid: string, listSid: string, index: number);
    remove(params?: any, callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<SyncListItemInstance>;
    update(params?: any, callback?: any): Promise<SyncListItemInstance>;
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
    date_expires?: Date | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    created_by?: string | null;
}
export declare class SyncListItemInstance {
    protected _version: V1;
    protected _solution: SyncListItemContextSolution;
    protected _context?: SyncListItemContext;
    constructor(_version: V1, payload: SyncListItemResource, serviceSid: string, listSid: string, index?: number);
    /**
     * The automatically generated index of the List Item
     */
    index?: number | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Sync Service that the resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The SID of the Sync List that contains the List Item
     */
    listSid?: string | null;
    /**
     * The absolute URL of the List Item resource
     */
    url?: string | null;
    /**
     * The current revision of the item, represented as a string
     */
    revision?: string | null;
    /**
     * An arbitrary, schema-less object that the List Item stores
     */
    data?: any | null;
    /**
     * The ISO 8601 date and time in GMT when the List Item expires
     */
    dateExpires?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The identity of the List Item\'s creator
     */
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
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListItemInstance
     */
    update(callback?: (error: Error | null, item?: SyncListItemInstance) => any): Promise<SyncListItemInstance>;
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
        dateExpires: Date | null | undefined;
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
export declare function SyncListItemListInstance(version: V1, serviceSid: string, listSid: string): SyncListItemListInstance;
export declare class SyncListItemPage extends Page<V1, SyncListItemPayload, SyncListItemResource, SyncListItemInstance> {
    /**
     * Initialize the SyncListItemPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SyncListItemSolution);
    /**
     * Build an instance of SyncListItemInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SyncListItemResource): SyncListItemInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
