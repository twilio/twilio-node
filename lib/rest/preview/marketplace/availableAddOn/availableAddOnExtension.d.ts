/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Marketplace = require('../../Marketplace');
import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the AvailableAddOnExtensionList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param availableAddOnSid - The available_add_on_sid
 */
declare function AvailableAddOnExtensionList(version: Marketplace, availableAddOnSid: string): AvailableAddOnExtensionListInstance;

interface AvailableAddOnExtensionResource {
  available_add_on_sid: string;
  friendly_name: string;
  product_name: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface AvailableAddOnExtensionPayload extends AvailableAddOnExtensionResource, Page.TwilioResponsePayload {
}

interface AvailableAddOnExtensionSolution {
  availableAddOnSid?: string;
}

interface AvailableAddOnExtensionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AvailableAddOnExtensionContext;
  /**
   * Streams AvailableAddOnExtensionInstance records from the API.
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
  each(opts?: AvailableAddOnExtensionListInstanceEachOptions, callback?: (item: AvailableAddOnExtensionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a available_add_on_extension
   *
   * @param sid - The unique Extension Sid
   */
  get(sid: string): AvailableAddOnExtensionContext;
  /**
   * Retrieve a single target page of AvailableAddOnExtensionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function): Promise<AvailableAddOnExtensionPage>;
  /**
   * @description Lists AvailableAddOnExtensionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AvailableAddOnExtensionListInstanceOptions, callback?: function): Promise<AvailableAddOnExtensionInstance[]>;
  /**
   * Retrieve a single page of AvailableAddOnExtensionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AvailableAddOnExtensionListInstancePageOptions, callback?: function): Promise<AvailableAddOnExtensionPage>;
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
export interface AvailableAddOnExtensionListInstanceEachOptions {
  callback?: (item: AvailableAddOnExtensionInstance, done: (err?: Error) => void) => void;
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
export interface AvailableAddOnExtensionListInstanceOptions {
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
export interface AvailableAddOnExtensionListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}


declare class AvailableAddOnExtensionPage extends Page {
  /**
   * @constructor Twilio.Preview.Marketplace.AvailableAddOnContext.AvailableAddOnExtensionPage
   * @augments Page
   * @description Initialize the AvailableAddOnExtensionPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Marketplace, response: Response<string>, solution: object);

  /**
   * Build an instance of AvailableAddOnExtensionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class AvailableAddOnExtensionInstance {
  /**
   * @constructor Twilio.Preview.Marketplace.AvailableAddOnContext.AvailableAddOnExtensionInstance
   * @description Initialize the AvailableAddOnExtensionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Extension
   * @property availableAddOnSid - The available_add_on_sid
   * @property friendlyName - A human-readable description of this Extension
   * @property productName - A human-readable description of the Extension's Product
   * @property uniqueName - The string that uniquely identifies this Extension
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param availableAddOnSid - The available_add_on_sid
   * @param sid - The unique Extension Sid
   */
  constructor(version: Twilio.Preview.Marketplace, payload: object, availableAddOnSid: sid, sid: sid);

  _proxy?: AvailableAddOnExtensionContext;
  /**
   * fetch a AvailableAddOnExtensionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AvailableAddOnExtensionInstance) => any);
  /**
   * Produce a plain JSON object version of the AvailableAddOnExtensionInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
}


declare class AvailableAddOnExtensionContext {
  /**
   * @constructor Twilio.Preview.Marketplace.AvailableAddOnContext.AvailableAddOnExtensionContext
   * @description Initialize the AvailableAddOnExtensionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param availableAddOnSid - The available_add_on_sid
   * @param sid - The unique Extension Sid
   */
  constructor(version: Twilio.Preview.Marketplace, availableAddOnSid: sid, sid: sid);

  /**
   * fetch a AvailableAddOnExtensionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AvailableAddOnExtensionContext) => any);
}

export { AvailableAddOnExtensionContext, AvailableAddOnExtensionInstance, AvailableAddOnExtensionList, AvailableAddOnExtensionListInstance, AvailableAddOnExtensionPage, AvailableAddOnExtensionPayload, AvailableAddOnExtensionResource, AvailableAddOnExtensionSolution }
