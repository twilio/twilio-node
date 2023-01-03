/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Chat
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

type RoleRoleType = "channel" | "deployment";

/**
 * Options to pass to update a RoleInstance
 *
 * @property { Array<string> } permission A permission that you grant to the role. Only one permission can be granted per parameter. To assign more than one permission, repeat this parameter for each permission value. The values for this parameter depend on the role\\\'s `type` and are described in the documentation.
 */
export interface RoleContextUpdateOptions {
  permission: Array<string>;
}

/**
 * Options to pass to create a RoleInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the new resource. It can be up to 64 characters long.
 * @property { RoleRoleType } type
 * @property { Array<string> } permission A permission that you grant to the new role. Only one permission can be granted per parameter. To assign more than one permission, repeat this parameter for each permission value. The values for this parameter depend on the role\\\'s `type` and are described in the documentation.
 */
export interface RoleListInstanceCreateOptions {
  friendlyName: string;
  type: RoleRoleType;
  permission: Array<string>;
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
export interface RoleListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: RoleInstance, done: (err?: Error) => void) => void;
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
export interface RoleListInstanceOptions {
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
export interface RoleListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface RoleContext {
  /**
   * Remove a RoleInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a RoleInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RoleInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RoleInstance) => any
  ): Promise<RoleInstance>;

  /**
   * Update a RoleInstance
   *
   * @param { RoleContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RoleInstance
   */
  update(
    params: RoleContextUpdateOptions,
    callback?: (error: Error | null, item?: RoleInstance) => any
  ): Promise<RoleInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RoleContextSolution {
  serviceSid?: string;
  sid?: string;
}

export class RoleContextImpl implements RoleContext {
  protected _solution: RoleContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Roles/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
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

  fetch(
    callback?: (error: Error | null, item?: RoleInstance) => any
  ): Promise<RoleInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new RoleInstance(
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

  update(
    params:
      | RoleContextUpdateOptions
      | ((error: Error | null, item?: RoleInstance) => any),
    callback?: (error: Error | null, item?: RoleInstance) => any
  ): Promise<RoleInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["permission"] === null || params["permission"] === undefined) {
      throw new Error("Required parameter \"params['permission']\" missing.");
    }

    let data: any = {};

    data["Permission"] = serialize.map(params["permission"], (e) => e);

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
        new RoleInstance(
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

interface RolePayload extends TwilioResponsePayload {
  roles: RoleResource[];
}

interface RoleResource {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  friendly_name?: string | null;
  type?: RoleRoleType;
  permissions?: Array<string> | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
}

export class RoleInstance {
  protected _solution: RoleContextSolution;
  protected _context?: RoleContext;

  constructor(
    protected _version: V1,
    payload: RoleResource,
    serviceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.friendlyName = payload.friendly_name;
    this.type = payload.type;
    this.permissions = payload.permissions;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Service that the resource is associated with
   */
  serviceSid?: string | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  type?: RoleRoleType;
  /**
   * An array of the permissions the role has been granted
   */
  permissions?: Array<string> | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the Role resource
   */
  url?: string | null;

  private get _proxy(): RoleContext {
    this._context =
      this._context ||
      new RoleContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a RoleInstance
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
   * Fetch a RoleInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RoleInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RoleInstance) => any
  ): Promise<RoleInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a RoleInstance
   *
   * @param { RoleContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RoleInstance
   */
  update(
    params: RoleContextUpdateOptions,
    callback?: (error: Error | null, item?: RoleInstance) => any
  ): Promise<RoleInstance> {
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
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      friendlyName: this.friendlyName,
      type: this.type,
      permissions: this.permissions,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface RoleListInstance {
  (sid: string): RoleContext;
  get(sid: string): RoleContext;

  /**
   * Create a RoleInstance
   *
   * @param { RoleListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RoleInstance
   */
  create(
    params: RoleListInstanceCreateOptions,
    callback?: (error: Error | null, item?: RoleInstance) => any
  ): Promise<RoleInstance>;

  /**
   * Streams RoleInstance records from the API.
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
   * @param { RoleListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: RoleInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: RoleListInstanceEachOptions,
    callback?: (item: RoleInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of RoleInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: RolePage) => any
  ): Promise<RolePage>;
  /**
   * Lists RoleInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RoleListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: RoleInstance[]) => any
  ): Promise<RoleInstance[]>;
  list(
    params: RoleListInstanceOptions,
    callback?: (error: Error | null, items: RoleInstance[]) => any
  ): Promise<RoleInstance[]>;
  /**
   * Retrieve a single page of RoleInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RoleListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: RolePage) => any
  ): Promise<RolePage>;
  page(
    params: RoleListInstancePageOptions,
    callback?: (error: Error | null, items: RolePage) => any
  ): Promise<RolePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RoleSolution {
  serviceSid?: string;
}

interface RoleListInstanceImpl extends RoleListInstance {}
class RoleListInstanceImpl implements RoleListInstance {
  _version?: V1;
  _solution?: RoleSolution;
  _uri?: string;
}

export function RoleListInstance(
  version: V1,
  serviceSid: string
): RoleListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as RoleListInstanceImpl;

  instance.get = function get(sid): RoleContext {
    return new RoleContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Roles`;

  instance.create = function create(
    params: RoleListInstanceCreateOptions,
    callback?: (error: Error | null, item?: RoleInstance) => any
  ): Promise<RoleInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    if (params["type"] === null || params["type"] === undefined) {
      throw new Error("Required parameter \"params['type']\" missing.");
    }

    if (params["permission"] === null || params["permission"] === undefined) {
      throw new Error("Required parameter \"params['permission']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];

    data["Type"] = params["type"];

    data["Permission"] = serialize.map(params["permission"], (e) => e);

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
        new RoleInstance(operationVersion, payload, this._solution.serviceSid)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | RoleListInstancePageOptions
      | ((error: Error | null, item?: RolePage) => any),
    callback?: (error: Error | null, item?: RolePage) => any
  ): Promise<RolePage> {
    if (typeof params === "function") {
      callback = params as (error: Error | null, item?: RolePage) => any;
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
      (payload) => new RolePage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: RolePage) => any
  ): Promise<RolePage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new RolePage(this._version, payload, this._solution)
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

export class RolePage extends Page<
  V1,
  RolePayload,
  RoleResource,
  RoleInstance
> {
  /**
   * Initialize the RolePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: RoleSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of RoleInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RoleResource): RoleInstance {
    return new RoleInstance(this._version, payload, this._solution.serviceSid);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
