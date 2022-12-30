import MicrovisorBase from "../MicrovisorBase";
import Version from "../../base/Version";
import { AppListInstance } from "./v1/app";
import { DeviceListInstance } from "./v1/device";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Microvisor
     *
     * @property { Twilio.Microvisor.V1.AppListInstance } apps - apps resource
     * @property { Twilio.Microvisor.V1.DeviceListInstance } devices - devices resource
     *
     * @param { Twilio.Microvisor } domain - The Twilio domain
     */
    constructor(domain: MicrovisorBase);
    protected _apps?: AppListInstance;
    protected _devices?: DeviceListInstance;
    get apps(): AppListInstance;
    get devices(): DeviceListInstance;
}
