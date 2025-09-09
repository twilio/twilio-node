/**
 * @twilio/numbers - Twilio Numbers API
 * 
 * Twilio Numbers - Phone number management
 * 
 * Usage:
 * ```javascript
 * import { NumbersClient } from '@twilio/numbers';
 * 
 * const client = new NumbersClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Numbers from '../../../src/rest/Numbers';

export class NumbersClient extends Client {
  private _numbers?: Numbers;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Numbers API
   */
  get numbers(): Numbers {
    if (!this._numbers) {
      this._numbers = new Numbers(this);
    }
    return this._numbers;
  }
}

// Re-export the Numbers service class for advanced usage
export { default as Numbers } from '../../../src/rest/Numbers';

// Default export
export default NumbersClient;
