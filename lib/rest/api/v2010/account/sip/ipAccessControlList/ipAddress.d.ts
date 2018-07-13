/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import V2010 = require('../../../../V2010');
import deserialize = require('../../../../../../base/deserialize');
import values = require('../../../../../../base/values');

/**
 * @description Initialize the IpAddressList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique id of the Account that responsible for this resource.
 * @param ipAccessControlListSid - The ip_access_control_list_sid
 */
declare function IpAddressList(version: V2010, accountSid: string, ipAccessControlListSid: string): IpAddressListInstance;

/**
 * Options to pass to update
 *
 * @property ipAddress - The ip_address
 * @property friendlyName - The friendly_name
 */
export interface UpdateOptions {
  friendlyName?: string;
  ipAddress?: string;
}

/**
 * Options to pass to update
 *
 * @property ipAddress - The ip_address
 * @property friendlyName - The friendly_name
 */
export interface UpdateOptions {
  friendlyName?: string;
  ipAddress?: string;
}


declare class IpAddressPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressPage
   * @augments Page
   * @description Initialize the IpAddressPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of IpAddressInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class IpAddressInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressInstance
   * @description Initialize the IpAddressContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account that responsible for this resource.
   * @property friendlyName - A human readable descriptive text for this resource, up to 64 characters long.
   * @property ipAddress - An IP address in dotted decimal notation from which you want to accept traffic. Any SIP requests from this IP address will be allowed by Twilio. IPv4 only supported today.
   * @property ipAccessControlListSid - The ip_access_control_list_sid
   * @property dateCreated - The date that this resource was created, given as GMT in RFC 2822 format.
   * @property dateUpdated - The date that this resource was last updated, given as GMT in RFC 2822 format.
   * @property uri - The URI for this resource, relative to https://api.twilio.com
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique id of the Account that responsible for this resource.
   * @param ipAccessControlListSid - The ip_access_control_list_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, ipAccessControlListSid: sid, sid: sid);

  _proxy?: IpAddressContext;
  /**
   * fetch a IpAddressInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a IpAddressInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the IpAddressInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressInstance
   * @instance
   */
  toJSON();
  /**
   * update a IpAddressInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class IpAddressContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressContext
   * @description Initialize the IpAddressContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param ipAccessControlListSid - The ip_access_control_list_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, ipAccessControlListSid: sid, sid: sid);

  /**
   * fetch a IpAddressInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a IpAddressInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a IpAddressInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { IpAddressContext, IpAddressInstance, IpAddressList, IpAddressPage }
