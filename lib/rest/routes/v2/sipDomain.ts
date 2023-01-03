/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Routes
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

/**
 * Options to pass to update a SipDomainInstance
 *
 * @property { string } [voiceRegion]
 * @property { string } [friendlyName]
 */
export interface SipDomainContextUpdateOptions {
  voiceRegion?: string;
  friendlyName?: string;
}

export interface SipDomainContext {
  /**
   * Fetch a SipDomainInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SipDomainInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SipDomainInstance) => any
  ): Promise<SipDomainInstance>;

  /**
   * Update a SipDomainInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SipDomainInstance
   */
  update(
    callback?: (error: Error | null, item?: SipDomainInstance) => any
  ): Promise<SipDomainInstance>;
  /**
   * Update a SipDomainInstance
   *
   * @param { SipDomainContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SipDomainInstance
   */
  update(
    params: SipDomainContextUpdateOptions,
    callback?: (error: Error | null, item?: SipDomainInstance) => any
  ): Promise<SipDomainInstance>;
  update(params?: any, callback?: any): Promise<SipDomainInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SipDomainContextSolution {
  sipDomain: string;
}

export class SipDomainContextImpl implements SipDomainContext {
  protected _solution: SipDomainContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, sipDomain: string) {
    if (!isValidPathParam(sipDomain)) {
      throw new Error("Parameter 'sipDomain' is not valid.");
    }

    this._solution = { sipDomain };
    this._uri = `/SipDomains/${sipDomain}`;
  }

  fetch(callback?: any): Promise<SipDomainInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SipDomainInstance(
          operationVersion,
          payload,
          instance._solution.sipDomain
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<SipDomainInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["voiceRegion"] !== undefined)
      data["VoiceRegion"] = params["voiceRegion"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];

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
        new SipDomainInstance(
          operationVersion,
          payload,
          instance._solution.sipDomain
        )
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

interface SipDomainPayload extends SipDomainResource {}

interface SipDomainResource {
  sip_domain?: string | null;
  url?: string | null;
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  voice_region?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
}

export class SipDomainInstance {
  protected _solution: SipDomainContextSolution;
  protected _context?: SipDomainContext;

  constructor(
    protected _version: V2,
    payload: SipDomainResource,
    sipDomain?: string
  ) {
    this.sipDomain = payload.sip_domain;
    this.url = payload.url;
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.voiceRegion = payload.voice_region;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);

    this._solution = { sipDomain: sipDomain || this.sipDomain };
  }

  sipDomain?: string | null;
  url?: string | null;
  sid?: string | null;
  accountSid?: string | null;
  friendlyName?: string | null;
  voiceRegion?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;

  private get _proxy(): SipDomainContext {
    this._context =
      this._context ||
      new SipDomainContextImpl(this._version, this._solution.sipDomain);
    return this._context;
  }

  /**
   * Fetch a SipDomainInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SipDomainInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SipDomainInstance) => any
  ): Promise<SipDomainInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SipDomainInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SipDomainInstance
   */
  update(
    callback?: (error: Error | null, item?: SipDomainInstance) => any
  ): Promise<SipDomainInstance>;
  /**
   * Update a SipDomainInstance
   *
   * @param { SipDomainContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SipDomainInstance
   */
  update(
    params: SipDomainContextUpdateOptions,
    callback?: (error: Error | null, item?: SipDomainInstance) => any
  ): Promise<SipDomainInstance>;
  update(params?: any, callback?: any): Promise<SipDomainInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sipDomain: this.sipDomain,
      url: this.url,
      sid: this.sid,
      accountSid: this.accountSid,
      friendlyName: this.friendlyName,
      voiceRegion: this.voiceRegion,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface SipDomainSolution {}

export interface SipDomainListInstance {
  _version: V2;
  _solution: SipDomainSolution;
  _uri: string;

  (sipDomain: string): SipDomainContext;
  get(sipDomain: string): SipDomainContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SipDomainListInstance(version: V2): SipDomainListInstance {
  const instance = ((sipDomain) =>
    instance.get(sipDomain)) as SipDomainListInstance;

  instance.get = function get(sipDomain): SipDomainContext {
    return new SipDomainContextImpl(version, sipDomain);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

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
