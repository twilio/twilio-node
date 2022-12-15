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
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";
import { PhoneNumberCapabilities } from "../../../../../interfaces";

/**
 * Options to pass to each
 *
 * @property { number } [areaCode] The area code of the phone numbers to read. Applies to only phone numbers in the US and Canada.
 * @property { string } [contains] The pattern on which to match phone numbers. Valid characters are `*`, `0-9`, `a-z`, and `A-Z`. The `*` character matches any single digit. For examples, see [Example 2](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-2) and [Example 3](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-3). If specified, this value must have at least two characters.
 * @property { boolean } [smsEnabled] Whether the phone numbers can receive text messages. Can be: `true` or `false`.
 * @property { boolean } [mmsEnabled] Whether the phone numbers can receive MMS messages. Can be: `true` or `false`.
 * @property { boolean } [voiceEnabled] Whether the phone numbers can receive calls. Can be: `true` or `false`.
 * @property { boolean } [excludeAllAddressRequired] Whether to exclude phone numbers that require an [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
 * @property { boolean } [excludeLocalAddressRequired] Whether to exclude phone numbers that require a local [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
 * @property { boolean } [excludeForeignAddressRequired] Whether to exclude phone numbers that require a foreign [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
 * @property { boolean } [beta] Whether to read phone numbers that are new to the Twilio platform. Can be: `true` or `false` and the default is `true`.
 * @property { string } [nearNumber] Given a phone number, find a geographically close number within `distance` miles. Distance defaults to 25 miles. Applies to only phone numbers in the US and Canada.
 * @property { string } [nearLatLong] Given a latitude/longitude pair `lat,long` find geographically close numbers within `distance` miles. Applies to only phone numbers in the US and Canada.
 * @property { number } [distance] The search radius, in miles, for a `near_` query.  Can be up to `500` and the default is `25`. Applies to only phone numbers in the US and Canada.
 * @property { string } [inPostalCode] Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inRegion] Limit results to a particular region, state, or province. Given a phone number, search within the same region as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inRateCenter] Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires `in_lata` to be set as well. Applies to only phone numbers in the US and Canada.
 * @property { string } [inLata] Limit results to a specific local access and transport area ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inLocality] Limit results to a particular locality or city. Given a phone number, search within the same Locality as that number.
 * @property { boolean } [faxEnabled] Whether the phone numbers can receive faxes. Can be: `true` or `false`.
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
export interface MobileListInstanceEachOptions {
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
  callback?: (item: MobileInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { number } [areaCode] The area code of the phone numbers to read. Applies to only phone numbers in the US and Canada.
 * @property { string } [contains] The pattern on which to match phone numbers. Valid characters are `*`, `0-9`, `a-z`, and `A-Z`. The `*` character matches any single digit. For examples, see [Example 2](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-2) and [Example 3](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-3). If specified, this value must have at least two characters.
 * @property { boolean } [smsEnabled] Whether the phone numbers can receive text messages. Can be: `true` or `false`.
 * @property { boolean } [mmsEnabled] Whether the phone numbers can receive MMS messages. Can be: `true` or `false`.
 * @property { boolean } [voiceEnabled] Whether the phone numbers can receive calls. Can be: `true` or `false`.
 * @property { boolean } [excludeAllAddressRequired] Whether to exclude phone numbers that require an [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
 * @property { boolean } [excludeLocalAddressRequired] Whether to exclude phone numbers that require a local [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
 * @property { boolean } [excludeForeignAddressRequired] Whether to exclude phone numbers that require a foreign [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
 * @property { boolean } [beta] Whether to read phone numbers that are new to the Twilio platform. Can be: `true` or `false` and the default is `true`.
 * @property { string } [nearNumber] Given a phone number, find a geographically close number within `distance` miles. Distance defaults to 25 miles. Applies to only phone numbers in the US and Canada.
 * @property { string } [nearLatLong] Given a latitude/longitude pair `lat,long` find geographically close numbers within `distance` miles. Applies to only phone numbers in the US and Canada.
 * @property { number } [distance] The search radius, in miles, for a `near_` query.  Can be up to `500` and the default is `25`. Applies to only phone numbers in the US and Canada.
 * @property { string } [inPostalCode] Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inRegion] Limit results to a particular region, state, or province. Given a phone number, search within the same region as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inRateCenter] Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires `in_lata` to be set as well. Applies to only phone numbers in the US and Canada.
 * @property { string } [inLata] Limit results to a specific local access and transport area ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inLocality] Limit results to a particular locality or city. Given a phone number, search within the same Locality as that number.
 * @property { boolean } [faxEnabled] Whether the phone numbers can receive faxes. Can be: `true` or `false`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface MobileListInstanceOptions {
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
 * @property { string } [contains] The pattern on which to match phone numbers. Valid characters are `*`, `0-9`, `a-z`, and `A-Z`. The `*` character matches any single digit. For examples, see [Example 2](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-2) and [Example 3](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-3). If specified, this value must have at least two characters.
 * @property { boolean } [smsEnabled] Whether the phone numbers can receive text messages. Can be: `true` or `false`.
 * @property { boolean } [mmsEnabled] Whether the phone numbers can receive MMS messages. Can be: `true` or `false`.
 * @property { boolean } [voiceEnabled] Whether the phone numbers can receive calls. Can be: `true` or `false`.
 * @property { boolean } [excludeAllAddressRequired] Whether to exclude phone numbers that require an [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
 * @property { boolean } [excludeLocalAddressRequired] Whether to exclude phone numbers that require a local [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
 * @property { boolean } [excludeForeignAddressRequired] Whether to exclude phone numbers that require a foreign [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
 * @property { boolean } [beta] Whether to read phone numbers that are new to the Twilio platform. Can be: `true` or `false` and the default is `true`.
 * @property { string } [nearNumber] Given a phone number, find a geographically close number within `distance` miles. Distance defaults to 25 miles. Applies to only phone numbers in the US and Canada.
 * @property { string } [nearLatLong] Given a latitude/longitude pair `lat,long` find geographically close numbers within `distance` miles. Applies to only phone numbers in the US and Canada.
 * @property { number } [distance] The search radius, in miles, for a `near_` query.  Can be up to `500` and the default is `25`. Applies to only phone numbers in the US and Canada.
 * @property { string } [inPostalCode] Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inRegion] Limit results to a particular region, state, or province. Given a phone number, search within the same region as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inRateCenter] Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires `in_lata` to be set as well. Applies to only phone numbers in the US and Canada.
 * @property { string } [inLata] Limit results to a specific local access and transport area ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inLocality] Limit results to a particular locality or city. Given a phone number, search within the same Locality as that number.
 * @property { boolean } [faxEnabled] Whether the phone numbers can receive faxes. Can be: `true` or `false`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface MobileListInstancePageOptions {
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

export interface MobileListInstance {
  /**
   * Streams MobileInstance records from the API.
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
  each(
    callback?: (item: MobileInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams MobileInstance records from the API.
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
   * @param { MobileListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: MobileListInstanceEachOptions,
    callback?: (item: MobileInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of MobileInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: MobilePage) => any
  ): Promise<MobilePage>;
  /**
   * Retrieve a single target page of MobileInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl?: string,
    callback?: (error: Error | null, items: MobilePage) => any
  ): Promise<MobilePage>;
  getPage(params?: any, callback?: any): Promise<MobilePage>;
  /**
   * Lists MobileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: MobileInstance[]) => any
  ): Promise<MobileInstance[]>;
  /**
   * Lists MobileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MobileListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: MobileListInstanceOptions,
    callback?: (error: Error | null, items: MobileInstance[]) => any
  ): Promise<MobileInstance[]>;
  list(params?: any, callback?: any): Promise<MobileInstance[]>;
  /**
   * Retrieve a single page of MobileInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: MobilePage) => any
  ): Promise<MobilePage>;
  /**
   * Retrieve a single page of MobileInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MobileListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: MobileListInstancePageOptions,
    callback?: (error: Error | null, items: MobilePage) => any
  ): Promise<MobilePage>;
  page(params?: any, callback?: any): Promise<MobilePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface MobileSolution {
  accountSid?: string;
  countryCode?: string;
}

interface MobileListInstanceImpl extends MobileListInstance {}
class MobileListInstanceImpl implements MobileListInstance {
  _version?: V2010;
  _solution?: MobileSolution;
  _uri?: string;
}

export function MobileListInstance(
  version: V2010,
  accountSid: string,
  countryCode: string
): MobileListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(countryCode)) {
    throw new Error("Parameter 'countryCode' is not valid.");
  }

  const instance = {} as MobileListInstanceImpl;

  instance._version = version;
  instance._solution = { accountSid, countryCode };
  instance._uri = `/Accounts/${accountSid}/AvailablePhoneNumbers/${countryCode}/Mobile.json`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<MobilePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["areaCode"] !== undefined) data["AreaCode"] = params["areaCode"];
    if (params["contains"] !== undefined) data["Contains"] = params["contains"];
    if (params["smsEnabled"] !== undefined)
      data["SmsEnabled"] = serialize.bool(params["smsEnabled"]);
    if (params["mmsEnabled"] !== undefined)
      data["MmsEnabled"] = serialize.bool(params["mmsEnabled"]);
    if (params["voiceEnabled"] !== undefined)
      data["VoiceEnabled"] = serialize.bool(params["voiceEnabled"]);
    if (params["excludeAllAddressRequired"] !== undefined)
      data["ExcludeAllAddressRequired"] = serialize.bool(
        params["excludeAllAddressRequired"]
      );
    if (params["excludeLocalAddressRequired"] !== undefined)
      data["ExcludeLocalAddressRequired"] = serialize.bool(
        params["excludeLocalAddressRequired"]
      );
    if (params["excludeForeignAddressRequired"] !== undefined)
      data["ExcludeForeignAddressRequired"] = serialize.bool(
        params["excludeForeignAddressRequired"]
      );
    if (params["beta"] !== undefined)
      data["Beta"] = serialize.bool(params["beta"]);
    if (params["nearNumber"] !== undefined)
      data["NearNumber"] = params["nearNumber"];
    if (params["nearLatLong"] !== undefined)
      data["NearLatLong"] = params["nearLatLong"];
    if (params["distance"] !== undefined) data["Distance"] = params["distance"];
    if (params["inPostalCode"] !== undefined)
      data["InPostalCode"] = params["inPostalCode"];
    if (params["inRegion"] !== undefined) data["InRegion"] = params["inRegion"];
    if (params["inRateCenter"] !== undefined)
      data["InRateCenter"] = params["inRateCenter"];
    if (params["inLata"] !== undefined) data["InLata"] = params["inLata"];
    if (params["inLocality"] !== undefined)
      data["InLocality"] = params["inLocality"];
    if (params["faxEnabled"] !== undefined)
      data["FaxEnabled"] = serialize.bool(params["faxEnabled"]);
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new MobilePage(operationVersion, payload, this._solution)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl?: any,
    callback?: any
  ): Promise<MobilePage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new MobilePage(this._version, payload, this._solution)
    );
    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.toJSON = function toJSON() {
    return this._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(this.toJSON(), options);
  };

  return instance;
}

interface MobilePayload extends TwilioResponsePayload {
  available_phone_numbers: MobileResource[];
}

interface MobileResource {
  friendly_name?: string | null;
  phone_number?: string | null;
  lata?: string | null;
  locality?: string | null;
  rate_center?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  region?: string | null;
  postal_code?: string | null;
  iso_country?: string | null;
  address_requirements?: string | null;
  beta?: boolean | null;
  capabilities?: PhoneNumberCapabilities | null;
}

export class MobileInstance {
  constructor(
    protected _version: V2010,
    payload: MobileResource,
    accountSid: string,
    countryCode: string
  ) {
    this.friendlyName = payload.friendly_name;
    this.phoneNumber = payload.phone_number;
    this.lata = payload.lata;
    this.locality = payload.locality;
    this.rateCenter = payload.rate_center;
    this.latitude = payload.latitude;
    this.longitude = payload.longitude;
    this.region = payload.region;
    this.postalCode = payload.postal_code;
    this.isoCountry = payload.iso_country;
    this.addressRequirements = payload.address_requirements;
    this.beta = payload.beta;
    this.capabilities = payload.capabilities;
  }

  /**
   * A formatted version of the phone number
   */
  friendlyName?: string | null;
  /**
   * The phone number in E.164 format
   */
  phoneNumber?: string | null;
  /**
   * The LATA of this phone number
   */
  lata?: string | null;
  /**
   * The locality or city of this phone number\'s location
   */
  locality?: string | null;
  /**
   * The rate center of this phone number
   */
  rateCenter?: string | null;
  /**
   * The latitude of this phone number\'s location
   */
  latitude?: number | null;
  /**
   * The longitude of this phone number\'s location
   */
  longitude?: number | null;
  /**
   * The two-letter state or province abbreviation of this phone number\'s location
   */
  region?: string | null;
  /**
   * The postal or ZIP code of this phone number\'s location
   */
  postalCode?: string | null;
  /**
   * The ISO country code of this phone number
   */
  isoCountry?: string | null;
  /**
   * The type of Address resource the phone number requires
   */
  addressRequirements?: string | null;
  /**
   * Whether the phone number is new to the Twilio platform
   */
  beta?: boolean | null;
  capabilities?: PhoneNumberCapabilities | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      friendlyName: this.friendlyName,
      phoneNumber: this.phoneNumber,
      lata: this.lata,
      locality: this.locality,
      rateCenter: this.rateCenter,
      latitude: this.latitude,
      longitude: this.longitude,
      region: this.region,
      postalCode: this.postalCode,
      isoCountry: this.isoCountry,
      addressRequirements: this.addressRequirements,
      beta: this.beta,
      capabilities: this.capabilities,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class MobilePage extends Page<
  V2010,
  MobilePayload,
  MobileResource,
  MobileInstance
> {
  /**
   * Initialize the MobilePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: MobileSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of MobileInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MobileResource): MobileInstance {
    return new MobileInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.countryCode
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
