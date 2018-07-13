/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Sync = require('../../../Sync');
import deserialize = require('../../../../../base/deserialize');
import serialize = require('../../../../../base/serialize');
import values = require('../../../../../base/values');

/**
 * @description Initialize the SyncMapItemList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - The service_sid
 * @param mapSid - The map_sid
 */
declare function SyncMapItemList(version: Sync, serviceSid: string, mapSid: string): SyncMapItemListInstance;

/**
 * Options to pass to update
 *
 * @property data - The data
 */
export interface UpdateOptions {
  data: string;
}

/**
 * Options to pass to update
 *
 * @property data - The data
 */
export interface UpdateOptions {
  data: string;
}


declare class SyncMapItemPage extends Page {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapItemPage
   * @augments Page
   * @description Initialize the SyncMapItemPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Sync, response: object, solution: object);

  /**
   * Build an instance of SyncMapItemInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapItemPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class SyncMapItemInstance {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapItemInstance
   * @description Initialize the SyncMapItemContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property key - The key
   * @property accountSid - The account_sid
   * @property serviceSid - The service_sid
   * @property mapSid - The map_sid
   * @property url - The url
   * @property revision - The revision
   * @property data - The data
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property createdBy - The created_by
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param mapSid - The map_sid
   * @param key - The key
   */
  constructor(version: Twilio.Preview.Sync, payload: object, serviceSid: sid, mapSid: sid, key: string);

  _proxy?: SyncMapItemContext;
  /**
   * fetch a SyncMapItemInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapItemInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncMapItemInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapItemInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the SyncMapItemInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapItemInstance
   * @instance
   */
  toJSON();
  /**
   * update a SyncMapItemInstance
   *
   * @function update
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapItemInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}


declare class SyncMapItemContext {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapItemContext
   * @description Initialize the SyncMapItemContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param mapSid - The map_sid
   * @param key - The key
   */
  constructor(version: Twilio.Preview.Sync, serviceSid: sid, mapSid: sid_like, key: string);

  /**
   * fetch a SyncMapItemInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapItemContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncMapItemInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapItemContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a SyncMapItemInstance
   *
   * @function update
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapItemContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

export { SyncMapItemContext, SyncMapItemInstance, SyncMapItemList, SyncMapItemPage }
