/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import Wireless from "../Wireless";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { UsageListInstance } from "./sim/usage";

/**
 * Options to pass to update a SimInstance
 *
 * @property { string } [uniqueName]
 * @property { string } [callbackMethod]
 * @property { string } [callbackUrl]
 * @property { string } [friendlyName]
 * @property { string } [ratePlan]
 * @property { string } [status]
 * @property { string } [commandsCallbackMethod]
 * @property { string } [commandsCallbackUrl]
 * @property { string } [smsFallbackMethod]
 * @property { string } [smsFallbackUrl]
 * @property { string } [smsMethod]
 * @property { string } [smsUrl]
 * @property { string } [voiceFallbackMethod]
 * @property { string } [voiceFallbackUrl]
 * @property { string } [voiceMethod]
 * @property { string } [voiceUrl]
 */
export interface SimContextUpdateOptions {
  uniqueName?: string;
  callbackMethod?: string;
  callbackUrl?: string;
  friendlyName?: string;
  ratePlan?: string;
  status?: string;
  commandsCallbackMethod?: string;
  commandsCallbackUrl?: string;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsUrl?: string;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceUrl?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [status]
 * @property { string } [iccid]
 * @property { string } [ratePlan]
 * @property { string } [eId]
 * @property { string } [simRegistrationCode]
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
  status?: string;
  iccid?: string;
  ratePlan?: string;
  eId?: string;
  simRegistrationCode?: string;
  pageSize?: number;
  callback?: (item: SimInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [status]
 * @property { string } [iccid]
 * @property { string } [ratePlan]
 * @property { string } [eId]
 * @property { string } [simRegistrationCode]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SimListInstanceOptions {
  status?: string;
  iccid?: string;
  ratePlan?: string;
  eId?: string;
  simRegistrationCode?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [status]
 * @property { string } [iccid]
 * @property { string } [ratePlan]
 * @property { string } [eId]
 * @property { string } [simRegistrationCode]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface SimListInstancePageOptions {
  status?: string;
  iccid?: string;
  ratePlan?: string;
  eId?: string;
  simRegistrationCode?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface SimContext {
  usage: UsageListInstance;

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
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SimInstance
   */
  update(
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
    params: SimContextUpdateOptions,
    callback?: (error: Error | null, item?: SimInstance) => any
  ): Promise<SimInstance>;
  update(params?: any, callback?: any): Promise<SimInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SimContextSolution {
  sid: string;
}

export class SimContextImpl implements SimContext {
  protected _solution: SimContextSolution;
  protected _uri: string;

  protected _usage?: UsageListInstance;

  constructor(protected _version: Wireless, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Sims/${sid}`;
  }

  get usage(): UsageListInstance {
    this._usage =
      this._usage || UsageListInstance(this._version, this._solution.sid);
    return this._usage;
  }

  fetch(callback?: any): Promise<SimInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SimInstance(operationVersion, payload, instance._solution.sid)
    );

    operationPromise = instance._version.setPromiseCallback(
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
    if (params["callbackMethod"] !== undefined)
      data["CallbackMethod"] = params["callbackMethod"];
    if (params["callbackUrl"] !== undefined)
      data["CallbackUrl"] = params["callbackUrl"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["ratePlan"] !== undefined) data["RatePlan"] = params["ratePlan"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["commandsCallbackMethod"] !== undefined)
      data["CommandsCallbackMethod"] = params["commandsCallbackMethod"];
    if (params["commandsCallbackUrl"] !== undefined)
      data["CommandsCallbackUrl"] = params["commandsCallbackUrl"];
    if (params["smsFallbackMethod"] !== undefined)
      data["SmsFallbackMethod"] = params["smsFallbackMethod"];
    if (params["smsFallbackUrl"] !== undefined)
      data["SmsFallbackUrl"] = params["smsFallbackUrl"];
    if (params["smsMethod"] !== undefined)
      data["SmsMethod"] = params["smsMethod"];
    if (params["smsUrl"] !== undefined) data["SmsUrl"] = params["smsUrl"];
    if (params["voiceFallbackMethod"] !== undefined)
      data["VoiceFallbackMethod"] = params["voiceFallbackMethod"];
    if (params["voiceFallbackUrl"] !== undefined)
      data["VoiceFallbackUrl"] = params["voiceFallbackUrl"];
    if (params["voiceMethod"] !== undefined)
      data["VoiceMethod"] = params["voiceMethod"];
    if (params["voiceUrl"] !== undefined) data["VoiceUrl"] = params["voiceUrl"];

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
        new SimInstance(operationVersion, payload, instance._solution.sid)
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

export type SimSmsFallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";
export type SimSmsMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export type SimVoiceFallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";
export type SimVoiceMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";

interface SimPayload extends TwilioResponsePayload {
  sims: SimResource[];
}

interface SimResource {
  sid: string;
  unique_name: string;
  account_sid: string;
  rate_plan_sid: string;
  friendly_name: string;
  iccid: string;
  e_id: string;
  status: string;
  commands_callback_url: string;
  commands_callback_method: string;
  sms_fallback_method: SimSmsFallbackMethod;
  sms_fallback_url: string;
  sms_method: SimSmsMethod;
  sms_url: string;
  voice_fallback_method: SimVoiceFallbackMethod;
  voice_fallback_url: string;
  voice_method: SimVoiceMethod;
  voice_url: string;
  date_created: Date;
  date_updated: Date;
  url: string;
  links: object;
}

export class SimInstance {
  protected _solution: SimContextSolution;
  protected _context?: SimContext;

  constructor(
    protected _version: Wireless,
    payload: SimResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.accountSid = payload.account_sid;
    this.ratePlanSid = payload.rate_plan_sid;
    this.friendlyName = payload.friendly_name;
    this.iccid = payload.iccid;
    this.eId = payload.e_id;
    this.status = payload.status;
    this.commandsCallbackUrl = payload.commands_callback_url;
    this.commandsCallbackMethod = payload.commands_callback_method;
    this.smsFallbackMethod = payload.sms_fallback_method;
    this.smsFallbackUrl = payload.sms_fallback_url;
    this.smsMethod = payload.sms_method;
    this.smsUrl = payload.sms_url;
    this.voiceFallbackMethod = payload.voice_fallback_method;
    this.voiceFallbackUrl = payload.voice_fallback_url;
    this.voiceMethod = payload.voice_method;
    this.voiceUrl = payload.voice_url;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  sid: string;
  uniqueName: string;
  accountSid: string;
  ratePlanSid: string;
  friendlyName: string;
  iccid: string;
  eId: string;
  status: string;
  commandsCallbackUrl: string;
  commandsCallbackMethod: string;
  smsFallbackMethod: SimSmsFallbackMethod;
  smsFallbackUrl: string;
  smsMethod: SimSmsMethod;
  smsUrl: string;
  voiceFallbackMethod: SimVoiceFallbackMethod;
  voiceFallbackUrl: string;
  voiceMethod: SimVoiceMethod;
  voiceUrl: string;
  dateCreated: Date;
  dateUpdated: Date;
  url: string;
  links: object;

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
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SimInstance
   */
  update(
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
    params: SimContextUpdateOptions,
    callback?: (error: Error | null, item?: SimInstance) => any
  ): Promise<SimInstance>;
  update(params?: any, callback?: any): Promise<SimInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the usage.
   */
  usage(): UsageListInstance {
    return this._proxy.usage;
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
      ratePlanSid: this.ratePlanSid,
      friendlyName: this.friendlyName,
      iccid: this.iccid,
      eId: this.eId,
      status: this.status,
      commandsCallbackUrl: this.commandsCallbackUrl,
      commandsCallbackMethod: this.commandsCallbackMethod,
      smsFallbackMethod: this.smsFallbackMethod,
      smsFallbackUrl: this.smsFallbackUrl,
      smsMethod: this.smsMethod,
      smsUrl: this.smsUrl,
      voiceFallbackMethod: this.voiceFallbackMethod,
      voiceFallbackUrl: this.voiceFallbackUrl,
      voiceMethod: this.voiceMethod,
      voiceUrl: this.voiceUrl,
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

export interface SimSolution {}

export interface SimListInstance {
  _version: Wireless;
  _solution: SimSolution;
  _uri: string;

  (sid: string): SimContext;
  get(sid: string): SimContext;

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
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: SimInstance, done: (err?: Error) => void) => void
  ): void;
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
    params?: SimListInstanceEachOptions,
    callback?: (item: SimInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of SimInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: SimPage) => any
  ): Promise<SimPage>;
  /**
   * Retrieve a single target page of SimInstance records from the API.
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
    callback?: (error: Error | null, items: SimPage) => any
  ): Promise<SimPage>;
  getPage(params?: any, callback?: any): Promise<SimPage>;
  /**
   * Lists SimInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: SimInstance[]) => any
  ): Promise<SimInstance[]>;
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
    params?: SimListInstanceOptions,
    callback?: (error: Error | null, items: SimInstance[]) => any
  ): Promise<SimInstance[]>;
  list(params?: any, callback?: any): Promise<SimInstance[]>;
  /**
   * Retrieve a single page of SimInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: SimPage) => any
  ): Promise<SimPage>;
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
    params: SimListInstancePageOptions,
    callback?: (error: Error | null, items: SimPage) => any
  ): Promise<SimPage>;
  page(params?: any, callback?: any): Promise<SimPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SimListInstance(version: Wireless): SimListInstance {
  const instance = ((sid) => instance.get(sid)) as SimListInstance;

  instance.get = function get(sid): SimContext {
    return new SimContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Sims`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<SimPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["iccid"] !== undefined) data["Iccid"] = params["iccid"];
    if (params["ratePlan"] !== undefined) data["RatePlan"] = params["ratePlan"];
    if (params["eId"] !== undefined) data["EId"] = params["eId"];
    if (params["simRegistrationCode"] !== undefined)
      data["SimRegistrationCode"] = params["simRegistrationCode"];
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
      (payload) => new SimPage(operationVersion, payload, instance._solution)
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
  ): Promise<SimPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) => new SimPage(instance._version, payload, instance._solution)
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

export class SimPage extends Page<
  Wireless,
  SimPayload,
  SimResource,
  SimInstance
> {
  /**
   * Initialize the SimPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: Wireless,
    response: Response<string>,
    solution: SimSolution
  ) {
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
