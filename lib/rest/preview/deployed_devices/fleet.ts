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
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import DeployedDevices from "../DeployedDevices";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { CertificateListInstance } from "./fleet/certificate";
import { DeploymentListInstance } from "./fleet/deployment";
import { DeviceListInstance } from "./fleet/device";
import { KeyListInstance } from "./fleet/key";

/**
 * Options to pass to update a FleetInstance
 *
 * @property { string } [friendlyName] Provides a human readable descriptive text for this Fleet, up to 256 characters long.
 * @property { string } [defaultDeploymentSid] Provides a string identifier of a Deployment that is going to be used as a default one for this Fleet.
 */
export interface FleetContextUpdateOptions {
  friendlyName?: string;
  defaultDeploymentSid?: string;
}

/**
 * Options to pass to create a FleetInstance
 *
 * @property { string } [friendlyName] Provides a human readable descriptive text for this Fleet, up to 256 characters long.
 */
export interface FleetListInstanceCreateOptions {
  friendlyName?: string;
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
export interface FleetListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: FleetInstance, done: (err?: Error) => void) => void;
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
export interface FleetListInstanceOptions {
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
export interface FleetListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface FleetContext {
  certificates: CertificateListInstance;
  deployments: DeploymentListInstance;
  devices: DeviceListInstance;
  keys: KeyListInstance;

  /**
   * Remove a FleetInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a FleetInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FleetInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FleetInstance) => any
  ): Promise<FleetInstance>;

  /**
   * Update a FleetInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FleetInstance
   */
  update(
    callback?: (error: Error | null, item?: FleetInstance) => any
  ): Promise<FleetInstance>;
  /**
   * Update a FleetInstance
   *
   * @param { FleetContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FleetInstance
   */
  update(
    params?:
      | FleetContextUpdateOptions
      | ((error: Error | null, item?: FleetInstance) => any),
    callback?: (error: Error | null, item?: FleetInstance) => any
  ): Promise<FleetInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FleetContextSolution {
  sid?: string;
}

export class FleetContextImpl implements FleetContext {
  protected _solution: FleetContextSolution;
  protected _uri: string;

  protected _certificates?: CertificateListInstance;
  protected _deployments?: DeploymentListInstance;
  protected _devices?: DeviceListInstance;
  protected _keys?: KeyListInstance;

