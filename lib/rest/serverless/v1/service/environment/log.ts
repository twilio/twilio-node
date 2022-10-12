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
import Page from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");

/**
 * Options to pass to each
 *
 * @property { string } [functionSid] The SID of the function whose invocation produced the Log resources to read.
 * @property { Date } [startDate] The date/time (in GMT, ISO 8601) after which the Log resources must have been created. Defaults to 1 day prior to current date/time.
 * @property { Date } [endDate] The date/time (in GMT, ISO 8601) before which the Log resources must have been created. Defaults to current date/time.
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
export interface LogListInstanceEachOptions {
  functionSid?: string;
  startDate?: Date;
  endDate?: Date;
  pageSize?: number;
  callback?: (item: LogInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [functionSid] The SID of the function whose invocation produced the Log resources to read.
 * @property { Date } [startDate] The date/time (in GMT, ISO 8601) after which the Log resources must have been created. Defaults to 1 day prior to current date/time.
 * @property { Date } [endDate] The date/time (in GMT, ISO 8601) before which the Log resources must have been created. Defaults to current date/time.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface LogListInstanceOptions {
  functionSid?: string;
  startDate?: Date;
  endDate?: Date;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [functionSid] The SID of the function whose invocation produced the Log resources to read.
 * @property { Date } [startDate] The date/time (in GMT, ISO 8601) after which the Log resources must have been created. Defaults to 1 day prior to current date/time.
 * @property { Date } [endDate] The date/time (in GMT, ISO 8601) before which the Log resources must have been created. Defaults to current date/time.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface LogListInstancePageOptions {
  functionSid?: string;
  startDate?: Date;
  endDate?: Date;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}




export interface LogListInstance {
  (sid: string): LogContext;
  get(sid: string): LogContext;



  /**
   * Streams LogInstance records from the API.
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
  each(callback?: (item: LogInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams LogInstance records from the API.
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
   * @param { LogListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: LogListInstanceEachOptions, callback?: (item: LogInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of LogInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: LogPage) => any): Promise<LogPage>;
  /**
   * Retrieve a single target page of LogInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: LogPage) => any): Promise<LogPage>;
  getPage(params?: any, callback?: any): Promise<LogPage>;
  /**
   * Lists LogInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: LogInstance[]) => any): Promise<LogInstance[]>;
  /**
   * Lists LogInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { LogListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: LogListInstanceOptions, callback?: (error: Error | null, items: LogInstance[]) => any): Promise<LogInstance[]>;
  list(params?: any, callback?: any): Promise<LogInstance[]>;
  /**
   * Retrieve a single page of LogInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: LogPage) => any): Promise<LogPage>;
  /**
   * Retrieve a single page of LogInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { LogListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: LogListInstancePageOptions, callback?: (error: Error | null, items: LogPage) => any): Promise<LogPage>;
  page(params?: any, callback?: any): Promise<LogPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface LogListInstanceImpl extends LogListInstance {}
class LogListInstanceImpl implements LogListInstance {
  _version?: V1;
  _solution?: LogSolution;
  _uri?: string;

}

export function LogListInstance(version: V1, serviceSid: string, environmentSid: string): LogListInstance {
  const instance = ((sid) => instance.get(sid)) as LogListInstanceImpl;

  instance.get = function get(sid): LogContext {
    return new LogContextImpl(version, serviceSid, environmentSid, sid);
  }

  instance._version = version;
  instance._solution = { serviceSid, environmentSid };
  instance._uri = `/Services/${serviceSid}/Environments/${environmentSid}/Logs`;

  instance.page = function page(params?: any, callback?: any): Promise<LogPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.functionSid !== undefined) data['FunctionSid'] = params.functionSid;
    if (params.startDate !== undefined) data['StartDate'] = serialize.iso8601DateTime(params.startDate);
    if (params.endDate !== undefined) data['EndDate'] = serialize.iso8601DateTime(params.endDate);
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new LogPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<LogPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new LogPage(this._version, payload, this._solution));
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


export interface LogContext {


  /**
   * Fetch a LogInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed LogInstance
   */
  fetch(callback?: (error: Error | null, item?: LogInstance) => any): Promise<LogInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class LogContextImpl implements LogContext {
  protected _solution: LogSolution;
  protected _uri: string;


  constructor(protected _version: V1, serviceSid: string, environmentSid: string, sid: string) {
    this._solution = { serviceSid, environmentSid, sid };
    this._uri = `/Services/${serviceSid}/Environments/${environmentSid}/Logs/${sid}`;
  }

  fetch(callback?: any): Promise<LogInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new LogInstance(operationVersion, payload, this._solution.serviceSid, this._solution.environmentSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
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

interface LogPayload extends LogResource, Page.TwilioResponsePayload {
}

interface LogResource {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  environment_sid?: string | null;
  build_sid?: string | null;
  deployment_sid?: string | null;
  function_sid?: string | null;
  request_sid?: string | null;
  level?: object;
  message?: string | null;
  date_created?: Date | null;
  url?: string | null;
}

export class LogInstance {
  protected _solution: LogSolution;
  protected _context?: LogContext;

  constructor(protected _version: V1, payload: LogPayload, serviceSid: string, environmentSid: string, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.environmentSid = payload.environment_sid;
    this.buildSid = payload.build_sid;
    this.deploymentSid = payload.deployment_sid;
    this.functionSid = payload.function_sid;
    this.requestSid = payload.request_sid;
    this.level = payload.level;
    this.message = payload.message;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.url = payload.url;

    this._solution = { serviceSid, environmentSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the Log resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the Log resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Service that the Log resource is associated with
   */
  serviceSid?: string | null;
  /**
   * The SID of the environment in which the log occurred
   */
  environmentSid?: string | null;
  /**
   * The SID of the build that corresponds to the log
   */
  buildSid?: string | null;
  /**
   * The SID of the deployment that corresponds to the log
   */
  deploymentSid?: string | null;
  /**
   * The SID of the function whose invocation produced the log
   */
  functionSid?: string | null;
  /**
   * The SID of the request associated with the log
   */
  requestSid?: string | null;
  level?: object;
  /**
   * The log message
   */
  message?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the Log resource was created
   */
  dateCreated?: Date | null;
  /**
   * The absolute URL of the Log resource
   */
  url?: string | null;

  private get _proxy(): LogContext {
    this._context = this._context || new LogContextImpl(this._version, this._solution.serviceSid, this._solution.environmentSid, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a LogInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed LogInstance
   */
  fetch(callback?: (error: Error | null, item?: LogInstance) => any): Promise<LogInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid, 
      accountSid: this.accountSid, 
      serviceSid: this.serviceSid, 
      environmentSid: this.environmentSid, 
      buildSid: this.buildSid, 
      deploymentSid: this.deploymentSid, 
      functionSid: this.functionSid, 
      requestSid: this.requestSid, 
      level: this.level, 
      message: this.message, 
      dateCreated: this.dateCreated, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface LogSolution {
  serviceSid?: string;
  environmentSid?: string;
  sid?: string;
}

export class LogPage extends Page<V1, LogPayload, LogResource, LogInstance> {
  /**
   * Initialize the LogPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: LogSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of LogInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: LogPayload): LogInstance {
    return new LogInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.environmentSid,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

