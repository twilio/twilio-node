import { AssistantListInstance } from "./autopilot/v1/assistant";
import { RestoreAssistantListInstance } from "./autopilot/v1/restoreAssistant";
import AutopilotBase from "./AutopilotBase";

class Autopilot extends AutopilotBase {
  /**
   * @deprecated - Use v1.assistants instead
   */
  get assistants(): AssistantListInstance {
    console.warn("assistants is deprecated. Use v1.assistants instead.");
    return this.v1.assistants;
  }

  /**
   * @deprecated - Use v1.restoreAssistant instead
   */
  get restoreAssistant(): RestoreAssistantListInstance {
    console.warn(
      "restoreAssistant is deprecated. Use v1.restoreAssistant instead."
    );
    return this.v1.restoreAssistant;
  }
}

export = Autopilot;
