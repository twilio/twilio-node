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
 */
export interface TaskQueueCumulativeStatisticsContextFetchOptions {
  /** Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time. */
  endDate?: Date;
  /** Only calculate statistics since this many minutes in the past. The default is 15 minutes. */
  minutes?: number;
  /** Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
  startDate?: Date;
  /** Only calculate cumulative statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`. */
  taskChannel?: string;
  /** A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed. TaskRouter will calculate statistics on up to 10,000 Tasks/Reservations for any given threshold. */
  splitByWaitTime?: string;
}

export interface TaskQueueCumulativeStatisticsContext {
  /**
   * Fetch a TaskQueueCumulativeStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskQueueCumulativeStatisticsInstance
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
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskQueueCumulativeStatisticsInstance
   */
  fetch(
    params: TaskQueueCumulativeStatisticsContextFetchOptions,
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
  workspaceSid: string;
  taskQueueSid: string;
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

  async fetch(
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
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    try {
      let payload = await operationPromise;
      let operation = new TaskQueueCumulativeStatisticsInstance(
        operationVersion,
        payload,
        instance._solution.workspaceSid,
        instance._solution.taskQueueSid
      );

      if (callback) {
        callback(null, operation);
      }

      return operation;
    } catch (err: any) {
      if (callback) {
        callback(err);
      }
      throw err;
    }
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
  account_sid: string;
  avg_task_acceptance_time: number;
  start_time: Date;
  end_time: Date;
  reservations_created: number;
  reservations_accepted: number;
  reservations_rejected: number;
  reservations_timed_out: number;
  reservations_canceled: number;
  reservations_rescinded: number;
  split_by_wait_time: any;
  task_queue_sid: string;
  wait_duration_until_accepted: any;
  wait_duration_until_canceled: any;
  wait_duration_in_queue_until_accepted: any;
  tasks_canceled: number;
  tasks_completed: number;
  tasks_deleted: number;
  tasks_entered: number;
  tasks_moved: number;
  workspace_sid: string;
  url: string;
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
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskQueue resource.
   */
  accountSid: string;
  /**
   * The average time in seconds between Task creation and acceptance.
   */
  avgTaskAcceptanceTime: number;
  /**
   * The beginning of the interval during which these statistics were calculated, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  startTime: Date;
  /**
   * The end of the interval during which these statistics were calculated, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  endTime: Date;
  /**
   * The total number of Reservations created for Tasks in the TaskQueue.
   */
  reservationsCreated: number;
  /**
   * The total number of Reservations accepted for Tasks in the TaskQueue.
   */
  reservationsAccepted: number;
  /**
   * The total number of Reservations rejected for Tasks in the TaskQueue.
   */
  reservationsRejected: number;
  /**
   * The total number of Reservations that timed out for Tasks in the TaskQueue.
   */
  reservationsTimedOut: number;
  /**
   * The total number of Reservations canceled for Tasks in the TaskQueue.
   */
  reservationsCanceled: number;
  /**
   * The total number of Reservations rescinded.
   */
  reservationsRescinded: number;
  /**
   * A list of objects that describe the number of Tasks canceled and reservations accepted above and below the thresholds specified in seconds.
   */
  splitByWaitTime: any;
  /**
   * The SID of the TaskQueue from which these statistics were calculated.
   */
  taskQueueSid: string;
  /**
   * The wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks accepted while in the TaskQueue. Calculation is based on the time when the Tasks were created. For transfers, the wait duration is counted from the moment ***the Task was created***, and not from when the transfer was initiated.
   */
  waitDurationUntilAccepted: any;
  /**
   * The wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks canceled while in the TaskQueue.
   */
  waitDurationUntilCanceled: any;
  /**
   * The relative wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks accepted while in the TaskQueue. Calculation is based on the time when the Tasks entered the TaskQueue.
   */
  waitDurationInQueueUntilAccepted: any;
  /**
   * The total number of Tasks canceled in the TaskQueue.
   */
  tasksCanceled: number;
  /**
   * The total number of Tasks completed in the TaskQueue.
   */
  tasksCompleted: number;
  /**
   * The total number of Tasks deleted in the TaskQueue.
   */
  tasksDeleted: number;
  /**
   * The total number of Tasks entered into the TaskQueue.
   */
  tasksEntered: number;
  /**
   * The total number of Tasks that were moved from one queue to another.
   */
  tasksMoved: number;
  /**
   * The SID of the Workspace that contains the TaskQueue.
   */
  workspaceSid: string;
  /**
   * The absolute URL of the TaskQueue statistics resource.
   */
  url: string;

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
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskQueueCumulativeStatisticsInstance
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
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskQueueCumulativeStatisticsInstance
   */
  fetch(
    params: TaskQueueCumulativeStatisticsContextFetchOptions,
    callback?: (
      error: Error | null,
      item?: TaskQueueCumulativeStatisticsInstance
    ) => any
  ): Promise<TaskQueueCumulativeStatisticsInstance>;

  fetch(
    params?: any,
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

export interface TaskQueueCumulativeStatisticsSolution {
  workspaceSid: string;
  taskQueueSid: string;
}

export interface TaskQueueCumulativeStatisticsListInstance {
  _version: V1;
  _solution: TaskQueueCumulativeStatisticsSolution;
  _uri: string;

  (): TaskQueueCumulativeStatisticsContext;
  get(): TaskQueueCumulativeStatisticsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
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
    instance.get()) as TaskQueueCumulativeStatisticsListInstance;

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
