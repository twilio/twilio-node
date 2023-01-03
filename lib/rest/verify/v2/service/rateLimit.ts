/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
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
import { BucketListInstance } from "./rateLimit/bucket";

/**
 * Options to pass to update a RateLimitInstance
 *
 * @property { string } [description] Description of this Rate Limit
 */
export interface RateLimitContextUpdateOptions {
  description?: string;
}

/**
 * Options to pass to create a RateLimitInstance
 *
 * @property { string } uniqueName Provides a unique and addressable name to be assigned to this Rate Limit, assigned by the developer, to be optionally used in addition to SID. **This value should not contain PII.**
 * @property { string } [description] Description of this Rate Limit
 */
export interface RateLimitListInstanceCreateOptions {
  uniqueName: string;
  description?: string;
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
export interface RateLimitListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: RateLimitInstance, done: (err?: Error) => void) => void;
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
export interface RateLimitListInstanceOptions {
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
export interface RateLimitListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface RateLimitContext {
  buckets: BucketListInstance;

  /**
   * Remove a RateLimitInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a RateLimitInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RateLimitInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RateLimitInstance) => any
  ): Promise<RateLimitInstance>;

  /**
   * Update a RateLimitInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RateLimitInstance
   */
  update(
    callback?: (error: Error | null, item?: RateLimitInstance) => any
  ): Promise<RateLimitInstance>;
  /**
   * Update a RateLimitInstance
   *
   * @param { RateLimitContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RateLimitInstance
   */
  update(
    params: RateLimitContextUpdateOptions,
    callback?: (error: Error | null, item?: RateLimitInstance) => any
  ): Promise<RateLimitInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RateLimitContextSolution {
  serviceSid?: string;
  sid?: string;
}

export class RateLimitContextImpl implements RateLimitContext {
  protected _solution: RateLimitContextSolution;
  protected _uri: string;

  protected _buckets?: BucketListInstance;

