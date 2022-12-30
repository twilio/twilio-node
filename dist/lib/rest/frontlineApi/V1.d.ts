import FrontlineApiBase from "../FrontlineApiBase";
import Version from "../../base/Version";
import { UserListInstance } from "./v1/user";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of FrontlineApi
     *
     * @property { Twilio.FrontlineApi.V1.UserListInstance } users - users resource
     *
     * @param { Twilio.FrontlineApi } domain - The Twilio domain
     */
    constructor(domain: FrontlineApiBase);
    protected _users?: UserListInstance;
    get users(): UserListInstance;
}
