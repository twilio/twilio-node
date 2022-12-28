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

type CompositionHookFormat = "mp4" | "webm";

/**
 * Options to pass to update a CompositionHookInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the resource. It can be up to  100 characters long and it must be unique within the account.
 * @property { boolean } [enabled] Whether the composition hook is active. When `true`, the composition hook will be triggered for every completed Group Room in the account. When `false`, the composition hook never triggers.
 * @property { any } [videoLayout] A JSON object that describes the video layout of the composition hook in terms of regions. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info.
 * @property { Array<string> } [audioSources] An array of track names from the same group room to merge into the compositions created by the composition hook. Can include zero or more track names. A composition triggered by the composition hook includes all audio sources specified in `audio_sources` except those specified in `audio_sources_excluded`. The track names in this parameter can include an asterisk as a wild card character, which matches zero or more characters in a track name. For example, `student*` includes tracks named `student` as well as `studentTeam`.
 * @property { Array<string> } [audioSourcesExcluded] An array of track names to exclude. A composition triggered by the composition hook includes all audio sources specified in `audio_sources` except for those specified in `audio_sources_excluded`. The track names in this parameter can include an asterisk as a wild card character, which matches zero or more characters in a track name. For example, `student*` excludes `student` as well as `studentTeam`. This parameter can also be empty.
 * @property { boolean } [trim] Whether to clip the intervals where there is no active media in the compositions triggered by the composition hook. The default is `true`. Compositions with `trim` enabled are shorter when the Room is created and no Participant joins for a while as well as if all the Participants leave the room and join later, because those gaps will be removed. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info.
 * @property { CompositionHookFormat } [format]
 * @property { string } [resolution] A string that describes the columns (width) and rows (height) of the generated composed video in pixels. Defaults to `640x480`.  The string\\\'s format is `{width}x{height}` where:   * 16 <= `{width}` <= 1280 * 16 <= `{height}` <= 1280 * `{width}` * `{height}` <= 921,600  Typical values are:   * HD = `1280x720` * PAL = `1024x576` * VGA = `640x480` * CIF = `320x240`  Note that the `resolution` imposes an aspect ratio to the resulting composition. When the original video tracks are constrained by the aspect ratio, they are scaled to fit. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info.
 * @property { string } [statusCallback] The URL we should call using the `status_callback_method` to send status information to your application on every composition event. If not provided, status callback events will not be dispatched.
 * @property { string } [statusCallbackMethod] The HTTP method we should use to call `status_callback`. Can be: `POST` or `GET` and the default is `POST`.
 */
export interface CompositionHookContextUpdateOptions {
  friendlyName: string;
  enabled?: boolean;
  videoLayout?: any;
  audioSources?: Array<string>;
  audioSourcesExcluded?: Array<string>;
  trim?: boolean;
  format?: CompositionHookFormat;
  resolution?: string;
  statusCallback?: string;
  statusCallbackMethod?: string;
}

