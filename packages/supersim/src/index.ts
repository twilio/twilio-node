/**
 * @twilio/supersim - Twilio Supersim API
 * 
 * Twilio Super SIM - Global IoT connectivity
 * 
 * Usage:
 * ```javascript
 * import { SupersimClient } from '@twilio/supersim';
 * 
 * const client = new SupersimClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Supersim from '../../../src/rest/Supersim';

export class SupersimClient extends Client {
  private _supersim?: Supersim;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Supersim API
   */
  get supersim(): Supersim {
    if (!this._supersim) {
      this._supersim = new Supersim(this);
    }
    return this._supersim;
  }
}

// Re-export the Supersim service class for advanced usage
export { default as Supersim } from '../../../src/rest/Supersim';

// Default export
export default SupersimClient;
