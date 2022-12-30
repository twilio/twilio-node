import ChatBase from "../ChatBase";
import Version from "../../base/Version";
import { CredentialListInstance } from "./v1/credential";
import { ServiceListInstance } from "./v1/service";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Chat
     *
     * @property { Twilio.Chat.V1.CredentialListInstance } credentials - credentials resource
     * @property { Twilio.Chat.V1.ServiceListInstance } services - services resource
     *
     * @param { Twilio.Chat } domain - The Twilio domain
     */
    constructor(domain: ChatBase);
    protected _credentials?: CredentialListInstance;
    protected _services?: ServiceListInstance;
    get credentials(): CredentialListInstance;
    get services(): ServiceListInstance;
}
