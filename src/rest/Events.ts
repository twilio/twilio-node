import { EventTypeListInstance } from "./events/v1/eventType.js";
import { SchemaListInstance } from "./events/v1/schema.js";
import { SinkListInstance } from "./events/v1/sink.js";
import { SubscriptionListInstance } from "./events/v1/subscription.js";
import { EventsBase } from "./EventsBase.js";

export class Events extends EventsBase {
  /**
   * @deprecated - Use v1.eventTypes instead
   */
  get eventTypes(): EventTypeListInstance {
    console.warn("eventTypes is deprecated. Use v1.eventTypes instead.");
    return this.v1.eventTypes;
  }

  /**
   * @deprecated - Use v1.schemas instead
   */
  get schemas(): SchemaListInstance {
    console.warn("schemas is deprecated. Use v1.schemas instead.");
    return this.v1.schemas;
  }

  /**
   * @deprecated - Use v1.sinks instead
   */
  get sinks(): SinkListInstance {
    console.warn("sinks is deprecated. Use v1.sinks instead.");
    return this.v1.sinks;
  }

  /**
   * @deprecated - Use v1.subscriptions instead
   */
  get subscriptions(): SubscriptionListInstance {
    console.warn("subscriptions is deprecated. Use v1.subscriptions instead.");
    return this.v1.subscriptions;
  }
}
