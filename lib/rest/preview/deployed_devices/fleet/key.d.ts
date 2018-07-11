/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import DeployedDevices = require('../../DeployedDevices');
import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';

declare function KeyList(version: DeployedDevices, fleetSid: string): KeyListInstance

interface KeyResource {
  /**
   * Specifies the unique string identifier of the Account responsible for this Key credential.
   */
  account_sid: string;
  /**
   * Specifies the date this Key credential was created, given in UTC ISO 8601 format.
   */
  date_created: Date;
  /**
   * Specifies the date this Key credential was last updated, given in UTC ISO 8601 format.
   */
  date_updated: Date;
  /**
   * Specifies the unique string identifier of a Device authenticated with this Key credential.
   */
  device_sid: string;
  /**
   * Specifies the unique string identifier of the Fleet that the given Key credential belongs to.
   */
  fleet_sid: string;
  /**
   * Contains a human readable descriptive text for this Key credential, up to 256 characters long.
   */
  friendly_name: string;
  /**
   * Contains the automatically generated secret belonging to this Key credential, used to authenticate the Device.
   */
  secret: string;
  /**
   * Contains a 34 character string that uniquely identifies this Key credential resource.
   */
  sid: string;
  /**
   * Contains an absolute URL for this Key credential resource.
   */
  url: string;
}

interface KeyPayload extends KeyResource, Page.TwilioResponsePayload {
}

interface KeySolution {
  fleetSid: string;
}

interface KeyListCreateOptions {
  /**
   * Provides the unique string identifier of an existing Device to become authenticated with this Key credential.
   */
  deviceSid?: string;
  /**
   * Provides a human readable descriptive text for this Key credential, up to 256 characters long.
   */
  friendlyName?: string;
}

interface KeyListEachOptions extends ListEachOptions<KeyInstance> {
  /**
   * Filters the resulting list of Keys by a unique string identifier of an authenticated Device.
   */
  deviceSid?: string;
}

interface KeyListOptions extends ListOptions<KeyInstance> {
  /**
   * Filters the resulting list of Keys by a unique string identifier of an authenticated Device.
   */
  deviceSid?: string;
}

interface KeyListPageOptions extends PageOptions<KeyPage> {
  /**
   * Filters the resulting list of Keys by a unique string identifier of an authenticated Device.
   */
  deviceSid?: string;
}

interface KeyListInstance {
  /**
   * Gets context of a single Key resource
   *
   * @param sid - A string that uniquely identifies the Key.
   */
  (sid: string): KeyContext;
  /**
   * create a KeyInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed KeyInstance
   */
  create(opts?: KeyListCreateOptions): Promise<KeyInstance>;
  /**
   * create a KeyInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: KeyListCreateOptions, callback: (error: Error | null, items: KeyInstance) => any): void;
  /**
   * create a KeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback: (error: Error | null, items: KeyInstance) => any): void;
  /**
   * Streams KeyInstance records from the API.
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
  each(opts?: KeyListEachOptions): void;
  /**
   * Streams KeyInstance records from the API.
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
  each(callback: (item: KeyInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Key resource
   *
   * @param sid - A string that uniquely identifies the Key.
   */
  get(sid: string): KeyContext;
  /**
   * Retrieve a single target page of KeyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<KeyPage>;
  /**
   * Retrieve a single target page of KeyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: KeyPage) => any): void;
  /**
   * Lists KeyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: KeyListOptions): Promise<KeyInstance[]>;
  /**
   * Lists KeyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: KeyListOptions, callback: (error: Error | null, items: KeyInstance[]) => any): void;
  /**
   * Lists KeyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: KeyInstance[]) => any): void;
  /**
   * Retrieve a single page of KeyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: KeyListPageOptions): Promise<KeyPage>;
  /**
   * Retrieve a single page of KeyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: KeyListPageOptions, callback: (error: Error | null, items: KeyPage) => any): void;
  /**
   * Retrieve a single page of KeyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: KeyPage) => any): void;
}

interface KeyListFetchOptions {
  /**
   * Provides the unique string identifier of an existing Device to become authenticated with this Key credential.
   */
  deviceSid?: string;
  /**
   * Provides a human readable descriptive text for this Key credential, up to 256 characters long.
   */
  friendlyName?: string;
}

