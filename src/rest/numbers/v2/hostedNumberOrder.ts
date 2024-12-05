/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Numbers
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { PhoneNumberCapabilities } from "../../../interfaces";

export type HostedNumberOrderStatus =
  | "received"
  | "pending-verification"
  | "verified"
  | "pending-loa"
  | "carrier-processing"
  | "completed"
  | "failed"
  | "action-required";

export type HostedNumberOrderVerificationType = "phone-call";

/**
 * Options to pass to update a HostedNumberOrderInstance
 */
export interface HostedNumberOrderContextUpdateOptions {
  /**  */
  status: HostedNumberOrderStatus;
  /** The number of seconds to wait before initiating the ownership verification call. Can be a value between 0 and 60, inclusive. */
  verificationCallDelay?: number;
  /** The numerical extension to dial when making the ownership verification call. */
  verificationCallExtension?: string;
}

/**
 * Options to pass to create a HostedNumberOrderInstance
 */
export interface HostedNumberOrderListInstanceCreateOptions {
  /** The number to host in [+E.164](https://en.wikipedia.org/wiki/E.164) format */
  phoneNumber: string;
  /** The contact phone number of the person authorized to sign the Authorization Document. */
  contactPhoneNumber: string;
  /** Optional. A 34 character string that uniquely identifies the Address resource that represents the address of the owner of this phone number. */
  addressSid: string;
  /** Optional. Email of the owner of this phone number that is being hosted. */
  email: string;
  /** This defaults to the AccountSid of the authorization the user is using. This can be provided to specify a subaccount to add the HostedNumberOrder to. */
  accountSid?: string;
  /** A 128 character string that is a human readable text that describes this resource. */
  friendlyName?: string;
  /** Optional. A list of emails that the LOA document for this HostedNumberOrder will be carbon copied to. */
  ccEmails?: Array<string>;
  /** The URL that Twilio should request when somebody sends an SMS to the phone number. This will be copied onto the IncomingPhoneNumber resource. */
  smsUrl?: string;
  /** The HTTP method that should be used to request the SmsUrl. Must be either `GET` or `POST`.  This will be copied onto the IncomingPhoneNumber resource. */
  smsMethod?: string;
  /** A URL that Twilio will request if an error occurs requesting or executing the TwiML defined by SmsUrl. This will be copied onto the IncomingPhoneNumber resource. */
  smsFallbackUrl?: string;
  /** Used to specify that the SMS capability will be hosted on Twilio\\\'s platform. */
  smsCapability?: boolean;
  /** The HTTP method that should be used to request the SmsFallbackUrl. Must be either `GET` or `POST`. This will be copied onto the IncomingPhoneNumber resource. */
  smsFallbackMethod?: string;
  /** Optional. The Status Callback URL attached to the IncomingPhoneNumber resource. */
  statusCallbackUrl?: string;
  /** Optional. The Status Callback Method attached to the IncomingPhoneNumber resource. */
  statusCallbackMethod?: string;
  /** Optional. The 34 character sid of the application Twilio should use to handle SMS messages sent to this number. If a `SmsApplicationSid` is present, Twilio will ignore all of the SMS urls above and use those set on the application. */
  smsApplicationSid?: string;
  /** The title of the person authorized to sign the Authorization Document for this phone number. */
  contactTitle?: string;
}
/**
 * Options to pass to each
 */
export interface HostedNumberOrderListInstanceEachOptions {
  /** The Status of this HostedNumberOrder. One of `received`, `pending-verification`, `verified`, `pending-loa`, `carrier-processing`, `testing`, `completed`, `failed`, or `action-required`. */
  status?: HostedNumberOrderStatus;
  /** Whether the SMS capability will be hosted on our platform. Can be `true` of `false`. */
  smsCapability?: boolean;
  /** An E164 formatted phone number hosted by this HostedNumberOrder. */
  phoneNumber?: string;
  /** A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder. */
  incomingPhoneNumberSid?: string;
  /** A human readable description of this resource, up to 128 characters. */
  friendlyName?: string;
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
  /** Whether the SMS capability will be hosted on our platform. Can be `true` of `false`. */
  smsCapability?: boolean;
  /** An E164 formatted phone number hosted by this HostedNumberOrder. */
  phoneNumber?: string;
  /** A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder. */
  incomingPhoneNumberSid?: string;
  /** A human readable description of this resource, up to 128 characters. */
  friendlyName?: string;
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
  /** Whether the SMS capability will be hosted on our platform. Can be `true` of `false`. */
  smsCapability?: boolean;
  /** An E164 formatted phone number hosted by this HostedNumberOrder. */
  phoneNumber?: string;
  /** A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder. */
  incomingPhoneNumberSid?: string;
  /** A human readable description of this resource, up to 128 characters. */
  friendlyName?: string;
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
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed HostedNumberOrderInstance
   */
  update(
    params: HostedNumberOrderContextUpdateOptions,
    callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any
  ): Promise<HostedNumberOrderInstance>;

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

