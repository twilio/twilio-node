import MonitorBase from "../MonitorBase";
import Version from "../../base/Version";
import { AlertListInstance } from "./v1/alert";
import { EventListInstance } from "./v1/event";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Monitor
     *
     * @property { Twilio.Monitor.V1.AlertListInstance } alerts - alerts resource
     * @property { Twilio.Monitor.V1.EventListInstance } events - events resource
     *
     * @param { Twilio.Monitor } domain - The Twilio domain
     */
    constructor(domain: MonitorBase);
    protected _alerts?: AlertListInstance;
    protected _events?: EventListInstance;
    get alerts(): AlertListInstance;
    get events(): EventListInstance;
}
