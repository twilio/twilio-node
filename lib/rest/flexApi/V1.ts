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
import { ChannelListInstance } from "./v1/channel";
import { ConfigurationListInstance } from "./v1/configuration";
import { FlexFlowListInstance } from "./v1/flexFlow";
import { InteractionListInstance } from "./v1/interaction";
import { WebChannelListInstance } from "./v1/webChannel";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of FlexApi
   *
   * @property { Twilio.FlexApi.V1.ChannelListInstance } channel - channel resource
   * @property { Twilio.FlexApi.V1.ConfigurationListInstance } configuration - configuration resource
   * @property { Twilio.FlexApi.V1.FlexFlowListInstance } flexFlow - flexFlow resource
   * @property { Twilio.FlexApi.V1.InteractionListInstance } interaction - interaction resource
   * @property { Twilio.FlexApi.V1.WebChannelListInstance } webChannel - webChannel resource
   *
   * @param { Twilio.FlexApi } domain - The Twilio domain
   */
  constructor(domain: FlexApiBase) {
    super(domain, "v1");
  }

  protected _channel?: ChannelListInstance;
  protected _configuration?: ConfigurationListInstance;
  protected _flexFlow?: FlexFlowListInstance;
  protected _interaction?: InteractionListInstance;
  protected _webChannel?: WebChannelListInstance;

  get channel(): ChannelListInstance {
    this._channel = this._channel || ChannelListInstance(this);
    return this._channel;
  }

  get configuration(): ConfigurationListInstance {
    this._configuration = this._configuration || ConfigurationListInstance(this);
    return this._configuration;
  }

  get flexFlow(): FlexFlowListInstance {
    this._flexFlow = this._flexFlow || FlexFlowListInstance(this);
    return this._flexFlow;
  }

  get interaction(): InteractionListInstance {
    this._interaction = this._interaction || InteractionListInstance(this);
    return this._interaction;
  }

  get webChannel(): WebChannelListInstance {
    this._webChannel = this._webChannel || WebChannelListInstance(this);
    return this._webChannel;
  }

}
