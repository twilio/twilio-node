/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Supersim
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

/**
 * Options to pass to create a NetworkAccessProfileNetworkInstance
 */
export interface NetworkAccessProfileNetworkListInstanceCreateOptions {
  /** The SID of the Network resource to be added to the Network Access Profile resource. */
  network: string;
}
/**
 * Options to pass to each
 */
export interface NetworkAccessProfileNetworkListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: NetworkAccessProfileNetworkInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface NetworkAccessProfileNetworkListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface NetworkAccessProfileNetworkListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface NetworkAccessProfileNetworkContext {
  /**
   * Remove a NetworkAccessProfileNetworkInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a NetworkAccessProfileNetworkInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed NetworkAccessProfileNetworkInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: NetworkAccessProfileNetworkInstance
    ) => any
  ): Promise<NetworkAccessProfileNetworkInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface NetworkAccessProfileNetworkContextSolution {
  networkAccessProfileSid: string;
  sid: string;
}

export class NetworkAccessProfileNetworkContextImpl
  implements NetworkAccessProfileNetworkContext
{
  protected _solution: NetworkAccessProfileNetworkContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    networkAccessProfileSid: string,
    sid: string
  ) {
    if (!isValidPathParam(networkAccessProfileSid)) {
      throw new Error("Parameter 'networkAccessProfileSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { networkAccessProfileSid, sid };
    this._uri = `/NetworkAccessProfiles/${networkAccessProfileSid}/Networks/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
        headers,
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (
      error: Error | null,
      item?: NetworkAccessProfileNetworkInstance
    ) => any
  ): Promise<NetworkAccessProfileNetworkInstance> {
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
        new NetworkAccessProfileNetworkInstance(
          operationVersion,
          payload,
          instance._solution.networkAccessProfileSid,
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

interface NetworkAccessProfileNetworkPayload extends TwilioResponsePayload {
  networks: NetworkAccessProfileNetworkResource[];
}

interface NetworkAccessProfileNetworkResource {
  sid: string;
  network_access_profile_sid: string;
  friendly_name: string;
  iso_country: string;
  identifiers: Array<Record<string, object>>;
  url: string;
}

export class NetworkAccessProfileNetworkInstance {
  protected _solution: NetworkAccessProfileNetworkContextSolution;
  protected _context?: NetworkAccessProfileNetworkContext;

  constructor(
    protected _version: V1,
    payload: NetworkAccessProfileNetworkResource,
    networkAccessProfileSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.networkAccessProfileSid = payload.network_access_profile_sid;
    this.friendlyName = payload.friendly_name;
    this.isoCountry = payload.iso_country;
    this.identifiers = payload.identifiers;
    this.url = payload.url;

    this._solution = { networkAccessProfileSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the Network resource.
   */
  sid: string;
  /**
   * The unique string that identifies the Network resource\'s Network Access Profile resource.
   */
  networkAccessProfileSid: string;
  /**
   * A human readable identifier of the Network this resource refers to.
   */
  friendlyName: string;
  /**
   * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the Network resource.
   */
  isoCountry: string;
  /**
   * Array of objects identifying the [MCC-MNCs](https://en.wikipedia.org/wiki/Mobile_country_code) that are included in the Network resource.
   */
  identifiers: Array<Record<string, object>>;
  /**
   * The absolute URL of the Network resource.
   */
  url: string;

