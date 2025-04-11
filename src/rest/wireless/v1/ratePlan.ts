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
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * The way the home network (T-Mobile USA) will behave after a SIM\'s usage exceeds its `data_limit`. Can be either `block` or `throttle`. Default is `block`.
 */
export type RatePlanDataLimitStrategy = "block" | "throttle";

/**
 * Options to pass to update a RatePlanInstance
 */
export interface RatePlanContextUpdateOptions {
  /** An application-defined string that uniquely identifies the resource. It can be used in place of the resource\\\'s `sid` in the URL to address the resource. */
  uniqueName?: string;
  /** A descriptive string that you create to describe the resource. It does not have to be unique. */
  friendlyName?: string;
}

/**
 * Options to pass to create a RatePlanInstance
 */
export interface RatePlanListInstanceCreateOptions {
  /** An application-defined string that uniquely identifies the resource. It can be used in place of the resource\\\'s `sid` in the URL to address the resource. */
  uniqueName?: string;
  /** A descriptive string that you create to describe the resource. It does not have to be unique. */
  friendlyName?: string;
  /** Whether SIMs can use GPRS/3G/4G/LTE data connectivity. */
  dataEnabled?: boolean;
  /** The total data usage (download and upload combined) in Megabytes that the Network allows during one month on the home network (T-Mobile USA). The metering period begins the day of activation and ends on the same day in the following month. Can be up to 2TB and the default value is `1000`. */
  dataLimit?: number;
  /** The model used to meter data usage. Can be: `payg` and `quota-1`, `quota-10`, and `quota-50`. Learn more about the available [data metering models](https://www.twilio.com/docs/iot/wireless/api/rateplan-resource#payg-vs-quota-data-plans). */
  dataMetering?: string;
  /** Whether SIMs can make, send, and receive SMS using [Commands](https://www.twilio.com/docs/iot/wireless/api/command-resource). */
  messagingEnabled?: boolean;
  /** Deprecated. */
  voiceEnabled?: boolean;
  /** Whether SIMs can roam on networks other than the home network (T-Mobile USA) in the United States. See [national roaming](https://www.twilio.com/docs/iot/wireless/api/rateplan-resource#national-roaming). */
  nationalRoamingEnabled?: boolean;
  /** The list of services that SIMs capable of using GPRS/3G/4G/LTE data connectivity can use outside of the United States. Can contain: `data` and `messaging`. */
  internationalRoaming?: Array<string>;
  /** The total data usage (download and upload combined) in Megabytes that the Network allows during one month on non-home networks in the United States. The metering period begins the day of activation and ends on the same day in the following month. Can be up to 2TB. See [national roaming](https://www.twilio.com/docs/iot/wireless/api/rateplan-resource#national-roaming) for more info. */
  nationalRoamingDataLimit?: number;
  /** The total data usage (download and upload combined) in Megabytes that the Network allows during one month when roaming outside the United States. Can be up to 2TB. */
  internationalRoamingDataLimit?: number;
  /**  */
  dataLimitStrategy?: RatePlanDataLimitStrategy;
}
/**
 * Options to pass to each
 */
