/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import serialize = require('../../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the VoipList
 *
 * @param version - Version of the resource
 * @param accountSid - The 34 character string that uniquely identifies your account.
 * @param countryCode - The ISO Country code to lookup phone numbers for.
 */
declare function VoipList(version: V2010, accountSid: string, countryCode: string): VoipListInstance;

interface VoipResource {
  address_requirements: string;
  beta: boolean;
  capabilities: string;
  friendly_name: string;
  iso_country: string;
  lata: string;
  latitude: number;
  locality: string;
  longitude: number;
  phone_number: string;
  postal_code: string;
  rate_center: string;
  region: string;
}

interface VoipPayload extends VoipResource, Page.TwilioResponsePayload {
}

interface VoipSolution {
  accountSid?: string;
  countryCode?: string;
}

interface VoipListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): VoipContext;
  /**
   * Streams VoipInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.VoipList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Retrieve a single target page of VoipInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.VoipList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists VoipInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.VoipList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of VoipInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.VoipList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


declare class VoipPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.VoipPage
   * @augments Page
   * @description Initialize the VoipPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

  /**
   * Build an instance of VoipInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.VoipPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class VoipInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.VoipInstance
   * @description Initialize the VoipContext
   *
   * @property friendlyName - The friendly_name
   * @property phoneNumber - The phone_number
   * @property lata - The lata
   * @property locality - The locality
   * @property rateCenter - The rate_center
   * @property latitude - The latitude
   * @property longitude - The longitude
   * @property region - The region
   * @property postalCode - The postal_code
   * @property isoCountry - The iso_country
   * @property addressRequirements - The address_requirements
   * @property beta - The beta
   * @property capabilities - The capabilities
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The 34 character string that uniquely identifies your account.
   * @param countryCode - The ISO Country code to lookup phone numbers for.
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: account_sid, countryCode: iso_country_code);

  /**
   * Produce a plain JSON object version of the VoipInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.VoipInstance
   * @instance
   */
  toJSON();
}

export { VoipInstance, VoipList, VoipListInstance, VoipPage, VoipPayload, VoipResource, VoipSolution }
