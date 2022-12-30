import EventsBase from "../EventsBase";
import Version from "../../base/Version";
import { EventTypeListInstance } from "./v1/eventType";
import { SchemaListInstance } from "./v1/schema";
import { SinkListInstance } from "./v1/sink";
import { SubscriptionListInstance } from "./v1/subscription";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Events
     *
     * @property { Twilio.Events.V1.EventTypeListInstance } eventTypes - eventTypes resource
     * @property { Twilio.Events.V1.SchemaListInstance } schemas - schemas resource
     * @property { Twilio.Events.V1.SinkListInstance } sinks - sinks resource
     * @property { Twilio.Events.V1.SubscriptionListInstance } subscriptions - subscriptions resource
     *
     * @param { Twilio.Events } domain - The Twilio domain
     */
    constructor(domain: EventsBase);
    protected _eventTypes?: EventTypeListInstance;
    protected _schemas?: SchemaListInstance;
    protected _sinks?: SinkListInstance;
    protected _subscriptions?: SubscriptionListInstance;
    get eventTypes(): EventTypeListInstance;
    get schemas(): SchemaListInstance;
    get sinks(): SinkListInstance;
    get subscriptions(): SubscriptionListInstance;
}
