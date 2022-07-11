import {AlertListInstance} from "./monitor/v1/alert";
import {EventListInstance} from "./monitor/v1/event";
import MonitorBase from "./MonitorBase";

class Monitor extends MonitorBase {
    /**
     * @deprecated - Use v1.alerts instead
     */
    get alerts(): AlertListInstance {
        console.warn('alerts is deprecated. Use v1.alerts instead.');
        return this.v1.alerts;
    }

    /**
     * @deprecated - Use v1.events instead
     */
    get events(): EventListInstance {
        console.warn('events is deprecated. Use v1.events instead.');
        return this.v1.events;
    }
}

export = Monitor;
