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
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * Options to pass to fetch a TaskQueueStatisticsInstance
 *
 * @property { Date } [endDate] Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default is 15 minutes.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { string } [taskChannel] Only calculate real-time and cumulative statistics for the specified TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 * @property { string } [splitByWaitTime] A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed.
 */
export interface TaskQueueStatisticsContextFetchOptions {
  endDate?: Date;
  minutes?: number;
  startDate?: Date;
  taskChannel?: string;
  splitByWaitTime?: string;
}

export interface TaskQueueStatisticsContext {
  /**
   * Fetch a TaskQueueStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskQueueStatisticsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TaskQueueStatisticsInstance) => any
  ): Promise<TaskQueueStatisticsInstance>;
  /**
   * Fetch a TaskQueueStatisticsInstance
   *
   * @param { TaskQueueStatisticsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskQueueStatisticsInstance
   */
  fetch(
    params: TaskQueueStatisticsContextFetchOptions,
    callback?: (error: Error | null, item?: TaskQueueStatisticsInstance) => any
  ): Promise<TaskQueueStatisticsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TaskQueueStatisticsContextSolution {
  workspaceSid?: string;
  taskQueueSid?: string;
}

export class TaskQueueStatisticsContextImpl
  implements TaskQueueStatisticsContext
{
  protected _solution: TaskQueueStatisticsContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    workspaceSid: string,
    taskQueueSid: string
  ) {
    if (!isValidPathParam(workspaceSid)) {
      throw new Error("Parameter 'workspaceSid' is not valid.");
    }

    if (!isValidPathParam(taskQueueSid)) {
      throw new Error("Parameter 'taskQueueSid' is not valid.");
    }

    this._solution = { workspaceSid, taskQueueSid };
    this._uri = `/Workspaces/${workspaceSid}/TaskQueues/${taskQueueSid}/Statistics`;
  }

  fetch(
    params?:
      | TaskQueueStatisticsContextFetchOptions
      | ((error: Error | null, item?: TaskQueueStatisticsInstance) => any),
    callback?: (error: Error | null, item?: TaskQueueStatisticsInstance) => any
  ): Promise<TaskQueueStatisticsInstance> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: TaskQueueStatisticsInstance
      ) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["endDate"] !== undefined)
      data["EndDate"] = serialize.iso8601DateTime(params["endDate"]);
    if (params["minutes"] !== undefined) data["Minutes"] = params["minutes"];
    if (params["startDate"] !== undefined)
      data["StartDate"] = serialize.iso8601DateTime(params["startDate"]);
    if (params["taskChannel"] !== undefined)
      data["TaskChannel"] = params["taskChannel"];
    if (params["splitByWaitTime"] !== undefined)
      data["SplitByWaitTime"] = params["splitByWaitTime"];

    const headers: any = {};

    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TaskQueueStatisticsInstance(
          operationVersion,
          payload,
          this._solution.workspaceSid,
          this._solution.taskQueueSid
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

interface TaskQueueStatisticsPayload extends TaskQueueStatisticsResource {}

interface TaskQueueStatisticsResource {
  account_sid?: string | null;
  cumulative?: any | null;
  realtime?: any | null;
  task_queue_sid?: string | null;
  workspace_sid?: string | null;
  url?: string | null;
}

export class TaskQueueStatisticsInstance {
  protected _solution: TaskQueueStatisticsContextSolution;
  protected _context?: TaskQueueStatisticsContext;

  constructor(
    protected _version: V1,
    payload: TaskQueueStatisticsResource,
    workspaceSid: string,
    taskQueueSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.cumulative = payload.cumulative;
    this.realtime = payload.realtime;
    this.taskQueueSid = payload.task_queue_sid;
    this.workspaceSid = payload.workspace_sid;
    this.url = payload.url;

    this._solution = { workspaceSid, taskQueueSid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * An object that contains the cumulative statistics for the TaskQueue
   */
  cumulative?: any | null;
  /**
   * An object that contains the real-time statistics for the TaskQueue
   */
  realtime?: any | null;
  /**
   * The SID of the TaskQueue from which these statistics were calculated
   */
  taskQueueSid?: string | null;
  /**
   * The SID of the Workspace that contains the TaskQueue
   */
  workspaceSid?: string | null;
  /**
   * The absolute URL of the TaskQueue statistics resource
   */
  url?: string | null;

  private get _proxy(): TaskQueueStatisticsContext {
    this._context =
      this._context ||
      new TaskQueueStatisticsContextImpl(
        this._version,
        this._solution.workspaceSid,
        this._solution.taskQueueSid
      );
    return this._context;
  }

  /**
   * Fetch a TaskQueueStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskQueueStatisticsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TaskQueueStatisticsInstance) => any
  ): Promise<TaskQueueStatisticsInstance>;
  /**
   * Fetch a TaskQueueStatisticsInstance
   *
   * @param { TaskQueueStatisticsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskQueueStatisticsInstance
   */
  fetch(
    params: TaskQueueStatisticsContextFetchOptions,
    callback?: (error: Error | null, item?: TaskQueueStatisticsInstance) => any
  ): Promise<TaskQueueStatisticsInstance>;

  fetch(
    params?: any,
    callback?: (error: Error | null, item?: TaskQueueStatisticsInstance) => any
  ): Promise<TaskQueueStatisticsInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      cumulative: this.cumulative,
      realtime: this.realtime,
      taskQueueSid: this.taskQueueSid,
      workspaceSid: this.workspaceSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface TaskQueueStatisticsListInstance {
  (): TaskQueueStatisticsContext;
  get(): TaskQueueStatisticsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TaskQueueStatisticsSolution {
  workspaceSid?: string;
  taskQueueSid?: string;
}

interface TaskQueueStatisticsListInstanceImpl
  extends TaskQueueStatisticsListInstance {}
class TaskQueueStatisticsListInstanceImpl
  implements TaskQueueStatisticsListInstance
{
  _version?: V1;
  _solution?: TaskQueueStatisticsSolution;
  _uri?: string;
}

export function TaskQueueStatisticsListInstance(
  version: V1,
  workspaceSid: string,
  taskQueueSid: string
): TaskQueueStatisticsListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  if (!isValidPathParam(taskQueueSid)) {
    throw new Error("Parameter 'taskQueueSid' is not valid.");
  }

  const instance = (() =>
    instance.get()) as TaskQueueStatisticsListInstanceImpl;

  instance.get = function get(): TaskQueueStatisticsContext {
    return new TaskQueueStatisticsContextImpl(
      version,
      workspaceSid,
      taskQueueSid
    );
  };

  instance._version = version;
  instance._solution = { workspaceSid, taskQueueSid };
  instance._uri = ``;

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
