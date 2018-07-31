/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Marketplace = require('../Marketplace');
import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import { AvailableAddOnExtensionList } from './availableAddOn/availableAddOnExtension';
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the AvailableAddOnList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function AvailableAddOnList(version: Marketplace): AvailableAddOnListInstance;

interface AvailableAddOnResource {
  configuration_schema: string;
  description: string;
  friendly_name: string;
  links: string;
  pricing_type: string;
  sid: string;
  url: string;
}

interface AvailableAddOnPayload extends AvailableAddOnResource, Page.TwilioResponsePayload {
}

interface AvailableAddOnSolution {
}

interface AvailableAddOnListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AvailableAddOnContext;
  /**
   * Streams AvailableAddOnInstance records from the API.
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
  each(opts?: AvailableAddOnListInstanceEachOptions, callback?: (item: AvailableAddOnInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a available_add_on
   *
   * @param sid - The unique Available Add-on Sid
   */
  get(sid: string): AvailableAddOnContext;
  /**
   * Retrieve a single target page of AvailableAddOnInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AvailableAddOnPage) => any): Promise<AvailableAddOnPage>;
  /**
   * Lists AvailableAddOnInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AvailableAddOnListInstanceOptions, callback?: (error: Error | null, items: AvailableAddOnInstance[]) => any): Promise<AvailableAddOnInstance[]>;
  /**
   * Retrieve a single page of AvailableAddOnInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AvailableAddOnListInstancePageOptions, callback?: (error: Error | null, items: AvailableAddOnPage) => any): Promise<AvailableAddOnPage>;
}


declare class AvailableAddOnPage extends Page<Marketplace, AvailableAddOnPayload, AvailableAddOnResource, AvailableAddOnInstance> {
  /**
   * Initialize the AvailableAddOnPagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Marketplace, response: Response<string>, solution: AvailableAddOnSolution);

  /**
   * Build an instance of AvailableAddOnInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AvailableAddOnPayload): AvailableAddOnInstance;
}


declare class AvailableAddOnInstance extends SerializableClass {
  /**
   * Initialize the AvailableAddOnContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Add-on
   * @property friendlyName - A description of this Add-on
   * @property description - A short description of the Add-on functionality
   * @property pricingType - The way customers are charged for using this Add-on
   * @property configurationSchema - The JSON Schema describing the Add-on's configuration
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The unique Available Add-on Sid
   */
  constructor(version: Marketplace, payload: AvailableAddOnPayload, sid: string);

  private _proxy: AvailableAddOnContext;
  configurationSchema: string;
  description: string;
  /**
   * Access the extensions
   */
  extensions();
  /**
   * fetch a AvailableAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AvailableAddOnInstance) => any): void;
  friendlyName: string;
  links: string;
  pricingType: string;
  sid: string;
  /**
   * Produce a plain JSON object version of the AvailableAddOnInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  url: string;
}


declare class AvailableAddOnContext {
  /**
   * Initialize the AvailableAddOnContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property extensions - extensions resource
   *
   * @param version - Version of the resource
   * @param sid - The unique Available Add-on Sid
   */
  constructor(version: Marketplace, sid: string);

  extensions?: Twilio.Preview.Marketplace.AvailableAddOnContext.AvailableAddOnExtensionList;
  /**
   * fetch a AvailableAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AvailableAddOnInstance) => any): void;
}

export { AvailableAddOnContext, AvailableAddOnInstance, AvailableAddOnList, AvailableAddOnListInstance, AvailableAddOnListInstanceEachOptions, AvailableAddOnListInstanceOptions, AvailableAddOnListInstancePageOptions, AvailableAddOnPage, AvailableAddOnPayload, AvailableAddOnResource, AvailableAddOnSolution }
