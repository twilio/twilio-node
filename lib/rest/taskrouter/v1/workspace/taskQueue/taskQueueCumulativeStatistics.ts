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
 * Options to pass to fetch a TaskQueueCumulativeStatisticsInstance
 *
 * @property { Date } [endDate] Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default is 15 minutes.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { string } [taskChannel] Only calculate cumulative statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 * @property { string } [splitByWaitTime] A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed. TaskRouter will calculate statistics on up to 10,000 Tasks/Reservations for any given threshold.
 */
export interface TaskQueueCumulativeStatisticsContextFetchOptions {
  endDate?: Date;
  minutes?: number;
  startDate?: Date;
  taskChannel?: string;
  splitByWaitTime?: string;
}

export interface TaskQueueCumulativeStatisticsContext {
  /**
   * Fetch a TaskQueueCumulativeStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskQueueCumulativeStatisticsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: TaskQueueCumulativeStatisticsInstance
    ) => any
  ): Promise<TaskQueueCumulativeStatisticsInstance>;
  /**
   * Fetch a TaskQueueCumulativeStatisticsInstance
   *
   * @param { TaskQueueCumulativeStatisticsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskQueueCumulativeStatisticsInstance
   */
  fetch(
    params?:
      | TaskQueueCumulativeStatisticsContextFetchOptions
      | ((
          error: Error | null,
          item?: TaskQueueCumulativeStatisticsInstance
        ) => any),
    callback?: (
      error: Error | null,
      item?: TaskQueueCumulativeStatisticsInstance
    ) => any
  ): Promise<TaskQueueCumulativeStatisticsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TaskQueueCumulativeStatisticsContextSolution {
  workspaceSid?: string;
  taskQueueSid?: string;
}

export class TaskQueueCumulativeStatisticsContextImpl
  implements TaskQueueCumulativeStatisticsContext
{
  protected _solution: TaskQueueCumulativeStatisticsContextSolution;
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
    this._uri = `/Workspaces/${workspaceSid}/TaskQueues/${taskQueueSid}/CumulativeStatistics`;
  }

