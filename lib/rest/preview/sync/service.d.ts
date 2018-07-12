/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Sync = require('../Sync');
import deserialize = require('../../../base/deserialize');
import serialize = require('../../../base/serialize');
import values = require('../../../base/values');
import { DocumentList } from './service/document';
import { SyncListList } from './service/syncList';
import { SyncMapList } from './service/syncMap';

/**
 * @constructor Twilio.Preview.Sync.ServiceList
 * @description Initialize the ServiceList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function ServiceList(version: Sync): ServiceListInstance;

/**
 * Options to pass to update
 *
 * @property webhookUrl - The webhook_url
 * @property friendlyName - The friendly_name
 * @property reachabilityWebhooksEnabled - The reachability_webhooks_enabled
 * @property aclEnabled - The acl_enabled
 */
export interface UpdateOptions {
  aclEnabled?: boolean;
  friendlyName?: string;
  reachabilityWebhooksEnabled?: boolean;
  webhookUrl?: string;
}

/**
 * Options to pass to update
 *
 * @property webhookUrl - The webhook_url
 * @property friendlyName - The friendly_name
 * @property reachabilityWebhooksEnabled - The reachability_webhooks_enabled
 * @property aclEnabled - The acl_enabled
 */
export interface UpdateOptions {
  aclEnabled?: boolean;
  friendlyName?: string;
  reachabilityWebhooksEnabled?: boolean;
  webhookUrl?: string;
}


declare class ServicePage extends Page {
  /**
   * @constructor Twilio.Preview.Sync.ServicePage
   * @augments Page
   * @description Initialize the ServicePage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Sync, response: object, solution: object);

  /**
   * Build an instance of ServiceInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Sync.ServicePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ServiceInstance {
  /**
   * @constructor Twilio.Preview.Sync.ServiceInstance
   * @description Initialize the ServiceContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property friendlyName - The friendly_name
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property url - The url
   * @property webhookUrl - The webhook_url
   * @property reachabilityWebhooksEnabled - The reachability_webhooks_enabled
   * @property aclEnabled - The acl_enabled
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Sync, payload: object, sid: sid);

  _proxy?: ServiceContext;
  /**
   * Access the documents
   *
   * @function documents
   * @memberof Twilio.Preview.Sync.ServiceInstance
   * @instance
   */
  documents();
  /**
   * fetch a ServiceInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Sync.ServiceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a ServiceInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Sync.ServiceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the syncLists
   *
   * @function syncLists
   * @memberof Twilio.Preview.Sync.ServiceInstance
   * @instance
   */
  syncLists();
  /**
   * Access the syncMaps
   *
   * @function syncMaps
   * @memberof Twilio.Preview.Sync.ServiceInstance
   * @instance
   */
  syncMaps();
  /**
   * Produce a plain JSON object version of the ServiceInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Sync.ServiceInstance
   * @instance
   */
  toJSON();
  /**
   * update a ServiceInstance
   *
   * @function update
   * @memberof Twilio.Preview.Sync.ServiceInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class ServiceContext {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext
   * @description Initialize the ServiceContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property documents - documents resource
   * @property syncLists - syncLists resource
   * @property syncMaps - syncMaps resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Sync, sid: sid);

  documents?: Twilio.Preview.Sync.ServiceContext.DocumentList;
  /**
   * fetch a ServiceInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Sync.ServiceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a ServiceInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Sync.ServiceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  syncLists?: Twilio.Preview.Sync.ServiceContext.SyncListList;
  syncMaps?: Twilio.Preview.Sync.ServiceContext.SyncMapList;
  /**
   * update a ServiceInstance
   *
   * @function update
   * @memberof Twilio.Preview.Sync.ServiceContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { ServiceContext, ServiceInstance, ServiceList, ServicePage }
