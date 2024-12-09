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
 */
export interface ApplicationContextUpdateOptions {
  /** A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
  friendlyName?: string;
  /** The API version to use to start a new TwiML session. Can be: `2010-04-01` or `2008-08-01`. The default value is your account\\\'s default API version. */
  apiVersion?: string;
  /** The URL we should call when the phone number assigned to this application receives a call. */
  voiceUrl?: string;
  /** The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`. */
  voiceMethod?: string;
  /** The URL that we should call when an error occurs retrieving or executing the TwiML requested by `url`. */
  voiceFallbackUrl?: string;
  /** The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`. */
  voiceFallbackMethod?: string;
  /** The URL we should call using the `status_callback_method` to send status information to your application. */
  statusCallback?: string;
  /** The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST`. */
  statusCallbackMethod?: string;
  /** Whether we should look up the caller\\\'s caller-ID name from the CNAM database (additional charges apply). Can be: `true` or `false`. */
  voiceCallerIdLookup?: boolean;
  /** The URL we should call when the phone number receives an incoming SMS message. */
  smsUrl?: string;
  /** The HTTP method we should use to call `sms_url`. Can be: `GET` or `POST`. */
  smsMethod?: string;
  /** The URL that we should call when an error occurs while retrieving or executing the TwiML from `sms_url`. */
  smsFallbackUrl?: string;
  /** The HTTP method we should use to call `sms_fallback_url`. Can be: `GET` or `POST`. */
  smsFallbackMethod?: string;
  /** Same as message_status_callback: The URL we should call using a POST method to send status information about SMS messages sent by the application. Deprecated, included for backwards compatibility. */
  smsStatusCallback?: string;
  /** The URL we should call using a POST method to send message status information to your application. */
  messageStatusCallback?: string;
  /** Whether to allow other Twilio accounts to dial this applicaton using Dial verb. Can be: `true` or `false`. */
  publicApplicationConnectEnabled?: boolean;
}

/**
 * Options to pass to create a ApplicationInstance
 */
export interface ApplicationListInstanceCreateOptions {
  /** The API version to use to start a new TwiML session. Can be: `2010-04-01` or `2008-08-01`. The default value is the account\\\'s default API version. */
  apiVersion?: string;
  /** The URL we should call when the phone number assigned to this application receives a call. */
  voiceUrl?: string;
  /** The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`. */
  voiceMethod?: string;
  /** The URL that we should call when an error occurs retrieving or executing the TwiML requested by `url`. */
  voiceFallbackUrl?: string;
  /** The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`. */
  voiceFallbackMethod?: string;
  /** The URL we should call using the `status_callback_method` to send status information to your application. */
  statusCallback?: string;
  /** The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST`. */
  statusCallbackMethod?: string;
  /** Whether we should look up the caller\\\'s caller-ID name from the CNAM database (additional charges apply). Can be: `true` or `false`. */
  voiceCallerIdLookup?: boolean;
  /** The URL we should call when the phone number receives an incoming SMS message. */
  smsUrl?: string;
  /** The HTTP method we should use to call `sms_url`. Can be: `GET` or `POST`. */
  smsMethod?: string;
  /** The URL that we should call when an error occurs while retrieving or executing the TwiML from `sms_url`. */
  smsFallbackUrl?: string;
  /** The HTTP method we should use to call `sms_fallback_url`. Can be: `GET` or `POST`. */
  smsFallbackMethod?: string;
  /** The URL we should call using a POST method to send status information about SMS messages sent by the application. */
  smsStatusCallback?: string;
  /** The URL we should call using a POST method to send message status information to your application. */
  messageStatusCallback?: string;
  /** A descriptive string that you create to describe the new application. It can be up to 64 characters long. */
  friendlyName?: string;
  /** Whether to allow other Twilio accounts to dial this applicaton using Dial verb. Can be: `true` or `false`. */
  publicApplicationConnectEnabled?: boolean;
}
/**
 * Options to pass to each
 */
