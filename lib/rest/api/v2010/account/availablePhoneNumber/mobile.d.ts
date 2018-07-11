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

declare function MobileList(version: V2010, accountSid: string, countryCode: string): MobileListInstance

interface MobileResource {
  /**
   * This indicates whether the phone number requires you or your customer to have an [Address](https://www.twilio.com/docs/usage/api/addresses) registered with Twilio. Possible values are `none`, `any`, `local`, or `foreign`.
   */
  address_requirements: string;
  /**
   * Phone numbers new to the Twilio platform are marked as beta. Possible values are either `true` or `false`.
   */
  beta: boolean;
  /**
   * This is a set of boolean properties that indicate whether a phone number can receive calls or messages.  Possible capabilities are  `Voice`, `SMS`, `MMS`, and `Fax` with each having a value of either `true` or `false`.
   */
  capabilities: string;
  /**
   * A nicely-formatted version of the phone number.
   */
  friendly_name: string;
  /**
   * The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of this phone number.
   */
  iso_country: string;
  /**
   * The [LATA](http://en.wikipedia.org/wiki/Local_access_and_transport_area) of this phone number. Available for phone numbers from the US and Canada.
   */
  lata: string;
  /**
   * The latitude coordinate of this phone number. Available for phone numbers from the US and Canada.
   */
  latitude: number;
  /**
   * The locality/city of this phone number.
   */
  locality: string;
  /**
   * The longitude coordinate of this phone number. Available for phone numbers from the US and Canada.
   */
  longitude: number;
  /**
   * The phone number, in [E.164](https://www.twilio.com/docs/glossary/what-e164) (i.e. "+1") format.
   */
  phone_number: string;
  /**
   * The postal (zip) code of this phone number. Available for phone numbers from the US and Canada.
   */
  postal_code: string;
  /**
   * The [rate center](http://en.wikipedia.org/wiki/Telephone_exchange) of this phone number. Available for phone numbers from the US and Canada.
   */
  rate_center: string;
  /**
   * The two-letter state or province abbreviation of this phone number. Available for phone numbers from the US and Canada.
   */
  region: string;
}

interface MobilePayload extends MobileResource, Page.TwilioResponsePayload {
}

interface MobileSolution {
  accountSid: string;
  countryCode: string;
}

interface MobileListEachOptions extends ListEachOptions<MobileInstance> {
  /**
   * Find phone numbers in the specified area code. (US and Canada only)
   */
  areaCode?: number;
  /**
   * Include phone numbers new to the Twilio platform. Possible values are either `true` or `false`. Default is `true`.
   */
  beta?: boolean;
  /**
   * A pattern on which to match phone numbers. Valid characters are `'*'` and `[0-9a-zA-Z]`. The `'*'` character will match any single digit. See [Example 2](https://www.twilio.com/docs/api/rest/available-phone-numbers#local-get-basic-example-2) and [Example 3](https://www.twilio.com/docs/api/rest/available-phone-numbers#local-get-basic-example-3) below. *NOTE:* Patterns must be at least two characters long.
   */
  contains?: string;
  /**
   * Specifies the search radius for a `Near-` query in miles. If not specified this defaults to 25 miles. Maximum searchable distance is 500 miles. *Limited to US and Canadian phone numbers.*
   */
  distance?: number;
  /**
   * Indicates whether the response includes phone numbers which require any [Address](https://www.twilio.com/docs/usage/api/addresses). Possible values are `true` or `false`. If not specified, the default is `false`, and results could include phone numbers with an Address required.
   */
  excludeAllAddressRequired?: boolean;
  /**
   * Indicates whether the response includes phone numbers which require a foreign [Address](https://www.twilio.com/docs/usage/api/addresses). Possible values are `true` or `false`. If not specified, the default is `false`, and results could include phone numbers with a foreign Address required.
   */
  excludeForeignAddressRequired?: boolean;
  /**
   * Indicates whether the response includes phone numbers which require a local [Address](https://www.twilio.com/docs/usage/api/addresses). Possible values are `true` or `false`. If not specified, the default is `false`, and results could include phone numbers with a local Address required.
   */
  excludeLocalAddressRequired?: boolean;
  /**
   * This indicates whether the phone numbers can receive faxes. Possible values are `true` or `false`.
   */
  faxEnabled?: boolean;
  /**
   * Limit results to a specific Local access and transport area ([LATA](http://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](http://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. *Limited to US and Canadian phone numbers.*
   */
  inLata?: string;
  /**
   * Limit results to a particular locality (i.e.  City). Given a phone number, search within the same Locality as that number.
   */
  inLocality?: string;
  /**
   * Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. *Limited to US and Canadian phone numbers.*
   */
  inPostalCode?: string;
  /**
   * Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires InLata to be set as well. *Limited to US and Canadian phone numbers.*
   */
  inRateCenter?: string;
  /**
   * Limit results to a particular region (i.e. State/Province). Given a phone number, search within the same Region as that number. *Limited to US and Canadian phone numbers.*
   */
  inRegion?: string;
  /**
   * This indicates whether the phone numbers can receive MMS messages. Possible values are `true` or `false`.
   */
  mmsEnabled?: boolean;
  /**
   * Given a latitude/longitude pair `lat,long` find geographically close numbers within `Distance` miles. *Limited to US and Canadian phone numbers.*
   */
  nearLatLong?: string;
  /**
   * Given a phone number, find a geographically close number within `Distance` miles. Distance defaults to 25 miles. *Limited to US and Canadian phone numbers.*
   */
  nearNumber?: string;
  /**
   * This indicates whether the phone numbers can receive text messages. Possible values are `true` or `false`.
   */
  smsEnabled?: boolean;
  /**
   * This indicates whether the phone numbers can receive calls. Possible values are `true` or `false`.
   */
  voiceEnabled?: boolean;
}

