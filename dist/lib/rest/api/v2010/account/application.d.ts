/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
/**
 * Options to pass to update a ApplicationInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 * @property { string } [apiVersion] The API version to use to start a new TwiML session. Can be: `2010-04-01` or `2008-08-01`. The default value is your account\\\'s default API version.
 * @property { string } [voiceUrl] The URL we should call when the phone number assigned to this application receives a call.
 * @property { string } [voiceMethod] The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`.
 * @property { string } [voiceFallbackUrl] The URL that we should call when an error occurs retrieving or executing the TwiML requested by `url`.
 * @property { string } [voiceFallbackMethod] The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
 * @property { string } [statusCallback] The URL we should call using the `status_callback_method` to send status information to your application.
 * @property { string } [statusCallbackMethod] The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST`.
 * @property { boolean } [voiceCallerIdLookup] Whether we should look up the caller\\\'s caller-ID name from the CNAM database (additional charges apply). Can be: `true` or `false`.
 * @property { string } [smsUrl] The URL we should call when the phone number receives an incoming SMS message.
 * @property { string } [smsMethod] The HTTP method we should use to call `sms_url`. Can be: `GET` or `POST`.
 * @property { string } [smsFallbackUrl] The URL that we should call when an error occurs while retrieving or executing the TwiML from `sms_url`.
 * @property { string } [smsFallbackMethod] The HTTP method we should use to call `sms_fallback_url`. Can be: `GET` or `POST`.
 * @property { string } [smsStatusCallback] Same as message_status_callback: The URL we should call using a POST method to send status information about SMS messages sent by the application. Deprecated, included for backwards compatibility.
 * @property { string } [messageStatusCallback] The URL we should call using a POST method to send message status information to your application.
 */
export interface ApplicationContextUpdateOptions {
    friendlyName?: string;
    apiVersion?: string;
    voiceUrl?: string;
    voiceMethod?: string;
    voiceFallbackUrl?: string;
    voiceFallbackMethod?: string;
    statusCallback?: string;
    statusCallbackMethod?: string;
    voiceCallerIdLookup?: boolean;
    smsUrl?: string;
    smsMethod?: string;
    smsFallbackUrl?: string;
    smsFallbackMethod?: string;
    smsStatusCallback?: string;
    messageStatusCallback?: string;
}
/**
 * Options to pass to create a ApplicationInstance
 *
 * @property { string } [apiVersion] The API version to use to start a new TwiML session. Can be: `2010-04-01` or `2008-08-01`. The default value is the account\\\'s default API version.
 * @property { string } [voiceUrl] The URL we should call when the phone number assigned to this application receives a call.
 * @property { string } [voiceMethod] The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`.
 * @property { string } [voiceFallbackUrl] The URL that we should call when an error occurs retrieving or executing the TwiML requested by `url`.
 * @property { string } [voiceFallbackMethod] The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
 * @property { string } [statusCallback] The URL we should call using the `status_callback_method` to send status information to your application.
 * @property { string } [statusCallbackMethod] The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST`.
 * @property { boolean } [voiceCallerIdLookup] Whether we should look up the caller\\\'s caller-ID name from the CNAM database (additional charges apply). Can be: `true` or `false`.
 * @property { string } [smsUrl] The URL we should call when the phone number receives an incoming SMS message.
 * @property { string } [smsMethod] The HTTP method we should use to call `sms_url`. Can be: `GET` or `POST`.
 * @property { string } [smsFallbackUrl] The URL that we should call when an error occurs while retrieving or executing the TwiML from `sms_url`.
 * @property { string } [smsFallbackMethod] The HTTP method we should use to call `sms_fallback_url`. Can be: `GET` or `POST`.
 * @property { string } [smsStatusCallback] The URL we should call using a POST method to send status information about SMS messages sent by the application.
 * @property { string } [messageStatusCallback] The URL we should call using a POST method to send message status information to your application.
 * @property { string } [friendlyName] A descriptive string that you create to describe the new application. It can be up to 64 characters long.
 */
