/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Lookups
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

/**
 * Options to pass to fetch a PhoneNumberInstance
 */
export interface PhoneNumberContextFetchOptions {
  /** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the phone number to fetch. This is used to specify the country when the phone number is provided in a national format. */
  countryCode?: string;
  /** The type of information to return. Can be: `carrier` or `caller-name`. The default is null.  Carrier information costs $0.005 per phone number looked up.  Caller Name information is currently available only in the US and costs $0.01 per phone number looked up.  To retrieve both types on information, specify this parameter twice; once with `carrier` and once with `caller-name` as the value. */
  type?: Array<string>;
  /** The `unique_name` of an Add-on you would like to invoke. Can be the `unique_name` of an Add-on that is installed on your account. You can specify multiple instances of this parameter to invoke multiple Add-ons. For more information about  Add-ons, see the [Add-ons documentation](https://www.twilio.com/docs/add-ons). */
  addOns?: Array<string>;
  /** Data specific to the add-on you would like to invoke. The content and format of this value depends on the add-on. */
  addOnsData?: Record<string, object>;
}

export interface PhoneNumberContext {
  /**
   * Fetch a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PhoneNumberInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;
  /**
   * Fetch a PhoneNumberInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PhoneNumberInstance
   */
  fetch(
    params: PhoneNumberContextFetchOptions,
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PhoneNumberContextSolution {
  phoneNumber: string;
}

export class PhoneNumberContextImpl implements PhoneNumberContext {
  protected _solution: PhoneNumberContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, phoneNumber: string) {
    if (!isValidPathParam(phoneNumber)) {
      throw new Error("Parameter 'phoneNumber' is not valid.");
    }

    this._solution = { phoneNumber };
    this._uri = `/PhoneNumbers/${phoneNumber}`;
  }

  fetch(
    params?:
      | PhoneNumberContextFetchOptions
      | ((error: Error | null, item?: PhoneNumberInstance) => any),
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["countryCode"] !== undefined)
      data["CountryCode"] = params["countryCode"];
    if (params["type"] !== undefined)
      data["Type"] = serialize.map(params["type"], (e: string) => e);
    if (params["addOns"] !== undefined)
      data["AddOns"] = serialize.map(params["addOns"], (e: string) => e);
    if (params["addOnsData"] !== undefined)
      data = {
        ...data,
        ...serialize.prefixedCollapsibleMap(params["addOnsData"], "AddOns"),
      };

    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PhoneNumberInstance(
          operationVersion,
          payload,
          instance._solution.phoneNumber
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

interface PhoneNumberPayload extends PhoneNumberResource {}

interface PhoneNumberResource {
  caller_name: any;
  country_code: string;
  phone_number: string;
  national_format: string;
  carrier: any;
  add_ons: any;
  url: string;
}

export class PhoneNumberInstance {
  protected _solution: PhoneNumberContextSolution;
  protected _context?: PhoneNumberContext;

  constructor(
    protected _version: V1,
    payload: PhoneNumberResource,
    phoneNumber?: string
  ) {
    this.callerName = payload.caller_name;
    this.countryCode = payload.country_code;
    this.phoneNumber = payload.phone_number;
    this.nationalFormat = payload.national_format;
    this.carrier = payload.carrier;
    this.addOns = payload.add_ons;
    this.url = payload.url;

    this._solution = { phoneNumber: phoneNumber || this.phoneNumber };
  }

  /**
   * The name of the phone number\'s owner
   */
  callerName: any;
  /**
   * The ISO country code for the phone number
   */
  countryCode: string;
  /**
   * The phone number in E.164 format
   */
  phoneNumber: string;
  /**
   * The phone number, in national format
   */
  nationalFormat: string;
  /**
   * The telecom company that provides the phone number
   */
  carrier: any;
  /**
   * A JSON string with the results of the Add-ons you specified
   */
  addOns: any;
  /**
   * The absolute URL of the resource
   */
  url: string;

  private get _proxy(): PhoneNumberContext {
    this._context =
      this._context ||
      new PhoneNumberContextImpl(this._version, this._solution.phoneNumber);
    return this._context;
  }

  /**
   * Fetch a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PhoneNumberInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;
  /**
   * Fetch a PhoneNumberInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PhoneNumberInstance
   */
  fetch(
    params: PhoneNumberContextFetchOptions,
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;

  fetch(
    params?: any,
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      callerName: this.callerName,
      countryCode: this.countryCode,
      phoneNumber: this.phoneNumber,
      nationalFormat: this.nationalFormat,
      carrier: this.carrier,
      addOns: this.addOns,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface PhoneNumberSolution {}

export interface PhoneNumberListInstance {
  _version: V1;
  _solution: PhoneNumberSolution;
  _uri: string;

  (phoneNumber: string): PhoneNumberContext;
  get(phoneNumber: string): PhoneNumberContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function PhoneNumberListInstance(version: V1): PhoneNumberListInstance {
  const instance = ((phoneNumber) =>
    instance.get(phoneNumber)) as PhoneNumberListInstance;

  instance.get = function get(phoneNumber): PhoneNumberContext {
    return new PhoneNumberContextImpl(version, phoneNumber);
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
