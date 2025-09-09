/**
 * @twilio/conversations - Twilio Conversations API
 * 
 * Twilio Conversations - Multi-channel messaging
 * 
 * Usage:
 * ```javascript
 * import { ConversationsClient } from '@twilio/conversations';
 * 
 * const client = new ConversationsClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Conversations from '../../../src/rest/Conversations';

export class ConversationsClient extends Client {
  private _conversations?: Conversations;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Conversations API
   */
  get conversations(): Conversations {
    if (!this._conversations) {
      this._conversations = new Conversations(this);
    }
    return this._conversations;
  }
}

// Re-export the Conversations service class for advanced usage
export { default as Conversations } from '../../../src/rest/Conversations';

// Default export
export default ConversationsClient;
