import NumbersBase from "../NumbersBase";
import Version from "../../base/Version";
import { RegulatoryComplianceListInstance } from "./v2/regulatoryCompliance";
export default class V2 extends Version {
    /**
     * Initialize the V2 version of Numbers
     *
     * @property { Twilio.Numbers.V2.RegulatoryComplianceListInstance } regulatoryCompliance - regulatoryCompliance resource
     *
     * @param { Twilio.Numbers } domain - The Twilio domain
     */
    constructor(domain: NumbersBase);
    protected _regulatoryCompliance?: RegulatoryComplianceListInstance;
    get regulatoryCompliance(): RegulatoryComplianceListInstance;
}
