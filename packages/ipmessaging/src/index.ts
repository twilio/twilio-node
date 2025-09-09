/**
 * @twilio/ipmessaging - Twilio IpMessaging API
 * 
 * Twilio IP Messaging - Programmable chat (deprecated)
 * 
 * Usage:
 * ```javascript
 * import { IpMessagingClient } from '@twilio/ipmessaging';
 * 
 * const client = new IpMessagingClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import IpMessaging from '../../../src/rest/IpMessaging';

export class IpMessagingClient extends Client {
  private _ipmessaging?: IpMessaging;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the IpMessaging API
   */
  get ipmessaging(): IpMessaging {
    if (!this._ipmessaging) {
      this._ipmessaging = new IpMessaging(this);
    }
    return this._ipmessaging;
  }
}

// Re-export the IpMessaging service class for advanced usage
export { default as IpMessaging } from '../../../src/rest/IpMessaging';

// Default export
export default IpMessagingClient;
