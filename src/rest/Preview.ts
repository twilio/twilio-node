import { AuthorizationDocumentListInstance } from "./preview/hosted_numbers/authorizationDocument.js";
import { HostedNumberOrderListInstance } from "./preview/hosted_numbers/hostedNumberOrder.js";
import { AvailableAddOnListInstance } from "./preview/marketplace/availableAddOn.js";
import { InstalledAddOnListInstance } from "./preview/marketplace/installedAddOn.js";
import { CommandListInstance } from "./preview/wireless/command.js";
import { RatePlanListInstance } from "./preview/wireless/ratePlan.js";
import { SimListInstance } from "./preview/wireless/sim.js";
import { PreviewBase } from "./PreviewBase.js";

export class Preview extends PreviewBase {
  /**
   * @deprecated - Use hosted_numbers.authorizationDocuments instead
   */
  get authorizationDocuments(): AuthorizationDocumentListInstance {
    console.warn(
      "authorizationDocuments is deprecated. Use hosted_numbers.authorizationDocuments instead."
    );
    return this.hosted_numbers.authorizationDocuments;
  }

  /**
   * @deprecated - Use hosted_numbers.hostedNumberOrders instead
   */
  get hostedNumberOrders(): HostedNumberOrderListInstance {
    console.warn(
      "hostedNumberOrders is deprecated. Use hosted_numbers.hostedNumberOrders instead."
    );
    return this.hosted_numbers.hostedNumberOrders;
  }

  /**
   * @deprecated - Use marketplace.availableAddOns instead
   */
  get availableAddOns(): AvailableAddOnListInstance {
    console.warn(
      "availableAddOns is deprecated. Use marketplace.availableAddOns instead."
    );
    return this.marketplace.availableAddOns;
  }

  /**
   * @deprecated - Use marketplace.installedAddOns instead
   */
  get installedAddOns(): InstalledAddOnListInstance {
    console.warn(
      "installedAddOns is deprecated. Use marketplace.installedAddOns instead."
    );
    return this.marketplace.installedAddOns;
  }

  /**
   * @deprecated - Use wireless.commands instead
   */
  get commands(): CommandListInstance {
    console.warn("commands is deprecated. Use wireless.commands instead.");
    return this.wireless.commands;
  }

  /**
   * @deprecated - Use wireless.ratePlans instead
   */
  get ratePlans(): RatePlanListInstance {
    console.warn("ratePlans is deprecated. Use wireless.ratePlans instead.");
    return this.wireless.ratePlans;
  }

  /**
   * @deprecated - Use wireless.sims instead
   */
  get sims(): SimListInstance {
    console.warn("sims is deprecated. Use wireless.sims instead.");
    return this.wireless.sims;
  }
}
