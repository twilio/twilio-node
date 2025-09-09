/**
 * @twilio/previewiam - Twilio PreviewIam API
 * 
 * Twilio Preview IAM - Beta identity management
 * 
 * Usage:
 * ```javascript
 * import { PreviewIamClient } from '@twilio/previewiam';
 * 
 * const client = new PreviewIamClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import PreviewIam from '../../../src/rest/PreviewIam';

export class PreviewIamClient extends Client {
  private _previewiam?: PreviewIam;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the PreviewIam API
   */
  get previewiam(): PreviewIam {
    if (!this._previewiam) {
      this._previewiam = new PreviewIam(this);
    }
    return this._previewiam;
  }
}

// Re-export the PreviewIam service class for advanced usage
export { default as PreviewIam } from '../../../src/rest/PreviewIam';

// Default export
export default PreviewIamClient;
