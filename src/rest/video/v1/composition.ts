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
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * The container format of the composition\'s media files as specified in the POST request that created the Composition resource. See [POST Parameters](https://www.twilio.com/docs/video/api/compositions-resource#http-post-parameters) for more information.
 */
export type CompositionFormat = "mp4" | "webm";

/**
 * The status of the composition. Can be: `enqueued`, `processing`, `completed`, `deleted` or `failed`. `enqueued` is the initial state and indicates that the composition request has been received and is scheduled for processing; `processing` indicates the composition is being processed; `completed` indicates the composition has been completed and is available for download; `deleted` means the composition media has been deleted from the system, but its metadata is still available for 30 days; `failed` indicates the composition failed to execute the media processing task.
 */
export type CompositionStatus =
  | "enqueued"
  | "processing"
  | "completed"
  | "deleted"
  | "failed";

/**
 * Options to pass to create a CompositionInstance
 */
export interface CompositionListInstanceCreateOptions {
  /** The SID of the Group Room with the media tracks to be used as composition sources. */
  roomSid: string;
  /** An object that describes the video layout of the composition in terms of regions. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info. Please, be aware that either video_layout or audio_sources have to be provided to get a valid creation request */
  videoLayout?: any;
  /** An array of track names from the same group room to merge into the new composition. Can include zero or more track names. The new composition includes all audio sources specified in `audio_sources` except for those specified in `audio_sources_excluded`. The track names in this parameter can include an asterisk as a wild card character, which will match zero or more characters in a track name. For example, `student*` includes `student` as well as `studentTeam`. Please, be aware that either video_layout or audio_sources have to be provided to get a valid creation request */
  audioSources?: Array<string>;
  /** An array of track names to exclude. The new composition includes all audio sources specified in `audio_sources` except for those specified in `audio_sources_excluded`. The track names in this parameter can include an asterisk as a wild card character, which will match zero or more characters in a track name. For example, `student*` excludes `student` as well as `studentTeam`. This parameter can also be empty. */
  audioSourcesExcluded?: Array<string>;
  /** A string that describes the columns (width) and rows (height) of the generated composed video in pixels. Defaults to `640x480`.  The string\\\'s format is `{width}x{height}` where:   * 16 <= `{width}` <= 1280 * 16 <= `{height}` <= 1280 * `{width}` * `{height}` <= 921,600  Typical values are:   * HD = `1280x720` * PAL = `1024x576` * VGA = `640x480` * CIF = `320x240`  Note that the `resolution` imposes an aspect ratio to the resulting composition. When the original video tracks are constrained by the aspect ratio, they are scaled to fit. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info. */
  resolution?: string;
  /**  */
  format?: CompositionFormat;
  /** The URL we should call using the `status_callback_method` to send status information to your application on every composition event. If not provided, status callback events will not be dispatched. */
  statusCallback?: string;
  /** The HTTP method we should use to call `status_callback`. Can be: `POST` or `GET` and the default is `POST`. */
  statusCallbackMethod?: string;
  /** Whether to clip the intervals where there is no active media in the composition. The default is `true`. Compositions with `trim` enabled are shorter when the Room is created and no Participant joins for a while as well as if all the Participants leave the room and join later, because those gaps will be removed. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info. */
  trim?: boolean;
}
/**
 * Options to pass to each
 */
