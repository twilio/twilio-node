/**
 * @twilio/notify - Twilio Notify API
 * 
 * Twilio Notify - Push notifications and alerts
 * 
 * Usage:
 * ```javascript
 * import { NotifyClient } from '@twilio/notify';
 * 
 * const client = new NotifyClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Notify from '../../../src/rest/Notify';

export class NotifyClient extends Client {
  private _notify?: Notify;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Notify API
   */
  get notify(): Notify {
    if (!this._notify) {
      this._notify = new Notify(this);
    }
    return this._notify;
  }
}

// Re-export the Notify service class for advanced usage
export { default as Notify } from '../../../src/rest/Notify';

// Default export
export default NotifyClient;
