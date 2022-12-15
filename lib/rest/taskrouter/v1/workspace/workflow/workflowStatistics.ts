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
 * Options to pass to fetch a WorkflowStatisticsInstance
 *
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { Date } [endDate] Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { string } [taskChannel] Only calculate real-time statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 * @property { string } [splitByWaitTime] A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed. For example, `5,30` would show splits of Tasks that were canceled or accepted before and after 5 seconds and before and after 30 seconds. This can be used to show short abandoned Tasks or Tasks that failed to meet an SLA.
 */
export interface WorkflowStatisticsContextFetchOptions {
  minutes?: number;
  startDate?: Date;
  endDate?: Date;
  taskChannel?: string;
  splitByWaitTime?: string;
}

export interface WorkflowStatisticsContext {
  /**
   * Fetch a WorkflowStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkflowStatisticsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WorkflowStatisticsInstance) => any
  ): Promise<WorkflowStatisticsInstance>;
  /**
   * Fetch a WorkflowStatisticsInstance
   *
   * @param { WorkflowStatisticsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkflowStatisticsInstance
   */
  fetch(
    params: WorkflowStatisticsContextFetchOptions,
    callback?: (error: Error | null, item?: WorkflowStatisticsInstance) => any
  ): Promise<WorkflowStatisticsInstance>;
  fetch(params?: any, callback?: any): Promise<WorkflowStatisticsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkflowStatisticsContextSolution {
  workspaceSid?: string;
  workflowSid?: string;
}

export class WorkflowStatisticsContextImpl
  implements WorkflowStatisticsContext
{
  protected _solution: WorkflowStatisticsContextSolution;
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
    this._uri = `/Workspaces/${workspaceSid}/Workflows/${workflowSid}/Statistics`;
  }

  fetch(params?: any, callback?: any): Promise<WorkflowStatisticsInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["minutes"] !== undefined) data["Minutes"] = params["minutes"];
    if (params["startDate"] !== undefined)
      data["StartDate"] = serialize.iso8601DateTime(params["startDate"]);
    if (params["endDate"] !== undefined)
      data["EndDate"] = serialize.iso8601DateTime(params["endDate"]);
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
        new WorkflowStatisticsInstance(
          operationVersion,
          payload,
          this._solution.workspaceSid,
          this._solution.workflowSid
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

interface WorkflowStatisticsPayload extends WorkflowStatisticsResource {}

interface WorkflowStatisticsResource {
  account_sid?: string | null;
  cumulative?: any | null;
  realtime?: any | null;
  workflow_sid?: string | null;
  workspace_sid?: string | null;
  url?: string | null;
}

export class WorkflowStatisticsInstance {
  protected _solution: WorkflowStatisticsContextSolution;
  protected _context?: WorkflowStatisticsContext;

  constructor(
    protected _version: V1,
    payload: WorkflowStatisticsResource,
    workspaceSid: string,
    workflowSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.cumulative = payload.cumulative;
    this.realtime = payload.realtime;
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
   * An object that contains the cumulative statistics for the Workflow
   */
  cumulative?: any | null;
  /**
   * An object that contains the real-time statistics for the Workflow
   */
  realtime?: any | null;
  /**
   * Returns the list of Tasks that are being controlled by the Workflow with the specified SID value
   */
  workflowSid?: string | null;
  /**
   * The SID of the Workspace that contains the Workflow
   */
  workspaceSid?: string | null;
  /**
   * The absolute URL of the Workflow statistics resource
   */
  url?: string | null;

  private get _proxy(): WorkflowStatisticsContext {
    this._context =
      this._context ||
      new WorkflowStatisticsContextImpl(
        this._version,
        this._solution.workspaceSid,
        this._solution.workflowSid
      );
    return this._context;
  }

  /**
   * Fetch a WorkflowStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkflowStatisticsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WorkflowStatisticsInstance) => any
  ): Promise<WorkflowStatisticsInstance>;
  /**
   * Fetch a WorkflowStatisticsInstance
   *
   * @param { WorkflowStatisticsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkflowStatisticsInstance
   */
  fetch(
    params: WorkflowStatisticsContextFetchOptions,
    callback?: (error: Error | null, item?: WorkflowStatisticsInstance) => any
  ): Promise<WorkflowStatisticsInstance>;
  fetch(params?: any, callback?: any): Promise<WorkflowStatisticsInstance> {
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
      workflowSid: this.workflowSid,
      workspaceSid: this.workspaceSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface WorkflowStatisticsListInstance {
  (): WorkflowStatisticsContext;
  get(): WorkflowStatisticsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkflowStatisticsSolution {
  workspaceSid?: string;
  workflowSid?: string;
}

interface WorkflowStatisticsListInstanceImpl
  extends WorkflowStatisticsListInstance {}
class WorkflowStatisticsListInstanceImpl
  implements WorkflowStatisticsListInstance
{
  _version?: V1;
  _solution?: WorkflowStatisticsSolution;
  _uri?: string;
}

export function WorkflowStatisticsListInstance(
  version: V1,
  workspaceSid: string,
  workflowSid: string
): WorkflowStatisticsListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  if (!isValidPathParam(workflowSid)) {
    throw new Error("Parameter 'workflowSid' is not valid.");
  }

  const instance = (() => instance.get()) as WorkflowStatisticsListInstanceImpl;

  instance.get = function get(): WorkflowStatisticsContext {
    return new WorkflowStatisticsContextImpl(
      version,
      workspaceSid,
      workflowSid
    );
  };

  instance._version = version;
  instance._solution = { workspaceSid, workflowSid };
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
