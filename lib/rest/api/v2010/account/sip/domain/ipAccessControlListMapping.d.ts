/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import Response = require('../../../../../../http/response');
import V2010 = require('../../../../V2010');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../../interfaces';
import { SerializableClass } from '../../../../../../interfaces';

declare function IpAccessControlListMappingList(version: V2010, accountSid: string, domainSid: string): IpAccessControlListMappingListInstance

interface IpAccessControlListMappingResource {
  /**
   * The unique id of the Account that responsible for this resource.
   */
  account_sid: string;
  /**
   * The date that this resource was created, given as GMT in [RFC 2822](http://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
   */
  date_created: Date;
  /**
   * The date that this resource was last updated, given as GMT in [RFC 2822](http://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
   */
  date_updated: Date;
  /**
   * A human readable descriptive text for this resource, up to 64 characters long.
   */
  friendly_name: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The subresource_uris
   */
  subresource_uris: string;
  /**
   * The URI for this resource, relative to `https://api.twilio.com`
   */
  uri: string;
}

interface IpAccessControlListMappingPayload extends IpAccessControlListMappingResource, Page.TwilioResponsePayload {
}

interface IpAccessControlListMappingSolution {
  accountSid: string;
  domainSid: string;
}

interface IpAccessControlListMappingListCreateOptions {
  /**
   * The ip_access_control_list_sid
   */
  ipAccessControlListSid: string;
}

interface IpAccessControlListMappingListEachOptions extends ListEachOptions<IpAccessControlListMappingInstance> {
}

interface IpAccessControlListMappingListOptions extends ListOptions<IpAccessControlListMappingInstance> {
}

interface IpAccessControlListMappingListPageOptions extends PageOptions<IpAccessControlListMappingPage> {
}

interface IpAccessControlListMappingListInstance {
  /**
   * Gets context of a single IpAccessControlListMapping resource
   *
   * @param sid - The sid
   */
  (sid: string): IpAccessControlListMappingContext;
  /**
   * create a IpAccessControlListMappingInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed IpAccessControlListMappingInstance
   */
  create(opts: IpAccessControlListMappingListCreateOptions): Promise<IpAccessControlListMappingInstance>;
  /**
   * create a IpAccessControlListMappingInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: IpAccessControlListMappingListCreateOptions, callback: (error: Error | null, items: IpAccessControlListMappingInstance) => any): void;
  /**
   * Streams IpAccessControlListMappingInstance records from the API.
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
  each(opts?: IpAccessControlListMappingListEachOptions): void;
  /**
   * Streams IpAccessControlListMappingInstance records from the API.
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
  each(callback: (item: IpAccessControlListMappingInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single IpAccessControlListMapping resource
   *
   * @param sid - The sid
   */
  get(sid: string): IpAccessControlListMappingContext;
  /**
   * Retrieve a single target page of IpAccessControlListMappingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<IpAccessControlListMappingPage>;
  /**
   * Retrieve a single target page of IpAccessControlListMappingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: IpAccessControlListMappingPage) => any): void;
  /**
   * Lists IpAccessControlListMappingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: IpAccessControlListMappingListOptions): Promise<IpAccessControlListMappingInstance[]>;
  /**
   * Lists IpAccessControlListMappingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: IpAccessControlListMappingListOptions, callback: (error: Error | null, items: IpAccessControlListMappingInstance[]) => any): void;
  /**
   * Lists IpAccessControlListMappingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: IpAccessControlListMappingInstance[]) => any): void;
  /**
   * Retrieve a single page of IpAccessControlListMappingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: IpAccessControlListMappingListPageOptions): Promise<IpAccessControlListMappingPage>;
  /**
   * Retrieve a single page of IpAccessControlListMappingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: IpAccessControlListMappingListPageOptions, callback: (error: Error | null, items: IpAccessControlListMappingPage) => any): void;
  /**
   * Retrieve a single page of IpAccessControlListMappingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: IpAccessControlListMappingPage) => any): void;
}

declare class IpAccessControlListMappingPage extends Page<V2010, IpAccessControlListMappingPayload, IpAccessControlListMappingResource, IpAccessControlListMappingInstance> {
  constructor(version: V2010, response: Response<string>, solution: IpAccessControlListMappingSolution);

  /**
   * Build an instance of IpAccessControlListMappingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: IpAccessControlListMappingPayload): IpAccessControlListMappingInstance;
}

declare class IpAccessControlListMappingInstance extends SerializableClass {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param domainSid - The domain_sid
   * @param sid - The sid
   */
  constructor(version: V2010, payload: IpAccessControlListMappingPayload, accountSid: string, domainSid: string, sid: string);

  private _proxy: IpAccessControlListMappingContext;
  /**
   * The unique id of the Account that responsible for this resource.
   */
  accountSid: string;
  /**
   * The date that this resource was created, given as GMT in [RFC 2822](http://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated, given as GMT in [RFC 2822](http://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
   */
  dateUpdated: Date;
  /**
   * fetch a IpAccessControlListMappingInstance
   *
   * @returns Promise that resolves to processed IpAccessControlListMappingInstance
   */
  fetch(): Promise<IpAccessControlListMappingInstance>;
  /**
   * fetch a IpAccessControlListMappingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: IpAccessControlListMappingInstance) => any): void;
  /**
   * A human readable descriptive text for this resource, up to 64 characters long.
   */
  friendlyName: string;
  /**
   * remove a IpAccessControlListMappingInstance
   *
   * @returns Promise that resolves to processed IpAccessControlListMappingInstance
   */
  remove(): Promise<IpAccessControlListMappingInstance>;
  /**
   * remove a IpAccessControlListMappingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: IpAccessControlListMappingInstance) => any): void;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The subresource_uris
   */
  subresourceUris: string;
  /**
   * The URI for this resource, relative to `https://api.twilio.com`
   */
  uri: string;
}

declare class IpAccessControlListMappingContext {
  constructor(version: V2010, accountSid: string, domainSid: string, sid: string);

  /**
   * fetch a IpAccessControlListMappingInstance
   *
   * @returns Promise that resolves to processed IpAccessControlListMappingInstance
   */
  fetch(): Promise<IpAccessControlListMappingInstance>;
  /**
   * fetch a IpAccessControlListMappingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: IpAccessControlListMappingInstance) => any): void;
  /**
   * remove a IpAccessControlListMappingInstance
   *
   * @returns Promise that resolves to processed IpAccessControlListMappingInstance
   */
  remove(): Promise<IpAccessControlListMappingInstance>;
  /**
   * remove a IpAccessControlListMappingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: IpAccessControlListMappingInstance) => any): void;
}

export { IpAccessControlListMappingContext, IpAccessControlListMappingInstance, IpAccessControlListMappingList, IpAccessControlListMappingListCreateOptions, IpAccessControlListMappingListEachOptions, IpAccessControlListMappingListInstance, IpAccessControlListMappingListOptions, IpAccessControlListMappingListPageOptions, IpAccessControlListMappingPage, IpAccessControlListMappingPayload, IpAccessControlListMappingResource, IpAccessControlListMappingSolution }
