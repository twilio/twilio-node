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
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { AlphaSenderListInstance } from "./service/alphaSender";
import { PhoneNumberListInstance } from "./service/phoneNumber";
import { ShortCodeListInstance } from "./service/shortCode";
import { UsAppToPersonListInstance } from "./service/usAppToPerson";
import { UsAppToPersonUsecaseListInstance } from "./service/usAppToPersonUsecase";

type ServiceScanMessageContent = "inherit" | "enable" | "disable";

/**
 * Options to pass to update a ServiceInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 * @property { string } [inboundRequestUrl] The URL we call using `inbound_method` when a message is received by any phone number or short code in the Service. When this property is `null`, receiving inbound messages is disabled. All messages sent to the Twilio phone number or short code will not be logged and received on the Account. If the `use_inbound_webhook_on_number` field is enabled then the webhook url defined on the phone number will override the `inbound_request_url` defined for the Messaging Service.
 * @property { string } [inboundMethod] The HTTP method we should use to call `inbound_request_url`. Can be `GET` or `POST` and the default is `POST`.
 * @property { string } [fallbackUrl] The URL that we call using `fallback_method` if an error occurs while retrieving or executing the TwiML from the Inbound Request URL. If the `use_inbound_webhook_on_number` field is enabled then the webhook url defined on the phone number will override the `fallback_url` defined for the Messaging Service.
 * @property { string } [fallbackMethod] The HTTP method we should use to call `fallback_url`. Can be: `GET` or `POST`.
 * @property { string } [statusCallback] The URL we should call to [pass status updates](https://www.twilio.com/docs/sms/api/message-resource#message-status-values) about message delivery.
 * @property { boolean } [stickySender] Whether to enable [Sticky Sender](https://www.twilio.com/docs/sms/services#sticky-sender) on the Service instance.
 * @property { boolean } [mmsConverter] Whether to enable the [MMS Converter](https://www.twilio.com/docs/sms/services#mms-converter) for messages sent through the Service instance.
 * @property { boolean } [smartEncoding] Whether to enable [Smart Encoding](https://www.twilio.com/docs/sms/services#smart-encoding) for messages sent through the Service instance.
 * @property { ServiceScanMessageContent } [scanMessageContent]
 * @property { boolean } [fallbackToLongCode] Whether to enable [Fallback to Long Code](https://www.twilio.com/docs/sms/services#fallback-to-long-code) for messages sent through the Service instance.
 * @property { boolean } [areaCodeGeomatch] Whether to enable [Area Code Geomatch](https://www.twilio.com/docs/sms/services#area-code-geomatch) on the Service Instance.
 * @property { number } [validityPeriod] How long, in seconds, messages sent from the Service are valid. Can be an integer from `1` to `14,400`.
 * @property { boolean } [synchronousValidation] Reserved.
 * @property { string } [usecase] A string that describes the scenario in which the Messaging Service will be used. Examples: [notification, marketing, verification, poll ..]
 * @property { boolean } [useInboundWebhookOnNumber] A boolean value that indicates either the webhook url configured on the phone number will be used or `inbound_request_url`/`fallback_url` url will be called when a message is received from the phone number. If this field is enabled then the webhook url defined on the phone number will override the `inbound_request_url`/`fallback_url` defined for the Messaging Service.
 */
export interface ServiceContextUpdateOptions {
  friendlyName?: string;
  inboundRequestUrl?: string;
  inboundMethod?: string;
  fallbackUrl?: string;
  fallbackMethod?: string;
  statusCallback?: string;
  stickySender?: boolean;
  mmsConverter?: boolean;
  smartEncoding?: boolean;
  scanMessageContent?: ServiceScanMessageContent;
  fallbackToLongCode?: boolean;
  areaCodeGeomatch?: boolean;
  validityPeriod?: number;
  synchronousValidation?: boolean;
  usecase?: string;
  useInboundWebhookOnNumber?: boolean;
}

