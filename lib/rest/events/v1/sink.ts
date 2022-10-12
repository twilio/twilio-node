/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Events
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
import { SinkTestListInstance } from "./sink/sinkTest";
import { SinkValidateListInstance } from "./sink/sinkValidate";


/**
 * Options to pass to create a SinkInstance
 *
 * @property { string } description A human readable description for the Sink **This value should not contain PII.**
 * @property { any } sinkConfiguration The information required for Twilio to connect to the provided Sink encoded as JSON.
 * @property { SinkEnumSinkType } sinkType 
 */
export interface SinkListInstanceCreateOptions {
  description: string;
  sinkConfiguration: any;
  sinkType: SinkEnumSinkType;
}
/**
 * Options to pass to each
 *
 * @property { boolean } [inUse] A boolean query parameter filtering the results to return sinks used/not used by a subscription.
 * @property { string } [status] A String query parameter filtering the results by status &#x60;initialized&#x60;, &#x60;validating&#x60;, &#x60;active&#x60; or &#x60;failed&#x60;.
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
export interface SinkListInstanceEachOptions {
  inUse?: boolean;
  status?: string;
  pageSize?: number;
  callback?: (item: SinkInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { boolean } [inUse] A boolean query parameter filtering the results to return sinks used/not used by a subscription.
 * @property { string } [status] A String query parameter filtering the results by status &#x60;initialized&#x60;, &#x60;validating&#x60;, &#x60;active&#x60; or &#x60;failed&#x60;.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SinkListInstanceOptions {
  inUse?: boolean;
  status?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { boolean } [inUse] A boolean query parameter filtering the results to return sinks used/not used by a subscription.
 * @property { string } [status] A String query parameter filtering the results by status &#x60;initialized&#x60;, &#x60;validating&#x60;, &#x60;active&#x60; or &#x60;failed&#x60;.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface SinkListInstancePageOptions {
  inUse?: boolean;
  status?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}




/**
 * Options to pass to update a SinkInstance
 *
 * @property { string } description A human readable description for the Sink **This value should not contain PII.**
 */
export interface SinkContextUpdateOptions {
  description: string;
}

export interface SinkListInstance {
  (sid: string): SinkContext;
  get(sid: string): SinkContext;


  /**
   * Create a SinkInstance
   *
   * @param { SinkListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SinkInstance
   */
  create(params: SinkListInstanceCreateOptions, callback?: (error: Error | null, item?: SinkInstance) => any): Promise<SinkInstance>;
  create(params: any, callback?: any): Promise<SinkInstance>



  /**
   * Streams SinkInstance records from the API.
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
  each(callback?: (item: SinkInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams SinkInstance records from the API.
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
   * @param { SinkListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: SinkListInstanceEachOptions, callback?: (item: SinkInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of SinkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: SinkPage) => any): Promise<SinkPage>;
  /**
   * Retrieve a single target page of SinkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SinkPage) => any): Promise<SinkPage>;
  getPage(params?: any, callback?: any): Promise<SinkPage>;
  /**
   * Lists SinkInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: SinkInstance[]) => any): Promise<SinkInstance[]>;
  /**
   * Lists SinkInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SinkListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: SinkListInstanceOptions, callback?: (error: Error | null, items: SinkInstance[]) => any): Promise<SinkInstance[]>;
  list(params?: any, callback?: any): Promise<SinkInstance[]>;
  /**
   * Retrieve a single page of SinkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: SinkPage) => any): Promise<SinkPage>;
  /**
   * Retrieve a single page of SinkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SinkListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: SinkListInstancePageOptions, callback?: (error: Error | null, items: SinkPage) => any): Promise<SinkPage>;
  page(params?: any, callback?: any): Promise<SinkPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface SinkListInstanceImpl extends SinkListInstance {}
class SinkListInstanceImpl implements SinkListInstance {
  _version?: V1;
  _solution?: SinkSolution;
  _uri?: string;

}

export function SinkListInstance(version: V1): SinkListInstance {
  const instance = ((sid) => instance.get(sid)) as SinkListInstanceImpl;

  instance.get = function get(sid): SinkContext {
    return new SinkContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Sinks`;

  instance.create = function create(params: any, callback?: any): Promise<SinkInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.description === null || params.description === undefined) {
      throw new Error('Required parameter "params.description" missing.');
    }

    if (params.sinkConfiguration === null || params.sinkConfiguration === undefined) {
      throw new Error('Required parameter "params.sinkConfiguration" missing.');
    }

    if (params.sinkType === null || params.sinkType === undefined) {
      throw new Error('Required parameter "params.sinkType" missing.');
    }

    const data: any = {};

    data['Description'] = params.description;
    data['SinkConfiguration'] = params.sinkConfiguration;
    data['SinkType'] = params.sinkType;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new SinkInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(params?: any, callback?: any): Promise<SinkPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.inUse !== undefined) data['InUse'] = serialize.bool(params.inUse);
    if (params.status !== undefined) data['Status'] = params.status;
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new SinkPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<SinkPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new SinkPage(this._version, payload, this._solution));
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


export interface SinkContext {

  sink_test: SinkTestListInstance;
  sink_validate: SinkValidateListInstance;

  /**
   * Remove a SinkInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: SinkInstance) => any): Promise<boolean>


  /**
   * Fetch a SinkInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SinkInstance
   */
  fetch(callback?: (error: Error | null, item?: SinkInstance) => any): Promise<SinkInstance>


