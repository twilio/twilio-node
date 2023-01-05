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
 */
export interface HostedNumberOrderContextUpdateOptions {
  /** A 64 character string that is a human readable text that describes this resource. */
  friendlyName?: string;
  /** Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID. */
  uniqueName?: string;
  /** Email of the owner of this phone number that is being hosted. */
  email?: string;
  /** Optional. A list of emails that LOA document for this HostedNumberOrder will be carbon copied to. */
  ccEmails?: Array<string>;
  /**  */
  status?: HostedNumberOrderStatus;
  /** A verification code that is given to the user via a phone call to the phone number that is being hosted. */
  verificationCode?: string;
  /**  */
  verificationType?: HostedNumberOrderVerificationType;
  /** Optional. The unique sid identifier of the Identity Document that represents the document for verifying ownership of the number to be hosted. Required when VerificationType is phone-bill. */
  verificationDocumentSid?: string;
  /** Digits to dial after connecting the verification call. */
  extension?: string;
  /** The number of seconds, between 0 and 60, to delay before initiating the verification call. Defaults to 0. */
  callDelay?: number;
}

/**
 * Options to pass to create a HostedNumberOrderInstance
 */
export interface HostedNumberOrderListInstanceCreateOptions {
  /** The number to host in [+E.164](https://en.wikipedia.org/wiki/E.164) format */
  phoneNumber: string;
  /** Used to specify that the SMS capability will be hosted on Twilio\\\'s platform. */
  smsCapability: boolean;
  /** This defaults to the AccountSid of the authorization the user is using. This can be provided to specify a subaccount to add the HostedNumberOrder to. */
  accountSid?: string;
  /** A 64 character string that is a human readable text that describes this resource. */
  friendlyName?: string;
  /** Optional. Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID. */
  uniqueName?: string;
  /** Optional. A list of emails that the LOA document for this HostedNumberOrder will be carbon copied to. */
  ccEmails?: Array<string>;
  /** The URL that Twilio should request when somebody sends an SMS to the phone number. This will be copied onto the IncomingPhoneNumber resource. */
  smsUrl?: string;
  /** The HTTP method that should be used to request the SmsUrl. Must be either `GET` or `POST`.  This will be copied onto the IncomingPhoneNumber resource. */
  smsMethod?: string;
  /** A URL that Twilio will request if an error occurs requesting or executing the TwiML defined by SmsUrl. This will be copied onto the IncomingPhoneNumber resource. */
  smsFallbackUrl?: string;
  /** The HTTP method that should be used to request the SmsFallbackUrl. Must be either `GET` or `POST`. This will be copied onto the IncomingPhoneNumber resource. */
  smsFallbackMethod?: string;
  /** Optional. The Status Callback URL attached to the IncomingPhoneNumber resource. */
  statusCallbackUrl?: string;
  /** Optional. The Status Callback Method attached to the IncomingPhoneNumber resource. */
  statusCallbackMethod?: string;
  /** Optional. The 34 character sid of the application Twilio should use to handle SMS messages sent to this number. If a `SmsApplicationSid` is present, Twilio will ignore all of the SMS urls above and use those set on the application. */
  smsApplicationSid?: string;
  /** Optional. A 34 character string that uniquely identifies the Address resource that represents the address of the owner of this phone number. */
  addressSid?: string;
  /** Optional. Email of the owner of this phone number that is being hosted. */
  email?: string;
  /**  */
  verificationType?: HostedNumberOrderVerificationType;
  /** Optional. The unique sid identifier of the Identity Document that represents the document for verifying ownership of the number to be hosted. Required when VerificationType is phone-bill. */
  verificationDocumentSid?: string;
}
/**
 * Options to pass to each
 */
