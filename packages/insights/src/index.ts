/**
 * @twilio/insights - Twilio Insights API
 * 
 * Twilio Insights - Call and messaging analytics
 * 
 * Usage:
 * ```javascript
 * import { InsightsClient } from '@twilio/insights';
 * 
 * const client = new InsightsClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Insights from '../../../src/rest/Insights';

export class InsightsClient extends Client {
  private _insights?: Insights;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Insights API
   */
  get insights(): Insights {
    if (!this._insights) {
      this._insights = new Insights(this);
    }
    return this._insights;
  }
}

// Re-export the Insights service class for advanced usage
export { default as Insights } from '../../../src/rest/Insights';

// Default export
export default InsightsClient;
