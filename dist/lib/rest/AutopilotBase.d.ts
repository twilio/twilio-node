import Domain from "../base/Domain";
import V1 from "./autopilot/V1";
declare class AutopilotBase extends Domain {
    _v1?: V1;
    /**
     * Initialize autopilot domain
     *
     * @param twilio - The twilio client
     */
    constructor(twilio: any);
    get v1(): V1;
}
export = AutopilotBase;
