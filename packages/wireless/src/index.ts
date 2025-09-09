/**
 * @twilio/wireless - Twilio Wireless API
 * 
 * Twilio Wireless - IoT device connectivity
 * 
 * Usage:
 * ```javascript
 * import { WirelessClient } from '@twilio/wireless';
 * 
 * const client = new WirelessClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Wireless from '../../../src/rest/Wireless';

export class WirelessClient extends Client {
  private _wireless?: Wireless;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Wireless API
   */
  get wireless(): Wireless {
    if (!this._wireless) {
      this._wireless = new Wireless(this);
    }
    return this._wireless;
  }
}

// Re-export the Wireless service class for advanced usage
export { default as Wireless } from '../../../src/rest/Wireless';

// Default export
export default WirelessClient;