/**
 * Options to pass to create a CompositionHookInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the resource. It can be up to  100 characters long and it must be unique within the account.
 * @property { boolean } [enabled] Whether the composition hook is active. When `true`, the composition hook will be triggered for every completed Group Room in the account. When `false`, the composition hook will never be triggered.
 * @property { any } [videoLayout] An object that describes the video layout of the composition hook in terms of regions. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info.
 * @property { Array<string> } [audioSources] An array of track names from the same group room to merge into the compositions created by the composition hook. Can include zero or more track names. A composition triggered by the composition hook includes all audio sources specified in `audio_sources` except those specified in `audio_sources_excluded`. The track names in this parameter can include an asterisk as a wild card character, which matches zero or more characters in a track name. For example, `student*` includes tracks named `student` as well as `studentTeam`.
 * @property { Array<string> } [audioSourcesExcluded] An array of track names to exclude. A composition triggered by the composition hook includes all audio sources specified in `audio_sources` except for those specified in `audio_sources_excluded`. The track names in this parameter can include an asterisk as a wild card character, which matches zero or more characters in a track name. For example, `student*` excludes `student` as well as `studentTeam`. This parameter can also be empty.
 * @property { string } [resolution] A string that describes the columns (width) and rows (height) of the generated composed video in pixels. Defaults to `640x480`.  The string\\\'s format is `{width}x{height}` where:   * 16 <= `{width}` <= 1280 * 16 <= `{height}` <= 1280 * `{width}` * `{height}` <= 921,600  Typical values are:   * HD = `1280x720` * PAL = `1024x576` * VGA = `640x480` * CIF = `320x240`  Note that the `resolution` imposes an aspect ratio to the resulting composition. When the original video tracks are constrained by the aspect ratio, they are scaled to fit. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info.
 * @property { CompositionHookFormat } [format]
 * @property { string } [statusCallback] The URL we should call using the `status_callback_method` to send status information to your application on every composition event. If not provided, status callback events will not be dispatched.
 * @property { string } [statusCallbackMethod] The HTTP method we should use to call `status_callback`. Can be: `POST` or `GET` and the default is `POST`.
 * @property { boolean } [trim] Whether to clip the intervals where there is no active media in the Compositions triggered by the composition hook. The default is `true`. Compositions with `trim` enabled are shorter when the Room is created and no Participant joins for a while as well as if all the Participants leave the room and join later, because those gaps will be removed. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info.
 */
export interface CompositionHookListInstanceCreateOptions {
  friendlyName: string;
  enabled?: boolean;
  videoLayout?: any;
  audioSources?: Array<string>;
  audioSourcesExcluded?: Array<string>;
  resolution?: string;
  format?: CompositionHookFormat;
  statusCallback?: string;
  statusCallbackMethod?: string;
  trim?: boolean;
}
/**
 * Options to pass to each
 *
 * @property { boolean } [enabled] Read only CompositionHook resources with an `enabled` value that matches this parameter.
 * @property { Date } [dateCreatedAfter] Read only CompositionHook resources created on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
 * @property { Date } [dateCreatedBefore] Read only CompositionHook resources created before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
 * @property { string } [friendlyName] Read only CompositionHook resources with friendly names that match this string. The match is not case sensitive and can include asterisk `*` characters as wildcard match.
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
export interface CompositionHookListInstanceEachOptions {
  enabled?: boolean;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  friendlyName?: string;
  pageSize?: number;
  callback?: (
    item: CompositionHookInstance,
    done: (err?: Error) => void
  ) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { boolean } [enabled] Read only CompositionHook resources with an `enabled` value that matches this parameter.
 * @property { Date } [dateCreatedAfter] Read only CompositionHook resources created on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
 * @property { Date } [dateCreatedBefore] Read only CompositionHook resources created before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
 * @property { string } [friendlyName] Read only CompositionHook resources with friendly names that match this string. The match is not case sensitive and can include asterisk `*` characters as wildcard match.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface CompositionHookListInstanceOptions {
  enabled?: boolean;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  friendlyName?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { boolean } [enabled] Read only CompositionHook resources with an `enabled` value that matches this parameter.
 * @property { Date } [dateCreatedAfter] Read only CompositionHook resources created on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
 * @property { Date } [dateCreatedBefore] Read only CompositionHook resources created before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time zone.
 * @property { string } [friendlyName] Read only CompositionHook resources with friendly names that match this string. The match is not case sensitive and can include asterisk `*` characters as wildcard match.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface CompositionHookListInstancePageOptions {
  enabled?: boolean;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  friendlyName?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface CompositionHookContext {
  /**
   * Remove a CompositionHookInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a CompositionHookInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CompositionHookInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CompositionHookInstance) => any
  ): Promise<CompositionHookInstance>;

  /**
   * Update a CompositionHookInstance
   *
   * @param { CompositionHookContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CompositionHookInstance
   */
  update(
    params: CompositionHookContextUpdateOptions,
    callback?: (error: Error | null, item?: CompositionHookInstance) => any
  ): Promise<CompositionHookInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CompositionHookContextSolution {
  sid?: string;
}

