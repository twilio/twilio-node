/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Voice
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
import { ConnectionPolicyTargetListInstance } from "./connectionPolicy/connectionPolicyTarget";


/**
 * Options to pass to create a ConnectionPolicyInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
 */
export interface ConnectionPolicyListInstanceCreateOptions {
  friendlyName?: string;
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
export interface ConnectionPolicyListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: ConnectionPolicyInstance, done: (err?: Error) => void) => void;
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
export interface ConnectionPolicyListInstanceOptions {
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
export interface ConnectionPolicyListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



/**
 * Options to pass to update a ConnectionPolicyInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
 */
export interface ConnectionPolicyContextUpdateOptions {
  friendlyName?: string;
}

export interface ConnectionPolicyListInstance {
  (sid: string): ConnectionPolicyContext;
  get(sid: string): ConnectionPolicyContext;


  /**
   * Create a ConnectionPolicyInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConnectionPolicyInstance
   */
  create(callback?: (error: Error | null, item?: ConnectionPolicyInstance) => any): Promise<ConnectionPolicyInstance>;
  /**
   * Create a ConnectionPolicyInstance
   *
   * @param { ConnectionPolicyListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConnectionPolicyInstance
   */
  create(params: ConnectionPolicyListInstanceCreateOptions, callback?: (error: Error | null, item?: ConnectionPolicyInstance) => any): Promise<ConnectionPolicyInstance>;
  create(params?: any, callback?: any): Promise<ConnectionPolicyInstance>



  /**
   * Streams ConnectionPolicyInstance records from the API.
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
  each(callback?: (item: ConnectionPolicyInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams ConnectionPolicyInstance records from the API.
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
   * @param { ConnectionPolicyListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: ConnectionPolicyListInstanceEachOptions, callback?: (item: ConnectionPolicyInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ConnectionPolicyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: ConnectionPolicyPage) => any): Promise<ConnectionPolicyPage>;
  /**
   * Retrieve a single target page of ConnectionPolicyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ConnectionPolicyPage) => any): Promise<ConnectionPolicyPage>;
  getPage(params?: any, callback?: any): Promise<ConnectionPolicyPage>;
  /**
   * Lists ConnectionPolicyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: ConnectionPolicyInstance[]) => any): Promise<ConnectionPolicyInstance[]>;
  /**
   * Lists ConnectionPolicyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ConnectionPolicyListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: ConnectionPolicyListInstanceOptions, callback?: (error: Error | null, items: ConnectionPolicyInstance[]) => any): Promise<ConnectionPolicyInstance[]>;
  list(params?: any, callback?: any): Promise<ConnectionPolicyInstance[]>;
  /**
   * Retrieve a single page of ConnectionPolicyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: ConnectionPolicyPage) => any): Promise<ConnectionPolicyPage>;
  /**
   * Retrieve a single page of ConnectionPolicyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ConnectionPolicyListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: ConnectionPolicyListInstancePageOptions, callback?: (error: Error | null, items: ConnectionPolicyPage) => any): Promise<ConnectionPolicyPage>;
  page(params?: any, callback?: any): Promise<ConnectionPolicyPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface ConnectionPolicyListInstanceImpl extends ConnectionPolicyListInstance {}
class ConnectionPolicyListInstanceImpl implements ConnectionPolicyListInstance {
  _version?: V1;
  _solution?: ConnectionPolicySolution;
  _uri?: string;

}

export function ConnectionPolicyListInstance(version: V1): ConnectionPolicyListInstance {
  const instance = ((sid) => instance.get(sid)) as ConnectionPolicyListInstanceImpl;

  instance.get = function get(sid): ConnectionPolicyContext {
    return new ConnectionPolicyContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/ConnectionPolicies`;

  instance.create = function create(params?: any, callback?: any): Promise<ConnectionPolicyInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new ConnectionPolicyInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(params?: any, callback?: any): Promise<ConnectionPolicyPage> {
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
    
    operationPromise = operationPromise.then(payload => new ConnectionPolicyPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<ConnectionPolicyPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new ConnectionPolicyPage(this._version, payload, this._solution));
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


export interface ConnectionPolicyContext {

  targets: ConnectionPolicyTargetListInstance;

  /**
   * Remove a ConnectionPolicyInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a ConnectionPolicyInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConnectionPolicyInstance
   */
  fetch(callback?: (error: Error | null, item?: ConnectionPolicyInstance) => any): Promise<ConnectionPolicyInstance>


