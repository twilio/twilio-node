/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Flex
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import FlexApiBase from "../FlexApiBase";
import Version from "../../base/Version";
import { WebChannelsListInstance } from "./v2/webChannels";

export default class V2 extends Version {
  /**
   * Initialize the V2 version of FlexApi
   *
   * @property { Twilio.FlexApi.V2.WebChannelsListInstance } webChannels - webChannels resource
   *
   * @param { Twilio.FlexApi } domain - The Twilio domain
   */
  constructor(domain: FlexApiBase) {
    super(domain, "v2");
  }

  protected _webChannels?: WebChannelsListInstance;

  get webChannels(): WebChannelsListInstance {
    this._webChannels = this._webChannels || WebChannelsListInstance(this);
    return this._webChannels;
  }
}
