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
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to each
 */
export interface NetworkListInstanceEachOptions {
  /** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the Network resources to read. */
  isoCountry?: string;
  /** The \'mobile country code\' of a country. Network resources with this `mcc` in their `identifiers` will be read. */
  mcc?: string;
  /** The \'mobile network code\' of a mobile operator network. Network resources with this `mnc` in their `identifiers` will be read. */
  mnc?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: NetworkInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface NetworkListInstanceOptions {
  /** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the Network resources to read. */
  isoCountry?: string;
  /** The \'mobile country code\' of a country. Network resources with this `mcc` in their `identifiers` will be read. */
  mcc?: string;
  /** The \'mobile network code\' of a mobile operator network. Network resources with this `mnc` in their `identifiers` will be read. */
  mnc?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface NetworkListInstancePageOptions {
  /** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the Network resources to read. */
  isoCountry?: string;
  /** The \'mobile country code\' of a country. Network resources with this `mcc` in their `identifiers` will be read. */
  mcc?: string;
  /** The \'mobile network code\' of a mobile operator network. Network resources with this `mnc` in their `identifiers` will be read. */
  mnc?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface NetworkContext {
  /**
   * Fetch a NetworkInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed NetworkInstance
   */
  fetch(
    callback?: (error: Error | null, item?: NetworkInstance) => any
  ): Promise<NetworkInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface NetworkContextSolution {
  sid: string;
}

export class NetworkContextImpl implements NetworkContext {
  protected _solution: NetworkContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Networks/${sid}`;
  }

  fetch(
    callback?: (error: Error | null, item?: NetworkInstance) => any
  ): Promise<NetworkInstance> {
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
        new NetworkInstance(operationVersion, payload, instance._solution.sid)
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

interface NetworkPayload extends TwilioResponsePayload {
  networks: NetworkResource[];
}

interface NetworkResource {
  sid: string;
  friendly_name: string;
  url: string;
  iso_country: string;
  identifiers: Array<Record<string, object>>;
}

export class NetworkInstance {
  protected _solution: NetworkContextSolution;
  protected _context?: NetworkContext;

  constructor(protected _version: V1, payload: NetworkResource, sid?: string) {
    this.sid = payload.sid;
    this.friendlyName = payload.friendly_name;
    this.url = payload.url;
    this.isoCountry = payload.iso_country;
    this.identifiers = payload.identifiers;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the Network resource.
   */
  sid: string;
  /**
   * A human readable identifier of this resource.
   */
  friendlyName: string;
  /**
   * The absolute URL of the Network resource.
   */
  url: string;
  /**
   * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the Network resource.
   */
  isoCountry: string;
  /**
   * Array of objects identifying the [MCC-MNCs](https://en.wikipedia.org/wiki/Mobile_country_code) that are included in the Network resource.
   */
  identifiers: Array<Record<string, object>>;

  private get _proxy(): NetworkContext {
    this._context =
      this._context ||
      new NetworkContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a NetworkInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed NetworkInstance
   */
  fetch(
    callback?: (error: Error | null, item?: NetworkInstance) => any
  ): Promise<NetworkInstance> {
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
      friendlyName: this.friendlyName,
      url: this.url,
      isoCountry: this.isoCountry,
      identifiers: this.identifiers,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface NetworkSolution {}

export interface NetworkListInstance {
  _version: V1;
  _solution: NetworkSolution;
  _uri: string;

  (sid: string): NetworkContext;
  get(sid: string): NetworkContext;

  /**
   * Streams NetworkInstance records from the API.
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
   * @param { NetworkListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: NetworkInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: NetworkListInstanceEachOptions,
    callback?: (item: NetworkInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of NetworkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: NetworkPage) => any
  ): Promise<NetworkPage>;
  /**
   * Lists NetworkInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { NetworkListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: NetworkInstance[]) => any
  ): Promise<NetworkInstance[]>;
  list(
    params: NetworkListInstanceOptions,
    callback?: (error: Error | null, items: NetworkInstance[]) => any
  ): Promise<NetworkInstance[]>;
  /**
   * Retrieve a single page of NetworkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { NetworkListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: NetworkPage) => any
  ): Promise<NetworkPage>;
  page(
    params: NetworkListInstancePageOptions,
    callback?: (error: Error | null, items: NetworkPage) => any
  ): Promise<NetworkPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function NetworkListInstance(version: V1): NetworkListInstance {
  const instance = ((sid) => instance.get(sid)) as NetworkListInstance;

  instance.get = function get(sid): NetworkContext {
    return new NetworkContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Networks`;

  instance.page = function page(
    params?:
      | NetworkListInstancePageOptions
      | ((error: Error | null, items: NetworkPage) => any),
    callback?: (error: Error | null, items: NetworkPage) => any
  ): Promise<NetworkPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["isoCountry"] !== undefined)
      data["IsoCountry"] = params["isoCountry"];
    if (params["mcc"] !== undefined) data["Mcc"] = params["mcc"];
    if (params["mnc"] !== undefined) data["Mnc"] = params["mnc"];
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
        new NetworkPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: NetworkPage) => any
  ): Promise<NetworkPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new NetworkPage(instance._version, payload, instance._solution)
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

export class NetworkPage extends Page<
  V1,
  NetworkPayload,
  NetworkResource,
  NetworkInstance
> {
  /**
   * Initialize the NetworkPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: NetworkSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of NetworkInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: NetworkResource): NetworkInstance {
    return new NetworkInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
