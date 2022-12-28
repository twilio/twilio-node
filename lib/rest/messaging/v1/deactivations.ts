/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Messaging
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to fetch a DeactivationsInstance
 *
 * @property { Date } [date] The request will return a list of all United States Phone Numbers that were deactivated on the day specified by this parameter. This date should be specified in YYYY-MM-DD format.
 */
export interface DeactivationsContextFetchOptions {
  date?: Date;
}

export interface DeactivationsContext {
  /**
   * Fetch a DeactivationsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeactivationsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DeactivationsInstance) => any
  ): Promise<DeactivationsInstance>;
  /**
   * Fetch a DeactivationsInstance
   *
   * @param { DeactivationsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeactivationsInstance
   */
  fetch(
    params?:
      | DeactivationsContextFetchOptions
      | ((error: Error | null, item?: DeactivationsInstance) => any),
    callback?: (error: Error | null, item?: DeactivationsInstance) => any
  ): Promise<DeactivationsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DeactivationsContextSolution {}

export class DeactivationsContextImpl implements DeactivationsContext {
  protected _solution: DeactivationsContextSolution;
  protected _uri: string;

  constructor(protected _version: V1) {
    this._solution = {};
    this._uri = `/Deactivations`;
  }

  fetch(params?: any, callback?: any): Promise<DeactivationsInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["date"] !== undefined)
      data["Date"] = serialize.iso8601Date(params["date"]);

    const headers: any = {};

    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new DeactivationsInstance(operationVersion, payload)
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

interface DeactivationsPayload extends DeactivationsResource {}

interface DeactivationsResource {
  redirect_to?: string | null;
}

export class DeactivationsInstance {
  protected _solution: DeactivationsContextSolution;
  protected _context?: DeactivationsContext;

  constructor(protected _version: V1, payload: DeactivationsResource) {
    this.redirectTo = payload.redirect_to;

    this._solution = {};
  }

  /**
   * Redirect url to the list of deactivated numbers.
   */
  redirectTo?: string | null;

  private get _proxy(): DeactivationsContext {
    this._context =
      this._context || new DeactivationsContextImpl(this._version);
    return this._context;
  }

  /**
   * Fetch a DeactivationsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeactivationsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DeactivationsInstance) => any
  ): Promise<DeactivationsInstance>;
  /**
   * Fetch a DeactivationsInstance
   *
   * @param { DeactivationsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeactivationsInstance
   */
  fetch(
    params?:
      | DeactivationsContextFetchOptions
      | ((error: Error | null, item?: DeactivationsInstance) => any),
    callback?: (error: Error | null, item?: DeactivationsInstance) => any
  ): Promise<DeactivationsInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      redirectTo: this.redirectTo,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface DeactivationsListInstance {
  (): DeactivationsContext;
  get(): DeactivationsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DeactivationsSolution {}

interface DeactivationsListInstanceImpl extends DeactivationsListInstance {}
class DeactivationsListInstanceImpl implements DeactivationsListInstance {
  _version?: V1;
  _solution?: DeactivationsSolution;
  _uri?: string;
}

export function DeactivationsListInstance(
  version: V1
): DeactivationsListInstance {
  const instance = (() => instance.get()) as DeactivationsListInstanceImpl;

  instance.get = function get(): DeactivationsContext {
    return new DeactivationsContextImpl(version);
  };

  instance._version = version;
  instance._solution = {};
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
