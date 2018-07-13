/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import V2010 = require('../../../../V2010');
import values = require('../../../../../../base/values');

/**
 * @description Initialize the AssignedAddOnExtensionList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param accountSid - The Account id that has installed this Add-on
 * @param resourceSid - The Phone Number id that has installed this Add-on
 * @param assignedAddOnSid - A string that uniquely identifies the assigned Add-on installation
 */
declare function AssignedAddOnExtensionList(version: V2010, accountSid: string, resourceSid: string, assignedAddOnSid: string): AssignedAddOnExtensionListInstance;


declare class AssignedAddOnExtensionPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.AssignedAddOnContext.AssignedAddOnExtensionPage
   * @augments Page
   * @description Initialize the AssignedAddOnExtensionPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of AssignedAddOnExtensionInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.AssignedAddOnContext.AssignedAddOnExtensionPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class AssignedAddOnExtensionInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.AssignedAddOnContext.AssignedAddOnExtensionInstance
   * @description Initialize the AssignedAddOnExtensionContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - A string that uniquely identifies this Extension
   * @property accountSid - The Account id that has installed this Add-on
   * @property resourceSid - The Phone Number id that has installed this Add-on
   * @property assignedAddOnSid - A string that uniquely identifies the assigned Add-on installation
   * @property friendlyName - A human-readable description of this Extension
   * @property productName - A human-readable description of the Extension's Product
   * @property uniqueName - The string that uniquely identifies this Extension
   * @property uri - The uri
   * @property enabled - A Boolean indicating if the Extension will be invoked
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The Account id that has installed this Add-on
   * @param resourceSid - The Phone Number id that has installed this Add-on
   * @param assignedAddOnSid - A string that uniquely identifies the assigned Add-on installation
   * @param sid - The unique Extension Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, resourceSid: sid, assignedAddOnSid: sid, sid: sid);

  _proxy?: AssignedAddOnExtensionContext;
  /**
   * fetch a AssignedAddOnExtensionInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.AssignedAddOnContext.AssignedAddOnExtensionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the AssignedAddOnExtensionInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.AssignedAddOnContext.AssignedAddOnExtensionInstance
   * @instance
   */
  toJSON();
}


declare class AssignedAddOnExtensionContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.AssignedAddOnContext.AssignedAddOnExtensionContext
   * @description Initialize the AssignedAddOnExtensionContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param resourceSid - The resource_sid
   * @param assignedAddOnSid - The assigned_add_on_sid
   * @param sid - The unique Extension Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, resourceSid: sid, assignedAddOnSid: sid, sid: sid);

  /**
   * fetch a AssignedAddOnExtensionInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.AssignedAddOnContext.AssignedAddOnExtensionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
}

export { AssignedAddOnExtensionContext, AssignedAddOnExtensionInstance, AssignedAddOnExtensionList, AssignedAddOnExtensionPage }
