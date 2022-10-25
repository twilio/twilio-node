/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");


/**
 * Whether a phone number can receive calls or messages
 */
export class ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocalCapabilities {
  "mms"?: boolean;
  "sms"?: boolean;
  "voice"?: boolean;
  "fax"?: boolean;
}


export class ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational {
  /**
   * A formatted version of the phone number
   */
  "friendlyName"?: string | null;
  /**
   * The phone number in E.164 format
   */
  "phoneNumber"?: string | null;
  /**
   * The LATA of this phone number
   */
  "lata"?: string | null;
  /**
   * The locality or city of this phone number\'s location
   */
  "locality"?: string | null;
  /**
   * The rate center of this phone number
   */
  "rateCenter"?: string | null;
  /**
   * The latitude of this phone number\'s location
   */
  "latitude"?: number | null;
  /**
   * The longitude of this phone number\'s location
   */
  "longitude"?: number | null;
  /**
   * The two-letter state or province abbreviation of this phone number\'s location
   */
  "region"?: string | null;
  /**
   * The postal or ZIP code of this phone number\'s location
   */
  "postalCode"?: string | null;
  /**
   * The ISO country code of this phone number
   */
  "isoCountry"?: string | null;
  /**
   * The type of Address resource the phone number requires
   */
  "addressRequirements"?: string | null;
  /**
   * Whether the phone number is new to the Twilio platform
   */
  "beta"?: boolean | null;
  "capabilities"?: ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocalCapabilities | null;
}


