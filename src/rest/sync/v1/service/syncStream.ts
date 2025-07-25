/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Sync
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
import { StreamMessageListInstance } from "./syncStream/streamMessage";

/**
 * Options to pass to update a SyncStreamInstance
 */
export interface SyncStreamContextUpdateOptions {
  /** How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Stream expires and is deleted (time-to-live). */
  ttl?: number;
}

/**
 * Options to pass to create a SyncStreamInstance
 */
export interface SyncStreamListInstanceCreateOptions {
  /** An application-defined string that uniquely identifies the resource. This value must be unique within its Service and it can be up to 320 characters long. The `unique_name` value can be used as an alternative to the `sid` in the URL path to address the resource. */
  uniqueName?: string;
  /** How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Stream expires and is deleted (time-to-live). */
  ttl?: number;
}
/**
 * Options to pass to each
 */
export interface SyncStreamListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 100. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: SyncStreamInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface SyncStreamListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 100. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface SyncStreamListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 100. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface SyncStreamContext {
  streamMessages: StreamMessageListInstance;

  /**
   * Remove a SyncStreamInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a SyncStreamInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncStreamInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SyncStreamInstance) => any
  ): Promise<SyncStreamInstance>;

  /**
   * Update a SyncStreamInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncStreamInstance
   */
  update(
    callback?: (error: Error | null, item?: SyncStreamInstance) => any
  ): Promise<SyncStreamInstance>;
  /**
   * Update a SyncStreamInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncStreamInstance
   */
  update(
    params: SyncStreamContextUpdateOptions,
    callback?: (error: Error | null, item?: SyncStreamInstance) => any
  ): Promise<SyncStreamInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SyncStreamContextSolution {
  serviceSid: string;
  sid: string;
}

export class SyncStreamContextImpl implements SyncStreamContext {
  protected _solution: SyncStreamContextSolution;
  protected _uri: string;

  protected _streamMessages?: StreamMessageListInstance;

