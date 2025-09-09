/**
 * @twilio/preview - Twilio Preview API
 * 
 * Twilio Preview APIs - Beta features
 * 
 * Usage:
 * ```javascript
 * import { PreviewClient } from '@twilio/preview';
 * 
 * const client = new PreviewClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Preview from '../../../src/rest/Preview';

export class PreviewClient extends Client {
  private _preview?: Preview;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Preview API
   */
  get preview(): Preview {
    if (!this._preview) {
      this._preview = new Preview(this);
    }
    return this._preview;
  }
}

// Re-export the Preview service class for advanced usage
export { default as Preview } from '../../../src/rest/Preview';

// Default export
export default PreviewClient;
