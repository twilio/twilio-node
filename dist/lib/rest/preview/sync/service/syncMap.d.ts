/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import Sync from "../../Sync";
import { SyncMapItemListInstance } from "./syncMap/syncMapItem";
import { SyncMapPermissionListInstance } from "./syncMap/syncMapPermission";
/**
 * Options to pass to create a SyncMapInstance
 *
 * @property { string } [uniqueName]
 */
export interface SyncMapListInstanceCreateOptions {
    uniqueName?: string;
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
export interface SyncMapListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: SyncMapInstance, done: (err?: Error) => void) => void;
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
export interface SyncMapListInstanceOptions {
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
export interface SyncMapListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SyncMapContext {
    syncMapItems: SyncMapItemListInstance;
    syncMapPermissions: SyncMapPermissionListInstance;
    /**
     * Remove a SyncMapInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SyncMapInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncMapInstance
     */
    fetch(callback?: (error: Error | null, item?: SyncMapInstance) => any): Promise<SyncMapInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SyncMapContextSolution {
    serviceSid?: string;
    sid?: string;
}
export declare class SyncMapContextImpl implements SyncMapContext {
    protected _version: Sync;
    protected _solution: SyncMapContextSolution;
    protected _uri: string;
    protected _syncMapItems?: SyncMapItemListInstance;
    protected _syncMapPermissions?: SyncMapPermissionListInstance;
    constructor(_version: Sync, serviceSid: string, sid: string);
    get syncMapItems(): SyncMapItemListInstance;
    get syncMapPermissions(): SyncMapPermissionListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<SyncMapInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SyncMapContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SyncMapPayload extends TwilioResponsePayload {
    maps: SyncMapResource[];
}
interface SyncMapResource {
    sid?: string | null;
    unique_name?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    url?: string | null;
    links?: object | null;
    revision?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    created_by?: string | null;
}
export declare class SyncMapInstance {
    protected _version: Sync;
    protected _solution: SyncMapContextSolution;
    protected _context?: SyncMapContext;
    constructor(_version: Sync, payload: SyncMapResource, serviceSid: string, sid?: string);
    sid?: string | null;
    uniqueName?: string | null;
    accountSid?: string | null;
    serviceSid?: string | null;
    url?: string | null;
    links?: object | null;
    revision?: string | null;
    dateCreated?: Date | null;
    dateUpdated?: Date | null;
    createdBy?: string | null;
    private get _proxy();
    /**
     * Remove a SyncMapInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SyncMapInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncMapInstance
     */
    fetch(callback?: (error: Error | null, item?: SyncMapInstance) => any): Promise<SyncMapInstance>;
    /**
     * Access the syncMapItems.
     */
    syncMapItems(): SyncMapItemListInstance;
    /**
     * Access the syncMapPermissions.
     */
    syncMapPermissions(): SyncMapPermissionListInstance;
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
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        createdBy: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SyncMapListInstance {
    (sid: string): SyncMapContext;
    get(sid: string): SyncMapContext;
    /**
     * Create a SyncMapInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncMapInstance
     */
    create(callback?: (error: Error | null, item?: SyncMapInstance) => any): Promise<SyncMapInstance>;
    /**
     * Create a SyncMapInstance
     *
     * @param { SyncMapListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncMapInstance
     */
    create(params: SyncMapListInstanceCreateOptions, callback?: (error: Error | null, item?: SyncMapInstance) => any): Promise<SyncMapInstance>;
    create(params?: any, callback?: any): Promise<SyncMapInstance>;
    /**
     * Streams SyncMapInstance records from the API.
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
    each(callback?: (item: SyncMapInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams SyncMapInstance records from the API.
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
     * @param { SyncMapListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: SyncMapListInstanceEachOptions, callback?: (item: SyncMapInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of SyncMapInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: SyncMapPage) => any): Promise<SyncMapPage>;
    /**
     * Retrieve a single target page of SyncMapInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: SyncMapPage) => any): Promise<SyncMapPage>;
    getPage(params?: any, callback?: any): Promise<SyncMapPage>;
    /**
     * Lists SyncMapInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SyncMapInstance[]) => any): Promise<SyncMapInstance[]>;
    /**
     * Lists SyncMapInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SyncMapListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: SyncMapListInstanceOptions, callback?: (error: Error | null, items: SyncMapInstance[]) => any): Promise<SyncMapInstance[]>;
    list(params?: any, callback?: any): Promise<SyncMapInstance[]>;
    /**
     * Retrieve a single page of SyncMapInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SyncMapPage) => any): Promise<SyncMapPage>;
    /**
     * Retrieve a single page of SyncMapInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SyncMapListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: SyncMapListInstancePageOptions, callback?: (error: Error | null, items: SyncMapPage) => any): Promise<SyncMapPage>;
    page(params?: any, callback?: any): Promise<SyncMapPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SyncMapSolution {
    serviceSid?: string;
}
export declare function SyncMapListInstance(version: Sync, serviceSid: string): SyncMapListInstance;
export declare class SyncMapPage extends Page<Sync, SyncMapPayload, SyncMapResource, SyncMapInstance> {
    /**
     * Initialize the SyncMapPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Sync, response: Response<string>, solution: SyncMapSolution);
    /**
     * Build an instance of SyncMapInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SyncMapResource): SyncMapInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
