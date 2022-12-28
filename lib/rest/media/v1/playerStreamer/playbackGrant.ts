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
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to create a PlaybackGrantInstance
 *
 * @property { number } [ttl] The time to live of the PlaybackGrant. Default value is 15 seconds. Maximum value is 60 seconds.
 * @property { string } [accessControlAllowOrigin] The full origin URL where the livestream can be streamed. If this is not provided, it can be streamed from any domain.
 */
export interface PlaybackGrantContextCreateOptions {
  ttl?: number;
  accessControlAllowOrigin?: string;
}

export interface PlaybackGrantContext {
  /**
   * Create a PlaybackGrantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PlaybackGrantInstance
   */
  create(
    callback?: (error: Error | null, item?: PlaybackGrantInstance) => any
  ): Promise<PlaybackGrantInstance>;
  /**
   * Create a PlaybackGrantInstance
   *
   * @param { PlaybackGrantContextCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PlaybackGrantInstance
   */
  create(
    params?:
      | PlaybackGrantContextCreateOptions
      | ((error: Error | null, item?: PlaybackGrantInstance) => any),
    callback?: (error: Error | null, item?: PlaybackGrantInstance) => any
  ): Promise<PlaybackGrantInstance>;

  /**
   * Fetch a PlaybackGrantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PlaybackGrantInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PlaybackGrantInstance) => any
  ): Promise<PlaybackGrantInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PlaybackGrantContextSolution {
  sid?: string;
}

export class PlaybackGrantContextImpl implements PlaybackGrantContext {
  protected _solution: PlaybackGrantContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/PlayerStreamers/${sid}/PlaybackGrant`;
  }

  create(params?: any, callback?: any): Promise<PlaybackGrantInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["ttl"] !== undefined) data["Ttl"] = params["ttl"];
    if (params["accessControlAllowOrigin"] !== undefined)
      data["AccessControlAllowOrigin"] = params["accessControlAllowOrigin"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = this._version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PlaybackGrantInstance(operationVersion, payload, this._solution.sid)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<PlaybackGrantInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PlaybackGrantInstance(operationVersion, payload, this._solution.sid)
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

interface PlaybackGrantPayload extends PlaybackGrantResource {}

interface PlaybackGrantResource {
  sid?: string | null;
  url?: string | null;
  account_sid?: string | null;
  date_created?: Date | null;
  grant?: any | null;
}

export class PlaybackGrantInstance {
  protected _solution: PlaybackGrantContextSolution;
  protected _context?: PlaybackGrantContext;

  constructor(
    protected _version: V1,
    payload: PlaybackGrantResource,
    sid: string
  ) {
    this.sid = payload.sid;
    this.url = payload.url;
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.grant = payload.grant;

    this._solution = { sid };
  }

  /**
   * The unique string that identifies the PlayerStreamer associated with this PlaybackGrant.
   */
  sid?: string | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The grant that authorizes the player sdk to connect to the livestream
   */
  grant?: any | null;

  private get _proxy(): PlaybackGrantContext {
    this._context =
      this._context ||
      new PlaybackGrantContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Create a PlaybackGrantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PlaybackGrantInstance
   */
  create(
    callback?: (error: Error | null, item?: PlaybackGrantInstance) => any
  ): Promise<PlaybackGrantInstance>;
  /**
   * Create a PlaybackGrantInstance
   *
   * @param { PlaybackGrantContextCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PlaybackGrantInstance
   */
  create(
    params?:
      | PlaybackGrantContextCreateOptions
      | ((error: Error | null, item?: PlaybackGrantInstance) => any),
    callback?: (error: Error | null, item?: PlaybackGrantInstance) => any
  ): Promise<PlaybackGrantInstance> {
    return this._proxy.create(params, callback);
  }

  /**
   * Fetch a PlaybackGrantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PlaybackGrantInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PlaybackGrantInstance) => any
  ): Promise<PlaybackGrantInstance> {
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
      url: this.url,
      accountSid: this.accountSid,
      dateCreated: this.dateCreated,
      grant: this.grant,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface PlaybackGrantListInstance {
  (): PlaybackGrantContext;
  get(): PlaybackGrantContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PlaybackGrantSolution {
  sid?: string;
}

interface PlaybackGrantListInstanceImpl extends PlaybackGrantListInstance {}
class PlaybackGrantListInstanceImpl implements PlaybackGrantListInstance {
  _version?: V1;
  _solution?: PlaybackGrantSolution;
  _uri?: string;
}

export function PlaybackGrantListInstance(
  version: V1,
  sid: string
): PlaybackGrantListInstance {
  if (!isValidPathParam(sid)) {
    throw new Error("Parameter 'sid' is not valid.");
  }

  const instance = (() => instance.get()) as PlaybackGrantListInstanceImpl;

  instance.get = function get(): PlaybackGrantContext {
    return new PlaybackGrantContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = { sid };
  instance._uri = ``;

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
