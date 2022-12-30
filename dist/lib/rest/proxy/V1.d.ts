import ProxyBase from "../ProxyBase";
import Version from "../../base/Version";
import { ServiceListInstance } from "./v1/service";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Proxy
     *
     * @property { Twilio.Proxy.V1.ServiceListInstance } services - services resource
     *
     * @param { Twilio.Proxy } domain - The Twilio domain
     */
    constructor(domain: ProxyBase);
    protected _services?: ServiceListInstance;
    get services(): ServiceListInstance;
}
