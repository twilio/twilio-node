/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import HostedNumbers = require('../HostedNumbers');
import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { SerializableClass } from '../../../interfaces';

declare function HostedNumberOrderList(version: HostedNumbers): HostedNumberOrderListInstance

type HostedNumberOrderStatus = 'received'|'pending-verification'|'verified'|'pending-loa'|'carrier-processing'|'testing'|'completed'|'failed'|'action-required';

type HostedNumberOrderVerificationType = 'phone-call'|'phone-bill';

interface HostedNumberOrderResource {
  /**
   * A 34 character string that uniquely identifies the account.
   */
  account_sid: string;
  /**
   * A 34 character string that uniquely identifies the Address resource that represents the address of the owner of this phone number.
   */
  address_sid: string;
  /**
   * A value between 0-30 specifying the number of seconds to delay initiating the ownership verification call.
   */
  call_delay: number;
  /**
   * Set of booleans describing the capabilities hosted on Twilio's platform. SMS is currently only supported.
   */
  capabilities: string;
  /**
   * A list of emails that LOA document for this HostedNumberOrder will be carbon copied to.
   */
  cc_emails: string;
  /**
   * The date this resource was created, given as [GMT RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  date_created: Date;
  /**
   * The date that this resource was updated, given as [GMT RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  date_updated: Date;
  /**
   * Email of the owner of this phone number that is being hosted.
   */
  email: string;
  /**
   * A numerical extension to be used when making the ownership verification call.
   */
  extension: string;
  /**
   * A message that explains why a hosted_number_order went to status "action-required"
   */
  failure_reason: string;
  /**
   * A 64 character string that is a human-readable text that describes this resource.
   */
  friendly_name: string;
  /**
   * A 34 character string that uniquely identifies the [IncomingPhoneNumber](https://www.twilio.com/docs/api/rest/incoming-phone-numbers) resource that represents the phone number being hosted.
   */
  incoming_phone_number_sid: string;
  /**
   * Phone number to be hosted. This must be in [E.164](https://en.wikipedia.org/wiki/E.164) format, e.g., +16175551212
   */
  phone_number: string;
  /**
   * A 34 character string that uniquely identifies this HostedNumberOrder.
   */
  sid: string;
  /**
   * A 34 character string that uniquely identifies the [Authorization Document](https://www.twilio.com/docs/api/phone-numbers/hosted-number-authorization-documents) the user needs to sign.
   */
  signing_document_sid: string;
  /**
   * Status of this resource. It can hold one of the values: 1. Twilio Processing 2. Received, 3. Pending LOA, 4. Carrier Processing, 5. Completed, 6. Action Required, 7. Failed. See the [HostedNumberOrders Status Values](https://www.twilio.com/docs/api/phone-numbers/hosted-numbers#status-values) section for more information on each of these statuses.
   */
  status: HostedNumberOrderStatus;
  /**
   * Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
   */
  unique_name: string;
  /**
   * The URL of this HostedNumberOrder.
   */
  url: string;
  /**
   * The number of attempts made to verify ownership of the phone number that is being hosted.
   */
  verification_attempts: number;
  /**
   * A list of 34 character strings that are unique identifiers for the calls placed as part of ownership verification.
   */
  verification_call_sids: string;
  /**
   * A verification code provided in the response for a user to enter when they pick up the phone call.
   */
  verification_code: string;
  /**
   * A 34 character string that uniquely identifies the Identity Document resource that represents the document for verifying ownership of the number to be hosted.
   */
  verification_document_sid: string;
  /**
   * The type of ownership verification required to move the number to a `verified` state. The verification methods are `phone-call` or `phone-bill`.
   */
  verification_type: HostedNumberOrderVerificationType;
}

interface HostedNumberOrderPayload extends HostedNumberOrderResource, Page.TwilioResponsePayload {
}

interface HostedNumberOrderSolution {
}

