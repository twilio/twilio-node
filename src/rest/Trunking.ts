import { TrunkListInstance } from "./trunking/v1/trunk.js";
import { TrunkingBase } from "./TrunkingBase.js";

export class Trunking extends TrunkingBase {
  /**
   * @deprecated - Use v1.trunks instead
   */
  get trunks(): TrunkListInstance {
    console.warn("trunks is deprecated. Use v1.trunks instead.");
    return this.v1.trunks;
  }
}
