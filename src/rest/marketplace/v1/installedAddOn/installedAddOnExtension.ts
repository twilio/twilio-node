/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Marketplace
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
 * Options to pass to update a InstalledAddOnExtensionInstance
 */
export interface InstalledAddOnExtensionContextUpdateOptions {
  /** Whether the Extension should be invoked. */
  enabled: boolean;
}
/**
 * Options to pass to each
 */
export interface InstalledAddOnExtensionListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: InstalledAddOnExtensionInstance,
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
export interface InstalledAddOnExtensionListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface InstalledAddOnExtensionListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface InstalledAddOnExtensionContext {
  /**
   * Fetch a InstalledAddOnExtensionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InstalledAddOnExtensionInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: InstalledAddOnExtensionInstance
    ) => any
  ): Promise<InstalledAddOnExtensionInstance>;

  /**
   * Update a InstalledAddOnExtensionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InstalledAddOnExtensionInstance
   */
  update(
    params: InstalledAddOnExtensionContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: InstalledAddOnExtensionInstance
    ) => any
  ): Promise<InstalledAddOnExtensionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface InstalledAddOnExtensionContextSolution {
  installedAddOnSid: string;
  sid: string;
}

export class InstalledAddOnExtensionContextImpl
  implements InstalledAddOnExtensionContext
{
  protected _solution: InstalledAddOnExtensionContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, installedAddOnSid: string, sid: string) {
    if (!isValidPathParam(installedAddOnSid)) {
      throw new Error("Parameter 'installedAddOnSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { installedAddOnSid, sid };
    this._uri = `/InstalledAddOns/${installedAddOnSid}/Extensions/${sid}`;
  }

  async fetch(
    callback?: (
      error: Error | null,
      item?: InstalledAddOnExtensionInstance
    ) => any
  ): Promise<InstalledAddOnExtensionInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        headers,
      });

    try {
      let payload = await operationPromise;
      let operation = new InstalledAddOnExtensionInstance(
        operationVersion,
        payload,
        instance._solution.installedAddOnSid,
        instance._solution.sid
      );

      if (callback) {
        callback(null, operation);
      }

      return operation;
    } catch (err: any) {
      if (callback) {
        callback(err);
      }
      throw err;
    }
  }

  async update(
    params: InstalledAddOnExtensionContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: InstalledAddOnExtensionInstance
    ) => any
  ): Promise<InstalledAddOnExtensionInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["enabled"] === null || params["enabled"] === undefined) {
      throw new Error("Required parameter \"params['enabled']\" missing.");
    }

    let data: any = {};

    data["Enabled"] = serialize.bool(params["enabled"]);

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

    try {
      let payload = await operationPromise;
      let operation = new InstalledAddOnExtensionInstance(
        operationVersion,
        payload,
        instance._solution.installedAddOnSid,
        instance._solution.sid
      );

      if (callback) {
        callback(null, operation);
      }

      return operation;
    } catch (err: any) {
      if (callback) {
        callback(err);
      }
      throw err;
    }
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

interface InstalledAddOnExtensionPayload extends TwilioResponsePayload {
  extensions: InstalledAddOnExtensionResource[];
}

interface InstalledAddOnExtensionResource {
  sid: string;
  installed_add_on_sid: string;
  friendly_name: string;
  product_name: string;
  unique_name: string;
  enabled: boolean;
  url: string;
}

export class InstalledAddOnExtensionInstance {
  protected _solution: InstalledAddOnExtensionContextSolution;
  protected _context?: InstalledAddOnExtensionContext;

