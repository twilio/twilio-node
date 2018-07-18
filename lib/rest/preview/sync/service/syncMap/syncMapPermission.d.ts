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
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the SyncMapPermissionList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - Sync Service Instance SID.
 * @param mapSid - Sync Map SID.
 */
declare function SyncMapPermissionList(version: Sync, serviceSid: string, mapSid: string): SyncMapPermissionListInstance;

interface SyncMapPermissionResource {
  account_sid: string;
  identity: string;
  manage: boolean;
  map_sid: string;
  read: boolean;
  service_sid: string;
  url: string;
  write: boolean;
}

interface SyncMapPermissionPayload extends SyncMapPermissionResource, Page.TwilioResponsePayload {
}

interface SyncMapPermissionSolution {
  mapSid?: string;
  serviceSid?: string;
}

interface SyncMapPermissionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SyncMapPermissionContext;
  /**
   * Streams SyncMapPermissionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a sync_map_permission
   *
   * @function get
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionList
   * @instance
   *
   * @param identity - Identity of the user to whom the Sync Map Permission applies.
   */
  get(identity: string);
  /**
   * Retrieve a single target page of SyncMapPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists SyncMapPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of SyncMapPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}

/**
 * Options to pass to update
 *
 * @property read - Read access.
 * @property write - Write access.
 * @property manage - Manage access.
 */
export interface UpdateOptions {
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
export interface UpdateOptions {
  manage: boolean;
  read: boolean;
  write: boolean;
}


declare class SyncMapPermissionPage extends Page {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionPage
   * @augments Page
   * @description Initialize the SyncMapPermissionPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Sync, response: Response<string>, solution: object);

  /**
   * Build an instance of SyncMapPermissionInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class SyncMapPermissionInstance {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionInstance
   * @description Initialize the SyncMapPermissionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property accountSid - Twilio Account SID.
   * @property serviceSid - Sync Service Instance SID.
   * @property mapSid - Sync Map SID.
   * @property identity - Identity of the user to whom the Sync Map Permission applies.
   * @property read - Read access.
   * @property write - Write access.
   * @property manage - Manage access.
   * @property url - URL of this Sync Map Permission.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Sync Service Instance SID.
   * @param mapSid - Sync Map SID.
   * @param identity - Identity of the user to whom the Sync Map Permission applies.
   */
  constructor(version: Twilio.Preview.Sync, payload: object, serviceSid: sid, mapSid: sid, identity: string);

  _proxy?: SyncMapPermissionContext;
  /**
   * fetch a SyncMapPermissionInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncMapPermissionInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the SyncMapPermissionInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionInstance
   * @instance
   */
  toJSON();
  /**
   * update a SyncMapPermissionInstance
   *
   * @function update
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}


declare class SyncMapPermissionContext {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionContext
   * @description Initialize the SyncMapPermissionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param mapSid - Sync Map SID or unique name.
   * @param identity - Identity of the user to whom the Sync Map Permission applies.
   */
  constructor(version: Twilio.Preview.Sync, serviceSid: sid, mapSid: sid_like, identity: string);

  /**
   * fetch a SyncMapPermissionInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncMapPermissionInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a SyncMapPermissionInstance
   *
   * @function update
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

export { SyncMapPermissionContext, SyncMapPermissionInstance, SyncMapPermissionList, SyncMapPermissionListInstance, SyncMapPermissionPage, SyncMapPermissionPayload, SyncMapPermissionResource, SyncMapPermissionSolution }
