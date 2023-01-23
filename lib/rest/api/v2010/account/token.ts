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

export class ApiV2010AccountTokenIceServers {
  "credential"?: string;
  "username"?: string;
  "url"?: string;
  "urls"?: string;
}

/**
 * Options to pass to create a TokenInstance
 */
export interface TokenListInstanceCreateOptions {
  /** The duration in seconds for which the generated credentials are valid. The default value is 86400 (24 hours). */
  ttl?: number;
}

export interface TokenSolution {
  accountSid: string;
}

export interface TokenListInstance {
  _version: V2010;
  _solution: TokenSolution;
  _uri: string;

  /**
   * Create a TokenInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TokenInstance
   */
  create(
    callback?: (error: Error | null, item?: TokenInstance) => any
  ): Promise<TokenInstance>;
  /**
   * Create a TokenInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TokenInstance
   */
  create(
    params: TokenListInstanceCreateOptions,
    callback?: (error: Error | null, item?: TokenInstance) => any
  ): Promise<TokenInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function TokenListInstance(
  version: V2010,
  accountSid: string
): TokenListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = {} as TokenListInstance;

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/Tokens.json`;

  instance.create = function create(
    params?:
      | TokenListInstanceCreateOptions
      | ((error: Error | null, items: TokenInstance) => any),
    callback?: (error: Error | null, items: TokenInstance) => any
  ): Promise<TokenInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["ttl"] !== undefined) data["Ttl"] = params["ttl"];

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
        new TokenInstance(
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

interface TokenPayload extends TokenResource {}

interface TokenResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  ice_servers: Array<ApiV2010AccountTokenIceServers>;
  password: string;
  ttl: string;
  username: string;
}

export class TokenInstance {
  constructor(
    protected _version: V2010,
    payload: TokenResource,
    accountSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.iceServers = payload.ice_servers;
    this.password = payload.password;
    this.ttl = payload.ttl;
    this.username = payload.username;
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Token resource.
   */
  accountSid: string;
  /**
   * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * An array representing the ephemeral credentials and the STUN and TURN server URIs.
   */
  iceServers: Array<ApiV2010AccountTokenIceServers>;
  /**
   * The temporary password that the username will use when authenticating with Twilio.
   */
  password: string;
  /**
   * The duration in seconds for which the username and password are valid.
   */
  ttl: string;
  /**
   * The temporary username that uniquely identifies a Token.
   */
  username: string;

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
      iceServers: this.iceServers,
      password: this.password,
      ttl: this.ttl,
      username: this.username,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
