/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
declare type DependentPhoneNumberAddressRequirement = "none" | "any" | "local" | "foreign";
declare type DependentPhoneNumberEmergencyStatus = "Active" | "Inactive";
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
export interface DependentPhoneNumberListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: DependentPhoneNumberInstance, done: (err?: Error) => void) => void;
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
export interface DependentPhoneNumberListInstanceOptions {
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
export interface DependentPhoneNumberListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface DependentPhoneNumberListInstance {
    /**
     * Streams DependentPhoneNumberInstance records from the API.
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
    each(callback?: (item: DependentPhoneNumberInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams DependentPhoneNumberInstance records from the API.
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
     * @param { DependentPhoneNumberListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: DependentPhoneNumberListInstanceEachOptions, callback?: (item: DependentPhoneNumberInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of DependentPhoneNumberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: DependentPhoneNumberPage) => any): Promise<DependentPhoneNumberPage>;
    /**
     * Retrieve a single target page of DependentPhoneNumberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: DependentPhoneNumberPage) => any): Promise<DependentPhoneNumberPage>;
    getPage(params?: any, callback?: any): Promise<DependentPhoneNumberPage>;
    /**
     * Lists DependentPhoneNumberInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: DependentPhoneNumberInstance[]) => any): Promise<DependentPhoneNumberInstance[]>;
    /**
     * Lists DependentPhoneNumberInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { DependentPhoneNumberListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: DependentPhoneNumberListInstanceOptions, callback?: (error: Error | null, items: DependentPhoneNumberInstance[]) => any): Promise<DependentPhoneNumberInstance[]>;
    list(params?: any, callback?: any): Promise<DependentPhoneNumberInstance[]>;
    /**
     * Retrieve a single page of DependentPhoneNumberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: DependentPhoneNumberPage) => any): Promise<DependentPhoneNumberPage>;
    /**
     * Retrieve a single page of DependentPhoneNumberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { DependentPhoneNumberListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: DependentPhoneNumberListInstancePageOptions, callback?: (error: Error | null, items: DependentPhoneNumberPage) => any): Promise<DependentPhoneNumberPage>;
    page(params?: any, callback?: any): Promise<DependentPhoneNumberPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DependentPhoneNumberSolution {
    accountSid?: string;
    addressSid?: string;
}
export declare function DependentPhoneNumberListInstance(version: V2010, accountSid: string, addressSid: string): DependentPhoneNumberListInstance;
export declare type DependentPhoneNumberVoiceMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type DependentPhoneNumberVoiceFallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type DependentPhoneNumberSmsFallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type DependentPhoneNumberSmsMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type DependentPhoneNumberStatusCallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
interface DependentPhoneNumberPayload extends TwilioResponsePayload {
    dependent_phone_numbers: DependentPhoneNumberResource[];
}
interface DependentPhoneNumberResource {
    sid?: string | null;
    account_sid?: string | null;
    friendly_name?: string | null;
    phone_number?: string | null;
    voice_url?: string | null;
    voice_method?: DependentPhoneNumberVoiceMethod;
    voice_fallback_method?: DependentPhoneNumberVoiceFallbackMethod;
    voice_fallback_url?: string | null;
    voice_caller_id_lookup?: boolean | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    sms_fallback_method?: DependentPhoneNumberSmsFallbackMethod;
    sms_fallback_url?: string | null;
    sms_method?: DependentPhoneNumberSmsMethod;
    sms_url?: string | null;
    address_requirements?: DependentPhoneNumberAddressRequirement;
    capabilities?: any | null;
    status_callback?: string | null;
    status_callback_method?: DependentPhoneNumberStatusCallbackMethod;
    api_version?: string | null;
    sms_application_sid?: string | null;
    voice_application_sid?: string | null;
    trunk_sid?: string | null;
    emergency_status?: DependentPhoneNumberEmergencyStatus;
    emergency_address_sid?: string | null;
    uri?: string | null;
}
export declare class DependentPhoneNumberInstance {
    protected _version: V2010;
    constructor(_version: V2010, payload: DependentPhoneNumberResource, accountSid: string, addressSid: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * The phone number in E.164 format
     */
    phoneNumber?: string | null;
    /**
     * The URL we call when the phone number receives a call
     */
    voiceUrl?: string | null;
    /**
     * The HTTP method used with the voice_url
     */
    voiceMethod?: DependentPhoneNumberVoiceMethod;
    /**
     * The HTTP method used with voice_fallback_url
     */
    voiceFallbackMethod?: DependentPhoneNumberVoiceFallbackMethod;
    /**
     * The URL we call when an error occurs in TwiML
     */
    voiceFallbackUrl?: string | null;
    /**
     * Whether to lookup the caller\'s name
     */
    voiceCallerIdLookup?: boolean | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The HTTP method used with sms_fallback_url
     */
    smsFallbackMethod?: DependentPhoneNumberSmsFallbackMethod;
    /**
     * The URL that we call when an error occurs while retrieving or executing the TwiML
     */
    smsFallbackUrl?: string | null;
    /**
     * The HTTP method to use with sms_url
     */
    smsMethod?: DependentPhoneNumberSmsMethod;
    /**
     * The URL we call when the phone number receives an incoming SMS message
     */
    smsUrl?: string | null;
    addressRequirements?: DependentPhoneNumberAddressRequirement;
    /**
     * Indicate if a phone can receive calls or messages
     */
    capabilities?: any | null;
    /**
     * The URL to send status information to your application
     */
    statusCallback?: string | null;
    /**
     * The HTTP method we use to call status_callback
     */
    statusCallbackMethod?: DependentPhoneNumberStatusCallbackMethod;
    /**
     * The API version used to start a new TwiML session
     */
    apiVersion?: string | null;
    /**
     * The SID of the application that handles SMS messages sent to the phone number
     */
    smsApplicationSid?: string | null;
    /**
     * The SID of the application that handles calls to the phone number
     */
    voiceApplicationSid?: string | null;
    /**
     * The SID of the Trunk that handles calls to the phone number
     */
    trunkSid?: string | null;
    emergencyStatus?: DependentPhoneNumberEmergencyStatus;
    /**
     * The emergency address configuration to use for emergency calling
     */
    emergencyAddressSid?: string | null;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        friendlyName: string | null | undefined;
        phoneNumber: string | null | undefined;
        voiceUrl: string | null | undefined;
        voiceMethod: DependentPhoneNumberVoiceMethod | undefined;
        voiceFallbackMethod: DependentPhoneNumberVoiceFallbackMethod | undefined;
        voiceFallbackUrl: string | null | undefined;
        voiceCallerIdLookup: boolean | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        smsFallbackMethod: DependentPhoneNumberSmsFallbackMethod | undefined;
        smsFallbackUrl: string | null | undefined;
        smsMethod: DependentPhoneNumberSmsMethod | undefined;
        smsUrl: string | null | undefined;
        addressRequirements: DependentPhoneNumberAddressRequirement | undefined;
        capabilities: any;
        statusCallback: string | null | undefined;
        statusCallbackMethod: DependentPhoneNumberStatusCallbackMethod | undefined;
        apiVersion: string | null | undefined;
        smsApplicationSid: string | null | undefined;
        voiceApplicationSid: string | null | undefined;
        trunkSid: string | null | undefined;
        emergencyStatus: DependentPhoneNumberEmergencyStatus | undefined;
        emergencyAddressSid: string | null | undefined;
        uri: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class DependentPhoneNumberPage extends Page<V2010, DependentPhoneNumberPayload, DependentPhoneNumberResource, DependentPhoneNumberInstance> {
    /**
     * Initialize the DependentPhoneNumberPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: DependentPhoneNumberSolution);
    /**
     * Build an instance of DependentPhoneNumberInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: DependentPhoneNumberResource): DependentPhoneNumberInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