  constructor(
    protected _version: V1,
    payload: InstalledAddOnExtensionResource,
    installedAddOnSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.installedAddOnSid = payload.installed_add_on_sid;
    this.friendlyName = payload.friendly_name;
    this.productName = payload.product_name;
    this.uniqueName = payload.unique_name;
    this.enabled = payload.enabled;
    this.url = payload.url;

    this._solution = { installedAddOnSid, sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the InstalledAddOn Extension resource.
   */
  sid: string;
  /**
   * The SID of the InstalledAddOn resource to which this extension applies.
   */
  installedAddOnSid: string;
  /**
   * The string that you assigned to describe the resource.
   */
  friendlyName: string;
  /**
   * The name of the Product this Extension is used within.
   */
  productName: string;
  /**
   * An application-defined string that uniquely identifies the resource.
   */
  uniqueName: string;
  /**
   * Whether the Extension will be invoked.
   */
  enabled: boolean;
  /**
   * The absolute URL of the resource.
   */
  url: string;

  private get _proxy(): InstalledAddOnExtensionContext {
    this._context =
      this._context ||
      new InstalledAddOnExtensionContextImpl(
        this._version,
        this._solution.installedAddOnSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a InstalledAddOnExtensionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InstalledAddOnExtensionInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: InstalledAddOnExtensionInstance
    ) => any
  ): Promise<InstalledAddOnExtensionInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a InstalledAddOnExtensionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InstalledAddOnExtensionInstance
   */
  update(
    params: InstalledAddOnExtensionContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: InstalledAddOnExtensionInstance
    ) => any
  ): Promise<InstalledAddOnExtensionInstance>;

  update(
    params?: any,
    callback?: (
      error: Error | null,
      item?: InstalledAddOnExtensionInstance
    ) => any
  ): Promise<InstalledAddOnExtensionInstance> {
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
      installedAddOnSid: this.installedAddOnSid,
      friendlyName: this.friendlyName,
      productName: this.productName,
      uniqueName: this.uniqueName,
      enabled: this.enabled,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface InstalledAddOnExtensionSolution {
  installedAddOnSid: string;
}

export interface InstalledAddOnExtensionListInstance {
  _version: V1;
  _solution: InstalledAddOnExtensionSolution;
  _uri: string;

  (sid: string): InstalledAddOnExtensionContext;
  get(sid: string): InstalledAddOnExtensionContext;

  /**
   * Streams InstalledAddOnExtensionInstance records from the API.
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
   * @param { InstalledAddOnExtensionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: InstalledAddOnExtensionInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: InstalledAddOnExtensionListInstanceEachOptions,
    callback?: (
      item: InstalledAddOnExtensionInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of InstalledAddOnExtensionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: InstalledAddOnExtensionPage) => any
  ): Promise<InstalledAddOnExtensionPage>;
  /**
   * Lists InstalledAddOnExtensionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InstalledAddOnExtensionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: InstalledAddOnExtensionInstance[]
    ) => any
  ): Promise<InstalledAddOnExtensionInstance[]>;
  list(
    params: InstalledAddOnExtensionListInstanceOptions,
    callback?: (
      error: Error | null,
      items: InstalledAddOnExtensionInstance[]
    ) => any
  ): Promise<InstalledAddOnExtensionInstance[]>;
  /**
   * Retrieve a single page of InstalledAddOnExtensionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InstalledAddOnExtensionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: InstalledAddOnExtensionPage) => any
  ): Promise<InstalledAddOnExtensionPage>;
  page(
    params: InstalledAddOnExtensionListInstancePageOptions,
    callback?: (error: Error | null, items: InstalledAddOnExtensionPage) => any
  ): Promise<InstalledAddOnExtensionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function InstalledAddOnExtensionListInstance(
  version: V1,
  installedAddOnSid: string
): InstalledAddOnExtensionListInstance {
  if (!isValidPathParam(installedAddOnSid)) {
    throw new Error("Parameter 'installedAddOnSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as InstalledAddOnExtensionListInstance;

  instance.get = function get(sid): InstalledAddOnExtensionContext {
    return new InstalledAddOnExtensionContextImpl(
      version,
      installedAddOnSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { installedAddOnSid };
  instance._uri = `/InstalledAddOns/${installedAddOnSid}/Extensions`;

  instance.page = function page(
    params?:
      | InstalledAddOnExtensionListInstancePageOptions
      | ((error: Error | null, items: InstalledAddOnExtensionPage) => any),
    callback?: (error: Error | null, items: InstalledAddOnExtensionPage) => any
  ): Promise<InstalledAddOnExtensionPage> {
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
        new InstalledAddOnExtensionPage(
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
    callback?: (error: Error | null, items: InstalledAddOnExtensionPage) => any
  ): Promise<InstalledAddOnExtensionPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new InstalledAddOnExtensionPage(
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

export class InstalledAddOnExtensionPage extends Page<
  V1,
  InstalledAddOnExtensionPayload,
  InstalledAddOnExtensionResource,
  InstalledAddOnExtensionInstance
> {
  /**
   * Initialize the InstalledAddOnExtensionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: InstalledAddOnExtensionSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of InstalledAddOnExtensionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: InstalledAddOnExtensionResource
  ): InstalledAddOnExtensionInstance {
    return new InstalledAddOnExtensionInstance(
      this._version,
      payload,
      this._solution.installedAddOnSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
