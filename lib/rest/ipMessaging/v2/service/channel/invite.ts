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
import Page from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");

/**
 * Options to pass to create a InviteInstance
 *
 * @property { string } identity
 * @property { string } [roleSid]
 */
export interface InviteListInstanceCreateOptions {
  identity: string;
  roleSid?: string;
}
/**
 * Options to pass to each
 *
 * @property { Array<string> } [identity]
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
export interface InviteListInstanceEachOptions {
  identity?: Array<string>;
  pageSize?: number;
  callback?: (item: InviteInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { Array<string> } [identity]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface InviteListInstanceOptions {
  identity?: Array<string>;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { Array<string> } [identity]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface InviteListInstancePageOptions {
  identity?: Array<string>;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface InviteContext {
  /**
   * Remove a InviteInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a InviteInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed InviteInstance
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
  serviceSid?: string;
  channelSid?: string;
  sid?: string;
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
    this._solution = { serviceSid, channelSid, sid };
    this._uri = `/Services/${serviceSid}/Channels/${channelSid}/Invites/${sid}`;
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

  fetch(callback?: any): Promise<InviteInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new InviteInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.channelSid,
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

interface InvitePayload extends InviteResource, Page.TwilioResponsePayload {}

interface InviteResource {
  sid?: string | null;
  account_sid?: string | null;
  channel_sid?: string | null;
  service_sid?: string | null;
  identity?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  role_sid?: string | null;
  created_by?: string | null;
  url?: string | null;
}

export class InviteInstance {
  protected _solution: InviteContextSolution;
  protected _context?: InviteContext;

  constructor(
    protected _version: V2,
    payload: InvitePayload,
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

  sid?: string | null;
  accountSid?: string | null;
  channelSid?: string | null;
  serviceSid?: string | null;
  identity?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  roleSid?: string | null;
  createdBy?: string | null;
  url?: string | null;

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
   * Fetch a InviteInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed InviteInstance
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

export interface InviteListInstance {
  (sid: string): InviteContext;
  get(sid: string): InviteContext;

  /**
   * Create a InviteInstance
   *
   * @param { InviteListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed InviteInstance
   */
  create(
    params: InviteListInstanceCreateOptions,
    callback?: (error: Error | null, item?: InviteInstance) => any
  ): Promise<InviteInstance>;
  create(params: any, callback?: any): Promise<InviteInstance>;

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
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: InviteInstance, done: (err?: Error) => void) => void
  ): void;
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
    params?: InviteListInstanceEachOptions,
    callback?: (item: InviteInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of InviteInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: InvitePage) => any
  ): Promise<InvitePage>;
  /**
   * Retrieve a single target page of InviteInstance records from the API.
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
    callback?: (error: Error | null, items: InvitePage) => any
  ): Promise<InvitePage>;
  getPage(params?: any, callback?: any): Promise<InvitePage>;
  /**
   * Lists InviteInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: InviteInstance[]) => any
  ): Promise<InviteInstance[]>;
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
    params?: InviteListInstanceOptions,
    callback?: (error: Error | null, items: InviteInstance[]) => any
  ): Promise<InviteInstance[]>;
  list(params?: any, callback?: any): Promise<InviteInstance[]>;
  /**
   * Retrieve a single page of InviteInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: InvitePage) => any
  ): Promise<InvitePage>;
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
    params: InviteListInstancePageOptions,
    callback?: (error: Error | null, items: InvitePage) => any
  ): Promise<InvitePage>;
  page(params?: any, callback?: any): Promise<InvitePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface InviteSolution {
  serviceSid?: string;
  channelSid?: string;
}

interface InviteListInstanceImpl extends InviteListInstance {}
class InviteListInstanceImpl implements InviteListInstance {
  _version?: V2;
  _solution?: InviteSolution;
  _uri?: string;
}

export function InviteListInstance(
  version: V2,
  serviceSid: string,
  channelSid: string
): InviteListInstance {
  const instance = ((sid) => instance.get(sid)) as InviteListInstanceImpl;

  instance.get = function get(sid): InviteContext {
    return new InviteContextImpl(version, serviceSid, channelSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid, channelSid };
  instance._uri = `/Services/${serviceSid}/Channels/${channelSid}/Invites`;

  instance.create = function create(
    params: any,
    callback?: any
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
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new InviteInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.channelSid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<InvitePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["identity"] !== undefined)
      data["Identity"] = serialize.map(params["identity"], (e) => e);
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
      (payload) => new InvitePage(operationVersion, payload, this._solution)
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
    targetUrl?: any,
    callback?: any
  ): Promise<InvitePage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new InvitePage(this._version, payload, this._solution)
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
  getInstance(payload: InvitePayload): InviteInstance {
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
