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

export interface BalanceSolution {
  accountSid: string;
}

export interface BalanceListInstance {
  _version: V2010;
  _solution: BalanceSolution;
  _uri: string;

  /**
   * Fetch a BalanceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BalanceInstance
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

export function BalanceListInstance(
  version: V2010,
  accountSid: string
): BalanceListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = {} as BalanceListInstance;

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/Balance.json`;

  instance.fetch = function fetch(
    callback?: (error: Error | null, item?: BalanceInstance) => any
  ): Promise<BalanceInstance> {
    let operationVersion = version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new BalanceInstance(
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

interface BalancePayload extends BalanceResource {}

interface BalanceResource {
  account_sid: string;
  balance: string;
  currency: string;
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
  accountSid: string;
  /**
   * Account balance
   */
  balance: string;
  /**
   * Currency units
   */
  currency: string;

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