  constructor(protected _version: V2, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/HostedNumber/Orders/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
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

  fetch(
    callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any
  ): Promise<HostedNumberOrderInstance> {
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

  update(
    params: HostedNumberOrderContextUpdateOptions,
    callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any
  ): Promise<HostedNumberOrderInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["status"] === null || params["status"] === undefined) {
      throw new Error("Required parameter \"params['status']\" missing.");
    }

    let data: any = {};

    data["Status"] = params["status"];
    if (params["verificationCallDelay"] !== undefined)
      data["VerificationCallDelay"] = params["verificationCallDelay"];
    if (params["verificationCallExtension"] !== undefined)
      data["VerificationCallExtension"] = params["verificationCallExtension"];

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
  status: HostedNumberOrderStatus;
  failure_reason: string;
  date_created: Date;
  date_updated: Date;
  email: string;
  cc_emails: Array<string>;
  url: string;
  contact_title: string;
  contact_phone_number: string;
  bulk_hosting_request_sid: string;
  next_step: string;
  verification_attempts: number;
  verification_call_sids: Array<string>;
  verification_call_delay: number;
  verification_call_extension: string;
  verification_code: string;
  verification_type: HostedNumberOrderVerificationType;
}

export class HostedNumberOrderInstance {
  protected _solution: HostedNumberOrderContextSolution;
  protected _context?: HostedNumberOrderContext;