interface MobileListOptions extends ListOptions<MobileInstance> {
  /**
   * Find phone numbers in the specified area code. (US and Canada only)
   */
  areaCode?: number;
  /**
   * Include phone numbers new to the Twilio platform. Possible values are either `true` or `false`. Default is `true`.
   */
  beta?: boolean;
  /**
   * A pattern on which to match phone numbers. Valid characters are `'*'` and `[0-9a-zA-Z]`. The `'*'` character will match any single digit. See [Example 2](https://www.twilio.com/docs/api/rest/available-phone-numbers#local-get-basic-example-2) and [Example 3](https://www.twilio.com/docs/api/rest/available-phone-numbers#local-get-basic-example-3) below. *NOTE:* Patterns must be at least two characters long.
   */
  contains?: string;
  /**
   * Specifies the search radius for a `Near-` query in miles. If not specified this defaults to 25 miles. Maximum searchable distance is 500 miles. *Limited to US and Canadian phone numbers.*
   */
  distance?: number;
  /**
   * Indicates whether the response includes phone numbers which require any [Address](https://www.twilio.com/docs/usage/api/addresses). Possible values are `true` or `false`. If not specified, the default is `false`, and results could include phone numbers with an Address required.
   */
  excludeAllAddressRequired?: boolean;
  /**
   * Indicates whether the response includes phone numbers which require a foreign [Address](https://www.twilio.com/docs/usage/api/addresses). Possible values are `true` or `false`. If not specified, the default is `false`, and results could include phone numbers with a foreign Address required.
   */
  excludeForeignAddressRequired?: boolean;
  /**
   * Indicates whether the response includes phone numbers which require a local [Address](https://www.twilio.com/docs/usage/api/addresses). Possible values are `true` or `false`. If not specified, the default is `false`, and results could include phone numbers with a local Address required.
   */
  excludeLocalAddressRequired?: boolean;
  /**
   * This indicates whether the phone numbers can receive faxes. Possible values are `true` or `false`.
   */
  faxEnabled?: boolean;
  /**
   * Limit results to a specific Local access and transport area ([LATA](http://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](http://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. *Limited to US and Canadian phone numbers.*
   */
  inLata?: string;
  /**
   * Limit results to a particular locality (i.e.  City). Given a phone number, search within the same Locality as that number.
   */
  inLocality?: string;
  /**
   * Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. *Limited to US and Canadian phone numbers.*
   */
  inPostalCode?: string;
  /**
   * Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires InLata to be set as well. *Limited to US and Canadian phone numbers.*
   */
  inRateCenter?: string;
  /**
   * Limit results to a particular region (i.e. State/Province). Given a phone number, search within the same Region as that number. *Limited to US and Canadian phone numbers.*
   */
  inRegion?: string;
  /**
   * This indicates whether the phone numbers can receive MMS messages. Possible values are `true` or `false`.
   */
  mmsEnabled?: boolean;
  /**
   * Given a latitude/longitude pair `lat,long` find geographically close numbers within `Distance` miles. *Limited to US and Canadian phone numbers.*
   */
  nearLatLong?: string;
  /**
   * Given a phone number, find a geographically close number within `Distance` miles. Distance defaults to 25 miles. *Limited to US and Canadian phone numbers.*
   */
  nearNumber?: string;
  /**
   * This indicates whether the phone numbers can receive text messages. Possible values are `true` or `false`.
   */
  smsEnabled?: boolean;
  /**
   * This indicates whether the phone numbers can receive calls. Possible values are `true` or `false`.
   */
  voiceEnabled?: boolean;
}