  private get _proxy(): NetworkAccessProfileNetworkContext {
    this._context =
      this._context ||
      new NetworkAccessProfileNetworkContextImpl(
        this._version,
        this._solution.networkAccessProfileSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a NetworkAccessProfileNetworkInstance
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
   * Fetch a NetworkAccessProfileNetworkInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed NetworkAccessProfileNetworkInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: NetworkAccessProfileNetworkInstance
    ) => any
  ): Promise<NetworkAccessProfileNetworkInstance> {
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
      networkAccessProfileSid: this.networkAccessProfileSid,
      friendlyName: this.friendlyName,
      isoCountry: this.isoCountry,
      identifiers: this.identifiers,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface NetworkAccessProfileNetworkSolution {
  networkAccessProfileSid: string;
}

export interface NetworkAccessProfileNetworkListInstance {
  _version: V1;
  _solution: NetworkAccessProfileNetworkSolution;
  _uri: string;

  (sid: string): NetworkAccessProfileNetworkContext;
  get(sid: string): NetworkAccessProfileNetworkContext;

  /**
   * Create a NetworkAccessProfileNetworkInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed NetworkAccessProfileNetworkInstance
   */
  create(
    params: NetworkAccessProfileNetworkListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: NetworkAccessProfileNetworkInstance
    ) => any
  ): Promise<NetworkAccessProfileNetworkInstance>;

  /**
   * Streams NetworkAccessProfileNetworkInstance records from the API.
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
   * @param { NetworkAccessProfileNetworkListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: NetworkAccessProfileNetworkInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: NetworkAccessProfileNetworkListInstanceEachOptions,
    callback?: (
      item: NetworkAccessProfileNetworkInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of NetworkAccessProfileNetworkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (
      error: Error | null,
      items: NetworkAccessProfileNetworkPage
    ) => any
  ): Promise<NetworkAccessProfileNetworkPage>;
  /**
   * Lists NetworkAccessProfileNetworkInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { NetworkAccessProfileNetworkListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: NetworkAccessProfileNetworkInstance[]
    ) => any
  ): Promise<NetworkAccessProfileNetworkInstance[]>;
  list(
    params: NetworkAccessProfileNetworkListInstanceOptions,
    callback?: (
      error: Error | null,
      items: NetworkAccessProfileNetworkInstance[]
    ) => any
  ): Promise<NetworkAccessProfileNetworkInstance[]>;
  /**
   * Retrieve a single page of NetworkAccessProfileNetworkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { NetworkAccessProfileNetworkListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (
      error: Error | null,
      items: NetworkAccessProfileNetworkPage
    ) => any
  ): Promise<NetworkAccessProfileNetworkPage>;
  page(
    params: NetworkAccessProfileNetworkListInstancePageOptions,
    callback?: (
      error: Error | null,
      items: NetworkAccessProfileNetworkPage
    ) => any
  ): Promise<NetworkAccessProfileNetworkPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function NetworkAccessProfileNetworkListInstance(
  version: V1,
  networkAccessProfileSid: string
): NetworkAccessProfileNetworkListInstance {
  if (!isValidPathParam(networkAccessProfileSid)) {
    throw new Error("Parameter 'networkAccessProfileSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as NetworkAccessProfileNetworkListInstance;

  instance.get = function get(sid): NetworkAccessProfileNetworkContext {
    return new NetworkAccessProfileNetworkContextImpl(
      version,
      networkAccessProfileSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { networkAccessProfileSid };
  instance._uri = `/NetworkAccessProfiles/${networkAccessProfileSid}/Networks`;

  instance.create = function create(
    params: NetworkAccessProfileNetworkListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      items: NetworkAccessProfileNetworkInstance
    ) => any
  ): Promise<NetworkAccessProfileNetworkInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["network"] === null || params["network"] === undefined) {
      throw new Error("Required parameter \"params['network']\" missing.");
    }

    let data: any = {};

    data["Network"] = params["network"];

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
        new NetworkAccessProfileNetworkInstance(
          operationVersion,
          payload,
          instance._solution.networkAccessProfileSid
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
      | NetworkAccessProfileNetworkListInstancePageOptions
      | ((error: Error | null, items: NetworkAccessProfileNetworkPage) => any),
    callback?: (
      error: Error | null,
      items: NetworkAccessProfileNetworkPage
    ) => any
  ): Promise<NetworkAccessProfileNetworkPage> {
    if (params instanceof Function) {
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
        new NetworkAccessProfileNetworkPage(
          operationVersion,
          payload,
          instance._solution
        )
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
    callback?: (
      error: Error | null,
      items: NetworkAccessProfileNetworkPage
    ) => any
  ): Promise<NetworkAccessProfileNetworkPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new NetworkAccessProfileNetworkPage(
          instance._version,
          payload,
          instance._solution
        )
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

export class NetworkAccessProfileNetworkPage extends Page<
  V1,
  NetworkAccessProfileNetworkPayload,
  NetworkAccessProfileNetworkResource,
  NetworkAccessProfileNetworkInstance
> {
  /**
   * Initialize the NetworkAccessProfileNetworkPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: NetworkAccessProfileNetworkSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of NetworkAccessProfileNetworkInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: NetworkAccessProfileNetworkResource
  ): NetworkAccessProfileNetworkInstance {
    return new NetworkAccessProfileNetworkInstance(
      this._version,
      payload,
      this._solution.networkAccessProfileSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
