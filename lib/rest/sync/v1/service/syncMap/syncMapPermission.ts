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

/**
 * Options to pass to update a SyncMapPermissionInstance
 *
 * @property { boolean } read Whether the identity can read the Sync Map and its Items. Default value is `false`.
 * @property { boolean } write Whether the identity can create, update, and delete Items in the Sync Map. Default value is `false`.
 * @property { boolean } manage Whether the identity can delete the Sync Map. Default value is `false`.
 */
export interface SyncMapPermissionContextUpdateOptions {
  read: boolean;
  write: boolean;
  manage: boolean;
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
export interface SyncMapPermissionListInstanceEachOptions {
  pageSize?: number;
  callback?: (
    item: SyncMapPermissionInstance,
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
export interface SyncMapPermissionListInstanceOptions {
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
export interface SyncMapPermissionListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface SyncMapPermissionContext {
  /**
   * Remove a SyncMapPermissionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a SyncMapPermissionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncMapPermissionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SyncMapPermissionInstance) => any
  ): Promise<SyncMapPermissionInstance>;

  /**
   * Update a SyncMapPermissionInstance
   *
   * @param { SyncMapPermissionContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncMapPermissionInstance
   */
  update(
    params: SyncMapPermissionContextUpdateOptions,
    callback?: (error: Error | null, item?: SyncMapPermissionInstance) => any
  ): Promise<SyncMapPermissionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SyncMapPermissionContextSolution {
  serviceSid?: string;
  mapSid?: string;
  identity?: string;
}

export class SyncMapPermissionContextImpl implements SyncMapPermissionContext {
  protected _solution: SyncMapPermissionContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    serviceSid: string,
    mapSid: string,
    identity: string
  ) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(mapSid)) {
      throw new Error("Parameter 'mapSid' is not valid.");
    }

    if (!isValidPathParam(identity)) {
      throw new Error("Parameter 'identity' is not valid.");
    }

    this._solution = { serviceSid, mapSid, identity };
    this._uri = `/Services/${serviceSid}/Maps/${mapSid}/Permissions/${identity}`;
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

  fetch(callback?: any): Promise<SyncMapPermissionInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SyncMapPermissionInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.mapSid,
          this._solution.identity
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params: any, callback?: any): Promise<SyncMapPermissionInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["read"] === null || params["read"] === undefined) {
      throw new Error("Required parameter \"params['read']\" missing.");
    }

    if (params["write"] === null || params["write"] === undefined) {
      throw new Error("Required parameter \"params['write']\" missing.");
    }

    if (params["manage"] === null || params["manage"] === undefined) {
      throw new Error("Required parameter \"params['manage']\" missing.");
    }

    let data: any = {};

    data["Read"] = serialize.bool(params["read"]);

    data["Write"] = serialize.bool(params["write"]);

    data["Manage"] = serialize.bool(params["manage"]);

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
        new SyncMapPermissionInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.mapSid,
          this._solution.identity
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

interface SyncMapPermissionPayload extends TwilioResponsePayload {
  permissions: SyncMapPermissionResource[];
}

interface SyncMapPermissionResource {
  account_sid?: string | null;
  service_sid?: string | null;
  map_sid?: string | null;
  identity?: string | null;
  read?: boolean | null;
  write?: boolean | null;
  manage?: boolean | null;
  url?: string | null;
}

export class SyncMapPermissionInstance {
  protected _solution: SyncMapPermissionContextSolution;
  protected _context?: SyncMapPermissionContext;

  constructor(
    protected _version: V1,
    payload: SyncMapPermissionResource,
    serviceSid: string,
    mapSid: string,
    identity?: string
  ) {
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.mapSid = payload.map_sid;
    this.identity = payload.identity;
    this.read = payload.read;
    this.write = payload.write;
    this.manage = payload.manage;
    this.url = payload.url;

    this._solution = {
      serviceSid,
      mapSid,
      identity: identity || this.identity,
    };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Sync Service that the resource is associated with
   */
  serviceSid?: string | null;
  /**
   * Sync Map SID
   */
  mapSid?: string | null;
  /**
   * The identity of the user to whom the Sync Document Permission applies
   */
  identity?: string | null;
  /**
   * Read access
   */
  read?: boolean | null;
  /**
   * Write access
   */
  write?: boolean | null;
  /**
   * Manage access
   */
  manage?: boolean | null;
  /**
   * The absolute URL of the Sync Map Permission resource
   */
  url?: string | null;

  private get _proxy(): SyncMapPermissionContext {
    this._context =
      this._context ||
      new SyncMapPermissionContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.mapSid,
        this._solution.identity
      );
    return this._context;
  }

