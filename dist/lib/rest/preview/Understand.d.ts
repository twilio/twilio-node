import PreviewBase from "../PreviewBase";
import Version from "../../base/Version";
import { AssistantListInstance } from "./understand/assistant";
export default class Understand extends Version {
    /**
     * Initialize the Understand version of Preview
     *
     * @property { Twilio.Preview.Understand.AssistantListInstance } assistants - assistants resource
     *
     * @param { Twilio.Preview } domain - The Twilio domain
     */
    constructor(domain: PreviewBase);
    protected _assistants?: AssistantListInstance;
    get assistants(): AssistantListInstance;
}
