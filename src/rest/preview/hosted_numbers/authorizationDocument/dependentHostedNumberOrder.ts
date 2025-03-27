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
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import HostedNumbers from "../../HostedNumbers";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import {
  PhoneNumberCapabilities,
  PhoneNumberCapabilitiesResource,
} from "../../../../interfaces";

/**
 * Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status Values](https://www.twilio.com/docs/phone-numbers/hosted-numbers/hosted-numbers-api/authorization-document-resource#status-values) for more information on each of these statuses.
 */
export type DependentHostedNumberOrderStatus =
  | "received"
  | "pending-verification"
  | "verified"
  | "pending-loa"
  | "carrier-processing"
  | "testing"
  | "completed"
  | "failed"
  | "action-required";

/**
 * The method used for verifying ownership of the number to be hosted. One of phone-call (default) or phone-bill.
 */
export type DependentHostedNumberOrderVerificationType =
  | "phone-call"
  | "phone-bill";

/**
 * Options to pass to each
 */
export interface DependentHostedNumberOrderListInstanceEachOptions {
  /** Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status Values](https://www.twilio.com/docs/phone-numbers/hosted-numbers/hosted-numbers-api/authorization-document-resource#status-values) for more information on each of these statuses. */
  status?: DependentHostedNumberOrderStatus;
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
    item: DependentHostedNumberOrderInstance,
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
export interface DependentHostedNumberOrderListInstanceOptions {
  /** Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status Values](https://www.twilio.com/docs/phone-numbers/hosted-numbers/hosted-numbers-api/authorization-document-resource#status-values) for more information on each of these statuses. */
  status?: DependentHostedNumberOrderStatus;
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
export interface DependentHostedNumberOrderListInstancePageOptions {
  /** Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status Values](https://www.twilio.com/docs/phone-numbers/hosted-numbers/hosted-numbers-api/authorization-document-resource#status-values) for more information on each of these statuses. */
  status?: DependentHostedNumberOrderStatus;
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

export interface DependentHostedNumberOrderSolution {
  signingDocumentSid: string;
}

export interface DependentHostedNumberOrderListInstance {
  _version: HostedNumbers;
  _solution: DependentHostedNumberOrderSolution;
  _uri: string;

