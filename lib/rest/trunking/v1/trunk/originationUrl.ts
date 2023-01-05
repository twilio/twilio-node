/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trunking
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

/**
 * Options to pass to update a OriginationUrlInstance
 */
export interface OriginationUrlContextUpdateOptions {
  /** The value that determines the relative share of the load the URI should receive compared to other URIs with the same priority. Can be an integer from 1 to 65535, inclusive, and the default is 10. URLs with higher values receive more load than those with lower ones with the same priority. */
  weight?: number;
  /** The relative importance of the URI. Can be an integer from 0 to 65535, inclusive, and the default is 10. The lowest number represents the most important URI. */
  priority?: number;
  /** Whether the URL is enabled. The default is `true`. */
  enabled?: boolean;
  /** A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
  friendlyName?: string;
  /** The SIP address you want Twilio to route your Origination calls to. This must be a `sip:` schema. `sips` is NOT supported. */
  sipUrl?: string;
}

/**
 * Options to pass to create a OriginationUrlInstance
 */
export interface OriginationUrlListInstanceCreateOptions {
  /** The value that determines the relative share of the load the URI should receive compared to other URIs with the same priority. Can be an integer from 1 to 65535, inclusive, and the default is 10. URLs with higher values receive more load than those with lower ones with the same priority. */
  weight: number;
  /** The relative importance of the URI. Can be an integer from 0 to 65535, inclusive, and the default is 10. The lowest number represents the most important URI. */
  priority: number;
  /** Whether the URL is enabled. The default is `true`. */
  enabled: boolean;
  /** A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
  friendlyName: string;
  /** The SIP address you want Twilio to route your Origination calls to. This must be a `sip:` schema. */
  sipUrl: string;
}
/**
 * Options to pass to each
 */
export interface OriginationUrlListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: OriginationUrlInstance,
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
export interface OriginationUrlListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface OriginationUrlListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface OriginationUrlContext {
  /**
   * Remove a OriginationUrlInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a OriginationUrlInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OriginationUrlInstance
   */
  fetch(
    callback?: (error: Error | null, item?: OriginationUrlInstance) => any
  ): Promise<OriginationUrlInstance>;

