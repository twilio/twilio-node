/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
declare type PhoneNumberAddressRequirement = "none" | "any" | "local" | "foreign";
/**
 * Options to pass to create a PhoneNumberInstance
 *
 * @property { string } phoneNumberSid The SID of the [Incoming Phone Number](https://www.twilio.com/docs/phone-numbers/api/incomingphonenumber-resource) that you want to associate with the trunk.
 */
export interface PhoneNumberListInstanceCreateOptions {
    phoneNumberSid: string;
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
export interface PhoneNumberListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: PhoneNumberInstance, done: (err?: Error) => void) => void;
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
export interface PhoneNumberListInstanceOptions {
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
export interface PhoneNumberListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface PhoneNumberContext {
    /**
     * Remove a PhoneNumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a PhoneNumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PhoneNumberInstance
     */
    fetch(callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PhoneNumberContextSolution {
    trunkSid?: string;
    sid?: string;
}
export declare class PhoneNumberContextImpl implements PhoneNumberContext {
    protected _version: V1;
    protected _solution: PhoneNumberContextSolution;
    protected _uri: string;
    constructor(_version: V1, trunkSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<PhoneNumberInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PhoneNumberContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare type PhoneNumberSmsFallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type PhoneNumberSmsMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type PhoneNumberStatusCallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type PhoneNumberVoiceFallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type PhoneNumberVoiceMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
interface PhoneNumberPayload extends TwilioResponsePayload {
    phone_numbers: PhoneNumberResource[];
}
interface PhoneNumberResource {
    account_sid?: string | null;
    address_requirements?: PhoneNumberAddressRequirement;
    api_version?: string | null;
    beta?: boolean | null;
    capabilities?: object | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    friendly_name?: string | null;
    links?: object | null;
    phone_number?: string | null;
    sid?: string | null;
    sms_application_sid?: string | null;
    sms_fallback_method?: PhoneNumberSmsFallbackMethod;
    sms_fallback_url?: string | null;
    sms_method?: PhoneNumberSmsMethod;
    sms_url?: string | null;
    status_callback?: string | null;
    status_callback_method?: PhoneNumberStatusCallbackMethod;
    trunk_sid?: string | null;
    url?: string | null;
    voice_application_sid?: string | null;
    voice_caller_id_lookup?: boolean | null;
    voice_fallback_method?: PhoneNumberVoiceFallbackMethod;
    voice_fallback_url?: string | null;
    voice_method?: PhoneNumberVoiceMethod;
    voice_url?: string | null;
}
export declare class PhoneNumberInstance {
    protected _version: V1;
    protected _solution: PhoneNumberContextSolution;
    protected _context?: PhoneNumberContext;
    constructor(_version: V1, payload: PhoneNumberResource, trunkSid: string, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    addressRequirements?: PhoneNumberAddressRequirement;
    /**
     * The API version used to start a new TwiML session
     */
    apiVersion?: string | null;
    /**
     * Whether the phone number is new to the Twilio platform
     */
    beta?: boolean | null;
    /**
     * Indicate if a phone can receive calls or messages
     */
    capabilities?: object | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * The URLs of related resources
     */
    links?: object | null;
    /**
     * The phone number in E.164 format
     */
    phoneNumber?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the application that handles SMS messages sent to the phone number
     */
    smsApplicationSid?: string | null;
    /**
     * The HTTP method used with sms_fallback_url
     */
    smsFallbackMethod?: PhoneNumberSmsFallbackMethod;
    /**
     * The URL that we call when an error occurs while retrieving or executing the TwiML
     */
    smsFallbackUrl?: string | null;
    /**
     * The HTTP method to use with sms_url
     */
    smsMethod?: PhoneNumberSmsMethod;
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
    statusCallbackMethod?: PhoneNumberStatusCallbackMethod;
    /**
     * The SID of the Trunk that handles calls to the phone number
     */
    trunkSid?: string | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    /**
     * The SID of the application that handles calls to the phone number
     */
    voiceApplicationSid?: string | null;
    /**
     * Whether to lookup the caller\'s name
     */
    voiceCallerIdLookup?: boolean | null;
    /**
     * The HTTP method that we use to call voice_fallback_url
     */
    voiceFallbackMethod?: PhoneNumberVoiceFallbackMethod;
    /**
     * The URL we call when an error occurs in TwiML
     */
    voiceFallbackUrl?: string | null;
    /**
     * The HTTP method used with the voice_url
     */
    voiceMethod?: PhoneNumberVoiceMethod;
    /**
     * The URL we call when the phone number receives a call
     */
    voiceUrl?: string | null;
    private get _proxy();
    /**
     * Remove a PhoneNumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a PhoneNumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PhoneNumberInstance
     */
    fetch(callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        addressRequirements: PhoneNumberAddressRequirement | undefined;
        apiVersion: string | null | undefined;
        beta: boolean | null | undefined;
        capabilities: object | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        friendlyName: string | null | undefined;
        links: object | null | undefined;
        phoneNumber: string | null | undefined;
        sid: string | null | undefined;
        smsApplicationSid: string | null | undefined;
        smsFallbackMethod: PhoneNumberSmsFallbackMethod | undefined;
        smsFallbackUrl: string | null | undefined;
        smsMethod: PhoneNumberSmsMethod | undefined;
        smsUrl: string | null | undefined;
        statusCallback: string | null | undefined;
        statusCallbackMethod: PhoneNumberStatusCallbackMethod | undefined;
        trunkSid: string | null | undefined;
        url: string | null | undefined;
        voiceApplicationSid: string | null | undefined;
        voiceCallerIdLookup: boolean | null | undefined;
        voiceFallbackMethod: PhoneNumberVoiceFallbackMethod | undefined;
        voiceFallbackUrl: string | null | undefined;
        voiceMethod: PhoneNumberVoiceMethod | undefined;
        voiceUrl: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PhoneNumberListInstance {
    (sid: string): PhoneNumberContext;
    get(sid: string): PhoneNumberContext;
    /**
     * Create a PhoneNumberInstance
     *
     * @param { PhoneNumberListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PhoneNumberInstance
     */
    create(params: PhoneNumberListInstanceCreateOptions, callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
    create(params: any, callback?: any): Promise<PhoneNumberInstance>;
    /**
     * Streams PhoneNumberInstance records from the API.
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
    each(callback?: (item: PhoneNumberInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams PhoneNumberInstance records from the API.
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
     * @param { PhoneNumberListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: PhoneNumberListInstanceEachOptions, callback?: (item: PhoneNumberInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of PhoneNumberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: PhoneNumberPage) => any): Promise<PhoneNumberPage>;
    /**
     * Retrieve a single target page of PhoneNumberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: PhoneNumberPage) => any): Promise<PhoneNumberPage>;
    getPage(params?: any, callback?: any): Promise<PhoneNumberPage>;
    /**
     * Lists PhoneNumberInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: PhoneNumberInstance[]) => any): Promise<PhoneNumberInstance[]>;
    /**
     * Lists PhoneNumberInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PhoneNumberListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: PhoneNumberListInstanceOptions, callback?: (error: Error | null, items: PhoneNumberInstance[]) => any): Promise<PhoneNumberInstance[]>;
    list(params?: any, callback?: any): Promise<PhoneNumberInstance[]>;
    /**
     * Retrieve a single page of PhoneNumberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: PhoneNumberPage) => any): Promise<PhoneNumberPage>;
    /**
     * Retrieve a single page of PhoneNumberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PhoneNumberListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: PhoneNumberListInstancePageOptions, callback?: (error: Error | null, items: PhoneNumberPage) => any): Promise<PhoneNumberPage>;
    page(params?: any, callback?: any): Promise<PhoneNumberPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PhoneNumberSolution {
    trunkSid?: string;
}
export declare function PhoneNumberListInstance(version: V1, trunkSid: string): PhoneNumberListInstance;
export declare class PhoneNumberPage extends Page<V1, PhoneNumberPayload, PhoneNumberResource, PhoneNumberInstance> {
    /**
     * Initialize the PhoneNumberPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: PhoneNumberSolution);
    /**
     * Build an instance of PhoneNumberInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: PhoneNumberResource): PhoneNumberInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
