/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
import { PhoneNumberCapabilities } from "../../../../../../lib/interfaces";
declare type IncomingPhoneNumberTollFreeAddressRequirement = "none" | "any" | "local" | "foreign";
declare type IncomingPhoneNumberTollFreeEmergencyAddressStatus = "registered" | "unregistered" | "pending-registration" | "registration-failure" | "pending-unregistration" | "unregistration-failure";
declare type IncomingPhoneNumberTollFreeEmergencyStatus = "Active" | "Inactive";
declare type IncomingPhoneNumberTollFreeVoiceReceiveMode = "voice" | "fax";
/**
 * Options to pass to create a TollFreeInstance
 *
 * @property { string } phoneNumber The phone number to purchase specified in [E.164](https://www.twilio.com/docs/glossary/what-e164) format.  E.164 phone numbers consist of a + followed by the country code and subscriber number without punctuation characters. For example, +14155551234.
 * @property { string } [apiVersion] The API version to use for incoming calls made to the new phone number. The default is `2010-04-01`.
 * @property { string } [friendlyName] A descriptive string that you created to describe the new phone number. It can be up to 64 characters long. By default, this is a formatted version of the phone number.
 * @property { string } [smsApplicationSid] The SID of the application that should handle SMS messages sent to the new phone number. If an `sms_application_sid` is present, we ignore all `sms_*_url` values and use those of the application.
 * @property { string } [smsFallbackMethod] The HTTP method that we should use to call `sms_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
 * @property { string } [smsFallbackUrl] The URL that we should call when an error occurs while requesting or executing the TwiML defined by `sms_url`.
 * @property { string } [smsMethod] The HTTP method that we should use to call `sms_url`. Can be: `GET` or `POST` and defaults to `POST`.
 * @property { string } [smsUrl] The URL we should call when the new phone number receives an incoming SMS message.
 * @property { string } [statusCallback] The URL we should call using the `status_callback_method` to send status information to your application.
 * @property { string } [statusCallbackMethod] The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
 * @property { string } [voiceApplicationSid] The SID of the application we should use to handle calls to the new phone number. If a `voice_application_sid` is present, we ignore all of the voice urls and use those set on the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid` and vice versa.
 * @property { boolean } [voiceCallerIdLookup] Whether to lookup the caller\\\'s name from the CNAM database and post it to your app. Can be: `true` or `false` and defaults to `false`.
 * @property { string } [voiceFallbackMethod] The HTTP method that we should use to call `voice_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
 * @property { string } [voiceFallbackUrl] The URL that we should call when an error occurs retrieving or executing the TwiML requested by `url`.
 * @property { string } [voiceMethod] The HTTP method that we should use to call `voice_url`. Can be: `GET` or `POST` and defaults to `POST`.
 * @property { string } [voiceUrl] The URL that we should call to answer a call to the new phone number. The `voice_url` will not be called if a `voice_application_sid` or a `trunk_sid` is set.
 * @property { string } [identitySid] The SID of the Identity resource that we should associate with the new phone number. Some regions require an Identity to meet local regulations.
 * @property { string } [addressSid] The SID of the Address resource we should associate with the new phone number. Some regions require addresses to meet local regulations.
 * @property { IncomingPhoneNumberTollFreeEmergencyStatus } [emergencyStatus]
 * @property { string } [emergencyAddressSid] The SID of the emergency address configuration to use for emergency calling from the new phone number.
 * @property { string } [trunkSid] The SID of the Trunk we should use to handle calls to the new phone number. If a `trunk_sid` is present, we ignore all of the voice urls and voice applications and use only those set on the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and vice versa.
 * @property { IncomingPhoneNumberTollFreeVoiceReceiveMode } [voiceReceiveMode]
 * @property { string } [bundleSid] The SID of the Bundle resource that you associate with the phone number. Some regions require a Bundle to meet local Regulations.
 */