/**
 * Options to pass to create a ServiceInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 * @property { string } [inboundRequestUrl] The URL we call using `inbound_method` when a message is received by any phone number or short code in the Service. When this property is `null`, receiving inbound messages is disabled. All messages sent to the Twilio phone number or short code will not be logged and received on the Account. If the `use_inbound_webhook_on_number` field is enabled then the webhook url defined on the phone number will override the `inbound_request_url` defined for the Messaging Service.
 * @property { string } [inboundMethod] The HTTP method we should use to call `inbound_request_url`. Can be `GET` or `POST` and the default is `POST`.
 * @property { string } [fallbackUrl] The URL that we call using `fallback_method` if an error occurs while retrieving or executing the TwiML from the Inbound Request URL. If the `use_inbound_webhook_on_number` field is enabled then the webhook url defined on the phone number will override the `fallback_url` defined for the Messaging Service.
 * @property { string } [fallbackMethod] The HTTP method we should use to call `fallback_url`. Can be: `GET` or `POST`.
 * @property { string } [statusCallback] The URL we should call to [pass status updates](https://www.twilio.com/docs/sms/api/message-resource#message-status-values) about message delivery.
 * @property { boolean } [stickySender] Whether to enable [Sticky Sender](https://www.twilio.com/docs/sms/services#sticky-sender) on the Service instance.
 * @property { boolean } [mmsConverter] Whether to enable the [MMS Converter](https://www.twilio.com/docs/sms/services#mms-converter) for messages sent through the Service instance.
 * @property { boolean } [smartEncoding] Whether to enable [Smart Encoding](https://www.twilio.com/docs/sms/services#smart-encoding) for messages sent through the Service instance.
 * @property { ServiceScanMessageContent } [scanMessageContent]
 * @property { boolean } [fallbackToLongCode] Whether to enable [Fallback to Long Code](https://www.twilio.com/docs/sms/services#fallback-to-long-code) for messages sent through the Service instance.
 * @property { boolean } [areaCodeGeomatch] Whether to enable [Area Code Geomatch](https://www.twilio.com/docs/sms/services#area-code-geomatch) on the Service Instance.
 * @property { number } [validityPeriod] How long, in seconds, messages sent from the Service are valid. Can be an integer from `1` to `14,400`.
 * @property { boolean } [synchronousValidation] Reserved.
 * @property { string } [usecase] A string that describes the scenario in which the Messaging Service will be used. Examples: [notification, marketing, verification, poll ..].
 * @property { boolean } [useInboundWebhookOnNumber] A boolean value that indicates either the webhook url configured on the phone number will be used or `inbound_request_url`/`fallback_url` url will be called when a message is received from the phone number. If this field is enabled then the webhook url defined on the phone number will override the `inbound_request_url`/`fallback_url` defined for the Messaging Service.
 */
