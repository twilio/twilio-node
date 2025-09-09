/**
 * @twilio/assistants - Twilio Assistants API
 * 
 * Twilio Autopilot - Build conversational AI assistants
 * 
 * Usage:
 * ```javascript
 * import { AssistantsClient } from '@twilio/assistants';
 * 
 * const client = new AssistantsClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Assistants from '../../../src/rest/Assistants';

export class AssistantsClient extends Client {
  private _assistants?: Assistants;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Assistants API
   */
  get assistants(): Assistants {
    if (!this._assistants) {
      this._assistants = new Assistants(this);
    }
    return this._assistants;
  }
}

// Re-export the Assistants service class for advanced usage
export { default as Assistants } from '../../../src/rest/Assistants';

// Default export
export default AssistantsClient;
