/**
 * @twilio/voice - Twilio Voice API
 * 
 * Make and manage voice calls and recordings.
 * 
 * Usage:
 * ```javascript
 * import { VoiceClient } from '@twilio/voice';
 * 
 * const client = new VoiceClient(accountSid, authToken);
 * 
 * // Make a voice call
 * const call = await client.calls.create({
 *   to: '+1234567890',
 *   from: '+0987654321',
 *   url: 'http://demo.twilio.com/docs/voice.xml'
 * });
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Voice from '../../../src/rest/Voice';

export class VoiceClient extends Client {
  private _voice?: Voice;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Voice API
   */
  get voice(): Voice {
    if (!this._voice) {
      this._voice = new Voice(this);
    }
    return this._voice;
  }

  /**
   * Shorthand access to voice.calls for convenience
   */
  get calls() {
    return this.voice.v1.calls;
  }

  /**
   * Shorthand access to voice.recordings for convenience
   */
  get recordings() {
    return this.voice.v1.recordings;
  }

  /**
   * Shorthand access to voice.conferencess for convenience
   */
  get conferences() {
    return this.voice.v1.conferences;
  }
}

// Re-export the Voice service class for advanced usage
export { default as Voice } from '../../../src/rest/Voice';

// Default export
export default VoiceClient;