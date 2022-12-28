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
 * Options to pass to create a NewKeyInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 */
export interface NewKeyListInstanceCreateOptions {
  friendlyName?: string;
}

export interface NewKeyListInstance {
  /**
   * Create a NewKeyInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed NewKeyInstance
   */
  create(
    callback?: (error: Error | null, item?: NewKeyInstance) => any
  ): Promise<NewKeyInstance>;
  /**
   * Create a NewKeyInstance
   *
   * @param { NewKeyListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed NewKeyInstance
   */
  create(
    params: NewKeyListInstanceCreateOptions,
    callback?: (error: Error | null, item?: NewKeyInstance) => any
  ): Promise<NewKeyInstance>;
  create(params?: any, callback?: any): Promise<NewKeyInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface NewKeySolution {
  accountSid?: string;
}

interface NewKeyListInstanceImpl extends NewKeyListInstance {}
class NewKeyListInstanceImpl implements NewKeyListInstance {
  _version?: V2010;
  _solution?: NewKeySolution;
  _uri?: string;
}

export function NewKeyListInstance(
  version: V2010,
  accountSid: string
): NewKeyListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = {} as NewKeyListInstanceImpl;

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/Keys.json`;

  instance.create = function create(
    params?: any,
    callback?: any
  ): Promise<NewKeyInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];

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
        new NewKeyInstance(operationVersion, payload, this._solution.accountSid)
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

interface NewKeyPayload extends NewKeyResource {}

interface NewKeyResource {
  sid?: string | null;
  friendly_name?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  secret?: string | null;
}

export class NewKeyInstance {
  constructor(
    protected _version: V2010,
    payload: NewKeyResource,
    accountSid: string
  ) {
    this.sid = payload.sid;
    this.friendlyName = payload.friendly_name;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.secret = payload.secret;
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The secret your application uses to sign Access Tokens and to authenticate to the REST API.
   */
  secret?: string | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      friendlyName: this.friendlyName,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      secret: this.secret,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
