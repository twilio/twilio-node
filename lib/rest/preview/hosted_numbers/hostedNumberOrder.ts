/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import HostedNumbers from "../HostedNumbers";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { PhoneNumberCapabilities } from "../../../../lib/interfaces";

type HostedNumberOrderStatus =
  | "received"
  | "pending-verification"
  | "verified"
  | "pending-loa"
  | "carrier-processing"
  | "testing"
  | "completed"
  | "failed"
  | "action-required";

type HostedNumberOrderVerificationType = "phone-call" | "phone-bill";

/**
 * Options to pass to update a HostedNumberOrderInstance
 *
 * @property { string } [friendlyName] A 64 character string that is a human readable text that describes this resource.
 * @property { string } [uniqueName] Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
 * @property { string } [email] Email of the owner of this phone number that is being hosted.
 * @property { Array<string> } [ccEmails] Optional. A list of emails that LOA document for this HostedNumberOrder will be carbon copied to.
 * @property { HostedNumberOrderStatus } [status]
 * @property { string } [verificationCode] A verification code that is given to the user via a phone call to the phone number that is being hosted.
 * @property { HostedNumberOrderVerificationType } [verificationType]
 * @property { string } [verificationDocumentSid] Optional. The unique sid identifier of the Identity Document that represents the document for verifying ownership of the number to be hosted. Required when VerificationType is phone-bill.
 * @property { string } [extension] Digits to dial after connecting the verification call.
 * @property { number } [callDelay] The number of seconds, between 0 and 60, to delay before initiating the verification call. Defaults to 0.
 */
export interface HostedNumberOrderContextUpdateOptions {
  friendlyName?: string;
  uniqueName?: string;
  email?: string;
  ccEmails?: Array<string>;
  status?: HostedNumberOrderStatus;
  verificationCode?: string;
  verificationType?: HostedNumberOrderVerificationType;
  verificationDocumentSid?: string;
  extension?: string;
  callDelay?: number;
}

/**
 * Options to pass to create a HostedNumberOrderInstance
 *
 * @property { string } phoneNumber The number to host in [+E.164](https://en.wikipedia.org/wiki/E.164) format
 * @property { boolean } smsCapability Used to specify that the SMS capability will be hosted on Twilio\\\'s platform.
 * @property { string } [accountSid] This defaults to the AccountSid of the authorization the user is using. This can be provided to specify a subaccount to add the HostedNumberOrder to.
 * @property { string } [friendlyName] A 64 character string that is a human readable text that describes this resource.
 * @property { string } [uniqueName] Optional. Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
 * @property { Array<string> } [ccEmails] Optional. A list of emails that the LOA document for this HostedNumberOrder will be carbon copied to.
 * @property { string } [smsUrl] The URL that Twilio should request when somebody sends an SMS to the phone number. This will be copied onto the IncomingPhoneNumber resource.
 * @property { string } [smsMethod] The HTTP method that should be used to request the SmsUrl. Must be either `GET` or `POST`.  This will be copied onto the IncomingPhoneNumber resource.
 * @property { string } [smsFallbackUrl] A URL that Twilio will request if an error occurs requesting or executing the TwiML defined by SmsUrl. This will be copied onto the IncomingPhoneNumber resource.
 * @property { string } [smsFallbackMethod] The HTTP method that should be used to request the SmsFallbackUrl. Must be either `GET` or `POST`. This will be copied onto the IncomingPhoneNumber resource.
 * @property { string } [statusCallbackUrl] Optional. The Status Callback URL attached to the IncomingPhoneNumber resource.
 * @property { string } [statusCallbackMethod] Optional. The Status Callback Method attached to the IncomingPhoneNumber resource.
 * @property { string } [smsApplicationSid] Optional. The 34 character sid of the application Twilio should use to handle SMS messages sent to this number. If a `SmsApplicationSid` is present, Twilio will ignore all of the SMS urls above and use those set on the application.
 * @property { string } [addressSid] Optional. A 34 character string that uniquely identifies the Address resource that represents the address of the owner of this phone number.
 * @property { string } [email] Optional. Email of the owner of this phone number that is being hosted.
 * @property { HostedNumberOrderVerificationType } [verificationType]
 * @property { string } [verificationDocumentSid] Optional. The unique sid identifier of the Identity Document that represents the document for verifying ownership of the number to be hosted. Required when VerificationType is phone-bill.
 */
