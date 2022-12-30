import IpMessagingBase from "../IpMessagingBase";
import Version from "../../base/Version";
import { CredentialListInstance } from "./v1/credential";
import { ServiceListInstance } from "./v1/service";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of IpMessaging
     *
     * @property { Twilio.IpMessaging.V1.CredentialListInstance } credentials - credentials resource
     * @property { Twilio.IpMessaging.V1.ServiceListInstance } services - services resource
     *
     * @param { Twilio.IpMessaging } domain - The Twilio domain
     */
    constructor(domain: IpMessagingBase);
    protected _credentials?: CredentialListInstance;
    protected _services?: ServiceListInstance;
    get credentials(): CredentialListInstance;
    get services(): ServiceListInstance;
}
