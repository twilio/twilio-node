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

export type RecordingSource =
  | "DialVerb"
  | "Conference"
  | "OutboundAPI"
  | "Trunking"
  | "RecordVerb"
  | "StartCallRecordingAPI"
  | "StartConferenceRecordingAPI";

export type RecordingStatus =
  | "in-progress"
  | "paused"
  | "stopped"
  | "processing"
  | "completed"
  | "absent";

/**
 * Options to pass to update a RecordingInstance
 */
export interface RecordingContextUpdateOptions {
  /**  */
  status: RecordingStatus;
  /** Whether to record during a pause. Can be: `skip` or `silence` and the default is `silence`. `skip` does not record during the pause period, while `silence` will replace the actual audio of the call with silence during the pause period. This parameter only applies when setting `status` is set to `paused`. */
  pauseBehavior?: string;
}
/**
 * Options to pass to each
 */
export interface RecordingListInstanceEachOptions {
  /** The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date. */
  dateCreated?: Date;
  /** The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date. */
  dateCreatedBefore?: Date;
  /** The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date. */
  dateCreatedAfter?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: RecordingInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface RecordingListInstanceOptions {
  /** The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date. */
  dateCreated?: Date;
  /** The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date. */
  dateCreatedBefore?: Date;
  /** The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date. */
  dateCreatedAfter?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface RecordingListInstancePageOptions {
  /** The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date. */
  dateCreated?: Date;
  /** The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date. */
  dateCreatedBefore?: Date;
  /** The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date. */
  dateCreatedAfter?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface RecordingContext {
  /**
   * Remove a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RecordingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RecordingInstance) => any
  ): Promise<RecordingInstance>;

  /**
   * Update a RecordingInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RecordingInstance
   */
  update(
    params: RecordingContextUpdateOptions,
    callback?: (error: Error | null, item?: RecordingInstance) => any
  ): Promise<RecordingInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RecordingContextSolution {
  accountSid: string;
  conferenceSid: string;
  sid: string;
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
    callback?: (error: Error | null, item?: RecordingInstance) => any
  ): Promise<RecordingInstance> {
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
        new RecordingInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.conferenceSid,
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
    params: RecordingContextUpdateOptions,
    callback?: (error: Error | null, item?: RecordingInstance) => any
  ): Promise<RecordingInstance> {
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
        new RecordingInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.conferenceSid,
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

interface RecordingPayload extends TwilioResponsePayload {
  recordings: RecordingResource[];
}

interface RecordingResource {
  account_sid: string;
  api_version: string;
  call_sid: string;
  conference_sid: string;
  date_created: Date;
  date_updated: Date;
  start_time: Date;
  duration: string;
  sid: string;
  price: string;
  price_unit: string;
  status: RecordingStatus;
  channels: number;
  source: RecordingSource;
  error_code: number;
  encryption_details: any;
  uri: string;
}

export class RecordingInstance {
  protected _solution: RecordingContextSolution;
  protected _context?: RecordingContext;

  constructor(
    protected _version: V2010,
    payload: RecordingResource,
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
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference Recording resource.
   */
  accountSid: string;
  /**
   * The API version used to create the recording.
   */
  apiVersion: string;
  /**
   * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Conference Recording resource is associated with.
   */
  callSid: string;
  /**
   * The Conference SID that identifies the conference associated with the recording.
   */
  conferenceSid: string;
  /**
   * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT that the resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * The start time of the recording in GMT and in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
   */
  startTime: Date;
  /**
   * The length of the recording in seconds.
   */
  duration: string;
  /**
   * The unique string that that we created to identify the Conference Recording resource.
   */
  sid: string;
  /**
   * The one-time cost of creating the recording in the `price_unit` currency.
   */
  price: string;
  /**
   * The currency used in the `price` property. Example: `USD`.
   */
  priceUnit: string;
  status: RecordingStatus;
  /**
   * The number of channels in the final recording file.  Can be: `1`, or `2`. Separating a two leg call into two separate channels of the recording file is supported in [Dial](https://www.twilio.com/docs/voice/twiml/dial#attributes-record) and [Outbound Rest API](https://www.twilio.com/docs/voice/make-calls) record options.
   */
  channels: number;
  source: RecordingSource;
  /**
   * The error code that describes why the recording is `absent`. The error code is described in our [Error Dictionary](https://www.twilio.com/docs/api/errors). This value is null if the recording `status` is not `absent`.
   */
  errorCode: number;
  /**
   * How to decrypt the recording if it was encrypted using [Call Recording Encryption](https://www.twilio.com/docs/voice/tutorials/voice-recording-encryption) feature.
   */
  encryptionDetails: any;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`.
   */
  uri: string;

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
   * Fetch a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RecordingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RecordingInstance) => any
  ): Promise<RecordingInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a RecordingInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RecordingInstance
   */
  update(
    params: RecordingContextUpdateOptions,
    callback?: (error: Error | null, item?: RecordingInstance) => any
  ): Promise<RecordingInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: RecordingInstance) => any
  ): Promise<RecordingInstance> {
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

export interface RecordingSolution {
  accountSid: string;
  conferenceSid: string;
}

export interface RecordingListInstance {
  _version: V2010;
  _solution: RecordingSolution;
  _uri: string;

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
   * @param { RecordingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: RecordingInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: RecordingListInstanceEachOptions,
    callback?: (item: RecordingInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of RecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: RecordingPage) => any
  ): Promise<RecordingPage>;
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
    callback?: (error: Error | null, items: RecordingInstance[]) => any
  ): Promise<RecordingInstance[]>;
  list(
    params: RecordingListInstanceOptions,
    callback?: (error: Error | null, items: RecordingInstance[]) => any
  ): Promise<RecordingInstance[]>;
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
    callback?: (error: Error | null, items: RecordingPage) => any
  ): Promise<RecordingPage>;
  page(
    params: RecordingListInstancePageOptions,
    callback?: (error: Error | null, items: RecordingPage) => any
  ): Promise<RecordingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
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

  const instance = ((sid) => instance.get(sid)) as RecordingListInstance;

  instance.get = function get(sid): RecordingContext {
    return new RecordingContextImpl(version, accountSid, conferenceSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid, conferenceSid };
  instance._uri = `/Accounts/${accountSid}/Conferences/${conferenceSid}/Recordings.json`;

  instance.page = function page(
    params?:
      | RecordingListInstancePageOptions
      | ((error: Error | null, items: RecordingPage) => any),
    callback?: (error: Error | null, items: RecordingPage) => any
  ): Promise<RecordingPage> {
    if (params instanceof Function) {
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
        new RecordingPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: RecordingPage) => any
  ): Promise<RecordingPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new RecordingPage(instance._version, payload, instance._solution)
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
  getInstance(payload: RecordingResource): RecordingInstance {
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
