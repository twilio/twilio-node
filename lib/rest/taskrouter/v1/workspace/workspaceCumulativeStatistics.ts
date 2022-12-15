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
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to fetch a WorkspaceCumulativeStatisticsInstance
 *
 * @property { Date } [endDate] Only include usage that occurred on or before this date, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { string } [taskChannel] Only calculate cumulative statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 * @property { string } [splitByWaitTime] A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed. For example, `5,30` would show splits of Tasks that were canceled or accepted before and after 5 seconds and before and after 30 seconds. This can be used to show short abandoned Tasks or Tasks that failed to meet an SLA. TaskRouter will calculate statistics on up to 10,000 Tasks for any given threshold.
 */
export interface WorkspaceCumulativeStatisticsContextFetchOptions {
  endDate?: Date;
  minutes?: number;
  startDate?: Date;
  taskChannel?: string;
  splitByWaitTime?: string;
}

export interface WorkspaceCumulativeStatisticsContext {
  /**
   * Fetch a WorkspaceCumulativeStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkspaceCumulativeStatisticsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: WorkspaceCumulativeStatisticsInstance
    ) => any
  ): Promise<WorkspaceCumulativeStatisticsInstance>;
  /**
   * Fetch a WorkspaceCumulativeStatisticsInstance
   *
   * @param { WorkspaceCumulativeStatisticsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkspaceCumulativeStatisticsInstance
   */
  fetch(
    params: WorkspaceCumulativeStatisticsContextFetchOptions,
    callback?: (
      error: Error | null,
      item?: WorkspaceCumulativeStatisticsInstance
    ) => any
  ): Promise<WorkspaceCumulativeStatisticsInstance>;
  fetch(
    params?: any,
    callback?: any
  ): Promise<WorkspaceCumulativeStatisticsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkspaceCumulativeStatisticsContextSolution {
  workspaceSid?: string;
}

export class WorkspaceCumulativeStatisticsContextImpl
  implements WorkspaceCumulativeStatisticsContext
{
  protected _solution: WorkspaceCumulativeStatisticsContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, workspaceSid: string) {
    if (!isValidPathParam(workspaceSid)) {
      throw new Error("Parameter 'workspaceSid' is not valid.");
    }

    this._solution = { workspaceSid };
    this._uri = `/Workspaces/${workspaceSid}/CumulativeStatistics`;
  }

