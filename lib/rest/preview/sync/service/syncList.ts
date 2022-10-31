/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import Sync from "../../Sync";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { SyncListItemListInstance } from "./syncList/syncListItem";
import { SyncListPermissionListInstance } from "./syncList/syncListPermission";




/**
 * Options to pass to create a SyncListInstance
 *
 * @property { string } [uniqueName] 
 */
export interface SyncListListInstanceCreateOptions {
  "uniqueName"?: string;
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
export interface SyncListListInstanceEachOptions {
  "pageSize"?: number;
  callback?: (item: SyncListInstance, done: (err?: Error) => void) => void;
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
export interface SyncListListInstanceOptions {
  "pageSize"?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface SyncListListInstancePageOptions {
  "pageSize"?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface SyncListContext {

  syncListItems: SyncListItemListInstance;
  syncListPermissions: SyncListPermissionListInstance;

  /**
   * Remove a SyncListInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a SyncListInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncListInstance
   */
  fetch(callback?: (error: Error | null, item?: SyncListInstance) => any): Promise<SyncListInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SyncListContextSolution {
  "serviceSid"?: string;
  "sid"?: string;
}

export class SyncListContextImpl implements SyncListContext {
  protected _solution: SyncListContextSolution;
  protected _uri: string;

  protected _syncListItems?: SyncListItemListInstance;
  protected _syncListPermissions?: SyncListPermissionListInstance;

  constructor(protected _version: Sync, serviceSid: string, sid: string) {
    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Lists/${sid}`;
  }

  get syncListItems(): SyncListItemListInstance {
    this._syncListItems = this._syncListItems || SyncListItemListInstance(this._version, this._solution.serviceSid, this._solution.sid);
    return this._syncListItems;
  }

  get syncListPermissions(): SyncListPermissionListInstance {
    this._syncListPermissions = this._syncListPermissions || SyncListPermissionListInstance(this._version, this._solution.serviceSid, this._solution.sid);
    return this._syncListPermissions;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: "delete" });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<SyncListInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new SyncListInstance(operationVersion, payload, this._solution.serviceSid, this._solution.sid));
    

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

interface SyncListPayload extends SyncListResource, Page.TwilioResponsePayload {
}

interface SyncListResource {
  sid?: string | null;
  unique_name?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  url?: string | null;
  links?: object | null;
  revision?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  created_by?: string | null;
}

export class SyncListInstance {
  protected _solution: SyncListContextSolution;
  protected _context?: SyncListContext;

  constructor(protected _version: Sync, payload: SyncListPayload, serviceSid: string, sid?: string) {
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.url = payload.url;
    this.links = payload.links;
    this.revision = payload.revision;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.createdBy = payload.created_by;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  sid?: string | null;
  uniqueName?: string | null;
  accountSid?: string | null;
  serviceSid?: string | null;
  url?: string | null;
  links?: object | null;
  revision?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  createdBy?: string | null;

  private get _proxy(): SyncListContext {
    this._context = this._context || new SyncListContextImpl(this._version, this._solution.serviceSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a SyncListInstance
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
   * Fetch a SyncListInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncListInstance
   */
  fetch(callback?: (error: Error | null, item?: SyncListInstance) => any): Promise<SyncListInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the syncListItems.
   */
  syncListItems(): SyncListItemListInstance {
    return this._proxy.syncListItems;
  }

  /**
   * Access the syncListPermissions.
   */
  syncListPermissions(): SyncListPermissionListInstance {
    return this._proxy.syncListPermissions;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid, 
      uniqueName: this.uniqueName, 
      accountSid: this.accountSid, 
      serviceSid: this.serviceSid, 
      url: this.url, 
      links: this.links, 
      revision: this.revision, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      createdBy: this.createdBy
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface SyncListListInstance {
  (sid: string): SyncListContext;
  get(sid: string): SyncListContext;


  /**
   * Create a SyncListInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncListInstance
   */
  create(callback?: (error: Error | null, item?: SyncListInstance) => any): Promise<SyncListInstance>;
  /**
   * Create a SyncListInstance
   *
   * @param { SyncListListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncListInstance
   */
  create(params: SyncListListInstanceCreateOptions, callback?: (error: Error | null, item?: SyncListInstance) => any): Promise<SyncListInstance>;
  create(params?: any, callback?: any): Promise<SyncListInstance>



  /**
   * Streams SyncListInstance records from the API.
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
  each(callback?: (item: SyncListInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams SyncListInstance records from the API.
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
   * @param { SyncListListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: SyncListListInstanceEachOptions, callback?: (item: SyncListInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of SyncListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: SyncListPage) => any): Promise<SyncListPage>;
  /**
   * Retrieve a single target page of SyncListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SyncListPage) => any): Promise<SyncListPage>;
  getPage(params?: any, callback?: any): Promise<SyncListPage>;
  /**
   * Lists SyncListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: SyncListInstance[]) => any): Promise<SyncListInstance[]>;
  /**
   * Lists SyncListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncListListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: SyncListListInstanceOptions, callback?: (error: Error | null, items: SyncListInstance[]) => any): Promise<SyncListInstance[]>;
  list(params?: any, callback?: any): Promise<SyncListInstance[]>;
  /**
   * Retrieve a single page of SyncListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: SyncListPage) => any): Promise<SyncListPage>;
  /**
   * Retrieve a single page of SyncListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncListListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: SyncListListInstancePageOptions, callback?: (error: Error | null, items: SyncListPage) => any): Promise<SyncListPage>;
  page(params?: any, callback?: any): Promise<SyncListPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SyncListSolution {
  serviceSid?: string;
}

interface SyncListListInstanceImpl extends SyncListListInstance {}
class SyncListListInstanceImpl implements SyncListListInstance {
  _version?: Sync;
  _solution?: SyncListSolution;
  _uri?: string;

}

export function SyncListListInstance(version: Sync, serviceSid: string): SyncListListInstance {
  const instance = ((sid) => instance.get(sid)) as SyncListListInstanceImpl;

  instance.get = function get(sid): SyncListContext {
    return new SyncListContextImpl(version, serviceSid, sid);
  }

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Lists`;

  instance.create = function create(params?: any, callback?: any): Promise<SyncListInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params["uniqueName"] !== undefined) data["UniqueName"] = params["uniqueName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new SyncListInstance(operationVersion, payload, this._solution.serviceSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<SyncListPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];
    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new SyncListPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<SyncListPage> {
    let operationPromise = this._version._domain.twilio.request({method: "get", uri: targetUrl});

    operationPromise = operationPromise.then(payload => new SyncListPage(this._version, payload, this._solution));
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


export class SyncListPage extends Page<Sync, SyncListPayload, SyncListResource, SyncListInstance> {
/**
* Initialize the SyncListPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: Sync, response: Response<string>, solution: SyncListSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of SyncListInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: SyncListPayload): SyncListInstance {
    return new SyncListInstance(
    this._version,
    payload,
        this._solution.serviceSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

