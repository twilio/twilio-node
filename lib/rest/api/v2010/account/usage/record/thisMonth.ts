/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../../../base/Page";
import Response from "../../../../../../http/response";
import V2010 from "../../../../V2010";
const deserialize = require("../../../../../../base/deserialize");
const serialize = require("../../../../../../base/serialize");

/**
 * Options to pass to each
 *
 * @property { UsageRecordThisMonthEnumCategory } [category] The [usage category](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) of the UsageRecord resources to read. Only UsageRecord resources in the specified category are retrieved.
 * @property { string } [startDate] Only include usage that has occurred on or after this date. Specify the date in GMT and format as &#x60;YYYY-MM-DD&#x60;. You can also specify offsets from the current date, such as: &#x60;-30days&#x60;, which will set the start date to be 30 days before the current date.
 * @property { string } [endDate] Only include usage that occurred on or before this date. Specify the date in GMT and format as &#x60;YYYY-MM-DD&#x60;.  You can also specify offsets from the current date, such as: &#x60;+30days&#x60;, which will set the end date to 30 days from the current date.
 * @property { boolean } [includeSubaccounts] Whether to include usage from the master account and all its subaccounts. Can be: &#x60;true&#x60; (the default) to include usage from the master account and all subaccounts or &#x60;false&#x60; to retrieve usage from only the specified account.
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
export interface ThisMonthListInstanceEachOptions {
  category?: UsageRecordThisMonthEnumCategory;
  startDate?: string;
  endDate?: string;
  includeSubaccounts?: boolean;
  pageSize?: number;
  callback?: (item: ThisMonthInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { UsageRecordThisMonthEnumCategory } [category] The [usage category](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) of the UsageRecord resources to read. Only UsageRecord resources in the specified category are retrieved.
 * @property { string } [startDate] Only include usage that has occurred on or after this date. Specify the date in GMT and format as &#x60;YYYY-MM-DD&#x60;. You can also specify offsets from the current date, such as: &#x60;-30days&#x60;, which will set the start date to be 30 days before the current date.
 * @property { string } [endDate] Only include usage that occurred on or before this date. Specify the date in GMT and format as &#x60;YYYY-MM-DD&#x60;.  You can also specify offsets from the current date, such as: &#x60;+30days&#x60;, which will set the end date to 30 days from the current date.
 * @property { boolean } [includeSubaccounts] Whether to include usage from the master account and all its subaccounts. Can be: &#x60;true&#x60; (the default) to include usage from the master account and all subaccounts or &#x60;false&#x60; to retrieve usage from only the specified account.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ThisMonthListInstanceOptions {
  category?: UsageRecordThisMonthEnumCategory;
  startDate?: string;
  endDate?: string;
  includeSubaccounts?: boolean;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { UsageRecordThisMonthEnumCategory } [category] The [usage category](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) of the UsageRecord resources to read. Only UsageRecord resources in the specified category are retrieved.
 * @property { string } [startDate] Only include usage that has occurred on or after this date. Specify the date in GMT and format as &#x60;YYYY-MM-DD&#x60;. You can also specify offsets from the current date, such as: &#x60;-30days&#x60;, which will set the start date to be 30 days before the current date.
 * @property { string } [endDate] Only include usage that occurred on or before this date. Specify the date in GMT and format as &#x60;YYYY-MM-DD&#x60;.  You can also specify offsets from the current date, such as: &#x60;+30days&#x60;, which will set the end date to 30 days from the current date.
 * @property { boolean } [includeSubaccounts] Whether to include usage from the master account and all its subaccounts. Can be: &#x60;true&#x60; (the default) to include usage from the master account and all subaccounts or &#x60;false&#x60; to retrieve usage from only the specified account.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ThisMonthListInstancePageOptions {
  category?: UsageRecordThisMonthEnumCategory;
  startDate?: string;
  endDate?: string;
  includeSubaccounts?: boolean;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface ThisMonthListInstance {



  /**
   * Streams ThisMonthInstance records from the API.
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
  each(callback?: (item: ThisMonthInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams ThisMonthInstance records from the API.
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
   * @param { ThisMonthListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: ThisMonthListInstanceEachOptions, callback?: (item: ThisMonthInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ThisMonthInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: ThisMonthPage) => any): Promise<ThisMonthPage>;
  /**
   * Retrieve a single target page of ThisMonthInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ThisMonthPage) => any): Promise<ThisMonthPage>;
  getPage(params?: any, callback?: any): Promise<ThisMonthPage>;
  /**
   * Lists ThisMonthInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: ThisMonthInstance[]) => any): Promise<ThisMonthInstance[]>;
  /**
   * Lists ThisMonthInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ThisMonthListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: ThisMonthListInstanceOptions, callback?: (error: Error | null, items: ThisMonthInstance[]) => any): Promise<ThisMonthInstance[]>;
  list(params?: any, callback?: any): Promise<ThisMonthInstance[]>;
  /**
   * Retrieve a single page of ThisMonthInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: ThisMonthPage) => any): Promise<ThisMonthPage>;
  /**
   * Retrieve a single page of ThisMonthInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ThisMonthListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: ThisMonthListInstancePageOptions, callback?: (error: Error | null, items: ThisMonthPage) => any): Promise<ThisMonthPage>;
  page(params?: any, callback?: any): Promise<ThisMonthPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface ThisMonthListInstanceImpl extends ThisMonthListInstance {}
class ThisMonthListInstanceImpl implements ThisMonthListInstance {
  _version?: V2010;
  _solution?: ThisMonthSolution;
  _uri?: string;

}

export function ThisMonthListInstance(version: V2010, accountSid: string): ThisMonthListInstance {
  const instance = {} as ThisMonthListInstanceImpl;

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/Usage/Records/ThisMonth.json`;

  instance.page = function page(params?: any, callback?: any): Promise<ThisMonthPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.category !== undefined) data['Category'] = params.category;
    if (params.startDate !== undefined) data['StartDate'] = serialize.iso8601Date(params.startDate);
    if (params.endDate !== undefined) data['EndDate'] = serialize.iso8601Date(params.endDate);
    if (params.includeSubaccounts !== undefined) data['IncludeSubaccounts'] = serialize.bool(params.includeSubaccounts);
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new ThisMonthPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<ThisMonthPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new ThisMonthPage(this._version, payload, this._solution));
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

