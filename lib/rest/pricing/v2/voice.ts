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
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { CountryListInstance } from "./voice/country";
import { NumberListInstance } from "./voice/number";

export interface VoiceSolution {}

export interface VoiceListInstance {
  _version: V2;
  _solution: VoiceSolution;
  _uri: string;

  _countries?: CountryListInstance;
  countries: CountryListInstance;
  _numbers?: NumberListInstance;
  numbers: NumberListInstance;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function VoiceListInstance(version: V2): VoiceListInstance {
  const instance = {} as VoiceListInstance;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Voice`;

  Object.defineProperty(instance, "countries", {
    get: function countries() {
      if (!instance._countries) {
        instance._countries = CountryListInstance(instance._version);
      }
      return instance._countries;
    },
  });

  Object.defineProperty(instance, "numbers", {
    get: function numbers() {
      if (!instance._numbers) {
        instance._numbers = NumberListInstance(instance._version);
      }
      return instance._numbers;
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
