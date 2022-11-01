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


export class ApiV2010AccountAddressDependentPhoneNumber {
  /**
   * The unique string that identifies the resource
   */
  "sid"?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  "accountSid"?: string | null;
  /**
   * The string that you assigned to describe the resource
   */
  "friendlyName"?: string | null;
  /**
   * The phone number in E.164 format
   */
  "phoneNumber"?: string | null;
  /**
   * The URL we call when the phone number receives a call
   */
  "voiceUrl"?: string | null;
  /**
   * The HTTP method used with the voice_url
   */
  "voiceMethod"?: ApiV2010AccountAddressDependentPhoneNumber.VoiceMethodEnum;
  /**
   * The HTTP method used with voice_fallback_url
   */
  "voiceFallbackMethod"?: ApiV2010AccountAddressDependentPhoneNumber.VoiceFallbackMethodEnum;
  /**
   * The URL we call when an error occurs in TwiML
   */
  "voiceFallbackUrl"?: string | null;
  /**
   * Whether to lookup the caller\'s name
   */
  "voiceCallerIdLookup"?: boolean | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was created
   */
  "dateCreated"?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  "dateUpdated"?: string | null;
  /**
   * The HTTP method used with sms_fallback_url
   */
  "smsFallbackMethod"?: ApiV2010AccountAddressDependentPhoneNumber.SmsFallbackMethodEnum;
  /**
   * The URL that we call when an error occurs while retrieving or executing the TwiML
   */
  "smsFallbackUrl"?: string | null;
  /**
   * The HTTP method to use with sms_url
   */
  "smsMethod"?: ApiV2010AccountAddressDependentPhoneNumber.SmsMethodEnum;
  /**
   * The URL we call when the phone number receives an incoming SMS message
   */
  "smsUrl"?: string | null;
  "addressRequirements"?: DependentPhoneNumberEnumAddressRequirement;
  /**
   * Indicate if a phone can receive calls or messages
   */
  "capabilities"?: any | null;
  /**
   * The URL to send status information to your application
   */
  "statusCallback"?: string | null;
  /**
   * The HTTP method we use to call status_callback
   */
  "statusCallbackMethod"?: ApiV2010AccountAddressDependentPhoneNumber.StatusCallbackMethodEnum;
  /**
   * The API version used to start a new TwiML session
   */
  "apiVersion"?: string | null;
  /**
   * The SID of the application that handles SMS messages sent to the phone number
   */
  "smsApplicationSid"?: string | null;
  /**
   * The SID of the application that handles calls to the phone number
   */
  "voiceApplicationSid"?: string | null;
  /**
   * The SID of the Trunk that handles calls to the phone number
   */
  "trunkSid"?: string | null;
  "emergencyStatus"?: DependentPhoneNumberEnumEmergencyStatus;
  /**
   * The emergency address configuration to use for emergency calling
   */
  "emergencyAddressSid"?: string | null;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`
   */
  "uri"?: string | null;
}


/**
 * Options to pass to each
 *
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
export interface DependentPhoneNumberListInstanceEachOptions {
  "pageSize"?: number;
  callback?: (item: DependentPhoneNumberInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface DependentPhoneNumberListInstanceOptions {
  "pageSize"?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface DependentPhoneNumberListInstancePageOptions {
  "pageSize"?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface DependentPhoneNumberListInstance {



  /**
   * Streams DependentPhoneNumberInstance records from the API.
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
  each(callback?: (item: DependentPhoneNumberInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams DependentPhoneNumberInstance records from the API.
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
   * @param { DependentPhoneNumberListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: DependentPhoneNumberListInstanceEachOptions, callback?: (item: DependentPhoneNumberInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of DependentPhoneNumberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: DependentPhoneNumberPage) => any): Promise<DependentPhoneNumberPage>;
  /**
   * Retrieve a single target page of DependentPhoneNumberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: DependentPhoneNumberPage) => any): Promise<DependentPhoneNumberPage>;
  getPage(params?: any, callback?: any): Promise<DependentPhoneNumberPage>;
  /**
   * Lists DependentPhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: DependentPhoneNumberInstance[]) => any): Promise<DependentPhoneNumberInstance[]>;
  /**
   * Lists DependentPhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DependentPhoneNumberListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: DependentPhoneNumberListInstanceOptions, callback?: (error: Error | null, items: DependentPhoneNumberInstance[]) => any): Promise<DependentPhoneNumberInstance[]>;
  list(params?: any, callback?: any): Promise<DependentPhoneNumberInstance[]>;
  /**
   * Retrieve a single page of DependentPhoneNumberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: DependentPhoneNumberPage) => any): Promise<DependentPhoneNumberPage>;
  /**
   * Retrieve a single page of DependentPhoneNumberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DependentPhoneNumberListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: DependentPhoneNumberListInstancePageOptions, callback?: (error: Error | null, items: DependentPhoneNumberPage) => any): Promise<DependentPhoneNumberPage>;
  page(params?: any, callback?: any): Promise<DependentPhoneNumberPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DependentPhoneNumberSolution {
  accountSid?: string;
  addressSid?: string;
}

interface DependentPhoneNumberListInstanceImpl extends DependentPhoneNumberListInstance {}
class DependentPhoneNumberListInstanceImpl implements DependentPhoneNumberListInstance {
  _version?: V2010;
  _solution?: DependentPhoneNumberSolution;
  _uri?: string;

}

export function DependentPhoneNumberListInstance(version: V2010, accountSid: string, addressSid: string): DependentPhoneNumberListInstance {
  const instance = {} as DependentPhoneNumberListInstanceImpl;

  instance._version = version;
  instance._solution = { accountSid, addressSid };
  instance._uri = `/Accounts/${accountSid}/Addresses/${addressSid}/DependentPhoneNumbers.json`;

  instance.page = function page(params?: any, callback?: any): Promise<DependentPhoneNumberPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];
    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new DependentPhoneNumberPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<DependentPhoneNumberPage> {
    let operationPromise = this._version._domain.twilio.request({method: "get", uri: targetUrl});

    operationPromise = operationPromise.then(payload => new DependentPhoneNumberPage(this._version, payload, this._solution));
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

interface DependentPhoneNumberPayload extends DependentPhoneNumberResource, Page.TwilioResponsePayload {
}

interface DependentPhoneNumberResource {
  dependent_phone_numbers?: Array<ApiV2010AccountAddressDependentPhoneNumber>;
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string;
  page?: number;
  page_size?: number;
  previous_page_uri?: string;
  start?: number;
  uri?: string;
}

export class DependentPhoneNumberInstance {

  constructor(protected _version: V2010, payload: DependentPhoneNumberPayload, accountSid: string, addressSid?: string) {
    this.dependentPhoneNumbers = payload.dependent_phone_numbers;
    this.end = deserialize.integer(payload.end);
    this.firstPageUri = payload.first_page_uri;
    this.nextPageUri = payload.next_page_uri;
    this.page = deserialize.integer(payload.page);
    this.pageSize = deserialize.integer(payload.page_size);
    this.previousPageUri = payload.previous_page_uri;
    this.start = deserialize.integer(payload.start);
    this.uri = payload.uri;

  }

  dependentPhoneNumbers?: Array<ApiV2010AccountAddressDependentPhoneNumber>;
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
      dependentPhoneNumbers: this.dependentPhoneNumbers, 
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

export class DependentPhoneNumberPage extends Page<V2010, DependentPhoneNumberPayload, DependentPhoneNumberResource, DependentPhoneNumberInstance> {
/**
* Initialize the DependentPhoneNumberPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V2010, response: Response<string>, solution: DependentPhoneNumberSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of DependentPhoneNumberInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: DependentPhoneNumberPayload): DependentPhoneNumberInstance {
    return new DependentPhoneNumberInstance(
    this._version,
    payload,
        this._solution.accountSid,
        this._solution.addressSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }
