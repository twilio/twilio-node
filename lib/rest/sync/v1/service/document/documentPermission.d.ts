/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

declare function DocumentPermissionList(version: V1, serviceSid: string, documentSid: string): DocumentPermissionListInstance

interface DocumentPermissionResource {
  /**
   * The unique SID identifier of the Twilio Account.
   */
  account_sid: string;
  /**
   * The unique SID identifier of the Sync Document to which the Permission applies.
   */
  document_sid: string;
  /**
   * Arbitrary string identifier representing a human user associated with an FPA token, assigned by the developer.
   */
  identity: string;
  /**
   * Boolean flag specifying whether the identity can delete the Sync Document.
   */
  manage: boolean;
  /**
   * Boolean flag specifying whether the identity can read the Sync Document.
   */
  read: boolean;
  /**
   * The unique SID identifier of the Sync Service Instance.
   */
  service_sid: string;
  /**
   * Contains an absolute URL for this Sync Document Permission.
   */
  url: string;
  /**
   * Boolean flag specifying whether the identity can update the Sync Document.
   */
  write: boolean;
}

interface DocumentPermissionPayload extends DocumentPermissionResource, Page.TwilioResponsePayload {
}

interface DocumentPermissionSolution {
  documentSid: string;
  serviceSid: string;
}

interface DocumentPermissionListEachOptions extends ListEachOptions<DocumentPermissionInstance> {
}

interface DocumentPermissionListOptions extends ListOptions<DocumentPermissionInstance> {
}

interface DocumentPermissionListPageOptions extends PageOptions<DocumentPermissionPage> {
}

interface DocumentPermissionListInstance {
  /**
   * Gets context of a single DocumentPermission resource
   *
   * @param identity - Identity of the user to whom the Sync Document Permission applies.
   */
  (identity: string): DocumentPermissionContext;
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
   */
  each(opts?: DocumentPermissionListEachOptions): void;
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
   * @param callback - Callback to handle processed record
   */
  each(callback: (item: DocumentPermissionInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single DocumentPermission resource
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
   */
  getPage(targetUrl: string): Promise<DocumentPermissionPage>;
  /**
   * Retrieve a single target page of DocumentPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: DocumentPermissionPage) => any): void;
  /**
   * Lists DocumentPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: DocumentPermissionListOptions): Promise<DocumentPermissionInstance[]>;
  /**
   * Lists DocumentPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: DocumentPermissionListOptions, callback: (error: Error | null, items: DocumentPermissionInstance[]) => any): void;
  /**
   * Lists DocumentPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: DocumentPermissionInstance[]) => any): void;
  /**
   * Retrieve a single page of DocumentPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: DocumentPermissionListPageOptions): Promise<DocumentPermissionPage>;
  /**
   * Retrieve a single page of DocumentPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: DocumentPermissionListPageOptions, callback: (error: Error | null, items: DocumentPermissionPage) => any): void;
  /**
   * Retrieve a single page of DocumentPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: DocumentPermissionPage) => any): void;
}

interface DocumentPermissionListFetchOptions {
  /**
   * Boolean flag specifying whether the identity can delete the Sync Document.
   */
  manage: boolean;
  /**
   * Boolean flag specifying whether the identity can read the Sync Document.
   */
  read: boolean;
  /**
   * Boolean flag specifying whether the identity can update the Sync Document.
   */
  write: boolean;
}

interface DocumentPermissionListFetchOptions {
  /**
   * Boolean flag specifying whether the identity can delete the Sync Document.
   */
  manage: boolean;
  /**
   * Boolean flag specifying whether the identity can read the Sync Document.
   */
  read: boolean;
  /**
   * Boolean flag specifying whether the identity can update the Sync Document.
   */
  write: boolean;
}

declare class DocumentPermissionPage extends Page<V1, DocumentPermissionPayload, DocumentPermissionResource, DocumentPermissionInstance> {
  constructor(version: V1, response: Response<string>, solution: DocumentPermissionSolution);

  /**
   * Build an instance of DocumentPermissionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DocumentPermissionPayload): DocumentPermissionInstance;
}

declare class DocumentPermissionInstance extends SerializableClass {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Sync Service Instance SID or unique name.
   * @param documentSid - Sync Document SID or unique name.
   * @param identity - Identity of the user to whom the Sync Document Permission applies.
   */
  constructor(version: V1, payload: DocumentPermissionPayload, serviceSid: string, documentSid: string, identity: string);

  private _proxy: DocumentPermissionContext;
  /**
   * The unique SID identifier of the Twilio Account.
   */
  accountSid: string;
  /**
   * The unique SID identifier of the Sync Document to which the Permission applies.
   */
  documentSid: string;
  /**
   * fetch a DocumentPermissionInstance
   *
   * @returns Promise that resolves to processed DocumentPermissionInstance
   */
  fetch(): Promise<DocumentPermissionInstance>;
  /**
   * fetch a DocumentPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: DocumentPermissionInstance) => any): void;
  /**
   * Arbitrary string identifier representing a human user associated with an FPA token, assigned by the developer.
   */
  identity: string;
  /**
   * Boolean flag specifying whether the identity can delete the Sync Document.
   */
  manage: boolean;
  /**
   * Boolean flag specifying whether the identity can read the Sync Document.
   */
  read: boolean;
  /**
   * remove a DocumentPermissionInstance
   *
   * @returns Promise that resolves to processed DocumentPermissionInstance
   */
  remove(): Promise<DocumentPermissionInstance>;
  /**
   * remove a DocumentPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: DocumentPermissionInstance) => any): void;
  /**
   * The unique SID identifier of the Sync Service Instance.
   */
  serviceSid: string;
  /**
   * update a DocumentPermissionInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed DocumentPermissionInstance
   */
  update(opts: DocumentPermissionListFetchOptions): Promise<DocumentPermissionInstance>;
  /**
   * update a DocumentPermissionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: DocumentPermissionListFetchOptions, callback: (error: Error | null, items: DocumentPermissionInstance) => any): void;
  /**
   * Contains an absolute URL for this Sync Document Permission.
   */
  url: string;
  /**
   * Boolean flag specifying whether the identity can update the Sync Document.
   */
  write: boolean;
}

declare class DocumentPermissionContext {
  constructor(version: V1, serviceSid: string, documentSid: string, identity: string);

  /**
   * fetch a DocumentPermissionInstance
   *
   * @returns Promise that resolves to processed DocumentPermissionInstance
   */
  fetch(): Promise<DocumentPermissionInstance>;
  /**
   * fetch a DocumentPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: DocumentPermissionInstance) => any): void;
  /**
   * remove a DocumentPermissionInstance
   *
   * @returns Promise that resolves to processed DocumentPermissionInstance
   */
  remove(): Promise<DocumentPermissionInstance>;
  /**
   * remove a DocumentPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: DocumentPermissionInstance) => any): void;
  /**
   * update a DocumentPermissionInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed DocumentPermissionInstance
   */
  update(opts: DocumentPermissionListFetchOptions): Promise<DocumentPermissionInstance>;
  /**
   * update a DocumentPermissionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: DocumentPermissionListFetchOptions, callback: (error: Error | null, items: DocumentPermissionInstance) => any): void;
}

export { DocumentPermissionContext, DocumentPermissionInstance, DocumentPermissionList, DocumentPermissionListEachOptions, DocumentPermissionListFetchOptions, DocumentPermissionListInstance, DocumentPermissionListOptions, DocumentPermissionListPageOptions, DocumentPermissionPage, DocumentPermissionPayload, DocumentPermissionResource, DocumentPermissionSolution }
