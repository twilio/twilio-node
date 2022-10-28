import {AppListInstance} from './microvisor/v1/app';
import {DeviceListInstance} from './microvisor/v1/device';
import MicrovisorBase from "./MicrovisorBase";

class Microvisor extends MicrovisorBase {
    /**
     * @deprecated - Use v1.apps instead
     */
    get apps(): AppListInstance {
        console.warn('apps is deprecated. Use v1.apps instead.');
        return this.v1.apps;
    }

    /**
     * @deprecated - Use v1.devices instead
     */
    get devices(): DeviceListInstance {
        console.warn('devices is deprecated. Use v1.devices instead.');
        return this.v1.devices;
    }
}

export = Microvisor;
