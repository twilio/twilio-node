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

type EventLevel = "UNKNOWN" | "DEBUG" | "INFO" | "WARNING" | "ERROR";

type EventTwilioEdge =
  | "unknown_edge"
  | "carrier_edge"
  | "sip_edge"
  | "sdk_edge"
  | "client_edge";

/**
 * Options to pass to each
 */
export interface EventListInstanceEachOptions {
  /**  */
  edge?: EventTwilioEdge;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: EventInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface EventListInstanceOptions {
  /**  */
  edge?: EventTwilioEdge;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface EventListInstancePageOptions {
  /**  */
  edge?: EventTwilioEdge;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface EventSolution {
  callSid: string;
}

export interface EventListInstance {
  _version: V1;
  _solution: EventSolution;
  _uri: string;

  /**
   * Streams EventInstance records from the API.
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
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: EventInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams EventInstance records from the API.
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
   * @param { EventListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: EventListInstanceEachOptions,
    callback?: (item: EventInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of EventInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: EventPage) => any
  ): Promise<EventPage>;
  /**
   * Retrieve a single target page of EventInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl?: string,
    callback?: (error: Error | null, items: EventPage) => any
  ): Promise<EventPage>;
  getPage(params?: any, callback?: any): Promise<EventPage>;
  /**
   * Lists EventInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: EventInstance[]) => any
  ): Promise<EventInstance[]>;
  /**
   * Lists EventInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EventListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: EventListInstanceOptions,
    callback?: (error: Error | null, items: EventInstance[]) => any
  ): Promise<EventInstance[]>;
  list(params?: any, callback?: any): Promise<EventInstance[]>;
  /**
   * Retrieve a single page of EventInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: EventPage) => any
  ): Promise<EventPage>;
  /**
   * Retrieve a single page of EventInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EventListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: EventListInstancePageOptions,
    callback?: (error: Error | null, items: EventPage) => any
  ): Promise<EventPage>;
  page(params?: any, callback?: any): Promise<EventPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function EventListInstance(
  version: V1,
  callSid: string
): EventListInstance {
  if (!isValidPathParam(callSid)) {
    throw new Error("Parameter 'callSid' is not valid.");
  }

  const instance = {} as EventListInstance;

  instance._version = version;
  instance._solution = { callSid };
  instance._uri = `/Voice/${callSid}/Events`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<EventPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["edge"] !== undefined) data["Edge"] = params["edge"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new EventPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl?: any,
    callback?: any
  ): Promise<EventPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) => new EventPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

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

interface EventPayload extends TwilioResponsePayload {
  events: EventResource[];
}

interface EventResource {
  timestamp: string;
  call_sid: string;
  account_sid: string;
  edge: EventTwilioEdge;
  group: string;
  level: EventLevel;
  name: string;
  carrier_edge: any;
  sip_edge: any;
  sdk_edge: any;
  client_edge: any;
}

export class EventInstance {
  constructor(protected _version: V1, payload: EventResource, callSid: string) {
    this.timestamp = payload.timestamp;
    this.callSid = payload.call_sid;
    this.accountSid = payload.account_sid;
    this.edge = payload.edge;
    this.group = payload.group;
    this.level = payload.level;
    this.name = payload.name;
    this.carrierEdge = payload.carrier_edge;
    this.sipEdge = payload.sip_edge;
    this.sdkEdge = payload.sdk_edge;
    this.clientEdge = payload.client_edge;
  }

  timestamp: string;
  callSid: string;
  accountSid: string;
  edge: EventTwilioEdge;
  group: string;
  level: EventLevel;
  name: string;
  carrierEdge: any;
  sipEdge: any;
  sdkEdge: any;
  clientEdge: any;

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
      group: this.group,
      level: this.level,
      name: this.name,
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

export class EventPage extends Page<
  V1,
  EventPayload,
  EventResource,
  EventInstance
> {
  /**
   * Initialize the EventPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: EventSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of EventInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: EventResource): EventInstance {
    return new EventInstance(this._version, payload, this._solution.callSid);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
