/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Marketplace
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import MarketplaceBase from "../MarketplaceBase";
import Version from "../../base/Version";
import { AvailableAddOnListInstance } from "./v1/availableAddOn";
import { InstalledAddOnListInstance } from "./v1/installedAddOn";
import { ModuleDataManagementListInstance } from "./v1/moduleDataManagement";
import { ReferralConversionListInstance } from "./v1/referralConversion";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Marketplace
   *
   * @param domain - The Twilio (Twilio.Marketplace) domain
   */
  constructor(domain: MarketplaceBase) {
    super(domain, "v1");
  }

  /** availableAddOns - { Twilio.Marketplace.V1.AvailableAddOnListInstance } resource */
  protected _availableAddOns?: AvailableAddOnListInstance;
  /** installedAddOns - { Twilio.Marketplace.V1.InstalledAddOnListInstance } resource */
  protected _installedAddOns?: InstalledAddOnListInstance;
  /** moduleDataManagement - { Twilio.Marketplace.V1.ModuleDataManagementListInstance } resource */
  protected _moduleDataManagement?: ModuleDataManagementListInstance;
  /** referralConversion - { Twilio.Marketplace.V1.ReferralConversionListInstance } resource */
  protected _referralConversion?: ReferralConversionListInstance;

  /** Getter for availableAddOns resource */
  get availableAddOns(): AvailableAddOnListInstance {
    this._availableAddOns =
      this._availableAddOns || AvailableAddOnListInstance(this);
    return this._availableAddOns;
  }

  /** Getter for installedAddOns resource */
  get installedAddOns(): InstalledAddOnListInstance {
    this._installedAddOns =
      this._installedAddOns || InstalledAddOnListInstance(this);
    return this._installedAddOns;
  }

  /** Getter for moduleDataManagement resource */
  get moduleDataManagement(): ModuleDataManagementListInstance {
    this._moduleDataManagement =
      this._moduleDataManagement || ModuleDataManagementListInstance(this);
    return this._moduleDataManagement;
  }

  /** Getter for referralConversion resource */
  get referralConversion(): ReferralConversionListInstance {
    this._referralConversion =
      this._referralConversion || ReferralConversionListInstance(this);
    return this._referralConversion;
  }
}
