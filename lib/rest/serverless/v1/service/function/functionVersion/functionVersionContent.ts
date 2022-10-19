/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Serverless
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../../../base/Page";
import Response from "../../../../../../http/response";
import V1 from "../../../../V1";
const deserialize = require("../../../../../../base/deserialize");
const serialize = require("../../../../../../base/serialize");


export interface FunctionVersionContentListInstance {



  /**
   * Streams FunctionVersionContentInstance records from the API.
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
  each(callback?: (item: FunctionVersionContentInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams FunctionVersionContentInstance records from the API.
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
   * @param { FunctionVersionContentListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: FunctionVersionContentListInstanceEachOptions, callback?: (item: FunctionVersionContentInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of FunctionVersionContentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: FunctionVersionContentPage) => any): Promise<FunctionVersionContentPage>;
  /**
   * Retrieve a single target page of FunctionVersionContentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: FunctionVersionContentPage) => any): Promise<FunctionVersionContentPage>;
  getPage(params?: any, callback?: any): Promise<FunctionVersionContentPage>;
  /**
   * Lists FunctionVersionContentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: FunctionVersionContentInstance[]) => any): Promise<FunctionVersionContentInstance[]>;
  /**
   * Lists FunctionVersionContentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FunctionVersionContentListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: FunctionVersionContentListInstanceOptions, callback?: (error: Error | null, items: FunctionVersionContentInstance[]) => any): Promise<FunctionVersionContentInstance[]>;
  list(params?: any, callback?: any): Promise<FunctionVersionContentInstance[]>;
  /**
   * Retrieve a single page of FunctionVersionContentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: FunctionVersionContentPage) => any): Promise<FunctionVersionContentPage>;
  /**
   * Retrieve a single page of FunctionVersionContentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FunctionVersionContentListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: FunctionVersionContentListInstancePageOptions, callback?: (error: Error | null, items: FunctionVersionContentPage) => any): Promise<FunctionVersionContentPage>;
  page(params?: any, callback?: any): Promise<FunctionVersionContentPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FunctionVersionContentSolution {
  serviceSid?: string;
  functionSid?: string;
  sid?: string;
}

interface FunctionVersionContentListInstanceImpl extends FunctionVersionContentListInstance {}
class FunctionVersionContentListInstanceImpl implements FunctionVersionContentListInstance {
  _version?: V1;
  _solution?: FunctionVersionContentSolution;
  _uri?: string;

}

export function FunctionVersionContentListInstance(version: V1, serviceSid: string, functionSid: string, sid: string): FunctionVersionContentListInstance {
  const instance = {} as FunctionVersionContentListInstanceImpl;

  instance._version = version;
  instance._solution = { serviceSid, functionSid, sid };
  instance._uri = `/Services/${serviceSid}/Functions/${functionSid}/Versions/${sid}/Content`;

  instance.page = function page(callback?: any): Promise<FunctionVersionContentPage> {

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new FunctionVersionContentPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<FunctionVersionContentPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new FunctionVersionContentPage(this._version, payload, this._solution));
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

