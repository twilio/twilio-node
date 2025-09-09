/**
 * @twilio/accounts - Twilio Accounts API
 * 
 * Twilio Accounts API - Manage accounts and subaccounts
 * 
 * Usage:
 * ```javascript
 * import { AccountsClient } from '@twilio/accounts';
 * 
 * const client = new AccountsClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Accounts from '../../../src/rest/Accounts';

export class AccountsClient extends Client {
  private _accounts?: Accounts;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Accounts API
   */
  get accounts(): Accounts {
    if (!this._accounts) {
      this._accounts = new Accounts(this);
    }
    return this._accounts;
  }
}

// Re-export the Accounts service class for advanced usage
export { default as Accounts } from '../../../src/rest/Accounts';

// Default export
export default AccountsClient;
