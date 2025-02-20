/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Iam
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import IamBase from "../IamBase";
import Version from "../../base/Version";
import { ApiKeyListInstance } from "./v1/apiKey";
import { GetApiKeysListInstance } from "./v1/getApiKeys";
import { KeyListInstance } from "./v1/key";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Iam
   *
   * @param domain - The Twilio (Twilio.Iam) domain
   */
  constructor(domain: IamBase) {
    super(domain, "v1");
  }

  /** apiKey - { Twilio.Iam.V1.ApiKeyListInstance } resource */
  protected _apiKey?: ApiKeyListInstance;
  /** getApiKeys - { Twilio.Iam.V1.GetApiKeysListInstance } resource */
  protected _getApiKeys?: GetApiKeysListInstance;
  /** keys - { Twilio.Iam.V1.KeyListInstance } resource */
  protected _keys?: KeyListInstance;

  /** Getter for apiKey resource */
  get apiKey(): ApiKeyListInstance {
    this._apiKey = this._apiKey || ApiKeyListInstance(this);
    return this._apiKey;
  }

  /** Getter for getApiKeys resource */
  get getApiKeys(): GetApiKeysListInstance {
    this._getApiKeys = this._getApiKeys || GetApiKeysListInstance(this);
    return this._getApiKeys;
  }

  /** Getter for keys resource */
  get keys(): KeyListInstance {
    this._keys = this._keys || KeyListInstance(this);
    return this._keys;
  }
}
