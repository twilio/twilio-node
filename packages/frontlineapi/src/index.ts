/**
 * @twilio/frontlineapi - Twilio FrontlineApi API
 * 
 * Twilio Frontline - Customer engagement platform
 * 
 * Usage:
 * ```javascript
 * import { FrontlineApiClient } from '@twilio/frontlineapi';
 * 
 * const client = new FrontlineApiClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import FrontlineApi from '../../../src/rest/FrontlineApi';

export class FrontlineApiClient extends Client {
  private _frontlineapi?: FrontlineApi;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the FrontlineApi API
   */
  get frontlineapi(): FrontlineApi {
    if (!this._frontlineapi) {
      this._frontlineapi = new FrontlineApi(this);
    }
    return this._frontlineapi;
  }
}

// Re-export the FrontlineApi service class for advanced usage
export { default as FrontlineApi } from '../../../src/rest/FrontlineApi';

// Default export
export default FrontlineApiClient;
