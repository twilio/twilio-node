/**
 * @twilio/serverless - Twilio Serverless API
 * 
 * Twilio Serverless - Runtime and functions
 * 
 * Usage:
 * ```javascript
 * import { ServerlessClient } from '@twilio/serverless';
 * 
 * const client = new ServerlessClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Serverless from '../../../src/rest/Serverless';

export class ServerlessClient extends Client {
  private _serverless?: Serverless;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Serverless API
   */
  get serverless(): Serverless {
    if (!this._serverless) {
      this._serverless = new Serverless(this);
    }
    return this._serverless;
  }
}

// Re-export the Serverless service class for advanced usage
export { default as Serverless } from '../../../src/rest/Serverless';

// Default export
export default ServerlessClient;
