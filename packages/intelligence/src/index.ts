/**
 * @twilio/intelligence - Twilio Intelligence API
 * 
 * Twilio Intelligence - AI-powered insights
 * 
 * Usage:
 * ```javascript
 * import { IntelligenceClient } from '@twilio/intelligence';
 * 
 * const client = new IntelligenceClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Intelligence from '../../../src/rest/Intelligence';

export class IntelligenceClient extends Client {
  private _intelligence?: Intelligence;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Intelligence API
   */
  get intelligence(): Intelligence {
    if (!this._intelligence) {
      this._intelligence = new Intelligence(this);
    }
    return this._intelligence;
  }
}

// Re-export the Intelligence service class for advanced usage
export { default as Intelligence } from '../../../src/rest/Intelligence';

// Default export
export default IntelligenceClient;
