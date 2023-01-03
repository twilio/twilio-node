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
 *
 * @property { string } [taskChannel] The TaskChannel for which to fetch statistics. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 */
export interface TaskQueueRealTimeStatisticsContextFetchOptions {
  taskChannel?: string;
}

export interface TaskQueueRealTimeStatisticsContext {
  /**
   * Fetch a TaskQueueRealTimeStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskQueueRealTimeStatisticsInstance
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
   * @param { TaskQueueRealTimeStatisticsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskQueueRealTimeStatisticsInstance
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
  workspaceSid?: string;
  taskQueueSid?: string;
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
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: TaskQueueRealTimeStatisticsInstance
      ) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["taskChannel"] !== undefined)
      data["TaskChannel"] = params["taskChannel"];

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
        new TaskQueueRealTimeStatisticsInstance(
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

interface TaskQueueRealTimeStatisticsPayload
  extends TaskQueueRealTimeStatisticsResource {}

interface TaskQueueRealTimeStatisticsResource {
  account_sid?: string | null;
  activity_statistics?: Array<any> | null;
  longest_task_waiting_age?: number | null;
  longest_task_waiting_sid?: string | null;
  longest_relative_task_age_in_queue?: number | null;
  longest_relative_task_sid_in_queue?: string | null;
  task_queue_sid?: string | null;
  tasks_by_priority?: any | null;
  tasks_by_status?: any | null;
  total_available_workers?: number | null;
  total_eligible_workers?: number | null;
  total_tasks?: number | null;
  workspace_sid?: string | null;
  url?: string | null;
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
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The number of current Workers by Activity
   */
  activityStatistics?: Array<any> | null;
  /**
   * The age of the longest waiting Task
   */
  longestTaskWaitingAge?: number | null;
  /**
   * The SID of the longest waiting Task
   */
  longestTaskWaitingSid?: string | null;
  /**
   * The relative age in the TaskQueue for the longest waiting Task.
   */
  longestRelativeTaskAgeInQueue?: number | null;
  /**
   * The SID of the Task waiting in the TaskQueue the longest.
   */
  longestRelativeTaskSidInQueue?: string | null;
  /**
   * The SID of the TaskQueue from which these statistics were calculated
   */
  taskQueueSid?: string | null;
  /**
   * The number of Tasks by priority
   */
  tasksByPriority?: any | null;
  /**
   * The number of Tasks by their current status
   */
  tasksByStatus?: any | null;
  /**
   * The total number of Workers available for Tasks in the TaskQueue
   */
  totalAvailableWorkers?: number | null;
  /**
   * The total number of Workers eligible for Tasks in the TaskQueue, independent of their Activity state
   */
  totalEligibleWorkers?: number | null;
  /**
   * The total number of Tasks
   */
  totalTasks?: number | null;
  /**
   * The SID of the Workspace that contains the TaskQueue
   */
  workspaceSid?: string | null;
  /**
   * The absolute URL of the TaskQueue statistics resource
   */
  url?: string | null;

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
   * @param { TaskQueueRealTimeStatisticsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskQueueRealTimeStatisticsInstance
   */
  fetch(
    params?: TaskQueueRealTimeStatisticsContextFetchOptions,
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

export interface TaskQueueRealTimeStatisticsListInstance {
  (): TaskQueueRealTimeStatisticsContext;
  get(): TaskQueueRealTimeStatisticsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TaskQueueRealTimeStatisticsSolution {
  workspaceSid?: string;
  taskQueueSid?: string;
}

interface TaskQueueRealTimeStatisticsListInstanceImpl
  extends TaskQueueRealTimeStatisticsListInstance {}
class TaskQueueRealTimeStatisticsListInstanceImpl
  implements TaskQueueRealTimeStatisticsListInstance
{
  _version?: V1;
  _solution?: TaskQueueRealTimeStatisticsSolution;
  _uri?: string;
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
    instance.get()) as TaskQueueRealTimeStatisticsListInstanceImpl;

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
