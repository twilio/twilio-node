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
import { isValidPathParam } from "../../../../../base/utility";

type ConferenceRecordingSource =
  | "DialVerb"
  | "Conference"
  | "OutboundAPI"
  | "Trunking"
  | "RecordVerb"
  | "StartCallRecordingAPI"
  | "StartConferenceRecordingAPI";

type ConferenceRecordingStatus =
  | "in-progress"
  | "paused"
  | "stopped"
  | "processing"
  | "completed"
  | "absent";

/**
 * Options to pass to update a RecordingInstance
 *
 * @property { ConferenceRecordingStatus } status
 * @property { string } [pauseBehavior] Whether to record during a pause. Can be: `skip` or `silence` and the default is `silence`. `skip` does not record during the pause period, while `silence` will replace the actual audio of the call with silence during the pause period. This parameter only applies when setting `status` is set to `paused`.
 */
export interface RecordingContextUpdateOptions {
  status: ConferenceRecordingStatus;
  pauseBehavior?: string;
}
/**
 * Options to pass to each
 *
 * @property { Date } [dateCreated] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date.
 * @property { Date } [dateCreatedBefore] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date.
 * @property { Date } [dateCreatedAfter] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date.
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
export interface RecordingListInstanceEachOptions {
  dateCreated?: Date;
  dateCreatedBefore?: Date;
  dateCreatedAfter?: Date;
  pageSize?: number;
  callback?: (item: RecordingInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { Date } [dateCreated] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date.
 * @property { Date } [dateCreatedBefore] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date.
 * @property { Date } [dateCreatedAfter] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface RecordingListInstanceOptions {
  dateCreated?: Date;
  dateCreatedBefore?: Date;
  dateCreatedAfter?: Date;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { Date } [dateCreated] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date.
 * @property { Date } [dateCreatedBefore] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date.
 * @property { Date } [dateCreatedAfter] The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface RecordingListInstancePageOptions {
  dateCreated?: Date;
  dateCreatedBefore?: Date;
  dateCreatedAfter?: Date;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface RecordingContext {
  /**
   * Remove a RecordingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a RecordingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RecordingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RecordingInstance) => any
  ): Promise<RecordingInstance>;

  /**
   * Update a RecordingInstance
   *
   * @param { RecordingContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RecordingInstance
   */
  update(
    params: RecordingContextUpdateOptions,
    callback?: (error: Error | null, item?: RecordingInstance) => any
  ): Promise<RecordingInstance>;
  update(params: any, callback?: any): Promise<RecordingInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RecordingContextSolution {
  accountSid?: string;
  conferenceSid?: string;
  sid?: string;
}

export class RecordingContextImpl implements RecordingContext {
  protected _solution: RecordingContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V2010,
    accountSid: string,
    conferenceSid: string,
    sid: string
  ) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(conferenceSid)) {
      throw new Error("Parameter 'conferenceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, conferenceSid, sid };
    this._uri = `/Accounts/${accountSid}/Conferences/${conferenceSid}/Recordings/${sid}.json`;
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

  fetch(callback?: any): Promise<RecordingInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new RecordingInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.conferenceSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params: any, callback?: any): Promise<RecordingInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["status"] === null || params["status"] === undefined) {
      throw new Error("Required parameter \"params['status']\" missing.");
    }

    let data: any = {};

    data["Status"] = params["status"];
    if (params["pauseBehavior"] !== undefined)
      data["PauseBehavior"] = params["pauseBehavior"];

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
        new RecordingInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.conferenceSid,
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

interface RecordingPayload
  extends RecordingResource,
    Omit<Page.TwilioResponsePayload, "uri"> {}

interface RecordingResource {
  account_sid?: string | null;
  api_version?: string | null;
  call_sid?: string | null;
  conference_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  start_time?: string | null;
  duration?: string | null;
  sid?: string | null;
  price?: string | null;
  price_unit?: string | null;
  status?: ConferenceRecordingStatus;
  channels?: number | null;
  source?: ConferenceRecordingSource;
  error_code?: number | null;
  encryption_details?: any | null;
  uri?: string | null;
}

export class RecordingInstance {
  protected _solution: RecordingContextSolution;
  protected _context?: RecordingContext;

