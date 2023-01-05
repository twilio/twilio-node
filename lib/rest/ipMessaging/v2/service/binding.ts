/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Ip_messaging
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2 from "../../V2";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

type BindingBindingType = "gcm" | "apn" | "fcm";

/**
 * Options to pass to each
 */
export interface BindingListInstanceEachOptions {
  /**  */
  bindingType?: Array<BindingBindingType>;
  /**  */
  identity?: Array<string>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: BindingInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface BindingListInstanceOptions {
  /**  */
  bindingType?: Array<BindingBindingType>;
  /**  */
  identity?: Array<string>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface BindingListInstancePageOptions {
  /**  */
  bindingType?: Array<BindingBindingType>;
  /**  */
  identity?: Array<string>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface BindingContext {
  /**
   * Remove a BindingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a BindingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BindingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BindingInstance) => any
  ): Promise<BindingInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BindingContextSolution {
  serviceSid: string;
  sid: string;
}

export class BindingContextImpl implements BindingContext {
  protected _solution: BindingContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Bindings/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
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

  fetch(
    callback?: (error: Error | null, item?: BindingInstance) => any
  ): Promise<BindingInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new BindingInstance(
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

interface BindingPayload extends TwilioResponsePayload {
  bindings: BindingResource[];
}

interface BindingResource {
  sid: string;
  account_sid: string;
  service_sid: string;
  date_created: Date;
  date_updated: Date;
  endpoint: string;
  identity: string;
  credential_sid: string;
  binding_type: BindingBindingType;
  message_types: Array<string>;
  url: string;
  links: object;
}

export class BindingInstance {
  protected _solution: BindingContextSolution;
  protected _context?: BindingContext;

  constructor(
    protected _version: V2,
    payload: BindingResource,
    serviceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.endpoint = payload.endpoint;
    this.identity = payload.identity;
    this.credentialSid = payload.credential_sid;
    this.bindingType = payload.binding_type;
    this.messageTypes = payload.message_types;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  sid: string;
  accountSid: string;
  serviceSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  endpoint: string;
  identity: string;
  credentialSid: string;
  bindingType: BindingBindingType;
  messageTypes: Array<string>;
  url: string;
  links: object;

  private get _proxy(): BindingContext {
    this._context =
      this._context ||
      new BindingContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a BindingInstance
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
   * Fetch a BindingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BindingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BindingInstance) => any
  ): Promise<BindingInstance> {
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
      endpoint: this.endpoint,
      identity: this.identity,
      credentialSid: this.credentialSid,
      bindingType: this.bindingType,
      messageTypes: this.messageTypes,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface BindingSolution {
  serviceSid: string;
}

export interface BindingListInstance {
  _version: V2;
  _solution: BindingSolution;
  _uri: string;

  (sid: string): BindingContext;
  get(sid: string): BindingContext;

  /**
   * Streams BindingInstance records from the API.
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
   * @param { BindingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: BindingInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: BindingListInstanceEachOptions,
    callback?: (item: BindingInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of BindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: BindingPage) => any
  ): Promise<BindingPage>;
  /**
   * Lists BindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BindingListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: BindingInstance[]) => any
  ): Promise<BindingInstance[]>;
  list(
    params: BindingListInstanceOptions,
    callback?: (error: Error | null, items: BindingInstance[]) => any
  ): Promise<BindingInstance[]>;
  /**
   * Retrieve a single page of BindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BindingListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: BindingPage) => any
  ): Promise<BindingPage>;
  page(
    params: BindingListInstancePageOptions,
    callback?: (error: Error | null, items: BindingPage) => any
  ): Promise<BindingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function BindingListInstance(
  version: V2,
  serviceSid: string
): BindingListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as BindingListInstance;

  instance.get = function get(sid): BindingContext {
    return new BindingContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Bindings`;

  instance.page = function page(
    params?:
      | BindingListInstancePageOptions
      | ((error: Error | null, items: BindingPage) => any),
    callback?: (error: Error | null, items: BindingPage) => any
  ): Promise<BindingPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["bindingType"] !== undefined)
      data["BindingType"] = serialize.map(
        params["bindingType"],
        (e: BindingBindingType) => e
      );
    if (params["identity"] !== undefined)
      data["Identity"] = serialize.map(params["identity"], (e: string) => e);
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
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
        new BindingPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: BindingPage) => any
  ): Promise<BindingPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new BindingPage(instance._version, payload, instance._solution)
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

export class BindingPage extends Page<
  V2,
  BindingPayload,
  BindingResource,
  BindingInstance
> {
  /**
   * Initialize the BindingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: BindingSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of BindingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: BindingResource): BindingInstance {
    return new BindingInstance(
      this._version,
      payload,
      this._solution.serviceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
