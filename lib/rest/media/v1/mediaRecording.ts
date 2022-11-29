/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Media
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");

type MediaRecordingFormat = "mp4" | "webm";

type MediaRecordingOrder = "asc" | "desc";

type MediaRecordingStatus = "processing" | "completed" | "deleted" | "failed";

/**
 * Options to pass to each
 *
 * @property { MediaRecordingOrder } [order] The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default.
 * @property { MediaRecordingStatus } [status] Status to filter by, with possible values `processing`, `completed`, `deleted`, or `failed`.
 * @property { string } [processorSid] SID of a MediaProcessor to filter by.
 * @property { string } [sourceSid] SID of a MediaRecording source to filter by.
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
export interface MediaRecordingListInstanceEachOptions {
  order?: MediaRecordingOrder;
  status?: MediaRecordingStatus;
  processorSid?: string;
  sourceSid?: string;
  pageSize?: number;
  callback?: (
    item: MediaRecordingInstance,
    done: (err?: Error) => void
  ) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { MediaRecordingOrder } [order] The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default.
 * @property { MediaRecordingStatus } [status] Status to filter by, with possible values `processing`, `completed`, `deleted`, or `failed`.
 * @property { string } [processorSid] SID of a MediaProcessor to filter by.
 * @property { string } [sourceSid] SID of a MediaRecording source to filter by.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface MediaRecordingListInstanceOptions {
  order?: MediaRecordingOrder;
  status?: MediaRecordingStatus;
  processorSid?: string;
  sourceSid?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { MediaRecordingOrder } [order] The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default.
 * @property { MediaRecordingStatus } [status] Status to filter by, with possible values `processing`, `completed`, `deleted`, or `failed`.
 * @property { string } [processorSid] SID of a MediaProcessor to filter by.
 * @property { string } [sourceSid] SID of a MediaRecording source to filter by.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface MediaRecordingListInstancePageOptions {
  order?: MediaRecordingOrder;
  status?: MediaRecordingStatus;
  processorSid?: string;
  sourceSid?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface MediaRecordingContext {
  /**
   * Remove a MediaRecordingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a MediaRecordingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MediaRecordingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: MediaRecordingInstance) => any
  ): Promise<MediaRecordingInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface MediaRecordingContextSolution {
  sid?: string;
}

export class MediaRecordingContextImpl implements MediaRecordingContext {
  protected _solution: MediaRecordingContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    this._solution = { sid };
    this._uri = `/MediaRecordings/${sid}`;
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

  fetch(callback?: any): Promise<MediaRecordingInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new MediaRecordingInstance(
          operationVersion,
          payload,
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
export type MediaRecordingStatusCallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";

interface MediaRecordingPayload
  extends MediaRecordingResource,
    Page.TwilioResponsePayload {}

interface MediaRecordingResource {
  account_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  duration?: number | null;
  format?: MediaRecordingFormat;
  links?: object | null;
  processor_sid?: string | null;
  resolution?: string | null;
  source_sid?: string | null;
  sid?: string | null;
  media_size?: number | null;
  status?: MediaRecordingStatus;
  status_callback?: string | null;
  status_callback_method?: MediaRecordingStatusCallbackMethod;
  url?: string | null;
}

export class MediaRecordingInstance {
  protected _solution: MediaRecordingContextSolution;
  protected _context?: MediaRecordingContext;

  constructor(
    protected _version: V1,
    payload: MediaRecordingPayload,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.duration = deserialize.integer(payload.duration);
    this.format = payload.format;
    this.links = payload.links;
    this.processorSid = payload.processor_sid;
    this.resolution = payload.resolution;
    this.sourceSid = payload.source_sid;
    this.sid = payload.sid;
    this.mediaSize = payload.media_size;
    this.status = payload.status;
    this.statusCallback = payload.status_callback;
    this.statusCallbackMethod = payload.status_callback_method;
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The duration of the MediaRecording
   */
  duration?: number | null;
  format?: MediaRecordingFormat;
  /**
   * The URLs of related resources
   */
  links?: object | null;
  /**
   * The SID of the MediaProcessor
   */
  processorSid?: string | null;
  /**
   * The dimensions of the video image in pixels
   */
  resolution?: string | null;
  /**
   * The SID of the resource that generated the original media
   */
  sourceSid?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The size of the recording media
   */
  mediaSize?: number | null;
  status?: MediaRecordingStatus;
  /**
   * The URL to which Twilio will send MediaRecording event updates
   */
  statusCallback?: string | null;
  /**
   * The HTTP method Twilio should use to call the `status_callback` URL
   */
  statusCallbackMethod?: MediaRecordingStatusCallbackMethod;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;

  private get _proxy(): MediaRecordingContext {
    this._context =
      this._context ||
      new MediaRecordingContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a MediaRecordingInstance
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
   * Fetch a MediaRecordingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MediaRecordingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: MediaRecordingInstance) => any
  ): Promise<MediaRecordingInstance> {
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
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      duration: this.duration,
      format: this.format,
      links: this.links,
      processorSid: this.processorSid,
      resolution: this.resolution,
      sourceSid: this.sourceSid,
      sid: this.sid,
      mediaSize: this.mediaSize,
      status: this.status,
      statusCallback: this.statusCallback,
      statusCallbackMethod: this.statusCallbackMethod,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface MediaRecordingListInstance {
  (sid: string): MediaRecordingContext;
  get(sid: string): MediaRecordingContext;

  /**
   * Streams MediaRecordingInstance records from the API.
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
      item: MediaRecordingInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Streams MediaRecordingInstance records from the API.
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
   * @param { MediaRecordingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: MediaRecordingListInstanceEachOptions,
    callback?: (
      item: MediaRecordingInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of MediaRecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: MediaRecordingPage) => any
  ): Promise<MediaRecordingPage>;
  /**
   * Retrieve a single target page of MediaRecordingInstance records from the API.
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
    callback?: (error: Error | null, items: MediaRecordingPage) => any
  ): Promise<MediaRecordingPage>;
  getPage(params?: any, callback?: any): Promise<MediaRecordingPage>;
  /**
   * Lists MediaRecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: MediaRecordingInstance[]) => any
  ): Promise<MediaRecordingInstance[]>;
  /**
   * Lists MediaRecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MediaRecordingListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: MediaRecordingListInstanceOptions,
    callback?: (error: Error | null, items: MediaRecordingInstance[]) => any
  ): Promise<MediaRecordingInstance[]>;
  list(params?: any, callback?: any): Promise<MediaRecordingInstance[]>;
  /**
   * Retrieve a single page of MediaRecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: MediaRecordingPage) => any
  ): Promise<MediaRecordingPage>;
  /**
   * Retrieve a single page of MediaRecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MediaRecordingListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: MediaRecordingListInstancePageOptions,
    callback?: (error: Error | null, items: MediaRecordingPage) => any
  ): Promise<MediaRecordingPage>;
  page(params?: any, callback?: any): Promise<MediaRecordingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface MediaRecordingSolution {}

interface MediaRecordingListInstanceImpl extends MediaRecordingListInstance {}
class MediaRecordingListInstanceImpl implements MediaRecordingListInstance {
  _version?: V1;
  _solution?: MediaRecordingSolution;
  _uri?: string;
}

export function MediaRecordingListInstance(
  version: V1
): MediaRecordingListInstance {
  const instance = ((sid) =>
    instance.get(sid)) as MediaRecordingListInstanceImpl;

  instance.get = function get(sid): MediaRecordingContext {
    return new MediaRecordingContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/MediaRecordings`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<MediaRecordingPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["order"] !== undefined) data["Order"] = params["order"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["processorSid"] !== undefined)
      data["ProcessorSid"] = params["processorSid"];
    if (params["sourceSid"] !== undefined)
      data["SourceSid"] = params["sourceSid"];
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
        new MediaRecordingPage(operationVersion, payload, this._solution)
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
  ): Promise<MediaRecordingPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new MediaRecordingPage(this._version, payload, this._solution)
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

export class MediaRecordingPage extends Page<
  V1,
  MediaRecordingPayload,
  MediaRecordingResource,
  MediaRecordingInstance
> {
  /**
   * Initialize the MediaRecordingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: MediaRecordingSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of MediaRecordingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MediaRecordingPayload): MediaRecordingInstance {
    return new MediaRecordingInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
