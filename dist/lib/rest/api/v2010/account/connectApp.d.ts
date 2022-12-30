/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
declare type ConnectAppPermission = "get-all" | "post-all";
/**
 * Options to pass to update a ConnectAppInstance
 *
 * @property { string } [authorizeRedirectUrl] The URL to redirect the user to after we authenticate the user and obtain authorization to access the Connect App.
 * @property { string } [companyName] The company name to set for the Connect App.
 * @property { string } [deauthorizeCallbackMethod] The HTTP method to use when calling `deauthorize_callback_url`.
 * @property { string } [deauthorizeCallbackUrl] The URL to call using the `deauthorize_callback_method` to de-authorize the Connect App.
 * @property { string } [description] A description of the Connect App.
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 * @property { string } [homepageUrl] A public URL where users can obtain more information about this Connect App.
 * @property { Array<ConnectAppPermission> } [permissions] A comma-separated list of the permissions you will request from the users of this ConnectApp.  Can include: `get-all` and `post-all`.
 */
export interface ConnectAppContextUpdateOptions {
    authorizeRedirectUrl?: string;
    companyName?: string;
    deauthorizeCallbackMethod?: string;
    deauthorizeCallbackUrl?: string;
    description?: string;
    friendlyName?: string;
    homepageUrl?: string;
    permissions?: Array<ConnectAppPermission>;
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
export interface ConnectAppListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: ConnectAppInstance, done: (err?: Error) => void) => void;
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
export interface ConnectAppListInstanceOptions {
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
export interface ConnectAppListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ConnectAppContext {
    /**
     * Remove a ConnectAppInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ConnectAppInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConnectAppInstance
     */
    fetch(callback?: (error: Error | null, item?: ConnectAppInstance) => any): Promise<ConnectAppInstance>;
    /**
     * Update a ConnectAppInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConnectAppInstance
     */
    update(callback?: (error: Error | null, item?: ConnectAppInstance) => any): Promise<ConnectAppInstance>;
    /**
     * Update a ConnectAppInstance
     *
     * @param { ConnectAppContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConnectAppInstance
     */
    update(params: ConnectAppContextUpdateOptions, callback?: (error: Error | null, item?: ConnectAppInstance) => any): Promise<ConnectAppInstance>;
    update(params?: any, callback?: any): Promise<ConnectAppInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ConnectAppContextSolution {
    accountSid?: string;
    sid?: string;
}
export declare class ConnectAppContextImpl implements ConnectAppContext {
    protected _version: V2010;
    protected _solution: ConnectAppContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<ConnectAppInstance>;
    update(params?: any, callback?: any): Promise<ConnectAppInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ConnectAppContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare type ConnectAppDeauthorizeCallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
interface ConnectAppPayload extends TwilioResponsePayload {
    connect_apps: ConnectAppResource[];
}
interface ConnectAppResource {
    account_sid?: string | null;
    authorize_redirect_url?: string | null;
    company_name?: string | null;
    deauthorize_callback_method?: ConnectAppDeauthorizeCallbackMethod;
    deauthorize_callback_url?: string | null;
    description?: string | null;
    friendly_name?: string | null;
    homepage_url?: string | null;
    permissions?: Array<ConnectAppPermission> | null;
    sid?: string | null;
    uri?: string | null;
}
export declare class ConnectAppInstance {
    protected _version: V2010;
    protected _solution: ConnectAppContextSolution;
    protected _context?: ConnectAppContext;
    constructor(_version: V2010, payload: ConnectAppResource, accountSid: string, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The URL to redirect the user to after authorization
     */
    authorizeRedirectUrl?: string | null;
    /**
     * The company name set for the Connect App
     */
    companyName?: string | null;
    /**
     * The HTTP method we use to call deauthorize_callback_url
     */
    deauthorizeCallbackMethod?: ConnectAppDeauthorizeCallbackMethod;
    /**
     * The URL we call to de-authorize the Connect App
     */
    deauthorizeCallbackUrl?: string | null;
    /**
     * The description of the Connect App
     */
    description?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * The URL users can obtain more information
     */
    homepageUrl?: string | null;
    /**
     * The set of permissions that your ConnectApp requests
     */
    permissions?: Array<ConnectAppPermission> | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    private get _proxy();
    /**
     * Remove a ConnectAppInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ConnectAppInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConnectAppInstance
     */
    fetch(callback?: (error: Error | null, item?: ConnectAppInstance) => any): Promise<ConnectAppInstance>;
    /**
     * Update a ConnectAppInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConnectAppInstance
     */
    update(callback?: (error: Error | null, item?: ConnectAppInstance) => any): Promise<ConnectAppInstance>;
    /**
     * Update a ConnectAppInstance
     *
     * @param { ConnectAppContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConnectAppInstance
     */
    update(params: ConnectAppContextUpdateOptions, callback?: (error: Error | null, item?: ConnectAppInstance) => any): Promise<ConnectAppInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        authorizeRedirectUrl: string | null | undefined;
        companyName: string | null | undefined;
        deauthorizeCallbackMethod: ConnectAppDeauthorizeCallbackMethod | undefined;
        deauthorizeCallbackUrl: string | null | undefined;
        description: string | null | undefined;
        friendlyName: string | null | undefined;
        homepageUrl: string | null | undefined;
        permissions: ConnectAppPermission[] | null | undefined;
        sid: string | null | undefined;
        uri: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ConnectAppListInstance {
    (sid: string): ConnectAppContext;
    get(sid: string): ConnectAppContext;
    /**
     * Streams ConnectAppInstance records from the API.
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
    each(callback?: (item: ConnectAppInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ConnectAppInstance records from the API.
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
     * @param { ConnectAppListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ConnectAppListInstanceEachOptions, callback?: (item: ConnectAppInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ConnectAppInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ConnectAppPage) => any): Promise<ConnectAppPage>;
    /**
     * Retrieve a single target page of ConnectAppInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ConnectAppPage) => any): Promise<ConnectAppPage>;
    getPage(params?: any, callback?: any): Promise<ConnectAppPage>;
    /**
     * Lists ConnectAppInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ConnectAppInstance[]) => any): Promise<ConnectAppInstance[]>;
    /**
     * Lists ConnectAppInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ConnectAppListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ConnectAppListInstanceOptions, callback?: (error: Error | null, items: ConnectAppInstance[]) => any): Promise<ConnectAppInstance[]>;
    list(params?: any, callback?: any): Promise<ConnectAppInstance[]>;
    /**
     * Retrieve a single page of ConnectAppInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ConnectAppPage) => any): Promise<ConnectAppPage>;
    /**
     * Retrieve a single page of ConnectAppInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ConnectAppListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ConnectAppListInstancePageOptions, callback?: (error: Error | null, items: ConnectAppPage) => any): Promise<ConnectAppPage>;
    page(params?: any, callback?: any): Promise<ConnectAppPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ConnectAppSolution {
    accountSid?: string;
}
export declare function ConnectAppListInstance(version: V2010, accountSid: string): ConnectAppListInstance;
export declare class ConnectAppPage extends Page<V2010, ConnectAppPayload, ConnectAppResource, ConnectAppInstance> {
    /**
     * Initialize the ConnectAppPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: ConnectAppSolution);
    /**
     * Build an instance of ConnectAppInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ConnectAppResource): ConnectAppInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