  constructor(protected _version: V2, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/RateLimits/${sid}`;
  }

  get buckets(): BucketListInstance {
    this._buckets =
      this._buckets ||
      BucketListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._buckets;
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
    callback?: (error: Error | null, item?: RateLimitInstance) => any
  ): Promise<RateLimitInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new RateLimitInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | RateLimitContextUpdateOptions
      | ((error: Error | null, item?: RateLimitInstance) => any),
    callback?: (error: Error | null, item?: RateLimitInstance) => any
  ): Promise<RateLimitInstance> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: RateLimitInstance
      ) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["description"] !== undefined)
      data["Description"] = params["description"];

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
        new RateLimitInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
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

interface RateLimitPayload extends TwilioResponsePayload {
  rate_limits: RateLimitResource[];
}

interface RateLimitResource {
  sid?: string | null;
  service_sid?: string | null;
  account_sid?: string | null;
  unique_name?: string | null;
  description?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  links?: object | null;
}

export class RateLimitInstance {
  protected _solution: RateLimitContextSolution;
  protected _context?: RateLimitContext;

  constructor(
    protected _version: V2,
    payload: RateLimitResource,
    serviceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.serviceSid = payload.service_sid;
    this.accountSid = payload.account_sid;
    this.uniqueName = payload.unique_name;
    this.description = payload.description;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * A string that uniquely identifies this Rate Limit.
   */
  sid?: string | null;
  /**
   * The SID of the Service that the resource is associated with
   */
  serviceSid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * A unique, developer assigned name of this Rate Limit.
   */
  uniqueName?: string | null;
  /**
   * Description of this Rate Limit
   */
  description?: string | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The URL of this resource.
   */
  url?: string | null;
  /**
   * The URLs of related resources
   */
  links?: object | null;

  private get _proxy(): RateLimitContext {
    this._context =
      this._context ||
      new RateLimitContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a RateLimitInstance
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
   * Fetch a RateLimitInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RateLimitInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RateLimitInstance) => any
  ): Promise<RateLimitInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a RateLimitInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RateLimitInstance
   */
  update(
    callback?: (error: Error | null, item?: RateLimitInstance) => any
  ): Promise<RateLimitInstance>;
  /**
   * Update a RateLimitInstance
   *
   * @param { RateLimitContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RateLimitInstance
   */
  update(
    params: RateLimitContextUpdateOptions,
    callback?: (error: Error | null, item?: RateLimitInstance) => any
  ): Promise<RateLimitInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: RateLimitInstance) => any
  ): Promise<RateLimitInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the buckets.
   */
  buckets(): BucketListInstance {
    return this._proxy.buckets;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      serviceSid: this.serviceSid,
      accountSid: this.accountSid,
      uniqueName: this.uniqueName,
      description: this.description,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface RateLimitListInstance {
  (sid: string): RateLimitContext;
  get(sid: string): RateLimitContext;

  /**
   * Create a RateLimitInstance
   *
   * @param { RateLimitListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RateLimitInstance
   */
  create(
    params: RateLimitListInstanceCreateOptions,
    callback?: (error: Error | null, item?: RateLimitInstance) => any
  ): Promise<RateLimitInstance>;

  /**
   * Streams RateLimitInstance records from the API.
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
   * @param { RateLimitListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: RateLimitInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: RateLimitListInstanceEachOptions,
    callback?: (item: RateLimitInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of RateLimitInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: RateLimitPage) => any
  ): Promise<RateLimitPage>;
  /**
   * Lists RateLimitInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RateLimitListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: RateLimitInstance[]) => any
  ): Promise<RateLimitInstance[]>;
  list(
    params: RateLimitListInstanceOptions,
    callback?: (error: Error | null, items: RateLimitInstance[]) => any
  ): Promise<RateLimitInstance[]>;
  /**
   * Retrieve a single page of RateLimitInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RateLimitListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: RateLimitPage) => any
  ): Promise<RateLimitPage>;
  page(
    params: RateLimitListInstancePageOptions,
    callback?: (error: Error | null, items: RateLimitPage) => any
  ): Promise<RateLimitPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RateLimitSolution {
  serviceSid?: string;
}

interface RateLimitListInstanceImpl extends RateLimitListInstance {}
class RateLimitListInstanceImpl implements RateLimitListInstance {
  _version?: V2;
  _solution?: RateLimitSolution;
  _uri?: string;
}

export function RateLimitListInstance(
  version: V2,
  serviceSid: string
): RateLimitListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as RateLimitListInstanceImpl;

  instance.get = function get(sid): RateLimitContext {
    return new RateLimitContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/RateLimits`;

  instance.create = function create(
    params: RateLimitListInstanceCreateOptions,
    callback?: (error: Error | null, item?: RateLimitInstance) => any
  ): Promise<RateLimitInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["uniqueName"] === null || params["uniqueName"] === undefined) {
      throw new Error("Required parameter \"params['uniqueName']\" missing.");
    }

    let data: any = {};

    data["UniqueName"] = params["uniqueName"];
    if (params["description"] !== undefined)
      data["Description"] = params["description"];

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
        new RateLimitInstance(
          operationVersion,
          payload,
          this._solution.serviceSid
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
      | RateLimitListInstancePageOptions
      | ((error: Error | null, item?: RateLimitPage) => any),
    callback?: (error: Error | null, item?: RateLimitPage) => any
  ): Promise<RateLimitPage> {
    if (typeof params === "function") {
      callback = params as (error: Error | null, item?: RateLimitPage) => any;
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
      (payload) => new RateLimitPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: RateLimitPage) => any
  ): Promise<RateLimitPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new RateLimitPage(this._version, payload, this._solution)
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

export class RateLimitPage extends Page<
  V2,
  RateLimitPayload,
  RateLimitResource,
  RateLimitInstance
> {
  /**
   * Initialize the RateLimitPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: RateLimitSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of RateLimitInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RateLimitResource): RateLimitInstance {
    return new RateLimitInstance(
      this._version,
      payload,
      this._solution.serviceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
