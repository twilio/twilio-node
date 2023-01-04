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
import { SubscribedEventListInstance } from "./subscription/subscribedEvent";

/**
 * Options to pass to update a SubscriptionInstance
 *
 * @property { string } [description] A human readable description for the Subscription.
 * @property { string } [sinkSid] The SID of the sink that events selected by this subscription should be sent to. Sink must be active for the subscription to be created.
 */
export interface SubscriptionContextUpdateOptions {
  description?: string;
  sinkSid?: string;
}

/**
 * Options to pass to create a SubscriptionInstance
 *
 * @property { string } description A human readable description for the Subscription **This value should not contain PII.**
 * @property { string } sinkSid The SID of the sink that events selected by this subscription should be sent to. Sink must be active for the subscription to be created.
 * @property { Array<any> } types An array of objects containing the subscribed Event Types
 */
export interface SubscriptionListInstanceCreateOptions {
  description: string;
  sinkSid: string;
  types: Array<any>;
}
/**
 * Options to pass to each
 *
 * @property { string } [sinkSid] The SID of the sink that the list of Subscriptions should be filtered by.
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
export interface SubscriptionListInstanceEachOptions {
  sinkSid?: string;
  pageSize?: number;
  callback?: (item: SubscriptionInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [sinkSid] The SID of the sink that the list of Subscriptions should be filtered by.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SubscriptionListInstanceOptions {
  sinkSid?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [sinkSid] The SID of the sink that the list of Subscriptions should be filtered by.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface SubscriptionListInstancePageOptions {
  sinkSid?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface SubscriptionContext {
  subscribedEvents: SubscribedEventListInstance;

  /**
   * Remove a SubscriptionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a SubscriptionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SubscriptionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SubscriptionInstance) => any
  ): Promise<SubscriptionInstance>;

  /**
   * Update a SubscriptionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SubscriptionInstance
   */
  update(
    callback?: (error: Error | null, item?: SubscriptionInstance) => any
  ): Promise<SubscriptionInstance>;
  /**
   * Update a SubscriptionInstance
   *
   * @param { SubscriptionContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SubscriptionInstance
   */
  update(
    params: SubscriptionContextUpdateOptions,
    callback?: (error: Error | null, item?: SubscriptionInstance) => any
  ): Promise<SubscriptionInstance>;
  update(params?: any, callback?: any): Promise<SubscriptionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SubscriptionContextSolution {
  sid: string;
}

export class SubscriptionContextImpl implements SubscriptionContext {
  protected _solution: SubscriptionContextSolution;
  protected _uri: string;

