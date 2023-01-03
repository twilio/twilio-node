/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Numbers
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

type EndUserType = "individual" | "business";

/**
 * Options to pass to update a EndUserInstance
 *
 * @property { string } [friendlyName] The string that you assigned to describe the resource.
 * @property { any } [attributes] The set of parameters that are the attributes of the End User resource which are derived End User Types.
 */
export interface EndUserContextUpdateOptions {
  friendlyName?: string;
  attributes?: any;
}

/**
 * Options to pass to create a EndUserInstance
 *
 * @property { string } friendlyName The string that you assigned to describe the resource.
 * @property { EndUserType } type
 * @property { any } [attributes] The set of parameters that are the attributes of the End User resource which are derived End User Types.
 */
export interface EndUserListInstanceCreateOptions {
  friendlyName: string;
  type: EndUserType;
  attributes?: any;
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
export interface EndUserListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: EndUserInstance, done: (err?: Error) => void) => void;
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
export interface EndUserListInstanceOptions {
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
export interface EndUserListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface EndUserContext {
  /**
   * Remove a EndUserInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a EndUserInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EndUserInstance
   */
  fetch(
    callback?: (error: Error | null, item?: EndUserInstance) => any
  ): Promise<EndUserInstance>;

  /**
   * Update a EndUserInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EndUserInstance
   */
  update(
    callback?: (error: Error | null, item?: EndUserInstance) => any
  ): Promise<EndUserInstance>;
  /**
   * Update a EndUserInstance
   *
   * @param { EndUserContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EndUserInstance
   */
  update(
    params: EndUserContextUpdateOptions,
    callback?: (error: Error | null, item?: EndUserInstance) => any
  ): Promise<EndUserInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface EndUserContextSolution {
  sid?: string;
}

export class EndUserContextImpl implements EndUserContext {
  protected _solution: EndUserContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/RegulatoryCompliance/EndUsers/${sid}`;
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
    callback?: (error: Error | null, item?: EndUserInstance) => any
  ): Promise<EndUserInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new EndUserInstance(operationVersion, payload, this._solution.sid)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | EndUserContextUpdateOptions
      | ((error: Error | null, item?: EndUserInstance) => any),
    callback?: (error: Error | null, item?: EndUserInstance) => any
  ): Promise<EndUserInstance> {
    if (typeof params === "function") {
      callback = params as (error: Error | null, item?: EndUserInstance) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["attributes"] !== undefined)
      data["Attributes"] = serialize.object(params["attributes"]);

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
        new EndUserInstance(operationVersion, payload, this._solution.sid)
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

interface EndUserPayload extends TwilioResponsePayload {
  results: EndUserResource[];
}

interface EndUserResource {
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  type?: EndUserType;
  attributes?: any | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
}

export class EndUserInstance {
  protected _solution: EndUserContextSolution;
  protected _context?: EndUserContext;

  constructor(protected _version: V2, payload: EndUserResource, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.type = payload.type;
    this.attributes = payload.attributes;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
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
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  type?: EndUserType;
  /**
   * The set of parameters that compose the End Users resource
   */
  attributes?: any | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the End User resource
   */
  url?: string | null;

  private get _proxy(): EndUserContext {
    this._context =
      this._context ||
      new EndUserContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a EndUserInstance
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
   * Fetch a EndUserInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EndUserInstance
   */
  fetch(
    callback?: (error: Error | null, item?: EndUserInstance) => any
  ): Promise<EndUserInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a EndUserInstance
   *
   * @param { EndUserContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EndUserInstance
   */
  update(
    params?: EndUserContextUpdateOptions,
    callback?: (error: Error | null, item?: EndUserInstance) => any
  ): Promise<EndUserInstance> {
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
      friendlyName: this.friendlyName,
      type: this.type,
      attributes: this.attributes,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface EndUserListInstance {
  (sid: string): EndUserContext;
  get(sid: string): EndUserContext;

  /**
   * Create a EndUserInstance
   *
   * @param { EndUserListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EndUserInstance
   */
  create(
    params: EndUserListInstanceCreateOptions,
    callback?: (error: Error | null, item?: EndUserInstance) => any
  ): Promise<EndUserInstance>;

  /**
   * Streams EndUserInstance records from the API.
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
   * @param { EndUserListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: EndUserInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: EndUserListInstanceEachOptions,
    callback?: (item: EndUserInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of EndUserInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: EndUserPage) => any
  ): Promise<EndUserPage>;
  /**
   * Lists EndUserInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EndUserListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: EndUserInstance[]) => any
  ): Promise<EndUserInstance[]>;
  list(
    params: EndUserListInstanceOptions,
    callback?: (error: Error | null, items: EndUserInstance[]) => any
  ): Promise<EndUserInstance[]>;
  /**
   * Retrieve a single page of EndUserInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EndUserListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: EndUserPage) => any
  ): Promise<EndUserPage>;
  page(
    params: EndUserListInstancePageOptions,
    callback?: (error: Error | null, items: EndUserPage) => any
  ): Promise<EndUserPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface EndUserSolution {}

interface EndUserListInstanceImpl extends EndUserListInstance {}
class EndUserListInstanceImpl implements EndUserListInstance {
  _version?: V2;
  _solution?: EndUserSolution;
  _uri?: string;
}

export function EndUserListInstance(version: V2): EndUserListInstance {
  const instance = ((sid) => instance.get(sid)) as EndUserListInstanceImpl;

  instance.get = function get(sid): EndUserContext {
    return new EndUserContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/RegulatoryCompliance/EndUsers`;

  instance.create = function create(
    params: EndUserListInstanceCreateOptions,
    callback?: (error: Error | null, item?: EndUserInstance) => any
  ): Promise<EndUserInstance> {
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

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];

    data["Type"] = params["type"];
    if (params["attributes"] !== undefined)
      data["Attributes"] = serialize.object(params["attributes"]);

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
      (payload) => new EndUserInstance(operationVersion, payload)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | EndUserListInstancePageOptions
      | ((error: Error | null, item?: EndUserPage) => any),
    callback?: (error: Error | null, item?: EndUserPage) => any
  ): Promise<EndUserPage> {
    if (typeof params === "function") {
      callback = params as (error: Error | null, item?: EndUserPage) => any;
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
      (payload) => new EndUserPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: EndUserPage) => any
  ): Promise<EndUserPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new EndUserPage(this._version, payload, this._solution)
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

export class EndUserPage extends Page<
  V2,
  EndUserPayload,
  EndUserResource,
  EndUserInstance
> {
  /**
   * Initialize the EndUserPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: EndUserSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of EndUserInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: EndUserResource): EndUserInstance {
    return new EndUserInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
