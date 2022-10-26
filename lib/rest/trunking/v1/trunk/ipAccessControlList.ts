/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trunking
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
 * Options to pass to create a IpAccessControlListInstance
 *
 * @property { string } ipAccessControlListSid The SID of the [IP Access Control List](https://www.twilio.com/docs/voice/sip/api/sip-ipaccesscontrollist-resource) that you want to associate with the trunk.
 */
export interface IpAccessControlListListInstanceCreateOptions {
  ipAccessControlListSid: string;
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
export interface IpAccessControlListListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: IpAccessControlListInstance, done: (err?: Error) => void) => void;
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
export interface IpAccessControlListListInstanceOptions {
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
export interface IpAccessControlListListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface IpAccessControlListListInstance {
  (sid: string): IpAccessControlListContext;
  get(sid: string): IpAccessControlListContext;


  /**
   * Create a IpAccessControlListInstance
   *
   * @param { IpAccessControlListListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed IpAccessControlListInstance
   */
  create(params: IpAccessControlListListInstanceCreateOptions, callback?: (error: Error | null, item?: IpAccessControlListInstance) => any): Promise<IpAccessControlListInstance>;
  create(params: any, callback?: any): Promise<IpAccessControlListInstance>



  /**
   * Streams IpAccessControlListInstance records from the API.
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
  each(callback?: (item: IpAccessControlListInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams IpAccessControlListInstance records from the API.
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
   * @param { IpAccessControlListListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: IpAccessControlListListInstanceEachOptions, callback?: (item: IpAccessControlListInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of IpAccessControlListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: IpAccessControlListPage) => any): Promise<IpAccessControlListPage>;
  /**
   * Retrieve a single target page of IpAccessControlListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: IpAccessControlListPage) => any): Promise<IpAccessControlListPage>;
  getPage(params?: any, callback?: any): Promise<IpAccessControlListPage>;
  /**
   * Lists IpAccessControlListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: IpAccessControlListInstance[]) => any): Promise<IpAccessControlListInstance[]>;
  /**
   * Lists IpAccessControlListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { IpAccessControlListListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: IpAccessControlListListInstanceOptions, callback?: (error: Error | null, items: IpAccessControlListInstance[]) => any): Promise<IpAccessControlListInstance[]>;
  list(params?: any, callback?: any): Promise<IpAccessControlListInstance[]>;
  /**
   * Retrieve a single page of IpAccessControlListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: IpAccessControlListPage) => any): Promise<IpAccessControlListPage>;
  /**
   * Retrieve a single page of IpAccessControlListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { IpAccessControlListListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: IpAccessControlListListInstancePageOptions, callback?: (error: Error | null, items: IpAccessControlListPage) => any): Promise<IpAccessControlListPage>;
  page(params?: any, callback?: any): Promise<IpAccessControlListPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface IpAccessControlListSolution {
  trunkSid?: string;
}

interface IpAccessControlListListInstanceImpl extends IpAccessControlListListInstance {}
class IpAccessControlListListInstanceImpl implements IpAccessControlListListInstance {
  _version?: V1;
  _solution?: IpAccessControlListSolution;
  _uri?: string;

}

export function IpAccessControlListListInstance(version: V1, trunkSid: string): IpAccessControlListListInstance {
  const instance = ((sid) => instance.get(sid)) as IpAccessControlListListInstanceImpl;

  instance.get = function get(sid): IpAccessControlListContext {
    return new IpAccessControlListContextImpl(version, trunkSid, sid);
  }

  instance._version = version;
  instance._solution = { trunkSid };
  instance._uri = `/Trunks/${trunkSid}/IpAccessControlLists`;

  instance.create = function create(params: any, callback?: any): Promise<IpAccessControlListInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.ipAccessControlListSid === null || params.ipAccessControlListSid === undefined) {
      throw new Error('Required parameter "params.ipAccessControlListSid" missing.');
    }

    const data: any = {};

    data['IpAccessControlListSid'] = params.ipAccessControlListSid;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new IpAccessControlListInstance(operationVersion, payload, this._solution.trunkSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<IpAccessControlListPage> {
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
    
    operationPromise = operationPromise.then(payload => new IpAccessControlListPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<IpAccessControlListPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new IpAccessControlListPage(this._version, payload, this._solution));
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


export interface IpAccessControlListContext {


  /**
   * Remove a IpAccessControlListInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a IpAccessControlListInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed IpAccessControlListInstance
   */
  fetch(callback?: (error: Error | null, item?: IpAccessControlListInstance) => any): Promise<IpAccessControlListInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface IpAccessControlListContextSolution {
  trunkSid?: string;
  sid?: string;
}

export class IpAccessControlListContextImpl implements IpAccessControlListContext {
  protected _solution: IpAccessControlListContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, trunkSid: string, sid: string) {
    this._solution = { trunkSid, sid };
    this._uri = `/Trunks/${trunkSid}/IpAccessControlLists/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<IpAccessControlListInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new IpAccessControlListInstance(operationVersion, payload, this._solution.trunkSid, this._solution.sid));
    

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

interface IpAccessControlListPayload extends IpAccessControlListResource, Page.TwilioResponsePayload {
}

interface IpAccessControlListResource {
  account_sid?: string | null;
  sid?: string | null;
  trunk_sid?: string | null;
  friendly_name?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
}

export class IpAccessControlListInstance {
  protected _solution: IpAccessControlListContextSolution;
  protected _context?: IpAccessControlListContext;

  constructor(protected _version: V1, payload: IpAccessControlListPayload, trunkSid: string, sid?: string) {
    this.accountSid = payload.account_sid;
    this.sid = payload.sid;
    this.trunkSid = payload.trunk_sid;
    this.friendlyName = payload.friendly_name;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { trunkSid, sid: sid || this.sid };
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
   * The SID of the Trunk the resource is associated with
   */
  trunkSid?: string | null;
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

  private get _proxy(): IpAccessControlListContext {
    this._context = this._context || new IpAccessControlListContextImpl(this._version, this._solution.trunkSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a IpAccessControlListInstance
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
   * Fetch a IpAccessControlListInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed IpAccessControlListInstance
   */
  fetch(callback?: (error: Error | null, item?: IpAccessControlListInstance) => any): Promise<IpAccessControlListInstance>
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
      sid: this.sid, 
      trunkSid: this.trunkSid, 
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

export class IpAccessControlListPage extends Page<V1, IpAccessControlListPayload, IpAccessControlListResource, IpAccessControlListInstance> {
/**
* Initialize the IpAccessControlListPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: IpAccessControlListSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of IpAccessControlListInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: IpAccessControlListPayload): IpAccessControlListInstance {
    return new IpAccessControlListInstance(
    this._version,
    payload,
        this._solution.trunkSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }


