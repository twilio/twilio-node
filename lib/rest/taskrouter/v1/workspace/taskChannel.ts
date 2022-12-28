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
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the Task Channel. It can be up to 64 characters long.
 * @property { boolean } [channelOptimizedRouting] Whether the TaskChannel should prioritize Workers that have been idle. If `true`, Workers that have been idle the longest are prioritized.
 */
export interface TaskChannelContextUpdateOptions {
  friendlyName?: string;
  channelOptimizedRouting?: boolean;
}

/**
 * Options to pass to create a TaskChannelInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the Task Channel. It can be up to 64 characters long.
 * @property { string } uniqueName An application-defined string that uniquely identifies the Task Channel, such as `voice` or `sms`.
 * @property { boolean } [channelOptimizedRouting] Whether the Task Channel should prioritize Workers that have been idle. If `true`, Workers that have been idle the longest are prioritized.
 */
export interface TaskChannelListInstanceCreateOptions {
  friendlyName: string;
  uniqueName: string;
  channelOptimizedRouting?: boolean;
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
export interface TaskChannelListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: TaskChannelInstance, done: (err?: Error) => void) => void;
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
export interface TaskChannelListInstanceOptions {
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
export interface TaskChannelListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface TaskChannelContext {
  /**
   * Remove a TaskChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a TaskChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskChannelInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TaskChannelInstance) => any
  ): Promise<TaskChannelInstance>;

  /**
   * Update a TaskChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskChannelInstance
   */
  update(
    callback?: (error: Error | null, item?: TaskChannelInstance) => any
  ): Promise<TaskChannelInstance>;
  /**
   * Update a TaskChannelInstance
   *
   * @param { TaskChannelContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskChannelInstance
   */
  update(
    params?:
      | TaskChannelContextUpdateOptions
      | ((error: Error | null, item?: TaskChannelInstance) => any),
    callback?: (error: Error | null, item?: TaskChannelInstance) => any
  ): Promise<TaskChannelInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TaskChannelContextSolution {
  workspaceSid?: string;
  sid?: string;
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

  fetch(callback?: any): Promise<TaskChannelInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TaskChannelInstance(
          operationVersion,
          payload,
          this._solution.workspaceSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<TaskChannelInstance> {
    if (typeof params === "function") {
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

    let operationVersion = this._version,
      operationPromise = operationVersion.update({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TaskChannelInstance(
          operationVersion,
          payload,
          this._solution.workspaceSid,
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

interface TaskChannelPayload extends TwilioResponsePayload {
  channels: TaskChannelResource[];
}

interface TaskChannelResource {
  account_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  friendly_name?: string | null;
  sid?: string | null;
  unique_name?: string | null;
  workspace_sid?: string | null;
  channel_optimized_routing?: boolean | null;
  url?: string | null;
  links?: object | null;
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
  accountSid?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * An application-defined string that uniquely identifies the Task Channel
   */
  uniqueName?: string | null;
  /**
   * The SID of the Workspace that contains the Task Channel
   */
  workspaceSid?: string | null;
  /**
   * Whether the Task Channel will prioritize Workers that have been idle
   */
  channelOptimizedRouting?: boolean | null;
  /**
   * The absolute URL of the Task Channel resource
   */
  url?: string | null;
  /**
   * The URLs of related resources
   */
  links?: object | null;

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
   * Fetch a TaskChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskChannelInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TaskChannelInstance) => any
  ): Promise<TaskChannelInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a TaskChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskChannelInstance
   */
  update(
    callback?: (error: Error | null, item?: TaskChannelInstance) => any
  ): Promise<TaskChannelInstance>;
  /**
   * Update a TaskChannelInstance
   *
   * @param { TaskChannelContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskChannelInstance
   */
  update(
    params?:
      | TaskChannelContextUpdateOptions
      | ((error: Error | null, item?: TaskChannelInstance) => any),
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

export interface TaskChannelListInstance {
  (sid: string): TaskChannelContext;
  get(sid: string): TaskChannelContext;

  /**
   * Create a TaskChannelInstance
   *
   * @param { TaskChannelListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskChannelInstance
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
    params?:
      | TaskChannelListInstanceEachOptions
      | ((item: TaskChannelInstance, done: (err?: Error) => void) => void),
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
    params?:
      | TaskChannelListInstanceOptions
      | ((error: Error | null, items: TaskChannelInstance[]) => any),
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
    params?:
      | TaskChannelListInstancePageOptions
      | ((error: Error | null, items: TaskChannelPage) => any),
    callback?: (error: Error | null, items: TaskChannelPage) => any
  ): Promise<TaskChannelPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TaskChannelSolution {
  workspaceSid?: string;
}

interface TaskChannelListInstanceImpl extends TaskChannelListInstance {}
class TaskChannelListInstanceImpl implements TaskChannelListInstance {
  _version?: V1;
  _solution?: TaskChannelSolution;
  _uri?: string;
}

export function TaskChannelListInstance(
  version: V1,
  workspaceSid: string
): TaskChannelListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as TaskChannelListInstanceImpl;

  instance.get = function get(sid): TaskChannelContext {
    return new TaskChannelContextImpl(version, workspaceSid, sid);
  };

  instance._version = version;
  instance._solution = { workspaceSid };
  instance._uri = `/Workspaces/${workspaceSid}/TaskChannels`;

  instance.create = function create(
    params: TaskChannelListInstanceCreateOptions,
    callback?: (error: Error | null, item?: TaskChannelInstance) => any
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
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TaskChannelInstance(
          operationVersion,
          payload,
          this._solution.workspaceSid
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
      | TaskChannelListInstancePageOptions
      | ((error: Error | null, item?: TaskChannelPage) => any),
    callback?: (error: Error | null, item?: TaskChannelPage) => any
  ): Promise<TaskChannelPage> {
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
      (payload) =>
        new TaskChannelPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: TaskChannelPage) => any
  ): Promise<TaskChannelPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new TaskChannelPage(this._version, payload, this._solution)
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