interface HostedNumberOrderListEachOptions extends ListEachOptions<HostedNumberOrderInstance> {
  /**
   * A human readable description of this resource, up to 64 characters.
   */
  friendlyName?: string;
  /**
   * A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder.
   */
  incomingPhoneNumberSid?: string;
  /**
   * An E164 formatted phone number hosted by this HostedNumberOrder.
   */
  phoneNumber?: string;
  /**
   * The Status of this HostedNumberOrder. One of `received`, `pending-verification`, `verified`, `pending-loa`, `carrier-processing`, `testing`, `completed`, `failed`, or `action-required`.
   */
  status?: HostedNumberOrderStatus;
  /**
   * Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
   */
  uniqueName?: string;
}

interface HostedNumberOrderListOptions extends ListOptions<HostedNumberOrderInstance> {
  /**
   * A human readable description of this resource, up to 64 characters.
   */
  friendlyName?: string;
  /**
   * A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder.
   */
  incomingPhoneNumberSid?: string;
  /**
   * An E164 formatted phone number hosted by this HostedNumberOrder.
   */
  phoneNumber?: string;
  /**
   * The Status of this HostedNumberOrder. One of `received`, `pending-verification`, `verified`, `pending-loa`, `carrier-processing`, `testing`, `completed`, `failed`, or `action-required`.
   */
  status?: HostedNumberOrderStatus;
  /**
   * Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
   */
  uniqueName?: string;
}

interface HostedNumberOrderListPageOptions extends PageOptions<HostedNumberOrderPage> {
  /**
   * A human readable description of this resource, up to 64 characters.
   */
  friendlyName?: string;
  /**
   * A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder.
   */
  incomingPhoneNumberSid?: string;
  /**
   * An E164 formatted phone number hosted by this HostedNumberOrder.
   */
  phoneNumber?: string;
  /**
   * The Status of this HostedNumberOrder. One of `received`, `pending-verification`, `verified`, `pending-loa`, `carrier-processing`, `testing`, `completed`, `failed`, or `action-required`.
   */
  status?: HostedNumberOrderStatus;
  /**
   * Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
   */
  uniqueName?: string;
}

interface HostedNumberOrderListCreateOptions {
  /**
   * This defaults to the AccountSid of the authorization the user is using. This can be provided to specify a subaccount to add the HostedNumberOrder to.
   */
  accountSid?: string;
  /**
   * Optional. A 34 character string that uniquely identifies the Address resource that represents the address of the owner of this phone number.
   */
  addressSid?: string;
  /**
   * Optional. A list of emails that the LOA document for this HostedNumberOrder will be carbon copied to.
   */
  ccEmails?: string[];
  /**
   * Optional. Email of the owner of this phone number that is being hosted.
   */
  email?: string;
  /**
   * A 64 character string that is a human readable text that describes this resource.
   */
  friendlyName?: string;
  /**
   * The number to host in [+E.164](https://en.wikipedia.org/wiki/E.164) format
   */
  phoneNumber: string;
  /**
   * Optional. The 34 character sid of the application Twilio should use to handle SMS messages sent to this number. If a `SmsApplicationSid` is present, Twilio will ignore all of the SMS urls above and use those set on the application.
   */
  smsApplicationSid?: string;
  /**
   * Used to specify that the SMS capability will be hosted on Twilio's platform.
   */
  smsCapability: boolean;
  /**
   * The HTTP method that should be used to request the SmsFallbackUrl. Must be either `GET` or `POST`. This will be copied onto the IncomingPhoneNumber resource.
   */
  smsFallbackMethod?: string;
  /**
   * A URL that Twilio will request if an error occurs requesting or executing the TwiML defined by SmsUrl. This will be copied onto the IncomingPhoneNumber resource.
   */
  smsFallbackUrl?: string;
  /**
   * The HTTP method that should be used to request the SmsUrl. Must be either `GET` or `POST`.  This will be copied onto the IncomingPhoneNumber resource.
   */
  smsMethod?: string;
  /**
   * The URL that Twilio should request when somebody sends an SMS to the phone number. This will be copied onto the IncomingPhoneNumber resource.
   */
  smsUrl?: string;
  /**
   * Optional. The Status Callback Method attached to the IncomingPhoneNumber resource.
   */
  statusCallbackMethod?: string;
  /**
   * Optional. The Status Callback URL attached to the IncomingPhoneNumber resource.
   */
  statusCallbackUrl?: string;
  /**
   * Optional. Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
   */
  uniqueName?: string;
  /**
   * Optional. The unique sid identifier of the Identity Document that represents the document for verifying ownership of the number to be hosted. Required when VerificationType is phone-bill.
   */
  verificationDocumentSid?: string;
  /**
   * Optional. The method used for verifying ownership of the number to be hosted. One of phone-call (default) or phone-bill.
   */
  verificationType?: HostedNumberOrderVerificationType;
}

