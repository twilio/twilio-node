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
 */
export interface TaskQueueStatisticsContextFetchOptions {
  /** Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time. */
  endDate?: Date;
  /** Only calculate statistics since this many minutes in the past. The default is 15 minutes. */
  minutes?: number;
  /** Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
  startDate?: Date;
  /** Only calculate real-time and cumulative statistics for the specified TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`. */
  taskChannel?: string;
  /** A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed. */
  splitByWaitTime?: string;
}

export interface TaskQueueStatisticsContext {
  /**
   * Fetch a TaskQueueStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskQueueStatisticsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TaskQueueStatisticsInstance) => any
  ): Promise<TaskQueueStatisticsInstance>;
  /**
   * Fetch a TaskQueueStatisticsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskQueueStatisticsInstance
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
  workspaceSid: string;
  taskQueueSid: string;
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
    if (params instanceof Function) {
      callback = params;
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

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TaskQueueStatisticsInstance(
          operationVersion,
          payload,
          instance._solution.workspaceSid,
          instance._solution.taskQueueSid
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

interface TaskQueueStatisticsPayload extends TaskQueueStatisticsResource {}

interface TaskQueueStatisticsResource {
  account_sid: string;
  cumulative: any;
  realtime: any;
  task_queue_sid: string;
  workspace_sid: string;
  url: string;
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
  accountSid: string;
  /**
   * An object that contains the cumulative statistics for the TaskQueue
   */
  cumulative: any;
  /**
   * An object that contains the real-time statistics for the TaskQueue
   */
  realtime: any;
  /**
   * The SID of the TaskQueue from which these statistics were calculated
   */
  taskQueueSid: string;
  /**
   * The SID of the Workspace that contains the TaskQueue
   */
  workspaceSid: string;
  /**
   * The absolute URL of the TaskQueue statistics resource
   */
  url: string;

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
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskQueueStatisticsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TaskQueueStatisticsInstance) => any
  ): Promise<TaskQueueStatisticsInstance>;
  /**
   * Fetch a TaskQueueStatisticsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskQueueStatisticsInstance
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

export interface TaskQueueStatisticsSolution {
  workspaceSid: string;
  taskQueueSid: string;
}

export interface TaskQueueStatisticsListInstance {
  _version: V1;
  _solution: TaskQueueStatisticsSolution;
  _uri: string;

  (): TaskQueueStatisticsContext;
  get(): TaskQueueStatisticsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
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

  const instance = (() => instance.get()) as TaskQueueStatisticsListInstance;

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
