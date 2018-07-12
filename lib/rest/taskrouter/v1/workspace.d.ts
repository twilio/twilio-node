/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import V1 = require('../V1');
import deserialize = require('../../../base/deserialize');
import serialize = require('../../../base/serialize');
import values = require('../../../base/values');
import { ActivityList } from './workspace/activity';
import { EventList } from './workspace/event';
import { TaskChannelList } from './workspace/taskChannel';
import { TaskList } from './workspace/task';
import { TaskQueueList } from './workspace/taskQueue';
import { WorkerList } from './workspace/worker';
import { WorkflowList } from './workspace/workflow';
import { WorkspaceCumulativeStatisticsList } from './workspace/workspaceCumulativeStatistics';
import { WorkspaceRealTimeStatisticsList } from './workspace/workspaceRealTimeStatistics';
import { WorkspaceStatisticsList } from './workspace/workspaceStatistics';

/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceList
 * @description Initialize the WorkspaceList
 *
 * @param version - Version of the resource
 */
declare function WorkspaceList(version: V1): WorkspaceListInstance;

/**
 * Options to pass to update
 *
 * @property defaultActivitySid - The ID of the Activity that will be used when new Workers are created in this Workspace.
 * @property eventCallbackUrl - The Workspace will publish events to this URL.
 * @property eventsFilter - Use this parameter to receive webhooks on EventCallbackUrl for specific events on a workspace.
 * @property friendlyName - Human readable description of this workspace
 * @property multiTaskEnabled - Enable or Disable Multitasking by passing either true or False with the POST request.
 * @property timeoutActivitySid - The ID of the Activity that will be assigned to a Worker when a Task reservation times out without a response.
 * @property prioritizeQueueOrder - Use this parameter to configure whether to prioritize LIFO or FIFO when workers are receiving Tasks from combination of LIFO and FIFO TaskQueues.
 */
export interface UpdateOptions {
  defaultActivitySid?: string;
  eventCallbackUrl?: string;
  eventsFilter?: string;
  friendlyName?: string;
  multiTaskEnabled?: boolean;
  prioritizeQueueOrder?: workspace.queue_order;
  timeoutActivitySid?: string;
}

/**
 * Options to pass to update
 *
 * @property defaultActivitySid - The ID of the Activity that will be used when new Workers are created in this Workspace.
 * @property eventCallbackUrl - The Workspace will publish events to this URL.
 * @property eventsFilter - Use this parameter to receive webhooks on EventCallbackUrl for specific events on a workspace.
 * @property friendlyName - Human readable description of this workspace
 * @property multiTaskEnabled - Enable or Disable Multitasking by passing either true or False with the POST request.
 * @property timeoutActivitySid - The ID of the Activity that will be assigned to a Worker when a Task reservation times out without a response.
 * @property prioritizeQueueOrder - Use this parameter to configure whether to prioritize LIFO or FIFO when workers are receiving Tasks from combination of LIFO and FIFO TaskQueues.
 */
export interface UpdateOptions {
  defaultActivitySid?: string;
  eventCallbackUrl?: string;
  eventsFilter?: string;
  friendlyName?: string;
  multiTaskEnabled?: boolean;
  prioritizeQueueOrder?: workspace.queue_order;
  timeoutActivitySid?: string;
}