interface HostedNumberOrderListInstance {
  /**
   * Gets context of a single HostedNumberOrder resource
   *
   * @param sid - HostedNumberOrder sid.
   */
  (sid: string): HostedNumberOrderContext;
  /**
   * create a HostedNumberOrderInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed HostedNumberOrderInstance
   */
  create(opts: HostedNumberOrderListCreateOptions): Promise<HostedNumberOrderInstance>;
  /**
   * create a HostedNumberOrderInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: HostedNumberOrderListCreateOptions, callback: (error: Error | null, items: HostedNumberOrderInstance) => any): void;
  /**
   * Streams HostedNumberOrderInstance records from the API.
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
  each(opts?: HostedNumberOrderListEachOptions): void;
  /**
   * Streams HostedNumberOrderInstance records from the API.
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
  each(callback: (item: HostedNumberOrderInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single HostedNumberOrder resource
   *
   * @param sid - HostedNumberOrder sid.
   */
  get(sid: string): HostedNumberOrderContext;
  /**
   * Retrieve a single target page of HostedNumberOrderInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<HostedNumberOrderPage>;
  /**
   * Retrieve a single target page of HostedNumberOrderInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: HostedNumberOrderPage) => any): void;
  /**
   * Lists HostedNumberOrderInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: HostedNumberOrderListOptions): Promise<HostedNumberOrderInstance[]>;
  /**
   * Lists HostedNumberOrderInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: HostedNumberOrderListOptions, callback: (error: Error | null, items: HostedNumberOrderInstance[]) => any): void;
  /**
   * Lists HostedNumberOrderInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: HostedNumberOrderInstance[]) => any): void;
  /**
   * Retrieve a single page of HostedNumberOrderInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: HostedNumberOrderListPageOptions): Promise<HostedNumberOrderPage>;
  /**
   * Retrieve a single page of HostedNumberOrderInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: HostedNumberOrderListPageOptions, callback: (error: Error | null, items: HostedNumberOrderPage) => any): void;
  /**
   * Retrieve a single page of HostedNumberOrderInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: HostedNumberOrderPage) => any): void;
}

interface HostedNumberOrderListFetchOptions {
  /**
   * The number of seconds, between 0 and 60, to delay before initiating the verification call. Defaults to 0.
   */
  callDelay?: number;
  /**
   * Optional. A list of emails that LOA document for this HostedNumberOrder will be carbon copied to.
   */
  ccEmails?: string[];
  /**
   * Email of the owner of this phone number that is being hosted.
   */
  email?: string;
  /**
   * Digits to dial after connecting the verification call.
   */
  extension?: string;
  /**
   * A 64 character string that is a human readable text that describes this resource.
   */
  friendlyName?: string;
  /**
   * User can only post to `pending-verification` status to transition the HostedNumberOrder to initiate a verification call or verification of ownership with a copy of a phone bill.
   */
  status?: HostedNumberOrderStatus;
  /**
   * Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
   */
  uniqueName?: string;
  /**
   * A verification code that is given to the user via a phone call to the phone number that is being hosted.
   */
  verificationCode?: string;
  /**
   * Optional. The unique sid identifier of the Identity Document that represents the document for verifying ownership of the number to be hosted. Required when VerificationType is phone-bill.
   */
  verificationDocumentSid?: string;
  /**
   * Optional. The method used for verifying ownership of the number to be hosted. One of phone-call (default) or phone-bill.
   */
  verificationType?: HostedNumberOrderVerificationType;
}

