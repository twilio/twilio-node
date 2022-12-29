/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V2 from "../../V2";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

type VerificationCheckChannel = "sms" | "call" | "email" | "whatsapp" | "sna";

/**
 * Options to pass to create a VerificationCheckInstance
 *
 * @property { string } [code] The 4-10 character string being verified.
 * @property { string } [to] The phone number or [email](https://www.twilio.com/docs/verify/email) to verify. Either this parameter or the `verification_sid` must be specified. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
 * @property { string } [verificationSid] A SID that uniquely identifies the Verification Check. Either this parameter or the `to` phone number/[email](https://www.twilio.com/docs/verify/email) must be specified.
 * @property { string } [amount] The amount of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled.
 * @property { string } [payee] The payee of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled.
 */
export interface VerificationCheckListInstanceCreateOptions {
  code?: string;
  to?: string;
  verificationSid?: string;
  amount?: string;
  payee?: string;
}

export interface VerificationCheckListInstance {
  /**
   * Create a VerificationCheckInstance
   *
   * @param { VerificationCheckListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed VerificationCheckInstance
   */
  create(
    params?:
      | VerificationCheckListInstanceCreateOptions
      | ((error: Error | null, item?: VerificationCheckInstance) => any),
    callback?: (error: Error | null, item?: VerificationCheckInstance) => any
  ): Promise<VerificationCheckInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface VerificationCheckSolution {
  serviceSid?: string;
}

interface VerificationCheckListInstanceImpl
  extends VerificationCheckListInstance {}
class VerificationCheckListInstanceImpl
  implements VerificationCheckListInstance
{
  _version?: V2;
  _solution?: VerificationCheckSolution;
  _uri?: string;
}

export function VerificationCheckListInstance(
  version: V2,
  serviceSid: string
): VerificationCheckListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = {} as VerificationCheckListInstanceImpl;

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/VerificationCheck`;

  instance.create = function create(
    params?:
      | VerificationCheckListInstanceCreateOptions
      | ((error: Error | null, item?: VerificationCheckInstance) => any),
    callback?: (error: Error | null, item?: VerificationCheckInstance) => any
  ): Promise<VerificationCheckInstance> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: VerificationCheckInstance
      ) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["code"] !== undefined) data["Code"] = params["code"];
    if (params["to"] !== undefined) data["To"] = params["to"];
    if (params["verificationSid"] !== undefined)
      data["VerificationSid"] = params["verificationSid"];
    if (params["amount"] !== undefined) data["Amount"] = params["amount"];
    if (params["payee"] !== undefined) data["Payee"] = params["payee"];

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
      (payload) =>
        new VerificationCheckInstance(
          operationVersion,
          payload,
          this._solution.serviceSid
        )
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

interface VerificationCheckPayload extends VerificationCheckResource {}

interface VerificationCheckResource {
  sid?: string | null;
  service_sid?: string | null;
  account_sid?: string | null;
  to?: string | null;
  channel?: VerificationCheckChannel;
  status?: string | null;
  valid?: boolean | null;
  amount?: string | null;
  payee?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  sna_attempts_error_codes?: Array<any> | null;
}

export class VerificationCheckInstance {
  constructor(
    protected _version: V2,
    payload: VerificationCheckResource,
    serviceSid: string
  ) {
    this.sid = payload.sid;
    this.serviceSid = payload.service_sid;
    this.accountSid = payload.account_sid;
    this.to = payload.to;
    this.channel = payload.channel;
    this.status = payload.status;
    this.valid = payload.valid;
    this.amount = payload.amount;
    this.payee = payload.payee;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.snaAttemptsErrorCodes = payload.sna_attempts_error_codes;
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the Service that the resource is associated with
   */
  serviceSid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The phone number or email being verified
   */
  to?: string | null;
  channel?: VerificationCheckChannel;
  /**
   * The status of the verification resource
   */
  status?: string | null;
  /**
   * Whether the verification was successful
   */
  valid?: boolean | null;
  /**
   * The amount of the associated PSD2 compliant transaction.
   */
  amount?: string | null;
  /**
   * The payee of the associated PSD2 compliant transaction
   */
  payee?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the Verification Check resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the Verification Check resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * List of error codes as a result of attempting a verification using the `sna` channel.
   */
  snaAttemptsErrorCodes?: Array<any> | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      serviceSid: this.serviceSid,
      accountSid: this.accountSid,
      to: this.to,
      channel: this.channel,
      status: this.status,
      valid: this.valid,
      amount: this.amount,
      payee: this.payee,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      snaAttemptsErrorCodes: this.snaAttemptsErrorCodes,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
