/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trunking
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

type PhoneNumberAddressRequirement = "none" | "any" | "local" | "foreign";

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
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a PhoneNumberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PhoneNumberInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;

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

export class PhoneNumberContextImpl implements PhoneNumberContext {
  protected _solution: PhoneNumberContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, trunkSid: string, sid: string) {
    if (!isValidPathParam(trunkSid)) {
      throw new Error("Parameter 'trunkSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { trunkSid, sid };
    this._uri = `/Trunks/${trunkSid}/PhoneNumbers/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
    let operationVersion = this._version,
      operationPromise = operationVersion.remove({
        uri: this._uri,
        method: "delete",
      });

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<PhoneNumberInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PhoneNumberInstance(
          operationVersion,
          payload,
          this._solution.trunkSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export type PhoneNumberSmsFallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";
export type PhoneNumberSmsMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";
export type PhoneNumberStatusCallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";
export type PhoneNumberVoiceFallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";
export type PhoneNumberVoiceMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";

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

export class PhoneNumberInstance {
  protected _solution: PhoneNumberContextSolution;
  protected _context?: PhoneNumberContext;

  constructor(
    protected _version: V1,
    payload: PhoneNumberResource,
    trunkSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.addressRequirements = payload.address_requirements;
    this.apiVersion = payload.api_version;
    this.beta = payload.beta;
    this.capabilities = payload.capabilities;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.links = payload.links;
    this.phoneNumber = payload.phone_number;
    this.sid = payload.sid;
    this.smsApplicationSid = payload.sms_application_sid;
    this.smsFallbackMethod = payload.sms_fallback_method;
    this.smsFallbackUrl = payload.sms_fallback_url;
    this.smsMethod = payload.sms_method;
    this.smsUrl = payload.sms_url;
    this.statusCallback = payload.status_callback;
    this.statusCallbackMethod = payload.status_callback_method;
    this.trunkSid = payload.trunk_sid;
    this.url = payload.url;
    this.voiceApplicationSid = payload.voice_application_sid;
    this.voiceCallerIdLookup = payload.voice_caller_id_lookup;
    this.voiceFallbackMethod = payload.voice_fallback_method;
    this.voiceFallbackUrl = payload.voice_fallback_url;
    this.voiceMethod = payload.voice_method;
    this.voiceUrl = payload.voice_url;

    this._solution = { trunkSid, sid: sid || this.sid };
  }

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

  private get _proxy(): PhoneNumberContext {
    this._context =
      this._context ||
      new PhoneNumberContextImpl(
        this._version,
        this._solution.trunkSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a PhoneNumberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a PhoneNumberInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PhoneNumberInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      addressRequirements: this.addressRequirements,
      apiVersion: this.apiVersion,
      beta: this.beta,
      capabilities: this.capabilities,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      friendlyName: this.friendlyName,
      links: this.links,
      phoneNumber: this.phoneNumber,
      sid: this.sid,
      smsApplicationSid: this.smsApplicationSid,
      smsFallbackMethod: this.smsFallbackMethod,
      smsFallbackUrl: this.smsFallbackUrl,
      smsMethod: this.smsMethod,
      smsUrl: this.smsUrl,
      statusCallback: this.statusCallback,
      statusCallbackMethod: this.statusCallbackMethod,
      trunkSid: this.trunkSid,
      url: this.url,
      voiceApplicationSid: this.voiceApplicationSid,
      voiceCallerIdLookup: this.voiceCallerIdLookup,
      voiceFallbackMethod: this.voiceFallbackMethod,
      voiceFallbackUrl: this.voiceFallbackUrl,
      voiceMethod: this.voiceMethod,
      voiceUrl: this.voiceUrl,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
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
  create(
    params: PhoneNumberListInstanceCreateOptions,
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;

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
  each(
    params?:
      | PhoneNumberListInstanceEachOptions
      | ((item: PhoneNumberInstance, done: (err?: Error) => void) => void),
    callback?: (item: PhoneNumberInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of PhoneNumberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: PhoneNumberPage) => any
  ): Promise<PhoneNumberPage>;
  /**
   * Lists PhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { PhoneNumberListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | PhoneNumberListInstanceOptions
      | ((error: Error | null, items: PhoneNumberInstance[]) => any),
    callback?: (error: Error | null, items: PhoneNumberInstance[]) => any
  ): Promise<PhoneNumberInstance[]>;
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
  page(
    params?:
      | PhoneNumberListInstancePageOptions
      | ((error: Error | null, items: PhoneNumberPage) => any),
    callback?: (error: Error | null, items: PhoneNumberPage) => any
  ): Promise<PhoneNumberPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PhoneNumberSolution {
  trunkSid?: string;
}

interface PhoneNumberListInstanceImpl extends PhoneNumberListInstance {}
class PhoneNumberListInstanceImpl implements PhoneNumberListInstance {
  _version?: V1;
  _solution?: PhoneNumberSolution;
  _uri?: string;
}

export function PhoneNumberListInstance(
  version: V1,
  trunkSid: string
): PhoneNumberListInstance {
  if (!isValidPathParam(trunkSid)) {
    throw new Error("Parameter 'trunkSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as PhoneNumberListInstanceImpl;

  instance.get = function get(sid): PhoneNumberContext {
    return new PhoneNumberContextImpl(version, trunkSid, sid);
  };

  instance._version = version;
  instance._solution = { trunkSid };
  instance._uri = `/Trunks/${trunkSid}/PhoneNumbers`;

  instance.create = function create(
    params: PhoneNumberListInstanceCreateOptions,
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["phoneNumberSid"] === null ||
      params["phoneNumberSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['phoneNumberSid']\" missing."
      );
    }

    let data: any = {};

    data["PhoneNumberSid"] = params["phoneNumberSid"];

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
        new PhoneNumberInstance(
          operationVersion,
          payload,
          this._solution.trunkSid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | PhoneNumberListInstancePageOptions
      | ((error: Error | null, item?: PhoneNumberPage) => any),
    callback?: (error: Error | null, item?: PhoneNumberPage) => any
  ): Promise<PhoneNumberPage> {
    if (typeof params === "function") {
      callback = params as (error: Error | null, item?: PhoneNumberPage) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

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
      (payload) =>
        new PhoneNumberPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: PhoneNumberPage) => any
  ): Promise<PhoneNumberPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new PhoneNumberPage(this._version, payload, this._solution)
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

export class PhoneNumberPage extends Page<
  V1,
  PhoneNumberPayload,
  PhoneNumberResource,
  PhoneNumberInstance
> {
  /**
   * Initialize the PhoneNumberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: PhoneNumberSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of PhoneNumberInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: PhoneNumberResource): PhoneNumberInstance {
    return new PhoneNumberInstance(
      this._version,
      payload,
      this._solution.trunkSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
