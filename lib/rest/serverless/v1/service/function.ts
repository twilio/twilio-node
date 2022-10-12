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
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { FunctionVersionListInstance } from "./function/functionVersion";


/**
 * Options to pass to create a FunctionInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the Function resource. It can be a maximum of 255 characters.
 */
export interface FunctionListInstanceCreateOptions {
  friendlyName: string;
}
/**
 * Options to pass to each
 *
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
export interface FunctionListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: FunctionInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface FunctionListInstanceOptions {
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface FunctionListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}




/**
 * Options to pass to update a FunctionInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the Function resource. It can be a maximum of 255 characters.
 */
export interface FunctionContextUpdateOptions {
  friendlyName: string;
}

export interface FunctionListInstance {
  (sid: string): FunctionContext;
  get(sid: string): FunctionContext;


  /**
   * Create a FunctionInstance
   *
   * @param { FunctionListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FunctionInstance
   */
  create(params: FunctionListInstanceCreateOptions, callback?: (error: Error | null, item?: FunctionInstance) => any): Promise<FunctionInstance>;
  create(params: any, callback?: any): Promise<FunctionInstance>



  /**
   * Streams FunctionInstance records from the API.
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
  each(callback?: (item: FunctionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams FunctionInstance records from the API.
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
   * @param { FunctionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: FunctionListInstanceEachOptions, callback?: (item: FunctionInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of FunctionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: FunctionPage) => any): Promise<FunctionPage>;
  /**
   * Retrieve a single target page of FunctionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: FunctionPage) => any): Promise<FunctionPage>;
  getPage(params?: any, callback?: any): Promise<FunctionPage>;
  /**
   * Lists FunctionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: FunctionInstance[]) => any): Promise<FunctionInstance[]>;
  /**
   * Lists FunctionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FunctionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: FunctionListInstanceOptions, callback?: (error: Error | null, items: FunctionInstance[]) => any): Promise<FunctionInstance[]>;
  list(params?: any, callback?: any): Promise<FunctionInstance[]>;
  /**
   * Retrieve a single page of FunctionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: FunctionPage) => any): Promise<FunctionPage>;
  /**
   * Retrieve a single page of FunctionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FunctionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: FunctionListInstancePageOptions, callback?: (error: Error | null, items: FunctionPage) => any): Promise<FunctionPage>;
  page(params?: any, callback?: any): Promise<FunctionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface FunctionListInstanceImpl extends FunctionListInstance {}
class FunctionListInstanceImpl implements FunctionListInstance {
  _version?: V1;
  _solution?: FunctionSolution;
  _uri?: string;

}

export function FunctionListInstance(version: V1, serviceSid: string): FunctionListInstance {
  const instance = ((sid) => instance.get(sid)) as FunctionListInstanceImpl;

  instance.get = function get(sid): FunctionContext {
    return new FunctionContextImpl(version, serviceSid, sid);
  }

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Functions`;

  instance.create = function create(params: any, callback?: any): Promise<FunctionInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.friendlyName === null || params.friendlyName === undefined) {
      throw new Error('Required parameter "params.friendlyName" missing.');
    }

    const data: any = {};

    data['FriendlyName'] = params.friendlyName;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new FunctionInstance(operationVersion, payload, this._solution.serviceSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(params?: any, callback?: any): Promise<FunctionPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new FunctionPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<FunctionPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new FunctionPage(this._version, payload, this._solution));
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


export interface FunctionContext {

  function_version: FunctionVersionListInstance;

  /**
   * Remove a FunctionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: FunctionInstance) => any): Promise<boolean>


  /**
   * Fetch a FunctionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FunctionInstance
   */
  fetch(callback?: (error: Error | null, item?: FunctionInstance) => any): Promise<FunctionInstance>


  /**
   * Update a FunctionInstance
   *
   * @param { FunctionContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FunctionInstance
   */
  update(params: FunctionContextUpdateOptions, callback?: (error: Error | null, item?: FunctionInstance) => any): Promise<FunctionInstance>;
  update(params: any, callback?: any): Promise<FunctionInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class FunctionContextImpl implements FunctionContext {
  protected _solution: FunctionSolution;
  protected _uri: string;

  protected _function_version?: FunctionVersionListInstance;

  constructor(protected _version: V1, serviceSid: string, sid: string) {
    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Functions/${sid}`;
  }

  get function_version(): FunctionVersionListInstance {
    this._function_version = this._function_version || FunctionVersionListInstance(this._version, this._solution.serviceSid, this._solution.sid);
    return this._function_version;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  fetch(callback?: any): Promise<FunctionInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new FunctionInstance(operationVersion, payload, this._solution.serviceSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  update(params: any, callback?: any): Promise<FunctionInstance> {
      if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.friendlyName === null || params.friendlyName === undefined) {
      throw new Error('Required parameter "params.friendlyName" missing.');
    }

    const data: any = {};

    data['FriendlyName'] = params.friendlyName;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new FunctionInstance(operationVersion, payload, this._solution.serviceSid, this._solution.sid));
    

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

interface FunctionPayload extends FunctionResource, Page.TwilioResponsePayload {
}

interface FunctionResource {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  friendly_name?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  links?: object | null;
}

export class FunctionInstance {
  protected _solution: FunctionSolution;
  protected _context?: FunctionContext;

  constructor(protected _version: V1, payload: FunctionPayload, serviceSid: string, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.friendlyName = payload.friendly_name;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the Function resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the Function resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Service that the Function resource is associated with
   */
  serviceSid?: string | null;
  /**
   * The string that you assigned to describe the Function resource
   */
  friendlyName?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the Function resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the Function resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the Function resource
   */
  url?: string | null;
  /**
   * The URLs of nested resources of the Function resource
   */
  links?: object | null;

  private get _proxy(): FunctionContext {
    this._context = this._context || new FunctionContextImpl(this._version, this._solution.serviceSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a FunctionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: FunctionInstance) => any): Promise<boolean>
     {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a FunctionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FunctionInstance
   */
  fetch(callback?: (error: Error | null, item?: FunctionInstance) => any): Promise<FunctionInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a FunctionInstance
   *
   * @param { FunctionContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FunctionInstance
   */
  update(params: FunctionContextUpdateOptions, callback?: (error: Error | null, item?: FunctionInstance) => any): Promise<FunctionInstance>;
  update(params: any, callback?: any): Promise<FunctionInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the function_version.
   */
  function_version(): FunctionVersionListInstance {
    return this._proxy.function_version;
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
      friendlyName: this.friendlyName, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      url: this.url, 
      links: this.links
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface FunctionSolution {
  serviceSid?: string;
  sid?: string;
}

export class FunctionPage extends Page<V1, FunctionPayload, FunctionResource, FunctionInstance> {
  /**
   * Initialize the FunctionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: FunctionSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of FunctionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FunctionPayload): FunctionInstance {
    return new FunctionInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

