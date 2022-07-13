import {CredentialListInstance} from "./notify/v1/credential";
import {ServiceListInstance} from "./notify/v1/service";
import NotifyBase from "./NotifyBase";

class Notify extends NotifyBase {
    /**
     * @deprecated - Use v1.credentials instead
     */
    get credentials(): CredentialListInstance {
        console.warn('credentials is deprecated. Use v1.credentials instead.');
        return this.v1.credentials;
    }

    /**
     * @deprecated - Use v1.services instead
     */
    get services(): ServiceListInstance {
        console.warn('services is deprecated. Use v1.services instead.');
        return this.v1.services;
    }
}

export = Notify;
