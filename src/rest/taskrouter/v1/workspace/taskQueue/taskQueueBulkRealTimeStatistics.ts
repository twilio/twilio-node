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
 * Options to pass to create a TaskQueueBulkRealTimeStatisticsInstance
 */
export interface TaskQueueBulkRealTimeStatisticsListInstanceCreateOptions {
  /**  */
  body?: object;
}

export interface TaskQueueBulkRealTimeStatisticsSolution {
  workspaceSid: string;
}

export interface TaskQueueBulkRealTimeStatisticsListInstance {
  _version: V1;
  _solution: TaskQueueBulkRealTimeStatisticsSolution;
  _uri: string;

  /**
   * Create a TaskQueueBulkRealTimeStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskQueueBulkRealTimeStatisticsInstance
   */
  create(
    callback?: (
      error: Error | null,
      item?: TaskQueueBulkRealTimeStatisticsInstance
    ) => any
  ): Promise<TaskQueueBulkRealTimeStatisticsInstance>;
  /**
   * Create a TaskQueueBulkRealTimeStatisticsInstance
   *
   * @param params - Body for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskQueueBulkRealTimeStatisticsInstance
   */
  create(
    params: object,
    callback?: (
      error: Error | null,
      item?: TaskQueueBulkRealTimeStatisticsInstance
    ) => any
  ): Promise<TaskQueueBulkRealTimeStatisticsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function TaskQueueBulkRealTimeStatisticsListInstance(
  version: V1,
  workspaceSid: string
): TaskQueueBulkRealTimeStatisticsListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  const instance = {} as TaskQueueBulkRealTimeStatisticsListInstance;

  instance._version = version;
  instance._solution = { workspaceSid };
  instance._uri = `/Workspaces/${workspaceSid}/TaskQueues/RealTimeStatistics`;

  instance.create = function create(
    params?:
      | object
      | ((
          error: Error | null,
          items: TaskQueueBulkRealTimeStatisticsInstance
        ) => any),
    callback?: (
      error: Error | null,
      items: TaskQueueBulkRealTimeStatisticsInstance
    ) => any
  ): Promise<TaskQueueBulkRealTimeStatisticsInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    data = params;

    const headers: any = {};
    headers["Content-Type"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TaskQueueBulkRealTimeStatisticsInstance(
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

interface TaskQueueBulkRealTimeStatisticsPayload
  extends TaskQueueBulkRealTimeStatisticsResource {}

interface TaskQueueBulkRealTimeStatisticsResource {
  account_sid: string;
  workspace_sid: string;
  task_queue_data: Array<any>;
  task_queue_response_count: number;
  url: string;
}

export class TaskQueueBulkRealTimeStatisticsInstance {
  constructor(
    protected _version: V1,
    payload: TaskQueueBulkRealTimeStatisticsResource,
    workspaceSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.workspaceSid = payload.workspace_sid;
    this.taskQueueData = payload.task_queue_data;
    this.taskQueueResponseCount = deserialize.integer(
      payload.task_queue_response_count
    );
    this.url = payload.url;
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskQueue resource.
   */
  accountSid: string;
  /**
   * The SID of the Workspace that contains the TaskQueue.
   */
  workspaceSid: string;
  /**
   * The real-time statistics for each requested TaskQueue SID. `task_queue_data` returns the following attributes:  `task_queue_sid`: The SID of the TaskQueue from which these statistics were calculated.  `total_available_workers`: The total number of Workers available for Tasks in the TaskQueue.  `total_eligible_workers`: The total number of Workers eligible for Tasks in the TaskQueue, regardless of their Activity state.  `total_tasks`: The total number of Tasks.  `longest_task_waiting_age`: The age of the longest waiting Task.  `longest_task_waiting_sid`: The SID of the longest waiting Task.  `tasks_by_status`: The number of Tasks grouped by their current status.  `tasks_by_priority`: The number of Tasks grouped by priority.  `activity_statistics`: The number of current Workers grouped by Activity.
   */
  taskQueueData: Array<any>;
  /**
   * The number of TaskQueue statistics received in task_queue_data.
   */
  taskQueueResponseCount: number;
  /**
   * The absolute URL of the TaskQueue statistics resource.
   */
  url: string;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      workspaceSid: this.workspaceSid,
      taskQueueData: this.taskQueueData,
      taskQueueResponseCount: this.taskQueueResponseCount,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}