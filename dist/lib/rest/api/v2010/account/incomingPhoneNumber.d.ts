/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
import { AssignedAddOnListInstance } from "./incomingPhoneNumber/assignedAddOn";
import { LocalListInstance } from "./incomingPhoneNumber/local";
import { MobileListInstance } from "./incomingPhoneNumber/mobile";
import { TollFreeListInstance } from "./incomingPhoneNumber/tollFree";
import { PhoneNumberCapabilities } from "../../../../../lib/interfaces";
declare type IncomingPhoneNumberAddressRequirement = "none" | "any" | "local" | "foreign";
declare type IncomingPhoneNumberEmergencyAddressStatus = "registered" | "unregistered" | "pending-registration" | "registration-failure" | "pending-unregistration" | "unregistration-failure";
declare type IncomingPhoneNumberEmergencyStatus = "Active" | "Inactive";
declare type IncomingPhoneNumberVoiceReceiveMode = "voice" | "fax";
/**
 * Options to pass to update a IncomingPhoneNumberInstance
 *
 * @property { string } [accountSid] The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IncomingPhoneNumber resource to update.  For more information, see [Exchanging Numbers Between Subaccounts](https://www.twilio.com/docs/iam/api/subaccounts#exchanging-numbers).
 * @property { string } [apiVersion] The API version to use for incoming calls made to the phone number. The default is `2010-04-01`.
 * @property { string } [friendlyName] A descriptive string that you created to describe this phone number. It can be up to 64 characters long. By default, this is a formatted version of the phone number.
 * @property { string } [smsApplicationSid] The SID of the application that should handle SMS messages sent to the number. If an `sms_application_sid` is present, we ignore all of the `sms_*_url` urls and use those set on the application.
 * @property { string } [smsFallbackMethod] The HTTP method that we should use to call `sms_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
 * @property { string } [smsFallbackUrl] The URL that we should call when an error occurs while requesting or executing the TwiML defined by `sms_url`.
 * @property { string } [smsMethod] The HTTP method that we should use to call `sms_url`. Can be: `GET` or `POST` and defaults to `POST`.
 * @property { string } [smsUrl] The URL we should call when the phone number receives an incoming SMS message.
 * @property { string } [statusCallback] The URL we should call using the `status_callback_method` to send status information to your application.
 * @property { string } [statusCallbackMethod] The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
 * @property { string } [voiceApplicationSid] The SID of the application we should use to handle phone calls to the phone number. If a `voice_application_sid` is present, we ignore all of the voice urls and use only those set on the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid` and vice versa.
 * @property { boolean } [voiceCallerIdLookup] Whether to lookup the caller\\\'s name from the CNAM database and post it to your app. Can be: `true` or `false` and defaults to `false`.
 * @property { string } [voiceFallbackMethod] The HTTP method that we should use to call `voice_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
 * @property { string } [voiceFallbackUrl] The URL that we should call when an error occurs retrieving or executing the TwiML requested by `url`.
 * @property { string } [voiceMethod] The HTTP method that we should use to call `voice_url`. Can be: `GET` or `POST` and defaults to `POST`.
 * @property { string } [voiceUrl] The URL that we should call to answer a call to the phone number. The `voice_url` will not be called if a `voice_application_sid` or a `trunk_sid` is set.
 * @property { IncomingPhoneNumberEmergencyStatus } [emergencyStatus]
 * @property { string } [emergencyAddressSid] The SID of the emergency address configuration to use for emergency calling from this phone number.
 * @property { string } [trunkSid] The SID of the Trunk we should use to handle phone calls to the phone number. If a `trunk_sid` is present, we ignore all of the voice urls and voice applications and use only those set on the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and vice versa.
 * @property { IncomingPhoneNumberVoiceReceiveMode } [voiceReceiveMode]
 * @property { string } [identitySid] The SID of the Identity resource that we should associate with the phone number. Some regions require an identity to meet local regulations.
 * @property { string } [addressSid] The SID of the Address resource we should associate with the phone number. Some regions require addresses to meet local regulations.
 * @property { string } [bundleSid] The SID of the Bundle resource that you associate with the phone number. Some regions require a Bundle to meet local Regulations.
 */
