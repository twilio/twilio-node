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
 * Options to pass to fetch a WorkflowRealTimeStatisticsInstance
 *
 * @property { string } [taskChannel] Only calculate real-time statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 */
export interface WorkflowRealTimeStatisticsContextFetchOptions {
  taskChannel?: string;
}

export interface WorkflowRealTimeStatisticsContext {
  /**
   * Fetch a WorkflowRealTimeStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkflowRealTimeStatisticsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: WorkflowRealTimeStatisticsInstance
    ) => any
  ): Promise<WorkflowRealTimeStatisticsInstance>;
  /**
   * Fetch a WorkflowRealTimeStatisticsInstance
   *
   * @param { WorkflowRealTimeStatisticsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkflowRealTimeStatisticsInstance
   */
  fetch(
    params: WorkflowRealTimeStatisticsContextFetchOptions,
    callback?: (
      error: Error | null,
      item?: WorkflowRealTimeStatisticsInstance
    ) => any
  ): Promise<WorkflowRealTimeStatisticsInstance>;
  fetch(
    params?: any,
    callback?: any
  ): Promise<WorkflowRealTimeStatisticsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkflowRealTimeStatisticsContextSolution {
  workspaceSid: string;
  workflowSid: string;
}

export class WorkflowRealTimeStatisticsContextImpl
  implements WorkflowRealTimeStatisticsContext
{
  protected _solution: WorkflowRealTimeStatisticsContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    workspaceSid: string,
    workflowSid: string
  ) {
    if (!isValidPathParam(workspaceSid)) {
      throw new Error("Parameter 'workspaceSid' is not valid.");
    }

    if (!isValidPathParam(workflowSid)) {
      throw new Error("Parameter 'workflowSid' is not valid.");
    }

    this._solution = { workspaceSid, workflowSid };
    this._uri = `/Workspaces/${workspaceSid}/Workflows/${workflowSid}/RealTimeStatistics`;
  }

  fetch(
    params?: any,
    callback?: any
  ): Promise<WorkflowRealTimeStatisticsInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["taskChannel"] !== undefined)
      data["TaskChannel"] = params["taskChannel"];

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
        new WorkflowRealTimeStatisticsInstance(
          operationVersion,
          payload,
          instance._solution.workspaceSid,
          instance._solution.workflowSid
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

interface WorkflowRealTimeStatisticsPayload
  extends WorkflowRealTimeStatisticsResource {}

interface WorkflowRealTimeStatisticsResource {
  account_sid?: string | null;
  longest_task_waiting_age?: number | null;
  longest_task_waiting_sid?: string | null;
  tasks_by_priority?: any | null;
  tasks_by_status?: any | null;
  total_tasks?: number | null;
  workflow_sid?: string | null;
  workspace_sid?: string | null;
  url?: string | null;
}

export class WorkflowRealTimeStatisticsInstance {
  protected _solution: WorkflowRealTimeStatisticsContextSolution;
  protected _context?: WorkflowRealTimeStatisticsContext;

  constructor(
    protected _version: V1,
    payload: WorkflowRealTimeStatisticsResource,
    workspaceSid: string,
    workflowSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.longestTaskWaitingAge = deserialize.integer(
      payload.longest_task_waiting_age
    );
    this.longestTaskWaitingSid = payload.longest_task_waiting_sid;
    this.tasksByPriority = payload.tasks_by_priority;
    this.tasksByStatus = payload.tasks_by_status;
    this.totalTasks = deserialize.integer(payload.total_tasks);
    this.workflowSid = payload.workflow_sid;
    this.workspaceSid = payload.workspace_sid;
    this.url = payload.url;

    this._solution = { workspaceSid, workflowSid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The age of the longest waiting Task
   */
  longestTaskWaitingAge?: number | null;
  /**
   * The SID of the longest waiting Task
   */
  longestTaskWaitingSid?: string | null;
  /**
   * The number of Tasks by priority
   */
  tasksByPriority?: any | null;
  /**
   * The number of Tasks by their current status
   */
  tasksByStatus?: any | null;
  /**
   * The total number of Tasks
   */
  totalTasks?: number | null;
  /**
   * Returns the list of Tasks that are being controlled by the Workflow with the specified SID value
   */
  workflowSid?: string | null;
  /**
   * The SID of the Workspace that contains the Workflow.
   */
  workspaceSid?: string | null;
  /**
   * The absolute URL of the Workflow statistics resource
   */
  url?: string | null;

  private get _proxy(): WorkflowRealTimeStatisticsContext {
    this._context =
      this._context ||
      new WorkflowRealTimeStatisticsContextImpl(
        this._version,
        this._solution.workspaceSid,
        this._solution.workflowSid
      );
    return this._context;
  }

  /**
   * Fetch a WorkflowRealTimeStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkflowRealTimeStatisticsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: WorkflowRealTimeStatisticsInstance
    ) => any
  ): Promise<WorkflowRealTimeStatisticsInstance>;
  /**
   * Fetch a WorkflowRealTimeStatisticsInstance
   *
   * @param { WorkflowRealTimeStatisticsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkflowRealTimeStatisticsInstance
   */
  fetch(
    params: WorkflowRealTimeStatisticsContextFetchOptions,
    callback?: (
      error: Error | null,
      item?: WorkflowRealTimeStatisticsInstance
    ) => any
  ): Promise<WorkflowRealTimeStatisticsInstance>;
  fetch(
    params?: any,
    callback?: any
  ): Promise<WorkflowRealTimeStatisticsInstance> {
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
      longestTaskWaitingAge: this.longestTaskWaitingAge,
      longestTaskWaitingSid: this.longestTaskWaitingSid,
      tasksByPriority: this.tasksByPriority,
      tasksByStatus: this.tasksByStatus,
      totalTasks: this.totalTasks,
      workflowSid: this.workflowSid,
      workspaceSid: this.workspaceSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface WorkflowRealTimeStatisticsSolution {
  workspaceSid?: string;
  workflowSid?: string;
}

export interface WorkflowRealTimeStatisticsListInstance {
  _version: V1;
  _solution: WorkflowRealTimeStatisticsSolution;
  _uri: string;

  (): WorkflowRealTimeStatisticsContext;
  get(): WorkflowRealTimeStatisticsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function WorkflowRealTimeStatisticsListInstance(
  version: V1,
  workspaceSid: string,
  workflowSid: string
): WorkflowRealTimeStatisticsListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  if (!isValidPathParam(workflowSid)) {
    throw new Error("Parameter 'workflowSid' is not valid.");
  }

  const instance = (() =>
    instance.get()) as WorkflowRealTimeStatisticsListInstance;

  instance.get = function get(): WorkflowRealTimeStatisticsContext {
    return new WorkflowRealTimeStatisticsContextImpl(
      version,
      workspaceSid,
      workflowSid
    );
  };

  instance._version = version;
  instance._solution = { workspaceSid, workflowSid };
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
