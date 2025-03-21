/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Flex
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to remove a InsightsQuestionnairesCategoryInstance
 */
export interface InsightsQuestionnairesCategoryContextRemoveOptions {
  /** The Authorization HTTP request header */
  authorization?: string;
}

/**
 * Options to pass to update a InsightsQuestionnairesCategoryInstance
 */
export interface InsightsQuestionnairesCategoryContextUpdateOptions {
  /** The name of this category. */
  name: string;
  /** The Authorization HTTP request header */
  authorization?: string;
}

/**
 * Options to pass to create a InsightsQuestionnairesCategoryInstance
 */
export interface InsightsQuestionnairesCategoryListInstanceCreateOptions {
  /** The name of this category. */
  name: string;
  /** The Authorization HTTP request header */
  authorization?: string;
}
/**
 * Options to pass to each
 */
export interface InsightsQuestionnairesCategoryListInstanceEachOptions {
  /** The Authorization HTTP request header */
  authorization?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: InsightsQuestionnairesCategoryInstance,
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
export interface InsightsQuestionnairesCategoryListInstanceOptions {
  /** The Authorization HTTP request header */
  authorization?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface InsightsQuestionnairesCategoryListInstancePageOptions {
  /** The Authorization HTTP request header */
  authorization?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface InsightsQuestionnairesCategoryContext {
  /**
   * Remove a InsightsQuestionnairesCategoryInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a InsightsQuestionnairesCategoryInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsQuestionnairesCategoryInstance
   */
  remove(
    params: InsightsQuestionnairesCategoryContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Update a InsightsQuestionnairesCategoryInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsQuestionnairesCategoryInstance
   */
  update(
    params: InsightsQuestionnairesCategoryContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: InsightsQuestionnairesCategoryInstance
    ) => any
  ): Promise<InsightsQuestionnairesCategoryInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface InsightsQuestionnairesCategoryContextSolution {
  categorySid: string;
}

export class InsightsQuestionnairesCategoryContextImpl
  implements InsightsQuestionnairesCategoryContext
{
  protected _solution: InsightsQuestionnairesCategoryContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, categorySid: string) {
    if (!isValidPathParam(categorySid)) {
      throw new Error("Parameter 'categorySid' is not valid.");
    }

    this._solution = { categorySid };
    this._uri = `/Insights/QualityManagement/Categories/${categorySid}`;
  }

  remove(
    params?:
      | InsightsQuestionnairesCategoryContextRemoveOptions
      | ((error: Error | null, item?: boolean) => any),
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    const headers: any = {};
    if (params["authorization"] !== undefined)
      headers["Authorization"] = params["authorization"];

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
        params: data,
        headers,
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params: InsightsQuestionnairesCategoryContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: InsightsQuestionnairesCategoryInstance
    ) => any
  ): Promise<InsightsQuestionnairesCategoryInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["name"] === null || params["name"] === undefined) {
      throw new Error("Required parameter \"params['name']\" missing.");
    }

    let data: any = {};

