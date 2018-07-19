/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import Sync = require('../../../Sync');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the SyncListPermissionList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - Sync Service Instance SID.
 * @param listSid - Sync List SID.
 */
declare function SyncListPermissionList(version: Sync, serviceSid: string, listSid: string): SyncListPermissionListInstance;

interface SyncListPermissionResource {
  account_sid: string;
  identity: string;
  list_sid: string;
  manage: boolean;
  read: boolean;
  service_sid: string;
  url: string;
  write: boolean;
}

interface SyncListPermissionPayload extends SyncListPermissionResource, Page.TwilioResponsePayload {
}

interface SyncListPermissionSolution {
  listSid?: string;
  serviceSid?: string;
}

interface SyncListPermissionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SyncListPermissionContext;
  /**
   * Streams SyncListPermissionInstance records from the API.
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
  each(opts?: SyncListPermissionListInstanceEachOptions, callback?: (item: SyncListPermissionInstance, done: (err?: Error) => void) => void);
  /**
   * Constructs a sync_list_permission
   *
   * @param identity - Identity of the user to whom the Sync List Permission applies.
   */
  get(identity: string);
  /**
   * Retrieve a single target page of SyncListPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists SyncListPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SyncListPermissionListInstanceOptions, callback?: function);
  /**
   * Retrieve a single page of SyncListPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SyncListPermissionListInstancePageOptions, callback?: function);
}

/**
 * Options to pass to update
 *
 * @property read - Read access.
 * @property write - Write access.
 * @property manage - Manage access.
 */
export interface SyncListPermissionInstanceUpdateOptions {
  manage: boolean;
  read: boolean;
  write: boolean;
}

/**
 * Options to pass to update
 *
 * @property read - Read access.
 * @property write - Write access.
 * @property manage - Manage access.
 */
export interface SyncListPermissionContextUpdateOptions {
  manage: boolean;
  read: boolean;
  write: boolean;
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
export interface SyncListPermissionListInstanceEachOptions {
  callback?: (item: SyncListPermissionInstance, done: (err?: Error) => void) => void;
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
export interface SyncListPermissionListInstanceOptions {
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
export interface SyncListPermissionListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}


declare class SyncListPermissionPage extends Page {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListPermissionPage
   * @augments Page
   * @description Initialize the SyncListPermissionPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Sync, response: Response<string>, solution: object);

  /**
   * Build an instance of SyncListPermissionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class SyncListPermissionInstance {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListPermissionInstance
   * @description Initialize the SyncListPermissionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property accountSid - Twilio Account SID.
   * @property serviceSid - Sync Service Instance SID.
   * @property listSid - Sync List SID.
   * @property identity - Identity of the user to whom the Sync List Permission applies.
   * @property read - Read access.
   * @property write - Write access.
   * @property manage - Manage access.
   * @property url - URL of this Sync List Permission.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Sync Service Instance SID.
   * @param listSid - Sync List SID.
   * @param identity - Identity of the user to whom the Sync List Permission applies.
   */
  constructor(version: Twilio.Preview.Sync, payload: object, serviceSid: sid, listSid: sid, identity: string);

  _proxy?: SyncListPermissionContext;
  /**
   * fetch a SyncListPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncListPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the SyncListPermissionInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
  /**
   * update a SyncListPermissionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SyncListPermissionInstanceUpdateOptions, callback?: function);
}


declare class SyncListPermissionContext {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListPermissionContext
   * @description Initialize the SyncListPermissionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param listSid - Sync List SID or unique name.
   * @param identity - Identity of the user to whom the Sync List Permission applies.
   */
  constructor(version: Twilio.Preview.Sync, serviceSid: sid, listSid: sid_like, identity: string);

  /**
   * fetch a SyncListPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncListPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a SyncListPermissionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SyncListPermissionContextUpdateOptions, callback?: function);
}

export { SyncListPermissionContext, SyncListPermissionInstance, SyncListPermissionList, SyncListPermissionListInstance, SyncListPermissionPage, SyncListPermissionPayload, SyncListPermissionResource, SyncListPermissionSolution }
