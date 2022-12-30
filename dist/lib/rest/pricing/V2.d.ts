import PricingBase from "../PricingBase";
import Version from "../../base/Version";
import { CountryListInstance } from "./v2/country";
import { NumberListInstance } from "./v2/number";
import { VoiceListInstance } from "./v2/voice";
export default class V2 extends Version {
    /**
     * Initialize the V2 version of Pricing
     *
     * @property { Twilio.Pricing.V2.CountryListInstance } countries - countries resource
     * @property { Twilio.Pricing.V2.NumberListInstance } numbers - numbers resource
     * @property { Twilio.Pricing.V2.VoiceListInstance } voice - voice resource
     *
     * @param { Twilio.Pricing } domain - The Twilio domain
     */
    constructor(domain: PricingBase);
    protected _countries?: CountryListInstance;
    protected _numbers?: NumberListInstance;
    protected _voice?: VoiceListInstance;
    get countries(): CountryListInstance;
    get numbers(): NumberListInstance;
    get voice(): VoiceListInstance;
}
