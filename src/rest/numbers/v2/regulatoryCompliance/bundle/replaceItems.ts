/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Numbers
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V2 from "../../../V2";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * The verification status of the Bundle resource.
 */
export type ReplaceItemsStatus =
  | "draft"
  | "pending-review"
  | "in-review"
  | "twilio-rejected"
  | "twilio-approved"
  | "provisionally-approved";

/**
 * Options to pass to create a ReplaceItemsInstance
 */
export interface ReplaceItemsListInstanceCreateOptions {
  /** The source bundle sid to copy the item assignments from. */
  fromBundleSid: string;
}

export interface ReplaceItemsSolution {
  bundleSid: string;
}

export interface ReplaceItemsListInstance {
  _version: V2;
  _solution: ReplaceItemsSolution;
  _uri: string;

  /**
   * Create a ReplaceItemsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ReplaceItemsInstance
   */
  create(
    params: ReplaceItemsListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ReplaceItemsInstance) => any
  ): Promise<ReplaceItemsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ReplaceItemsListInstance(
  version: V2,
  bundleSid: string
): ReplaceItemsListInstance {
  if (!isValidPathParam(bundleSid)) {
    throw new Error("Parameter 'bundleSid' is not valid.");
  }

  const instance = {} as ReplaceItemsListInstance;

  instance._version = version;
  instance._solution = { bundleSid };
  instance._uri = `/RegulatoryCompliance/Bundles/${bundleSid}/ReplaceItems`;

  instance.create = function create(
    params: ReplaceItemsListInstanceCreateOptions,
    callback?: (error: Error | null, items: ReplaceItemsInstance) => any
  ): Promise<ReplaceItemsInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["fromBundleSid"] === null ||
      params["fromBundleSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['fromBundleSid']\" missing."
      );
    }

    let data: any = {};

    data["FromBundleSid"] = params["fromBundleSid"];

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
        new ReplaceItemsInstance(
          operationVersion,
          payload,
          instance._solution.bundleSid
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

interface ReplaceItemsPayload extends ReplaceItemsResource {}

interface ReplaceItemsResource {
  sid: string;
  account_sid: string;
  regulation_sid: string;
  friendly_name: string;
  status: ReplaceItemsStatus;
  valid_until: Date;
  email: string;
  status_callback: string;
  date_created: Date;
  date_updated: Date;
}

export class ReplaceItemsInstance {
  constructor(
    protected _version: V2,
    payload: ReplaceItemsResource,
    bundleSid: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.regulationSid = payload.regulation_sid;
    this.friendlyName = payload.friendly_name;
    this.status = payload.status;
    this.validUntil = deserialize.iso8601DateTime(payload.valid_until);
    this.email = payload.email;
    this.statusCallback = payload.status_callback;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
  }

  /**
   * The unique string that we created to identify the Bundle resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Bundle resource.
   */
  accountSid: string;
  /**
   * The unique string of a regulation that is associated to the Bundle resource.
   */
  regulationSid: string;
  /**
   * The string that you assigned to describe the resource.
   */
  friendlyName: string;
  status: ReplaceItemsStatus;
  /**
   * The date and time in GMT in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format when the resource will be valid until.
   */
  validUntil: Date;
  /**
   * The email address that will receive updates when the Bundle resource changes status.
   */
  email: string;
  /**
   * The URL we call to inform your application of status changes.
   */
  statusCallback: string;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      regulationSid: this.regulationSid,
      friendlyName: this.friendlyName,
      status: this.status,
      validUntil: this.validUntil,
      email: this.email,
      statusCallback: this.statusCallback,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
