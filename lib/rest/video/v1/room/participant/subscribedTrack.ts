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
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

type RoomParticipantSubscribedTrackKind = "audio" | "video" | "data";

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
export interface SubscribedTrackListInstanceEachOptions {
  pageSize?: number;
  callback?: (
    item: SubscribedTrackInstance,
    done: (err?: Error) => void
  ) => void;
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
export interface SubscribedTrackListInstanceOptions {
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
export interface SubscribedTrackListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface SubscribedTrackContext {
  /**
   * Fetch a SubscribedTrackInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SubscribedTrackInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SubscribedTrackInstance) => any
  ): Promise<SubscribedTrackInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SubscribedTrackContextSolution {
  roomSid?: string;
  participantSid?: string;
  sid?: string;
}

export class SubscribedTrackContextImpl implements SubscribedTrackContext {
  protected _solution: SubscribedTrackContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    roomSid: string,
    participantSid: string,
    sid: string
  ) {
    if (!isValidPathParam(roomSid)) {
      throw new Error("Parameter 'roomSid' is not valid.");
    }

    if (!isValidPathParam(participantSid)) {
      throw new Error("Parameter 'participantSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { roomSid, participantSid, sid };
    this._uri = `/Rooms/${roomSid}/Participants/${participantSid}/SubscribedTracks/${sid}`;
  }

  fetch(callback?: any): Promise<SubscribedTrackInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SubscribedTrackInstance(
          operationVersion,
          payload,
          this._solution.roomSid,
          this._solution.participantSid,
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

interface SubscribedTrackPayload extends TwilioResponsePayload {
  subscribed_tracks: SubscribedTrackResource[];
}

interface SubscribedTrackResource {
  sid?: string | null;
  participant_sid?: string | null;
  publisher_sid?: string | null;
  room_sid?: string | null;
  name?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  enabled?: boolean | null;
  kind?: RoomParticipantSubscribedTrackKind;
  url?: string | null;
}

export class SubscribedTrackInstance {
  protected _solution: SubscribedTrackContextSolution;
  protected _context?: SubscribedTrackContext;

  constructor(
    protected _version: V1,
    payload: SubscribedTrackResource,
    roomSid: string,
    participantSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.participantSid = payload.participant_sid;
    this.publisherSid = payload.publisher_sid;
    this.roomSid = payload.room_sid;
    this.name = payload.name;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.enabled = payload.enabled;
    this.kind = payload.kind;
    this.url = payload.url;

    this._solution = { roomSid, participantSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the participant that subscribes to the track
   */
  participantSid?: string | null;
  /**
   * The SID of the participant that publishes the track
   */
  publisherSid?: string | null;
  /**
   * The SID of the room where the track is published
   */
  roomSid?: string | null;
  /**
   * The track name
   */
  name?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * Whether the track is enabled
   */
  enabled?: boolean | null;
  kind?: RoomParticipantSubscribedTrackKind;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;

  private get _proxy(): SubscribedTrackContext {
    this._context =
      this._context ||
      new SubscribedTrackContextImpl(
        this._version,
        this._solution.roomSid,
        this._solution.participantSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a SubscribedTrackInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SubscribedTrackInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SubscribedTrackInstance) => any
  ): Promise<SubscribedTrackInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      participantSid: this.participantSid,
      publisherSid: this.publisherSid,
      roomSid: this.roomSid,
      name: this.name,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      enabled: this.enabled,
      kind: this.kind,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface SubscribedTrackListInstance {
  (sid: string): SubscribedTrackContext;
  get(sid: string): SubscribedTrackContext;

  /**
   * Streams SubscribedTrackInstance records from the API.
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
   * @param { SubscribedTrackListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | SubscribedTrackListInstanceEachOptions
      | ((item: SubscribedTrackInstance, done: (err?: Error) => void) => void),
    callback?: (
      item: SubscribedTrackInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of SubscribedTrackInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: SubscribedTrackPage) => any
  ): Promise<SubscribedTrackPage>;
  /**
   * Lists SubscribedTrackInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SubscribedTrackListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | SubscribedTrackListInstanceOptions
      | ((error: Error | null, items: SubscribedTrackInstance[]) => any),
    callback?: (error: Error | null, items: SubscribedTrackInstance[]) => any
  ): Promise<SubscribedTrackInstance[]>;
  /**
   * Retrieve a single page of SubscribedTrackInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SubscribedTrackListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | SubscribedTrackListInstancePageOptions
      | ((error: Error | null, items: SubscribedTrackPage) => any),
    callback?: (error: Error | null, items: SubscribedTrackPage) => any
  ): Promise<SubscribedTrackPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SubscribedTrackSolution {
  roomSid?: string;
  participantSid?: string;
}

interface SubscribedTrackListInstanceImpl extends SubscribedTrackListInstance {}
class SubscribedTrackListInstanceImpl implements SubscribedTrackListInstance {
  _version?: V1;
  _solution?: SubscribedTrackSolution;
  _uri?: string;
}

export function SubscribedTrackListInstance(
  version: V1,
  roomSid: string,
  participantSid: string
): SubscribedTrackListInstance {
  if (!isValidPathParam(roomSid)) {
    throw new Error("Parameter 'roomSid' is not valid.");
  }

  if (!isValidPathParam(participantSid)) {
    throw new Error("Parameter 'participantSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as SubscribedTrackListInstanceImpl;

  instance.get = function get(sid): SubscribedTrackContext {
    return new SubscribedTrackContextImpl(
      version,
      roomSid,
      participantSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { roomSid, participantSid };
  instance._uri = `/Rooms/${roomSid}/Participants/${participantSid}/SubscribedTracks`;

  instance.page = function page(
    params?:
      | SubscribedTrackListInstancePageOptions
      | ((error: Error | null, item?: SubscribedTrackPage) => any),
    callback?: (error: Error | null, item?: SubscribedTrackPage) => any
  ): Promise<SubscribedTrackPage> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: SubscribedTrackPage
      ) => any;
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
        new SubscribedTrackPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: SubscribedTrackPage) => any
  ): Promise<SubscribedTrackPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new SubscribedTrackPage(this._version, payload, this._solution)
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

export class SubscribedTrackPage extends Page<
  V1,
  SubscribedTrackPayload,
  SubscribedTrackResource,
  SubscribedTrackInstance
> {
  /**
   * Initialize the SubscribedTrackPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: SubscribedTrackSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SubscribedTrackInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SubscribedTrackResource): SubscribedTrackInstance {
    return new SubscribedTrackInstance(
      this._version,
      payload,
      this._solution.roomSid,
      this._solution.participantSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
