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
 * Options to pass to update a DeviceInstance
 *
 * @property { string } [friendlyName] Provides a human readable descriptive text to be assigned to this Device, up to 256 characters long.
 * @property { string } [identity] Provides an arbitrary string identifier representing a human user to be associated with this Device, up to 256 characters long.
 * @property { string } [deploymentSid] Specifies the unique string identifier of the Deployment group that this Device is going to be associated with.
 * @property { boolean } [enabled]
 */
export interface DeviceContextUpdateOptions {
  friendlyName?: string;
  identity?: string;
  deploymentSid?: string;
  enabled?: boolean;
}

/**
 * Options to pass to create a DeviceInstance
 *
 * @property { string } [uniqueName] Provides a unique and addressable name to be assigned to this Device, to be used in addition to SID, up to 128 characters long.
 * @property { string } [friendlyName] Provides a human readable descriptive text to be assigned to this Device, up to 256 characters long.
 * @property { string } [identity] Provides an arbitrary string identifier representing a human user to be associated with this Device, up to 256 characters long.
 * @property { string } [deploymentSid] Specifies the unique string identifier of the Deployment group that this Device is going to be associated with.
 * @property { boolean } [enabled]
 */
export interface DeviceListInstanceCreateOptions {
  uniqueName?: string;
  friendlyName?: string;
  identity?: string;
  deploymentSid?: string;
  enabled?: boolean;
}
/**
 * Options to pass to each
 *
 * @property { string } [deploymentSid] Filters the resulting list of Devices by a unique string identifier of the Deployment they are associated with.
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
export interface DeviceListInstanceEachOptions {
  deploymentSid?: string;
  pageSize?: number;
  callback?: (item: DeviceInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [deploymentSid] Filters the resulting list of Devices by a unique string identifier of the Deployment they are associated with.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface DeviceListInstanceOptions {
  deploymentSid?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [deploymentSid] Filters the resulting list of Devices by a unique string identifier of the Deployment they are associated with.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface DeviceListInstancePageOptions {
  deploymentSid?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface DeviceContext {
  /**
   * Remove a DeviceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a DeviceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeviceInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DeviceInstance) => any
  ): Promise<DeviceInstance>;

  /**
   * Update a DeviceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeviceInstance
   */
  update(
    callback?: (error: Error | null, item?: DeviceInstance) => any
  ): Promise<DeviceInstance>;
  /**
   * Update a DeviceInstance
   *
   * @param { DeviceContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeviceInstance
   */
  update(
    params: DeviceContextUpdateOptions,
    callback?: (error: Error | null, item?: DeviceInstance) => any
  ): Promise<DeviceInstance>;
  update(params?: any, callback?: any): Promise<DeviceInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DeviceContextSolution {
  fleetSid: string;
  sid: string;
}

export class DeviceContextImpl implements DeviceContext {
  protected _solution: DeviceContextSolution;
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
    this._uri = `/Fleets/${fleetSid}/Devices/${sid}`;
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