  /**
   * Streams DependentHostedNumberOrderInstance records from the API.
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
   * @param { DependentHostedNumberOrderListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: DependentHostedNumberOrderInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: DependentHostedNumberOrderListInstanceEachOptions,
    callback?: (
      item: DependentHostedNumberOrderInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of DependentHostedNumberOrderInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (
      error: Error | null,
      items: DependentHostedNumberOrderPage
    ) => any
  ): Promise<DependentHostedNumberOrderPage>;
  /**
   * Lists DependentHostedNumberOrderInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DependentHostedNumberOrderListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: DependentHostedNumberOrderInstance[]
    ) => any
  ): Promise<DependentHostedNumberOrderInstance[]>;
  list(
    params: DependentHostedNumberOrderListInstanceOptions,
    callback?: (
      error: Error | null,
      items: DependentHostedNumberOrderInstance[]
    ) => any
  ): Promise<DependentHostedNumberOrderInstance[]>;
  /**
   * Retrieve a single page of DependentHostedNumberOrderInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DependentHostedNumberOrderListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (
      error: Error | null,
      items: DependentHostedNumberOrderPage
    ) => any
  ): Promise<DependentHostedNumberOrderPage>;
  page(
    params: DependentHostedNumberOrderListInstancePageOptions,
    callback?: (
      error: Error | null,
      items: DependentHostedNumberOrderPage
    ) => any
  ): Promise<DependentHostedNumberOrderPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function DependentHostedNumberOrderListInstance(
  version: HostedNumbers,
  signingDocumentSid: string
): DependentHostedNumberOrderListInstance {
  if (!isValidPathParam(signingDocumentSid)) {
    throw new Error("Parameter 'signingDocumentSid' is not valid.");
  }

  const instance = {} as DependentHostedNumberOrderListInstance;

  instance._version = version;
  instance._solution = { signingDocumentSid };
  instance._uri = `/AuthorizationDocuments/${signingDocumentSid}/DependentHostedNumberOrders`;

  instance.page = function page(
    params?:
      | DependentHostedNumberOrderListInstancePageOptions
      | ((error: Error | null, items: DependentHostedNumberOrderPage) => any),
    callback?: (
      error: Error | null,
      items: DependentHostedNumberOrderPage
    ) => any
  ): Promise<DependentHostedNumberOrderPage> {
    if (params instanceof Function) {
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
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DependentHostedNumberOrderPage(
          operationVersion,
          payload,
          instance._solution
        )
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
    callback?: (
      error: Error | null,
      items: DependentHostedNumberOrderPage
    ) => any
  ): Promise<DependentHostedNumberOrderPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new DependentHostedNumberOrderPage(
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

interface DependentHostedNumberOrderPayload extends TwilioResponsePayload {
  items: DependentHostedNumberOrderResource[];
}

interface DependentHostedNumberOrderResource {
  sid: string;
  account_sid: string;
  incoming_phone_number_sid: string;
  address_sid: string;
  signing_document_sid: string;
  phone_number: string;
  capabilities: PhoneNumberCapabilitiesResource;
  friendly_name: string;
  unique_name: string;
  status: DependentHostedNumberOrderStatus;
  failure_reason: string;
  date_created: Date;
  date_updated: Date;
  verification_attempts: number;
  email: string;
  cc_emails: Array<string>;
  verification_type: DependentHostedNumberOrderVerificationType;
  verification_document_sid: string;
  extension: string;
  call_delay: number;
  verification_code: string;
  verification_call_sids: Array<string>;
}

export class DependentHostedNumberOrderInstance {
  constructor(
    protected _version: HostedNumbers,
    payload: DependentHostedNumberOrderResource,
    signingDocumentSid: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.incomingPhoneNumberSid = payload.incoming_phone_number_sid;
    this.addressSid = payload.address_sid;
    this.signingDocumentSid = payload.signing_document_sid;
    this.phoneNumber = payload.phone_number;
    this.capabilities = {
      voice: payload.capabilities.voice,
      sms: payload.capabilities.SMS,
      mms: payload.capabilities.MMS,
      fax: payload.capabilities.fax ?? false,
    };
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
    this.verificationType = payload.verification_type;
    this.verificationDocumentSid = payload.verification_document_sid;
    this.extension = payload.extension;
    this.callDelay = deserialize.integer(payload.call_delay);
    this.verificationCode = payload.verification_code;
    this.verificationCallSids = payload.verification_call_sids;
  }

  /**
   * A 34 character string that uniquely identifies this Authorization Document
   */
  sid: string;
  /**
   * The unique SID identifier of the Account.
   */
  accountSid: string;
  /**
   * A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder.
   */
  incomingPhoneNumberSid: string;
  /**
   * A 34 character string that uniquely identifies the Address resource that represents the address of the owner of this phone number.
   */
  addressSid: string;
  /**
   * A 34 character string that uniquely identifies the LOA document associated with this HostedNumberOrder.
   */
  signingDocumentSid: string;
  /**
   * An E164 formatted phone number hosted by this HostedNumberOrder.
   */
  phoneNumber: string;
  capabilities: PhoneNumberCapabilities;
  /**
   * A human readable description of this resource, up to 64 characters.
   */
  friendlyName: string;
  /**
   * Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
   */
  uniqueName: string;
  status: DependentHostedNumberOrderStatus;
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
   * The number of attempts made to verify ownership of the phone number that is being hosted.
   */
  verificationAttempts: number;
  /**
   * Email of the owner of this phone number that is being hosted.
   */
  email: string;
  /**
   * Email recipients who will be informed when an Authorization Document has been sent and signed
   */
  ccEmails: Array<string>;
  verificationType: DependentHostedNumberOrderVerificationType;
  /**
   * A 34 character string that uniquely identifies the Identity Document resource that represents the document for verifying ownership of the number to be hosted.
   */
  verificationDocumentSid: string;
  /**
   * A numerical extension to be used when making the ownership verification call.
   */
  extension: string;
  /**
   * A value between 0-30 specifying the number of seconds to delay initiating the ownership verification call.
   */
  callDelay: number;
  /**
   * The digits passed during the ownership verification call.
   */
  verificationCode: string;
  /**
   * A list of 34 character strings that are unique identifiers for the calls placed as part of ownership verification.
   */
  verificationCallSids: Array<string>;

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

export class DependentHostedNumberOrderPage extends Page<
  HostedNumbers,
  DependentHostedNumberOrderPayload,
  DependentHostedNumberOrderResource,
  DependentHostedNumberOrderInstance
> {
  /**
   * Initialize the DependentHostedNumberOrderPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: HostedNumbers,
    response: Response<string>,
    solution: DependentHostedNumberOrderSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of DependentHostedNumberOrderInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: DependentHostedNumberOrderResource
  ): DependentHostedNumberOrderInstance {
    return new DependentHostedNumberOrderInstance(
      this._version,
      payload,
      this._solution.signingDocumentSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
