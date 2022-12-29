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
import { BillingPeriodListInstance } from "./sim/billingPeriod";
import { SimIpAddressListInstance } from "./sim/simIpAddress";

type SimStatus = "new" | "ready" | "active" | "inactive" | "scheduled";

type SimStatusUpdate = "ready" | "active" | "inactive";

/**
 * Options to pass to update a SimInstance
 *
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. It can be used in place of the resource\\\'s `sid` in the URL to address the resource.
 * @property { SimStatusUpdate } [status]
 * @property { string } [fleet] The SID or unique name of the Fleet to which the SIM resource should be assigned.
 * @property { string } [callbackUrl] The URL we should call using the `callback_method` after an asynchronous update has finished.
 * @property { string } [callbackMethod] The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default is POST.
 * @property { string } [accountSid] The SID of the Account to which the Sim resource should belong. The Account SID can only be that of the requesting Account or that of a Subaccount of the requesting Account. Only valid when the Sim resource\\\'s status is new.
 */
export interface SimContextUpdateOptions {
  uniqueName?: string;
  status?: SimStatusUpdate;
  fleet?: string;
  callbackUrl?: string;
  callbackMethod?: string;
  accountSid?: string;
}

/**
 * Options to pass to create a SimInstance
 *
 * @property { string } iccid The [ICCID](https://en.wikipedia.org/wiki/Subscriber_identity_module#ICCID) of the Super SIM to be added to your Account.
 * @property { string } registrationCode The 10-digit code required to claim the Super SIM for your Account.
 */
export interface SimListInstanceCreateOptions {
  iccid: string;
  registrationCode: string;
}
/**
 * Options to pass to each
 *
 * @property { SimStatus } [status] The status of the Sim resources to read. Can be `new`, `ready`, `active`, `inactive`, or `scheduled`.
 * @property { string } [fleet] The SID or unique name of the Fleet to which a list of Sims are assigned.
 * @property { string } [iccid] The [ICCID](https://en.wikipedia.org/wiki/Subscriber_identity_module#ICCID) associated with a Super SIM to filter the list by. Passing this parameter will always return a list containing zero or one SIMs.
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
export interface SimListInstanceEachOptions {
  status?: SimStatus;
  fleet?: string;
  iccid?: string;
  pageSize?: number;
  callback?: (item: SimInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { SimStatus } [status] The status of the Sim resources to read. Can be `new`, `ready`, `active`, `inactive`, or `scheduled`.
 * @property { string } [fleet] The SID or unique name of the Fleet to which a list of Sims are assigned.
 * @property { string } [iccid] The [ICCID](https://en.wikipedia.org/wiki/Subscriber_identity_module#ICCID) associated with a Super SIM to filter the list by. Passing this parameter will always return a list containing zero or one SIMs.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SimListInstanceOptions {
  status?: SimStatus;
  fleet?: string;
  iccid?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { SimStatus } [status] The status of the Sim resources to read. Can be `new`, `ready`, `active`, `inactive`, or `scheduled`.
 * @property { string } [fleet] The SID or unique name of the Fleet to which a list of Sims are assigned.
 * @property { string } [iccid] The [ICCID](https://en.wikipedia.org/wiki/Subscriber_identity_module#ICCID) associated with a Super SIM to filter the list by. Passing this parameter will always return a list containing zero or one SIMs.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface SimListInstancePageOptions {
  status?: SimStatus;
  fleet?: string;
  iccid?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface SimContext {
  billingPeriods: BillingPeriodListInstance;
  simIpAddresses: SimIpAddressListInstance;

  /**
   * Fetch a SimInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SimInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SimInstance) => any
  ): Promise<SimInstance>;

  /**
   * Update a SimInstance
   *
   * @param { SimContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SimInstance
   */
  update(
    params?:
      | SimContextUpdateOptions
      | ((error: Error | null, item?: SimInstance) => any),
    callback?: (error: Error | null, item?: SimInstance) => any
  ): Promise<SimInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SimContextSolution {
  sid?: string;
}

export class SimContextImpl implements SimContext {
  protected _solution: SimContextSolution;
  protected _uri: string;

