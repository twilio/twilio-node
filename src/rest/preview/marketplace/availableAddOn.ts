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
import Marketplace from "../Marketplace";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { AvailableAddOnExtensionListInstance } from "./availableAddOn/availableAddOnExtension";

/**
 * Options to pass to each
 */
export interface AvailableAddOnListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: AvailableAddOnInstance,
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
export interface AvailableAddOnListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface AvailableAddOnListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface AvailableAddOnContext {
  extensions: AvailableAddOnExtensionListInstance;

  /**
   * Fetch a AvailableAddOnInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AvailableAddOnInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AvailableAddOnInstance) => any
  ): Promise<AvailableAddOnInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AvailableAddOnContextSolution {
  sid: string;
}

export class AvailableAddOnContextImpl implements AvailableAddOnContext {
  protected _solution: AvailableAddOnContextSolution;
  protected _uri: string;

  protected _extensions?: AvailableAddOnExtensionListInstance;

  constructor(protected _version: Marketplace, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/AvailableAddOns/${sid}`;
  }

  get extensions(): AvailableAddOnExtensionListInstance {
    this._extensions =
      this._extensions ||
      AvailableAddOnExtensionListInstance(this._version, this._solution.sid);
    return this._extensions;
  }

  fetch(
    callback?: (error: Error | null, item?: AvailableAddOnInstance) => any
  ): Promise<AvailableAddOnInstance> {
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
        new AvailableAddOnInstance(
          operationVersion,
          payload,
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

interface AvailableAddOnPayload extends TwilioResponsePayload {
  available_add_ons: AvailableAddOnResource[];
}

interface AvailableAddOnResource {
  sid: string;
  friendly_name: string;
  description: string;
  pricing_type: string;
  configuration_schema: any;
  url: string;
  links: Record<string, string>;
}

export class AvailableAddOnInstance {
  protected _solution: AvailableAddOnContextSolution;
  protected _context?: AvailableAddOnContext;

  constructor(
    protected _version: Marketplace,
    payload: AvailableAddOnResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.friendlyName = payload.friendly_name;
    this.description = payload.description;
    this.pricingType = payload.pricing_type;
    this.configurationSchema = payload.configuration_schema;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the AvailableAddOn resource.
   */
  sid: string;
  /**
   * The string that you assigned to describe the resource.
   */
  friendlyName: string;
  /**
   * A short description of the Add-on\'s functionality.
   */
  description: string;
  /**
   * How customers are charged for using this Add-on.
   */
  pricingType: string;
  /**
   * The JSON object with the configuration that must be provided when installing a given Add-on.
   */
  configurationSchema: any;
  /**
   * The absolute URL of the resource.
   */
  url: string;
  /**
   * The URLs of related resources.
   */
  links: Record<string, string>;

  private get _proxy(): AvailableAddOnContext {
    this._context =
      this._context ||
      new AvailableAddOnContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a AvailableAddOnInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AvailableAddOnInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AvailableAddOnInstance) => any
  ): Promise<AvailableAddOnInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the extensions.
   */
  extensions(): AvailableAddOnExtensionListInstance {
    return this._proxy.extensions;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      friendlyName: this.friendlyName,
      description: this.description,
      pricingType: this.pricingType,
      configurationSchema: this.configurationSchema,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AvailableAddOnSolution {}

export interface AvailableAddOnListInstance {
  _version: Marketplace;
  _solution: AvailableAddOnSolution;
  _uri: string;

  (sid: string): AvailableAddOnContext;
  get(sid: string): AvailableAddOnContext;

  /**
   * Streams AvailableAddOnInstance records from the API.
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
   * @param { AvailableAddOnListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: AvailableAddOnInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: AvailableAddOnListInstanceEachOptions,
    callback?: (
      item: AvailableAddOnInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of AvailableAddOnInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: AvailableAddOnPage) => any
  ): Promise<AvailableAddOnPage>;
  /**
   * Lists AvailableAddOnInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AvailableAddOnListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: AvailableAddOnInstance[]) => any
  ): Promise<AvailableAddOnInstance[]>;
  list(
    params: AvailableAddOnListInstanceOptions,
    callback?: (error: Error | null, items: AvailableAddOnInstance[]) => any
  ): Promise<AvailableAddOnInstance[]>;
  /**
   * Retrieve a single page of AvailableAddOnInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AvailableAddOnListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: AvailableAddOnPage) => any
  ): Promise<AvailableAddOnPage>;
  page(
    params: AvailableAddOnListInstancePageOptions,
    callback?: (error: Error | null, items: AvailableAddOnPage) => any
  ): Promise<AvailableAddOnPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AvailableAddOnListInstance(
  version: Marketplace
): AvailableAddOnListInstance {
  const instance = ((sid) => instance.get(sid)) as AvailableAddOnListInstance;

  instance.get = function get(sid): AvailableAddOnContext {
    return new AvailableAddOnContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/AvailableAddOns`;

  instance.page = function page(
    params?:
      | AvailableAddOnListInstancePageOptions
      | ((error: Error | null, items: AvailableAddOnPage) => any),
    callback?: (error: Error | null, items: AvailableAddOnPage) => any
  ): Promise<AvailableAddOnPage> {
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
        new AvailableAddOnPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: AvailableAddOnPage) => any
  ): Promise<AvailableAddOnPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new AvailableAddOnPage(instance._version, payload, instance._solution)
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

export class AvailableAddOnPage extends Page<
  Marketplace,
  AvailableAddOnPayload,
  AvailableAddOnResource,
  AvailableAddOnInstance
> {
  /**
   * Initialize the AvailableAddOnPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: Marketplace,
    response: Response<string>,
    solution: AvailableAddOnSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AvailableAddOnInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AvailableAddOnResource): AvailableAddOnInstance {
    return new AvailableAddOnInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