export class CompositionHookContextImpl implements CompositionHookContext {
  protected _solution: CompositionHookContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/CompositionHooks/${sid}`;
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

  fetch(callback?: any): Promise<CompositionHookInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CompositionHookInstance(
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

  update(params: any, callback?: any): Promise<CompositionHookInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];
    if (params["enabled"] !== undefined)
      data["Enabled"] = serialize.bool(params["enabled"]);
    if (params["videoLayout"] !== undefined)
      data["VideoLayout"] = serialize.object(params["videoLayout"]);
    if (params["audioSources"] !== undefined)
      data["AudioSources"] = serialize.map(params["audioSources"], (e) => e);
    if (params["audioSourcesExcluded"] !== undefined)
      data["AudioSourcesExcluded"] = serialize.map(
        params["audioSourcesExcluded"],
        (e) => e
      );
    if (params["trim"] !== undefined)
      data["Trim"] = serialize.bool(params["trim"]);
    if (params["format"] !== undefined) data["Format"] = params["format"];
    if (params["resolution"] !== undefined)
      data["Resolution"] = params["resolution"];
    if (params["statusCallback"] !== undefined)
      data["StatusCallback"] = params["statusCallback"];
    if (params["statusCallbackMethod"] !== undefined)
      data["StatusCallbackMethod"] = params["statusCallbackMethod"];

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
        new CompositionHookInstance(
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

export type CompositionHookStatusCallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";

interface CompositionHookPayload extends TwilioResponsePayload {
  composition_hooks: CompositionHookResource[];
}

interface CompositionHookResource {
  account_sid?: string | null;
  friendly_name?: string | null;
  enabled?: boolean | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  sid?: string | null;
  audio_sources?: Array<string> | null;
  audio_sources_excluded?: Array<string> | null;
  video_layout?: any | null;
  resolution?: string | null;
  trim?: boolean | null;
  format?: CompositionHookFormat;
  status_callback?: string | null;
  status_callback_method?: CompositionHookStatusCallbackMethod;
  url?: string | null;
}

export class CompositionHookInstance {
  protected _solution: CompositionHookContextSolution;
  protected _context?: CompositionHookContext;

  constructor(
    protected _version: V1,
    payload: CompositionHookResource,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.enabled = payload.enabled;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.sid = payload.sid;
    this.audioSources = payload.audio_sources;
    this.audioSourcesExcluded = payload.audio_sources_excluded;
    this.videoLayout = payload.video_layout;
    this.resolution = payload.resolution;
    this.trim = payload.trim;
    this.format = payload.format;
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
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * Whether the CompositionHook is active
   */
  enabled?: boolean | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The array of track names to include in the compositions created by the composition hook
   */
  audioSources?: Array<string> | null;
  /**
   * The array of track names to exclude from the compositions created by the composition hook
   */
  audioSourcesExcluded?: Array<string> | null;
  /**
   * A JSON object that describes the video layout of the Composition
   */
  videoLayout?: any | null;
  /**
   * The dimensions of the video image in pixels expressed as columns (width) and rows (height)
   */
  resolution?: string | null;
  /**
   * Whether intervals with no media are clipped
   */
  trim?: boolean | null;
  format?: CompositionHookFormat;
  /**
   * The URL to send status information to your application
   */
  statusCallback?: string | null;
  /**
   * The HTTP method we should use to call status_callback
   */
  statusCallbackMethod?: CompositionHookStatusCallbackMethod;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;

  private get _proxy(): CompositionHookContext {
    this._context =
      this._context ||
      new CompositionHookContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a CompositionHookInstance
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
   * Fetch a CompositionHookInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CompositionHookInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CompositionHookInstance) => any
  ): Promise<CompositionHookInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a CompositionHookInstance
   *
   * @param { CompositionHookContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CompositionHookInstance
   */
  update(
    params: CompositionHookContextUpdateOptions,
    callback?: (error: Error | null, item?: CompositionHookInstance) => any
  ): Promise<CompositionHookInstance> {
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
      friendlyName: this.friendlyName,
      enabled: this.enabled,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      sid: this.sid,
      audioSources: this.audioSources,
      audioSourcesExcluded: this.audioSourcesExcluded,
      videoLayout: this.videoLayout,
      resolution: this.resolution,
      trim: this.trim,
      format: this.format,
      statusCallback: this.statusCallback,
      statusCallbackMethod: this.statusCallbackMethod,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface CompositionHookListInstance {
  (sid: string): CompositionHookContext;
  get(sid: string): CompositionHookContext;

  /**
   * Create a CompositionHookInstance
   *
   * @param { CompositionHookListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CompositionHookInstance
   */
  create(
    params: CompositionHookListInstanceCreateOptions,
    callback?: (error: Error | null, item?: CompositionHookInstance) => any
  ): Promise<CompositionHookInstance>;

  /**
   * Streams CompositionHookInstance records from the API.
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
   * @param { CompositionHookListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | CompositionHookListInstanceEachOptions
      | ((item: CompositionHookInstance, done: (err?: Error) => void) => void),
    callback?: (
      item: CompositionHookInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of CompositionHookInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: CompositionHookPage) => any
  ): Promise<CompositionHookPage>;
  /**
   * Lists CompositionHookInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CompositionHookListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | CompositionHookListInstanceOptions
      | ((error: Error | null, items: CompositionHookInstance[]) => any),
    callback?: (error: Error | null, items: CompositionHookInstance[]) => any
  ): Promise<CompositionHookInstance[]>;
  /**
   * Retrieve a single page of CompositionHookInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CompositionHookListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | CompositionHookListInstancePageOptions
      | ((error: Error | null, items: CompositionHookPage) => any),
    callback?: (error: Error | null, items: CompositionHookPage) => any
  ): Promise<CompositionHookPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CompositionHookSolution {}

interface CompositionHookListInstanceImpl extends CompositionHookListInstance {}
class CompositionHookListInstanceImpl implements CompositionHookListInstance {
  _version?: V1;
  _solution?: CompositionHookSolution;
  _uri?: string;
}

export function CompositionHookListInstance(
  version: V1
): CompositionHookListInstance {
  const instance = ((sid) =>
    instance.get(sid)) as CompositionHookListInstanceImpl;

  instance.get = function get(sid): CompositionHookContext {
    return new CompositionHookContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/CompositionHooks`;

