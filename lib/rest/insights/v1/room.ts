/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Insights
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { ParticipantListInstance } from "./room/participant";

type VideoRoomSummaryCodec = "VP8" | "H264" | "VP9";

type VideoRoomSummaryCreatedMethod = "sdk" | "ad_hoc" | "api";

type VideoRoomSummaryEdgeLocation =
  | "ashburn"
  | "dublin"
  | "frankfurt"
  | "singapore"
  | "sydney"
  | "sao_paulo"
  | "roaming"
  | "umatilla"
  | "tokyo";

type VideoRoomSummaryEndReason = "room_ended_via_api" | "timeout";

type VideoRoomSummaryProcessingState = "complete" | "in_progress";

type VideoRoomSummaryRoomStatus = "in_progress" | "completed";

type VideoRoomSummaryRoomType = "go" | "peer_to_peer" | "group" | "group_small";

type VideoRoomSummaryTwilioRealm =
  | "us1"
  | "us2"
  | "au1"
  | "br1"
  | "ie1"
  | "jp1"
  | "sg1"
  | "in1"
  | "de1"
  | "gll";

/**
 * Options to pass to each
 */
export interface RoomListInstanceEachOptions {
  /** Type of room. Can be `go`, `peer_to_peer`, `group`, or `group_small`. */
  roomType?: Array<VideoRoomSummaryRoomType>;
  /** Codecs used by participants in the room. Can be `VP8`, `H264`, or `VP9`. */
  codec?: Array<VideoRoomSummaryCodec>;
  /** Room friendly name. */
  roomName?: string;
  /** Only read rooms that started on or after this ISO 8601 timestamp. */
  createdAfter?: Date;
  /** Only read rooms that started before this ISO 8601 timestamp. */
  createdBefore?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: RoomInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface RoomListInstanceOptions {
  /** Type of room. Can be `go`, `peer_to_peer`, `group`, or `group_small`. */
  roomType?: Array<VideoRoomSummaryRoomType>;
  /** Codecs used by participants in the room. Can be `VP8`, `H264`, or `VP9`. */
  codec?: Array<VideoRoomSummaryCodec>;
  /** Room friendly name. */
  roomName?: string;
  /** Only read rooms that started on or after this ISO 8601 timestamp. */
  createdAfter?: Date;
  /** Only read rooms that started before this ISO 8601 timestamp. */
  createdBefore?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface RoomListInstancePageOptions {
  /** Type of room. Can be `go`, `peer_to_peer`, `group`, or `group_small`. */
  roomType?: Array<VideoRoomSummaryRoomType>;
  /** Codecs used by participants in the room. Can be `VP8`, `H264`, or `VP9`. */
  codec?: Array<VideoRoomSummaryCodec>;
  /** Room friendly name. */
  roomName?: string;
  /** Only read rooms that started on or after this ISO 8601 timestamp. */
  createdAfter?: Date;
  /** Only read rooms that started before this ISO 8601 timestamp. */
  createdBefore?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface RoomContext {
  participants: ParticipantListInstance;

  /**
   * Fetch a RoomInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RoomInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RoomInstance) => any
  ): Promise<RoomInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RoomContextSolution {
  roomSid: string;
}

export class RoomContextImpl implements RoomContext {
  protected _solution: RoomContextSolution;
  protected _uri: string;

  protected _participants?: ParticipantListInstance;

  constructor(protected _version: V1, roomSid: string) {
    if (!isValidPathParam(roomSid)) {
      throw new Error("Parameter 'roomSid' is not valid.");
    }

    this._solution = { roomSid };
    this._uri = `/Video/Rooms/${roomSid}`;
  }

  get participants(): ParticipantListInstance {
    this._participants =
      this._participants ||
      ParticipantListInstance(this._version, this._solution.roomSid);
    return this._participants;
  }

  fetch(
    callback?: (error: Error | null, item?: RoomInstance) => any
  ): Promise<RoomInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new RoomInstance(operationVersion, payload, instance._solution.roomSid)
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

export type RoomStatusCallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";

interface RoomPayload extends TwilioResponsePayload {
  rooms: RoomResource[];
}

interface RoomResource {
  account_sid: string;
  room_sid: string;
  room_name: string;
  create_time: Date;
  end_time: Date;
  room_type: VideoRoomSummaryRoomType;
  room_status: VideoRoomSummaryRoomStatus;
  status_callback: string;
  status_callback_method: RoomStatusCallbackMethod;
  created_method: VideoRoomSummaryCreatedMethod;
  end_reason: VideoRoomSummaryEndReason;
  max_participants: number;
  unique_participants: number;
  unique_participant_identities: number;
  concurrent_participants: number;
  max_concurrent_participants: number;
  codecs: Array<VideoRoomSummaryCodec>;
  media_region: VideoRoomSummaryTwilioRealm;
  duration_sec: number;
  total_participant_duration_sec: number;
  total_recording_duration_sec: number;
  processing_state: VideoRoomSummaryProcessingState;
  recording_enabled: boolean;
  edge_location: VideoRoomSummaryEdgeLocation;
  url: string;
  links: Record<string, string>;
}

export class RoomInstance {
  protected _solution: RoomContextSolution;
  protected _context?: RoomContext;

  constructor(protected _version: V1, payload: RoomResource, roomSid?: string) {
    this.accountSid = payload.account_sid;
    this.roomSid = payload.room_sid;
    this.roomName = payload.room_name;
    this.createTime = deserialize.iso8601DateTime(payload.create_time);
    this.endTime = deserialize.iso8601DateTime(payload.end_time);
    this.roomType = payload.room_type;
    this.roomStatus = payload.room_status;
    this.statusCallback = payload.status_callback;
    this.statusCallbackMethod = payload.status_callback_method;
    this.createdMethod = payload.created_method;
    this.endReason = payload.end_reason;
    this.maxParticipants = deserialize.integer(payload.max_participants);
    this.uniqueParticipants = deserialize.integer(payload.unique_participants);
    this.uniqueParticipantIdentities = deserialize.integer(
      payload.unique_participant_identities
    );
    this.concurrentParticipants = deserialize.integer(
      payload.concurrent_participants
    );
    this.maxConcurrentParticipants = deserialize.integer(
      payload.max_concurrent_participants
    );
    this.codecs = payload.codecs;
    this.mediaRegion = payload.media_region;
    this.durationSec = payload.duration_sec;
    this.totalParticipantDurationSec = payload.total_participant_duration_sec;
    this.totalRecordingDurationSec = payload.total_recording_duration_sec;
    this.processingState = payload.processing_state;
    this.recordingEnabled = payload.recording_enabled;
    this.edgeLocation = payload.edge_location;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { roomSid: roomSid || this.roomSid };
  }

  /**
   * Account SID associated with this room.
   */
  accountSid: string;
  /**
   * Unique identifier for the room.
   */
  roomSid: string;
  /**
   * room friendly name.
   */
  roomName: string;
  /**
   * Creation time of the room.
   */
  createTime: Date;
  /**
   * End time for the room.
   */
  endTime: Date;
  roomType: VideoRoomSummaryRoomType;
  roomStatus: VideoRoomSummaryRoomStatus;
  /**
   * Webhook provided for status callbacks.
   */
  statusCallback: string;
  /**
   * HTTP method provided for status callback URL.
   */
  statusCallbackMethod: RoomStatusCallbackMethod;
  createdMethod: VideoRoomSummaryCreatedMethod;
  endReason: VideoRoomSummaryEndReason;
  /**
   * Max number of total participants allowed by the application settings.
   */
  maxParticipants: number;
  /**
   * Number of participants. May include duplicate identities for participants who left and rejoined.
   */
  uniqueParticipants: number;
  /**
   * Unique number of participant identities.
   */
  uniqueParticipantIdentities: number;
  /**
   * Actual number of concurrent participants.
   */
  concurrentParticipants: number;
  /**
   * Maximum number of participants allowed in the room at the same time allowed by the application settings.
   */
  maxConcurrentParticipants: number;
  /**
   * Codecs used by participants in the room.
   */
  codecs: Array<VideoRoomSummaryCodec>;
  mediaRegion: VideoRoomSummaryTwilioRealm;
  /**
   * Total room duration from create time to end time.
   */
  durationSec: number;
  /**
   * Combined amount of participant time in the room.
   */
  totalParticipantDurationSec: number;
  /**
   * Combined amount of recorded seconds for participants in the room.
   */
  totalRecordingDurationSec: number;
  processingState: VideoRoomSummaryProcessingState;
  /**
   * Boolean indicating if recording is enabled for the room.
   */
  recordingEnabled: boolean;
  edgeLocation: VideoRoomSummaryEdgeLocation;
  /**
   * URL for the room resource.
   */
  url: string;
  /**
   * Room subresources.
   */
  links: Record<string, string>;

  private get _proxy(): RoomContext {
    this._context =
      this._context ||
      new RoomContextImpl(this._version, this._solution.roomSid);
    return this._context;
  }

  /**
   * Fetch a RoomInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RoomInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RoomInstance) => any
  ): Promise<RoomInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the participants.
   */
  participants(): ParticipantListInstance {
    return this._proxy.participants;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      roomSid: this.roomSid,
      roomName: this.roomName,
      createTime: this.createTime,
      endTime: this.endTime,
      roomType: this.roomType,
      roomStatus: this.roomStatus,
      statusCallback: this.statusCallback,
      statusCallbackMethod: this.statusCallbackMethod,
      createdMethod: this.createdMethod,
      endReason: this.endReason,
      maxParticipants: this.maxParticipants,
      uniqueParticipants: this.uniqueParticipants,
      uniqueParticipantIdentities: this.uniqueParticipantIdentities,
      concurrentParticipants: this.concurrentParticipants,
      maxConcurrentParticipants: this.maxConcurrentParticipants,
      codecs: this.codecs,
      mediaRegion: this.mediaRegion,
      durationSec: this.durationSec,
      totalParticipantDurationSec: this.totalParticipantDurationSec,
      totalRecordingDurationSec: this.totalRecordingDurationSec,
      processingState: this.processingState,
      recordingEnabled: this.recordingEnabled,
      edgeLocation: this.edgeLocation,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface RoomSolution {}

export interface RoomListInstance {
  _version: V1;
  _solution: RoomSolution;
  _uri: string;

  (roomSid: string): RoomContext;
  get(roomSid: string): RoomContext;

  /**
   * Streams RoomInstance records from the API.
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
   * @param { RoomListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: RoomInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: RoomListInstanceEachOptions,
    callback?: (item: RoomInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of RoomInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: RoomPage) => any
  ): Promise<RoomPage>;
  /**
   * Lists RoomInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RoomListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: RoomInstance[]) => any
  ): Promise<RoomInstance[]>;
  list(
    params: RoomListInstanceOptions,
    callback?: (error: Error | null, items: RoomInstance[]) => any
  ): Promise<RoomInstance[]>;
  /**
   * Retrieve a single page of RoomInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RoomListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: RoomPage) => any
  ): Promise<RoomPage>;
  page(
    params: RoomListInstancePageOptions,
    callback?: (error: Error | null, items: RoomPage) => any
  ): Promise<RoomPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function RoomListInstance(version: V1): RoomListInstance {
  const instance = ((roomSid) => instance.get(roomSid)) as RoomListInstance;

  instance.get = function get(roomSid): RoomContext {
    return new RoomContextImpl(version, roomSid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Video/Rooms`;

  instance.page = function page(
    params?:
      | RoomListInstancePageOptions
      | ((error: Error | null, items: RoomPage) => any),
    callback?: (error: Error | null, items: RoomPage) => any
  ): Promise<RoomPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["roomType"] !== undefined)
      data["RoomType"] = serialize.map(
        params["roomType"],
        (e: VideoRoomSummaryRoomType) => e
      );
    if (params["codec"] !== undefined)
      data["Codec"] = serialize.map(
        params["codec"],
        (e: VideoRoomSummaryCodec) => e
      );
    if (params["roomName"] !== undefined) data["RoomName"] = params["roomName"];
    if (params["createdAfter"] !== undefined)
      data["CreatedAfter"] = serialize.iso8601DateTime(params["createdAfter"]);
    if (params["createdBefore"] !== undefined)
      data["CreatedBefore"] = serialize.iso8601DateTime(
        params["createdBefore"]
      );
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new RoomPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: RoomPage) => any
  ): Promise<RoomPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) => new RoomPage(instance._version, payload, instance._solution)
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

export class RoomPage extends Page<
  V1,
  RoomPayload,
  RoomResource,
  RoomInstance
> {
  /**
   * Initialize the RoomPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: RoomSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of RoomInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RoomResource): RoomInstance {
    return new RoomInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
