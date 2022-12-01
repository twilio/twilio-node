/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Studio
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V2 from "../../V2";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");

/**
 * Options to pass to update a FlowTestUserInstance
 *
 * @property { Array<string> } testUsers List of test user identities that can test draft versions of the flow.
 */
export interface FlowTestUserContextUpdateOptions {
  testUsers: Array<string>;
}

export interface FlowTestUserContext {
  /**
   * Fetch a FlowTestUserInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FlowTestUserInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FlowTestUserInstance) => any
  ): Promise<FlowTestUserInstance>;

  /**
   * Update a FlowTestUserInstance
   *
   * @param { FlowTestUserContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FlowTestUserInstance
   */
  update(
    params: FlowTestUserContextUpdateOptions,
    callback?: (error: Error | null, item?: FlowTestUserInstance) => any
  ): Promise<FlowTestUserInstance>;
  update(params: any, callback?: any): Promise<FlowTestUserInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FlowTestUserContextSolution {
  sid?: string;
}

export class FlowTestUserContextImpl implements FlowTestUserContext {
  protected _solution: FlowTestUserContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, sid: string) {
    this._solution = { sid };
    this._uri = `/Flows/${sid}/TestUsers`;
  }

  fetch(callback?: any): Promise<FlowTestUserInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FlowTestUserInstance(operationVersion, payload, this._solution.sid)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params: any, callback?: any): Promise<FlowTestUserInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["testUsers"] === null || params["testUsers"] === undefined) {
      throw new Error("Required parameter \"params['testUsers']\" missing.");
    }

    let data: any = {};

    data["TestUsers"] = serialize.map(params["testUsers"], (e) => e);

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
        new FlowTestUserInstance(operationVersion, payload, this._solution.sid)
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

interface FlowTestUserPayload extends FlowTestUserResource {}

interface FlowTestUserResource {
  sid?: string | null;
  test_users?: Array<string> | null;
  url?: string | null;
}

export class FlowTestUserInstance {
  protected _solution: FlowTestUserContextSolution;
  protected _context?: FlowTestUserContext;

  constructor(
    protected _version: V2,
    payload: FlowTestUserPayload,
    sid: string
  ) {
    this.sid = payload.sid;
    this.testUsers = payload.test_users;
    this.url = payload.url;

    this._solution = { sid };
  }

  /**
   * Unique identifier of the flow.
   */
  sid?: string | null;
  /**
   * List of test user identities that can test draft versions of the flow.
   */
  testUsers?: Array<string> | null;
  /**
   * The URL of this resource.
   */
  url?: string | null;

  private get _proxy(): FlowTestUserContext {
    this._context =
      this._context ||
      new FlowTestUserContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a FlowTestUserInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FlowTestUserInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FlowTestUserInstance) => any
  ): Promise<FlowTestUserInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a FlowTestUserInstance
   *
   * @param { FlowTestUserContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FlowTestUserInstance
   */
  update(
    params: FlowTestUserContextUpdateOptions,
    callback?: (error: Error | null, item?: FlowTestUserInstance) => any
  ): Promise<FlowTestUserInstance>;
  update(params: any, callback?: any): Promise<FlowTestUserInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      testUsers: this.testUsers,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface FlowTestUserListInstance {
  (): FlowTestUserContext;
  get(): FlowTestUserContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FlowTestUserSolution {
  sid?: string;
}

interface FlowTestUserListInstanceImpl extends FlowTestUserListInstance {}
class FlowTestUserListInstanceImpl implements FlowTestUserListInstance {
  _version?: V2;
  _solution?: FlowTestUserSolution;
  _uri?: string;
}

export function FlowTestUserListInstance(
  version: V2,
  sid: string
): FlowTestUserListInstance {
  const instance = (() => instance.get()) as FlowTestUserListInstanceImpl;

  instance.get = function get(): FlowTestUserContext {
    return new FlowTestUserContextImpl(version, sid);
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
