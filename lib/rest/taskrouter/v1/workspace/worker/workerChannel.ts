/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Taskrouter
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
 * Options to pass to update a WorkerChannelInstance
 *
 * @property { number } [capacity] The total number of Tasks that the Worker should handle for the TaskChannel type. TaskRouter creates reservations for Tasks of this TaskChannel type up to the specified capacity. If the capacity is 0, no new reservations will be created.
 * @property { boolean } [available] Whether the WorkerChannel is available. Set to `false` to prevent the Worker from receiving any new Tasks of this TaskChannel type.
 */
export interface WorkerChannelContextUpdateOptions {
  capacity?: number;
  available?: boolean;
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
export interface WorkerChannelListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: WorkerChannelInstance, done: (err?: Error) => void) => void;
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
export interface WorkerChannelListInstanceOptions {
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
export interface WorkerChannelListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface WorkerChannelContext {
  /**
   * Fetch a WorkerChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkerChannelInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WorkerChannelInstance) => any
  ): Promise<WorkerChannelInstance>;

  /**
   * Update a WorkerChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkerChannelInstance
   */
  update(
    callback?: (error: Error | null, item?: WorkerChannelInstance) => any
  ): Promise<WorkerChannelInstance>;
  /**
   * Update a WorkerChannelInstance
   *
   * @param { WorkerChannelContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkerChannelInstance
   */
  update(
    params: WorkerChannelContextUpdateOptions,
    callback?: (error: Error | null, item?: WorkerChannelInstance) => any
  ): Promise<WorkerChannelInstance>;
  update(params?: any, callback?: any): Promise<WorkerChannelInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkerChannelContextSolution {
  workspaceSid: string;
  workerSid: string;
  sid: string;
}

export class WorkerChannelContextImpl implements WorkerChannelContext {
  protected _solution: WorkerChannelContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    workspaceSid: string,
    workerSid: string,
    sid: string
  ) {
    if (!isValidPathParam(workspaceSid)) {
      throw new Error("Parameter 'workspaceSid' is not valid.");
    }

    if (!isValidPathParam(workerSid)) {
      throw new Error("Parameter 'workerSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { workspaceSid, workerSid, sid };
    this._uri = `/Workspaces/${workspaceSid}/Workers/${workerSid}/Channels/${sid}`;
  }

  fetch(callback?: any): Promise<WorkerChannelInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new WorkerChannelInstance(
          operationVersion,
          payload,
          instance._solution.workspaceSid,
          instance._solution.workerSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<WorkerChannelInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["capacity"] !== undefined) data["Capacity"] = params["capacity"];
    if (params["available"] !== undefined)
      data["Available"] = serialize.bool(params["available"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

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
        new WorkerChannelInstance(
          operationVersion,
          payload,
          instance._solution.workspaceSid,
          instance._solution.workerSid,
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

interface WorkerChannelPayload extends TwilioResponsePayload {
  channels: WorkerChannelResource[];
}

interface WorkerChannelResource {
  account_sid: string;
  assigned_tasks: number;
  available: boolean;
  available_capacity_percentage: number;
  configured_capacity: number;
  date_created: Date;
  date_updated: Date;
  sid: string;
  task_channel_sid: string;
  task_channel_unique_name: string;
  worker_sid: string;
  workspace_sid: string;
  url: string;
}

export class WorkerChannelInstance {
  protected _solution: WorkerChannelContextSolution;
  protected _context?: WorkerChannelContext;

  constructor(
    protected _version: V1,
    payload: WorkerChannelResource,
    workspaceSid: string,
    workerSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.assignedTasks = deserialize.integer(payload.assigned_tasks);
    this.available = payload.available;
    this.availableCapacityPercentage = deserialize.integer(
      payload.available_capacity_percentage
    );
    this.configuredCapacity = deserialize.integer(payload.configured_capacity);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.sid = payload.sid;
    this.taskChannelSid = payload.task_channel_sid;
    this.taskChannelUniqueName = payload.task_channel_unique_name;
    this.workerSid = payload.worker_sid;
    this.workspaceSid = payload.workspace_sid;
    this.url = payload.url;

    this._solution = { workspaceSid, workerSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  /**
   * The total number of Tasks assigned to Worker for the TaskChannel type
   */
  assignedTasks: number;
  /**
   * Whether the Worker should receive Tasks of the TaskChannel type
   */
  available: boolean;
  /**
   * The current available capacity between 0 to 100 for the TaskChannel
   */
  availableCapacityPercentage: number;
  /**
   * The current configured capacity for the WorkerChannel
   */
  configuredCapacity: number;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated: Date;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated: Date;
  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * The SID of the TaskChannel
   */
  taskChannelSid: string;
  /**
   * The unique name of the TaskChannel, such as \'voice\' or \'sms\'
   */
  taskChannelUniqueName: string;
  /**
   * The SID of the Worker that contains the WorkerChannel
   */
  workerSid: string;
  /**
   * The SID of the Workspace that contains the WorkerChannel
   */
  workspaceSid: string;
  /**
   * The absolute URL of the WorkerChannel resource
   */
  url: string;

  private get _proxy(): WorkerChannelContext {
    this._context =
      this._context ||
      new WorkerChannelContextImpl(
        this._version,
        this._solution.workspaceSid,
        this._solution.workerSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a WorkerChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkerChannelInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WorkerChannelInstance) => any
  ): Promise<WorkerChannelInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a WorkerChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkerChannelInstance
   */
  update(
    callback?: (error: Error | null, item?: WorkerChannelInstance) => any
  ): Promise<WorkerChannelInstance>;
  /**
   * Update a WorkerChannelInstance
   *
   * @param { WorkerChannelContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkerChannelInstance
   */
  update(
    params: WorkerChannelContextUpdateOptions,
    callback?: (error: Error | null, item?: WorkerChannelInstance) => any
  ): Promise<WorkerChannelInstance>;
  update(params?: any, callback?: any): Promise<WorkerChannelInstance> {
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
      assignedTasks: this.assignedTasks,
      available: this.available,
      availableCapacityPercentage: this.availableCapacityPercentage,
      configuredCapacity: this.configuredCapacity,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      sid: this.sid,
      taskChannelSid: this.taskChannelSid,
      taskChannelUniqueName: this.taskChannelUniqueName,
      workerSid: this.workerSid,
      workspaceSid: this.workspaceSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface WorkerChannelSolution {
  workspaceSid: string;
  workerSid: string;
}

export interface WorkerChannelListInstance {
  _version: V1;
  _solution: WorkerChannelSolution;
  _uri: string;

  (sid: string): WorkerChannelContext;
  get(sid: string): WorkerChannelContext;

  /**
   * Streams WorkerChannelInstance records from the API.
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
    callback?: (
      item: WorkerChannelInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Streams WorkerChannelInstance records from the API.
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
   * @param { WorkerChannelListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: WorkerChannelListInstanceEachOptions,
    callback?: (
      item: WorkerChannelInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of WorkerChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: WorkerChannelPage) => any
  ): Promise<WorkerChannelPage>;
  /**
   * Retrieve a single target page of WorkerChannelInstance records from the API.
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
    callback?: (error: Error | null, items: WorkerChannelPage) => any
  ): Promise<WorkerChannelPage>;
  getPage(params?: any, callback?: any): Promise<WorkerChannelPage>;
  /**
   * Lists WorkerChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: WorkerChannelInstance[]) => any
  ): Promise<WorkerChannelInstance[]>;
  /**
   * Lists WorkerChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WorkerChannelListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: WorkerChannelListInstanceOptions,
    callback?: (error: Error | null, items: WorkerChannelInstance[]) => any
  ): Promise<WorkerChannelInstance[]>;
  list(params?: any, callback?: any): Promise<WorkerChannelInstance[]>;
  /**
   * Retrieve a single page of WorkerChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: WorkerChannelPage) => any
  ): Promise<WorkerChannelPage>;
  /**
   * Retrieve a single page of WorkerChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WorkerChannelListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: WorkerChannelListInstancePageOptions,
    callback?: (error: Error | null, items: WorkerChannelPage) => any
  ): Promise<WorkerChannelPage>;
  page(params?: any, callback?: any): Promise<WorkerChannelPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function WorkerChannelListInstance(
  version: V1,
  workspaceSid: string,
  workerSid: string
): WorkerChannelListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  if (!isValidPathParam(workerSid)) {
    throw new Error("Parameter 'workerSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as WorkerChannelListInstance;

  instance.get = function get(sid): WorkerChannelContext {
    return new WorkerChannelContextImpl(version, workspaceSid, workerSid, sid);
  };

  instance._version = version;
  instance._solution = { workspaceSid, workerSid };
  instance._uri = `/Workspaces/${workspaceSid}/Workers/${workerSid}/Channels`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<WorkerChannelPage> {
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
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new WorkerChannelPage(operationVersion, payload, instance._solution)
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
    targetUrl?: any,
    callback?: any
  ): Promise<WorkerChannelPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new WorkerChannelPage(instance._version, payload, instance._solution)
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

export class WorkerChannelPage extends Page<
  V1,
  WorkerChannelPayload,
  WorkerChannelResource,
  WorkerChannelInstance
> {
  /**
   * Initialize the WorkerChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: WorkerChannelSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of WorkerChannelInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkerChannelResource): WorkerChannelInstance {
    return new WorkerChannelInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
      this._solution.workerSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
