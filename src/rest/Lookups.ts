import { PhoneNumberListInstance } from "./lookups/v1/phoneNumber.js";
import { LookupsBase } from "./LookupsBase.js";

export class Lookups extends LookupsBase {
  /**
   * @deprecated - Use v1.phoneNumbers instead
   */
  get phoneNumbers(): PhoneNumberListInstance {
    console.warn("phoneNumbers is deprecated. Use v1.phoneNumbers instead.");
    return this.v1.phoneNumbers;
  }
}
