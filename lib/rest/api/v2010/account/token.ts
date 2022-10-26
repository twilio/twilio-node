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


export class ApiV2010AccountTokenIceServers {
  "credential"?: string;
  "username"?: string;
  "url"?: string;
  "urls"?: string;
}



/**
 * Options to pass to create a TokenInstance
 *
 * @property { number } [ttl] The duration in seconds for which the generated credentials are valid. The default value is 86400 (24 hours).
 */
export interface TokenListInstanceCreateOptions {
  ttl?: number;
}

export interface TokenListInstance {


  /**
   * Create a TokenInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TokenInstance
   */
  create(callback?: (error: Error | null, item?: TokenInstance) => any): Promise<TokenInstance>;
  /**
   * Create a TokenInstance
   *
   * @param { TokenListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TokenInstance
   */
  create(params: TokenListInstanceCreateOptions, callback?: (error: Error | null, item?: TokenInstance) => any): Promise<TokenInstance>;
  create(params?: any, callback?: any): Promise<TokenInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TokenSolution {
  accountSid?: string;
}

interface TokenListInstanceImpl extends TokenListInstance {}
class TokenListInstanceImpl implements TokenListInstance {
  _version?: V2010;
  _solution?: TokenSolution;
  _uri?: string;

}

export function TokenListInstance(version: V2010, accountSid: string): TokenListInstance {
  const instance = {} as TokenListInstanceImpl;

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/Tokens.json`;

  instance.create = function create(params?: any, callback?: any): Promise<TokenInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.ttl !== undefined) data['Ttl'] = params.ttl;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new TokenInstance(operationVersion, payload, this._solution.accountSid));
    

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
  account_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  ice_servers?: Array<ApiV2010AccountTokenIceServers> | null;
  password?: string | null;
  ttl?: string | null;
  username?: string | null;
}

export class TokenInstance {

  constructor(protected _version: V2010, payload: TokenPayload, accountSid?: string) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.iceServers = payload.ice_servers;
    this.password = payload.password;
    this.ttl = payload.ttl;
    this.username = payload.username;

  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was created
   */
  dateCreated?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  dateUpdated?: string | null;
  /**
   * An array representing the ephemeral credentials
   */
  iceServers?: Array<ApiV2010AccountTokenIceServers> | null;
  /**
   * The temporary password used for authenticating
   */
  password?: string | null;
  /**
   * The duration in seconds the credentials are valid
   */
  ttl?: string | null;
  /**
   * The temporary username that uniquely identifies a Token
   */
  username?: string | null;

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
      username: this.username
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


