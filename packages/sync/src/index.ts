/**
 * @twilio/sync - Twilio Sync API
 * 
 * Twilio Sync - Real-time data synchronization
 * 
 * Usage:
 * ```javascript
 * import { SyncClient } from '@twilio/sync';
 * 
 * const client = new SyncClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Sync from '../../../src/rest/Sync';

export class SyncClient extends Client {
  private _sync?: Sync;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Sync API
   */
  get sync(): Sync {
    if (!this._sync) {
      this._sync = new Sync(this);
    }
    return this._sync;
  }
}

// Re-export the Sync service class for advanced usage
export { default as Sync } from '../../../src/rest/Sync';

// Default export
export default SyncClient;
