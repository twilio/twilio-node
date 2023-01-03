/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Understand from "../../Understand";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to update a AssistantFallbackActionsInstance
 *
 * @property { any } [fallbackActions]
 */
export interface AssistantFallbackActionsContextUpdateOptions {
  fallbackActions?: any;
}

export interface AssistantFallbackActionsContext {
  /**
   * Fetch a AssistantFallbackActionsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantFallbackActionsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: AssistantFallbackActionsInstance
    ) => any
  ): Promise<AssistantFallbackActionsInstance>;

  /**
   * Update a AssistantFallbackActionsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantFallbackActionsInstance
   */
  update(
    callback?: (
      error: Error | null,
      item?: AssistantFallbackActionsInstance
    ) => any
  ): Promise<AssistantFallbackActionsInstance>;
  /**
   * Update a AssistantFallbackActionsInstance
   *
   * @param { AssistantFallbackActionsContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantFallbackActionsInstance
   */
  update(
    params: AssistantFallbackActionsContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: AssistantFallbackActionsInstance
    ) => any
  ): Promise<AssistantFallbackActionsInstance>;
  update(
    params?: any,
    callback?: any
  ): Promise<AssistantFallbackActionsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AssistantFallbackActionsContextSolution {
  assistantSid: string;
}

export class AssistantFallbackActionsContextImpl
  implements AssistantFallbackActionsContext
{
  protected _solution: AssistantFallbackActionsContextSolution;
  protected _uri: string;

  constructor(protected _version: Understand, assistantSid: string) {
    if (!isValidPathParam(assistantSid)) {
      throw new Error("Parameter 'assistantSid' is not valid.");
    }

    this._solution = { assistantSid };
    this._uri = `/Assistants/${assistantSid}/FallbackActions`;
  }

  fetch(callback?: any): Promise<AssistantFallbackActionsInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AssistantFallbackActionsInstance(
          operationVersion,
          payload,
          instance._solution.assistantSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?: any,
    callback?: any
  ): Promise<AssistantFallbackActionsInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["fallbackActions"] !== undefined)
      data["FallbackActions"] = serialize.object(params["fallbackActions"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AssistantFallbackActionsInstance(
          operationVersion,
          payload,
          instance._solution.assistantSid
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

interface AssistantFallbackActionsPayload
  extends AssistantFallbackActionsResource {}

interface AssistantFallbackActionsResource {
  account_sid?: string | null;
  assistant_sid?: string | null;
  url?: string | null;
  data?: any | null;
}

export class AssistantFallbackActionsInstance {
  protected _solution: AssistantFallbackActionsContextSolution;
  protected _context?: AssistantFallbackActionsContext;

  constructor(
    protected _version: Understand,
    payload: AssistantFallbackActionsResource,
    assistantSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.assistantSid = payload.assistant_sid;
    this.url = payload.url;
    this.data = payload.data;

    this._solution = { assistantSid };
  }

  accountSid?: string | null;
  assistantSid?: string | null;
  url?: string | null;
  data?: any | null;

  private get _proxy(): AssistantFallbackActionsContext {
    this._context =
      this._context ||
      new AssistantFallbackActionsContextImpl(
        this._version,
        this._solution.assistantSid
      );
    return this._context;
  }

  /**
   * Fetch a AssistantFallbackActionsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantFallbackActionsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: AssistantFallbackActionsInstance
    ) => any
  ): Promise<AssistantFallbackActionsInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a AssistantFallbackActionsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantFallbackActionsInstance
   */
  update(
    callback?: (
      error: Error | null,
      item?: AssistantFallbackActionsInstance
    ) => any
  ): Promise<AssistantFallbackActionsInstance>;
  /**
   * Update a AssistantFallbackActionsInstance
   *
   * @param { AssistantFallbackActionsContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantFallbackActionsInstance
   */
  update(
    params: AssistantFallbackActionsContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: AssistantFallbackActionsInstance
    ) => any
  ): Promise<AssistantFallbackActionsInstance>;
  update(
    params?: any,
    callback?: any
  ): Promise<AssistantFallbackActionsInstance> {
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

export interface AssistantFallbackActionsSolution {
  assistantSid?: string;
}

export interface AssistantFallbackActionsListInstance {
  _version: Understand;
  _solution: AssistantFallbackActionsSolution;
  _uri: string;

  (): AssistantFallbackActionsContext;
  get(): AssistantFallbackActionsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AssistantFallbackActionsListInstance(
  version: Understand,
  assistantSid: string
): AssistantFallbackActionsListInstance {
  if (!isValidPathParam(assistantSid)) {
    throw new Error("Parameter 'assistantSid' is not valid.");
  }

  const instance = (() =>
    instance.get()) as AssistantFallbackActionsListInstance;

  instance.get = function get(): AssistantFallbackActionsContext {
    return new AssistantFallbackActionsContextImpl(version, assistantSid);
  };

  instance._version = version;
  instance._solution = { assistantSid };
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
