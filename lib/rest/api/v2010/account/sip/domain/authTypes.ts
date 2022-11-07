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
import V2010 from "../../../../V2010";
const deserialize = require("../../../../../../base/deserialize");
const serialize = require("../../../../../../base/serialize");
import { AuthTypeCallsListInstance } from "./authTypes/authTypeCalls";
import { AuthTypeRegistrationsListInstance } from "./authTypes/authTypeRegistrations";

export interface AuthTypesListInstance {
  calls: AuthTypeCallsListInstance;
  registrations: AuthTypeRegistrationsListInstance;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AuthTypesSolution {
  accountSid?: string;
  domainSid?: string;
}

interface AuthTypesListInstanceImpl extends AuthTypesListInstance {}
class AuthTypesListInstanceImpl implements AuthTypesListInstance {
  _version?: V2010;
  _solution?: AuthTypesSolution;
  _uri?: string;

  _calls?: AuthTypeCallsListInstance;
  _registrations?: AuthTypeRegistrationsListInstance;
}

export function AuthTypesListInstance(
  version: V2010,
  accountSid: string,
  domainSid: string
): AuthTypesListInstance {
  const instance = {} as AuthTypesListInstanceImpl;

  instance._version = version;
  instance._solution = { accountSid, domainSid };
  instance._uri = `/Accounts/${accountSid}/SIP/Domains/${domainSid}/Auth.json`;

  Object.defineProperty(instance, "calls", {
    get: function calls() {
      if (!this._calls) {
        this._calls = AuthTypeCallsListInstance(
          this._version,
          this._solution.accountSid,
          this._solution.domainSid
        );
      }
      return this._calls;
    },
  });

  Object.defineProperty(instance, "registrations", {
    get: function registrations() {
      if (!this._registrations) {
        this._registrations = AuthTypeRegistrationsListInstance(
          this._version,
          this._solution.accountSid,
          this._solution.domainSid
        );
      }
      return this._registrations;
    },
  });

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
