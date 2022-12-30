import ChatBase from "../ChatBase";
import Version from "../../base/Version";
import { CredentialListInstance } from "./v2/credential";
import { ServiceListInstance } from "./v2/service";
export default class V2 extends Version {
    /**
     * Initialize the V2 version of Chat
     *
     * @property { Twilio.Chat.V2.CredentialListInstance } credentials - credentials resource
     * @property { Twilio.Chat.V2.ServiceListInstance } services - services resource
     *
     * @param { Twilio.Chat } domain - The Twilio domain
     */
    constructor(domain: ChatBase);
    protected _credentials?: CredentialListInstance;
    protected _services?: ServiceListInstance;
    get credentials(): CredentialListInstance;
    get services(): ServiceListInstance;
}
