/**
 * @twilio/studio - Twilio Studio API
 * 
 * Twilio Studio - Visual workflow builder
 * 
 * Usage:
 * ```javascript
 * import { StudioClient } from '@twilio/studio';
 * 
 * const client = new StudioClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Studio from '../../../src/rest/Studio';

export class StudioClient extends Client {
  private _studio?: Studio;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Studio API
   */
  get studio(): Studio {
    if (!this._studio) {
      this._studio = new Studio(this);
    }
    return this._studio;
  }
}

// Re-export the Studio service class for advanced usage
export { default as Studio } from '../../../src/rest/Studio';

// Default export
export default StudioClient;
