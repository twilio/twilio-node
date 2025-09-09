/**
 * @twilio/content - Twilio Content API
 * 
 * Twilio Content API - Manage messaging content templates
 * 
 * Usage:
 * ```javascript
 * import { ContentClient } from '@twilio/content';
 * 
 * const client = new ContentClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Content from '../../../src/rest/Content';

export class ContentClient extends Client {
  private _content?: Content;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Content API
   */
  get content(): Content {
    if (!this._content) {
      this._content = new Content(this);
    }
    return this._content;
  }
}

// Re-export the Content service class for advanced usage
export { default as Content } from '../../../src/rest/Content';

// Default export
export default ContentClient;
