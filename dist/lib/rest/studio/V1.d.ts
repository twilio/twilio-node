import StudioBase from "../StudioBase";
import Version from "../../base/Version";
import { FlowListInstance } from "./v1/flow";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Studio
     *
     * @property { Twilio.Studio.V1.FlowListInstance } flows - flows resource
     *
     * @param { Twilio.Studio } domain - The Twilio domain
     */
    constructor(domain: StudioBase);
    protected _flows?: FlowListInstance;
    get flows(): FlowListInstance;
}
