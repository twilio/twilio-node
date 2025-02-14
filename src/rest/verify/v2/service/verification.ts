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

export type VerificationChannel = "sms" | "call" | "email" | "whatsapp" | "sna";

export type VerificationRiskCheck = "enable" | "disable";

export type VerificationStatus = "canceled" | "approved";

/**
 * Options to pass to update a VerificationInstance
 */
export interface VerificationContextUpdateOptions {
  /**  */
  status: VerificationStatus;
}

/**
 * Options to pass to create a VerificationInstance
 */
export interface VerificationListInstanceCreateOptions {
  /** The phone number or [email](https://www.twilio.com/docs/verify/email) to verify. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164). */
  to: string;
  /** The verification method to use. One of: [`email`](https://www.twilio.com/docs/verify/email), `sms`, `whatsapp`, `call`, `sna` or `auto`. */
  channel: string;
  /** A custom user defined friendly name that overwrites the existing one in the verification message */
  customFriendlyName?: string;
  /** The text of a custom message to use for the verification. */
  customMessage?: string;
  /** The digits to send after a phone call is answered, for example, to dial an extension. For more information, see the Programmable Voice documentation of [sendDigits](https://www.twilio.com/docs/voice/twiml/number#attributes-sendDigits). */
  sendDigits?: string;
  /** Locale will automatically resolve based on phone number country code for SMS, WhatsApp, and call channel verifications. It will fallback to English or the template’s default translation if the selected translation is not available. This parameter will override the automatic locale resolution. [See supported languages and more information here](https://www.twilio.com/docs/verify/supported-languages). */
  locale?: string;
  /** A pre-generated code to use for verification. The code can be between 4 and 10 characters, inclusive. */
  customCode?: string;
  /** The amount of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled. */
  amount?: string;
  /** The payee of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled. */
  payee?: string;
  /** The custom key-value pairs of Programmable Rate Limits. Keys correspond to `unique_name` fields defined when [creating your Rate Limit](https://www.twilio.com/docs/verify/api/service-rate-limits). Associated value pairs represent values in the request that you are rate limiting on. You may include multiple Rate Limit values in each request. */
  rateLimits?: any;
  /** [`email`](https://www.twilio.com/docs/verify/email) channel configuration in json format. The fields \\\'from\\\' and \\\'from_name\\\' are optional but if included the \\\'from\\\' field must have a valid email address. */
  channelConfiguration?: any;
  /** Your [App Hash](https://developers.google.com/identity/sms-retriever/verify#computing_your_apps_hash_string) to be appended at the end of your verification SMS body. Applies only to SMS. Example SMS body: `<#> Your AppName verification code is: 1234 He42w354ol9`. */
  appHash?: string;
  /** The message [template](https://www.twilio.com/docs/verify/api/templates). If provided, will override the default template for the Service. SMS and Voice channels only. */
  templateSid?: string;
  /** A stringified JSON object in which the keys are the template\\\'s special variables and the values are the variables substitutions. */
  templateCustomSubstitutions?: string;
  /** Strongly encouraged if using the auto channel. The IP address of the client\\\'s device. If provided, it has to be a valid IPv4 or IPv6 address. */
  deviceIp?: string;
  /** An optional Boolean value to indicate the requirement of sna client token in the SNA URL invocation response for added security. This token must match in the Verification Check request to confirm phone number verification. */
  enableSnaClientToken?: boolean;
  /**  */
  riskCheck?: VerificationRiskCheck;
  /** A string containing a JSON map of key value pairs of tags to be recorded as metadata for the message. The object may contain up to 10 tags. Keys and values can each be up to 128 characters in length. */
  tags?: string;
}

export interface VerificationContext {
  /**
   * Fetch a VerificationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed VerificationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: VerificationInstance) => any
  ): Promise<VerificationInstance>;

  /**
   * Update a VerificationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed VerificationInstance
   */
  update(
    params: VerificationContextUpdateOptions,
    callback?: (error: Error | null, item?: VerificationInstance) => any
  ): Promise<VerificationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface VerificationContextSolution {
  serviceSid: string;
  sid: string;
}

export class VerificationContextImpl implements VerificationContext {
  protected _solution: VerificationContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Verifications/${sid}`;
  }

  async fetch(
    callback?: (error: Error | null, item?: VerificationInstance) => any
  ): Promise<VerificationInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        headers,
      });

    try {
      let payload = await operationPromise;
      let operation = new VerificationInstance(
        operationVersion,
        payload,
        instance._solution.serviceSid,
        instance._solution.sid
      );

      if (callback) {
        callback(null, operation);
      }

      return operation;
    } catch (err: any) {
      if (callback) {
        callback(err);
      }
      throw err;
    }
  }

  async update(
    params: VerificationContextUpdateOptions,
    callback?: (error: Error | null, item?: VerificationInstance) => any
  ): Promise<VerificationInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["status"] === null || params["status"] === undefined) {
      throw new Error("Required parameter \"params['status']\" missing.");
    }

    let data: any = {};

    data["Status"] = params["status"];

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

    try {
      let payload = await operationPromise;
      let operation = new VerificationInstance(
        operationVersion,
        payload,
        instance._solution.serviceSid,
        instance._solution.sid
      );

      if (callback) {
        callback(null, operation);
      }

      return operation;
    } catch (err: any) {
      if (callback) {
        callback(err);
      }
      throw err;
    }
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

interface VerificationPayload extends VerificationResource {}

interface VerificationResource {
  sid: string;
  service_sid: string;
  account_sid: string;
  to: string;
  channel: VerificationChannel;
  status: string;
  valid: boolean;
  lookup: any;
  amount: string;
  payee: string;
  send_code_attempts: Array<any>;
  date_created: Date;
  date_updated: Date;
  sna: any;
  url: string;
}

export class VerificationInstance {
  protected _solution: VerificationContextSolution;
  protected _context?: VerificationContext;

  constructor(
    protected _version: V2,
    payload: VerificationResource,
    serviceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.serviceSid = payload.service_sid;
    this.accountSid = payload.account_sid;
    this.to = payload.to;
    this.channel = payload.channel;
    this.status = payload.status;
    this.valid = payload.valid;
    this.lookup = payload.lookup;
    this.amount = payload.amount;
    this.payee = payload.payee;
    this.sendCodeAttempts = payload.send_code_attempts;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.sna = payload.sna;
    this.url = payload.url;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the Verification resource.
   */
  sid: string;
  /**
   * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with.
   */
  serviceSid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Verification resource.
   */
  accountSid: string;
  /**
   * The phone number or [email](https://www.twilio.com/docs/verify/email) being verified. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
   */
  to: string;
  channel: VerificationChannel;
  /**
   * The status of the verification. Can be: `pending`, `approved`, `canceled`, `max_attempts_reached`, `deleted`, `failed` or `expired`.
   */
  status: string;
  /**
   * Use \"status\" instead. Legacy property indicating whether the verification was successful.
   */
  valid: boolean;
  /**
   * Information about the phone number being verified.
   */
  lookup: any;
  /**
   * The amount of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled.
   */
  amount: string;
  /**
   * The payee of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled.
   */
  payee: string;
  /**
   * An array of verification attempt objects containing the channel attempted and the channel-specific transaction SID.
   */
  sendCodeAttempts: Array<any>;
  /**
   * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * The set of fields used for a silent network auth (`sna`) verification. Contains a single field with the URL to be invoked to verify the phone number.
   */
  sna: any;
  /**
   * The absolute URL of the Verification resource.
   */
  url: string;

  private get _proxy(): VerificationContext {
    this._context =
      this._context ||
      new VerificationContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a VerificationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed VerificationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: VerificationInstance) => any
  ): Promise<VerificationInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a VerificationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed VerificationInstance
   */
  update(
    params: VerificationContextUpdateOptions,
    callback?: (error: Error | null, item?: VerificationInstance) => any
  ): Promise<VerificationInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: VerificationInstance) => any
  ): Promise<VerificationInstance> {
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
      serviceSid: this.serviceSid,
      accountSid: this.accountSid,
      to: this.to,
      channel: this.channel,
      status: this.status,
      valid: this.valid,
      lookup: this.lookup,
      amount: this.amount,
      payee: this.payee,
      sendCodeAttempts: this.sendCodeAttempts,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      sna: this.sna,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface VerificationSolution {
  serviceSid: string;
}

export interface VerificationListInstance {
  _version: V2;
  _solution: VerificationSolution;
  _uri: string;

  (sid: string): VerificationContext;
  get(sid: string): VerificationContext;

  /**
   * Create a VerificationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed VerificationInstance
   */
  create(
    params: VerificationListInstanceCreateOptions,
    callback?: (error: Error | null, item?: VerificationInstance) => any
  ): Promise<VerificationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function VerificationListInstance(
  version: V2,
  serviceSid: string
): VerificationListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as VerificationListInstance;

  instance.get = function get(sid): VerificationContext {
    return new VerificationContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Verifications`;

  instance.create = function create(
    params: VerificationListInstanceCreateOptions,
    callback?: (error: Error | null, items: VerificationInstance) => any
  ): Promise<VerificationInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["to"] === null || params["to"] === undefined) {
      throw new Error("Required parameter \"params['to']\" missing.");
    }

    if (params["channel"] === null || params["channel"] === undefined) {
      throw new Error("Required parameter \"params['channel']\" missing.");
    }

    let data: any = {};

    data["To"] = params["to"];

    data["Channel"] = params["channel"];
    if (params["customFriendlyName"] !== undefined)
      data["CustomFriendlyName"] = params["customFriendlyName"];
    if (params["customMessage"] !== undefined)
      data["CustomMessage"] = params["customMessage"];
    if (params["sendDigits"] !== undefined)
      data["SendDigits"] = params["sendDigits"];
    if (params["locale"] !== undefined) data["Locale"] = params["locale"];
    if (params["customCode"] !== undefined)
      data["CustomCode"] = params["customCode"];
    if (params["amount"] !== undefined) data["Amount"] = params["amount"];
    if (params["payee"] !== undefined) data["Payee"] = params["payee"];
    if (params["rateLimits"] !== undefined)
      data["RateLimits"] = serialize.object(params["rateLimits"]);
    if (params["channelConfiguration"] !== undefined)
      data["ChannelConfiguration"] = serialize.object(
        params["channelConfiguration"]
      );
    if (params["appHash"] !== undefined) data["AppHash"] = params["appHash"];
    if (params["templateSid"] !== undefined)
      data["TemplateSid"] = params["templateSid"];
    if (params["templateCustomSubstitutions"] !== undefined)
      data["TemplateCustomSubstitutions"] =
        params["templateCustomSubstitutions"];
    if (params["deviceIp"] !== undefined) data["DeviceIp"] = params["deviceIp"];
    if (params["enableSnaClientToken"] !== undefined)
      data["EnableSnaClientToken"] = serialize.bool(
        params["enableSnaClientToken"]
      );
    if (params["riskCheck"] !== undefined)
      data["RiskCheck"] = params["riskCheck"];
    if (params["tags"] !== undefined) data["Tags"] = params["tags"];

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
      (payload) =>
        new VerificationInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid
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
