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
import { DataSessionListInstance } from "./sim/dataSession";
import { UsageRecordListInstance } from "./sim/usageRecord";

type SimResetStatus = "resetting";

type SimStatus =
  | "new"
  | "ready"
  | "active"
  | "suspended"
  | "deactivated"
  | "canceled"
  | "scheduled"
  | "updating";

/**
 * Options to pass to update a SimInstance
 *
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. It can be used in place of the `sid` in the URL path to address the resource.
 * @property { string } [callbackMethod] The HTTP method we should use to call `callback_url`. Can be: `POST` or `GET`. The default is `POST`.
 * @property { string } [callbackUrl] The URL we should call using the `callback_url` when the SIM has finished updating. When the SIM transitions from `new` to `ready` or from any status to `deactivated`, we call this URL when the status changes to an intermediate status (`ready` or `deactivated`) and again when the status changes to its final status (`active` or `canceled`).
 * @property { string } [friendlyName] A descriptive string that you create to describe the Sim resource. It does not need to be unique.
 * @property { string } [ratePlan] The SID or unique name of the [RatePlan resource](https://www.twilio.com/docs/wireless/api/rateplan-resource) to which the Sim resource should be assigned.
 * @property { SimStatus } [status]
 * @property { string } [commandsCallbackMethod] The HTTP method we should use to call `commands_callback_url`. Can be: `POST` or `GET`. The default is `POST`.
 * @property { string } [commandsCallbackUrl] The URL we should call using the `commands_callback_method` when the SIM sends a [Command](https://www.twilio.com/docs/wireless/api/command-resource). Your server should respond with an HTTP status code in the 200 range; any response body is ignored.
 * @property { string } [smsFallbackMethod] The HTTP method we should use to call `sms_fallback_url`. Can be: `GET` or `POST`. Default is `POST`.
 * @property { string } [smsFallbackUrl] The URL we should call using the `sms_fallback_method` when an error occurs while retrieving or executing the TwiML requested from `sms_url`.
 * @property { string } [smsMethod] The HTTP method we should use to call `sms_url`. Can be: `GET` or `POST`. Default is `POST`.
 * @property { string } [smsUrl] The URL we should call using the `sms_method` when the SIM-connected device sends an SMS message that is not a [Command](https://www.twilio.com/docs/wireless/api/command-resource).
 * @property { string } [voiceFallbackMethod] Deprecated.
 * @property { string } [voiceFallbackUrl] Deprecated.
 * @property { string } [voiceMethod] Deprecated.
 * @property { string } [voiceUrl] Deprecated.
 * @property { SimResetStatus } [resetStatus]
 * @property { string } [accountSid] The SID of the [Account](https://www.twilio.com/docs/iam/api/account) to which the Sim resource should belong. The Account SID can only be that of the requesting Account or that of a [Subaccount](https://www.twilio.com/docs/iam/api/subaccounts) of the requesting Account. Only valid when the Sim resource\\\'s status is `new`. For more information, see the [Move SIMs between Subaccounts documentation](https://www.twilio.com/docs/wireless/api/sim-resource#move-sims-between-subaccounts).
 */
