/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Pricing
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
import { CountryListInstance } from "./messaging/country";



export interface MessagingListInstance {

  countries: CountryListInstance;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface MessagingSolution {
}

interface MessagingListInstanceImpl extends MessagingListInstance {}
class MessagingListInstanceImpl implements MessagingListInstance {
  _version?: V1;
  _solution?: MessagingSolution;
  _uri?: string;

  _countries?: CountryListInstance;
}

export function MessagingListInstance(version: V1): MessagingListInstance {
  const instance = {} as MessagingListInstanceImpl;

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Messaging`;

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


