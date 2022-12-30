import ServerlessBase from "../ServerlessBase";
import Version from "../../base/Version";
import { ServiceListInstance } from "./v1/service";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Serverless
     *
     * @property { Twilio.Serverless.V1.ServiceListInstance } services - services resource
     *
     * @param { Twilio.Serverless } domain - The Twilio domain
     */
    constructor(domain: ServerlessBase);
    protected _services?: ServiceListInstance;
    get services(): ServiceListInstance;
}
