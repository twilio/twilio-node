/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
import { SyncListItemListInstance } from "./syncList/syncListItem";
import { SyncListPermissionListInstance } from "./syncList/syncListPermission";
/**
 * Options to pass to update a SyncListInstance
 *
 * @property { number } [ttl] An alias for `collection_ttl`. If both are provided, this value is ignored.
 * @property { number } [collectionTtl] How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Sync List expires (time-to-live) and is deleted.
 */
export interface SyncListContextUpdateOptions {
    ttl?: number;
    collectionTtl?: number;
}
/**
 * Options to pass to create a SyncListInstance
 *
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. This value must be unique within its Service and it can be up to 320 characters long. The `unique_name` value can be used as an alternative to the `sid` in the URL path to address the resource.
 * @property { number } [ttl] Alias for collection_ttl. If both are provided, this value is ignored.
 * @property { number } [collectionTtl] How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Sync List expires (time-to-live) and is deleted.
 */
export interface SyncListListInstanceCreateOptions {
    uniqueName?: string;
    ttl?: number;
    collectionTtl?: number;
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
export interface SyncListListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: SyncListInstance, done: (err?: Error) => void) => void;
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
export interface SyncListListInstanceOptions {
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
export interface SyncListListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SyncListContext {
    syncListItems: SyncListItemListInstance;
    syncListPermissions: SyncListPermissionListInstance;
    /**
     * Remove a SyncListInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SyncListInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListInstance
     */
    fetch(callback?: (error: Error | null, item?: SyncListInstance) => any): Promise<SyncListInstance>;
    /**
     * Update a SyncListInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListInstance
     */
    update(callback?: (error: Error | null, item?: SyncListInstance) => any): Promise<SyncListInstance>;
    /**
     * Update a SyncListInstance
     *
     * @param { SyncListContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListInstance
     */
    update(params: SyncListContextUpdateOptions, callback?: (error: Error | null, item?: SyncListInstance) => any): Promise<SyncListInstance>;
    update(params?: any, callback?: any): Promise<SyncListInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SyncListContextSolution {
    serviceSid?: string;
    sid?: string;
}
export declare class SyncListContextImpl implements SyncListContext {
    protected _version: V1;
    protected _solution: SyncListContextSolution;
    protected _uri: string;
    protected _syncListItems?: SyncListItemListInstance;
    protected _syncListPermissions?: SyncListPermissionListInstance;
    constructor(_version: V1, serviceSid: string, sid: string);
    get syncListItems(): SyncListItemListInstance;
    get syncListPermissions(): SyncListPermissionListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<SyncListInstance>;
    update(params?: any, callback?: any): Promise<SyncListInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SyncListContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SyncListPayload extends TwilioResponsePayload {
    lists: SyncListResource[];
}
interface SyncListResource {
    sid?: string | null;
    unique_name?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    url?: string | null;
    links?: object | null;
    revision?: string | null;
    date_expires?: Date | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    created_by?: string | null;
}
export declare class SyncListInstance {
    protected _version: V1;
    protected _solution: SyncListContextSolution;
    protected _context?: SyncListContext;
    constructor(_version: V1, payload: SyncListResource, serviceSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * An application-defined string that uniquely identifies the resource
     */
    uniqueName?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Sync Service that the resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The absolute URL of the Sync List resource
     */
    url?: string | null;
    /**
     * The URLs of the Sync List\'s nested resources
     */
    links?: object | null;
    /**
     * The current revision of the Sync List, represented as a string
     */
    revision?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the Sync List expires
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
     * The identity of the Sync List\'s creator
     */
    createdBy?: string | null;
    private get _proxy();
    /**
     * Remove a SyncListInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SyncListInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListInstance
     */
    fetch(callback?: (error: Error | null, item?: SyncListInstance) => any): Promise<SyncListInstance>;
    /**
     * Update a SyncListInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListInstance
     */
    update(callback?: (error: Error | null, item?: SyncListInstance) => any): Promise<SyncListInstance>;
    /**
     * Update a SyncListInstance
     *
     * @param { SyncListContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListInstance
     */
    update(params: SyncListContextUpdateOptions, callback?: (error: Error | null, item?: SyncListInstance) => any): Promise<SyncListInstance>;
    /**
     * Access the syncListItems.
     */
    syncListItems(): SyncListItemListInstance;
    /**
     * Access the syncListPermissions.
     */
    syncListPermissions(): SyncListPermissionListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        uniqueName: string | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
        revision: string | null | undefined;
        dateExpires: Date | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        createdBy: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SyncListListInstance {
    (sid: string): SyncListContext;
    get(sid: string): SyncListContext;
    /**
     * Create a SyncListInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListInstance
     */
    create(callback?: (error: Error | null, item?: SyncListInstance) => any): Promise<SyncListInstance>;
    /**
     * Create a SyncListInstance
     *
     * @param { SyncListListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListInstance
     */
    create(params: SyncListListInstanceCreateOptions, callback?: (error: Error | null, item?: SyncListInstance) => any): Promise<SyncListInstance>;
    create(params?: any, callback?: any): Promise<SyncListInstance>;
    /**
     * Streams SyncListInstance records from the API.
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
    each(callback?: (item: SyncListInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams SyncListInstance records from the API.
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
     * @param { SyncListListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: SyncListListInstanceEachOptions, callback?: (item: SyncListInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of SyncListInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: SyncListPage) => any): Promise<SyncListPage>;
    /**
     * Retrieve a single target page of SyncListInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: SyncListPage) => any): Promise<SyncListPage>;
    getPage(params?: any, callback?: any): Promise<SyncListPage>;
    /**
     * Lists SyncListInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SyncListInstance[]) => any): Promise<SyncListInstance[]>;
    /**
     * Lists SyncListInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SyncListListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: SyncListListInstanceOptions, callback?: (error: Error | null, items: SyncListInstance[]) => any): Promise<SyncListInstance[]>;
    list(params?: any, callback?: any): Promise<SyncListInstance[]>;
    /**
     * Retrieve a single page of SyncListInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SyncListPage) => any): Promise<SyncListPage>;
    /**
     * Retrieve a single page of SyncListInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SyncListListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: SyncListListInstancePageOptions, callback?: (error: Error | null, items: SyncListPage) => any): Promise<SyncListPage>;
    page(params?: any, callback?: any): Promise<SyncListPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SyncListSolution {
    serviceSid?: string;
}
export declare function SyncListListInstance(version: V1, serviceSid: string): SyncListListInstance;
export declare class SyncListPage extends Page<V1, SyncListPayload, SyncListResource, SyncListInstance> {
    /**
     * Initialize the SyncListPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SyncListSolution);
    /**
     * Build an instance of SyncListInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SyncListResource): SyncListInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
