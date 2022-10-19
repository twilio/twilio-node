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
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { NumberListInstance } from "./voice/number";
import { CountryListInstance } from "./voice/country";


export interface VoiceListInstance {

  numbers: NumberListInstance;
  countries: CountryListInstance;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface VoiceSolution {
}

interface VoiceListInstanceImpl extends VoiceListInstance {}
class VoiceListInstanceImpl implements VoiceListInstance {
  _version?: V2;
  _solution?: VoiceSolution;
  _uri?: string;

  _numbers?: NumberListInstance;
  _countries?: CountryListInstance;
}

export function VoiceListInstance(version: V2): VoiceListInstance {
  const instance = {} as VoiceListInstanceImpl;

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Voice`;

  Object.defineProperty(instance, "numbers", {
    get: function numbers() {
      if (!this._numbers) {
        this._numbers = NumberListInstance(this._version);
      }
      return this._numbers;
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