  instance.create = function create(
    params: CompositionHookListInstanceCreateOptions,
    callback?: (error: Error | null, item?: CompositionHookInstance) => any
  ): Promise<CompositionHookInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];
    if (params["enabled"] !== undefined)
      data["Enabled"] = serialize.bool(params["enabled"]);
    if (params["videoLayout"] !== undefined)
      data["VideoLayout"] = serialize.object(params["videoLayout"]);
    if (params["audioSources"] !== undefined)
      data["AudioSources"] = serialize.map(params["audioSources"], (e) => e);
    if (params["audioSourcesExcluded"] !== undefined)
      data["AudioSourcesExcluded"] = serialize.map(
        params["audioSourcesExcluded"],
        (e) => e
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

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new CompositionHookInstance(operationVersion, payload)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | CompositionHookListInstancePageOptions
      | ((error: Error | null, item?: CompositionHookPage) => any),
    callback?: (error: Error | null, item?: CompositionHookPage) => any
  ): Promise<CompositionHookPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["enabled"] !== undefined)
      data["Enabled"] = serialize.bool(params["enabled"]);
    if (params["dateCreatedAfter"] !== undefined)
      data["DateCreatedAfter"] = serialize.iso8601DateTime(
        params["dateCreatedAfter"]
      );
    if (params["dateCreatedBefore"] !== undefined)
      data["DateCreatedBefore"] = serialize.iso8601DateTime(
        params["dateCreatedBefore"]
      );
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
        new CompositionHookPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: CompositionHookPage) => any
  ): Promise<CompositionHookPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new CompositionHookPage(this._version, payload, this._solution)
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

export class CompositionHookPage extends Page<
  V1,
  CompositionHookPayload,
  CompositionHookResource,
  CompositionHookInstance
> {
  /**
   * Initialize the CompositionHookPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: CompositionHookSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of CompositionHookInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CompositionHookResource): CompositionHookInstance {
    return new CompositionHookInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