export interface CompositionListInstanceEachOptions {
  /** Read only Composition resources with this status. Can be: `enqueued`, `processing`, `completed`, `deleted`, or `failed`. */
  status?: CompositionStatus;
  /** Read only Composition resources created on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone. */
  dateCreatedAfter?: Date;
  /** Read only Composition resources created before this ISO 8601 date-time with time zone. */
  dateCreatedBefore?: Date;
  /** Read only Composition resources with this Room SID. */
  roomSid?: string;
  /** How many resources to return in each list page. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: CompositionInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface CompositionListInstanceOptions {
  /** Read only Composition resources with this status. Can be: `enqueued`, `processing`, `completed`, `deleted`, or `failed`. */
  status?: CompositionStatus;
  /** Read only Composition resources created on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone. */
  dateCreatedAfter?: Date;
  /** Read only Composition resources created before this ISO 8601 date-time with time zone. */
  dateCreatedBefore?: Date;
  /** Read only Composition resources with this Room SID. */
  roomSid?: string;
  /** How many resources to return in each list page. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface CompositionListInstancePageOptions {
  /** Read only Composition resources with this status. Can be: `enqueued`, `processing`, `completed`, `deleted`, or `failed`. */
  status?: CompositionStatus;
  /** Read only Composition resources created on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone. */
  dateCreatedAfter?: Date;
  /** Read only Composition resources created before this ISO 8601 date-time with time zone. */
  dateCreatedBefore?: Date;
  /** Read only Composition resources with this Room SID. */
  roomSid?: string;
  /** How many resources to return in each list page. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface CompositionContext {
  /**
   * Remove a CompositionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a CompositionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CompositionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CompositionInstance) => any
  ): Promise<CompositionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CompositionContextSolution {
  sid: string;
}

export class CompositionContextImpl implements CompositionContext {
  protected _solution: CompositionContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Compositions/${sid}`;
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
    callback?: (error: Error | null, item?: CompositionInstance) => any
  ): Promise<CompositionInstance> {
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
        new CompositionInstance(
          operationVersion,
          payload,
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

interface CompositionPayload extends TwilioResponsePayload {
  compositions: CompositionResource[];
}

interface CompositionResource {
  account_sid: string;
  status: CompositionStatus;
  date_created: Date;
  date_completed: Date;
  date_deleted: Date;
  sid: string;
  room_sid: string;
  audio_sources: Array<string>;
  audio_sources_excluded: Array<string>;
  video_layout: Record<string, object>;
  resolution: string;
  trim: boolean;
  format: CompositionFormat;
  bitrate: number;
  size: number;
  duration: number;
  media_external_location: string;
  status_callback: string;
  status_callback_method: string;
  url: string;
  links: Record<string, string>;
}

export class CompositionInstance {
  protected _solution: CompositionContextSolution;
  protected _context?: CompositionContext;

  constructor(
    protected _version: V1,
    payload: CompositionResource,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.status = payload.status;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateCompleted = deserialize.iso8601DateTime(payload.date_completed);
    this.dateDeleted = deserialize.iso8601DateTime(payload.date_deleted);
    this.sid = payload.sid;
    this.roomSid = payload.room_sid;
    this.audioSources = payload.audio_sources;
    this.audioSourcesExcluded = payload.audio_sources_excluded;
    this.videoLayout = payload.video_layout;
    this.resolution = payload.resolution;
    this.trim = payload.trim;
    this.format = payload.format;
    this.bitrate = deserialize.integer(payload.bitrate);
    this.size = payload.size;
    this.duration = deserialize.integer(payload.duration);
    this.mediaExternalLocation = payload.media_external_location;
    this.statusCallback = payload.status_callback;
    this.statusCallbackMethod = payload.status_callback_method;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Composition resource.
   */
  accountSid: string;
  status: CompositionStatus;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the composition\'s media processing task finished, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCompleted: Date;
  /**
   * The date and time in GMT when the composition generated media was deleted, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateDeleted: Date;
  /**
   * The unique string that we created to identify the Composition resource.
   */
  sid: string;
  /**
   * The SID of the Group Room that generated the audio and video tracks used in the composition. All media sources included in a composition must belong to the same Group Room.
   */
  roomSid: string;
  /**
   * The array of track names to include in the composition. The composition includes all audio sources specified in `audio_sources` except those specified in `audio_sources_excluded`. The track names in this property can include an asterisk as a wild card character, which matches zero or more characters in a track name. For example, `student*` includes tracks named `student` as well as `studentTeam`.
   */
  audioSources: Array<string>;
  /**
   * The array of track names to exclude from the composition. The composition includes all audio sources specified in `audio_sources` except for those specified in `audio_sources_excluded`. The track names in this property can include an asterisk as a wild card character, which matches zero or more characters in a track name. For example, `student*` excludes `student` as well as `studentTeam`. This parameter can also be empty.
   */
  audioSourcesExcluded: Array<string>;
  /**
   * An object that describes the video layout of the composition in terms of regions. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info.
   */
  videoLayout: Record<string, object>;
  /**
   * The dimensions of the video image in pixels expressed as columns (width) and rows (height). The string\'s format is `{width}x{height}`, such as `640x480`.
   */
  resolution: string;
  /**
   * Whether to remove intervals with no media, as specified in the POST request that created the composition. Compositions with `trim` enabled are shorter when the Room is created and no Participant joins for a while as well as if all the Participants leave the room and join later, because those gaps will be removed. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info.
   */
  trim: boolean;
  format: CompositionFormat;
  /**
   * The average bit rate of the composition\'s media.
   */
  bitrate: number;
  /**
   * The size of the composed media file in bytes.
   */
  size: number;
  /**
   * The duration of the composition\'s media file in seconds.
   */
  duration: number;
  /**
   * The URL of the media file associated with the composition when stored externally. See [External S3 Compositions](/docs/video/api/external-s3-compositions) for more details.
   */
  mediaExternalLocation: string;
  /**
   * The URL called using the `status_callback_method` to send status information on every composition event.
   */
  statusCallback: string;
  /**
   * The HTTP method used to call `status_callback`. Can be: `POST` or `GET`, defaults to `POST`.
   */
  statusCallbackMethod: string;
  /**
   * The absolute URL of the resource.
   */
  url: string;
  /**
   * The URL of the media file associated with the composition.
   */
  links: Record<string, string>;

