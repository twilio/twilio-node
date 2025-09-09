/**
 * @twilio/taskrouter - Twilio Taskrouter API
 * 
 * Twilio TaskRouter - Workflow and task management
 * 
 * Usage:
 * ```javascript
 * import { TaskrouterClient } from '@twilio/taskrouter';
 * 
 * const client = new TaskrouterClient(accountSid, authToken);
 * ```
 */

import { Client, ClientOpts } from '@twilio/core';
import Taskrouter from '../../../src/rest/Taskrouter';

export class TaskrouterClient extends Client {
  private _taskrouter?: Taskrouter;

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);
  }

  /**
   * Access to the Taskrouter API
   */
  get taskrouter(): Taskrouter {
    if (!this._taskrouter) {
      this._taskrouter = new Taskrouter(this);
    }
    return this._taskrouter;
  }
}

// Re-export the Taskrouter service class for advanced usage
export { default as Taskrouter } from '../../../src/rest/Taskrouter';

// Default export
export default TaskrouterClient;
