/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Insights
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");

type CallSummariesProcessingStateRequest = 'completed'|'started'|'partial'|'all';

type CallSummariesSortBy = 'start_time'|'end_time';

/**
 * Options to pass to each
 *
 * @property { string } [from] 
 * @property { string } [to] 
 * @property { string } [fromCarrier] 
 * @property { string } [toCarrier] 
 * @property { string } [fromCountryCode] 
 * @property { string } [toCountryCode] 
 * @property { boolean } [branded] 
 * @property { boolean } [verifiedCaller] 
 * @property { boolean } [hasTag] 
 * @property { string } [startTime] 
 * @property { string } [endTime] 
 * @property { string } [callType] 
 * @property { string } [callState] 
 * @property { string } [direction] 
 * @property { CallSummariesProcessingStateRequest } [processingState] 
 * @property { CallSummariesSortBy } [sortBy] 
 * @property { string } [subaccount] 
 * @property { boolean } [abnormalSession] 
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
export interface CallSummariesListInstanceEachOptions {
  from?: string;
  to?: string;
  fromCarrier?: string;
  toCarrier?: string;
  fromCountryCode?: string;
  toCountryCode?: string;
  branded?: boolean;
  verifiedCaller?: boolean;
  hasTag?: boolean;
  startTime?: string;
  endTime?: string;
  callType?: string;
  callState?: string;
  direction?: string;
  processingState?: CallSummariesProcessingStateRequest;
  sortBy?: CallSummariesSortBy;
  subaccount?: string;
  abnormalSession?: boolean;
  pageSize?: number;
  callback?: (item: CallSummariesInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [from] 
 * @property { string } [to] 
 * @property { string } [fromCarrier] 
 * @property { string } [toCarrier] 
 * @property { string } [fromCountryCode] 
 * @property { string } [toCountryCode] 
 * @property { boolean } [branded] 
 * @property { boolean } [verifiedCaller] 
 * @property { boolean } [hasTag] 
 * @property { string } [startTime] 
 * @property { string } [endTime] 
 * @property { string } [callType] 
 * @property { string } [callState] 
 * @property { string } [direction] 
 * @property { CallSummariesProcessingStateRequest } [processingState] 
 * @property { CallSummariesSortBy } [sortBy] 
 * @property { string } [subaccount] 
 * @property { boolean } [abnormalSession] 
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface CallSummariesListInstanceOptions {
  from?: string;
  to?: string;
  fromCarrier?: string;
  toCarrier?: string;
  fromCountryCode?: string;
  toCountryCode?: string;
  branded?: boolean;
  verifiedCaller?: boolean;
  hasTag?: boolean;
  startTime?: string;
  endTime?: string;
  callType?: string;
  callState?: string;
  direction?: string;
  processingState?: CallSummariesProcessingStateRequest;
  sortBy?: CallSummariesSortBy;
  subaccount?: string;
  abnormalSession?: boolean;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [from] 
 * @property { string } [to] 
 * @property { string } [fromCarrier] 
 * @property { string } [toCarrier] 
 * @property { string } [fromCountryCode] 
 * @property { string } [toCountryCode] 
 * @property { boolean } [branded] 
 * @property { boolean } [verifiedCaller] 
 * @property { boolean } [hasTag] 
 * @property { string } [startTime] 
 * @property { string } [endTime] 
 * @property { string } [callType] 
 * @property { string } [callState] 
 * @property { string } [direction] 
 * @property { CallSummariesProcessingStateRequest } [processingState] 
 * @property { CallSummariesSortBy } [sortBy] 
 * @property { string } [subaccount] 
 * @property { boolean } [abnormalSession] 
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface CallSummariesListInstancePageOptions {
  from?: string;
  to?: string;
  fromCarrier?: string;
  toCarrier?: string;
  fromCountryCode?: string;
  toCountryCode?: string;
  branded?: boolean;
  verifiedCaller?: boolean;
  hasTag?: boolean;
  startTime?: string;
  endTime?: string;
  callType?: string;
  callState?: string;
  direction?: string;
  processingState?: CallSummariesProcessingStateRequest;
  sortBy?: CallSummariesSortBy;
  subaccount?: string;
  abnormalSession?: boolean;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface CallSummariesListInstance {



  /**
   * Streams CallSummariesInstance records from the API.
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
  each(callback?: (item: CallSummariesInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams CallSummariesInstance records from the API.
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
   * @param { CallSummariesListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: CallSummariesListInstanceEachOptions, callback?: (item: CallSummariesInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of CallSummariesInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: CallSummariesPage) => any): Promise<CallSummariesPage>;
  /**
   * Retrieve a single target page of CallSummariesInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: CallSummariesPage) => any): Promise<CallSummariesPage>;
  getPage(params?: any, callback?: any): Promise<CallSummariesPage>;
  /**
   * Lists CallSummariesInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: CallSummariesInstance[]) => any): Promise<CallSummariesInstance[]>;
  /**
   * Lists CallSummariesInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CallSummariesListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: CallSummariesListInstanceOptions, callback?: (error: Error | null, items: CallSummariesInstance[]) => any): Promise<CallSummariesInstance[]>;
  list(params?: any, callback?: any): Promise<CallSummariesInstance[]>;
  /**
   * Retrieve a single page of CallSummariesInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: CallSummariesPage) => any): Promise<CallSummariesPage>;
  /**
   * Retrieve a single page of CallSummariesInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CallSummariesListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: CallSummariesListInstancePageOptions, callback?: (error: Error | null, items: CallSummariesPage) => any): Promise<CallSummariesPage>;
  page(params?: any, callback?: any): Promise<CallSummariesPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface CallSummariesListInstanceImpl extends CallSummariesListInstance {}
class CallSummariesListInstanceImpl implements CallSummariesListInstance {
  _version?: V1;
  _solution?: CallSummariesSolution;
  _uri?: string;

}

export function CallSummariesListInstance(version: V1): CallSummariesListInstance {
  const instance = {} as CallSummariesListInstanceImpl;

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Voice/Summaries`;

  instance.page = function page(params?: any, callback?: any): Promise<CallSummariesPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.from !== undefined) data['From'] = params.from;
    if (params.to !== undefined) data['To'] = params.to;
    if (params.fromCarrier !== undefined) data['FromCarrier'] = params.fromCarrier;
    if (params.toCarrier !== undefined) data['ToCarrier'] = params.toCarrier;
    if (params.fromCountryCode !== undefined) data['FromCountryCode'] = params.fromCountryCode;
    if (params.toCountryCode !== undefined) data['ToCountryCode'] = params.toCountryCode;
    if (params.branded !== undefined) data['Branded'] = serialize.bool(params.branded);
    if (params.verifiedCaller !== undefined) data['VerifiedCaller'] = serialize.bool(params.verifiedCaller);
    if (params.hasTag !== undefined) data['HasTag'] = serialize.bool(params.hasTag);
    if (params.startTime !== undefined) data['StartTime'] = params.startTime;
    if (params.endTime !== undefined) data['EndTime'] = params.endTime;
    if (params.callType !== undefined) data['CallType'] = params.callType;
    if (params.callState !== undefined) data['CallState'] = params.callState;
    if (params.direction !== undefined) data['Direction'] = params.direction;
    if (params.processingState !== undefined) data['ProcessingState'] = params.processingState;
    if (params.sortBy !== undefined) data['SortBy'] = params.sortBy;
    if (params.subaccount !== undefined) data['Subaccount'] = params.subaccount;
    if (params.abnormalSession !== undefined) data['AbnormalSession'] = serialize.bool(params.abnormalSession);
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new CallSummariesPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<CallSummariesPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new CallSummariesPage(this._version, payload, this._solution));
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

