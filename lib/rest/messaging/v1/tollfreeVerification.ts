/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Messaging
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

type TollfreeVerificationOptInType =
  | "VERBAL"
  | "WEB_FORM"
  | "PAPER_FORM"
  | "VIA_TEXT"
  | "MOBILE_QR_CODE";

type TollfreeVerificationStatus =
  | "PENDING_REVIEW"
  | "IN_REVIEW"
  | "TWILIO_APPROVED"
  | "TWILIO_REJECTED";

/**
 * Options to pass to create a TollfreeVerificationInstance
 *
 * @property { string } businessName The name of the business or organization using the Tollfree number.
 * @property { string } businessWebsite The website of the business or organization using the Tollfree number.
 * @property { string } notificationEmail The email address to receive the notification about the verification result. .
 * @property { Array<string> } useCaseCategories The category of the use case for the Tollfree Number. List as many are applicable..
 * @property { string } useCaseSummary Use this to further explain how messaging is used by the business or organization.
 * @property { string } productionMessageSample An example of message content, i.e. a sample message.
 * @property { Array<string> } optInImageUrls Link to an image that shows the opt-in workflow. Multiple images allowed and must be a publicly hosted URL.
 * @property { TollfreeVerificationOptInType } optInType
 * @property { string } messageVolume Estimate monthly volume of messages from the Tollfree Number.
 * @property { string } tollfreePhoneNumberSid The SID of the Phone Number associated with the Tollfree Verification.
 * @property { string } [customerProfileSid] Customer\\\'s Profile Bundle BundleSid.
 * @property { string } [businessStreetAddress] The address of the business or organization using the Tollfree number.
 * @property { string } [businessStreetAddress2] The address of the business or organization using the Tollfree number.
 * @property { string } [businessCity] The city of the business or organization using the Tollfree number.
 * @property { string } [businessStateProvinceRegion] The state/province/region of the business or organization using the Tollfree number.
 * @property { string } [businessPostalCode] The postal code of the business or organization using the Tollfree number.
 * @property { string } [businessCountry] The country of the business or organization using the Tollfree number.
 * @property { string } [additionalInformation] Additional information to be provided for verification.
 * @property { string } [businessContactFirstName] The first name of the contact for the business or organization using the Tollfree number.
 * @property { string } [businessContactLastName] The last name of the contact for the business or organization using the Tollfree number.
 * @property { string } [businessContactEmail] The email address of the contact for the business or organization using the Tollfree number.
 * @property { string } [businessContactPhone] The phone number of the contact for the business or organization using the Tollfree number.
 */
