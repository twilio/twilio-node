/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Flex
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
 * Options to pass to create a GoodDataInstance
 *
 * @property { string } [token] The Token HTTP request header
 */
export interface GoodDataContextCreateOptions {
  token?: string;
}

export interface GoodDataContext {
  /**
   * Create a GoodDataInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed GoodDataInstance
   */
  create(
    callback?: (error: Error | null, item?: GoodDataInstance) => any
  ): Promise<GoodDataInstance>;
  /**
   * Create a GoodDataInstance
   *
   * @param { GoodDataContextCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed GoodDataInstance
   */
  create(
    params: GoodDataContextCreateOptions,
    callback?: (error: Error | null, item?: GoodDataInstance) => any
  ): Promise<GoodDataInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface GoodDataContextSolution {}

export class GoodDataContextImpl implements GoodDataContext {
  protected _solution: GoodDataContextSolution;
  protected _uri: string;

  constructor(protected _version: V1) {
    this._solution = {};
    this._uri = `/Insights/Session`;
  }

  create(
    params?:
      | GoodDataContextCreateOptions
      | ((error: Error | null, item?: GoodDataInstance) => any),
    callback?: (error: Error | null, item?: GoodDataInstance) => any
  ): Promise<GoodDataInstance> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: GoodDataInstance
      ) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    const headers: any = {};
    if (params["token"] !== undefined) headers["Token"] = params["token"];

    let operationVersion = this._version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new GoodDataInstance(operationVersion, payload)
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

interface GoodDataPayload extends GoodDataResource {}

interface GoodDataResource {
  workspace_id?: string | null;
  session_expiry?: string | null;
  session_id?: string | null;
  base_url?: string | null;
  url?: string | null;
}

export class GoodDataInstance {
  protected _solution: GoodDataContextSolution;
  protected _context?: GoodDataContext;

  constructor(protected _version: V1, payload: GoodDataResource) {
    this.workspaceId = payload.workspace_id;
    this.sessionExpiry = payload.session_expiry;
    this.sessionId = payload.session_id;
    this.baseUrl = payload.base_url;
    this.url = payload.url;

    this._solution = {};
  }

  /**
   * Unique ID to identify the user\'s workspace
   */
  workspaceId?: string | null;
  /**
   * The session expiry date and time
   */
  sessionExpiry?: string | null;
  /**
   * Unique session ID
   */
  sessionId?: string | null;
  /**
   * Base URL to fetch reports and dashboards
   */
  baseUrl?: string | null;
  /**
   * The URL of this resource.
   */
  url?: string | null;

  private get _proxy(): GoodDataContext {
    this._context = this._context || new GoodDataContextImpl(this._version);
    return this._context;
  }

  /**
   * Create a GoodDataInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed GoodDataInstance
   */
  create(
    callback?: (error: Error | null, item?: GoodDataInstance) => any
  ): Promise<GoodDataInstance>;
  /**
   * Create a GoodDataInstance
   *
   * @param { GoodDataContextCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed GoodDataInstance
   */
  create(
    params: GoodDataContextCreateOptions,
    callback?: (error: Error | null, item?: GoodDataInstance) => any
  ): Promise<GoodDataInstance>;

  create(
    params?: any,
    callback?: (error: Error | null, item?: GoodDataInstance) => any
  ): Promise<GoodDataInstance> {
    return this._proxy.create(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      workspaceId: this.workspaceId,
      sessionExpiry: this.sessionExpiry,
      sessionId: this.sessionId,
      baseUrl: this.baseUrl,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface GoodDataListInstance {
  (): GoodDataContext;
  get(): GoodDataContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface GoodDataSolution {}

interface GoodDataListInstanceImpl extends GoodDataListInstance {}
class GoodDataListInstanceImpl implements GoodDataListInstance {
  _version?: V1;
  _solution?: GoodDataSolution;
  _uri?: string;
}

export function GoodDataListInstance(version: V1): GoodDataListInstance {
  const instance = (() => instance.get()) as GoodDataListInstanceImpl;

  instance.get = function get(): GoodDataContext {
    return new GoodDataContextImpl(version);
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