  protected _subscribedEvents?: SubscribedEventListInstance;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Subscriptions/${sid}`;
  }

  get subscribedEvents(): SubscribedEventListInstance {
    this._subscribedEvents =
      this._subscribedEvents ||
      SubscribedEventListInstance(this._version, this._solution.sid);
    return this._subscribedEvents;
  }

  remove(callback?: any): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<SubscriptionInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SubscriptionInstance(
          operationVersion,
          payload,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<SubscriptionInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["description"] !== undefined)
      data["Description"] = params["description"];
    if (params["sinkSid"] !== undefined) data["SinkSid"] = params["sinkSid"];

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
        new SubscriptionInstance(
          operationVersion,
          payload,
          instance._solution.sid
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

interface SubscriptionPayload extends TwilioResponsePayload {
  subscriptions: SubscriptionResource[];
}

interface SubscriptionResource {
  account_sid: string;
  sid: string;
  date_created: Date;
  date_updated: Date;
  description: string;
  sink_sid: string;
  url: string;
  links: object;
}

export class SubscriptionInstance {
  protected _solution: SubscriptionContextSolution;
  protected _context?: SubscriptionContext;

  constructor(
    protected _version: V1,
    payload: SubscriptionResource,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.sid = payload.sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.description = payload.description;
    this.sinkSid = payload.sink_sid;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * Account SID.
   */
  accountSid: string;
  /**
   * A string that uniquely identifies this Subscription.
   */
  sid: string;
  /**
   * The date this Subscription was created
   */
  dateCreated: Date;
  /**
   * The date this Subscription was updated
   */
  dateUpdated: Date;
  /**
   * Subscription description
   */
  description: string;
  /**
   * Sink SID.
   */
  sinkSid: string;
  /**
   * The URL of this resource.
   */
  url: string;
  /**
   * Nested resource URLs.
   */
  links: object;

  private get _proxy(): SubscriptionContext {
    this._context =
      this._context ||
      new SubscriptionContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a SubscriptionInstance
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
   * Fetch a SubscriptionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SubscriptionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SubscriptionInstance) => any
  ): Promise<SubscriptionInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SubscriptionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SubscriptionInstance
   */
  update(
    callback?: (error: Error | null, item?: SubscriptionInstance) => any
  ): Promise<SubscriptionInstance>;
  /**
   * Update a SubscriptionInstance
   *
   * @param { SubscriptionContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SubscriptionInstance
   */
  update(
    params: SubscriptionContextUpdateOptions,
    callback?: (error: Error | null, item?: SubscriptionInstance) => any
  ): Promise<SubscriptionInstance>;
  update(params?: any, callback?: any): Promise<SubscriptionInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the subscribedEvents.
   */
  subscribedEvents(): SubscribedEventListInstance {
    return this._proxy.subscribedEvents;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      sid: this.sid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      description: this.description,
      sinkSid: this.sinkSid,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface SubscriptionSolution {}

export interface SubscriptionListInstance {
  _version: V1;
  _solution: SubscriptionSolution;
  _uri: string;

  (sid: string): SubscriptionContext;
  get(sid: string): SubscriptionContext;

  /**
   * Create a SubscriptionInstance
   *
   * @param { SubscriptionListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SubscriptionInstance
   */
  create(
    params: SubscriptionListInstanceCreateOptions,
    callback?: (error: Error | null, item?: SubscriptionInstance) => any
  ): Promise<SubscriptionInstance>;
  create(params: any, callback?: any): Promise<SubscriptionInstance>;

  /**
   * Streams SubscriptionInstance records from the API.
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
    callback?: (item: SubscriptionInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams SubscriptionInstance records from the API.
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
   * @param { SubscriptionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: SubscriptionListInstanceEachOptions,
    callback?: (item: SubscriptionInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of SubscriptionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: SubscriptionPage) => any
  ): Promise<SubscriptionPage>;
  /**
   * Retrieve a single target page of SubscriptionInstance records from the API.
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
    callback?: (error: Error | null, items: SubscriptionPage) => any
  ): Promise<SubscriptionPage>;
  getPage(params?: any, callback?: any): Promise<SubscriptionPage>;
  /**
   * Lists SubscriptionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: SubscriptionInstance[]) => any
  ): Promise<SubscriptionInstance[]>;
  /**
   * Lists SubscriptionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SubscriptionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: SubscriptionListInstanceOptions,
    callback?: (error: Error | null, items: SubscriptionInstance[]) => any
  ): Promise<SubscriptionInstance[]>;
  list(params?: any, callback?: any): Promise<SubscriptionInstance[]>;
  /**
   * Retrieve a single page of SubscriptionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: SubscriptionPage) => any
  ): Promise<SubscriptionPage>;
  /**
   * Retrieve a single page of SubscriptionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SubscriptionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: SubscriptionListInstancePageOptions,
    callback?: (error: Error | null, items: SubscriptionPage) => any
  ): Promise<SubscriptionPage>;
  page(params?: any, callback?: any): Promise<SubscriptionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SubscriptionListInstance(
  version: V1
): SubscriptionListInstance {
  const instance = ((sid) => instance.get(sid)) as SubscriptionListInstance;

  instance.get = function get(sid): SubscriptionContext {
    return new SubscriptionContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Subscriptions`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<SubscriptionInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["description"] === null || params["description"] === undefined) {
      throw new Error("Required parameter \"params['description']\" missing.");
    }

    if (params["sinkSid"] === null || params["sinkSid"] === undefined) {
      throw new Error("Required parameter \"params['sinkSid']\" missing.");
    }

    if (params["types"] === null || params["types"] === undefined) {
      throw new Error("Required parameter \"params['types']\" missing.");
    }

    let data: any = {};

    data["Description"] = params["description"];

    data["SinkSid"] = params["sinkSid"];

    data["Types"] = serialize.map(params["types"], (e) => serialize.object(e));

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new SubscriptionInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<SubscriptionPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["sinkSid"] !== undefined) data["SinkSid"] = params["sinkSid"];
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
      (payload) =>
        new SubscriptionPage(operationVersion, payload, instance._solution)
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
  ): Promise<SubscriptionPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new SubscriptionPage(instance._version, payload, instance._solution)
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

export class SubscriptionPage extends Page<
  V1,
  SubscriptionPayload,
  SubscriptionResource,
  SubscriptionInstance
> {
  /**
   * Initialize the SubscriptionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: SubscriptionSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SubscriptionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SubscriptionResource): SubscriptionInstance {
    return new SubscriptionInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
