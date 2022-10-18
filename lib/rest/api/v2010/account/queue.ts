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
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { MemberListInstance } from "./queue/member";


/**
 * Options to pass to create a QueueInstance
 *
 * @property { string } friendlyName A descriptive string that you created to describe this resource. It can be up to 64 characters long.
 * @property { number } [maxSize] The maximum number of calls allowed to be in the queue. The default is 100. The maximum is 5000.
 */
export interface QueueListInstanceCreateOptions {
  friendlyName: string;
  maxSize?: number;
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
export interface QueueListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: QueueInstance, done: (err?: Error) => void) => void;
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
export interface QueueListInstanceOptions {
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
export interface QueueListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



/**
 * Options to pass to update a QueueInstance
 *
 * @property { string } [friendlyName] A descriptive string that you created to describe this resource. It can be up to 64 characters long.
 * @property { number } [maxSize] The maximum number of calls allowed to be in the queue. The default is 100. The maximum is 5000.
 */
export interface QueueContextUpdateOptions {
  friendlyName?: string;
  maxSize?: number;
}

export interface QueueListInstance {
  (sid: string): QueueContext;
  get(sid: string): QueueContext;


  /**
   * Create a QueueInstance
   *
   * @param { QueueListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed QueueInstance
   */
  create(params: QueueListInstanceCreateOptions, callback?: (error: Error | null, item?: QueueInstance) => any): Promise<QueueInstance>;
  create(params: any, callback?: any): Promise<QueueInstance>



  /**
   * Streams QueueInstance records from the API.
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
  each(callback?: (item: QueueInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams QueueInstance records from the API.
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
   * @param { QueueListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: QueueListInstanceEachOptions, callback?: (item: QueueInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of QueueInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: QueuePage) => any): Promise<QueuePage>;
  /**
   * Retrieve a single target page of QueueInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: QueuePage) => any): Promise<QueuePage>;
  getPage(params?: any, callback?: any): Promise<QueuePage>;
  /**
   * Lists QueueInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: QueueInstance[]) => any): Promise<QueueInstance[]>;
  /**
   * Lists QueueInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { QueueListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: QueueListInstanceOptions, callback?: (error: Error | null, items: QueueInstance[]) => any): Promise<QueueInstance[]>;
  list(params?: any, callback?: any): Promise<QueueInstance[]>;
  /**
   * Retrieve a single page of QueueInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: QueuePage) => any): Promise<QueuePage>;
  /**
   * Retrieve a single page of QueueInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { QueueListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: QueueListInstancePageOptions, callback?: (error: Error | null, items: QueuePage) => any): Promise<QueuePage>;
  page(params?: any, callback?: any): Promise<QueuePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface QueueListInstanceImpl extends QueueListInstance {}
class QueueListInstanceImpl implements QueueListInstance {
  _version?: V2010;
  _solution?: QueueSolution;
  _uri?: string;

}

export function QueueListInstance(version: V2010, accountSid: string): QueueListInstance {
  const instance = ((sid) => instance.get(sid)) as QueueListInstanceImpl;

  instance.get = function get(sid): QueueContext {
    return new QueueContextImpl(version, accountSid, sid);
  }

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/Queues.json`;

  instance.create = function create(params: any, callback?: any): Promise<QueueInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.friendlyName === null || params.friendlyName === undefined) {
      throw new Error('Required parameter "params.friendlyName" missing.');
    }

    const data: any = {};

    data['FriendlyName'] = params.friendlyName;
    if (params.maxSize !== undefined) data['MaxSize'] = params.maxSize;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new QueueInstance(operationVersion, payload, this._solution.accountSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(params?: any, callback?: any): Promise<QueuePage> {
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
    
    operationPromise = operationPromise.then(payload => new QueuePage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<QueuePage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new QueuePage(this._version, payload, this._solution));
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


export interface QueueContext {

  members: MemberListInstance;

  /**
   * Remove a QueueInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a QueueInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed QueueInstance
   */
  fetch(callback?: (error: Error | null, item?: QueueInstance) => any): Promise<QueueInstance>


