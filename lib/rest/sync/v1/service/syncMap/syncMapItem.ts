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
import Page from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");



type SyncMapItemQueryFromBoundType = 'inclusive'|'exclusive';

type SyncMapItemQueryResultOrder = 'asc'|'desc';


/**
 * Options to pass to remove a SyncMapItemInstance
 *
 * @property { string } [ifMatch] If provided, applies this mutation if (and only if) the “revision” field of this [map item] matches the provided value. This matches the semantics of (and is implemented with) the HTTP [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match).
 */
export interface SyncMapItemContextRemoveOptions {
  ifMatch?: string;
}

/**
 * Options to pass to update a SyncMapItemInstance
 *
 * @property { string } [ifMatch] If provided, applies this mutation if (and only if) the “revision” field of this [map item] matches the provided value. This matches the semantics of (and is implemented with) the HTTP [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match).
 * @property { any } [data] A JSON string that represents an arbitrary, schema-less object that the Map Item stores. Can be up to 16 KiB in length.
 * @property { number } [ttl] An alias for &#x60;item_ttl&#x60;. If both parameters are provided, this value is ignored.
 * @property { number } [itemTtl] How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Map Item expires (time-to-live) and is deleted.
 * @property { number } [collectionTtl] How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Map Item\\\&#39;s parent Sync Map expires (time-to-live) and is deleted. This parameter can only be used when the Map Item\\\&#39;s &#x60;data&#x60; or &#x60;ttl&#x60; is updated in the same request.
 */
export interface SyncMapItemContextUpdateOptions {
  ifMatch?: string;
  data?: any;
  ttl?: number;
  itemTtl?: number;
  collectionTtl?: number;
}

/**
 * Options to pass to create a SyncMapItemInstance
 *
 * @property { string } key The unique, user-defined key for the Map Item. Can be up to 320 characters long.
 * @property { any } data A JSON string that represents an arbitrary, schema-less object that the Map Item stores. Can be up to 16 KiB in length.
 * @property { number } [ttl] An alias for &#x60;item_ttl&#x60;. If both parameters are provided, this value is ignored.
 * @property { number } [itemTtl] How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Map Item expires (time-to-live) and is deleted.
 * @property { number } [collectionTtl] How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Map Item\\\&#39;s parent Sync Map expires (time-to-live) and is deleted.
 */
