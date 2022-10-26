/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Sync
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

import { SyncMapItemListInstance } from "./syncMap/syncMapItem";
import { SyncMapPermissionListInstance } from "./syncMap/syncMapPermission";



/**
 * Options to pass to create a SyncMapInstance
 *
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. It can be used as an alternative to the &#x60;sid&#x60; in the URL path to address the resource.
 * @property { number } [ttl] An alias for &#x60;collection_ttl&#x60;. If both parameters are provided, this value is ignored.
 * @property { number } [collectionTtl] How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Sync Map expires (time-to-live) and is deleted.
 */
export interface SyncMapListInstanceCreateOptions {
  uniqueName?: string;
  ttl?: number;
  collectionTtl?: number;
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
export interface SyncMapListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: SyncMapInstance, done: (err?: Error) => void) => void;
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
export interface SyncMapListInstanceOptions {
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
export interface SyncMapListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



/**
 * Options to pass to update a SyncMapInstance
 *
 * @property { number } [ttl] An alias for &#x60;collection_ttl&#x60;. If both parameters are provided, this value is ignored.
 * @property { number } [collectionTtl] How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Sync Map expires (time-to-live) and is deleted.
 */
export interface SyncMapContextUpdateOptions {
  ttl?: number;
  collectionTtl?: number;
}

export interface SyncMapListInstance {
  (sid: string): SyncMapContext;
  get(sid: string): SyncMapContext;


  /**
   * Create a SyncMapInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncMapInstance
   */
  create(callback?: (error: Error | null, item?: SyncMapInstance) => any): Promise<SyncMapInstance>;
  /**
   * Create a SyncMapInstance
   *
   * @param { SyncMapListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncMapInstance
   */
  create(params: SyncMapListInstanceCreateOptions, callback?: (error: Error | null, item?: SyncMapInstance) => any): Promise<SyncMapInstance>;
  create(params?: any, callback?: any): Promise<SyncMapInstance>



  /**
   * Streams SyncMapInstance records from the API.
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
  each(callback?: (item: SyncMapInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams SyncMapInstance records from the API.
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
   * @param { SyncMapListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: SyncMapListInstanceEachOptions, callback?: (item: SyncMapInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of SyncMapInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: SyncMapPage) => any): Promise<SyncMapPage>;
  /**
   * Retrieve a single target page of SyncMapInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SyncMapPage) => any): Promise<SyncMapPage>;
  getPage(params?: any, callback?: any): Promise<SyncMapPage>;
  /**
   * Lists SyncMapInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: SyncMapInstance[]) => any): Promise<SyncMapInstance[]>;
  /**
   * Lists SyncMapInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncMapListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: SyncMapListInstanceOptions, callback?: (error: Error | null, items: SyncMapInstance[]) => any): Promise<SyncMapInstance[]>;
  list(params?: any, callback?: any): Promise<SyncMapInstance[]>;
  /**
   * Retrieve a single page of SyncMapInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: SyncMapPage) => any): Promise<SyncMapPage>;
  /**
   * Retrieve a single page of SyncMapInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncMapListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: SyncMapListInstancePageOptions, callback?: (error: Error | null, items: SyncMapPage) => any): Promise<SyncMapPage>;
  page(params?: any, callback?: any): Promise<SyncMapPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SyncMapSolution {
  serviceSid?: string;
}

interface SyncMapListInstanceImpl extends SyncMapListInstance {}
class SyncMapListInstanceImpl implements SyncMapListInstance {
  _version?: V1;
  _solution?: SyncMapSolution;
  _uri?: string;

}

export function SyncMapListInstance(version: V1, serviceSid: string): SyncMapListInstance {
  const instance = ((sid) => instance.get(sid)) as SyncMapListInstanceImpl;

  instance.get = function get(sid): SyncMapContext {
    return new SyncMapContextImpl(version, serviceSid, sid);
  }

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Maps`;

  instance.create = function create(params?: any, callback?: any): Promise<SyncMapInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.uniqueName !== undefined) data['UniqueName'] = params.uniqueName;
    if (params.ttl !== undefined) data['Ttl'] = params.ttl;
    if (params.collectionTtl !== undefined) data['CollectionTtl'] = params.collectionTtl;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new SyncMapInstance(operationVersion, payload, this._solution.serviceSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<SyncMapPage> {
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
    
    operationPromise = operationPromise.then(payload => new SyncMapPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<SyncMapPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new SyncMapPage(this._version, payload, this._solution));
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


export interface SyncMapContext {

  syncMapItems: SyncMapItemListInstance;
  syncMapPermissions: SyncMapPermissionListInstance;

  /**
   * Remove a SyncMapInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a SyncMapInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncMapInstance
   */
  fetch(callback?: (error: Error | null, item?: SyncMapInstance) => any): Promise<SyncMapInstance>


