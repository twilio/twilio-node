/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Autopilot
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");


export interface TaskStatisticsListInstance {



  /**
   * Streams TaskStatisticsInstance records from the API.
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
  each(callback?: (item: TaskStatisticsInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams TaskStatisticsInstance records from the API.
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
   * @param { TaskStatisticsListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: TaskStatisticsListInstanceEachOptions, callback?: (item: TaskStatisticsInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of TaskStatisticsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: TaskStatisticsPage) => any): Promise<TaskStatisticsPage>;
  /**
   * Retrieve a single target page of TaskStatisticsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: TaskStatisticsPage) => any): Promise<TaskStatisticsPage>;
  getPage(params?: any, callback?: any): Promise<TaskStatisticsPage>;
  /**
   * Lists TaskStatisticsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: TaskStatisticsInstance[]) => any): Promise<TaskStatisticsInstance[]>;
  /**
   * Lists TaskStatisticsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TaskStatisticsListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: TaskStatisticsListInstanceOptions, callback?: (error: Error | null, items: TaskStatisticsInstance[]) => any): Promise<TaskStatisticsInstance[]>;
  list(params?: any, callback?: any): Promise<TaskStatisticsInstance[]>;
  /**
   * Retrieve a single page of TaskStatisticsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: TaskStatisticsPage) => any): Promise<TaskStatisticsPage>;
  /**
   * Retrieve a single page of TaskStatisticsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TaskStatisticsListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: TaskStatisticsListInstancePageOptions, callback?: (error: Error | null, items: TaskStatisticsPage) => any): Promise<TaskStatisticsPage>;
  page(params?: any, callback?: any): Promise<TaskStatisticsPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TaskStatisticsSolution {
  assistantSid?: string;
  taskSid?: string;
}

interface TaskStatisticsListInstanceImpl extends TaskStatisticsListInstance {}
class TaskStatisticsListInstanceImpl implements TaskStatisticsListInstance {
  _version?: V1;
  _solution?: TaskStatisticsSolution;
  _uri?: string;

}

export function TaskStatisticsListInstance(version: V1, assistantSid: string, taskSid: string): TaskStatisticsListInstance {
  const instance = {} as TaskStatisticsListInstanceImpl;

  instance._version = version;
  instance._solution = { assistantSid, taskSid };
  instance._uri = `/Assistants/${assistantSid}/Tasks/${taskSid}/Statistics`;

  instance.page = function page(callback?: any): Promise<TaskStatisticsPage> {

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new TaskStatisticsPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<TaskStatisticsPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new TaskStatisticsPage(this._version, payload, this._solution));
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

