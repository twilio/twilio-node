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
 * Options to pass to create a AuthRegistrationsCredentialListMappingInstance
 *
 * @property { string } credentialListSid The SID of the CredentialList resource to map to the SIP domain.
 */
export interface AuthRegistrationsCredentialListMappingListInstanceCreateOptions {
  credentialListSid: string;
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
export interface AuthRegistrationsCredentialListMappingListInstanceEachOptions {
  pageSize?: number;
  callback?: (
    item: AuthRegistrationsCredentialListMappingInstance,
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
export interface AuthRegistrationsCredentialListMappingListInstanceOptions {
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
export interface AuthRegistrationsCredentialListMappingListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface AuthRegistrationsCredentialListMappingContext {
  /**
   * Remove a AuthRegistrationsCredentialListMappingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a AuthRegistrationsCredentialListMappingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AuthRegistrationsCredentialListMappingInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: AuthRegistrationsCredentialListMappingInstance
    ) => any
  ): Promise<AuthRegistrationsCredentialListMappingInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AuthRegistrationsCredentialListMappingContextSolution {
  accountSid?: string;
  domainSid?: string;
  sid?: string;
}

export class AuthRegistrationsCredentialListMappingContextImpl
  implements AuthRegistrationsCredentialListMappingContext
{
  protected _solution: AuthRegistrationsCredentialListMappingContextSolution;
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
    this._uri = `/Accounts/${accountSid}/SIP/Domains/${domainSid}/Auth/Registrations/CredentialListMappings/${sid}.json`;
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

  fetch(
    callback?: any
  ): Promise<AuthRegistrationsCredentialListMappingInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AuthRegistrationsCredentialListMappingInstance(
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

interface AuthRegistrationsCredentialListMappingPayload
  extends TwilioResponsePayload {
  contents: AuthRegistrationsCredentialListMappingResource[];
}

interface AuthRegistrationsCredentialListMappingResource {
  account_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  friendly_name?: string | null;
  sid?: string | null;
}

export class AuthRegistrationsCredentialListMappingInstance {
  protected _solution: AuthRegistrationsCredentialListMappingContextSolution;
  protected _context?: AuthRegistrationsCredentialListMappingContext;

  constructor(
    protected _version: V2010,
    payload: AuthRegistrationsCredentialListMappingResource,
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

  private get _proxy(): AuthRegistrationsCredentialListMappingContext {
    this._context =
      this._context ||
      new AuthRegistrationsCredentialListMappingContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.domainSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a AuthRegistrationsCredentialListMappingInstance
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
   * Fetch a AuthRegistrationsCredentialListMappingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AuthRegistrationsCredentialListMappingInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: AuthRegistrationsCredentialListMappingInstance
    ) => any
  ): Promise<AuthRegistrationsCredentialListMappingInstance> {
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

export interface AuthRegistrationsCredentialListMappingListInstance {
  (sid: string): AuthRegistrationsCredentialListMappingContext;
  get(sid: string): AuthRegistrationsCredentialListMappingContext;

  /**
   * Create a AuthRegistrationsCredentialListMappingInstance
   *
   * @param { AuthRegistrationsCredentialListMappingListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AuthRegistrationsCredentialListMappingInstance
   */
  create(
    params: AuthRegistrationsCredentialListMappingListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: AuthRegistrationsCredentialListMappingInstance
    ) => any
  ): Promise<AuthRegistrationsCredentialListMappingInstance>;
  create(
    params: any,
    callback?: any
  ): Promise<AuthRegistrationsCredentialListMappingInstance>;

  /**
   * Streams AuthRegistrationsCredentialListMappingInstance records from the API.
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
    callback?: (
      item: AuthRegistrationsCredentialListMappingInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Streams AuthRegistrationsCredentialListMappingInstance records from the API.
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
   * @param { AuthRegistrationsCredentialListMappingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: AuthRegistrationsCredentialListMappingListInstanceEachOptions,
    callback?: (
      item: AuthRegistrationsCredentialListMappingInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of AuthRegistrationsCredentialListMappingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (
      error: Error | null,
      items: AuthRegistrationsCredentialListMappingPage
    ) => any
  ): Promise<AuthRegistrationsCredentialListMappingPage>;
  /**
   * Retrieve a single target page of AuthRegistrationsCredentialListMappingInstance records from the API.
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
    callback?: (
      error: Error | null,
      items: AuthRegistrationsCredentialListMappingPage
    ) => any
  ): Promise<AuthRegistrationsCredentialListMappingPage>;
  getPage(
    params?: any,
    callback?: any
  ): Promise<AuthRegistrationsCredentialListMappingPage>;
  /**
   * Lists AuthRegistrationsCredentialListMappingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: AuthRegistrationsCredentialListMappingInstance[]
    ) => any
  ): Promise<AuthRegistrationsCredentialListMappingInstance[]>;
  /**
   * Lists AuthRegistrationsCredentialListMappingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AuthRegistrationsCredentialListMappingListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: AuthRegistrationsCredentialListMappingListInstanceOptions,
    callback?: (
      error: Error | null,
      items: AuthRegistrationsCredentialListMappingInstance[]
    ) => any
  ): Promise<AuthRegistrationsCredentialListMappingInstance[]>;
  list(
    params?: any,
    callback?: any
  ): Promise<AuthRegistrationsCredentialListMappingInstance[]>;
  /**
   * Retrieve a single page of AuthRegistrationsCredentialListMappingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (
      error: Error | null,
      items: AuthRegistrationsCredentialListMappingPage
    ) => any
  ): Promise<AuthRegistrationsCredentialListMappingPage>;
  /**
   * Retrieve a single page of AuthRegistrationsCredentialListMappingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AuthRegistrationsCredentialListMappingListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: AuthRegistrationsCredentialListMappingListInstancePageOptions,
    callback?: (
      error: Error | null,
      items: AuthRegistrationsCredentialListMappingPage
    ) => any
  ): Promise<AuthRegistrationsCredentialListMappingPage>;
  page(
    params?: any,
    callback?: any
  ): Promise<AuthRegistrationsCredentialListMappingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AuthRegistrationsCredentialListMappingSolution {
  accountSid?: string;
  domainSid?: string;
}

interface AuthRegistrationsCredentialListMappingListInstanceImpl
  extends AuthRegistrationsCredentialListMappingListInstance {}
class AuthRegistrationsCredentialListMappingListInstanceImpl
  implements AuthRegistrationsCredentialListMappingListInstance
{
  _version?: V2010;
  _solution?: AuthRegistrationsCredentialListMappingSolution;
  _uri?: string;
}

export function AuthRegistrationsCredentialListMappingListInstance(
  version: V2010,
  accountSid: string,
  domainSid: string
): AuthRegistrationsCredentialListMappingListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(domainSid)) {
    throw new Error("Parameter 'domainSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(
      sid
    )) as AuthRegistrationsCredentialListMappingListInstanceImpl;

  instance.get = function get(
    sid
  ): AuthRegistrationsCredentialListMappingContext {
    return new AuthRegistrationsCredentialListMappingContextImpl(
      version,
      accountSid,
      domainSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { accountSid, domainSid };
  instance._uri = `/Accounts/${accountSid}/SIP/Domains/${domainSid}/Auth/Registrations/CredentialListMappings.json`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<AuthRegistrationsCredentialListMappingInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["credentialListSid"] === null ||
      params["credentialListSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['credentialListSid']\" missing."
      );
    }

    let data: any = {};

    data["CredentialListSid"] = params["credentialListSid"];

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
        new AuthRegistrationsCredentialListMappingInstance(
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
    params?: any,
    callback?: any
  ): Promise<AuthRegistrationsCredentialListMappingPage> {
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
        new AuthRegistrationsCredentialListMappingPage(
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
    targetUrl?: any,
    callback?: any
  ): Promise<AuthRegistrationsCredentialListMappingPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new AuthRegistrationsCredentialListMappingPage(
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

export class AuthRegistrationsCredentialListMappingPage extends Page<
  V2010,
  AuthRegistrationsCredentialListMappingPayload,
  AuthRegistrationsCredentialListMappingResource,
  AuthRegistrationsCredentialListMappingInstance
> {
  /**
   * Initialize the AuthRegistrationsCredentialListMappingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: AuthRegistrationsCredentialListMappingSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AuthRegistrationsCredentialListMappingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: AuthRegistrationsCredentialListMappingResource
  ): AuthRegistrationsCredentialListMappingInstance {
    return new AuthRegistrationsCredentialListMappingInstance(
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
