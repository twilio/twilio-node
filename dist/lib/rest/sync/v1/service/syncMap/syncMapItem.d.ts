/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
declare type SyncMapItemQueryFromBoundType = "inclusive" | "exclusive";
declare type SyncMapItemQueryResultOrder = "asc" | "desc";
/**
 * Options to pass to remove a SyncMapItemInstance
 *
 * @property { string } [ifMatch] If provided, applies this mutation if (and only if) the “revision” field of this [map item] matches the provided value. This matches the semantics of (and is implemented with) the HTTP [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match).
 */
export interface SyncMapItemContextRemoveOptions {
    ifMatch?: string;
}
/**
 * Options to pass to update a SyncMapItemInstance
 *
 * @property { string } [ifMatch] If provided, applies this mutation if (and only if) the “revision” field of this [map item] matches the provided value. This matches the semantics of (and is implemented with) the HTTP [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match).
 * @property { any } [data] A JSON string that represents an arbitrary, schema-less object that the Map Item stores. Can be up to 16 KiB in length.
 * @property { number } [ttl] An alias for `item_ttl`. If both parameters are provided, this value is ignored.
 * @property { number } [itemTtl] How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Map Item expires (time-to-live) and is deleted.
 * @property { number } [collectionTtl] How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Map Item\\\'s parent Sync Map expires (time-to-live) and is deleted. This parameter can only be used when the Map Item\\\'s `data` or `ttl` is updated in the same request.
 */
export interface SyncMapItemContextUpdateOptions {
    ifMatch?: string;
    data?: any;
    ttl?: number;
    itemTtl?: number;
    collectionTtl?: number;
}
/**
 * Options to pass to create a SyncMapItemInstance
 *
 * @property { string } key The unique, user-defined key for the Map Item. Can be up to 320 characters long.
 * @property { any } data A JSON string that represents an arbitrary, schema-less object that the Map Item stores. Can be up to 16 KiB in length.
 * @property { number } [ttl] An alias for `item_ttl`. If both parameters are provided, this value is ignored.
 * @property { number } [itemTtl] How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Map Item expires (time-to-live) and is deleted.
 * @property { number } [collectionTtl] How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Map Item\\\'s parent Sync Map expires (time-to-live) and is deleted.
 */
export interface SyncMapItemListInstanceCreateOptions {
    key: string;
    data: any;
    ttl?: number;
    itemTtl?: number;
    collectionTtl?: number;
}
/**
 * Options to pass to each
 *
 * @property { SyncMapItemQueryResultOrder } [order] How to order the Map Items returned by their `key` value. Can be: `asc` (ascending) or `desc` (descending) and the default is ascending. Map Items are [ordered lexicographically](https://en.wikipedia.org/wiki/Lexicographical_order) by Item key.
 * @property { string } [from] The `key` of the first Sync Map Item resource to read. See also `bounds`.
 * @property { SyncMapItemQueryFromBoundType } [bounds] Whether to include the Map Item referenced by the `from` parameter. Can be: `inclusive` to include the Map Item referenced by the `from` parameter or `exclusive` to start with the next Map Item. The default value is `inclusive`.
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
 * @property { SyncMapItemQueryResultOrder } [order] How to order the Map Items returned by their `key` value. Can be: `asc` (ascending) or `desc` (descending) and the default is ascending. Map Items are [ordered lexicographically](https://en.wikipedia.org/wiki/Lexicographical_order) by Item key.
 * @property { string } [from] The `key` of the first Sync Map Item resource to read. See also `bounds`.
 * @property { SyncMapItemQueryFromBoundType } [bounds] Whether to include the Map Item referenced by the `from` parameter. Can be: `inclusive` to include the Map Item referenced by the `from` parameter or `exclusive` to start with the next Map Item. The default value is `inclusive`.
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
 * @property { SyncMapItemQueryResultOrder } [order] How to order the Map Items returned by their `key` value. Can be: `asc` (ascending) or `desc` (descending) and the default is ascending. Map Items are [ordered lexicographically](https://en.wikipedia.org/wiki/Lexicographical_order) by Item key.
 * @property { string } [from] The `key` of the first Sync Map Item resource to read. See also `bounds`.
 * @property { SyncMapItemQueryFromBoundType } [bounds] Whether to include the Map Item referenced by the `from` parameter. Can be: `inclusive` to include the Map Item referenced by the `from` parameter or `exclusive` to start with the next Map Item. The default value is `inclusive`.
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
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncMapItemInstance
     */
    update(callback?: (error: Error | null, item?: SyncMapItemInstance) => any): Promise<SyncMapItemInstance>;
    /**
     * Update a SyncMapItemInstance
     *
     * @param { SyncMapItemContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncMapItemInstance
     */
    update(params: SyncMapItemContextUpdateOptions, callback?: (error: Error | null, item?: SyncMapItemInstance) => any): Promise<SyncMapItemInstance>;
    update(params?: any, callback?: any): Promise<SyncMapItemInstance>;
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
    protected _version: V1;
    protected _solution: SyncMapItemContextSolution;
    protected _uri: string;
    constructor(_version: V1, serviceSid: string, mapSid: string, key: string);
    remove(params?: any, callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<SyncMapItemInstance>;
    update(params?: any, callback?: any): Promise<SyncMapItemInstance>;
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
    date_expires?: Date | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    created_by?: string | null;
}
export declare class SyncMapItemInstance {
    protected _version: V1;
    protected _solution: SyncMapItemContextSolution;
    protected _context?: SyncMapItemContext;
    constructor(_version: V1, payload: SyncMapItemResource, serviceSid: string, mapSid: string, key?: string);
    /**
     * The unique, user-defined key for the Map Item
     */
    key?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Sync Service that the resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The SID of the Sync Map that contains the Map Item
     */
    mapSid?: string | null;
    /**
     * The absolute URL of the Map Item resource
     */
    url?: string | null;
    /**
     * The current revision of the Map Item, represented as a string
     */
    revision?: string | null;
    /**
     * An arbitrary, schema-less object that the Map Item stores
     */
    data?: any | null;
    /**
     * The ISO 8601 date and time in GMT when the Map Item expires
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
     * The identity of the Map Item\'s creator
     */
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
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncMapItemInstance
     */
    update(callback?: (error: Error | null, item?: SyncMapItemInstance) => any): Promise<SyncMapItemInstance>;
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
        dateExpires: Date | null | undefined;
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
export declare function SyncMapItemListInstance(version: V1, serviceSid: string, mapSid: string): SyncMapItemListInstance;
export declare class SyncMapItemPage extends Page<V1, SyncMapItemPayload, SyncMapItemResource, SyncMapItemInstance> {
    /**
     * Initialize the SyncMapItemPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SyncMapItemSolution);
    /**
     * Build an instance of SyncMapItemInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SyncMapItemResource): SyncMapItemInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
