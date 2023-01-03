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

export interface AuthTokenPromotionContext {
  /**
   * Update a AuthTokenPromotionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AuthTokenPromotionInstance
   */
  update(
    callback?: (error: Error | null, item?: AuthTokenPromotionInstance) => any
  ): Promise<AuthTokenPromotionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AuthTokenPromotionContextSolution {}

export class AuthTokenPromotionContextImpl
  implements AuthTokenPromotionContext
{
  protected _solution: AuthTokenPromotionContextSolution;
  protected _uri: string;

  constructor(protected _version: V1) {
    this._solution = {};
    this._uri = `/AuthTokens/Promote`;
  }

  update(callback?: any): Promise<AuthTokenPromotionInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.update({
        uri: this._uri,
        method: "post",
      });

    operationPromise = operationPromise.then(
      (payload) => new AuthTokenPromotionInstance(operationVersion, payload)
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

interface AuthTokenPromotionPayload extends AuthTokenPromotionResource {}

interface AuthTokenPromotionResource {
  account_sid?: string | null;
  auth_token?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
}

export class AuthTokenPromotionInstance {
  protected _solution: AuthTokenPromotionContextSolution;
  protected _context?: AuthTokenPromotionContext;

  constructor(protected _version: V1, payload: AuthTokenPromotionResource) {
    this.accountSid = payload.account_sid;
    this.authToken = payload.auth_token;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = {};
  }

  /**
   * The SID of the Account that the secondary Auth Token was created for
   */
  accountSid?: string | null;
  /**
   * The promoted Auth Token
   */
  authToken?: string | null;
  /**
   * The ISO 8601 formatted date and time in UTC when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 formatted date and time in UTC when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The URI for this resource, relative to `https://accounts.twilio.com`
   */
  url?: string | null;

  private get _proxy(): AuthTokenPromotionContext {
    this._context =
      this._context || new AuthTokenPromotionContextImpl(this._version);
    return this._context;
  }

  /**
   * Update a AuthTokenPromotionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AuthTokenPromotionInstance
   */
  update(
    callback?: (error: Error | null, item?: AuthTokenPromotionInstance) => any
  ): Promise<AuthTokenPromotionInstance> {
    return this._proxy.update(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      authToken: this.authToken,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AuthTokenPromotionListInstance {
  (): AuthTokenPromotionContext;
  get(): AuthTokenPromotionContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AuthTokenPromotionSolution {}

interface AuthTokenPromotionListInstanceImpl
  extends AuthTokenPromotionListInstance {}
class AuthTokenPromotionListInstanceImpl
  implements AuthTokenPromotionListInstance
{
  _version?: V1;
  _solution?: AuthTokenPromotionSolution;
  _uri?: string;
}

export function AuthTokenPromotionListInstance(
  version: V1
): AuthTokenPromotionListInstance {
  const instance = (() => instance.get()) as AuthTokenPromotionListInstanceImpl;

  instance.get = function get(): AuthTokenPromotionContext {
    return new AuthTokenPromotionContextImpl(version);
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
