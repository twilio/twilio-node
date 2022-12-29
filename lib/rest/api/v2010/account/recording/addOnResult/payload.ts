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
export interface PayloadListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: PayloadInstance, done: (err?: Error) => void) => void;
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
export interface PayloadListInstanceOptions {
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
export interface PayloadListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface PayloadContext {
  /**
   * Remove a PayloadInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a PayloadInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PayloadInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PayloadInstance) => any
  ): Promise<PayloadInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PayloadContextSolution {
  accountSid?: string;
  referenceSid?: string;
  addOnResultSid?: string;
  sid?: string;
}

export class PayloadContextImpl implements PayloadContext {
  protected _solution: PayloadContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V2010,
    accountSid: string,
    referenceSid: string,
    addOnResultSid: string,
    sid: string
  ) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(referenceSid)) {
      throw new Error("Parameter 'referenceSid' is not valid.");
    }

    if (!isValidPathParam(addOnResultSid)) {
      throw new Error("Parameter 'addOnResultSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, referenceSid, addOnResultSid, sid };
    this._uri = `/Accounts/${accountSid}/Recordings/${referenceSid}/AddOnResults/${addOnResultSid}/Payloads/${sid}.json`;
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

  fetch(callback?: any): Promise<PayloadInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PayloadInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.referenceSid,
          this._solution.addOnResultSid,
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

interface PayloadPayload extends TwilioResponsePayload {
  payloads: PayloadResource[];
}

interface PayloadResource {
  sid?: string | null;
  add_on_result_sid?: string | null;
  account_sid?: string | null;
  label?: string | null;
  add_on_sid?: string | null;
  add_on_configuration_sid?: string | null;
  content_type?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  reference_sid?: string | null;
  subresource_uris?: object | null;
}

export class PayloadInstance {
  protected _solution: PayloadContextSolution;
  protected _context?: PayloadContext;

  constructor(
    protected _version: V2010,
    payload: PayloadResource,
    accountSid: string,
    referenceSid: string,
    addOnResultSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.addOnResultSid = payload.add_on_result_sid;
    this.accountSid = payload.account_sid;
    this.label = payload.label;
    this.addOnSid = payload.add_on_sid;
    this.addOnConfigurationSid = payload.add_on_configuration_sid;
    this.contentType = payload.content_type;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.referenceSid = payload.reference_sid;
    this.subresourceUris = payload.subresource_uris;

    this._solution = {
      accountSid,
      referenceSid,
      addOnResultSid,
      sid: sid || this.sid,
    };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the AddOnResult to which the payload belongs
   */
  addOnResultSid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The string that describes the payload
   */
  label?: string | null;
  /**
   * The SID of the Add-on to which the result belongs
   */
  addOnSid?: string | null;
  /**
   * The SID of the Add-on configuration
   */
  addOnConfigurationSid?: string | null;
  /**
   * The MIME type of the payload
   */
  contentType?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The SID of the recording to which the AddOnResult resource that contains the payload belongs
   */
  referenceSid?: string | null;
  /**
   * A list of related resources identified by their relative URIs
   */
  subresourceUris?: object | null;

  private get _proxy(): PayloadContext {
    this._context =
      this._context ||
      new PayloadContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.referenceSid,
        this._solution.addOnResultSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a PayloadInstance
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
   * Fetch a PayloadInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PayloadInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PayloadInstance) => any
  ): Promise<PayloadInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      addOnResultSid: this.addOnResultSid,
      accountSid: this.accountSid,
      label: this.label,
      addOnSid: this.addOnSid,
      addOnConfigurationSid: this.addOnConfigurationSid,
      contentType: this.contentType,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      referenceSid: this.referenceSid,
      subresourceUris: this.subresourceUris,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface PayloadListInstance {
  (sid: string): PayloadContext;
  get(sid: string): PayloadContext;

  /**
   * Streams PayloadInstance records from the API.
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
   * @param { PayloadListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | PayloadListInstanceEachOptions
      | ((item: PayloadInstance, done: (err?: Error) => void) => void),
    callback?: (item: PayloadInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of PayloadInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: PayloadPage) => any
  ): Promise<PayloadPage>;
  /**
   * Lists PayloadInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { PayloadListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | PayloadListInstanceOptions
      | ((error: Error | null, items: PayloadInstance[]) => any),
    callback?: (error: Error | null, items: PayloadInstance[]) => any
  ): Promise<PayloadInstance[]>;
  /**
   * Retrieve a single page of PayloadInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { PayloadListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | PayloadListInstancePageOptions
      | ((error: Error | null, items: PayloadPage) => any),
    callback?: (error: Error | null, items: PayloadPage) => any
  ): Promise<PayloadPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PayloadSolution {
  accountSid?: string;
  referenceSid?: string;
  addOnResultSid?: string;
}

interface PayloadListInstanceImpl extends PayloadListInstance {}
class PayloadListInstanceImpl implements PayloadListInstance {
  _version?: V2010;
  _solution?: PayloadSolution;
  _uri?: string;
}

export function PayloadListInstance(
  version: V2010,
  accountSid: string,
  referenceSid: string,
  addOnResultSid: string
): PayloadListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(referenceSid)) {
    throw new Error("Parameter 'referenceSid' is not valid.");
  }

  if (!isValidPathParam(addOnResultSid)) {
    throw new Error("Parameter 'addOnResultSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as PayloadListInstanceImpl;

  instance.get = function get(sid): PayloadContext {
    return new PayloadContextImpl(
      version,
      accountSid,
      referenceSid,
      addOnResultSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { accountSid, referenceSid, addOnResultSid };
  instance._uri = `/Accounts/${accountSid}/Recordings/${referenceSid}/AddOnResults/${addOnResultSid}/Payloads.json`;

  instance.page = function page(
    params?:
      | PayloadListInstancePageOptions
      | ((error: Error | null, item?: PayloadPage) => any),
    callback?: (error: Error | null, item?: PayloadPage) => any
  ): Promise<PayloadPage> {
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
      (payload) => new PayloadPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: PayloadPage) => any
  ): Promise<PayloadPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new PayloadPage(this._version, payload, this._solution)
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

export class PayloadPage extends Page<
  V2010,
  PayloadPayload,
  PayloadResource,
  PayloadInstance
> {
  /**
   * Initialize the PayloadPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: PayloadSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of PayloadInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: PayloadResource): PayloadInstance {
    return new PayloadInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.referenceSid,
      this._solution.addOnResultSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
