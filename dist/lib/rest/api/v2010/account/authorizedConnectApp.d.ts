/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
declare type AuthorizedConnectAppPermission = "get-all" | "post-all";
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
export interface AuthorizedConnectAppListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: AuthorizedConnectAppInstance, done: (err?: Error) => void) => void;
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
export interface AuthorizedConnectAppListInstanceOptions {
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
export interface AuthorizedConnectAppListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface AuthorizedConnectAppContext {
    /**
     * Fetch a AuthorizedConnectAppInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AuthorizedConnectAppInstance
     */
    fetch(callback?: (error: Error | null, item?: AuthorizedConnectAppInstance) => any): Promise<AuthorizedConnectAppInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AuthorizedConnectAppContextSolution {
    accountSid?: string;
    connectAppSid?: string;
}
export declare class AuthorizedConnectAppContextImpl implements AuthorizedConnectAppContext {
    protected _version: V2010;
    protected _solution: AuthorizedConnectAppContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, connectAppSid: string);
    fetch(callback?: any): Promise<AuthorizedConnectAppInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AuthorizedConnectAppContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AuthorizedConnectAppPayload extends TwilioResponsePayload {
    authorized_connect_apps: AuthorizedConnectAppResource[];
}
interface AuthorizedConnectAppResource {
    account_sid?: string | null;
    connect_app_company_name?: string | null;
    connect_app_description?: string | null;
    connect_app_friendly_name?: string | null;
    connect_app_homepage_url?: string | null;
    connect_app_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    permissions?: Array<AuthorizedConnectAppPermission> | null;
    uri?: string | null;
}
export declare class AuthorizedConnectAppInstance {
    protected _version: V2010;
    protected _solution: AuthorizedConnectAppContextSolution;
    protected _context?: AuthorizedConnectAppContext;
    constructor(_version: V2010, payload: AuthorizedConnectAppResource, accountSid: string, connectAppSid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The company name set for the Connect App
     */
    connectAppCompanyName?: string | null;
    /**
     * A detailed description of the app
     */
    connectAppDescription?: string | null;
    /**
     * The name of the Connect App
     */
    connectAppFriendlyName?: string | null;
    /**
     * The public URL for the Connect App
     */
    connectAppHomepageUrl?: string | null;
    /**
     * The SID that we assigned to the Connect App
     */
    connectAppSid?: string | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * Permissions authorized to the app
     */
    permissions?: Array<AuthorizedConnectAppPermission> | null;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    private get _proxy();
    /**
     * Fetch a AuthorizedConnectAppInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AuthorizedConnectAppInstance
     */
    fetch(callback?: (error: Error | null, item?: AuthorizedConnectAppInstance) => any): Promise<AuthorizedConnectAppInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        connectAppCompanyName: string | null | undefined;
        connectAppDescription: string | null | undefined;
        connectAppFriendlyName: string | null | undefined;
        connectAppHomepageUrl: string | null | undefined;
        connectAppSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        permissions: AuthorizedConnectAppPermission[] | null | undefined;
        uri: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AuthorizedConnectAppListInstance {
    (connectAppSid: string): AuthorizedConnectAppContext;
    get(connectAppSid: string): AuthorizedConnectAppContext;
    /**
     * Streams AuthorizedConnectAppInstance records from the API.
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
    each(callback?: (item: AuthorizedConnectAppInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams AuthorizedConnectAppInstance records from the API.
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
     * @param { AuthorizedConnectAppListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: AuthorizedConnectAppListInstanceEachOptions, callback?: (item: AuthorizedConnectAppInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of AuthorizedConnectAppInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: AuthorizedConnectAppPage) => any): Promise<AuthorizedConnectAppPage>;
    /**
     * Retrieve a single target page of AuthorizedConnectAppInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: AuthorizedConnectAppPage) => any): Promise<AuthorizedConnectAppPage>;
    getPage(params?: any, callback?: any): Promise<AuthorizedConnectAppPage>;
    /**
     * Lists AuthorizedConnectAppInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: AuthorizedConnectAppInstance[]) => any): Promise<AuthorizedConnectAppInstance[]>;
    /**
     * Lists AuthorizedConnectAppInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AuthorizedConnectAppListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: AuthorizedConnectAppListInstanceOptions, callback?: (error: Error | null, items: AuthorizedConnectAppInstance[]) => any): Promise<AuthorizedConnectAppInstance[]>;
    list(params?: any, callback?: any): Promise<AuthorizedConnectAppInstance[]>;
    /**
     * Retrieve a single page of AuthorizedConnectAppInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: AuthorizedConnectAppPage) => any): Promise<AuthorizedConnectAppPage>;
    /**
     * Retrieve a single page of AuthorizedConnectAppInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AuthorizedConnectAppListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: AuthorizedConnectAppListInstancePageOptions, callback?: (error: Error | null, items: AuthorizedConnectAppPage) => any): Promise<AuthorizedConnectAppPage>;
    page(params?: any, callback?: any): Promise<AuthorizedConnectAppPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AuthorizedConnectAppSolution {
    accountSid?: string;
}
export declare function AuthorizedConnectAppListInstance(version: V2010, accountSid: string): AuthorizedConnectAppListInstance;
export declare class AuthorizedConnectAppPage extends Page<V2010, AuthorizedConnectAppPayload, AuthorizedConnectAppResource, AuthorizedConnectAppInstance> {
    /**
     * Initialize the AuthorizedConnectAppPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: AuthorizedConnectAppSolution);
    /**
     * Build an instance of AuthorizedConnectAppInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: AuthorizedConnectAppResource): AuthorizedConnectAppInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