interface HostedNumberOrderListFetchOptions {
  /**
   * The number of seconds, between 0 and 60, to delay before initiating the verification call. Defaults to 0.
   */
  callDelay?: number;
  /**
   * Optional. A list of emails that LOA document for this HostedNumberOrder will be carbon copied to.
   */
  ccEmails?: string[];
  /**
   * Email of the owner of this phone number that is being hosted.
   */
  email?: string;
  /**
   * Digits to dial after connecting the verification call.
   */
  extension?: string;
  /**
   * A 64 character string that is a human readable text that describes this resource.
   */
  friendlyName?: string;
  /**
   * User can only post to `pending-verification` status to transition the HostedNumberOrder to initiate a verification call or verification of ownership with a copy of a phone bill.
   */
  status?: HostedNumberOrderStatus;
  /**
   * Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
   */
  uniqueName?: string;
  /**
   * A verification code that is given to the user via a phone call to the phone number that is being hosted.
   */
  verificationCode?: string;
  /**
   * Optional. The unique sid identifier of the Identity Document that represents the document for verifying ownership of the number to be hosted. Required when VerificationType is phone-bill.
   */
  verificationDocumentSid?: string;
  /**
   * Optional. The method used for verifying ownership of the number to be hosted. One of phone-call (default) or phone-bill.
   */
  verificationType?: HostedNumberOrderVerificationType;
}

declare class HostedNumberOrderPage extends Page<HostedNumbers, HostedNumberOrderPayload, HostedNumberOrderResource, HostedNumberOrderInstance> {
  constructor(version: HostedNumbers, response: Response<string>, solution: HostedNumberOrderSolution);

  /**
   * Build an instance of HostedNumberOrderInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: HostedNumberOrderPayload): HostedNumberOrderInstance;
}

declare class HostedNumberOrderInstance extends SerializableClass {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - HostedNumberOrder sid.
   */
  constructor(version: HostedNumbers, payload: HostedNumberOrderPayload, sid: string);

