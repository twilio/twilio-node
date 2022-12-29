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
import Page, { TwilioResponsePayload } from "../../../../../../base/Page";
import Response from "../../../../../../http/response";
import V2010 from "../../../../V2010";
const deserialize = require("../../../../../../base/deserialize");
const serialize = require("../../../../../../base/serialize");
import { isValidPathParam } from "../../../../../../base/utility";

/**
 * Options to pass to update a CredentialInstance
 *
 * @property { string } [password] The password that the username will use when authenticating SIP requests. The password must be a minimum of 12 characters, contain at least 1 digit, and have mixed case. (eg `IWasAtSignal2018`)
 */
export interface CredentialContextUpdateOptions {
  password?: string;
}

/**
 * Options to pass to create a CredentialInstance
 *
 * @property { string } username The username that will be passed when authenticating SIP requests. The username should be sent in response to Twilio\\\'s challenge of the initial INVITE. It can be up to 32 characters long.
 * @property { string } password The password that the username will use when authenticating SIP requests. The password must be a minimum of 12 characters, contain at least 1 digit, and have mixed case. (eg `IWasAtSignal2018`)
 */
export interface CredentialListInstanceCreateOptions {
  username: string;
  password: string;
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
export interface CredentialListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: CredentialInstance, done: (err?: Error) => void) => void;
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
export interface CredentialListInstanceOptions {
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
export interface CredentialListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface CredentialContext {
  /**
   * Remove a CredentialInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a CredentialInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CredentialInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CredentialInstance) => any
  ): Promise<CredentialInstance>;

  /**
   * Update a CredentialInstance
   *
   * @param { CredentialContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CredentialInstance
   */
  update(
    params?:
      | CredentialContextUpdateOptions
      | ((error: Error | null, item?: CredentialInstance) => any),
    callback?: (error: Error | null, item?: CredentialInstance) => any
  ): Promise<CredentialInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CredentialContextSolution {
  accountSid?: string;
  credentialListSid?: string;
  sid?: string;
}

export class CredentialContextImpl implements CredentialContext {
  protected _solution: CredentialContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V2010,
    accountSid: string,
    credentialListSid: string,
    sid: string
  ) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(credentialListSid)) {
      throw new Error("Parameter 'credentialListSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, credentialListSid, sid };
    this._uri = `/Accounts/${accountSid}/SIP/CredentialLists/${credentialListSid}/Credentials/${sid}.json`;
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

  fetch(callback?: any): Promise<CredentialInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CredentialInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.credentialListSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<CredentialInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["password"] !== undefined) data["Password"] = params["password"];

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
        new CredentialInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.credentialListSid,
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

interface CredentialPayload extends TwilioResponsePayload {
  credentials: CredentialResource[];
}

interface CredentialResource {
  sid?: string | null;
  account_sid?: string | null;
  credential_list_sid?: string | null;
  username?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  uri?: string | null;
}

export class CredentialInstance {
  protected _solution: CredentialContextSolution;
  protected _context?: CredentialContext;

  constructor(
    protected _version: V2010,
    payload: CredentialResource,
    accountSid: string,
    credentialListSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.credentialListSid = payload.credential_list_sid;
    this.username = payload.username;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.uri = payload.uri;

    this._solution = { accountSid, credentialListSid, sid: sid || this.sid };
  }

  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid?: string | null;
  /**
   * The unique id of the Account that is responsible for this resource.
   */
  accountSid?: string | null;
  /**
   * The unique id that identifies the credential list that includes this credential
   */
  credentialListSid?: string | null;
  /**
   * The username for this credential.
   */
  username?: string | null;
  /**
   * The date that this resource was created, given as GMT in RFC 2822 format.
   */
  dateCreated?: Date | null;
  /**
   * The date that this resource was last updated, given as GMT in RFC 2822 format.
   */
  dateUpdated?: Date | null;
  /**
   * The URI for this resource, relative to https://api.twilio.com
   */
  uri?: string | null;

  private get _proxy(): CredentialContext {
    this._context =
      this._context ||
      new CredentialContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.credentialListSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a CredentialInstance
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
   * Fetch a CredentialInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CredentialInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CredentialInstance) => any
  ): Promise<CredentialInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a CredentialInstance
   *
   * @param { CredentialContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CredentialInstance
   */
  update(
    params?:
      | CredentialContextUpdateOptions
      | ((error: Error | null, item?: CredentialInstance) => any),
    callback?: (error: Error | null, item?: CredentialInstance) => any
  ): Promise<CredentialInstance> {
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
      credentialListSid: this.credentialListSid,
      username: this.username,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      uri: this.uri,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface CredentialListInstance {
  (sid: string): CredentialContext;
  get(sid: string): CredentialContext;

  /**
   * Create a CredentialInstance
   *
   * @param { CredentialListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CredentialInstance
   */
  create(
    params: CredentialListInstanceCreateOptions,
    callback?: (error: Error | null, item?: CredentialInstance) => any
  ): Promise<CredentialInstance>;

  /**
   * Streams CredentialInstance records from the API.
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
   * @param { CredentialListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | CredentialListInstanceEachOptions
      | ((item: CredentialInstance, done: (err?: Error) => void) => void),
    callback?: (item: CredentialInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of CredentialInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: CredentialPage) => any
  ): Promise<CredentialPage>;
  /**
   * Lists CredentialInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CredentialListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | CredentialListInstanceOptions
      | ((error: Error | null, items: CredentialInstance[]) => any),
    callback?: (error: Error | null, items: CredentialInstance[]) => any
  ): Promise<CredentialInstance[]>;
  /**
   * Retrieve a single page of CredentialInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CredentialListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | CredentialListInstancePageOptions
      | ((error: Error | null, items: CredentialPage) => any),
    callback?: (error: Error | null, items: CredentialPage) => any
  ): Promise<CredentialPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CredentialSolution {
  accountSid?: string;
  credentialListSid?: string;
}

interface CredentialListInstanceImpl extends CredentialListInstance {}
class CredentialListInstanceImpl implements CredentialListInstance {
  _version?: V2010;
  _solution?: CredentialSolution;
  _uri?: string;
}

export function CredentialListInstance(
  version: V2010,
  accountSid: string,
  credentialListSid: string
): CredentialListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(credentialListSid)) {
    throw new Error("Parameter 'credentialListSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as CredentialListInstanceImpl;

  instance.get = function get(sid): CredentialContext {
    return new CredentialContextImpl(
      version,
      accountSid,
      credentialListSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { accountSid, credentialListSid };
  instance._uri = `/Accounts/${accountSid}/SIP/CredentialLists/${credentialListSid}/Credentials.json`;

  instance.create = function create(
    params: CredentialListInstanceCreateOptions,
    callback?: (error: Error | null, item?: CredentialInstance) => any
  ): Promise<CredentialInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["username"] === null || params["username"] === undefined) {
      throw new Error("Required parameter \"params['username']\" missing.");
    }

    if (params["password"] === null || params["password"] === undefined) {
      throw new Error("Required parameter \"params['password']\" missing.");
    }

    let data: any = {};

    data["Username"] = params["username"];

    data["Password"] = params["password"];

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
        new CredentialInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.credentialListSid
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
      | CredentialListInstancePageOptions
      | ((error: Error | null, item?: CredentialPage) => any),
    callback?: (error: Error | null, item?: CredentialPage) => any
  ): Promise<CredentialPage> {
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
      (payload) => new CredentialPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: CredentialPage) => any
  ): Promise<CredentialPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new CredentialPage(this._version, payload, this._solution)
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

export class CredentialPage extends Page<
  V2010,
  CredentialPayload,
  CredentialResource,
  CredentialInstance
> {
  /**
   * Initialize the CredentialPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: CredentialSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of CredentialInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CredentialResource): CredentialInstance {
    return new CredentialInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.credentialListSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
