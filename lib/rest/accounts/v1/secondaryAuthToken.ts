/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Accounts
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

export interface SecondaryAuthTokenContext {
  /**
   * Create a SecondaryAuthTokenInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SecondaryAuthTokenInstance
   */
  create(
    callback?: (error: Error | null, item?: SecondaryAuthTokenInstance) => any
  ): Promise<SecondaryAuthTokenInstance>;

  /**
   * Remove a SecondaryAuthTokenInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SecondaryAuthTokenContextSolution {}

export class SecondaryAuthTokenContextImpl
  implements SecondaryAuthTokenContext
{
  protected _solution: SecondaryAuthTokenContextSolution;
  protected _uri: string;

  constructor(protected _version: V1) {
    this._solution = {};
    this._uri = `/AuthTokens/Secondary`;
  }

  create(callback?: any): Promise<SecondaryAuthTokenInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
      });

    operationPromise = operationPromise.then(
      (payload) => new SecondaryAuthTokenInstance(operationVersion, payload)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
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

interface SecondaryAuthTokenPayload extends SecondaryAuthTokenResource {}

interface SecondaryAuthTokenResource {
  account_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  secondary_auth_token?: string | null;
  url?: string | null;
}

export class SecondaryAuthTokenInstance {
  protected _solution: SecondaryAuthTokenContextSolution;
  protected _context?: SecondaryAuthTokenContext;

  constructor(protected _version: V1, payload: SecondaryAuthTokenPayload) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.secondaryAuthToken = payload.secondary_auth_token;
    this.url = payload.url;

    this._solution = {};
  }

  /**
   * The SID of the Account that the secondary Auth Token was created for
   */
  accountSid?: string | null;
  /**
   * The ISO 8601 formatted date and time in UTC when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 formatted date and time in UTC when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The generated secondary Auth Token
   */
  secondaryAuthToken?: string | null;
  /**
   * The URI for this resource, relative to `https://accounts.twilio.com`
   */
  url?: string | null;

  private get _proxy(): SecondaryAuthTokenContext {
    this._context =
      this._context || new SecondaryAuthTokenContextImpl(this._version);
    return this._context;
  }

  /**
   * Create a SecondaryAuthTokenInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SecondaryAuthTokenInstance
   */
  create(
    callback?: (error: Error | null, item?: SecondaryAuthTokenInstance) => any
  ): Promise<SecondaryAuthTokenInstance> {
    return this._proxy.create(callback);
  }

  /**
   * Remove a SecondaryAuthTokenInstance
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
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      secondaryAuthToken: this.secondaryAuthToken,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface SecondaryAuthTokenListInstance {
  (): SecondaryAuthTokenContext;
  get(): SecondaryAuthTokenContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SecondaryAuthTokenSolution {}

interface SecondaryAuthTokenListInstanceImpl
  extends SecondaryAuthTokenListInstance {}
class SecondaryAuthTokenListInstanceImpl
  implements SecondaryAuthTokenListInstance
{
  _version?: V1;
  _solution?: SecondaryAuthTokenSolution;
  _uri?: string;
}

export function SecondaryAuthTokenListInstance(
  version: V1
): SecondaryAuthTokenListInstance {
  const instance = (() => instance.get()) as SecondaryAuthTokenListInstanceImpl;

  instance.get = function get(): SecondaryAuthTokenContext {
    return new SecondaryAuthTokenContextImpl(version);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

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
