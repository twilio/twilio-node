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
import Page from "../../../../../base/Page";
import Response from "../../../../../http/response";
import Sync from "../../../Sync";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");

type SyncListItemQueryResultOrder = 'asc'|'desc';

type SyncListItemQueryFromBoundType = 'inclusive'|'exclusive';


/**
 * Options to pass to create a SyncListItemInstance
 *
 * @property { any } data 
 */
export interface SyncListItemListInstanceCreateOptions {
  data: any;
}
/**
 * Options to pass to each
 *
 * @property { SyncListItemQueryResultOrder } [order] 
 * @property { string } [from] 
 * @property { SyncListItemQueryFromBoundType } [bounds] 
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
export interface SyncListItemListInstanceEachOptions {
  order?: SyncListItemQueryResultOrder;
  from?: string;
  bounds?: SyncListItemQueryFromBoundType;
  pageSize?: number;
  callback?: (item: SyncListItemInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { SyncListItemQueryResultOrder } [order] 
 * @property { string } [from] 
 * @property { SyncListItemQueryFromBoundType } [bounds] 
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SyncListItemListInstanceOptions {
  order?: SyncListItemQueryResultOrder;
  from?: string;
  bounds?: SyncListItemQueryFromBoundType;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { SyncListItemQueryResultOrder } [order] 
 * @property { string } [from] 
 * @property { SyncListItemQueryFromBoundType } [bounds] 
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface SyncListItemListInstancePageOptions {
  order?: SyncListItemQueryResultOrder;
  from?: string;
  bounds?: SyncListItemQueryFromBoundType;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



/**
 * Options to pass to remove a SyncListItemInstance
 *
 * @property { string } [ifMatch] The If-Match HTTP request header
 */
export interface SyncListItemContextRemoveOptions {
  ifMatch?: string;
}

/**
 * Options to pass to update a SyncListItemInstance
 *
 * @property { any } data 
 * @property { string } [ifMatch] The If-Match HTTP request header
 */
export interface SyncListItemContextUpdateOptions {
  data: any;
  ifMatch?: string;
}

export interface SyncListItemListInstance {
  (index: number): SyncListItemContext;
  get(index: number): SyncListItemContext;


  /**
   * Create a SyncListItemInstance
   *
   * @param { SyncListItemListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncListItemInstance
   */
  create(params: SyncListItemListInstanceCreateOptions, callback?: (error: Error | null, item?: SyncListItemInstance) => any): Promise<SyncListItemInstance>;
  create(params: any, callback?: any): Promise<SyncListItemInstance>



  /**
   * Streams SyncListItemInstance records from the API.
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
  each(callback?: (item: SyncListItemInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams SyncListItemInstance records from the API.
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
   * @param { SyncListItemListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: SyncListItemListInstanceEachOptions, callback?: (item: SyncListItemInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of SyncListItemInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: SyncListItemPage) => any): Promise<SyncListItemPage>;
  /**
   * Retrieve a single target page of SyncListItemInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SyncListItemPage) => any): Promise<SyncListItemPage>;
  getPage(params?: any, callback?: any): Promise<SyncListItemPage>;
  /**
   * Lists SyncListItemInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: SyncListItemInstance[]) => any): Promise<SyncListItemInstance[]>;
  /**
   * Lists SyncListItemInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncListItemListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: SyncListItemListInstanceOptions, callback?: (error: Error | null, items: SyncListItemInstance[]) => any): Promise<SyncListItemInstance[]>;
  list(params?: any, callback?: any): Promise<SyncListItemInstance[]>;
  /**
   * Retrieve a single page of SyncListItemInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: SyncListItemPage) => any): Promise<SyncListItemPage>;
  /**
   * Retrieve a single page of SyncListItemInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncListItemListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: SyncListItemListInstancePageOptions, callback?: (error: Error | null, items: SyncListItemPage) => any): Promise<SyncListItemPage>;
  page(params?: any, callback?: any): Promise<SyncListItemPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SyncListItemSolution {
  serviceSid?: string;
  listSid?: string;
}

interface SyncListItemListInstanceImpl extends SyncListItemListInstance {}
class SyncListItemListInstanceImpl implements SyncListItemListInstance {
  _version?: Sync;
  _solution?: SyncListItemSolution;
  _uri?: string;

}

export function SyncListItemListInstance(version: Sync, serviceSid: string, listSid: string): SyncListItemListInstance {
  const instance = ((index) => instance.get(index)) as SyncListItemListInstanceImpl;

  instance.get = function get(index): SyncListItemContext {
    return new SyncListItemContextImpl(version, serviceSid, listSid, index);
  }

  instance._version = version;
  instance._solution = { serviceSid, listSid };
  instance._uri = `/Services/${serviceSid}/Lists/${listSid}/Items`;

  instance.create = function create(params: any, callback?: any): Promise<SyncListItemInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.data === null || params.data === undefined) {
      throw new Error('Required parameter "params.data" missing.');
    }

    const data: any = {};

    data['Data'] = params.data;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new SyncListItemInstance(operationVersion, payload, this._solution.serviceSid, this._solution.listSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(params?: any, callback?: any): Promise<SyncListItemPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.order !== undefined) data['Order'] = params.order;
    if (params.from !== undefined) data['From'] = params.from;
    if (params.bounds !== undefined) data['Bounds'] = params.bounds;
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new SyncListItemPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<SyncListItemPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new SyncListItemPage(this._version, payload, this._solution));
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


export interface SyncListItemContext {


  /**
   * Remove a SyncListItemInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
  /**
   * Remove a SyncListItemInstance
   *
   * @param { SyncListItemContextRemoveOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncListItemInstance
   */
  remove(params: SyncListItemContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
  remove(params?: any, callback?: any): Promise<boolean>


  /**
   * Fetch a SyncListItemInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncListItemInstance
   */
  fetch(callback?: (error: Error | null, item?: SyncListItemInstance) => any): Promise<SyncListItemInstance>


  /**
   * Update a SyncListItemInstance
   *
   * @param { SyncListItemContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncListItemInstance
   */
  update(params: SyncListItemContextUpdateOptions, callback?: (error: Error | null, item?: SyncListItemInstance) => any): Promise<SyncListItemInstance>;
  update(params: any, callback?: any): Promise<SyncListItemInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SyncListItemContextSolution {
  serviceSid?: string;
  listSid?: string;
  index?: number;
}

export class SyncListItemContextImpl implements SyncListItemContext {
  protected _solution: SyncListItemContextSolution;
  protected _uri: string;


  constructor(protected _version: Sync, serviceSid: string, listSid: string, index: number) {
    this._solution = { serviceSid, listSid, index };
    this._uri = `/Services/${serviceSid}/Lists/${listSid}/Items/${index}`;
  }

  remove(params?: any, callback?: any): Promise<boolean> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};


    const headers: any = {};
    if (params.ifMatch !== undefined) headers['If-Match'] = params.ifMatch;

    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete', params: data, headers });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  fetch(callback?: any): Promise<SyncListItemInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new SyncListItemInstance(operationVersion, payload, this._solution.serviceSid, this._solution.listSid, this._solution.index));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  update(params: any, callback?: any): Promise<SyncListItemInstance> {
      if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.data === null || params.data === undefined) {
      throw new Error('Required parameter "params.data" missing.');
    }