export interface ApplicationListInstanceEachOptions {
  /** The string that identifies the Application resources to read. */
  friendlyName?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: ApplicationInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface ApplicationListInstanceOptions {
  /** The string that identifies the Application resources to read. */
  friendlyName?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ApplicationListInstancePageOptions {
  /** The string that identifies the Application resources to read. */
  friendlyName?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface ApplicationContext {
  /**
   * Remove a ApplicationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a ApplicationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ApplicationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ApplicationInstance) => any
  ): Promise<ApplicationInstance>;

  /**
   * Update a ApplicationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ApplicationInstance
   */
  update(
    callback?: (error: Error | null, item?: ApplicationInstance) => any
  ): Promise<ApplicationInstance>;
  /**
   * Update a ApplicationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ApplicationInstance
   */
  update(
    params: ApplicationContextUpdateOptions,
    callback?: (error: Error | null, item?: ApplicationInstance) => any
  ): Promise<ApplicationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ApplicationContextSolution {
  accountSid: string;
  sid: string;
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

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
        headers,
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: ApplicationInstance) => any
  ): Promise<ApplicationInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ApplicationInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | ApplicationContextUpdateOptions
      | ((error: Error | null, item?: ApplicationInstance) => any),
    callback?: (error: Error | null, item?: ApplicationInstance) => any
  ): Promise<ApplicationInstance> {
    if (params instanceof Function) {
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
    if (params["publicApplicationConnectEnabled"] !== undefined)
      data["PublicApplicationConnectEnabled"] = serialize.bool(
        params["publicApplicationConnectEnabled"]
      );

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ApplicationInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
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

interface ApplicationPayload extends TwilioResponsePayload {
  applications: ApplicationResource[];
}

interface ApplicationResource {
  account_sid: string;
  api_version: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  message_status_callback: string;
  sid: string;
  sms_fallback_method: string;
  sms_fallback_url: string;
  sms_method: string;
  sms_status_callback: string;
  sms_url: string;
  status_callback: string;
  status_callback_method: string;
  uri: string;
  voice_caller_id_lookup: boolean;
  voice_fallback_method: string;
  voice_fallback_url: string;
  voice_method: string;
  voice_url: string;
  public_application_connect_enabled: boolean;
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
    this.publicApplicationConnectEnabled =
      payload.public_application_connect_enabled;

    this._solution = { accountSid, sid: sid || this.sid };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Application resource.
   */
  accountSid: string;
  /**
   * The API version used to start a new TwiML session.
   */
  apiVersion: string;
  /**
   * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * The string that you assigned to describe the resource.
   */
  friendlyName: string;
  /**
   * The URL we call using a POST method to send message status information to your application.
   */
  messageStatusCallback: string;
  /**
   * The unique string that that we created to identify the Application resource.
   */
  sid: string;
  /**
   * The HTTP method we use to call `sms_fallback_url`. Can be: `GET` or `POST`.
   */
  smsFallbackMethod: string;
  /**
   * The URL that we call when an error occurs while retrieving or executing the TwiML from `sms_url`.
   */
  smsFallbackUrl: string;
  /**
   * The HTTP method we use to call `sms_url`. Can be: `GET` or `POST`.
   */
  smsMethod: string;
  /**
   * The URL we call using a POST method to send status information to your application about SMS messages that refer to the application.
   */
  smsStatusCallback: string;
  /**
   * The URL we call when the phone number receives an incoming SMS message.
   */
  smsUrl: string;
  /**
   * The URL we call using the `status_callback_method` to send status information to your application.
   */
  statusCallback: string;
  /**
   * The HTTP method we use to call `status_callback`. Can be: `GET` or `POST`.
   */
  statusCallbackMethod: string;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`.
   */
  uri: string;
  /**
   * Whether we look up the caller\'s caller-ID name from the CNAM database (additional charges apply). Can be: `true` or `false`.
   */
  voiceCallerIdLookup: boolean;
  /**
   * The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
   */
  voiceFallbackMethod: string;
  /**
   * The URL that we call when an error occurs retrieving or executing the TwiML requested by `url`.
   */
  voiceFallbackUrl: string;
  /**
   * The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`.
   */
  voiceMethod: string;
  /**
   * The URL we call when the phone number assigned to this application receives a call.
   */
  voiceUrl: string;
  /**
   * Whether to allow other Twilio accounts to dial this applicaton using Dial verb. Can be: `true` or `false`.
   */
  publicApplicationConnectEnabled: boolean;

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
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a ApplicationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ApplicationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ApplicationInstance) => any
  ): Promise<ApplicationInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ApplicationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ApplicationInstance
   */
  update(
    callback?: (error: Error | null, item?: ApplicationInstance) => any
  ): Promise<ApplicationInstance>;
  /**
   * Update a ApplicationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ApplicationInstance
   */
  update(
    params: ApplicationContextUpdateOptions,
    callback?: (error: Error | null, item?: ApplicationInstance) => any
  ): Promise<ApplicationInstance>;

  update(
    params?: any,
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
      publicApplicationConnectEnabled: this.publicApplicationConnectEnabled,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ApplicationSolution {
  accountSid: string;
}

export interface ApplicationListInstance {
  _version: V2010;
  _solution: ApplicationSolution;
  _uri: string;

  (sid: string): ApplicationContext;
  get(sid: string): ApplicationContext;

  /**
   * Create a ApplicationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ApplicationInstance
   */
  create(
    callback?: (error: Error | null, item?: ApplicationInstance) => any
  ): Promise<ApplicationInstance>;
  /**
   * Create a ApplicationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ApplicationInstance
   */
  create(
    params: ApplicationListInstanceCreateOptions,
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
    callback?: (item: ApplicationInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: ApplicationListInstanceEachOptions,
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
    callback?: (error: Error | null, items: ApplicationInstance[]) => any
  ): Promise<ApplicationInstance[]>;
  list(
    params: ApplicationListInstanceOptions,
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
    callback?: (error: Error | null, items: ApplicationPage) => any
  ): Promise<ApplicationPage>;
  page(
    params: ApplicationListInstancePageOptions,
    callback?: (error: Error | null, items: ApplicationPage) => any
  ): Promise<ApplicationPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ApplicationListInstance(
  version: V2010,
  accountSid: string
): ApplicationListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as ApplicationListInstance;

  instance.get = function get(sid): ApplicationContext {
    return new ApplicationContextImpl(version, accountSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/Applications.json`;

  instance.create = function create(
    params?:
      | ApplicationListInstanceCreateOptions
      | ((error: Error | null, items: ApplicationInstance) => any),
    callback?: (error: Error | null, items: ApplicationInstance) => any
  ): Promise<ApplicationInstance> {
    if (params instanceof Function) {
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
    if (params["publicApplicationConnectEnabled"] !== undefined)
      data["PublicApplicationConnectEnabled"] = serialize.bool(
        params["publicApplicationConnectEnabled"]
      );

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ApplicationInstance(
          operationVersion,
          payload,
          instance._solution.accountSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | ApplicationListInstancePageOptions
      | ((error: Error | null, items: ApplicationPage) => any),
    callback?: (error: Error | null, items: ApplicationPage) => any
  ): Promise<ApplicationPage> {
    if (params instanceof Function) {
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
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ApplicationPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
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
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new ApplicationPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
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
