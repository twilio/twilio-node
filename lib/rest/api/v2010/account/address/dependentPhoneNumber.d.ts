/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the DependentPhoneNumberList
 *
 * @param version - Version of the resource
 * @param accountSid - The account_sid
 * @param addressSid - A 34 character string that uniquely identifies this address.
 */
declare function DependentPhoneNumberList(version: V2010, accountSid: string, addressSid: string): DependentPhoneNumberListInstance;

interface DependentPhoneNumberResource {
  account_sid: string;
  address_requirements: DependentPhoneNumberAddressRequirement;
  api_version: string;
  capabilities: string;
  date_created: Date;
  date_updated: Date;
  emergency_address_sid: string;
  emergency_status: DependentPhoneNumberEmergencyStatus;
  friendly_name: string;
  phone_number: string;
  sid: string;
  sms_application_sid: string;
  sms_fallback_method: string;
  sms_fallback_url: string;
  sms_method: string;
  sms_url: string;
  status_callback: string;
  status_callback_method: string;
  trunk_sid: string;
  uri: string;
  voice_application_sid: string;
  voice_caller_id_lookup: boolean;
  voice_fallback_method: string;
  voice_fallback_url: string;
  voice_method: string;
  voice_url: string;
}

interface DependentPhoneNumberPayload extends DependentPhoneNumberResource, Page.TwilioResponsePayload {
}

interface DependentPhoneNumberSolution {
  accountSid?: string;
  addressSid?: string;
}

interface DependentPhoneNumberListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): DependentPhoneNumberContext;
  /**
   * Streams DependentPhoneNumberInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Retrieve a single target page of DependentPhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists DependentPhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of DependentPhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


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
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

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

export { DependentPhoneNumberInstance, DependentPhoneNumberList, DependentPhoneNumberListInstance, DependentPhoneNumberPage, DependentPhoneNumberPayload, DependentPhoneNumberResource, DependentPhoneNumberSolution }
