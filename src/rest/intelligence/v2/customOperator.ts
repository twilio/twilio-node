/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Intelligence
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

export type CustomOperatorAvailability =
  | "internal"
  | "beta"
  | "public"
  | "retired";

/**
 * Options to pass to update a CustomOperatorInstance
 */
export interface CustomOperatorContextUpdateOptions {
  /** A human-readable name of this resource, up to 64 characters. */
  friendlyName: string;
  /** Operator configuration, following the schema defined by the Operator Type. */
  config: any;
  /** The If-Match HTTP request header */
  ifMatch?: string;
}

/**
 * Options to pass to create a CustomOperatorInstance
 */
export interface CustomOperatorListInstanceCreateOptions {
  /** A human readable description of the new Operator, up to 64 characters. */
  friendlyName: string;
  /** Operator Type for this Operator. References an existing Operator Type resource. */
  operatorType: string;
  /** Operator configuration, following the schema defined by the Operator Type. */
  config: any;
}
/**
 * Options to pass to each
 */
export interface CustomOperatorListInstanceEachOptions {
  /** Returns Custom Operators with the provided availability type. Possible values: internal, beta, public, retired. */
  availability?: CustomOperatorAvailability;
  /** Returns Custom Operators that support the provided language code. */
  languageCode?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: CustomOperatorInstance,
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
export interface CustomOperatorListInstanceOptions {
  /** Returns Custom Operators with the provided availability type. Possible values: internal, beta, public, retired. */
  availability?: CustomOperatorAvailability;
  /** Returns Custom Operators that support the provided language code. */
  languageCode?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface CustomOperatorListInstancePageOptions {
  /** Returns Custom Operators with the provided availability type. Possible values: internal, beta, public, retired. */
  availability?: CustomOperatorAvailability;
  /** Returns Custom Operators that support the provided language code. */
  languageCode?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface CustomOperatorContext {
  /**
   * Remove a CustomOperatorInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a CustomOperatorInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CustomOperatorInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CustomOperatorInstance) => any
  ): Promise<CustomOperatorInstance>;

  /**
   * Update a CustomOperatorInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CustomOperatorInstance
   */
  update(
    params: CustomOperatorContextUpdateOptions,
    callback?: (error: Error | null, item?: CustomOperatorInstance) => any
  ): Promise<CustomOperatorInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CustomOperatorContextSolution {
  sid: string;
}

export class CustomOperatorContextImpl implements CustomOperatorContext {
  protected _solution: CustomOperatorContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Operators/Custom/${sid}`;
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

  async fetch(
    callback?: (error: Error | null, item?: CustomOperatorInstance) => any
  ): Promise<CustomOperatorInstance> {
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
      let operation = new CustomOperatorInstance(
        operationVersion,
        payload,
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
    params: CustomOperatorContextUpdateOptions,
    callback?: (error: Error | null, item?: CustomOperatorInstance) => any
  ): Promise<CustomOperatorInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    if (params["config"] === null || params["config"] === undefined) {
      throw new Error("Required parameter \"params['config']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];

    data["Config"] = serialize.object(params["config"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";
    if (params["ifMatch"] !== undefined)
      headers["If-Match"] = params["ifMatch"];

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
      let operation = new CustomOperatorInstance(
        operationVersion,
        payload,
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

interface CustomOperatorPayload extends TwilioResponsePayload {
  operators: CustomOperatorResource[];
}

interface CustomOperatorResource {
  account_sid: string;
  sid: string;
  friendly_name: string;
  description: string;
  author: string;
  operator_type: string;
  version: number;
  availability: CustomOperatorAvailability;
  config: any;
  date_created: Date;
  date_updated: Date;
  url: string;
}

export class CustomOperatorInstance {
  protected _solution: CustomOperatorContextSolution;
  protected _context?: CustomOperatorContext;

  constructor(
    protected _version: V2,
    payload: CustomOperatorResource,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.sid = payload.sid;
    this.friendlyName = payload.friendly_name;
    this.description = payload.description;
    this.author = payload.author;
    this.operatorType = payload.operator_type;
    this.version = deserialize.integer(payload.version);
    this.availability = payload.availability;
    this.config = payload.config;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique SID identifier of the Account the Custom Operator belongs to.
   */
  accountSid: string;
  /**
   * A 34 character string that uniquely identifies this Custom Operator.
   */
  sid: string;
  /**
   * A human-readable name of this resource, up to 64 characters.
   */
  friendlyName: string;
  /**
   * A human-readable description of this resource, longer than the friendly name.
   */
  description: string;
  /**
   * The creator of the Custom Operator. Custom Operators can only be created by a Twilio Account.
   */
  author: string;
  /**
   * Operator Type for this Operator. References an existing Operator Type resource.
   */
  operatorType: string;
  /**
   * Numeric Custom Operator version. Incremented with each update on the resource, used to ensure integrity when updating the Custom Operator.
   */
  version: number;
  availability: CustomOperatorAvailability;
  /**
   * Operator configuration, following the schema defined by the Operator Type. Only available on Operators created by the Account.
   */
  config: any;
  /**
   * The date that this Custom Operator was created, given in ISO 8601 format.
   */
  dateCreated: Date;
  /**
   * The date that this Custom Operator was updated, given in ISO 8601 format.
   */
  dateUpdated: Date;
  /**
   * The URL of this resource.
   */
  url: string;

  private get _proxy(): CustomOperatorContext {
    this._context =
      this._context ||
      new CustomOperatorContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a CustomOperatorInstance
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
   * Fetch a CustomOperatorInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CustomOperatorInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CustomOperatorInstance) => any
  ): Promise<CustomOperatorInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a CustomOperatorInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CustomOperatorInstance
   */
  update(
    params: CustomOperatorContextUpdateOptions,
    callback?: (error: Error | null, item?: CustomOperatorInstance) => any
  ): Promise<CustomOperatorInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: CustomOperatorInstance) => any
  ): Promise<CustomOperatorInstance> {
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
      friendlyName: this.friendlyName,
      description: this.description,
      author: this.author,
      operatorType: this.operatorType,
      version: this.version,
      availability: this.availability,
      config: this.config,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface CustomOperatorSolution {}

export interface CustomOperatorListInstance {
  _version: V2;
  _solution: CustomOperatorSolution;
  _uri: string;

  (sid: string): CustomOperatorContext;
  get(sid: string): CustomOperatorContext;

  /**
   * Create a CustomOperatorInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CustomOperatorInstance
   */
  create(
    params: CustomOperatorListInstanceCreateOptions,
    callback?: (error: Error | null, item?: CustomOperatorInstance) => any
  ): Promise<CustomOperatorInstance>;

  /**
   * Streams CustomOperatorInstance records from the API.
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
   * @param { CustomOperatorListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: CustomOperatorInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: CustomOperatorListInstanceEachOptions,
    callback?: (
      item: CustomOperatorInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of CustomOperatorInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: CustomOperatorPage) => any
  ): Promise<CustomOperatorPage>;
  /**
   * Lists CustomOperatorInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CustomOperatorListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: CustomOperatorInstance[]) => any
  ): Promise<CustomOperatorInstance[]>;
  list(
    params: CustomOperatorListInstanceOptions,
    callback?: (error: Error | null, items: CustomOperatorInstance[]) => any
  ): Promise<CustomOperatorInstance[]>;
  /**
   * Retrieve a single page of CustomOperatorInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CustomOperatorListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: CustomOperatorPage) => any
  ): Promise<CustomOperatorPage>;
  page(
    params: CustomOperatorListInstancePageOptions,
    callback?: (error: Error | null, items: CustomOperatorPage) => any
  ): Promise<CustomOperatorPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function CustomOperatorListInstance(
  version: V2
): CustomOperatorListInstance {
  const instance = ((sid) => instance.get(sid)) as CustomOperatorListInstance;

  instance.get = function get(sid): CustomOperatorContext {
    return new CustomOperatorContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Operators/Custom`;

  instance.create = function create(
    params: CustomOperatorListInstanceCreateOptions,
    callback?: (error: Error | null, items: CustomOperatorInstance) => any
  ): Promise<CustomOperatorInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    if (
      params["operatorType"] === null ||
      params["operatorType"] === undefined
    ) {
      throw new Error("Required parameter \"params['operatorType']\" missing.");
    }

    if (params["config"] === null || params["config"] === undefined) {
      throw new Error("Required parameter \"params['config']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];

    data["OperatorType"] = params["operatorType"];

    data["Config"] = serialize.object(params["config"]);

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
      (payload) => new CustomOperatorInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | CustomOperatorListInstancePageOptions
      | ((error: Error | null, items: CustomOperatorPage) => any),
    callback?: (error: Error | null, items: CustomOperatorPage) => any
  ): Promise<CustomOperatorPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["availability"] !== undefined)
      data["Availability"] = params["availability"];
    if (params["languageCode"] !== undefined)
      data["LanguageCode"] = params["languageCode"];
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
        new CustomOperatorPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: CustomOperatorPage) => any
  ): Promise<CustomOperatorPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new CustomOperatorPage(instance._version, payload, instance._solution)
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

export class CustomOperatorPage extends Page<
  V2,
  CustomOperatorPayload,
  CustomOperatorResource,
  CustomOperatorInstance
> {
  /**
   * Initialize the CustomOperatorPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: CustomOperatorSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of CustomOperatorInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CustomOperatorResource): CustomOperatorInstance {
    return new CustomOperatorInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
