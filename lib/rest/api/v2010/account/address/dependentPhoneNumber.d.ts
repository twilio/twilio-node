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

/**
 * @constructor Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberList
 * @description Initialize the DependentPhoneNumberList
 *
 * @param version - Version of the resource
 * @param accountSid - The account_sid
 * @param addressSid - A 34 character string that uniquely identifies this address.
 */
declare function DependentPhoneNumberList(version: V2010, accountSid: string, addressSid: string): DependentPhoneNumberListInstance;


declare class DependentPhoneNumberPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberPage
   * @augments Page
   * @description Initialize the DependentPhoneNumberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of DependentPhoneNumberInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class DependentPhoneNumberInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberInstance
   * @description Initialize the DependentPhoneNumberContext
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property friendlyName - The friendly_name
   * @property phoneNumber - The phone_number
   * @property voiceUrl - The voice_url
   * @property voiceMethod - The voice_method
   * @property voiceFallbackMethod - The voice_fallback_method
   * @property voiceFallbackUrl - The voice_fallback_url
   * @property voiceCallerIdLookup - The voice_caller_id_lookup
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property smsFallbackMethod - The sms_fallback_method
   * @property smsFallbackUrl - The sms_fallback_url
   * @property smsMethod - The sms_method
   * @property smsUrl - The sms_url
   * @property addressRequirements - The address_requirements
   * @property capabilities - The capabilities
   * @property statusCallback - The status_callback
   * @property statusCallbackMethod - The status_callback_method
   * @property apiVersion - The api_version
   * @property smsApplicationSid - The sms_application_sid
   * @property voiceApplicationSid - The voice_application_sid
   * @property trunkSid - The trunk_sid
   * @property emergencyStatus - The emergency_status
   * @property emergencyAddressSid - The emergency_address_sid
   * @property uri - The uri
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param addressSid - A 34 character string that uniquely identifies this address.
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, addressSid: sid);

  /**
   * Produce a plain JSON object version of the DependentPhoneNumberInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberInstance
   * @instance
   */
  toJSON();
}

export { DependentPhoneNumberInstance, DependentPhoneNumberList, DependentPhoneNumberPage }
