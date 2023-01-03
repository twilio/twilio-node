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
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";
import { PhoneNumberCapabilities } from "../../../../../../lib/interfaces";

type IncomingPhoneNumberLocalAddressRequirement =
  | "none"
  | "any"
  | "local"
  | "foreign";

type IncomingPhoneNumberLocalEmergencyAddressStatus =
  | "registered"
  | "unregistered"
  | "pending-registration"
  | "registration-failure"
  | "pending-unregistration"
  | "unregistration-failure";

type IncomingPhoneNumberLocalEmergencyStatus = "Active" | "Inactive";

type IncomingPhoneNumberLocalVoiceReceiveMode = "voice" | "fax";

/**
 * Options to pass to create a LocalInstance
 *
 * @property { string } phoneNumber The phone number to purchase specified in [E.164](https://www.twilio.com/docs/glossary/what-e164) format.  E.164 phone numbers consist of a + followed by the country code and subscriber number without punctuation characters. For example, +14155551234.
 * @property { string } [apiVersion] The API version to use for incoming calls made to the new phone number. The default is `2010-04-01`.
 * @property { string } [friendlyName] A descriptive string that you created to describe the new phone number. It can be up to 64 characters long. By default, this is a formatted version of the phone number.
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
 * @property { string } [identitySid] The SID of the Identity resource that we should associate with the new phone number. Some regions require an identity to meet local regulations.
 * @property { string } [addressSid] The SID of the Address resource we should associate with the new phone number. Some regions require addresses to meet local regulations.
 * @property { IncomingPhoneNumberLocalEmergencyStatus } [emergencyStatus]
 * @property { string } [emergencyAddressSid] The SID of the emergency address configuration to use for emergency calling from the new phone number.
 * @property { string } [trunkSid] The SID of the Trunk we should use to handle calls to the new phone number. If a `trunk_sid` is present, we ignore all of the voice urls and voice applications and use only those set on the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and vice versa.
 * @property { IncomingPhoneNumberLocalVoiceReceiveMode } [voiceReceiveMode]
 * @property { string } [bundleSid] The SID of the Bundle resource that you associate with the phone number. Some regions require a Bundle to meet local Regulations.
 */
