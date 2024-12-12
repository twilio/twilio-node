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
 */
export interface IpAccessControlListMappingListInstanceCreateOptions {
  /** The unique id of the IP access control list to map to the SIP domain. */
  ipAccessControlListSid: string;
}
/**
 * Options to pass to each
 */
export interface IpAccessControlListMappingListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: IpAccessControlListMappingInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface IpAccessControlListMappingListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface IpAccessControlListMappingListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface IpAccessControlListMappingContext {
  /**
   * Remove a IpAccessControlListMappingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a IpAccessControlListMappingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed IpAccessControlListMappingInstance
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
  accountSid: string;
  domainSid: string;
  sid: string;
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

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
        headers,
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (
      error: Error | null,
      item?: IpAccessControlListMappingInstance
    ) => any
  ): Promise<IpAccessControlListMappingInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new IpAccessControlListMappingInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.domainSid,
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

interface IpAccessControlListMappingPayload extends TwilioResponsePayload {
  ip_access_control_list_mappings: IpAccessControlListMappingResource[];
}

interface IpAccessControlListMappingResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  domain_sid: string;
  friendly_name: string;
  sid: string;
  uri: string;
}

export class IpAccessControlListMappingInstance {
  protected _solution: IpAccessControlListMappingContextSolution;
  protected _context?: IpAccessControlListMappingContext;

  constructor(
    protected _version: V2010,
    payload: IpAccessControlListMappingResource,
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
  accountSid: string;
  /**
   * The date that this resource was created, given as GMT in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated, given as GMT in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
   */
  dateUpdated: Date;
  /**
   * The unique string that is created to identify the SipDomain resource.
   */
  domainSid: string;
  /**
   * A human readable descriptive text for this resource, up to 64 characters long.
   */
  friendlyName: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The URI for this resource, relative to `https://api.twilio.com`
   */
  uri: string;

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
   * Fetch a IpAccessControlListMappingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed IpAccessControlListMappingInstance
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

export interface IpAccessControlListMappingSolution {
  accountSid: string;
  domainSid: string;
}

export interface IpAccessControlListMappingListInstance {
  _version: V2010;
  _solution: IpAccessControlListMappingSolution;
  _uri: string;

  (sid: string): IpAccessControlListMappingContext;
  get(sid: string): IpAccessControlListMappingContext;

  /**
   * Create a IpAccessControlListMappingInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed IpAccessControlListMappingInstance
   */
  create(
    params: IpAccessControlListMappingListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: IpAccessControlListMappingInstance
    ) => any
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
   * @param { IpAccessControlListMappingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: IpAccessControlListMappingInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: IpAccessControlListMappingListInstanceEachOptions,
    callback?: (
      item: IpAccessControlListMappingInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of IpAccessControlListMappingInstance records from the API.
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
      items: IpAccessControlListMappingPage
    ) => any
  ): Promise<IpAccessControlListMappingPage>;
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
    callback?: (
      error: Error | null,
      items: IpAccessControlListMappingInstance[]
    ) => any
  ): Promise<IpAccessControlListMappingInstance[]>;
  list(
    params: IpAccessControlListMappingListInstanceOptions,
    callback?: (
      error: Error | null,
      items: IpAccessControlListMappingInstance[]
    ) => any
  ): Promise<IpAccessControlListMappingInstance[]>;
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
    callback?: (
      error: Error | null,
      items: IpAccessControlListMappingPage
    ) => any
  ): Promise<IpAccessControlListMappingPage>;
  page(
    params: IpAccessControlListMappingListInstancePageOptions,
    callback?: (
      error: Error | null,
      items: IpAccessControlListMappingPage
    ) => any
  ): Promise<IpAccessControlListMappingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
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
    instance.get(sid)) as IpAccessControlListMappingListInstance;

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
    params: IpAccessControlListMappingListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      items: IpAccessControlListMappingInstance
    ) => any
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
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new IpAccessControlListMappingInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.domainSid
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
      | IpAccessControlListMappingListInstancePageOptions
      | ((error: Error | null, items: IpAccessControlListMappingPage) => any),
    callback?: (
      error: Error | null,
      items: IpAccessControlListMappingPage
    ) => any
  ): Promise<IpAccessControlListMappingPage> {
    if (params instanceof Function) {
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
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new IpAccessControlListMappingPage(
          operationVersion,
          payload,
          instance._solution
        )
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
    callback?: (
      error: Error | null,
      items: IpAccessControlListMappingPage
    ) => any
  ): Promise<IpAccessControlListMappingPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new IpAccessControlListMappingPage(
          instance._version,
          payload,
          instance._solution
        )
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
    payload: IpAccessControlListMappingResource
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
