/**
 * @twilio/trusthub - Twilio Trusthub API
 * 
 * Twilio TrustHub - Regulatory compliance
 * 
 * Usage:
 * ```javascript
 * import { TrusthubClient } from '@twilio/trusthub';
 * 
 * const client = new TrusthubClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Trusthub from '../../../src/rest/Trusthub';

export class TrusthubClient extends Client {
  private _trusthub?: Trusthub;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Trusthub API
   */
  get trusthub(): Trusthub {
    if (!this._trusthub) {
      this._trusthub = new Trusthub(this);
    }
    return this._trusthub;
  }
}

// Re-export the Trusthub service class for advanced usage
export { default as Trusthub } from '../../../src/rest/Trusthub';

// Default export
export default TrusthubClient;
