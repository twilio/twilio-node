/**
 * @twilio/marketplace - Twilio Marketplace API
 * 
 * Twilio Marketplace - Add-ons and integrations
 * 
 * Usage:
 * ```javascript
 * import { MarketplaceClient } from '@twilio/marketplace';
 * 
 * const client = new MarketplaceClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Marketplace from '../../../src/rest/Marketplace';

export class MarketplaceClient extends Client {
  private _marketplace?: Marketplace;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Marketplace API
   */
  get marketplace(): Marketplace {
    if (!this._marketplace) {
      this._marketplace = new Marketplace(this);
    }
    return this._marketplace;
  }
}

// Re-export the Marketplace service class for advanced usage
export { default as Marketplace } from '../../../src/rest/Marketplace';

// Default export
export default MarketplaceClient;
