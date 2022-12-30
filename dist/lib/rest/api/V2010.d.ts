import ApiBase from "../ApiBase";
import Version from "../../base/Version";
import { AccountListInstance } from "./v2010/account";
import { AccountContext } from "./v2010/account";
export default class V2010 extends Version {
    /**
     * Initialize the V2010 version of Api
     *
     * @property { Twilio.Api.V2010.AccountListInstance } accounts - accounts resource
     * @property { Twilio.Api.V2010.AccountContext } account - account resource
     *
     * @param { Twilio.Api } domain - The Twilio domain
     */
    constructor(domain: ApiBase);
    protected _accounts?: AccountListInstance;
    protected _account?: AccountContext;
    get accounts(): AccountListInstance;
    get account(): AccountContext;
}
