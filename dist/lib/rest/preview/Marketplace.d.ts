import PreviewBase from "../PreviewBase";
import Version from "../../base/Version";
import { AvailableAddOnListInstance } from "./marketplace/availableAddOn";
import { InstalledAddOnListInstance } from "./marketplace/installedAddOn";
export default class Marketplace extends Version {
    /**
     * Initialize the Marketplace version of Preview
     *
     * @property { Twilio.Preview.Marketplace.AvailableAddOnListInstance } availableAddOns - availableAddOns resource
     * @property { Twilio.Preview.Marketplace.InstalledAddOnListInstance } installedAddOns - installedAddOns resource
     *
     * @param { Twilio.Preview } domain - The Twilio domain
     */
    constructor(domain: PreviewBase);
    protected _availableAddOns?: AvailableAddOnListInstance;
    protected _installedAddOns?: InstalledAddOnListInstance;
    get availableAddOns(): AvailableAddOnListInstance;
    get installedAddOns(): InstalledAddOnListInstance;
}
