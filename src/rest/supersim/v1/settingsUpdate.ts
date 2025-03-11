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

export type SettingsUpdateStatus =
  | "scheduled"
  | "in-progress"
  | "successful"
  | "failed";

/**
 * Options to pass to each
 */
export interface SettingsUpdateListInstanceEachOptions {
  /** Filter the Settings Updates by a Super SIM\'s SID or UniqueName. */
  sim?: string;
  /** Filter the Settings Updates by status. Can be `scheduled`, `in-progress`, `successful`, or `failed`. */
  status?: SettingsUpdateStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: SettingsUpdateInstance,
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
export interface SettingsUpdateListInstanceOptions {
  /** Filter the Settings Updates by a Super SIM\'s SID or UniqueName. */
  sim?: string;
  /** Filter the Settings Updates by status. Can be `scheduled`, `in-progress`, `successful`, or `failed`. */
  status?: SettingsUpdateStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface SettingsUpdateListInstancePageOptions {
  /** Filter the Settings Updates by a Super SIM\'s SID or UniqueName. */
  sim?: string;
  /** Filter the Settings Updates by status. Can be `scheduled`, `in-progress`, `successful`, or `failed`. */
  status?: SettingsUpdateStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface SettingsUpdateSolution {}

export interface SettingsUpdateListInstance {
  _version: V1;
  _solution: SettingsUpdateSolution;
  _uri: string;

  /**
   * Streams SettingsUpdateInstance records from the API.
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
   * @param { SettingsUpdateListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: SettingsUpdateInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: SettingsUpdateListInstanceEachOptions,
    callback?: (
      item: SettingsUpdateInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of SettingsUpdateInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: SettingsUpdatePage) => any
  ): Promise<SettingsUpdatePage>;
  /**
   * Lists SettingsUpdateInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SettingsUpdateListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: SettingsUpdateInstance[]) => any
  ): Promise<SettingsUpdateInstance[]>;
  list(
    params: SettingsUpdateListInstanceOptions,
    callback?: (error: Error | null, items: SettingsUpdateInstance[]) => any
  ): Promise<SettingsUpdateInstance[]>;
  /**
   * Retrieve a single page of SettingsUpdateInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SettingsUpdateListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: SettingsUpdatePage) => any
  ): Promise<SettingsUpdatePage>;
  page(
    params: SettingsUpdateListInstancePageOptions,
    callback?: (error: Error | null, items: SettingsUpdatePage) => any
  ): Promise<SettingsUpdatePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SettingsUpdateListInstance(
  version: V1
): SettingsUpdateListInstance {
  const instance = {} as SettingsUpdateListInstance;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/SettingsUpdates`;

  instance.page = function page(
    params?:
      | SettingsUpdateListInstancePageOptions
      | ((error: Error | null, items: SettingsUpdatePage) => any),
    callback?: (error: Error | null, items: SettingsUpdatePage) => any
  ): Promise<SettingsUpdatePage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["sim"] !== undefined) data["Sim"] = params["sim"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
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
        new SettingsUpdatePage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: SettingsUpdatePage) => any
  ): Promise<SettingsUpdatePage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new SettingsUpdatePage(instance._version, payload, instance._solution)
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

interface SettingsUpdatePayload extends TwilioResponsePayload {
  settings_updates: SettingsUpdateResource[];
}

interface SettingsUpdateResource {
  sid: string;
  iccid: string;
  sim_sid: string;
  status: SettingsUpdateStatus;
  packages: Array<Record<string, object>>;
  date_completed: Date;
  date_created: Date;
  date_updated: Date;
}

export class SettingsUpdateInstance {
  constructor(protected _version: V1, payload: SettingsUpdateResource) {
    this.sid = payload.sid;
    this.iccid = payload.iccid;
    this.simSid = payload.sim_sid;
    this.status = payload.status;
    this.packages = payload.packages;
    this.dateCompleted = deserialize.iso8601DateTime(payload.date_completed);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
  }

  /**
   * The unique identifier of this Settings Update.
   */
  sid: string;
  /**
   * The [ICCID](https://en.wikipedia.org/wiki/SIM_card#ICCID) associated with the SIM.
   */
  iccid: string;
  /**
   * The SID of the Super SIM to which this Settings Update was applied.
   */
  simSid: string;
  status: SettingsUpdateStatus;
  /**
   * Array containing the different Settings Packages that will be applied to the SIM after the update completes. Each object within the array indicates the name and the version of the Settings Package that will be on the SIM if the update is successful.
   */
  packages: Array<Record<string, object>>;
  /**
   * The time, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, when the update successfully completed and the new settings were applied to the SIM.
   */
  dateCompleted: Date;
  /**
   * The date that this Settings Update was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date that this Settings Update was updated, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      iccid: this.iccid,
      simSid: this.simSid,
      status: this.status,
      packages: this.packages,
      dateCompleted: this.dateCompleted,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class SettingsUpdatePage extends Page<
  V1,
  SettingsUpdatePayload,
  SettingsUpdateResource,
  SettingsUpdateInstance
> {
  /**
   * Initialize the SettingsUpdatePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: SettingsUpdateSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SettingsUpdateInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SettingsUpdateResource): SettingsUpdateInstance {
    return new SettingsUpdateInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
