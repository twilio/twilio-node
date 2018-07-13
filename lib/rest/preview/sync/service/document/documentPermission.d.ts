/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Sync = require('../../../Sync');
import serialize = require('../../../../../base/serialize');
import values = require('../../../../../base/values');

/**
 * @description Initialize the DocumentPermissionList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - Sync Service Instance SID.
 * @param documentSid - Sync Document SID.
 */
declare function DocumentPermissionList(version: Sync, serviceSid: string, documentSid: string): DocumentPermissionListInstance;

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


declare class DocumentPermissionPage extends Page {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.DocumentContext.DocumentPermissionPage
   * @augments Page
   * @description Initialize the DocumentPermissionPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Sync, response: object, solution: object);

  /**
   * Build an instance of DocumentPermissionInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Sync.ServiceContext.DocumentContext.DocumentPermissionPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class DocumentPermissionInstance {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.DocumentContext.DocumentPermissionInstance
   * @description Initialize the DocumentPermissionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property accountSid - Twilio Account SID.
   * @property serviceSid - Sync Service Instance SID.
   * @property documentSid - Sync Document SID.
   * @property identity - Identity of the user to whom the Sync Document Permission applies.
   * @property read - Read access.
   * @property write - Write access.
   * @property manage - Manage access.
   * @property url - URL of this Sync Document Permission.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Sync Service Instance SID.
   * @param documentSid - Sync Document SID.
   * @param identity - Identity of the user to whom the Sync Document Permission applies.
   */
  constructor(version: Twilio.Preview.Sync, payload: object, serviceSid: sid, documentSid: sid, identity: string);

  _proxy?: DocumentPermissionContext;
  /**
   * fetch a DocumentPermissionInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Sync.ServiceContext.DocumentContext.DocumentPermissionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a DocumentPermissionInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Sync.ServiceContext.DocumentContext.DocumentPermissionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the DocumentPermissionInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Sync.ServiceContext.DocumentContext.DocumentPermissionInstance
   * @instance
   */
  toJSON();
  /**
   * update a DocumentPermissionInstance
   *
   * @function update
   * @memberof Twilio.Preview.Sync.ServiceContext.DocumentContext.DocumentPermissionInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}


declare class DocumentPermissionContext {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.DocumentContext.DocumentPermissionContext
   * @description Initialize the DocumentPermissionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param documentSid - Sync Document SID or unique name.
   * @param identity - Identity of the user to whom the Sync Document Permission applies.
   */
  constructor(version: Twilio.Preview.Sync, serviceSid: sid, documentSid: sid_like, identity: string);

  /**
   * fetch a DocumentPermissionInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Sync.ServiceContext.DocumentContext.DocumentPermissionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a DocumentPermissionInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Sync.ServiceContext.DocumentContext.DocumentPermissionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a DocumentPermissionInstance
   *
   * @function update
   * @memberof Twilio.Preview.Sync.ServiceContext.DocumentContext.DocumentPermissionContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

export { DocumentPermissionContext, DocumentPermissionInstance, DocumentPermissionList, DocumentPermissionPage }
