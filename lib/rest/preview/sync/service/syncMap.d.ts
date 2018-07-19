/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import Sync = require('../../Sync');
import { SerializableClass } from '../../../../interfaces';
import { SyncMapItemList } from './syncMap/syncMapItem';
import { SyncMapPermissionList } from './syncMap/syncMapPermission';

/**
 * @description Initialize the SyncMapList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - The service_sid
 */
declare function SyncMapList(version: Sync, serviceSid: string): SyncMapListInstance;

interface SyncMapResource {
  account_sid: string;
  created_by: string;
  date_created: Date;
  date_updated: Date;
  links: string;
  revision: string;
  service_sid: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface SyncMapPayload extends SyncMapResource, Page.TwilioResponsePayload {
}

interface SyncMapSolution {
  serviceSid?: string;
}

interface SyncMapListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SyncMapContext;
  /**
   * create a SyncMapInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: SyncMapListInstanceCreateOptions, callback?: (error: Error | null, items: SyncMapListInstance) => any): Promise<SyncMapInstance>;
  /**
   * Streams SyncMapInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: SyncMapListInstanceEachOptions, callback?: (item: SyncMapInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a sync_map
   *
   * @param sid - The sid
   */
  get(sid: string): SyncMapContext;
  /**
   * Retrieve a single target page of SyncMapInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function): Promise<SyncMapPage>;
  /**
   * @description Lists SyncMapInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SyncMapListInstanceOptions, callback?: function): Promise<SyncMapInstance[]>;
  /**
   * Retrieve a single page of SyncMapInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SyncMapListInstancePageOptions, callback?: function): Promise<SyncMapPage>;
}

/**
 * Options to pass to create
 *
 * @property uniqueName - The unique_name
 */
export interface SyncMapListInstanceCreateOptions {
  uniqueName?: string;
}

/**
 * Options to pass to each
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 */
export interface SyncMapListInstanceEachOptions {
  callback?: (item: SyncMapInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
export interface SyncMapListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
export interface SyncMapListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}


declare class SyncMapPage extends Page {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncMapPage
   * @augments Page
   * @description Initialize the SyncMapPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Sync, response: Response<string>, solution: object);

  /**
   * Build an instance of SyncMapInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class SyncMapInstance {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncMapInstance
   * @description Initialize the SyncMapContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - The sid
   * @property uniqueName - The unique_name
   * @property accountSid - The account_sid
   * @property serviceSid - The service_sid
   * @property url - The url
   * @property links - The links
   * @property revision - The revision
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property createdBy - The created_by
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Sync, payload: object, serviceSid: sid, sid: sid_like);

  _proxy?: SyncMapContext;
  /**
   * fetch a SyncMapInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SyncMapInstance) => any);
  /**
   * remove a SyncMapInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SyncMapInstance) => any);
  /**
   * Access the syncMapItems
   */
  syncMapItems();
  /**
   * Access the syncMapPermissions
   */
  syncMapPermissions();
  /**
   * Produce a plain JSON object version of the SyncMapInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
}


declare class SyncMapContext {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncMapContext
   * @description Initialize the SyncMapContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property syncMapItems - syncMapItems resource
   * @property syncMapPermissions - syncMapPermissions resource
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Sync, serviceSid: sid, sid: sid_like);

  /**
   * fetch a SyncMapInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SyncMapContext) => any);
  /**
   * remove a SyncMapInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SyncMapContext) => any);
  syncMapItems?: Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapItemList;
  syncMapPermissions?: Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionList;
}

export { SyncMapContext, SyncMapInstance, SyncMapList, SyncMapListInstance, SyncMapPage, SyncMapPayload, SyncMapResource, SyncMapSolution }