export interface ApplicationListInstanceCreateOptions {
    apiVersion?: string;
    voiceUrl?: string;
    voiceMethod?: string;
    voiceFallbackUrl?: string;
    voiceFallbackMethod?: string;
    statusCallback?: string;
    statusCallbackMethod?: string;
    voiceCallerIdLookup?: boolean;
    smsUrl?: string;
    smsMethod?: string;
    smsFallbackUrl?: string;
    smsFallbackMethod?: string;
    smsStatusCallback?: string;
    messageStatusCallback?: string;
    friendlyName?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [friendlyName] The string that identifies the Application resources to read.
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
export interface ApplicationListInstanceEachOptions {
    friendlyName?: string;
    pageSize?: number;
    callback?: (item: ApplicationInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [friendlyName] The string that identifies the Application resources to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ApplicationListInstanceOptions {
    friendlyName?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [friendlyName] The string that identifies the Application resources to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ApplicationListInstancePageOptions {
    friendlyName?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ApplicationContext {
    /**
     * Remove a ApplicationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ApplicationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ApplicationInstance
     */
    fetch(callback?: (error: Error | null, item?: ApplicationInstance) => any): Promise<ApplicationInstance>;
    /**
     * Update a ApplicationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ApplicationInstance
     */
    update(callback?: (error: Error | null, item?: ApplicationInstance) => any): Promise<ApplicationInstance>;
    /**
     * Update a ApplicationInstance
     *
     * @param { ApplicationContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ApplicationInstance
     */
    update(params: ApplicationContextUpdateOptions, callback?: (error: Error | null, item?: ApplicationInstance) => any): Promise<ApplicationInstance>;
    update(params?: any, callback?: any): Promise<ApplicationInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ApplicationContextSolution {
    accountSid?: string;
    sid?: string;
}
export declare class ApplicationContextImpl implements ApplicationContext {
    protected _version: V2010;
    protected _solution: ApplicationContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<ApplicationInstance>;
    update(params?: any, callback?: any): Promise<ApplicationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ApplicationContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare type ApplicationSmsFallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type ApplicationSmsMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type ApplicationStatusCallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type ApplicationVoiceFallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type ApplicationVoiceMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
interface ApplicationPayload extends TwilioResponsePayload {
    applications: ApplicationResource[];
}
interface ApplicationResource {
    account_sid?: string | null;
    api_version?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    friendly_name?: string | null;
    message_status_callback?: string | null;
    sid?: string | null;
    sms_fallback_method?: ApplicationSmsFallbackMethod;
    sms_fallback_url?: string | null;
    sms_method?: ApplicationSmsMethod;
    sms_status_callback?: string | null;
    sms_url?: string | null;
    status_callback?: string | null;
    status_callback_method?: ApplicationStatusCallbackMethod;
    uri?: string | null;
    voice_caller_id_lookup?: boolean | null;
    voice_fallback_method?: ApplicationVoiceFallbackMethod;
    voice_fallback_url?: string | null;
    voice_method?: ApplicationVoiceMethod;
    voice_url?: string | null;
}
export declare class ApplicationInstance {
    protected _version: V2010;
    protected _solution: ApplicationContextSolution;
    protected _context?: ApplicationContext;
    constructor(_version: V2010, payload: ApplicationResource, accountSid: string, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The API version used to start a new TwiML session
     */
    apiVersion?: string | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * The URL to send message status information to your application
     */
    messageStatusCallback?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The HTTP method used with sms_fallback_url
     */
    smsFallbackMethod?: ApplicationSmsFallbackMethod;
    /**
     * The URL that we call when an error occurs while retrieving or executing the TwiML
     */
    smsFallbackUrl?: string | null;
    /**
     * The HTTP method to use with sms_url
     */
    smsMethod?: ApplicationSmsMethod;
    /**
     * The URL to send status information to your application
     */
    smsStatusCallback?: string | null;
    /**
     * The URL we call when the phone number receives an incoming SMS message
     */
    smsUrl?: string | null;
    /**
     * The URL to send status information to your application
     */
    statusCallback?: string | null;
    /**
     * The HTTP method we use to call status_callback
     */
    statusCallbackMethod?: ApplicationStatusCallbackMethod;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    /**
     * Whether to lookup the caller\'s name
     */
    voiceCallerIdLookup?: boolean | null;
    /**
     * The HTTP method used with voice_fallback_url
     */
    voiceFallbackMethod?: ApplicationVoiceFallbackMethod;
    /**
     * The URL we call when a TwiML error occurs
     */
    voiceFallbackUrl?: string | null;
    /**
     * The HTTP method used with the voice_url
     */
    voiceMethod?: ApplicationVoiceMethod;
    /**
     * The URL we call when the phone number receives a call
     */
    voiceUrl?: string | null;
    private get _proxy();
    /**
     * Remove a ApplicationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ApplicationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ApplicationInstance
     */
    fetch(callback?: (error: Error | null, item?: ApplicationInstance) => any): Promise<ApplicationInstance>;
    /**
     * Update a ApplicationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ApplicationInstance
     */
    update(callback?: (error: Error | null, item?: ApplicationInstance) => any): Promise<ApplicationInstance>;
    /**
     * Update a ApplicationInstance
     *
     * @param { ApplicationContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ApplicationInstance
     */
    update(params: ApplicationContextUpdateOptions, callback?: (error: Error | null, item?: ApplicationInstance) => any): Promise<ApplicationInstance>;
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
        messageStatusCallback: string | null | undefined;
        sid: string | null | undefined;
        smsFallbackMethod: ApplicationSmsFallbackMethod | undefined;
        smsFallbackUrl: string | null | undefined;
        smsMethod: ApplicationSmsMethod | undefined;
        smsStatusCallback: string | null | undefined;
        smsUrl: string | null | undefined;
        statusCallback: string | null | undefined;
        statusCallbackMethod: ApplicationStatusCallbackMethod | undefined;
        uri: string | null | undefined;
        voiceCallerIdLookup: boolean | null | undefined;
        voiceFallbackMethod: ApplicationVoiceFallbackMethod | undefined;
        voiceFallbackUrl: string | null | undefined;
        voiceMethod: ApplicationVoiceMethod | undefined;
        voiceUrl: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ApplicationListInstance {
    (sid: string): ApplicationContext;
    get(sid: string): ApplicationContext;
    /**
     * Create a ApplicationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ApplicationInstance
     */
    create(callback?: (error: Error | null, item?: ApplicationInstance) => any): Promise<ApplicationInstance>;
    /**
     * Create a ApplicationInstance
     *
     * @param { ApplicationListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ApplicationInstance
     */
    create(params: ApplicationListInstanceCreateOptions, callback?: (error: Error | null, item?: ApplicationInstance) => any): Promise<ApplicationInstance>;
    create(params?: any, callback?: any): Promise<ApplicationInstance>;
    /**
     * Streams ApplicationInstance records from the API.
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
    each(callback?: (item: ApplicationInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ApplicationInstance records from the API.
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
     * @param { ApplicationListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ApplicationListInstanceEachOptions, callback?: (item: ApplicationInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ApplicationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ApplicationPage) => any): Promise<ApplicationPage>;
    /**
     * Retrieve a single target page of ApplicationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ApplicationPage) => any): Promise<ApplicationPage>;
    getPage(params?: any, callback?: any): Promise<ApplicationPage>;
    /**
     * Lists ApplicationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ApplicationInstance[]) => any): Promise<ApplicationInstance[]>;
    /**
     * Lists ApplicationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ApplicationListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ApplicationListInstanceOptions, callback?: (error: Error | null, items: ApplicationInstance[]) => any): Promise<ApplicationInstance[]>;
    list(params?: any, callback?: any): Promise<ApplicationInstance[]>;
    /**
     * Retrieve a single page of ApplicationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ApplicationPage) => any): Promise<ApplicationPage>;
    /**
     * Retrieve a single page of ApplicationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ApplicationListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ApplicationListInstancePageOptions, callback?: (error: Error | null, items: ApplicationPage) => any): Promise<ApplicationPage>;
    page(params?: any, callback?: any): Promise<ApplicationPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ApplicationSolution {
    accountSid?: string;
}
export declare function ApplicationListInstance(version: V2010, accountSid: string): ApplicationListInstance;
export declare class ApplicationPage extends Page<V2010, ApplicationPayload, ApplicationResource, ApplicationInstance> {
    /**
     * Initialize the ApplicationPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: ApplicationSolution);
    /**
     * Build an instance of ApplicationInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ApplicationResource): ApplicationInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