export interface SimContextUpdateOptions {
  uniqueName?: string;
  callbackMethod?: string;
  callbackUrl?: string;
  friendlyName?: string;
  ratePlan?: string;
  status?: SimStatus;
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
  resetStatus?: SimResetStatus;
  accountSid?: string;
}
/**
 * Options to pass to each
 *
 * @property { SimStatus } [status] Only return Sim resources with this status.
 * @property { string } [iccid] Only return Sim resources with this ICCID. This will return a list with a maximum size of 1.
 * @property { string } [ratePlan] The SID or unique name of a [RatePlan resource](https://www.twilio.com/docs/wireless/api/rateplan-resource). Only return Sim resources assigned to this RatePlan resource.
 * @property { string } [eId] Deprecated.
 * @property { string } [simRegistrationCode] Only return Sim resources with this registration code. This will return a list with a maximum size of 1.
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
 * @property { SimStatus } [status] Only return Sim resources with this status.
 * @property { string } [iccid] Only return Sim resources with this ICCID. This will return a list with a maximum size of 1.
 * @property { string } [ratePlan] The SID or unique name of a [RatePlan resource](https://www.twilio.com/docs/wireless/api/rateplan-resource). Only return Sim resources assigned to this RatePlan resource.
 * @property { string } [eId] Deprecated.
 * @property { string } [simRegistrationCode] Only return Sim resources with this registration code. This will return a list with a maximum size of 1.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SimListInstanceOptions {
  status?: SimStatus;
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
 * @property { SimStatus } [status] Only return Sim resources with this status.
 * @property { string } [iccid] Only return Sim resources with this ICCID. This will return a list with a maximum size of 1.
 * @property { string } [ratePlan] The SID or unique name of a [RatePlan resource](https://www.twilio.com/docs/wireless/api/rateplan-resource). Only return Sim resources assigned to this RatePlan resource.
 * @property { string } [eId] Deprecated.
 * @property { string } [simRegistrationCode] Only return Sim resources with this registration code. This will return a list with a maximum size of 1.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface SimListInstancePageOptions {
  status?: SimStatus;
  iccid?: string;
  ratePlan?: string;
  eId?: string;
  simRegistrationCode?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface SimContext {
  dataSessions: DataSessionListInstance;
  usageRecords: UsageRecordListInstance;

  /**
   * Remove a SimInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

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

  protected _dataSessions?: DataSessionListInstance;
  protected _usageRecords?: UsageRecordListInstance;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Sims/${sid}`;
  }

  get dataSessions(): DataSessionListInstance {
    this._dataSessions =
      this._dataSessions ||
      DataSessionListInstance(this._version, this._solution.sid);
    return this._dataSessions;
  }

  get usageRecords(): UsageRecordListInstance {
    this._usageRecords =
      this._usageRecords ||
      UsageRecordListInstance(this._version, this._solution.sid);
    return this._usageRecords;
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
    if (params["resetStatus"] !== undefined)
      data["ResetStatus"] = params["resetStatus"];
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

export type SimCommandsCallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";
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
  sid?: string | null;
  unique_name?: string | null;
  account_sid?: string | null;
  rate_plan_sid?: string | null;
  friendly_name?: string | null;
  iccid?: string | null;
  e_id?: string | null;
  status?: SimStatus;
  reset_status?: SimResetStatus;
  commands_callback_url?: string | null;
  commands_callback_method?: SimCommandsCallbackMethod;
  sms_fallback_method?: SimSmsFallbackMethod;
  sms_fallback_url?: string | null;
  sms_method?: SimSmsMethod;
  sms_url?: string | null;
  voice_fallback_method?: SimVoiceFallbackMethod;
  voice_fallback_url?: string | null;
  voice_method?: SimVoiceMethod;
  voice_url?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  links?: object | null;
  ip_address?: string | null;
}

export class SimInstance {
  protected _solution: SimContextSolution;
  protected _context?: SimContext;

  constructor(protected _version: V1, payload: SimResource, sid?: string) {
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.accountSid = payload.account_sid;
    this.ratePlanSid = payload.rate_plan_sid;
    this.friendlyName = payload.friendly_name;
    this.iccid = payload.iccid;
    this.eId = payload.e_id;
    this.status = payload.status;
    this.resetStatus = payload.reset_status;
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
    this.ipAddress = payload.ip_address;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the Sim resource
   */
  sid?: string | null;
  /**
   * An application-defined string that uniquely identifies the resource
   */
  uniqueName?: string | null;
  /**
   * The SID of the Account to which the Sim resource belongs
   */
  accountSid?: string | null;
  /**
   * The SID of the RatePlan resource to which the Sim resource is assigned.
   */
  ratePlanSid?: string | null;
  /**
   * The string that you assigned to describe the Sim resource
   */
  friendlyName?: string | null;
  /**
   * The ICCID associated with the SIM
   */
  iccid?: string | null;
  /**
   * Deprecated
   */
  eId?: string | null;
  status?: SimStatus;
  resetStatus?: SimResetStatus;
  /**
   * The URL we call when the SIM originates a machine-to-machine Command
   */
  commandsCallbackUrl?: string | null;
  /**
   * The HTTP method we use to call commands_callback_url
   */
  commandsCallbackMethod?: SimCommandsCallbackMethod;
  /**
   * Deprecated
   */
  smsFallbackMethod?: SimSmsFallbackMethod;
  /**
   * Deprecated
   */
  smsFallbackUrl?: string | null;
  /**
   * Deprecated
   */
  smsMethod?: SimSmsMethod;
  /**
   * Deprecated
   */
  smsUrl?: string | null;
  /**
   * Deprecated. The HTTP method we use to call voice_fallback_url
   */
  voiceFallbackMethod?: SimVoiceFallbackMethod;
  /**
   * Deprecated. The URL we call when an error occurs while retrieving or executing the TwiML requested from voice_url
   */
  voiceFallbackUrl?: string | null;
  /**
   * Deprecated. The HTTP method we use to call voice_url
   */
  voiceMethod?: SimVoiceMethod;
  /**
   * Deprecated. The URL we call when the SIM-connected device makes a voice call
   */
  voiceUrl?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the Sim resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;
  /**
   * The URLs of related subresources
   */
  links?: object | null;
  /**
   * Deprecated
   */
  ipAddress?: string | null;

  private get _proxy(): SimContext {
    this._context =
      this._context || new SimContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a SimInstance
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
    params?:
      | SimContextUpdateOptions
      | ((error: Error | null, item?: SimInstance) => any),
    callback?: (error: Error | null, item?: SimInstance) => any
  ): Promise<SimInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the dataSessions.
   */
  dataSessions(): DataSessionListInstance {
    return this._proxy.dataSessions;
  }

  /**
   * Access the usageRecords.
   */
  usageRecords(): UsageRecordListInstance {
    return this._proxy.usageRecords;
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
      resetStatus: this.resetStatus,
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
      ipAddress: this.ipAddress,
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
    if (params["iccid"] !== undefined) data["Iccid"] = params["iccid"];
    if (params["ratePlan"] !== undefined) data["RatePlan"] = params["ratePlan"];
    if (params["eId"] !== undefined) data["EId"] = params["eId"];
    if (params["simRegistrationCode"] !== undefined)
      data["SimRegistrationCode"] = params["simRegistrationCode"];
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