export interface HostedNumberOrderListInstanceCreateOptions {
  phoneNumber: string;
  smsCapability: boolean;
  accountSid?: string;
  friendlyName?: string;
  uniqueName?: string;
  ccEmails?: Array<string>;
  smsUrl?: string;
  smsMethod?: string;
  smsFallbackUrl?: string;
  smsFallbackMethod?: string;
  statusCallbackUrl?: string;
  statusCallbackMethod?: string;
  smsApplicationSid?: string;
  addressSid?: string;
  email?: string;
  verificationType?: HostedNumberOrderVerificationType;
  verificationDocumentSid?: string;
}
/**
 * Options to pass to each
 *
 * @property { HostedNumberOrderStatus } [status] The Status of this HostedNumberOrder. One of `received`, `pending-verification`, `verified`, `pending-loa`, `carrier-processing`, `testing`, `completed`, `failed`, or `action-required`.
 * @property { string } [phoneNumber] An E164 formatted phone number hosted by this HostedNumberOrder.
 * @property { string } [incomingPhoneNumberSid] A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder.
 * @property { string } [friendlyName] A human readable description of this resource, up to 64 characters.
 * @property { string } [uniqueName] Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface HostedNumberOrderListInstanceEachOptions {
  status?: HostedNumberOrderStatus;
  phoneNumber?: string;
  incomingPhoneNumberSid?: string;
  friendlyName?: string;
  uniqueName?: string;
  pageSize?: number;
  callback?: (
    item: HostedNumberOrderInstance,
    done: (err?: Error) => void
  ) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { HostedNumberOrderStatus } [status] The Status of this HostedNumberOrder. One of `received`, `pending-verification`, `verified`, `pending-loa`, `carrier-processing`, `testing`, `completed`, `failed`, or `action-required`.
 * @property { string } [phoneNumber] An E164 formatted phone number hosted by this HostedNumberOrder.
 * @property { string } [incomingPhoneNumberSid] A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder.
 * @property { string } [friendlyName] A human readable description of this resource, up to 64 characters.
 * @property { string } [uniqueName] Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface HostedNumberOrderListInstanceOptions {
  status?: HostedNumberOrderStatus;
  phoneNumber?: string;
  incomingPhoneNumberSid?: string;
  friendlyName?: string;
  uniqueName?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { HostedNumberOrderStatus } [status] The Status of this HostedNumberOrder. One of `received`, `pending-verification`, `verified`, `pending-loa`, `carrier-processing`, `testing`, `completed`, `failed`, or `action-required`.
 * @property { string } [phoneNumber] An E164 formatted phone number hosted by this HostedNumberOrder.
 * @property { string } [incomingPhoneNumberSid] A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder.
 * @property { string } [friendlyName] A human readable description of this resource, up to 64 characters.
 * @property { string } [uniqueName] Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface HostedNumberOrderListInstancePageOptions {
  status?: HostedNumberOrderStatus;
  phoneNumber?: string;
  incomingPhoneNumberSid?: string;
  friendlyName?: string;
  uniqueName?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface HostedNumberOrderContext {
  /**
   * Remove a HostedNumberOrderInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a HostedNumberOrderInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed HostedNumberOrderInstance
   */
  fetch(
    callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any
  ): Promise<HostedNumberOrderInstance>;

  /**
   * Update a HostedNumberOrderInstance
   *
   * @param { HostedNumberOrderContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed HostedNumberOrderInstance
   */
  update(
    params?:
      | HostedNumberOrderContextUpdateOptions
      | ((error: Error | null, item?: HostedNumberOrderInstance) => any),
    callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any
  ): Promise<HostedNumberOrderInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface HostedNumberOrderContextSolution {
  sid?: string;
}

export class HostedNumberOrderContextImpl implements HostedNumberOrderContext {
  protected _solution: HostedNumberOrderContextSolution;
  protected _uri: string;

