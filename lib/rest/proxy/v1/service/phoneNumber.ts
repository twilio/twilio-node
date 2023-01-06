/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Proxy
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
import { PhoneNumberCapabilities } from "../../../../../lib/interfaces";

/**
 * Options to pass to update a PhoneNumberInstance
 */
export interface PhoneNumberContextUpdateOptions {
  /** Whether the phone number should be reserved and not be assigned to a participant using proxy pool logic. See [Reserved Phone Numbers](https://www.twilio.com/docs/proxy/reserved-phone-numbers) for more information. */
  isReserved?: boolean;
}

/**
 * Options to pass to create a PhoneNumberInstance
 */
export interface PhoneNumberListInstanceCreateOptions {
  /** The SID of a Twilio [IncomingPhoneNumber](https://www.twilio.com/docs/phone-numbers/api/incomingphonenumber-resource) resource that represents the Twilio Number you would like to assign to your Proxy Service. */
  sid?: string;
  /** The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format.  E.164 phone numbers consist of a + followed by the country code and subscriber number without punctuation characters. For example, +14155551234. */
  phoneNumber?: string;
  /** Whether the new phone number should be reserved and not be assigned to a participant using proxy pool logic. See [Reserved Phone Numbers](https://www.twilio.com/docs/proxy/reserved-phone-numbers) for more information. */
  isReserved?: boolean;
}
/**
 * Options to pass to each
 */
export interface PhoneNumberListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: PhoneNumberInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface PhoneNumberListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface PhoneNumberListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface PhoneNumberContext {
  /**
   * Remove a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PhoneNumberInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;

  /**
   * Update a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PhoneNumberInstance
   */
  update(
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;
  /**
   * Update a PhoneNumberInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PhoneNumberInstance
   */
  update(
    params: PhoneNumberContextUpdateOptions,
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PhoneNumberContextSolution {
  serviceSid: string;
  sid: string;
}

export class PhoneNumberContextImpl implements PhoneNumberContext {
  protected _solution: PhoneNumberContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/PhoneNumbers/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PhoneNumberInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | PhoneNumberContextUpdateOptions
      | ((error: Error | null, item?: PhoneNumberInstance) => any),
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["isReserved"] !== undefined)
      data["IsReserved"] = serialize.bool(params["isReserved"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PhoneNumberInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
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

interface PhoneNumberPayload extends TwilioResponsePayload {
  phone_numbers: PhoneNumberResource[];
}

interface PhoneNumberResource {
  sid: string;
  account_sid: string;
  service_sid: string;
  date_created: Date;
  date_updated: Date;
  phone_number: string;
  friendly_name: string;
  iso_country: string;
  capabilities: PhoneNumberCapabilities;
  url: string;
  is_reserved: boolean;
  in_use: number;
}

export class PhoneNumberInstance {
  protected _solution: PhoneNumberContextSolution;
  protected _context?: PhoneNumberContext;

  constructor(
    protected _version: V1,
    payload: PhoneNumberResource,
    serviceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.phoneNumber = payload.phone_number;
    this.friendlyName = payload.friendly_name;
    this.isoCountry = payload.iso_country;
    this.capabilities = payload.capabilities;
    this.url = payload.url;
    this.isReserved = payload.is_reserved;
    this.inUse = deserialize.integer(payload.in_use);

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  /**
   * The SID of the PhoneNumber resource\'s parent Service resource
   */
  serviceSid: string;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated: Date;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated: Date;
  /**
   * The phone number in E.164 format
   */
  phoneNumber: string;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName: string;
  /**
   * The ISO Country Code
   */
  isoCountry: string;
  capabilities: PhoneNumberCapabilities;
  /**
   * The absolute URL of the PhoneNumber resource
   */
  url: string;
  /**
   * Reserve the phone number for manual assignment to participants only
   */
  isReserved: boolean;
  /**
   * The number of open session assigned to the number.
   */
  inUse: number;

  private get _proxy(): PhoneNumberContext {
    this._context =
      this._context ||
      new PhoneNumberContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a PhoneNumberInstance
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
   * Fetch a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PhoneNumberInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PhoneNumberInstance
   */
  update(
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;
  /**
   * Update a PhoneNumberInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PhoneNumberInstance
   */
  update(
    params: PhoneNumberContextUpdateOptions,
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance> {
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
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      phoneNumber: this.phoneNumber,
      friendlyName: this.friendlyName,
      isoCountry: this.isoCountry,
      capabilities: this.capabilities,
      url: this.url,
      isReserved: this.isReserved,
      inUse: this.inUse,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface PhoneNumberSolution {
  serviceSid: string;
}

export interface PhoneNumberListInstance {
  _version: V1;
  _solution: PhoneNumberSolution;
  _uri: string;

  (sid: string): PhoneNumberContext;
  get(sid: string): PhoneNumberContext;

  /**
   * Create a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PhoneNumberInstance
   */
  create(
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;
  /**
   * Create a PhoneNumberInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PhoneNumberInstance
   */
  create(
    params: PhoneNumberListInstanceCreateOptions,
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;

  /**
   * Streams PhoneNumberInstance records from the API.
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
   * @param { PhoneNumberListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: PhoneNumberInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: PhoneNumberListInstanceEachOptions,
    callback?: (item: PhoneNumberInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of PhoneNumberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: PhoneNumberPage) => any
  ): Promise<PhoneNumberPage>;
  /**
   * Lists PhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { PhoneNumberListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: PhoneNumberInstance[]) => any
  ): Promise<PhoneNumberInstance[]>;
  list(
    params: PhoneNumberListInstanceOptions,
    callback?: (error: Error | null, items: PhoneNumberInstance[]) => any
  ): Promise<PhoneNumberInstance[]>;
  /**
   * Retrieve a single page of PhoneNumberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { PhoneNumberListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: PhoneNumberPage) => any
  ): Promise<PhoneNumberPage>;
  page(
    params: PhoneNumberListInstancePageOptions,
    callback?: (error: Error | null, items: PhoneNumberPage) => any
  ): Promise<PhoneNumberPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function PhoneNumberListInstance(
  version: V1,
  serviceSid: string
): PhoneNumberListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as PhoneNumberListInstance;

  instance.get = function get(sid): PhoneNumberContext {
    return new PhoneNumberContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/PhoneNumbers`;

  instance.create = function create(
    params?:
      | PhoneNumberListInstanceCreateOptions
      | ((error: Error | null, items: PhoneNumberInstance) => any),
    callback?: (error: Error | null, items: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["sid"] !== undefined) data["Sid"] = params["sid"];
    if (params["phoneNumber"] !== undefined)
      data["PhoneNumber"] = params["phoneNumber"];
    if (params["isReserved"] !== undefined)
      data["IsReserved"] = serialize.bool(params["isReserved"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PhoneNumberInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid
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
      | PhoneNumberListInstancePageOptions
      | ((error: Error | null, items: PhoneNumberPage) => any),
    callback?: (error: Error | null, items: PhoneNumberPage) => any
  ): Promise<PhoneNumberPage> {
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

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PhoneNumberPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: PhoneNumberPage) => any
  ): Promise<PhoneNumberPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new PhoneNumberPage(instance._version, payload, instance._solution)
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

export class PhoneNumberPage extends Page<
  V1,
  PhoneNumberPayload,
  PhoneNumberResource,
  PhoneNumberInstance
> {
  /**
   * Initialize the PhoneNumberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: PhoneNumberSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of PhoneNumberInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: PhoneNumberResource): PhoneNumberInstance {
    return new PhoneNumberInstance(
      this._version,
      payload,
      this._solution.serviceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