  fetch(
    params?: any,
    callback?: any
  ): Promise<TaskQueueCumulativeStatisticsInstance> {
    if (typeof params === "function") {
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

    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TaskQueueCumulativeStatisticsInstance(
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

interface TaskQueueCumulativeStatisticsPayload
  extends TaskQueueCumulativeStatisticsResource {}

interface TaskQueueCumulativeStatisticsResource {
  account_sid?: string | null;
  avg_task_acceptance_time?: number | null;
  start_time?: Date | null;
  end_time?: Date | null;
  reservations_created?: number | null;
  reservations_accepted?: number | null;
  reservations_rejected?: number | null;
  reservations_timed_out?: number | null;
  reservations_canceled?: number | null;
  reservations_rescinded?: number | null;
  split_by_wait_time?: any | null;
  task_queue_sid?: string | null;
  wait_duration_until_accepted?: any | null;
  wait_duration_until_canceled?: any | null;
  wait_duration_in_queue_until_accepted?: any | null;
  tasks_canceled?: number | null;
  tasks_completed?: number | null;
  tasks_deleted?: number | null;
  tasks_entered?: number | null;
  tasks_moved?: number | null;
  workspace_sid?: string | null;
  url?: string | null;
}

export class TaskQueueCumulativeStatisticsInstance {
  protected _solution: TaskQueueCumulativeStatisticsContextSolution;
  protected _context?: TaskQueueCumulativeStatisticsContext;

  constructor(
    protected _version: V1,
    payload: TaskQueueCumulativeStatisticsResource,
    workspaceSid: string,
    taskQueueSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.avgTaskAcceptanceTime = deserialize.integer(
      payload.avg_task_acceptance_time
    );
    this.startTime = deserialize.iso8601DateTime(payload.start_time);
    this.endTime = deserialize.iso8601DateTime(payload.end_time);
    this.reservationsCreated = deserialize.integer(
      payload.reservations_created
    );
    this.reservationsAccepted = deserialize.integer(
      payload.reservations_accepted
    );
    this.reservationsRejected = deserialize.integer(
      payload.reservations_rejected
    );
    this.reservationsTimedOut = deserialize.integer(
      payload.reservations_timed_out
    );
    this.reservationsCanceled = deserialize.integer(
      payload.reservations_canceled
    );
    this.reservationsRescinded = deserialize.integer(
      payload.reservations_rescinded
    );
    this.splitByWaitTime = payload.split_by_wait_time;
    this.taskQueueSid = payload.task_queue_sid;
    this.waitDurationUntilAccepted = payload.wait_duration_until_accepted;
    this.waitDurationUntilCanceled = payload.wait_duration_until_canceled;
    this.waitDurationInQueueUntilAccepted =
      payload.wait_duration_in_queue_until_accepted;
    this.tasksCanceled = deserialize.integer(payload.tasks_canceled);
    this.tasksCompleted = deserialize.integer(payload.tasks_completed);
    this.tasksDeleted = deserialize.integer(payload.tasks_deleted);
    this.tasksEntered = deserialize.integer(payload.tasks_entered);
    this.tasksMoved = deserialize.integer(payload.tasks_moved);
    this.workspaceSid = payload.workspace_sid;
    this.url = payload.url;

    this._solution = { workspaceSid, taskQueueSid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The average time in seconds between Task creation and acceptance
   */
  avgTaskAcceptanceTime?: number | null;
  /**
   * The beginning of the interval during which these statistics were calculated
   */
  startTime?: Date | null;
  /**
   * The end of the interval during which these statistics were calculated
   */
  endTime?: Date | null;
  /**
   * The total number of Reservations created for Tasks in the TaskQueue
   */
  reservationsCreated?: number | null;
  /**
   * The total number of Reservations accepted for Tasks in the TaskQueue
   */
  reservationsAccepted?: number | null;
  /**
   * The total number of Reservations rejected for Tasks in the TaskQueue
   */
  reservationsRejected?: number | null;
  /**
   * The total number of Reservations that timed out for Tasks in the TaskQueue
   */
  reservationsTimedOut?: number | null;
  /**
   * The total number of Reservations canceled for Tasks in the TaskQueue
   */
  reservationsCanceled?: number | null;
  /**
   * The total number of Reservations rescinded
   */
  reservationsRescinded?: number | null;
  /**
   * A list of objects that describe the Tasks canceled and reservations accepted above and below the specified thresholds
   */
  splitByWaitTime?: any | null;
  /**
   * The SID of the TaskQueue from which these statistics were calculated
   */
  taskQueueSid?: string | null;
  /**
   * The wait duration statistics for Tasks accepted while in the TaskQueue
   */
  waitDurationUntilAccepted?: any | null;
  /**
   * The wait duration statistics for Tasks canceled while in the TaskQueue
   */
  waitDurationUntilCanceled?: any | null;
  /**
   * The relative wait duration statistics for Tasks accepted while in the TaskQueue
   */
  waitDurationInQueueUntilAccepted?: any | null;
  /**
   * The total number of Tasks canceled in the TaskQueue
   */
  tasksCanceled?: number | null;
  /**
   * The total number of Tasks completed in the TaskQueue
   */
  tasksCompleted?: number | null;
  /**
   * The total number of Tasks deleted in the TaskQueue
   */
  tasksDeleted?: number | null;
  /**
   * The total number of Tasks entered into the TaskQueue
   */
  tasksEntered?: number | null;
  /**
   * The total number of Tasks that were moved from one queue to another
   */
  tasksMoved?: number | null;
  /**
   * The SID of the Workspace that contains the TaskQueue
   */
  workspaceSid?: string | null;
  /**
   * The absolute URL of the TaskQueue statistics resource
   */
  url?: string | null;

  private get _proxy(): TaskQueueCumulativeStatisticsContext {
    this._context =
      this._context ||
      new TaskQueueCumulativeStatisticsContextImpl(
        this._version,
        this._solution.workspaceSid,
        this._solution.taskQueueSid
      );
    return this._context;
  }

  /**
   * Fetch a TaskQueueCumulativeStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskQueueCumulativeStatisticsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: TaskQueueCumulativeStatisticsInstance
    ) => any
  ): Promise<TaskQueueCumulativeStatisticsInstance>;
  /**
   * Fetch a TaskQueueCumulativeStatisticsInstance
   *
   * @param { TaskQueueCumulativeStatisticsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskQueueCumulativeStatisticsInstance
   */
  fetch(
    params?:
      | TaskQueueCumulativeStatisticsContextFetchOptions
      | ((
          error: Error | null,
          item?: TaskQueueCumulativeStatisticsInstance
        ) => any),
    callback?: (
      error: Error | null,
      item?: TaskQueueCumulativeStatisticsInstance
    ) => any
  ): Promise<TaskQueueCumulativeStatisticsInstance> {
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
      avgTaskAcceptanceTime: this.avgTaskAcceptanceTime,
      startTime: this.startTime,
      endTime: this.endTime,
      reservationsCreated: this.reservationsCreated,
      reservationsAccepted: this.reservationsAccepted,
      reservationsRejected: this.reservationsRejected,
      reservationsTimedOut: this.reservationsTimedOut,
      reservationsCanceled: this.reservationsCanceled,
      reservationsRescinded: this.reservationsRescinded,
      splitByWaitTime: this.splitByWaitTime,
      taskQueueSid: this.taskQueueSid,
      waitDurationUntilAccepted: this.waitDurationUntilAccepted,
      waitDurationUntilCanceled: this.waitDurationUntilCanceled,
      waitDurationInQueueUntilAccepted: this.waitDurationInQueueUntilAccepted,
      tasksCanceled: this.tasksCanceled,
      tasksCompleted: this.tasksCompleted,
      tasksDeleted: this.tasksDeleted,
      tasksEntered: this.tasksEntered,
      tasksMoved: this.tasksMoved,
      workspaceSid: this.workspaceSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface TaskQueueCumulativeStatisticsListInstance {
  (): TaskQueueCumulativeStatisticsContext;
  get(): TaskQueueCumulativeStatisticsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TaskQueueCumulativeStatisticsSolution {
  workspaceSid?: string;
  taskQueueSid?: string;
}

interface TaskQueueCumulativeStatisticsListInstanceImpl
  extends TaskQueueCumulativeStatisticsListInstance {}
class TaskQueueCumulativeStatisticsListInstanceImpl
  implements TaskQueueCumulativeStatisticsListInstance
{
  _version?: V1;
  _solution?: TaskQueueCumulativeStatisticsSolution;
  _uri?: string;
}

export function TaskQueueCumulativeStatisticsListInstance(
  version: V1,
  workspaceSid: string,
  taskQueueSid: string
): TaskQueueCumulativeStatisticsListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  if (!isValidPathParam(taskQueueSid)) {
    throw new Error("Parameter 'taskQueueSid' is not valid.");
  }

  const instance = (() =>
    instance.get()) as TaskQueueCumulativeStatisticsListInstanceImpl;

  instance.get = function get(): TaskQueueCumulativeStatisticsContext {
    return new TaskQueueCumulativeStatisticsContextImpl(
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
