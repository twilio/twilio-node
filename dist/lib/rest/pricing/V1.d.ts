import PricingBase from "../PricingBase";
import Version from "../../base/Version";
import { MessagingListInstance } from "./v1/messaging";
import { PhoneNumberListInstance } from "./v1/phoneNumber";
import { VoiceListInstance } from "./v1/voice";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Pricing
     *
     * @property { Twilio.Pricing.V1.MessagingListInstance } messaging - messaging resource
     * @property { Twilio.Pricing.V1.PhoneNumberListInstance } phoneNumbers - phoneNumbers resource
     * @property { Twilio.Pricing.V1.VoiceListInstance } voice - voice resource
     *
     * @param { Twilio.Pricing } domain - The Twilio domain
     */
    constructor(domain: PricingBase);
    protected _messaging?: MessagingListInstance;
    protected _phoneNumbers?: PhoneNumberListInstance;
    protected _voice?: VoiceListInstance;
    get messaging(): MessagingListInstance;
    get phoneNumbers(): PhoneNumberListInstance;
    get voice(): VoiceListInstance;
}
