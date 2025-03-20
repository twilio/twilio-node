/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Serverless
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * The status of the Build. Can be: `building`, `completed`, or `failed`.
 */
export type BuildStatusStatus = "building" | "completed" | "failed";

export interface BuildStatusContext {
  /**
   * Fetch a BuildStatusInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BuildStatusInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BuildStatusInstance) => any
  ): Promise<BuildStatusInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BuildStatusContextSolution {
  serviceSid: string;
  sid: string;
}

export class BuildStatusContextImpl implements BuildStatusContext {
  protected _solution: BuildStatusContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Builds/${sid}/Status`;
  }

  fetch(
    callback?: (error: Error | null, item?: BuildStatusInstance) => any
  ): Promise<BuildStatusInstance> {
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
        new BuildStatusInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
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

interface BuildStatusPayload extends BuildStatusResource {}

interface BuildStatusResource {
  sid: string;
  account_sid: string;
  service_sid: string;
  status: BuildStatusStatus;
  url: string;
}

export class BuildStatusInstance {
  protected _solution: BuildStatusContextSolution;
  protected _context?: BuildStatusContext;

  constructor(
    protected _version: V1,
    payload: BuildStatusResource,
    serviceSid: string,
    sid: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.status = payload.status;
    this.url = payload.url;

    this._solution = { serviceSid, sid };
  }

  /**
   * The unique string that we created to identify the Build resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Build resource.
   */
  accountSid: string;
  /**
   * The SID of the Service that the Build resource is associated with.
   */
  serviceSid: string;
  status: BuildStatusStatus;
  /**
   * The absolute URL of the Build Status resource.
   */
  url: string;

  private get _proxy(): BuildStatusContext {
    this._context =
      this._context ||
      new BuildStatusContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a BuildStatusInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BuildStatusInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BuildStatusInstance) => any
  ): Promise<BuildStatusInstance> {
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
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      status: this.status,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface BuildStatusSolution {
  serviceSid: string;
  sid: string;
}

export interface BuildStatusListInstance {
  _version: V1;
  _solution: BuildStatusSolution;
  _uri: string;

  (): BuildStatusContext;
  get(): BuildStatusContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function BuildStatusListInstance(
  version: V1,
  serviceSid: string,
  sid: string
): BuildStatusListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  if (!isValidPathParam(sid)) {
    throw new Error("Parameter 'sid' is not valid.");
  }

  const instance = (() => instance.get()) as BuildStatusListInstance;

  instance.get = function get(): BuildStatusContext {
    return new BuildStatusContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid, sid };
  instance._uri = ``;

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