interface MobileListPageOptions extends PageOptions<MobilePage> {
  /**
   * Find phone numbers in the specified area code. (US and Canada only)
   */
  areaCode?: number;
  /**
   * Include phone numbers new to the Twilio platform. Possible values are either `true` or `false`. Default is `true`.
   */
  beta?: boolean;
  /**
   * A pattern on which to match phone numbers. Valid characters are `'*'` and `[0-9a-zA-Z]`. The `'*'` character will match any single digit. See [Example 2](https://www.twilio.com/docs/api/rest/available-phone-numbers#local-get-basic-example-2) and [Example 3](https://www.twilio.com/docs/api/rest/available-phone-numbers#local-get-basic-example-3) below. *NOTE:* Patterns must be at least two characters long.
   */
  contains?: string;
  /**
   * Specifies the search radius for a `Near-` query in miles. If not specified this defaults to 25 miles. Maximum searchable distance is 500 miles. *Limited to US and Canadian phone numbers.*
   */
  distance?: number;
  /**
   * Indicates whether the response includes phone numbers which require any [Address](https://www.twilio.com/docs/usage/api/addresses). Possible values are `true` or `false`. If not specified, the default is `false`, and results could include phone numbers with an Address required.
   */
  excludeAllAddressRequired?: boolean;
  /**
   * Indicates whether the response includes phone numbers which require a foreign [Address](https://www.twilio.com/docs/usage/api/addresses). Possible values are `true` or `false`. If not specified, the default is `false`, and results could include phone numbers with a foreign Address required.
   */
  excludeForeignAddressRequired?: boolean;
  /**
   * Indicates whether the response includes phone numbers which require a local [Address](https://www.twilio.com/docs/usage/api/addresses). Possible values are `true` or `false`. If not specified, the default is `false`, and results could include phone numbers with a local Address required.
   */
  excludeLocalAddressRequired?: boolean;
  /**
   * This indicates whether the phone numbers can receive faxes. Possible values are `true` or `false`.
   */
  faxEnabled?: boolean;
  /**
   * Limit results to a specific Local access and transport area ([LATA](http://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](http://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. *Limited to US and Canadian phone numbers.*
   */
  inLata?: string;
  /**
   * Limit results to a particular locality (i.e.  City). Given a phone number, search within the same Locality as that number.
   */
  inLocality?: string;
  /**
   * Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. *Limited to US and Canadian phone numbers.*
   */
  inPostalCode?: string;
  /**
   * Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires InLata to be set as well. *Limited to US and Canadian phone numbers.*
   */
  inRateCenter?: string;
  /**
   * Limit results to a particular region (i.e. State/Province). Given a phone number, search within the same Region as that number. *Limited to US and Canadian phone numbers.*
   */
  inRegion?: string;
  /**
   * This indicates whether the phone numbers can receive MMS messages. Possible values are `true` or `false`.
   */
  mmsEnabled?: boolean;
  /**
   * Given a latitude/longitude pair `lat,long` find geographically close numbers within `Distance` miles. *Limited to US and Canadian phone numbers.*
   */
  nearLatLong?: string;
  /**
   * Given a phone number, find a geographically close number within `Distance` miles. Distance defaults to 25 miles. *Limited to US and Canadian phone numbers.*
   */
  nearNumber?: string;
  /**
   * This indicates whether the phone numbers can receive text messages. Possible values are `true` or `false`.
   */
  smsEnabled?: boolean;
  /**
   * This indicates whether the phone numbers can receive calls. Possible values are `true` or `false`.
   */
  voiceEnabled?: boolean;
}

