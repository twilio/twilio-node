/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Voice
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { BulkCountryUpdateListInstance } from "./dialingPermissions/bulkCountryUpdate";
import { CountryListInstance } from "./dialingPermissions/country";


export interface DialingPermissionsListInstance {

  bulk_country_updates: BulkCountryUpdateListInstance;
  countries: CountryListInstance;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface DialingPermissionsListInstanceImpl extends DialingPermissionsListInstance {}
class DialingPermissionsListInstanceImpl implements DialingPermissionsListInstance {
  _version?: V1;
  _solution?: DialingPermissionsSolution;
  _uri?: string;

  _bulk_country_updates?: BulkCountryUpdateListInstance;
  _countries?: CountryListInstance;
}

export function DialingPermissionsListInstance(version: V1): DialingPermissionsListInstance {
  const instance = {} as DialingPermissionsListInstanceImpl;

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/DialingPermissions`;

  Object.defineProperty(instance, "bulk_country_updates", {
    get: function bulk_country_updates() {
      if (!this._bulk_country_updates) {
        this._bulk_country_updates = BulkCountryUpdateListInstance(this._version);
      }
      return this._bulk_country_updates;
    }
  });

  Object.defineProperty(instance, "countries", {
    get: function countries() {
      if (!this._countries) {
        this._countries = CountryListInstance(this._version);
      }
      return this._countries;
    }
  });

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}

