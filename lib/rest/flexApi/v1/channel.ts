/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Flex
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


/**
 * Options to pass to create a ChannelInstance
 *
 * @property { string } flexFlowSid The SID of the Flex Flow.
 * @property { string } identity The &#x60;identity&#x60; value that uniquely identifies the new resource\\\&#39;s chat User.
 * @property { string } chatUserFriendlyName The chat participant\\\&#39;s friendly name.
 * @property { string } chatFriendlyName The chat channel\\\&#39;s friendly name.
 * @property { string } [target] The Target Contact Identity, for example the phone number of an SMS.
 * @property { string } [chatUniqueName] The chat channel\\\&#39;s unique name.
 * @property { string } [preEngagementData] The pre-engagement data.
 * @property { string } [taskSid] The SID of the TaskRouter Task. Only valid when integration type is &#x60;task&#x60;. &#x60;null&#x60; for integration types &#x60;studio&#x60; &amp; &#x60;external&#x60;
 * @property { string } [taskAttributes] The Task attributes to be added for the TaskRouter Task.
 * @property { boolean } [longLived] Whether to create the channel as long-lived.
 */
export interface ChannelListInstanceCreateOptions {
  flexFlowSid: string;
  identity: string;
  chatUserFriendlyName: string;
  chatFriendlyName: string;
  target?: string;
  chatUniqueName?: string;
  preEngagementData?: string;
  taskSid?: string;
  taskAttributes?: string;
  longLived?: boolean;
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
export interface ChannelListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: ChannelInstance, done: (err?: Error) => void) => void;
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
export interface ChannelListInstanceOptions {
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
export interface ChannelListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface ChannelContext {


