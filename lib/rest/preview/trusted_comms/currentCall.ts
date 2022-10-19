/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../base/Page";
import Response from "../../../http/response";
import TrustedComms from "../TrustedComms";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");

/**
 * Options to pass to each
 *
 * @property { string } [xXcnamSensitivePhoneNumberFrom] The originating Phone Number, given in [E.164 format](https://www.twilio.com/docs/glossary/what-e164). This phone number should be a Twilio number, otherwise it will return an error with HTTP Status Code 400.
 * @property { string } [xXcnamSensitivePhoneNumberTo] The terminating Phone Number, given in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface CurrentCallListInstanceEachOptions {
  xXcnamSensitivePhoneNumberFrom?: string;
  xXcnamSensitivePhoneNumberTo?: string;
  callback?: (item: CurrentCallInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [xXcnamSensitivePhoneNumberFrom] The originating Phone Number, given in [E.164 format](https://www.twilio.com/docs/glossary/what-e164). This phone number should be a Twilio number, otherwise it will return an error with HTTP Status Code 400.
 * @property { string } [xXcnamSensitivePhoneNumberTo] The terminating Phone Number, given in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface CurrentCallListInstanceOptions {
  xXcnamSensitivePhoneNumberFrom?: string;
  xXcnamSensitivePhoneNumberTo?: string;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [xXcnamSensitivePhoneNumberFrom] The originating Phone Number, given in [E.164 format](https://www.twilio.com/docs/glossary/what-e164). This phone number should be a Twilio number, otherwise it will return an error with HTTP Status Code 400.
 * @property { string } [xXcnamSensitivePhoneNumberTo] The terminating Phone Number, given in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface CurrentCallListInstancePageOptions {
  xXcnamSensitivePhoneNumberFrom?: string;
  xXcnamSensitivePhoneNumberTo?: string;
  pageNumber?: number;
  pageToken?: string;
}



export interface CurrentCallListInstance {



  /**
   * Streams CurrentCallInstance records from the API.
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
  each(callback?: (item: CurrentCallInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams CurrentCallInstance records from the API.
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
   * @param { CurrentCallListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: CurrentCallListInstanceEachOptions, callback?: (item: CurrentCallInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of CurrentCallInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: CurrentCallPage) => any): Promise<CurrentCallPage>;
  /**
   * Retrieve a single target page of CurrentCallInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: CurrentCallPage) => any): Promise<CurrentCallPage>;
  getPage(params?: any, callback?: any): Promise<CurrentCallPage>;
  /**
   * Lists CurrentCallInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: CurrentCallInstance[]) => any): Promise<CurrentCallInstance[]>;
  /**
   * Lists CurrentCallInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CurrentCallListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: CurrentCallListInstanceOptions, callback?: (error: Error | null, items: CurrentCallInstance[]) => any): Promise<CurrentCallInstance[]>;
  list(params?: any, callback?: any): Promise<CurrentCallInstance[]>;
  /**
   * Retrieve a single page of CurrentCallInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: CurrentCallPage) => any): Promise<CurrentCallPage>;
  /**
   * Retrieve a single page of CurrentCallInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CurrentCallListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: CurrentCallListInstancePageOptions, callback?: (error: Error | null, items: CurrentCallPage) => any): Promise<CurrentCallPage>;
  page(params?: any, callback?: any): Promise<CurrentCallPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CurrentCallSolution {
}

interface CurrentCallListInstanceImpl extends CurrentCallListInstance {}
class CurrentCallListInstanceImpl implements CurrentCallListInstance {
  _version?: TrustedComms;
  _solution?: CurrentCallSolution;
  _uri?: string;

}

export function CurrentCallListInstance(version: TrustedComms): CurrentCallListInstance {
  const instance = {} as CurrentCallListInstanceImpl;

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/CurrentCall`;

  instance.page = function page(params?: any, callback?: any): Promise<CurrentCallPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};
    if (params.xXcnamSensitivePhoneNumberFrom !== undefined) headers['X-Xcnam-Sensitive-Phone-Number-From'] = params.xXcnamSensitivePhoneNumberFrom;
    if (params.xXcnamSensitivePhoneNumberTo !== undefined) headers['X-Xcnam-Sensitive-Phone-Number-To'] = params.xXcnamSensitivePhoneNumberTo;

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new CurrentCallPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<CurrentCallPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new CurrentCallPage(this._version, payload, this._solution));
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