export interface RatePlanListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: RatePlanInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface RatePlanListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface RatePlanListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface RatePlanContext {
  /**
   * Remove a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RatePlanInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance>;

  /**
   * Update a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RatePlanInstance
   */
  update(
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance>;
  /**
   * Update a RatePlanInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RatePlanInstance
   */
  update(
    params: RatePlanContextUpdateOptions,
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RatePlanContextSolution {
  sid: string;
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

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
        headers,
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new RatePlanInstance(operationVersion, payload, instance._solution.sid)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | RatePlanContextUpdateOptions
      | ((error: Error | null, item?: RatePlanInstance) => any),
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance> {
    if (params instanceof Function) {
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
    headers["Accept"] = "application/json";

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
        new RatePlanInstance(operationVersion, payload, instance._solution.sid)
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

interface RatePlanPayload extends TwilioResponsePayload {
  rate_plans: RatePlanResource[];
}

interface RatePlanResource {
  sid: string;
  unique_name: string;
  account_sid: string;
  friendly_name: string;
  data_enabled: boolean;
  data_metering: string;
  data_limit: number;
  messaging_enabled: boolean;
  voice_enabled: boolean;
  national_roaming_enabled: boolean;
  national_roaming_data_limit: number;
  international_roaming: Array<string>;
  international_roaming_data_limit: number;
  date_created: Date;
  date_updated: Date;
  url: string;
}

export class RatePlanInstance {
  protected _solution: RatePlanContextSolution;
  protected _context?: RatePlanContext;

  constructor(protected _version: V1, payload: RatePlanResource, sid?: string) {
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
   * The unique string that we created to identify the RatePlan resource.
   */
  sid: string;
  /**
   * An application-defined string that uniquely identifies the resource. It can be used in place of the resource\'s `sid` in the URL to address the resource.
   */
  uniqueName: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the RatePlan resource.
   */
  accountSid: string;
  /**
   * The string that you assigned to describe the resource.
   */
  friendlyName: string;
  /**
   * Whether SIMs can use GPRS/3G/4G/LTE data connectivity.
   */
  dataEnabled: boolean;
  /**
   * The model used to meter data usage. Can be: `payg` and `quota-1`, `quota-10`, and `quota-50`. Learn more about the available [data metering models](https://www.twilio.com/docs/iot/wireless/api/rateplan-resource#payg-vs-quota-data-plans).
   */
  dataMetering: string;
  /**
   * The total data usage (download and upload combined) in Megabytes that the Network allows during one month on the home network (T-Mobile USA). The metering period begins the day of activation and ends on the same day in the following month. Can be up to 2TB.
   */
  dataLimit: number;
  /**
   * Whether SIMs can make, send, and receive SMS using [Commands](https://www.twilio.com/docs/iot/wireless/api/command-resource).
   */
  messagingEnabled: boolean;
  /**
   * Deprecated. Whether SIMs can make and receive voice calls.
   */
  voiceEnabled: boolean;
  /**
   * Whether SIMs can roam on networks other than the home network (T-Mobile USA) in the United States. See [national roaming](https://www.twilio.com/docs/iot/wireless/api/rateplan-resource#national-roaming).
   */
  nationalRoamingEnabled: boolean;
  /**
   * The total data usage (download and upload combined) in Megabytes that the Network allows during one month on non-home networks in the United States. The metering period begins the day of activation and ends on the same day in the following month. Can be up to 2TB.
   */
  nationalRoamingDataLimit: number;
  /**
   * The list of services that SIMs capable of using GPRS/3G/4G/LTE data connectivity can use outside of the United States. Can contain: `data` and `messaging`.
   */
  internationalRoaming: Array<string>;
  /**
   * The total data usage (download and upload combined) in Megabytes that the Network allows during one month when roaming outside the United States. Can be up to 2TB.
   */
  internationalRoamingDataLimit: number;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
   */
  dateUpdated: Date;
  /**
   * The absolute URL of the resource.
   */
  url: string;

  private get _proxy(): RatePlanContext {
    this._context =
      this._context ||
      new RatePlanContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a RatePlanInstance
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
   * Fetch a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RatePlanInstance
   */
  fetch(
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RatePlanInstance
   */
  update(
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance>;
  /**
   * Update a RatePlanInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RatePlanInstance
   */
  update(
    params: RatePlanContextUpdateOptions,
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance> {
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

export interface RatePlanSolution {}

export interface RatePlanListInstance {
  _version: V1;
  _solution: RatePlanSolution;
  _uri: string;

  (sid: string): RatePlanContext;
  get(sid: string): RatePlanContext;

  /**
   * Create a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RatePlanInstance
   */
  create(
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance>;
  /**
   * Create a RatePlanInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed RatePlanInstance
   */
  create(
    params: RatePlanListInstanceCreateOptions,
    callback?: (error: Error | null, item?: RatePlanInstance) => any
  ): Promise<RatePlanInstance>;

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
    callback?: (item: RatePlanInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: RatePlanListInstanceEachOptions,
    callback?: (item: RatePlanInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of RatePlanInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: RatePlanPage) => any
  ): Promise<RatePlanPage>;
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
    callback?: (error: Error | null, items: RatePlanInstance[]) => any
  ): Promise<RatePlanInstance[]>;
  list(
    params: RatePlanListInstanceOptions,
    callback?: (error: Error | null, items: RatePlanInstance[]) => any
  ): Promise<RatePlanInstance[]>;
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
    callback?: (error: Error | null, items: RatePlanPage) => any
  ): Promise<RatePlanPage>;
  page(
    params: RatePlanListInstancePageOptions,
    callback?: (error: Error | null, items: RatePlanPage) => any
  ): Promise<RatePlanPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function RatePlanListInstance(version: V1): RatePlanListInstance {
  const instance = ((sid) => instance.get(sid)) as RatePlanListInstance;

  instance.get = function get(sid): RatePlanContext {
    return new RatePlanContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/RatePlans`;

  instance.create = function create(
    params?:
      | RatePlanListInstanceCreateOptions
      | ((error: Error | null, items: RatePlanInstance) => any),
    callback?: (error: Error | null, items: RatePlanInstance) => any
  ): Promise<RatePlanInstance> {
    if (params instanceof Function) {
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
        (e: string) => e
      );
    if (params["nationalRoamingDataLimit"] !== undefined)
      data["NationalRoamingDataLimit"] = params["nationalRoamingDataLimit"];
    if (params["internationalRoamingDataLimit"] !== undefined)
      data["InternationalRoamingDataLimit"] =
        params["internationalRoamingDataLimit"];
    if (params["dataLimitStrategy"] !== undefined)
      data["DataLimitStrategy"] = params["dataLimitStrategy"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new RatePlanInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | RatePlanListInstancePageOptions
      | ((error: Error | null, items: RatePlanPage) => any),
    callback?: (error: Error | null, items: RatePlanPage) => any
  ): Promise<RatePlanPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

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
        new RatePlanPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: RatePlanPage) => any
  ): Promise<RatePlanPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new RatePlanPage(instance._version, payload, instance._solution)
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
  getInstance(payload: RatePlanResource): RatePlanInstance {
    return new RatePlanInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
