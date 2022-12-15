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
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * Options to pass to each
 *
 * @property { Date } [endDate] Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { string } [friendlyName] The `friendly_name` of the TaskQueue statistics to read.
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default is 15 minutes.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { string } [taskChannel] Only calculate statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 * @property { string } [splitByWaitTime] A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface TaskQueuesStatisticsListInstanceEachOptions {
  endDate?: Date;
  friendlyName?: string;
  minutes?: number;
  startDate?: Date;
  taskChannel?: string;
  splitByWaitTime?: string;
  pageSize?: number;
  callback?: (
    item: TaskQueuesStatisticsInstance,
    done: (err?: Error) => void
  ) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { Date } [endDate] Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { string } [friendlyName] The `friendly_name` of the TaskQueue statistics to read.
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default is 15 minutes.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { string } [taskChannel] Only calculate statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 * @property { string } [splitByWaitTime] A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface TaskQueuesStatisticsListInstanceOptions {
  endDate?: Date;
  friendlyName?: string;
  minutes?: number;
  startDate?: Date;
  taskChannel?: string;
  splitByWaitTime?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { Date } [endDate] Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { string } [friendlyName] The `friendly_name` of the TaskQueue statistics to read.
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default is 15 minutes.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { string } [taskChannel] Only calculate statistics on this TaskChannel. Can be the TaskChannel\'s SID or its `unique_name`, such as `voice`, `sms`, or `default`.
 * @property { string } [splitByWaitTime] A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface TaskQueuesStatisticsListInstancePageOptions {
  endDate?: Date;
  friendlyName?: string;
  minutes?: number;
  startDate?: Date;
  taskChannel?: string;
  splitByWaitTime?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface TaskQueuesStatisticsListInstance {
  /**
   * Streams TaskQueuesStatisticsInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: TaskQueuesStatisticsInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Streams TaskQueuesStatisticsInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TaskQueuesStatisticsListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: TaskQueuesStatisticsListInstanceEachOptions,
    callback?: (
      item: TaskQueuesStatisticsInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of TaskQueuesStatisticsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: TaskQueuesStatisticsPage) => any
  ): Promise<TaskQueuesStatisticsPage>;
  /**
   * Retrieve a single target page of TaskQueuesStatisticsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl?: string,
    callback?: (error: Error | null, items: TaskQueuesStatisticsPage) => any
  ): Promise<TaskQueuesStatisticsPage>;
  getPage(params?: any, callback?: any): Promise<TaskQueuesStatisticsPage>;
  /**
   * Lists TaskQueuesStatisticsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: TaskQueuesStatisticsInstance[]
    ) => any
  ): Promise<TaskQueuesStatisticsInstance[]>;
  /**
   * Lists TaskQueuesStatisticsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TaskQueuesStatisticsListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: TaskQueuesStatisticsListInstanceOptions,
    callback?: (
      error: Error | null,
      items: TaskQueuesStatisticsInstance[]
    ) => any
  ): Promise<TaskQueuesStatisticsInstance[]>;
  list(params?: any, callback?: any): Promise<TaskQueuesStatisticsInstance[]>;
  /**
   * Retrieve a single page of TaskQueuesStatisticsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: TaskQueuesStatisticsPage) => any
  ): Promise<TaskQueuesStatisticsPage>;
  /**
   * Retrieve a single page of TaskQueuesStatisticsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TaskQueuesStatisticsListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: TaskQueuesStatisticsListInstancePageOptions,
    callback?: (error: Error | null, items: TaskQueuesStatisticsPage) => any
  ): Promise<TaskQueuesStatisticsPage>;
  page(params?: any, callback?: any): Promise<TaskQueuesStatisticsPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TaskQueuesStatisticsSolution {
  workspaceSid?: string;
}

interface TaskQueuesStatisticsListInstanceImpl
  extends TaskQueuesStatisticsListInstance {}
class TaskQueuesStatisticsListInstanceImpl
  implements TaskQueuesStatisticsListInstance
{
  _version?: V1;
  _solution?: TaskQueuesStatisticsSolution;
  _uri?: string;
}

export function TaskQueuesStatisticsListInstance(
  version: V1,
  workspaceSid: string
): TaskQueuesStatisticsListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  const instance = {} as TaskQueuesStatisticsListInstanceImpl;

  instance._version = version;
  instance._solution = { workspaceSid };
  instance._uri = `/Workspaces/${workspaceSid}/TaskQueues/Statistics`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<TaskQueuesStatisticsPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["endDate"] !== undefined)
      data["EndDate"] = serialize.iso8601DateTime(params["endDate"]);
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["minutes"] !== undefined) data["Minutes"] = params["minutes"];
    if (params["startDate"] !== undefined)
      data["StartDate"] = serialize.iso8601DateTime(params["startDate"]);
    if (params["taskChannel"] !== undefined)
      data["TaskChannel"] = params["taskChannel"];
    if (params["splitByWaitTime"] !== undefined)
      data["SplitByWaitTime"] = params["splitByWaitTime"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TaskQueuesStatisticsPage(operationVersion, payload, this._solution)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl?: any,
    callback?: any
  ): Promise<TaskQueuesStatisticsPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new TaskQueuesStatisticsPage(this._version, payload, this._solution)
    );
    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

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

interface TaskQueuesStatisticsPayload extends TwilioResponsePayload {
  task_queues_statistics: TaskQueuesStatisticsResource[];
}

interface TaskQueuesStatisticsResource {
  account_sid?: string | null;
  cumulative?: any | null;
  realtime?: any | null;
  task_queue_sid?: string | null;
  workspace_sid?: string | null;
}

export class TaskQueuesStatisticsInstance {
  constructor(
    protected _version: V1,
    payload: TaskQueuesStatisticsResource,
    workspaceSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.cumulative = payload.cumulative;
    this.realtime = payload.realtime;
    this.taskQueueSid = payload.task_queue_sid;
    this.workspaceSid = payload.workspace_sid;
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * An object that contains the cumulative statistics for the TaskQueues
   */
  cumulative?: any | null;
  /**
   * An object that contains the real-time statistics for the TaskQueues
   */
  realtime?: any | null;
  /**
   * The SID of the TaskQueue from which these statistics were calculated
   */
  taskQueueSid?: string | null;
  /**
   * The SID of the Workspace that contains the TaskQueues
   */
  workspaceSid?: string | null;

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
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class TaskQueuesStatisticsPage extends Page<
  V1,
  TaskQueuesStatisticsPayload,
  TaskQueuesStatisticsResource,
  TaskQueuesStatisticsInstance
> {
  /**
   * Initialize the TaskQueuesStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: TaskQueuesStatisticsSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of TaskQueuesStatisticsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: TaskQueuesStatisticsResource
  ): TaskQueuesStatisticsInstance {
    return new TaskQueuesStatisticsInstance(
      this._version,
      payload,
      this._solution.workspaceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