  constructor(protected _version: V1, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Streams/${sid}`;
  }

  get streamMessages(): StreamMessageListInstance {
    this._streamMessages =
      this._streamMessages ||
      StreamMessageListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._streamMessages;
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
    callback?: (error: Error | null, item?: SyncStreamInstance) => any
  ): Promise<SyncStreamInstance> {
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
        new SyncStreamInstance(
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
      | SyncStreamContextUpdateOptions
      | ((error: Error | null, item?: SyncStreamInstance) => any),
    callback?: (error: Error | null, item?: SyncStreamInstance) => any
  ): Promise<SyncStreamInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["ttl"] !== undefined) data["Ttl"] = params["ttl"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";

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
        new SyncStreamInstance(
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

interface SyncStreamPayload extends TwilioResponsePayload {
  streams: SyncStreamResource[];
}

interface SyncStreamResource {
  sid: string;
  unique_name: string;
  account_sid: string;
  service_sid: string;
  url: string;
  links: Record<string, string>;
  date_expires: Date;
  date_created: Date;
  date_updated: Date;
  created_by: string;
}

export class SyncStreamInstance {
  protected _solution: SyncStreamContextSolution;
  protected _context?: SyncStreamContext;

  constructor(
    protected _version: V1,
    payload: SyncStreamResource,
    serviceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.url = payload.url;
    this.links = payload.links;
    this.dateExpires = deserialize.iso8601DateTime(payload.date_expires);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.createdBy = payload.created_by;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the Sync Stream resource.
   */
  sid: string;
  /**
   * An application-defined string that uniquely identifies the resource. It can be used in place of the resource\'s `sid` in the URL to address the resource.
   */
  uniqueName: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sync Stream resource.
   */
  accountSid: string;
  /**
   * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
   */
  serviceSid: string;
  /**
   * The absolute URL of the Message Stream resource.
   */
  url: string;
  /**
   * The URLs of the Stream\'s nested resources.
   */
  links: Record<string, string>;
  /**
   * The date and time in GMT when the Message Stream expires and will be deleted, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If the Message Stream does not expire, this value is `null`. The Stream might not be deleted immediately after it expires.
   */
  dateExpires: Date;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The identity of the Stream\'s creator. If the Stream is created from the client SDK, the value matches the Access Token\'s `identity` field. If the Stream was created from the REST API, the value is \'system\'.
   */
  createdBy: string;

  private get _proxy(): SyncStreamContext {
    this._context =
      this._context ||
      new SyncStreamContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a SyncStreamInstance
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
   * Fetch a SyncStreamInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncStreamInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SyncStreamInstance) => any
  ): Promise<SyncStreamInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SyncStreamInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncStreamInstance
   */
  update(
    callback?: (error: Error | null, item?: SyncStreamInstance) => any
  ): Promise<SyncStreamInstance>;
  /**
   * Update a SyncStreamInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncStreamInstance
   */
  update(
    params: SyncStreamContextUpdateOptions,
    callback?: (error: Error | null, item?: SyncStreamInstance) => any
  ): Promise<SyncStreamInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: SyncStreamInstance) => any
  ): Promise<SyncStreamInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the streamMessages.
   */
  streamMessages(): StreamMessageListInstance {
    return this._proxy.streamMessages;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      uniqueName: this.uniqueName,
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      url: this.url,
      links: this.links,
      dateExpires: this.dateExpires,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      createdBy: this.createdBy,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface SyncStreamSolution {
  serviceSid: string;
}

export interface SyncStreamListInstance {
  _version: V1;
  _solution: SyncStreamSolution;
  _uri: string;

  (sid: string): SyncStreamContext;
  get(sid: string): SyncStreamContext;

  /**
   * Create a SyncStreamInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncStreamInstance
   */
  create(
    callback?: (error: Error | null, item?: SyncStreamInstance) => any
  ): Promise<SyncStreamInstance>;
  /**
   * Create a SyncStreamInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncStreamInstance
   */
  create(
    params: SyncStreamListInstanceCreateOptions,
    callback?: (error: Error | null, item?: SyncStreamInstance) => any
  ): Promise<SyncStreamInstance>;

  /**
   * Streams SyncStreamInstance records from the API.
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
   * @param { SyncStreamListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: SyncStreamInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: SyncStreamListInstanceEachOptions,
    callback?: (item: SyncStreamInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of SyncStreamInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: SyncStreamPage) => any
  ): Promise<SyncStreamPage>;
  /**
   * Lists SyncStreamInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncStreamListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: SyncStreamInstance[]) => any
  ): Promise<SyncStreamInstance[]>;
  list(
    params: SyncStreamListInstanceOptions,
    callback?: (error: Error | null, items: SyncStreamInstance[]) => any
  ): Promise<SyncStreamInstance[]>;
  /**
   * Retrieve a single page of SyncStreamInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncStreamListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: SyncStreamPage) => any
  ): Promise<SyncStreamPage>;
  page(
    params: SyncStreamListInstancePageOptions,
    callback?: (error: Error | null, items: SyncStreamPage) => any
  ): Promise<SyncStreamPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SyncStreamListInstance(
  version: V1,
  serviceSid: string
): SyncStreamListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as SyncStreamListInstance;

  instance.get = function get(sid): SyncStreamContext {
    return new SyncStreamContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Streams`;

  instance.create = function create(
    params?:
      | SyncStreamListInstanceCreateOptions
      | ((error: Error | null, items: SyncStreamInstance) => any),
    callback?: (error: Error | null, items: SyncStreamInstance) => any
  ): Promise<SyncStreamInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["ttl"] !== undefined) data["Ttl"] = params["ttl"];

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
        new SyncStreamInstance(
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
      | SyncStreamListInstancePageOptions
      | ((error: Error | null, items: SyncStreamPage) => any),
    callback?: (error: Error | null, items: SyncStreamPage) => any
  ): Promise<SyncStreamPage> {
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
        new SyncStreamPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: SyncStreamPage) => any
  ): Promise<SyncStreamPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new SyncStreamPage(instance._version, payload, instance._solution)
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

export class SyncStreamPage extends Page<
  V1,
  SyncStreamPayload,
  SyncStreamResource,
  SyncStreamInstance
> {
  /**
   * Initialize the SyncStreamPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: SyncStreamSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SyncStreamInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncStreamResource): SyncStreamInstance {
    return new SyncStreamInstance(
      this._version,
      payload,
      this._solution.serviceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
