import PreviewBase from "../PreviewBase";
import Version from "../../base/Version";
import { FleetListInstance } from "./deployed_devices/fleet";
export default class DeployedDevices extends Version {
    /**
     * Initialize the DeployedDevices version of Preview
     *
     * @property { Twilio.Preview.DeployedDevices.FleetListInstance } fleets - fleets resource
     *
     * @param { Twilio.Preview } domain - The Twilio domain
     */
    constructor(domain: PreviewBase);
    protected _fleets?: FleetListInstance;
    get fleets(): FleetListInstance;
}