  constructor(
    protected _version: V2,
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
    this.status = payload.status;
    this.failureReason = payload.failure_reason;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.email = payload.email;
    this.ccEmails = payload.cc_emails;
    this.url = payload.url;
    this.contactTitle = payload.contact_title;
    this.contactPhoneNumber = payload.contact_phone_number;
    this.bulkHostingRequestSid = payload.bulk_hosting_request_sid;
    this.nextStep = payload.next_step;
    this.verificationAttempts = deserialize.integer(
      payload.verification_attempts
    );
    this.verificationCallSids = payload.verification_call_sids;
    this.verificationCallDelay = deserialize.integer(
      payload.verification_call_delay
    );
    this.verificationCallExtension = payload.verification_call_extension;
    this.verificationCode = payload.verification_code;
    this.verificationType = payload.verification_type;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * A 34 character string that uniquely identifies this HostedNumberOrder.
   */
  sid: string;
  /**
   * A 34 character string that uniquely identifies the account.
   */
  accountSid: string;
  /**
   * A 34 character string that uniquely identifies the [IncomingPhoneNumber](https://www.twilio.com/docs/phone-numbers/api/incomingphonenumber-resource) resource that represents the phone number being hosted.
   */
  incomingPhoneNumberSid: string;
  /**
   * A 34 character string that uniquely identifies the Address resource that represents the address of the owner of this phone number.
   */
  addressSid: string;
  /**
   * A 34 character string that uniquely identifies the [Authorization Document](https://www.twilio.com/docs/phone-numbers/hosted-numbers/hosted-numbers-api/authorization-document-resource) the user needs to sign.
   */
  signingDocumentSid: string;
  /**
   * Phone number to be hosted. This must be in [E.164](https://en.wikipedia.org/wiki/E.164) format, e.g., +16175551212
   */
  phoneNumber: string;
  capabilities: PhoneNumberCapabilities;
  /**
   * A 128 character string that is a human-readable text that describes this resource.
   */
  friendlyName: string;
  status: HostedNumberOrderStatus;
  /**
   * A message that explains why a hosted_number_order went to status \"action-required\"
   */
  failureReason: string;
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
   * A list of emails that LOA document for this HostedNumberOrder will be carbon copied to.
   */
  ccEmails: Array<string>;
  /**
   * The URL of this HostedNumberOrder.
   */
  url: string;
  /**
   * The title of the person authorized to sign the Authorization Document for this phone number.
   */
  contactTitle: string;
  /**
   * The contact phone number of the person authorized to sign the Authorization Document.
   */
  contactPhoneNumber: string;
  /**
   * A 34 character string that uniquely identifies the bulk hosting request associated with this HostedNumberOrder.
   */
  bulkHostingRequestSid: string;
  /**
   * The next step you need to take to complete the hosted number order and request it successfully.
   */
  nextStep: string;
  /**
   * The number of attempts made to verify ownership via a call for the hosted phone number.
   */
  verificationAttempts: number;
  /**
   * The Call SIDs that identify the calls placed to verify ownership.
   */
  verificationCallSids: Array<string>;
  /**
   * The number of seconds to wait before initiating the ownership verification call. Can be a value between 0 and 60, inclusive.
   */
  verificationCallDelay: number;
  /**
   * The numerical extension to dial when making the ownership verification call.
   */
  verificationCallExtension: string;
  /**
   * The digits the user must pass in the ownership verification call.
   */
  verificationCode: string;
  verificationType: HostedNumberOrderVerificationType;

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
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed HostedNumberOrderInstance
   */
  update(
    params: HostedNumberOrderContextUpdateOptions,
    callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any
  ): Promise<HostedNumberOrderInstance>;

  update(
    params?: any,
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
      status: this.status,
      failureReason: this.failureReason,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      email: this.email,
      ccEmails: this.ccEmails,
      url: this.url,
      contactTitle: this.contactTitle,
      contactPhoneNumber: this.contactPhoneNumber,
      bulkHostingRequestSid: this.bulkHostingRequestSid,
      nextStep: this.nextStep,
      verificationAttempts: this.verificationAttempts,
      verificationCallSids: this.verificationCallSids,
      verificationCallDelay: this.verificationCallDelay,
      verificationCallExtension: this.verificationCallExtension,
      verificationCode: this.verificationCode,
      verificationType: this.verificationType,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface HostedNumberOrderSolution {}

export interface HostedNumberOrderListInstance {
  _version: V2;
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
    callback?: (
      item: HostedNumberOrderInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: HostedNumberOrderListInstanceEachOptions,
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
    callback?: (error: Error | null, items: HostedNumberOrderInstance[]) => any
  ): Promise<HostedNumberOrderInstance[]>;
  list(
    params: HostedNumberOrderListInstanceOptions,
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
    callback?: (error: Error | null, items: HostedNumberOrderPage) => any
  ): Promise<HostedNumberOrderPage>;
  page(
    params: HostedNumberOrderListInstancePageOptions,
    callback?: (error: Error | null, items: HostedNumberOrderPage) => any
  ): Promise<HostedNumberOrderPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function HostedNumberOrderListInstance(
  version: V2
): HostedNumberOrderListInstance {
  const instance = ((sid) =>
    instance.get(sid)) as HostedNumberOrderListInstance;

  instance.get = function get(sid): HostedNumberOrderContext {
    return new HostedNumberOrderContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/HostedNumber/Orders`;

  instance.create = function create(
    params: HostedNumberOrderListInstanceCreateOptions,
    callback?: (error: Error | null, items: HostedNumberOrderInstance) => any
  ): Promise<HostedNumberOrderInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["phoneNumber"] === null || params["phoneNumber"] === undefined) {
      throw new Error("Required parameter \"params['phoneNumber']\" missing.");
    }

    if (
      params["contactPhoneNumber"] === null ||
      params["contactPhoneNumber"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['contactPhoneNumber']\" missing."
      );
    }

    if (params["addressSid"] === null || params["addressSid"] === undefined) {
      throw new Error("Required parameter \"params['addressSid']\" missing.");
    }

    if (params["email"] === null || params["email"] === undefined) {
      throw new Error("Required parameter \"params['email']\" missing.");
    }

    let data: any = {};

    data["PhoneNumber"] = params["phoneNumber"];

    data["ContactPhoneNumber"] = params["contactPhoneNumber"];

    data["AddressSid"] = params["addressSid"];

    data["Email"] = params["email"];
    if (params["accountSid"] !== undefined)
      data["AccountSid"] = params["accountSid"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["ccEmails"] !== undefined)
      data["CcEmails"] = serialize.map(params["ccEmails"], (e: string) => e);
    if (params["smsUrl"] !== undefined) data["SmsUrl"] = params["smsUrl"];
    if (params["smsMethod"] !== undefined)
      data["SmsMethod"] = params["smsMethod"];
    if (params["smsFallbackUrl"] !== undefined)
      data["SmsFallbackUrl"] = params["smsFallbackUrl"];
    if (params["smsCapability"] !== undefined)
      data["SmsCapability"] = serialize.bool(params["smsCapability"]);
    if (params["smsFallbackMethod"] !== undefined)
      data["SmsFallbackMethod"] = params["smsFallbackMethod"];
    if (params["statusCallbackUrl"] !== undefined)
      data["StatusCallbackUrl"] = params["statusCallbackUrl"];
    if (params["statusCallbackMethod"] !== undefined)
      data["StatusCallbackMethod"] = params["statusCallbackMethod"];
    if (params["smsApplicationSid"] !== undefined)
      data["SmsApplicationSid"] = params["smsApplicationSid"];
    if (params["contactTitle"] !== undefined)
      data["ContactTitle"] = params["contactTitle"];

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
    params?:
      | HostedNumberOrderListInstancePageOptions
      | ((error: Error | null, items: HostedNumberOrderPage) => any),
    callback?: (error: Error | null, items: HostedNumberOrderPage) => any
  ): Promise<HostedNumberOrderPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["smsCapability"] !== undefined)
      data["SmsCapability"] = serialize.bool(params["smsCapability"]);
    if (params["phoneNumber"] !== undefined)
      data["PhoneNumber"] = params["phoneNumber"];
    if (params["incomingPhoneNumberSid"] !== undefined)
      data["IncomingPhoneNumberSid"] = params["incomingPhoneNumberSid"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
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
    targetUrl: string,
    callback?: (error: Error | null, items: HostedNumberOrderPage) => any
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
  V2,
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
    version: V2,
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
