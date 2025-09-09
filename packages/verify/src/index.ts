/**
 * @twilio/verify - Twilio Verify API
 * 
 * Phone number and email verification.
 * 
 * Usage:
 * ```javascript
 * import { VerifyClient } from '@twilio/verify';
 * 
 * const client = new VerifyClient(accountSid, authToken);
 * 
 * // Start verification
 * const verification = await client.verifications.create({
 *   to: '+1234567890',
 *   channel: 'sms'
 * });
 * 
 * // Check verification
 * const verificationCheck = await client.verificationChecks.create({
 *   to: '+1234567890',
 *   code: '123456'
 * });
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Verify from '../../../src/rest/Verify';

export class VerifyClient extends Client {
  private _verify?: Verify;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Verify API
   */
  get verify(): Verify {
    if (!this._verify) {
      this._verify = new Verify(this);
    }
    return this._verify;
  }

  /**
   * Shorthand access to verify.services for convenience
   */
  get services() {
    return this.verify.v2.services;
  }

  /**
   * Shorthand access to verify.verifications for convenience
   */
  get verifications() {
    return this.verify.v2.services.get().verifications;
  }

  /**
   * Shorthand access to verify.verificationChecks for convenience
   */
  get verificationChecks() {
    return this.verify.v2.services.get().verificationChecks;
  }
}

// Re-export the Verify service class for advanced usage
export { default as Verify } from '../../../src/rest/Verify';

// Default export
export default VerifyClient;