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
import V2010 from "../../../../../V2010";
const deserialize = require("../../../../../../../base/deserialize");
const serialize = require("../../../../../../../base/serialize");
import { isValidPathParam } from "../../../../../../../base/utility";
import { AuthRegistrationsCredentialListMappingListInstance } from "./authTypeRegistrations/authRegistrationsCredentialListMapping";

export interface AuthTypeRegistrationsSolution {
  accountSid?: string;
  domainSid?: string;
}

export interface AuthTypeRegistrationsListInstance {
  _version: V2010;
  _solution: AuthTypeRegistrationsSolution;
  _uri: string;

  _credentialListMappings?: AuthRegistrationsCredentialListMappingListInstance;
  credentialListMappings: AuthRegistrationsCredentialListMappingListInstance;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AuthTypeRegistrationsListInstance(
  version: V2010,
  accountSid: string,
  domainSid: string
): AuthTypeRegistrationsListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(domainSid)) {
    throw new Error("Parameter 'domainSid' is not valid.");
  }

  const instance = {} as AuthTypeRegistrationsListInstance;

  instance._version = version;
  instance._solution = { accountSid, domainSid };
  instance._uri = `/Accounts/${accountSid}/SIP/Domains/${domainSid}/Auth/Registrations.json`;

  Object.defineProperty(instance, "credentialListMappings", {
    get: function credentialListMappings() {
      if (!instance._credentialListMappings) {
        instance._credentialListMappings =
          AuthRegistrationsCredentialListMappingListInstance(
            instance._version,
            instance._solution.accountSid,
            instance._solution.domainSid
          );
      }
      return instance._credentialListMappings;
    },
  });

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
