/**
 * @twilio/oauth - Twilio Oauth API
 * 
 * Twilio OAuth - Authentication and authorization
 * 
 * Usage:
 * ```javascript
 * import { OauthClient } from '@twilio/oauth';
 * 
 * const client = new OauthClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Oauth from '../../../src/rest/Oauth';

export class OauthClient extends Client {
  private _oauth?: Oauth;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Oauth API
   */
  get oauth(): Oauth {
    if (!this._oauth) {
      this._oauth = new Oauth(this);
    }
    return this._oauth;
  }
}

// Re-export the Oauth service class for advanced usage
export { default as Oauth } from '../../../src/rest/Oauth';

// Default export
export default OauthClient;