  constructor(protected _version: DeployedDevices, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Fleets/${sid}`;
  }

  get certificates(): CertificateListInstance {
    this._certificates =
      this._certificates ||
      CertificateListInstance(this._version, this._solution.sid);
    return this._certificates;
  }

  get deployments(): DeploymentListInstance {
    this._deployments =
      this._deployments ||
      DeploymentListInstance(this._version, this._solution.sid);
    return this._deployments;
  }

  get devices(): DeviceListInstance {
    this._devices =
      this._devices || DeviceListInstance(this._version, this._solution.sid);
    return this._devices;
  }

  get keys(): KeyListInstance {
    this._keys =
      this._keys || KeyListInstance(this._version, this._solution.sid);
    return this._keys;
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

  fetch(callback?: any): Promise<FleetInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FleetInstance(operationVersion, payload, this._solution.sid)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<FleetInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["defaultDeploymentSid"] !== undefined)
      data["DefaultDeploymentSid"] = params["defaultDeploymentSid"];

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
        new FleetInstance(operationVersion, payload, this._solution.sid)
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

interface FleetPayload extends TwilioResponsePayload {
  fleets: FleetResource[];
}

interface FleetResource {
  sid?: string | null;
  url?: string | null;
  unique_name?: string | null;
  friendly_name?: string | null;
  account_sid?: string | null;
  default_deployment_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  links?: object | null;
}

export class FleetInstance {
  protected _solution: FleetContextSolution;
  protected _context?: FleetContext;

  constructor(
    protected _version: DeployedDevices,
    payload: FleetResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.url = payload.url;
    this.uniqueName = payload.unique_name;
    this.friendlyName = payload.friendly_name;
    this.accountSid = payload.account_sid;
    this.defaultDeploymentSid = payload.default_deployment_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * A string that uniquely identifies this Fleet.
   */
  sid?: string | null;
  /**
   * URL of this Fleet.
   */
  url?: string | null;
  /**
   * A unique, addressable name of this Fleet.
   */
  uniqueName?: string | null;
  /**
   * A human readable description for this Fleet.
   */
  friendlyName?: string | null;
  /**
   * The unique SID that identifies this Account.
   */
  accountSid?: string | null;
  /**
   * The unique SID that identifies this Fleet\'s default Deployment.
   */
  defaultDeploymentSid?: string | null;
  /**
   * The date this Fleet was created.
   */
  dateCreated?: Date | null;
  /**
   * The date this Fleet was updated.
   */
  dateUpdated?: Date | null;
  /**
   * Nested resource URLs.
   */
  links?: object | null;

  private get _proxy(): FleetContext {
    this._context =
      this._context || new FleetContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a FleetInstance
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
   * Fetch a FleetInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FleetInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FleetInstance) => any
  ): Promise<FleetInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a FleetInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FleetInstance
   */
  update(
    callback?: (error: Error | null, item?: FleetInstance) => any
  ): Promise<FleetInstance>;
  /**
   * Update a FleetInstance
   *
   * @param { FleetContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FleetInstance
   */
  update(
    params?:
      | FleetContextUpdateOptions
      | ((error: Error | null, item?: FleetInstance) => any),
    callback?: (error: Error | null, item?: FleetInstance) => any
  ): Promise<FleetInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the certificates.
   */
  certificates(): CertificateListInstance {
    return this._proxy.certificates;
  }

  /**
   * Access the deployments.
   */
  deployments(): DeploymentListInstance {
    return this._proxy.deployments;
  }

  /**
   * Access the devices.
   */
  devices(): DeviceListInstance {
    return this._proxy.devices;
  }

  /**
   * Access the keys.
   */
  keys(): KeyListInstance {
    return this._proxy.keys;
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
      accountSid: this.accountSid,
      defaultDeploymentSid: this.defaultDeploymentSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface FleetListInstance {
  (sid: string): FleetContext;
  get(sid: string): FleetContext;

  /**
   * Create a FleetInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FleetInstance
   */
  create(
    callback?: (error: Error | null, item?: FleetInstance) => any
  ): Promise<FleetInstance>;
  /**
   * Create a FleetInstance
   *
   * @param { FleetListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FleetInstance
   */
  create(
    params?:
      | FleetListInstanceCreateOptions
      | ((error: Error | null, item?: FleetInstance) => any),
    callback?: (error: Error | null, item?: FleetInstance) => any
  ): Promise<FleetInstance>;

  /**
   * Streams FleetInstance records from the API.
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
   * @param { FleetListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | FleetListInstanceEachOptions
      | ((item: FleetInstance, done: (err?: Error) => void) => void),
    callback?: (item: FleetInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of FleetInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: FleetPage) => any
  ): Promise<FleetPage>;
  /**
   * Lists FleetInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FleetListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | FleetListInstanceOptions
      | ((error: Error | null, items: FleetInstance[]) => any),
    callback?: (error: Error | null, items: FleetInstance[]) => any
  ): Promise<FleetInstance[]>;
  /**
   * Retrieve a single page of FleetInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FleetListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | FleetListInstancePageOptions
      | ((error: Error | null, items: FleetPage) => any),
    callback?: (error: Error | null, items: FleetPage) => any
  ): Promise<FleetPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FleetSolution {}

interface FleetListInstanceImpl extends FleetListInstance {}
class FleetListInstanceImpl implements FleetListInstance {
  _version?: DeployedDevices;
  _solution?: FleetSolution;
  _uri?: string;
}

export function FleetListInstance(version: DeployedDevices): FleetListInstance {
  const instance = ((sid) => instance.get(sid)) as FleetListInstanceImpl;

  instance.get = function get(sid): FleetContext {
    return new FleetContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Fleets`;

  instance.create = function create(
    params?:
      | FleetListInstanceCreateOptions
      | ((error: Error | null, item?: FleetInstance) => any),
    callback?: (error: Error | null, item?: FleetInstance) => any
  ): Promise<FleetInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];

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
      (payload) => new FleetInstance(operationVersion, payload)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | FleetListInstancePageOptions
      | ((error: Error | null, item?: FleetPage) => any),
    callback?: (error: Error | null, item?: FleetPage) => any
  ): Promise<FleetPage> {
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
      (payload) => new FleetPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: FleetPage) => any
  ): Promise<FleetPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new FleetPage(this._version, payload, this._solution)
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

export class FleetPage extends Page<
  DeployedDevices,
  FleetPayload,
  FleetResource,
  FleetInstance
> {
  /**
   * Initialize the FleetPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: DeployedDevices,
    response: Response<string>,
    solution: FleetSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of FleetInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FleetResource): FleetInstance {
    return new FleetInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
