/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import serialize = require('../../../../base/serialize');
import { DependentPhoneNumberList } from './address/dependentPhoneNumber';
import { DependentPhoneNumberListInstance } from './address/dependentPhoneNumber';
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the AddressList
 *
 * @param version - Version of the resource
 * @param accountSid - The SID of the Account that is responsible for the resource
 */
declare function AddressList(version: V2010, accountSid: string): AddressListInstance;

/**
 * Options to pass to update
 *
 * @property autoCorrectAddress - Whether we should automatically correct the address
 * @property city - The city of the address
 * @property customerName - The name to associate with the address
 * @property emergencyEnabled - Whether to enable emergency calling on the address
 * @property friendlyName - A string to describe the resource
 * @property postalCode - The postal code of the address
 * @property region - The state or region of the address
 * @property street - The number and street address of the address
 */
interface AddressInstanceUpdateOptions {
  autoCorrectAddress?: boolean;
  city?: string;
  customerName?: string;
  emergencyEnabled?: boolean;
  friendlyName?: string;
  postalCode?: string;
  region?: string;
  street?: string;
}

interface AddressListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AddressContext;
  /**
   * create a AddressInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: AddressListInstanceCreateOptions, callback?: (error: Error | null, item: AddressInstance) => any): Promise<AddressInstance>;
  /**
   * Streams AddressInstance records from the API.
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
   * @param callback - Function to process each record
   */
  each(callback?: (item: AddressInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams AddressInstance records from the API.
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
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: AddressListInstanceEachOptions, callback?: (item: AddressInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a address
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): AddressContext;
  /**
   * Retrieve a single target page of AddressInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: AddressPage) => any): Promise<AddressPage>;
  /**
   * Retrieve a single target page of AddressInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AddressPage) => any): Promise<AddressPage>;
  /**
   * Lists AddressInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: AddressInstance[]) => any): Promise<AddressInstance[]>;
  /**
   * Lists AddressInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AddressListInstanceOptions, callback?: (error: Error | null, items: AddressInstance[]) => any): Promise<AddressInstance[]>;
  /**
   * Retrieve a single page of AddressInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: AddressPage) => any): Promise<AddressPage>;
  /**
   * Retrieve a single page of AddressInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AddressListInstancePageOptions, callback?: (error: Error | null, items: AddressPage) => any): Promise<AddressPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property autoCorrectAddress - Whether we should automatically correct the address
 * @property city - The city of the new address
 * @property customerName - The name to associate with the new address
 * @property emergencyEnabled - Whether to enable emergency calling on the new address
 * @property friendlyName - A string to describe the new resource
 * @property isoCountry - The ISO country code of the new address
 * @property postalCode - The postal code of the new address
 * @property region - The state or region of the new address
 * @property street - The number and street address of the new address
 */
interface AddressListInstanceCreateOptions {
  autoCorrectAddress?: boolean;
  city: string;
  customerName: string;
  emergencyEnabled?: boolean;
  friendlyName?: string;
  isoCountry: string;
  postalCode: string;
  region: string;
  street: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property customerName - The `customer_name` of the Address resources to read
 * @property done - Function to be called upon completion of streaming
 * @property friendlyName - The string that identifies the Address resources to read
 * @property isoCountry - The ISO country code of the Address resources to read
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
 */
interface AddressListInstanceEachOptions {
  callback?: (item: AddressInstance, done: (err?: Error) => void) => void;
  customerName?: string;
  done?: Function;
  friendlyName?: string;
  isoCountry?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property customerName - The `customer_name` of the Address resources to read
 * @property friendlyName - The string that identifies the Address resources to read
 * @property isoCountry - The ISO country code of the Address resources to read
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
interface AddressListInstanceOptions {
  customerName?: string;
  friendlyName?: string;
  isoCountry?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property customerName - The `customer_name` of the Address resources to read
 * @property friendlyName - The string that identifies the Address resources to read
 * @property isoCountry - The ISO country code of the Address resources to read
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface AddressListInstancePageOptions {
  customerName?: string;
  friendlyName?: string;
  isoCountry?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface AddressPayload extends AddressResource, Page.TwilioResponsePayload {
}

interface AddressResource {
  account_sid: string;
  city: string;
  customer_name: string;
  date_created: Date;
  date_updated: Date;
  emergency_enabled: boolean;
  friendly_name: string;
  iso_country: string;
  postal_code: string;
  region: string;
  sid: string;
  street: string;
  uri: string;
  validated: boolean;
  verified: boolean;
}

interface AddressSolution {
  accountSid?: string;
}


declare class AddressContext {
  /**
   * Initialize the AddressContext
   *
   * @param version - Version of the resource
   * @param accountSid - The SID of the Account that is responsible for this address
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2010, accountSid: string, sid: string);

  dependentPhoneNumbers: DependentPhoneNumberListInstance;
  /**
   * fetch a AddressInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AddressInstance) => any): Promise<AddressInstance>;
  /**
   * remove a AddressInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: AddressInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a AddressInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: AddressInstance) => any): Promise<AddressInstance>;
  /**
   * update a AddressInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: AddressInstanceUpdateOptions, callback?: (error: Error | null, items: AddressInstance) => any): Promise<AddressInstance>;
}


declare class AddressInstance extends SerializableClass {
  /**
   * Initialize the AddressContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The SID of the Account that is responsible for the resource
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2010, payload: AddressPayload, accountSid: string, sid: string);

  private _proxy: AddressContext;
  accountSid: string;
  city: string;
  customerName: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * Access the dependentPhoneNumbers
   */
  dependentPhoneNumbers(): DependentPhoneNumberListInstance;
  emergencyEnabled: boolean;
  /**
   * fetch a AddressInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AddressInstance) => any): Promise<AddressInstance>;
  friendlyName: string;
  isoCountry: string;
  postalCode: string;
  region: string;
  /**
   * remove a AddressInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: AddressInstance) => any): Promise<boolean>;
  sid: string;
  street: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a AddressInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: AddressInstance) => any): Promise<AddressInstance>;
  /**
   * update a AddressInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: AddressInstanceUpdateOptions, callback?: (error: Error | null, items: AddressInstance) => any): Promise<AddressInstance>;
  uri: string;
  validated: boolean;
  verified: boolean;
}


declare class AddressPage extends Page<V2010, AddressPayload, AddressResource, AddressInstance> {
  /**
   * Initialize the AddressPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: AddressSolution);

  /**
   * Build an instance of AddressInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AddressPayload): AddressInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { AddressContext, AddressInstance, AddressInstanceUpdateOptions, AddressList, AddressListInstance, AddressListInstanceCreateOptions, AddressListInstanceEachOptions, AddressListInstanceOptions, AddressListInstancePageOptions, AddressPage, AddressPayload, AddressResource, AddressSolution }
