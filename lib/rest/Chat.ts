import {CredentialListInstance} from './chat/v2/credential';
import {ServiceListInstance} from './chat/v2/service';
import {ChannelListInstance} from './chat/v3/channel';
import ChatBase from "./ChatBase";

export default class Chat extends ChatBase {
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

    /**
     * @deprecated - Use v3.channels instead
     */
    get channels(): ChannelListInstance {
        console.warn('channels is deprecated. Use v3.channels instead.');
        return this.v3.channels;
    }
}
