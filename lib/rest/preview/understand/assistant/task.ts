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
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import Understand from "../../Understand";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { FieldListInstance } from "./task/field";
import { SampleListInstance } from "./task/sample";
import { TaskActionsListInstance } from "./task/taskActions";
import { TaskStatisticsListInstance } from "./task/taskStatistics";

/**
 * Options to pass to update a TaskInstance
 */
export interface TaskContextUpdateOptions {
  /** A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long. */
  friendlyName?: string;
  /** A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long. */
  uniqueName?: string;
  /** A user-provided JSON object encoded as a string to specify the actions for this task. It is optional and non-unique. */
  actions?: any;
  /** User-provided HTTP endpoint where from the assistant fetches actions */
  actionsUrl?: string;
}

/**
 * Options to pass to create a TaskInstance
 */
export interface TaskListInstanceCreateOptions {
  /** A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long. */
  uniqueName: string;
  /** A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long. */
  friendlyName?: string;
  /** A user-provided JSON object encoded as a string to specify the actions for this task. It is optional and non-unique. */
  actions?: any;
  /** User-provided HTTP endpoint where from the assistant fetches actions */
  actionsUrl?: string;
}
/**
 * Options to pass to each
 */
export interface TaskListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: TaskInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface TaskListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface TaskListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface TaskContext {
  fields: FieldListInstance;
  samples: SampleListInstance;
  taskActions: TaskActionsListInstance;
  statistics: TaskStatisticsListInstance;

  /**
   * Remove a TaskInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a TaskInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TaskInstance) => any
  ): Promise<TaskInstance>;

  /**
   * Update a TaskInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskInstance
   */
  update(
    callback?: (error: Error | null, item?: TaskInstance) => any
  ): Promise<TaskInstance>;
  /**
   * Update a TaskInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskInstance
   */
  update(
    params: TaskContextUpdateOptions,
    callback?: (error: Error | null, item?: TaskInstance) => any
  ): Promise<TaskInstance>;
  update(params?: any, callback?: any): Promise<TaskInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TaskContextSolution {
  assistantSid: string;
  sid: string;
}

export class TaskContextImpl implements TaskContext {
  protected _solution: TaskContextSolution;
  protected _uri: string;

  protected _fields?: FieldListInstance;
  protected _samples?: SampleListInstance;
  protected _taskActions?: TaskActionsListInstance;
  protected _statistics?: TaskStatisticsListInstance;

