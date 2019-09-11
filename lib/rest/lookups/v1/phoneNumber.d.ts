/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { SerializableClass } from '../../../interfaces';

type PhoneNumberType = 'landline'|'mobile'|'voip';

/**
 * Initialize the PhoneNumberList
 *
 * @param version - Version of the resource
 */
declare function PhoneNumberList(version: V1): PhoneNumberListInstance;

/**
 * Options to pass to fetch
 *
 * @property addOns - The unique_name of an Add-on you would like to invoke
 * @property addOnsData - Data specific to the add-on you would like to invoke
 * @property countryCode - The ISO country code of the phone number
 * @property type - The type of information to return
 */
interface PhoneNumberInstanceFetchOptions {
  addOns?: string[];
  addOnsData?: object;
  countryCode?: string;
  type?: string[];
}

interface PhoneNumberListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): PhoneNumberContext;
  /**
   * Constructs a phone_number
   *
   * @param phoneNumber - The phone number to fetch in E.164 format
   */
  get(phoneNumber: string): PhoneNumberContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface PhoneNumberPayload extends PhoneNumberResource, Page.TwilioResponsePayload {
}

interface PhoneNumberResource {
  add_ons: object;
  caller_name: string;
  carrier: string;
  country_code: string;
  national_format: string;
  phone_number: string;
  url: string;
}

interface PhoneNumberSolution {
}


declare class PhoneNumberContext {
  /**
   * Initialize the PhoneNumberContext
   *
   * @param version - Version of the resource
   * @param phoneNumber - The phone number to fetch in E.164 format
   */
  constructor(version: V1, phoneNumber: string);

  /**
   * fetch a PhoneNumberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: PhoneNumberInstanceFetchOptions, callback?: (error: Error | null, items: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class PhoneNumberInstance extends SerializableClass {
  /**
   * Initialize the PhoneNumberContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param phoneNumber - The phone number to fetch in E.164 format
   */
  constructor(version: V1, payload: PhoneNumberPayload, phoneNumber: string);

  private _proxy: PhoneNumberContext;
  addOns: object;
  callerName: string;
  carrier: string;
  countryCode: string;
  /**
   * fetch a PhoneNumberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: PhoneNumberInstanceFetchOptions, callback?: (error: Error | null, items: PhoneNumberInstance) => any): void;
  nationalFormat: string;
  phoneNumber: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class PhoneNumberPage extends Page<V1, PhoneNumberPayload, PhoneNumberResource, PhoneNumberInstance> {
  /**
   * Initialize the PhoneNumberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: PhoneNumberSolution);

  /**
   * Build an instance of PhoneNumberInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: PhoneNumberPayload): PhoneNumberInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { PhoneNumberContext, PhoneNumberInstance, PhoneNumberInstanceFetchOptions, PhoneNumberList, PhoneNumberListInstance, PhoneNumberPage, PhoneNumberPayload, PhoneNumberResource, PhoneNumberSolution }