    const data: any = {};

    data['Data'] = params.data;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if (params.ifMatch !== undefined) headers['If-Match'] = params.ifMatch;

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new SyncListItemInstance(operationVersion, payload, this._solution.serviceSid, this._solution.listSid, this._solution.index));
    

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

interface SyncListItemPayload extends SyncListItemResource, Page.TwilioResponsePayload {
}

interface SyncListItemResource {
  index?: number | null;
  account_sid?: string | null;
  service_sid?: string | null;
  list_sid?: string | null;
  url?: string | null;
  revision?: string | null;
  data?: any | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  created_by?: string | null;
}

export class SyncListItemInstance {
  protected _solution: SyncListItemContextSolution;
  protected _context?: SyncListItemContext;

  constructor(protected _version: Sync, payload: SyncListItemPayload, serviceSid: string, listSid: string, index?: number) {
    this.index = deserialize.integer(payload.index);
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.listSid = payload.list_sid;
    this.url = payload.url;
    this.revision = payload.revision;
    this.data = payload.data;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.createdBy = payload.created_by;

    this._solution = { serviceSid, listSid, index: index || this.index };
  }

  index?: number | null;
  accountSid?: string | null;
  serviceSid?: string | null;
  listSid?: string | null;
  url?: string | null;
  revision?: string | null;
  data?: any | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  createdBy?: string | null;

  private get _proxy(): SyncListItemContext {
    this._context = this._context || new SyncListItemContextImpl(this._version, this._solution.serviceSid, this._solution.listSid, this._solution.index);
    return this._context;
  }

  /**
   * Remove a SyncListItemInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
  /**
   * Remove a SyncListItemInstance
   *
   * @param { SyncListItemContextRemoveOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncListItemInstance
   */
  remove(params: SyncListItemContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
  remove(params?: any, callback?: any): Promise<boolean>
     {
    return this._proxy.remove(params, callback);
  }

  /**
   * Fetch a SyncListItemInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncListItemInstance
   */
  fetch(callback?: (error: Error | null, item?: SyncListItemInstance) => any): Promise<SyncListItemInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SyncListItemInstance
   *
   * @param { SyncListItemContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncListItemInstance
   */
  update(params: SyncListItemContextUpdateOptions, callback?: (error: Error | null, item?: SyncListItemInstance) => any): Promise<SyncListItemInstance>;
  update(params: any, callback?: any): Promise<SyncListItemInstance>
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
      index: this.index, 
      accountSid: this.accountSid, 
      serviceSid: this.serviceSid, 
      listSid: this.listSid, 
      url: this.url, 
      revision: this.revision, 
      data: this.data, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      createdBy: this.createdBy
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class SyncListItemPage extends Page<Sync, SyncListItemPayload, SyncListItemResource, SyncListItemInstance> {
  /**
   * Initialize the SyncListItemPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Sync, response: Response<string>, solution: SyncListItemSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SyncListItemInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncListItemPayload): SyncListItemInstance {
    return new SyncListItemInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.listSid,
      this._solution.index,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

