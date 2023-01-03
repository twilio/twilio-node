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
 * Options to pass to update a ShortCodeInstance
 *
 * @property { string } [friendlyName] A descriptive string that you created to describe this resource. It can be up to 64 characters long. By default, the `FriendlyName` is the short code.
 * @property { string } [apiVersion] The API version to use to start a new TwiML session. Can be: `2010-04-01` or `2008-08-01`.
 * @property { string } [smsUrl] The URL we should call when receiving an incoming SMS message to this short code.
 * @property { string } [smsMethod] The HTTP method we should use when calling the `sms_url`. Can be: `GET` or `POST`.
 * @property { string } [smsFallbackUrl] The URL that we should call if an error occurs while retrieving or executing the TwiML from `sms_url`.
 * @property { string } [smsFallbackMethod] The HTTP method that we should use to call the `sms_fallback_url`. Can be: `GET` or `POST`.
 */
export interface ShortCodeContextUpdateOptions {
  friendlyName?: string;
  apiVersion?: string;
  smsUrl?: string;
  smsMethod?: string;
  smsFallbackUrl?: string;
  smsFallbackMethod?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [friendlyName] The string that identifies the ShortCode resources to read.
 * @property { string } [shortCode] Only show the ShortCode resources that match this pattern. You can specify partial numbers and use \'*\' as a wildcard for any digit.
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
export interface ShortCodeListInstanceEachOptions {
  friendlyName?: string;
  shortCode?: string;
  pageSize?: number;
  callback?: (item: ShortCodeInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [friendlyName] The string that identifies the ShortCode resources to read.
 * @property { string } [shortCode] Only show the ShortCode resources that match this pattern. You can specify partial numbers and use \'*\' as a wildcard for any digit.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ShortCodeListInstanceOptions {
  friendlyName?: string;
  shortCode?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [friendlyName] The string that identifies the ShortCode resources to read.
 * @property { string } [shortCode] Only show the ShortCode resources that match this pattern. You can specify partial numbers and use \'*\' as a wildcard for any digit.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ShortCodeListInstancePageOptions {
  friendlyName?: string;
  shortCode?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface ShortCodeContext {
  /**
   * Fetch a ShortCodeInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ShortCodeInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ShortCodeInstance) => any
  ): Promise<ShortCodeInstance>;

  /**
   * Update a ShortCodeInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ShortCodeInstance
   */
  update(
    callback?: (error: Error | null, item?: ShortCodeInstance) => any
  ): Promise<ShortCodeInstance>;
  /**
   * Update a ShortCodeInstance
   *
   * @param { ShortCodeContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ShortCodeInstance
   */
  update(
    params: ShortCodeContextUpdateOptions,
    callback?: (error: Error | null, item?: ShortCodeInstance) => any
  ): Promise<ShortCodeInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ShortCodeContextSolution {
  accountSid?: string;
  sid?: string;
}

export class ShortCodeContextImpl implements ShortCodeContext {
  protected _solution: ShortCodeContextSolution;
  protected _uri: string;

  constructor(protected _version: V2010, accountSid: string, sid: string) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, sid };
    this._uri = `/Accounts/${accountSid}/SMS/ShortCodes/${sid}.json`;
  }

  fetch(
    callback?: (error: Error | null, item?: ShortCodeInstance) => any
  ): Promise<ShortCodeInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ShortCodeInstance(
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

  update(
    params?:
      | ShortCodeContextUpdateOptions
      | ((error: Error | null, item?: ShortCodeInstance) => any),
    callback?: (error: Error | null, item?: ShortCodeInstance) => any
  ): Promise<ShortCodeInstance> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: ShortCodeInstance
      ) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["apiVersion"] !== undefined)
      data["ApiVersion"] = params["apiVersion"];
    if (params["smsUrl"] !== undefined) data["SmsUrl"] = params["smsUrl"];
    if (params["smsMethod"] !== undefined)
      data["SmsMethod"] = params["smsMethod"];
    if (params["smsFallbackUrl"] !== undefined)
      data["SmsFallbackUrl"] = params["smsFallbackUrl"];
    if (params["smsFallbackMethod"] !== undefined)
      data["SmsFallbackMethod"] = params["smsFallbackMethod"];

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
        new ShortCodeInstance(
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

export type ShortCodeSmsFallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";
export type ShortCodeSmsMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";

interface ShortCodePayload extends TwilioResponsePayload {
  short_codes: ShortCodeResource[];
}

interface ShortCodeResource {
  account_sid?: string | null;
  api_version?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  friendly_name?: string | null;
  short_code?: string | null;
  sid?: string | null;
  sms_fallback_method?: ShortCodeSmsFallbackMethod;
  sms_fallback_url?: string | null;
  sms_method?: ShortCodeSmsMethod;
  sms_url?: string | null;
  uri?: string | null;
}

export class ShortCodeInstance {
  protected _solution: ShortCodeContextSolution;
  protected _context?: ShortCodeContext;

  constructor(
    protected _version: V2010,
    payload: ShortCodeResource,
    accountSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.apiVersion = payload.api_version;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.shortCode = payload.short_code;
    this.sid = payload.sid;
    this.smsFallbackMethod = payload.sms_fallback_method;
    this.smsFallbackUrl = payload.sms_fallback_url;
    this.smsMethod = payload.sms_method;
    this.smsUrl = payload.sms_url;
    this.uri = payload.uri;

    this._solution = { accountSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created this resource
   */
  accountSid?: string | null;
  /**
   * The API version used to start a new TwiML session
   */
  apiVersion?: string | null;
  /**
   * The RFC 2822 date and time in GMT that this resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT that this resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * A string that you assigned to describe this resource
   */
  friendlyName?: string | null;
  /**
   * The short code. e.g., 894546.
   */
  shortCode?: string | null;
  /**
   * The unique string that identifies this resource
   */
  sid?: string | null;
  /**
   * HTTP method we use to call the sms_fallback_url
   */
  smsFallbackMethod?: ShortCodeSmsFallbackMethod;
  /**
   * URL Twilio will request if an error occurs in executing TwiML
   */
  smsFallbackUrl?: string | null;
  /**
   * HTTP method to use when requesting the sms url
   */
  smsMethod?: ShortCodeSmsMethod;
  /**
   * URL we call when receiving an incoming SMS message to this short code
   */
  smsUrl?: string | null;
  /**
   * The URI of this resource, relative to `https://api.twilio.com`
   */
  uri?: string | null;

  private get _proxy(): ShortCodeContext {
    this._context =
      this._context ||
      new ShortCodeContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a ShortCodeInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ShortCodeInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ShortCodeInstance) => any
  ): Promise<ShortCodeInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ShortCodeInstance
   *
   * @param { ShortCodeContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ShortCodeInstance
   */
  update(
    params?: ShortCodeContextUpdateOptions,
    callback?: (error: Error | null, item?: ShortCodeInstance) => any
  ): Promise<ShortCodeInstance> {
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
      shortCode: this.shortCode,
      sid: this.sid,
      smsFallbackMethod: this.smsFallbackMethod,
      smsFallbackUrl: this.smsFallbackUrl,
      smsMethod: this.smsMethod,
      smsUrl: this.smsUrl,
      uri: this.uri,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ShortCodeListInstance {
  (sid: string): ShortCodeContext;
  get(sid: string): ShortCodeContext;

  /**
   * Streams ShortCodeInstance records from the API.
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
   * @param { ShortCodeListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: ShortCodeInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: ShortCodeListInstanceEachOptions,
    callback?: (item: ShortCodeInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of ShortCodeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ShortCodePage) => any
  ): Promise<ShortCodePage>;
  /**
   * Lists ShortCodeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ShortCodeListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ShortCodeInstance[]) => any
  ): Promise<ShortCodeInstance[]>;
  list(
    params: ShortCodeListInstanceOptions,
    callback?: (error: Error | null, items: ShortCodeInstance[]) => any
  ): Promise<ShortCodeInstance[]>;
  /**
   * Retrieve a single page of ShortCodeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ShortCodeListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ShortCodePage) => any
  ): Promise<ShortCodePage>;
  page(
    params: ShortCodeListInstancePageOptions,
    callback?: (error: Error | null, items: ShortCodePage) => any
  ): Promise<ShortCodePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ShortCodeSolution {
  accountSid?: string;
}

interface ShortCodeListInstanceImpl extends ShortCodeListInstance {}
class ShortCodeListInstanceImpl implements ShortCodeListInstance {
  _version?: V2010;
  _solution?: ShortCodeSolution;
  _uri?: string;
}

export function ShortCodeListInstance(
  version: V2010,
  accountSid: string
): ShortCodeListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as ShortCodeListInstanceImpl;

  instance.get = function get(sid): ShortCodeContext {
    return new ShortCodeContextImpl(version, accountSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/SMS/ShortCodes.json`;

  instance.page = function page(
    params?:
      | ShortCodeListInstancePageOptions
      | ((error: Error | null, item?: ShortCodePage) => any),
    callback?: (error: Error | null, item?: ShortCodePage) => any
  ): Promise<ShortCodePage> {
    if (typeof params === "function") {
      callback = params as (error: Error | null, item?: ShortCodePage) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["shortCode"] !== undefined)
      data["ShortCode"] = params["shortCode"];
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
      (payload) => new ShortCodePage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: ShortCodePage) => any
  ): Promise<ShortCodePage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new ShortCodePage(this._version, payload, this._solution)
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

export class ShortCodePage extends Page<
  V2010,
  ShortCodePayload,
  ShortCodeResource,
  ShortCodeInstance
> {
  /**
   * Initialize the ShortCodePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: ShortCodeSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ShortCodeInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ShortCodeResource): ShortCodeInstance {
    return new ShortCodeInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
