/**
 * @twilio/bulkexports - Twilio Bulkexports API
 * 
 * Twilio Bulk Exports - Export large datasets
 * 
 * Usage:
 * ```javascript
 * import { BulkexportsClient } from '@twilio/bulkexports';
 * 
 * const client = new BulkexportsClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Bulkexports from '../../../src/rest/Bulkexports';

export class BulkexportsClient extends Client {
  private _bulkexports?: Bulkexports;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Bulkexports API
   */
  get bulkexports(): Bulkexports {
    if (!this._bulkexports) {
      this._bulkexports = new Bulkexports(this);
    }
    return this._bulkexports;
  }
}

// Re-export the Bulkexports service class for advanced usage
export { default as Bulkexports } from '../../../src/rest/Bulkexports';

// Default export
export default BulkexportsClient;
