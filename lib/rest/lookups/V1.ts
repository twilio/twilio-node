/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Lookups
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import LookupsBase from "../LookupsBase";
import Version from "../../base/Version";
import { PhoneNumberListInstance } from "./v1/phoneNumber";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Lookups
   *
   * @property { Twilio.Lookups.V1.PhoneNumberListInstance } phone_numbers - phone_numbers resource
   *
   * @param { Twilio.Lookups } domain - The Twilio domain
   */
  constructor(domain: LookupsBase) {
    super(domain, "v1");
  }

  protected _phone_numbers?: PhoneNumberListInstance;

  get phone_numbers(): PhoneNumberListInstance {
    this._phone_numbers = this._phone_numbers || PhoneNumberListInstance(this);
    return this._phone_numbers;
  }

}
