/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Sync
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

type SyncListItemQueryFromBoundType = "inclusive" | "exclusive";

type SyncListItemQueryResultOrder = "asc" | "desc";

/**
 * Options to pass to remove a SyncListItemInstance
 */
export interface SyncListItemContextRemoveOptions {
  /** If provided, applies this mutation if (and only if) the “revision” field of this [map item] matches the provided value. This matches the semantics of (and is implemented with) the HTTP [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match). */
  ifMatch?: string;
}

/**
 * Options to pass to update a SyncListItemInstance
 */
export interface SyncListItemContextUpdateOptions {
  /** If provided, applies this mutation if (and only if) the “revision” field of this [map item] matches the provided value. This matches the semantics of (and is implemented with) the HTTP [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match). */
  ifMatch?: string;
  /** A JSON string that represents an arbitrary, schema-less object that the List Item stores. Can be up to 16 KiB in length. */
  data?: any;
  /** An alias for `item_ttl`. If both parameters are provided, this value is ignored. */
  ttl?: number;
  /** How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the List Item expires (time-to-live) and is deleted. */
  itemTtl?: number;
  /** How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the List Item\\\'s parent Sync List expires (time-to-live) and is deleted. This parameter can only be used when the List Item\\\'s `data` or `ttl` is updated in the same request. */
  collectionTtl?: number;
}

/**
 * Options to pass to create a SyncListItemInstance
 */
export interface SyncListItemListInstanceCreateOptions {
  /** A JSON string that represents an arbitrary, schema-less object that the List Item stores. Can be up to 16 KiB in length. */
  data: any;
  /** An alias for `item_ttl`. If both parameters are provided, this value is ignored. */
  ttl?: number;
  /** How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the List Item expires (time-to-live) and is deleted. */
  itemTtl?: number;
  /** How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the List Item\\\'s parent Sync List expires (time-to-live) and is deleted. */
  collectionTtl?: number;
}
/**
 * Options to pass to each
 */
export interface SyncListItemListInstanceEachOptions {
  /** How to order the List Items returned by their `index` value. Can be: `asc` (ascending) or `desc` (descending) and the default is ascending. */
  order?: SyncListItemQueryResultOrder;
  /** The `index` of the first Sync List Item resource to read. See also `bounds`. */
  from?: string;
  /** Whether to include the List Item referenced by the `from` parameter. Can be: `inclusive` to include the List Item referenced by the `from` parameter or `exclusive` to start with the next List Item. The default value is `inclusive`. */
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
  /** How to order the List Items returned by their `index` value. Can be: `asc` (ascending) or `desc` (descending) and the default is ascending. */
  order?: SyncListItemQueryResultOrder;
  /** The `index` of the first Sync List Item resource to read. See also `bounds`. */
  from?: string;
  /** Whether to include the List Item referenced by the `from` parameter. Can be: `inclusive` to include the List Item referenced by the `from` parameter or `exclusive` to start with the next List Item. The default value is `inclusive`. */
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
  /** How to order the List Items returned by their `index` value. Can be: `asc` (ascending) or `desc` (descending) and the default is ascending. */
  order?: SyncListItemQueryResultOrder;
  /** The `index` of the first Sync List Item resource to read. See also `bounds`. */
  from?: string;
  /** Whether to include the List Item referenced by the `from` parameter. Can be: `inclusive` to include the List Item referenced by the `from` parameter or `exclusive` to start with the next List Item. The default value is `inclusive`. */
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
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncListItemInstance
   */
  update(
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
    protected _version: V1,
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
    if (typeof params === "function") {
      callback = params as (error: Error | null, item?: boolean) => any;
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
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
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
    params?:
      | SyncListItemContextUpdateOptions
      | ((error: Error | null, item?: SyncListItemInstance) => any),
    callback?: (error: Error | null, item?: SyncListItemInstance) => any
  ): Promise<SyncListItemInstance> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: SyncListItemInstance
      ) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["data"] !== undefined)
      data["Data"] = serialize.object(params["data"]);
    if (params["ttl"] !== undefined) data["Ttl"] = params["ttl"];
    if (params["itemTtl"] !== undefined) data["ItemTtl"] = params["itemTtl"];
    if (params["collectionTtl"] !== undefined)
      data["CollectionTtl"] = params["collectionTtl"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
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
  date_expires: Date;
  date_created: Date;
  date_updated: Date;
  created_by: string;
}

export class SyncListItemInstance {
  protected _solution: SyncListItemContextSolution;
  protected _context?: SyncListItemContext;

  constructor(
    protected _version: V1,
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
    this.dateExpires = deserialize.iso8601DateTime(payload.date_expires);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.createdBy = payload.created_by;

    this._solution = { serviceSid, listSid, index: index || this.index };
  }

  /**
   * The automatically generated index of the List Item
   */
  index: number;
  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  /**
   * The SID of the Sync Service that the resource is associated with
   */
  serviceSid: string;
  /**
   * The SID of the Sync List that contains the List Item
   */
  listSid: string;
  /**
   * The absolute URL of the List Item resource
   */
  url: string;
  /**
   * The current revision of the item, represented as a string
   */
  revision: string;
  /**
   * An arbitrary, schema-less object that the List Item stores
   */
  data: any;
  /**
   * The ISO 8601 date and time in GMT when the List Item expires
   */
  dateExpires: Date;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated: Date;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated: Date;
  /**
   * The identity of the List Item\'s creator
   */
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
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncListItemInstance
   */
  update(
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
      dateExpires: this.dateExpires,
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
  _version: V1;
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
  version: V1,
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
    if (params["ttl"] !== undefined) data["Ttl"] = params["ttl"];
    if (params["itemTtl"] !== undefined) data["ItemTtl"] = params["itemTtl"];
    if (params["collectionTtl"] !== undefined)
      data["CollectionTtl"] = params["collectionTtl"];

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
      | ((error: Error | null, item?: SyncListItemPage) => any),
    callback?: (error: Error | null, item?: SyncListItemPage) => any
  ): Promise<SyncListItemPage> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: SyncListItemPage
      ) => any;
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
  V1,
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
    version: V1,
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
