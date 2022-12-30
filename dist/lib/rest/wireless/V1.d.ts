import WirelessBase from "../WirelessBase";
import Version from "../../base/Version";
import { CommandListInstance } from "./v1/command";
import { RatePlanListInstance } from "./v1/ratePlan";
import { SimListInstance } from "./v1/sim";
import { UsageRecordListInstance } from "./v1/usageRecord";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Wireless
     *
     * @property { Twilio.Wireless.V1.CommandListInstance } commands - commands resource
     * @property { Twilio.Wireless.V1.RatePlanListInstance } ratePlans - ratePlans resource
     * @property { Twilio.Wireless.V1.SimListInstance } sims - sims resource
     * @property { Twilio.Wireless.V1.UsageRecordListInstance } usageRecords - usageRecords resource
     *
     * @param { Twilio.Wireless } domain - The Twilio domain
     */
    constructor(domain: WirelessBase);
    protected _commands?: CommandListInstance;
    protected _ratePlans?: RatePlanListInstance;
    protected _sims?: SimListInstance;
    protected _usageRecords?: UsageRecordListInstance;
    get commands(): CommandListInstance;
    get ratePlans(): RatePlanListInstance;
    get sims(): SimListInstance;
    get usageRecords(): UsageRecordListInstance;
}
