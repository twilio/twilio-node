import SyncBase from "../SyncBase";
import Version from "../../base/Version";
import { ServiceListInstance } from "./v1/service";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Sync
     *
     * @property { Twilio.Sync.V1.ServiceListInstance } services - services resource
     *
     * @param { Twilio.Sync } domain - The Twilio domain
     */
    constructor(domain: SyncBase);
    protected _services?: ServiceListInstance;
    get services(): ServiceListInstance;
}