export interface LocalListInstanceCreateOptions {
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
  emergencyStatus?: IncomingPhoneNumberLocalEmergencyStatus;
  emergencyAddressSid?: string;
  trunkSid?: string;
  voiceReceiveMode?: IncomingPhoneNumberLocalVoiceReceiveMode;
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
export interface LocalListInstanceEachOptions {
  beta?: boolean;
  friendlyName?: string;
  phoneNumber?: string;
  origin?: string;
  pageSize?: number;
  callback?: (item: LocalInstance, done: (err?: Error) => void) => void;
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
export interface LocalListInstanceOptions {
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
export interface LocalListInstancePageOptions {
  beta?: boolean;
  friendlyName?: string;
  phoneNumber?: string;
  origin?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface LocalListInstance {
  /**
   * Create a LocalInstance
   *
   * @param { LocalListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed LocalInstance
   */
  create(
    params: LocalListInstanceCreateOptions,
    callback?: (error: Error | null, item?: LocalInstance) => any
  ): Promise<LocalInstance>;

  /**
   * Streams LocalInstance records from the API.
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
   * @param { LocalListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: LocalInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: LocalListInstanceEachOptions,
    callback?: (item: LocalInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of LocalInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: LocalPage) => any
  ): Promise<LocalPage>;
  /**
   * Lists LocalInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { LocalListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: LocalInstance[]) => any
  ): Promise<LocalInstance[]>;
  list(
    params: LocalListInstanceOptions,
    callback?: (error: Error | null, items: LocalInstance[]) => any
  ): Promise<LocalInstance[]>;
  /**
   * Retrieve a single page of LocalInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { LocalListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: LocalPage) => any
  ): Promise<LocalPage>;
  page(
    params: LocalListInstancePageOptions,
    callback?: (error: Error | null, items: LocalPage) => any
  ): Promise<LocalPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface LocalSolution {
  accountSid?: string;
}

interface LocalListInstanceImpl extends LocalListInstance {}
class LocalListInstanceImpl implements LocalListInstance {
  _version?: V2010;
  _solution?: LocalSolution;
  _uri?: string;
}

export function LocalListInstance(
  version: V2010,
  accountSid: string
): LocalListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = {} as LocalListInstanceImpl;

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/IncomingPhoneNumbers/Local.json`;

  instance.create = function create(
    params: LocalListInstanceCreateOptions,
    callback?: (error: Error | null, item?: LocalInstance) => any
  ): Promise<LocalInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["phoneNumber"] === null || params["phoneNumber"] === undefined) {
      throw new Error("Required parameter \"params['phoneNumber']\" missing.");
    }

    let data: any = {};

    data["PhoneNumber"] = params["phoneNumber"];
    if (params["apiVersion"] !== undefined)
      data["ApiVersion"] = params["apiVersion"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["smsApplicationSid"] !== undefined)
      data["SmsApplicationSid"] = params["smsApplicationSid"];
    if (params["smsFallbackMethod"] !== undefined)
      data["SmsFallbackMethod"] = params["smsFallbackMethod"];
    if (params["smsFallbackUrl"] !== undefined)
      data["SmsFallbackUrl"] = params["smsFallbackUrl"];
    if (params["smsMethod"] !== undefined)
      data["SmsMethod"] = params["smsMethod"];
    if (params["smsUrl"] !== undefined) data["SmsUrl"] = params["smsUrl"];
    if (params["statusCallback"] !== undefined)
      data["StatusCallback"] = params["statusCallback"];
    if (params["statusCallbackMethod"] !== undefined)
      data["StatusCallbackMethod"] = params["statusCallbackMethod"];
    if (params["voiceApplicationSid"] !== undefined)
      data["VoiceApplicationSid"] = params["voiceApplicationSid"];
    if (params["voiceCallerIdLookup"] !== undefined)
      data["VoiceCallerIdLookup"] = serialize.bool(
        params["voiceCallerIdLookup"]
      );
    if (params["voiceFallbackMethod"] !== undefined)
      data["VoiceFallbackMethod"] = params["voiceFallbackMethod"];
    if (params["voiceFallbackUrl"] !== undefined)
      data["VoiceFallbackUrl"] = params["voiceFallbackUrl"];
    if (params["voiceMethod"] !== undefined)
      data["VoiceMethod"] = params["voiceMethod"];
    if (params["voiceUrl"] !== undefined) data["VoiceUrl"] = params["voiceUrl"];
    if (params["identitySid"] !== undefined)
      data["IdentitySid"] = params["identitySid"];
    if (params["addressSid"] !== undefined)
      data["AddressSid"] = params["addressSid"];
    if (params["emergencyStatus"] !== undefined)
      data["EmergencyStatus"] = params["emergencyStatus"];
    if (params["emergencyAddressSid"] !== undefined)
      data["EmergencyAddressSid"] = params["emergencyAddressSid"];
    if (params["trunkSid"] !== undefined) data["TrunkSid"] = params["trunkSid"];
    if (params["voiceReceiveMode"] !== undefined)
      data["VoiceReceiveMode"] = params["voiceReceiveMode"];
    if (params["bundleSid"] !== undefined)
      data["BundleSid"] = params["bundleSid"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new LocalInstance(operationVersion, payload, this._solution.accountSid)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | LocalListInstancePageOptions
      | ((error: Error | null, item?: LocalPage) => any),
    callback?: (error: Error | null, item?: LocalPage) => any
  ): Promise<LocalPage> {
    if (typeof params === "function") {
      callback = params as (error: Error | null, item?: LocalPage) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["beta"] !== undefined)
      data["Beta"] = serialize.bool(params["beta"]);
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["phoneNumber"] !== undefined)
      data["PhoneNumber"] = params["phoneNumber"];
    if (params["origin"] !== undefined) data["Origin"] = params["origin"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new LocalPage(operationVersion, payload, this._solution)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: LocalPage) => any
  ): Promise<LocalPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new LocalPage(this._version, payload, this._solution)
    );
    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.toJSON = function toJSON() {
    return this._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(this.toJSON(), options);
  };

  return instance;
}
export type LocalSmsFallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";
export type LocalSmsMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";
export type LocalStatusCallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";
export type LocalVoiceFallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";
export type LocalVoiceMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";

interface LocalPayload extends TwilioResponsePayload {
  incoming_phone_numbers: LocalResource[];
}

interface LocalResource {
  account_sid?: string | null;
  address_sid?: string | null;
  address_requirements?: IncomingPhoneNumberLocalAddressRequirement;
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
  sms_fallback_method?: LocalSmsFallbackMethod;
  sms_fallback_url?: string | null;
  sms_method?: LocalSmsMethod;
  sms_url?: string | null;
  status_callback?: string | null;
  status_callback_method?: LocalStatusCallbackMethod;
  trunk_sid?: string | null;
  uri?: string | null;
  voice_receive_mode?: IncomingPhoneNumberLocalVoiceReceiveMode;
  voice_application_sid?: string | null;
  voice_caller_id_lookup?: boolean | null;
  voice_fallback_method?: LocalVoiceFallbackMethod;
  voice_fallback_url?: string | null;
  voice_method?: LocalVoiceMethod;
  voice_url?: string | null;
  emergency_status?: IncomingPhoneNumberLocalEmergencyStatus;
  emergency_address_sid?: string | null;
  emergency_address_status?: IncomingPhoneNumberLocalEmergencyAddressStatus;
  bundle_sid?: string | null;
  status?: string | null;
}

export class LocalInstance {
  constructor(
    protected _version: V2010,
    payload: LocalResource,
    accountSid: string
  ) {
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
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Address resource associated with the phone number
   */
  addressSid?: string | null;
  addressRequirements?: IncomingPhoneNumberLocalAddressRequirement;
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
   * The SID of the Application resource to handle SMS messages
   */
  smsApplicationSid?: string | null;
  /**
   * The HTTP method used with sms_fallback_url
   */
  smsFallbackMethod?: LocalSmsFallbackMethod;
  /**
   * The URL that we call when an error occurs while retrieving or executing the TwiML
   */
  smsFallbackUrl?: string | null;
  /**
   * The HTTP method to use with sms_url
   */
  smsMethod?: LocalSmsMethod;
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
  statusCallbackMethod?: LocalStatusCallbackMethod;
  /**
   * The SID of the Trunk that handles calls to the phone number
   */
  trunkSid?: string | null;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`
   */
  uri?: string | null;
  voiceReceiveMode?: IncomingPhoneNumberLocalVoiceReceiveMode;
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
  voiceFallbackMethod?: LocalVoiceFallbackMethod;
  /**
   * The URL we call when an error occurs in TwiML
   */
  voiceFallbackUrl?: string | null;
  /**
   * The HTTP method used with the voice_url
   */
  voiceMethod?: LocalVoiceMethod;
  /**
   * The URL we call when this phone number receives a call
   */
  voiceUrl?: string | null;
  emergencyStatus?: IncomingPhoneNumberLocalEmergencyStatus;
  /**
   * The emergency address configuration to use for emergency calling
   */
  emergencyAddressSid?: string | null;
  emergencyAddressStatus?: IncomingPhoneNumberLocalEmergencyAddressStatus;
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
      status: this.status,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class LocalPage extends Page<
  V2010,
  LocalPayload,
  LocalResource,
  LocalInstance
> {
  /**
   * Initialize the LocalPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: LocalSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of LocalInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: LocalResource): LocalInstance {
    return new LocalInstance(this._version, payload, this._solution.accountSid);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
