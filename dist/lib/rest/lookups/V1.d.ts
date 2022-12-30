import LookupsBase from "../LookupsBase";
import Version from "../../base/Version";
import { PhoneNumberListInstance } from "./v1/phoneNumber";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Lookups
     *
     * @property { Twilio.Lookups.V1.PhoneNumberListInstance } phoneNumbers - phoneNumbers resource
     *
     * @param { Twilio.Lookups } domain - The Twilio domain
     */
    constructor(domain: LookupsBase);
    protected _phoneNumbers?: PhoneNumberListInstance;
    get phoneNumbers(): PhoneNumberListInstance;
}
