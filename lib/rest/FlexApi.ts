import { ChannelListInstance } from "./flexApi/v1/channel";
import { ConfigurationListInstance } from "./flexApi/v1/configuration";
import { FlexFlowListInstance } from "./flexApi/v1/flexFlow";
import { InteractionListInstance } from "./flexApi/v1/interaction";
import { WebChannelListInstance } from "./flexApi/v1/webChannel";
import { AssessmentsListInstance } from "./flexApi/v1/assessments";
import { WebChannelsListInstance } from "./flexApi/v2/webChannels";

import FlexApiBase from "./FlexApiBase";

class FlexApi extends FlexApiBase {
  /**
   * @deprecated - Use v1.assessments instead
   */
  get assessments(): AssessmentsListInstance {
    console.warn("assessments is deprecated. Use v1.assessments instead.");
    return this.v1.assessments;
  }

  /**
   * @deprecated - Use v1.channel instead
   */
  get channel(): ChannelListInstance {
    console.warn("channel is deprecated. Use v1.channel instead.");
    return this.v1.channel;
  }

  /**
   * @deprecated - Use v1.configuration instead
   */
  get configuration(): ConfigurationListInstance {
    console.warn("configuration is deprecated. Use v1.configuration instead.");
    return this.v1.configuration;
  }

  /**
   * @deprecated - Use v1.flexFlow instead
   */
  get flexFlow(): FlexFlowListInstance {
    console.warn("flexFlow is deprecated. Use v1.flexFlow instead.");
    return this.v1.flexFlow;
  }

  /**
   * @deprecated - Use v1.interaction instead
   */
  get interaction(): InteractionListInstance {
    console.warn("interaction is deprecated. Use v1.interaction instead.");
    return this.v1.interaction;
  }

  /**
   * @deprecated - Use v1.webChannel instead
   */
  get webChannel(): WebChannelListInstance {
    console.warn("webChannel is deprecated. Use v1.webChannel instead.");
    return this.v1.webChannel;
  }

  /**
   * @deprecated - Use v2.webChannels instead
   */
  get webChannels(): WebChannelsListInstance {
    console.warn("webChannels is deprecated. Use v2.webChannels instead.");
    return this.v2.webChannels;
  }
}

export = FlexApi;
