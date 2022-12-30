import LookupsBase from "../LookupsBase";
import Version from "../../base/Version";
import { PhoneNumberListInstance } from "./v2/phoneNumber";
export default class V2 extends Version {
    /**
     * Initialize the V2 version of Lookups
     *
     * @property { Twilio.Lookups.V2.PhoneNumberListInstance } phoneNumbers - phoneNumbers resource
     *
     * @param { Twilio.Lookups } domain - The Twilio domain
     */
    constructor(domain: LookupsBase);
    protected _phoneNumbers?: PhoneNumberListInstance;
    get phoneNumbers(): PhoneNumberListInstance;
}
