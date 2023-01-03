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
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * Options to pass to create a FieldInstance
 *
 * @property { string } fieldType The Field Type of the new field. Can be: a [Built-in Field Type](https://www.twilio.com/docs/autopilot/built-in-field-types), the `unique_name`, or the `sid` of a custom Field Type.
 * @property { string } uniqueName An application-defined string that uniquely identifies the new resource. This value must be a unique string of no more than 64 characters. It can be used as an alternative to the `sid` in the URL path to address the resource.
 */
export interface FieldListInstanceCreateOptions {
  fieldType: string;
  uniqueName: string;
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
export interface FieldListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: FieldInstance, done: (err?: Error) => void) => void;
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
export interface FieldListInstanceOptions {
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
export interface FieldListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface FieldContext {
  /**
   * Remove a FieldInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a FieldInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FieldInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FieldInstance) => any
  ): Promise<FieldInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FieldContextSolution {
  assistantSid?: string;
  taskSid?: string;
  sid?: string;
}

export class FieldContextImpl implements FieldContext {
  protected _solution: FieldContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    assistantSid: string,
    taskSid: string,
    sid: string
  ) {
    if (!isValidPathParam(assistantSid)) {
      throw new Error("Parameter 'assistantSid' is not valid.");
    }

    if (!isValidPathParam(taskSid)) {
      throw new Error("Parameter 'taskSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { assistantSid, taskSid, sid };
    this._uri = `/Assistants/${assistantSid}/Tasks/${taskSid}/Fields/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
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

  fetch(callback?: any): Promise<FieldInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FieldInstance(
          operationVersion,
          payload,
          this._solution.assistantSid,
          this._solution.taskSid,
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

interface FieldPayload extends TwilioResponsePayload {
  fields: FieldResource[];
}

interface FieldResource {
  account_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  field_type?: string | null;
  task_sid?: string | null;
  assistant_sid?: string | null;
  sid?: string | null;
  unique_name?: string | null;
  url?: string | null;
}

export class FieldInstance {
  protected _solution: FieldContextSolution;
  protected _context?: FieldContext;

  constructor(
    protected _version: V1,
    payload: FieldResource,
    assistantSid: string,
    taskSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.fieldType = payload.field_type;
    this.taskSid = payload.task_sid;
    this.assistantSid = payload.assistant_sid;
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.url = payload.url;

    this._solution = { assistantSid, taskSid, sid: sid || this.sid };
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
   * The Field Type of the field
   */
  fieldType?: string | null;
  /**
   * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) resource associated with this Field
   */
  taskSid?: string | null;
  /**
   * The SID of the Assistant that is the parent of the Task associated with the resource
   */
  assistantSid?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * An application-defined string that uniquely identifies the resource
   */
  uniqueName?: string | null;
  /**
   * The absolute URL of the Field resource
   */
  url?: string | null;

  private get _proxy(): FieldContext {
    this._context =
      this._context ||
      new FieldContextImpl(
        this._version,
        this._solution.assistantSid,
        this._solution.taskSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a FieldInstance
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
   * Fetch a FieldInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FieldInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FieldInstance) => any
  ): Promise<FieldInstance> {
    return this._proxy.fetch(callback);
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
      fieldType: this.fieldType,
      taskSid: this.taskSid,
      assistantSid: this.assistantSid,
      sid: this.sid,
      uniqueName: this.uniqueName,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface FieldListInstance {
  (sid: string): FieldContext;
  get(sid: string): FieldContext;

  /**
   * Create a FieldInstance
   *
   * @param { FieldListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FieldInstance
   */
  create(
    params: FieldListInstanceCreateOptions,
    callback?: (error: Error | null, item?: FieldInstance) => any
  ): Promise<FieldInstance>;
  create(params: any, callback?: any): Promise<FieldInstance>;

  /**
   * Streams FieldInstance records from the API.
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
    callback?: (item: FieldInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams FieldInstance records from the API.
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
   * @param { FieldListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: FieldListInstanceEachOptions,
    callback?: (item: FieldInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of FieldInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: FieldPage) => any
  ): Promise<FieldPage>;
  /**
   * Retrieve a single target page of FieldInstance records from the API.
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
    callback?: (error: Error | null, items: FieldPage) => any
  ): Promise<FieldPage>;
  getPage(params?: any, callback?: any): Promise<FieldPage>;
  /**
   * Lists FieldInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: FieldInstance[]) => any
  ): Promise<FieldInstance[]>;
  /**
   * Lists FieldInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FieldListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: FieldListInstanceOptions,
    callback?: (error: Error | null, items: FieldInstance[]) => any
  ): Promise<FieldInstance[]>;
  list(params?: any, callback?: any): Promise<FieldInstance[]>;
  /**
   * Retrieve a single page of FieldInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: FieldPage) => any
  ): Promise<FieldPage>;
  /**
   * Retrieve a single page of FieldInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FieldListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: FieldListInstancePageOptions,
    callback?: (error: Error | null, items: FieldPage) => any
  ): Promise<FieldPage>;
  page(params?: any, callback?: any): Promise<FieldPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FieldSolution {
  assistantSid?: string;
  taskSid?: string;
}

interface FieldListInstanceImpl extends FieldListInstance {}
class FieldListInstanceImpl implements FieldListInstance {
  _version?: V1;
  _solution?: FieldSolution;
  _uri?: string;
}

export function FieldListInstance(
  version: V1,
  assistantSid: string,
  taskSid: string
): FieldListInstance {
  if (!isValidPathParam(assistantSid)) {
    throw new Error("Parameter 'assistantSid' is not valid.");
  }

  if (!isValidPathParam(taskSid)) {
    throw new Error("Parameter 'taskSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as FieldListInstanceImpl;

  instance.get = function get(sid): FieldContext {
    return new FieldContextImpl(version, assistantSid, taskSid, sid);
  };

  instance._version = version;
  instance._solution = { assistantSid, taskSid };
  instance._uri = `/Assistants/${assistantSid}/Tasks/${taskSid}/Fields`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<FieldInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["fieldType"] === null || params["fieldType"] === undefined) {
      throw new Error("Required parameter \"params['fieldType']\" missing.");
    }

    if (params["uniqueName"] === null || params["uniqueName"] === undefined) {
      throw new Error("Required parameter \"params['uniqueName']\" missing.");
    }

    let data: any = {};

    data["FieldType"] = params["fieldType"];

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
        new FieldInstance(
          operationVersion,
          payload,
          this._solution.assistantSid,
          this._solution.taskSid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<FieldPage> {
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
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new FieldPage(operationVersion, payload, this._solution)
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
    targetUrl?: any,
    callback?: any
  ): Promise<FieldPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new FieldPage(this._version, payload, this._solution)
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

export class FieldPage extends Page<
  V1,
  FieldPayload,
  FieldResource,
  FieldInstance
> {
  /**
   * Initialize the FieldPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: FieldSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of FieldInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FieldResource): FieldInstance {
    return new FieldInstance(
      this._version,
      payload,
      this._solution.assistantSid,
      this._solution.taskSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