  /**
   * Update a SyncMapInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncMapInstance
   */
  update(callback?: (error: Error | null, item?: SyncMapInstance) => any): Promise<SyncMapInstance>;
  /**
   * Update a SyncMapInstance
   *
   * @param { SyncMapContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncMapInstance
   */
  update(params: SyncMapContextUpdateOptions, callback?: (error: Error | null, item?: SyncMapInstance) => any): Promise<SyncMapInstance>;
  update(params?: any, callback?: any): Promise<SyncMapInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SyncMapContextSolution {
  serviceSid?: string;
  sid?: string;
}

export class SyncMapContextImpl implements SyncMapContext {
  protected _solution: SyncMapContextSolution;
  protected _uri: string;

  protected _syncMapItems?: SyncMapItemListInstance;
  protected _syncMapPermissions?: SyncMapPermissionListInstance;

  constructor(protected _version: V1, serviceSid: string, sid: string) {
    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Maps/${sid}`;
  }

  get syncMapItems(): SyncMapItemListInstance {
    this._syncMapItems = this._syncMapItems || SyncMapItemListInstance(this._version, this._solution.serviceSid, this._solution.sid);
    return this._syncMapItems;
  }

  get syncMapPermissions(): SyncMapPermissionListInstance {
    this._syncMapPermissions = this._syncMapPermissions || SyncMapPermissionListInstance(this._version, this._solution.serviceSid, this._solution.sid);
    return this._syncMapPermissions;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<SyncMapInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new SyncMapInstance(operationVersion, payload, this._solution.serviceSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: any, callback?: any): Promise<SyncMapInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.ttl !== undefined) data['Ttl'] = params.ttl;
    if (params.collectionTtl !== undefined) data['CollectionTtl'] = params.collectionTtl;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new SyncMapInstance(operationVersion, payload, this._solution.serviceSid, this._solution.sid));
    

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

interface SyncMapPayload extends SyncMapResource, Page.TwilioResponsePayload {
}

interface SyncMapResource {
  sid?: string | null;
  unique_name?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  url?: string | null;
  links?: object | null;
  revision?: string | null;
  date_expires?: Date | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  created_by?: string | null;
}

export class SyncMapInstance {
  protected _solution: SyncMapContextSolution;
  protected _context?: SyncMapContext;

  constructor(protected _version: V1, payload: SyncMapPayload, serviceSid: string, sid?: string) {
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.url = payload.url;
    this.links = payload.links;
    this.revision = payload.revision;
    this.dateExpires = deserialize.iso8601DateTime(payload.date_expires);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.createdBy = payload.created_by;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * An application-defined string that uniquely identifies the resource
   */
  uniqueName?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Sync Service that the resource is associated with
   */
  serviceSid?: string | null;
  /**
   * The absolute URL of the Sync Map resource
   */
  url?: string | null;
  /**
   * The URLs of the Sync Map\'s nested resources
   */
  links?: object | null;
  /**
   * The current revision of the Sync Map, represented as a string
   */
  revision?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the Sync Map expires
   */
  dateExpires?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The identity of the Sync Map\'s creator
   */
  createdBy?: string | null;

  private get _proxy(): SyncMapContext {
    this._context = this._context || new SyncMapContextImpl(this._version, this._solution.serviceSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a SyncMapInstance
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
   * Fetch a SyncMapInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncMapInstance
   */
  fetch(callback?: (error: Error | null, item?: SyncMapInstance) => any): Promise<SyncMapInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SyncMapInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncMapInstance
   */
  update(callback?: (error: Error | null, item?: SyncMapInstance) => any): Promise<SyncMapInstance>;
  /**
   * Update a SyncMapInstance
   *
   * @param { SyncMapContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncMapInstance
   */
  update(params: SyncMapContextUpdateOptions, callback?: (error: Error | null, item?: SyncMapInstance) => any): Promise<SyncMapInstance>;
  update(params?: any, callback?: any): Promise<SyncMapInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the syncMapItems.
   */
  syncMapItems(): SyncMapItemListInstance {
    return this._proxy.syncMapItems;
  }

  /**
   * Access the syncMapPermissions.
   */
  syncMapPermissions(): SyncMapPermissionListInstance {
    return this._proxy.syncMapPermissions;
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
      dateExpires: this.dateExpires, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      createdBy: this.createdBy
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class SyncMapPage extends Page<V1, SyncMapPayload, SyncMapResource, SyncMapInstance> {
/**
* Initialize the SyncMapPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: SyncMapSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of SyncMapInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: SyncMapPayload): SyncMapInstance {
    return new SyncMapInstance(
    this._version,
    payload,
        this._solution.serviceSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }


