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
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to update a TaskChannelInstance
 */
export interface TaskChannelContextUpdateOptions {
  /** A descriptive string that you create to describe the Task Channel. It can be up to 64 characters long. */
  friendlyName?: string;
  /** Whether the TaskChannel should prioritize Workers that have been idle. If `true`, Workers that have been idle the longest are prioritized. */
  channelOptimizedRouting?: boolean;
}

/**
 * Options to pass to create a TaskChannelInstance
 */
export interface TaskChannelListInstanceCreateOptions {
  /** A descriptive string that you create to describe the Task Channel. It can be up to 64 characters long. */
  friendlyName: string;
  /** An application-defined string that uniquely identifies the Task Channel, such as `voice` or `sms`. */
  uniqueName: string;
  /** Whether the Task Channel should prioritize Workers that have been idle. If `true`, Workers that have been idle the longest are prioritized. */
  channelOptimizedRouting?: boolean;
}
/**
 * Options to pass to each
 */
export interface TaskChannelListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: TaskChannelInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface TaskChannelListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface TaskChannelListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface TaskChannelContext {
  /**
   * Remove a TaskChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a TaskChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskChannelInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TaskChannelInstance) => any
  ): Promise<TaskChannelInstance>;

  /**
   * Update a TaskChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskChannelInstance
   */
  update(
    callback?: (error: Error | null, item?: TaskChannelInstance) => any
  ): Promise<TaskChannelInstance>;
  /**
   * Update a TaskChannelInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskChannelInstance
   */
  update(
    params: TaskChannelContextUpdateOptions,
    callback?: (error: Error | null, item?: TaskChannelInstance) => any
  ): Promise<TaskChannelInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TaskChannelContextSolution {
  workspaceSid: string;
  sid: string;
}

export class TaskChannelContextImpl implements TaskChannelContext {
  protected _solution: TaskChannelContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, workspaceSid: string, sid: string) {
    if (!isValidPathParam(workspaceSid)) {
      throw new Error("Parameter 'workspaceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { workspaceSid, sid };
    this._uri = `/Workspaces/${workspaceSid}/TaskChannels/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
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

  fetch(
    callback?: (error: Error | null, item?: TaskChannelInstance) => any
  ): Promise<TaskChannelInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TaskChannelInstance(
          operationVersion,
          payload,
          instance._solution.workspaceSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | TaskChannelContextUpdateOptions
      | ((error: Error | null, item?: TaskChannelInstance) => any),
    callback?: (error: Error | null, item?: TaskChannelInstance) => any
  ): Promise<TaskChannelInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["channelOptimizedRouting"] !== undefined)
      data["ChannelOptimizedRouting"] = serialize.bool(
        params["channelOptimizedRouting"]
      );

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
        new TaskChannelInstance(
          operationVersion,
          payload,
          instance._solution.workspaceSid,
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

interface TaskChannelPayload extends TwilioResponsePayload {
  channels: TaskChannelResource[];
}

interface TaskChannelResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
  unique_name: string;
  workspace_sid: string;
  channel_optimized_routing: boolean;
  url: string;
  links: object;
}

export class TaskChannelInstance {
  protected _solution: TaskChannelContextSolution;
  protected _context?: TaskChannelContext;

  constructor(
    protected _version: V1,
    payload: TaskChannelResource,
    workspaceSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.workspaceSid = payload.workspace_sid;
    this.channelOptimizedRouting = payload.channel_optimized_routing;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { workspaceSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated: Date;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated: Date;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName: string;
  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * An application-defined string that uniquely identifies the Task Channel
   */
  uniqueName: string;
  /**
   * The SID of the Workspace that contains the Task Channel
   */
  workspaceSid: string;
  /**
   * Whether the Task Channel will prioritize Workers that have been idle
   */
  channelOptimizedRouting: boolean;
  /**
   * The absolute URL of the Task Channel resource
   */
  url: string;
  /**
   * The URLs of related resources
   */
  links: object;

  private get _proxy(): TaskChannelContext {
    this._context =
      this._context ||
      new TaskChannelContextImpl(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a TaskChannelInstance
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
   * Fetch a TaskChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskChannelInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TaskChannelInstance) => any
  ): Promise<TaskChannelInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a TaskChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskChannelInstance
   */
  update(
    callback?: (error: Error | null, item?: TaskChannelInstance) => any
  ): Promise<TaskChannelInstance>;
  /**
   * Update a TaskChannelInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskChannelInstance
   */
  update(
    params: TaskChannelContextUpdateOptions,
    callback?: (error: Error | null, item?: TaskChannelInstance) => any
  ): Promise<TaskChannelInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: TaskChannelInstance) => any
  ): Promise<TaskChannelInstance> {
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
      friendlyName: this.friendlyName,
      sid: this.sid,
      uniqueName: this.uniqueName,
      workspaceSid: this.workspaceSid,
      channelOptimizedRouting: this.channelOptimizedRouting,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface TaskChannelSolution {
  workspaceSid: string;
}

export interface TaskChannelListInstance {
  _version: V1;
  _solution: TaskChannelSolution;
  _uri: string;

  (sid: string): TaskChannelContext;
  get(sid: string): TaskChannelContext;

  /**
   * Create a TaskChannelInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskChannelInstance
   */
  create(
    params: TaskChannelListInstanceCreateOptions,
    callback?: (error: Error | null, item?: TaskChannelInstance) => any
  ): Promise<TaskChannelInstance>;

  /**
   * Streams TaskChannelInstance records from the API.
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
   * @param { TaskChannelListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: TaskChannelInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: TaskChannelListInstanceEachOptions,
    callback?: (item: TaskChannelInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of TaskChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: TaskChannelPage) => any
  ): Promise<TaskChannelPage>;
  /**
   * Lists TaskChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TaskChannelListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: TaskChannelInstance[]) => any
  ): Promise<TaskChannelInstance[]>;
  list(
    params: TaskChannelListInstanceOptions,
    callback?: (error: Error | null, items: TaskChannelInstance[]) => any
  ): Promise<TaskChannelInstance[]>;
  /**
   * Retrieve a single page of TaskChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TaskChannelListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: TaskChannelPage) => any
  ): Promise<TaskChannelPage>;
  page(
    params: TaskChannelListInstancePageOptions,
    callback?: (error: Error | null, items: TaskChannelPage) => any
  ): Promise<TaskChannelPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function TaskChannelListInstance(
  version: V1,
  workspaceSid: string
): TaskChannelListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as TaskChannelListInstance;

  instance.get = function get(sid): TaskChannelContext {
    return new TaskChannelContextImpl(version, workspaceSid, sid);
  };

  instance._version = version;
  instance._solution = { workspaceSid };
  instance._uri = `/Workspaces/${workspaceSid}/TaskChannels`;

  instance.create = function create(
    params: TaskChannelListInstanceCreateOptions,
    callback?: (error: Error | null, items: TaskChannelInstance) => any
  ): Promise<TaskChannelInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    if (params["uniqueName"] === null || params["uniqueName"] === undefined) {
      throw new Error("Required parameter \"params['uniqueName']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];

    data["UniqueName"] = params["uniqueName"];
    if (params["channelOptimizedRouting"] !== undefined)
      data["ChannelOptimizedRouting"] = serialize.bool(
        params["channelOptimizedRouting"]
      );

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
        new TaskChannelInstance(
          operationVersion,
          payload,
          instance._solution.workspaceSid
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
      | TaskChannelListInstancePageOptions
      | ((error: Error | null, items: TaskChannelPage) => any),
    callback?: (error: Error | null, items: TaskChannelPage) => any
  ): Promise<TaskChannelPage> {
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

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TaskChannelPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: TaskChannelPage) => any
  ): Promise<TaskChannelPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new TaskChannelPage(instance._version, payload, instance._solution)
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

export class TaskChannelPage extends Page<
  V1,
  TaskChannelPayload,
  TaskChannelResource,
  TaskChannelInstance
> {
  /**
   * Initialize the TaskChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: TaskChannelSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of TaskChannelInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TaskChannelResource): TaskChannelInstance {
    return new TaskChannelInstance(
      this._version,
      payload,
      this._solution.workspaceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