export interface IncomingPhoneNumberContextUpdateOptions {
    accountSid?: string;
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
    emergencyStatus?: IncomingPhoneNumberEmergencyStatus;
    emergencyAddressSid?: string;
    trunkSid?: string;
    voiceReceiveMode?: IncomingPhoneNumberVoiceReceiveMode;
    identitySid?: string;
    addressSid?: string;
    bundleSid?: string;
}
/**
 * Options to pass to create a IncomingPhoneNumberInstance
 *
 * @property { string } [apiVersion] The API version to use for incoming calls made to the new phone number. The default is `2010-04-01`.
 * @property { string } [friendlyName] A descriptive string that you created to describe the new phone number. It can be up to 64 characters long. By default, this is a formatted version of the new phone number.
 * @property { string } [smsApplicationSid] The SID of the application that should handle SMS messages sent to the new phone number. If an `sms_application_sid` is present, we ignore all of the `sms_*_url` urls and use those set on the application.
 * @property { string } [smsFallbackMethod] The HTTP method that we should use to call `sms_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
 * @property { string } [smsFallbackUrl] The URL that we should call when an error occurs while requesting or executing the TwiML defined by `sms_url`.
 * @property { string } [smsMethod] The HTTP method that we should use to call `sms_url`. Can be: `GET` or `POST` and defaults to `POST`.
 * @property { string } [smsUrl] The URL we should call when the new phone number receives an incoming SMS message.
 * @property { string } [statusCallback] The URL we should call using the `status_callback_method` to send status information to your application.
 * @property { string } [statusCallbackMethod] The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
 * @property { string } [voiceApplicationSid] The SID of the application we should use to handle calls to the new phone number. If a `voice_application_sid` is present, we ignore all of the voice urls and use only those set on the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid` and vice versa.
 * @property { boolean } [voiceCallerIdLookup] Whether to lookup the caller\\\'s name from the CNAM database and post it to your app. Can be: `true` or `false` and defaults to `false`.
 * @property { string } [voiceFallbackMethod] The HTTP method that we should use to call `voice_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
 * @property { string } [voiceFallbackUrl] The URL that we should call when an error occurs retrieving or executing the TwiML requested by `url`.
 * @property { string } [voiceMethod] The HTTP method that we should use to call `voice_url`. Can be: `GET` or `POST` and defaults to `POST`.
 * @property { string } [voiceUrl] The URL that we should call to answer a call to the new phone number. The `voice_url` will not be called if a `voice_application_sid` or a `trunk_sid` is set.
 * @property { IncomingPhoneNumberEmergencyStatus } [emergencyStatus]
 * @property { string } [emergencyAddressSid] The SID of the emergency address configuration to use for emergency calling from the new phone number.
 * @property { string } [trunkSid] The SID of the Trunk we should use to handle calls to the new phone number. If a `trunk_sid` is present, we ignore all of the voice urls and voice applications and use only those set on the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and vice versa.
 * @property { string } [identitySid] The SID of the Identity resource that we should associate with the new phone number. Some regions require an identity to meet local regulations.
 * @property { string } [addressSid] The SID of the Address resource we should associate with the new phone number. Some regions require addresses to meet local regulations.
 * @property { IncomingPhoneNumberVoiceReceiveMode } [voiceReceiveMode]
 * @property { string } [bundleSid] The SID of the Bundle resource that you associate with the phone number. Some regions require a Bundle to meet local Regulations.
 * @property { string } [phoneNumber] The phone number to purchase specified in [E.164](https://www.twilio.com/docs/glossary/what-e164) format.  E.164 phone numbers consist of a + followed by the country code and subscriber number without punctuation characters. For example, +14155551234.
 * @property { string } [areaCode] The desired area code for your new incoming phone number. Can be any three-digit, US or Canada area code. We will provision an available phone number within this area code for you. **You must provide an `area_code` or a `phone_number`.** (US and Canada only).
 */
