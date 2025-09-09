/**
 * @twilio/flexapi - Twilio FlexApi API
 * 
 * Twilio Flex - Contact center platform APIs
 * 
 * Usage:
 * ```javascript
 * import { FlexApiClient } from '@twilio/flexapi';
 * 
 * const client = new FlexApiClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import FlexApi from '../../../src/rest/FlexApi';

export class FlexApiClient extends Client {
  private _flexapi?: FlexApi;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the FlexApi API
   */
  get flexapi(): FlexApi {
    if (!this._flexapi) {
      this._flexapi = new FlexApi(this);
    }
    return this._flexapi;
  }
}

// Re-export the FlexApi service class for advanced usage
export { default as FlexApi } from '../../../src/rest/FlexApi';

// Default export
export default FlexApiClient;
