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
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

export interface EngagementContextContext {
  /**
   * Fetch a EngagementContextInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed EngagementContextInstance
   */
  fetch(
    callback?: (error: Error | null, item?: EngagementContextInstance) => any
  ): Promise<EngagementContextInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface EngagementContextContextSolution {
  flowSid: string;
  engagementSid: string;
}

export class EngagementContextContextImpl implements EngagementContextContext {
  protected _solution: EngagementContextContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, flowSid: string, engagementSid: string) {
    if (!isValidPathParam(flowSid)) {
      throw new Error("Parameter 'flowSid' is not valid.");
    }

    if (!isValidPathParam(engagementSid)) {
      throw new Error("Parameter 'engagementSid' is not valid.");
    }

    this._solution = { flowSid, engagementSid };
    this._uri = `/Flows/${flowSid}/Engagements/${engagementSid}/Context`;
  }

  async fetch(
    callback?: (error: Error | null, item?: EngagementContextInstance) => any
  ): Promise<EngagementContextInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        headers,
      });

    try {
      let payload = await operationPromise;
      let operation = new EngagementContextInstance(
        operationVersion,
        payload,
        instance._solution.flowSid,
        instance._solution.engagementSid
      );

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

interface EngagementContextPayload extends EngagementContextResource {}

interface EngagementContextResource {
  account_sid: string;
  context: any;
  engagement_sid: string;
  flow_sid: string;
  url: string;
}

export class EngagementContextInstance {
  protected _solution: EngagementContextContextSolution;
  protected _context?: EngagementContextContext;

  constructor(
    protected _version: V1,
    payload: EngagementContextResource,
    flowSid: string,
    engagementSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.context = payload.context;
    this.engagementSid = payload.engagement_sid;
    this.flowSid = payload.flow_sid;
    this.url = payload.url;

    this._solution = { flowSid, engagementSid };
  }

  /**
   * The SID of the Account.
   */
  accountSid: string;
  /**
   * As your flow executes, we save the state in what\'s called the Flow Context. Any data in the flow context can be accessed by your widgets as variables, either in configuration fields or in text areas as variable substitution.
   */
  context: any;
  /**
   * The SID of the Engagement.
   */
  engagementSid: string;
  /**
   * The SID of the Flow.
   */
  flowSid: string;
  /**
   * The URL of the resource.
   */
  url: string;

  private get _proxy(): EngagementContextContext {
    this._context =
      this._context ||
      new EngagementContextContextImpl(
        this._version,
        this._solution.flowSid,
        this._solution.engagementSid
      );
    return this._context;
  }

  /**
   * Fetch a EngagementContextInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed EngagementContextInstance
   */
  fetch(
    callback?: (error: Error | null, item?: EngagementContextInstance) => any
  ): Promise<EngagementContextInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      context: this.context,
      engagementSid: this.engagementSid,
      flowSid: this.flowSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface EngagementContextSolution {
  flowSid: string;
  engagementSid: string;
}

export interface EngagementContextListInstance {
  _version: V1;
  _solution: EngagementContextSolution;
  _uri: string;

  (): EngagementContextContext;
  get(): EngagementContextContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function EngagementContextListInstance(
  version: V1,
  flowSid: string,
  engagementSid: string
): EngagementContextListInstance {
  if (!isValidPathParam(flowSid)) {
    throw new Error("Parameter 'flowSid' is not valid.");
  }

  if (!isValidPathParam(engagementSid)) {
    throw new Error("Parameter 'engagementSid' is not valid.");
  }

  const instance = (() => instance.get()) as EngagementContextListInstance;

  instance.get = function get(): EngagementContextContext {
    return new EngagementContextContextImpl(version, flowSid, engagementSid);
  };

  instance._version = version;
  instance._solution = { flowSid, engagementSid };
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