export interface IncomingPhoneNumberListInstanceCreateOptions {
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
    emergencyStatus?: IncomingPhoneNumberEmergencyStatus;
    emergencyAddressSid?: string;
    trunkSid?: string;
    identitySid?: string;
    addressSid?: string;
    voiceReceiveMode?: IncomingPhoneNumberVoiceReceiveMode;
    bundleSid?: string;
    phoneNumber?: string;
    areaCode?: string;
}
/**
 * Options to pass to each
 *
 * @property { boolean } [beta] Whether to include phone numbers new to the Twilio platform. Can be: `true` or `false` and the default is `true`.
 * @property { string } [friendlyName] A string that identifies the IncomingPhoneNumber resources to read.
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
export interface IncomingPhoneNumberListInstanceEachOptions {
    beta?: boolean;
    friendlyName?: string;
    phoneNumber?: string;
    origin?: string;
    pageSize?: number;
    callback?: (item: IncomingPhoneNumberInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { boolean } [beta] Whether to include phone numbers new to the Twilio platform. Can be: `true` or `false` and the default is `true`.
 * @property { string } [friendlyName] A string that identifies the IncomingPhoneNumber resources to read.
 * @property { string } [phoneNumber] The phone numbers of the IncomingPhoneNumber resources to read. You can specify partial numbers and use \'*\' as a wildcard for any digit.
 * @property { string } [origin] Whether to include phone numbers based on their origin. Can be: `twilio` or `hosted`. By default, phone numbers of all origin are included.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface IncomingPhoneNumberListInstanceOptions {
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
 * @property { string } [friendlyName] A string that identifies the IncomingPhoneNumber resources to read.
 * @property { string } [phoneNumber] The phone numbers of the IncomingPhoneNumber resources to read. You can specify partial numbers and use \'*\' as a wildcard for any digit.
 * @property { string } [origin] Whether to include phone numbers based on their origin. Can be: `twilio` or `hosted`. By default, phone numbers of all origin are included.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface IncomingPhoneNumberListInstancePageOptions {
    beta?: boolean;
    friendlyName?: string;
    phoneNumber?: string;
    origin?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface IncomingPhoneNumberContext {
    assignedAddOns: AssignedAddOnListInstance;
    /**
     * Remove a IncomingPhoneNumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a IncomingPhoneNumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IncomingPhoneNumberInstance
     */
    fetch(callback?: (error: Error | null, item?: IncomingPhoneNumberInstance) => any): Promise<IncomingPhoneNumberInstance>;
    /**
     * Update a IncomingPhoneNumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IncomingPhoneNumberInstance
     */
    update(callback?: (error: Error | null, item?: IncomingPhoneNumberInstance) => any): Promise<IncomingPhoneNumberInstance>;
    /**
     * Update a IncomingPhoneNumberInstance
     *
     * @param { IncomingPhoneNumberContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IncomingPhoneNumberInstance
     */
    update(params: IncomingPhoneNumberContextUpdateOptions, callback?: (error: Error | null, item?: IncomingPhoneNumberInstance) => any): Promise<IncomingPhoneNumberInstance>;
    update(params?: any, callback?: any): Promise<IncomingPhoneNumberInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface IncomingPhoneNumberContextSolution {
    accountSid?: string;
    sid?: string;
}
export declare class IncomingPhoneNumberContextImpl implements IncomingPhoneNumberContext {
    protected _version: V2010;
    protected _solution: IncomingPhoneNumberContextSolution;
    protected _uri: string;
    protected _assignedAddOns?: AssignedAddOnListInstance;
    constructor(_version: V2010, accountSid: string, sid: string);
    get assignedAddOns(): AssignedAddOnListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<IncomingPhoneNumberInstance>;
    update(params?: any, callback?: any): Promise<IncomingPhoneNumberInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): IncomingPhoneNumberContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare type IncomingPhoneNumberSmsFallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type IncomingPhoneNumberSmsMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type IncomingPhoneNumberStatusCallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type IncomingPhoneNumberVoiceFallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type IncomingPhoneNumberVoiceMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
