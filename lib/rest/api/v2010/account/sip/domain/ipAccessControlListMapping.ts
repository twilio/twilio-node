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
 * Options to pass to create a IpAccessControlListMappingInstance
 *
 * @property { string } ipAccessControlListSid The unique id of the IP access control list to map to the SIP domain.
 */
export interface IpAccessControlListMappingListInstanceCreateOptions {
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
export interface IpAccessControlListMappingListInstanceEachOptions {
  pageSize?: number;
  callback?: (
    item: IpAccessControlListMappingInstance,
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
export interface IpAccessControlListMappingListInstanceOptions {
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
export interface IpAccessControlListMappingListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface IpAccessControlListMappingContext {
  /**
   * Remove a IpAccessControlListMappingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a IpAccessControlListMappingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed IpAccessControlListMappingInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: IpAccessControlListMappingInstance
    ) => any
  ): Promise<IpAccessControlListMappingInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface IpAccessControlListMappingContextSolution {
  accountSid?: string;
  domainSid?: string;
  sid?: string;
}

export class IpAccessControlListMappingContextImpl
  implements IpAccessControlListMappingContext
{
  protected _solution: IpAccessControlListMappingContextSolution;
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
    this._uri = `/Accounts/${accountSid}/SIP/Domains/${domainSid}/IpAccessControlListMappings/${sid}.json`;
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

  fetch(callback?: any): Promise<IpAccessControlListMappingInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new IpAccessControlListMappingInstance(
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

interface IpAccessControlListMappingPayload
  extends IpAccessControlListMappingResource,
    TwilioResponsePayload {}

interface IpAccessControlListMappingResource {
  account_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  domain_sid?: string | null;
  friendly_name?: string | null;
  sid?: string | null;
  uri?: string | null;
}

export class IpAccessControlListMappingInstance {
  protected _solution: IpAccessControlListMappingContextSolution;
  protected _context?: IpAccessControlListMappingContext;

  constructor(
    protected _version: V2010,
    payload: IpAccessControlListMappingPayload,
    accountSid: string,
    domainSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.domainSid = payload.domain_sid;
    this.friendlyName = payload.friendly_name;
    this.sid = payload.sid;
    this.uri = payload.uri;

    this._solution = { accountSid, domainSid, sid: sid || this.sid };
  }

  /**
   * The unique id of the Account that is responsible for this resource.
   */
  accountSid?: string | null;
  /**
   * The date that this resource was created, given as GMT in RFC 2822 format.
   */
  dateCreated?: string | null;
  /**
   * The date that this resource was last updated, given as GMT in RFC 2822 format.
   */
  dateUpdated?: string | null;
  /**
   * The unique string that identifies the SipDomain resource.
   */
  domainSid?: string | null;
  /**
   * A human readable descriptive text for this resource, up to 64 characters long.
   */
  friendlyName?: string | null;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid?: string | null;
  /**
   * The URI for this resource, relative to https://api.twilio.com
   */
  uri?: string | null;

  private get _proxy(): IpAccessControlListMappingContext {
    this._context =
      this._context ||
      new IpAccessControlListMappingContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.domainSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a IpAccessControlListMappingInstance
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
   * Fetch a IpAccessControlListMappingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed IpAccessControlListMappingInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: IpAccessControlListMappingInstance
    ) => any
  ): Promise<IpAccessControlListMappingInstance> {
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
      domainSid: this.domainSid,
      friendlyName: this.friendlyName,
      sid: this.sid,
      uri: this.uri,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface IpAccessControlListMappingListInstance {
  (sid: string): IpAccessControlListMappingContext;
  get(sid: string): IpAccessControlListMappingContext;

  /**
   * Create a IpAccessControlListMappingInstance
   *
   * @param { IpAccessControlListMappingListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed IpAccessControlListMappingInstance
   */
  create(
    params: IpAccessControlListMappingListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: IpAccessControlListMappingInstance
    ) => any
  ): Promise<IpAccessControlListMappingInstance>;
  create(
    params: any,
    callback?: any
  ): Promise<IpAccessControlListMappingInstance>;

  /**
   * Streams IpAccessControlListMappingInstance records from the API.
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
      item: IpAccessControlListMappingInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Streams IpAccessControlListMappingInstance records from the API.
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
   * @param { IpAccessControlListMappingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: IpAccessControlListMappingListInstanceEachOptions,
    callback?: (
      item: IpAccessControlListMappingInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of IpAccessControlListMappingInstance records from the API.
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
      items: IpAccessControlListMappingPage
    ) => any
  ): Promise<IpAccessControlListMappingPage>;
  /**
   * Retrieve a single target page of IpAccessControlListMappingInstance records from the API.
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
      items: IpAccessControlListMappingPage
    ) => any
  ): Promise<IpAccessControlListMappingPage>;
  getPage(
    params?: any,
    callback?: any
  ): Promise<IpAccessControlListMappingPage>;
  /**
   * Lists IpAccessControlListMappingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: IpAccessControlListMappingInstance[]
    ) => any
  ): Promise<IpAccessControlListMappingInstance[]>;
  /**
   * Lists IpAccessControlListMappingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { IpAccessControlListMappingListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: IpAccessControlListMappingListInstanceOptions,
    callback?: (
      error: Error | null,
      items: IpAccessControlListMappingInstance[]
    ) => any
  ): Promise<IpAccessControlListMappingInstance[]>;
  list(
    params?: any,
    callback?: any
  ): Promise<IpAccessControlListMappingInstance[]>;
  /**
   * Retrieve a single page of IpAccessControlListMappingInstance records from the API.
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
      items: IpAccessControlListMappingPage
    ) => any
  ): Promise<IpAccessControlListMappingPage>;
  /**
   * Retrieve a single page of IpAccessControlListMappingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { IpAccessControlListMappingListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: IpAccessControlListMappingListInstancePageOptions,
    callback?: (
      error: Error | null,
      items: IpAccessControlListMappingPage
    ) => any
  ): Promise<IpAccessControlListMappingPage>;
  page(params?: any, callback?: any): Promise<IpAccessControlListMappingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface IpAccessControlListMappingSolution {
  accountSid?: string;
  domainSid?: string;
}

interface IpAccessControlListMappingListInstanceImpl
  extends IpAccessControlListMappingListInstance {}
class IpAccessControlListMappingListInstanceImpl
  implements IpAccessControlListMappingListInstance
{
  _version?: V2010;
  _solution?: IpAccessControlListMappingSolution;
  _uri?: string;
}

export function IpAccessControlListMappingListInstance(
  version: V2010,
  accountSid: string,
  domainSid: string
): IpAccessControlListMappingListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(domainSid)) {
    throw new Error("Parameter 'domainSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as IpAccessControlListMappingListInstanceImpl;

  instance.get = function get(sid): IpAccessControlListMappingContext {
    return new IpAccessControlListMappingContextImpl(
      version,
      accountSid,
      domainSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { accountSid, domainSid };
  instance._uri = `/Accounts/${accountSid}/SIP/Domains/${domainSid}/IpAccessControlListMappings.json`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<IpAccessControlListMappingInstance> {
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
        new IpAccessControlListMappingInstance(
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
  ): Promise<IpAccessControlListMappingPage> {
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
        new IpAccessControlListMappingPage(
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
  ): Promise<IpAccessControlListMappingPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new IpAccessControlListMappingPage(
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

export class IpAccessControlListMappingPage extends Page<
  V2010,
  IpAccessControlListMappingPayload,
  IpAccessControlListMappingResource,
  IpAccessControlListMappingInstance
> {
  /**
   * Initialize the IpAccessControlListMappingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: IpAccessControlListMappingSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of IpAccessControlListMappingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: IpAccessControlListMappingPayload
  ): IpAccessControlListMappingInstance {
    return new IpAccessControlListMappingInstance(
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
