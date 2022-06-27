import {CredentialListInstance} from "./ipMessaging/v2/credential";
import {ServiceListInstance} from "./ipMessaging/v2/service";
import IpMessagingBase from "./IpMessagingBase";

export default class IpMessaging extends IpMessagingBase {
    /**
     * @deprecated - Use v2.credentials instead
     */
    get credentials(): CredentialListInstance {
        console.warn('credentials is deprecated. Use v2.credentials instead.');
        return this.v2.credentials;
    }

    /**
     * @deprecated - Use v2.services instead
     */
    get services(): ServiceListInstance {
        console.warn('services is deprecated. Use v2.services instead.');
        return this.v2.services;
    }
}