export interface HostedNumberOrderListInstanceEachOptions {
  /** The Status of this HostedNumberOrder. One of `received`, `pending-verification`, `verified`, `pending-loa`, `carrier-processing`, `testing`, `completed`, `failed`, or `action-required`. */
  status?: HostedNumberOrderStatus;
  /** An E164 formatted phone number hosted by this HostedNumberOrder. */
  phoneNumber?: string;
  /** A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder. */
  incomingPhoneNumberSid?: string;
  /** A human readable description of this resource, up to 64 characters. */
  friendlyName?: string;
  /** Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID. */
  uniqueName?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: HostedNumberOrderInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface HostedNumberOrderListInstanceOptions {
  /** The Status of this HostedNumberOrder. One of `received`, `pending-verification`, `verified`, `pending-loa`, `carrier-processing`, `testing`, `completed`, `failed`, or `action-required`. */
  status?: HostedNumberOrderStatus;
  /** An E164 formatted phone number hosted by this HostedNumberOrder. */
  phoneNumber?: string;
  /** A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder. */
  incomingPhoneNumberSid?: string;
  /** A human readable description of this resource, up to 64 characters. */
  friendlyName?: string;
  /** Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID. */
  uniqueName?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface HostedNumberOrderListInstancePageOptions {
  /** The Status of this HostedNumberOrder. One of `received`, `pending-verification`, `verified`, `pending-loa`, `carrier-processing`, `testing`, `completed`, `failed`, or `action-required`. */
  status?: HostedNumberOrderStatus;
  /** An E164 formatted phone number hosted by this HostedNumberOrder. */
  phoneNumber?: string;
  /** A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder. */
  incomingPhoneNumberSid?: string;
  /** A human readable description of this resource, up to 64 characters. */
  friendlyName?: string;
  /** Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID. */
  uniqueName?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface HostedNumberOrderContext {
  /**
   * Remove a HostedNumberOrderInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a HostedNumberOrderInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed HostedNumberOrderInstance
   */
  fetch(
    callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any
  ): Promise<HostedNumberOrderInstance>;

  /**
   * Update a HostedNumberOrderInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed HostedNumberOrderInstance
   */
  update(
    callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any
  ): Promise<HostedNumberOrderInstance>;
  /**
   * Update a HostedNumberOrderInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed HostedNumberOrderInstance
   */
  update(
    params: HostedNumberOrderContextUpdateOptions,
    callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any
  ): Promise<HostedNumberOrderInstance>;
  update(params?: any, callback?: any): Promise<HostedNumberOrderInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface HostedNumberOrderContextSolution {
  sid: string;
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
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<HostedNumberOrderInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new HostedNumberOrderInstance(
          operationVersion,
          payload,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
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
      data["CcEmails"] = serialize.map(params["ccEmails"], (e: string) => e);
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

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new HostedNumberOrderInstance(
          operationVersion,
          payload,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
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
  sid: string;
  account_sid: string;
  incoming_phone_number_sid: string;
  address_sid: string;
  signing_document_sid: string;
  phone_number: string;
  capabilities: PhoneNumberCapabilities;
  friendly_name: string;
  unique_name: string;
  status: HostedNumberOrderStatus;
  failure_reason: string;
  date_created: Date;
  date_updated: Date;
  verification_attempts: number;
  email: string;
  cc_emails: Array<string>;
  url: string;
  verification_type: HostedNumberOrderVerificationType;
  verification_document_sid: string;
  extension: string;
  call_delay: number;
  verification_code: string;
  verification_call_sids: Array<string>;
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
  sid: string;
  /**
   * Account Sid.
   */
  accountSid: string;
  /**
   * IncomingPhoneNumber sid.
   */
  incomingPhoneNumberSid: string;
  /**
   * Address sid.
   */
  addressSid: string;
  /**
   * LOA document sid.
   */
  signingDocumentSid: string;
  /**
   * An E164 formatted phone number.
   */
  phoneNumber: string;
  capabilities: PhoneNumberCapabilities;
  /**
   * A human readable description of this resource.
   */
  friendlyName: string;
  /**
   * A unique, developer assigned name of this HostedNumberOrder.
   */
  uniqueName: string;
  status: HostedNumberOrderStatus;
  /**
   * Why a hosted_number_order reached status \"action-required\"
   */
  failureReason: string;
  /**
   * The date this HostedNumberOrder was created.
   */
  dateCreated: Date;
  /**
   * The date this HostedNumberOrder was updated.
   */
  dateUpdated: Date;
  /**
   * The number of attempts made to verify ownership of the phone number.
   */
  verificationAttempts: number;
  /**
   * Email.
   */
  email: string;
  /**
   * A list of emails.
   */
  ccEmails: Array<string>;
  /**
   * The URL of this HostedNumberOrder.
   */
  url: string;
  verificationType: HostedNumberOrderVerificationType;
  /**
   * Verification Document Sid.
   */
  verificationDocumentSid: string;
  /**
   * Phone extension to use for ownership verification call.
   */
  extension: string;
  /**
   * Seconds (0-30) to delay ownership verification call by.
   */
  callDelay: number;
  /**
   * The digits passed during the ownership verification call.
   */
  verificationCode: string;
  /**
   * List of IDs for ownership verification calls.
   */
  verificationCallSids: Array<string>;

  private get _proxy(): HostedNumberOrderContext {
    this._context =
      this._context ||
      new HostedNumberOrderContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a HostedNumberOrderInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a HostedNumberOrderInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed HostedNumberOrderInstance
   */
  fetch(
    callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any
  ): Promise<HostedNumberOrderInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a HostedNumberOrderInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed HostedNumberOrderInstance
   */
  update(
    callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any
  ): Promise<HostedNumberOrderInstance>;
  /**
   * Update a HostedNumberOrderInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed HostedNumberOrderInstance
   */
  update(
    params: HostedNumberOrderContextUpdateOptions,
    callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any
  ): Promise<HostedNumberOrderInstance>;
  update(params?: any, callback?: any): Promise<HostedNumberOrderInstance> {
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

export interface HostedNumberOrderSolution {}

export interface HostedNumberOrderListInstance {
  _version: HostedNumbers;
  _solution: HostedNumberOrderSolution;
  _uri: string;

  (sid: string): HostedNumberOrderContext;
  get(sid: string): HostedNumberOrderContext;

  /**
   * Create a HostedNumberOrderInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed HostedNumberOrderInstance
   */
  create(
    params: HostedNumberOrderListInstanceCreateOptions,
    callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any
  ): Promise<HostedNumberOrderInstance>;
  create(params: any, callback?: any): Promise<HostedNumberOrderInstance>;

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
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: HostedNumberOrderInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
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
    params?: HostedNumberOrderListInstanceEachOptions,
    callback?: (
      item: HostedNumberOrderInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of HostedNumberOrderInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: HostedNumberOrderPage) => any
  ): Promise<HostedNumberOrderPage>;
  /**
   * Retrieve a single target page of HostedNumberOrderInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl?: string,
    callback?: (error: Error | null, items: HostedNumberOrderPage) => any
  ): Promise<HostedNumberOrderPage>;
  getPage(params?: any, callback?: any): Promise<HostedNumberOrderPage>;
  /**
   * Lists HostedNumberOrderInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: HostedNumberOrderInstance[]) => any
  ): Promise<HostedNumberOrderInstance[]>;
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
    params?: HostedNumberOrderListInstanceOptions,
    callback?: (error: Error | null, items: HostedNumberOrderInstance[]) => any
  ): Promise<HostedNumberOrderInstance[]>;
  list(params?: any, callback?: any): Promise<HostedNumberOrderInstance[]>;
  /**
   * Retrieve a single page of HostedNumberOrderInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: HostedNumberOrderPage) => any
  ): Promise<HostedNumberOrderPage>;
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
    params: HostedNumberOrderListInstancePageOptions,
    callback?: (error: Error | null, items: HostedNumberOrderPage) => any
  ): Promise<HostedNumberOrderPage>;
  page(params?: any, callback?: any): Promise<HostedNumberOrderPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function HostedNumberOrderListInstance(
  version: HostedNumbers
): HostedNumberOrderListInstance {
  const instance = ((sid) =>
    instance.get(sid)) as HostedNumberOrderListInstance;

  instance.get = function get(sid): HostedNumberOrderContext {
    return new HostedNumberOrderContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/HostedNumberOrders`;

  instance.create = function create(
    params: any,
    callback?: any
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
      data["CcEmails"] = serialize.map(params["ccEmails"], (e: string) => e);
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
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new HostedNumberOrderInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?: any,
    callback?: any
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

    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new HostedNumberOrderPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl?: any,
    callback?: any
  ): Promise<HostedNumberOrderPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new HostedNumberOrderPage(
          instance._version,
          payload,
          instance._solution
        )
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
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
