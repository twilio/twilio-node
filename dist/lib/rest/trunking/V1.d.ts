import TrunkingBase from "../TrunkingBase";
import Version from "../../base/Version";
import { TrunkListInstance } from "./v1/trunk";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Trunking
     *
     * @property { Twilio.Trunking.V1.TrunkListInstance } trunks - trunks resource
     *
     * @param { Twilio.Trunking } domain - The Twilio domain
     */
    constructor(domain: TrunkingBase);
    protected _trunks?: TrunkListInstance;
    get trunks(): TrunkListInstance;
}
