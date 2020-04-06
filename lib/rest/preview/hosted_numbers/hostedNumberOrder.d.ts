/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import HostedNumbers = require('../HostedNumbers');
import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import { SerializableClass } from '../../../interfaces';

type HostedNumberOrderStatus = 'received'|'pending-verification'|'verified'|'pending-loa'|'carrier-processing'|'testing'|'completed'|'failed'|'action-required';

type HostedNumberOrderVerificationType = 'phone-call'|'phone-bill';

/**
 * Initialize the HostedNumberOrderList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function HostedNumberOrderList(version: HostedNumbers): HostedNumberOrderListInstance;

/**
 * Options to pass to update
 *
 * @property callDelay - The number of seconds, between 0 and 60, to delay before initiating the verification call.
 * @property ccEmails - A list of emails.
 * @property email - Email.
 * @property extension - Digits to dial after connecting the verification call.
 * @property friendlyName - A human readable description of this resource.
 * @property status - The Status of this HostedNumberOrder.
 * @property uniqueName - A unique, developer assigned name of this HostedNumberOrder.
 * @property verificationCode - A verification code.
 * @property verificationDocumentSid - Verification Document Sid
 * @property verificationType - Verification Type.
 */
interface HostedNumberOrderInstanceUpdateOptions {
  callDelay?: number;
  ccEmails?: string | string[];
  email?: string;
  extension?: string;
  friendlyName?: string;
  status?: HostedNumberOrderStatus;
  uniqueName?: string;
  verificationCode?: string;
  verificationDocumentSid?: string;
  verificationType?: HostedNumberOrderVerificationType;
}

interface HostedNumberOrderListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): HostedNumberOrderContext;
  /**
   * create a HostedNumberOrderInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: HostedNumberOrderListInstanceCreateOptions, callback?: (error: Error | null, item: HostedNumberOrderInstance) => any): Promise<HostedNumberOrderInstance>;
  /**
   * Streams HostedNumberOrderInstance records from the API.
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
  each(callback?: (item: HostedNumberOrderInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams HostedNumberOrderInstance records from the API.
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
  each(opts?: HostedNumberOrderListInstanceEachOptions, callback?: (item: HostedNumberOrderInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a hosted_number_order
   *
   * @param sid - HostedNumberOrder sid.
   */
  get(sid: string): HostedNumberOrderContext;
  /**
   * Retrieve a single target page of HostedNumberOrderInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: HostedNumberOrderPage) => any): Promise<HostedNumberOrderPage>;
  /**
   * Retrieve a single target page of HostedNumberOrderInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: HostedNumberOrderPage) => any): Promise<HostedNumberOrderPage>;
  /**
   * Lists HostedNumberOrderInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: HostedNumberOrderInstance[]) => any): Promise<HostedNumberOrderInstance[]>;
  /**
   * Lists HostedNumberOrderInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: HostedNumberOrderListInstanceOptions, callback?: (error: Error | null, items: HostedNumberOrderInstance[]) => any): Promise<HostedNumberOrderInstance[]>;
  /**
   * Retrieve a single page of HostedNumberOrderInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: HostedNumberOrderPage) => any): Promise<HostedNumberOrderPage>;
  /**
   * Retrieve a single page of HostedNumberOrderInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: HostedNumberOrderListInstancePageOptions, callback?: (error: Error | null, items: HostedNumberOrderPage) => any): Promise<HostedNumberOrderPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property accountSid - Account Sid.
 * @property addressSid - Address sid.
 * @property ccEmails - A list of emails.
 * @property email - Email.
 * @property friendlyName - A human readable description of this resource.
 * @property phoneNumber - An E164 formatted phone number.
 * @property smsApplicationSid - SMS Application Sid.
 * @property smsCapability - Specify SMS capability to host.
 * @property smsFallbackMethod - SMS Fallback Method.
 * @property smsFallbackUrl - SMS Fallback URL.
 * @property smsMethod - SMS Method.
 * @property smsUrl - SMS URL.
 * @property statusCallbackMethod - Status Callback Method.
 * @property statusCallbackUrl - Status Callback URL.
 * @property uniqueName - A unique, developer assigned name of this HostedNumberOrder.
 * @property verificationDocumentSid - Verification Document Sid
 * @property verificationType - Verification Type.
 */
