/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import Sync from "../../../Sync";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

export type SyncListItemQueryFromBoundType = "inclusive" | "exclusive";

export type SyncListItemQueryResultOrder = "asc" | "desc";

/**
 * Options to pass to remove a SyncListItemInstance
 */
export interface SyncListItemContextRemoveOptions {
  /** The If-Match HTTP request header */
  ifMatch?: string;
}

/**
 * Options to pass to update a SyncListItemInstance
 */
export interface SyncListItemContextUpdateOptions {
  /**  */
  data: any;
  /** The If-Match HTTP request header */
  ifMatch?: string;
}

/**
 * Options to pass to create a SyncListItemInstance
 */
export interface SyncListItemListInstanceCreateOptions {
  /**  */
  data: any;
}
/**
 * Options to pass to each
 */
export interface SyncListItemListInstanceEachOptions {
  /**  */
  order?: SyncListItemQueryResultOrder;
  /**  */
  from?: string;
  /**  */
  bounds?: SyncListItemQueryFromBoundType;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: SyncListItemInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface SyncListItemListInstanceOptions {
  /**  */
  order?: SyncListItemQueryResultOrder;
  /**  */
  from?: string;
  /**  */
  bounds?: SyncListItemQueryFromBoundType;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface SyncListItemListInstancePageOptions {
  /**  */
  order?: SyncListItemQueryResultOrder;
  /**  */
  from?: string;
  /**  */
  bounds?: SyncListItemQueryFromBoundType;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface SyncListItemContext {
  /**
   * Remove a SyncListItemInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a SyncListItemInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncListItemInstance
   */
  remove(
    params: SyncListItemContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a SyncListItemInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncListItemInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SyncListItemInstance) => any
  ): Promise<SyncListItemInstance>;

  /**
   * Update a SyncListItemInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncListItemInstance
   */
  update(
    params: SyncListItemContextUpdateOptions,
    callback?: (error: Error | null, item?: SyncListItemInstance) => any
  ): Promise<SyncListItemInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SyncListItemContextSolution {
  serviceSid: string;
  listSid: string;
  index: number;
}

export class SyncListItemContextImpl implements SyncListItemContext {
  protected _solution: SyncListItemContextSolution;
  protected _uri: string;

  constructor(
    protected _version: Sync,
    serviceSid: string,
    listSid: string,
    index: number
  ) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(listSid)) {
      throw new Error("Parameter 'listSid' is not valid.");
    }

    if (!isValidPathParam(index)) {
      throw new Error("Parameter 'index' is not valid.");
    }

    this._solution = { serviceSid, listSid, index };
    this._uri = `/Services/${serviceSid}/Lists/${listSid}/Items/${index}`;
  }

  remove(
    params?:
      | SyncListItemContextRemoveOptions
      | ((error: Error | null, item?: boolean) => any),
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    const headers: any = {};
    if (params["ifMatch"] !== undefined)
      headers["If-Match"] = params["ifMatch"];

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
        params: data,
        headers,
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: SyncListItemInstance) => any
  ): Promise<SyncListItemInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SyncListItemInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.listSid,
          instance._solution.index
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params: SyncListItemContextUpdateOptions,
    callback?: (error: Error | null, item?: SyncListItemInstance) => any
  ): Promise<SyncListItemInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["data"] === null || params["data"] === undefined) {
      throw new Error("Required parameter \"params['data']\" missing.");
    }

    let data: any = {};

    data["Data"] = serialize.object(params["data"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";
    if (params["ifMatch"] !== undefined)
      headers["If-Match"] = params["ifMatch"];

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
        new SyncListItemInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.listSid,
          instance._solution.index
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

interface SyncListItemPayload extends TwilioResponsePayload {
  items: SyncListItemResource[];
}

interface SyncListItemResource {
  index: number;
  account_sid: string;
  service_sid: string;
  list_sid: string;
  url: string;
  revision: string;
  data: any;
  date_created: Date;
  date_updated: Date;
  created_by: string;
}

export class SyncListItemInstance {
  protected _solution: SyncListItemContextSolution;
  protected _context?: SyncListItemContext;

  constructor(
    protected _version: Sync,
    payload: SyncListItemResource,
    serviceSid: string,
    listSid: string,
    index?: number
  ) {
    this.index = deserialize.integer(payload.index);
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.listSid = payload.list_sid;
    this.url = payload.url;
    this.revision = payload.revision;
    this.data = payload.data;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.createdBy = payload.created_by;

    this._solution = { serviceSid, listSid, index: index || this.index };
  }

  index: number;
  accountSid: string;
  serviceSid: string;
  listSid: string;
  url: string;
  revision: string;
  data: any;
  dateCreated: Date;
  dateUpdated: Date;
  createdBy: string;

  private get _proxy(): SyncListItemContext {
    this._context =
      this._context ||
      new SyncListItemContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.listSid,
        this._solution.index
      );
    return this._context;
  }

  /**
   * Remove a SyncListItemInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a SyncListItemInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncListItemInstance
   */
  remove(
    params: SyncListItemContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  remove(
    params?: any,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(params, callback);
  }

  /**
   * Fetch a SyncListItemInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncListItemInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SyncListItemInstance) => any
  ): Promise<SyncListItemInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SyncListItemInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncListItemInstance
   */
  update(
    params: SyncListItemContextUpdateOptions,
    callback?: (error: Error | null, item?: SyncListItemInstance) => any
  ): Promise<SyncListItemInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: SyncListItemInstance) => any
  ): Promise<SyncListItemInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      index: this.index,
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      listSid: this.listSid,
      url: this.url,
      revision: this.revision,
      data: this.data,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      createdBy: this.createdBy,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface SyncListItemSolution {
  serviceSid: string;
  listSid: string;
}

export interface SyncListItemListInstance {
  _version: Sync;
  _solution: SyncListItemSolution;
  _uri: string;

  (index: number): SyncListItemContext;
  get(index: number): SyncListItemContext;

  /**
   * Create a SyncListItemInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncListItemInstance
   */
  create(
    params: SyncListItemListInstanceCreateOptions,
    callback?: (error: Error | null, item?: SyncListItemInstance) => any
  ): Promise<SyncListItemInstance>;

  /**
   * Streams SyncListItemInstance records from the API.
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
   * @param { SyncListItemListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: SyncListItemInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: SyncListItemListInstanceEachOptions,
    callback?: (item: SyncListItemInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of SyncListItemInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: SyncListItemPage) => any
  ): Promise<SyncListItemPage>;
  /**
   * Lists SyncListItemInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncListItemListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: SyncListItemInstance[]) => any
  ): Promise<SyncListItemInstance[]>;
  list(
    params: SyncListItemListInstanceOptions,
    callback?: (error: Error | null, items: SyncListItemInstance[]) => any
  ): Promise<SyncListItemInstance[]>;
  /**
   * Retrieve a single page of SyncListItemInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncListItemListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: SyncListItemPage) => any
  ): Promise<SyncListItemPage>;
  page(
    params: SyncListItemListInstancePageOptions,
    callback?: (error: Error | null, items: SyncListItemPage) => any
  ): Promise<SyncListItemPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SyncListItemListInstance(
  version: Sync,
  serviceSid: string,
  listSid: string
): SyncListItemListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  if (!isValidPathParam(listSid)) {
    throw new Error("Parameter 'listSid' is not valid.");
  }

  const instance = ((index) => instance.get(index)) as SyncListItemListInstance;

  instance.get = function get(index): SyncListItemContext {
    return new SyncListItemContextImpl(version, serviceSid, listSid, index);
  };

  instance._version = version;
  instance._solution = { serviceSid, listSid };
  instance._uri = `/Services/${serviceSid}/Lists/${listSid}/Items`;

  instance.create = function create(
    params: SyncListItemListInstanceCreateOptions,
    callback?: (error: Error | null, items: SyncListItemInstance) => any
  ): Promise<SyncListItemInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["data"] === null || params["data"] === undefined) {
      throw new Error("Required parameter \"params['data']\" missing.");
    }

    let data: any = {};

    data["Data"] = serialize.object(params["data"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SyncListItemInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.listSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | SyncListItemListInstancePageOptions
      | ((error: Error | null, items: SyncListItemPage) => any),
    callback?: (error: Error | null, items: SyncListItemPage) => any
  ): Promise<SyncListItemPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["order"] !== undefined) data["Order"] = params["order"];
    if (params["from"] !== undefined) data["From"] = params["from"];
    if (params["bounds"] !== undefined) data["Bounds"] = params["bounds"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SyncListItemPage(operationVersion, payload, instance._solution)
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
    targetUrl: string,
    callback?: (error: Error | null, items: SyncListItemPage) => any
  ): Promise<SyncListItemPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new SyncListItemPage(instance._version, payload, instance._solution)
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

export class SyncListItemPage extends Page<
  Sync,
  SyncListItemPayload,
  SyncListItemResource,
  SyncListItemInstance
> {
  /**
   * Initialize the SyncListItemPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: Sync,
    response: Response<string>,
    solution: SyncListItemSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SyncListItemInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncListItemResource): SyncListItemInstance {
    return new SyncListItemInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.listSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
