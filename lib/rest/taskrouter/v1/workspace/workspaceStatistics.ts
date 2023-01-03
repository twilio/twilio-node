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
 * Options to pass to fetch a WorkspaceStatisticsInstance
 *
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { Date } [endDate] Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { string } [taskChannel] Only calculate statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 * @property { string } [splitByWaitTime] A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed. For example, `5,30` would show splits of Tasks that were canceled or accepted before and after 5 seconds and before and after 30 seconds. This can be used to show short abandoned Tasks or Tasks that failed to meet an SLA.
 */
export interface WorkspaceStatisticsContextFetchOptions {
  minutes?: number;
  startDate?: Date;
  endDate?: Date;
  taskChannel?: string;
  splitByWaitTime?: string;
}

export interface WorkspaceStatisticsContext {
  /**
   * Fetch a WorkspaceStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkspaceStatisticsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WorkspaceStatisticsInstance) => any
  ): Promise<WorkspaceStatisticsInstance>;
  /**
   * Fetch a WorkspaceStatisticsInstance
   *
   * @param { WorkspaceStatisticsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkspaceStatisticsInstance
   */
  fetch(
    params: WorkspaceStatisticsContextFetchOptions,
    callback?: (error: Error | null, item?: WorkspaceStatisticsInstance) => any
  ): Promise<WorkspaceStatisticsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkspaceStatisticsContextSolution {
  workspaceSid?: string;
}

export class WorkspaceStatisticsContextImpl
  implements WorkspaceStatisticsContext
{
  protected _solution: WorkspaceStatisticsContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, workspaceSid: string) {
    if (!isValidPathParam(workspaceSid)) {
      throw new Error("Parameter 'workspaceSid' is not valid.");
    }

    this._solution = { workspaceSid };
    this._uri = `/Workspaces/${workspaceSid}/Statistics`;
  }

  fetch(
    params?:
      | WorkspaceStatisticsContextFetchOptions
      | ((error: Error | null, item?: WorkspaceStatisticsInstance) => any),
    callback?: (error: Error | null, item?: WorkspaceStatisticsInstance) => any
  ): Promise<WorkspaceStatisticsInstance> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: WorkspaceStatisticsInstance
      ) => any;
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
        new WorkspaceStatisticsInstance(
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

interface WorkspaceStatisticsPayload extends WorkspaceStatisticsResource {}

interface WorkspaceStatisticsResource {
  realtime?: any | null;
  cumulative?: any | null;
  account_sid?: string | null;
  workspace_sid?: string | null;
  url?: string | null;
}

export class WorkspaceStatisticsInstance {
  protected _solution: WorkspaceStatisticsContextSolution;
  protected _context?: WorkspaceStatisticsContext;

  constructor(
    protected _version: V1,
    payload: WorkspaceStatisticsResource,
    workspaceSid: string
  ) {
    this.realtime = payload.realtime;
    this.cumulative = payload.cumulative;
    this.accountSid = payload.account_sid;
    this.workspaceSid = payload.workspace_sid;
    this.url = payload.url;

    this._solution = { workspaceSid };
  }

  /**
   * n object that contains the real-time statistics for the Workspace
   */
  realtime?: any | null;
  /**
   * An object that contains the cumulative statistics for the Workspace
   */
  cumulative?: any | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Workspace
   */
  workspaceSid?: string | null;
  /**
   * The absolute URL of the Workspace statistics resource
   */
  url?: string | null;

  private get _proxy(): WorkspaceStatisticsContext {
    this._context =
      this._context ||
      new WorkspaceStatisticsContextImpl(
        this._version,
        this._solution.workspaceSid
      );
    return this._context;
  }

  /**
   * Fetch a WorkspaceStatisticsInstance
   *
   * @param { WorkspaceStatisticsContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkspaceStatisticsInstance
   */
  fetch(
    params?: WorkspaceStatisticsContextFetchOptions,
    callback?: (error: Error | null, item?: WorkspaceStatisticsInstance) => any
  ): Promise<WorkspaceStatisticsInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      realtime: this.realtime,
      cumulative: this.cumulative,
      accountSid: this.accountSid,
      workspaceSid: this.workspaceSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface WorkspaceStatisticsListInstance {
  (): WorkspaceStatisticsContext;
  get(): WorkspaceStatisticsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkspaceStatisticsSolution {
  workspaceSid?: string;
}

interface WorkspaceStatisticsListInstanceImpl
  extends WorkspaceStatisticsListInstance {}
class WorkspaceStatisticsListInstanceImpl
  implements WorkspaceStatisticsListInstance
{
  _version?: V1;
  _solution?: WorkspaceStatisticsSolution;
  _uri?: string;
}

export function WorkspaceStatisticsListInstance(
  version: V1,
  workspaceSid: string
): WorkspaceStatisticsListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  const instance = (() =>
    instance.get()) as WorkspaceStatisticsListInstanceImpl;

  instance.get = function get(): WorkspaceStatisticsContext {
    return new WorkspaceStatisticsContextImpl(version, workspaceSid);
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
