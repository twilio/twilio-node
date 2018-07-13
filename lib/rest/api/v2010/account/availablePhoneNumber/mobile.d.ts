/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V2010 = require('../../../V2010');
import deserialize = require('../../../../../base/deserialize');
import serialize = require('../../../../../base/serialize');
import values = require('../../../../../base/values');

/**
 * @description Initialize the MobileList
 *
 * @param version - Version of the resource
 * @param accountSid - The 34 character string that uniquely identifies your account.
 * @param countryCode - The ISO Country code to lookup phone numbers for.
 */
declare function MobileList(version: V2010, accountSid: string, countryCode: string): MobileListInstance;


declare class MobilePage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.MobilePage
   * @augments Page
   * @description Initialize the MobilePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of MobileInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.MobilePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class MobileInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.MobileInstance
   * @description Initialize the MobileContext
   *
   * @property friendlyName - A nicely-formatted version of the phone number.
   * @property phoneNumber - The phone number, in E.164 format.
   * @property lata - The LATA of this phone number.
   * @property locality - The locality/city of this phone number.
   * @property rateCenter - The rate center of this phone number.
   * @property latitude - The latitude coordinate of this phone number.
   * @property longitude - The longitude coordinate of this phone number.
   * @property region - The two-letter state or province abbreviation of this phone number.
   * @property postalCode - The postal code of this phone number.
   * @property isoCountry - The ISO country code of this phone number.
   * @property addressRequirements - This indicates whether the phone number requires you or your customer to have an Address registered with Twilio.
   * @property beta - Phone numbers new to the Twilio platform are marked as beta.
   * @property capabilities - This is a set of boolean properties that indicate whether a phone number can receive calls or messages.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The 34 character string that uniquely identifies your account.
   * @param countryCode - The ISO Country code to lookup phone numbers for.
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: account_sid, countryCode: iso_country_code);

  /**
   * Produce a plain JSON object version of the MobileInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.MobileInstance
   * @instance
   */
  toJSON();
}

export { MobileInstance, MobileList, MobilePage }
