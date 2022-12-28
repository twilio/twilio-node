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

/**
 * Options to pass to each
 *
 * @property { string } [schemaId] A string parameter filtering the results to return only the Event Types using a given schema.
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
export interface EventTypeListInstanceEachOptions {
  schemaId?: string;
  pageSize?: number;
  callback?: (item: EventTypeInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [schemaId] A string parameter filtering the results to return only the Event Types using a given schema.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface EventTypeListInstanceOptions {
  schemaId?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [schemaId] A string parameter filtering the results to return only the Event Types using a given schema.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface EventTypeListInstancePageOptions {
  schemaId?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface EventTypeContext {
  /**
   * Fetch a EventTypeInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EventTypeInstance
   */
  fetch(
    callback?: (error: Error | null, item?: EventTypeInstance) => any
  ): Promise<EventTypeInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface EventTypeContextSolution {
  type?: string;
}

export class EventTypeContextImpl implements EventTypeContext {
  protected _solution: EventTypeContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, type: string) {
    if (!isValidPathParam(type)) {
      throw new Error("Parameter 'type' is not valid.");
    }

    this._solution = { type };
    this._uri = `/Types/${type}`;
  }

  fetch(callback?: any): Promise<EventTypeInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new EventTypeInstance(operationVersion, payload, this._solution.type)
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

interface EventTypePayload extends TwilioResponsePayload {
  types: EventTypeResource[];
}

interface EventTypeResource {
  type?: string | null;
  schema_id?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  description?: string | null;
  url?: string | null;
  links?: object | null;
}

export class EventTypeInstance {
  protected _solution: EventTypeContextSolution;
  protected _context?: EventTypeContext;

  constructor(
    protected _version: V1,
    payload: EventTypeResource,
    type?: string
  ) {
    this.type = payload.type;
    this.schemaId = payload.schema_id;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.description = payload.description;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { type: type || this.type };
  }

  /**
   * The Event Type identifier.
   */
  type?: string | null;
  /**
   * The Schema identifier for this Event Type.
   */
  schemaId?: string | null;
  /**
   * The date this Event Type was created.
   */
  dateCreated?: Date | null;
  /**
   * The date this Event Type was updated.
   */
  dateUpdated?: Date | null;
  /**
   * Event Type description.
   */
  description?: string | null;
  /**
   * The URL of this resource.
   */
  url?: string | null;
  links?: object | null;

  private get _proxy(): EventTypeContext {
    this._context =
      this._context ||
      new EventTypeContextImpl(this._version, this._solution.type);
    return this._context;
  }

  /**
   * Fetch a EventTypeInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EventTypeInstance
   */
  fetch(
    callback?: (error: Error | null, item?: EventTypeInstance) => any
  ): Promise<EventTypeInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      type: this.type,
      schemaId: this.schemaId,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      description: this.description,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface EventTypeListInstance {
  (type: string): EventTypeContext;
  get(type: string): EventTypeContext;

  /**
   * Streams EventTypeInstance records from the API.
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
   * @param { EventTypeListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | EventTypeListInstanceEachOptions
      | ((item: EventTypeInstance, done: (err?: Error) => void) => void),
    callback?: (item: EventTypeInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of EventTypeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: EventTypePage) => any
  ): Promise<EventTypePage>;
  /**
   * Lists EventTypeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EventTypeListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | EventTypeListInstanceOptions
      | ((error: Error | null, items: EventTypeInstance[]) => any),
    callback?: (error: Error | null, items: EventTypeInstance[]) => any
  ): Promise<EventTypeInstance[]>;
  /**
   * Retrieve a single page of EventTypeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EventTypeListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | EventTypeListInstancePageOptions
      | ((error: Error | null, items: EventTypePage) => any),
    callback?: (error: Error | null, items: EventTypePage) => any
  ): Promise<EventTypePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface EventTypeSolution {}

interface EventTypeListInstanceImpl extends EventTypeListInstance {}
class EventTypeListInstanceImpl implements EventTypeListInstance {
  _version?: V1;
  _solution?: EventTypeSolution;
  _uri?: string;
}

export function EventTypeListInstance(version: V1): EventTypeListInstance {
  const instance = ((type) => instance.get(type)) as EventTypeListInstanceImpl;

  instance.get = function get(type): EventTypeContext {
    return new EventTypeContextImpl(version, type);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Types`;

  instance.page = function page(
    params?:
      | EventTypeListInstancePageOptions
      | ((error: Error | null, item?: EventTypePage) => any),
    callback?: (error: Error | null, item?: EventTypePage) => any
  ): Promise<EventTypePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["schemaId"] !== undefined) data["SchemaId"] = params["schemaId"];
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
      (payload) => new EventTypePage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: EventTypePage) => any
  ): Promise<EventTypePage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new EventTypePage(this._version, payload, this._solution)
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

export class EventTypePage extends Page<
  V1,
  EventTypePayload,
  EventTypeResource,
  EventTypeInstance
> {
  /**
   * Initialize the EventTypePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: EventTypeSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of EventTypeInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: EventTypeResource): EventTypeInstance {
    return new EventTypeInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
