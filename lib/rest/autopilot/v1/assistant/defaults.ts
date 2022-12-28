/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Autopilot
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
 * Options to pass to update a DefaultsInstance
 *
 * @property { any } [defaults] A JSON string that describes the default task links for the `assistant_initiation`, `collect`, and `fallback` situations.
 */
export interface DefaultsContextUpdateOptions {
  defaults?: any;
}

export interface DefaultsContext {
  /**
   * Fetch a DefaultsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DefaultsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DefaultsInstance) => any
  ): Promise<DefaultsInstance>;

  /**
   * Update a DefaultsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DefaultsInstance
   */
  update(
    callback?: (error: Error | null, item?: DefaultsInstance) => any
  ): Promise<DefaultsInstance>;
  /**
   * Update a DefaultsInstance
   *
   * @param { DefaultsContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DefaultsInstance
   */
  update(
    params?:
      | DefaultsContextUpdateOptions
      | ((error: Error | null, item?: DefaultsInstance) => any),
    callback?: (error: Error | null, item?: DefaultsInstance) => any
  ): Promise<DefaultsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DefaultsContextSolution {
  assistantSid?: string;
}

export class DefaultsContextImpl implements DefaultsContext {
  protected _solution: DefaultsContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, assistantSid: string) {
    if (!isValidPathParam(assistantSid)) {
      throw new Error("Parameter 'assistantSid' is not valid.");
    }

    this._solution = { assistantSid };
    this._uri = `/Assistants/${assistantSid}/Defaults`;
  }

  fetch(callback?: any): Promise<DefaultsInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DefaultsInstance(
          operationVersion,
          payload,
          this._solution.assistantSid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<DefaultsInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["defaults"] !== undefined)
      data["Defaults"] = serialize.object(params["defaults"]);

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
        new DefaultsInstance(
          operationVersion,
          payload,
          this._solution.assistantSid
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

interface DefaultsPayload extends DefaultsResource {}

interface DefaultsResource {
  account_sid?: string | null;
  assistant_sid?: string | null;
  url?: string | null;
  data?: any | null;
}

export class DefaultsInstance {
  protected _solution: DefaultsContextSolution;
  protected _context?: DefaultsContext;

  constructor(
    protected _version: V1,
    payload: DefaultsResource,
    assistantSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.assistantSid = payload.assistant_sid;
    this.url = payload.url;
    this.data = payload.data;

    this._solution = { assistantSid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Assistant that is the parent of the resource
   */
  assistantSid?: string | null;
  /**
   * The absolute URL of the Defaults resource
   */
  url?: string | null;
  /**
   * The JSON string that describes the default task links
   */
  data?: any | null;

  private get _proxy(): DefaultsContext {
    this._context =
      this._context ||
      new DefaultsContextImpl(this._version, this._solution.assistantSid);
    return this._context;
  }

  /**
   * Fetch a DefaultsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DefaultsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DefaultsInstance) => any
  ): Promise<DefaultsInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a DefaultsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DefaultsInstance
   */
  update(
    callback?: (error: Error | null, item?: DefaultsInstance) => any
  ): Promise<DefaultsInstance>;
  /**
   * Update a DefaultsInstance
   *
   * @param { DefaultsContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DefaultsInstance
   */
  update(
    params?:
      | DefaultsContextUpdateOptions
      | ((error: Error | null, item?: DefaultsInstance) => any),
    callback?: (error: Error | null, item?: DefaultsInstance) => any
  ): Promise<DefaultsInstance> {
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
      assistantSid: this.assistantSid,
      url: this.url,
      data: this.data,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface DefaultsListInstance {
  (): DefaultsContext;
  get(): DefaultsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DefaultsSolution {
  assistantSid?: string;
}

interface DefaultsListInstanceImpl extends DefaultsListInstance {}
class DefaultsListInstanceImpl implements DefaultsListInstance {
  _version?: V1;
  _solution?: DefaultsSolution;
  _uri?: string;
}

export function DefaultsListInstance(
  version: V1,
  assistantSid: string
): DefaultsListInstance {
  if (!isValidPathParam(assistantSid)) {
    throw new Error("Parameter 'assistantSid' is not valid.");
  }

  const instance = (() => instance.get()) as DefaultsListInstanceImpl;

  instance.get = function get(): DefaultsContext {
    return new DefaultsContextImpl(version, assistantSid);
  };

  instance._version = version;
  instance._solution = { assistantSid };
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
