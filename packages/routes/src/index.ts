/**
 * @twilio/routes - Twilio Routes API
 * 
 * Twilio Routes - Programmable voice routing
 * 
 * Usage:
 * ```javascript
 * import { RoutesClient } from '@twilio/routes';
 * 
 * const client = new RoutesClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Routes from '../../../src/rest/Routes';

export class RoutesClient extends Client {
  private _routes?: Routes;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Routes API
   */
  get routes(): Routes {
    if (!this._routes) {
      this._routes = new Routes(this);
    }
    return this._routes;
  }
}

// Re-export the Routes service class for advanced usage
export { default as Routes } from '../../../src/rest/Routes';

// Default export
export default RoutesClient;
