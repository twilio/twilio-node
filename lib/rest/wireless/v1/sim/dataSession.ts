/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Wireless
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

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
export interface DataSessionListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: DataSessionInstance, done: (err?: Error) => void) => void;
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
export interface DataSessionListInstanceOptions {
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
export interface DataSessionListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface DataSessionSolution {
  simSid?: string;
}

export interface DataSessionListInstance {
  _version: V1;
  _solution: DataSessionSolution;
  _uri: string;

  /**
   * Streams DataSessionInstance records from the API.
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
    callback?: (item: DataSessionInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams DataSessionInstance records from the API.
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
   * @param { DataSessionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: DataSessionListInstanceEachOptions,
    callback?: (item: DataSessionInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of DataSessionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: DataSessionPage) => any
  ): Promise<DataSessionPage>;
  /**
   * Retrieve a single target page of DataSessionInstance records from the API.
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
    callback?: (error: Error | null, items: DataSessionPage) => any
  ): Promise<DataSessionPage>;
  getPage(params?: any, callback?: any): Promise<DataSessionPage>;
  /**
   * Lists DataSessionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: DataSessionInstance[]) => any
  ): Promise<DataSessionInstance[]>;
  /**
   * Lists DataSessionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DataSessionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: DataSessionListInstanceOptions,
    callback?: (error: Error | null, items: DataSessionInstance[]) => any
  ): Promise<DataSessionInstance[]>;
  list(params?: any, callback?: any): Promise<DataSessionInstance[]>;
  /**
   * Retrieve a single page of DataSessionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: DataSessionPage) => any
  ): Promise<DataSessionPage>;
  /**
   * Retrieve a single page of DataSessionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DataSessionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: DataSessionListInstancePageOptions,
    callback?: (error: Error | null, items: DataSessionPage) => any
  ): Promise<DataSessionPage>;
  page(params?: any, callback?: any): Promise<DataSessionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function DataSessionListInstance(
  version: V1,
  simSid: string
): DataSessionListInstance {
  if (!isValidPathParam(simSid)) {
    throw new Error("Parameter 'simSid' is not valid.");
  }

  const instance = {} as DataSessionListInstance;

  instance._version = version;
  instance._solution = { simSid };
  instance._uri = `/Sims/${simSid}/DataSessions`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<DataSessionPage> {
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
        new DataSessionPage(operationVersion, payload, instance._solution)
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
  ): Promise<DataSessionPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new DataSessionPage(instance._version, payload, instance._solution)
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

interface DataSessionPayload extends TwilioResponsePayload {
  data_sessions: DataSessionResource[];
}

interface DataSessionResource {
  sid?: string | null;
  sim_sid?: string | null;
  account_sid?: string | null;
  radio_link?: string | null;
  operator_mcc?: string | null;
  operator_mnc?: string | null;
  operator_country?: string | null;
  operator_name?: string | null;
  cell_id?: string | null;
  cell_location_estimate?: any | null;
  packets_uploaded?: number | null;
  packets_downloaded?: number | null;
  last_updated?: Date | null;
  start?: Date | null;
  end?: Date | null;
  imei?: string | null;
}

export class DataSessionInstance {
  constructor(
    protected _version: V1,
    payload: DataSessionResource,
    simSid: string
  ) {
    this.sid = payload.sid;
    this.simSid = payload.sim_sid;
    this.accountSid = payload.account_sid;
    this.radioLink = payload.radio_link;
    this.operatorMcc = payload.operator_mcc;
    this.operatorMnc = payload.operator_mnc;
    this.operatorCountry = payload.operator_country;
    this.operatorName = payload.operator_name;
    this.cellId = payload.cell_id;
    this.cellLocationEstimate = payload.cell_location_estimate;
    this.packetsUploaded = deserialize.integer(payload.packets_uploaded);
    this.packetsDownloaded = deserialize.integer(payload.packets_downloaded);
    this.lastUpdated = deserialize.iso8601DateTime(payload.last_updated);
    this.start = deserialize.iso8601DateTime(payload.start);
    this.end = deserialize.iso8601DateTime(payload.end);
    this.imei = payload.imei;
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the Sim resource that the Data Session is for
   */
  simSid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The generation of wireless technology that the device was using
   */
  radioLink?: string | null;
  /**
   * The \'mobile country code\' is the unique ID of the home country where the Data Session took place
   */
  operatorMcc?: string | null;
  /**
   * The \'mobile network code\' is the unique ID specific to the mobile operator network where the Data Session took place
   */
  operatorMnc?: string | null;
  /**
   * The three letter country code representing where the device\'s Data Session took place
   */
  operatorCountry?: string | null;
  /**
   * The friendly name of the mobile operator network that the SIM-connected device is attached to
   */
  operatorName?: string | null;
  /**
   * The unique ID of the cellular tower that the device was attached to at the moment when the Data Session was last updated
   */
  cellId?: string | null;
  /**
   * An object with the estimated location where the device\'s Data Session took place
   */
  cellLocationEstimate?: any | null;
  /**
   * The number of packets uploaded by the device between the start time and when the Data Session was last updated
   */
  packetsUploaded?: number | null;
  /**
   * The number of packets downloaded by the device between the start time and when the Data Session was last updated
   */
  packetsDownloaded?: number | null;
  /**
   * The date that the resource was last updated, given as GMT in ISO 8601 format
   */
  lastUpdated?: Date | null;
  /**
   * The date that the Data Session started, given as GMT in ISO 8601 format
   */
  start?: Date | null;
  /**
   * The date that the record ended, given as GMT in ISO 8601 format
   */
  end?: Date | null;
  /**
   * The unique ID of the device using the SIM to connect
   */
  imei?: string | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      simSid: this.simSid,
      accountSid: this.accountSid,
      radioLink: this.radioLink,
      operatorMcc: this.operatorMcc,
      operatorMnc: this.operatorMnc,
      operatorCountry: this.operatorCountry,
      operatorName: this.operatorName,
      cellId: this.cellId,
      cellLocationEstimate: this.cellLocationEstimate,
      packetsUploaded: this.packetsUploaded,
      packetsDownloaded: this.packetsDownloaded,
      lastUpdated: this.lastUpdated,
      start: this.start,
      end: this.end,
      imei: this.imei,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class DataSessionPage extends Page<
  V1,
  DataSessionPayload,
  DataSessionResource,
  DataSessionInstance
> {
  /**
   * Initialize the DataSessionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: DataSessionSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of DataSessionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DataSessionResource): DataSessionInstance {
    return new DataSessionInstance(
      this._version,
      payload,
      this._solution.simSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
