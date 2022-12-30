/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
declare type CredentialPushService = "gcm" | "apn" | "fcm";
/**
 * Options to pass to update a CredentialInstance
 *
 * @property { string } [friendlyName]
 * @property { string } [certificate]
 * @property { string } [privateKey]
 * @property { boolean } [sandbox]
 * @property { string } [apiKey]
 * @property { string } [secret]
 */
export interface CredentialContextUpdateOptions {
    friendlyName?: string;
    certificate?: string;
    privateKey?: string;
    sandbox?: boolean;
    apiKey?: string;
    secret?: string;
}
/**
 * Options to pass to create a CredentialInstance
 *
 * @property { CredentialPushService } type
 * @property { string } [friendlyName]
 * @property { string } [certificate]
 * @property { string } [privateKey]
 * @property { boolean } [sandbox]
 * @property { string } [apiKey]
 * @property { string } [secret]
 */
export interface CredentialListInstanceCreateOptions {
    type: CredentialPushService;
    friendlyName?: string;
    certificate?: string;
    privateKey?: string;
    sandbox?: boolean;
    apiKey?: string;
    secret?: string;
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
export interface CredentialListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: CredentialInstance, done: (err?: Error) => void) => void;
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
export interface CredentialListInstanceOptions {
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
export interface CredentialListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface CredentialContext {
    /**
     * Remove a CredentialInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a CredentialInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CredentialInstance
     */
    fetch(callback?: (error: Error | null, item?: CredentialInstance) => any): Promise<CredentialInstance>;
    /**
     * Update a CredentialInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CredentialInstance
     */
    update(callback?: (error: Error | null, item?: CredentialInstance) => any): Promise<CredentialInstance>;
    /**
     * Update a CredentialInstance
     *
     * @param { CredentialContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CredentialInstance
     */
    update(params: CredentialContextUpdateOptions, callback?: (error: Error | null, item?: CredentialInstance) => any): Promise<CredentialInstance>;
    update(params?: any, callback?: any): Promise<CredentialInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CredentialContextSolution {
    sid?: string;
}
export declare class CredentialContextImpl implements CredentialContext {
    protected _version: V2;
    protected _solution: CredentialContextSolution;
    protected _uri: string;
    constructor(_version: V2, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<CredentialInstance>;
    update(params?: any, callback?: any): Promise<CredentialInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): CredentialContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface CredentialPayload extends TwilioResponsePayload {
    credentials: CredentialResource[];
}
interface CredentialResource {
    sid?: string | null;
    account_sid?: string | null;
    friendly_name?: string | null;
    type?: CredentialPushService;
    sandbox?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class CredentialInstance {
    protected _version: V2;
    protected _solution: CredentialContextSolution;
    protected _context?: CredentialContext;
    constructor(_version: V2, payload: CredentialResource, sid?: string);
    sid?: string | null;
    accountSid?: string | null;
    friendlyName?: string | null;
    type?: CredentialPushService;
    sandbox?: string | null;
    dateCreated?: Date | null;
    dateUpdated?: Date | null;
    url?: string | null;
    private get _proxy();
    /**
     * Remove a CredentialInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a CredentialInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CredentialInstance
     */
    fetch(callback?: (error: Error | null, item?: CredentialInstance) => any): Promise<CredentialInstance>;
    /**
     * Update a CredentialInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CredentialInstance
     */
    update(callback?: (error: Error | null, item?: CredentialInstance) => any): Promise<CredentialInstance>;
    /**
     * Update a CredentialInstance
     *
     * @param { CredentialContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CredentialInstance
     */
    update(params: CredentialContextUpdateOptions, callback?: (error: Error | null, item?: CredentialInstance) => any): Promise<CredentialInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        friendlyName: string | null | undefined;
        type: CredentialPushService | undefined;
        sandbox: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface CredentialListInstance {
    (sid: string): CredentialContext;
    get(sid: string): CredentialContext;
    /**
     * Create a CredentialInstance
     *
     * @param { CredentialListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CredentialInstance
     */
    create(params: CredentialListInstanceCreateOptions, callback?: (error: Error | null, item?: CredentialInstance) => any): Promise<CredentialInstance>;
    create(params: any, callback?: any): Promise<CredentialInstance>;
    /**
     * Streams CredentialInstance records from the API.
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
    each(callback?: (item: CredentialInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams CredentialInstance records from the API.
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
     * @param { CredentialListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: CredentialListInstanceEachOptions, callback?: (item: CredentialInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of CredentialInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: CredentialPage) => any): Promise<CredentialPage>;
    /**
     * Retrieve a single target page of CredentialInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: CredentialPage) => any): Promise<CredentialPage>;
    getPage(params?: any, callback?: any): Promise<CredentialPage>;
    /**
     * Lists CredentialInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: CredentialInstance[]) => any): Promise<CredentialInstance[]>;
    /**
     * Lists CredentialInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CredentialListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: CredentialListInstanceOptions, callback?: (error: Error | null, items: CredentialInstance[]) => any): Promise<CredentialInstance[]>;
    list(params?: any, callback?: any): Promise<CredentialInstance[]>;
    /**
     * Retrieve a single page of CredentialInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: CredentialPage) => any): Promise<CredentialPage>;
    /**
     * Retrieve a single page of CredentialInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CredentialListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: CredentialListInstancePageOptions, callback?: (error: Error | null, items: CredentialPage) => any): Promise<CredentialPage>;
    page(params?: any, callback?: any): Promise<CredentialPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CredentialSolution {
}
export declare function CredentialListInstance(version: V2): CredentialListInstance;
export declare class CredentialPage extends Page<V2, CredentialPayload, CredentialResource, CredentialInstance> {
    /**
     * Initialize the CredentialPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: CredentialSolution);
    /**
     * Build an instance of CredentialInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: CredentialResource): CredentialInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
