/**
 * @twilio/api - Twilio REST API
 * 
 * Core API functionality for accounts, applications, and more.
 * 
 * Usage:
 * ```javascript
 * import { ApiClient } from '@twilio/api';
 * 
 * const client = new ApiClient(accountSid, authToken);
 * 
 * // Manage accounts
 * const account = await client.accounts.get();
 * 
 * // Manage applications
 * const applications = await client.applications.list();
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Api from '../../../src/rest/Api';

export class ApiClient extends Client {
  private _api?: Api;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the core REST API
   */
  get api(): Api {
    if (!this._api) {
      this._api = new Api(this);
    }
    return this._api;
  }

  /**
   * Shorthand access to api.accounts for convenience
   */
  get accounts() {
    return this.api.v2010.accounts;
  }

  /**
   * Shorthand access to api.applications for convenience
   */
  get applications() {
    return this.api.v2010.accounts.get().applications;
  }

  /**
   * Shorthand access to api.keys for convenience
   */
  get keys() {
    return this.api.v2010.accounts.get().keys;
  }
}

// Re-export the Api service class for advanced usage
export { default as Api } from '../../../src/rest/Api';

// Default export
export default ApiClient;