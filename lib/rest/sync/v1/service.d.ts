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
import { DocumentList } from './service/document';
import { DocumentListInstance } from './service/document';
import { SerializableClass } from '../../../interfaces';
import { SyncListList } from './service/syncList';
import { SyncListListInstance } from './service/syncList';
import { SyncMapList } from './service/syncMap';
import { SyncMapListInstance } from './service/syncMap';
import { SyncStreamList } from './service/syncStream';
import { SyncStreamListInstance } from './service/syncStream';

/**
 * Initialize the ServiceList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 */
declare function ServiceList(version: V1): ServiceListInstance;

/**
 * Options to pass to update
 *
 * @property aclEnabled - true or false - determines whether token identities must be granted access to Sync objects via the Permissions API in this Service.
 * @property friendlyName - Human-readable name for this service instance
 * @property reachabilityWebhooksEnabled - True or false - controls whether this instance fires webhooks when client endpoints connect to Sync
 * @property webhookUrl - A URL that will receive event updates when objects are manipulated.
 */
interface ServiceInstanceUpdateOptions {
  aclEnabled?: boolean;
  friendlyName?: string;
  reachabilityWebhooksEnabled?: boolean;
  webhookUrl?: string;
}

interface ServiceListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ServiceContext;
  /**
   * create a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: ServiceListInstanceCreateOptions, callback?: (error: Error | null, item: ServiceInstance) => any): Promise<ServiceInstance>;
  /**
   * Streams ServiceInstance records from the API.
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
  each(opts?: ServiceListInstanceEachOptions, callback?: (item: ServiceInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a service
   *
   * @param sid - The sid
   */
  get(sid: string): ServiceContext;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ServiceListInstanceOptions, callback?: (error: Error | null, items: ServiceInstance[]) => any): Promise<ServiceInstance[]>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ServiceListInstancePageOptions, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property aclEnabled - true or false - determines whether token identities must be granted access to Sync objects via the Permissions API in this Service.
 * @property friendlyName - Human-readable name for this service instance
 * @property reachabilityWebhooksEnabled - true or false - controls whether this instance fires webhooks when client endpoints connect to Sync
 * @property webhookUrl - A URL that will receive event updates when objects are manipulated.
 */
interface ServiceListInstanceCreateOptions {
  aclEnabled?: boolean;
  friendlyName?: string;
  reachabilityWebhooksEnabled?: boolean;
  webhookUrl?: string;
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
interface ServiceListInstanceEachOptions {
  callback?: (item: ServiceInstance, done: (err?: Error) => void) => void;
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
interface ServiceListInstanceOptions {
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
interface ServiceListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface ServicePayload extends ServiceResource, Page.TwilioResponsePayload {
}

interface ServiceResource {
  account_sid: string;
  acl_enabled: boolean;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  links: string;
  reachability_webhooks_enabled: boolean;
  sid: string;
  unique_name: string;
  url: string;
  webhook_url: string;
}

interface ServiceSolution {
}


declare class ServiceContext {
  /**
   * Initialize the ServiceContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: V1, sid: string);

  documents: DocumentListInstance;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ServiceInstance) => any): Promise<ServiceInstance>;
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  syncLists: SyncListListInstance;
  syncMaps: SyncMapListInstance;
  syncStreams: SyncStreamListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ServiceInstanceUpdateOptions, callback?: (error: Error | null, items: ServiceInstance) => any): Promise<ServiceInstance>;
}


declare class ServiceInstance extends SerializableClass {
  /**
   * Initialize the ServiceContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: V1, payload: ServicePayload, sid: string);

  private _proxy: ServiceContext;
  accountSid: string;
  aclEnabled: boolean;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * Access the documents
   */
  documents(): DocumentListInstance;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  friendlyName: string;
  links: string;
  reachabilityWebhooksEnabled: boolean;
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  sid: string;
  /**
   * Access the syncLists
   */
  syncLists(): SyncListListInstance;
  /**
   * Access the syncMaps
   */
  syncMaps(): SyncMapListInstance;
  /**
   * Access the syncStreams
   */
  syncStreams(): SyncStreamListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ServiceInstanceUpdateOptions, callback?: (error: Error | null, items: ServiceInstance) => any): void;
  url: string;
  webhookUrl: string;
}


declare class ServicePage extends Page<V1, ServicePayload, ServiceResource, ServiceInstance> {
  /**
   * Initialize the ServicePage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ServiceSolution);

  /**
   * Build an instance of ServiceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ServicePayload): ServiceInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { ServiceContext, ServiceInstance, ServiceList, ServiceListInstance, ServiceListInstanceCreateOptions, ServiceListInstanceEachOptions, ServiceListInstanceOptions, ServiceListInstancePageOptions, ServicePage, ServicePayload, ServiceResource, ServiceSolution }
