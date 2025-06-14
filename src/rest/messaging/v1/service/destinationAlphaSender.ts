/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Messaging
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
 * Options to pass to create a DestinationAlphaSenderInstance
 */
export interface DestinationAlphaSenderListInstanceCreateOptions {
  /** The Alphanumeric Sender ID string. Can be up to 11 characters long. Valid characters are A-Z, a-z, 0-9, space, hyphen `-`, plus `+`, underscore `_` and ampersand `&`. This value cannot contain only numbers. */
  alphaSender: string;
  /** The Optional Two Character ISO Country Code the Alphanumeric Sender ID will be used for. If the IsoCountryCode is not provided, a default Alpha Sender will be created that can be used across all countries. */
  isoCountryCode?: string;
}
/**
 * Options to pass to each
 */
export interface DestinationAlphaSenderListInstanceEachOptions {
  /** Optional filter to return only alphanumeric sender IDs associated with the specified two-character ISO country code. */
  isoCountryCode?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: DestinationAlphaSenderInstance,
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
export interface DestinationAlphaSenderListInstanceOptions {
  /** Optional filter to return only alphanumeric sender IDs associated with the specified two-character ISO country code. */
  isoCountryCode?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface DestinationAlphaSenderListInstancePageOptions {
  /** Optional filter to return only alphanumeric sender IDs associated with the specified two-character ISO country code. */
  isoCountryCode?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface DestinationAlphaSenderContext {
  /**
   * Remove a DestinationAlphaSenderInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a DestinationAlphaSenderInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DestinationAlphaSenderInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: DestinationAlphaSenderInstance
    ) => any
  ): Promise<DestinationAlphaSenderInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DestinationAlphaSenderContextSolution {
  serviceSid: string;
  sid: string;
}

export class DestinationAlphaSenderContextImpl
  implements DestinationAlphaSenderContext
{
  protected _solution: DestinationAlphaSenderContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/DestinationAlphaSenders/${sid}`;
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
      item?: DestinationAlphaSenderInstance
    ) => any
  ): Promise<DestinationAlphaSenderInstance> {
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
        new DestinationAlphaSenderInstance(
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

interface DestinationAlphaSenderPayload extends TwilioResponsePayload {
  alpha_senders: DestinationAlphaSenderResource[];
}

interface DestinationAlphaSenderResource {
  sid: string;
  account_sid: string;
  service_sid: string;
  date_created: Date;
  date_updated: Date;
  alpha_sender: string;
  capabilities: Array<string>;
  url: string;
  iso_country_code: string;
}

export class DestinationAlphaSenderInstance {
  protected _solution: DestinationAlphaSenderContextSolution;
  protected _context?: DestinationAlphaSenderContext;

  constructor(
    protected _version: V1,
    payload: DestinationAlphaSenderResource,
    serviceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.alphaSender = payload.alpha_sender;
    this.capabilities = payload.capabilities;
    this.url = payload.url;
    this.isoCountryCode = payload.iso_country_code;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the AlphaSender resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AlphaSender resource.
   */
  accountSid: string;
  /**
   * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the resource is associated with.
   */
  serviceSid: string;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The Alphanumeric Sender ID string.
   */
  alphaSender: string;
  /**
   * An array of values that describe whether the number can receive calls or messages. Can be: `SMS`.
   */
  capabilities: Array<string>;
  /**
   * The absolute URL of the AlphaSender resource.
   */
  url: string;
  /**
   * The Two Character ISO Country Code the Alphanumeric Sender ID will be used for. For Default Alpha Senders that work across countries, this value will be an empty string
   */
  isoCountryCode: string;

  private get _proxy(): DestinationAlphaSenderContext {
    this._context =
      this._context ||
      new DestinationAlphaSenderContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a DestinationAlphaSenderInstance
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
   * Fetch a DestinationAlphaSenderInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DestinationAlphaSenderInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: DestinationAlphaSenderInstance
    ) => any
  ): Promise<DestinationAlphaSenderInstance> {
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
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      alphaSender: this.alphaSender,
      capabilities: this.capabilities,
      url: this.url,
      isoCountryCode: this.isoCountryCode,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface DestinationAlphaSenderSolution {
  serviceSid: string;
}

export interface DestinationAlphaSenderListInstance {
  _version: V1;
  _solution: DestinationAlphaSenderSolution;
  _uri: string;

  (sid: string): DestinationAlphaSenderContext;
  get(sid: string): DestinationAlphaSenderContext;

  /**
   * Create a DestinationAlphaSenderInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DestinationAlphaSenderInstance
   */
  create(
    params: DestinationAlphaSenderListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: DestinationAlphaSenderInstance
    ) => any
  ): Promise<DestinationAlphaSenderInstance>;

  /**
   * Streams DestinationAlphaSenderInstance records from the API.
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
   * @param { DestinationAlphaSenderListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: DestinationAlphaSenderInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: DestinationAlphaSenderListInstanceEachOptions,
    callback?: (
      item: DestinationAlphaSenderInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of DestinationAlphaSenderInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: DestinationAlphaSenderPage) => any
  ): Promise<DestinationAlphaSenderPage>;
  /**
   * Lists DestinationAlphaSenderInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DestinationAlphaSenderListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: DestinationAlphaSenderInstance[]
    ) => any
  ): Promise<DestinationAlphaSenderInstance[]>;
  list(
    params: DestinationAlphaSenderListInstanceOptions,
    callback?: (
      error: Error | null,
      items: DestinationAlphaSenderInstance[]
    ) => any
  ): Promise<DestinationAlphaSenderInstance[]>;
  /**
   * Retrieve a single page of DestinationAlphaSenderInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DestinationAlphaSenderListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: DestinationAlphaSenderPage) => any
  ): Promise<DestinationAlphaSenderPage>;
  page(
    params: DestinationAlphaSenderListInstancePageOptions,
    callback?: (error: Error | null, items: DestinationAlphaSenderPage) => any
  ): Promise<DestinationAlphaSenderPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function DestinationAlphaSenderListInstance(
  version: V1,
  serviceSid: string
): DestinationAlphaSenderListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as DestinationAlphaSenderListInstance;

  instance.get = function get(sid): DestinationAlphaSenderContext {
    return new DestinationAlphaSenderContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/DestinationAlphaSenders`;

  instance.create = function create(
    params: DestinationAlphaSenderListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      items: DestinationAlphaSenderInstance
    ) => any
  ): Promise<DestinationAlphaSenderInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["alphaSender"] === null || params["alphaSender"] === undefined) {
      throw new Error("Required parameter \"params['alphaSender']\" missing.");
    }

    let data: any = {};

    data["AlphaSender"] = params["alphaSender"];
    if (params["isoCountryCode"] !== undefined)
      data["IsoCountryCode"] = params["isoCountryCode"];

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
        new DestinationAlphaSenderInstance(
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
    params?:
      | DestinationAlphaSenderListInstancePageOptions
      | ((error: Error | null, items: DestinationAlphaSenderPage) => any),
    callback?: (error: Error | null, items: DestinationAlphaSenderPage) => any
  ): Promise<DestinationAlphaSenderPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["isoCountryCode"] !== undefined)
      data["IsoCountryCode"] = params["isoCountryCode"];
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
        new DestinationAlphaSenderPage(
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
    callback?: (error: Error | null, items: DestinationAlphaSenderPage) => any
  ): Promise<DestinationAlphaSenderPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new DestinationAlphaSenderPage(
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

export class DestinationAlphaSenderPage extends Page<
  V1,
  DestinationAlphaSenderPayload,
  DestinationAlphaSenderResource,
  DestinationAlphaSenderInstance
> {
  /**
   * Initialize the DestinationAlphaSenderPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: DestinationAlphaSenderSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of DestinationAlphaSenderInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: DestinationAlphaSenderResource
  ): DestinationAlphaSenderInstance {
    return new DestinationAlphaSenderInstance(
      this._version,
      payload,
      this._solution.serviceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
