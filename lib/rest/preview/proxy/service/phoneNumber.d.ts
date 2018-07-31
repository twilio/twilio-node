/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Proxy = require('../../Proxy');
import Response = require('../../../../http/response');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the PhoneNumberList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 */
declare function PhoneNumberList(version: Proxy, serviceSid: string): PhoneNumberListInstance;

interface PhoneNumberResource {
  account_sid: string;
  capabilities: string;
  country_code: string;
  date_created: Date;
  date_updated: Date;
  phone_number: string;
  service_sid: string;
  sid: string;
  url: string;
}

interface PhoneNumberPayload extends PhoneNumberResource, Page.TwilioResponsePayload {
}

interface PhoneNumberSolution {
  serviceSid?: string;
}

interface PhoneNumberListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): PhoneNumberContext;
  /**
   * create a PhoneNumberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: PhoneNumberListInstanceCreateOptions, callback?: (error: Error | null, items: PhoneNumberListInstance) => any): Promise<PhoneNumberInstance>;
  /**
   * Streams PhoneNumberInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: PhoneNumberListInstanceEachOptions, callback?: (item: PhoneNumberInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a phone_number
   *
   * @param sid - Fetch by unique phone-number Sid
   */
  get(sid: string): PhoneNumberContext;
  /**
   * Retrieve a single target page of PhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: PhoneNumberPage) => any): Promise<PhoneNumberPage>;
  /**
   * Lists PhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: PhoneNumberListInstanceOptions, callback?: (error: Error | null, items: PhoneNumberInstance[]) => any): Promise<PhoneNumberInstance[]>;
  /**
   * Retrieve a single page of PhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: PhoneNumberListInstancePageOptions, callback?: (error: Error | null, items: PhoneNumberPage) => any): Promise<PhoneNumberPage>;
}


declare class PhoneNumberPage extends Page<Proxy, PhoneNumberPayload, PhoneNumberResource, PhoneNumberInstance> {
  /**
   * Initialize the PhoneNumberPagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Proxy, response: Response<string>, solution: PhoneNumberSolution);

  /**
   * Build an instance of PhoneNumberInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: PhoneNumberPayload): PhoneNumberInstance;
}


declare class PhoneNumberInstance extends SerializableClass {
  /**
   * Initialize the PhoneNumberContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this resource
   * @property accountSid - Account Sid.
   * @property serviceSid - Service Sid.
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property phoneNumber - The phone number
   * @property countryCode - The ISO 3166-1 alpha-2 country code
   * @property capabilities - Indicate if a phone can receive calls or messages
   * @property url - The URL of this resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sid - Fetch by unique phone-number Sid
   */
  constructor(version: Proxy, payload: PhoneNumberPayload, serviceSid: string, sid: string);

  private _proxy: PhoneNumberContext;
  accountSid: string;
  capabilities: string;
  countryCode: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: PhoneNumberInstance) => any): void;
  phoneNumber: string;
  /**
   * remove a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: PhoneNumberInstance) => any): void;
  serviceSid: string;
  sid: string;
  /**
   * Produce a plain JSON object version of the PhoneNumberInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  url: string;
}


declare class PhoneNumberContext {
  /**
   * Initialize the PhoneNumberContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - Fetch by unique phone-number Sid
   */
  constructor(version: Proxy, serviceSid: string, sid: string);

  /**
   * fetch a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: PhoneNumberInstance) => any): void;
  /**
   * remove a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: PhoneNumberInstance) => any): void;
}

export { PhoneNumberContext, PhoneNumberInstance, PhoneNumberList, PhoneNumberListInstance, PhoneNumberListInstanceCreateOptions, PhoneNumberListInstanceEachOptions, PhoneNumberListInstanceOptions, PhoneNumberListInstancePageOptions, PhoneNumberPage, PhoneNumberPayload, PhoneNumberResource, PhoneNumberSolution }
