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
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

type MetricStreamDirection = "unknown" | "inbound" | "outbound" | "both";

type MetricTwilioEdge =
  | "unknown_edge"
  | "carrier_edge"
  | "sip_edge"
  | "sdk_edge"
  | "client_edge";

/**
 * Options to pass to each
 *
 * @property { MetricTwilioEdge } [edge]
 * @property { MetricStreamDirection } [direction]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface MetricListInstanceEachOptions {
  edge?: MetricTwilioEdge;
  direction?: MetricStreamDirection;
  pageSize?: number;
  callback?: (item: MetricInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { MetricTwilioEdge } [edge]
 * @property { MetricStreamDirection } [direction]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface MetricListInstanceOptions {
  edge?: MetricTwilioEdge;
  direction?: MetricStreamDirection;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { MetricTwilioEdge } [edge]
 * @property { MetricStreamDirection } [direction]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface MetricListInstancePageOptions {
  edge?: MetricTwilioEdge;
  direction?: MetricStreamDirection;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface MetricListInstance {
  /**
   * Streams MetricInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MetricListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | MetricListInstanceEachOptions
      | ((item: MetricInstance, done: (err?: Error) => void) => void),
    callback?: (item: MetricInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of MetricInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: MetricPage) => any
  ): Promise<MetricPage>;
  /**
   * Lists MetricInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MetricListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | MetricListInstanceOptions
      | ((error: Error | null, items: MetricInstance[]) => any),
    callback?: (error: Error | null, items: MetricInstance[]) => any
  ): Promise<MetricInstance[]>;
  /**
   * Retrieve a single page of MetricInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MetricListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | MetricListInstancePageOptions
      | ((error: Error | null, items: MetricPage) => any),
    callback?: (error: Error | null, items: MetricPage) => any
  ): Promise<MetricPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface MetricSolution {
  callSid?: string;
}

interface MetricListInstanceImpl extends MetricListInstance {}
class MetricListInstanceImpl implements MetricListInstance {
  _version?: V1;
  _solution?: MetricSolution;
  _uri?: string;
}

export function MetricListInstance(
  version: V1,
  callSid: string
): MetricListInstance {
  if (!isValidPathParam(callSid)) {
    throw new Error("Parameter 'callSid' is not valid.");
  }

  const instance = {} as MetricListInstanceImpl;

  instance._version = version;
  instance._solution = { callSid };
  instance._uri = `/Voice/${callSid}/Metrics`;

  instance.page = function page(
    params?:
      | MetricListInstancePageOptions
      | ((error: Error | null, item?: MetricPage) => any),
    callback?: (error: Error | null, item?: MetricPage) => any
  ): Promise<MetricPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["edge"] !== undefined) data["Edge"] = params["edge"];
    if (params["direction"] !== undefined)
      data["Direction"] = params["direction"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new MetricPage(operationVersion, payload, this._solution)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: MetricPage) => any
  ): Promise<MetricPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new MetricPage(this._version, payload, this._solution)
    );
    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

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

interface MetricPayload extends TwilioResponsePayload {
  metrics: MetricResource[];
}

interface MetricResource {
  timestamp?: string | null;
  call_sid?: string | null;
  account_sid?: string | null;
  edge?: MetricTwilioEdge;
  direction?: MetricStreamDirection;
  carrier_edge?: any | null;
  sip_edge?: any | null;
  sdk_edge?: any | null;
  client_edge?: any | null;
}

export class MetricInstance {
  constructor(
    protected _version: V1,
    payload: MetricResource,
    callSid: string
  ) {
    this.timestamp = payload.timestamp;
    this.callSid = payload.call_sid;
    this.accountSid = payload.account_sid;
    this.edge = payload.edge;
    this.direction = payload.direction;
    this.carrierEdge = payload.carrier_edge;
    this.sipEdge = payload.sip_edge;
    this.sdkEdge = payload.sdk_edge;
    this.clientEdge = payload.client_edge;
  }

  timestamp?: string | null;
  callSid?: string | null;
  accountSid?: string | null;
  edge?: MetricTwilioEdge;
  direction?: MetricStreamDirection;
  carrierEdge?: any | null;
  sipEdge?: any | null;
  sdkEdge?: any | null;
  clientEdge?: any | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      timestamp: this.timestamp,
      callSid: this.callSid,
      accountSid: this.accountSid,
      edge: this.edge,
      direction: this.direction,
      carrierEdge: this.carrierEdge,
      sipEdge: this.sipEdge,
      sdkEdge: this.sdkEdge,
      clientEdge: this.clientEdge,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class MetricPage extends Page<
  V1,
  MetricPayload,
  MetricResource,
  MetricInstance
> {
  /**
   * Initialize the MetricPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: MetricSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of MetricInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MetricResource): MetricInstance {
    return new MetricInstance(this._version, payload, this._solution.callSid);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
