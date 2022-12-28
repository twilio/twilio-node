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

type SimIpAddressIpAddressVersion = "IPv4" | "IPv6";

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
export interface SimIpAddressListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: SimIpAddressInstance, done: (err?: Error) => void) => void;
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
export interface SimIpAddressListInstanceOptions {
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
export interface SimIpAddressListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface SimIpAddressListInstance {
  /**
   * Streams SimIpAddressInstance records from the API.
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
   * @param { SimIpAddressListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | SimIpAddressListInstanceEachOptions
      | ((item: SimIpAddressInstance, done: (err?: Error) => void) => void),
    callback?: (item: SimIpAddressInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of SimIpAddressInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: SimIpAddressPage) => any
  ): Promise<SimIpAddressPage>;
  /**
   * Lists SimIpAddressInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SimIpAddressListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | SimIpAddressListInstanceOptions
      | ((error: Error | null, items: SimIpAddressInstance[]) => any),
    callback?: (error: Error | null, items: SimIpAddressInstance[]) => any
  ): Promise<SimIpAddressInstance[]>;
  /**
   * Retrieve a single page of SimIpAddressInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SimIpAddressListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | SimIpAddressListInstancePageOptions
      | ((error: Error | null, items: SimIpAddressPage) => any),
    callback?: (error: Error | null, items: SimIpAddressPage) => any
  ): Promise<SimIpAddressPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SimIpAddressSolution {
  simSid?: string;
}

interface SimIpAddressListInstanceImpl extends SimIpAddressListInstance {}
class SimIpAddressListInstanceImpl implements SimIpAddressListInstance {
  _version?: V1;
  _solution?: SimIpAddressSolution;
  _uri?: string;
}

export function SimIpAddressListInstance(
  version: V1,
  simSid: string
): SimIpAddressListInstance {
  if (!isValidPathParam(simSid)) {
    throw new Error("Parameter 'simSid' is not valid.");
  }

  const instance = {} as SimIpAddressListInstanceImpl;

  instance._version = version;
  instance._solution = { simSid };
  instance._uri = `/Sims/${simSid}/IpAddresses`;

  instance.page = function page(
    params?:
      | SimIpAddressListInstancePageOptions
      | ((error: Error | null, item?: SimIpAddressPage) => any),
    callback?: (error: Error | null, item?: SimIpAddressPage) => any
  ): Promise<SimIpAddressPage> {
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
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SimIpAddressPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: SimIpAddressPage) => any
  ): Promise<SimIpAddressPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new SimIpAddressPage(this._version, payload, this._solution)
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

interface SimIpAddressPayload extends TwilioResponsePayload {
  ip_addresses: SimIpAddressResource[];
}

interface SimIpAddressResource {
  ip_address?: string | null;
  ip_address_version?: SimIpAddressIpAddressVersion;
}

export class SimIpAddressInstance {
  constructor(
    protected _version: V1,
    payload: SimIpAddressResource,
    simSid: string
  ) {
    this.ipAddress = payload.ip_address;
    this.ipAddressVersion = payload.ip_address_version;
  }

  /**
   * IP address assigned to the given Super SIM
   */
  ipAddress?: string | null;
  ipAddressVersion?: SimIpAddressIpAddressVersion;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      ipAddress: this.ipAddress,
      ipAddressVersion: this.ipAddressVersion,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class SimIpAddressPage extends Page<
  V1,
  SimIpAddressPayload,
  SimIpAddressResource,
  SimIpAddressInstance
> {
  /**
   * Initialize the SimIpAddressPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: SimIpAddressSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SimIpAddressInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SimIpAddressResource): SimIpAddressInstance {
    return new SimIpAddressInstance(
      this._version,
      payload,
      this._solution.simSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