export interface TollFreeListInstanceCreateOptions {
    phoneNumber: string;
    apiVersion?: string;
    friendlyName?: string;
    smsApplicationSid?: string;
    smsFallbackMethod?: string;
    smsFallbackUrl?: string;
    smsMethod?: string;
    smsUrl?: string;
    statusCallback?: string;
    statusCallbackMethod?: string;
    voiceApplicationSid?: string;
    voiceCallerIdLookup?: boolean;
    voiceFallbackMethod?: string;
    voiceFallbackUrl?: string;
    voiceMethod?: string;
    voiceUrl?: string;
    identitySid?: string;
    addressSid?: string;
    emergencyStatus?: IncomingPhoneNumberTollFreeEmergencyStatus;
    emergencyAddressSid?: string;
    trunkSid?: string;
    voiceReceiveMode?: IncomingPhoneNumberTollFreeVoiceReceiveMode;
    bundleSid?: string;
}
/**
 * Options to pass to each
 *
 * @property { boolean } [beta] Whether to include phone numbers new to the Twilio platform. Can be: `true` or `false` and the default is `true`.
 * @property { string } [friendlyName] A string that identifies the resources to read.
 * @property { string } [phoneNumber] The phone numbers of the IncomingPhoneNumber resources to read. You can specify partial numbers and use \'*\' as a wildcard for any digit.
 * @property { string } [origin] Whether to include phone numbers based on their origin. Can be: `twilio` or `hosted`. By default, phone numbers of all origin are included.
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
export interface TollFreeListInstanceEachOptions {
    beta?: boolean;
    friendlyName?: string;
    phoneNumber?: string;
    origin?: string;
    pageSize?: number;
    callback?: (item: TollFreeInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { boolean } [beta] Whether to include phone numbers new to the Twilio platform. Can be: `true` or `false` and the default is `true`.
 * @property { string } [friendlyName] A string that identifies the resources to read.
 * @property { string } [phoneNumber] The phone numbers of the IncomingPhoneNumber resources to read. You can specify partial numbers and use \'*\' as a wildcard for any digit.
 * @property { string } [origin] Whether to include phone numbers based on their origin. Can be: `twilio` or `hosted`. By default, phone numbers of all origin are included.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface TollFreeListInstanceOptions {
    beta?: boolean;
    friendlyName?: string;
    phoneNumber?: string;
    origin?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { boolean } [beta] Whether to include phone numbers new to the Twilio platform. Can be: `true` or `false` and the default is `true`.
 * @property { string } [friendlyName] A string that identifies the resources to read.
 * @property { string } [phoneNumber] The phone numbers of the IncomingPhoneNumber resources to read. You can specify partial numbers and use \'*\' as a wildcard for any digit.
 * @property { string } [origin] Whether to include phone numbers based on their origin. Can be: `twilio` or `hosted`. By default, phone numbers of all origin are included.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface TollFreeListInstancePageOptions {
    beta?: boolean;
    friendlyName?: string;
    phoneNumber?: string;
    origin?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface TollFreeListInstance {
    /**
     * Create a TollFreeInstance
     *
     * @param { TollFreeListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TollFreeInstance
     */
    create(params: TollFreeListInstanceCreateOptions, callback?: (error: Error | null, item?: TollFreeInstance) => any): Promise<TollFreeInstance>;
    create(params: any, callback?: any): Promise<TollFreeInstance>;
    /**
     * Streams TollFreeInstance records from the API.
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
    each(callback?: (item: TollFreeInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams TollFreeInstance records from the API.
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
     * @param { TollFreeListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: TollFreeListInstanceEachOptions, callback?: (item: TollFreeInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of TollFreeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: TollFreePage) => any): Promise<TollFreePage>;
    /**
     * Retrieve a single target page of TollFreeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: TollFreePage) => any): Promise<TollFreePage>;
    getPage(params?: any, callback?: any): Promise<TollFreePage>;
    /**
     * Lists TollFreeInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: TollFreeInstance[]) => any): Promise<TollFreeInstance[]>;
    /**
     * Lists TollFreeInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TollFreeListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: TollFreeListInstanceOptions, callback?: (error: Error | null, items: TollFreeInstance[]) => any): Promise<TollFreeInstance[]>;
    list(params?: any, callback?: any): Promise<TollFreeInstance[]>;
    /**
     * Retrieve a single page of TollFreeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: TollFreePage) => any): Promise<TollFreePage>;
    /**
     * Retrieve a single page of TollFreeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TollFreeListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: TollFreeListInstancePageOptions, callback?: (error: Error | null, items: TollFreePage) => any): Promise<TollFreePage>;
    page(params?: any, callback?: any): Promise<TollFreePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TollFreeSolution {
    accountSid?: string;
}
export declare function TollFreeListInstance(version: V2010, accountSid: string): TollFreeListInstance;
export declare type TollFreeSmsFallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type TollFreeSmsMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type TollFreeStatusCallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type TollFreeVoiceFallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type TollFreeVoiceMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
interface TollFreePayload extends TwilioResponsePayload {
    incoming_phone_numbers: TollFreeResource[];
}
interface TollFreeResource {
    account_sid?: string | null;
    address_sid?: string | null;
    address_requirements?: IncomingPhoneNumberTollFreeAddressRequirement;
    api_version?: string | null;
    beta?: boolean | null;
    capabilities?: PhoneNumberCapabilities | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    friendly_name?: string | null;
    identity_sid?: string | null;
    phone_number?: string | null;
    origin?: string | null;
    sid?: string | null;
    sms_application_sid?: string | null;
    sms_fallback_method?: TollFreeSmsFallbackMethod;
    sms_fallback_url?: string | null;
    sms_method?: TollFreeSmsMethod;
    sms_url?: string | null;
    status_callback?: string | null;
    status_callback_method?: TollFreeStatusCallbackMethod;
    trunk_sid?: string | null;
    uri?: string | null;
    voice_receive_mode?: IncomingPhoneNumberTollFreeVoiceReceiveMode;
    voice_application_sid?: string | null;
    voice_caller_id_lookup?: boolean | null;
    voice_fallback_method?: TollFreeVoiceFallbackMethod;
    voice_fallback_url?: string | null;
    voice_method?: TollFreeVoiceMethod;
    voice_url?: string | null;
    emergency_status?: IncomingPhoneNumberTollFreeEmergencyStatus;
    emergency_address_sid?: string | null;
    emergency_address_status?: IncomingPhoneNumberTollFreeEmergencyAddressStatus;
    bundle_sid?: string | null;
    status?: string | null;
}
export declare class TollFreeInstance {
    protected _version: V2010;
    constructor(_version: V2010, payload: TollFreeResource, accountSid: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Address resource associated with the phone number
     */
    addressSid?: string | null;
    addressRequirements?: IncomingPhoneNumberTollFreeAddressRequirement;
    /**
     * The API version used to start a new TwiML session
     */
    apiVersion?: string | null;
    /**
     * Whether the phone number is new to the Twilio platform
     */
    beta?: boolean | null;
    capabilities?: PhoneNumberCapabilities | null;
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
     * The SID of the Identity resource associated with number
     */
    identitySid?: string | null;
    /**
     * The phone number in E.164 format
     */
    phoneNumber?: string | null;
    /**
     * The phone number\'s origin. Can be twilio or hosted.
     */
    origin?: string | null;
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
    smsFallbackMethod?: TollFreeSmsFallbackMethod;
    /**
     * The URL that we call when an error occurs while retrieving or executing the TwiML
     */
    smsFallbackUrl?: string | null;
    /**
     * The HTTP method to use with sms_url
     */
    smsMethod?: TollFreeSmsMethod;
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
    statusCallbackMethod?: TollFreeStatusCallbackMethod;
    /**
     * The SID of the Trunk that handles calls to the phone number
     */
    trunkSid?: string | null;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    voiceReceiveMode?: IncomingPhoneNumberTollFreeVoiceReceiveMode;
    /**
     * The SID of the application that handles calls to the phone number
     */
    voiceApplicationSid?: string | null;
    /**
     * Whether to lookup the caller\'s name
     */
    voiceCallerIdLookup?: boolean | null;
    /**
     * The HTTP method used with voice_fallback_url
     */
    voiceFallbackMethod?: TollFreeVoiceFallbackMethod;
    /**
     * The URL we call when an error occurs in TwiML
     */
    voiceFallbackUrl?: string | null;
    /**
     * The HTTP method used with the voice_url
     */
    voiceMethod?: TollFreeVoiceMethod;
    /**
     * The URL we call when the phone number receives a call
     */
    voiceUrl?: string | null;
    emergencyStatus?: IncomingPhoneNumberTollFreeEmergencyStatus;
    /**
     * The emergency address configuration to use for emergency calling
     */
    emergencyAddressSid?: string | null;
    emergencyAddressStatus?: IncomingPhoneNumberTollFreeEmergencyAddressStatus;
    /**
     * The SID of the Bundle resource associated with number
     */
    bundleSid?: string | null;
    status?: string | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        addressSid: string | null | undefined;
        addressRequirements: IncomingPhoneNumberTollFreeAddressRequirement | undefined;
        apiVersion: string | null | undefined;
        beta: boolean | null | undefined;
        capabilities: PhoneNumberCapabilities | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        friendlyName: string | null | undefined;
        identitySid: string | null | undefined;
        phoneNumber: string | null | undefined;
        origin: string | null | undefined;
        sid: string | null | undefined;
        smsApplicationSid: string | null | undefined;
        smsFallbackMethod: TollFreeSmsFallbackMethod | undefined;
        smsFallbackUrl: string | null | undefined;
        smsMethod: TollFreeSmsMethod | undefined;
        smsUrl: string | null | undefined;
        statusCallback: string | null | undefined;
        statusCallbackMethod: TollFreeStatusCallbackMethod | undefined;
        trunkSid: string | null | undefined;
        uri: string | null | undefined;
        voiceReceiveMode: IncomingPhoneNumberTollFreeVoiceReceiveMode | undefined;
        voiceApplicationSid: string | null | undefined;
        voiceCallerIdLookup: boolean | null | undefined;
        voiceFallbackMethod: TollFreeVoiceFallbackMethod | undefined;
        voiceFallbackUrl: string | null | undefined;
        voiceMethod: TollFreeVoiceMethod | undefined;
        voiceUrl: string | null | undefined;
        emergencyStatus: IncomingPhoneNumberTollFreeEmergencyStatus | undefined;
        emergencyAddressSid: string | null | undefined;
        emergencyAddressStatus: IncomingPhoneNumberTollFreeEmergencyAddressStatus | undefined;
        bundleSid: string | null | undefined;
        status: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class TollFreePage extends Page<V2010, TollFreePayload, TollFreeResource, TollFreeInstance> {
    /**
     * Initialize the TollFreePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: TollFreeSolution);
    /**
     * Build an instance of TollFreeInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: TollFreeResource): TollFreeInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