  protected _billingPeriods?: BillingPeriodListInstance;
  protected _simIpAddresses?: SimIpAddressListInstance;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Sims/${sid}`;
  }

  get billingPeriods(): BillingPeriodListInstance {
    this._billingPeriods =
      this._billingPeriods ||
      BillingPeriodListInstance(this._version, this._solution.sid);
    return this._billingPeriods;
  }

  get simIpAddresses(): SimIpAddressListInstance {
    this._simIpAddresses =
      this._simIpAddresses ||
      SimIpAddressListInstance(this._version, this._solution.sid);
    return this._simIpAddresses;
  }

  fetch(callback?: any): Promise<SimInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SimInstance(operationVersion, payload, this._solution.sid)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<SimInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["fleet"] !== undefined) data["Fleet"] = params["fleet"];
    if (params["callbackUrl"] !== undefined)
      data["CallbackUrl"] = params["callbackUrl"];
    if (params["callbackMethod"] !== undefined)
      data["CallbackMethod"] = params["callbackMethod"];
    if (params["accountSid"] !== undefined)
      data["AccountSid"] = params["accountSid"];

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
        new SimInstance(operationVersion, payload, this._solution.sid)
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

interface SimPayload extends TwilioResponsePayload {
  sims: SimResource[];
}

interface SimResource {
  sid?: string | null;
  unique_name?: string | null;
  account_sid?: string | null;
  iccid?: string | null;
  status?: SimStatus;
  fleet_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  links?: object | null;
}

export class SimInstance {
  protected _solution: SimContextSolution;
  protected _context?: SimContext;

  constructor(protected _version: V1, payload: SimResource, sid?: string) {
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.accountSid = payload.account_sid;
    this.iccid = payload.iccid;
    this.status = payload.status;
    this.fleetSid = payload.fleet_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

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
   * The SID of the Account that the Super SIM belongs to
   */
  accountSid?: string | null;
  /**
   * The ICCID associated with the SIM
   */
  iccid?: string | null;
  status?: SimStatus;
  /**
   * The unique ID of the Fleet configured for this SIM
   */
  fleetSid?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the Sim Resource
   */
  url?: string | null;
  links?: object | null;

  private get _proxy(): SimContext {
    this._context =
      this._context || new SimContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a SimInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SimInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SimInstance) => any
  ): Promise<SimInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SimInstance
   *
   * @param { SimContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SimInstance
   */
  update(
    params?:
      | SimContextUpdateOptions
      | ((error: Error | null, item?: SimInstance) => any),
    callback?: (error: Error | null, item?: SimInstance) => any
  ): Promise<SimInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the billingPeriods.
   */
  billingPeriods(): BillingPeriodListInstance {
    return this._proxy.billingPeriods;
  }

  /**
   * Access the simIpAddresses.
   */
  simIpAddresses(): SimIpAddressListInstance {
    return this._proxy.simIpAddresses;
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
      iccid: this.iccid,
      status: this.status,
      fleetSid: this.fleetSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface SimListInstance {
  (sid: string): SimContext;
  get(sid: string): SimContext;

  /**
   * Create a SimInstance
   *
   * @param { SimListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SimInstance
   */
  create(
    params: SimListInstanceCreateOptions,
    callback?: (error: Error | null, item?: SimInstance) => any
  ): Promise<SimInstance>;

  /**
   * Streams SimInstance records from the API.
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
   * @param { SimListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | SimListInstanceEachOptions
      | ((item: SimInstance, done: (err?: Error) => void) => void),
    callback?: (item: SimInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of SimInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: SimPage) => any
  ): Promise<SimPage>;
  /**
   * Lists SimInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SimListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | SimListInstanceOptions
      | ((error: Error | null, items: SimInstance[]) => any),
    callback?: (error: Error | null, items: SimInstance[]) => any
  ): Promise<SimInstance[]>;
  /**
   * Retrieve a single page of SimInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SimListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | SimListInstancePageOptions
      | ((error: Error | null, items: SimPage) => any),
    callback?: (error: Error | null, items: SimPage) => any
  ): Promise<SimPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SimSolution {}

interface SimListInstanceImpl extends SimListInstance {}
class SimListInstanceImpl implements SimListInstance {
  _version?: V1;
  _solution?: SimSolution;
  _uri?: string;
}

export function SimListInstance(version: V1): SimListInstance {
  const instance = ((sid) => instance.get(sid)) as SimListInstanceImpl;

  instance.get = function get(sid): SimContext {
    return new SimContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Sims`;

  instance.create = function create(
    params: SimListInstanceCreateOptions,
    callback?: (error: Error | null, item?: SimInstance) => any
  ): Promise<SimInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["iccid"] === null || params["iccid"] === undefined) {
      throw new Error("Required parameter \"params['iccid']\" missing.");
    }

    if (
      params["registrationCode"] === null ||
      params["registrationCode"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['registrationCode']\" missing."
      );
    }

    let data: any = {};

    data["Iccid"] = params["iccid"];

    data["RegistrationCode"] = params["registrationCode"];

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
      (payload) => new SimInstance(operationVersion, payload)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | SimListInstancePageOptions
      | ((error: Error | null, item?: SimPage) => any),
    callback?: (error: Error | null, item?: SimPage) => any
  ): Promise<SimPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["fleet"] !== undefined) data["Fleet"] = params["fleet"];
    if (params["iccid"] !== undefined) data["Iccid"] = params["iccid"];
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
      (payload) => new SimPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: SimPage) => any
  ): Promise<SimPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new SimPage(this._version, payload, this._solution)
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

export class SimPage extends Page<V1, SimPayload, SimResource, SimInstance> {
  /**
   * Initialize the SimPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SimSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SimInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SimResource): SimInstance {
    return new SimInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