/**
 * Options to pass to each
 *
 * @property { number } [areaCode] The area code of the phone numbers to read. Applies to only phone numbers in the US and Canada.
 * @property { string } [contains] The pattern on which to match phone numbers. Valid characters are &#x60;*&#x60;, &#x60;0-9&#x60;, &#x60;a-z&#x60;, and &#x60;A-Z&#x60;. The &#x60;*&#x60; character matches any single digit. For examples, see [Example 2](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-2) and [Example 3](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-3). If specified, this value must have at least two characters.
 * @property { boolean } [smsEnabled] Whether the phone numbers can receive text messages. Can be: &#x60;true&#x60; or &#x60;false&#x60;.
 * @property { boolean } [mmsEnabled] Whether the phone numbers can receive MMS messages. Can be: &#x60;true&#x60; or &#x60;false&#x60;.
 * @property { boolean } [voiceEnabled] Whether the phone numbers can receive calls. Can be: &#x60;true&#x60; or &#x60;false&#x60;.
 * @property { boolean } [excludeAllAddressRequired] Whether to exclude phone numbers that require an [Address](https://www.twilio.com/docs/usage/api/address). Can be: &#x60;true&#x60; or &#x60;false&#x60; and the default is &#x60;false&#x60;.
 * @property { boolean } [excludeLocalAddressRequired] Whether to exclude phone numbers that require a local [Address](https://www.twilio.com/docs/usage/api/address). Can be: &#x60;true&#x60; or &#x60;false&#x60; and the default is &#x60;false&#x60;.
 * @property { boolean } [excludeForeignAddressRequired] Whether to exclude phone numbers that require a foreign [Address](https://www.twilio.com/docs/usage/api/address). Can be: &#x60;true&#x60; or &#x60;false&#x60; and the default is &#x60;false&#x60;.
 * @property { boolean } [beta] Whether to read phone numbers that are new to the Twilio platform. Can be: &#x60;true&#x60; or &#x60;false&#x60; and the default is &#x60;true&#x60;.
 * @property { string } [nearNumber] Given a phone number, find a geographically close number within &#x60;distance&#x60; miles. Distance defaults to 25 miles. Applies to only phone numbers in the US and Canada.
 * @property { string } [nearLatLong] Given a latitude/longitude pair &#x60;lat,long&#x60; find geographically close numbers within &#x60;distance&#x60; miles. Applies to only phone numbers in the US and Canada.
 * @property { number } [distance] The search radius, in miles, for a &#x60;near_&#x60; query.  Can be up to &#x60;500&#x60; and the default is &#x60;25&#x60;. Applies to only phone numbers in the US and Canada.
 * @property { string } [inPostalCode] Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inRegion] Limit results to a particular region, state, or province. Given a phone number, search within the same region as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inRateCenter] Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires &#x60;in_lata&#x60; to be set as well. Applies to only phone numbers in the US and Canada.
 * @property { string } [inLata] Limit results to a specific local access and transport area ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inLocality] Limit results to a particular locality or city. Given a phone number, search within the same Locality as that number.
 * @property { boolean } [faxEnabled] Whether the phone numbers can receive faxes. Can be: &#x60;true&#x60; or &#x60;false&#x60;.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface NationalListInstanceEachOptions {
  areaCode?: number;
  contains?: string;
  smsEnabled?: boolean;
  mmsEnabled?: boolean;
  voiceEnabled?: boolean;
  excludeAllAddressRequired?: boolean;
  excludeLocalAddressRequired?: boolean;
  excludeForeignAddressRequired?: boolean;
  beta?: boolean;
  nearNumber?: string;
  nearLatLong?: string;
  distance?: number;
  inPostalCode?: string;
  inRegion?: string;
  inRateCenter?: string;
  inLata?: string;
  inLocality?: string;
  faxEnabled?: boolean;
  pageSize?: number;
  callback?: (item: NationalInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { number } [areaCode] The area code of the phone numbers to read. Applies to only phone numbers in the US and Canada.
 * @property { string } [contains] The pattern on which to match phone numbers. Valid characters are &#x60;*&#x60;, &#x60;0-9&#x60;, &#x60;a-z&#x60;, and &#x60;A-Z&#x60;. The &#x60;*&#x60; character matches any single digit. For examples, see [Example 2](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-2) and [Example 3](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-3). If specified, this value must have at least two characters.
 * @property { boolean } [smsEnabled] Whether the phone numbers can receive text messages. Can be: &#x60;true&#x60; or &#x60;false&#x60;.
 * @property { boolean } [mmsEnabled] Whether the phone numbers can receive MMS messages. Can be: &#x60;true&#x60; or &#x60;false&#x60;.
 * @property { boolean } [voiceEnabled] Whether the phone numbers can receive calls. Can be: &#x60;true&#x60; or &#x60;false&#x60;.
 * @property { boolean } [excludeAllAddressRequired] Whether to exclude phone numbers that require an [Address](https://www.twilio.com/docs/usage/api/address). Can be: &#x60;true&#x60; or &#x60;false&#x60; and the default is &#x60;false&#x60;.
 * @property { boolean } [excludeLocalAddressRequired] Whether to exclude phone numbers that require a local [Address](https://www.twilio.com/docs/usage/api/address). Can be: &#x60;true&#x60; or &#x60;false&#x60; and the default is &#x60;false&#x60;.
 * @property { boolean } [excludeForeignAddressRequired] Whether to exclude phone numbers that require a foreign [Address](https://www.twilio.com/docs/usage/api/address). Can be: &#x60;true&#x60; or &#x60;false&#x60; and the default is &#x60;false&#x60;.
 * @property { boolean } [beta] Whether to read phone numbers that are new to the Twilio platform. Can be: &#x60;true&#x60; or &#x60;false&#x60; and the default is &#x60;true&#x60;.
 * @property { string } [nearNumber] Given a phone number, find a geographically close number within &#x60;distance&#x60; miles. Distance defaults to 25 miles. Applies to only phone numbers in the US and Canada.
 * @property { string } [nearLatLong] Given a latitude/longitude pair &#x60;lat,long&#x60; find geographically close numbers within &#x60;distance&#x60; miles. Applies to only phone numbers in the US and Canada.
 * @property { number } [distance] The search radius, in miles, for a &#x60;near_&#x60; query.  Can be up to &#x60;500&#x60; and the default is &#x60;25&#x60;. Applies to only phone numbers in the US and Canada.
 * @property { string } [inPostalCode] Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inRegion] Limit results to a particular region, state, or province. Given a phone number, search within the same region as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inRateCenter] Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires &#x60;in_lata&#x60; to be set as well. Applies to only phone numbers in the US and Canada.
 * @property { string } [inLata] Limit results to a specific local access and transport area ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inLocality] Limit results to a particular locality or city. Given a phone number, search within the same Locality as that number.
 * @property { boolean } [faxEnabled] Whether the phone numbers can receive faxes. Can be: &#x60;true&#x60; or &#x60;false&#x60;.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface NationalListInstanceOptions {
  areaCode?: number;
  contains?: string;
  smsEnabled?: boolean;
  mmsEnabled?: boolean;
  voiceEnabled?: boolean;
  excludeAllAddressRequired?: boolean;
  excludeLocalAddressRequired?: boolean;
  excludeForeignAddressRequired?: boolean;
  beta?: boolean;
  nearNumber?: string;
  nearLatLong?: string;
  distance?: number;
  inPostalCode?: string;
  inRegion?: string;
  inRateCenter?: string;
  inLata?: string;
  inLocality?: string;
  faxEnabled?: boolean;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { number } [areaCode] The area code of the phone numbers to read. Applies to only phone numbers in the US and Canada.
 * @property { string } [contains] The pattern on which to match phone numbers. Valid characters are &#x60;*&#x60;, &#x60;0-9&#x60;, &#x60;a-z&#x60;, and &#x60;A-Z&#x60;. The &#x60;*&#x60; character matches any single digit. For examples, see [Example 2](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-2) and [Example 3](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-3). If specified, this value must have at least two characters.
 * @property { boolean } [smsEnabled] Whether the phone numbers can receive text messages. Can be: &#x60;true&#x60; or &#x60;false&#x60;.
 * @property { boolean } [mmsEnabled] Whether the phone numbers can receive MMS messages. Can be: &#x60;true&#x60; or &#x60;false&#x60;.
 * @property { boolean } [voiceEnabled] Whether the phone numbers can receive calls. Can be: &#x60;true&#x60; or &#x60;false&#x60;.
 * @property { boolean } [excludeAllAddressRequired] Whether to exclude phone numbers that require an [Address](https://www.twilio.com/docs/usage/api/address). Can be: &#x60;true&#x60; or &#x60;false&#x60; and the default is &#x60;false&#x60;.
 * @property { boolean } [excludeLocalAddressRequired] Whether to exclude phone numbers that require a local [Address](https://www.twilio.com/docs/usage/api/address). Can be: &#x60;true&#x60; or &#x60;false&#x60; and the default is &#x60;false&#x60;.
 * @property { boolean } [excludeForeignAddressRequired] Whether to exclude phone numbers that require a foreign [Address](https://www.twilio.com/docs/usage/api/address). Can be: &#x60;true&#x60; or &#x60;false&#x60; and the default is &#x60;false&#x60;.
 * @property { boolean } [beta] Whether to read phone numbers that are new to the Twilio platform. Can be: &#x60;true&#x60; or &#x60;false&#x60; and the default is &#x60;true&#x60;.
 * @property { string } [nearNumber] Given a phone number, find a geographically close number within &#x60;distance&#x60; miles. Distance defaults to 25 miles. Applies to only phone numbers in the US and Canada.
 * @property { string } [nearLatLong] Given a latitude/longitude pair &#x60;lat,long&#x60; find geographically close numbers within &#x60;distance&#x60; miles. Applies to only phone numbers in the US and Canada.
 * @property { number } [distance] The search radius, in miles, for a &#x60;near_&#x60; query.  Can be up to &#x60;500&#x60; and the default is &#x60;25&#x60;. Applies to only phone numbers in the US and Canada.
 * @property { string } [inPostalCode] Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inRegion] Limit results to a particular region, state, or province. Given a phone number, search within the same region as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inRateCenter] Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires &#x60;in_lata&#x60; to be set as well. Applies to only phone numbers in the US and Canada.
 * @property { string } [inLata] Limit results to a specific local access and transport area ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inLocality] Limit results to a particular locality or city. Given a phone number, search within the same Locality as that number.
 * @property { boolean } [faxEnabled] Whether the phone numbers can receive faxes. Can be: &#x60;true&#x60; or &#x60;false&#x60;.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface NationalListInstancePageOptions {
  areaCode?: number;
  contains?: string;
  smsEnabled?: boolean;
  mmsEnabled?: boolean;
  voiceEnabled?: boolean;
  excludeAllAddressRequired?: boolean;
  excludeLocalAddressRequired?: boolean;
  excludeForeignAddressRequired?: boolean;
  beta?: boolean;
  nearNumber?: string;
  nearLatLong?: string;
  distance?: number;
  inPostalCode?: string;
  inRegion?: string;
  inRateCenter?: string;
  inLata?: string;
  inLocality?: string;
  faxEnabled?: boolean;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface NationalListInstance {



  /**
   * Streams NationalInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: NationalInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams NationalInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { NationalListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: NationalListInstanceEachOptions, callback?: (item: NationalInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of NationalInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: NationalPage) => any): Promise<NationalPage>;
  /**
   * Retrieve a single target page of NationalInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: NationalPage) => any): Promise<NationalPage>;
  getPage(params?: any, callback?: any): Promise<NationalPage>;
  /**
   * Lists NationalInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: NationalInstance[]) => any): Promise<NationalInstance[]>;
  /**
   * Lists NationalInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { NationalListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: NationalListInstanceOptions, callback?: (error: Error | null, items: NationalInstance[]) => any): Promise<NationalInstance[]>;
  list(params?: any, callback?: any): Promise<NationalInstance[]>;
  /**
   * Retrieve a single page of NationalInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: NationalPage) => any): Promise<NationalPage>;
  /**
   * Retrieve a single page of NationalInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { NationalListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: NationalListInstancePageOptions, callback?: (error: Error | null, items: NationalPage) => any): Promise<NationalPage>;
  page(params?: any, callback?: any): Promise<NationalPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface NationalSolution {
  accountSid?: string;
  countryCode?: string;
}

interface NationalListInstanceImpl extends NationalListInstance {}
class NationalListInstanceImpl implements NationalListInstance {
  _version?: V2010;
  _solution?: NationalSolution;
  _uri?: string;

}

export function NationalListInstance(version: V2010, accountSid: string, countryCode: string): NationalListInstance {
  const instance = {} as NationalListInstanceImpl;

  instance._version = version;
  instance._solution = { accountSid, countryCode };
  instance._uri = `/Accounts/${accountSid}/AvailablePhoneNumbers/${countryCode}/National.json`;

  instance.page = function page(params?: any, callback?: any): Promise<NationalPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.areaCode !== undefined) data['AreaCode'] = params.areaCode;
    if (params.contains !== undefined) data['Contains'] = params.contains;
    if (params.smsEnabled !== undefined) data['SmsEnabled'] = serialize.bool(params.smsEnabled);
    if (params.mmsEnabled !== undefined) data['MmsEnabled'] = serialize.bool(params.mmsEnabled);
    if (params.voiceEnabled !== undefined) data['VoiceEnabled'] = serialize.bool(params.voiceEnabled);
    if (params.excludeAllAddressRequired !== undefined) data['ExcludeAllAddressRequired'] = serialize.bool(params.excludeAllAddressRequired);
    if (params.excludeLocalAddressRequired !== undefined) data['ExcludeLocalAddressRequired'] = serialize.bool(params.excludeLocalAddressRequired);
    if (params.excludeForeignAddressRequired !== undefined) data['ExcludeForeignAddressRequired'] = serialize.bool(params.excludeForeignAddressRequired);
    if (params.beta !== undefined) data['Beta'] = serialize.bool(params.beta);
    if (params.nearNumber !== undefined) data['NearNumber'] = params.nearNumber;
    if (params.nearLatLong !== undefined) data['NearLatLong'] = params.nearLatLong;
    if (params.distance !== undefined) data['Distance'] = params.distance;
    if (params.inPostalCode !== undefined) data['InPostalCode'] = params.inPostalCode;
    if (params.inRegion !== undefined) data['InRegion'] = params.inRegion;
    if (params.inRateCenter !== undefined) data['InRateCenter'] = params.inRateCenter;
    if (params.inLata !== undefined) data['InLata'] = params.inLata;
    if (params.inLocality !== undefined) data['InLocality'] = params.inLocality;
    if (params.faxEnabled !== undefined) data['FaxEnabled'] = serialize.bool(params.faxEnabled);
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new NationalPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<NationalPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new NationalPage(this._version, payload, this._solution));
    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;
  }


  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}

interface NationalPayload extends NationalResource, Page.TwilioResponsePayload {
}

interface NationalResource {
  available_phone_numbers?: Array<ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational>;
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string;
  page?: number;
  page_size?: number;
  previous_page_uri?: string;
  start?: number;
  uri?: string;
}

export class NationalInstance {

  constructor(protected _version: V2010, payload: NationalPayload, accountSid: string, countryCode?: string) {
    this.availablePhoneNumbers = payload.available_phone_numbers;
    this.end = deserialize.integer(payload.end);
    this.firstPageUri = payload.first_page_uri;
    this.nextPageUri = payload.next_page_uri;
    this.page = deserialize.integer(payload.page);
    this.pageSize = deserialize.integer(payload.page_size);
    this.previousPageUri = payload.previous_page_uri;
    this.start = deserialize.integer(payload.start);
    this.uri = payload.uri;

  }

  availablePhoneNumbers?: Array<ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational>;
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string;
  page?: number;
  pageSize?: number;
  previousPageUri?: string;
  start?: number;
  uri?: string;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      availablePhoneNumbers: this.availablePhoneNumbers, 
      end: this.end, 
      firstPageUri: this.firstPageUri, 
      nextPageUri: this.nextPageUri, 
      page: this.page, 
      pageSize: this.pageSize, 
      previousPageUri: this.previousPageUri, 
      start: this.start, 
      uri: this.uri
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class NationalPage extends Page<V2010, NationalPayload, NationalResource, NationalInstance> {
/**
* Initialize the NationalPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V2010, response: Response<string>, solution: NationalSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of NationalInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: NationalPayload): NationalInstance {
    return new NationalInstance(
    this._version,
    payload,
        this._solution.accountSid,
        this._solution.countryCode,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