export interface SyncMapItemListInstanceCreateOptions {
  key: string;
  data: any;
  ttl?: number;
  itemTtl?: number;
  collectionTtl?: number;
}
/**
 * Options to pass to each
 *
 * @property { SyncMapItemQueryResultOrder } [order] How to order the Map Items returned by their &#x60;key&#x60; value. Can be: &#x60;asc&#x60; (ascending) or &#x60;desc&#x60; (descending) and the default is ascending. Map Items are [ordered lexicographically](https://en.wikipedia.org/wiki/Lexicographical_order) by Item key.
 * @property { string } [from] The &#x60;key&#x60; of the first Sync Map Item resource to read. See also &#x60;bounds&#x60;.
 * @property { SyncMapItemQueryFromBoundType } [bounds] Whether to include the Map Item referenced by the &#x60;from&#x60; parameter. Can be: &#x60;inclusive&#x60; to include the Map Item referenced by the &#x60;from&#x60; parameter or &#x60;exclusive&#x60; to start with the next Map Item. The default value is &#x60;inclusive&#x60;.
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
export interface SyncMapItemListInstanceEachOptions {
  order?: SyncMapItemQueryResultOrder;
  from?: string;
  bounds?: SyncMapItemQueryFromBoundType;
  pageSize?: number;
  callback?: (item: SyncMapItemInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { SyncMapItemQueryResultOrder } [order] How to order the Map Items returned by their &#x60;key&#x60; value. Can be: &#x60;asc&#x60; (ascending) or &#x60;desc&#x60; (descending) and the default is ascending. Map Items are [ordered lexicographically](https://en.wikipedia.org/wiki/Lexicographical_order) by Item key.
 * @property { string } [from] The &#x60;key&#x60; of the first Sync Map Item resource to read. See also &#x60;bounds&#x60;.
 * @property { SyncMapItemQueryFromBoundType } [bounds] Whether to include the Map Item referenced by the &#x60;from&#x60; parameter. Can be: &#x60;inclusive&#x60; to include the Map Item referenced by the &#x60;from&#x60; parameter or &#x60;exclusive&#x60; to start with the next Map Item. The default value is &#x60;inclusive&#x60;.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SyncMapItemListInstanceOptions {
  order?: SyncMapItemQueryResultOrder;
  from?: string;
  bounds?: SyncMapItemQueryFromBoundType;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { SyncMapItemQueryResultOrder } [order] How to order the Map Items returned by their &#x60;key&#x60; value. Can be: &#x60;asc&#x60; (ascending) or &#x60;desc&#x60; (descending) and the default is ascending. Map Items are [ordered lexicographically](https://en.wikipedia.org/wiki/Lexicographical_order) by Item key.
 * @property { string } [from] The &#x60;key&#x60; of the first Sync Map Item resource to read. See also &#x60;bounds&#x60;.
 * @property { SyncMapItemQueryFromBoundType } [bounds] Whether to include the Map Item referenced by the &#x60;from&#x60; parameter. Can be: &#x60;inclusive&#x60; to include the Map Item referenced by the &#x60;from&#x60; parameter or &#x60;exclusive&#x60; to start with the next Map Item. The default value is &#x60;inclusive&#x60;.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface SyncMapItemListInstancePageOptions {
  order?: SyncMapItemQueryResultOrder;
  from?: string;
  bounds?: SyncMapItemQueryFromBoundType;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface SyncMapItemContext {


  /**
   * Remove a SyncMapItemInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
  /**
   * Remove a SyncMapItemInstance
   *
   * @param { SyncMapItemContextRemoveOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncMapItemInstance
   */
  remove(params: SyncMapItemContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
  remove(params?: any, callback?: any): Promise<boolean>


  /**
   * Fetch a SyncMapItemInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncMapItemInstance
   */
  fetch(callback?: (error: Error | null, item?: SyncMapItemInstance) => any): Promise<SyncMapItemInstance>


  /**
   * Update a SyncMapItemInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncMapItemInstance
   */
  update(callback?: (error: Error | null, item?: SyncMapItemInstance) => any): Promise<SyncMapItemInstance>;
  /**
   * Update a SyncMapItemInstance
   *
   * @param { SyncMapItemContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncMapItemInstance
   */
  update(params: SyncMapItemContextUpdateOptions, callback?: (error: Error | null, item?: SyncMapItemInstance) => any): Promise<SyncMapItemInstance>;
  update(params?: any, callback?: any): Promise<SyncMapItemInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SyncMapItemContextSolution {
  serviceSid?: string;
  mapSid?: string;
  key?: string;
}

export class SyncMapItemContextImpl implements SyncMapItemContext {
  protected _solution: SyncMapItemContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, serviceSid: string, mapSid: string, key: string) {
    this._solution = { serviceSid, mapSid, key };
    this._uri = `/Services/${serviceSid}/Maps/${mapSid}/Items/${key}`;
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

  fetch(callback?: any): Promise<SyncMapItemInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new SyncMapItemInstance(operationVersion, payload, this._solution.serviceSid, this._solution.mapSid, this._solution.key));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: any, callback?: any): Promise<SyncMapItemInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.data !== undefined) data['Data'] = params.data;
    if (params.ttl !== undefined) data['Ttl'] = params.ttl;
    if (params.itemTtl !== undefined) data['ItemTtl'] = params.itemTtl;
    if (params.collectionTtl !== undefined) data['CollectionTtl'] = params.collectionTtl;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if (params.ifMatch !== undefined) headers['If-Match'] = params.ifMatch;

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new SyncMapItemInstance(operationVersion, payload, this._solution.serviceSid, this._solution.mapSid, this._solution.key));
    

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

interface SyncMapItemPayload extends SyncMapItemResource, Page.TwilioResponsePayload {
}

interface SyncMapItemResource {
  key?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  map_sid?: string | null;
  url?: string | null;
  revision?: string | null;
  data?: any | null;
  date_expires?: Date | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  created_by?: string | null;
}

export class SyncMapItemInstance {
  protected _solution: SyncMapItemContextSolution;
  protected _context?: SyncMapItemContext;

  constructor(protected _version: V1, payload: SyncMapItemPayload, serviceSid: string, mapSid: string, key?: string) {
    this.key = payload.key;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.mapSid = payload.map_sid;
    this.url = payload.url;
    this.revision = payload.revision;
    this.data = payload.data;
    this.dateExpires = deserialize.iso8601DateTime(payload.date_expires);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.createdBy = payload.created_by;

    this._solution = { serviceSid, mapSid, key: key || this.key };
  }

  /**
   * The unique, user-defined key for the Map Item
   */
  key?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Sync Service that the resource is associated with
   */
  serviceSid?: string | null;
  /**
   * The SID of the Sync Map that contains the Map Item
   */
  mapSid?: string | null;
  /**
   * The absolute URL of the Map Item resource
   */
  url?: string | null;
  /**
   * The current revision of the Map Item, represented as a string
   */
  revision?: string | null;
  /**
   * An arbitrary, schema-less object that the Map Item stores
   */
  data?: any | null;
  /**
   * The ISO 8601 date and time in GMT when the Map Item expires
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
   * The identity of the Map Item\'s creator
   */
  createdBy?: string | null;

  private get _proxy(): SyncMapItemContext {
    this._context = this._context || new SyncMapItemContextImpl(this._version, this._solution.serviceSid, this._solution.mapSid, this._solution.key);
    return this._context;
  }