interface KeyListFetchOptions {
  /**
   * Provides the unique string identifier of an existing Device to become authenticated with this Key credential.
   */
  deviceSid?: string;
  /**
   * Provides a human readable descriptive text for this Key credential, up to 256 characters long.
   */
  friendlyName?: string;
}

declare class KeyPage extends Page<DeployedDevices, KeyPayload, KeyResource, KeyInstance> {
  constructor(version: DeployedDevices, response: Response<string>, solution: KeySolution);

  /**
   * Build an instance of KeyInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: KeyPayload): KeyInstance;
}

declare class KeyInstance extends SerializableClass {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param fleetSid - The fleet_sid
   * @param sid - A string that uniquely identifies the Key.
   */
  constructor(version: DeployedDevices, payload: KeyPayload, fleetSid: string, sid: string);

  private _proxy: KeyContext;
  /**
   * Specifies the unique string identifier of the Account responsible for this Key credential.
   */
  accountSid: string;
  /**
   * Specifies the date this Key credential was created, given in UTC ISO 8601 format.
   */
  dateCreated: Date;
  /**
   * Specifies the date this Key credential was last updated, given in UTC ISO 8601 format.
   */
  dateUpdated: Date;
  /**
   * Specifies the unique string identifier of a Device authenticated with this Key credential.
   */
  deviceSid: string;
  /**
   * fetch a KeyInstance
   *
   * @returns Promise that resolves to processed KeyInstance
   */
  fetch(): Promise<KeyInstance>;
  /**
   * fetch a KeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: KeyInstance) => any): void;
  /**
   * Specifies the unique string identifier of the Fleet that the given Key credential belongs to.
   */
  fleetSid: string;
  /**
   * Contains a human readable descriptive text for this Key credential, up to 256 characters long.
   */
  friendlyName: string;
  /**
   * remove a KeyInstance
   *
   * @returns Promise that resolves to processed KeyInstance
   */
  remove(): Promise<KeyInstance>;
  /**
   * remove a KeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: KeyInstance) => any): void;
  /**
   * Contains the automatically generated secret belonging to this Key credential, used to authenticate the Device.
   */
  secret: string;
  /**
   * Contains a 34 character string that uniquely identifies this Key credential resource.
   */
  sid: string;
  /**
   * update a KeyInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed KeyInstance
   */
  update(opts?: KeyListFetchOptions): Promise<KeyInstance>;
  /**
   * update a KeyInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: KeyListFetchOptions, callback: (error: Error | null, items: KeyInstance) => any): void;
  /**
   * update a KeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: KeyInstance) => any): void;
  /**
   * Contains an absolute URL for this Key credential resource.
   */
  url: string;
}

declare class KeyContext {
  constructor(version: DeployedDevices, fleetSid: string, sid: string);

  /**
   * fetch a KeyInstance
   *
   * @returns Promise that resolves to processed KeyInstance
   */
  fetch(): Promise<KeyInstance>;
  /**
   * fetch a KeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: KeyInstance) => any): void;
  /**
   * remove a KeyInstance
   *
   * @returns Promise that resolves to processed KeyInstance
   */
  remove(): Promise<KeyInstance>;
  /**
   * remove a KeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: KeyInstance) => any): void;
  /**
   * update a KeyInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed KeyInstance
   */
  update(opts?: KeyListFetchOptions): Promise<KeyInstance>;
  /**
   * update a KeyInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: KeyListFetchOptions, callback: (error: Error | null, items: KeyInstance) => any): void;
  /**
   * update a KeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: KeyInstance) => any): void;
}

export { KeyContext, KeyInstance, KeyList, KeyListCreateOptions, KeyListEachOptions, KeyListFetchOptions, KeyListInstance, KeyListOptions, KeyListPageOptions, KeyPage, KeyPayload, KeyResource, KeySolution }