  /**
   * Update a SinkInstance
   *
   * @param { SinkContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SinkInstance
   */
  update(params: SinkContextUpdateOptions, callback?: (error: Error | null, item?: SinkInstance) => any): Promise<SinkInstance>;
  update(params: any, callback?: any): Promise<SinkInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class SinkContextImpl implements SinkContext {
  protected _solution: SinkSolution;
  protected _uri: string;

  protected _sink_test?: SinkTestListInstance;
  protected _sink_validate?: SinkValidateListInstance;

  constructor(protected _version: V1, sid: string) {
    this._solution = { sid };
    this._uri = `/Sinks/${sid}`;
  }

  get sink_test(): SinkTestListInstance {
    this._sink_test = this._sink_test || SinkTestListInstance(this._version, this._solution.sid);
    return this._sink_test;
  }

  get sink_validate(): SinkValidateListInstance {
    this._sink_validate = this._sink_validate || SinkValidateListInstance(this._version, this._solution.sid);
    return this._sink_validate;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  fetch(callback?: any): Promise<SinkInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new SinkInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  update(params: any, callback?: any): Promise<SinkInstance> {
      if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.description === null || params.description === undefined) {
      throw new Error('Required parameter "params.description" missing.');
    }

    const data: any = {};

    data['Description'] = params.description;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new SinkInstance(operationVersion, payload, this._solution.sid));
    

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

interface SinkPayload extends SinkResource, Page.TwilioResponsePayload {
}

interface SinkResource {
  date_created?: Date | null;
  date_updated?: Date | null;
  description?: string | null;
  sid?: string | null;
  sink_configuration?: any | null;
  sink_type?: object;
  status?: object;
  url?: string | null;
  links?: object | null;
}

export class SinkInstance {
  protected _solution: SinkSolution;
  protected _context?: SinkContext;

  constructor(protected _version: V1, payload: SinkPayload, sid?: string) {
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.description = payload.description;
    this.sid = payload.sid;
    this.sinkConfiguration = payload.sink_configuration;
    this.sinkType = payload.sink_type;
    this.status = payload.status;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The date this Sink was created
   */
  dateCreated?: Date | null;
  /**
   * The date this Sink was updated
   */
  dateUpdated?: Date | null;
  /**
   * Sink Description
   */
  description?: string | null;
  /**
   * A string that uniquely identifies this Sink.
   */
  sid?: string | null;
  /**
   * JSON Sink configuration.
   */
  sinkConfiguration?: any | null;
  sinkType?: object;
  status?: object;
  /**
   * The URL of this resource.
   */
  url?: string | null;
  /**
   * Nested resource URLs.
   */
  links?: object | null;

  private get _proxy(): SinkContext {
    this._context = this._context || new SinkContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a SinkInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: SinkInstance) => any): Promise<boolean>
     {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a SinkInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SinkInstance
   */
  fetch(callback?: (error: Error | null, item?: SinkInstance) => any): Promise<SinkInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SinkInstance
   *
   * @param { SinkContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SinkInstance
   */
  update(params: SinkContextUpdateOptions, callback?: (error: Error | null, item?: SinkInstance) => any): Promise<SinkInstance>;
  update(params: any, callback?: any): Promise<SinkInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the sink_test.
   */
  sink_test(): SinkTestListInstance {
    return this._proxy.sink_test;
  }

  /**
   * Access the sink_validate.
   */
  sink_validate(): SinkValidateListInstance {
    return this._proxy.sink_validate;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      description: this.description, 
      sid: this.sid, 
      sinkConfiguration: this.sinkConfiguration, 
      sinkType: this.sinkType, 
      status: this.status, 
      url: this.url, 
      links: this.links
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface SinkSolution {
  sid?: string;
}

export class SinkPage extends Page<V1, SinkPayload, SinkResource, SinkInstance> {
  /**
   * Initialize the SinkPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SinkSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SinkInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SinkPayload): SinkInstance {
    return new SinkInstance(
      this._version,
      payload,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