  fetch(callback?: any): Promise<DeviceInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DeviceInstance(
          operationVersion,
          payload,
          instance._solution.fleetSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<DeviceInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["identity"] !== undefined) data["Identity"] = params["identity"];
    if (params["deploymentSid"] !== undefined)
      data["DeploymentSid"] = params["deploymentSid"];
    if (params["enabled"] !== undefined)
      data["Enabled"] = serialize.bool(params["enabled"]);

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
        new DeviceInstance(
          operationVersion,
          payload,
          instance._solution.fleetSid,
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

interface DevicePayload extends TwilioResponsePayload {
  devices: DeviceResource[];
}

interface DeviceResource {
  sid?: string | null;
  url?: string | null;
  unique_name?: string | null;
  friendly_name?: string | null;
  fleet_sid?: string | null;
  enabled?: boolean | null;
  account_sid?: string | null;
  identity?: string | null;
  deployment_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  date_authenticated?: Date | null;
}

export class DeviceInstance {
  protected _solution: DeviceContextSolution;
  protected _context?: DeviceContext;

  constructor(
    protected _version: DeployedDevices,
    payload: DeviceResource,
    fleetSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.url = payload.url;
    this.uniqueName = payload.unique_name;
    this.friendlyName = payload.friendly_name;
    this.fleetSid = payload.fleet_sid;
    this.enabled = payload.enabled;
    this.accountSid = payload.account_sid;
    this.identity = payload.identity;
    this.deploymentSid = payload.deployment_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.dateAuthenticated = deserialize.iso8601DateTime(
      payload.date_authenticated
    );

    this._solution = { fleetSid, sid: sid || this.sid };
  }

  /**
   * A string that uniquely identifies this Device.
   */
  sid?: string | null;
  /**
   * URL of this Device.
   */
  url?: string | null;
  /**
   * A unique, addressable name of this Device.
   */
  uniqueName?: string | null;
  /**
   * A human readable description for this Device
   */
  friendlyName?: string | null;
  /**
   * The unique identifier of the Fleet.
   */
  fleetSid?: string | null;
  /**
   * Device enabled flag.
   */
  enabled?: boolean | null;
  /**
   * The unique SID that identifies this Account.
   */
  accountSid?: string | null;
  /**
   * An identifier of the Device user.
   */
  identity?: string | null;
  /**
   * The unique SID of the Deployment group.
   */
  deploymentSid?: string | null;
  /**
   * The date this Device was created.
   */
  dateCreated?: Date | null;
  /**
   * The date this Device was updated.
   */
  dateUpdated?: Date | null;
  /**
   * The date this Device was authenticated.
   */
  dateAuthenticated?: Date | null;

  private get _proxy(): DeviceContext {
    this._context =
      this._context ||
      new DeviceContextImpl(
        this._version,
        this._solution.fleetSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a DeviceInstance
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
   * Fetch a DeviceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeviceInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DeviceInstance) => any
  ): Promise<DeviceInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a DeviceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeviceInstance
   */
  update(
    callback?: (error: Error | null, item?: DeviceInstance) => any
  ): Promise<DeviceInstance>;
  /**
   * Update a DeviceInstance
   *
   * @param { DeviceContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeviceInstance
   */
  update(
    params: DeviceContextUpdateOptions,
    callback?: (error: Error | null, item?: DeviceInstance) => any
  ): Promise<DeviceInstance>;
  update(params?: any, callback?: any): Promise<DeviceInstance> {
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
      uniqueName: this.uniqueName,
      friendlyName: this.friendlyName,
      fleetSid: this.fleetSid,
      enabled: this.enabled,
      accountSid: this.accountSid,
      identity: this.identity,
      deploymentSid: this.deploymentSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      dateAuthenticated: this.dateAuthenticated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface DeviceSolution {
  fleetSid?: string;
}

export interface DeviceListInstance {
  _version: DeployedDevices;
  _solution: DeviceSolution;
  _uri: string;

  (sid: string): DeviceContext;
  get(sid: string): DeviceContext;

  /**
   * Create a DeviceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeviceInstance
   */
  create(
    callback?: (error: Error | null, item?: DeviceInstance) => any
  ): Promise<DeviceInstance>;
  /**
   * Create a DeviceInstance
   *
   * @param { DeviceListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeviceInstance
   */
  create(
    params: DeviceListInstanceCreateOptions,
    callback?: (error: Error | null, item?: DeviceInstance) => any
  ): Promise<DeviceInstance>;
  create(params?: any, callback?: any): Promise<DeviceInstance>;

  /**
   * Streams DeviceInstance records from the API.
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
    callback?: (item: DeviceInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams DeviceInstance records from the API.
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
   * @param { DeviceListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: DeviceListInstanceEachOptions,
    callback?: (item: DeviceInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of DeviceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: DevicePage) => any
  ): Promise<DevicePage>;
  /**
   * Retrieve a single target page of DeviceInstance records from the API.
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
    callback?: (error: Error | null, items: DevicePage) => any
  ): Promise<DevicePage>;
  getPage(params?: any, callback?: any): Promise<DevicePage>;
  /**
   * Lists DeviceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: DeviceInstance[]) => any
  ): Promise<DeviceInstance[]>;
  /**
   * Lists DeviceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DeviceListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: DeviceListInstanceOptions,
    callback?: (error: Error | null, items: DeviceInstance[]) => any
  ): Promise<DeviceInstance[]>;
  list(params?: any, callback?: any): Promise<DeviceInstance[]>;
  /**
   * Retrieve a single page of DeviceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: DevicePage) => any
  ): Promise<DevicePage>;
  /**
   * Retrieve a single page of DeviceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DeviceListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: DeviceListInstancePageOptions,
    callback?: (error: Error | null, items: DevicePage) => any
  ): Promise<DevicePage>;
  page(params?: any, callback?: any): Promise<DevicePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function DeviceListInstance(
  version: DeployedDevices,
  fleetSid: string
): DeviceListInstance {
  if (!isValidPathParam(fleetSid)) {
    throw new Error("Parameter 'fleetSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as DeviceListInstance;

  instance.get = function get(sid): DeviceContext {
    return new DeviceContextImpl(version, fleetSid, sid);
  };

  instance._version = version;
  instance._solution = { fleetSid };
  instance._uri = `/Fleets/${fleetSid}/Devices`;

  instance.create = function create(
    params?: any,
    callback?: any
  ): Promise<DeviceInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["identity"] !== undefined) data["Identity"] = params["identity"];
    if (params["deploymentSid"] !== undefined)
      data["DeploymentSid"] = params["deploymentSid"];
    if (params["enabled"] !== undefined)
      data["Enabled"] = serialize.bool(params["enabled"]);

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
        new DeviceInstance(
          operationVersion,
          payload,
          instance._solution.fleetSid
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
  ): Promise<DevicePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["deploymentSid"] !== undefined)
      data["DeploymentSid"] = params["deploymentSid"];
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
      (payload) => new DevicePage(operationVersion, payload, instance._solution)
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
  ): Promise<DevicePage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new DevicePage(instance._version, payload, instance._solution)
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

export class DevicePage extends Page<
  DeployedDevices,
  DevicePayload,
  DeviceResource,
  DeviceInstance
> {
  /**
   * Initialize the DevicePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: DeployedDevices,
    response: Response<string>,
    solution: DeviceSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of DeviceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DeviceResource): DeviceInstance {
    return new DeviceInstance(this._version, payload, this._solution.fleetSid);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