export interface TollfreeVerificationListInstanceCreateOptions {
  businessName: string;
  businessWebsite: string;
  notificationEmail: string;
  useCaseCategories: Array<string>;
  useCaseSummary: string;
  productionMessageSample: string;
  optInImageUrls: Array<string>;
  optInType: TollfreeVerificationOptInType;
  messageVolume: string;
  tollfreePhoneNumberSid: string;
  customerProfileSid?: string;
  businessStreetAddress?: string;
  businessStreetAddress2?: string;
  businessCity?: string;
  businessStateProvinceRegion?: string;
  businessPostalCode?: string;
  businessCountry?: string;
  additionalInformation?: string;
  businessContactFirstName?: string;
  businessContactLastName?: string;
  businessContactEmail?: string;
  businessContactPhone?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [tollfreePhoneNumberSid] The SID of the Phone Number associated with the Tollfree Verification.
 * @property { TollfreeVerificationStatus } [status] The compliance status of the Tollfree Verification record.
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
export interface TollfreeVerificationListInstanceEachOptions {
  tollfreePhoneNumberSid?: string;
  status?: TollfreeVerificationStatus;
  pageSize?: number;
  callback?: (
    item: TollfreeVerificationInstance,
    done: (err?: Error) => void
  ) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [tollfreePhoneNumberSid] The SID of the Phone Number associated with the Tollfree Verification.
 * @property { TollfreeVerificationStatus } [status] The compliance status of the Tollfree Verification record.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface TollfreeVerificationListInstanceOptions {
  tollfreePhoneNumberSid?: string;
  status?: TollfreeVerificationStatus;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [tollfreePhoneNumberSid] The SID of the Phone Number associated with the Tollfree Verification.
 * @property { TollfreeVerificationStatus } [status] The compliance status of the Tollfree Verification record.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface TollfreeVerificationListInstancePageOptions {
  tollfreePhoneNumberSid?: string;
  status?: TollfreeVerificationStatus;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface TollfreeVerificationContext {
  /**
   * Fetch a TollfreeVerificationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TollfreeVerificationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TollfreeVerificationInstance) => any
  ): Promise<TollfreeVerificationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TollfreeVerificationContextSolution {
  sid?: string;
}

export class TollfreeVerificationContextImpl
  implements TollfreeVerificationContext
{
  protected _solution: TollfreeVerificationContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Tollfree/Verifications/${sid}`;
  }

  fetch(callback?: any): Promise<TollfreeVerificationInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TollfreeVerificationInstance(
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

interface TollfreeVerificationPayload
  extends TollfreeVerificationResource,
    Page.TwilioResponsePayload {}

interface TollfreeVerificationResource {
  sid?: string | null;
  account_sid?: string | null;
  customer_profile_sid?: string | null;
  trust_product_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  regulated_item_sid?: string | null;
  business_name?: string | null;
  business_street_address?: string | null;
  business_street_address2?: string | null;
  business_city?: string | null;
  business_state_province_region?: string | null;
  business_postal_code?: string | null;
  business_country?: string | null;
  business_website?: string | null;
  business_contact_first_name?: string | null;
  business_contact_last_name?: string | null;
  business_contact_email?: string | null;
  business_contact_phone?: string | null;
  notification_email?: string | null;
  use_case_categories?: Array<string> | null;
  use_case_summary?: string | null;
  production_message_sample?: string | null;
  opt_in_image_urls?: Array<string> | null;
  opt_in_type?: TollfreeVerificationOptInType;
  message_volume?: string | null;
  additional_information?: string | null;
  tollfree_phone_number_sid?: string | null;
  status?: TollfreeVerificationStatus;
  url?: string | null;
  resource_links?: any | null;
}

export class TollfreeVerificationInstance {
  protected _solution: TollfreeVerificationContextSolution;
  protected _context?: TollfreeVerificationContext;

  constructor(
    protected _version: V1,
    payload: TollfreeVerificationPayload,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.customerProfileSid = payload.customer_profile_sid;
    this.trustProductSid = payload.trust_product_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.regulatedItemSid = payload.regulated_item_sid;
    this.businessName = payload.business_name;
    this.businessStreetAddress = payload.business_street_address;
    this.businessStreetAddress2 = payload.business_street_address2;
    this.businessCity = payload.business_city;
    this.businessStateProvinceRegion = payload.business_state_province_region;
    this.businessPostalCode = payload.business_postal_code;
    this.businessCountry = payload.business_country;
    this.businessWebsite = payload.business_website;
    this.businessContactFirstName = payload.business_contact_first_name;
    this.businessContactLastName = payload.business_contact_last_name;
    this.businessContactEmail = payload.business_contact_email;
    this.businessContactPhone = payload.business_contact_phone;
    this.notificationEmail = payload.notification_email;
    this.useCaseCategories = payload.use_case_categories;
    this.useCaseSummary = payload.use_case_summary;
    this.productionMessageSample = payload.production_message_sample;
    this.optInImageUrls = payload.opt_in_image_urls;
    this.optInType = payload.opt_in_type;
    this.messageVolume = payload.message_volume;
    this.additionalInformation = payload.additional_information;
    this.tollfreePhoneNumberSid = payload.tollfree_phone_number_sid;
    this.status = payload.status;
    this.url = payload.url;
    this.resourceLinks = payload.resource_links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * Tollfree Verification Sid
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * Customer\'s Profile Bundle BundleSid
   */
  customerProfileSid?: string | null;
  /**
   * Tollfree TrustProduct Bundle BundleSid
   */
  trustProductSid?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The SID of the Regulated Item
   */
  regulatedItemSid?: string | null;
  /**
   * The name of the business or organization using the Tollfree number
   */
  businessName?: string | null;
  /**
   * The address of the business or organization using the Tollfree number
   */
  businessStreetAddress?: string | null;
  /**
   * The address of the business or organization using the Tollfree number
   */
  businessStreetAddress2?: string | null;
  /**
   * The city of the business or organization using the Tollfree number
   */
  businessCity?: string | null;
  /**
   * The state/province/region of the business or organization using the Tollfree number
   */
  businessStateProvinceRegion?: string | null;
  /**
   * The postal code of the business or organization using the Tollfree number
   */
  businessPostalCode?: string | null;
  /**
   * The country of the business or organization using the Tollfree number
   */
  businessCountry?: string | null;
  /**
   * The website of the business or organization using the Tollfree number
   */
  businessWebsite?: string | null;
  /**
   * The first name of the contact for the business or organization using the Tollfree number
   */
  businessContactFirstName?: string | null;
  /**
   * The last name of the contact for the business or organization using the Tollfree number
   */
  businessContactLastName?: string | null;
  /**
   * The email address of the contact for the business or organization using the Tollfree number
   */
  businessContactEmail?: string | null;
  /**
   * The phone number of the contact for the business or organization using the Tollfree number
   */
  businessContactPhone?: string | null;
  /**
   * The email address to receive the notification about the verification result.
   */
  notificationEmail?: string | null;
  /**
   * The category of the use case for the Tollfree Number. List as many are applicable.
   */
  useCaseCategories?: Array<string> | null;
  /**
   * Further explaination on how messaging is used by the business or organization
   */
  useCaseSummary?: string | null;
  /**
   * An example of message content, i.e. a sample message
   */
  productionMessageSample?: string | null;
  /**
   * Link to an image that shows the opt-in workflow. Multiple images allowed and must be a publicly hosted URL
   */
  optInImageUrls?: Array<string> | null;
  optInType?: TollfreeVerificationOptInType;
  /**
   * Estimate monthly volume of messages from the Tollfree Number
   */
  messageVolume?: string | null;
  /**
   * Additional information to be provided for verification
   */
  additionalInformation?: string | null;
  /**
   * The SID of the Phone Number associated with the Tollfree Verification
   */
  tollfreePhoneNumberSid?: string | null;
  status?: TollfreeVerificationStatus;
  /**
   * The absolute URL of the Tollfree Verification
   */
  url?: string | null;
  /**
   * The URLs of the documents associated with the Tollfree Verification resource
   */
  resourceLinks?: any | null;

  private get _proxy(): TollfreeVerificationContext {
    this._context =
      this._context ||
      new TollfreeVerificationContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a TollfreeVerificationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TollfreeVerificationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TollfreeVerificationInstance) => any
  ): Promise<TollfreeVerificationInstance> {
    return this._proxy.fetch(callback);
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
      customerProfileSid: this.customerProfileSid,
      trustProductSid: this.trustProductSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      regulatedItemSid: this.regulatedItemSid,
      businessName: this.businessName,
      businessStreetAddress: this.businessStreetAddress,
      businessStreetAddress2: this.businessStreetAddress2,
      businessCity: this.businessCity,
      businessStateProvinceRegion: this.businessStateProvinceRegion,
      businessPostalCode: this.businessPostalCode,
      businessCountry: this.businessCountry,
      businessWebsite: this.businessWebsite,
      businessContactFirstName: this.businessContactFirstName,
      businessContactLastName: this.businessContactLastName,
      businessContactEmail: this.businessContactEmail,
      businessContactPhone: this.businessContactPhone,
      notificationEmail: this.notificationEmail,
      useCaseCategories: this.useCaseCategories,
      useCaseSummary: this.useCaseSummary,
      productionMessageSample: this.productionMessageSample,
      optInImageUrls: this.optInImageUrls,
      optInType: this.optInType,
      messageVolume: this.messageVolume,
      additionalInformation: this.additionalInformation,
      tollfreePhoneNumberSid: this.tollfreePhoneNumberSid,
      status: this.status,
      url: this.url,
      resourceLinks: this.resourceLinks,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface TollfreeVerificationListInstance {
  (sid: string): TollfreeVerificationContext;
  get(sid: string): TollfreeVerificationContext;

  /**
   * Create a TollfreeVerificationInstance
   *
   * @param { TollfreeVerificationListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TollfreeVerificationInstance
   */
  create(
    params: TollfreeVerificationListInstanceCreateOptions,
    callback?: (error: Error | null, item?: TollfreeVerificationInstance) => any
  ): Promise<TollfreeVerificationInstance>;
  create(params: any, callback?: any): Promise<TollfreeVerificationInstance>;

  /**
   * Streams TollfreeVerificationInstance records from the API.
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
      item: TollfreeVerificationInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Streams TollfreeVerificationInstance records from the API.
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
   * @param { TollfreeVerificationListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: TollfreeVerificationListInstanceEachOptions,
    callback?: (
      item: TollfreeVerificationInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of TollfreeVerificationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: TollfreeVerificationPage) => any
  ): Promise<TollfreeVerificationPage>;
  /**
   * Retrieve a single target page of TollfreeVerificationInstance records from the API.
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
    callback?: (error: Error | null, items: TollfreeVerificationPage) => any
  ): Promise<TollfreeVerificationPage>;
  getPage(params?: any, callback?: any): Promise<TollfreeVerificationPage>;
  /**
   * Lists TollfreeVerificationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: TollfreeVerificationInstance[]
    ) => any
  ): Promise<TollfreeVerificationInstance[]>;
  /**
   * Lists TollfreeVerificationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TollfreeVerificationListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: TollfreeVerificationListInstanceOptions,
    callback?: (
      error: Error | null,
      items: TollfreeVerificationInstance[]
    ) => any
  ): Promise<TollfreeVerificationInstance[]>;
  list(params?: any, callback?: any): Promise<TollfreeVerificationInstance[]>;
  /**
   * Retrieve a single page of TollfreeVerificationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: TollfreeVerificationPage) => any
  ): Promise<TollfreeVerificationPage>;
  /**
   * Retrieve a single page of TollfreeVerificationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TollfreeVerificationListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: TollfreeVerificationListInstancePageOptions,
    callback?: (error: Error | null, items: TollfreeVerificationPage) => any
  ): Promise<TollfreeVerificationPage>;
  page(params?: any, callback?: any): Promise<TollfreeVerificationPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TollfreeVerificationSolution {}

interface TollfreeVerificationListInstanceImpl
  extends TollfreeVerificationListInstance {}
class TollfreeVerificationListInstanceImpl
  implements TollfreeVerificationListInstance
{
  _version?: V1;
  _solution?: TollfreeVerificationSolution;
  _uri?: string;
}

export function TollfreeVerificationListInstance(
  version: V1
): TollfreeVerificationListInstance {
  const instance = ((sid) =>
    instance.get(sid)) as TollfreeVerificationListInstanceImpl;

  instance.get = function get(sid): TollfreeVerificationContext {
    return new TollfreeVerificationContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Tollfree/Verifications`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<TollfreeVerificationInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["businessName"] === null ||
      params["businessName"] === undefined
    ) {
      throw new Error("Required parameter \"params['businessName']\" missing.");
    }

    if (
      params["businessWebsite"] === null ||
      params["businessWebsite"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['businessWebsite']\" missing."
      );
    }

    if (
      params["notificationEmail"] === null ||
      params["notificationEmail"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['notificationEmail']\" missing."
      );
    }

    if (
      params["useCaseCategories"] === null ||
      params["useCaseCategories"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['useCaseCategories']\" missing."
      );
    }

    if (
      params["useCaseSummary"] === null ||
      params["useCaseSummary"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['useCaseSummary']\" missing."
      );
    }

    if (
      params["productionMessageSample"] === null ||
      params["productionMessageSample"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['productionMessageSample']\" missing."
      );
    }

    if (
      params["optInImageUrls"] === null ||
      params["optInImageUrls"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['optInImageUrls']\" missing."
      );
    }

    if (params["optInType"] === null || params["optInType"] === undefined) {
      throw new Error("Required parameter \"params['optInType']\" missing.");
    }

    if (
      params["messageVolume"] === null ||
      params["messageVolume"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['messageVolume']\" missing."
      );
    }

    if (
      params["tollfreePhoneNumberSid"] === null ||
      params["tollfreePhoneNumberSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['tollfreePhoneNumberSid']\" missing."
      );
    }

    let data: any = {};

    data["BusinessName"] = params["businessName"];

    data["BusinessWebsite"] = params["businessWebsite"];

    data["NotificationEmail"] = params["notificationEmail"];

    data["UseCaseCategories"] = serialize.map(
      params["useCaseCategories"],
      (e) => e
    );

    data["UseCaseSummary"] = params["useCaseSummary"];

    data["ProductionMessageSample"] = params["productionMessageSample"];

    data["OptInImageUrls"] = serialize.map(params["optInImageUrls"], (e) => e);

    data["OptInType"] = params["optInType"];

    data["MessageVolume"] = params["messageVolume"];

    data["TollfreePhoneNumberSid"] = params["tollfreePhoneNumberSid"];
    if (params["customerProfileSid"] !== undefined)
      data["CustomerProfileSid"] = params["customerProfileSid"];
    if (params["businessStreetAddress"] !== undefined)
      data["BusinessStreetAddress"] = params["businessStreetAddress"];
    if (params["businessStreetAddress2"] !== undefined)
      data["BusinessStreetAddress2"] = params["businessStreetAddress2"];
    if (params["businessCity"] !== undefined)
      data["BusinessCity"] = params["businessCity"];
    if (params["businessStateProvinceRegion"] !== undefined)
      data["BusinessStateProvinceRegion"] =
        params["businessStateProvinceRegion"];
    if (params["businessPostalCode"] !== undefined)
      data["BusinessPostalCode"] = params["businessPostalCode"];
    if (params["businessCountry"] !== undefined)
      data["BusinessCountry"] = params["businessCountry"];
    if (params["additionalInformation"] !== undefined)
      data["AdditionalInformation"] = params["additionalInformation"];
    if (params["businessContactFirstName"] !== undefined)
      data["BusinessContactFirstName"] = params["businessContactFirstName"];
    if (params["businessContactLastName"] !== undefined)
      data["BusinessContactLastName"] = params["businessContactLastName"];
    if (params["businessContactEmail"] !== undefined)
      data["BusinessContactEmail"] = params["businessContactEmail"];
    if (params["businessContactPhone"] !== undefined)
      data["BusinessContactPhone"] = params["businessContactPhone"];

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
      (payload) => new TollfreeVerificationInstance(operationVersion, payload)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<TollfreeVerificationPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["tollfreePhoneNumberSid"] !== undefined)
      data["TollfreePhoneNumberSid"] = params["tollfreePhoneNumberSid"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
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
        new TollfreeVerificationPage(operationVersion, payload, this._solution)
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
    targetUrl?: any,
    callback?: any
  ): Promise<TollfreeVerificationPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new TollfreeVerificationPage(this._version, payload, this._solution)
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

export class TollfreeVerificationPage extends Page<
  V1,
  TollfreeVerificationPayload,
  TollfreeVerificationResource,
  TollfreeVerificationInstance
> {
  /**
   * Initialize the TollfreeVerificationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: TollfreeVerificationSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of TollfreeVerificationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: TollfreeVerificationPayload
  ): TollfreeVerificationInstance {
    return new TollfreeVerificationInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