  /**
   * Update a QueueInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed QueueInstance
   */
  update(callback?: (error: Error | null, item?: QueueInstance) => any): Promise<QueueInstance>;
  /**
   * Update a QueueInstance
   *
   * @param { QueueContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed QueueInstance
   */
  update(params: QueueContextUpdateOptions, callback?: (error: Error | null, item?: QueueInstance) => any): Promise<QueueInstance>;
  update(params?: any, callback?: any): Promise<QueueInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class QueueContextImpl implements QueueContext {
  protected _solution: QueueSolution;
  protected _uri: string;

  protected _members?: MemberListInstance;

  constructor(protected _version: V2010, accountSid: string, sid: string) {
    this._solution = { accountSid, sid };
    this._uri = `/Accounts/${accountSid}/Queues/${sid}.json`;
  }

  get members(): MemberListInstance {
    this._members = this._members || MemberListInstance(this._version, this._solution.accountSid, this._solution.sid);
    return this._members;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  fetch(callback?: any): Promise<QueueInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new QueueInstance(operationVersion, payload, this._solution.accountSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  update(params?: any, callback?: any): Promise<QueueInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;
    if (params.maxSize !== undefined) data['MaxSize'] = params.maxSize;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new QueueInstance(operationVersion, payload, this._solution.accountSid, this._solution.sid));
    

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

interface QueuePayload extends QueueResource, Page.TwilioResponsePayload {
}

interface QueueResource {
  date_updated?: string | null;
  current_size?: number | null;
  friendly_name?: string | null;
  uri?: string | null;
  account_sid?: string | null;
  average_wait_time?: number | null;
  sid?: string | null;
  date_created?: string | null;
  max_size?: number | null;
}

export class QueueInstance {
  protected _solution: QueueSolution;
  protected _context?: QueueContext;

  constructor(protected _version: V2010, payload: QueuePayload, accountSid: string, sid?: string) {
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.currentSize = deserialize.integer(payload.current_size);
    this.friendlyName = payload.friendly_name;
    this.uri = payload.uri;
    this.accountSid = payload.account_sid;
    this.averageWaitTime = deserialize.integer(payload.average_wait_time);
    this.sid = payload.sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.maxSize = deserialize.integer(payload.max_size);

    this._solution = { accountSid, sid: sid || this.sid };
  }

  /**
   * The RFC 2822 date and time in GMT that this resource was last updated
   */
  dateUpdated?: string | null;
  /**
   * The number of calls currently in the queue.
   */
  currentSize?: number | null;
  /**
   * A string that you assigned to describe this resource
   */
  friendlyName?: string | null;
  /**
   * The URI of this resource, relative to `https://api.twilio.com`
   */
  uri?: string | null;
  /**
   * The SID of the Account that created this resource
   */
  accountSid?: string | null;
  /**
   * Average wait time of members in the queue
   */
  averageWaitTime?: number | null;
  /**
   * The unique string that identifies this resource
   */
  sid?: string | null;
  /**
   * The RFC 2822 date and time in GMT that this resource was created
   */
  dateCreated?: string | null;
  /**
   * The max number of calls allowed in the queue
   */
  maxSize?: number | null;

  private get _proxy(): QueueContext {
    this._context = this._context || new QueueContextImpl(this._version, this._solution.accountSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a QueueInstance
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
   * Fetch a QueueInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed QueueInstance
   */
  fetch(callback?: (error: Error | null, item?: QueueInstance) => any): Promise<QueueInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a QueueInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed QueueInstance
   */
  update(callback?: (error: Error | null, item?: QueueInstance) => any): Promise<QueueInstance>;
  /**
   * Update a QueueInstance
   *
   * @param { QueueContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed QueueInstance
   */
  update(params: QueueContextUpdateOptions, callback?: (error: Error | null, item?: QueueInstance) => any): Promise<QueueInstance>;
  update(params?: any, callback?: any): Promise<QueueInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the members.
   */
  members(): MemberListInstance {
    return this._proxy.members;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      dateUpdated: this.dateUpdated, 
      currentSize: this.currentSize, 
      friendlyName: this.friendlyName, 
      uri: this.uri, 
      accountSid: this.accountSid, 
      averageWaitTime: this.averageWaitTime, 
      sid: this.sid, 
      dateCreated: this.dateCreated, 
      maxSize: this.maxSize
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface QueueSolution {
  accountSid?: string;
  sid?: string;
}

export class QueuePage extends Page<V2010, QueuePayload, QueueResource, QueueInstance> {
  /**
   * Initialize the QueuePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: QueueSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of QueueInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: QueuePayload): QueueInstance {
    return new QueueInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

