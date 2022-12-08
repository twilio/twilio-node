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
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to update a RatePlanInstance
 *
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. It can be used in place of the resource\\\'s `sid` in the URL to address the resource.
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It does not have to be unique.
 */
export interface RatePlanContextUpdateOptions {
  uniqueName?: string;
  friendlyName?: string;
}

/**
 * Options to pass to create a RatePlanInstance
 *
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. It can be used in place of the resource\\\'s `sid` in the URL to address the resource.
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It does not have to be unique.
 * @property { boolean } [dataEnabled] Whether SIMs can use GPRS/3G/4G/LTE data connectivity.
 * @property { number } [dataLimit] The total data usage (download and upload combined) in Megabytes that the Network allows during one month on the home network (T-Mobile USA). The metering period begins the day of activation and ends on the same day in the following month. Can be up to 2TB and the default value is `1000`.
 * @property { string } [dataMetering] The model used to meter data usage. Can be: `payg` and `quota-1`, `quota-10`, and `quota-50`. Learn more about the available [data metering models](https://www.twilio.com/docs/wireless/api/rateplan-resource#payg-vs-quota-data-plans).
 * @property { boolean } [messagingEnabled] Whether SIMs can make, send, and receive SMS using [Commands](https://www.twilio.com/docs/wireless/api/command-resource).
 * @property { boolean } [voiceEnabled] Deprecated.
 * @property { boolean } [nationalRoamingEnabled] Whether SIMs can roam on networks other than the home network (T-Mobile USA) in the United States. See [national roaming](https://www.twilio.com/docs/wireless/api/rateplan-resource#national-roaming).
 * @property { Array<string> } [internationalRoaming] The list of services that SIMs capable of using GPRS/3G/4G/LTE data connectivity can use outside of the United States. Can contain: `data` and `messaging`.
 * @property { number } [nationalRoamingDataLimit] The total data usage (download and upload combined) in Megabytes that the Network allows during one month on non-home networks in the United States. The metering period begins the day of activation and ends on the same day in the following month. Can be up to 2TB. See [national roaming](https://www.twilio.com/docs/wireless/api/rateplan-resource#national-roaming) for more info.
 * @property { number } [internationalRoamingDataLimit] The total data usage (download and upload combined) in Megabytes that the Network allows during one month when roaming outside the United States. Can be up to 2TB.
 */