export interface ServiceListInstanceCreateOptions {
  friendlyName: string;
  inboundRequestUrl?: string;
  inboundMethod?: string;
  fallbackUrl?: string;
  fallbackMethod?: string;
  statusCallback?: string;
  stickySender?: boolean;
  mmsConverter?: boolean;
  smartEncoding?: boolean;
  scanMessageContent?: ServiceScanMessageContent;
  fallbackToLongCode?: boolean;
  areaCodeGeomatch?: boolean;
  validityPeriod?: number;
  synchronousValidation?: boolean;
  usecase?: string;
  useInboundWebhookOnNumber?: boolean;
}
/**
 * Options to pass to each
 *
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
export interface ServiceListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: ServiceInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ServiceListInstanceOptions {
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ServiceListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface ServiceContext {
  alphaSenders: AlphaSenderListInstance;
  phoneNumbers: PhoneNumberListInstance;
  shortCodes: ShortCodeListInstance;
  usAppToPerson: UsAppToPersonListInstance;
  usAppToPersonUsecases: UsAppToPersonUsecaseListInstance;

  /**
   * Remove a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;

  /**
   * Update a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  update(
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;
  /**
   * Update a ServiceInstance
   *
   * @param { ServiceContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  update(
    params: ServiceContextUpdateOptions,
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;
  update(params?: any, callback?: any): Promise<ServiceInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ServiceContextSolution {
  sid: string;
}

export class ServiceContextImpl implements ServiceContext {
  protected _solution: ServiceContextSolution;
  protected _uri: string;

  protected _alphaSenders?: AlphaSenderListInstance;
  protected _phoneNumbers?: PhoneNumberListInstance;
  protected _shortCodes?: ShortCodeListInstance;
  protected _usAppToPerson?: UsAppToPersonListInstance;
  protected _usAppToPersonUsecases?: UsAppToPersonUsecaseListInstance;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Services/${sid}`;
  }

  get alphaSenders(): AlphaSenderListInstance {
    this._alphaSenders =
      this._alphaSenders ||
      AlphaSenderListInstance(this._version, this._solution.sid);
    return this._alphaSenders;
  }

  get phoneNumbers(): PhoneNumberListInstance {
    this._phoneNumbers =
      this._phoneNumbers ||
      PhoneNumberListInstance(this._version, this._solution.sid);
    return this._phoneNumbers;
  }

  get shortCodes(): ShortCodeListInstance {
    this._shortCodes =
      this._shortCodes ||
      ShortCodeListInstance(this._version, this._solution.sid);
    return this._shortCodes;
  }

  get usAppToPerson(): UsAppToPersonListInstance {
    this._usAppToPerson =
      this._usAppToPerson ||
      UsAppToPersonListInstance(this._version, this._solution.sid);
    return this._usAppToPerson;
  }

  get usAppToPersonUsecases(): UsAppToPersonUsecaseListInstance {
    this._usAppToPersonUsecases =
      this._usAppToPersonUsecases ||
      UsAppToPersonUsecaseListInstance(this._version, this._solution.sid);
    return this._usAppToPersonUsecases;
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

  fetch(callback?: any): Promise<ServiceInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ServiceInstance(operationVersion, payload, instance._solution.sid)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<ServiceInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["inboundRequestUrl"] !== undefined)
      data["InboundRequestUrl"] = params["inboundRequestUrl"];
    if (params["inboundMethod"] !== undefined)
      data["InboundMethod"] = params["inboundMethod"];
    if (params["fallbackUrl"] !== undefined)
      data["FallbackUrl"] = params["fallbackUrl"];
    if (params["fallbackMethod"] !== undefined)
      data["FallbackMethod"] = params["fallbackMethod"];
    if (params["statusCallback"] !== undefined)
      data["StatusCallback"] = params["statusCallback"];
    if (params["stickySender"] !== undefined)
      data["StickySender"] = serialize.bool(params["stickySender"]);
    if (params["mmsConverter"] !== undefined)
      data["MmsConverter"] = serialize.bool(params["mmsConverter"]);
    if (params["smartEncoding"] !== undefined)
      data["SmartEncoding"] = serialize.bool(params["smartEncoding"]);
    if (params["scanMessageContent"] !== undefined)
      data["ScanMessageContent"] = params["scanMessageContent"];
    if (params["fallbackToLongCode"] !== undefined)
      data["FallbackToLongCode"] = serialize.bool(params["fallbackToLongCode"]);
    if (params["areaCodeGeomatch"] !== undefined)
      data["AreaCodeGeomatch"] = serialize.bool(params["areaCodeGeomatch"]);
    if (params["validityPeriod"] !== undefined)
      data["ValidityPeriod"] = params["validityPeriod"];
    if (params["synchronousValidation"] !== undefined)
      data["SynchronousValidation"] = serialize.bool(
        params["synchronousValidation"]
      );
    if (params["usecase"] !== undefined) data["Usecase"] = params["usecase"];
    if (params["useInboundWebhookOnNumber"] !== undefined)
      data["UseInboundWebhookOnNumber"] = serialize.bool(
        params["useInboundWebhookOnNumber"]
      );

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
        new ServiceInstance(operationVersion, payload, instance._solution.sid)
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

export type ServiceInboundMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";
export type ServiceFallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";

interface ServicePayload extends TwilioResponsePayload {
  services: ServiceResource[];
}

interface ServiceResource {
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  inbound_request_url?: string | null;
  inbound_method?: ServiceInboundMethod;
  fallback_url?: string | null;
  fallback_method?: ServiceFallbackMethod;
  status_callback?: string | null;
  sticky_sender?: boolean | null;
  mms_converter?: boolean | null;
  smart_encoding?: boolean | null;
  scan_message_content?: ServiceScanMessageContent;
  fallback_to_long_code?: boolean | null;
  area_code_geomatch?: boolean | null;
  synchronous_validation?: boolean | null;
  validity_period?: number | null;
  url?: string | null;
  links?: object | null;
  usecase?: string | null;
  us_app_to_person_registered?: boolean | null;
  use_inbound_webhook_on_number?: boolean | null;
}

export class ServiceInstance {
  protected _solution: ServiceContextSolution;
  protected _context?: ServiceContext;

  constructor(protected _version: V1, payload: ServiceResource, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.inboundRequestUrl = payload.inbound_request_url;
    this.inboundMethod = payload.inbound_method;
    this.fallbackUrl = payload.fallback_url;
    this.fallbackMethod = payload.fallback_method;
    this.statusCallback = payload.status_callback;
    this.stickySender = payload.sticky_sender;
    this.mmsConverter = payload.mms_converter;
    this.smartEncoding = payload.smart_encoding;
    this.scanMessageContent = payload.scan_message_content;
    this.fallbackToLongCode = payload.fallback_to_long_code;
    this.areaCodeGeomatch = payload.area_code_geomatch;
    this.synchronousValidation = payload.synchronous_validation;
    this.validityPeriod = deserialize.integer(payload.validity_period);
    this.url = payload.url;
    this.links = payload.links;
    this.usecase = payload.usecase;
    this.usAppToPersonRegistered = payload.us_app_to_person_registered;
    this.useInboundWebhookOnNumber = payload.use_inbound_webhook_on_number;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The URL we call using inbound_method when a message is received by any phone number or short code in the Service. This field will be overridden if the `use_inbound_webhook_on_number` field is enabled.
   */
  inboundRequestUrl?: string | null;
  /**
   * The HTTP method we use to call inbound_request_url
   */
  inboundMethod?: ServiceInboundMethod;
  /**
   * The URL that we call using fallback_method if an error occurs while retrieving or executing the TwiML from the Inbound Request URL. This field will be overridden if the `use_inbound_webhook_on_number` field is enabled.
   */
  fallbackUrl?: string | null;
  /**
   * The HTTP method we use to call fallback_url
   */
  fallbackMethod?: ServiceFallbackMethod;
  /**
   * The URL we call to pass status updates about message delivery
   */
  statusCallback?: string | null;
  /**
   * Whether to enable Sticky Sender on the Service instance
   */
  stickySender?: boolean | null;
  /**
   * Whether to enable the MMS Converter for messages sent through the Service instance
   */
  mmsConverter?: boolean | null;
  /**
   * Whether to enable Encoding for messages sent through the Service instance
   */
  smartEncoding?: boolean | null;
  scanMessageContent?: ServiceScanMessageContent;
  /**
   * Whether to enable Fallback to Long Code for messages sent through the Service instance
   */
  fallbackToLongCode?: boolean | null;
  /**
   * Whether to enable Area Code Geomatch on the Service Instance
   */
  areaCodeGeomatch?: boolean | null;
  /**
   * Reserved
   */
  synchronousValidation?: boolean | null;
  /**
   * How long, in seconds, messages sent from the Service are valid
   */
  validityPeriod?: number | null;
  /**
   * The absolute URL of the Service resource
   */
  url?: string | null;
  /**
   * The absolute URLs of related resources
   */
  links?: object | null;
  /**
   * A string describing the scenario in which the Messaging Service will be used
   */
  usecase?: string | null;
  /**
   * Whether US A2P campaign is registered for this Service.
   */
  usAppToPersonRegistered?: boolean | null;
  /**
   * If enabled, the webhook url configured on the phone number will be used and will override the `inbound_request_url`/`fallback_url` url called when an inbound message is received.
   */
  useInboundWebhookOnNumber?: boolean | null;

  private get _proxy(): ServiceContext {
    this._context =
      this._context ||
      new ServiceContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a ServiceInstance
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
   * Fetch a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  update(
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;
  /**
   * Update a ServiceInstance
   *
   * @param { ServiceContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  update(
    params: ServiceContextUpdateOptions,
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;
  update(params?: any, callback?: any): Promise<ServiceInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the alphaSenders.
   */
  alphaSenders(): AlphaSenderListInstance {
    return this._proxy.alphaSenders;
  }

  /**
   * Access the phoneNumbers.
   */
  phoneNumbers(): PhoneNumberListInstance {
    return this._proxy.phoneNumbers;
  }

  /**
   * Access the shortCodes.
   */
  shortCodes(): ShortCodeListInstance {
    return this._proxy.shortCodes;
  }

  /**
   * Access the usAppToPerson.
   */
  usAppToPerson(): UsAppToPersonListInstance {
    return this._proxy.usAppToPerson;
  }

  /**
   * Access the usAppToPersonUsecases.
   */
  usAppToPersonUsecases(): UsAppToPersonUsecaseListInstance {
    return this._proxy.usAppToPersonUsecases;
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
      friendlyName: this.friendlyName,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      inboundRequestUrl: this.inboundRequestUrl,
      inboundMethod: this.inboundMethod,
      fallbackUrl: this.fallbackUrl,
      fallbackMethod: this.fallbackMethod,
      statusCallback: this.statusCallback,
      stickySender: this.stickySender,
      mmsConverter: this.mmsConverter,
      smartEncoding: this.smartEncoding,
      scanMessageContent: this.scanMessageContent,
      fallbackToLongCode: this.fallbackToLongCode,
      areaCodeGeomatch: this.areaCodeGeomatch,
      synchronousValidation: this.synchronousValidation,
      validityPeriod: this.validityPeriod,
      url: this.url,
      links: this.links,
      usecase: this.usecase,
      usAppToPersonRegistered: this.usAppToPersonRegistered,
      useInboundWebhookOnNumber: this.useInboundWebhookOnNumber,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ServiceSolution {}

export interface ServiceListInstance {
  _version: V1;
  _solution: ServiceSolution;
  _uri: string;

  (sid: string): ServiceContext;
  get(sid: string): ServiceContext;

  /**
   * Create a ServiceInstance
   *
   * @param { ServiceListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  create(
    params: ServiceListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ServiceInstance) => any
  ): Promise<ServiceInstance>;
  create(params: any, callback?: any): Promise<ServiceInstance>;

  /**
   * Streams ServiceInstance records from the API.
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
    callback?: (item: ServiceInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams ServiceInstance records from the API.
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
   * @param { ServiceListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: ServiceListInstanceEachOptions,
    callback?: (item: ServiceInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: ServicePage) => any
  ): Promise<ServicePage>;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
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
    callback?: (error: Error | null, items: ServicePage) => any
  ): Promise<ServicePage>;
  getPage(params?: any, callback?: any): Promise<ServicePage>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ServiceInstance[]) => any
  ): Promise<ServiceInstance[]>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ServiceListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: ServiceListInstanceOptions,
    callback?: (error: Error | null, items: ServiceInstance[]) => any
  ): Promise<ServiceInstance[]>;
  list(params?: any, callback?: any): Promise<ServiceInstance[]>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ServicePage) => any
  ): Promise<ServicePage>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ServiceListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: ServiceListInstancePageOptions,
    callback?: (error: Error | null, items: ServicePage) => any
  ): Promise<ServicePage>;
  page(params?: any, callback?: any): Promise<ServicePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ServiceListInstance(version: V1): ServiceListInstance {
  const instance = ((sid) => instance.get(sid)) as ServiceListInstance;

  instance.get = function get(sid): ServiceContext {
    return new ServiceContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Services`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<ServiceInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];
    if (params["inboundRequestUrl"] !== undefined)
      data["InboundRequestUrl"] = params["inboundRequestUrl"];
    if (params["inboundMethod"] !== undefined)
      data["InboundMethod"] = params["inboundMethod"];
    if (params["fallbackUrl"] !== undefined)
      data["FallbackUrl"] = params["fallbackUrl"];
    if (params["fallbackMethod"] !== undefined)
      data["FallbackMethod"] = params["fallbackMethod"];
    if (params["statusCallback"] !== undefined)
      data["StatusCallback"] = params["statusCallback"];
    if (params["stickySender"] !== undefined)
      data["StickySender"] = serialize.bool(params["stickySender"]);
    if (params["mmsConverter"] !== undefined)
      data["MmsConverter"] = serialize.bool(params["mmsConverter"]);
    if (params["smartEncoding"] !== undefined)
      data["SmartEncoding"] = serialize.bool(params["smartEncoding"]);
    if (params["scanMessageContent"] !== undefined)
      data["ScanMessageContent"] = params["scanMessageContent"];
    if (params["fallbackToLongCode"] !== undefined)
      data["FallbackToLongCode"] = serialize.bool(params["fallbackToLongCode"]);
    if (params["areaCodeGeomatch"] !== undefined)
      data["AreaCodeGeomatch"] = serialize.bool(params["areaCodeGeomatch"]);
    if (params["validityPeriod"] !== undefined)
      data["ValidityPeriod"] = params["validityPeriod"];
    if (params["synchronousValidation"] !== undefined)
      data["SynchronousValidation"] = serialize.bool(
        params["synchronousValidation"]
      );
    if (params["usecase"] !== undefined) data["Usecase"] = params["usecase"];
    if (params["useInboundWebhookOnNumber"] !== undefined)
      data["UseInboundWebhookOnNumber"] = serialize.bool(
        params["useInboundWebhookOnNumber"]
      );

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
      (payload) => new ServiceInstance(operationVersion, payload)
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
  ): Promise<ServicePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

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
        new ServicePage(operationVersion, payload, instance._solution)
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
  ): Promise<ServicePage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new ServicePage(instance._version, payload, instance._solution)
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

export class ServicePage extends Page<
  V1,
  ServicePayload,
  ServiceResource,
  ServiceInstance
> {
  /**
   * Initialize the ServicePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: ServiceSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ServiceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ServiceResource): ServiceInstance {
    return new ServiceInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
