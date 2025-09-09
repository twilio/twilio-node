/**
 * @twilio/iam - Twilio Iam API
 * 
 * Twilio Identity and Access Management
 * 
 * Usage:
 * ```javascript
 * import { IamClient } from '@twilio/iam';
 * 
 * const client = new IamClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Iam from '../../../src/rest/Iam';

export class IamClient extends Client {
  private _iam?: Iam;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Iam API
   */
  get iam(): Iam {
    if (!this._iam) {
      this._iam = new Iam(this);
    }
    return this._iam;
  }
}

// Re-export the Iam service class for advanced usage
export { default as Iam } from '../../../src/rest/Iam';

// Default export
export default IamClient;
