/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Autopilot
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

type ModelBuildStatus =
  | "enqueued"
  | "building"
  | "completed"
  | "failed"
  | "canceled";

/**
 * Options to pass to update a ModelBuildInstance
 *
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. This value must be a unique string of no more than 64 characters. It can be used as an alternative to the `sid` in the URL path to address the resource.
 */
export interface ModelBuildContextUpdateOptions {
  uniqueName?: string;
}

/**
 * Options to pass to create a ModelBuildInstance
 *
 * @property { string } [statusCallback] The URL we should call using a POST method to send status information to your application.
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the new resource. This value must be a unique string of no more than 64 characters. It can be used as an alternative to the `sid` in the URL path to address the resource.
 */
export interface ModelBuildListInstanceCreateOptions {
  statusCallback?: string;
  uniqueName?: string;
}
/**
 * Options to pass to each
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ModelBuildListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: ModelBuildInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ModelBuildListInstanceOptions {
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ModelBuildListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface ModelBuildContext {
  /**
   * Remove a ModelBuildInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a ModelBuildInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ModelBuildInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ModelBuildInstance) => any
  ): Promise<ModelBuildInstance>;

  /**
   * Update a ModelBuildInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ModelBuildInstance
   */
  update(
    callback?: (error: Error | null, item?: ModelBuildInstance) => any
  ): Promise<ModelBuildInstance>;
  /**
   * Update a ModelBuildInstance
   *
   * @param { ModelBuildContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ModelBuildInstance
   */
  update(
    params: ModelBuildContextUpdateOptions,
    callback?: (error: Error | null, item?: ModelBuildInstance) => any
  ): Promise<ModelBuildInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ModelBuildContextSolution {
  assistantSid?: string;
  sid?: string;
}

