/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Marketplace
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

export class CreateReferralConversionRequest {
  "referralAccountSid"?: string;
}

/**
 * Options to pass to create a ReferralConversionInstance
 */
export interface ReferralConversionContextCreateOptions {
  /**  */
  createReferralConversionRequest: CreateReferralConversionRequest;
}

export interface ReferralConversionContext {
  /**
   * Create a ReferralConversionInstance
   *
   * @param params - Body for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ReferralConversionInstance
   */
  create(
    params: CreateReferralConversionRequest,
    callback?: (error: Error | null, item?: ReferralConversionInstance) => any
  ): Promise<ReferralConversionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ReferralConversionContextSolution {}

export class ReferralConversionContextImpl
  implements ReferralConversionContext
{
  protected _solution: ReferralConversionContextSolution;
  protected _uri: string;

  constructor(protected _version: V1) {
    this._solution = {};
    this._uri = `/ReferralConversion`;
  }

  create(
    params: CreateReferralConversionRequest,
    callback?: (error: Error | null, item?: ReferralConversionInstance) => any
  ): Promise<ReferralConversionInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    let data: any = {};

    data = params;

    const headers: any = {};
    headers["Content-Type"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new ReferralConversionInstance(operationVersion, payload)
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

interface ReferralConversionPayload extends ReferralConversionResource {}

interface ReferralConversionResource {
  converted_account_sid: string;
}

export class ReferralConversionInstance {
  protected _solution: ReferralConversionContextSolution;
  protected _context?: ReferralConversionContext;

  constructor(protected _version: V1, payload: ReferralConversionResource) {
    this.convertedAccountSid = payload.converted_account_sid;

    this._solution = {};
  }

  convertedAccountSid: string;

  private get _proxy(): ReferralConversionContext {
    this._context =
      this._context || new ReferralConversionContextImpl(this._version);
    return this._context;
  }

  /**
   * Create a ReferralConversionInstance
   *
   * @param params - Body for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ReferralConversionInstance
   */
  create(
    params: CreateReferralConversionRequest,
    callback?: (error: Error | null, item?: ReferralConversionInstance) => any
  ): Promise<ReferralConversionInstance>;

  create(
    params?: any,
    callback?: (error: Error | null, item?: ReferralConversionInstance) => any
  ): Promise<ReferralConversionInstance> {
    return this._proxy.create(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      convertedAccountSid: this.convertedAccountSid,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ReferralConversionSolution {}

export interface ReferralConversionListInstance {
  _version: V1;
  _solution: ReferralConversionSolution;
  _uri: string;

  (): ReferralConversionContext;
  get(): ReferralConversionContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ReferralConversionListInstance(
  version: V1
): ReferralConversionListInstance {
  const instance = (() => instance.get()) as ReferralConversionListInstance;

  instance.get = function get(): ReferralConversionContext {
    return new ReferralConversionContextImpl(version);
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