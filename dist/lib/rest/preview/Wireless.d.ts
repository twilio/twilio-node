import PreviewBase from "../PreviewBase";
import Version from "../../base/Version";
import { CommandListInstance } from "./wireless/command";
import { RatePlanListInstance } from "./wireless/ratePlan";
import { SimListInstance } from "./wireless/sim";
export default class Wireless extends Version {
    /**
     * Initialize the Wireless version of Preview
     *
     * @property { Twilio.Preview.Wireless.CommandListInstance } commands - commands resource
     * @property { Twilio.Preview.Wireless.RatePlanListInstance } ratePlans - ratePlans resource
     * @property { Twilio.Preview.Wireless.SimListInstance } sims - sims resource
     *
     * @param { Twilio.Preview } domain - The Twilio domain
     */
    constructor(domain: PreviewBase);
    protected _commands?: CommandListInstance;
    protected _ratePlans?: RatePlanListInstance;
    protected _sims?: SimListInstance;
    get commands(): CommandListInstance;
    get ratePlans(): RatePlanListInstance;
    get sims(): SimListInstance;
}
