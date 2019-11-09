/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

type SyncMapItemQueryFromBoundType = 'inclusive'|'exclusive';

type SyncMapItemQueryResultOrder = 'asc'|'desc';

/**
 * Initialize the SyncMapItemList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The SID of the Sync Service that the resource is associated with
 * @param mapSid - The SID of the Sync Map that contains the Map Item
 */
declare function SyncMapItemList(version: V1, serviceSid: string, mapSid: string): SyncMapItemListInstance;

/**
 * Options to pass to remove
 *
 * @property ifMatch - The If-Match HTTP request header
 */
interface SyncMapItemInstanceDeleteOptions {
  ifMatch?: string;
}

/**
 * Options to pass to remove
 *
 * @property ifMatch - The If-Match HTTP request header
 */
interface SyncMapItemInstanceRemoveOptions {
  ifMatch?: string;
}

/**
 * Options to pass to update
 *
 * @property collectionTtl - How long, in seconds, before the Map Item's parent Sync Map expires and is deleted
 * @property data - A JSON string that represents an arbitrary, schema-less object that the Map Item stores
 * @property ifMatch - The If-Match HTTP request header
 * @property itemTtl - How long, in seconds, before the Map Item expires
 * @property ttl - An alias for item_ttl
 */
interface SyncMapItemInstanceUpdateOptions {
  collectionTtl?: number;
  data?: object;
  ifMatch?: string;
  itemTtl?: number;
  ttl?: number;
}

interface SyncMapItemListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SyncMapItemContext;
  /**
   * create a SyncMapItemInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: SyncMapItemListInstanceCreateOptions, callback?: (error: Error | null, item: SyncMapItemInstance) => any): Promise<SyncMapItemInstance>;
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
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: SyncMapItemListInstanceEachOptions, callback?: (item: SyncMapItemInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a sync_map_item
   *
   * @param key - The key value of the Sync Map Item resource to fetch
   */
  get(key: string): SyncMapItemContext;
  /**
   * Retrieve a single target page of SyncMapItemInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SyncMapItemPage) => any): Promise<SyncMapItemPage>;
  /**
   * Lists SyncMapItemInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SyncMapItemListInstanceOptions, callback?: (error: Error | null, items: SyncMapItemInstance[]) => any): Promise<SyncMapItemInstance[]>;
  /**
   * Retrieve a single page of SyncMapItemInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SyncMapItemListInstancePageOptions, callback?: (error: Error | null, items: SyncMapItemPage) => any): Promise<SyncMapItemPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property collectionTtl - How long, in seconds, before the Map Item's parent Sync Map expires and is deleted
 * @property data - A JSON string that represents an arbitrary, schema-less object that the Map Item stores
 * @property itemTtl - How long, in seconds, before the Map Item expires
 * @property key - The unique, user-defined key for the Map Item
 * @property ttl - An alias for item_ttl
 */
interface SyncMapItemListInstanceCreateOptions {
  collectionTtl?: number;
  data: object;
  itemTtl?: number;
  key: string;
  ttl?: number;
}

/**
 * Options to pass to each
 *
 * @property bounds - Whether to include the Map Item referenced by the from parameter
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property from - The index of the first Sync Map Item resource to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property order - How to order the Map Items returned by their key value
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface SyncMapItemListInstanceEachOptions {
  bounds?: SyncMapItemQueryFromBoundType;
  callback?: (item: SyncMapItemInstance, done: (err?: Error) => void) => void;
  done?: Function;
  from?: string;
  limit?: number;
  order?: SyncMapItemQueryResultOrder;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property bounds - Whether to include the Map Item referenced by the from parameter
 * @property from - The index of the first Sync Map Item resource to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property order - How to order the Map Items returned by their key value
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface SyncMapItemListInstanceOptions {
  bounds?: SyncMapItemQueryFromBoundType;
  from?: string;
  limit?: number;
  order?: SyncMapItemQueryResultOrder;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property bounds - Whether to include the Map Item referenced by the from parameter
 * @property from - The index of the first Sync Map Item resource to read
 * @property order - How to order the Map Items returned by their key value
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface SyncMapItemListInstancePageOptions {
  bounds?: SyncMapItemQueryFromBoundType;
  from?: string;
  order?: SyncMapItemQueryResultOrder;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface SyncMapItemPayload extends SyncMapItemResource, Page.TwilioResponsePayload {
}

interface SyncMapItemResource {
  account_sid: string;
  created_by: string;
  data: object;
  date_created: Date;
  date_expires: Date;
  date_updated: Date;
  key: string;
  map_sid: string;
  revision: string;
  service_sid: string;
  url: string;
}

interface SyncMapItemSolution {
  mapSid?: string;
  serviceSid?: string;
}


declare class SyncMapItemContext {
  /**
   * Initialize the SyncMapItemContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The SID of the Sync Service with the Sync Map Item resource to fetch
   * @param mapSid - The SID of the Sync Map with the Sync Map Item resource to fetch
   * @param key - The key value of the Sync Map Item resource to fetch
   */
  constructor(version: V1, serviceSid: string, mapSid: string, key: string);

  /**
   * fetch a SyncMapItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SyncMapItemInstance) => any): Promise<SyncMapItemInstance>;
  /**
   * remove a SyncMapItemInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  remove(opts?: SyncMapItemInstanceDeleteOptions, callback?: (error: Error | null, items: SyncMapItemInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a SyncMapItemInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SyncMapItemInstanceUpdateOptions, callback?: (error: Error | null, items: SyncMapItemInstance) => any): Promise<SyncMapItemInstance>;
}


declare class SyncMapItemInstance extends SerializableClass {
  /**
   * Initialize the SyncMapItemContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The SID of the Sync Service that the resource is associated with
   * @param mapSid - The SID of the Sync Map that contains the Map Item
   * @param key - The key value of the Sync Map Item resource to fetch
   */
  constructor(version: V1, payload: SyncMapItemPayload, serviceSid: string, mapSid: string, key: string);

  private _proxy: SyncMapItemContext;
  accountSid: string;
  createdBy: string;
  data: object;
  dateCreated: Date;
  dateExpires: Date;
  dateUpdated: Date;
  /**
   * fetch a SyncMapItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SyncMapItemInstance) => any): Promise<SyncMapItemInstance>;
  key: string;
  mapSid: string;
  /**
   * remove a SyncMapItemInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  remove(opts?: SyncMapItemInstanceDeleteOptions, callback?: (error: Error | null, items: SyncMapItemInstance) => any): Promise<boolean>;
  revision: string;
  serviceSid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a SyncMapItemInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SyncMapItemInstanceUpdateOptions, callback?: (error: Error | null, items: SyncMapItemInstance) => any): Promise<SyncMapItemInstance>;
  url: string;
}


declare class SyncMapItemPage extends Page<V1, SyncMapItemPayload, SyncMapItemResource, SyncMapItemInstance> {
  /**
   * Initialize the SyncMapItemPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SyncMapItemSolution);

  /**
   * Build an instance of SyncMapItemInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncMapItemPayload): SyncMapItemInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { SyncMapItemContext, SyncMapItemInstance, SyncMapItemInstanceDeleteOptions, SyncMapItemInstanceRemoveOptions, SyncMapItemInstanceUpdateOptions, SyncMapItemList, SyncMapItemListInstance, SyncMapItemListInstanceCreateOptions, SyncMapItemListInstanceEachOptions, SyncMapItemListInstanceOptions, SyncMapItemListInstancePageOptions, SyncMapItemPage, SyncMapItemPayload, SyncMapItemResource, SyncMapItemSolution }
