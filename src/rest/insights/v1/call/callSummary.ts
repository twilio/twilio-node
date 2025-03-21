/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Insights
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

export type CallSummaryAnsweredBy =
  | "unknown"
  | "machine_start"
  | "machine_end_beep"
  | "machine_end_silence"
  | "machine_end_other"
  | "human"
  | "fax";

export type CallSummaryCallState =
  | "ringing"
  | "completed"
  | "busy"
  | "fail"
  | "noanswer"
  | "canceled"
  | "answered"
  | "undialed";

export type CallSummaryCallType =
  | "carrier"
  | "sip"
  | "trunking"
  | "client"
  | "whatsapp";

export type CallSummaryProcessingState = "complete" | "partial";

/**
 * Options to pass to fetch a CallSummaryInstance
 */
export interface CallSummaryContextFetchOptions {
  /** The Processing State of this Call Summary. One of `complete`, `partial` or `all`. */
  processingState?: CallSummaryProcessingState;
}

export interface CallSummaryContext {
  /**
   * Fetch a CallSummaryInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CallSummaryInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CallSummaryInstance) => any
  ): Promise<CallSummaryInstance>;
  /**
   * Fetch a CallSummaryInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CallSummaryInstance
   */
  fetch(
    params: CallSummaryContextFetchOptions,
    callback?: (error: Error | null, item?: CallSummaryInstance) => any
  ): Promise<CallSummaryInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CallSummaryContextSolution {
  callSid: string;
}

export class CallSummaryContextImpl implements CallSummaryContext {
  protected _solution: CallSummaryContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, callSid: string) {
    if (!isValidPathParam(callSid)) {
      throw new Error("Parameter 'callSid' is not valid.");
    }

    this._solution = { callSid };
    this._uri = `/Voice/${callSid}/Summary`;
  }

