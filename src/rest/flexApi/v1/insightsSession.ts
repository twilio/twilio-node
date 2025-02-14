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
 * Options to pass to create a InsightsSessionInstance
 */
export interface InsightsSessionContextCreateOptions {
  /** The Authorization HTTP request header */
  authorization?: string;
}

export interface InsightsSessionContext {
  /**
   * Create a InsightsSessionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsSessionInstance
   */
  create(
    callback?: (error: Error | null, item?: InsightsSessionInstance) => any
  ): Promise<InsightsSessionInstance>;
  /**
   * Create a InsightsSessionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsSessionInstance
   */
  create(
    params: InsightsSessionContextCreateOptions,
    callback?: (error: Error | null, item?: InsightsSessionInstance) => any
  ): Promise<InsightsSessionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface InsightsSessionContextSolution {}

export class InsightsSessionContextImpl implements InsightsSessionContext {
  protected _solution: InsightsSessionContextSolution;
  protected _uri: string;

  constructor(protected _version: V1) {
    this._solution = {};
    this._uri = `/Insights/Session`;
  }

  async create(
    params?:
      | InsightsSessionContextCreateOptions
      | ((error: Error | null, item?: InsightsSessionInstance) => any),
    callback?: (error: Error | null, item?: InsightsSessionInstance) => any
  ): Promise<InsightsSessionInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    const headers: any = {};
    headers["Accept"] = "application/json";
    if (params["authorization"] !== undefined)
      headers["Authorization"] = params["authorization"];

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    try {
      let payload = await operationPromise;
      let operation = new InsightsSessionInstance(operationVersion, payload);

      if (callback) {
        callback(null, operation);
      }

      return operation;
    } catch (err: any) {
      if (callback) {
        callback(err);
      }
      throw err;
    }
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

interface InsightsSessionPayload extends InsightsSessionResource {}

interface InsightsSessionResource {
  workspace_id: string;
  session_expiry: string;
  session_id: string;
  base_url: string;
  url: string;
}

export class InsightsSessionInstance {
  protected _solution: InsightsSessionContextSolution;
  protected _context?: InsightsSessionContext;

  constructor(protected _version: V1, payload: InsightsSessionResource) {
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
  workspaceId: string;
  /**
   * The session expiry date and time, given in ISO 8601 format.
   */
  sessionExpiry: string;
  /**
   * The unique ID for the session
   */
  sessionId: string;
  /**
   * The base URL to fetch reports and dashboards
   */
  baseUrl: string;
  /**
   * The URL of this resource.
   */
  url: string;

  private get _proxy(): InsightsSessionContext {
    this._context =
      this._context || new InsightsSessionContextImpl(this._version);
    return this._context;
  }

  /**
   * Create a InsightsSessionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsSessionInstance
   */
  create(
    callback?: (error: Error | null, item?: InsightsSessionInstance) => any
  ): Promise<InsightsSessionInstance>;
  /**
   * Create a InsightsSessionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsSessionInstance
   */
  create(
    params: InsightsSessionContextCreateOptions,
    callback?: (error: Error | null, item?: InsightsSessionInstance) => any
  ): Promise<InsightsSessionInstance>;

  create(
    params?: any,
    callback?: (error: Error | null, item?: InsightsSessionInstance) => any
  ): Promise<InsightsSessionInstance> {
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

export interface InsightsSessionSolution {}

export interface InsightsSessionListInstance {
  _version: V1;
  _solution: InsightsSessionSolution;
  _uri: string;

  (): InsightsSessionContext;
  get(): InsightsSessionContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function InsightsSessionListInstance(
  version: V1
): InsightsSessionListInstance {
  const instance = (() => instance.get()) as InsightsSessionListInstance;

  instance.get = function get(): InsightsSessionContext {
    return new InsightsSessionContextImpl(version);
  };

  instance._version = version;
  instance._solution = {};
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
