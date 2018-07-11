/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Marketplace = require('../Marketplace');
import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import { AvailableAddOnExtensionListInstance } from './availableAddOn/availableAddOnExtension';
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { SerializableClass } from '../../../interfaces';

declare function AvailableAddOnList(version: Marketplace): AvailableAddOnListInstance

interface AvailableAddOnResource {
  /**
   * The JSON Schema describing configuration that must be provided when installing a given Add-on.
   */
  configuration_schema: string;
  /**
   * A short description of the functionality provided by the Add-on.
   */
  description: string;
  /**
   * A human-readable description of this Add-on.
   */
  friendly_name: string;
  /**
   * The links
   */
  links: string;
  /**
   * The mechanism by which customers are charged for using this Add-on.
   */
  pricing_type: string;
  /**
   * A 34 character string that uniquely identifies this Add-on.
   */
  sid: string;
  /**
   * The url
   */
  url: string;
}

interface AvailableAddOnPayload extends AvailableAddOnResource, Page.TwilioResponsePayload {
}

interface AvailableAddOnSolution {
}

interface AvailableAddOnListEachOptions extends ListEachOptions<AvailableAddOnInstance> {
}

interface AvailableAddOnListOptions extends ListOptions<AvailableAddOnInstance> {
}

interface AvailableAddOnListPageOptions extends PageOptions<AvailableAddOnPage> {
}

interface AvailableAddOnListInstance {
  /**
   * Gets context of a single AvailableAddOn resource
   *
   * @param sid - The unique Available Add-on Sid
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
   */
  each(opts?: AvailableAddOnListEachOptions): void;
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
   * @param callback - Callback to handle processed record
   */
  each(callback: (item: AvailableAddOnInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single AvailableAddOn resource
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
   */
  getPage(targetUrl: string): Promise<AvailableAddOnPage>;
  /**
   * Retrieve a single target page of AvailableAddOnInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: AvailableAddOnPage) => any): void;
  /**
   * Lists AvailableAddOnInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: AvailableAddOnListOptions): Promise<AvailableAddOnInstance[]>;
  /**
   * Lists AvailableAddOnInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: AvailableAddOnListOptions, callback: (error: Error | null, items: AvailableAddOnInstance[]) => any): void;
  /**
   * Lists AvailableAddOnInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: AvailableAddOnInstance[]) => any): void;
  /**
   * Retrieve a single page of AvailableAddOnInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: AvailableAddOnListPageOptions): Promise<AvailableAddOnPage>;
  /**
   * Retrieve a single page of AvailableAddOnInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: AvailableAddOnListPageOptions, callback: (error: Error | null, items: AvailableAddOnPage) => any): void;
  /**
   * Retrieve a single page of AvailableAddOnInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: AvailableAddOnPage) => any): void;
}

declare class AvailableAddOnPage extends Page<Marketplace, AvailableAddOnPayload, AvailableAddOnResource, AvailableAddOnInstance> {
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
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The unique Available Add-on Sid
   */
  constructor(version: Marketplace, payload: AvailableAddOnPayload, sid: string);

  private _proxy: AvailableAddOnContext;
  /**
   * The JSON Schema describing configuration that must be provided when installing a given Add-on.
   */
  configurationSchema: string;
  /**
   * A short description of the functionality provided by the Add-on.
   */
  description: string;
  extensions(): AvailableAddOnExtensionListInstance;
  /**
   * fetch a AvailableAddOnInstance
   *
   * @returns Promise that resolves to processed AvailableAddOnInstance
   */
  fetch(): Promise<AvailableAddOnInstance>;
  /**
   * fetch a AvailableAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: AvailableAddOnInstance) => any): void;
  /**
   * A human-readable description of this Add-on.
   */
  friendlyName: string;
  /**
   * The links
   */
  links: string;
  /**
   * The mechanism by which customers are charged for using this Add-on.
   */
  pricingType: string;
  /**
   * A 34 character string that uniquely identifies this Add-on.
   */
  sid: string;
  /**
   * The url
   */
  url: string;
}

declare class AvailableAddOnContext {
  constructor(version: Marketplace, sid: string);

  extensions: AvailableAddOnExtensionListInstance;
  /**
   * fetch a AvailableAddOnInstance
   *
   * @returns Promise that resolves to processed AvailableAddOnInstance
   */
  fetch(): Promise<AvailableAddOnInstance>;
  /**
   * fetch a AvailableAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: AvailableAddOnInstance) => any): void;
}

export { AvailableAddOnContext, AvailableAddOnInstance, AvailableAddOnList, AvailableAddOnListEachOptions, AvailableAddOnListInstance, AvailableAddOnListOptions, AvailableAddOnListPageOptions, AvailableAddOnPage, AvailableAddOnPayload, AvailableAddOnResource, AvailableAddOnSolution }