  /**
   * Remove a SyncMapItemInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
  /**
   * Remove a SyncMapItemInstance
   *
   * @param { SyncMapItemContextRemoveOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncMapItemInstance
   */
  remove(params: SyncMapItemContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
  remove(params?: any, callback?: any): Promise<boolean>
     {
    return this._proxy.remove(params, callback);
  }

  /**
   * Fetch a SyncMapItemInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncMapItemInstance
   */
  fetch(callback?: (error: Error | null, item?: SyncMapItemInstance) => any): Promise<SyncMapItemInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SyncMapItemInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncMapItemInstance
   */
  update(callback?: (error: Error | null, item?: SyncMapItemInstance) => any): Promise<SyncMapItemInstance>;
  /**
   * Update a SyncMapItemInstance
   *
   * @param { SyncMapItemContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncMapItemInstance
   */
  update(params: SyncMapItemContextUpdateOptions, callback?: (error: Error | null, item?: SyncMapItemInstance) => any): Promise<SyncMapItemInstance>;
  update(params?: any, callback?: any): Promise<SyncMapItemInstance>
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
      key: this.key, 
      accountSid: this.accountSid, 
      serviceSid: this.serviceSid, 
      mapSid: this.mapSid, 
      url: this.url, 
      revision: this.revision, 
      data: this.data, 
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


export interface SyncMapItemListInstance {
  (key: string): SyncMapItemContext;
  get(key: string): SyncMapItemContext;


  /**
   * Create a SyncMapItemInstance
   *
   * @param { SyncMapItemListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SyncMapItemInstance
   */
  create(params: SyncMapItemListInstanceCreateOptions, callback?: (error: Error | null, item?: SyncMapItemInstance) => any): Promise<SyncMapItemInstance>;
  create(params: any, callback?: any): Promise<SyncMapItemInstance>



  /**
   * Streams SyncMapItemInstance records from the API.
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
  each(callback?: (item: SyncMapItemInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams SyncMapItemInstance records from the API.
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
   * @param { SyncMapItemListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: SyncMapItemListInstanceEachOptions, callback?: (item: SyncMapItemInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of SyncMapItemInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: SyncMapItemPage) => any): Promise<SyncMapItemPage>;
  /**
   * Retrieve a single target page of SyncMapItemInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SyncMapItemPage) => any): Promise<SyncMapItemPage>;
  getPage(params?: any, callback?: any): Promise<SyncMapItemPage>;
  /**
   * Lists SyncMapItemInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: SyncMapItemInstance[]) => any): Promise<SyncMapItemInstance[]>;
  /**
   * Lists SyncMapItemInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncMapItemListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: SyncMapItemListInstanceOptions, callback?: (error: Error | null, items: SyncMapItemInstance[]) => any): Promise<SyncMapItemInstance[]>;
  list(params?: any, callback?: any): Promise<SyncMapItemInstance[]>;
  /**
   * Retrieve a single page of SyncMapItemInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: SyncMapItemPage) => any): Promise<SyncMapItemPage>;
  /**
   * Retrieve a single page of SyncMapItemInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncMapItemListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: SyncMapItemListInstancePageOptions, callback?: (error: Error | null, items: SyncMapItemPage) => any): Promise<SyncMapItemPage>;
  page(params?: any, callback?: any): Promise<SyncMapItemPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SyncMapItemSolution {
  serviceSid?: string;
  mapSid?: string;
}

interface SyncMapItemListInstanceImpl extends SyncMapItemListInstance {}
class SyncMapItemListInstanceImpl implements SyncMapItemListInstance {
  _version?: V1;
  _solution?: SyncMapItemSolution;
  _uri?: string;

}

export function SyncMapItemListInstance(version: V1, serviceSid: string, mapSid: string): SyncMapItemListInstance {
  const instance = ((key) => instance.get(key)) as SyncMapItemListInstanceImpl;

  instance.get = function get(key): SyncMapItemContext {
    return new SyncMapItemContextImpl(version, serviceSid, mapSid, key);
  }

  instance._version = version;
  instance._solution = { serviceSid, mapSid };
  instance._uri = `/Services/${serviceSid}/Maps/${mapSid}/Items`;

  instance.create = function create(params: any, callback?: any): Promise<SyncMapItemInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.key === null || params.key === undefined) {
      throw new Error('Required parameter "params.key" missing.');
    }

    if (params.data === null || params.data === undefined) {
      throw new Error('Required parameter "params.data" missing.');
    }

    const data: any = {};

    data['Key'] = params.key;
    data['Data'] = params.data;
    if (params.ttl !== undefined) data['Ttl'] = params.ttl;
    if (params.itemTtl !== undefined) data['ItemTtl'] = params.itemTtl;
    if (params.collectionTtl !== undefined) data['CollectionTtl'] = params.collectionTtl;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new SyncMapItemInstance(operationVersion, payload, this._solution.serviceSid, this._solution.mapSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<SyncMapItemPage> {
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
    
    operationPromise = operationPromise.then(payload => new SyncMapItemPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<SyncMapItemPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new SyncMapItemPage(this._version, payload, this._solution));
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


export class SyncMapItemPage extends Page<V1, SyncMapItemPayload, SyncMapItemResource, SyncMapItemInstance> {
/**
* Initialize the SyncMapItemPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: SyncMapItemSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of SyncMapItemInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: SyncMapItemPayload): SyncMapItemInstance {
    return new SyncMapItemInstance(
    this._version,
    payload,
        this._solution.serviceSid,
        this._solution.mapSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

