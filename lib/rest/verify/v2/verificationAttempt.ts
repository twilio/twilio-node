/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
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

type VerificationAttemptChannels = "sms" | "call" | "email" | "whatsapp";

type VerificationAttemptConversionStatus = "converted" | "unconverted";

/**
 * Options to pass to each
 *
 * @property { Date } [dateCreatedAfter] Datetime filter used to query Verification Attempts created after this datetime. Given as GMT in RFC 2822 format.
 * @property { Date } [dateCreatedBefore] Datetime filter used to query Verification Attempts created before this datetime. Given as GMT in RFC 2822 format.
 * @property { string } [channelData.to] Destination of a verification. It is phone number in E.164 format.
 * @property { string } [country] Filter used to query Verification Attempts sent to the specified destination country.
 * @property { VerificationAttemptChannels } [channel] Filter used to query Verification Attempts by communication channel. Valid values are `SMS` and `CALL`
 * @property { string } [verifyServiceSid] Filter used to query Verification Attempts by verify service. Only attempts of the provided SID will be returned.
 * @property { string } [verificationSid] Filter used to return all the Verification Attempts of a single verification. Only attempts of the provided verification SID will be returned.
 * @property { VerificationAttemptConversionStatus } [status] Filter used to query Verification Attempts by conversion status. Valid values are `UNCONVERTED`, for attempts that were not converted, and `CONVERTED`, for attempts that were confirmed.
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
export interface VerificationAttemptListInstanceEachOptions {
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  "channelData.to"?: string;
  country?: string;
  channel?: VerificationAttemptChannels;
  verifyServiceSid?: string;
  verificationSid?: string;
  status?: VerificationAttemptConversionStatus;
  pageSize?: number;
  callback?: (
    item: VerificationAttemptInstance,
    done: (err?: Error) => void
  ) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { Date } [dateCreatedAfter] Datetime filter used to query Verification Attempts created after this datetime. Given as GMT in RFC 2822 format.
 * @property { Date } [dateCreatedBefore] Datetime filter used to query Verification Attempts created before this datetime. Given as GMT in RFC 2822 format.
 * @property { string } [channelData.to] Destination of a verification. It is phone number in E.164 format.
 * @property { string } [country] Filter used to query Verification Attempts sent to the specified destination country.
 * @property { VerificationAttemptChannels } [channel] Filter used to query Verification Attempts by communication channel. Valid values are `SMS` and `CALL`
 * @property { string } [verifyServiceSid] Filter used to query Verification Attempts by verify service. Only attempts of the provided SID will be returned.
 * @property { string } [verificationSid] Filter used to return all the Verification Attempts of a single verification. Only attempts of the provided verification SID will be returned.
 * @property { VerificationAttemptConversionStatus } [status] Filter used to query Verification Attempts by conversion status. Valid values are `UNCONVERTED`, for attempts that were not converted, and `CONVERTED`, for attempts that were confirmed.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface VerificationAttemptListInstanceOptions {
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  "channelData.to"?: string;
  country?: string;
  channel?: VerificationAttemptChannels;
  verifyServiceSid?: string;
  verificationSid?: string;
  status?: VerificationAttemptConversionStatus;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { Date } [dateCreatedAfter] Datetime filter used to query Verification Attempts created after this datetime. Given as GMT in RFC 2822 format.
 * @property { Date } [dateCreatedBefore] Datetime filter used to query Verification Attempts created before this datetime. Given as GMT in RFC 2822 format.
 * @property { string } [channelData.to] Destination of a verification. It is phone number in E.164 format.
 * @property { string } [country] Filter used to query Verification Attempts sent to the specified destination country.
 * @property { VerificationAttemptChannels } [channel] Filter used to query Verification Attempts by communication channel. Valid values are `SMS` and `CALL`
 * @property { string } [verifyServiceSid] Filter used to query Verification Attempts by verify service. Only attempts of the provided SID will be returned.
 * @property { string } [verificationSid] Filter used to return all the Verification Attempts of a single verification. Only attempts of the provided verification SID will be returned.
 * @property { VerificationAttemptConversionStatus } [status] Filter used to query Verification Attempts by conversion status. Valid values are `UNCONVERTED`, for attempts that were not converted, and `CONVERTED`, for attempts that were confirmed.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface VerificationAttemptListInstancePageOptions {
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  "channelData.to"?: string;
  country?: string;
  channel?: VerificationAttemptChannels;
  verifyServiceSid?: string;
  verificationSid?: string;
  status?: VerificationAttemptConversionStatus;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface VerificationAttemptContext {
  /**
   * Fetch a VerificationAttemptInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed VerificationAttemptInstance
   */
  fetch(
    callback?: (error: Error | null, item?: VerificationAttemptInstance) => any
  ): Promise<VerificationAttemptInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface VerificationAttemptContextSolution {
  sid?: string;
}

