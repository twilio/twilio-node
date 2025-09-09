/**
 * @twilio/video - Twilio Video API
 * 
 * Video functionality
 * 
 * Usage:
 * ```javascript
 * import { VideoClient } from '@twilio/video';
 * 
 * const client = new VideoClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Video from '../../../src/rest/Video';

export class VideoClient extends Client {
  private _video?: Video;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Video API
   */
  get video(): Video {
    if (!this._video) {
      this._video = new Video(this);
    }
    return this._video;
  }
}

// Re-export the Video service class for advanced usage
export { default as Video } from '../../../src/rest/Video';

// Default export
export default VideoClient;
