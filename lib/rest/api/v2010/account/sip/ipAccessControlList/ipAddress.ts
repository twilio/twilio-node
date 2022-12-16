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
 * Options to pass to update a IpAddressInstance
 *
 * @property { string } [ipAddress] An IP address in dotted decimal notation from which you want to accept traffic. Any SIP requests from this IP address will be allowed by Twilio. IPv4 only supported today.
 * @property { string } [friendlyName] A human readable descriptive text for this resource, up to 255 characters long.
 * @property { number } [cidrPrefixLength] An integer representing the length of the CIDR prefix to use with this IP address when accepting traffic. By default the entire IP address is used.
 */
export interface IpAddressContextUpdateOptions {
  ipAddress?: string;
  friendlyName?: string;
  cidrPrefixLength?: number;
}

/**
 * Options to pass to create a IpAddressInstance
 *
 * @property { string } friendlyName A human readable descriptive text for this resource, up to 255 characters long.
 * @property { string } ipAddress An IP address in dotted decimal notation from which you want to accept traffic. Any SIP requests from this IP address will be allowed by Twilio. IPv4 only supported today.
 * @property { number } [cidrPrefixLength] An integer representing the length of the CIDR prefix to use with this IP address when accepting traffic. By default the entire IP address is used.
 */
export interface IpAddressListInstanceCreateOptions {
  friendlyName: string;
  ipAddress: string;
  cidrPrefixLength?: number;
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
export interface IpAddressListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: IpAddressInstance, done: (err?: Error) => void) => void;
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
export interface IpAddressListInstanceOptions {
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
export interface IpAddressListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface IpAddressContext {
  /**
   * Remove a IpAddressInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a IpAddressInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed IpAddressInstance
   */
  fetch(
    callback?: (error: Error | null, item?: IpAddressInstance) => any
  ): Promise<IpAddressInstance>;

