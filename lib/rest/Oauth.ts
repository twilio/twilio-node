import OauthBase from "./OauthBase";
import { OauthListInstance } from './oauth/v1/oauth';
import { OpenidDiscoveryListInstance } from './oauth/v1/openidDiscovery';
import { TokenListInstance } from './oauth/v1/token';
import { UserInfoListInstance } from './oauth/v1/userInfo';

class Oauth extends OauthBase {
    /**
     * @deprecated - Use v1.oauth instead
     */
    get oauth(): OauthListInstance {
        console.warn('oauth is deprecated. Use v1.oauth instead.');
        return this.v1.oauth;
    }

    /**
     * @deprecated - Use v1.openidDiscovery instead
     */
    get openidDiscovery(): OpenidDiscoveryListInstance {
        console.warn('openidDiscovery is deprecated. Use v1.openidDiscovery instead.');
        return this.v1.openidDiscovery;
    }

    /**
     * @deprecated - Use v1.token instead
     */
    get token(): TokenListInstance {
        console.warn('token is deprecated. Use v1.token instead.');
        return this.v1.token;
    }

    /**
     * @deprecated - Use v1.userInfo instead
     */
    get userInfo(): UserInfoListInstance {
        console.warn('userInfo is deprecated. Use v1.userInfo instead.');
        return this.v1.userInfo;
    }
}

export = Oauth;
