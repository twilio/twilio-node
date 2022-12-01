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
import V1 from "../../../../V1";
const deserialize = require("../../../../../../base/deserialize");
const serialize = require("../../../../../../base/serialize");

export interface StepContextContext {
  /**
   * Fetch a StepContextInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed StepContextInstance
   */
  fetch(
    callback?: (error: Error | null, item?: StepContextInstance) => any
  ): Promise<StepContextInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface StepContextContextSolution {
  flowSid?: string;
  engagementSid?: string;
  stepSid?: string;
}

export class StepContextContextImpl implements StepContextContext {
  protected _solution: StepContextContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    flowSid: string,
    engagementSid: string,
    stepSid: string
  ) {
    this._solution = { flowSid, engagementSid, stepSid };
    this._uri = `/Flows/${flowSid}/Engagements/${engagementSid}/Steps/${stepSid}/Context`;
  }

  fetch(callback?: any): Promise<StepContextInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new StepContextInstance(
          operationVersion,
          payload,
          this._solution.flowSid,
          this._solution.engagementSid,
          this._solution.stepSid
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

interface StepContextPayload extends StepContextResource {}

interface StepContextResource {
  account_sid?: string | null;
  context?: any | null;
  engagement_sid?: string | null;
  flow_sid?: string | null;
  step_sid?: string | null;
  url?: string | null;
}

export class StepContextInstance {
  protected _solution: StepContextContextSolution;
  protected _context?: StepContextContext;

  constructor(
    protected _version: V1,
    payload: StepContextPayload,
    flowSid: string,
    engagementSid: string,
    stepSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.context = payload.context;
    this.engagementSid = payload.engagement_sid;
    this.flowSid = payload.flow_sid;
    this.stepSid = payload.step_sid;
    this.url = payload.url;

    this._solution = { flowSid, engagementSid, stepSid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The current state of the flow
   */
  context?: any | null;
  /**
   * The SID of the Engagement
   */
  engagementSid?: string | null;
  /**
   * The SID of the Flow
   */
  flowSid?: string | null;
  /**
   * Step SID
   */
  stepSid?: string | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;

  private get _proxy(): StepContextContext {
    this._context =
      this._context ||
      new StepContextContextImpl(
        this._version,
        this._solution.flowSid,
        this._solution.engagementSid,
        this._solution.stepSid
      );
    return this._context;
  }

  /**
   * Fetch a StepContextInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed StepContextInstance
   */
  fetch(
    callback?: (error: Error | null, item?: StepContextInstance) => any
  ): Promise<StepContextInstance> {
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
      stepSid: this.stepSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface StepContextListInstance {
  (): StepContextContext;
  get(): StepContextContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface StepContextSolution {
  flowSid?: string;
  engagementSid?: string;
  stepSid?: string;
}

interface StepContextListInstanceImpl extends StepContextListInstance {}
class StepContextListInstanceImpl implements StepContextListInstance {
  _version?: V1;
  _solution?: StepContextSolution;
  _uri?: string;
}

export function StepContextListInstance(
  version: V1,
  flowSid: string,
  engagementSid: string,
  stepSid: string
): StepContextListInstance {
  const instance = (() => instance.get()) as StepContextListInstanceImpl;

  instance.get = function get(): StepContextContext {
    return new StepContextContextImpl(version, flowSid, engagementSid, stepSid);
  };

  instance._version = version;
  instance._solution = { flowSid, engagementSid, stepSid };
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
