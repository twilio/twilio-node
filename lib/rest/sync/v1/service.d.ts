/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import V1 = require('../V1');
import deserialize = require('../../../base/deserialize');
import serialize = require('../../../base/serialize');
import values = require('../../../base/values');
import { DocumentList } from './service/document';
import { SyncListList } from './service/syncList';
import { SyncMapList } from './service/syncMap';
import { SyncStreamList } from './service/syncStream';

/**
 * @description Initialize the ServiceList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 */
declare function ServiceList(version: V1): ServiceListInstance;

/**
 * Options to pass to update
 *
 * @property webhookUrl - A URL that will receive event updates when objects are manipulated.
 * @property friendlyName - Human-readable name for this service instance
 * @property reachabilityWebhooksEnabled - True or false - controls whether this instance fires webhooks when client endpoints connect to Sync
 * @property aclEnabled - true or false - determines whether token identities must be granted access to Sync objects via the Permissions API in this Service.
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
 * @property webhookUrl - A URL that will receive event updates when objects are manipulated.
 * @property friendlyName - Human-readable name for this service instance
 * @property reachabilityWebhooksEnabled - True or false - controls whether this instance fires webhooks when client endpoints connect to Sync
 * @property aclEnabled - true or false - determines whether token identities must be granted access to Sync objects via the Permissions API in this Service.
 */
export interface UpdateOptions {
  aclEnabled?: boolean;
  friendlyName?: string;
  reachabilityWebhooksEnabled?: boolean;
  webhookUrl?: string;
}


declare class ServicePage extends Page {
  /**
   * @constructor Twilio.Sync.V1.ServicePage
   * @augments Page
   * @description Initialize the ServicePage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Sync.V1, response: object, solution: object);

  /**
   * Build an instance of ServiceInstance
   *
   * @function getInstance
   * @memberof Twilio.Sync.V1.ServicePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ServiceInstance {
  /**
   * @constructor Twilio.Sync.V1.ServiceInstance
   * @description Initialize the ServiceContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - The sid
   * @property uniqueName - The unique_name
   * @property accountSid - The account_sid
   * @property friendlyName - Human-readable name for this service instance
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property url - The url
   * @property webhookUrl - A URL that will receive event updates when objects are manipulated.
   * @property reachabilityWebhooksEnabled - true or false - controls whether this instance fires webhooks when client endpoints connect to Sync
   * @property aclEnabled - true or false - determines whether token identities must be granted access to Sync objects via the Permissions API in this Service.
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Sync.V1, payload: object, sid: sid_like);

  _proxy?: ServiceContext;
  /**
   * Access the documents
   *
   * @function documents
   * @memberof Twilio.Sync.V1.ServiceInstance
   * @instance
   */
  documents();
  /**
   * fetch a ServiceInstance
   *
   * @function fetch
   * @memberof Twilio.Sync.V1.ServiceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a ServiceInstance
   *
   * @function remove
   * @memberof Twilio.Sync.V1.ServiceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the syncLists
   *
   * @function syncLists
   * @memberof Twilio.Sync.V1.ServiceInstance
   * @instance
   */
  syncLists();
  /**
   * Access the syncMaps
   *
   * @function syncMaps
   * @memberof Twilio.Sync.V1.ServiceInstance
   * @instance
   */
  syncMaps();
  /**
   * Access the syncStreams
   *
   * @function syncStreams
   * @memberof Twilio.Sync.V1.ServiceInstance
   * @instance
   */
  syncStreams();
  /**
   * Produce a plain JSON object version of the ServiceInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Sync.V1.ServiceInstance
   * @instance
   */
  toJSON();
  /**
   * update a ServiceInstance
   *
   * @function update
   * @memberof Twilio.Sync.V1.ServiceInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class ServiceContext {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext
   * @description Initialize the ServiceContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property documents - documents resource
   * @property syncLists - syncLists resource
   * @property syncMaps - syncMaps resource
   * @property syncStreams - syncStreams resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Sync.V1, sid: sid_like);

  documents?: Twilio.Sync.V1.ServiceContext.DocumentList;
  /**
   * fetch a ServiceInstance
   *
   * @function fetch
   * @memberof Twilio.Sync.V1.ServiceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a ServiceInstance
   *
   * @function remove
   * @memberof Twilio.Sync.V1.ServiceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  syncLists?: Twilio.Sync.V1.ServiceContext.SyncListList;
  syncMaps?: Twilio.Sync.V1.ServiceContext.SyncMapList;
  syncStreams?: Twilio.Sync.V1.ServiceContext.SyncStreamList;
  /**
   * update a ServiceInstance
   *
   * @function update
   * @memberof Twilio.Sync.V1.ServiceContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { ServiceContext, ServiceInstance, ServiceList, ServicePage }