  constructor(
    protected _version: Understand,
    assistantSid: string,
    sid: string
  ) {
    if (!isValidPathParam(assistantSid)) {
      throw new Error("Parameter 'assistantSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { assistantSid, sid };
    this._uri = `/Assistants/${assistantSid}/Tasks/${sid}`;
  }

  get fields(): FieldListInstance {
    this._fields =
      this._fields ||
      FieldListInstance(
        this._version,
        this._solution.assistantSid,
        this._solution.sid
      );
    return this._fields;
  }

  get samples(): SampleListInstance {
    this._samples =
      this._samples ||
      SampleListInstance(
        this._version,
        this._solution.assistantSid,
        this._solution.sid
      );
    return this._samples;
  }

  get taskActions(): TaskActionsListInstance {
    this._taskActions =
      this._taskActions ||
      TaskActionsListInstance(
        this._version,
        this._solution.assistantSid,
        this._solution.sid
      );
    return this._taskActions;
  }

  get statistics(): TaskStatisticsListInstance {
    this._statistics =
      this._statistics ||
      TaskStatisticsListInstance(
        this._version,
        this._solution.assistantSid,
        this._solution.sid
      );
    return this._statistics;
  }

  remove(callback?: any): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<TaskInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TaskInstance(
          operationVersion,
          payload,
          instance._solution.assistantSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<TaskInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["actions"] !== undefined)
      data["Actions"] = serialize.object(params["actions"]);
    if (params["actionsUrl"] !== undefined)
      data["ActionsUrl"] = params["actionsUrl"];

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
        new TaskInstance(
          operationVersion,
          payload,
          instance._solution.assistantSid,
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

interface TaskPayload extends TwilioResponsePayload {
  tasks: TaskResource[];
}

interface TaskResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  links: object;
  assistant_sid: string;
  sid: string;
  unique_name: string;
  actions_url: string;
  url: string;
}

export class TaskInstance {
  protected _solution: TaskContextSolution;
  protected _context?: TaskContext;

  constructor(
    protected _version: Understand,
    payload: TaskResource,
    assistantSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.links = payload.links;
    this.assistantSid = payload.assistant_sid;
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.actionsUrl = payload.actions_url;
    this.url = payload.url;

    this._solution = { assistantSid, sid: sid || this.sid };
  }

  /**
   * The unique ID of the Account that created this Task.
   */
  accountSid: string;
  /**
   * The date that this resource was created
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated
   */
  dateUpdated: Date;
  /**
   * A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long.
   */
  friendlyName: string;
  links: object;
  /**
   * The unique ID of the Assistant.
   */
  assistantSid: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
   */
  uniqueName: string;
  /**
   * User-provided HTTP endpoint where from the assistant fetches actions
   */
  actionsUrl: string;
  url: string;

  private get _proxy(): TaskContext {
    this._context =
      this._context ||
      new TaskContextImpl(
        this._version,
        this._solution.assistantSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a TaskInstance
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
   * Fetch a TaskInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TaskInstance) => any
  ): Promise<TaskInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a TaskInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskInstance
   */
  update(
    callback?: (error: Error | null, item?: TaskInstance) => any
  ): Promise<TaskInstance>;
  /**
   * Update a TaskInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskInstance
   */
  update(
    params: TaskContextUpdateOptions,
    callback?: (error: Error | null, item?: TaskInstance) => any
  ): Promise<TaskInstance>;
  update(params?: any, callback?: any): Promise<TaskInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the fields.
   */
  fields(): FieldListInstance {
    return this._proxy.fields;
  }

  /**
   * Access the samples.
   */
  samples(): SampleListInstance {
    return this._proxy.samples;
  }

  /**
   * Access the taskActions.
   */
  taskActions(): TaskActionsListInstance {
    return this._proxy.taskActions;
  }

  /**
   * Access the statistics.
   */
  statistics(): TaskStatisticsListInstance {
    return this._proxy.statistics;
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
      friendlyName: this.friendlyName,
      links: this.links,
      assistantSid: this.assistantSid,
      sid: this.sid,
      uniqueName: this.uniqueName,
      actionsUrl: this.actionsUrl,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface TaskSolution {
  assistantSid: string;
}

export interface TaskListInstance {
  _version: Understand;
  _solution: TaskSolution;
  _uri: string;

  (sid: string): TaskContext;
  get(sid: string): TaskContext;

  /**
   * Create a TaskInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskInstance
   */
  create(
    params: TaskListInstanceCreateOptions,
    callback?: (error: Error | null, item?: TaskInstance) => any
  ): Promise<TaskInstance>;
  create(params: any, callback?: any): Promise<TaskInstance>;

  /**
   * Streams TaskInstance records from the API.
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
    callback?: (item: TaskInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams TaskInstance records from the API.
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
   * @param { TaskListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: TaskListInstanceEachOptions,
    callback?: (item: TaskInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of TaskInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: TaskPage) => any
  ): Promise<TaskPage>;
  /**
   * Retrieve a single target page of TaskInstance records from the API.
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
    callback?: (error: Error | null, items: TaskPage) => any
  ): Promise<TaskPage>;
  getPage(params?: any, callback?: any): Promise<TaskPage>;
  /**
   * Lists TaskInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: TaskInstance[]) => any
  ): Promise<TaskInstance[]>;
  /**
   * Lists TaskInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TaskListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: TaskListInstanceOptions,
    callback?: (error: Error | null, items: TaskInstance[]) => any
  ): Promise<TaskInstance[]>;
  list(params?: any, callback?: any): Promise<TaskInstance[]>;
  /**
   * Retrieve a single page of TaskInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: TaskPage) => any
  ): Promise<TaskPage>;
  /**
   * Retrieve a single page of TaskInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TaskListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: TaskListInstancePageOptions,
    callback?: (error: Error | null, items: TaskPage) => any
  ): Promise<TaskPage>;
  page(params?: any, callback?: any): Promise<TaskPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function TaskListInstance(
  version: Understand,
  assistantSid: string
): TaskListInstance {
  if (!isValidPathParam(assistantSid)) {
    throw new Error("Parameter 'assistantSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as TaskListInstance;

  instance.get = function get(sid): TaskContext {
    return new TaskContextImpl(version, assistantSid, sid);
  };

  instance._version = version;
  instance._solution = { assistantSid };
  instance._uri = `/Assistants/${assistantSid}/Tasks`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<TaskInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["uniqueName"] === null || params["uniqueName"] === undefined) {
      throw new Error("Required parameter \"params['uniqueName']\" missing.");
    }

    let data: any = {};

    data["UniqueName"] = params["uniqueName"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["actions"] !== undefined)
      data["Actions"] = serialize.object(params["actions"]);
    if (params["actionsUrl"] !== undefined)
      data["ActionsUrl"] = params["actionsUrl"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TaskInstance(
          operationVersion,
          payload,
          instance._solution.assistantSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<TaskPage> {
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
      (payload) => new TaskPage(operationVersion, payload, instance._solution)
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
  ): Promise<TaskPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) => new TaskPage(instance._version, payload, instance._solution)
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

export class TaskPage extends Page<
  Understand,
  TaskPayload,
  TaskResource,
  TaskInstance
> {
  /**
   * Initialize the TaskPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: Understand,
    response: Response<string>,
    solution: TaskSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of TaskInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TaskResource): TaskInstance {
    return new TaskInstance(
      this._version,
      payload,
      this._solution.assistantSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
