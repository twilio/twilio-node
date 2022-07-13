import {ServiceListInstance} from "./sync/v1/service";
import SyncBase from "./SyncBase";

class Sync extends SyncBase {
    /**
     * @deprecated - Use v1.services instead
     */
    get services(): ServiceListInstance {
        console.warn('services is deprecated. Use v1.services instead.');
        return this.v1.services;
    }
}

export = Sync;
