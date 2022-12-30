import OauthBase from "./OauthBase";
import { OauthListInstance } from "./oauth/v1/oauth";
import { OpenidDiscoveryListInstance } from "./oauth/v1/openidDiscovery";
import { TokenListInstance } from "./oauth/v1/token";
import { UserInfoListInstance } from "./oauth/v1/userInfo";
declare class Oauth extends OauthBase {
    /**
     * @deprecated - Use v1.oauth instead
     */
    get oauth(): OauthListInstance;
    /**
     * @deprecated - Use v1.openidDiscovery instead
     */
    get openidDiscovery(): OpenidDiscoveryListInstance;
    /**
     * @deprecated - Use v1.token instead
     */
    get token(): TokenListInstance;
    /**
     * @deprecated - Use v1.userInfo instead
     */
    get userInfo(): UserInfoListInstance;
}
export = Oauth;
