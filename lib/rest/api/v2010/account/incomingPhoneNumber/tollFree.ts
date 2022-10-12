/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");


/**
 * Options to pass to create a TollFreeInstance
 *
 * @property { string } phoneNumber The phone number to purchase specified in [E.164](https://www.twilio.com/docs/glossary/what-e164) format.  E.164 phone numbers consist of a + followed by the country code and subscriber number without punctuation characters. For example, +14155551234.
 * @property { string } [apiVersion] The API version to use for incoming calls made to the new phone number. The default is &#x60;2010-04-01&#x60;.
 * @property { string } [friendlyName] A descriptive string that you created to describe the new phone number. It can be up to 64 characters long. By default, this is a formatted version of the phone number.
 * @property { string } [smsApplicationSid] The SID of the application that should handle SMS messages sent to the new phone number. If an &#x60;sms_application_sid&#x60; is present, we ignore all &#x60;sms_*_url&#x60; values and use those of the application.
 * @property { string } [smsFallbackMethod] The HTTP method that we should use to call &#x60;sms_fallback_url&#x60;. Can be: &#x60;GET&#x60; or &#x60;POST&#x60; and defaults to &#x60;POST&#x60;.
 * @property { string } [smsFallbackUrl] The URL that we should call when an error occurs while requesting or executing the TwiML defined by &#x60;sms_url&#x60;.
 * @property { string } [smsMethod] The HTTP method that we should use to call &#x60;sms_url&#x60;. Can be: &#x60;GET&#x60; or &#x60;POST&#x60; and defaults to &#x60;POST&#x60;.
 * @property { string } [smsUrl] The URL we should call when the new phone number receives an incoming SMS message.
 * @property { string } [statusCallback] The URL we should call using the &#x60;status_callback_method&#x60; to send status information to your application.
 * @property { string } [statusCallbackMethod] The HTTP method we should use to call &#x60;status_callback&#x60;. Can be: &#x60;GET&#x60; or &#x60;POST&#x60; and defaults to &#x60;POST&#x60;.
 * @property { string } [voiceApplicationSid] The SID of the application we should use to handle calls to the new phone number. If a &#x60;voice_application_sid&#x60; is present, we ignore all of the voice urls and use those set on the application. Setting a &#x60;voice_application_sid&#x60; will automatically delete your &#x60;trunk_sid&#x60; and vice versa.
 * @property { boolean } [voiceCallerIdLookup] Whether to lookup the caller\\\&#39;s name from the CNAM database and post it to your app. Can be: &#x60;true&#x60; or &#x60;false&#x60; and defaults to &#x60;false&#x60;.
 * @property { string } [voiceFallbackMethod] The HTTP method that we should use to call &#x60;voice_fallback_url&#x60;. Can be: &#x60;GET&#x60; or &#x60;POST&#x60; and defaults to &#x60;POST&#x60;.
 * @property { string } [voiceFallbackUrl] The URL that we should call when an error occurs retrieving or executing the TwiML requested by &#x60;url&#x60;.
 * @property { string } [voiceMethod] The HTTP method that we should use to call &#x60;voice_url&#x60;. Can be: &#x60;GET&#x60; or &#x60;POST&#x60; and defaults to &#x60;POST&#x60;.
 * @property { string } [voiceUrl] The URL that we should call to answer a call to the new phone number. The &#x60;voice_url&#x60; will not be called if a &#x60;voice_application_sid&#x60; or a &#x60;trunk_sid&#x60; is set.
 * @property { string } [identitySid] The SID of the Identity resource that we should associate with the new phone number. Some regions require an Identity to meet local regulations.
 * @property { string } [addressSid] The SID of the Address resource we should associate with the new phone number. Some regions require addresses to meet local regulations.
 * @property { IncomingPhoneNumberTollFreeEnumEmergencyStatus } [emergencyStatus] 
 * @property { string } [emergencyAddressSid] The SID of the emergency address configuration to use for emergency calling from the new phone number.
 * @property { string } [trunkSid] The SID of the Trunk we should use to handle calls to the new phone number. If a &#x60;trunk_sid&#x60; is present, we ignore all of the voice urls and voice applications and use only those set on the Trunk. Setting a &#x60;trunk_sid&#x60; will automatically delete your &#x60;voice_application_sid&#x60; and vice versa.
 * @property { IncomingPhoneNumberTollFreeEnumVoiceReceiveMode } [voiceReceiveMode] 
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
  emergencyStatus?: IncomingPhoneNumberTollFreeEnumEmergencyStatus;
  emergencyAddressSid?: string;
  trunkSid?: string;
  voiceReceiveMode?: IncomingPhoneNumberTollFreeEnumVoiceReceiveMode;
  bundleSid?: string;
}
/**
 * Options to pass to each
 *
 * @property { boolean } [beta] Whether to include phone numbers new to the Twilio platform. Can be: &#x60;true&#x60; or &#x60;false&#x60; and the default is &#x60;true&#x60;.
 * @property { string } [friendlyName] A string that identifies the resources to read.
 * @property { string } [phoneNumber] The phone numbers of the IncomingPhoneNumber resources to read. You can specify partial numbers and use \&#39;*\&#39; as a wildcard for any digit.
 * @property { string } [origin] Whether to include phone numbers based on their origin. Can be: &#x60;twilio&#x60; or &#x60;hosted&#x60;. By default, phone numbers of all origin are included.
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
 * @property { boolean } [beta] Whether to include phone numbers new to the Twilio platform. Can be: &#x60;true&#x60; or &#x60;false&#x60; and the default is &#x60;true&#x60;.
 * @property { string } [friendlyName] A string that identifies the resources to read.
 * @property { string } [phoneNumber] The phone numbers of the IncomingPhoneNumber resources to read. You can specify partial numbers and use \&#39;*\&#39; as a wildcard for any digit.
 * @property { string } [origin] Whether to include phone numbers based on their origin. Can be: &#x60;twilio&#x60; or &#x60;hosted&#x60;. By default, phone numbers of all origin are included.
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
 * @property { boolean } [beta] Whether to include phone numbers new to the Twilio platform. Can be: &#x60;true&#x60; or &#x60;false&#x60; and the default is &#x60;true&#x60;.
 * @property { string } [friendlyName] A string that identifies the resources to read.
 * @property { string } [phoneNumber] The phone numbers of the IncomingPhoneNumber resources to read. You can specify partial numbers and use \&#39;*\&#39; as a wildcard for any digit.
 * @property { string } [origin] Whether to include phone numbers based on their origin. Can be: &#x60;twilio&#x60; or &#x60;hosted&#x60;. By default, phone numbers of all origin are included.
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
  create(params: any, callback?: any): Promise<TollFreeInstance>



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

interface TollFreeListInstanceImpl extends TollFreeListInstance {}
class TollFreeListInstanceImpl implements TollFreeListInstance {
  _version?: V2010;
  _solution?: TollFreeSolution;
  _uri?: string;

}

export function TollFreeListInstance(version: V2010, accountSid: string): TollFreeListInstance {
  const instance = {} as TollFreeListInstanceImpl;

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/IncomingPhoneNumbers/TollFree.json`;

  instance.create = function create(params: any, callback?: any): Promise<TollFreeInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.phoneNumber === null || params.phoneNumber === undefined) {
      throw new Error('Required parameter "params.phoneNumber" missing.');
    }

    const data: any = {};

    data['PhoneNumber'] = params.phoneNumber;
    if (params.apiVersion !== undefined) data['ApiVersion'] = params.apiVersion;
    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;
    if (params.smsApplicationSid !== undefined) data['SmsApplicationSid'] = params.smsApplicationSid;
    if (params.smsFallbackMethod !== undefined) data['SmsFallbackMethod'] = params.smsFallbackMethod;
    if (params.smsFallbackUrl !== undefined) data['SmsFallbackUrl'] = params.smsFallbackUrl;
    if (params.smsMethod !== undefined) data['SmsMethod'] = params.smsMethod;
    if (params.smsUrl !== undefined) data['SmsUrl'] = params.smsUrl;
    if (params.statusCallback !== undefined) data['StatusCallback'] = params.statusCallback;
    if (params.statusCallbackMethod !== undefined) data['StatusCallbackMethod'] = params.statusCallbackMethod;
    if (params.voiceApplicationSid !== undefined) data['VoiceApplicationSid'] = params.voiceApplicationSid;
    if (params.voiceCallerIdLookup !== undefined) data['VoiceCallerIdLookup'] = serialize.bool(params.voiceCallerIdLookup);
    if (params.voiceFallbackMethod !== undefined) data['VoiceFallbackMethod'] = params.voiceFallbackMethod;
    if (params.voiceFallbackUrl !== undefined) data['VoiceFallbackUrl'] = params.voiceFallbackUrl;
    if (params.voiceMethod !== undefined) data['VoiceMethod'] = params.voiceMethod;
    if (params.voiceUrl !== undefined) data['VoiceUrl'] = params.voiceUrl;
    if (params.identitySid !== undefined) data['IdentitySid'] = params.identitySid;
    if (params.addressSid !== undefined) data['AddressSid'] = params.addressSid;
    if (params.emergencyStatus !== undefined) data['EmergencyStatus'] = params.emergencyStatus;
    if (params.emergencyAddressSid !== undefined) data['EmergencyAddressSid'] = params.emergencyAddressSid;
    if (params.trunkSid !== undefined) data['TrunkSid'] = params.trunkSid;
    if (params.voiceReceiveMode !== undefined) data['VoiceReceiveMode'] = params.voiceReceiveMode;
    if (params.bundleSid !== undefined) data['BundleSid'] = params.bundleSid;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new TollFreeInstance(operationVersion, payload, this._solution.accountSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(params?: any, callback?: any): Promise<TollFreePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.beta !== undefined) data['Beta'] = serialize.bool(params.beta);
    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;
    if (params.phoneNumber !== undefined) data['PhoneNumber'] = params.phoneNumber;
    if (params.origin !== undefined) data['Origin'] = params.origin;
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new TollFreePage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<TollFreePage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new TollFreePage(this._version, payload, this._solution));
    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;
  }



  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}
export type TollFreeSmsFallbackMethod = 'HEAD'|'GET'|'POST'|'PATCH'|'PUT'|'DELETE';
export type TollFreeSmsMethod = 'HEAD'|'GET'|'POST'|'PATCH'|'PUT'|'DELETE';
export type TollFreeStatusCallbackMethod = 'HEAD'|'GET'|'POST'|'PATCH'|'PUT'|'DELETE';
export type TollFreeVoiceFallbackMethod = 'HEAD'|'GET'|'POST'|'PATCH'|'PUT'|'DELETE';
export type TollFreeVoiceMethod = 'HEAD'|'GET'|'POST'|'PATCH'|'PUT'|'DELETE';

interface TollFreePayload extends TollFreeResource, Page.TwilioResponsePayload {
}

interface TollFreeResource {
  account_sid?: string | null;
  address_sid?: string | null;
  address_requirements?: object;
  api_version?: string | null;
  beta?: boolean | null;
  capabilities?: object | null;
  date_created?: string | null;
  date_updated?: string | null;
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
  voice_receive_mode?: object;
  voice_application_sid?: string | null;
  voice_caller_id_lookup?: boolean | null;
  voice_fallback_method?: TollFreeVoiceFallbackMethod;
  voice_fallback_url?: string | null;
  voice_method?: TollFreeVoiceMethod;
  voice_url?: string | null;
  emergency_status?: object;
  emergency_address_sid?: string | null;
  emergency_address_status?: object;
  bundle_sid?: string | null;
  status?: string | null;
}

export class TollFreeInstance {
  protected _solution: TollFreeSolution;
  protected _context?: TollFreeListInstance;

  constructor(protected _version: V2010, payload: TollFreePayload, accountSid?: string) {
    this.accountSid = payload.account_sid;
    this.addressSid = payload.address_sid;
    this.addressRequirements = payload.address_requirements;
    this.apiVersion = payload.api_version;
    this.beta = payload.beta;
    this.capabilities = payload.capabilities;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.identitySid = payload.identity_sid;
    this.phoneNumber = payload.phone_number;
    this.origin = payload.origin;
    this.sid = payload.sid;
    this.smsApplicationSid = payload.sms_application_sid;
    this.smsFallbackMethod = payload.sms_fallback_method;
    this.smsFallbackUrl = payload.sms_fallback_url;
    this.smsMethod = payload.sms_method;
    this.smsUrl = payload.sms_url;
    this.statusCallback = payload.status_callback;
    this.statusCallbackMethod = payload.status_callback_method;
    this.trunkSid = payload.trunk_sid;
    this.uri = payload.uri;
    this.voiceReceiveMode = payload.voice_receive_mode;
    this.voiceApplicationSid = payload.voice_application_sid;
    this.voiceCallerIdLookup = payload.voice_caller_id_lookup;
    this.voiceFallbackMethod = payload.voice_fallback_method;
    this.voiceFallbackUrl = payload.voice_fallback_url;
    this.voiceMethod = payload.voice_method;
    this.voiceUrl = payload.voice_url;
    this.emergencyStatus = payload.emergency_status;
    this.emergencyAddressSid = payload.emergency_address_sid;
    this.emergencyAddressStatus = payload.emergency_address_status;
    this.bundleSid = payload.bundle_sid;
    this.status = payload.status;

    this._solution = { accountSid: accountSid || this.accountSid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Address resource associated with the phone number
   */
  addressSid?: string | null;
  addressRequirements?: object;
  /**
   * The API version used to start a new TwiML session
   */
  apiVersion?: string | null;
  /**
   * Whether the phone number is new to the Twilio platform
   */
  beta?: boolean | null;
  capabilities?: object | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was created
   */
  dateCreated?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  dateUpdated?: string | null;
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
  voiceReceiveMode?: object;
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
  emergencyStatus?: object;
  /**
   * The emergency address configuration to use for emergency calling
   */
  emergencyAddressSid?: string | null;
  emergencyAddressStatus?: object;
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
  toJSON() {
    return {
      accountSid: this.accountSid, 
      addressSid: this.addressSid, 
      addressRequirements: this.addressRequirements, 
      apiVersion: this.apiVersion, 
      beta: this.beta, 
      capabilities: this.capabilities, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      friendlyName: this.friendlyName, 
      identitySid: this.identitySid, 
      phoneNumber: this.phoneNumber, 
      origin: this.origin, 
      sid: this.sid, 
      smsApplicationSid: this.smsApplicationSid, 
      smsFallbackMethod: this.smsFallbackMethod, 
      smsFallbackUrl: this.smsFallbackUrl, 
      smsMethod: this.smsMethod, 
      smsUrl: this.smsUrl, 
      statusCallback: this.statusCallback, 
      statusCallbackMethod: this.statusCallbackMethod, 
      trunkSid: this.trunkSid, 
      uri: this.uri, 
      voiceReceiveMode: this.voiceReceiveMode, 
      voiceApplicationSid: this.voiceApplicationSid, 
      voiceCallerIdLookup: this.voiceCallerIdLookup, 
      voiceFallbackMethod: this.voiceFallbackMethod, 
      voiceFallbackUrl: this.voiceFallbackUrl, 
      voiceMethod: this.voiceMethod, 
      voiceUrl: this.voiceUrl, 
      emergencyStatus: this.emergencyStatus, 
      emergencyAddressSid: this.emergencyAddressSid, 
      emergencyAddressStatus: this.emergencyAddressStatus, 
      bundleSid: this.bundleSid, 
      status: this.status
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface TollFreeSolution {
  accountSid?: string;
}

export class TollFreePage extends Page<V2010, TollFreePayload, TollFreeResource, TollFreeInstance> {
  /**
   * Initialize the TollFreePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: TollFreeSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of TollFreeInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TollFreePayload): TollFreeInstance {
    return new TollFreeInstance(
      this._version,
      payload,
      this._solution.accountSid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

