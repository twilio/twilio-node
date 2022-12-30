import AutopilotBase from "../AutopilotBase";
import Version from "../../base/Version";
import { AssistantListInstance } from "./v1/assistant";
import { RestoreAssistantListInstance } from "./v1/restoreAssistant";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Autopilot
     *
     * @property { Twilio.Autopilot.V1.AssistantListInstance } assistants - assistants resource
     * @property { Twilio.Autopilot.V1.RestoreAssistantListInstance } restoreAssistant - restoreAssistant resource
     *
     * @param { Twilio.Autopilot } domain - The Twilio domain
     */
    constructor(domain: AutopilotBase);
    protected _assistants?: AssistantListInstance;
    protected _restoreAssistant?: RestoreAssistantListInstance;
    get assistants(): AssistantListInstance;
    get restoreAssistant(): RestoreAssistantListInstance;
}
