/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { ConnectionPolicyTargetListInstance } from "./connectionPolicy/connectionPolicyTarget";
/**
 * Options to pass to update a ConnectionPolicyInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
 */
export interface ConnectionPolicyContextUpdateOptions {
    friendlyName?: string;
}
/**
 * Options to pass to create a ConnectionPolicyInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
 */
export interface ConnectionPolicyListInstanceCreateOptions {
    friendlyName?: string;
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
export interface ConnectionPolicyListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: ConnectionPolicyInstance, done: (err?: Error) => void) => void;
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
export interface ConnectionPolicyListInstanceOptions {
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
export interface ConnectionPolicyListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ConnectionPolicyContext {
    targets: ConnectionPolicyTargetListInstance;
    /**
     * Remove a ConnectionPolicyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ConnectionPolicyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConnectionPolicyInstance
     */
    fetch(callback?: (error: Error | null, item?: ConnectionPolicyInstance) => any): Promise<ConnectionPolicyInstance>;
    /**
     * Update a ConnectionPolicyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConnectionPolicyInstance
     */
    update(callback?: (error: Error | null, item?: ConnectionPolicyInstance) => any): Promise<ConnectionPolicyInstance>;
    /**
     * Update a ConnectionPolicyInstance
     *
     * @param { ConnectionPolicyContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConnectionPolicyInstance
     */
    update(params: ConnectionPolicyContextUpdateOptions, callback?: (error: Error | null, item?: ConnectionPolicyInstance) => any): Promise<ConnectionPolicyInstance>;
    update(params?: any, callback?: any): Promise<ConnectionPolicyInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ConnectionPolicyContextSolution {
    sid?: string;
}
export declare class ConnectionPolicyContextImpl implements ConnectionPolicyContext {
    protected _version: V1;
    protected _solution: ConnectionPolicyContextSolution;
    protected _uri: string;
    protected _targets?: ConnectionPolicyTargetListInstance;
    constructor(_version: V1, sid: string);
    get targets(): ConnectionPolicyTargetListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<ConnectionPolicyInstance>;
    update(params?: any, callback?: any): Promise<ConnectionPolicyInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ConnectionPolicyContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ConnectionPolicyPayload extends TwilioResponsePayload {
    connection_policies: ConnectionPolicyResource[];
}
interface ConnectionPolicyResource {
    account_sid?: string | null;
    sid?: string | null;
    friendly_name?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class ConnectionPolicyInstance {
    protected _version: V1;
    protected _solution: ConnectionPolicyContextSolution;
    protected _context?: ConnectionPolicyContext;
    constructor(_version: V1, payload: ConnectionPolicyResource, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    /**
     * The URLs of related resources
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a ConnectionPolicyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ConnectionPolicyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConnectionPolicyInstance
     */
    fetch(callback?: (error: Error | null, item?: ConnectionPolicyInstance) => any): Promise<ConnectionPolicyInstance>;
    /**
     * Update a ConnectionPolicyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConnectionPolicyInstance
     */
    update(callback?: (error: Error | null, item?: ConnectionPolicyInstance) => any): Promise<ConnectionPolicyInstance>;
    /**
     * Update a ConnectionPolicyInstance
     *
     * @param { ConnectionPolicyContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConnectionPolicyInstance
     */
    update(params: ConnectionPolicyContextUpdateOptions, callback?: (error: Error | null, item?: ConnectionPolicyInstance) => any): Promise<ConnectionPolicyInstance>;
    /**
     * Access the targets.
     */
    targets(): ConnectionPolicyTargetListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        sid: string | null | undefined;
        friendlyName: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ConnectionPolicyListInstance {
    (sid: string): ConnectionPolicyContext;
    get(sid: string): ConnectionPolicyContext;
    /**
     * Create a ConnectionPolicyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConnectionPolicyInstance
     */
    create(callback?: (error: Error | null, item?: ConnectionPolicyInstance) => any): Promise<ConnectionPolicyInstance>;
    /**
     * Create a ConnectionPolicyInstance
     *
     * @param { ConnectionPolicyListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConnectionPolicyInstance
     */
    create(params: ConnectionPolicyListInstanceCreateOptions, callback?: (error: Error | null, item?: ConnectionPolicyInstance) => any): Promise<ConnectionPolicyInstance>;
    create(params?: any, callback?: any): Promise<ConnectionPolicyInstance>;
    /**
     * Streams ConnectionPolicyInstance records from the API.
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
    each(callback?: (item: ConnectionPolicyInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ConnectionPolicyInstance records from the API.
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
     * @param { ConnectionPolicyListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ConnectionPolicyListInstanceEachOptions, callback?: (item: ConnectionPolicyInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ConnectionPolicyInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ConnectionPolicyPage) => any): Promise<ConnectionPolicyPage>;
    /**
     * Retrieve a single target page of ConnectionPolicyInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ConnectionPolicyPage) => any): Promise<ConnectionPolicyPage>;
    getPage(params?: any, callback?: any): Promise<ConnectionPolicyPage>;
    /**
     * Lists ConnectionPolicyInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ConnectionPolicyInstance[]) => any): Promise<ConnectionPolicyInstance[]>;
    /**
     * Lists ConnectionPolicyInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ConnectionPolicyListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ConnectionPolicyListInstanceOptions, callback?: (error: Error | null, items: ConnectionPolicyInstance[]) => any): Promise<ConnectionPolicyInstance[]>;
    list(params?: any, callback?: any): Promise<ConnectionPolicyInstance[]>;
    /**
     * Retrieve a single page of ConnectionPolicyInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ConnectionPolicyPage) => any): Promise<ConnectionPolicyPage>;
    /**
     * Retrieve a single page of ConnectionPolicyInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ConnectionPolicyListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ConnectionPolicyListInstancePageOptions, callback?: (error: Error | null, items: ConnectionPolicyPage) => any): Promise<ConnectionPolicyPage>;
    page(params?: any, callback?: any): Promise<ConnectionPolicyPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ConnectionPolicySolution {
}
export declare function ConnectionPolicyListInstance(version: V1): ConnectionPolicyListInstance;
export declare class ConnectionPolicyPage extends Page<V1, ConnectionPolicyPayload, ConnectionPolicyResource, ConnectionPolicyInstance> {
    /**
     * Initialize the ConnectionPolicyPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: ConnectionPolicySolution);
    /**
     * Build an instance of ConnectionPolicyInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ConnectionPolicyResource): ConnectionPolicyInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
