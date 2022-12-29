/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Serverless
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * Options to pass to update a VariableInstance
 *
 * @property { string } [key] A string by which the Variable resource can be referenced. It can be a maximum of 128 characters.
 * @property { string } [value] A string that contains the actual value of the Variable. It can be a maximum of 450 bytes in size.
 */
export interface VariableContextUpdateOptions {
  key?: string;
  value?: string;
}

/**
 * Options to pass to create a VariableInstance
 *
 * @property { string } key A string by which the Variable resource can be referenced. It can be a maximum of 128 characters.
 * @property { string } value A string that contains the actual value of the Variable. It can be a maximum of 450 bytes in size.
 */
export interface VariableListInstanceCreateOptions {
  key: string;
  value: string;
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
export interface VariableListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: VariableInstance, done: (err?: Error) => void) => void;
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
export interface VariableListInstanceOptions {
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
export interface VariableListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface VariableContext {
  /**
   * Remove a VariableInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a VariableInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed VariableInstance
   */
  fetch(
    callback?: (error: Error | null, item?: VariableInstance) => any
  ): Promise<VariableInstance>;

  /**
   * Update a VariableInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed VariableInstance
   */
  update(
    callback?: (error: Error | null, item?: VariableInstance) => any
  ): Promise<VariableInstance>;
  /**
   * Update a VariableInstance
   *
   * @param { VariableContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed VariableInstance
   */
  update(
    params?:
      | VariableContextUpdateOptions
      | ((error: Error | null, item?: VariableInstance) => any),
    callback?: (error: Error | null, item?: VariableInstance) => any
  ): Promise<VariableInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface VariableContextSolution {
  serviceSid?: string;
  environmentSid?: string;
  sid?: string;
}

export class VariableContextImpl implements VariableContext {
  protected _solution: VariableContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    serviceSid: string,
    environmentSid: string,
    sid: string
  ) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(environmentSid)) {
      throw new Error("Parameter 'environmentSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, environmentSid, sid };
    this._uri = `/Services/${serviceSid}/Environments/${environmentSid}/Variables/${sid}`;
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

  fetch(callback?: any): Promise<VariableInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new VariableInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.environmentSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<VariableInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["key"] !== undefined) data["Key"] = params["key"];
    if (params["value"] !== undefined) data["Value"] = params["value"];

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
        new VariableInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.environmentSid,
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

interface VariablePayload extends TwilioResponsePayload {
  variables: VariableResource[];
}

interface VariableResource {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  environment_sid?: string | null;
  key?: string | null;
  value?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
}

export class VariableInstance {
  protected _solution: VariableContextSolution;
  protected _context?: VariableContext;

  constructor(
    protected _version: V1,
    payload: VariableResource,
    serviceSid: string,
    environmentSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.environmentSid = payload.environment_sid;
    this.key = payload.key;
    this.value = payload.value;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { serviceSid, environmentSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the Variable resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the Variable resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Service that the Variable resource is associated with
   */
  serviceSid?: string | null;
  /**
   * The SID of the Environment in which the Variable exists
   */
  environmentSid?: string | null;
  /**
   * A string by which the Variable resource can be referenced
   */
  key?: string | null;
  /**
   * A string that contains the actual value of the Variable
   */
  value?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the Variable resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the Variable resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the Variable resource
   */
  url?: string | null;

  private get _proxy(): VariableContext {
    this._context =
      this._context ||
      new VariableContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.environmentSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a VariableInstance
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
   * Fetch a VariableInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed VariableInstance
   */
  fetch(
    callback?: (error: Error | null, item?: VariableInstance) => any
  ): Promise<VariableInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a VariableInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed VariableInstance
   */
  update(
    callback?: (error: Error | null, item?: VariableInstance) => any
  ): Promise<VariableInstance>;
  /**
   * Update a VariableInstance
   *
   * @param { VariableContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed VariableInstance
   */
  update(
    params?:
      | VariableContextUpdateOptions
      | ((error: Error | null, item?: VariableInstance) => any),
    callback?: (error: Error | null, item?: VariableInstance) => any
  ): Promise<VariableInstance> {
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
      environmentSid: this.environmentSid,
      key: this.key,
      value: this.value,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface VariableListInstance {
  (sid: string): VariableContext;
  get(sid: string): VariableContext;

  /**
   * Create a VariableInstance
   *
   * @param { VariableListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed VariableInstance
   */
  create(
    params: VariableListInstanceCreateOptions,
    callback?: (error: Error | null, item?: VariableInstance) => any
  ): Promise<VariableInstance>;

  /**
   * Streams VariableInstance records from the API.
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
   * @param { VariableListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | VariableListInstanceEachOptions
      | ((item: VariableInstance, done: (err?: Error) => void) => void),
    callback?: (item: VariableInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of VariableInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: VariablePage) => any
  ): Promise<VariablePage>;
  /**
   * Lists VariableInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { VariableListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | VariableListInstanceOptions
      | ((error: Error | null, items: VariableInstance[]) => any),
    callback?: (error: Error | null, items: VariableInstance[]) => any
  ): Promise<VariableInstance[]>;
  /**
   * Retrieve a single page of VariableInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { VariableListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | VariableListInstancePageOptions
      | ((error: Error | null, items: VariablePage) => any),
    callback?: (error: Error | null, items: VariablePage) => any
  ): Promise<VariablePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface VariableSolution {
  serviceSid?: string;
  environmentSid?: string;
}

interface VariableListInstanceImpl extends VariableListInstance {}
class VariableListInstanceImpl implements VariableListInstance {
  _version?: V1;
  _solution?: VariableSolution;
  _uri?: string;
}

export function VariableListInstance(
  version: V1,
  serviceSid: string,
  environmentSid: string
): VariableListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  if (!isValidPathParam(environmentSid)) {
    throw new Error("Parameter 'environmentSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as VariableListInstanceImpl;

  instance.get = function get(sid): VariableContext {
    return new VariableContextImpl(version, serviceSid, environmentSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid, environmentSid };
  instance._uri = `/Services/${serviceSid}/Environments/${environmentSid}/Variables`;

  instance.create = function create(
    params: VariableListInstanceCreateOptions,
    callback?: (error: Error | null, item?: VariableInstance) => any
  ): Promise<VariableInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["key"] === null || params["key"] === undefined) {
      throw new Error("Required parameter \"params['key']\" missing.");
    }

    if (params["value"] === null || params["value"] === undefined) {
      throw new Error("Required parameter \"params['value']\" missing.");
    }

    let data: any = {};

    data["Key"] = params["key"];

    data["Value"] = params["value"];

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
        new VariableInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.environmentSid
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
      | VariableListInstancePageOptions
      | ((error: Error | null, item?: VariablePage) => any),
    callback?: (error: Error | null, item?: VariablePage) => any
  ): Promise<VariablePage> {
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
      (payload) => new VariablePage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: VariablePage) => any
  ): Promise<VariablePage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new VariablePage(this._version, payload, this._solution)
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

export class VariablePage extends Page<
  V1,
  VariablePayload,
  VariableResource,
  VariableInstance
> {
  /**
   * Initialize the VariablePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: VariableSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of VariableInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: VariableResource): VariableInstance {
    return new VariableInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.environmentSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