interface HostedNumberOrderListInstanceCreateOptions {
  accountSid?: string;
  addressSid?: string;
  ccEmails?: string | string[];
  email?: string;
  friendlyName?: string;
  phoneNumber: string;
  smsApplicationSid?: string;
  smsCapability: boolean;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsUrl?: string;
  statusCallbackMethod?: string;
  statusCallbackUrl?: string;
  uniqueName?: string;
  verificationDocumentSid?: string;
  verificationType?: HostedNumberOrderVerificationType;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property friendlyName - A human readable description of this resource.
 * @property incomingPhoneNumberSid - IncomingPhoneNumber sid.
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
 * @property phoneNumber - An E164 formatted phone number.
 * @property status - The Status of this HostedNumberOrder.
 * @property uniqueName - A unique, developer assigned name of this HostedNumberOrder.
 */
interface HostedNumberOrderListInstanceEachOptions {
  callback?: (item: HostedNumberOrderInstance, done: (err?: Error) => void) => void;
  done?: Function;
  friendlyName?: string;
  incomingPhoneNumberSid?: string;
  limit?: number;
  pageSize?: number;
  phoneNumber?: string;
  status?: HostedNumberOrderStatus;
  uniqueName?: string;
}

/**
 * Options to pass to list
 *
 * @property friendlyName - A human readable description of this resource.
 * @property incomingPhoneNumberSid - IncomingPhoneNumber sid.
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
 * @property phoneNumber - An E164 formatted phone number.
 * @property status - The Status of this HostedNumberOrder.
 * @property uniqueName - A unique, developer assigned name of this HostedNumberOrder.
 */
interface HostedNumberOrderListInstanceOptions {
  friendlyName?: string;
  incomingPhoneNumberSid?: string;
  limit?: number;
  pageSize?: number;
  phoneNumber?: string;
  status?: HostedNumberOrderStatus;
  uniqueName?: string;
}

/**
 * Options to pass to page
 *
 * @property friendlyName - A human readable description of this resource.
 * @property incomingPhoneNumberSid - IncomingPhoneNumber sid.
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property phoneNumber - An E164 formatted phone number.
 * @property status - The Status of this HostedNumberOrder.
 * @property uniqueName - A unique, developer assigned name of this HostedNumberOrder.
 */
interface HostedNumberOrderListInstancePageOptions {
  friendlyName?: string;
  incomingPhoneNumberSid?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  phoneNumber?: string;
  status?: HostedNumberOrderStatus;
  uniqueName?: string;
}

interface HostedNumberOrderPayload extends HostedNumberOrderResource, Page.TwilioResponsePayload {
}

interface HostedNumberOrderResource {
  account_sid: string;
  address_sid: string;
  call_delay: number;
  capabilities: string;
  cc_emails: string[];
  date_created: Date;
  date_updated: Date;
  email: string;
  extension: string;
  failure_reason: string;
  friendly_name: string;
  incoming_phone_number_sid: string;
  phone_number: string;
  sid: string;
  signing_document_sid: string;
  status: HostedNumberOrderStatus;
  unique_name: string;
  url: string;
  verification_attempts: number;
  verification_call_sids: string[];
  verification_code: string;
  verification_document_sid: string;
  verification_type: HostedNumberOrderVerificationType;
}

interface HostedNumberOrderSolution {
}


declare class HostedNumberOrderContext {
  /**
   * Initialize the HostedNumberOrderContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param sid - HostedNumberOrder sid.
   */
  constructor(version: HostedNumbers, sid: string);

  /**
   * fetch a HostedNumberOrderInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: HostedNumberOrderInstance) => any): Promise<HostedNumberOrderInstance>;
  /**
   * remove a HostedNumberOrderInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: HostedNumberOrderInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a HostedNumberOrderInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: HostedNumberOrderInstance) => any): Promise<HostedNumberOrderInstance>;
  /**
   * update a HostedNumberOrderInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: HostedNumberOrderInstanceUpdateOptions, callback?: (error: Error | null, items: HostedNumberOrderInstance) => any): Promise<HostedNumberOrderInstance>;
}


declare class HostedNumberOrderInstance extends SerializableClass {
  /**
   * Initialize the HostedNumberOrderContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - HostedNumberOrder sid.
   */
  constructor(version: HostedNumbers, payload: HostedNumberOrderPayload, sid: string);

  private _proxy: HostedNumberOrderContext;
  accountSid: string;
  addressSid: string;
  callDelay: number;
  capabilities: string;
  ccEmails: string[];
  dateCreated: Date;
  dateUpdated: Date;
  email: string;
  extension: string;
  failureReason: string;
  /**
   * fetch a HostedNumberOrderInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: HostedNumberOrderInstance) => any): Promise<HostedNumberOrderInstance>;
  friendlyName: string;
  incomingPhoneNumberSid: string;
  phoneNumber: string;
  /**
   * remove a HostedNumberOrderInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: HostedNumberOrderInstance) => any): Promise<boolean>;
  sid: string;
  signingDocumentSid: string;
  status: HostedNumberOrderStatus;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a HostedNumberOrderInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: HostedNumberOrderInstance) => any): Promise<HostedNumberOrderInstance>;
  /**
   * update a HostedNumberOrderInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: HostedNumberOrderInstanceUpdateOptions, callback?: (error: Error | null, items: HostedNumberOrderInstance) => any): Promise<HostedNumberOrderInstance>;
  url: string;
  verificationAttempts: number;
  verificationCallSids: string[];
  verificationCode: string;
  verificationDocumentSid: string;
  verificationType: HostedNumberOrderVerificationType;
}


declare class HostedNumberOrderPage extends Page<HostedNumbers, HostedNumberOrderPayload, HostedNumberOrderResource, HostedNumberOrderInstance> {
  /**
   * Initialize the HostedNumberOrderPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: HostedNumbers, response: Response<string>, solution: HostedNumberOrderSolution);

  /**
   * Build an instance of HostedNumberOrderInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: HostedNumberOrderPayload): HostedNumberOrderInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { HostedNumberOrderContext, HostedNumberOrderInstance, HostedNumberOrderInstanceUpdateOptions, HostedNumberOrderList, HostedNumberOrderListInstance, HostedNumberOrderListInstanceCreateOptions, HostedNumberOrderListInstanceEachOptions, HostedNumberOrderListInstanceOptions, HostedNumberOrderListInstancePageOptions, HostedNumberOrderPage, HostedNumberOrderPayload, HostedNumberOrderResource, HostedNumberOrderSolution, HostedNumberOrderStatus, HostedNumberOrderVerificationType }