declare class WorkspacePage extends Page {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspacePage
   * @augments Page
   * @description Initialize the WorkspacePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Taskrouter.V1, response: object, solution: object);

  /**
   * Build an instance of WorkspaceInstance
   *
   * @function getInstance
   * @memberof Twilio.Taskrouter.V1.WorkspacePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class WorkspaceInstance {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceInstance
   * @description Initialize the WorkspaceContext
   *
   * @property accountSid - The ID of the account that owns this Workflow
   * @property dateCreated - The time the Workspace was created, given as GMT in ISO 8601 format.
   * @property dateUpdated - The time the Workspace was last updated, given as GMT in ISO 8601 format.
   * @property defaultActivityName - The human readable name of the default activity.
   * @property defaultActivitySid - The ID of the Activity that will be used when new Workers are created in this Workspace.
   * @property eventCallbackUrl - If provided, the Workspace will publish events to this URL.
   * @property eventsFilter - Use this parameter to receive webhooks on EventCallbackUrl for specific events on a workspace.
   * @property friendlyName - Filter by a workspace's friendly name.
   * @property multiTaskEnabled - Multi tasking allows workers to handle multiple tasks simultaneously.
   * @property sid - The unique ID of the Workspace
   * @property timeoutActivityName - The human readable name of the timeout activity.
   * @property timeoutActivitySid - The ID of the Activity that will be assigned to a Worker when a Task reservation times out without a response.
   * @property prioritizeQueueOrder - Use this parameter to configure whether to prioritize LIFO or FIFO when workers are receiving Tasks from combination of LIFO and FIFO TaskQueues.
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Taskrouter.V1, payload: object, sid: sid);

  _proxy?: WorkspaceContext;
  /**
   * Access the activities
   *
   * @function activities
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   */
  activities();
  /**
   * Access the cumulativeStatistics
   *
   * @function cumulativeStatistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   */
  cumulativeStatistics();
  /**
   * Access the events
   *
   * @function events
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   */
  events();
  /**
   * fetch a WorkspaceInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the realTimeStatistics
   *
   * @function realTimeStatistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   */
  realTimeStatistics();
  /**
   * remove a WorkspaceInstance
   *
   * @function remove
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the statistics
   *
   * @function statistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   */
  statistics();
  /**
   * Access the taskChannels
   *
   * @function taskChannels
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   */
  taskChannels();
  /**
   * Access the taskQueues
   *
   * @function taskQueues
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   */
  taskQueues();
  /**
   * Access the tasks
   *
   * @function tasks
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   */
  tasks();
  /**
   * Produce a plain JSON object version of the WorkspaceInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   */
  toJSON();
  /**
   * update a WorkspaceInstance
   *
   * @function update
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  /**
   * Access the workers
   *
   * @function workers
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   */
  workers();
  /**
   * Access the workflows
   *
   * @function workflows
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   */
  workflows();
}


declare class WorkspaceContext {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext
   * @description Initialize the WorkspaceContext
   *
   * @property activities - activities resource
   * @property events - events resource
   * @property tasks - tasks resource
   * @property taskQueues - taskQueues resource
   * @property workers - workers resource
   * @property workflows - workflows resource
   * @property statistics - statistics resource
   * @property realTimeStatistics - realTimeStatistics resource
   * @property cumulativeStatistics - cumulativeStatistics resource
   * @property taskChannels - taskChannels resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Taskrouter.V1, sid: sid);

  activities?: Twilio.Taskrouter.V1.WorkspaceContext.ActivityList;
  cumulativeStatistics?: Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceCumulativeStatisticsList;
  events?: Twilio.Taskrouter.V1.WorkspaceContext.EventList;
  /**
   * fetch a WorkspaceInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  realTimeStatistics?: Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceRealTimeStatisticsList;
  /**
   * remove a WorkspaceInstance
   *
   * @function remove
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  statistics?: Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceStatisticsList;
  taskChannels?: Twilio.Taskrouter.V1.WorkspaceContext.TaskChannelList;
  taskQueues?: Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueList;
  tasks?: Twilio.Taskrouter.V1.WorkspaceContext.TaskList;
  /**
   * update a WorkspaceInstance
   *
   * @function update
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  workers?: Twilio.Taskrouter.V1.WorkspaceContext.WorkerList;
  workflows?: Twilio.Taskrouter.V1.WorkspaceContext.WorkflowList;
}

export { WorkspaceContext, WorkspaceInstance, WorkspaceList, WorkspacePage }
