import { FleetListInstance } from "./preview/deployed_devices/fleet";
import { AuthorizationDocumentListInstance } from "./preview/hosted_numbers/authorizationDocument";
import { HostedNumberOrderListInstance } from "./preview/hosted_numbers/hostedNumberOrder";
import { AvailableAddOnListInstance } from "./preview/marketplace/availableAddOn";
import { InstalledAddOnListInstance } from "./preview/marketplace/installedAddOn";
import { ServiceListInstance } from "./preview/sync/service";
import { CommandListInstance } from "./preview/wireless/command";
import { RatePlanListInstance } from "./preview/wireless/ratePlan";
import { SimListInstance } from "./preview/wireless/sim";
import PreviewBase from "./PreviewBase";

class Preview extends PreviewBase {
  /**
   * @deprecated - Use deployed_devices.fleets instead
   */
  get fleets(): FleetListInstance {
    console.warn("fleets is deprecated. Use deployed_devices.fleets instead.");
    return this.deployed_devices.fleets;
  }

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
   * @deprecated - Use sync.services instead
   */
  get services(): ServiceListInstance {
    console.warn("services is deprecated. Use sync.services instead.");
    return this.sync.services;
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

export = Preview;
