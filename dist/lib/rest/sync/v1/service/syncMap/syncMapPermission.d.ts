/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
/**
 * Options to pass to update a SyncMapPermissionInstance
 *
 * @property { boolean } read Whether the identity can read the Sync Map and its Items. Default value is `false`.
 * @property { boolean } write Whether the identity can create, update, and delete Items in the Sync Map. Default value is `false`.
 * @property { boolean } manage Whether the identity can delete the Sync Map. Default value is `false`.
 */
export interface SyncMapPermissionContextUpdateOptions {
    read: boolean;
    write: boolean;
    manage: boolean;
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
export interface SyncMapPermissionListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: SyncMapPermissionInstance, done: (err?: Error) => void) => void;
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
export interface SyncMapPermissionListInstanceOptions {
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
export interface SyncMapPermissionListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SyncMapPermissionContext {
    /**
     * Remove a SyncMapPermissionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SyncMapPermissionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncMapPermissionInstance
     */
    fetch(callback?: (error: Error | null, item?: SyncMapPermissionInstance) => any): Promise<SyncMapPermissionInstance>;
    /**
     * Update a SyncMapPermissionInstance
     *
     * @param { SyncMapPermissionContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncMapPermissionInstance
     */
    update(params: SyncMapPermissionContextUpdateOptions, callback?: (error: Error | null, item?: SyncMapPermissionInstance) => any): Promise<SyncMapPermissionInstance>;
    update(params: any, callback?: any): Promise<SyncMapPermissionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SyncMapPermissionContextSolution {
    serviceSid?: string;
    mapSid?: string;
    identity?: string;
}
export declare class SyncMapPermissionContextImpl implements SyncMapPermissionContext {
    protected _version: V1;
    protected _solution: SyncMapPermissionContextSolution;
    protected _uri: string;
    constructor(_version: V1, serviceSid: string, mapSid: string, identity: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<SyncMapPermissionInstance>;
    update(params: any, callback?: any): Promise<SyncMapPermissionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SyncMapPermissionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SyncMapPermissionPayload extends TwilioResponsePayload {
    permissions: SyncMapPermissionResource[];
}
interface SyncMapPermissionResource {
    account_sid?: string | null;
    service_sid?: string | null;
    map_sid?: string | null;
    identity?: string | null;
    read?: boolean | null;
    write?: boolean | null;
    manage?: boolean | null;
    url?: string | null;
}
export declare class SyncMapPermissionInstance {
    protected _version: V1;
    protected _solution: SyncMapPermissionContextSolution;
    protected _context?: SyncMapPermissionContext;
    constructor(_version: V1, payload: SyncMapPermissionResource, serviceSid: string, mapSid: string, identity?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Sync Service that the resource is associated with
     */
    serviceSid?: string | null;
    /**
     * Sync Map SID
     */
    mapSid?: string | null;
    /**
     * The identity of the user to whom the Sync Document Permission applies
     */
    identity?: string | null;
    /**
     * Read access
     */
    read?: boolean | null;
    /**
     * Write access
     */
    write?: boolean | null;
    /**
     * Manage access
     */
    manage?: boolean | null;
    /**
     * The absolute URL of the Sync Map Permission resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a SyncMapPermissionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SyncMapPermissionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncMapPermissionInstance
     */
    fetch(callback?: (error: Error | null, item?: SyncMapPermissionInstance) => any): Promise<SyncMapPermissionInstance>;
    /**
     * Update a SyncMapPermissionInstance
     *
     * @param { SyncMapPermissionContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncMapPermissionInstance
     */
    update(params: SyncMapPermissionContextUpdateOptions, callback?: (error: Error | null, item?: SyncMapPermissionInstance) => any): Promise<SyncMapPermissionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        mapSid: string | null | undefined;
        identity: string | null | undefined;
        read: boolean | null | undefined;
        write: boolean | null | undefined;
        manage: boolean | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SyncMapPermissionListInstance {
    (identity: string): SyncMapPermissionContext;
    get(identity: string): SyncMapPermissionContext;
    /**
     * Streams SyncMapPermissionInstance records from the API.
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
    each(callback?: (item: SyncMapPermissionInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams SyncMapPermissionInstance records from the API.
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
     * @param { SyncMapPermissionListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: SyncMapPermissionListInstanceEachOptions, callback?: (item: SyncMapPermissionInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of SyncMapPermissionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: SyncMapPermissionPage) => any): Promise<SyncMapPermissionPage>;
    /**
     * Retrieve a single target page of SyncMapPermissionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: SyncMapPermissionPage) => any): Promise<SyncMapPermissionPage>;
    getPage(params?: any, callback?: any): Promise<SyncMapPermissionPage>;
    /**
     * Lists SyncMapPermissionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SyncMapPermissionInstance[]) => any): Promise<SyncMapPermissionInstance[]>;
    /**
     * Lists SyncMapPermissionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SyncMapPermissionListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: SyncMapPermissionListInstanceOptions, callback?: (error: Error | null, items: SyncMapPermissionInstance[]) => any): Promise<SyncMapPermissionInstance[]>;
    list(params?: any, callback?: any): Promise<SyncMapPermissionInstance[]>;
    /**
     * Retrieve a single page of SyncMapPermissionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SyncMapPermissionPage) => any): Promise<SyncMapPermissionPage>;
    /**
     * Retrieve a single page of SyncMapPermissionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SyncMapPermissionListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: SyncMapPermissionListInstancePageOptions, callback?: (error: Error | null, items: SyncMapPermissionPage) => any): Promise<SyncMapPermissionPage>;
    page(params?: any, callback?: any): Promise<SyncMapPermissionPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SyncMapPermissionSolution {
    serviceSid?: string;
    mapSid?: string;
}
export declare function SyncMapPermissionListInstance(version: V1, serviceSid: string, mapSid: string): SyncMapPermissionListInstance;
export declare class SyncMapPermissionPage extends Page<V1, SyncMapPermissionPayload, SyncMapPermissionResource, SyncMapPermissionInstance> {
    /**
     * Initialize the SyncMapPermissionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SyncMapPermissionSolution);
    /**
     * Build an instance of SyncMapPermissionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SyncMapPermissionResource): SyncMapPermissionInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
