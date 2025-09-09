/**
 * @twilio/pricing - Twilio Pricing API
 * 
 * Twilio Pricing - Get pricing information
 * 
 * Usage:
 * ```javascript
 * import { PricingClient } from '@twilio/pricing';
 * 
 * const client = new PricingClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Pricing from '../../../src/rest/Pricing';

export class PricingClient extends Client {
  private _pricing?: Pricing;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Pricing API
   */
  get pricing(): Pricing {
    if (!this._pricing) {
      this._pricing = new Pricing(this);
    }
    return this._pricing;
  }
}

// Re-export the Pricing service class for advanced usage
export { default as Pricing } from '../../../src/rest/Pricing';

// Default export
export default PricingClient;