  private _proxy: HostedNumberOrderContext;
  /**
   * A 34 character string that uniquely identifies the account.
   */
  accountSid: string;
  /**
   * A 34 character string that uniquely identifies the Address resource that represents the address of the owner of this phone number.
   */
  addressSid: string;
  /**
   * A value between 0-30 specifying the number of seconds to delay initiating the ownership verification call.
   */
  callDelay: number;
  /**
   * Set of booleans describing the capabilities hosted on Twilio's platform. SMS is currently only supported.
   */
  capabilities: string;
  /**
   * A list of emails that LOA document for this HostedNumberOrder will be carbon copied to.
   */
  ccEmails: string;
  /**
   * The date this resource was created, given as [GMT RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date that this resource was updated, given as [GMT RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * Email of the owner of this phone number that is being hosted.
   */
  email: string;
  /**
   * A numerical extension to be used when making the ownership verification call.
   */
  extension: string;
  /**
   * A message that explains why a hosted_number_order went to status "action-required"
   */
  failureReason: string;
  /**
   * fetch a HostedNumberOrderInstance
   *
   * @returns Promise that resolves to processed HostedNumberOrderInstance
   */
  fetch(): Promise<HostedNumberOrderInstance>;
  /**
   * fetch a HostedNumberOrderInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: HostedNumberOrderInstance) => any): void;
  /**
   * A 64 character string that is a human-readable text that describes this resource.
   */
  friendlyName: string;
  /**
   * A 34 character string that uniquely identifies the [IncomingPhoneNumber](https://www.twilio.com/docs/api/rest/incoming-phone-numbers) resource that represents the phone number being hosted.
   */
  incomingPhoneNumberSid: string;
  /**
   * Phone number to be hosted. This must be in [E.164](https://en.wikipedia.org/wiki/E.164) format, e.g., +16175551212
   */
  phoneNumber: string;
  /**
   * remove a HostedNumberOrderInstance
   *
   * @returns Promise that resolves to processed HostedNumberOrderInstance
   */
  remove(): Promise<HostedNumberOrderInstance>;
  /**
   * remove a HostedNumberOrderInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: HostedNumberOrderInstance) => any): void;
  /**
   * A 34 character string that uniquely identifies this HostedNumberOrder.
   */
  sid: string;
  /**
   * A 34 character string that uniquely identifies the [Authorization Document](https://www.twilio.com/docs/api/phone-numbers/hosted-number-authorization-documents) the user needs to sign.
   */
  signingDocumentSid: string;
  /**
   * Status of this resource. It can hold one of the values: 1. Twilio Processing 2. Received, 3. Pending LOA, 4. Carrier Processing, 5. Completed, 6. Action Required, 7. Failed. See the [HostedNumberOrders Status Values](https://www.twilio.com/docs/api/phone-numbers/hosted-numbers#status-values) section for more information on each of these statuses.
   */
  status: HostedNumberOrderStatus;
  /**
   * Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
   */
  uniqueName: string;
  /**
   * update a HostedNumberOrderInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed HostedNumberOrderInstance
   */
  update(opts?: HostedNumberOrderListFetchOptions): Promise<HostedNumberOrderInstance>;
  /**
   * update a HostedNumberOrderInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: HostedNumberOrderListFetchOptions, callback: (error: Error | null, items: HostedNumberOrderInstance) => any): void;
  /**
   * update a HostedNumberOrderInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: HostedNumberOrderInstance) => any): void;
  /**
   * The URL of this HostedNumberOrder.
   */
  url: string;
  /**
   * The number of attempts made to verify ownership of the phone number that is being hosted.
   */
  verificationAttempts: number;
  /**
   * A list of 34 character strings that are unique identifiers for the calls placed as part of ownership verification.
   */
  verificationCallSids: string;
  /**
   * A verification code provided in the response for a user to enter when they pick up the phone call.
   */
  verificationCode: string;
  /**
   * A 34 character string that uniquely identifies the Identity Document resource that represents the document for verifying ownership of the number to be hosted.
   */
  verificationDocumentSid: string;
  /**
   * The type of ownership verification required to move the number to a `verified` state. The verification methods are `phone-call` or `phone-bill`.
   */
  verificationType: HostedNumberOrderVerificationType;
}

declare class HostedNumberOrderContext {
  constructor(version: HostedNumbers, sid: string);

  /**
   * fetch a HostedNumberOrderInstance
   *
   * @returns Promise that resolves to processed HostedNumberOrderInstance
   */
  fetch(): Promise<HostedNumberOrderInstance>;
  /**
   * fetch a HostedNumberOrderInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: HostedNumberOrderInstance) => any): void;
  /**
   * remove a HostedNumberOrderInstance
   *
   * @returns Promise that resolves to processed HostedNumberOrderInstance
   */
  remove(): Promise<HostedNumberOrderInstance>;
  /**
   * remove a HostedNumberOrderInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: HostedNumberOrderInstance) => any): void;
  /**
   * update a HostedNumberOrderInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed HostedNumberOrderInstance
   */
  update(opts?: HostedNumberOrderListFetchOptions): Promise<HostedNumberOrderInstance>;
  /**
   * update a HostedNumberOrderInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: HostedNumberOrderListFetchOptions, callback: (error: Error | null, items: HostedNumberOrderInstance) => any): void;
  /**
   * update a HostedNumberOrderInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: HostedNumberOrderInstance) => any): void;
}

export { HostedNumberOrderContext, HostedNumberOrderInstance, HostedNumberOrderList, HostedNumberOrderListCreateOptions, HostedNumberOrderListEachOptions, HostedNumberOrderListFetchOptions, HostedNumberOrderListInstance, HostedNumberOrderListOptions, HostedNumberOrderListPageOptions, HostedNumberOrderPage, HostedNumberOrderPayload, HostedNumberOrderResource, HostedNumberOrderSolution, HostedNumberOrderStatus, HostedNumberOrderVerificationType }
