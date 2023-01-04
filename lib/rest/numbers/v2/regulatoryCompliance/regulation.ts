/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Numbers
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

type RegulationEndUserType = "individual" | "business";

/**
 * Options to pass to each
 */
export interface RegulationListInstanceEachOptions {
  /** The type of End User the regulation requires - can be `individual` or `business`. */
  endUserType?: RegulationEndUserType;
  /** The ISO country code of the phone number\'s country. */
  isoCountry?: string;
  /** The type of phone number that the regulatory requiremnt is restricting. */
  numberType?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: RegulationInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface RegulationListInstanceOptions {
  /** The type of End User the regulation requires - can be `individual` or `business`. */
  endUserType?: RegulationEndUserType;
  /** The ISO country code of the phone number\'s country. */
  isoCountry?: string;
  /** The type of phone number that the regulatory requiremnt is restricting. */
  numberType?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface RegulationListInstancePageOptions {
  /** The type of End User the regulation requires - can be `individual` or `business`. */
  endUserType?: RegulationEndUserType;
  /** The ISO country code of the phone number\'s country. */
  isoCountry?: string;
  /** The type of phone number that the regulatory requiremnt is restricting. */
  numberType?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface RegulationContext {
  /**
   * Fetch a RegulationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RegulationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RegulationInstance) => any
  ): Promise<RegulationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RegulationContextSolution {
  sid: string;
}

export class RegulationContextImpl implements RegulationContext {
  protected _solution: RegulationContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/RegulatoryCompliance/Regulations/${sid}`;
  }

  fetch(
    callback?: (error: Error | null, item?: RegulationInstance) => any
  ): Promise<RegulationInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new RegulationInstance(
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

interface RegulationPayload extends TwilioResponsePayload {
  results: RegulationResource[];
}

interface RegulationResource {
  sid: string;
  friendly_name: string;
  iso_country: string;
  number_type: string;
  end_user_type: RegulationEndUserType;
  requirements: any;
  url: string;
}

export class RegulationInstance {
  protected _solution: RegulationContextSolution;
  protected _context?: RegulationContext;

  constructor(
    protected _version: V2,
    payload: RegulationResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.friendlyName = payload.friendly_name;
    this.isoCountry = payload.iso_country;
    this.numberType = payload.number_type;
    this.endUserType = payload.end_user_type;
    this.requirements = payload.requirements;
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the Regulation resource
   */
  sid: string;
  /**
   * A human-readable description of the Regulation resource
   */
  friendlyName: string;
  /**
   * The ISO country code of the phone number\'s country
   */
  isoCountry: string;
  /**
   * The type of phone number restricted by the regulatory requirement
   */
  numberType: string;
  endUserType: RegulationEndUserType;
  /**
   * The sid of a regulation object that dictates requirements
   */
  requirements: any;
  /**
   * The absolute URL of the Regulation resource
   */
  url: string;

  private get _proxy(): RegulationContext {
    this._context =
      this._context ||
      new RegulationContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a RegulationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RegulationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RegulationInstance) => any
  ): Promise<RegulationInstance> {
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
      friendlyName: this.friendlyName,
      isoCountry: this.isoCountry,
      numberType: this.numberType,
      endUserType: this.endUserType,
      requirements: this.requirements,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface RegulationSolution {}

export interface RegulationListInstance {
  _version: V2;
  _solution: RegulationSolution;
  _uri: string;

  (sid: string): RegulationContext;
  get(sid: string): RegulationContext;

  /**
   * Streams RegulationInstance records from the API.
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
   * @param { RegulationListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: RegulationInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: RegulationListInstanceEachOptions,
    callback?: (item: RegulationInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of RegulationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: RegulationPage) => any
  ): Promise<RegulationPage>;
  /**
   * Lists RegulationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RegulationListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: RegulationInstance[]) => any
  ): Promise<RegulationInstance[]>;
  list(
    params: RegulationListInstanceOptions,
    callback?: (error: Error | null, items: RegulationInstance[]) => any
  ): Promise<RegulationInstance[]>;
  /**
   * Retrieve a single page of RegulationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RegulationListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: RegulationPage) => any
  ): Promise<RegulationPage>;
  page(
    params: RegulationListInstancePageOptions,
    callback?: (error: Error | null, items: RegulationPage) => any
  ): Promise<RegulationPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function RegulationListInstance(version: V2): RegulationListInstance {
  const instance = ((sid) => instance.get(sid)) as RegulationListInstance;

  instance.get = function get(sid): RegulationContext {
    return new RegulationContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/RegulatoryCompliance/Regulations`;

  instance.page = function page(
    params?:
      | RegulationListInstancePageOptions
      | ((error: Error | null, item?: RegulationPage) => any),
    callback?: (error: Error | null, item?: RegulationPage) => any
  ): Promise<RegulationPage> {
    if (typeof params === "function") {
      callback = params as (error: Error | null, item?: RegulationPage) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["endUserType"] !== undefined)
      data["EndUserType"] = params["endUserType"];
    if (params["isoCountry"] !== undefined)
      data["IsoCountry"] = params["isoCountry"];
    if (params["numberType"] !== undefined)
      data["NumberType"] = params["numberType"];
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
        new RegulationPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: RegulationPage) => any
  ): Promise<RegulationPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new RegulationPage(instance._version, payload, instance._solution)
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

export class RegulationPage extends Page<
  V2,
  RegulationPayload,
  RegulationResource,
  RegulationInstance
> {
  /**
   * Initialize the RegulationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: RegulationSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of RegulationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RegulationResource): RegulationInstance {
    return new RegulationInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
