"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const AutopilotBase_1 = __importDefault(require("./AutopilotBase"));
class Autopilot extends AutopilotBase_1.default {
    /**
     * @deprecated - Use v1.assistants instead
     */
    get assistants() {
        console.warn("assistants is deprecated. Use v1.assistants instead.");
        return this.v1.assistants;
    }
    /**
     * @deprecated - Use v1.restoreAssistant instead
     */
    get restoreAssistant() {
        console.warn("restoreAssistant is deprecated. Use v1.restoreAssistant instead.");
        return this.v1.restoreAssistant;
    }
}
module.exports = Autopilot;
