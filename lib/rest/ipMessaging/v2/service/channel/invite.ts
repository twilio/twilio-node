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
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * Options to pass to create a InviteInstance
 */
export interface InviteListInstanceCreateOptions {
  /**  */
  identity: string;
  /**  */
  roleSid?: string;
}
/**
 * Options to pass to each
 */
export interface InviteListInstanceEachOptions {
  /**  */
  identity?: Array<string>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: InviteInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface InviteListInstanceOptions {
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
export interface InviteListInstancePageOptions {
  /**  */
  identity?: Array<string>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface InviteContext {
  /**
   * Remove a InviteInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a InviteInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InviteInstance
   */
  fetch(
    callback?: (error: Error | null, item?: InviteInstance) => any
  ): Promise<InviteInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface InviteContextSolution {
  serviceSid: string;
  channelSid: string;
  sid: string;
}

export class InviteContextImpl implements InviteContext {
  protected _solution: InviteContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V2,
    serviceSid: string,
    channelSid: string,
    sid: string
  ) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(channelSid)) {
      throw new Error("Parameter 'channelSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, channelSid, sid };
    this._uri = `/Services/${serviceSid}/Channels/${channelSid}/Invites/${sid}`;
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
    callback?: (error: Error | null, item?: InviteInstance) => any
  ): Promise<InviteInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new InviteInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.channelSid,
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

interface InvitePayload extends TwilioResponsePayload {
  invites: InviteResource[];
}

interface InviteResource {
  sid: string;
  account_sid: string;
  channel_sid: string;
  service_sid: string;
  identity: string;
  date_created: Date;
  date_updated: Date;
  role_sid: string;
  created_by: string;
  url: string;
}

export class InviteInstance {
  protected _solution: InviteContextSolution;
  protected _context?: InviteContext;

  constructor(
    protected _version: V2,
    payload: InviteResource,
    serviceSid: string,
    channelSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.channelSid = payload.channel_sid;
    this.serviceSid = payload.service_sid;
    this.identity = payload.identity;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.roleSid = payload.role_sid;
    this.createdBy = payload.created_by;
    this.url = payload.url;

    this._solution = { serviceSid, channelSid, sid: sid || this.sid };
  }

  sid: string;
  accountSid: string;
  channelSid: string;
  serviceSid: string;
  identity: string;
  dateCreated: Date;
  dateUpdated: Date;
  roleSid: string;
  createdBy: string;
  url: string;

  private get _proxy(): InviteContext {
    this._context =
      this._context ||
      new InviteContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.channelSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a InviteInstance
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
   * Fetch a InviteInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InviteInstance
   */
  fetch(
    callback?: (error: Error | null, item?: InviteInstance) => any
  ): Promise<InviteInstance> {
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
      channelSid: this.channelSid,
      serviceSid: this.serviceSid,
      identity: this.identity,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      roleSid: this.roleSid,
      createdBy: this.createdBy,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface InviteSolution {
  serviceSid: string;
  channelSid: string;
}

export interface InviteListInstance {
  _version: V2;
  _solution: InviteSolution;
  _uri: string;

  (sid: string): InviteContext;
  get(sid: string): InviteContext;

  /**
   * Create a InviteInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InviteInstance
   */
  create(
    params: InviteListInstanceCreateOptions,
    callback?: (error: Error | null, item?: InviteInstance) => any
  ): Promise<InviteInstance>;

  /**
   * Streams InviteInstance records from the API.
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
   * @param { InviteListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: InviteInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: InviteListInstanceEachOptions,
    callback?: (item: InviteInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of InviteInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: InvitePage) => any
  ): Promise<InvitePage>;
  /**
   * Lists InviteInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InviteListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: InviteInstance[]) => any
  ): Promise<InviteInstance[]>;
  list(
    params: InviteListInstanceOptions,
    callback?: (error: Error | null, items: InviteInstance[]) => any
  ): Promise<InviteInstance[]>;
  /**
   * Retrieve a single page of InviteInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InviteListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: InvitePage) => any
  ): Promise<InvitePage>;
  page(
    params: InviteListInstancePageOptions,
    callback?: (error: Error | null, items: InvitePage) => any
  ): Promise<InvitePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function InviteListInstance(
  version: V2,
  serviceSid: string,
  channelSid: string
): InviteListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  if (!isValidPathParam(channelSid)) {
    throw new Error("Parameter 'channelSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as InviteListInstance;

  instance.get = function get(sid): InviteContext {
    return new InviteContextImpl(version, serviceSid, channelSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid, channelSid };
  instance._uri = `/Services/${serviceSid}/Channels/${channelSid}/Invites`;

  instance.create = function create(
    params: InviteListInstanceCreateOptions,
    callback?: (error: Error | null, items: InviteInstance) => any
  ): Promise<InviteInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["identity"] === null || params["identity"] === undefined) {
      throw new Error("Required parameter \"params['identity']\" missing.");
    }

    let data: any = {};

    data["Identity"] = params["identity"];
    if (params["roleSid"] !== undefined) data["RoleSid"] = params["roleSid"];

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
        new InviteInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.channelSid
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
      | InviteListInstancePageOptions
      | ((error: Error | null, items: InvitePage) => any),
    callback?: (error: Error | null, items: InvitePage) => any
  ): Promise<InvitePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

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
      (payload) => new InvitePage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: InvitePage) => any
  ): Promise<InvitePage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new InvitePage(instance._version, payload, instance._solution)
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

export class InvitePage extends Page<
  V2,
  InvitePayload,
  InviteResource,
  InviteInstance
> {
  /**
   * Initialize the InvitePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: InviteSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of InviteInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: InviteResource): InviteInstance {
    return new InviteInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.channelSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
