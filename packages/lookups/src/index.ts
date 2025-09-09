/**
 * @twilio/lookups - Twilio Lookups API
 * 
 * Twilio Lookups - Phone number information lookup
 * 
 * Usage:
 * ```javascript
 * import { LookupsClient } from '@twilio/lookups';
 * 
 * const client = new LookupsClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Lookups from '../../../src/rest/Lookups';

export class LookupsClient extends Client {
  private _lookups?: Lookups;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Lookups API
   */
  get lookups(): Lookups {
    if (!this._lookups) {
      this._lookups = new Lookups(this);
    }
    return this._lookups;
  }
}

// Re-export the Lookups service class for advanced usage
export { default as Lookups } from '../../../src/rest/Lookups';

// Default export
export default LookupsClient;