  /**
   * Remove a ChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: ChannelInstance) => any): Promise<boolean>


  /**
   * Fetch a ChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ChannelInstance
   */
  fetch(callback?: (error: Error | null, item?: ChannelInstance) => any): Promise<ChannelInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class ChannelContextImpl implements ChannelContext {
  protected _solution: ChannelSolution;
  protected _uri: string;


  constructor(protected _version: V1, sid: string) {
    this._solution = { sid };
    this._uri = `/Channels/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  fetch(callback?: any): Promise<ChannelInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new ChannelInstance(operationVersion, payload, this._solution.sid));
    

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

interface ChannelPayload extends ChannelResource, Page.TwilioResponsePayload {
}

interface ChannelResource {
  account_sid?: string | null;
  flex_flow_sid?: string | null;
  sid?: string | null;
  user_sid?: string | null;
  task_sid?: string | null;
  url?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
}

export class ChannelInstance {
  protected _solution: ChannelSolution;
  protected _context?: ChannelContext;

  constructor(protected _version: V1, payload: ChannelPayload, sid?: string) {
    this.accountSid = payload.account_sid;
    this.flexFlowSid = payload.flex_flow_sid;
    this.sid = payload.sid;
    this.userSid = payload.user_sid;
    this.taskSid = payload.task_sid;
    this.url = payload.url;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource and owns this Workflow
   */
  accountSid?: string | null;
  /**
   * The SID of the Flex Flow
   */
  flexFlowSid?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the chat user
   */
  userSid?: string | null;
  /**
   * The SID of the TaskRouter Task
   */
  taskSid?: string | null;
  /**
   * The absolute URL of the Flex chat channel resource
   */
  url?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the Flex chat channel was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the Flex chat channel was last updated
   */
  dateUpdated?: Date | null;

  private get _proxy(): ChannelContext {
    this._context = this._context || new ChannelContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a ChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: ChannelInstance) => any): Promise<boolean>
     {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a ChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ChannelInstance
   */
  fetch(callback?: (error: Error | null, item?: ChannelInstance) => any): Promise<ChannelInstance>
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
      accountSid: this.accountSid, 
      flexFlowSid: this.flexFlowSid, 
      sid: this.sid, 
      userSid: this.userSid, 
      taskSid: this.taskSid, 
      url: this.url, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface ChannelSolution {
  sid?: string;
}

export class ChannelPage extends Page<V1, ChannelPayload, ChannelResource, ChannelInstance> {
  /**
   * Initialize the ChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ChannelSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ChannelInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ChannelPayload): ChannelInstance {
    return new ChannelInstance(
      this._version,
      payload,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface ChannelListInstance {
  (sid: string): ChannelContext;
  get(sid: string): ChannelContext;


  /**
   * Create a ChannelInstance
   *
   * @param { ChannelListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ChannelInstance
   */
  create(params: ChannelListInstanceCreateOptions, callback?: (error: Error | null, item?: ChannelInstance) => any): Promise<ChannelInstance>;
  create(params: any, callback?: any): Promise<ChannelInstance>



  /**
   * Streams ChannelInstance records from the API.
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
  each(callback?: (item: ChannelInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams ChannelInstance records from the API.
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
   * @param { ChannelListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: ChannelListInstanceEachOptions, callback?: (item: ChannelInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: ChannelPage) => any): Promise<ChannelPage>;
  /**
   * Retrieve a single target page of ChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ChannelPage) => any): Promise<ChannelPage>;
  getPage(params?: any, callback?: any): Promise<ChannelPage>;
  /**
   * Lists ChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: ChannelInstance[]) => any): Promise<ChannelInstance[]>;
  /**
   * Lists ChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ChannelListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: ChannelListInstanceOptions, callback?: (error: Error | null, items: ChannelInstance[]) => any): Promise<ChannelInstance[]>;
  list(params?: any, callback?: any): Promise<ChannelInstance[]>;
  /**
   * Retrieve a single page of ChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: ChannelPage) => any): Promise<ChannelPage>;
  /**
   * Retrieve a single page of ChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ChannelListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: ChannelListInstancePageOptions, callback?: (error: Error | null, items: ChannelPage) => any): Promise<ChannelPage>;
  page(params?: any, callback?: any): Promise<ChannelPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface ChannelListInstanceImpl extends ChannelListInstance {}
class ChannelListInstanceImpl implements ChannelListInstance {
  _version?: V1;
  _solution?: ChannelSolution;
  _uri?: string;

}

export function ChannelListInstance(version: V1): ChannelListInstance {
  const instance = ((sid) => instance.get(sid)) as ChannelListInstanceImpl;

  instance.get = function get(sid): ChannelContext {
    return new ChannelContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Channels`;

  instance.create = function create(params: any, callback?: any): Promise<ChannelInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.flexFlowSid === null || params.flexFlowSid === undefined) {
      throw new Error('Required parameter "params.flexFlowSid" missing.');
    }

    if (params.identity === null || params.identity === undefined) {
      throw new Error('Required parameter "params.identity" missing.');
    }

    if (params.chatUserFriendlyName === null || params.chatUserFriendlyName === undefined) {
      throw new Error('Required parameter "params.chatUserFriendlyName" missing.');
    }

    if (params.chatFriendlyName === null || params.chatFriendlyName === undefined) {
      throw new Error('Required parameter "params.chatFriendlyName" missing.');
    }

    const data: any = {};

    data['FlexFlowSid'] = params.flexFlowSid;
    data['Identity'] = params.identity;
    data['ChatUserFriendlyName'] = params.chatUserFriendlyName;
    data['ChatFriendlyName'] = params.chatFriendlyName;
    if (params.target !== undefined) data['Target'] = params.target;
    if (params.chatUniqueName !== undefined) data['ChatUniqueName'] = params.chatUniqueName;
    if (params.preEngagementData !== undefined) data['PreEngagementData'] = params.preEngagementData;
    if (params.taskSid !== undefined) data['TaskSid'] = params.taskSid;
    if (params.taskAttributes !== undefined) data['TaskAttributes'] = params.taskAttributes;
    if (params.longLived !== undefined) data['LongLived'] = serialize.bool(params.longLived);

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new ChannelInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(params?: any, callback?: any): Promise<ChannelPage> {
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
    
    operationPromise = operationPromise.then(payload => new ChannelPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<ChannelPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new ChannelPage(this._version, payload, this._solution));
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

