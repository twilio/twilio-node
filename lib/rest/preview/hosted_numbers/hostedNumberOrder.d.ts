/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import HostedNumbers = require('../HostedNumbers');
import Page = require('../../../base/Page');
import deserialize = require('../../../base/deserialize');
import serialize = require('../../../base/serialize');
import values = require('../../../base/values');

/**
 * @description Initialize the HostedNumberOrderList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function HostedNumberOrderList(version: HostedNumbers): HostedNumberOrderListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description of this resource.
 * @property uniqueName - A unique, developer assigned name of this HostedNumberOrder.
 * @property email - Email.
 * @property ccEmails - A list of emails.
 * @property status - The Status of this HostedNumberOrder.
 * @property verificationCode - A verification code.
 * @property verificationType - Verification Type.
 * @property verificationDocumentSid - Verification Document Sid
 * @property extension - Digits to dial after connecting the verification call.
 * @property callDelay - The number of seconds, between 0 and 60, to delay before initiating the verification call.
 */
export interface UpdateOptions {
  callDelay?: number;
  ccEmails?: string|list;
  email?: string;
  extension?: string;
  friendlyName?: string;
  status?: hosted_number_order.status;
  uniqueName?: string;
  verificationCode?: string;
  verificationDocumentSid?: string;
  verificationType?: hosted_number_order.verification_type;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description of this resource.
 * @property uniqueName - A unique, developer assigned name of this HostedNumberOrder.
 * @property email - Email.
 * @property ccEmails - A list of emails.
 * @property status - The Status of this HostedNumberOrder.
 * @property verificationCode - A verification code.
 * @property verificationType - Verification Type.
 * @property verificationDocumentSid - Verification Document Sid
 * @property extension - Digits to dial after connecting the verification call.
 * @property callDelay - The number of seconds, between 0 and 60, to delay before initiating the verification call.
 */
export interface UpdateOptions {
  callDelay?: number;
  ccEmails?: string|list;
  email?: string;
  extension?: string;
  friendlyName?: string;
  status?: hosted_number_order.status;
  uniqueName?: string;
  verificationCode?: string;
  verificationDocumentSid?: string;
  verificationType?: hosted_number_order.verification_type;
}


declare class HostedNumberOrderPage extends Page {
  /**
   * @constructor Twilio.Preview.HostedNumbers.HostedNumberOrderPage
   * @augments Page
   * @description Initialize the HostedNumberOrderPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.HostedNumbers, response: object, solution: object);

  /**
   * Build an instance of HostedNumberOrderInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.HostedNumbers.HostedNumberOrderPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class HostedNumberOrderInstance {
  /**
   * @constructor Twilio.Preview.HostedNumbers.HostedNumberOrderInstance
   * @description Initialize the HostedNumberOrderContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - HostedNumberOrder sid.
   * @property accountSid - Account Sid.
   * @property incomingPhoneNumberSid - IncomingPhoneNumber sid.
   * @property addressSid - Address sid.
   * @property signingDocumentSid - LOA document sid.
   * @property phoneNumber - An E164 formatted phone number.
   * @property capabilities - A mapping of phone number capabilities.
   * @property friendlyName - A human readable description of this resource.
   * @property uniqueName - A unique, developer assigned name of this HostedNumberOrder.
   * @property status - The Status of this HostedNumberOrder.
   * @property failureReason - Why a hosted_number_order reached status "action-required"
   * @property dateCreated - The date this HostedNumberOrder was created.
   * @property dateUpdated - The date this HostedNumberOrder was updated.
   * @property verificationAttempts - The number of attempts made to verify ownership of the phone number.
   * @property email - Email.
   * @property ccEmails - A list of emails.
   * @property url - The URL of this HostedNumberOrder.
   * @property verificationType - The method used for verifying ownership of the number to be hosted.
   * @property verificationDocumentSid - Verification Document Sid.
   * @property extension - Phone extension to use for ownership verification call.
   * @property callDelay - Seconds (0-30) to delay ownership verification call by.
   * @property verificationCode - The digits passed during the ownership verification call.
   * @property verificationCallSids - List of IDs for ownership verification calls.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - HostedNumberOrder sid.
   */
  constructor(version: Twilio.Preview.HostedNumbers, payload: object, sid: sid);

  _proxy?: HostedNumberOrderContext;
  /**
   * fetch a HostedNumberOrderInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.HostedNumbers.HostedNumberOrderInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a HostedNumberOrderInstance
   *
   * @function remove
   * @memberof Twilio.Preview.HostedNumbers.HostedNumberOrderInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the HostedNumberOrderInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.HostedNumbers.HostedNumberOrderInstance
   * @instance
   */
  toJSON();
  /**
   * update a HostedNumberOrderInstance
   *
   * @function update
   * @memberof Twilio.Preview.HostedNumbers.HostedNumberOrderInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class HostedNumberOrderContext {
  /**
   * @constructor Twilio.Preview.HostedNumbers.HostedNumberOrderContext
   * @description Initialize the HostedNumberOrderContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param sid - HostedNumberOrder sid.
   */
  constructor(version: Twilio.Preview.HostedNumbers, sid: sid);

  /**
   * fetch a HostedNumberOrderInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.HostedNumbers.HostedNumberOrderContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a HostedNumberOrderInstance
   *
   * @function remove
   * @memberof Twilio.Preview.HostedNumbers.HostedNumberOrderContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a HostedNumberOrderInstance
   *
   * @function update
   * @memberof Twilio.Preview.HostedNumbers.HostedNumberOrderContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { HostedNumberOrderContext, HostedNumberOrderInstance, HostedNumberOrderList, HostedNumberOrderPage }
