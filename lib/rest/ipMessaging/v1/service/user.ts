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
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { UserChannelListInstance } from "./user/userChannel";

/**
 * Options to pass to update a UserInstance
 *
 * @property { string } [roleSid]
 * @property { string } [attributes]
 * @property { string } [friendlyName]
 */
export interface UserContextUpdateOptions {
  roleSid?: string;
  attributes?: string;
  friendlyName?: string;
}

/**
 * Options to pass to create a UserInstance
 *
 * @property { string } identity
 * @property { string } [roleSid]
 * @property { string } [attributes]
 * @property { string } [friendlyName]
 */
export interface UserListInstanceCreateOptions {
  identity: string;
  roleSid?: string;
  attributes?: string;
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
export interface UserListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: UserInstance, done: (err?: Error) => void) => void;
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
export interface UserListInstanceOptions {
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
export interface UserListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface UserContext {
  userChannels: UserChannelListInstance;

  /**
   * Remove a UserInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a UserInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserInstance
   */
  fetch(
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance>;

  /**
   * Update a UserInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserInstance
   */
  update(
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance>;
  /**
   * Update a UserInstance
   *
   * @param { UserContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserInstance
   */
  update(
    params?:
      | UserContextUpdateOptions
      | ((error: Error | null, item?: UserInstance) => any),
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface UserContextSolution {
  serviceSid?: string;
  sid?: string;
}

export class UserContextImpl implements UserContext {
  protected _solution: UserContextSolution;
  protected _uri: string;

  protected _userChannels?: UserChannelListInstance;

  constructor(protected _version: V1, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Users/${sid}`;
  }

  get userChannels(): UserChannelListInstance {
    this._userChannels =
      this._userChannels ||
      UserChannelListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._userChannels;
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

  fetch(callback?: any): Promise<UserInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new UserInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<UserInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["roleSid"] !== undefined) data["RoleSid"] = params["roleSid"];
    if (params["attributes"] !== undefined)
      data["Attributes"] = params["attributes"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];

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
        new UserInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
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

interface UserPayload extends TwilioResponsePayload {
  users: UserResource[];
}

interface UserResource {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  attributes?: string | null;
  friendly_name?: string | null;
  role_sid?: string | null;
  identity?: string | null;
  is_online?: boolean | null;
  is_notifiable?: boolean | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  joined_channels_count?: number | null;
  links?: object | null;
  url?: string | null;
}

export class UserInstance {
  protected _solution: UserContextSolution;
  protected _context?: UserContext;

  constructor(
    protected _version: V1,
    payload: UserResource,
    serviceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.attributes = payload.attributes;
    this.friendlyName = payload.friendly_name;
    this.roleSid = payload.role_sid;
    this.identity = payload.identity;
    this.isOnline = payload.is_online;
    this.isNotifiable = payload.is_notifiable;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.joinedChannelsCount = deserialize.integer(
      payload.joined_channels_count
    );
    this.links = payload.links;
    this.url = payload.url;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  sid?: string | null;
  accountSid?: string | null;
  serviceSid?: string | null;
  attributes?: string | null;
  friendlyName?: string | null;
  roleSid?: string | null;
  identity?: string | null;
  isOnline?: boolean | null;
  isNotifiable?: boolean | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  joinedChannelsCount?: number | null;
  links?: object | null;
  url?: string | null;

  private get _proxy(): UserContext {
    this._context =
      this._context ||
      new UserContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a UserInstance
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
   * Fetch a UserInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserInstance
   */
  fetch(
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a UserInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserInstance
   */
  update(
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance>;
  /**
   * Update a UserInstance
   *
   * @param { UserContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserInstance
   */
  update(
    params?:
      | UserContextUpdateOptions
      | ((error: Error | null, item?: UserInstance) => any),
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the userChannels.
   */
  userChannels(): UserChannelListInstance {
    return this._proxy.userChannels;
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
      attributes: this.attributes,
      friendlyName: this.friendlyName,
      roleSid: this.roleSid,
      identity: this.identity,
      isOnline: this.isOnline,
      isNotifiable: this.isNotifiable,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      joinedChannelsCount: this.joinedChannelsCount,
      links: this.links,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface UserListInstance {
  (sid: string): UserContext;
  get(sid: string): UserContext;

  /**
   * Create a UserInstance
   *
   * @param { UserListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserInstance
   */
  create(
    params: UserListInstanceCreateOptions,
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance>;

  /**
   * Streams UserInstance records from the API.
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
   * @param { UserListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | UserListInstanceEachOptions
      | ((item: UserInstance, done: (err?: Error) => void) => void),
    callback?: (item: UserInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of UserInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: UserPage) => any
  ): Promise<UserPage>;
  /**
   * Lists UserInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UserListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | UserListInstanceOptions
      | ((error: Error | null, items: UserInstance[]) => any),
    callback?: (error: Error | null, items: UserInstance[]) => any
  ): Promise<UserInstance[]>;
  /**
   * Retrieve a single page of UserInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UserListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | UserListInstancePageOptions
      | ((error: Error | null, items: UserPage) => any),
    callback?: (error: Error | null, items: UserPage) => any
  ): Promise<UserPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface UserSolution {
  serviceSid?: string;
}

interface UserListInstanceImpl extends UserListInstance {}
class UserListInstanceImpl implements UserListInstance {
  _version?: V1;
  _solution?: UserSolution;
  _uri?: string;
}

export function UserListInstance(
  version: V1,
  serviceSid: string
): UserListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as UserListInstanceImpl;

  instance.get = function get(sid): UserContext {
    return new UserContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Users`;

  instance.create = function create(
    params: UserListInstanceCreateOptions,
    callback?: (error: Error | null, item?: UserInstance) => any
  ): Promise<UserInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["identity"] === null || params["identity"] === undefined) {
      throw new Error("Required parameter \"params['identity']\" missing.");
    }

    let data: any = {};

    data["Identity"] = params["identity"];
    if (params["roleSid"] !== undefined) data["RoleSid"] = params["roleSid"];
    if (params["attributes"] !== undefined)
      data["Attributes"] = params["attributes"];
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
      (payload) =>
        new UserInstance(operationVersion, payload, this._solution.serviceSid)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | UserListInstancePageOptions
      | ((error: Error | null, item?: UserPage) => any),
    callback?: (error: Error | null, item?: UserPage) => any
  ): Promise<UserPage> {
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
      (payload) => new UserPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: UserPage) => any
  ): Promise<UserPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new UserPage(this._version, payload, this._solution)
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

export class UserPage extends Page<
  V1,
  UserPayload,
  UserResource,
  UserInstance
> {
  /**
   * Initialize the UserPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: UserSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of UserInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: UserResource): UserInstance {
    return new UserInstance(this._version, payload, this._solution.serviceSid);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
