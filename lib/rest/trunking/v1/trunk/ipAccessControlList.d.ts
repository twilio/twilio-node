/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V1 = require('../../V1');
import deserialize = require('../../../../base/deserialize');
import values = require('../../../../base/values');

/**
 * @description Initialize the IpAccessControlListList
 *
 * @param version - Version of the resource
 * @param trunkSid - The unique sid that identifies the associated Trunk
 */
declare function IpAccessControlListList(version: V1, trunkSid: string): IpAccessControlListListInstance;


declare class IpAccessControlListPage extends Page {
  /**
   * @constructor Twilio.Trunking.V1.TrunkContext.IpAccessControlListPage
   * @augments Page
   * @description Initialize the IpAccessControlListPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Trunking.V1, response: object, solution: object);

  /**
   * Build an instance of IpAccessControlListInstance
   *
   * @function getInstance
   * @memberof Twilio.Trunking.V1.TrunkContext.IpAccessControlListPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class IpAccessControlListInstance {
  /**
   * @constructor Twilio.Trunking.V1.TrunkContext.IpAccessControlListInstance
   * @description Initialize the IpAccessControlListContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property sid - A string that uniquely identifies this resource
   * @property trunkSid - The unique sid that identifies the associated Trunk
   * @property friendlyName - A human readable description of this resource
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param trunkSid - The unique sid that identifies the associated Trunk
   * @param sid - The sid
   */
  constructor(version: Twilio.Trunking.V1, payload: object, trunkSid: sid, sid: sid);

  _proxy?: IpAccessControlListContext;
  /**
   * fetch a IpAccessControlListInstance
   *
   * @function fetch
   * @memberof Twilio.Trunking.V1.TrunkContext.IpAccessControlListInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a IpAccessControlListInstance
   *
   * @function remove
   * @memberof Twilio.Trunking.V1.TrunkContext.IpAccessControlListInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the IpAccessControlListInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Trunking.V1.TrunkContext.IpAccessControlListInstance
   * @instance
   */
  toJSON();
}


declare class IpAccessControlListContext {
  /**
   * @constructor Twilio.Trunking.V1.TrunkContext.IpAccessControlListContext
   * @description Initialize the IpAccessControlListContext
   *
   * @param version - Version of the resource
   * @param trunkSid - The trunk_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Trunking.V1, trunkSid: sid, sid: sid);

  /**
   * fetch a IpAccessControlListInstance
   *
   * @function fetch
   * @memberof Twilio.Trunking.V1.TrunkContext.IpAccessControlListContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a IpAccessControlListInstance
   *
   * @function remove
   * @memberof Twilio.Trunking.V1.TrunkContext.IpAccessControlListContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { IpAccessControlListContext, IpAccessControlListInstance, IpAccessControlListList, IpAccessControlListPage }
