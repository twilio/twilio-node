/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
/**
 * Options to pass to update a ShortCodeInstance
 *
 * @property { string } [friendlyName] A descriptive string that you created to describe this resource. It can be up to 64 characters long. By default, the `FriendlyName` is the short code.
 * @property { string } [apiVersion] The API version to use to start a new TwiML session. Can be: `2010-04-01` or `2008-08-01`.
 * @property { string } [smsUrl] The URL we should call when receiving an incoming SMS message to this short code.
 * @property { string } [smsMethod] The HTTP method we should use when calling the `sms_url`. Can be: `GET` or `POST`.
 * @property { string } [smsFallbackUrl] The URL that we should call if an error occurs while retrieving or executing the TwiML from `sms_url`.
 * @property { string } [smsFallbackMethod] The HTTP method that we should use to call the `sms_fallback_url`. Can be: `GET` or `POST`.
 */
export interface ShortCodeContextUpdateOptions {
    friendlyName?: string;
    apiVersion?: string;
    smsUrl?: string;
    smsMethod?: string;
    smsFallbackUrl?: string;
    smsFallbackMethod?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [friendlyName] The string that identifies the ShortCode resources to read.
 * @property { string } [shortCode] Only show the ShortCode resources that match this pattern. You can specify partial numbers and use \'*\' as a wildcard for any digit.
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
export interface ShortCodeListInstanceEachOptions {
    friendlyName?: string;
    shortCode?: string;
    pageSize?: number;
    callback?: (item: ShortCodeInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [friendlyName] The string that identifies the ShortCode resources to read.
 * @property { string } [shortCode] Only show the ShortCode resources that match this pattern. You can specify partial numbers and use \'*\' as a wildcard for any digit.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ShortCodeListInstanceOptions {
    friendlyName?: string;
    shortCode?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [friendlyName] The string that identifies the ShortCode resources to read.
 * @property { string } [shortCode] Only show the ShortCode resources that match this pattern. You can specify partial numbers and use \'*\' as a wildcard for any digit.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ShortCodeListInstancePageOptions {
    friendlyName?: string;
    shortCode?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ShortCodeContext {
    /**
     * Fetch a ShortCodeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ShortCodeInstance
     */
    fetch(callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance>;
    /**
     * Update a ShortCodeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ShortCodeInstance
     */
    update(callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance>;
    /**
     * Update a ShortCodeInstance
     *
     * @param { ShortCodeContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ShortCodeInstance
     */
    update(params: ShortCodeContextUpdateOptions, callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance>;
    update(params?: any, callback?: any): Promise<ShortCodeInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ShortCodeContextSolution {
    accountSid?: string;
    sid?: string;
}
export declare class ShortCodeContextImpl implements ShortCodeContext {
    protected _version: V2010;
    protected _solution: ShortCodeContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, sid: string);
    fetch(callback?: any): Promise<ShortCodeInstance>;
    update(params?: any, callback?: any): Promise<ShortCodeInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ShortCodeContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare type ShortCodeSmsFallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type ShortCodeSmsMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
interface ShortCodePayload extends TwilioResponsePayload {
    short_codes: ShortCodeResource[];
}
interface ShortCodeResource {
    account_sid?: string | null;
    api_version?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    friendly_name?: string | null;
    short_code?: string | null;
    sid?: string | null;
    sms_fallback_method?: ShortCodeSmsFallbackMethod;
    sms_fallback_url?: string | null;
    sms_method?: ShortCodeSmsMethod;
    sms_url?: string | null;
    uri?: string | null;
}
export declare class ShortCodeInstance {
    protected _version: V2010;
    protected _solution: ShortCodeContextSolution;
    protected _context?: ShortCodeContext;
    constructor(_version: V2010, payload: ShortCodeResource, accountSid: string, sid?: string);
    /**
     * The SID of the Account that created this resource
     */
    accountSid?: string | null;
    /**
     * The API version used to start a new TwiML session
     */
    apiVersion?: string | null;
    /**
     * The RFC 2822 date and time in GMT that this resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that this resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * A string that you assigned to describe this resource
     */
    friendlyName?: string | null;
    /**
     * The short code. e.g., 894546.
     */
    shortCode?: string | null;
    /**
     * The unique string that identifies this resource
     */
    sid?: string | null;
    /**
     * HTTP method we use to call the sms_fallback_url
     */
    smsFallbackMethod?: ShortCodeSmsFallbackMethod;
    /**
     * URL Twilio will request if an error occurs in executing TwiML
     */
    smsFallbackUrl?: string | null;
    /**
     * HTTP method to use when requesting the sms url
     */
    smsMethod?: ShortCodeSmsMethod;
    /**
     * URL we call when receiving an incoming SMS message to this short code
     */
    smsUrl?: string | null;
    /**
     * The URI of this resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    private get _proxy();
    /**
     * Fetch a ShortCodeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ShortCodeInstance
     */
    fetch(callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance>;
    /**
     * Update a ShortCodeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ShortCodeInstance
     */
    update(callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance>;
    /**
     * Update a ShortCodeInstance
     *
     * @param { ShortCodeContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ShortCodeInstance
     */
    update(params: ShortCodeContextUpdateOptions, callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        apiVersion: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        friendlyName: string | null | undefined;
        shortCode: string | null | undefined;
        sid: string | null | undefined;
        smsFallbackMethod: ShortCodeSmsFallbackMethod | undefined;
        smsFallbackUrl: string | null | undefined;
        smsMethod: ShortCodeSmsMethod | undefined;
        smsUrl: string | null | undefined;
        uri: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ShortCodeListInstance {
    (sid: string): ShortCodeContext;
    get(sid: string): ShortCodeContext;
    /**
     * Streams ShortCodeInstance records from the API.
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
    each(callback?: (item: ShortCodeInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ShortCodeInstance records from the API.
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
     * @param { ShortCodeListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ShortCodeListInstanceEachOptions, callback?: (item: ShortCodeInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ShortCodeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ShortCodePage) => any): Promise<ShortCodePage>;
    /**
     * Retrieve a single target page of ShortCodeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ShortCodePage) => any): Promise<ShortCodePage>;
    getPage(params?: any, callback?: any): Promise<ShortCodePage>;
    /**
     * Lists ShortCodeInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ShortCodeInstance[]) => any): Promise<ShortCodeInstance[]>;
    /**
     * Lists ShortCodeInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ShortCodeListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ShortCodeListInstanceOptions, callback?: (error: Error | null, items: ShortCodeInstance[]) => any): Promise<ShortCodeInstance[]>;
    list(params?: any, callback?: any): Promise<ShortCodeInstance[]>;
    /**
     * Retrieve a single page of ShortCodeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ShortCodePage) => any): Promise<ShortCodePage>;
    /**
     * Retrieve a single page of ShortCodeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ShortCodeListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ShortCodeListInstancePageOptions, callback?: (error: Error | null, items: ShortCodePage) => any): Promise<ShortCodePage>;
    page(params?: any, callback?: any): Promise<ShortCodePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ShortCodeSolution {
    accountSid?: string;
}
export declare function ShortCodeListInstance(version: V2010, accountSid: string): ShortCodeListInstance;
export declare class ShortCodePage extends Page<V2010, ShortCodePayload, ShortCodeResource, ShortCodeInstance> {
    /**
     * Initialize the ShortCodePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: ShortCodeSolution);
    /**
     * Build an instance of ShortCodeInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ShortCodeResource): ShortCodeInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
