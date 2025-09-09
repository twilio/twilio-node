/**
 * @twilio/trunking - Twilio Trunking API
 * 
 * Twilio Trunking - SIP trunking for voice
 * 
 * Usage:
 * ```javascript
 * import { TrunkingClient } from '@twilio/trunking';
 * 
 * const client = new TrunkingClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Trunking from '../../../src/rest/Trunking';

export class TrunkingClient extends Client {
  private _trunking?: Trunking;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Trunking API
   */
  get trunking(): Trunking {
    if (!this._trunking) {
      this._trunking = new Trunking(this);
    }
    return this._trunking;
  }
}

// Re-export the Trunking service class for advanced usage
export { default as Trunking } from '../../../src/rest/Trunking';

// Default export
export default TrunkingClient;