  /**
   * Update a IpAddressInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed IpAddressInstance
   */
  update(
    callback?: (error: Error | null, item?: IpAddressInstance) => any
  ): Promise<IpAddressInstance>;
  /**
   * Update a IpAddressInstance
   *
   * @param { IpAddressContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed IpAddressInstance
   */
  update(
    params: IpAddressContextUpdateOptions,
    callback?: (error: Error | null, item?: IpAddressInstance) => any
  ): Promise<IpAddressInstance>;
  update(params?: any, callback?: any): Promise<IpAddressInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface IpAddressContextSolution {
  accountSid?: string;
  ipAccessControlListSid?: string;
  sid?: string;
}

export class IpAddressContextImpl implements IpAddressContext {
  protected _solution: IpAddressContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V2010,
    accountSid: string,
    ipAccessControlListSid: string,
    sid: string
  ) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(ipAccessControlListSid)) {
      throw new Error("Parameter 'ipAccessControlListSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, ipAccessControlListSid, sid };
    this._uri = `/Accounts/${accountSid}/SIP/IpAccessControlLists/${ipAccessControlListSid}/IpAddresses/${sid}.json`;
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

  fetch(callback?: any): Promise<IpAddressInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new IpAddressInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.ipAccessControlListSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<IpAddressInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["ipAddress"] !== undefined)
      data["IpAddress"] = params["ipAddress"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["cidrPrefixLength"] !== undefined)
      data["CidrPrefixLength"] = params["cidrPrefixLength"];

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
        new IpAddressInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.ipAccessControlListSid,
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

interface IpAddressPayload extends TwilioResponsePayload {
  ip_addresses: IpAddressResource[];
}

interface IpAddressResource {
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  ip_address?: string | null;
  cidr_prefix_length?: number | null;
  ip_access_control_list_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  uri?: string | null;
}

export class IpAddressInstance {
  protected _solution: IpAddressContextSolution;
  protected _context?: IpAddressContext;

  constructor(
    protected _version: V2010,
    payload: IpAddressResource,
    accountSid: string,
    ipAccessControlListSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.ipAddress = payload.ip_address;
    this.cidrPrefixLength = deserialize.integer(payload.cidr_prefix_length);
    this.ipAccessControlListSid = payload.ip_access_control_list_sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.uri = payload.uri;

    this._solution = {
      accountSid,
      ipAccessControlListSid,
      sid: sid || this.sid,
    };
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
   * A human readable descriptive text for this resource, up to 255 characters long.
   */
  friendlyName?: string | null;
  /**
   * An IP address in dotted decimal notation from which you want to accept traffic. Any SIP requests from this IP address will be allowed by Twilio. IPv4 only supported today.
   */
  ipAddress?: string | null;
  /**
   * An integer representing the length of the CIDR prefix to use with this IP address when accepting traffic. By default the entire IP address is used.
   */
  cidrPrefixLength?: number | null;
  /**
   * The unique id of the IpAccessControlList resource that includes this resource.
   */
  ipAccessControlListSid?: string | null;
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

  private get _proxy(): IpAddressContext {
    this._context =
      this._context ||
      new IpAddressContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.ipAccessControlListSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a IpAddressInstance
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
   * Fetch a IpAddressInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed IpAddressInstance
   */
  fetch(
    callback?: (error: Error | null, item?: IpAddressInstance) => any
  ): Promise<IpAddressInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a IpAddressInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed IpAddressInstance
   */
  update(
    callback?: (error: Error | null, item?: IpAddressInstance) => any
  ): Promise<IpAddressInstance>;
  /**
   * Update a IpAddressInstance
   *
   * @param { IpAddressContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed IpAddressInstance
   */
  update(
    params: IpAddressContextUpdateOptions,
    callback?: (error: Error | null, item?: IpAddressInstance) => any
  ): Promise<IpAddressInstance>;
  update(params?: any, callback?: any): Promise<IpAddressInstance> {
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
      ipAddress: this.ipAddress,
      cidrPrefixLength: this.cidrPrefixLength,
      ipAccessControlListSid: this.ipAccessControlListSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      uri: this.uri,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface IpAddressListInstance {
  (sid: string): IpAddressContext;
  get(sid: string): IpAddressContext;

  /**
   * Create a IpAddressInstance
   *
   * @param { IpAddressListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed IpAddressInstance
   */
  create(
    params: IpAddressListInstanceCreateOptions,
    callback?: (error: Error | null, item?: IpAddressInstance) => any
  ): Promise<IpAddressInstance>;
  create(params: any, callback?: any): Promise<IpAddressInstance>;

  /**
   * Streams IpAddressInstance records from the API.
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
    callback?: (item: IpAddressInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams IpAddressInstance records from the API.
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
   * @param { IpAddressListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: IpAddressListInstanceEachOptions,
    callback?: (item: IpAddressInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of IpAddressInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: IpAddressPage) => any
  ): Promise<IpAddressPage>;
  /**
   * Retrieve a single target page of IpAddressInstance records from the API.
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
    callback?: (error: Error | null, items: IpAddressPage) => any
  ): Promise<IpAddressPage>;
  getPage(params?: any, callback?: any): Promise<IpAddressPage>;
  /**
   * Lists IpAddressInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: IpAddressInstance[]) => any
  ): Promise<IpAddressInstance[]>;
  /**
   * Lists IpAddressInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { IpAddressListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: IpAddressListInstanceOptions,
    callback?: (error: Error | null, items: IpAddressInstance[]) => any
  ): Promise<IpAddressInstance[]>;
  list(params?: any, callback?: any): Promise<IpAddressInstance[]>;
  /**
   * Retrieve a single page of IpAddressInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: IpAddressPage) => any
  ): Promise<IpAddressPage>;
  /**
   * Retrieve a single page of IpAddressInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { IpAddressListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: IpAddressListInstancePageOptions,
    callback?: (error: Error | null, items: IpAddressPage) => any
  ): Promise<IpAddressPage>;
  page(params?: any, callback?: any): Promise<IpAddressPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface IpAddressSolution {
  accountSid?: string;
  ipAccessControlListSid?: string;
}

interface IpAddressListInstanceImpl extends IpAddressListInstance {}
class IpAddressListInstanceImpl implements IpAddressListInstance {
  _version?: V2010;
  _solution?: IpAddressSolution;
  _uri?: string;
}

export function IpAddressListInstance(
  version: V2010,
  accountSid: string,
  ipAccessControlListSid: string
): IpAddressListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(ipAccessControlListSid)) {
    throw new Error("Parameter 'ipAccessControlListSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as IpAddressListInstanceImpl;

  instance.get = function get(sid): IpAddressContext {
    return new IpAddressContextImpl(
      version,
      accountSid,
      ipAccessControlListSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { accountSid, ipAccessControlListSid };
  instance._uri = `/Accounts/${accountSid}/SIP/IpAccessControlLists/${ipAccessControlListSid}/IpAddresses.json`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<IpAddressInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    if (params["ipAddress"] === null || params["ipAddress"] === undefined) {
      throw new Error("Required parameter \"params['ipAddress']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];

    data["IpAddress"] = params["ipAddress"];
    if (params["cidrPrefixLength"] !== undefined)
      data["CidrPrefixLength"] = params["cidrPrefixLength"];

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
        new IpAddressInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.ipAccessControlListSid
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
  ): Promise<IpAddressPage> {
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
      (payload) => new IpAddressPage(operationVersion, payload, this._solution)
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
  ): Promise<IpAddressPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new IpAddressPage(this._version, payload, this._solution)
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

export class IpAddressPage extends Page<
  V2010,
  IpAddressPayload,
  IpAddressResource,
  IpAddressInstance
> {
  /**
   * Initialize the IpAddressPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: IpAddressSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of IpAddressInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: IpAddressResource): IpAddressInstance {
    return new IpAddressInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.ipAccessControlListSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