  /**
   * Update a OriginationUrlInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OriginationUrlInstance
   */
  update(
    callback?: (error: Error | null, item?: OriginationUrlInstance) => any
  ): Promise<OriginationUrlInstance>;
  /**
   * Update a OriginationUrlInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OriginationUrlInstance
   */
  update(
    params: OriginationUrlContextUpdateOptions,
    callback?: (error: Error | null, item?: OriginationUrlInstance) => any
  ): Promise<OriginationUrlInstance>;
  update(params?: any, callback?: any): Promise<OriginationUrlInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface OriginationUrlContextSolution {
  trunkSid: string;
  sid: string;
}

export class OriginationUrlContextImpl implements OriginationUrlContext {
  protected _solution: OriginationUrlContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, trunkSid: string, sid: string) {
    if (!isValidPathParam(trunkSid)) {
      throw new Error("Parameter 'trunkSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { trunkSid, sid };
    this._uri = `/Trunks/${trunkSid}/OriginationUrls/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
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

  fetch(callback?: any): Promise<OriginationUrlInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new OriginationUrlInstance(
          operationVersion,
          payload,
          instance._solution.trunkSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<OriginationUrlInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["weight"] !== undefined) data["Weight"] = params["weight"];
    if (params["priority"] !== undefined) data["Priority"] = params["priority"];
    if (params["enabled"] !== undefined)
      data["Enabled"] = serialize.bool(params["enabled"]);
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["sipUrl"] !== undefined) data["SipUrl"] = params["sipUrl"];

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
        new OriginationUrlInstance(
          operationVersion,
          payload,
          instance._solution.trunkSid,
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

interface OriginationUrlPayload extends TwilioResponsePayload {
  origination_urls: OriginationUrlResource[];
}

interface OriginationUrlResource {
  account_sid: string;
  sid: string;
  trunk_sid: string;
  weight: number;
  enabled: boolean;
  sip_url: string;
  friendly_name: string;
  priority: number;
  date_created: Date;
  date_updated: Date;
  url: string;
}

export class OriginationUrlInstance {
  protected _solution: OriginationUrlContextSolution;
  protected _context?: OriginationUrlContext;

  constructor(
    protected _version: V1,
    payload: OriginationUrlResource,
    trunkSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.sid = payload.sid;
    this.trunkSid = payload.trunk_sid;
    this.weight = deserialize.integer(payload.weight);
    this.enabled = payload.enabled;
    this.sipUrl = payload.sip_url;
    this.friendlyName = payload.friendly_name;
    this.priority = deserialize.integer(payload.priority);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { trunkSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * The SID of the Trunk that owns the Origination URL
   */
  trunkSid: string;
  /**
   * The value that determines the relative load the URI should receive compared to others with the same priority
   */
  weight: number;
  /**
   * Whether the URL is enabled
   */
  enabled: boolean;
  /**
   * The SIP address you want Twilio to route your Origination calls to
   */
  sipUrl: string;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName: string;
  /**
   * The relative importance of the URI
   */
  priority: number;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated: Date;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated: Date;
  /**
   * The absolute URL of the resource
   */
  url: string;

  private get _proxy(): OriginationUrlContext {
    this._context =
      this._context ||
      new OriginationUrlContextImpl(
        this._version,
        this._solution.trunkSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a OriginationUrlInstance
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
   * Fetch a OriginationUrlInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OriginationUrlInstance
   */
  fetch(
    callback?: (error: Error | null, item?: OriginationUrlInstance) => any
  ): Promise<OriginationUrlInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a OriginationUrlInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OriginationUrlInstance
   */
  update(
    callback?: (error: Error | null, item?: OriginationUrlInstance) => any
  ): Promise<OriginationUrlInstance>;
  /**
   * Update a OriginationUrlInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OriginationUrlInstance
   */
  update(
    params: OriginationUrlContextUpdateOptions,
    callback?: (error: Error | null, item?: OriginationUrlInstance) => any
  ): Promise<OriginationUrlInstance>;
  update(params?: any, callback?: any): Promise<OriginationUrlInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      sid: this.sid,
      trunkSid: this.trunkSid,
      weight: this.weight,
      enabled: this.enabled,
      sipUrl: this.sipUrl,
      friendlyName: this.friendlyName,
      priority: this.priority,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface OriginationUrlSolution {
  trunkSid: string;
}

export interface OriginationUrlListInstance {
  _version: V1;
  _solution: OriginationUrlSolution;
  _uri: string;

  (sid: string): OriginationUrlContext;
  get(sid: string): OriginationUrlContext;

  /**
   * Create a OriginationUrlInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OriginationUrlInstance
   */
  create(
    params: OriginationUrlListInstanceCreateOptions,
    callback?: (error: Error | null, item?: OriginationUrlInstance) => any
  ): Promise<OriginationUrlInstance>;
  create(params: any, callback?: any): Promise<OriginationUrlInstance>;

  /**
   * Streams OriginationUrlInstance records from the API.
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
      item: OriginationUrlInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Streams OriginationUrlInstance records from the API.
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
   * @param { OriginationUrlListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: OriginationUrlListInstanceEachOptions,
    callback?: (
      item: OriginationUrlInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of OriginationUrlInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: OriginationUrlPage) => any
  ): Promise<OriginationUrlPage>;
  /**
   * Retrieve a single target page of OriginationUrlInstance records from the API.
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
    callback?: (error: Error | null, items: OriginationUrlPage) => any
  ): Promise<OriginationUrlPage>;
  getPage(params?: any, callback?: any): Promise<OriginationUrlPage>;
  /**
   * Lists OriginationUrlInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: OriginationUrlInstance[]) => any
  ): Promise<OriginationUrlInstance[]>;
  /**
   * Lists OriginationUrlInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { OriginationUrlListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: OriginationUrlListInstanceOptions,
    callback?: (error: Error | null, items: OriginationUrlInstance[]) => any
  ): Promise<OriginationUrlInstance[]>;
  list(params?: any, callback?: any): Promise<OriginationUrlInstance[]>;
  /**
   * Retrieve a single page of OriginationUrlInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: OriginationUrlPage) => any
  ): Promise<OriginationUrlPage>;
  /**
   * Retrieve a single page of OriginationUrlInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { OriginationUrlListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: OriginationUrlListInstancePageOptions,
    callback?: (error: Error | null, items: OriginationUrlPage) => any
  ): Promise<OriginationUrlPage>;
  page(params?: any, callback?: any): Promise<OriginationUrlPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function OriginationUrlListInstance(
  version: V1,
  trunkSid: string
): OriginationUrlListInstance {
  if (!isValidPathParam(trunkSid)) {
    throw new Error("Parameter 'trunkSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as OriginationUrlListInstance;

  instance.get = function get(sid): OriginationUrlContext {
    return new OriginationUrlContextImpl(version, trunkSid, sid);
  };

  instance._version = version;
  instance._solution = { trunkSid };
  instance._uri = `/Trunks/${trunkSid}/OriginationUrls`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<OriginationUrlInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["weight"] === null || params["weight"] === undefined) {
      throw new Error("Required parameter \"params['weight']\" missing.");
    }

    if (params["priority"] === null || params["priority"] === undefined) {
      throw new Error("Required parameter \"params['priority']\" missing.");
    }

    if (params["enabled"] === null || params["enabled"] === undefined) {
      throw new Error("Required parameter \"params['enabled']\" missing.");
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    if (params["sipUrl"] === null || params["sipUrl"] === undefined) {
      throw new Error("Required parameter \"params['sipUrl']\" missing.");
    }

    let data: any = {};

    data["Weight"] = params["weight"];

    data["Priority"] = params["priority"];

    data["Enabled"] = serialize.bool(params["enabled"]);

    data["FriendlyName"] = params["friendlyName"];

    data["SipUrl"] = params["sipUrl"];

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
        new OriginationUrlInstance(
          operationVersion,
          payload,
          instance._solution.trunkSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<OriginationUrlPage> {
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
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new OriginationUrlPage(operationVersion, payload, instance._solution)
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
    targetUrl?: any,
    callback?: any
  ): Promise<OriginationUrlPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new OriginationUrlPage(instance._version, payload, instance._solution)
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

export class OriginationUrlPage extends Page<
  V1,
  OriginationUrlPayload,
  OriginationUrlResource,
  OriginationUrlInstance
> {
  /**
   * Initialize the OriginationUrlPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: OriginationUrlSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of OriginationUrlInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: OriginationUrlResource): OriginationUrlInstance {
    return new OriginationUrlInstance(
      this._version,
      payload,
      this._solution.trunkSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