export class ModelBuildContextImpl implements ModelBuildContext {
  protected _solution: ModelBuildContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, assistantSid: string, sid: string) {
    if (!isValidPathParam(assistantSid)) {
      throw new Error("Parameter 'assistantSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { assistantSid, sid };
    this._uri = `/Assistants/${assistantSid}/ModelBuilds/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    let operationVersion = this._version,
      operationPromise = operationVersion.remove({
        uri: this._uri,
        method: "delete",
      });

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: ModelBuildInstance) => any
  ): Promise<ModelBuildInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ModelBuildInstance(
          operationVersion,
          payload,
          this._solution.assistantSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | ModelBuildContextUpdateOptions
      | ((error: Error | null, item?: ModelBuildInstance) => any),
    callback?: (error: Error | null, item?: ModelBuildInstance) => any
  ): Promise<ModelBuildInstance> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: ModelBuildInstance
      ) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = this._version,
      operationPromise = operationVersion.update({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ModelBuildInstance(
          operationVersion,
          payload,
          this._solution.assistantSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
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

interface ModelBuildPayload extends TwilioResponsePayload {
  model_builds: ModelBuildResource[];
}

interface ModelBuildResource {
  account_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  assistant_sid?: string | null;
  sid?: string | null;
  status?: ModelBuildStatus;
  unique_name?: string | null;
  url?: string | null;
  build_duration?: number | null;
  error_code?: number | null;
}

export class ModelBuildInstance {
  protected _solution: ModelBuildContextSolution;
  protected _context?: ModelBuildContext;

  constructor(
    protected _version: V1,
    payload: ModelBuildResource,
    assistantSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.assistantSid = payload.assistant_sid;
    this.sid = payload.sid;
    this.status = payload.status;
    this.uniqueName = payload.unique_name;
    this.url = payload.url;
    this.buildDuration = deserialize.integer(payload.build_duration);
    this.errorCode = deserialize.integer(payload.error_code);

    this._solution = { assistantSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The SID of the Assistant that is the parent of the resource
   */
  assistantSid?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  status?: ModelBuildStatus;
  /**
   * An application-defined string that uniquely identifies the resource
   */
  uniqueName?: string | null;
  /**
   * The absolute URL of the ModelBuild resource
   */
  url?: string | null;
  /**
   * The time in seconds it took to build the model
   */
  buildDuration?: number | null;
  /**
   * More information about why the model build failed, if `status` is `failed`
   */
  errorCode?: number | null;

  private get _proxy(): ModelBuildContext {
    this._context =
      this._context ||
      new ModelBuildContextImpl(
        this._version,
        this._solution.assistantSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a ModelBuildInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a ModelBuildInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ModelBuildInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ModelBuildInstance) => any
  ): Promise<ModelBuildInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ModelBuildInstance
   *
   * @param { ModelBuildContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ModelBuildInstance
   */
  update(
    params?: ModelBuildContextUpdateOptions,
    callback?: (error: Error | null, item?: ModelBuildInstance) => any
  ): Promise<ModelBuildInstance> {
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
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      assistantSid: this.assistantSid,
      sid: this.sid,
      status: this.status,
      uniqueName: this.uniqueName,
      url: this.url,
      buildDuration: this.buildDuration,
      errorCode: this.errorCode,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ModelBuildListInstance {
  (sid: string): ModelBuildContext;
  get(sid: string): ModelBuildContext;

  /**
   * Create a ModelBuildInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ModelBuildInstance
   */
  create(
    callback?: (error: Error | null, item?: ModelBuildInstance) => any
  ): Promise<ModelBuildInstance>;
  /**
   * Create a ModelBuildInstance
   *
   * @param { ModelBuildListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ModelBuildInstance
   */
  create(
    params: ModelBuildListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ModelBuildInstance) => any
  ): Promise<ModelBuildInstance>;

  /**
   * Streams ModelBuildInstance records from the API.
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
   * @param { ModelBuildListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: ModelBuildInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: ModelBuildListInstanceEachOptions,
    callback?: (item: ModelBuildInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of ModelBuildInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ModelBuildPage) => any
  ): Promise<ModelBuildPage>;
  /**
   * Lists ModelBuildInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ModelBuildListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ModelBuildInstance[]) => any
  ): Promise<ModelBuildInstance[]>;
  list(
    params: ModelBuildListInstanceOptions,
    callback?: (error: Error | null, items: ModelBuildInstance[]) => any
  ): Promise<ModelBuildInstance[]>;
  /**
   * Retrieve a single page of ModelBuildInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ModelBuildListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ModelBuildPage) => any
  ): Promise<ModelBuildPage>;
  page(
    params: ModelBuildListInstancePageOptions,
    callback?: (error: Error | null, items: ModelBuildPage) => any
  ): Promise<ModelBuildPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ModelBuildSolution {
  assistantSid?: string;
}

interface ModelBuildListInstanceImpl extends ModelBuildListInstance {}
class ModelBuildListInstanceImpl implements ModelBuildListInstance {
  _version?: V1;
  _solution?: ModelBuildSolution;
  _uri?: string;
}

export function ModelBuildListInstance(
  version: V1,
  assistantSid: string
): ModelBuildListInstance {
  if (!isValidPathParam(assistantSid)) {
    throw new Error("Parameter 'assistantSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as ModelBuildListInstanceImpl;

  instance.get = function get(sid): ModelBuildContext {
    return new ModelBuildContextImpl(version, assistantSid, sid);
  };

  instance._version = version;
  instance._solution = { assistantSid };
  instance._uri = `/Assistants/${assistantSid}/ModelBuilds`;

  instance.create = function create(
    params?:
      | ModelBuildListInstanceCreateOptions
      | ((error: Error | null, item?: ModelBuildInstance) => any),
    callback?: (error: Error | null, item?: ModelBuildInstance) => any
  ): Promise<ModelBuildInstance> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: ModelBuildInstance
      ) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["statusCallback"] !== undefined)
      data["StatusCallback"] = params["statusCallback"];
    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ModelBuildInstance(
          operationVersion,
          payload,
          this._solution.assistantSid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | ModelBuildListInstancePageOptions
      | ((error: Error | null, item?: ModelBuildPage) => any),
    callback?: (error: Error | null, item?: ModelBuildPage) => any
  ): Promise<ModelBuildPage> {
    if (typeof params === "function") {
      callback = params as (error: Error | null, item?: ModelBuildPage) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new ModelBuildPage(operationVersion, payload, this._solution)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ModelBuildPage) => any
  ): Promise<ModelBuildPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new ModelBuildPage(this._version, payload, this._solution)
    );
    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.toJSON = function toJSON() {
    return this._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(this.toJSON(), options);
  };

  return instance;
}

export class ModelBuildPage extends Page<
  V1,
  ModelBuildPayload,
  ModelBuildResource,
  ModelBuildInstance
> {
  /**
   * Initialize the ModelBuildPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: ModelBuildSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ModelBuildInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ModelBuildResource): ModelBuildInstance {
    return new ModelBuildInstance(
      this._version,
      payload,
      this._solution.assistantSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