interface IncomingPhoneNumberPayload extends TwilioResponsePayload {
    incoming_phone_numbers: IncomingPhoneNumberResource[];
}
interface IncomingPhoneNumberResource {
    account_sid?: string | null;
    address_sid?: string | null;
    address_requirements?: IncomingPhoneNumberAddressRequirement;
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
    sms_fallback_method?: IncomingPhoneNumberSmsFallbackMethod;
    sms_fallback_url?: string | null;
    sms_method?: IncomingPhoneNumberSmsMethod;
    sms_url?: string | null;
    status_callback?: string | null;
    status_callback_method?: IncomingPhoneNumberStatusCallbackMethod;
    trunk_sid?: string | null;
    uri?: string | null;
    voice_receive_mode?: IncomingPhoneNumberVoiceReceiveMode;
    voice_application_sid?: string | null;
    voice_caller_id_lookup?: boolean | null;
    voice_fallback_method?: IncomingPhoneNumberVoiceFallbackMethod;
    voice_fallback_url?: string | null;
    voice_method?: IncomingPhoneNumberVoiceMethod;
    voice_url?: string | null;
    emergency_status?: IncomingPhoneNumberEmergencyStatus;
    emergency_address_sid?: string | null;
    emergency_address_status?: IncomingPhoneNumberEmergencyAddressStatus;
    bundle_sid?: string | null;
    status?: string | null;
}
export declare class IncomingPhoneNumberInstance {
    protected _version: V2010;
    protected _solution: IncomingPhoneNumberContextSolution;
    protected _context?: IncomingPhoneNumberContext;
    constructor(_version: V2010, payload: IncomingPhoneNumberResource, accountSid: string, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Address resource associated with the phone number
     */
    addressSid?: string | null;
    addressRequirements?: IncomingPhoneNumberAddressRequirement;
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
    smsFallbackMethod?: IncomingPhoneNumberSmsFallbackMethod;
    /**
     * The URL that we call when an error occurs while retrieving or executing the TwiML
     */
    smsFallbackUrl?: string | null;
    /**
     * The HTTP method to use with sms_url
     */
    smsMethod?: IncomingPhoneNumberSmsMethod;
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
    statusCallbackMethod?: IncomingPhoneNumberStatusCallbackMethod;
    /**
     * The SID of the Trunk that handles calls to the phone number
     */
    trunkSid?: string | null;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    voiceReceiveMode?: IncomingPhoneNumberVoiceReceiveMode;
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
    voiceFallbackMethod?: IncomingPhoneNumberVoiceFallbackMethod;
    /**
     * The URL we call when an error occurs in TwiML
     */
    voiceFallbackUrl?: string | null;
    /**
     * The HTTP method used with the voice_url
     */
    voiceMethod?: IncomingPhoneNumberVoiceMethod;
    /**
     * The URL we call when the phone number receives a call
     */
    voiceUrl?: string | null;
    emergencyStatus?: IncomingPhoneNumberEmergencyStatus;
    /**
     * The emergency address configuration to use for emergency calling
     */
    emergencyAddressSid?: string | null;
    emergencyAddressStatus?: IncomingPhoneNumberEmergencyAddressStatus;
    /**
     * The SID of the Bundle resource associated with number
     */
    bundleSid?: string | null;
    status?: string | null;
    private get _proxy();
    /**
     * Remove a IncomingPhoneNumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a IncomingPhoneNumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IncomingPhoneNumberInstance
     */
    fetch(callback?: (error: Error | null, item?: IncomingPhoneNumberInstance) => any): Promise<IncomingPhoneNumberInstance>;
    /**
     * Update a IncomingPhoneNumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IncomingPhoneNumberInstance
     */
    update(callback?: (error: Error | null, item?: IncomingPhoneNumberInstance) => any): Promise<IncomingPhoneNumberInstance>;
    /**
     * Update a IncomingPhoneNumberInstance
     *
     * @param { IncomingPhoneNumberContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IncomingPhoneNumberInstance
     */
    update(params: IncomingPhoneNumberContextUpdateOptions, callback?: (error: Error | null, item?: IncomingPhoneNumberInstance) => any): Promise<IncomingPhoneNumberInstance>;
    /**
     * Access the assignedAddOns.
     */
    assignedAddOns(): AssignedAddOnListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        addressSid: string | null | undefined;
        addressRequirements: IncomingPhoneNumberAddressRequirement | undefined;
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
        smsFallbackMethod: IncomingPhoneNumberSmsFallbackMethod | undefined;
        smsFallbackUrl: string | null | undefined;
        smsMethod: IncomingPhoneNumberSmsMethod | undefined;
        smsUrl: string | null | undefined;
        statusCallback: string | null | undefined;
        statusCallbackMethod: IncomingPhoneNumberStatusCallbackMethod | undefined;
        trunkSid: string | null | undefined;
        uri: string | null | undefined;
        voiceReceiveMode: IncomingPhoneNumberVoiceReceiveMode | undefined;
        voiceApplicationSid: string | null | undefined;
        voiceCallerIdLookup: boolean | null | undefined;
        voiceFallbackMethod: IncomingPhoneNumberVoiceFallbackMethod | undefined;
        voiceFallbackUrl: string | null | undefined;
        voiceMethod: IncomingPhoneNumberVoiceMethod | undefined;
        voiceUrl: string | null | undefined;
        emergencyStatus: IncomingPhoneNumberEmergencyStatus | undefined;
        emergencyAddressSid: string | null | undefined;
        emergencyAddressStatus: IncomingPhoneNumberEmergencyAddressStatus | undefined;
        bundleSid: string | null | undefined;
        status: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface IncomingPhoneNumberListInstance {
    (sid: string): IncomingPhoneNumberContext;
    get(sid: string): IncomingPhoneNumberContext;
    local: LocalListInstance;
    mobile: MobileListInstance;
    tollFree: TollFreeListInstance;
    /**
     * Create a IncomingPhoneNumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IncomingPhoneNumberInstance
     */
    create(callback?: (error: Error | null, item?: IncomingPhoneNumberInstance) => any): Promise<IncomingPhoneNumberInstance>;
    /**
     * Create a IncomingPhoneNumberInstance
     *
     * @param { IncomingPhoneNumberListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IncomingPhoneNumberInstance
     */
    create(params: IncomingPhoneNumberListInstanceCreateOptions, callback?: (error: Error | null, item?: IncomingPhoneNumberInstance) => any): Promise<IncomingPhoneNumberInstance>;
    create(params?: any, callback?: any): Promise<IncomingPhoneNumberInstance>;
    /**
     * Streams IncomingPhoneNumberInstance records from the API.
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
    each(callback?: (item: IncomingPhoneNumberInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams IncomingPhoneNumberInstance records from the API.
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
     * @param { IncomingPhoneNumberListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: IncomingPhoneNumberListInstanceEachOptions, callback?: (item: IncomingPhoneNumberInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of IncomingPhoneNumberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: IncomingPhoneNumberPage) => any): Promise<IncomingPhoneNumberPage>;
    /**
     * Retrieve a single target page of IncomingPhoneNumberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: IncomingPhoneNumberPage) => any): Promise<IncomingPhoneNumberPage>;
    getPage(params?: any, callback?: any): Promise<IncomingPhoneNumberPage>;
    /**
     * Lists IncomingPhoneNumberInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: IncomingPhoneNumberInstance[]) => any): Promise<IncomingPhoneNumberInstance[]>;
    /**
     * Lists IncomingPhoneNumberInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { IncomingPhoneNumberListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: IncomingPhoneNumberListInstanceOptions, callback?: (error: Error | null, items: IncomingPhoneNumberInstance[]) => any): Promise<IncomingPhoneNumberInstance[]>;
    list(params?: any, callback?: any): Promise<IncomingPhoneNumberInstance[]>;
    /**
     * Retrieve a single page of IncomingPhoneNumberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: IncomingPhoneNumberPage) => any): Promise<IncomingPhoneNumberPage>;
    /**
     * Retrieve a single page of IncomingPhoneNumberInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { IncomingPhoneNumberListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: IncomingPhoneNumberListInstancePageOptions, callback?: (error: Error | null, items: IncomingPhoneNumberPage) => any): Promise<IncomingPhoneNumberPage>;
    page(params?: any, callback?: any): Promise<IncomingPhoneNumberPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface IncomingPhoneNumberSolution {
    accountSid?: string;
}
export declare function IncomingPhoneNumberListInstance(version: V2010, accountSid: string): IncomingPhoneNumberListInstance;
export declare class IncomingPhoneNumberPage extends Page<V2010, IncomingPhoneNumberPayload, IncomingPhoneNumberResource, IncomingPhoneNumberInstance> {
    /**
     * Initialize the IncomingPhoneNumberPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: IncomingPhoneNumberSolution);
    /**
     * Build an instance of IncomingPhoneNumberInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: IncomingPhoneNumberResource): IncomingPhoneNumberInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
