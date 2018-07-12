/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V2010 = require('../../../V2010');
import deserialize = require('../../../../../base/deserialize');
import values = require('../../../../../base/values');
import { IpAddressList } from './ipAccessControlList/ipAddress';

/**
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListList
 * @description Initialize the IpAccessControlListList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function IpAccessControlListList(version: V2010, accountSid: string): IpAccessControlListListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description of this resource
 */
export interface UpdateOptions {
  friendlyName: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description of this resource
 */
export interface UpdateOptions {
  friendlyName: string;
}


declare class IpAccessControlListPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListPage
   * @augments Page
   * @description Initialize the IpAccessControlListPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of IpAccessControlListInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class IpAccessControlListInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListInstance
   * @description Initialize the IpAccessControlListContext
   *
   * @property sid - A string that uniquely identifies this resource
   * @property accountSid - The unique sid that identifies this account
   * @property friendlyName - A human readable description of this resource
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property subresourceUris - The subresource_uris
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   * @param sid - Fetch by unique ip-access-control-list Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: IpAccessControlListContext;
  /**
   * fetch a IpAccessControlListInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the ipAddresses
   *
   * @function ipAddresses
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListInstance
   * @instance
   */
  ipAddresses();
  /**
   * remove a IpAccessControlListInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListInstance
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
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListInstance
   * @instance
   */
  toJSON();
  /**
   * update a IpAccessControlListInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}


declare class IpAccessControlListContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext
   * @description Initialize the IpAccessControlListContext
   *
   * @property ipAddresses - ipAddresses resource
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique ip-access-control-list Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  /**
   * fetch a IpAccessControlListInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  ipAddresses?: Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressList;
  /**
   * remove a IpAccessControlListInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a IpAccessControlListInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

export { IpAccessControlListContext, IpAccessControlListInstance, IpAccessControlListList, IpAccessControlListPage }
