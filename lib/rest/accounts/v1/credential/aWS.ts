/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Accounts
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


/**
 * Options to pass to update a AWSInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 */
export interface AWSContextUpdateOptions {
  friendlyName?: string;
}


/**
 * Options to pass to create a AWSInstance
 *
 * @property { string } credentials A string that contains the AWS access credentials in the format &#x60;&lt;AWS_ACCESS_KEY_ID&gt;:&lt;AWS_SECRET_ACCESS_KEY&gt;&#x60;. For example, &#x60;AKIAIOSFODNN7EXAMPLE:wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY&#x60;
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 * @property { string } [accountSid] The SID of the Subaccount that this Credential should be associated with. Must be a valid Subaccount of the account issuing the request.
 */
export interface AWSListInstanceCreateOptions {
  credentials: string;
  friendlyName?: string;
  accountSid?: string;
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
export interface AWSListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: AWSInstance, done: (err?: Error) => void) => void;
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
export interface AWSListInstanceOptions {
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
export interface AWSListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface AWSContext {


  /**
   * Remove a AWSInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: AWSInstance) => any): Promise<boolean>


  /**
   * Fetch a AWSInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AWSInstance
   */
  fetch(callback?: (error: Error | null, item?: AWSInstance) => any): Promise<AWSInstance>


  /**
   * Update a AWSInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AWSInstance
   */
  update(callback?: (error: Error | null, item?: AWSInstance) => any): Promise<AWSInstance>;
  /**
   * Update a AWSInstance
   *
   * @param { AWSContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AWSInstance
   */
  update(params: AWSContextUpdateOptions, callback?: (error: Error | null, item?: AWSInstance) => any): Promise<AWSInstance>;
  update(params?: any, callback?: any): Promise<AWSInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class AWSContextImpl implements AWSContext {
  protected _solution: AWSSolution;
  protected _uri: string;


  constructor(protected _version: V1, sid: string) {
    this._solution = { sid };
    this._uri = `/Credentials/AWS/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  fetch(callback?: any): Promise<AWSInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new AWSInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  update(params?: any, callback?: any): Promise<AWSInstance> {
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
    
    operationPromise = operationPromise.then(payload => new AWSInstance(operationVersion, payload, this._solution.sid));
    

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

interface AWSPayload extends AWSResource, Page.TwilioResponsePayload {
}

interface AWSResource {
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
}

export class AWSInstance {
  protected _solution: AWSSolution;
  protected _context?: AWSContext;

  constructor(protected _version: V1, payload: AWSPayload, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
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
   * The URI for this resource, relative to `https://accounts.twilio.com`
   */
  url?: string | null;

  private get _proxy(): AWSContext {
    this._context = this._context || new AWSContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a AWSInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: AWSInstance) => any): Promise<boolean>
     {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a AWSInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AWSInstance
   */
  fetch(callback?: (error: Error | null, item?: AWSInstance) => any): Promise<AWSInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a AWSInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AWSInstance
   */
  update(callback?: (error: Error | null, item?: AWSInstance) => any): Promise<AWSInstance>;
  /**
   * Update a AWSInstance
   *
   * @param { AWSContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AWSInstance
   */
  update(params: AWSContextUpdateOptions, callback?: (error: Error | null, item?: AWSInstance) => any): Promise<AWSInstance>;
  update(params?: any, callback?: any): Promise<AWSInstance>
     {
    return this._proxy.update(params, callback);
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
      friendlyName: this.friendlyName, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface AWSSolution {
  sid?: string;
}

export class AWSPage extends Page<V1, AWSPayload, AWSResource, AWSInstance> {
  /**
   * Initialize the AWSPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: AWSSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AWSInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AWSPayload): AWSInstance {
    return new AWSInstance(
      this._version,
      payload,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface AWSListInstance {
  (sid: string): AWSContext;
  get(sid: string): AWSContext;


  /**
   * Create a AWSInstance
   *
   * @param { AWSListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AWSInstance
   */
  create(params: AWSListInstanceCreateOptions, callback?: (error: Error | null, item?: AWSInstance) => any): Promise<AWSInstance>;
  create(params: any, callback?: any): Promise<AWSInstance>



  /**
   * Streams AWSInstance records from the API.
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
  each(callback?: (item: AWSInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams AWSInstance records from the API.
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
   * @param { AWSListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: AWSListInstanceEachOptions, callback?: (item: AWSInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of AWSInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: AWSPage) => any): Promise<AWSPage>;
  /**
   * Retrieve a single target page of AWSInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AWSPage) => any): Promise<AWSPage>;
  getPage(params?: any, callback?: any): Promise<AWSPage>;
  /**
   * Lists AWSInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: AWSInstance[]) => any): Promise<AWSInstance[]>;
  /**
   * Lists AWSInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AWSListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: AWSListInstanceOptions, callback?: (error: Error | null, items: AWSInstance[]) => any): Promise<AWSInstance[]>;
  list(params?: any, callback?: any): Promise<AWSInstance[]>;
  /**
   * Retrieve a single page of AWSInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: AWSPage) => any): Promise<AWSPage>;
  /**
   * Retrieve a single page of AWSInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AWSListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: AWSListInstancePageOptions, callback?: (error: Error | null, items: AWSPage) => any): Promise<AWSPage>;
  page(params?: any, callback?: any): Promise<AWSPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface AWSListInstanceImpl extends AWSListInstance {}
class AWSListInstanceImpl implements AWSListInstance {
  _version?: V1;
  _solution?: AWSSolution;
  _uri?: string;

}

export function AWSListInstance(version: V1): AWSListInstance {
  const instance = ((sid) => instance.get(sid)) as AWSListInstanceImpl;

  instance.get = function get(sid): AWSContext {
    return new AWSContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Credentials/AWS`;

  instance.create = function create(params: any, callback?: any): Promise<AWSInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.credentials === null || params.credentials === undefined) {
      throw new Error('Required parameter "params.credentials" missing.');
    }

    const data: any = {};

    data['Credentials'] = params.credentials;
    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;
    if (params.accountSid !== undefined) data['AccountSid'] = params.accountSid;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new AWSInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(params?: any, callback?: any): Promise<AWSPage> {
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
    
    operationPromise = operationPromise.then(payload => new AWSPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<AWSPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new AWSPage(this._version, payload, this._solution));
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

