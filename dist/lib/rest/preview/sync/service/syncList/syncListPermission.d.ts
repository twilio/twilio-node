/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import Sync from "../../../Sync";
/**
 * Options to pass to update a SyncListPermissionInstance
 *
 * @property { boolean } read Boolean flag specifying whether the identity can read the Sync List.
 * @property { boolean } write Boolean flag specifying whether the identity can create, update and delete Items of the Sync List.
 * @property { boolean } manage Boolean flag specifying whether the identity can delete the Sync List.
 */
export interface SyncListPermissionContextUpdateOptions {
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
export interface SyncListPermissionListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: SyncListPermissionInstance, done: (err?: Error) => void) => void;
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
export interface SyncListPermissionListInstanceOptions {
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
export interface SyncListPermissionListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SyncListPermissionContext {
    /**
     * Remove a SyncListPermissionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SyncListPermissionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListPermissionInstance
     */
    fetch(callback?: (error: Error | null, item?: SyncListPermissionInstance) => any): Promise<SyncListPermissionInstance>;
    /**
     * Update a SyncListPermissionInstance
     *
     * @param { SyncListPermissionContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListPermissionInstance
     */
    update(params: SyncListPermissionContextUpdateOptions, callback?: (error: Error | null, item?: SyncListPermissionInstance) => any): Promise<SyncListPermissionInstance>;
    update(params: any, callback?: any): Promise<SyncListPermissionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SyncListPermissionContextSolution {
    serviceSid?: string;
    listSid?: string;
    identity?: string;
}
export declare class SyncListPermissionContextImpl implements SyncListPermissionContext {
    protected _version: Sync;
    protected _solution: SyncListPermissionContextSolution;
    protected _uri: string;
    constructor(_version: Sync, serviceSid: string, listSid: string, identity: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<SyncListPermissionInstance>;
    update(params: any, callback?: any): Promise<SyncListPermissionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SyncListPermissionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SyncListPermissionPayload extends TwilioResponsePayload {
    permissions: SyncListPermissionResource[];
}
interface SyncListPermissionResource {
    account_sid?: string | null;
    service_sid?: string | null;
    list_sid?: string | null;
    identity?: string | null;
    read?: boolean | null;
    write?: boolean | null;
    manage?: boolean | null;
    url?: string | null;
}
export declare class SyncListPermissionInstance {
    protected _version: Sync;
    protected _solution: SyncListPermissionContextSolution;
    protected _context?: SyncListPermissionContext;
    constructor(_version: Sync, payload: SyncListPermissionResource, serviceSid: string, listSid: string, identity?: string);
    /**
     * Twilio Account SID.
     */
    accountSid?: string | null;
    /**
     * Sync Service Instance SID.
     */
    serviceSid?: string | null;
    /**
     * Sync List SID.
     */
    listSid?: string | null;
    /**
     * Identity of the user to whom the Sync List Permission applies.
     */
    identity?: string | null;
    /**
     * Read access.
     */
    read?: boolean | null;
    /**
     * Write access.
     */
    write?: boolean | null;
    /**
     * Manage access.
     */
    manage?: boolean | null;
    /**
     * URL of this Sync List Permission.
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a SyncListPermissionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SyncListPermissionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListPermissionInstance
     */
    fetch(callback?: (error: Error | null, item?: SyncListPermissionInstance) => any): Promise<SyncListPermissionInstance>;
    /**
     * Update a SyncListPermissionInstance
     *
     * @param { SyncListPermissionContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListPermissionInstance
     */
    update(params: SyncListPermissionContextUpdateOptions, callback?: (error: Error | null, item?: SyncListPermissionInstance) => any): Promise<SyncListPermissionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        listSid: string | null | undefined;
        identity: string | null | undefined;
        read: boolean | null | undefined;
        write: boolean | null | undefined;
        manage: boolean | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SyncListPermissionListInstance {
    (identity: string): SyncListPermissionContext;
    get(identity: string): SyncListPermissionContext;
    /**
     * Streams SyncListPermissionInstance records from the API.
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
    each(callback?: (item: SyncListPermissionInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams SyncListPermissionInstance records from the API.
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
     * @param { SyncListPermissionListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: SyncListPermissionListInstanceEachOptions, callback?: (item: SyncListPermissionInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of SyncListPermissionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: SyncListPermissionPage) => any): Promise<SyncListPermissionPage>;
    /**
     * Retrieve a single target page of SyncListPermissionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: SyncListPermissionPage) => any): Promise<SyncListPermissionPage>;
    getPage(params?: any, callback?: any): Promise<SyncListPermissionPage>;
    /**
     * Lists SyncListPermissionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SyncListPermissionInstance[]) => any): Promise<SyncListPermissionInstance[]>;
    /**
     * Lists SyncListPermissionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SyncListPermissionListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: SyncListPermissionListInstanceOptions, callback?: (error: Error | null, items: SyncListPermissionInstance[]) => any): Promise<SyncListPermissionInstance[]>;
    list(params?: any, callback?: any): Promise<SyncListPermissionInstance[]>;
    /**
     * Retrieve a single page of SyncListPermissionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SyncListPermissionPage) => any): Promise<SyncListPermissionPage>;
    /**
     * Retrieve a single page of SyncListPermissionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SyncListPermissionListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: SyncListPermissionListInstancePageOptions, callback?: (error: Error | null, items: SyncListPermissionPage) => any): Promise<SyncListPermissionPage>;
    page(params?: any, callback?: any): Promise<SyncListPermissionPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SyncListPermissionSolution {
    serviceSid?: string;
    listSid?: string;
}
export declare function SyncListPermissionListInstance(version: Sync, serviceSid: string, listSid: string): SyncListPermissionListInstance;
export declare class SyncListPermissionPage extends Page<Sync, SyncListPermissionPayload, SyncListPermissionResource, SyncListPermissionInstance> {
    /**
     * Initialize the SyncListPermissionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Sync, response: Response<string>, solution: SyncListPermissionSolution);
    /**
     * Build an instance of SyncListPermissionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SyncListPermissionResource): SyncListPermissionInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
