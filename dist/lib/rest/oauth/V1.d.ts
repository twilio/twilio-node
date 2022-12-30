import OauthBase from "../OauthBase";
import Version from "../../base/Version";
import { DeviceCodeListInstance } from "./v1/deviceCode";
import { OauthListInstance } from "./v1/oauth";
import { OpenidDiscoveryListInstance } from "./v1/openidDiscovery";
import { TokenListInstance } from "./v1/token";
import { UserInfoListInstance } from "./v1/userInfo";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Oauth
     *
     * @property { Twilio.Oauth.V1.DeviceCodeListInstance } deviceCode - deviceCode resource
     * @property { Twilio.Oauth.V1.OauthListInstance } oauth - oauth resource
     * @property { Twilio.Oauth.V1.OpenidDiscoveryListInstance } openidDiscovery - openidDiscovery resource
     * @property { Twilio.Oauth.V1.TokenListInstance } token - token resource
     * @property { Twilio.Oauth.V1.UserInfoListInstance } userInfo - userInfo resource
     *
     * @param { Twilio.Oauth } domain - The Twilio domain
     */
    constructor(domain: OauthBase);
    protected _deviceCode?: DeviceCodeListInstance;
    protected _oauth?: OauthListInstance;
    protected _openidDiscovery?: OpenidDiscoveryListInstance;
    protected _token?: TokenListInstance;
    protected _userInfo?: UserInfoListInstance;
    get deviceCode(): DeviceCodeListInstance;
    get oauth(): OauthListInstance;
    get openidDiscovery(): OpenidDiscoveryListInstance;
    get token(): TokenListInstance;
    get userInfo(): UserInfoListInstance;
}
