/**
 * @twilio/chat - Twilio Chat API
 * 
 * Twilio Chat - Real-time messaging and chat
 * 
 * Usage:
 * ```javascript
 * import { ChatClient } from '@twilio/chat';
 * 
 * const client = new ChatClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Chat from '../../../src/rest/Chat';

export class ChatClient extends Client {
  private _chat?: Chat;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Chat API
   */
  get chat(): Chat {
    if (!this._chat) {
      this._chat = new Chat(this);
    }
    return this._chat;
  }
}

// Re-export the Chat service class for advanced usage
export { default as Chat } from '../../../src/rest/Chat';

// Default export
export default ChatClient;