  private get _proxy(): CompositionContext {
    this._context =
      this._context ||
      new CompositionContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a CompositionInstance
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
   * Fetch a CompositionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CompositionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CompositionInstance) => any
  ): Promise<CompositionInstance> {
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
      dateCompleted: this.dateCompleted,
      dateDeleted: this.dateDeleted,
      sid: this.sid,
      roomSid: this.roomSid,
      audioSources: this.audioSources,
      audioSourcesExcluded: this.audioSourcesExcluded,
      videoLayout: this.videoLayout,
      resolution: this.resolution,
      trim: this.trim,
      format: this.format,
      bitrate: this.bitrate,
      size: this.size,
      duration: this.duration,
      mediaExternalLocation: this.mediaExternalLocation,
      statusCallback: this.statusCallback,
      statusCallbackMethod: this.statusCallbackMethod,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface CompositionSolution {}

export interface CompositionListInstance {
  _version: V1;
  _solution: CompositionSolution;
  _uri: string;

  (sid: string): CompositionContext;
  get(sid: string): CompositionContext;

  /**
   * Create a CompositionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CompositionInstance
   */
  create(
    params: CompositionListInstanceCreateOptions,
    callback?: (error: Error | null, item?: CompositionInstance) => any
  ): Promise<CompositionInstance>;

  /**
   * Streams CompositionInstance records from the API.
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
   * @param { CompositionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: CompositionInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: CompositionListInstanceEachOptions,
    callback?: (item: CompositionInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of CompositionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: CompositionPage) => any
  ): Promise<CompositionPage>;
  /**
   * Lists CompositionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CompositionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: CompositionInstance[]) => any
  ): Promise<CompositionInstance[]>;
  list(
    params: CompositionListInstanceOptions,
    callback?: (error: Error | null, items: CompositionInstance[]) => any
  ): Promise<CompositionInstance[]>;
  /**
   * Retrieve a single page of CompositionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CompositionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: CompositionPage) => any
  ): Promise<CompositionPage>;
  page(
    params: CompositionListInstancePageOptions,
    callback?: (error: Error | null, items: CompositionPage) => any
  ): Promise<CompositionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function CompositionListInstance(version: V1): CompositionListInstance {
  const instance = ((sid) => instance.get(sid)) as CompositionListInstance;

  instance.get = function get(sid): CompositionContext {
    return new CompositionContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Compositions`;

  instance.create = function create(
    params: CompositionListInstanceCreateOptions,
    callback?: (error: Error | null, items: CompositionInstance) => any
  ): Promise<CompositionInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["roomSid"] === null || params["roomSid"] === undefined) {
      throw new Error("Required parameter \"params['roomSid']\" missing.");
    }

    let data: any = {};

    data["RoomSid"] = params["roomSid"];
    if (params["videoLayout"] !== undefined)
      data["VideoLayout"] = serialize.object(params["videoLayout"]);
    if (params["audioSources"] !== undefined)
      data["AudioSources"] = serialize.map(
        params["audioSources"],
        (e: string) => e
      );
    if (params["audioSourcesExcluded"] !== undefined)
      data["AudioSourcesExcluded"] = serialize.map(
        params["audioSourcesExcluded"],
        (e: string) => e
      );
    if (params["resolution"] !== undefined)
      data["Resolution"] = params["resolution"];
    if (params["format"] !== undefined) data["Format"] = params["format"];
    if (params["statusCallback"] !== undefined)
      data["StatusCallback"] = params["statusCallback"];
    if (params["statusCallbackMethod"] !== undefined)
      data["StatusCallbackMethod"] = params["statusCallbackMethod"];
    if (params["trim"] !== undefined)
      data["Trim"] = serialize.bool(params["trim"]);

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
      (payload) => new CompositionInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | CompositionListInstancePageOptions
      | ((error: Error | null, items: CompositionPage) => any),
    callback?: (error: Error | null, items: CompositionPage) => any
  ): Promise<CompositionPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["dateCreatedAfter"] !== undefined)
      data["DateCreatedAfter"] = serialize.iso8601DateTime(
        params["dateCreatedAfter"]
      );
    if (params["dateCreatedBefore"] !== undefined)
      data["DateCreatedBefore"] = serialize.iso8601DateTime(
        params["dateCreatedBefore"]
      );
    if (params["roomSid"] !== undefined) data["RoomSid"] = params["roomSid"];
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
        new CompositionPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: CompositionPage) => any
  ): Promise<CompositionPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new CompositionPage(instance._version, payload, instance._solution)
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

export class CompositionPage extends Page<
  V1,
  CompositionPayload,
  CompositionResource,
  CompositionInstance
> {
  /**
   * Initialize the CompositionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: CompositionSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of CompositionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CompositionResource): CompositionInstance {
    return new CompositionInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
