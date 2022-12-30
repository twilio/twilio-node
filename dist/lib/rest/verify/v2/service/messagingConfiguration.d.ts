/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2 from "../../V2";
/**
 * Options to pass to update a MessagingConfigurationInstance
 *
 * @property { string } messagingServiceSid The SID of the [Messaging Service](https://www.twilio.com/docs/sms/services/api) to be used to send SMS to the country of this configuration.
 */
export interface MessagingConfigurationContextUpdateOptions {
    messagingServiceSid: string;
}
/**
 * Options to pass to create a MessagingConfigurationInstance
 *
 * @property { string } country The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country this configuration will be applied to. If this is a global configuration, Country will take the value `all`.
 * @property { string } messagingServiceSid The SID of the [Messaging Service](https://www.twilio.com/docs/sms/services/api) to be used to send SMS to the country of this configuration.
 */
export interface MessagingConfigurationListInstanceCreateOptions {
    country: string;
    messagingServiceSid: string;
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
export interface MessagingConfigurationListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: MessagingConfigurationInstance, done: (err?: Error) => void) => void;
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
export interface MessagingConfigurationListInstanceOptions {
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
export interface MessagingConfigurationListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface MessagingConfigurationContext {
    /**
     * Remove a MessagingConfigurationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a MessagingConfigurationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessagingConfigurationInstance
     */
    fetch(callback?: (error: Error | null, item?: MessagingConfigurationInstance) => any): Promise<MessagingConfigurationInstance>;
    /**
     * Update a MessagingConfigurationInstance
     *
     * @param { MessagingConfigurationContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessagingConfigurationInstance
     */
    update(params: MessagingConfigurationContextUpdateOptions, callback?: (error: Error | null, item?: MessagingConfigurationInstance) => any): Promise<MessagingConfigurationInstance>;
    update(params: any, callback?: any): Promise<MessagingConfigurationInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface MessagingConfigurationContextSolution {
    serviceSid?: string;
    country?: string;
}
export declare class MessagingConfigurationContextImpl implements MessagingConfigurationContext {
    protected _version: V2;
    protected _solution: MessagingConfigurationContextSolution;
    protected _uri: string;
    constructor(_version: V2, serviceSid: string, country: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<MessagingConfigurationInstance>;
    update(params: any, callback?: any): Promise<MessagingConfigurationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): MessagingConfigurationContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface MessagingConfigurationPayload extends TwilioResponsePayload {
    messaging_configurations: MessagingConfigurationResource[];
}
interface MessagingConfigurationResource {
    account_sid?: string | null;
    service_sid?: string | null;
    country?: string | null;
    messaging_service_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class MessagingConfigurationInstance {
    protected _version: V2;
    protected _solution: MessagingConfigurationContextSolution;
    protected _context?: MessagingConfigurationContext;
    constructor(_version: V2, payload: MessagingConfigurationResource, serviceSid: string, country?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Service that the resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The ISO-3166-1 country code of the country or `all`.
     */
    country?: string | null;
    /**
     * The SID of the Messaging Service used for this configuration.
     */
    messagingServiceSid?: string | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The URL of this resource.
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a MessagingConfigurationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a MessagingConfigurationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessagingConfigurationInstance
     */
    fetch(callback?: (error: Error | null, item?: MessagingConfigurationInstance) => any): Promise<MessagingConfigurationInstance>;
    /**
     * Update a MessagingConfigurationInstance
     *
     * @param { MessagingConfigurationContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessagingConfigurationInstance
     */
    update(params: MessagingConfigurationContextUpdateOptions, callback?: (error: Error | null, item?: MessagingConfigurationInstance) => any): Promise<MessagingConfigurationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        country: string | null | undefined;
        messagingServiceSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface MessagingConfigurationListInstance {
    (country: string): MessagingConfigurationContext;
    get(country: string): MessagingConfigurationContext;
    /**
     * Create a MessagingConfigurationInstance
     *
     * @param { MessagingConfigurationListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessagingConfigurationInstance
     */
    create(params: MessagingConfigurationListInstanceCreateOptions, callback?: (error: Error | null, item?: MessagingConfigurationInstance) => any): Promise<MessagingConfigurationInstance>;
    create(params: any, callback?: any): Promise<MessagingConfigurationInstance>;
    /**
     * Streams MessagingConfigurationInstance records from the API.
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
    each(callback?: (item: MessagingConfigurationInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams MessagingConfigurationInstance records from the API.
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
     * @param { MessagingConfigurationListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: MessagingConfigurationListInstanceEachOptions, callback?: (item: MessagingConfigurationInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of MessagingConfigurationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: MessagingConfigurationPage) => any): Promise<MessagingConfigurationPage>;
    /**
     * Retrieve a single target page of MessagingConfigurationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: MessagingConfigurationPage) => any): Promise<MessagingConfigurationPage>;
    getPage(params?: any, callback?: any): Promise<MessagingConfigurationPage>;
    /**
     * Lists MessagingConfigurationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: MessagingConfigurationInstance[]) => any): Promise<MessagingConfigurationInstance[]>;
    /**
     * Lists MessagingConfigurationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MessagingConfigurationListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: MessagingConfigurationListInstanceOptions, callback?: (error: Error | null, items: MessagingConfigurationInstance[]) => any): Promise<MessagingConfigurationInstance[]>;
    list(params?: any, callback?: any): Promise<MessagingConfigurationInstance[]>;
    /**
     * Retrieve a single page of MessagingConfigurationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: MessagingConfigurationPage) => any): Promise<MessagingConfigurationPage>;
    /**
     * Retrieve a single page of MessagingConfigurationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MessagingConfigurationListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: MessagingConfigurationListInstancePageOptions, callback?: (error: Error | null, items: MessagingConfigurationPage) => any): Promise<MessagingConfigurationPage>;
    page(params?: any, callback?: any): Promise<MessagingConfigurationPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface MessagingConfigurationSolution {
    serviceSid?: string;
}
export declare function MessagingConfigurationListInstance(version: V2, serviceSid: string): MessagingConfigurationListInstance;
export declare class MessagingConfigurationPage extends Page<V2, MessagingConfigurationPayload, MessagingConfigurationResource, MessagingConfigurationInstance> {
    /**
     * Initialize the MessagingConfigurationPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: MessagingConfigurationSolution);
    /**
     * Build an instance of MessagingConfigurationInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: MessagingConfigurationResource): MessagingConfigurationInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
