import RoutesBase from "../RoutesBase";
import Version from "../../base/Version";
import { PhoneNumberListInstance } from "./v2/phoneNumber";
import { SipDomainListInstance } from "./v2/sipDomain";
import { TrunkListInstance } from "./v2/trunk";
export default class V2 extends Version {
    /**
     * Initialize the V2 version of Routes
     *
     * @property { Twilio.Routes.V2.PhoneNumberListInstance } phoneNumbers - phoneNumbers resource
     * @property { Twilio.Routes.V2.SipDomainListInstance } sipDomains - sipDomains resource
     * @property { Twilio.Routes.V2.TrunkListInstance } trunks - trunks resource
     *
     * @param { Twilio.Routes } domain - The Twilio domain
     */
    constructor(domain: RoutesBase);
    protected _phoneNumbers?: PhoneNumberListInstance;
    protected _sipDomains?: SipDomainListInstance;
    protected _trunks?: TrunkListInstance;
    get phoneNumbers(): PhoneNumberListInstance;
    get sipDomains(): SipDomainListInstance;
    get trunks(): TrunkListInstance;
}