  /**
   * Update a ConnectionPolicyInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConnectionPolicyInstance
   */
  update(callback?: (error: Error | null, item?: ConnectionPolicyInstance) => any): Promise<ConnectionPolicyInstance>;
  /**
   * Update a ConnectionPolicyInstance
   *
   * @param { ConnectionPolicyContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConnectionPolicyInstance
   */
  update(params: ConnectionPolicyContextUpdateOptions, callback?: (error: Error | null, item?: ConnectionPolicyInstance) => any): Promise<ConnectionPolicyInstance>;
  update(params?: any, callback?: any): Promise<ConnectionPolicyInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class ConnectionPolicyContextImpl implements ConnectionPolicyContext {
  protected _solution: ConnectionPolicySolution;
  protected _uri: string;

  protected _targets?: ConnectionPolicyTargetListInstance;

  constructor(protected _version: V1, sid: string) {
    this._solution = { sid };
    this._uri = `/ConnectionPolicies/${sid}`;
  }

  get targets(): ConnectionPolicyTargetListInstance {
    this._targets = this._targets || ConnectionPolicyTargetListInstance(this._version, this._solution.sid);
    return this._targets;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  fetch(callback?: any): Promise<ConnectionPolicyInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new ConnectionPolicyInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  update(params?: any, callback?: any): Promise<ConnectionPolicyInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new ConnectionPolicyInstance(operationVersion, payload, this._solution.sid));
    

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

interface ConnectionPolicyPayload extends ConnectionPolicyResource, Page.TwilioResponsePayload {
}

interface ConnectionPolicyResource {
  account_sid?: string | null;
  sid?: string | null;
  friendly_name?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  links?: object | null;
}

export class ConnectionPolicyInstance {
  protected _solution: ConnectionPolicySolution;
  protected _context?: ConnectionPolicyContext;

  constructor(protected _version: V1, payload: ConnectionPolicyPayload, sid?: string) {
    this.accountSid = payload.account_sid;
    this.sid = payload.sid;
    this.friendlyName = payload.friendly_name;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;
  /**
   * The URLs of related resources
   */
  links?: object | null;

  private get _proxy(): ConnectionPolicyContext {
    this._context = this._context || new ConnectionPolicyContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a ConnectionPolicyInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>
     {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a ConnectionPolicyInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConnectionPolicyInstance
   */
  fetch(callback?: (error: Error | null, item?: ConnectionPolicyInstance) => any): Promise<ConnectionPolicyInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ConnectionPolicyInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConnectionPolicyInstance
   */
  update(callback?: (error: Error | null, item?: ConnectionPolicyInstance) => any): Promise<ConnectionPolicyInstance>;
  /**
   * Update a ConnectionPolicyInstance
   *
   * @param { ConnectionPolicyContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConnectionPolicyInstance
   */
  update(params: ConnectionPolicyContextUpdateOptions, callback?: (error: Error | null, item?: ConnectionPolicyInstance) => any): Promise<ConnectionPolicyInstance>;
  update(params?: any, callback?: any): Promise<ConnectionPolicyInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the targets.
   */
  targets(): ConnectionPolicyTargetListInstance {
    return this._proxy.targets;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid, 
      sid: this.sid, 
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
export interface ConnectionPolicySolution {
  sid?: string;
}

export class ConnectionPolicyPage extends Page<V1, ConnectionPolicyPayload, ConnectionPolicyResource, ConnectionPolicyInstance> {
  /**
   * Initialize the ConnectionPolicyPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ConnectionPolicySolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ConnectionPolicyInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ConnectionPolicyPayload): ConnectionPolicyInstance {
    return new ConnectionPolicyInstance(
      this._version,
      payload,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

