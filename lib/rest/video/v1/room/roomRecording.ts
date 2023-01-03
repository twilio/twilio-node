/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Video
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

type RoomRecordingCodec = "VP8" | "H264" | "OPUS" | "PCMU";

type RoomRecordingFormat = "mka" | "mkv";

type RoomRecordingStatus = "processing" | "completed" | "deleted" | "failed";

type RoomRecordingType = "audio" | "video" | "data";

/**
 * Options to pass to each
 *
 * @property { RoomRecordingStatus } [status] Read only the recordings with this status. Can be: `processing`, `completed`, or `deleted`.
 * @property { string } [sourceSid] Read only the recordings that have this `source_sid`.
 * @property { Date } [dateCreatedAfter] Read only recordings that started on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
 * @property { Date } [dateCreatedBefore] Read only Recordings that started before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
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
export interface RoomRecordingListInstanceEachOptions {
  status?: RoomRecordingStatus;
  sourceSid?: string;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  pageSize?: number;
  callback?: (item: RoomRecordingInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { RoomRecordingStatus } [status] Read only the recordings with this status. Can be: `processing`, `completed`, or `deleted`.
 * @property { string } [sourceSid] Read only the recordings that have this `source_sid`.
 * @property { Date } [dateCreatedAfter] Read only recordings that started on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
 * @property { Date } [dateCreatedBefore] Read only Recordings that started before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface RoomRecordingListInstanceOptions {
  status?: RoomRecordingStatus;
  sourceSid?: string;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { RoomRecordingStatus } [status] Read only the recordings with this status. Can be: `processing`, `completed`, or `deleted`.
 * @property { string } [sourceSid] Read only the recordings that have this `source_sid`.
 * @property { Date } [dateCreatedAfter] Read only recordings that started on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
 * @property { Date } [dateCreatedBefore] Read only Recordings that started before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface RoomRecordingListInstancePageOptions {
  status?: RoomRecordingStatus;
  sourceSid?: string;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface RoomRecordingContext {
  /**
   * Remove a RoomRecordingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a RoomRecordingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RoomRecordingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RoomRecordingInstance) => any
  ): Promise<RoomRecordingInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RoomRecordingContextSolution {
  roomSid?: string;
  sid?: string;
}

export class RoomRecordingContextImpl implements RoomRecordingContext {
  protected _solution: RoomRecordingContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, roomSid: string, sid: string) {
    if (!isValidPathParam(roomSid)) {
      throw new Error("Parameter 'roomSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { roomSid, sid };
    this._uri = `/Rooms/${roomSid}/Recordings/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
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

  fetch(
    callback?: (error: Error | null, item?: RoomRecordingInstance) => any
  ): Promise<RoomRecordingInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new RoomRecordingInstance(
          operationVersion,
          payload,
          this._solution.roomSid,
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

interface RoomRecordingPayload extends TwilioResponsePayload {
  recordings: RoomRecordingResource[];
}

interface RoomRecordingResource {
  account_sid?: string | null;
  status?: RoomRecordingStatus;
  date_created?: Date | null;
  sid?: string | null;
  source_sid?: string | null;
  size?: number | null;
  url?: string | null;
  type?: RoomRecordingType;
  duration?: number | null;
  container_format?: RoomRecordingFormat;
  codec?: RoomRecordingCodec;
  grouping_sids?: any | null;
  track_name?: string | null;
  offset?: number | null;
  media_external_location?: string | null;
  room_sid?: string | null;
  links?: object | null;
}

export class RoomRecordingInstance {
  protected _solution: RoomRecordingContextSolution;
  protected _context?: RoomRecordingContext;

  constructor(
    protected _version: V1,
    payload: RoomRecordingResource,
    roomSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.status = payload.status;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.sid = payload.sid;
    this.sourceSid = payload.source_sid;
    this.size = payload.size;
    this.url = payload.url;
    this.type = payload.type;
    this.duration = deserialize.integer(payload.duration);
    this.containerFormat = payload.container_format;
    this.codec = payload.codec;
    this.groupingSids = payload.grouping_sids;
    this.trackName = payload.track_name;
    this.offset = payload.offset;
    this.mediaExternalLocation = payload.media_external_location;
    this.roomSid = payload.room_sid;
    this.links = payload.links;

    this._solution = { roomSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  status?: RoomRecordingStatus;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the recording source
   */
  sourceSid?: string | null;
  /**
   * The size of the recorded track in bytes
   */
  size?: number | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;
  type?: RoomRecordingType;
  /**
   * The duration of the recording in seconds
   */
  duration?: number | null;
  containerFormat?: RoomRecordingFormat;
  codec?: RoomRecordingCodec;
  /**
   * A list of SIDs related to the Recording
   */
  groupingSids?: any | null;
  /**
   * The name that was given to the source track of the recording
   */
  trackName?: string | null;
  /**
   * The number of milliseconds between a point in time that is common to all rooms in a group and when the source room of the recording started
   */
  offset?: number | null;
  /**
   * The URL of the media file associated with the recording when stored externally
   */
  mediaExternalLocation?: string | null;
  /**
   * The SID of the Room resource the recording is associated with
   */
  roomSid?: string | null;
  /**
   * The URLs of related resources
   */
  links?: object | null;

  private get _proxy(): RoomRecordingContext {
    this._context =
      this._context ||
      new RoomRecordingContextImpl(
        this._version,
        this._solution.roomSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a RoomRecordingInstance
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
   * Fetch a RoomRecordingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RoomRecordingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RoomRecordingInstance) => any
  ): Promise<RoomRecordingInstance> {
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
      status: this.status,
      dateCreated: this.dateCreated,
      sid: this.sid,
      sourceSid: this.sourceSid,
      size: this.size,
      url: this.url,
      type: this.type,
      duration: this.duration,
      containerFormat: this.containerFormat,
      codec: this.codec,
      groupingSids: this.groupingSids,
      trackName: this.trackName,
      offset: this.offset,
      mediaExternalLocation: this.mediaExternalLocation,
      roomSid: this.roomSid,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface RoomRecordingListInstance {
  (sid: string): RoomRecordingContext;
  get(sid: string): RoomRecordingContext;

  /**
   * Streams RoomRecordingInstance records from the API.
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
   * @param { RoomRecordingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: RoomRecordingInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: RoomRecordingListInstanceEachOptions,
    callback?: (
      item: RoomRecordingInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of RoomRecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: RoomRecordingPage) => any
  ): Promise<RoomRecordingPage>;
  /**
   * Lists RoomRecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RoomRecordingListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: RoomRecordingInstance[]) => any
  ): Promise<RoomRecordingInstance[]>;
  list(
    params: RoomRecordingListInstanceOptions,
    callback?: (error: Error | null, items: RoomRecordingInstance[]) => any
  ): Promise<RoomRecordingInstance[]>;
  /**
   * Retrieve a single page of RoomRecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RoomRecordingListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: RoomRecordingPage) => any
  ): Promise<RoomRecordingPage>;
  page(
    params: RoomRecordingListInstancePageOptions,
    callback?: (error: Error | null, items: RoomRecordingPage) => any
  ): Promise<RoomRecordingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RoomRecordingSolution {
  roomSid?: string;
}

interface RoomRecordingListInstanceImpl extends RoomRecordingListInstance {}
class RoomRecordingListInstanceImpl implements RoomRecordingListInstance {
  _version?: V1;
  _solution?: RoomRecordingSolution;
  _uri?: string;
}

export function RoomRecordingListInstance(
  version: V1,
  roomSid: string
): RoomRecordingListInstance {
  if (!isValidPathParam(roomSid)) {
    throw new Error("Parameter 'roomSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as RoomRecordingListInstanceImpl;

  instance.get = function get(sid): RoomRecordingContext {
    return new RoomRecordingContextImpl(version, roomSid, sid);
  };

  instance._version = version;
  instance._solution = { roomSid };
  instance._uri = `/Rooms/${roomSid}/Recordings`;

  instance.page = function page(
    params?:
      | RoomRecordingListInstancePageOptions
      | ((error: Error | null, item?: RoomRecordingPage) => any),
    callback?: (error: Error | null, item?: RoomRecordingPage) => any
  ): Promise<RoomRecordingPage> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: RoomRecordingPage
      ) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["sourceSid"] !== undefined)
      data["SourceSid"] = params["sourceSid"];
    if (params["dateCreatedAfter"] !== undefined)
      data["DateCreatedAfter"] = serialize.iso8601DateTime(
        params["dateCreatedAfter"]
      );
    if (params["dateCreatedBefore"] !== undefined)
      data["DateCreatedBefore"] = serialize.iso8601DateTime(
        params["dateCreatedBefore"]
      );
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
        new RoomRecordingPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: RoomRecordingPage) => any
  ): Promise<RoomRecordingPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new RoomRecordingPage(this._version, payload, this._solution)
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

export class RoomRecordingPage extends Page<
  V1,
  RoomRecordingPayload,
  RoomRecordingResource,
  RoomRecordingInstance
> {
  /**
   * Initialize the RoomRecordingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: RoomRecordingSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of RoomRecordingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RoomRecordingResource): RoomRecordingInstance {
    return new RoomRecordingInstance(
      this._version,
      payload,
      this._solution.roomSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