  constructor(protected _version: HostedNumbers, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/HostedNumberOrders/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
    let operationVersion = this._version,
      operationPromise = operationVersion.remove({
        uri: this._uri,
        method: "delete",
      });

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<HostedNumberOrderInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new HostedNumberOrderInstance(
          operationVersion,
          payload,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<HostedNumberOrderInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["email"] !== undefined) data["Email"] = params["email"];
    if (params["ccEmails"] !== undefined)
      data["CcEmails"] = serialize.map(params["ccEmails"], (e) => e);
    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["verificationCode"] !== undefined)
      data["VerificationCode"] = params["verificationCode"];
    if (params["verificationType"] !== undefined)
      data["VerificationType"] = params["verificationType"];
    if (params["verificationDocumentSid"] !== undefined)
      data["VerificationDocumentSid"] = params["verificationDocumentSid"];
    if (params["extension"] !== undefined)
      data["Extension"] = params["extension"];
    if (params["callDelay"] !== undefined)
      data["CallDelay"] = params["callDelay"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = this._version,
      operationPromise = operationVersion.update({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new HostedNumberOrderInstance(
          operationVersion,
          payload,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface HostedNumberOrderPayload extends TwilioResponsePayload {
  items: HostedNumberOrderResource[];
}

interface HostedNumberOrderResource {
  sid?: string | null;
  account_sid?: string | null;
  incoming_phone_number_sid?: string | null;
  address_sid?: string | null;
  signing_document_sid?: string | null;
  phone_number?: string | null;
  capabilities?: PhoneNumberCapabilities | null;
  friendly_name?: string | null;
  unique_name?: string | null;
  status?: HostedNumberOrderStatus;
  failure_reason?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  verification_attempts?: number | null;
  email?: string | null;
  cc_emails?: Array<string> | null;
  url?: string | null;
  verification_type?: HostedNumberOrderVerificationType;
  verification_document_sid?: string | null;
  extension?: string | null;
  call_delay?: number | null;
  verification_code?: string | null;
  verification_call_sids?: Array<string> | null;
}

export class HostedNumberOrderInstance {
  protected _solution: HostedNumberOrderContextSolution;
  protected _context?: HostedNumberOrderContext;

  constructor(
    protected _version: HostedNumbers,
    payload: HostedNumberOrderResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.incomingPhoneNumberSid = payload.incoming_phone_number_sid;
    this.addressSid = payload.address_sid;
    this.signingDocumentSid = payload.signing_document_sid;
    this.phoneNumber = payload.phone_number;
    this.capabilities = payload.capabilities;
    this.friendlyName = payload.friendly_name;
    this.uniqueName = payload.unique_name;
    this.status = payload.status;
    this.failureReason = payload.failure_reason;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.verificationAttempts = deserialize.integer(
      payload.verification_attempts
    );
    this.email = payload.email;
    this.ccEmails = payload.cc_emails;
    this.url = payload.url;
    this.verificationType = payload.verification_type;
    this.verificationDocumentSid = payload.verification_document_sid;
    this.extension = payload.extension;
    this.callDelay = deserialize.integer(payload.call_delay);
    this.verificationCode = payload.verification_code;
    this.verificationCallSids = payload.verification_call_sids;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * HostedNumberOrder sid.
   */
  sid?: string | null;
  /**
   * Account Sid.
   */
  accountSid?: string | null;
  /**
   * IncomingPhoneNumber sid.
   */
  incomingPhoneNumberSid?: string | null;
  /**
   * Address sid.
   */
  addressSid?: string | null;
  /**
   * LOA document sid.
   */
  signingDocumentSid?: string | null;
  /**
   * An E164 formatted phone number.
   */
  phoneNumber?: string | null;
  capabilities?: PhoneNumberCapabilities | null;
  /**
   * A human readable description of this resource.
   */
  friendlyName?: string | null;
  /**
   * A unique, developer assigned name of this HostedNumberOrder.
   */
  uniqueName?: string | null;
  status?: HostedNumberOrderStatus;
  /**
   * Why a hosted_number_order reached status \"action-required\"
   */
  failureReason?: string | null;
  /**
   * The date this HostedNumberOrder was created.
   */
  dateCreated?: Date | null;
  /**
   * The date this HostedNumberOrder was updated.
   */
  dateUpdated?: Date | null;
  /**
   * The number of attempts made to verify ownership of the phone number.
   */
  verificationAttempts?: number | null;
  /**
   * Email.
   */
  email?: string | null;
  /**
   * A list of emails.
   */
  ccEmails?: Array<string> | null;
  /**
   * The URL of this HostedNumberOrder.
   */
  url?: string | null;
  verificationType?: HostedNumberOrderVerificationType;
  /**
   * Verification Document Sid.
   */
  verificationDocumentSid?: string | null;
  /**
   * Phone extension to use for ownership verification call.
   */
  extension?: string | null;
  /**
   * Seconds (0-30) to delay ownership verification call by.
   */
  callDelay?: number | null;
  /**
   * The digits passed during the ownership verification call.
   */
  verificationCode?: string | null;
  /**
   * List of IDs for ownership verification calls.
   */
  verificationCallSids?: Array<string> | null;

  private get _proxy(): HostedNumberOrderContext {
    this._context =
      this._context ||
      new HostedNumberOrderContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a HostedNumberOrderInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a HostedNumberOrderInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed HostedNumberOrderInstance
   */
  fetch(
    callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any
  ): Promise<HostedNumberOrderInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a HostedNumberOrderInstance
   *
   * @param { HostedNumberOrderContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed HostedNumberOrderInstance
   */
  update(
    params?:
      | HostedNumberOrderContextUpdateOptions
      | ((error: Error | null, item?: HostedNumberOrderInstance) => any),
    callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any
  ): Promise<HostedNumberOrderInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      incomingPhoneNumberSid: this.incomingPhoneNumberSid,
      addressSid: this.addressSid,
      signingDocumentSid: this.signingDocumentSid,
      phoneNumber: this.phoneNumber,
      capabilities: this.capabilities,
      friendlyName: this.friendlyName,
      uniqueName: this.uniqueName,
      status: this.status,
      failureReason: this.failureReason,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      verificationAttempts: this.verificationAttempts,
      email: this.email,
      ccEmails: this.ccEmails,
      url: this.url,
      verificationType: this.verificationType,
      verificationDocumentSid: this.verificationDocumentSid,
      extension: this.extension,
      callDelay: this.callDelay,
      verificationCode: this.verificationCode,
      verificationCallSids: this.verificationCallSids,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface HostedNumberOrderListInstance {
  (sid: string): HostedNumberOrderContext;
  get(sid: string): HostedNumberOrderContext;

  /**
   * Create a HostedNumberOrderInstance
   *
   * @param { HostedNumberOrderListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed HostedNumberOrderInstance
   */
  create(
    params: HostedNumberOrderListInstanceCreateOptions,
    callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any
  ): Promise<HostedNumberOrderInstance>;

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
   * @param { HostedNumberOrderListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | HostedNumberOrderListInstanceEachOptions
      | ((
          item: HostedNumberOrderInstance,
          done: (err?: Error) => void
        ) => void),
    callback?: (
      item: HostedNumberOrderInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of HostedNumberOrderInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: HostedNumberOrderPage) => any
  ): Promise<HostedNumberOrderPage>;
  /**
   * Lists HostedNumberOrderInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { HostedNumberOrderListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | HostedNumberOrderListInstanceOptions
      | ((error: Error | null, items: HostedNumberOrderInstance[]) => any),
    callback?: (error: Error | null, items: HostedNumberOrderInstance[]) => any
  ): Promise<HostedNumberOrderInstance[]>;
  /**
   * Retrieve a single page of HostedNumberOrderInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { HostedNumberOrderListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | HostedNumberOrderListInstancePageOptions
      | ((error: Error | null, items: HostedNumberOrderPage) => any),
    callback?: (error: Error | null, items: HostedNumberOrderPage) => any
  ): Promise<HostedNumberOrderPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface HostedNumberOrderSolution {}

interface HostedNumberOrderListInstanceImpl
  extends HostedNumberOrderListInstance {}
class HostedNumberOrderListInstanceImpl
  implements HostedNumberOrderListInstance
{
  _version?: HostedNumbers;
  _solution?: HostedNumberOrderSolution;
  _uri?: string;
}

export function HostedNumberOrderListInstance(
  version: HostedNumbers
): HostedNumberOrderListInstance {
  const instance = ((sid) =>
    instance.get(sid)) as HostedNumberOrderListInstanceImpl;

  instance.get = function get(sid): HostedNumberOrderContext {
    return new HostedNumberOrderContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/HostedNumberOrders`;

  instance.create = function create(
    params: HostedNumberOrderListInstanceCreateOptions,
    callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any
  ): Promise<HostedNumberOrderInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["phoneNumber"] === null || params["phoneNumber"] === undefined) {
      throw new Error("Required parameter \"params['phoneNumber']\" missing.");
    }

    if (
      params["smsCapability"] === null ||
      params["smsCapability"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['smsCapability']\" missing."
      );
    }

    let data: any = {};

    data["PhoneNumber"] = params["phoneNumber"];

    data["SmsCapability"] = serialize.bool(params["smsCapability"]);
    if (params["accountSid"] !== undefined)
      data["AccountSid"] = params["accountSid"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["ccEmails"] !== undefined)
      data["CcEmails"] = serialize.map(params["ccEmails"], (e) => e);
    if (params["smsUrl"] !== undefined) data["SmsUrl"] = params["smsUrl"];
    if (params["smsMethod"] !== undefined)
      data["SmsMethod"] = params["smsMethod"];
    if (params["smsFallbackUrl"] !== undefined)
      data["SmsFallbackUrl"] = params["smsFallbackUrl"];
    if (params["smsFallbackMethod"] !== undefined)
      data["SmsFallbackMethod"] = params["smsFallbackMethod"];
    if (params["statusCallbackUrl"] !== undefined)
      data["StatusCallbackUrl"] = params["statusCallbackUrl"];
    if (params["statusCallbackMethod"] !== undefined)
      data["StatusCallbackMethod"] = params["statusCallbackMethod"];
    if (params["smsApplicationSid"] !== undefined)
      data["SmsApplicationSid"] = params["smsApplicationSid"];
    if (params["addressSid"] !== undefined)
      data["AddressSid"] = params["addressSid"];
    if (params["email"] !== undefined) data["Email"] = params["email"];
    if (params["verificationType"] !== undefined)
      data["VerificationType"] = params["verificationType"];
    if (params["verificationDocumentSid"] !== undefined)
      data["VerificationDocumentSid"] = params["verificationDocumentSid"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new HostedNumberOrderInstance(operationVersion, payload)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | HostedNumberOrderListInstancePageOptions
      | ((error: Error | null, item?: HostedNumberOrderPage) => any),
    callback?: (error: Error | null, item?: HostedNumberOrderPage) => any
  ): Promise<HostedNumberOrderPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["phoneNumber"] !== undefined)
      data["PhoneNumber"] = params["phoneNumber"];
    if (params["incomingPhoneNumberSid"] !== undefined)
      data["IncomingPhoneNumberSid"] = params["incomingPhoneNumberSid"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new HostedNumberOrderPage(operationVersion, payload, this._solution)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: HostedNumberOrderPage) => any
  ): Promise<HostedNumberOrderPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new HostedNumberOrderPage(this._version, payload, this._solution)
    );
    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.toJSON = function toJSON() {
    return this._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(this.toJSON(), options);
  };

  return instance;
}

export class HostedNumberOrderPage extends Page<
  HostedNumbers,
  HostedNumberOrderPayload,
  HostedNumberOrderResource,
  HostedNumberOrderInstance
> {
  /**
   * Initialize the HostedNumberOrderPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: HostedNumbers,
    response: Response<string>,
    solution: HostedNumberOrderSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of HostedNumberOrderInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: HostedNumberOrderResource): HostedNumberOrderInstance {
    return new HostedNumberOrderInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
