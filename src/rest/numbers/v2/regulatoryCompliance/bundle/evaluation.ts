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
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * The compliance status of the Evaluation resource.
 */
export type EvaluationStatus = "compliant" | "noncompliant";

/**
 * Options to pass to each
 */
export interface EvaluationListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: EvaluationInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface EvaluationListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface EvaluationListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface EvaluationContext {
  /**
   * Fetch a EvaluationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed EvaluationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: EvaluationInstance) => any
  ): Promise<EvaluationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface EvaluationContextSolution {
  bundleSid: string;
  sid: string;
}

export class EvaluationContextImpl implements EvaluationContext {
  protected _solution: EvaluationContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, bundleSid: string, sid: string) {
    if (!isValidPathParam(bundleSid)) {
      throw new Error("Parameter 'bundleSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { bundleSid, sid };
    this._uri = `/RegulatoryCompliance/Bundles/${bundleSid}/Evaluations/${sid}`;
  }

  fetch(
    callback?: (error: Error | null, item?: EvaluationInstance) => any
  ): Promise<EvaluationInstance> {
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
        new EvaluationInstance(
          operationVersion,
          payload,
          instance._solution.bundleSid,
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

interface EvaluationPayload extends TwilioResponsePayload {
  results: EvaluationResource[];
}

interface EvaluationResource {
  sid: string;
  account_sid: string;
  regulation_sid: string;
  bundle_sid: string;
  status: EvaluationStatus;
  results: Array<Record<string, object>>;
  date_created: Date;
  url: string;
}

export class EvaluationInstance {
  protected _solution: EvaluationContextSolution;
  protected _context?: EvaluationContext;

  constructor(
    protected _version: V2,
    payload: EvaluationResource,
    bundleSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.regulationSid = payload.regulation_sid;
    this.bundleSid = payload.bundle_sid;
    this.status = payload.status;
    this.results = payload.results;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.url = payload.url;

    this._solution = { bundleSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the Evaluation resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Bundle resource.
   */
  accountSid: string;
  /**
   * The unique string of a regulation that is associated to the Bundle resource.
   */
  regulationSid: string;
  /**
   * The unique string that we created to identify the Bundle resource.
   */
  bundleSid: string;
  status: EvaluationStatus;
  /**
   * The results of the Evaluation which includes the valid and invalid attributes.
   */
  results: Array<Record<string, object>>;
  dateCreated: Date;
  url: string;

  private get _proxy(): EvaluationContext {
    this._context =
      this._context ||
      new EvaluationContextImpl(
        this._version,
        this._solution.bundleSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a EvaluationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed EvaluationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: EvaluationInstance) => any
  ): Promise<EvaluationInstance> {
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
      accountSid: this.accountSid,
      regulationSid: this.regulationSid,
      bundleSid: this.bundleSid,
      status: this.status,
      results: this.results,
      dateCreated: this.dateCreated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface EvaluationSolution {
  bundleSid: string;
}

export interface EvaluationListInstance {
  _version: V2;
  _solution: EvaluationSolution;
  _uri: string;

  (sid: string): EvaluationContext;
  get(sid: string): EvaluationContext;

  /**
   * Create a EvaluationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed EvaluationInstance
   */
  create(
    callback?: (error: Error | null, item?: EvaluationInstance) => any
  ): Promise<EvaluationInstance>;

  /**
   * Streams EvaluationInstance records from the API.
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
   * @param { EvaluationListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: EvaluationInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: EvaluationListInstanceEachOptions,
    callback?: (item: EvaluationInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of EvaluationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: EvaluationPage) => any
  ): Promise<EvaluationPage>;
  /**
   * Lists EvaluationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EvaluationListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: EvaluationInstance[]) => any
  ): Promise<EvaluationInstance[]>;
  list(
    params: EvaluationListInstanceOptions,
    callback?: (error: Error | null, items: EvaluationInstance[]) => any
  ): Promise<EvaluationInstance[]>;
  /**
   * Retrieve a single page of EvaluationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EvaluationListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: EvaluationPage) => any
  ): Promise<EvaluationPage>;
  page(
    params: EvaluationListInstancePageOptions,
    callback?: (error: Error | null, items: EvaluationPage) => any
  ): Promise<EvaluationPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function EvaluationListInstance(
  version: V2,
  bundleSid: string
): EvaluationListInstance {
  if (!isValidPathParam(bundleSid)) {
    throw new Error("Parameter 'bundleSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as EvaluationListInstance;

  instance.get = function get(sid): EvaluationContext {
    return new EvaluationContextImpl(version, bundleSid, sid);
  };

  instance._version = version;
  instance._solution = { bundleSid };
  instance._uri = `/RegulatoryCompliance/Bundles/${bundleSid}/Evaluations`;

  instance.create = function create(
    callback?: (error: Error | null, items: EvaluationInstance) => any
  ): Promise<EvaluationInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new EvaluationInstance(
          operationVersion,
          payload,
          instance._solution.bundleSid
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
      | EvaluationListInstancePageOptions
      | ((error: Error | null, items: EvaluationPage) => any),
    callback?: (error: Error | null, items: EvaluationPage) => any
  ): Promise<EvaluationPage> {
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
        new EvaluationPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: EvaluationPage) => any
  ): Promise<EvaluationPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new EvaluationPage(instance._version, payload, instance._solution)
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

export class EvaluationPage extends Page<
  V2,
  EvaluationPayload,
  EvaluationResource,
  EvaluationInstance
> {
  /**
   * Initialize the EvaluationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: EvaluationSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of EvaluationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: EvaluationResource): EvaluationInstance {
    return new EvaluationInstance(
      this._version,
      payload,
      this._solution.bundleSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
