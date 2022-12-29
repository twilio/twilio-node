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

/**
 * Options to pass to update a SyncListPermissionInstance
 *
 * @property { boolean } read Boolean flag specifying whether the identity can read the Sync List.
 * @property { boolean } write Boolean flag specifying whether the identity can create, update and delete Items of the Sync List.
 * @property { boolean } manage Boolean flag specifying whether the identity can delete the Sync List.
 */
export interface SyncListPermissionContextUpdateOptions {
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
export interface SyncListPermissionListInstanceEachOptions {
  pageSize?: number;
  callback?: (
    item: SyncListPermissionInstance,
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
export interface SyncListPermissionListInstanceOptions {
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
export interface SyncListPermissionListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface SyncListPermissionContext {
  /**
   * Remove a SyncListPermissionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a SyncListPermissionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncListPermissionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SyncListPermissionInstance) => any
  ): Promise<SyncListPermissionInstance>;

  /**
   * Update a SyncListPermissionInstance
   *
   * @param { SyncListPermissionContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncListPermissionInstance
   */
  update(
    params: SyncListPermissionContextUpdateOptions,
    callback?: (error: Error | null, item?: SyncListPermissionInstance) => any
  ): Promise<SyncListPermissionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SyncListPermissionContextSolution {
  serviceSid?: string;
  listSid?: string;
  identity?: string;
}

export class SyncListPermissionContextImpl
  implements SyncListPermissionContext
{
  protected _solution: SyncListPermissionContextSolution;
  protected _uri: string;

  constructor(
    protected _version: Sync,
    serviceSid: string,
    listSid: string,
    identity: string
  ) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(listSid)) {
      throw new Error("Parameter 'listSid' is not valid.");
    }

    if (!isValidPathParam(identity)) {
      throw new Error("Parameter 'identity' is not valid.");
    }

    this._solution = { serviceSid, listSid, identity };
    this._uri = `/Services/${serviceSid}/Lists/${listSid}/Permissions/${identity}`;
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

  fetch(callback?: any): Promise<SyncListPermissionInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SyncListPermissionInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.listSid,
          this._solution.identity
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params: any, callback?: any): Promise<SyncListPermissionInstance> {
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
        new SyncListPermissionInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.listSid,
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

interface SyncListPermissionPayload extends TwilioResponsePayload {
  permissions: SyncListPermissionResource[];
}

interface SyncListPermissionResource {
  account_sid?: string | null;
  service_sid?: string | null;
  list_sid?: string | null;
  identity?: string | null;
  read?: boolean | null;
  write?: boolean | null;
  manage?: boolean | null;
  url?: string | null;
}

export class SyncListPermissionInstance {
  protected _solution: SyncListPermissionContextSolution;
  protected _context?: SyncListPermissionContext;

  constructor(
    protected _version: Sync,
    payload: SyncListPermissionResource,
    serviceSid: string,
    listSid: string,
    identity?: string
  ) {
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.listSid = payload.list_sid;
    this.identity = payload.identity;
    this.read = payload.read;
    this.write = payload.write;
    this.manage = payload.manage;
    this.url = payload.url;

    this._solution = {
      serviceSid,
      listSid,
      identity: identity || this.identity,
    };
  }

  /**
   * Twilio Account SID.
   */
  accountSid?: string | null;
  /**
   * Sync Service Instance SID.
   */
  serviceSid?: string | null;
  /**
   * Sync List SID.
   */
  listSid?: string | null;
  /**
   * Identity of the user to whom the Sync List Permission applies.
   */
  identity?: string | null;
  /**
   * Read access.
   */
  read?: boolean | null;
  /**
   * Write access.
   */
  write?: boolean | null;
  /**
   * Manage access.
   */
  manage?: boolean | null;
  /**
   * URL of this Sync List Permission.
   */
  url?: string | null;

  private get _proxy(): SyncListPermissionContext {
    this._context =
      this._context ||
      new SyncListPermissionContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.listSid,
        this._solution.identity
      );
    return this._context;
  }

  /**
   * Remove a SyncListPermissionInstance
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
   * Fetch a SyncListPermissionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncListPermissionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SyncListPermissionInstance) => any
  ): Promise<SyncListPermissionInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SyncListPermissionInstance
   *
   * @param { SyncListPermissionContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncListPermissionInstance
   */
  update(
    params: SyncListPermissionContextUpdateOptions,
    callback?: (error: Error | null, item?: SyncListPermissionInstance) => any
  ): Promise<SyncListPermissionInstance> {
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
      listSid: this.listSid,
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

export interface SyncListPermissionListInstance {
  (identity: string): SyncListPermissionContext;
  get(identity: string): SyncListPermissionContext;

  /**
   * Streams SyncListPermissionInstance records from the API.
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
   * @param { SyncListPermissionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | SyncListPermissionListInstanceEachOptions
      | ((
          item: SyncListPermissionInstance,
          done: (err?: Error) => void
        ) => void),
    callback?: (
      item: SyncListPermissionInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of SyncListPermissionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: SyncListPermissionPage) => any
  ): Promise<SyncListPermissionPage>;
  /**
   * Lists SyncListPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncListPermissionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | SyncListPermissionListInstanceOptions
      | ((error: Error | null, items: SyncListPermissionInstance[]) => any),
    callback?: (error: Error | null, items: SyncListPermissionInstance[]) => any
  ): Promise<SyncListPermissionInstance[]>;
  /**
   * Retrieve a single page of SyncListPermissionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncListPermissionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | SyncListPermissionListInstancePageOptions
      | ((error: Error | null, items: SyncListPermissionPage) => any),
    callback?: (error: Error | null, items: SyncListPermissionPage) => any
  ): Promise<SyncListPermissionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SyncListPermissionSolution {
  serviceSid?: string;
  listSid?: string;
}

interface SyncListPermissionListInstanceImpl
  extends SyncListPermissionListInstance {}
class SyncListPermissionListInstanceImpl
  implements SyncListPermissionListInstance
{
  _version?: Sync;
  _solution?: SyncListPermissionSolution;
  _uri?: string;
}

export function SyncListPermissionListInstance(
  version: Sync,
  serviceSid: string,
  listSid: string
): SyncListPermissionListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  if (!isValidPathParam(listSid)) {
    throw new Error("Parameter 'listSid' is not valid.");
  }

  const instance = ((identity) =>
    instance.get(identity)) as SyncListPermissionListInstanceImpl;

  instance.get = function get(identity): SyncListPermissionContext {
    return new SyncListPermissionContextImpl(
      version,
      serviceSid,
      listSid,
      identity
    );
  };

  instance._version = version;
  instance._solution = { serviceSid, listSid };
  instance._uri = `/Services/${serviceSid}/Lists/${listSid}/Permissions`;

  instance.page = function page(
    params?:
      | SyncListPermissionListInstancePageOptions
      | ((error: Error | null, item?: SyncListPermissionPage) => any),
    callback?: (error: Error | null, item?: SyncListPermissionPage) => any
  ): Promise<SyncListPermissionPage> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: SyncListPermissionPage
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
        new SyncListPermissionPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: SyncListPermissionPage) => any
  ): Promise<SyncListPermissionPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new SyncListPermissionPage(this._version, payload, this._solution)
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

export class SyncListPermissionPage extends Page<
  Sync,
  SyncListPermissionPayload,
  SyncListPermissionResource,
  SyncListPermissionInstance
> {
  /**
   * Initialize the SyncListPermissionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: Sync,
    response: Response<string>,
    solution: SyncListPermissionSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SyncListPermissionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncListPermissionResource): SyncListPermissionInstance {
    return new SyncListPermissionInstance(
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