interface MobileListInstance {
  /**
   * Streams MobileInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  each(opts?: MobileListEachOptions): void;
  /**
   * Streams MobileInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  each(callback: (item: MobileInstance, done: (err?: Error) => void) => void): any;
  /**
   * Retrieve a single target page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<MobilePage>;
  /**
   * Retrieve a single target page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: MobilePage) => any): void;
  /**
   * Lists MobileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: MobileListOptions): Promise<MobileInstance[]>;
  /**
   * Lists MobileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: MobileListOptions, callback: (error: Error | null, items: MobileInstance[]) => any): void;
  /**
   * Lists MobileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: MobileInstance[]) => any): void;
  /**
   * Retrieve a single page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: MobileListPageOptions): Promise<MobilePage>;
  /**
   * Retrieve a single page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: MobileListPageOptions, callback: (error: Error | null, items: MobilePage) => any): void;
  /**
   * Retrieve a single page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: MobilePage) => any): void;
}

declare class MobilePage extends Page<V2010, MobilePayload, MobileResource, MobileInstance> {
  constructor(version: V2010, response: Response<string>, solution: MobileSolution);

  /**
   * Build an instance of MobileInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MobilePayload): MobileInstance;
}

declare class MobileInstance extends SerializableClass {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V2010, payload: MobilePayload);

  /**
   * This indicates whether the phone number requires you or your customer to have an [Address](https://www.twilio.com/docs/usage/api/addresses) registered with Twilio. Possible values are `none`, `any`, `local`, or `foreign`.
   */
  addressRequirements: string;
  /**
   * Phone numbers new to the Twilio platform are marked as beta. Possible values are either `true` or `false`.
   */
  beta: boolean;
  /**
   * This is a set of boolean properties that indicate whether a phone number can receive calls or messages.  Possible capabilities are  `Voice`, `SMS`, `MMS`, and `Fax` with each having a value of either `true` or `false`.
   */
  capabilities: string;
  /**
   * A nicely-formatted version of the phone number.
   */
  friendlyName: string;
  /**
   * The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of this phone number.
   */
  isoCountry: string;
  /**
   * The [LATA](http://en.wikipedia.org/wiki/Local_access_and_transport_area) of this phone number. Available for phone numbers from the US and Canada.
   */
  lata: string;
  /**
   * The latitude coordinate of this phone number. Available for phone numbers from the US and Canada.
   */
  latitude: number;
  /**
   * The locality/city of this phone number.
   */
  locality: string;
  /**
   * The longitude coordinate of this phone number. Available for phone numbers from the US and Canada.
   */
  longitude: number;
  /**
   * The phone number, in [E.164](https://www.twilio.com/docs/glossary/what-e164) (i.e. "+1") format.
   */
  phoneNumber: string;
  /**
   * The postal (zip) code of this phone number. Available for phone numbers from the US and Canada.
   */
  postalCode: string;
  /**
   * The [rate center](http://en.wikipedia.org/wiki/Telephone_exchange) of this phone number. Available for phone numbers from the US and Canada.
   */
  rateCenter: string;
  /**
   * The two-letter state or province abbreviation of this phone number. Available for phone numbers from the US and Canada.
   */
  region: string;
}

export { MobileInstance, MobileList, MobileListEachOptions, MobileListInstance, MobileListOptions, MobileListPageOptions, MobilePage, MobilePayload, MobileResource, MobileSolution }
