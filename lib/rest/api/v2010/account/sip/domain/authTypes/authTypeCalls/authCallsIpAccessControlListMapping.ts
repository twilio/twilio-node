/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../../../../base/Page";
import Response from "../../../../../../../../http/response";
import V2010 from "../../../../../../V2010";
const deserialize = require("../../../../../../../../base/deserialize");
const serialize = require("../../../../../../../../base/serialize");
import { isValidPathParam } from "../../../../../../../../base/utility";

/**
 * Options to pass to create a AuthCallsIpAccessControlListMappingInstance
 *
 * @property { string } ipAccessControlListSid The SID of the IpAccessControlList resource to map to the SIP domain.
 */
export interface AuthCallsIpAccessControlListMappingListInstanceCreateOptions {
  ipAccessControlListSid: string;
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
export interface AuthCallsIpAccessControlListMappingListInstanceEachOptions {
  pageSize?: number;
  callback?: (
    item: AuthCallsIpAccessControlListMappingInstance,
    done: (err?: Error) => void
  ) => void;
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
export interface AuthCallsIpAccessControlListMappingListInstanceOptions {
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
export interface AuthCallsIpAccessControlListMappingListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface AuthCallsIpAccessControlListMappingContext {
  /**
   * Remove a AuthCallsIpAccessControlListMappingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a AuthCallsIpAccessControlListMappingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AuthCallsIpAccessControlListMappingInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: AuthCallsIpAccessControlListMappingInstance
    ) => any
  ): Promise<AuthCallsIpAccessControlListMappingInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AuthCallsIpAccessControlListMappingContextSolution {
  accountSid?: string;
  domainSid?: string;
  sid?: string;
}

export class AuthCallsIpAccessControlListMappingContextImpl
  implements AuthCallsIpAccessControlListMappingContext
{
  protected _solution: AuthCallsIpAccessControlListMappingContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V2010,
    accountSid: string,
    domainSid: string,
    sid: string
  ) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(domainSid)) {
      throw new Error("Parameter 'domainSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, domainSid, sid };
    this._uri = `/Accounts/${accountSid}/SIP/Domains/${domainSid}/Auth/Calls/IpAccessControlListMappings/${sid}.json`;
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
    callback?: (
      error: Error | null,
      item?: AuthCallsIpAccessControlListMappingInstance
    ) => any
  ): Promise<AuthCallsIpAccessControlListMappingInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AuthCallsIpAccessControlListMappingInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.domainSid,
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

interface AuthCallsIpAccessControlListMappingPayload
  extends TwilioResponsePayload {
  contents: AuthCallsIpAccessControlListMappingResource[];
}

interface AuthCallsIpAccessControlListMappingResource {
  account_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  friendly_name?: string | null;
  sid?: string | null;
}

export class AuthCallsIpAccessControlListMappingInstance {
  protected _solution: AuthCallsIpAccessControlListMappingContextSolution;
  protected _context?: AuthCallsIpAccessControlListMappingContext;

  constructor(
    protected _version: V2010,
    payload: AuthCallsIpAccessControlListMappingResource,
    accountSid: string,
    domainSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.sid = payload.sid;

    this._solution = { accountSid, domainSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;

  private get _proxy(): AuthCallsIpAccessControlListMappingContext {
    this._context =
      this._context ||
      new AuthCallsIpAccessControlListMappingContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.domainSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a AuthCallsIpAccessControlListMappingInstance
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
   * Fetch a AuthCallsIpAccessControlListMappingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AuthCallsIpAccessControlListMappingInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: AuthCallsIpAccessControlListMappingInstance
    ) => any
  ): Promise<AuthCallsIpAccessControlListMappingInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      friendlyName: this.friendlyName,
      sid: this.sid,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AuthCallsIpAccessControlListMappingListInstance {
  (sid: string): AuthCallsIpAccessControlListMappingContext;
  get(sid: string): AuthCallsIpAccessControlListMappingContext;

  /**
   * Create a AuthCallsIpAccessControlListMappingInstance
   *
   * @param { AuthCallsIpAccessControlListMappingListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AuthCallsIpAccessControlListMappingInstance
   */
  create(
    params: AuthCallsIpAccessControlListMappingListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: AuthCallsIpAccessControlListMappingInstance
    ) => any
  ): Promise<AuthCallsIpAccessControlListMappingInstance>;

