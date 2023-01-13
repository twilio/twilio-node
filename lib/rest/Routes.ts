import { PhoneNumberListInstance } from "./routes/v2/phoneNumber";
import { SipDomainListInstance } from "./routes/v2/sipDomain";
import { TrunkListInstance } from "./routes/v2/trunk";
import RoutesBase from "./RoutesBase";

class Routes extends RoutesBase {
  /**
   * @deprecated - Use v1.phoneNumbers instead
   */
  get phoneNumbers(): PhoneNumberListInstance {
    console.warn("phoneNumbers is deprecated. Use v1.phoneNumbers instead.");
    return this.v2.phoneNumbers;
  }

  /**
   * @deprecated - Use v1.sipDomains instead
   */
  get sipDomains(): SipDomainListInstance {
    console.warn("sipDomains is deprecated. Use v1.sipDomains instead.");
    return this.v2.sipDomains;
  }

  /**
   * @deprecated - Use v1.trunks instead
   */
  get trunks(): TrunkListInstance {
    console.warn("trunks is deprecated. Use v1.trunks instead.");
    return this.v2.trunks;
  }
}

export = Routes;
