/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Oauth
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



/**
 * Options to pass to create a TokenInstance
 *
 * @property { string } grantType Grant type is a credential representing resource owner\\\&#39;s authorization which can be used by client to obtain access token.
 * @property { string } clientSid A 34 character string that uniquely identifies this OAuth App.
 * @property { string } [clientSecret] The credential for confidential OAuth App.
 * @property { string } [code] JWT token related to the authorization code grant type.
 * @property { string } [codeVerifier] A code which is generation cryptographically.
 * @property { string } [deviceCode] JWT token related to the device code grant type.
 * @property { string } [refreshToken] JWT token related to the refresh token grant type.
 * @property { string } [deviceId] The Id of the device associated with the token (refresh token).
 */
export interface TokenListInstanceCreateOptions {
  "grantType": string;
  "clientSid": string;
  "clientSecret"?: string;
  "code"?: string;
  "codeVerifier"?: string;
  "deviceCode"?: string;
  "refreshToken"?: string;
  "deviceId"?: string;
}

export interface TokenListInstance {


  /**
   * Create a TokenInstance
   *
   * @param { TokenListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TokenInstance
   */
  create(params: TokenListInstanceCreateOptions, callback?: (error: Error | null, item?: TokenInstance) => any): Promise<TokenInstance>;
  create(params: any, callback?: any): Promise<TokenInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TokenSolution {
}

interface TokenListInstanceImpl extends TokenListInstance {}
class TokenListInstanceImpl implements TokenListInstance {
  _version?: V1;
  _solution?: TokenSolution;
  _uri?: string;

}

export function TokenListInstance(version: V1): TokenListInstance {
  const instance = {} as TokenListInstanceImpl;

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/token`;

  instance.create = function create(params: any, callback?: any): Promise<TokenInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["grantType"] === null || params["grantType"] === undefined) {
      throw new Error('Required parameter "params[\'grantType\']" missing.');
    }

    if (params["clientSid"] === null || params["clientSid"] === undefined) {
      throw new Error('Required parameter "params[\'clientSid\']" missing.');
    }

    const data: any = {};

    data["GrantType"] = params["grantType"];
    data["ClientSid"] = params["clientSid"];
    if (params["clientSecret"] !== undefined) data["ClientSecret"] = params["clientSecret"];
    if (params["code"] !== undefined) data["Code"] = params["code"];
    if (params["codeVerifier"] !== undefined) data["CodeVerifier"] = params["codeVerifier"];
    if (params["deviceCode"] !== undefined) data["DeviceCode"] = params["deviceCode"];
    if (params["refreshToken"] !== undefined) data["RefreshToken"] = params["refreshToken"];
    if (params["deviceId"] !== undefined) data["DeviceId"] = params["deviceId"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new TokenInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}

interface TokenPayload extends TokenResource{
}

interface TokenResource {
  access_token?: string | null;
  refresh_token?: string | null;
  id_token?: string | null;
  refresh_token_expires_at?: Date | null;
  access_token_expires_at?: Date | null;
}

export class TokenInstance {

  constructor(protected _version: V1, payload: TokenPayload) {
    this.accessToken = payload.access_token;
    this.refreshToken = payload.refresh_token;
    this.idToken = payload.id_token;
    this.refreshTokenExpiresAt = deserialize.iso8601DateTime(payload.refresh_token_expires_at);
    this.accessTokenExpiresAt = deserialize.iso8601DateTime(payload.access_token_expires_at);

  }

  /**
   * Token which carries the necessary information to access a Twilio resource directly
   */
  accessToken?: string | null;
  /**
   * Token which carries the information necessary to get a new access token
   */
  refreshToken?: string | null;
  idToken?: string | null;
  /**
   * The RFC 2822 date and time in GMT when the refresh token expires
   */
  refreshTokenExpiresAt?: Date | null;
  /**
   * The RFC 2822 date and time in GMT when the access token expires
   */
  accessTokenExpiresAt?: Date | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accessToken: this.accessToken, 
      refreshToken: this.refreshToken, 
      idToken: this.idToken, 
      refreshTokenExpiresAt: this.refreshTokenExpiresAt, 
      accessTokenExpiresAt: this.accessTokenExpiresAt
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


