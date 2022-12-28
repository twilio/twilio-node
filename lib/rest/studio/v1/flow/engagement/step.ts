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
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";
import { StepContextListInstance } from "./step/stepContext";

/**
 * Options to pass to each
 *
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
export interface StepListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: StepInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface StepListInstanceOptions {
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface StepListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface StepContext {
  stepContext: StepContextListInstance;

  /**
   * Fetch a StepInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed StepInstance
   */
  fetch(
    callback?: (error: Error | null, item?: StepInstance) => any
  ): Promise<StepInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface StepContextSolution {
  flowSid?: string;
  engagementSid?: string;
  sid?: string;
}

export class StepContextImpl implements StepContext {
  protected _solution: StepContextSolution;
  protected _uri: string;

  protected _stepContext?: StepContextListInstance;

  constructor(
    protected _version: V1,
    flowSid: string,
    engagementSid: string,
    sid: string
  ) {
    if (!isValidPathParam(flowSid)) {
      throw new Error("Parameter 'flowSid' is not valid.");
    }

    if (!isValidPathParam(engagementSid)) {
      throw new Error("Parameter 'engagementSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { flowSid, engagementSid, sid };
    this._uri = `/Flows/${flowSid}/Engagements/${engagementSid}/Steps/${sid}`;
  }

  get stepContext(): StepContextListInstance {
    this._stepContext =
      this._stepContext ||
      StepContextListInstance(
        this._version,
        this._solution.flowSid,
        this._solution.engagementSid,
        this._solution.sid
      );
    return this._stepContext;
  }

  fetch(callback?: any): Promise<StepInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new StepInstance(
          operationVersion,
          payload,
          this._solution.flowSid,
          this._solution.engagementSid,
          this._solution.sid
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

interface StepPayload extends TwilioResponsePayload {
  steps: StepResource[];
}

interface StepResource {
  sid?: string | null;
  account_sid?: string | null;
  flow_sid?: string | null;
  engagement_sid?: string | null;
  name?: string | null;
  context?: any | null;
  transitioned_from?: string | null;
  transitioned_to?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  links?: object | null;
}

export class StepInstance {
  protected _solution: StepContextSolution;
  protected _context?: StepContext;

  constructor(
    protected _version: V1,
    payload: StepResource,
    flowSid: string,
    engagementSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.flowSid = payload.flow_sid;
    this.engagementSid = payload.engagement_sid;
    this.name = payload.name;
    this.context = payload.context;
    this.transitionedFrom = payload.transitioned_from;
    this.transitionedTo = payload.transitioned_to;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { flowSid, engagementSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Flow
   */
  flowSid?: string | null;
  /**
   * The SID of the Engagement
   */
  engagementSid?: string | null;
  /**
   * The event that caused the Flow to transition to the Step
   */
  name?: string | null;
  /**
   * The current state of the flow
   */
  context?: any | null;
  /**
   * The Widget that preceded the Widget for the Step
   */
  transitionedFrom?: string | null;
  /**
   * The Widget that will follow the Widget for the Step
   */
  transitionedTo?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;
  /**
   * The URLs of related resources
   */
  links?: object | null;

  private get _proxy(): StepContext {
    this._context =
      this._context ||
      new StepContextImpl(
        this._version,
        this._solution.flowSid,
        this._solution.engagementSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a StepInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed StepInstance
   */
  fetch(
    callback?: (error: Error | null, item?: StepInstance) => any
  ): Promise<StepInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the stepContext.
   */
  stepContext(): StepContextListInstance {
    return this._proxy.stepContext;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      flowSid: this.flowSid,
      engagementSid: this.engagementSid,
      name: this.name,
      context: this.context,
      transitionedFrom: this.transitionedFrom,
      transitionedTo: this.transitionedTo,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface StepListInstance {
  (sid: string): StepContext;
  get(sid: string): StepContext;

  /**
   * Streams StepInstance records from the API.
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
   * @param { StepListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | StepListInstanceEachOptions
      | ((item: StepInstance, done: (err?: Error) => void) => void),
    callback?: (item: StepInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of StepInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: StepPage) => any
  ): Promise<StepPage>;
  /**
   * Lists StepInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { StepListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | StepListInstanceOptions
      | ((error: Error | null, items: StepInstance[]) => any),
    callback?: (error: Error | null, items: StepInstance[]) => any
  ): Promise<StepInstance[]>;
  /**
   * Retrieve a single page of StepInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { StepListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | StepListInstancePageOptions
      | ((error: Error | null, items: StepPage) => any),
    callback?: (error: Error | null, items: StepPage) => any
  ): Promise<StepPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface StepSolution {
  flowSid?: string;
  engagementSid?: string;
}

interface StepListInstanceImpl extends StepListInstance {}
class StepListInstanceImpl implements StepListInstance {
  _version?: V1;
  _solution?: StepSolution;
  _uri?: string;
}

export function StepListInstance(
  version: V1,
  flowSid: string,
  engagementSid: string
): StepListInstance {
  if (!isValidPathParam(flowSid)) {
    throw new Error("Parameter 'flowSid' is not valid.");
  }

  if (!isValidPathParam(engagementSid)) {
    throw new Error("Parameter 'engagementSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as StepListInstanceImpl;

  instance.get = function get(sid): StepContext {
    return new StepContextImpl(version, flowSid, engagementSid, sid);
  };

  instance._version = version;
  instance._solution = { flowSid, engagementSid };
  instance._uri = `/Flows/${flowSid}/Engagements/${engagementSid}/Steps`;

  instance.page = function page(
    params?:
      | StepListInstancePageOptions
      | ((error: Error | null, item?: StepPage) => any),
    callback?: (error: Error | null, item?: StepPage) => any
  ): Promise<StepPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

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
      (payload) => new StepPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: StepPage) => any
  ): Promise<StepPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new StepPage(this._version, payload, this._solution)
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

export class StepPage extends Page<
  V1,
  StepPayload,
  StepResource,
  StepInstance
> {
  /**
   * Initialize the StepPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: StepSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of StepInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: StepResource): StepInstance {
    return new StepInstance(
      this._version,
      payload,
      this._solution.flowSid,
      this._solution.engagementSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
