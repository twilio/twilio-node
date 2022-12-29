/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Supersim
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

type UsageRecordGranularity = "hour" | "day" | "all";

type UsageRecordGroup = "sim" | "fleet" | "network" | "isoCountry";

/**
 * Options to pass to each
 *
 * @property { string } [sim] SID or unique name of a Sim resource. Only show UsageRecords representing usage incurred by this Super SIM.
 * @property { string } [fleet] SID or unique name of a Fleet resource. Only show UsageRecords representing usage for Super SIMs belonging to this Fleet resource at the time the usage occurred.
 * @property { string } [network] SID of a Network resource. Only show UsageRecords representing usage on this network.
 * @property { string } [isoCountry] Alpha-2 ISO Country Code. Only show UsageRecords representing usage in this country.
 * @property { UsageRecordGroup } [group] Dimension over which to aggregate usage records. Can be: `sim`, `fleet`, `network`, `isoCountry`. Default is to not aggregate across any of these dimensions, UsageRecords will be aggregated into the time buckets described by the `Granularity` parameter.
 * @property { UsageRecordGranularity } [granularity] Time-based grouping that UsageRecords should be aggregated by. Can be: `hour`, `day`, or `all`. Default is `all`. `all` returns one UsageRecord that describes the usage for the entire period.
 * @property { Date } [startTime] Only include usage that occurred at or after this time, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Default is one month before the `end_time`.
 * @property { Date } [endTime] Only include usage that occurred before this time (exclusive), specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Default is the current time.
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
export interface UsageRecordListInstanceEachOptions {
  sim?: string;
  fleet?: string;
  network?: string;
  isoCountry?: string;
  group?: UsageRecordGroup;
  granularity?: UsageRecordGranularity;
  startTime?: Date;
  endTime?: Date;
  pageSize?: number;
  callback?: (item: UsageRecordInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [sim] SID or unique name of a Sim resource. Only show UsageRecords representing usage incurred by this Super SIM.
 * @property { string } [fleet] SID or unique name of a Fleet resource. Only show UsageRecords representing usage for Super SIMs belonging to this Fleet resource at the time the usage occurred.
 * @property { string } [network] SID of a Network resource. Only show UsageRecords representing usage on this network.
 * @property { string } [isoCountry] Alpha-2 ISO Country Code. Only show UsageRecords representing usage in this country.
 * @property { UsageRecordGroup } [group] Dimension over which to aggregate usage records. Can be: `sim`, `fleet`, `network`, `isoCountry`. Default is to not aggregate across any of these dimensions, UsageRecords will be aggregated into the time buckets described by the `Granularity` parameter.
 * @property { UsageRecordGranularity } [granularity] Time-based grouping that UsageRecords should be aggregated by. Can be: `hour`, `day`, or `all`. Default is `all`. `all` returns one UsageRecord that describes the usage for the entire period.
 * @property { Date } [startTime] Only include usage that occurred at or after this time, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Default is one month before the `end_time`.
 * @property { Date } [endTime] Only include usage that occurred before this time (exclusive), specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Default is the current time.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface UsageRecordListInstanceOptions {
  sim?: string;
  fleet?: string;
  network?: string;
  isoCountry?: string;
  group?: UsageRecordGroup;
  granularity?: UsageRecordGranularity;
  startTime?: Date;
  endTime?: Date;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [sim] SID or unique name of a Sim resource. Only show UsageRecords representing usage incurred by this Super SIM.
 * @property { string } [fleet] SID or unique name of a Fleet resource. Only show UsageRecords representing usage for Super SIMs belonging to this Fleet resource at the time the usage occurred.
 * @property { string } [network] SID of a Network resource. Only show UsageRecords representing usage on this network.
 * @property { string } [isoCountry] Alpha-2 ISO Country Code. Only show UsageRecords representing usage in this country.
 * @property { UsageRecordGroup } [group] Dimension over which to aggregate usage records. Can be: `sim`, `fleet`, `network`, `isoCountry`. Default is to not aggregate across any of these dimensions, UsageRecords will be aggregated into the time buckets described by the `Granularity` parameter.
 * @property { UsageRecordGranularity } [granularity] Time-based grouping that UsageRecords should be aggregated by. Can be: `hour`, `day`, or `all`. Default is `all`. `all` returns one UsageRecord that describes the usage for the entire period.
 * @property { Date } [startTime] Only include usage that occurred at or after this time, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Default is one month before the `end_time`.
 * @property { Date } [endTime] Only include usage that occurred before this time (exclusive), specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Default is the current time.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface UsageRecordListInstancePageOptions {
  sim?: string;
  fleet?: string;
  network?: string;
  isoCountry?: string;
  group?: UsageRecordGroup;
  granularity?: UsageRecordGranularity;
  startTime?: Date;
  endTime?: Date;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface UsageRecordListInstance {
  /**
   * Streams UsageRecordInstance records from the API.
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
   * @param { UsageRecordListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | UsageRecordListInstanceEachOptions
      | ((item: UsageRecordInstance, done: (err?: Error) => void) => void),
    callback?: (item: UsageRecordInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of UsageRecordInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: UsageRecordPage) => any
  ): Promise<UsageRecordPage>;
  /**
   * Lists UsageRecordInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UsageRecordListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | UsageRecordListInstanceOptions
      | ((error: Error | null, items: UsageRecordInstance[]) => any),
    callback?: (error: Error | null, items: UsageRecordInstance[]) => any
  ): Promise<UsageRecordInstance[]>;
  /**
   * Retrieve a single page of UsageRecordInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UsageRecordListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | UsageRecordListInstancePageOptions
      | ((error: Error | null, items: UsageRecordPage) => any),
    callback?: (error: Error | null, items: UsageRecordPage) => any
  ): Promise<UsageRecordPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface UsageRecordSolution {}

interface UsageRecordListInstanceImpl extends UsageRecordListInstance {}
class UsageRecordListInstanceImpl implements UsageRecordListInstance {
  _version?: V1;
  _solution?: UsageRecordSolution;
  _uri?: string;
}

export function UsageRecordListInstance(version: V1): UsageRecordListInstance {
  const instance = {} as UsageRecordListInstanceImpl;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/UsageRecords`;

  instance.page = function page(
    params?:
      | UsageRecordListInstancePageOptions
      | ((error: Error | null, item?: UsageRecordPage) => any),
    callback?: (error: Error | null, item?: UsageRecordPage) => any
  ): Promise<UsageRecordPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["sim"] !== undefined) data["Sim"] = params["sim"];
    if (params["fleet"] !== undefined) data["Fleet"] = params["fleet"];
    if (params["network"] !== undefined) data["Network"] = params["network"];
    if (params["isoCountry"] !== undefined)
      data["IsoCountry"] = params["isoCountry"];
    if (params["group"] !== undefined) data["Group"] = params["group"];
    if (params["granularity"] !== undefined)
      data["Granularity"] = params["granularity"];
    if (params["startTime"] !== undefined)
      data["StartTime"] = serialize.iso8601DateTime(params["startTime"]);
    if (params["endTime"] !== undefined)
      data["EndTime"] = serialize.iso8601DateTime(params["endTime"]);
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
        new UsageRecordPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: UsageRecordPage) => any
  ): Promise<UsageRecordPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new UsageRecordPage(this._version, payload, this._solution)
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

interface UsageRecordPayload extends TwilioResponsePayload {
  usage_records: UsageRecordResource[];
}

interface UsageRecordResource {
  account_sid?: string | null;
  sim_sid?: string | null;
  network_sid?: string | null;
  fleet_sid?: string | null;
  iso_country?: string | null;
  period?: any | null;
  data_upload?: number | null;
  data_download?: number | null;
  data_total?: number | null;
  data_total_billed?: number | null;
  billed_unit?: string | null;
}

export class UsageRecordInstance {
  constructor(protected _version: V1, payload: UsageRecordResource) {
    this.accountSid = payload.account_sid;
    this.simSid = payload.sim_sid;
    this.networkSid = payload.network_sid;
    this.fleetSid = payload.fleet_sid;
    this.isoCountry = payload.iso_country;
    this.period = payload.period;
    this.dataUpload = payload.data_upload;
    this.dataDownload = payload.data_download;
    this.dataTotal = payload.data_total;
    this.dataTotalBilled = payload.data_total_billed;
    this.billedUnit = payload.billed_unit;
  }

  /**
   * The SID of the Account that incurred the usage.
   */
  accountSid?: string | null;
  /**
   * SID of a Sim resource to which the UsageRecord belongs.
   */
  simSid?: string | null;
  /**
   * SID of the Network resource on which the usage occurred.
   */
  networkSid?: string | null;
  /**
   * SID of the Fleet resource on which the usage occurred.
   */
  fleetSid?: string | null;
  /**
   * Alpha-2 ISO Country Code of the country the usage occurred in.
   */
  isoCountry?: string | null;
  /**
   * The time period for which the usage is reported.
   */
  period?: any | null;
  /**
   * Total data uploaded in bytes, aggregated by the query parameters.
   */
  dataUpload?: number | null;
  /**
   * Total data downloaded in bytes, aggregated by the query parameters.
   */
  dataDownload?: number | null;
  /**
   * Total of data_upload and data_download.
   */
  dataTotal?: number | null;
  /**
   * Total amount in the `billed_unit` that was charged for the data uploaded or downloaded.
   */
  dataTotalBilled?: number | null;
  /**
   * The currency in which the billed amounts are measured, specified in the 3 letter ISO 4127 format (e.g. `USD`, `EUR`, `JPY`).
   */
  billedUnit?: string | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      simSid: this.simSid,
      networkSid: this.networkSid,
      fleetSid: this.fleetSid,
      isoCountry: this.isoCountry,
      period: this.period,
      dataUpload: this.dataUpload,
      dataDownload: this.dataDownload,
      dataTotal: this.dataTotal,
      dataTotalBilled: this.dataTotalBilled,
      billedUnit: this.billedUnit,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class UsageRecordPage extends Page<
  V1,
  UsageRecordPayload,
  UsageRecordResource,
  UsageRecordInstance
> {
  /**
   * Initialize the UsageRecordPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: UsageRecordSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of UsageRecordInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: UsageRecordResource): UsageRecordInstance {
    return new UsageRecordInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
