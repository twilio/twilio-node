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
 * Initialize the CountryList
 *
 * @param version - Version of the resource
 */
declare function CountryList(version: V1): CountryListInstance;

interface CountryListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CountryContext;
  /**
   * Streams CountryInstance records from the API.
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
  each(opts?: CountryListInstanceEachOptions, callback?: (item: CountryInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a country
   *
   * @param isoCountry - The ISO country code
   */
  get(isoCountry: string): CountryContext;
  /**
   * Retrieve a single target page of CountryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: CountryPage) => any): Promise<CountryPage>;
  /**
   * Lists CountryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: CountryListInstanceOptions, callback?: (error: Error | null, items: CountryInstance[]) => any): Promise<CountryInstance[]>;
  /**
   * Retrieve a single page of CountryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: CountryListInstancePageOptions, callback?: (error: Error | null, items: CountryPage) => any): Promise<CountryPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
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
interface CountryListInstanceEachOptions {
  callback?: (item: CountryInstance, done: (err?: Error) => void) => void;
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
interface CountryListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface CountryListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface CountryPayload extends CountryResource, Page.TwilioResponsePayload {
}

interface CountryResource {
  country: string;
  inbound_sms_prices?: string[];
  iso_country: string;
  outbound_sms_prices?: string[];
  price_unit?: string;
  url: string;
}

interface CountrySolution {
}


declare class CountryContext {
  /**
   * Initialize the CountryContext
   *
   * @param version - Version of the resource
   * @param isoCountry - The ISO country code
   */
  constructor(version: V1, isoCountry: string);

  /**
   * fetch a CountryInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CountryInstance) => any): Promise<CountryInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class CountryInstance extends SerializableClass {
  /**
   * Initialize the CountryContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param isoCountry - The ISO country code
   */
  constructor(version: V1, payload: CountryPayload, isoCountry: string);

  private _proxy: CountryContext;
  country: string;
  /**
   * fetch a CountryInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CountryInstance) => any): Promise<CountryInstance>;
  inboundSmsPrices: string[];
  isoCountry: string;
  outboundSmsPrices: string[];
  priceUnit: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class CountryPage extends Page<V1, CountryPayload, CountryResource, CountryInstance> {
  /**
   * Initialize the CountryPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: CountrySolution);

  /**
   * Build an instance of CountryInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CountryPayload): CountryInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { CountryContext, CountryInstance, CountryList, CountryListInstance, CountryListInstanceEachOptions, CountryListInstanceOptions, CountryListInstancePageOptions, CountryPage, CountryPayload, CountryResource, CountrySolution }
