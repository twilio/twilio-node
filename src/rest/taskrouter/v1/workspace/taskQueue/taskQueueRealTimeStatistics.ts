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
 * Options to pass to fetch a TaskQueueRealTimeStatisticsInstance
 */
export interface TaskQueueRealTimeStatisticsContextFetchOptions {
  /** The TaskChannel for which to fetch statistics. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`. */
  taskChannel?: string;
}

export interface TaskQueueRealTimeStatisticsContext {
  /**
   * Fetch a TaskQueueRealTimeStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskQueueRealTimeStatisticsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: TaskQueueRealTimeStatisticsInstance
    ) => any
  ): Promise<TaskQueueRealTimeStatisticsInstance>;
  /**
   * Fetch a TaskQueueRealTimeStatisticsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskQueueRealTimeStatisticsInstance
   */
  fetch(
    params: TaskQueueRealTimeStatisticsContextFetchOptions,
    callback?: (
      error: Error | null,
      item?: TaskQueueRealTimeStatisticsInstance
    ) => any
  ): Promise<TaskQueueRealTimeStatisticsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TaskQueueRealTimeStatisticsContextSolution {
  workspaceSid: string;
  taskQueueSid: string;
}

export class TaskQueueRealTimeStatisticsContextImpl
  implements TaskQueueRealTimeStatisticsContext
{
  protected _solution: TaskQueueRealTimeStatisticsContextSolution;
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
    this._uri = `/Workspaces/${workspaceSid}/TaskQueues/${taskQueueSid}/RealTimeStatistics`;
  }

