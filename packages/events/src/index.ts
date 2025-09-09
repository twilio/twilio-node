/**
 * @twilio/events - Twilio Events API
 * 
 * Twilio Events - Event-driven webhooks and streams
 * 
 * Usage:
 * ```javascript
 * import { EventsClient } from '@twilio/events';
 * 
 * const client = new EventsClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Events from '../../../src/rest/Events';

export class EventsClient extends Client {
  private _events?: Events;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Events API
   */
  get events(): Events {
    if (!this._events) {
      this._events = new Events(this);
    }
    return this._events;
  }
}

// Re-export the Events service class for advanced usage
export { default as Events } from '../../../src/rest/Events';

// Default export
export default EventsClient;
