/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Ip_messaging
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");


/**
 * Options to pass to each
 *
 * @property { Array<UserBindingEnumBindingType> } [bindingType] 
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
export interface UserBindingListInstanceEachOptions {
  bindingType?: Array<UserBindingEnumBindingType>;
  pageSize?: number;
  callback?: (item: UserBindingInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { Array<UserBindingEnumBindingType> } [bindingType] 
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface UserBindingListInstanceOptions {
  bindingType?: Array<UserBindingEnumBindingType>;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { Array<UserBindingEnumBindingType> } [bindingType] 
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface UserBindingListInstancePageOptions {
  bindingType?: Array<UserBindingEnumBindingType>;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface UserBindingContext {


  /**
   * Remove a UserBindingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: UserBindingInstance) => any): Promise<boolean>


  /**
   * Fetch a UserBindingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserBindingInstance
   */
  fetch(callback?: (error: Error | null, item?: UserBindingInstance) => any): Promise<UserBindingInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class UserBindingContextImpl implements UserBindingContext {
  protected _solution: UserBindingSolution;
  protected _uri: string;


  constructor(protected _version: V2, serviceSid: string, userSid: string, sid: string) {
    this._solution = { serviceSid, userSid, sid };
    this._uri = `/Services/${serviceSid}/Users/${userSid}/Bindings/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  fetch(callback?: any): Promise<UserBindingInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new UserBindingInstance(operationVersion, payload, this._solution.serviceSid, this._solution.userSid, this._solution.sid));
    

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

interface UserBindingPayload extends UserBindingResource, Page.TwilioResponsePayload {
}

interface UserBindingResource {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  endpoint?: string | null;
  identity?: string | null;
  user_sid?: string | null;
  credential_sid?: string | null;
  binding_type?: object;
  message_types?: Array<string> | null;
  url?: string | null;
}

export class UserBindingInstance {
  protected _solution: UserBindingSolution;
  protected _context?: UserBindingContext;

  constructor(protected _version: V2, payload: UserBindingPayload, serviceSid: string, userSid: string, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.endpoint = payload.endpoint;
    this.identity = payload.identity;
    this.userSid = payload.user_sid;
    this.credentialSid = payload.credential_sid;
    this.bindingType = payload.binding_type;
    this.messageTypes = payload.message_types;
    this.url = payload.url;

    this._solution = { serviceSid, userSid, sid: sid || this.sid };
  }

  sid?: string | null;
  accountSid?: string | null;
  serviceSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  endpoint?: string | null;
  identity?: string | null;
  userSid?: string | null;
  credentialSid?: string | null;
  bindingType?: object;
  messageTypes?: Array<string> | null;
  url?: string | null;

  private get _proxy(): UserBindingContext {
    this._context = this._context || new UserBindingContextImpl(this._version, this._solution.serviceSid, this._solution.userSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a UserBindingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: UserBindingInstance) => any): Promise<boolean>
     {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a UserBindingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserBindingInstance
   */
  fetch(callback?: (error: Error | null, item?: UserBindingInstance) => any): Promise<UserBindingInstance>
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
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      endpoint: this.endpoint, 
      identity: this.identity, 
      userSid: this.userSid, 
      credentialSid: this.credentialSid, 
      bindingType: this.bindingType, 
      messageTypes: this.messageTypes, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface UserBindingSolution {
  serviceSid?: string;
  userSid?: string;
  sid?: string;
}

export class UserBindingPage extends Page<V2, UserBindingPayload, UserBindingResource, UserBindingInstance> {
  /**
   * Initialize the UserBindingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: UserBindingSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of UserBindingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: UserBindingPayload): UserBindingInstance {
    return new UserBindingInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.userSid,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface UserBindingListInstance {
  (sid: string): UserBindingContext;
  get(sid: string): UserBindingContext;



  /**
   * Streams UserBindingInstance records from the API.
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
  each(callback?: (item: UserBindingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams UserBindingInstance records from the API.
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
   * @param { UserBindingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: UserBindingListInstanceEachOptions, callback?: (item: UserBindingInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of UserBindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: UserBindingPage) => any): Promise<UserBindingPage>;
  /**
   * Retrieve a single target page of UserBindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: UserBindingPage) => any): Promise<UserBindingPage>;
  getPage(params?: any, callback?: any): Promise<UserBindingPage>;
  /**
   * Lists UserBindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: UserBindingInstance[]) => any): Promise<UserBindingInstance[]>;
  /**
   * Lists UserBindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UserBindingListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: UserBindingListInstanceOptions, callback?: (error: Error | null, items: UserBindingInstance[]) => any): Promise<UserBindingInstance[]>;
  list(params?: any, callback?: any): Promise<UserBindingInstance[]>;
  /**
   * Retrieve a single page of UserBindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: UserBindingPage) => any): Promise<UserBindingPage>;
  /**
   * Retrieve a single page of UserBindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UserBindingListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: UserBindingListInstancePageOptions, callback?: (error: Error | null, items: UserBindingPage) => any): Promise<UserBindingPage>;
  page(params?: any, callback?: any): Promise<UserBindingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface UserBindingListInstanceImpl extends UserBindingListInstance {}
class UserBindingListInstanceImpl implements UserBindingListInstance {
  _version?: V2;
  _solution?: UserBindingSolution;
  _uri?: string;

}

export function UserBindingListInstance(version: V2, serviceSid: string, userSid: string): UserBindingListInstance {
  const instance = ((sid) => instance.get(sid)) as UserBindingListInstanceImpl;

  instance.get = function get(sid): UserBindingContext {
    return new UserBindingContextImpl(version, serviceSid, userSid, sid);
  }

  instance._version = version;
  instance._solution = { serviceSid, userSid };
  instance._uri = `/Services/${serviceSid}/Users/${userSid}/Bindings`;

  instance.page = function page(params?: any, callback?: any): Promise<UserBindingPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.bindingType !== undefined) data['BindingType'] = serialize.map(params.bindingType, ((e) => e));
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new UserBindingPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<UserBindingPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new UserBindingPage(this._version, payload, this._solution));
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

