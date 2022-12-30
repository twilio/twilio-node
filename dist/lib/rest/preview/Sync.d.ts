import PreviewBase from "../PreviewBase";
import Version from "../../base/Version";
import { ServiceListInstance } from "./sync/service";
export default class Sync extends Version {
    /**
     * Initialize the Sync version of Preview
     *
     * @property { Twilio.Preview.Sync.ServiceListInstance } services - services resource
     *
     * @param { Twilio.Preview } domain - The Twilio domain
     */
    constructor(domain: PreviewBase);
    protected _services?: ServiceListInstance;
    get services(): ServiceListInstance;
}
