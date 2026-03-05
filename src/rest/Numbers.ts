import { RegulatoryComplianceListInstance } from "./numbers/v2/regulatoryCompliance.js";
import { NumbersBase } from "./NumbersBase.js";

export class Numbers extends NumbersBase {
  /**
   * @deprecated - Use v2.regulatoryCompliance instead
   */
  get regulatoryCompliance(): RegulatoryComplianceListInstance {
    console.warn(
      "regulatoryCompliance is deprecated. Use v2.regulatoryCompliance instead."
    );
    return this.v2.regulatoryCompliance;
  }
}
