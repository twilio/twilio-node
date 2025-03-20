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

/**
 * Operator Type availability status. Possible values: internal, beta, general-availability, retired, deprecated.
 */
export type OperatorTypeAvailability =
  | "internal"
  | "beta"
  | "general-availability"
  | "retired"
  | "deprecated";

/**
 * Operator Results for this Operator Type will follow this format. Possible values: text-classification, text-extraction, text-extraction-normalized, text-generation.
 */
export type OperatorTypeOutputType =
  | "text-classification"
  | "text-extraction"
  | "text-extraction-normalized"
  | "text-generation";

/**
 * Operators with this Operator Type are executed using this provider. Possible values: twilio, amazon, openai.
 */
export type OperatorTypeProvider = "twilio" | "amazon" | "openai";

/**
 * Options to pass to each
 */
export interface OperatorTypeListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: OperatorTypeInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface OperatorTypeListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface OperatorTypeListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface OperatorTypeContext {
  /**
   * Fetch a OperatorTypeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OperatorTypeInstance
   */
  fetch(
    callback?: (error: Error | null, item?: OperatorTypeInstance) => any
  ): Promise<OperatorTypeInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface OperatorTypeContextSolution {
  sid: string;
}

export class OperatorTypeContextImpl implements OperatorTypeContext {
  protected _solution: OperatorTypeContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/OperatorTypes/${sid}`;
  }

  fetch(
    callback?: (error: Error | null, item?: OperatorTypeInstance) => any
  ): Promise<OperatorTypeInstance> {
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
        new OperatorTypeInstance(
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

interface OperatorTypePayload extends TwilioResponsePayload {
  operator_types: OperatorTypeResource[];
}

interface OperatorTypeResource {
  name: string;
  sid: string;
  friendly_name: string;
  description: string;
  docs_link: string;
  output_type: OperatorTypeOutputType;
  supported_languages: Array<string>;
  provider: OperatorTypeProvider;
  availability: OperatorTypeAvailability;
  configurable: boolean;
  config_schema: Record<string, object>;
  date_created: Date;
  date_updated: Date;
  url: string;
}

export class OperatorTypeInstance {
  protected _solution: OperatorTypeContextSolution;
  protected _context?: OperatorTypeContext;

  constructor(
    protected _version: V2,
    payload: OperatorTypeResource,
    sid?: string
  ) {
    this.name = payload.name;
    this.sid = payload.sid;
    this.friendlyName = payload.friendly_name;
    this.description = payload.description;
    this.docsLink = payload.docs_link;
    this.outputType = payload.output_type;
    this.supportedLanguages = payload.supported_languages;
    this.provider = payload.provider;
    this.availability = payload.availability;
    this.configurable = payload.configurable;
    this.configSchema = payload.config_schema;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * A unique name that references an Operator\'s Operator Type.
   */
  name: string;
  /**
   * A 34 character string that uniquely identifies this Operator Type.
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
   * Additional documentation for the Operator Type.
   */
  docsLink: string;
  outputType: OperatorTypeOutputType;
  /**
   * List of languages this Operator Type supports.
   */
  supportedLanguages: Array<string>;
  provider: OperatorTypeProvider;
  availability: OperatorTypeAvailability;
  /**
   * Operators can be created from configurable Operator Types.
   */
  configurable: boolean;
  /**
   * JSON Schema for configuring an Operator with this Operator Type. Following https://json-schema.org/
   */
  configSchema: Record<string, object>;
  /**
   * The date that this Operator Type was created, given in ISO 8601 format.
   */
  dateCreated: Date;
  /**
   * The date that this Operator Type was updated, given in ISO 8601 format.
   */
  dateUpdated: Date;
  /**
   * The URL of this resource.
   */
  url: string;

  private get _proxy(): OperatorTypeContext {
    this._context =
      this._context ||
      new OperatorTypeContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a OperatorTypeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OperatorTypeInstance
   */
  fetch(
    callback?: (error: Error | null, item?: OperatorTypeInstance) => any
  ): Promise<OperatorTypeInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      name: this.name,
      sid: this.sid,
      friendlyName: this.friendlyName,
      description: this.description,
      docsLink: this.docsLink,
      outputType: this.outputType,
      supportedLanguages: this.supportedLanguages,
      provider: this.provider,
      availability: this.availability,
      configurable: this.configurable,
      configSchema: this.configSchema,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface OperatorTypeSolution {}

export interface OperatorTypeListInstance {
  _version: V2;
  _solution: OperatorTypeSolution;
  _uri: string;

  (sid: string): OperatorTypeContext;
  get(sid: string): OperatorTypeContext;

  /**
   * Streams OperatorTypeInstance records from the API.
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
   * @param { OperatorTypeListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: OperatorTypeInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: OperatorTypeListInstanceEachOptions,
    callback?: (item: OperatorTypeInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of OperatorTypeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: OperatorTypePage) => any
  ): Promise<OperatorTypePage>;
  /**
   * Lists OperatorTypeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { OperatorTypeListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: OperatorTypeInstance[]) => any
  ): Promise<OperatorTypeInstance[]>;
  list(
    params: OperatorTypeListInstanceOptions,
    callback?: (error: Error | null, items: OperatorTypeInstance[]) => any
  ): Promise<OperatorTypeInstance[]>;
  /**
   * Retrieve a single page of OperatorTypeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { OperatorTypeListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: OperatorTypePage) => any
  ): Promise<OperatorTypePage>;
  page(
    params: OperatorTypeListInstancePageOptions,
    callback?: (error: Error | null, items: OperatorTypePage) => any
  ): Promise<OperatorTypePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function OperatorTypeListInstance(
  version: V2
): OperatorTypeListInstance {
  const instance = ((sid) => instance.get(sid)) as OperatorTypeListInstance;

  instance.get = function get(sid): OperatorTypeContext {
    return new OperatorTypeContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/OperatorTypes`;

  instance.page = function page(
    params?:
      | OperatorTypeListInstancePageOptions
      | ((error: Error | null, items: OperatorTypePage) => any),
    callback?: (error: Error | null, items: OperatorTypePage) => any
  ): Promise<OperatorTypePage> {
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
        new OperatorTypePage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: OperatorTypePage) => any
  ): Promise<OperatorTypePage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new OperatorTypePage(instance._version, payload, instance._solution)
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

export class OperatorTypePage extends Page<
  V2,
  OperatorTypePayload,
  OperatorTypeResource,
  OperatorTypeInstance
> {
  /**
   * Initialize the OperatorTypePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: OperatorTypeSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of OperatorTypeInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: OperatorTypeResource): OperatorTypeInstance {
    return new OperatorTypeInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
