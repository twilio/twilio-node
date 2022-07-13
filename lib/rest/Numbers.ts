import {RegulatoryComplianceListInstance} from "./numbers/v2/regulatoryCompliance";
import NumbersBase from "./NumbersBase";

class Numbers extends NumbersBase {
    /**
     * @deprecated - Use v2.regulatoryCompliance instead
     */
    get regulatoryCompliance(): RegulatoryComplianceListInstance {
        console.warn('regulatoryCompliance is deprecated. Use v2.regulatoryCompliance instead.');
        return this.v2.regulatoryCompliance;
    }
}

export = Numbers;
