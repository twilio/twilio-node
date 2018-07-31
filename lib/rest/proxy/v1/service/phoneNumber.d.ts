/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the PhoneNumberList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 */
declare function PhoneNumberList(version: V1, serviceSid: string): PhoneNumberListInstance;

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
  create(opts?: PhoneNumberListInstanceCreateOptions, callback?: (error: Error | null, items: PhoneNumberListInstance) => any): Promise<PhoneNumberInstance>;
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
   * @param sid - A string that uniquely identifies this Phone Number.
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

/**
 * Options to pass to create
 *
 * @property sid - Phone Number Sid of Twilio Number to assign to your Proxy Service
 * @property phoneNumber - Twilio Number to assign to your Proxy Service
 */
interface PhoneNumberListInstanceCreateOptions {
  phoneNumber?: string;
  sid?: string;
}

/**
 * Options to pass to each
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 */
interface PhoneNumberListInstanceEachOptions {
  callback?: (item: PhoneNumberInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface PhoneNumberListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
interface PhoneNumberListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface PhoneNumberPayload extends PhoneNumberResource, Page.TwilioResponsePayload {
}

interface PhoneNumberResource {
  account_sid: string;
  capabilities: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  iso_country: string;
  phone_number: string;
  service_sid: string;
  sid: string;
  url: string;
}

interface PhoneNumberSolution {
  serviceSid?: string;
}


declare class PhoneNumberPage extends Page<V1, PhoneNumberPayload, PhoneNumberResource, PhoneNumberInstance> {
  /**
   * Initialize the PhoneNumberPagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
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
}


declare class PhoneNumberInstance extends SerializableClass {
  /**
   * Initialize the PhoneNumberContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - A string that uniquely identifies this Phone Number.
   * @property accountSid - Account Sid.
   * @property serviceSid - Service Sid.
   * @property dateCreated - The date this Phone Number was added to the service
   * @property dateUpdated - The date this Phone Number was updated
   * @property phoneNumber - The phone number.
   * @property friendlyName - A human-readable description of this resource.
   * @property isoCountry - ISO Country Code,
   * @property capabilities - A list of capabilities.
   * @property url - The URL of this resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sid - A string that uniquely identifies this Phone Number.
   */
  constructor(version: V1, payload: PhoneNumberPayload, serviceSid: string, sid: string);

  private _proxy: PhoneNumberContext;
  accountSid: string;
  capabilities: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: PhoneNumberInstance) => any): void;
  friendlyName: string;
  isoCountry: string;
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
   * Initialize the PhoneNumberContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - Service Sid.
   * @param sid - A string that uniquely identifies this Phone Number.
   */
  constructor(version: V1, serviceSid: string, sid: string);

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