  constructor(
    protected _version: V2010,
    payload: RecordingPayload,
    accountSid: string,
    conferenceSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.apiVersion = payload.api_version;
    this.callSid = payload.call_sid;
    this.conferenceSid = payload.conference_sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.startTime = deserialize.rfc2822DateTime(payload.start_time);
    this.duration = payload.duration;
    this.sid = payload.sid;
    this.price = payload.price;
    this.priceUnit = payload.price_unit;
    this.status = payload.status;
    this.channels = deserialize.integer(payload.channels);
    this.source = payload.source;
    this.errorCode = deserialize.integer(payload.error_code);
    this.encryptionDetails = payload.encryption_details;
    this.uri = payload.uri;

    this._solution = { accountSid, conferenceSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The API version used to create the recording
   */
  apiVersion?: string | null;
  /**
   * The SID of the Call the resource is associated with
   */
  callSid?: string | null;
  /**
   * The Conference SID that identifies the conference associated with the recording
   */
  conferenceSid?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was created
   */
  dateCreated?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  dateUpdated?: string | null;
  /**
   * The start time of the recording, given in RFC 2822 format
   */
  startTime?: string | null;
  /**
   * The length of the recording in seconds
   */
  duration?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The one-time cost of creating the recording.
   */
  price?: string | null;
  /**
   * The currency used in the price property.
   */
  priceUnit?: string | null;
  status?: ConferenceRecordingStatus;
  /**
   * The number of channels in the final recording file as an integer
   */
  channels?: number | null;
  source?: ConferenceRecordingSource;
  /**
   * More information about why the recording is missing, if status is `absent`.
   */
  errorCode?: number | null;
  /**
   * How to decrypt the recording.
   */
  encryptionDetails?: any | null;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`
   */
  uri?: string | null;

  private get _proxy(): RecordingContext {
    this._context =
      this._context ||
      new RecordingContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.conferenceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a RecordingInstance
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
   * Fetch a RecordingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RecordingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RecordingInstance) => any
  ): Promise<RecordingInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a RecordingInstance
   *
   * @param { RecordingContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RecordingInstance
   */
  update(
    params: RecordingContextUpdateOptions,
    callback?: (error: Error | null, item?: RecordingInstance) => any
  ): Promise<RecordingInstance>;
  update(params: any, callback?: any): Promise<RecordingInstance> {
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
      callSid: this.callSid,
      conferenceSid: this.conferenceSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      startTime: this.startTime,
      duration: this.duration,
      sid: this.sid,
      price: this.price,
      priceUnit: this.priceUnit,
      status: this.status,
      channels: this.channels,
      source: this.source,
      errorCode: this.errorCode,
      encryptionDetails: this.encryptionDetails,
      uri: this.uri,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface RecordingListInstance {
  (sid: string): RecordingContext;
  get(sid: string): RecordingContext;

  /**
   * Streams RecordingInstance records from the API.
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
    callback?: (item: RecordingInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams RecordingInstance records from the API.
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
   * @param { RecordingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: RecordingListInstanceEachOptions,
    callback?: (item: RecordingInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of RecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: RecordingPage) => any
  ): Promise<RecordingPage>;
  /**
   * Retrieve a single target page of RecordingInstance records from the API.
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
    callback?: (error: Error | null, items: RecordingPage) => any
  ): Promise<RecordingPage>;
  getPage(params?: any, callback?: any): Promise<RecordingPage>;
  /**
   * Lists RecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: RecordingInstance[]) => any
  ): Promise<RecordingInstance[]>;
  /**
   * Lists RecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RecordingListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: RecordingListInstanceOptions,
    callback?: (error: Error | null, items: RecordingInstance[]) => any
  ): Promise<RecordingInstance[]>;
  list(params?: any, callback?: any): Promise<RecordingInstance[]>;
  /**
   * Retrieve a single page of RecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: RecordingPage) => any
  ): Promise<RecordingPage>;
  /**
   * Retrieve a single page of RecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RecordingListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: RecordingListInstancePageOptions,
    callback?: (error: Error | null, items: RecordingPage) => any
  ): Promise<RecordingPage>;
  page(params?: any, callback?: any): Promise<RecordingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RecordingSolution {
  accountSid?: string;
  conferenceSid?: string;
}

interface RecordingListInstanceImpl extends RecordingListInstance {}
class RecordingListInstanceImpl implements RecordingListInstance {
  _version?: V2010;
  _solution?: RecordingSolution;
  _uri?: string;
}

export function RecordingListInstance(
  version: V2010,
  accountSid: string,
  conferenceSid: string
): RecordingListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(conferenceSid)) {
    throw new Error("Parameter 'conferenceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as RecordingListInstanceImpl;

  instance.get = function get(sid): RecordingContext {
    return new RecordingContextImpl(version, accountSid, conferenceSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid, conferenceSid };
  instance._uri = `/Accounts/${accountSid}/Conferences/${conferenceSid}/Recordings.json`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<RecordingPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["dateCreated"] !== undefined)
      data["DateCreated"] = serialize.iso8601Date(params["dateCreated"]);
    if (params["dateCreatedBefore"] !== undefined)
      data["DateCreated<"] = serialize.iso8601Date(params["dateCreatedBefore"]);
    if (params["dateCreatedAfter"] !== undefined)
      data["DateCreated>"] = serialize.iso8601Date(params["dateCreatedAfter"]);
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
      (payload) => new RecordingPage(operationVersion, payload, this._solution)
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
  ): Promise<RecordingPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new RecordingPage(this._version, payload, this._solution)
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

export class RecordingPage extends Page<
  V2010,
  RecordingPayload,
  RecordingResource,
  RecordingInstance
> {
  /**
   * Initialize the RecordingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: RecordingSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of RecordingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RecordingPayload): RecordingInstance {
    return new RecordingInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.conferenceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
