/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Studio
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


export interface ExecutionContextListInstance {



  /**
   * Streams ExecutionContextInstance records from the API.
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
  each(callback?: (item: ExecutionContextInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams ExecutionContextInstance records from the API.
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
   * @param { ExecutionContextListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: ExecutionContextListInstanceEachOptions, callback?: (item: ExecutionContextInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ExecutionContextInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: ExecutionContextPage) => any): Promise<ExecutionContextPage>;
  /**
   * Retrieve a single target page of ExecutionContextInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ExecutionContextPage) => any): Promise<ExecutionContextPage>;
  getPage(params?: any, callback?: any): Promise<ExecutionContextPage>;
  /**
   * Lists ExecutionContextInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: ExecutionContextInstance[]) => any): Promise<ExecutionContextInstance[]>;
  /**
   * Lists ExecutionContextInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ExecutionContextListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: ExecutionContextListInstanceOptions, callback?: (error: Error | null, items: ExecutionContextInstance[]) => any): Promise<ExecutionContextInstance[]>;
  list(params?: any, callback?: any): Promise<ExecutionContextInstance[]>;
  /**
   * Retrieve a single page of ExecutionContextInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: ExecutionContextPage) => any): Promise<ExecutionContextPage>;
  /**
   * Retrieve a single page of ExecutionContextInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ExecutionContextListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: ExecutionContextListInstancePageOptions, callback?: (error: Error | null, items: ExecutionContextPage) => any): Promise<ExecutionContextPage>;
  page(params?: any, callback?: any): Promise<ExecutionContextPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface ExecutionContextListInstanceImpl extends ExecutionContextListInstance {}
class ExecutionContextListInstanceImpl implements ExecutionContextListInstance {
  _version?: V1;
  _solution?: ExecutionContextSolution;
  _uri?: string;

}

export function ExecutionContextListInstance(version: V1, flowSid: string, executionSid: string): ExecutionContextListInstance {
  const instance = {} as ExecutionContextListInstanceImpl;

  instance._version = version;
  instance._solution = { flowSid, executionSid };
  instance._uri = `/Flows/${flowSid}/Executions/${executionSid}/Context`;

  instance.page = function page(callback?: any): Promise<ExecutionContextPage> {

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new ExecutionContextPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<ExecutionContextPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new ExecutionContextPage(this._version, payload, this._solution));
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

