import StudioBase from "../StudioBase";
import Version from "../../base/Version";
import { FlowListInstance } from "./v2/flow";
import { FlowValidateListInstance } from "./v2/flowValidate";
export default class V2 extends Version {
    /**
     * Initialize the V2 version of Studio
     *
     * @property { Twilio.Studio.V2.FlowListInstance } flows - flows resource
     * @property { Twilio.Studio.V2.FlowValidateListInstance } flowValidate - flowValidate resource
     *
     * @param { Twilio.Studio } domain - The Twilio domain
     */
    constructor(domain: StudioBase);
    protected _flows?: FlowListInstance;
    protected _flowValidate?: FlowValidateListInstance;
    get flows(): FlowListInstance;
    get flowValidate(): FlowValidateListInstance;
}
