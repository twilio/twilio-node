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
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to update a OutgoingCallerIdInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 */
export interface OutgoingCallerIdContextUpdateOptions {
  friendlyName?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [phoneNumber] The phone number of the OutgoingCallerId resources to read.
 * @property { string } [friendlyName] The string that identifies the OutgoingCallerId resources to read.
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
export interface OutgoingCallerIdListInstanceEachOptions {
  phoneNumber?: string;
  friendlyName?: string;
  pageSize?: number;
  callback?: (
    item: OutgoingCallerIdInstance,
    done: (err?: Error) => void
  ) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [phoneNumber] The phone number of the OutgoingCallerId resources to read.
 * @property { string } [friendlyName] The string that identifies the OutgoingCallerId resources to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface OutgoingCallerIdListInstanceOptions {
  phoneNumber?: string;
  friendlyName?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [phoneNumber] The phone number of the OutgoingCallerId resources to read.
 * @property { string } [friendlyName] The string that identifies the OutgoingCallerId resources to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface OutgoingCallerIdListInstancePageOptions {
  phoneNumber?: string;
  friendlyName?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface OutgoingCallerIdContext {
  /**
   * Remove a OutgoingCallerIdInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a OutgoingCallerIdInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed OutgoingCallerIdInstance
   */
  fetch(
    callback?: (error: Error | null, item?: OutgoingCallerIdInstance) => any
  ): Promise<OutgoingCallerIdInstance>;

  /**
   * Update a OutgoingCallerIdInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed OutgoingCallerIdInstance
   */
  update(
    callback?: (error: Error | null, item?: OutgoingCallerIdInstance) => any
  ): Promise<OutgoingCallerIdInstance>;
  /**
   * Update a OutgoingCallerIdInstance
   *
   * @param { OutgoingCallerIdContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed OutgoingCallerIdInstance
   */
  update(
    params: OutgoingCallerIdContextUpdateOptions,
    callback?: (error: Error | null, item?: OutgoingCallerIdInstance) => any
  ): Promise<OutgoingCallerIdInstance>;
  update(params?: any, callback?: any): Promise<OutgoingCallerIdInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface OutgoingCallerIdContextSolution {
  accountSid?: string;
  sid?: string;
}

export class OutgoingCallerIdContextImpl implements OutgoingCallerIdContext {
  protected _solution: OutgoingCallerIdContextSolution;
  protected _uri: string;

  constructor(protected _version: V2010, accountSid: string, sid: string) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, sid };
    this._uri = `/Accounts/${accountSid}/OutgoingCallerIds/${sid}.json`;
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

  fetch(callback?: any): Promise<OutgoingCallerIdInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new OutgoingCallerIdInstance(
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

  update(params?: any, callback?: any): Promise<OutgoingCallerIdInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];

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
        new OutgoingCallerIdInstance(
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

interface OutgoingCallerIdPayload
  extends OutgoingCallerIdResource,
    Omit<Page.TwilioResponsePayload, "uri"> {}

interface OutgoingCallerIdResource {
  sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  friendly_name?: string | null;
  account_sid?: string | null;
  phone_number?: string | null;
  uri?: string | null;
}

export class OutgoingCallerIdInstance {
  protected _solution: OutgoingCallerIdContextSolution;
  protected _context?: OutgoingCallerIdContext;

  constructor(
    protected _version: V2010,
    payload: OutgoingCallerIdPayload,
    accountSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.accountSid = payload.account_sid;
    this.phoneNumber = payload.phone_number;
    this.uri = payload.uri;

    this._solution = { accountSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
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
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The phone number in E.164 format
   */
  phoneNumber?: string | null;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`
   */
  uri?: string | null;

  private get _proxy(): OutgoingCallerIdContext {
    this._context =
      this._context ||
      new OutgoingCallerIdContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a OutgoingCallerIdInstance
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
   * Fetch a OutgoingCallerIdInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed OutgoingCallerIdInstance
   */
  fetch(
    callback?: (error: Error | null, item?: OutgoingCallerIdInstance) => any
  ): Promise<OutgoingCallerIdInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a OutgoingCallerIdInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed OutgoingCallerIdInstance
   */
  update(
    callback?: (error: Error | null, item?: OutgoingCallerIdInstance) => any
  ): Promise<OutgoingCallerIdInstance>;
  /**
   * Update a OutgoingCallerIdInstance
   *
   * @param { OutgoingCallerIdContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed OutgoingCallerIdInstance
   */
  update(
    params: OutgoingCallerIdContextUpdateOptions,
    callback?: (error: Error | null, item?: OutgoingCallerIdInstance) => any
  ): Promise<OutgoingCallerIdInstance>;
  update(params?: any, callback?: any): Promise<OutgoingCallerIdInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      friendlyName: this.friendlyName,
      accountSid: this.accountSid,
      phoneNumber: this.phoneNumber,
      uri: this.uri,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface OutgoingCallerIdListInstance {
  (sid: string): OutgoingCallerIdContext;
  get(sid: string): OutgoingCallerIdContext;

  /**
   * Streams OutgoingCallerIdInstance records from the API.
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
  each(
    callback?: (
      item: OutgoingCallerIdInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Streams OutgoingCallerIdInstance records from the API.
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
   * @param { OutgoingCallerIdListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: OutgoingCallerIdListInstanceEachOptions,
    callback?: (
      item: OutgoingCallerIdInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of OutgoingCallerIdInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: OutgoingCallerIdPage) => any
  ): Promise<OutgoingCallerIdPage>;
  /**
   * Retrieve a single target page of OutgoingCallerIdInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl?: string,
    callback?: (error: Error | null, items: OutgoingCallerIdPage) => any
  ): Promise<OutgoingCallerIdPage>;
  getPage(params?: any, callback?: any): Promise<OutgoingCallerIdPage>;
  /**
   * Lists OutgoingCallerIdInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: OutgoingCallerIdInstance[]) => any
  ): Promise<OutgoingCallerIdInstance[]>;
  /**
   * Lists OutgoingCallerIdInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { OutgoingCallerIdListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: OutgoingCallerIdListInstanceOptions,
    callback?: (error: Error | null, items: OutgoingCallerIdInstance[]) => any
  ): Promise<OutgoingCallerIdInstance[]>;
  list(params?: any, callback?: any): Promise<OutgoingCallerIdInstance[]>;
  /**
   * Retrieve a single page of OutgoingCallerIdInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: OutgoingCallerIdPage) => any
  ): Promise<OutgoingCallerIdPage>;
  /**
   * Retrieve a single page of OutgoingCallerIdInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { OutgoingCallerIdListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: OutgoingCallerIdListInstancePageOptions,
    callback?: (error: Error | null, items: OutgoingCallerIdPage) => any
  ): Promise<OutgoingCallerIdPage>;
  page(params?: any, callback?: any): Promise<OutgoingCallerIdPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface OutgoingCallerIdSolution {
  accountSid?: string;
}

interface OutgoingCallerIdListInstanceImpl
  extends OutgoingCallerIdListInstance {}
class OutgoingCallerIdListInstanceImpl implements OutgoingCallerIdListInstance {
  _version?: V2010;
  _solution?: OutgoingCallerIdSolution;
  _uri?: string;
}

export function OutgoingCallerIdListInstance(
  version: V2010,
  accountSid: string
): OutgoingCallerIdListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as OutgoingCallerIdListInstanceImpl;

  instance.get = function get(sid): OutgoingCallerIdContext {
    return new OutgoingCallerIdContextImpl(version, accountSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/OutgoingCallerIds.json`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<OutgoingCallerIdPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["phoneNumber"] !== undefined)
      data["PhoneNumber"] = params["phoneNumber"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
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
        new OutgoingCallerIdPage(operationVersion, payload, this._solution)
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
    targetUrl?: any,
    callback?: any
  ): Promise<OutgoingCallerIdPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new OutgoingCallerIdPage(this._version, payload, this._solution)
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

export class OutgoingCallerIdPage extends Page<
  V2010,
  OutgoingCallerIdPayload,
  OutgoingCallerIdResource,
  OutgoingCallerIdInstance
> {
  /**
   * Initialize the OutgoingCallerIdPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: OutgoingCallerIdSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of OutgoingCallerIdInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: OutgoingCallerIdPayload): OutgoingCallerIdInstance {
    return new OutgoingCallerIdInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
