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
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { SyncListItemListInstance } from "./syncList/syncListItem";
import { SyncListPermissionListInstance } from "./syncList/syncListPermission";

/**
 * Options to pass to update a SyncListInstance
 */
export interface SyncListContextUpdateOptions {
  /** An alias for `collection_ttl`. If both are provided, this value is ignored. */
  ttl?: number;
  /** How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Sync List expires (time-to-live) and is deleted. */
  collectionTtl?: number;
}

/**
 * Options to pass to create a SyncListInstance
 */
export interface SyncListListInstanceCreateOptions {
  /** An application-defined string that uniquely identifies the resource. This value must be unique within its Service and it can be up to 320 characters long. The `unique_name` value can be used as an alternative to the `sid` in the URL path to address the resource. */
  uniqueName?: string;
  /** Alias for collection_ttl. If both are provided, this value is ignored. */
  ttl?: number;
  /** How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Sync List expires (time-to-live) and is deleted. */
  collectionTtl?: number;
}
/**
 * Options to pass to each
 */
export interface SyncListListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: SyncListInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface SyncListListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface SyncListListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface SyncListContext {
  syncListItems: SyncListItemListInstance;
  syncListPermissions: SyncListPermissionListInstance;

  /**
   * Remove a SyncListInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a SyncListInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncListInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SyncListInstance) => any
  ): Promise<SyncListInstance>;

  /**
   * Update a SyncListInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncListInstance
   */
  update(
    callback?: (error: Error | null, item?: SyncListInstance) => any
  ): Promise<SyncListInstance>;
  /**
   * Update a SyncListInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncListInstance
   */
  update(
    params: SyncListContextUpdateOptions,
    callback?: (error: Error | null, item?: SyncListInstance) => any
  ): Promise<SyncListInstance>;
  update(params?: any, callback?: any): Promise<SyncListInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SyncListContextSolution {
  serviceSid: string;
  sid: string;
}

export class SyncListContextImpl implements SyncListContext {
  protected _solution: SyncListContextSolution;
  protected _uri: string;

  protected _syncListItems?: SyncListItemListInstance;
  protected _syncListPermissions?: SyncListPermissionListInstance;

