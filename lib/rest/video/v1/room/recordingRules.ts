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
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

export class VideoV1RoomRoomRecordingRuleRules {
  "type"?: string;
  "all"?: boolean;
  "publisher"?: string;
  "track"?: string;
  "kind"?: string;
}

/**
 * Options to pass to update a RecordingRulesInstance
 */
export interface RecordingRulesListInstanceUpdateOptions {
  /** A JSON-encoded array of recording rules. */
  rules?: any;
}

export interface RecordingRulesSolution {
  roomSid: string;
}

export interface RecordingRulesListInstance {
  _version: V1;
  _solution: RecordingRulesSolution;
  _uri: string;

  /**
   * Fetch a RecordingRulesInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RecordingRulesInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RecordingRulesInstance) => any
  ): Promise<RecordingRulesInstance>;

  /**
   * Update a RecordingRulesInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RecordingRulesInstance
   */
  update(
    callback?: (error: Error | null, item?: RecordingRulesInstance) => any
  ): Promise<RecordingRulesInstance>;
  /**
   * Update a RecordingRulesInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RecordingRulesInstance
   */
  update(
    params: RecordingRulesListInstanceUpdateOptions,
    callback?: (error: Error | null, item?: RecordingRulesInstance) => any
  ): Promise<RecordingRulesInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function RecordingRulesListInstance(
  version: V1,
  roomSid: string
): RecordingRulesListInstance {
  if (!isValidPathParam(roomSid)) {
    throw new Error("Parameter 'roomSid' is not valid.");
  }

  const instance = {} as RecordingRulesListInstance;

  instance._version = version;
  instance._solution = { roomSid };
  instance._uri = `/Rooms/${roomSid}/RecordingRules`;

  instance.fetch = function fetch(
    callback?: (error: Error | null, item?: RecordingRulesInstance) => any
  ): Promise<RecordingRulesInstance> {
    let operationVersion = version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new RecordingRulesInstance(
          operationVersion,
          payload,
          instance._solution.roomSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.update = function update(
    params?:
      | RecordingRulesListInstanceUpdateOptions
      | ((error: Error | null, item?: RecordingRulesInstance) => any),
    callback?: (error: Error | null, item?: RecordingRulesInstance) => any
  ): Promise<RecordingRulesInstance> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: RecordingRulesInstance
      ) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["rules"] !== undefined)
      data["Rules"] = serialize.object(params["rules"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new RecordingRulesInstance(
          operationVersion,
          payload,
          instance._solution.roomSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
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

interface RecordingRulesPayload extends RecordingRulesResource {}

interface RecordingRulesResource {
  room_sid: string;
  rules: Array<VideoV1RoomRoomRecordingRuleRules>;
  date_created: Date;
  date_updated: Date;
}

export class RecordingRulesInstance {
  constructor(
    protected _version: V1,
    payload: RecordingRulesResource,
    roomSid: string
  ) {
    this.roomSid = payload.room_sid;
    this.rules = payload.rules;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
  }

  /**
   * The SID of the Room resource for the Recording Rules
   */
  roomSid: string;
  /**
   * A collection of recording Rules that describe how to include or exclude matching tracks for recording
   */
  rules: Array<VideoV1RoomRoomRecordingRuleRules>;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated: Date;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated: Date;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      roomSid: this.roomSid,
      rules: this.rules,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
