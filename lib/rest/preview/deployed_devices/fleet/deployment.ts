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
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import DeployedDevices from "../../DeployedDevices";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to update a DeploymentInstance
 *
 * @property { string } [friendlyName] Provides a human readable descriptive text for this Deployment, up to 64 characters long
 * @property { string } [syncServiceSid] Provides the unique string identifier of the Twilio Sync service instance that will be linked to and accessible by this Deployment.
 */
export interface DeploymentContextUpdateOptions {
  friendlyName?: string;
  syncServiceSid?: string;
}

/**
 * Options to pass to create a DeploymentInstance
 *
 * @property { string } [friendlyName] Provides a human readable descriptive text for this Deployment, up to 256 characters long.
 * @property { string } [syncServiceSid] Provides the unique string identifier of the Twilio Sync service instance that will be linked to and accessible by this Deployment.
 */
export interface DeploymentListInstanceCreateOptions {
  friendlyName?: string;
  syncServiceSid?: string;
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
export interface DeploymentListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: DeploymentInstance, done: (err?: Error) => void) => void;
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
export interface DeploymentListInstanceOptions {
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
export interface DeploymentListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface DeploymentContext {
  /**
   * Remove a DeploymentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a DeploymentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeploymentInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DeploymentInstance) => any
  ): Promise<DeploymentInstance>;

  /**
   * Update a DeploymentInstance
   *
   * @param { DeploymentContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeploymentInstance
   */
  update(
    params?:
      | DeploymentContextUpdateOptions
      | ((error: Error | null, item?: DeploymentInstance) => any),
    callback?: (error: Error | null, item?: DeploymentInstance) => any
  ): Promise<DeploymentInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DeploymentContextSolution {
  fleetSid?: string;
  sid?: string;
}

export class DeploymentContextImpl implements DeploymentContext {
  protected _solution: DeploymentContextSolution;
  protected _uri: string;

