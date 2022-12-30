import NotifyBase from "../NotifyBase";
import Version from "../../base/Version";
import { CredentialListInstance } from "./v1/credential";
import { ServiceListInstance } from "./v1/service";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Notify
     *
     * @property { Twilio.Notify.V1.CredentialListInstance } credentials - credentials resource
     * @property { Twilio.Notify.V1.ServiceListInstance } services - services resource
     *
     * @param { Twilio.Notify } domain - The Twilio domain
     */
    constructor(domain: NotifyBase);
    protected _credentials?: CredentialListInstance;
    protected _services?: ServiceListInstance;
    get credentials(): CredentialListInstance;
    get services(): ServiceListInstance;
}
