/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the DocumentPermissionList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - Sync Service Instance SID.
 * @param documentSid - Sync Document SID.
 */
declare function DocumentPermissionList(version: V1, serviceSid: string, documentSid: string): DocumentPermissionListInstance;

interface DocumentPermissionResource {
  account_sid: string;
  document_sid: string;
  identity: string;
  manage: boolean;
  read: boolean;
  service_sid: string;
  url: string;
  write: boolean;
}

interface DocumentPermissionPayload extends DocumentPermissionResource, Page.TwilioResponsePayload {
}

interface DocumentPermissionSolution {
  documentSid?: string;
  serviceSid?: string;
}

interface DocumentPermissionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): DocumentPermissionContext;
  /**
   * Streams DocumentPermissionInstance records from the API.
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
  each(opts?: DocumentPermissionListInstanceEachOptions, callback?: (item: DocumentPermissionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a document_permission
   *
   * @param identity - Identity of the user to whom the Sync Document Permission applies.
   */
  get(identity: string): DocumentPermissionContext;
  /**
   * Retrieve a single target page of DocumentPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function): Promise<DocumentPermissionPage>;
  /**
   * @description Lists DocumentPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: DocumentPermissionListInstanceOptions, callback?: function): Promise<DocumentPermissionInstance[]>;
  /**
   * Retrieve a single page of DocumentPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: DocumentPermissionListInstancePageOptions, callback?: function): Promise<DocumentPermissionPage>;
}

/**
 * Options to pass to update
 *
 * @property read - Read access.
 * @property write - Write access.
 * @property manage - Manage access.
 */
export interface DocumentPermissionInstanceUpdateOptions {
  manage: boolean;
  read: boolean;
  write: boolean;
}

/**
 * Options to pass to update
 *
 * @property read - Read access.
 * @property write - Write access.
 * @property manage - Manage access.
 */
export interface DocumentPermissionContextUpdateOptions {
  manage: boolean;
  read: boolean;
  write: boolean;
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
export interface DocumentPermissionListInstanceEachOptions {
  callback?: (item: DocumentPermissionInstance, done: (err?: Error) => void) => void;
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
export interface DocumentPermissionListInstanceOptions {
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
export interface DocumentPermissionListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}


declare class DocumentPermissionPage extends Page {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext.DocumentContext.DocumentPermissionPage
   * @augments Page
   * @description Initialize the DocumentPermissionPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Sync.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of DocumentPermissionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class DocumentPermissionInstance {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext.DocumentContext.DocumentPermissionInstance
   * @description Initialize the DocumentPermissionContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property accountSid - Twilio Account SID.
   * @property serviceSid - Sync Service Instance SID.
   * @property documentSid - Sync Document SID.
   * @property identity - Identity of the user to whom the Sync Document Permission applies.
   * @property read - Read access.
   * @property write - Write access.
   * @property manage - Manage access.
   * @property url - URL of this Sync Document Permission.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Sync Service Instance SID.
   * @param documentSid - Sync Document SID.
   * @param identity - Identity of the user to whom the Sync Document Permission applies.
   */
  constructor(version: Twilio.Sync.V1, payload: object, serviceSid: sid, documentSid: sid, identity: string);

  _proxy?: DocumentPermissionContext;
  /**
   * fetch a DocumentPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: DocumentPermissionInstance) => any);
  /**
   * remove a DocumentPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: DocumentPermissionInstance) => any);
  /**
   * Produce a plain JSON object version of the DocumentPermissionInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
  /**
   * update a DocumentPermissionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: DocumentPermissionInstanceUpdateOptions, callback?: (error: Error | null, items: DocumentPermissionInstance) => any);
}


declare class DocumentPermissionContext {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext.DocumentContext.DocumentPermissionContext
   * @description Initialize the DocumentPermissionContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - Sync Service Instance SID or unique name.
   * @param documentSid - Sync Document SID or unique name.
   * @param identity - Identity of the user to whom the Sync Document Permission applies.
   */
  constructor(version: Twilio.Sync.V1, serviceSid: sid_like, documentSid: sid_like, identity: string);

  /**
   * fetch a DocumentPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: DocumentPermissionContext) => any);
  /**
   * remove a DocumentPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: DocumentPermissionContext) => any);
  /**
   * update a DocumentPermissionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: DocumentPermissionContextUpdateOptions, callback?: (error: Error | null, items: DocumentPermissionContext) => any);
}

export { DocumentPermissionContext, DocumentPermissionInstance, DocumentPermissionList, DocumentPermissionListInstance, DocumentPermissionPage, DocumentPermissionPayload, DocumentPermissionResource, DocumentPermissionSolution }