  /**
   * Streams AuthCallsIpAccessControlListMappingInstance records from the API.
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
   * @param { AuthCallsIpAccessControlListMappingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: AuthCallsIpAccessControlListMappingInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: AuthCallsIpAccessControlListMappingListInstanceEachOptions,
    callback?: (
      item: AuthCallsIpAccessControlListMappingInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of AuthCallsIpAccessControlListMappingInstance records from the API.
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
      items: AuthCallsIpAccessControlListMappingPage
    ) => any
  ): Promise<AuthCallsIpAccessControlListMappingPage>;
  /**
   * Lists AuthCallsIpAccessControlListMappingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AuthCallsIpAccessControlListMappingListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: AuthCallsIpAccessControlListMappingInstance[]
    ) => any
  ): Promise<AuthCallsIpAccessControlListMappingInstance[]>;
  list(
    params: AuthCallsIpAccessControlListMappingListInstanceOptions,
    callback?: (
      error: Error | null,
      items: AuthCallsIpAccessControlListMappingInstance[]
    ) => any
  ): Promise<AuthCallsIpAccessControlListMappingInstance[]>;
  /**
   * Retrieve a single page of AuthCallsIpAccessControlListMappingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AuthCallsIpAccessControlListMappingListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (
      error: Error | null,
      items: AuthCallsIpAccessControlListMappingPage
    ) => any
  ): Promise<AuthCallsIpAccessControlListMappingPage>;
  page(
    params: AuthCallsIpAccessControlListMappingListInstancePageOptions,
    callback?: (
      error: Error | null,
      items: AuthCallsIpAccessControlListMappingPage
    ) => any
  ): Promise<AuthCallsIpAccessControlListMappingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AuthCallsIpAccessControlListMappingSolution {
  accountSid?: string;
  domainSid?: string;
}

interface AuthCallsIpAccessControlListMappingListInstanceImpl
  extends AuthCallsIpAccessControlListMappingListInstance {}
class AuthCallsIpAccessControlListMappingListInstanceImpl
  implements AuthCallsIpAccessControlListMappingListInstance
{
  _version?: V2010;
  _solution?: AuthCallsIpAccessControlListMappingSolution;
  _uri?: string;
}

export function AuthCallsIpAccessControlListMappingListInstance(
  version: V2010,
  accountSid: string,
  domainSid: string
): AuthCallsIpAccessControlListMappingListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(domainSid)) {
    throw new Error("Parameter 'domainSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as AuthCallsIpAccessControlListMappingListInstanceImpl;

  instance.get = function get(sid): AuthCallsIpAccessControlListMappingContext {
    return new AuthCallsIpAccessControlListMappingContextImpl(
      version,
      accountSid,
      domainSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { accountSid, domainSid };
  instance._uri = `/Accounts/${accountSid}/SIP/Domains/${domainSid}/Auth/Calls/IpAccessControlListMappings.json`;

  instance.create = function create(
    params: AuthCallsIpAccessControlListMappingListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: AuthCallsIpAccessControlListMappingInstance
    ) => any
  ): Promise<AuthCallsIpAccessControlListMappingInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["ipAccessControlListSid"] === null ||
      params["ipAccessControlListSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['ipAccessControlListSid']\" missing."
      );
    }

    let data: any = {};

    data["IpAccessControlListSid"] = params["ipAccessControlListSid"];

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
        new AuthCallsIpAccessControlListMappingInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.domainSid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | AuthCallsIpAccessControlListMappingListInstancePageOptions
      | ((
          error: Error | null,
          item?: AuthCallsIpAccessControlListMappingPage
        ) => any),
    callback?: (
      error: Error | null,
      item?: AuthCallsIpAccessControlListMappingPage
    ) => any
  ): Promise<AuthCallsIpAccessControlListMappingPage> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: AuthCallsIpAccessControlListMappingPage
      ) => any;
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
      (payload) =>
        new AuthCallsIpAccessControlListMappingPage(
          operationVersion,
          payload,
          this._solution
        )
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
    callback?: (
      error: Error | null,
      items: AuthCallsIpAccessControlListMappingPage
    ) => any
  ): Promise<AuthCallsIpAccessControlListMappingPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new AuthCallsIpAccessControlListMappingPage(
          this._version,
          payload,
          this._solution
        )
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

export class AuthCallsIpAccessControlListMappingPage extends Page<
  V2010,
  AuthCallsIpAccessControlListMappingPayload,
  AuthCallsIpAccessControlListMappingResource,
  AuthCallsIpAccessControlListMappingInstance
> {
  /**
   * Initialize the AuthCallsIpAccessControlListMappingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: AuthCallsIpAccessControlListMappingSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AuthCallsIpAccessControlListMappingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: AuthCallsIpAccessControlListMappingResource
  ): AuthCallsIpAccessControlListMappingInstance {
    return new AuthCallsIpAccessControlListMappingInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.domainSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