    data["Name"] = params["name"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";
    if (params["authorization"] !== undefined)
      headers["Authorization"] = params["authorization"];

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
        new InsightsQuestionnairesCategoryInstance(
          operationVersion,
          payload,
          instance._solution.categorySid
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

interface InsightsQuestionnairesCategoryPayload extends TwilioResponsePayload {
  categories: InsightsQuestionnairesCategoryResource[];
}

interface InsightsQuestionnairesCategoryResource {
  account_sid: string;
  category_sid: string;
  name: string;
  url: string;
}

export class InsightsQuestionnairesCategoryInstance {
  protected _solution: InsightsQuestionnairesCategoryContextSolution;
  protected _context?: InsightsQuestionnairesCategoryContext;

  constructor(
    protected _version: V1,
    payload: InsightsQuestionnairesCategoryResource,
    categorySid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.categorySid = payload.category_sid;
    this.name = payload.name;
    this.url = payload.url;

    this._solution = { categorySid: categorySid || this.categorySid };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
   */
  accountSid: string;
  /**
   * The SID of the category
   */
  categorySid: string;
  /**
   * The name of this category.
   */
  name: string;
  url: string;

  private get _proxy(): InsightsQuestionnairesCategoryContext {
    this._context =
      this._context ||
      new InsightsQuestionnairesCategoryContextImpl(
        this._version,
        this._solution.categorySid
      );
    return this._context;
  }

  /**
   * Remove a InsightsQuestionnairesCategoryInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a InsightsQuestionnairesCategoryInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsQuestionnairesCategoryInstance
   */
  remove(
    params: InsightsQuestionnairesCategoryContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  remove(
    params?: any,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(params, callback);
  }

  /**
   * Update a InsightsQuestionnairesCategoryInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsQuestionnairesCategoryInstance
   */
  update(
    params: InsightsQuestionnairesCategoryContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: InsightsQuestionnairesCategoryInstance
    ) => any
  ): Promise<InsightsQuestionnairesCategoryInstance>;

  update(
    params?: any,
    callback?: (
      error: Error | null,
      item?: InsightsQuestionnairesCategoryInstance
    ) => any
  ): Promise<InsightsQuestionnairesCategoryInstance> {
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
      categorySid: this.categorySid,
      name: this.name,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface InsightsQuestionnairesCategorySolution {}

export interface InsightsQuestionnairesCategoryListInstance {
  _version: V1;
  _solution: InsightsQuestionnairesCategorySolution;
  _uri: string;

  (categorySid: string): InsightsQuestionnairesCategoryContext;
  get(categorySid: string): InsightsQuestionnairesCategoryContext;

  /**
   * Create a InsightsQuestionnairesCategoryInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsQuestionnairesCategoryInstance
   */
  create(
    params: InsightsQuestionnairesCategoryListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: InsightsQuestionnairesCategoryInstance
    ) => any
  ): Promise<InsightsQuestionnairesCategoryInstance>;

  /**
   * Streams InsightsQuestionnairesCategoryInstance records from the API.
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
   * @param { InsightsQuestionnairesCategoryListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: InsightsQuestionnairesCategoryInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: InsightsQuestionnairesCategoryListInstanceEachOptions,
    callback?: (
      item: InsightsQuestionnairesCategoryInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of InsightsQuestionnairesCategoryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (
      error: Error | null,
      items: InsightsQuestionnairesCategoryPage
    ) => any
  ): Promise<InsightsQuestionnairesCategoryPage>;
  /**
   * Lists InsightsQuestionnairesCategoryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InsightsQuestionnairesCategoryListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: InsightsQuestionnairesCategoryInstance[]
    ) => any
  ): Promise<InsightsQuestionnairesCategoryInstance[]>;
  list(
    params: InsightsQuestionnairesCategoryListInstanceOptions,
    callback?: (
      error: Error | null,
      items: InsightsQuestionnairesCategoryInstance[]
    ) => any
  ): Promise<InsightsQuestionnairesCategoryInstance[]>;
  /**
   * Retrieve a single page of InsightsQuestionnairesCategoryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InsightsQuestionnairesCategoryListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (
      error: Error | null,
      items: InsightsQuestionnairesCategoryPage
    ) => any
  ): Promise<InsightsQuestionnairesCategoryPage>;
  page(
    params: InsightsQuestionnairesCategoryListInstancePageOptions,
    callback?: (
      error: Error | null,
      items: InsightsQuestionnairesCategoryPage
    ) => any
  ): Promise<InsightsQuestionnairesCategoryPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function InsightsQuestionnairesCategoryListInstance(
  version: V1
): InsightsQuestionnairesCategoryListInstance {
  const instance = ((categorySid) =>
    instance.get(categorySid)) as InsightsQuestionnairesCategoryListInstance;

  instance.get = function get(
    categorySid
  ): InsightsQuestionnairesCategoryContext {
    return new InsightsQuestionnairesCategoryContextImpl(version, categorySid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Insights/QualityManagement/Categories`;

  instance.create = function create(
    params: InsightsQuestionnairesCategoryListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      items: InsightsQuestionnairesCategoryInstance
    ) => any
  ): Promise<InsightsQuestionnairesCategoryInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["name"] === null || params["name"] === undefined) {
      throw new Error("Required parameter \"params['name']\" missing.");
    }

    let data: any = {};

    data["Name"] = params["name"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";
    if (params["authorization"] !== undefined)
      headers["Authorization"] = params["authorization"];

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new InsightsQuestionnairesCategoryInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | InsightsQuestionnairesCategoryListInstancePageOptions
      | ((
          error: Error | null,
          items: InsightsQuestionnairesCategoryPage
        ) => any),
    callback?: (
      error: Error | null,
      items: InsightsQuestionnairesCategoryPage
    ) => any
  ): Promise<InsightsQuestionnairesCategoryPage> {
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
    if (params["authorization"] !== undefined)
      headers["Authorization"] = params["authorization"];

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new InsightsQuestionnairesCategoryPage(
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
    callback?: (
      error: Error | null,
      items: InsightsQuestionnairesCategoryPage
    ) => any
  ): Promise<InsightsQuestionnairesCategoryPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new InsightsQuestionnairesCategoryPage(
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

export class InsightsQuestionnairesCategoryPage extends Page<
  V1,
  InsightsQuestionnairesCategoryPayload,
  InsightsQuestionnairesCategoryResource,
  InsightsQuestionnairesCategoryInstance
> {
  /**
   * Initialize the InsightsQuestionnairesCategoryPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: InsightsQuestionnairesCategorySolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of InsightsQuestionnairesCategoryInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: InsightsQuestionnairesCategoryResource
  ): InsightsQuestionnairesCategoryInstance {
    return new InsightsQuestionnairesCategoryInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
