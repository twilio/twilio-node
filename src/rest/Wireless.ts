import { CommandListInstance } from "./wireless/v1/command";
import { RatePlanListInstance } from "./wireless/v1/ratePlan";
import { SimListInstance } from "./wireless/v1/sim";
import { UsageRecordListInstance } from "./wireless/v1/usageRecord";
import WirelessBase from "./WirelessBase";

class Wireless extends WirelessBase {
  /**
   * @deprecated - Use v1.usageRecords instead
   */
  get usageRecords(): UsageRecordListInstance {
    console.warn("usageRecords is deprecated. Use v1.usageRecords instead.");
    return this.v1.usageRecords;
  }

  /**
   * @deprecated - Use v1.commands instead
   */
  get commands(): CommandListInstance {
    console.warn("commands is deprecated. Use v1.commands instead.");
    return this.v1.commands;
  }

  /**
   * @deprecated - Use v1.ratePlans instead
   */
  get ratePlans(): RatePlanListInstance {
    console.warn("ratePlans is deprecated. Use v1.ratePlans instead.");
    return this.v1.ratePlans;
  }

  /**
   * @deprecated - Use v1.sims instead
   */
  get sims(): SimListInstance {
    console.warn("sims is deprecated. Use v1.sims instead.");
    return this.v1.sims;
  }
}

export = Wireless;