  constructor(
    protected _version: DeployedDevices,
    fleetSid: string,
    sid: string
  ) {
    if (!isValidPathParam(fleetSid)) {
      throw new Error("Parameter 'fleetSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { fleetSid, sid };
    this._uri = `/Fleets/${fleetSid}/Deployments/${sid}`;
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

  fetch(callback?: any): Promise<DeploymentInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DeploymentInstance(
          operationVersion,
          payload,
          this._solution.fleetSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<DeploymentInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["syncServiceSid"] !== undefined)
      data["SyncServiceSid"] = params["syncServiceSid"];

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
        new DeploymentInstance(
          operationVersion,
          payload,
          this._solution.fleetSid,
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

interface DeploymentPayload extends TwilioResponsePayload {
  deployments: DeploymentResource[];
}

interface DeploymentResource {
  sid?: string | null;
  url?: string | null;
  friendly_name?: string | null;
  fleet_sid?: string | null;
  account_sid?: string | null;
  sync_service_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
}

export class DeploymentInstance {
  protected _solution: DeploymentContextSolution;
  protected _context?: DeploymentContext;

  constructor(
    protected _version: DeployedDevices,
    payload: DeploymentResource,
    fleetSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.url = payload.url;
    this.friendlyName = payload.friendly_name;
    this.fleetSid = payload.fleet_sid;
    this.accountSid = payload.account_sid;
    this.syncServiceSid = payload.sync_service_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);

    this._solution = { fleetSid, sid: sid || this.sid };
  }

  /**
   * A string that uniquely identifies this Deployment.
   */
  sid?: string | null;
  /**
   * URL of this Deployment.
   */
  url?: string | null;
  /**
   * A human readable description for this Deployment
   */
  friendlyName?: string | null;
  /**
   * The unique identifier of the Fleet.
   */
  fleetSid?: string | null;
  /**
   * The unique SID that identifies this Account.
   */
  accountSid?: string | null;
  /**
   * The unique identifier of the Sync service instance.
   */
  syncServiceSid?: string | null;
  /**
   * The date this Deployment was created.
   */
  dateCreated?: Date | null;
  /**
   * The date this Deployment was updated.
   */
  dateUpdated?: Date | null;

  private get _proxy(): DeploymentContext {
    this._context =
      this._context ||
      new DeploymentContextImpl(
        this._version,
        this._solution.fleetSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a DeploymentInstance
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
   * Fetch a DeploymentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeploymentInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DeploymentInstance) => any
  ): Promise<DeploymentInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a DeploymentInstance
   *
   * @param { DeploymentContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeploymentInstance
   */
  update(
    params?:
      | DeploymentContextUpdateOptions
      | ((error: Error | null, item?: DeploymentInstance) => any),
    callback?: (error: Error | null, item?: DeploymentInstance) => any
  ): Promise<DeploymentInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      url: this.url,
      friendlyName: this.friendlyName,
      fleetSid: this.fleetSid,
      accountSid: this.accountSid,
      syncServiceSid: this.syncServiceSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface DeploymentListInstance {
  (sid: string): DeploymentContext;
  get(sid: string): DeploymentContext;

  /**
   * Create a DeploymentInstance
   *
   * @param { DeploymentListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeploymentInstance
   */
  create(
    params?:
      | DeploymentListInstanceCreateOptions
      | ((error: Error | null, item?: DeploymentInstance) => any),
    callback?: (error: Error | null, item?: DeploymentInstance) => any
  ): Promise<DeploymentInstance>;

  /**
   * Streams DeploymentInstance records from the API.
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
   * @param { DeploymentListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | DeploymentListInstanceEachOptions
      | ((item: DeploymentInstance, done: (err?: Error) => void) => void),
    callback?: (item: DeploymentInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of DeploymentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: DeploymentPage) => any
  ): Promise<DeploymentPage>;
  /**
   * Lists DeploymentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DeploymentListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | DeploymentListInstanceOptions
      | ((error: Error | null, items: DeploymentInstance[]) => any),
    callback?: (error: Error | null, items: DeploymentInstance[]) => any
  ): Promise<DeploymentInstance[]>;
  /**
   * Retrieve a single page of DeploymentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DeploymentListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | DeploymentListInstancePageOptions
      | ((error: Error | null, items: DeploymentPage) => any),
    callback?: (error: Error | null, items: DeploymentPage) => any
  ): Promise<DeploymentPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DeploymentSolution {
  fleetSid?: string;
}

interface DeploymentListInstanceImpl extends DeploymentListInstance {}
class DeploymentListInstanceImpl implements DeploymentListInstance {
  _version?: DeployedDevices;
  _solution?: DeploymentSolution;
  _uri?: string;
}

export function DeploymentListInstance(
  version: DeployedDevices,
  fleetSid: string
): DeploymentListInstance {
  if (!isValidPathParam(fleetSid)) {
    throw new Error("Parameter 'fleetSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as DeploymentListInstanceImpl;

  instance.get = function get(sid): DeploymentContext {
    return new DeploymentContextImpl(version, fleetSid, sid);
  };

  instance._version = version;
  instance._solution = { fleetSid };
  instance._uri = `/Fleets/${fleetSid}/Deployments`;

  instance.create = function create(
    params?:
      | DeploymentListInstanceCreateOptions
      | ((error: Error | null, item?: DeploymentInstance) => any),
    callback?: (error: Error | null, item?: DeploymentInstance) => any
  ): Promise<DeploymentInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["syncServiceSid"] !== undefined)
      data["SyncServiceSid"] = params["syncServiceSid"];

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
      (payload) =>
        new DeploymentInstance(
          operationVersion,
          payload,
          this._solution.fleetSid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | DeploymentListInstancePageOptions
      | ((error: Error | null, item?: DeploymentPage) => any),
    callback?: (error: Error | null, item?: DeploymentPage) => any
  ): Promise<DeploymentPage> {
    if (typeof params === "function") {
      callback = params;
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
      (payload) => new DeploymentPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: DeploymentPage) => any
  ): Promise<DeploymentPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new DeploymentPage(this._version, payload, this._solution)
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

export class DeploymentPage extends Page<
  DeployedDevices,
  DeploymentPayload,
  DeploymentResource,
  DeploymentInstance
> {
  /**
   * Initialize the DeploymentPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: DeployedDevices,
    response: Response<string>,
    solution: DeploymentSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of DeploymentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DeploymentResource): DeploymentInstance {
    return new DeploymentInstance(
      this._version,
      payload,
      this._solution.fleetSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