  fetch(
    params?:
      | TaskQueueRealTimeStatisticsContextFetchOptions
      | ((
          error: Error | null,
          item?: TaskQueueRealTimeStatisticsInstance
        ) => any),
    callback?: (
      error: Error | null,
      item?: TaskQueueRealTimeStatisticsInstance
    ) => any
  ): Promise<TaskQueueRealTimeStatisticsInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["taskChannel"] !== undefined)
      data["TaskChannel"] = params["taskChannel"];

    const headers: any = {};
    headers["Accept"] = "application/json";

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
        new TaskQueueRealTimeStatisticsInstance(
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

interface TaskQueueRealTimeStatisticsPayload
  extends TaskQueueRealTimeStatisticsResource {}

interface TaskQueueRealTimeStatisticsResource {
  account_sid: string;
  activity_statistics: Array<Record<string, object>>;
  longest_task_waiting_age: number;
  longest_task_waiting_sid: string;
  longest_relative_task_age_in_queue: number;
  longest_relative_task_sid_in_queue: string;
  task_queue_sid: string;
  tasks_by_priority: Record<string, object>;
  tasks_by_status: Record<string, object>;
  total_available_workers: number;
  total_eligible_workers: number;
  total_tasks: number;
  workspace_sid: string;
  url: string;
}

export class TaskQueueRealTimeStatisticsInstance {
  protected _solution: TaskQueueRealTimeStatisticsContextSolution;
  protected _context?: TaskQueueRealTimeStatisticsContext;

  constructor(
    protected _version: V1,
    payload: TaskQueueRealTimeStatisticsResource,
    workspaceSid: string,
    taskQueueSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.activityStatistics = payload.activity_statistics;
    this.longestTaskWaitingAge = deserialize.integer(
      payload.longest_task_waiting_age
    );
    this.longestTaskWaitingSid = payload.longest_task_waiting_sid;
    this.longestRelativeTaskAgeInQueue = deserialize.integer(
      payload.longest_relative_task_age_in_queue
    );
    this.longestRelativeTaskSidInQueue =
      payload.longest_relative_task_sid_in_queue;
    this.taskQueueSid = payload.task_queue_sid;
    this.tasksByPriority = payload.tasks_by_priority;
    this.tasksByStatus = payload.tasks_by_status;
    this.totalAvailableWorkers = deserialize.integer(
      payload.total_available_workers
    );
    this.totalEligibleWorkers = deserialize.integer(
      payload.total_eligible_workers
    );
    this.totalTasks = deserialize.integer(payload.total_tasks);
    this.workspaceSid = payload.workspace_sid;
    this.url = payload.url;

    this._solution = { workspaceSid, taskQueueSid };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskQueue resource.
   */
  accountSid: string;
  /**
   * The number of current Workers by Activity.
   */
  activityStatistics: Array<Record<string, object>>;
  /**
   * The age of the longest waiting Task.
   */
  longestTaskWaitingAge: number;
  /**
   * The SID of the longest waiting Task.
   */
  longestTaskWaitingSid: string;
  /**
   * The relative age in the TaskQueue for the longest waiting Task. Calculation is based on the time when the Task entered the TaskQueue.
   */
  longestRelativeTaskAgeInQueue: number;
  /**
   * The Task SID of the Task waiting in the TaskQueue the longest. Calculation is based on the time when the Task entered the TaskQueue.
   */
  longestRelativeTaskSidInQueue: string;
  /**
   * The SID of the TaskQueue from which these statistics were calculated.
   */
  taskQueueSid: string;
  /**
   * The number of Tasks by priority. For example: `{\"0\": \"10\", \"99\": \"5\"}` shows 10 Tasks at priority 0 and 5 at priority 99.
   */
  tasksByPriority: Record<string, object>;
  /**
   * The number of Tasks by their current status. For example: `{\"pending\": \"1\", \"reserved\": \"3\", \"assigned\": \"2\", \"completed\": \"5\"}`.
   */
  tasksByStatus: Record<string, object>;
  /**
   * The total number of Workers in the TaskQueue with an `available` status. Workers with an `available` status may already have active interactions or may have none.
   */
  totalAvailableWorkers: number;
  /**
   * The total number of Workers eligible for Tasks in the TaskQueue, independent of their Activity state.
   */
  totalEligibleWorkers: number;
  /**
   * The total number of Tasks.
   */
  totalTasks: number;
  /**
   * The SID of the Workspace that contains the TaskQueue.
   */
  workspaceSid: string;
  /**
   * The absolute URL of the TaskQueue statistics resource.
   */
  url: string;

  private get _proxy(): TaskQueueRealTimeStatisticsContext {
    this._context =
      this._context ||
      new TaskQueueRealTimeStatisticsContextImpl(
        this._version,
        this._solution.workspaceSid,
        this._solution.taskQueueSid
      );
    return this._context;
  }

  /**
   * Fetch a TaskQueueRealTimeStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskQueueRealTimeStatisticsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: TaskQueueRealTimeStatisticsInstance
    ) => any
  ): Promise<TaskQueueRealTimeStatisticsInstance>;
  /**
   * Fetch a TaskQueueRealTimeStatisticsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskQueueRealTimeStatisticsInstance
   */
  fetch(
    params: TaskQueueRealTimeStatisticsContextFetchOptions,
    callback?: (
      error: Error | null,
      item?: TaskQueueRealTimeStatisticsInstance
    ) => any
  ): Promise<TaskQueueRealTimeStatisticsInstance>;

  fetch(
    params?: any,
    callback?: (
      error: Error | null,
      item?: TaskQueueRealTimeStatisticsInstance
    ) => any
  ): Promise<TaskQueueRealTimeStatisticsInstance> {
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
      activityStatistics: this.activityStatistics,
      longestTaskWaitingAge: this.longestTaskWaitingAge,
      longestTaskWaitingSid: this.longestTaskWaitingSid,
      longestRelativeTaskAgeInQueue: this.longestRelativeTaskAgeInQueue,
      longestRelativeTaskSidInQueue: this.longestRelativeTaskSidInQueue,
      taskQueueSid: this.taskQueueSid,
      tasksByPriority: this.tasksByPriority,
      tasksByStatus: this.tasksByStatus,
      totalAvailableWorkers: this.totalAvailableWorkers,
      totalEligibleWorkers: this.totalEligibleWorkers,
      totalTasks: this.totalTasks,
      workspaceSid: this.workspaceSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface TaskQueueRealTimeStatisticsSolution {
  workspaceSid: string;
  taskQueueSid: string;
}

export interface TaskQueueRealTimeStatisticsListInstance {
  _version: V1;
  _solution: TaskQueueRealTimeStatisticsSolution;
  _uri: string;

  (): TaskQueueRealTimeStatisticsContext;
  get(): TaskQueueRealTimeStatisticsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function TaskQueueRealTimeStatisticsListInstance(
  version: V1,
  workspaceSid: string,
  taskQueueSid: string
): TaskQueueRealTimeStatisticsListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  if (!isValidPathParam(taskQueueSid)) {
    throw new Error("Parameter 'taskQueueSid' is not valid.");
  }

  const instance = (() =>
    instance.get()) as TaskQueueRealTimeStatisticsListInstance;

  instance.get = function get(): TaskQueueRealTimeStatisticsContext {
    return new TaskQueueRealTimeStatisticsContextImpl(
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
