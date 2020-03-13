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
 * Initialize the DocumentPermissionList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The SID of the Sync Service that the resource is associated with
 * @param documentSid - The Sync Document SID
 */
declare function DocumentPermissionList(version: V1, serviceSid: string, documentSid: string): DocumentPermissionListInstance;

/**
 * Options to pass to update
 *
 * @property manage - Manage access
 * @property read - Read access
 * @property write - Write access
 */
interface DocumentPermissionInstanceUpdateOptions {
  manage: boolean;
  read: boolean;
  write: boolean;
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
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: DocumentPermissionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams DocumentPermissionInstance records from the API.
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
  each(opts?: DocumentPermissionListInstanceEachOptions, callback?: (item: DocumentPermissionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a document_permission
   *
   * @param identity - The application-defined string that uniquely identifies the User's Document Permission resource to fetch
   */
  get(identity: string): DocumentPermissionContext;
  /**
   * Retrieve a single target page of DocumentPermissionInstance records from the
   * API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: DocumentPermissionPage) => any): Promise<DocumentPermissionPage>;
  /**
   * Retrieve a single target page of DocumentPermissionInstance records from the
   * API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: DocumentPermissionPage) => any): Promise<DocumentPermissionPage>;
  /**
   * Lists DocumentPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: DocumentPermissionInstance[]) => any): Promise<DocumentPermissionInstance[]>;
  /**
   * Lists DocumentPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: DocumentPermissionListInstanceOptions, callback?: (error: Error | null, items: DocumentPermissionInstance[]) => any): Promise<DocumentPermissionInstance[]>;
  /**
   * Retrieve a single page of DocumentPermissionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: DocumentPermissionPage) => any): Promise<DocumentPermissionPage>;
  /**
   * Retrieve a single page of DocumentPermissionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: DocumentPermissionListInstancePageOptions, callback?: (error: Error | null, items: DocumentPermissionPage) => any): Promise<DocumentPermissionPage>;
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
interface DocumentPermissionListInstanceEachOptions {
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
interface DocumentPermissionListInstanceOptions {
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
interface DocumentPermissionListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface DocumentPermissionPayload extends DocumentPermissionResource, Page.TwilioResponsePayload {
}

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

interface DocumentPermissionSolution {
  documentSid?: string;
  serviceSid?: string;
}


declare class DocumentPermissionContext {
  /**
   * Initialize the DocumentPermissionContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The SID of the Sync Service with the Document Permission resource to fetch
   * @param documentSid - The SID of the Sync Document with the Document Permission resource to fetch
   * @param identity - The application-defined string that uniquely identifies the User's Document Permission resource to fetch
   */
  constructor(version: V1, serviceSid: string, documentSid: string, identity: string);

  /**
   * fetch a DocumentPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: DocumentPermissionInstance) => any): Promise<DocumentPermissionInstance>;
  /**
   * remove a DocumentPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: DocumentPermissionInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a DocumentPermissionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: DocumentPermissionInstanceUpdateOptions, callback?: (error: Error | null, items: DocumentPermissionInstance) => any): Promise<DocumentPermissionInstance>;
}


declare class DocumentPermissionInstance extends SerializableClass {
  /**
   * Initialize the DocumentPermissionContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The SID of the Sync Service that the resource is associated with
   * @param documentSid - The Sync Document SID
   * @param identity - The application-defined string that uniquely identifies the User's Document Permission resource to fetch
   */
  constructor(version: V1, payload: DocumentPermissionPayload, serviceSid: string, documentSid: string, identity: string);

  private _proxy: DocumentPermissionContext;
  accountSid: string;
  documentSid: string;
  /**
   * fetch a DocumentPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: DocumentPermissionInstance) => any): Promise<DocumentPermissionInstance>;
  identity: string;
  manage: boolean;
  read: boolean;
  /**
   * remove a DocumentPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: DocumentPermissionInstance) => any): Promise<boolean>;
  serviceSid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a DocumentPermissionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: DocumentPermissionInstanceUpdateOptions, callback?: (error: Error | null, items: DocumentPermissionInstance) => any): Promise<DocumentPermissionInstance>;
  url: string;
  write: boolean;
}


declare class DocumentPermissionPage extends Page<V1, DocumentPermissionPayload, DocumentPermissionResource, DocumentPermissionInstance> {
  /**
   * Initialize the DocumentPermissionPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: DocumentPermissionSolution);

  /**
   * Build an instance of DocumentPermissionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DocumentPermissionPayload): DocumentPermissionInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { DocumentPermissionContext, DocumentPermissionInstance, DocumentPermissionInstanceUpdateOptions, DocumentPermissionList, DocumentPermissionListInstance, DocumentPermissionListInstanceEachOptions, DocumentPermissionListInstanceOptions, DocumentPermissionListInstancePageOptions, DocumentPermissionPage, DocumentPermissionPayload, DocumentPermissionResource, DocumentPermissionSolution }
