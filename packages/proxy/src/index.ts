/**
 * @twilio/proxy - Twilio Proxy API
 * 
 * Twilio Proxy - Anonymous communication
 * 
 * Usage:
 * ```javascript
 * import { ProxyClient } from '@twilio/proxy';
 * 
 * const client = new ProxyClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Proxy from '../../../src/rest/Proxy';

export class ProxyClient extends Client {
  private _proxy?: Proxy;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Proxy API
   */
  get proxy(): Proxy {
    if (!this._proxy) {
      this._proxy = new Proxy(this);
    }
    return this._proxy;
  }
}

// Re-export the Proxy service class for advanced usage
export { default as Proxy } from '../../../src/rest/Proxy';

// Default export
export default ProxyClient;