export class VerificationAttemptContextImpl
  implements VerificationAttemptContext
{
  protected _solution: VerificationAttemptContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Attempts/${sid}`;
  }

  fetch(callback?: any): Promise<VerificationAttemptInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new VerificationAttemptInstance(
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

interface VerificationAttemptPayload extends TwilioResponsePayload {
  attempts: VerificationAttemptResource[];
}

interface VerificationAttemptResource {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  verification_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  conversion_status?: VerificationAttemptConversionStatus;
  channel?: VerificationAttemptChannels;
  price?: any | null;
  channel_data?: any | null;
  url?: string | null;
}

export class VerificationAttemptInstance {
  protected _solution: VerificationAttemptContextSolution;
  protected _context?: VerificationAttemptContext;

  constructor(
    protected _version: V2,
    payload: VerificationAttemptResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.verificationSid = payload.verification_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.conversionStatus = payload.conversion_status;
    this.channel = payload.channel;
    this.price = payload.price;
    this.channelData = payload.channel_data;
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The SID that uniquely identifies the verification attempt.
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the verification.
   */
  accountSid?: string | null;
  /**
   * The SID of the verify service that generated this attempt.
   */
  serviceSid?: string | null;
  /**
   * The SID of the verification that generated this attempt.
   */
  verificationSid?: string | null;
  /**
   * The date this Attempt was created
   */
  dateCreated?: Date | null;
  /**
   * The date this Attempt was updated
   */
  dateUpdated?: Date | null;
  conversionStatus?: VerificationAttemptConversionStatus;
  channel?: VerificationAttemptChannels;
  /**
   * An object containing the charge for this verification attempt.
   */
  price?: any | null;
  /**
   * An object containing the channel specific information for an attempt.
   */
  channelData?: any | null;
  url?: string | null;

  private get _proxy(): VerificationAttemptContext {
    this._context =
      this._context ||
      new VerificationAttemptContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a VerificationAttemptInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed VerificationAttemptInstance
   */
  fetch(
    callback?: (error: Error | null, item?: VerificationAttemptInstance) => any
  ): Promise<VerificationAttemptInstance> {
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
      serviceSid: this.serviceSid,
      verificationSid: this.verificationSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      conversionStatus: this.conversionStatus,
      channel: this.channel,
      price: this.price,
      channelData: this.channelData,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface VerificationAttemptListInstance {
  (sid: string): VerificationAttemptContext;
  get(sid: string): VerificationAttemptContext;

  /**
   * Streams VerificationAttemptInstance records from the API.
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
   * @param { VerificationAttemptListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | VerificationAttemptListInstanceEachOptions
      | ((
          item: VerificationAttemptInstance,
          done: (err?: Error) => void
        ) => void),
    callback?: (
      item: VerificationAttemptInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of VerificationAttemptInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: VerificationAttemptPage) => any
  ): Promise<VerificationAttemptPage>;
  /**
   * Lists VerificationAttemptInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { VerificationAttemptListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | VerificationAttemptListInstanceOptions
      | ((error: Error | null, items: VerificationAttemptInstance[]) => any),
    callback?: (
      error: Error | null,
      items: VerificationAttemptInstance[]
    ) => any
  ): Promise<VerificationAttemptInstance[]>;
  /**
   * Retrieve a single page of VerificationAttemptInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { VerificationAttemptListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | VerificationAttemptListInstancePageOptions
      | ((error: Error | null, items: VerificationAttemptPage) => any),
    callback?: (error: Error | null, items: VerificationAttemptPage) => any
  ): Promise<VerificationAttemptPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface VerificationAttemptSolution {}

interface VerificationAttemptListInstanceImpl
  extends VerificationAttemptListInstance {}
class VerificationAttemptListInstanceImpl
  implements VerificationAttemptListInstance
{
  _version?: V2;
  _solution?: VerificationAttemptSolution;
  _uri?: string;
}

export function VerificationAttemptListInstance(
  version: V2
): VerificationAttemptListInstance {
  const instance = ((sid) =>
    instance.get(sid)) as VerificationAttemptListInstanceImpl;

  instance.get = function get(sid): VerificationAttemptContext {
    return new VerificationAttemptContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Attempts`;

  instance.page = function page(
    params?:
      | VerificationAttemptListInstancePageOptions
      | ((error: Error | null, item?: VerificationAttemptPage) => any),
    callback?: (error: Error | null, item?: VerificationAttemptPage) => any
  ): Promise<VerificationAttemptPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["dateCreatedAfter"] !== undefined)
      data["DateCreatedAfter"] = serialize.iso8601DateTime(
        params["dateCreatedAfter"]
      );
    if (params["dateCreatedBefore"] !== undefined)
      data["DateCreatedBefore"] = serialize.iso8601DateTime(
        params["dateCreatedBefore"]
      );
    if (params["channelData.to"] !== undefined)
      data["ChannelData.To"] = params["channelData.to"];
    if (params["country"] !== undefined) data["Country"] = params["country"];
    if (params["channel"] !== undefined) data["Channel"] = params["channel"];
    if (params["verifyServiceSid"] !== undefined)
      data["VerifyServiceSid"] = params["verifyServiceSid"];
    if (params["verificationSid"] !== undefined)
      data["VerificationSid"] = params["verificationSid"];
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
        new VerificationAttemptPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: VerificationAttemptPage) => any
  ): Promise<VerificationAttemptPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new VerificationAttemptPage(this._version, payload, this._solution)
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

export class VerificationAttemptPage extends Page<
  V2,
  VerificationAttemptPayload,
  VerificationAttemptResource,
  VerificationAttemptInstance
> {
  /**
   * Initialize the VerificationAttemptPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: VerificationAttemptSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of VerificationAttemptInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: VerificationAttemptResource
  ): VerificationAttemptInstance {
    return new VerificationAttemptInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
