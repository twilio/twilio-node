import { AssistantListInstance } from "./autopilot/v1/assistant";
import { RestoreAssistantListInstance } from "./autopilot/v1/restoreAssistant";
import AutopilotBase from "./AutopilotBase";
declare class Autopilot extends AutopilotBase {
    /**
     * @deprecated - Use v1.assistants instead
     */
    get assistants(): AssistantListInstance;
    /**
     * @deprecated - Use v1.restoreAssistant instead
     */
    get restoreAssistant(): RestoreAssistantListInstance;
}
export = Autopilot;
