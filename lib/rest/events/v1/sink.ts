/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Events
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { SinkTestListInstance } from "./sink/sinkTest";
import { SinkValidateListInstance } from "./sink/sinkValidate";

type SinkSinkType = "kinesis" | "webhook" | "segment";

type SinkStatus = "initialized" | "validating" | "active" | "failed";

/**
 * Options to pass to update a SinkInstance
 *
 * @property { string } description A human readable description for the Sink **This value should not contain PII.**
 */
export interface SinkContextUpdateOptions {
  description: string;
}

/**
 * Options to pass to create a SinkInstance
 *
 * @property { string } description A human readable description for the Sink **This value should not contain PII.**
 * @property { any } sinkConfiguration The information required for Twilio to connect to the provided Sink encoded as JSON.
 * @property { SinkSinkType } sinkType
 */
export interface SinkListInstanceCreateOptions {
  description: string;
  sinkConfiguration: any;
  sinkType: SinkSinkType;
}
/**
 * Options to pass to each
 *
 * @property { boolean } [inUse] A boolean query parameter filtering the results to return sinks used/not used by a subscription.
 * @property { string } [status] A String query parameter filtering the results by status `initialized`, `validating`, `active` or `failed`.
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
export interface SinkListInstanceEachOptions {
  inUse?: boolean;
  status?: string;
  pageSize?: number;
  callback?: (item: SinkInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { boolean } [inUse] A boolean query parameter filtering the results to return sinks used/not used by a subscription.
 * @property { string } [status] A String query parameter filtering the results by status `initialized`, `validating`, `active` or `failed`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SinkListInstanceOptions {
  inUse?: boolean;
  status?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { boolean } [inUse] A boolean query parameter filtering the results to return sinks used/not used by a subscription.
 * @property { string } [status] A String query parameter filtering the results by status `initialized`, `validating`, `active` or `failed`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface SinkListInstancePageOptions {
  inUse?: boolean;
  status?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface SinkContext {
  sinkTest: SinkTestListInstance;
  sinkValidate: SinkValidateListInstance;

  /**
   * Remove a SinkInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a SinkInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SinkInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SinkInstance) => any
  ): Promise<SinkInstance>;

  /**
   * Update a SinkInstance
   *
   * @param { SinkContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SinkInstance
   */
  update(
    params: SinkContextUpdateOptions,
    callback?: (error: Error | null, item?: SinkInstance) => any
  ): Promise<SinkInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SinkContextSolution {
  sid?: string;
}

export class SinkContextImpl implements SinkContext {
  protected _solution: SinkContextSolution;
  protected _uri: string;

