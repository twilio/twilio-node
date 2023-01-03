/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Numbers
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * Options to pass to create a ItemAssignmentInstance
 *
 * @property { string } objectSid The SID of an object bag that holds information of the different items.
 */
export interface ItemAssignmentListInstanceCreateOptions {
  objectSid: string;
}
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
export interface ItemAssignmentListInstanceEachOptions {
  pageSize?: number;
  callback?: (
    item: ItemAssignmentInstance,
    done: (err?: Error) => void
  ) => void;
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
export interface ItemAssignmentListInstanceOptions {
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
export interface ItemAssignmentListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface ItemAssignmentContext {
  /**
   * Remove a ItemAssignmentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a ItemAssignmentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ItemAssignmentInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ItemAssignmentInstance) => any
  ): Promise<ItemAssignmentInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ItemAssignmentContextSolution {
  bundleSid: string;
  sid: string;
}

export class ItemAssignmentContextImpl implements ItemAssignmentContext {
  protected _solution: ItemAssignmentContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, bundleSid: string, sid: string) {
    if (!isValidPathParam(bundleSid)) {
      throw new Error("Parameter 'bundleSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { bundleSid, sid };
    this._uri = `/RegulatoryCompliance/Bundles/${bundleSid}/ItemAssignments/${sid}`;
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

  fetch(callback?: any): Promise<ItemAssignmentInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ItemAssignmentInstance(
          operationVersion,
          payload,
          instance._solution.bundleSid,
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

interface ItemAssignmentPayload extends TwilioResponsePayload {
  results: ItemAssignmentResource[];
}

interface ItemAssignmentResource {
  sid?: string | null;
  bundle_sid?: string | null;
  account_sid?: string | null;
  object_sid?: string | null;
  date_created?: Date | null;
  url?: string | null;
}

export class ItemAssignmentInstance {
  protected _solution: ItemAssignmentContextSolution;
  protected _context?: ItemAssignmentContext;

  constructor(
    protected _version: V2,
    payload: ItemAssignmentResource,
    bundleSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.bundleSid = payload.bundle_sid;
    this.accountSid = payload.account_sid;
    this.objectSid = payload.object_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.url = payload.url;

    this._solution = { bundleSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The unique string that identifies the Bundle resource.
   */
  bundleSid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The sid of an object bag
   */
  objectSid?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The absolute URL of the Identity resource
   */
  url?: string | null;

  private get _proxy(): ItemAssignmentContext {
    this._context =
      this._context ||
      new ItemAssignmentContextImpl(
        this._version,
        this._solution.bundleSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a ItemAssignmentInstance
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
   * Fetch a ItemAssignmentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ItemAssignmentInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ItemAssignmentInstance) => any
  ): Promise<ItemAssignmentInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      bundleSid: this.bundleSid,
      accountSid: this.accountSid,
      objectSid: this.objectSid,
      dateCreated: this.dateCreated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ItemAssignmentSolution {
  bundleSid?: string;
}

export interface ItemAssignmentListInstance {
  _version: V2;
  _solution: ItemAssignmentSolution;
  _uri: string;

  (sid: string): ItemAssignmentContext;
  get(sid: string): ItemAssignmentContext;

  /**
   * Create a ItemAssignmentInstance
   *
   * @param { ItemAssignmentListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ItemAssignmentInstance
   */
  create(
    params: ItemAssignmentListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ItemAssignmentInstance) => any
  ): Promise<ItemAssignmentInstance>;
  create(params: any, callback?: any): Promise<ItemAssignmentInstance>;

  /**
   * Streams ItemAssignmentInstance records from the API.
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
    callback?: (
      item: ItemAssignmentInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Streams ItemAssignmentInstance records from the API.
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
   * @param { ItemAssignmentListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: ItemAssignmentListInstanceEachOptions,
    callback?: (
      item: ItemAssignmentInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ItemAssignmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: ItemAssignmentPage) => any
  ): Promise<ItemAssignmentPage>;
  /**
   * Retrieve a single target page of ItemAssignmentInstance records from the API.
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
    callback?: (error: Error | null, items: ItemAssignmentPage) => any
  ): Promise<ItemAssignmentPage>;
  getPage(params?: any, callback?: any): Promise<ItemAssignmentPage>;
  /**
   * Lists ItemAssignmentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ItemAssignmentInstance[]) => any
  ): Promise<ItemAssignmentInstance[]>;
  /**
   * Lists ItemAssignmentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ItemAssignmentListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: ItemAssignmentListInstanceOptions,
    callback?: (error: Error | null, items: ItemAssignmentInstance[]) => any
  ): Promise<ItemAssignmentInstance[]>;
  list(params?: any, callback?: any): Promise<ItemAssignmentInstance[]>;
  /**
   * Retrieve a single page of ItemAssignmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ItemAssignmentPage) => any
  ): Promise<ItemAssignmentPage>;
  /**
   * Retrieve a single page of ItemAssignmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ItemAssignmentListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: ItemAssignmentListInstancePageOptions,
    callback?: (error: Error | null, items: ItemAssignmentPage) => any
  ): Promise<ItemAssignmentPage>;
  page(params?: any, callback?: any): Promise<ItemAssignmentPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ItemAssignmentListInstance(
  version: V2,
  bundleSid: string
): ItemAssignmentListInstance {
  if (!isValidPathParam(bundleSid)) {
    throw new Error("Parameter 'bundleSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as ItemAssignmentListInstance;

  instance.get = function get(sid): ItemAssignmentContext {
    return new ItemAssignmentContextImpl(version, bundleSid, sid);
  };

  instance._version = version;
  instance._solution = { bundleSid };
  instance._uri = `/RegulatoryCompliance/Bundles/${bundleSid}/ItemAssignments`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<ItemAssignmentInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["objectSid"] === null || params["objectSid"] === undefined) {
      throw new Error("Required parameter \"params['objectSid']\" missing.");
    }

    let data: any = {};

    data["ObjectSid"] = params["objectSid"];

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
      (payload) =>
        new ItemAssignmentInstance(
          operationVersion,
          payload,
          instance._solution.bundleSid
        )
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
  ): Promise<ItemAssignmentPage> {
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
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ItemAssignmentPage(operationVersion, payload, instance._solution)
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
  ): Promise<ItemAssignmentPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new ItemAssignmentPage(instance._version, payload, instance._solution)
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

export class ItemAssignmentPage extends Page<
  V2,
  ItemAssignmentPayload,
  ItemAssignmentResource,
  ItemAssignmentInstance
> {
  /**
   * Initialize the ItemAssignmentPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: ItemAssignmentSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ItemAssignmentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ItemAssignmentResource): ItemAssignmentInstance {
    return new ItemAssignmentInstance(
      this._version,
      payload,
      this._solution.bundleSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
