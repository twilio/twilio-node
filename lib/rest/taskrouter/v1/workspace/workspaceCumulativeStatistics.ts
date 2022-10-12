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
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");

/**
 * Options to pass to each
 *
 * @property { Date } [endDate] Only include usage that occurred on or before this date, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { string } [taskChannel] Only calculate cumulative statistics on this TaskChannel. Can be the TaskChannel\&#39;s SID or its &#x60;unique_name&#x60;, such as &#x60;voice&#x60;, &#x60;sms&#x60;, or &#x60;default&#x60;.
 * @property { string } [splitByWaitTime] A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed. For example, &#x60;5,30&#x60; would show splits of Tasks that were canceled or accepted before and after 5 seconds and before and after 30 seconds. This can be used to show short abandoned Tasks or Tasks that failed to meet an SLA. TaskRouter will calculate statistics on up to 10,000 Tasks for any given threshold.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface WorkspaceCumulativeStatisticsListInstanceEachOptions {
  endDate?: Date;
  minutes?: number;
  startDate?: Date;
  taskChannel?: string;
  splitByWaitTime?: string;
  callback?: (item: WorkspaceCumulativeStatisticsInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { Date } [endDate] Only include usage that occurred on or before this date, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { string } [taskChannel] Only calculate cumulative statistics on this TaskChannel. Can be the TaskChannel\&#39;s SID or its &#x60;unique_name&#x60;, such as &#x60;voice&#x60;, &#x60;sms&#x60;, or &#x60;default&#x60;.
 * @property { string } [splitByWaitTime] A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed. For example, &#x60;5,30&#x60; would show splits of Tasks that were canceled or accepted before and after 5 seconds and before and after 30 seconds. This can be used to show short abandoned Tasks or Tasks that failed to meet an SLA. TaskRouter will calculate statistics on up to 10,000 Tasks for any given threshold.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface WorkspaceCumulativeStatisticsListInstanceOptions {
  endDate?: Date;
  minutes?: number;
  startDate?: Date;
  taskChannel?: string;
  splitByWaitTime?: string;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { Date } [endDate] Only include usage that occurred on or before this date, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { string } [taskChannel] Only calculate cumulative statistics on this TaskChannel. Can be the TaskChannel\&#39;s SID or its &#x60;unique_name&#x60;, such as &#x60;voice&#x60;, &#x60;sms&#x60;, or &#x60;default&#x60;.
 * @property { string } [splitByWaitTime] A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed. For example, &#x60;5,30&#x60; would show splits of Tasks that were canceled or accepted before and after 5 seconds and before and after 30 seconds. This can be used to show short abandoned Tasks or Tasks that failed to meet an SLA. TaskRouter will calculate statistics on up to 10,000 Tasks for any given threshold.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface WorkspaceCumulativeStatisticsListInstancePageOptions {
  endDate?: Date;
  minutes?: number;
  startDate?: Date;
  taskChannel?: string;
  splitByWaitTime?: string;
  pageNumber?: number;
  pageToken?: string;
}



export interface WorkspaceCumulativeStatisticsListInstance {



  /**
   * Streams WorkspaceCumulativeStatisticsInstance records from the API.
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
  each(callback?: (item: WorkspaceCumulativeStatisticsInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams WorkspaceCumulativeStatisticsInstance records from the API.
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
   * @param { WorkspaceCumulativeStatisticsListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: WorkspaceCumulativeStatisticsListInstanceEachOptions, callback?: (item: WorkspaceCumulativeStatisticsInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of WorkspaceCumulativeStatisticsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: WorkspaceCumulativeStatisticsPage) => any): Promise<WorkspaceCumulativeStatisticsPage>;
  /**
   * Retrieve a single target page of WorkspaceCumulativeStatisticsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: WorkspaceCumulativeStatisticsPage) => any): Promise<WorkspaceCumulativeStatisticsPage>;
  getPage(params?: any, callback?: any): Promise<WorkspaceCumulativeStatisticsPage>;
  /**
   * Lists WorkspaceCumulativeStatisticsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: WorkspaceCumulativeStatisticsInstance[]) => any): Promise<WorkspaceCumulativeStatisticsInstance[]>;
  /**
   * Lists WorkspaceCumulativeStatisticsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WorkspaceCumulativeStatisticsListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: WorkspaceCumulativeStatisticsListInstanceOptions, callback?: (error: Error | null, items: WorkspaceCumulativeStatisticsInstance[]) => any): Promise<WorkspaceCumulativeStatisticsInstance[]>;
  list(params?: any, callback?: any): Promise<WorkspaceCumulativeStatisticsInstance[]>;
  /**
   * Retrieve a single page of WorkspaceCumulativeStatisticsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: WorkspaceCumulativeStatisticsPage) => any): Promise<WorkspaceCumulativeStatisticsPage>;
  /**
   * Retrieve a single page of WorkspaceCumulativeStatisticsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WorkspaceCumulativeStatisticsListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: WorkspaceCumulativeStatisticsListInstancePageOptions, callback?: (error: Error | null, items: WorkspaceCumulativeStatisticsPage) => any): Promise<WorkspaceCumulativeStatisticsPage>;
  page(params?: any, callback?: any): Promise<WorkspaceCumulativeStatisticsPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface WorkspaceCumulativeStatisticsListInstanceImpl extends WorkspaceCumulativeStatisticsListInstance {}
class WorkspaceCumulativeStatisticsListInstanceImpl implements WorkspaceCumulativeStatisticsListInstance {
  _version?: V1;
  _solution?: WorkspaceCumulativeStatisticsSolution;
  _uri?: string;

}

export function WorkspaceCumulativeStatisticsListInstance(version: V1, workspaceSid: string): WorkspaceCumulativeStatisticsListInstance {
  const instance = {} as WorkspaceCumulativeStatisticsListInstanceImpl;

  instance._version = version;
  instance._solution = { workspaceSid };
  instance._uri = `/Workspaces/${workspaceSid}/CumulativeStatistics`;

  instance.page = function page(params?: any, callback?: any): Promise<WorkspaceCumulativeStatisticsPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.endDate !== undefined) data['EndDate'] = serialize.iso8601DateTime(params.endDate);
    if (params.minutes !== undefined) data['Minutes'] = params.minutes;
    if (params.startDate !== undefined) data['StartDate'] = serialize.iso8601DateTime(params.startDate);
    if (params.taskChannel !== undefined) data['TaskChannel'] = params.taskChannel;
    if (params.splitByWaitTime !== undefined) data['SplitByWaitTime'] = params.splitByWaitTime;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new WorkspaceCumulativeStatisticsPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<WorkspaceCumulativeStatisticsPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new WorkspaceCumulativeStatisticsPage(this._version, payload, this._solution));
    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;
  }



  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}