  fetch(
    params?:
      | CallSummaryContextFetchOptions
      | ((error: Error | null, item?: CallSummaryInstance) => any),
    callback?: (error: Error | null, item?: CallSummaryInstance) => any
  ): Promise<CallSummaryInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["processingState"] !== undefined)
      data["ProcessingState"] = params["processingState"];

    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CallSummaryInstance(
          operationVersion,
          payload,
          instance._solution.callSid
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

interface CallSummaryPayload extends CallSummaryResource {}

interface CallSummaryResource {
  account_sid: string;
  call_sid: string;
  call_type: CallSummaryCallType;
  call_state: CallSummaryCallState;
  answered_by: CallSummaryAnsweredBy;
  processing_state: CallSummaryProcessingState;
  created_time: Date;
  start_time: Date;
  end_time: Date;
  duration: number;
  connect_duration: number;
  from: Record<string, object>;
  to: Record<string, object>;
  carrier_edge: Record<string, object>;
  client_edge: Record<string, object>;
  sdk_edge: Record<string, object>;
  sip_edge: Record<string, object>;
  tags: Array<string>;
  url: string;
  attributes: Record<string, object>;
  properties: Record<string, object>;
  trust: Record<string, object>;
  annotation: Record<string, object>;
}

export class CallSummaryInstance {
  protected _solution: CallSummaryContextSolution;
  protected _context?: CallSummaryContext;

  constructor(
    protected _version: V1,
    payload: CallSummaryResource,
    callSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.callSid = payload.call_sid;
    this.callType = payload.call_type;
    this.callState = payload.call_state;
    this.answeredBy = payload.answered_by;
    this.processingState = payload.processing_state;
    this.createdTime = deserialize.iso8601DateTime(payload.created_time);
    this.startTime = deserialize.iso8601DateTime(payload.start_time);
    this.endTime = deserialize.iso8601DateTime(payload.end_time);
    this.duration = deserialize.integer(payload.duration);
    this.connectDuration = deserialize.integer(payload.connect_duration);
    this.from = payload.from;
    this.to = payload.to;
    this.carrierEdge = payload.carrier_edge;
    this.clientEdge = payload.client_edge;
    this.sdkEdge = payload.sdk_edge;
    this.sipEdge = payload.sip_edge;
    this.tags = payload.tags;
    this.url = payload.url;
    this.attributes = payload.attributes;
    this.properties = payload.properties;
    this.trust = payload.trust;
    this.annotation = payload.annotation;

    this._solution = { callSid };
  }

  /**
   * The unique SID identifier of the Account.
   */
  accountSid: string;
  /**
   * The unique SID identifier of the Call.
   */
  callSid: string;
  callType: CallSummaryCallType;
  callState: CallSummaryCallState;
  answeredBy: CallSummaryAnsweredBy;
  processingState: CallSummaryProcessingState;
  /**
   * The time at which the Call was created, given in ISO 8601 format. Can be different from `start_time` in the event of queueing due to CPS
   */
  createdTime: Date;
  /**
   * The time at which the Call was started, given in ISO 8601 format.
   */
  startTime: Date;
  /**
   * The time at which the Call was ended, given in ISO 8601 format.
   */
  endTime: Date;
  /**
   * Duration between when the call was initiated and the call was ended
   */
  duration: number;
  /**
   * Duration between when the call was answered and when it ended
   */
  connectDuration: number;
  /**
   * The calling party.
   */
  from: Record<string, object>;
  /**
   * The called party.
   */
  to: Record<string, object>;
  /**
   * Contains metrics and properties for the Twilio media gateway of a PSTN call.
   */
  carrierEdge: Record<string, object>;
  /**
   * Contains metrics and properties for the Twilio media gateway of a Client call.
   */
  clientEdge: Record<string, object>;
  /**
   * Contains metrics and properties for the SDK sensor library for Client calls.
   */
  sdkEdge: Record<string, object>;
  /**
   * Contains metrics and properties for the Twilio media gateway of a SIP Interface or Trunking call.
   */
  sipEdge: Record<string, object>;
  /**
   * Tags applied to calls by Voice Insights analysis indicating a condition that could result in subjective degradation of the call quality.
   */
  tags: Array<string>;
  /**
   * The URL of this resource.
   */
  url: string;
  /**
   * Attributes capturing call-flow-specific details.
   */
  attributes: Record<string, object>;
  /**
   * Contains edge-agnostic call-level details.
   */
  properties: Record<string, object>;
  /**
   * Contains trusted communications details including Branded Call and verified caller ID.
   */
  trust: Record<string, object>;
  /**
   * Programmatically labeled annotations for the Call. Developers can update the Call Summary records with Annotation during or after a Call. Annotations can be updated as long as the Call Summary record is addressable via the API.
   */
  annotation: Record<string, object>;

  private get _proxy(): CallSummaryContext {
    this._context =
      this._context ||
      new CallSummaryContextImpl(this._version, this._solution.callSid);
    return this._context;
  }

  /**
   * Fetch a CallSummaryInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CallSummaryInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CallSummaryInstance) => any
  ): Promise<CallSummaryInstance>;
  /**
   * Fetch a CallSummaryInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CallSummaryInstance
   */
  fetch(
    params: CallSummaryContextFetchOptions,
    callback?: (error: Error | null, item?: CallSummaryInstance) => any
  ): Promise<CallSummaryInstance>;

  fetch(
    params?: any,
    callback?: (error: Error | null, item?: CallSummaryInstance) => any
  ): Promise<CallSummaryInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      callSid: this.callSid,
      callType: this.callType,
      callState: this.callState,
      answeredBy: this.answeredBy,
      processingState: this.processingState,
      createdTime: this.createdTime,
      startTime: this.startTime,
      endTime: this.endTime,
      duration: this.duration,
      connectDuration: this.connectDuration,
      from: this.from,
      to: this.to,
      carrierEdge: this.carrierEdge,
      clientEdge: this.clientEdge,
      sdkEdge: this.sdkEdge,
      sipEdge: this.sipEdge,
      tags: this.tags,
      url: this.url,
      attributes: this.attributes,
      properties: this.properties,
      trust: this.trust,
      annotation: this.annotation,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface CallSummarySolution {
  callSid: string;
}

export interface CallSummaryListInstance {
  _version: V1;
  _solution: CallSummarySolution;
  _uri: string;

  (): CallSummaryContext;
  get(): CallSummaryContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function CallSummaryListInstance(
  version: V1,
  callSid: string
): CallSummaryListInstance {
  if (!isValidPathParam(callSid)) {
    throw new Error("Parameter 'callSid' is not valid.");
  }

  const instance = (() => instance.get()) as CallSummaryListInstance;

  instance.get = function get(): CallSummaryContext {
    return new CallSummaryContextImpl(version, callSid);
  };

  instance._version = version;
  instance._solution = { callSid };
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