export interface RatePlanListInstanceCreateOptions {
  uniqueName?: string;
  friendlyName?: string;
  dataEnabled?: boolean;
  dataLimit?: number;
  dataMetering?: string;
  messagingEnabled?: boolean;
  voiceEnabled?: boolean;
  nationalRoamingEnabled?: boolean;
  internationalRoaming?: Array<string>;
  nationalRoamingDataLimit?: number;
  internationalRoamingDataLimit?: number;
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
export interface RatePlanListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: RatePlanInstance, done: (err?: Error) => void) => void;
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
export interface RatePlanListInstanceOptions {
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
export interface RatePlanListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface RatePlanContext {
  /**
   * Remove a RatePlanInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a RatePlanInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RatePlanInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance>;

  /**
   * Update a RatePlanInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RatePlanInstance
   */
  update(
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance>;
  /**
   * Update a RatePlanInstance
   *
   * @param { RatePlanContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RatePlanInstance
   */
  update(
    params: RatePlanContextUpdateOptions,
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance>;
  update(params?: any, callback?: any): Promise<RatePlanInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RatePlanContextSolution {
  sid?: string;
}

export class RatePlanContextImpl implements RatePlanContext {
  protected _solution: RatePlanContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/RatePlans/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
    let operationVersion = this._version,
      operationPromise = operationVersion.remove({
        uri: this._uri,
        method: "delete",
      });

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<RatePlanInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new RatePlanInstance(operationVersion, payload, this._solution.sid)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<RatePlanInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = this._version,
      operationPromise = operationVersion.update({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new RatePlanInstance(operationVersion, payload, this._solution.sid)
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

interface RatePlanPayload
  extends RatePlanResource,
    Page.TwilioResponsePayload {}

interface RatePlanResource {
  sid?: string | null;
  unique_name?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  data_enabled?: boolean | null;
  data_metering?: string | null;
  data_limit?: number | null;
  messaging_enabled?: boolean | null;
  voice_enabled?: boolean | null;
  national_roaming_enabled?: boolean | null;
  national_roaming_data_limit?: number | null;
  international_roaming?: Array<string> | null;
  international_roaming_data_limit?: number | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
}

export class RatePlanInstance {
  protected _solution: RatePlanContextSolution;
  protected _context?: RatePlanContext;

  constructor(protected _version: V1, payload: RatePlanPayload, sid?: string) {
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.dataEnabled = payload.data_enabled;
    this.dataMetering = payload.data_metering;
    this.dataLimit = deserialize.integer(payload.data_limit);
    this.messagingEnabled = payload.messaging_enabled;
    this.voiceEnabled = payload.voice_enabled;
    this.nationalRoamingEnabled = payload.national_roaming_enabled;
    this.nationalRoamingDataLimit = deserialize.integer(
      payload.national_roaming_data_limit
    );
    this.internationalRoaming = payload.international_roaming;
    this.internationalRoamingDataLimit = deserialize.integer(
      payload.international_roaming_data_limit
    );
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * An application-defined string that uniquely identifies the resource
   */
  uniqueName?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * Whether SIMs can use GPRS/3G/4G/LTE data connectivity
   */
  dataEnabled?: boolean | null;
  /**
   * The model used to meter data usage
   */
  dataMetering?: string | null;
  /**
   * The total data usage in Megabytes that the Network allows during one month on the home network
   */
  dataLimit?: number | null;
  /**
   * Whether SIMs can make, send, and receive SMS using Commands
   */
  messagingEnabled?: boolean | null;
  /**
   * Deprecated. Whether SIMs can make and receive voice calls
   */
  voiceEnabled?: boolean | null;
  /**
   * Whether SIMs can roam on networks other than the home network in the United States
   */
  nationalRoamingEnabled?: boolean | null;
  /**
   * The total data usage in Megabytes that the Network allows during one month on non-home networks in the United States
   */
  nationalRoamingDataLimit?: number | null;
  /**
   * The services that SIMs capable of using GPRS/3G/4G/LTE data connectivity can use outside of the United States
   */
  internationalRoaming?: Array<string> | null;
  /**
   * The total data usage (download and upload combined) in Megabytes that the Network allows during one month when roaming outside the United States
   */
  internationalRoamingDataLimit?: number | null;
  /**
   * The date when the resource was created, given as GMT in ISO 8601 format
   */
  dateCreated?: Date | null;
  /**
   * The date when the resource was last updated, given as GMT in ISO 8601 format
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;

  private get _proxy(): RatePlanContext {
    this._context =
      this._context ||
      new RatePlanContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a RatePlanInstance
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
   * Fetch a RatePlanInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RatePlanInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a RatePlanInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RatePlanInstance
   */
  update(
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance>;
  /**
   * Update a RatePlanInstance
   *
   * @param { RatePlanContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RatePlanInstance
   */
  update(
    params: RatePlanContextUpdateOptions,
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance>;
  update(params?: any, callback?: any): Promise<RatePlanInstance> {
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
      uniqueName: this.uniqueName,
      accountSid: this.accountSid,
      friendlyName: this.friendlyName,
      dataEnabled: this.dataEnabled,
      dataMetering: this.dataMetering,
      dataLimit: this.dataLimit,
      messagingEnabled: this.messagingEnabled,
      voiceEnabled: this.voiceEnabled,
      nationalRoamingEnabled: this.nationalRoamingEnabled,
      nationalRoamingDataLimit: this.nationalRoamingDataLimit,
      internationalRoaming: this.internationalRoaming,
      internationalRoamingDataLimit: this.internationalRoamingDataLimit,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface RatePlanListInstance {
  (sid: string): RatePlanContext;
  get(sid: string): RatePlanContext;

  /**
   * Create a RatePlanInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RatePlanInstance
   */
  create(
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance>;
  /**
   * Create a RatePlanInstance
   *
   * @param { RatePlanListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RatePlanInstance
   */
  create(
    params: RatePlanListInstanceCreateOptions,
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance>;
  create(params?: any, callback?: any): Promise<RatePlanInstance>;

  /**
   * Streams RatePlanInstance records from the API.
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
    callback?: (item: RatePlanInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams RatePlanInstance records from the API.
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
   * @param { RatePlanListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: RatePlanListInstanceEachOptions,
    callback?: (item: RatePlanInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of RatePlanInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: RatePlanPage) => any
  ): Promise<RatePlanPage>;
  /**
   * Retrieve a single target page of RatePlanInstance records from the API.
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
    callback?: (error: Error | null, items: RatePlanPage) => any
  ): Promise<RatePlanPage>;
  getPage(params?: any, callback?: any): Promise<RatePlanPage>;
  /**
   * Lists RatePlanInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: RatePlanInstance[]) => any
  ): Promise<RatePlanInstance[]>;
  /**
   * Lists RatePlanInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RatePlanListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: RatePlanListInstanceOptions,
    callback?: (error: Error | null, items: RatePlanInstance[]) => any
  ): Promise<RatePlanInstance[]>;
  list(params?: any, callback?: any): Promise<RatePlanInstance[]>;
  /**
   * Retrieve a single page of RatePlanInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: RatePlanPage) => any
  ): Promise<RatePlanPage>;
  /**
   * Retrieve a single page of RatePlanInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { RatePlanListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: RatePlanListInstancePageOptions,
    callback?: (error: Error | null, items: RatePlanPage) => any
  ): Promise<RatePlanPage>;
  page(params?: any, callback?: any): Promise<RatePlanPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RatePlanSolution {}

interface RatePlanListInstanceImpl extends RatePlanListInstance {}
class RatePlanListInstanceImpl implements RatePlanListInstance {
  _version?: V1;
  _solution?: RatePlanSolution;
  _uri?: string;
}

export function RatePlanListInstance(version: V1): RatePlanListInstance {
  const instance = ((sid) => instance.get(sid)) as RatePlanListInstanceImpl;

  instance.get = function get(sid): RatePlanContext {
    return new RatePlanContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/RatePlans`;

  instance.create = function create(
    params?: any,
    callback?: any
  ): Promise<RatePlanInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["dataEnabled"] !== undefined)
      data["DataEnabled"] = serialize.bool(params["dataEnabled"]);
    if (params["dataLimit"] !== undefined)
      data["DataLimit"] = params["dataLimit"];
    if (params["dataMetering"] !== undefined)
      data["DataMetering"] = params["dataMetering"];
    if (params["messagingEnabled"] !== undefined)
      data["MessagingEnabled"] = serialize.bool(params["messagingEnabled"]);
    if (params["voiceEnabled"] !== undefined)
      data["VoiceEnabled"] = serialize.bool(params["voiceEnabled"]);
    if (params["nationalRoamingEnabled"] !== undefined)
      data["NationalRoamingEnabled"] = serialize.bool(
        params["nationalRoamingEnabled"]
      );
    if (params["internationalRoaming"] !== undefined)
      data["InternationalRoaming"] = serialize.map(
        params["internationalRoaming"],
        (e) => e
      );
    if (params["nationalRoamingDataLimit"] !== undefined)
      data["NationalRoamingDataLimit"] = params["nationalRoamingDataLimit"];
    if (params["internationalRoamingDataLimit"] !== undefined)
      data["InternationalRoamingDataLimit"] =
        params["internationalRoamingDataLimit"];

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
      (payload) => new RatePlanInstance(operationVersion, payload)
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
  ): Promise<RatePlanPage> {
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
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new RatePlanPage(operationVersion, payload, this._solution)
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
  ): Promise<RatePlanPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new RatePlanPage(this._version, payload, this._solution)
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

export class RatePlanPage extends Page<
  V1,
  RatePlanPayload,
  RatePlanResource,
  RatePlanInstance
> {
  /**
   * Initialize the RatePlanPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: RatePlanSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of RatePlanInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RatePlanPayload): RatePlanInstance {
    return new RatePlanInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
