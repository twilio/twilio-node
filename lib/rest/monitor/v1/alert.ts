/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Monitor
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to each
 *
 * @property { string } [logLevel] Only show alerts for this log-level.  Can be: `error`, `warning`, `notice`, or `debug`.
 * @property { Date } [startDate] Only include alerts that occurred on or after this date and time. Specify the date and time in GMT and format as `YYYY-MM-DD` or `YYYY-MM-DDThh:mm:ssZ`. Queries for alerts older than 30 days are not supported.
 * @property { Date } [endDate] Only include alerts that occurred on or before this date and time. Specify the date and time in GMT and format as `YYYY-MM-DD` or `YYYY-MM-DDThh:mm:ssZ`. Queries for alerts older than 30 days are not supported.
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
export interface AlertListInstanceEachOptions {
  logLevel?: string;
  startDate?: Date;
  endDate?: Date;
  pageSize?: number;
  callback?: (item: AlertInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [logLevel] Only show alerts for this log-level.  Can be: `error`, `warning`, `notice`, or `debug`.
 * @property { Date } [startDate] Only include alerts that occurred on or after this date and time. Specify the date and time in GMT and format as `YYYY-MM-DD` or `YYYY-MM-DDThh:mm:ssZ`. Queries for alerts older than 30 days are not supported.
 * @property { Date } [endDate] Only include alerts that occurred on or before this date and time. Specify the date and time in GMT and format as `YYYY-MM-DD` or `YYYY-MM-DDThh:mm:ssZ`. Queries for alerts older than 30 days are not supported.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface AlertListInstanceOptions {
  logLevel?: string;
  startDate?: Date;
  endDate?: Date;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [logLevel] Only show alerts for this log-level.  Can be: `error`, `warning`, `notice`, or `debug`.
 * @property { Date } [startDate] Only include alerts that occurred on or after this date and time. Specify the date and time in GMT and format as `YYYY-MM-DD` or `YYYY-MM-DDThh:mm:ssZ`. Queries for alerts older than 30 days are not supported.
 * @property { Date } [endDate] Only include alerts that occurred on or before this date and time. Specify the date and time in GMT and format as `YYYY-MM-DD` or `YYYY-MM-DDThh:mm:ssZ`. Queries for alerts older than 30 days are not supported.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface AlertListInstancePageOptions {
  logLevel?: string;
  startDate?: Date;
  endDate?: Date;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface AlertContext {
  /**
   * Fetch a AlertInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AlertInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AlertInstance) => any
  ): Promise<AlertInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AlertContextSolution {
  sid: string;
}

export class AlertContextImpl implements AlertContext {
  protected _solution: AlertContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Alerts/${sid}`;
  }

  fetch(callback?: any): Promise<AlertInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AlertInstance(operationVersion, payload, instance._solution.sid)
    );

    operationPromise = instance._version.setPromiseCallback(
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

export type AlertRequestMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";

interface AlertPayload extends TwilioResponsePayload {
  alerts: AlertResource[];
}

interface AlertResource {
  account_sid: string;
  alert_text: string;
  api_version: string;
  date_created: Date;
  date_generated: Date;
  date_updated: Date;
  error_code: string;
  log_level: string;
  more_info: string;
  request_method: AlertRequestMethod;
  request_url: string;
  request_variables: string;
  resource_sid: string;
  response_body: string;
  response_headers: string;
  sid: string;
  url: string;
  request_headers: string;
  service_sid: string;
}

export class AlertInstance {
  protected _solution: AlertContextSolution;
  protected _context?: AlertContext;

  constructor(protected _version: V1, payload: AlertResource, sid?: string) {
    this.accountSid = payload.account_sid;
    this.alertText = payload.alert_text;
    this.apiVersion = payload.api_version;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateGenerated = deserialize.iso8601DateTime(payload.date_generated);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.errorCode = payload.error_code;
    this.logLevel = payload.log_level;
    this.moreInfo = payload.more_info;
    this.requestMethod = payload.request_method;
    this.requestUrl = payload.request_url;
    this.requestVariables = payload.request_variables;
    this.resourceSid = payload.resource_sid;
    this.responseBody = payload.response_body;
    this.responseHeaders = payload.response_headers;
    this.sid = payload.sid;
    this.url = payload.url;
    this.requestHeaders = payload.request_headers;
    this.serviceSid = payload.service_sid;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  /**
   * The text of the alert
   */
  alertText: string;
  /**
   * The API version used when the alert was generated
   */
  apiVersion: string;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated: Date;
  /**
   * The date and time when the alert was generated specified in ISO 8601 format
   */
  dateGenerated: Date;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated: Date;
  /**
   * The error code for the condition that generated the alert
   */
  errorCode: string;
  /**
   * The log level
   */
  logLevel: string;
  /**
   * The URL of the page in our Error Dictionary with more information about the error condition
   */
  moreInfo: string;
  /**
   * The method used by the request that generated the alert
   */
  requestMethod: AlertRequestMethod;
  /**
   * The URL of the request that generated the alert
   */
  requestUrl: string;
  /**
   * The variables passed in the request that generated the alert
   */
  requestVariables: string;
  /**
   * The SID of the resource for which the alert was generated
   */
  resourceSid: string;
  /**
   * The response body of the request that generated the alert
   */
  responseBody: string;
  /**
   * The response headers of the request that generated the alert
   */
  responseHeaders: string;
  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * The absolute URL of the Alert resource
   */
  url: string;
  /**
   * The request headers of the request that generated the alert
   */
  requestHeaders: string;
  /**
   * The SID of the service or resource that generated the alert
   */
  serviceSid: string;

  private get _proxy(): AlertContext {
    this._context =
      this._context || new AlertContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a AlertInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AlertInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AlertInstance) => any
  ): Promise<AlertInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      alertText: this.alertText,
      apiVersion: this.apiVersion,
      dateCreated: this.dateCreated,
      dateGenerated: this.dateGenerated,
      dateUpdated: this.dateUpdated,
      errorCode: this.errorCode,
      logLevel: this.logLevel,
      moreInfo: this.moreInfo,
      requestMethod: this.requestMethod,
      requestUrl: this.requestUrl,
      requestVariables: this.requestVariables,
      resourceSid: this.resourceSid,
      responseBody: this.responseBody,
      responseHeaders: this.responseHeaders,
      sid: this.sid,
      url: this.url,
      requestHeaders: this.requestHeaders,
      serviceSid: this.serviceSid,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AlertSolution {}

export interface AlertListInstance {
  _version: V1;
  _solution: AlertSolution;
  _uri: string;

  (sid: string): AlertContext;
  get(sid: string): AlertContext;

  /**
   * Streams AlertInstance records from the API.
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
    callback?: (item: AlertInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams AlertInstance records from the API.
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
   * @param { AlertListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: AlertListInstanceEachOptions,
    callback?: (item: AlertInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of AlertInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: AlertPage) => any
  ): Promise<AlertPage>;
  /**
   * Retrieve a single target page of AlertInstance records from the API.
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
    callback?: (error: Error | null, items: AlertPage) => any
  ): Promise<AlertPage>;
  getPage(params?: any, callback?: any): Promise<AlertPage>;
  /**
   * Lists AlertInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: AlertInstance[]) => any
  ): Promise<AlertInstance[]>;
  /**
   * Lists AlertInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AlertListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: AlertListInstanceOptions,
    callback?: (error: Error | null, items: AlertInstance[]) => any
  ): Promise<AlertInstance[]>;
  list(params?: any, callback?: any): Promise<AlertInstance[]>;
  /**
   * Retrieve a single page of AlertInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: AlertPage) => any
  ): Promise<AlertPage>;
  /**
   * Retrieve a single page of AlertInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AlertListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: AlertListInstancePageOptions,
    callback?: (error: Error | null, items: AlertPage) => any
  ): Promise<AlertPage>;
  page(params?: any, callback?: any): Promise<AlertPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AlertListInstance(version: V1): AlertListInstance {
  const instance = ((sid) => instance.get(sid)) as AlertListInstance;

  instance.get = function get(sid): AlertContext {
    return new AlertContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Alerts`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<AlertPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["logLevel"] !== undefined) data["LogLevel"] = params["logLevel"];
    if (params["startDate"] !== undefined)
      data["StartDate"] = serialize.iso8601DateTime(params["startDate"]);
    if (params["endDate"] !== undefined)
      data["EndDate"] = serialize.iso8601DateTime(params["endDate"]);
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new AlertPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
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
  ): Promise<AlertPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) => new AlertPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class AlertPage extends Page<
  V1,
  AlertPayload,
  AlertResource,
  AlertInstance
> {
  /**
   * Initialize the AlertPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: AlertSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AlertInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AlertResource): AlertInstance {
    return new AlertInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
