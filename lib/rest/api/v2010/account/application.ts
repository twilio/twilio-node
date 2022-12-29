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
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

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
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a ApplicationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ApplicationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ApplicationInstance) => any
  ): Promise<ApplicationInstance>;

  /**
   * Update a ApplicationInstance
   *
   * @param { ApplicationContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ApplicationInstance
   */
  update(
    params?:
      | ApplicationContextUpdateOptions
      | ((error: Error | null, item?: ApplicationInstance) => any),
    callback?: (error: Error | null, item?: ApplicationInstance) => any
  ): Promise<ApplicationInstance>;

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

export class ApplicationContextImpl implements ApplicationContext {
  protected _solution: ApplicationContextSolution;
  protected _uri: string;

  constructor(protected _version: V2010, accountSid: string, sid: string) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, sid };
    this._uri = `/Accounts/${accountSid}/Applications/${sid}.json`;
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

  fetch(callback?: any): Promise<ApplicationInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ApplicationInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<ApplicationInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["apiVersion"] !== undefined)
      data["ApiVersion"] = params["apiVersion"];
    if (params["voiceUrl"] !== undefined) data["VoiceUrl"] = params["voiceUrl"];
    if (params["voiceMethod"] !== undefined)
      data["VoiceMethod"] = params["voiceMethod"];
    if (params["voiceFallbackUrl"] !== undefined)
      data["VoiceFallbackUrl"] = params["voiceFallbackUrl"];
    if (params["voiceFallbackMethod"] !== undefined)
      data["VoiceFallbackMethod"] = params["voiceFallbackMethod"];
    if (params["statusCallback"] !== undefined)
      data["StatusCallback"] = params["statusCallback"];
    if (params["statusCallbackMethod"] !== undefined)
      data["StatusCallbackMethod"] = params["statusCallbackMethod"];
    if (params["voiceCallerIdLookup"] !== undefined)
      data["VoiceCallerIdLookup"] = serialize.bool(
        params["voiceCallerIdLookup"]
      );
    if (params["smsUrl"] !== undefined) data["SmsUrl"] = params["smsUrl"];
    if (params["smsMethod"] !== undefined)
      data["SmsMethod"] = params["smsMethod"];
    if (params["smsFallbackUrl"] !== undefined)
      data["SmsFallbackUrl"] = params["smsFallbackUrl"];
    if (params["smsFallbackMethod"] !== undefined)
      data["SmsFallbackMethod"] = params["smsFallbackMethod"];
    if (params["smsStatusCallback"] !== undefined)
      data["SmsStatusCallback"] = params["smsStatusCallback"];
    if (params["messageStatusCallback"] !== undefined)
      data["MessageStatusCallback"] = params["messageStatusCallback"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = this._version,
      operationPromise = operationVersion.update({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ApplicationInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
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

export type ApplicationSmsFallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";
export type ApplicationSmsMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";
export type ApplicationStatusCallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";
export type ApplicationVoiceFallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";
export type ApplicationVoiceMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";

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

export class ApplicationInstance {
  protected _solution: ApplicationContextSolution;
  protected _context?: ApplicationContext;

  constructor(
    protected _version: V2010,
    payload: ApplicationResource,
    accountSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.apiVersion = payload.api_version;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.messageStatusCallback = payload.message_status_callback;
    this.sid = payload.sid;
    this.smsFallbackMethod = payload.sms_fallback_method;
    this.smsFallbackUrl = payload.sms_fallback_url;
    this.smsMethod = payload.sms_method;
    this.smsStatusCallback = payload.sms_status_callback;
    this.smsUrl = payload.sms_url;
    this.statusCallback = payload.status_callback;
    this.statusCallbackMethod = payload.status_callback_method;
    this.uri = payload.uri;
    this.voiceCallerIdLookup = payload.voice_caller_id_lookup;
    this.voiceFallbackMethod = payload.voice_fallback_method;
    this.voiceFallbackUrl = payload.voice_fallback_url;
    this.voiceMethod = payload.voice_method;
    this.voiceUrl = payload.voice_url;

    this._solution = { accountSid, sid: sid || this.sid };
  }

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

  private get _proxy(): ApplicationContext {
    this._context =
      this._context ||
      new ApplicationContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a ApplicationInstance
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
   * Fetch a ApplicationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ApplicationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ApplicationInstance) => any
  ): Promise<ApplicationInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ApplicationInstance
   *
   * @param { ApplicationContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ApplicationInstance
   */
  update(
    params?:
      | ApplicationContextUpdateOptions
      | ((error: Error | null, item?: ApplicationInstance) => any),
    callback?: (error: Error | null, item?: ApplicationInstance) => any
  ): Promise<ApplicationInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      apiVersion: this.apiVersion,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      friendlyName: this.friendlyName,
      messageStatusCallback: this.messageStatusCallback,
      sid: this.sid,
      smsFallbackMethod: this.smsFallbackMethod,
      smsFallbackUrl: this.smsFallbackUrl,
      smsMethod: this.smsMethod,
      smsStatusCallback: this.smsStatusCallback,
      smsUrl: this.smsUrl,
      statusCallback: this.statusCallback,
      statusCallbackMethod: this.statusCallbackMethod,
      uri: this.uri,
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

export interface ApplicationListInstance {
  (sid: string): ApplicationContext;
  get(sid: string): ApplicationContext;

  /**
   * Create a ApplicationInstance
   *
   * @param { ApplicationListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ApplicationInstance
   */
  create(
    params?:
      | ApplicationListInstanceCreateOptions
      | ((error: Error | null, item?: ApplicationInstance) => any),
    callback?: (error: Error | null, item?: ApplicationInstance) => any
  ): Promise<ApplicationInstance>;

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
  each(
    params?:
      | ApplicationListInstanceEachOptions
      | ((item: ApplicationInstance, done: (err?: Error) => void) => void),
    callback?: (item: ApplicationInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of ApplicationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ApplicationPage) => any
  ): Promise<ApplicationPage>;
  /**
   * Lists ApplicationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ApplicationListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | ApplicationListInstanceOptions
      | ((error: Error | null, items: ApplicationInstance[]) => any),
    callback?: (error: Error | null, items: ApplicationInstance[]) => any
  ): Promise<ApplicationInstance[]>;
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
  page(
    params?:
      | ApplicationListInstancePageOptions
      | ((error: Error | null, items: ApplicationPage) => any),
    callback?: (error: Error | null, items: ApplicationPage) => any
  ): Promise<ApplicationPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ApplicationSolution {
  accountSid?: string;
}

interface ApplicationListInstanceImpl extends ApplicationListInstance {}
class ApplicationListInstanceImpl implements ApplicationListInstance {
  _version?: V2010;
  _solution?: ApplicationSolution;
  _uri?: string;
}

export function ApplicationListInstance(
  version: V2010,
  accountSid: string
): ApplicationListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as ApplicationListInstanceImpl;

  instance.get = function get(sid): ApplicationContext {
    return new ApplicationContextImpl(version, accountSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/Applications.json`;

  instance.create = function create(
    params?:
      | ApplicationListInstanceCreateOptions
      | ((error: Error | null, item?: ApplicationInstance) => any),
    callback?: (error: Error | null, item?: ApplicationInstance) => any
  ): Promise<ApplicationInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["apiVersion"] !== undefined)
      data["ApiVersion"] = params["apiVersion"];
    if (params["voiceUrl"] !== undefined) data["VoiceUrl"] = params["voiceUrl"];
    if (params["voiceMethod"] !== undefined)
      data["VoiceMethod"] = params["voiceMethod"];
    if (params["voiceFallbackUrl"] !== undefined)
      data["VoiceFallbackUrl"] = params["voiceFallbackUrl"];
    if (params["voiceFallbackMethod"] !== undefined)
      data["VoiceFallbackMethod"] = params["voiceFallbackMethod"];
    if (params["statusCallback"] !== undefined)
      data["StatusCallback"] = params["statusCallback"];
    if (params["statusCallbackMethod"] !== undefined)
      data["StatusCallbackMethod"] = params["statusCallbackMethod"];
    if (params["voiceCallerIdLookup"] !== undefined)
      data["VoiceCallerIdLookup"] = serialize.bool(
        params["voiceCallerIdLookup"]
      );
    if (params["smsUrl"] !== undefined) data["SmsUrl"] = params["smsUrl"];
    if (params["smsMethod"] !== undefined)
      data["SmsMethod"] = params["smsMethod"];
    if (params["smsFallbackUrl"] !== undefined)
      data["SmsFallbackUrl"] = params["smsFallbackUrl"];
    if (params["smsFallbackMethod"] !== undefined)
      data["SmsFallbackMethod"] = params["smsFallbackMethod"];
    if (params["smsStatusCallback"] !== undefined)
      data["SmsStatusCallback"] = params["smsStatusCallback"];
    if (params["messageStatusCallback"] !== undefined)
      data["MessageStatusCallback"] = params["messageStatusCallback"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];

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
        new ApplicationInstance(
          operationVersion,
          payload,
          this._solution.accountSid
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
      | ApplicationListInstancePageOptions
      | ((error: Error | null, item?: ApplicationPage) => any),
    callback?: (error: Error | null, item?: ApplicationPage) => any
  ): Promise<ApplicationPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
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
        new ApplicationPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: ApplicationPage) => any
  ): Promise<ApplicationPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new ApplicationPage(this._version, payload, this._solution)
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

export class ApplicationPage extends Page<
  V2010,
  ApplicationPayload,
  ApplicationResource,
  ApplicationInstance
> {
  /**
   * Initialize the ApplicationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: ApplicationSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ApplicationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ApplicationResource): ApplicationInstance {
    return new ApplicationInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