  protected _sinkTest?: SinkTestListInstance;
  protected _sinkValidate?: SinkValidateListInstance;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Sinks/${sid}`;
  }

  get sinkTest(): SinkTestListInstance {
    this._sinkTest =
      this._sinkTest || SinkTestListInstance(this._version, this._solution.sid);
    return this._sinkTest;
  }

  get sinkValidate(): SinkValidateListInstance {
    this._sinkValidate =
      this._sinkValidate ||
      SinkValidateListInstance(this._version, this._solution.sid);
    return this._sinkValidate;
  }

  remove(callback?: any): Promise<boolean> {
    let operationVersion = this._version,
      operationPromise = operationVersion.remove({
        uri: this._uri,
        method: "delete",
      });

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<SinkInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SinkInstance(operationVersion, payload, this._solution.sid)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params: any, callback?: any): Promise<SinkInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["description"] === null || params["description"] === undefined) {
      throw new Error("Required parameter \"params['description']\" missing.");
    }

    let data: any = {};

    data["Description"] = params["description"];

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
        new SinkInstance(operationVersion, payload, this._solution.sid)
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

interface SinkPayload extends TwilioResponsePayload {
  sinks: SinkResource[];
}

interface SinkResource {
  date_created?: Date | null;
  date_updated?: Date | null;
  description?: string | null;
  sid?: string | null;
  sink_configuration?: any | null;
  sink_type?: SinkSinkType;
  status?: SinkStatus;
  url?: string | null;
  links?: object | null;
}

export class SinkInstance {
  protected _solution: SinkContextSolution;
  protected _context?: SinkContext;

  constructor(protected _version: V1, payload: SinkResource, sid?: string) {
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.description = payload.description;
    this.sid = payload.sid;
    this.sinkConfiguration = payload.sink_configuration;
    this.sinkType = payload.sink_type;
    this.status = payload.status;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The date this Sink was created
   */
  dateCreated?: Date | null;
  /**
   * The date this Sink was updated
   */
  dateUpdated?: Date | null;
  /**
   * Sink Description
   */
  description?: string | null;
  /**
   * A string that uniquely identifies this Sink.
   */
  sid?: string | null;
  /**
   * JSON Sink configuration.
   */
  sinkConfiguration?: any | null;
  sinkType?: SinkSinkType;
  status?: SinkStatus;
  /**
   * The URL of this resource.
   */
  url?: string | null;
  /**
   * Nested resource URLs.
   */
  links?: object | null;

  private get _proxy(): SinkContext {
    this._context =
      this._context || new SinkContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a SinkInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a SinkInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SinkInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SinkInstance) => any
  ): Promise<SinkInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SinkInstance
   *
   * @param { SinkContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SinkInstance
   */
  update(
    params: SinkContextUpdateOptions,
    callback?: (error: Error | null, item?: SinkInstance) => any
  ): Promise<SinkInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the sinkTest.
   */
  sinkTest(): SinkTestListInstance {
    return this._proxy.sinkTest;
  }

  /**
   * Access the sinkValidate.
   */
  sinkValidate(): SinkValidateListInstance {
    return this._proxy.sinkValidate;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      description: this.description,
      sid: this.sid,
      sinkConfiguration: this.sinkConfiguration,
      sinkType: this.sinkType,
      status: this.status,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface SinkListInstance {
  (sid: string): SinkContext;
  get(sid: string): SinkContext;

  /**
   * Create a SinkInstance
   *
   * @param { SinkListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SinkInstance
   */
  create(
    params: SinkListInstanceCreateOptions,
    callback?: (error: Error | null, item?: SinkInstance) => any
  ): Promise<SinkInstance>;

  /**
   * Streams SinkInstance records from the API.
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
   * @param { SinkListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | SinkListInstanceEachOptions
      | ((item: SinkInstance, done: (err?: Error) => void) => void),
    callback?: (item: SinkInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of SinkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: SinkPage) => any
  ): Promise<SinkPage>;
  /**
   * Lists SinkInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SinkListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | SinkListInstanceOptions
      | ((error: Error | null, items: SinkInstance[]) => any),
    callback?: (error: Error | null, items: SinkInstance[]) => any
  ): Promise<SinkInstance[]>;
  /**
   * Retrieve a single page of SinkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SinkListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | SinkListInstancePageOptions
      | ((error: Error | null, items: SinkPage) => any),
    callback?: (error: Error | null, items: SinkPage) => any
  ): Promise<SinkPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SinkSolution {}

interface SinkListInstanceImpl extends SinkListInstance {}
class SinkListInstanceImpl implements SinkListInstance {
  _version?: V1;
  _solution?: SinkSolution;
  _uri?: string;
}

export function SinkListInstance(version: V1): SinkListInstance {
  const instance = ((sid) => instance.get(sid)) as SinkListInstanceImpl;

  instance.get = function get(sid): SinkContext {
    return new SinkContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Sinks`;

  instance.create = function create(
    params: SinkListInstanceCreateOptions,
    callback?: (error: Error | null, item?: SinkInstance) => any
  ): Promise<SinkInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["description"] === null || params["description"] === undefined) {
      throw new Error("Required parameter \"params['description']\" missing.");
    }

    if (
      params["sinkConfiguration"] === null ||
      params["sinkConfiguration"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['sinkConfiguration']\" missing."
      );
    }

    if (params["sinkType"] === null || params["sinkType"] === undefined) {
      throw new Error("Required parameter \"params['sinkType']\" missing.");
    }

    let data: any = {};

    data["Description"] = params["description"];

    data["SinkConfiguration"] = serialize.object(params["sinkConfiguration"]);

    data["SinkType"] = params["sinkType"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new SinkInstance(operationVersion, payload)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | SinkListInstancePageOptions
      | ((error: Error | null, item?: SinkPage) => any),
    callback?: (error: Error | null, item?: SinkPage) => any
  ): Promise<SinkPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["inUse"] !== undefined)
      data["InUse"] = serialize.bool(params["inUse"]);
    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
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
      (payload) => new SinkPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: SinkPage) => any
  ): Promise<SinkPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new SinkPage(this._version, payload, this._solution)
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

export class SinkPage extends Page<
  V1,
  SinkPayload,
  SinkResource,
  SinkInstance
> {
  /**
   * Initialize the SinkPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SinkSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SinkInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SinkResource): SinkInstance {
    return new SinkInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
