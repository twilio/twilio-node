/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V2010 from "../../../V2010";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");

type CallFeedbackIssues =
  | "audio-latency"
  | "digits-not-captured"
  | "dropped-call"
  | "imperfect-audio"
  | "incorrect-caller-id"
  | "one-way-audio"
  | "post-dial-delay"
  | "unsolicited-call";

/**
 * Options to pass to update a FeedbackInstance
 *
 * @property { number } [qualityScore] The call quality expressed as an integer from `1` to `5` where `1` represents very poor call quality and `5` represents a perfect call.
 * @property { Array<CallFeedbackIssues> } [issue] One or more issues experienced during the call. The issues can be: `imperfect-audio`, `dropped-call`, `incorrect-caller-id`, `post-dial-delay`, `digits-not-captured`, `audio-latency`, `unsolicited-call`, or `one-way-audio`.
 */
export interface FeedbackContextUpdateOptions {
  qualityScore?: number;
  issue?: Array<CallFeedbackIssues>;
}

export interface FeedbackContext {
  /**
   * Fetch a FeedbackInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FeedbackInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FeedbackInstance) => any
  ): Promise<FeedbackInstance>;

  /**
   * Update a FeedbackInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FeedbackInstance
   */
  update(
    callback?: (error: Error | null, item?: FeedbackInstance) => any
  ): Promise<FeedbackInstance>;
  /**
   * Update a FeedbackInstance
   *
   * @param { FeedbackContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FeedbackInstance
   */
  update(
    params: FeedbackContextUpdateOptions,
    callback?: (error: Error | null, item?: FeedbackInstance) => any
  ): Promise<FeedbackInstance>;
  update(params?: any, callback?: any): Promise<FeedbackInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FeedbackContextSolution {
  accountSid?: string;
  callSid?: string;
}

export class FeedbackContextImpl implements FeedbackContext {
  protected _solution: FeedbackContextSolution;
  protected _uri: string;

  constructor(protected _version: V2010, accountSid: string, callSid: string) {
    this._solution = { accountSid, callSid };
    this._uri = `/Accounts/${accountSid}/Calls/${callSid}/Feedback.json`;
  }

  fetch(callback?: any): Promise<FeedbackInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FeedbackInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.callSid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<FeedbackInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["qualityScore"] !== undefined)
      data["QualityScore"] = params["qualityScore"];
    if (params["issue"] !== undefined)
      data["Issue"] = serialize.map(params["issue"], (e) => e);

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
        new FeedbackInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.callSid
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

interface FeedbackPayload extends FeedbackResource {}

interface FeedbackResource {
  account_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  issues?: Array<CallFeedbackIssues> | null;
  quality_score?: number | null;
  sid?: string | null;
}

export class FeedbackInstance {
  protected _solution: FeedbackContextSolution;
  protected _context?: FeedbackContext;

  constructor(
    protected _version: V2010,
    payload: FeedbackPayload,
    accountSid: string,
    callSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.issues = payload.issues;
    this.qualityScore = deserialize.integer(payload.quality_score);
    this.sid = payload.sid;

    this._solution = { accountSid, callSid };
  }

  /**
   * The unique sid that identifies this account
   */
  accountSid?: string | null;
  /**
   * The date this resource was created
   */
  dateCreated?: string | null;
  /**
   * The date this resource was last updated
   */
  dateUpdated?: string | null;
  /**
   * Issues experienced during the call
   */
  issues?: Array<CallFeedbackIssues> | null;
  /**
   * 1 to 5 quality score
   */
  qualityScore?: number | null;
  /**
   * A string that uniquely identifies this feedback resource
   */
  sid?: string | null;

  private get _proxy(): FeedbackContext {
    this._context =
      this._context ||
      new FeedbackContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.callSid
      );
    return this._context;
  }

  /**
   * Fetch a FeedbackInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FeedbackInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FeedbackInstance) => any
  ): Promise<FeedbackInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a FeedbackInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FeedbackInstance
   */
  update(
    callback?: (error: Error | null, item?: FeedbackInstance) => any
  ): Promise<FeedbackInstance>;
  /**
   * Update a FeedbackInstance
   *
   * @param { FeedbackContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FeedbackInstance
   */
  update(
    params: FeedbackContextUpdateOptions,
    callback?: (error: Error | null, item?: FeedbackInstance) => any
  ): Promise<FeedbackInstance>;
  update(params?: any, callback?: any): Promise<FeedbackInstance> {
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
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      issues: this.issues,
      qualityScore: this.qualityScore,
      sid: this.sid,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface FeedbackListInstance {
  (): FeedbackContext;
  get(): FeedbackContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FeedbackSolution {
  accountSid?: string;
  callSid?: string;
}

interface FeedbackListInstanceImpl extends FeedbackListInstance {}
class FeedbackListInstanceImpl implements FeedbackListInstance {
  _version?: V2010;
  _solution?: FeedbackSolution;
  _uri?: string;
}

export function FeedbackListInstance(
  version: V2010,
  accountSid: string,
  callSid: string
): FeedbackListInstance {
  const instance = (() => instance.get()) as FeedbackListInstanceImpl;

  instance.get = function get(): FeedbackContext {
    return new FeedbackContextImpl(version, accountSid, callSid);
  };

  instance._version = version;
  instance._solution = { accountSid, callSid };
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
