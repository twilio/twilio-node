/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import HostedNumbers = require('../HostedNumbers');
import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import serialize = require('../../../base/serialize');
import { DependentHostedNumberOrderList } from './authorizationDocument/dependentHostedNumberOrder';
import { DependentHostedNumberOrderListInstance } from './authorizationDocument/dependentHostedNumberOrder';
import { SerializableClass } from '../../../interfaces';

type AuthorizationDocumentStatus = 'opened'|'signing'|'signed'|'canceled'|'failed';

/**
 * Initialize the AuthorizationDocumentList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function AuthorizationDocumentList(version: HostedNumbers): AuthorizationDocumentListInstance;

/**
 * Options to pass to update
 *
 * @property addressSid - Address sid.
 * @property ccEmails - A list of emails.
 * @property contactPhoneNumber - Authorization Document's signee's phone number.
 * @property contactTitle - Title of signee of this Authorization Document.
 * @property email - Email.
 * @property hostedNumberOrderSids - A list of HostedNumberOrder sids.
 * @property status - The Status of this AuthorizationDocument.
 */
interface AuthorizationDocumentInstanceUpdateOptions {
  addressSid?: string;
  ccEmails?: string | string[];
  contactPhoneNumber?: string;
  contactTitle?: string;
  email?: string;
  hostedNumberOrderSids?: string | string[];
  status?: AuthorizationDocumentStatus;
}

interface AuthorizationDocumentListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AuthorizationDocumentContext;
  /**
   * create a AuthorizationDocumentInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: AuthorizationDocumentListInstanceCreateOptions, callback?: (error: Error | null, item: AuthorizationDocumentInstance) => any): Promise<AuthorizationDocumentInstance>;
  /**
   * Streams AuthorizationDocumentInstance records from the API.
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
  each(opts?: AuthorizationDocumentListInstanceEachOptions, callback?: (item: AuthorizationDocumentInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a authorization_document
   *
   * @param sid - AuthorizationDocument sid.
   */
  get(sid: string): AuthorizationDocumentContext;
  /**
   * Retrieve a single target page of AuthorizationDocumentInstance records from the
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
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AuthorizationDocumentPage) => any): Promise<AuthorizationDocumentPage>;
  /**
   * Lists AuthorizationDocumentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AuthorizationDocumentListInstanceOptions, callback?: (error: Error | null, items: AuthorizationDocumentInstance[]) => any): Promise<AuthorizationDocumentInstance[]>;
  /**
   * Retrieve a single page of AuthorizationDocumentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AuthorizationDocumentListInstancePageOptions, callback?: (error: Error | null, items: AuthorizationDocumentPage) => any): Promise<AuthorizationDocumentPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property addressSid - Address sid.
 * @property ccEmails - A list of emails.
 * @property contactPhoneNumber - Authorization Document's signee's phone number.
 * @property contactTitle - Title of signee of this Authorization Document.
 * @property email - Email.
 * @property hostedNumberOrderSids - A list of HostedNumberOrder sids.
 */
interface AuthorizationDocumentListInstanceCreateOptions {
  addressSid: string;
  ccEmails?: string | string[];
  contactPhoneNumber: string;
  contactTitle: string;
  email: string;
  hostedNumberOrderSids: string | string[];
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property email - Email.
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
 * @property status - The Status of this AuthorizationDocument.
 */
interface AuthorizationDocumentListInstanceEachOptions {
  callback?: (item: AuthorizationDocumentInstance, done: (err?: Error) => void) => void;
  done?: Function;
  email?: string;
  limit?: number;
  pageSize?: number;
  status?: AuthorizationDocumentStatus;
}

/**
 * Options to pass to list
 *
 * @property email - Email.
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
 * @property status - The Status of this AuthorizationDocument.
 */
interface AuthorizationDocumentListInstanceOptions {
  email?: string;
  limit?: number;
  pageSize?: number;
  status?: AuthorizationDocumentStatus;
}

/**
 * Options to pass to page
 *
 * @property email - Email.
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property status - The Status of this AuthorizationDocument.
 */
interface AuthorizationDocumentListInstancePageOptions {
  email?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  status?: AuthorizationDocumentStatus;
}

interface AuthorizationDocumentPayload extends AuthorizationDocumentResource, Page.TwilioResponsePayload {
}

interface AuthorizationDocumentResource {
  address_sid: string;
  cc_emails: string[];
  date_created: Date;
  date_updated: Date;
  email: string;
  links: string;
  sid: string;
  status: AuthorizationDocumentStatus;
  url: string;
}

interface AuthorizationDocumentSolution {
}


declare class AuthorizationDocumentContext {
  /**
   * Initialize the AuthorizationDocumentContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param sid - AuthorizationDocument sid.
   */
  constructor(version: HostedNumbers, sid: string);

  dependentHostedNumberOrders: DependentHostedNumberOrderListInstance;
  /**
   * fetch a AuthorizationDocumentInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AuthorizationDocumentInstance) => any): Promise<AuthorizationDocumentInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a AuthorizationDocumentInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: AuthorizationDocumentInstanceUpdateOptions, callback?: (error: Error | null, items: AuthorizationDocumentInstance) => any): Promise<AuthorizationDocumentInstance>;
}


declare class AuthorizationDocumentInstance extends SerializableClass {
  /**
   * Initialize the AuthorizationDocumentContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - AuthorizationDocument sid.
   */
  constructor(version: HostedNumbers, payload: AuthorizationDocumentPayload, sid: string);

  private _proxy: AuthorizationDocumentContext;
  addressSid: string;
  ccEmails: string[];
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * Access the dependentHostedNumberOrders
   */
  dependentHostedNumberOrders(): DependentHostedNumberOrderListInstance;
  email: string;
  /**
   * fetch a AuthorizationDocumentInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AuthorizationDocumentInstance) => any): Promise<AuthorizationDocumentInstance>;
  links: string;
  sid: string;
  status: AuthorizationDocumentStatus;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a AuthorizationDocumentInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: AuthorizationDocumentInstanceUpdateOptions, callback?: (error: Error | null, items: AuthorizationDocumentInstance) => any): Promise<AuthorizationDocumentInstance>;
  url: string;
}


declare class AuthorizationDocumentPage extends Page<HostedNumbers, AuthorizationDocumentPayload, AuthorizationDocumentResource, AuthorizationDocumentInstance> {
  /**
   * Initialize the AuthorizationDocumentPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: HostedNumbers, response: Response<string>, solution: AuthorizationDocumentSolution);

  /**
   * Build an instance of AuthorizationDocumentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AuthorizationDocumentPayload): AuthorizationDocumentInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { AuthorizationDocumentContext, AuthorizationDocumentInstance, AuthorizationDocumentInstanceUpdateOptions, AuthorizationDocumentList, AuthorizationDocumentListInstance, AuthorizationDocumentListInstanceCreateOptions, AuthorizationDocumentListInstanceEachOptions, AuthorizationDocumentListInstanceOptions, AuthorizationDocumentListInstancePageOptions, AuthorizationDocumentPage, AuthorizationDocumentPayload, AuthorizationDocumentResource, AuthorizationDocumentSolution }