  constructor(protected _version: V1, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Lists/${sid}`;
  }

  get syncListItems(): SyncListItemListInstance {
    this._syncListItems =
      this._syncListItems ||
      SyncListItemListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._syncListItems;
  }

  get syncListPermissions(): SyncListPermissionListInstance {
    this._syncListPermissions =
      this._syncListPermissions ||
      SyncListPermissionListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._syncListPermissions;
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

  fetch(callback?: any): Promise<SyncListInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SyncListInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<SyncListInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["ttl"] !== undefined) data["Ttl"] = params["ttl"];
    if (params["collectionTtl"] !== undefined)
      data["CollectionTtl"] = params["collectionTtl"];

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
        new SyncListInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
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

interface SyncListPayload extends TwilioResponsePayload {
  lists: SyncListResource[];
}

interface SyncListResource {
  sid: string;
  unique_name: string;
  account_sid: string;
  service_sid: string;
  url: string;
  links: object;
  revision: string;
  date_expires: Date;
  date_created: Date;
  date_updated: Date;
  created_by: string;
}

export class SyncListInstance {
  protected _solution: SyncListContextSolution;
  protected _context?: SyncListContext;

  constructor(
    protected _version: V1,
    payload: SyncListResource,
    serviceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.url = payload.url;
    this.links = payload.links;
    this.revision = payload.revision;
    this.dateExpires = deserialize.iso8601DateTime(payload.date_expires);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.createdBy = payload.created_by;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * An application-defined string that uniquely identifies the resource
   */
  uniqueName: string;
  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  /**
   * The SID of the Sync Service that the resource is associated with
   */
  serviceSid: string;
  /**
   * The absolute URL of the Sync List resource
   */
  url: string;
  /**
   * The URLs of the Sync List\'s nested resources
   */
  links: object;
  /**
   * The current revision of the Sync List, represented as a string
   */
  revision: string;
  /**
   * The ISO 8601 date and time in GMT when the Sync List expires
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
   * The identity of the Sync List\'s creator
   */
  createdBy: string;

  private get _proxy(): SyncListContext {
    this._context =
      this._context ||
      new SyncListContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a SyncListInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a SyncListInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncListInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SyncListInstance) => any
  ): Promise<SyncListInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SyncListInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncListInstance
   */
  update(
    callback?: (error: Error | null, item?: SyncListInstance) => any
  ): Promise<SyncListInstance>;
  /**
   * Update a SyncListInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncListInstance
   */
  update(
    params: SyncListContextUpdateOptions,
    callback?: (error: Error | null, item?: SyncListInstance) => any
  ): Promise<SyncListInstance>;
  update(params?: any, callback?: any): Promise<SyncListInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the syncListItems.
   */
  syncListItems(): SyncListItemListInstance {
    return this._proxy.syncListItems;
  }

  /**
   * Access the syncListPermissions.
   */
  syncListPermissions(): SyncListPermissionListInstance {
    return this._proxy.syncListPermissions;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      uniqueName: this.uniqueName,
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      url: this.url,
      links: this.links,
      revision: this.revision,
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

export interface SyncListSolution {
  serviceSid: string;
}

export interface SyncListListInstance {
  _version: V1;
  _solution: SyncListSolution;
  _uri: string;

  (sid: string): SyncListContext;
  get(sid: string): SyncListContext;

  /**
   * Create a SyncListInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncListInstance
   */
  create(
    callback?: (error: Error | null, item?: SyncListInstance) => any
  ): Promise<SyncListInstance>;
  /**
   * Create a SyncListInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncListInstance
   */
  create(
    params: SyncListListInstanceCreateOptions,
    callback?: (error: Error | null, item?: SyncListInstance) => any
  ): Promise<SyncListInstance>;
  create(params?: any, callback?: any): Promise<SyncListInstance>;

  /**
   * Streams SyncListInstance records from the API.
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
    callback?: (item: SyncListInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams SyncListInstance records from the API.
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
   * @param { SyncListListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: SyncListListInstanceEachOptions,
    callback?: (item: SyncListInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of SyncListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: SyncListPage) => any
  ): Promise<SyncListPage>;
  /**
   * Retrieve a single target page of SyncListInstance records from the API.
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
    callback?: (error: Error | null, items: SyncListPage) => any
  ): Promise<SyncListPage>;
  getPage(params?: any, callback?: any): Promise<SyncListPage>;
  /**
   * Lists SyncListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: SyncListInstance[]) => any
  ): Promise<SyncListInstance[]>;
  /**
   * Lists SyncListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncListListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: SyncListListInstanceOptions,
    callback?: (error: Error | null, items: SyncListInstance[]) => any
  ): Promise<SyncListInstance[]>;
  list(params?: any, callback?: any): Promise<SyncListInstance[]>;
  /**
   * Retrieve a single page of SyncListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: SyncListPage) => any
  ): Promise<SyncListPage>;
  /**
   * Retrieve a single page of SyncListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncListListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: SyncListListInstancePageOptions,
    callback?: (error: Error | null, items: SyncListPage) => any
  ): Promise<SyncListPage>;
  page(params?: any, callback?: any): Promise<SyncListPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SyncListListInstance(
  version: V1,
  serviceSid: string
): SyncListListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as SyncListListInstance;

  instance.get = function get(sid): SyncListContext {
    return new SyncListContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Lists`;

  instance.create = function create(
    params?: any,
    callback?: any
  ): Promise<SyncListInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["ttl"] !== undefined) data["Ttl"] = params["ttl"];
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
        new SyncListInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid
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
  ): Promise<SyncListPage> {
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
        new SyncListPage(operationVersion, payload, instance._solution)
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
  ): Promise<SyncListPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new SyncListPage(instance._version, payload, instance._solution)
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

export class SyncListPage extends Page<
  V1,
  SyncListPayload,
  SyncListResource,
  SyncListInstance
> {
  /**
   * Initialize the SyncListPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: SyncListSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SyncListInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncListResource): SyncListInstance {
    return new SyncListInstance(
      this._version,
      payload,
      this._solution.serviceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
