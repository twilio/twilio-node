import { PhoneNumberListInstance } from "./lookups/v1/phoneNumber";
import LookupsBase from "./LookupsBase";

class Lookups extends LookupsBase {
  /**
   * @deprecated - Use v1.phoneNumbers instead
   */
  get phoneNumbers(): PhoneNumberListInstance {
    console.warn("phoneNumbers is deprecated. Use v1.phoneNumbers instead.");
    return this.v1.phoneNumbers;
  }
}

export = Lookups;
