import { EsimProfileListInstance } from "./supersim/v1/esimProfile.js";
import { FleetListInstance } from "./supersim/v1/fleet.js";
import { IpCommandListInstance } from "./supersim/v1/ipCommand.js";
import { NetworkListInstance } from "./supersim/v1/network.js";
import { NetworkAccessProfileListInstance } from "./supersim/v1/networkAccessProfile.js";
import { SettingsUpdateListInstance } from "./supersim/v1/settingsUpdate.js";
import { SimListInstance } from "./supersim/v1/sim.js";
import { SmsCommandListInstance } from "./supersim/v1/smsCommand.js";
import { UsageRecordListInstance } from "./supersim/v1/usageRecord.js";
import { SupersimBase } from "./SupersimBase.js";

export class Supersim extends SupersimBase {
  /**
   * @deprecated - Use v1.esimProfiles instead
   */
  get esimProfiles(): EsimProfileListInstance {
    console.warn("esimProfiles is deprecated. Use v1.esimProfiles instead.");
    return this.v1.esimProfiles;
  }

  /**
   * @deprecated - Use v1.fleets instead
   */
  get fleets(): FleetListInstance {
    console.warn("fleets is deprecated. Use v1.fleets instead.");
    return this.v1.fleets;
  }

  /**
   * @deprecated - Use v1.ipCommands instead
   */
  get ipCommands(): IpCommandListInstance {
    console.warn("ipCommands is deprecated. Use v1.ipCommands instead.");
    return this.v1.ipCommands;
  }

  /**
   * @deprecated - Use v1.networks instead
   */
  get networks(): NetworkListInstance {
    console.warn("networks is deprecated. Use v1.networks instead.");
    return this.v1.networks;
  }

  /**
   * @deprecated - Use v1.settingsUpdates instead
   */
  get settingsUpdates(): SettingsUpdateListInstance {
    console.warn(
      "settingsUpdates is deprecated. Use v1.settingsUpdates instead."
    );
    return this.v1.settingsUpdates;
  }

  /**
   * @deprecated - Use v1.networkAccessProfiles instead
   */
  get networkAccessProfiles(): NetworkAccessProfileListInstance {
    console.warn(
      "networkAccessProfiles is deprecated. Use v1.networkAccessProfiles instead."
    );
    return this.v1.networkAccessProfiles;
  }

  /**
   * @deprecated - Use v1.sims instead
   */
  get sims(): SimListInstance {
    console.warn("sims is deprecated. Use v1.sims instead.");
    return this.v1.sims;
  }

  /**
   * @deprecated - Use v1.smsCommands instead
   */
  get smsCommands(): SmsCommandListInstance {
    console.warn("smsCommands is deprecated. Use v1.smsCommands instead.");
    return this.v1.smsCommands;
  }

  /**
   * @deprecated - Use v1.usageRecords instead
   */
  get usageRecords(): UsageRecordListInstance {
    console.warn("usageRecords is deprecated. Use v1.usageRecords instead.");
    return this.v1.usageRecords;
  }
}
