/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V1 = require('../../../V1');
import deserialize = require('../../../../../base/deserialize');
import values = require('../../../../../base/values');

/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsList
 * @description Initialize the TaskQueueRealTimeStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The workspace_sid
 * @param taskQueueSid - The task_queue_sid
 */
declare function TaskQueueRealTimeStatisticsList(version: V1, workspaceSid: string, taskQueueSid: string): TaskQueueRealTimeStatisticsListInstance;

/**
 * Options to pass to fetch
 *
 * @property taskChannel - Filter real-time and cumulative statistics by TaskChannel.
 */
export interface FetchOptions {
  taskChannel?: string;
}

/**
 * Options to pass to fetch
 *
 * @property taskChannel - Filter real-time and cumulative statistics by TaskChannel.
 */
export interface FetchOptions {
  taskChannel?: string;
}


declare class TaskQueueRealTimeStatisticsPage extends Page {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsPage
   * @augments Page
   * @description Initialize the TaskQueueRealTimeStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Taskrouter.V1, response: object, solution: object);

  /**
   * Build an instance of TaskQueueRealTimeStatisticsInstance
   *
   * @function getInstance
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class TaskQueueRealTimeStatisticsInstance {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsInstance
   * @description Initialize the TaskQueueRealTimeStatisticsContext
   *
   * @property accountSid - The account_sid
   * @property activityStatistics - The current Worker status count breakdown by Activity
   * @property longestTaskWaitingAge - The age of the longest waiting Task
   * @property taskQueueSid - The task_queue_sid
   * @property tasksByPriority - The Tasks broken down by priority
   * @property tasksByStatus - The Tasks broken down by status
   * @property totalAvailableWorkers - The total number of Workers available for Tasks in this TaskQueue
   * @property totalEligibleWorkers - The total number of Workers eligible for Tasks in this TaskQueue, irrespective of Activity state.
   * @property totalTasks - The total number of Tasks
   * @property workspaceSid - The workspace_sid
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   * @param taskQueueSid - The task_queue_sid
   */
  constructor(version: Twilio.Taskrouter.V1, payload: object, workspaceSid: sid, taskQueueSid: sid);

  _proxy?: TaskQueueRealTimeStatisticsContext;
  /**
   * fetch a TaskQueueRealTimeStatisticsInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: object, callback?: function);
  /**
   * Produce a plain JSON object version of the TaskQueueRealTimeStatisticsInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsInstance
   * @instance
   */
  toJSON();
}


declare class TaskQueueRealTimeStatisticsContext {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsContext
   * @description Initialize the TaskQueueRealTimeStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param taskQueueSid - The task_queue_sid
   */
  constructor(version: Twilio.Taskrouter.V1, workspaceSid: sid, taskQueueSid: sid);

  /**
   * fetch a TaskQueueRealTimeStatisticsInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: object, callback?: function);
}

export { TaskQueueRealTimeStatisticsContext, TaskQueueRealTimeStatisticsInstance, TaskQueueRealTimeStatisticsList, TaskQueueRealTimeStatisticsPage }
