/**
 * @twilio/monitor - Twilio Monitor API
 * 
 * Twilio Monitor - Debug and monitor API usage
 * 
 * Usage:
 * ```javascript
 * import { MonitorClient } from '@twilio/monitor';
 * 
 * const client = new MonitorClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Monitor from '../../../src/rest/Monitor';

export class MonitorClient extends Client {
  private _monitor?: Monitor;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Monitor API
   */
  get monitor(): Monitor {
    if (!this._monitor) {
      this._monitor = new Monitor(this);
    }
    return this._monitor;
  }
}

// Re-export the Monitor service class for advanced usage
export { default as Monitor } from '../../../src/rest/Monitor';

// Default export
export default MonitorClient;