  fetch(
    params?: any,
    callback?: any
  ): Promise<WorkspaceCumulativeStatisticsInstance> {
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
        new WorkspaceCumulativeStatisticsInstance(
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

interface WorkspaceCumulativeStatisticsPayload
  extends WorkspaceCumulativeStatisticsResource {}

interface WorkspaceCumulativeStatisticsResource {
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
  wait_duration_until_accepted?: any | null;
  wait_duration_until_canceled?: any | null;
  tasks_canceled?: number | null;
  tasks_completed?: number | null;
  tasks_created?: number | null;
  tasks_deleted?: number | null;
  tasks_moved?: number | null;
  tasks_timed_out_in_workflow?: number | null;
  workspace_sid?: string | null;
  url?: string | null;
}

export class WorkspaceCumulativeStatisticsInstance {
  protected _solution: WorkspaceCumulativeStatisticsContextSolution;
  protected _context?: WorkspaceCumulativeStatisticsContext;

  constructor(
    protected _version: V1,
    payload: WorkspaceCumulativeStatisticsResource,
    workspaceSid: string
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
    this.waitDurationUntilAccepted = payload.wait_duration_until_accepted;
    this.waitDurationUntilCanceled = payload.wait_duration_until_canceled;
    this.tasksCanceled = deserialize.integer(payload.tasks_canceled);
    this.tasksCompleted = deserialize.integer(payload.tasks_completed);
    this.tasksCreated = deserialize.integer(payload.tasks_created);
    this.tasksDeleted = deserialize.integer(payload.tasks_deleted);
    this.tasksMoved = deserialize.integer(payload.tasks_moved);
    this.tasksTimedOutInWorkflow = deserialize.integer(
      payload.tasks_timed_out_in_workflow
    );
    this.workspaceSid = payload.workspace_sid;
    this.url = payload.url;

    this._solution = { workspaceSid };
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
   * The total number of Reservations that were created for Workers
   */
  reservationsCreated?: number | null;
  /**
   * The total number of Reservations accepted by Workers
   */
  reservationsAccepted?: number | null;
  /**
   * The total number of Reservations that were rejected
   */
  reservationsRejected?: number | null;
  /**
   * The total number of Reservations that were timed out
   */
  reservationsTimedOut?: number | null;
  /**
   * The total number of Reservations that were canceled
   */
  reservationsCanceled?: number | null;
  /**
   * The total number of Reservations that were rescinded
   */
  reservationsRescinded?: number | null;
  /**
   * A list of objects that describe the Tasks canceled and reservations accepted above and below the specified thresholds
   */
  splitByWaitTime?: any | null;
  /**
   * The wait duration statistics for Tasks that were accepted
   */
  waitDurationUntilAccepted?: any | null;
  /**
   * The wait duration statistics for Tasks that were canceled
   */
  waitDurationUntilCanceled?: any | null;
  /**
   * The total number of Tasks that were canceled
   */
  tasksCanceled?: number | null;
  /**
   * The total number of Tasks that were completed
   */
  tasksCompleted?: number | null;
  /**
   * The total number of Tasks created
   */
  tasksCreated?: number | null;
  /**
   * The total number of Tasks that were deleted
   */
  tasksDeleted?: number | null;
  /**
   * The total number of Tasks that were moved from one queue to another
   */
  tasksMoved?: number | null;
  /**
   * The total number of Tasks that were timed out of their Workflows
   */
  tasksTimedOutInWorkflow?: number | null;
  /**
   * The SID of the Workspace
   */
  workspaceSid?: string | null;
  /**
   * The absolute URL of the Workspace statistics resource
   */
  url?: string | null;

  private get _proxy(): WorkspaceCumulativeStatisticsContext {
    this._context =
      this._context ||
      new WorkspaceCumulativeStatisticsContextImpl(
        this._version,
        this._solution.workspaceSid
      );
    return this._context;
  }

  /**
   * Fetch a WorkspaceCumulativeStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkspaceCumulativeStatisticsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: WorkspaceCumulativeStatisticsInstance
    ) => any
  ): Promise<WorkspaceCumulativeStatisticsInstance>;
  /**
   * Fetch a WorkspaceCumulativeStatisticsInstance
   *
   * @param { WorkspaceCumulativeStatisticsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkspaceCumulativeStatisticsInstance
   */
  fetch(
    params: WorkspaceCumulativeStatisticsContextFetchOptions,
    callback?: (
      error: Error | null,
      item?: WorkspaceCumulativeStatisticsInstance
    ) => any
  ): Promise<WorkspaceCumulativeStatisticsInstance>;
  fetch(
    params?: any,
    callback?: any
  ): Promise<WorkspaceCumulativeStatisticsInstance> {
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
      waitDurationUntilAccepted: this.waitDurationUntilAccepted,
      waitDurationUntilCanceled: this.waitDurationUntilCanceled,
      tasksCanceled: this.tasksCanceled,
      tasksCompleted: this.tasksCompleted,
      tasksCreated: this.tasksCreated,
      tasksDeleted: this.tasksDeleted,
      tasksMoved: this.tasksMoved,
      tasksTimedOutInWorkflow: this.tasksTimedOutInWorkflow,
      workspaceSid: this.workspaceSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface WorkspaceCumulativeStatisticsListInstance {
  (): WorkspaceCumulativeStatisticsContext;
  get(): WorkspaceCumulativeStatisticsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkspaceCumulativeStatisticsSolution {
  workspaceSid?: string;
}

interface WorkspaceCumulativeStatisticsListInstanceImpl
  extends WorkspaceCumulativeStatisticsListInstance {}
class WorkspaceCumulativeStatisticsListInstanceImpl
  implements WorkspaceCumulativeStatisticsListInstance
{
  _version?: V1;
  _solution?: WorkspaceCumulativeStatisticsSolution;
  _uri?: string;
}

export function WorkspaceCumulativeStatisticsListInstance(
  version: V1,
  workspaceSid: string
): WorkspaceCumulativeStatisticsListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  const instance = (() =>
    instance.get()) as WorkspaceCumulativeStatisticsListInstanceImpl;

  instance.get = function get(): WorkspaceCumulativeStatisticsContext {
    return new WorkspaceCumulativeStatisticsContextImpl(version, workspaceSid);
  };

  instance._version = version;
  instance._solution = { workspaceSid };
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
