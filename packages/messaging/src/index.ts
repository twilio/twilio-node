/**
 * @twilio/messaging - Twilio Messaging API
 * 
 * Send and receive SMS, MMS, and WhatsApp messages.
 * 
 * Usage:
 * ```javascript
 * import { MessagingClient } from '@twilio/messaging';
 * 
 * const client = new MessagingClient(accountSid, authToken);
 * 
 * // Send SMS
 * const message = await client.messages.create({
 *   to: '+1234567890',
 *   from: '+0987654321', 
 *   body: 'Hello World!'
 * });
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Messaging from '../../../src/rest/Messaging';

export class MessagingClient extends Client {
  private _messaging?: Messaging;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Messaging API
   */
  get messaging(): Messaging {
    if (!this._messaging) {
      this._messaging = new Messaging(this);
    }
    return this._messaging;
  }

  /**
   * Shorthand access to messaging.messages for convenience
   */
  get messages() {
    return this.messaging.v1.messages;
  }

  /**
   * Shorthand access to messaging.services for convenience  
   */
  get services() {
    return this.messaging.v1.services;
  }
}

// Re-export the Messaging service class for advanced usage
export { default as Messaging } from '../../../src/rest/Messaging';

// Default export
export default MessagingClient;