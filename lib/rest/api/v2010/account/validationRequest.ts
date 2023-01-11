/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V2010 from "../../V2010";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to create a ValidationRequestInstance
 */
export interface ValidationRequestListInstanceCreateOptions {
  /** The phone number to verify in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number. */
  phoneNumber: string;
  /** A descriptive string that you create to describe the new caller ID resource. It can be up to 64 characters long. The default value is a formatted version of the phone number. */
  friendlyName?: string;
  /** The number of seconds to delay before initiating the verification call. Can be an integer between `0` and `60`, inclusive. The default is `0`. */
  callDelay?: number;
  /** The digits to dial after connecting the verification call. */
  extension?: string;
  /** The URL we should call using the `status_callback_method` to send status information about the verification process to your application. */
  statusCallback?: string;
  /** The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST`, and the default is `POST`. */
  statusCallbackMethod?: string;
}

export interface ValidationRequestSolution {
  accountSid: string;
}

export interface ValidationRequestListInstance {
  _version: V2010;
  _solution: ValidationRequestSolution;
  _uri: string;

  /**
   * Create a ValidationRequestInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ValidationRequestInstance
   */
  create(
    params: ValidationRequestListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ValidationRequestInstance) => any
  ): Promise<ValidationRequestInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ValidationRequestListInstance(
  version: V2010,
  accountSid: string
): ValidationRequestListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = {} as ValidationRequestListInstance;

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/OutgoingCallerIds.json`;

  instance.create = function create(
    params: ValidationRequestListInstanceCreateOptions,
    callback?: (error: Error | null, items: ValidationRequestInstance) => any
  ): Promise<ValidationRequestInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["phoneNumber"] === null || params["phoneNumber"] === undefined) {
      throw new Error("Required parameter \"params['phoneNumber']\" missing.");
    }

    let data: any = {};

    data["PhoneNumber"] = params["phoneNumber"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["callDelay"] !== undefined)
      data["CallDelay"] = params["callDelay"];
    if (params["extension"] !== undefined)
      data["Extension"] = params["extension"];
    if (params["statusCallback"] !== undefined)
      data["StatusCallback"] = params["statusCallback"];
    if (params["statusCallbackMethod"] !== undefined)
      data["StatusCallbackMethod"] = params["statusCallbackMethod"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ValidationRequestInstance(
          operationVersion,
          payload,
          instance._solution.accountSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
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

interface ValidationRequestPayload extends ValidationRequestResource {}

interface ValidationRequestResource {
  account_sid: string;
  call_sid: string;
  friendly_name: string;
  phone_number: string;
  validation_code: string;
}

export class ValidationRequestInstance {
  constructor(
    protected _version: V2010,
    payload: ValidationRequestResource,
    accountSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.callSid = payload.call_sid;
    this.friendlyName = payload.friendly_name;
    this.phoneNumber = payload.phone_number;
    this.validationCode = payload.validation_code;
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  /**
   * The SID of the Call the resource is associated with
   */
  callSid: string;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName: string;
  /**
   * The phone number to verify in E.164 format
   */
  phoneNumber: string;
  /**
   * The 6 digit validation code that someone must enter to validate the Caller ID  when `phone_number` is called
   */
  validationCode: string;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      callSid: this.callSid,
      friendlyName: this.friendlyName,
      phoneNumber: this.phoneNumber,
      validationCode: this.validationCode,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