  /**
   * Remove a SyncMapPermissionInstance
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
   * Fetch a SyncMapPermissionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncMapPermissionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SyncMapPermissionInstance) => any
  ): Promise<SyncMapPermissionInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SyncMapPermissionInstance
   *
   * @param { SyncMapPermissionContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncMapPermissionInstance
   */
  update(
    params: SyncMapPermissionContextUpdateOptions,
    callback?: (error: Error | null, item?: SyncMapPermissionInstance) => any
  ): Promise<SyncMapPermissionInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      mapSid: this.mapSid,
      identity: this.identity,
      read: this.read,
      write: this.write,
      manage: this.manage,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface SyncMapPermissionListInstance {
  (identity: string): SyncMapPermissionContext;
  get(identity: string): SyncMapPermissionContext;

  /**
   * Streams SyncMapPermissionInstance records from the API.
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
   * @param { SyncMapPermissionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | SyncMapPermissionListInstanceEachOptions
      | ((
          item: SyncMapPermissionInstance,
          done: (err?: Error) => void
        ) => void),
    callback?: (
      item: SyncMapPermissionInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of SyncMapPermissionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: SyncMapPermissionPage) => any
  ): Promise<SyncMapPermissionPage>;
  /**
   * Lists SyncMapPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncMapPermissionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | SyncMapPermissionListInstanceOptions
      | ((error: Error | null, items: SyncMapPermissionInstance[]) => any),
    callback?: (error: Error | null, items: SyncMapPermissionInstance[]) => any
  ): Promise<SyncMapPermissionInstance[]>;
  /**
   * Retrieve a single page of SyncMapPermissionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncMapPermissionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | SyncMapPermissionListInstancePageOptions
      | ((error: Error | null, items: SyncMapPermissionPage) => any),
    callback?: (error: Error | null, items: SyncMapPermissionPage) => any
  ): Promise<SyncMapPermissionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SyncMapPermissionSolution {
  serviceSid?: string;
  mapSid?: string;
}

interface SyncMapPermissionListInstanceImpl
  extends SyncMapPermissionListInstance {}
class SyncMapPermissionListInstanceImpl
  implements SyncMapPermissionListInstance
{
  _version?: V1;
  _solution?: SyncMapPermissionSolution;
  _uri?: string;
}

export function SyncMapPermissionListInstance(
  version: V1,
  serviceSid: string,
  mapSid: string
): SyncMapPermissionListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  if (!isValidPathParam(mapSid)) {
    throw new Error("Parameter 'mapSid' is not valid.");
  }

  const instance = ((identity) =>
    instance.get(identity)) as SyncMapPermissionListInstanceImpl;

  instance.get = function get(identity): SyncMapPermissionContext {
    return new SyncMapPermissionContextImpl(
      version,
      serviceSid,
      mapSid,
      identity
    );
  };

  instance._version = version;
  instance._solution = { serviceSid, mapSid };
  instance._uri = `/Services/${serviceSid}/Maps/${mapSid}/Permissions`;

  instance.page = function page(
    params?:
      | SyncMapPermissionListInstancePageOptions
      | ((error: Error | null, item?: SyncMapPermissionPage) => any),
    callback?: (error: Error | null, item?: SyncMapPermissionPage) => any
  ): Promise<SyncMapPermissionPage> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: SyncMapPermissionPage
      ) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

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
      (payload) =>
        new SyncMapPermissionPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: SyncMapPermissionPage) => any
  ): Promise<SyncMapPermissionPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new SyncMapPermissionPage(this._version, payload, this._solution)
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

export class SyncMapPermissionPage extends Page<
  V1,
  SyncMapPermissionPayload,
  SyncMapPermissionResource,
  SyncMapPermissionInstance
> {
  /**
   * Initialize the SyncMapPermissionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: SyncMapPermissionSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SyncMapPermissionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncMapPermissionResource): SyncMapPermissionInstance {
    return new SyncMapPermissionInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.mapSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
