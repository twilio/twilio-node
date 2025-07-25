/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trusthub
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
 * The compliance status of the Evaluation resource.
 */
export type TrustProductsEvaluationsStatus = "compliant" | "noncompliant";

/**
 * Options to pass to create a TrustProductsEvaluationsInstance
 */
export interface TrustProductsEvaluationsListInstanceCreateOptions {
  /** The unique string of a policy that is associated to the customer_profile resource. */
  policySid: string;
}
/**
 * Options to pass to each
 */
export interface TrustProductsEvaluationsListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: TrustProductsEvaluationsInstance,
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
export interface TrustProductsEvaluationsListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface TrustProductsEvaluationsListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface TrustProductsEvaluationsContext {
  /**
   * Fetch a TrustProductsEvaluationsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrustProductsEvaluationsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: TrustProductsEvaluationsInstance
    ) => any
  ): Promise<TrustProductsEvaluationsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TrustProductsEvaluationsContextSolution {
  trustProductSid: string;
  sid: string;
}

export class TrustProductsEvaluationsContextImpl
  implements TrustProductsEvaluationsContext
{
  protected _solution: TrustProductsEvaluationsContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, trustProductSid: string, sid: string) {
    if (!isValidPathParam(trustProductSid)) {
      throw new Error("Parameter 'trustProductSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { trustProductSid, sid };
    this._uri = `/TrustProducts/${trustProductSid}/Evaluations/${sid}`;
  }

  fetch(
    callback?: (
      error: Error | null,
      item?: TrustProductsEvaluationsInstance
    ) => any
  ): Promise<TrustProductsEvaluationsInstance> {
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
        new TrustProductsEvaluationsInstance(
          operationVersion,
          payload,
          instance._solution.trustProductSid,
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

interface TrustProductsEvaluationsPayload extends TwilioResponsePayload {
  results: TrustProductsEvaluationsResource[];
}

interface TrustProductsEvaluationsResource {
  sid: string;
  account_sid: string;
  policy_sid: string;
  trust_product_sid: string;
  status: TrustProductsEvaluationsStatus;
  results: Array<any>;
  date_created: Date;
  url: string;
}

export class TrustProductsEvaluationsInstance {
  protected _solution: TrustProductsEvaluationsContextSolution;
  protected _context?: TrustProductsEvaluationsContext;

  constructor(
    protected _version: V1,
    payload: TrustProductsEvaluationsResource,
    trustProductSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.policySid = payload.policy_sid;
    this.trustProductSid = payload.trust_product_sid;
    this.status = payload.status;
    this.results = payload.results;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.url = payload.url;

    this._solution = { trustProductSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the Evaluation resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the trust_product resource.
   */
  accountSid: string;
  /**
   * The unique string of a policy that is associated to the trust_product resource.
   */
  policySid: string;
  /**
   * The unique string that we created to identify the trust_product resource.
   */
  trustProductSid: string;
  status: TrustProductsEvaluationsStatus;
  /**
   * The results of the Evaluation which includes the valid and invalid attributes.
   */
  results: Array<any>;
  dateCreated: Date;
  url: string;

  private get _proxy(): TrustProductsEvaluationsContext {
    this._context =
      this._context ||
      new TrustProductsEvaluationsContextImpl(
        this._version,
        this._solution.trustProductSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a TrustProductsEvaluationsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrustProductsEvaluationsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: TrustProductsEvaluationsInstance
    ) => any
  ): Promise<TrustProductsEvaluationsInstance> {
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
      policySid: this.policySid,
      trustProductSid: this.trustProductSid,
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

export interface TrustProductsEvaluationsSolution {
  trustProductSid: string;
}

export interface TrustProductsEvaluationsListInstance {
  _version: V1;
  _solution: TrustProductsEvaluationsSolution;
  _uri: string;

  (sid: string): TrustProductsEvaluationsContext;
  get(sid: string): TrustProductsEvaluationsContext;

  /**
   * Create a TrustProductsEvaluationsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrustProductsEvaluationsInstance
   */
  create(
    params: TrustProductsEvaluationsListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: TrustProductsEvaluationsInstance
    ) => any
  ): Promise<TrustProductsEvaluationsInstance>;

  /**
   * Streams TrustProductsEvaluationsInstance records from the API.
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
   * @param { TrustProductsEvaluationsListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: TrustProductsEvaluationsInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: TrustProductsEvaluationsListInstanceEachOptions,
    callback?: (
      item: TrustProductsEvaluationsInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of TrustProductsEvaluationsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: TrustProductsEvaluationsPage) => any
  ): Promise<TrustProductsEvaluationsPage>;
  /**
   * Lists TrustProductsEvaluationsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TrustProductsEvaluationsListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: TrustProductsEvaluationsInstance[]
    ) => any
  ): Promise<TrustProductsEvaluationsInstance[]>;
  list(
    params: TrustProductsEvaluationsListInstanceOptions,
    callback?: (
      error: Error | null,
      items: TrustProductsEvaluationsInstance[]
    ) => any
  ): Promise<TrustProductsEvaluationsInstance[]>;
  /**
   * Retrieve a single page of TrustProductsEvaluationsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TrustProductsEvaluationsListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: TrustProductsEvaluationsPage) => any
  ): Promise<TrustProductsEvaluationsPage>;
  page(
    params: TrustProductsEvaluationsListInstancePageOptions,
    callback?: (error: Error | null, items: TrustProductsEvaluationsPage) => any
  ): Promise<TrustProductsEvaluationsPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function TrustProductsEvaluationsListInstance(
  version: V1,
  trustProductSid: string
): TrustProductsEvaluationsListInstance {
  if (!isValidPathParam(trustProductSid)) {
    throw new Error("Parameter 'trustProductSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as TrustProductsEvaluationsListInstance;

  instance.get = function get(sid): TrustProductsEvaluationsContext {
    return new TrustProductsEvaluationsContextImpl(
      version,
      trustProductSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { trustProductSid };
  instance._uri = `/TrustProducts/${trustProductSid}/Evaluations`;

  instance.create = function create(
    params: TrustProductsEvaluationsListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      items: TrustProductsEvaluationsInstance
    ) => any
  ): Promise<TrustProductsEvaluationsInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["policySid"] === null || params["policySid"] === undefined) {
      throw new Error("Required parameter \"params['policySid']\" missing.");
    }

    let data: any = {};

    data["PolicySid"] = params["policySid"];

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
        new TrustProductsEvaluationsInstance(
          operationVersion,
          payload,
          instance._solution.trustProductSid
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
      | TrustProductsEvaluationsListInstancePageOptions
      | ((error: Error | null, items: TrustProductsEvaluationsPage) => any),
    callback?: (error: Error | null, items: TrustProductsEvaluationsPage) => any
  ): Promise<TrustProductsEvaluationsPage> {
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
        new TrustProductsEvaluationsPage(
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
    callback?: (error: Error | null, items: TrustProductsEvaluationsPage) => any
  ): Promise<TrustProductsEvaluationsPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new TrustProductsEvaluationsPage(
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

export class TrustProductsEvaluationsPage extends Page<
  V1,
  TrustProductsEvaluationsPayload,
  TrustProductsEvaluationsResource,
  TrustProductsEvaluationsInstance
> {
  /**
   * Initialize the TrustProductsEvaluationsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: TrustProductsEvaluationsSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of TrustProductsEvaluationsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: TrustProductsEvaluationsResource
  ): TrustProductsEvaluationsInstance {
    return new TrustProductsEvaluationsInstance(
      this._version,
      payload,
      this._solution.trustProductSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
