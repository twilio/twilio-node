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
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

type VerificationAttemptsSummaryChannels =
  | "sms"
  | "call"
  | "email"
  | "whatsapp";

/**
 * Options to pass to fetch a VerificationAttemptsSummaryInstance
 *
 * @property { string } [verifyServiceSid] Filter used to consider only Verification Attempts of the given verify service on the summary aggregation.
 * @property { Date } [dateCreatedAfter] Datetime filter used to consider only Verification Attempts created after this datetime on the summary aggregation. Given as GMT in RFC 2822 format.
 * @property { Date } [dateCreatedBefore] Datetime filter used to consider only Verification Attempts created before this datetime on the summary aggregation. Given as GMT in RFC 2822 format.
 * @property { string } [country] Filter used to consider only Verification Attempts sent to the specified destination country on the summary aggregation.
 * @property { VerificationAttemptsSummaryChannels } [channel] Filter Verification Attempts considered on the summary aggregation by communication channel. Valid values are `SMS` and `CALL`
 * @property { string } [destinationPrefix] Filter the Verification Attempts considered on the summary aggregation by Destination prefix. It is the prefix of a phone number in E.164 format.
 */
export interface VerificationAttemptsSummaryContextFetchOptions {
  verifyServiceSid?: string;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  country?: string;
  channel?: VerificationAttemptsSummaryChannels;
  destinationPrefix?: string;
}

export interface VerificationAttemptsSummaryContext {
  /**
   * Fetch a VerificationAttemptsSummaryInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed VerificationAttemptsSummaryInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: VerificationAttemptsSummaryInstance
    ) => any
  ): Promise<VerificationAttemptsSummaryInstance>;
  /**
   * Fetch a VerificationAttemptsSummaryInstance
   *
   * @param { VerificationAttemptsSummaryContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed VerificationAttemptsSummaryInstance
   */
  fetch(
    params: VerificationAttemptsSummaryContextFetchOptions,
    callback?: (
      error: Error | null,
      item?: VerificationAttemptsSummaryInstance
    ) => any
  ): Promise<VerificationAttemptsSummaryInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface VerificationAttemptsSummaryContextSolution {}

export class VerificationAttemptsSummaryContextImpl
  implements VerificationAttemptsSummaryContext
{
  protected _solution: VerificationAttemptsSummaryContextSolution;
  protected _uri: string;

  constructor(protected _version: V2) {
    this._solution = {};
    this._uri = `/Attempts/Summary`;
  }

  fetch(
    params?:
      | VerificationAttemptsSummaryContextFetchOptions
      | ((
          error: Error | null,
          item?: VerificationAttemptsSummaryInstance
        ) => any),
    callback?: (
      error: Error | null,
      item?: VerificationAttemptsSummaryInstance
    ) => any
  ): Promise<VerificationAttemptsSummaryInstance> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: VerificationAttemptsSummaryInstance
      ) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["verifyServiceSid"] !== undefined)
      data["VerifyServiceSid"] = params["verifyServiceSid"];
    if (params["dateCreatedAfter"] !== undefined)
      data["DateCreatedAfter"] = serialize.iso8601DateTime(
        params["dateCreatedAfter"]
      );
    if (params["dateCreatedBefore"] !== undefined)
      data["DateCreatedBefore"] = serialize.iso8601DateTime(
        params["dateCreatedBefore"]
      );
    if (params["country"] !== undefined) data["Country"] = params["country"];
    if (params["channel"] !== undefined) data["Channel"] = params["channel"];
    if (params["destinationPrefix"] !== undefined)
      data["DestinationPrefix"] = params["destinationPrefix"];

    const headers: any = {};

    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new VerificationAttemptsSummaryInstance(operationVersion, payload)
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

interface VerificationAttemptsSummaryPayload
  extends VerificationAttemptsSummaryResource {}

interface VerificationAttemptsSummaryResource {
  total_attempts?: number | null;
  total_converted?: number | null;
  total_unconverted?: number | null;
  conversion_rate_percentage?: number | null;
  url?: string | null;
}

export class VerificationAttemptsSummaryInstance {
  protected _solution: VerificationAttemptsSummaryContextSolution;
  protected _context?: VerificationAttemptsSummaryContext;

  constructor(
    protected _version: V2,
    payload: VerificationAttemptsSummaryResource
  ) {
    this.totalAttempts = deserialize.integer(payload.total_attempts);
    this.totalConverted = deserialize.integer(payload.total_converted);
    this.totalUnconverted = deserialize.integer(payload.total_unconverted);
    this.conversionRatePercentage = payload.conversion_rate_percentage;
    this.url = payload.url;

    this._solution = {};
  }

  /**
   * Total of attempts made.
   */
  totalAttempts?: number | null;
  /**
   * Total of attempts confirmed by the end user.
   */
  totalConverted?: number | null;
  /**
   * Total of attempts made that were not confirmed by the end user.
   */
  totalUnconverted?: number | null;
  /**
   * Percentage of the confirmed messages over the total.
   */
  conversionRatePercentage?: number | null;
  url?: string | null;

  private get _proxy(): VerificationAttemptsSummaryContext {
    this._context =
      this._context ||
      new VerificationAttemptsSummaryContextImpl(this._version);
    return this._context;
  }

  /**
   * Fetch a VerificationAttemptsSummaryInstance
   *
   * @param { VerificationAttemptsSummaryContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed VerificationAttemptsSummaryInstance
   */
  fetch(
    params?: VerificationAttemptsSummaryContextFetchOptions,
    callback?: (
      error: Error | null,
      item?: VerificationAttemptsSummaryInstance
    ) => any
  ): Promise<VerificationAttemptsSummaryInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      totalAttempts: this.totalAttempts,
      totalConverted: this.totalConverted,
      totalUnconverted: this.totalUnconverted,
      conversionRatePercentage: this.conversionRatePercentage,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface VerificationAttemptsSummaryListInstance {
  (): VerificationAttemptsSummaryContext;
  get(): VerificationAttemptsSummaryContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface VerificationAttemptsSummarySolution {}

interface VerificationAttemptsSummaryListInstanceImpl
  extends VerificationAttemptsSummaryListInstance {}
class VerificationAttemptsSummaryListInstanceImpl
  implements VerificationAttemptsSummaryListInstance
{
  _version?: V2;
  _solution?: VerificationAttemptsSummarySolution;
  _uri?: string;
}

export function VerificationAttemptsSummaryListInstance(
  version: V2
): VerificationAttemptsSummaryListInstance {
  const instance = (() =>
    instance.get()) as VerificationAttemptsSummaryListInstanceImpl;

  instance.get = function get(): VerificationAttemptsSummaryContext {
    return new VerificationAttemptsSummaryContextImpl(version);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

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
