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

export interface BalanceListInstance {
  /**
   * Fetch a BalanceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BalanceInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BalanceInstance) => any
  ): Promise<BalanceInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BalanceSolution {
  accountSid?: string;
}

interface BalanceListInstanceImpl extends BalanceListInstance {}
class BalanceListInstanceImpl implements BalanceListInstance {
  _version?: V2010;
  _solution?: BalanceSolution;
  _uri?: string;
}

export function BalanceListInstance(
  version: V2010,
  accountSid: string
): BalanceListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = {} as BalanceListInstanceImpl;

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/Balance.json`;

  instance.fetch = function fetch(callback?: any): Promise<BalanceInstance> {
    let operationVersion = version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new BalanceInstance(
          operationVersion,
          payload,
          this._solution.accountSid
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

interface BalancePayload extends BalanceResource {}

interface BalanceResource {
  account_sid?: string | null;
  balance?: string | null;
  currency?: string | null;
}

export class BalanceInstance {
  constructor(
    protected _version: V2010,
    payload: BalanceResource,
    accountSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.balance = payload.balance;
    this.currency = payload.currency;
  }

  /**
   * Account Sid.
   */
  accountSid?: string | null;
  /**
   * Account balance
   */
  balance?: string | null;
  /**
   * Currency units
   */
  currency?: string | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      balance: this.balance,
      currency: this.currency,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
