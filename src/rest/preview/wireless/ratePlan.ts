/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import Wireless from "../Wireless";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to update a RatePlanInstance
 */
export interface RatePlanContextUpdateOptions {
  /**  */
  uniqueName?: string;
  /**  */
  friendlyName?: string;
}

/**
 * Options to pass to create a RatePlanInstance
 */
export interface RatePlanListInstanceCreateOptions {
  /**  */
  uniqueName?: string;
  /**  */
  friendlyName?: string;
  /**  */
  dataEnabled?: boolean;
  /**  */
  dataLimit?: number;
  /**  */
  dataMetering?: string;
  /**  */
  messagingEnabled?: boolean;
  /**  */
  voiceEnabled?: boolean;
  /**  */
  commandsEnabled?: boolean;
  /**  */
  nationalRoamingEnabled?: boolean;
  /**  */
  internationalRoaming?: Array<string>;
}
/**
 * Options to pass to each
 */
export interface RatePlanListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: RatePlanInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface RatePlanListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface RatePlanListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface RatePlanContext {
  /**
   * Remove a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RatePlanInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance>;

  /**
   * Update a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RatePlanInstance
   */
  update(
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance>;
  /**
   * Update a RatePlanInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RatePlanInstance
   */
  update(
    params: RatePlanContextUpdateOptions,
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RatePlanContextSolution {
  sid: string;
}

export class RatePlanContextImpl implements RatePlanContext {
  protected _solution: RatePlanContextSolution;
  protected _uri: string;

  constructor(protected _version: Wireless, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/RatePlans/${sid}`;
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
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance> {
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
        new RatePlanInstance(operationVersion, payload, instance._solution.sid)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | RatePlanContextUpdateOptions
      | ((error: Error | null, item?: RatePlanInstance) => any),
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];

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
        new RatePlanInstance(operationVersion, payload, instance._solution.sid)
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

interface RatePlanPayload extends TwilioResponsePayload {
  rate_plans: RatePlanResource[];
}

interface RatePlanResource {
  sid: string;
  unique_name: string;
  account_sid: string;
  friendly_name: string;
  data_enabled: boolean;
  data_metering: string;
  data_limit: number;
  messaging_enabled: boolean;
  voice_enabled: boolean;
  national_roaming_enabled: boolean;
  international_roaming: Array<string>;
  date_created: Date;
  date_updated: Date;
  url: string;
}

export class RatePlanInstance {
  protected _solution: RatePlanContextSolution;
  protected _context?: RatePlanContext;

  constructor(
    protected _version: Wireless,
    payload: RatePlanResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.dataEnabled = payload.data_enabled;
    this.dataMetering = payload.data_metering;
    this.dataLimit = deserialize.integer(payload.data_limit);
    this.messagingEnabled = payload.messaging_enabled;
    this.voiceEnabled = payload.voice_enabled;
    this.nationalRoamingEnabled = payload.national_roaming_enabled;
    this.internationalRoaming = payload.international_roaming;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  sid: string;
  uniqueName: string;
  accountSid: string;
  friendlyName: string;
  dataEnabled: boolean;
  dataMetering: string;
  dataLimit: number;
  messagingEnabled: boolean;
  voiceEnabled: boolean;
  nationalRoamingEnabled: boolean;
  internationalRoaming: Array<string>;
  dateCreated: Date;
  dateUpdated: Date;
  url: string;

  private get _proxy(): RatePlanContext {
    this._context =
      this._context ||
      new RatePlanContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a RatePlanInstance
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
   * Fetch a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RatePlanInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RatePlanInstance
   */
  update(
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance>;
  /**
   * Update a RatePlanInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RatePlanInstance
   */
  update(
    params: RatePlanContextUpdateOptions,
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance> {
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
      uniqueName: this.uniqueName,
      accountSid: this.accountSid,
      friendlyName: this.friendlyName,
      dataEnabled: this.dataEnabled,
      dataMetering: this.dataMetering,
      dataLimit: this.dataLimit,
      messagingEnabled: this.messagingEnabled,
      voiceEnabled: this.voiceEnabled,
      nationalRoamingEnabled: this.nationalRoamingEnabled,
      internationalRoaming: this.internationalRoaming,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface RatePlanSolution {}

export interface RatePlanListInstance {
  _version: Wireless;
  _solution: RatePlanSolution;
  _uri: string;

  (sid: string): RatePlanContext;
  get(sid: string): RatePlanContext;

  /**
   * Create a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RatePlanInstance
   */
  create(
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance>;
  /**
   * Create a RatePlanInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RatePlanInstance
   */
  create(
    params: RatePlanListInstanceCreateOptions,
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance>;

  /**
   * Streams RatePlanInstance records from the API.
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
   * @param { RatePlanListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: RatePlanInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: RatePlanListInstanceEachOptions,
    callback?: (item: RatePlanInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of RatePlanInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: RatePlanPage) => any
  ): Promise<RatePlanPage>;
  /**
   * Lists RatePlanInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RatePlanListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: RatePlanInstance[]) => any
  ): Promise<RatePlanInstance[]>;
  list(
    params: RatePlanListInstanceOptions,
    callback?: (error: Error | null, items: RatePlanInstance[]) => any
  ): Promise<RatePlanInstance[]>;
  /**
   * Retrieve a single page of RatePlanInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RatePlanListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: RatePlanPage) => any
  ): Promise<RatePlanPage>;
  page(
    params: RatePlanListInstancePageOptions,
    callback?: (error: Error | null, items: RatePlanPage) => any
  ): Promise<RatePlanPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function RatePlanListInstance(version: Wireless): RatePlanListInstance {
  const instance = ((sid) => instance.get(sid)) as RatePlanListInstance;

  instance.get = function get(sid): RatePlanContext {
    return new RatePlanContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/RatePlans`;

  instance.create = function create(
    params?:
      | RatePlanListInstanceCreateOptions
      | ((error: Error | null, items: RatePlanInstance) => any),
    callback?: (error: Error | null, items: RatePlanInstance) => any
  ): Promise<RatePlanInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["dataEnabled"] !== undefined)
      data["DataEnabled"] = serialize.bool(params["dataEnabled"]);
    if (params["dataLimit"] !== undefined)
      data["DataLimit"] = params["dataLimit"];
    if (params["dataMetering"] !== undefined)
      data["DataMetering"] = params["dataMetering"];
    if (params["messagingEnabled"] !== undefined)
      data["MessagingEnabled"] = serialize.bool(params["messagingEnabled"]);
    if (params["voiceEnabled"] !== undefined)
      data["VoiceEnabled"] = serialize.bool(params["voiceEnabled"]);
    if (params["commandsEnabled"] !== undefined)
      data["CommandsEnabled"] = serialize.bool(params["commandsEnabled"]);
    if (params["nationalRoamingEnabled"] !== undefined)
      data["NationalRoamingEnabled"] = serialize.bool(
        params["nationalRoamingEnabled"]
      );
    if (params["internationalRoaming"] !== undefined)
      data["InternationalRoaming"] = serialize.map(
        params["internationalRoaming"],
        (e: string) => e
      );

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
      (payload) => new RatePlanInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | RatePlanListInstancePageOptions
      | ((error: Error | null, items: RatePlanPage) => any),
    callback?: (error: Error | null, items: RatePlanPage) => any
  ): Promise<RatePlanPage> {
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
        new RatePlanPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: RatePlanPage) => any
  ): Promise<RatePlanPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new RatePlanPage(instance._version, payload, instance._solution)
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

export class RatePlanPage extends Page<
  Wireless,
  RatePlanPayload,
  RatePlanResource,
  RatePlanInstance
> {
  /**
   * Initialize the RatePlanPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: Wireless,
    response: Response<string>,
    solution: RatePlanSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of RatePlanInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RatePlanResource): RatePlanInstance {
    return new RatePlanInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
