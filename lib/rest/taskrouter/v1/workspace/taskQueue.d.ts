/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V1 = require('../../V1');
import deserialize = require('../../../../base/deserialize');
import values = require('../../../../base/values');
import { TaskQueueCumulativeStatisticsList } from './taskQueue/taskQueueCumulativeStatistics';
import { TaskQueueRealTimeStatisticsList } from './taskQueue/taskQueueRealTimeStatistics';
import { TaskQueueStatisticsList } from './taskQueue/taskQueueStatistics';

/**
 * @description Initialize the TaskQueueList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The ID of the Workspace that owns this TaskQueue
 */
declare function TaskQueueList(version: V1, workspaceSid: string): TaskQueueListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - Human readable description of this TaskQueue
 * @property targetWorkers - A string describing the Worker selection criteria for any Tasks that enter this TaskQueue.
 * @property reservationActivitySid - ActivitySID that will be assigned to Workers when they are reserved for a task from this TaskQueue.
 * @property assignmentActivitySid - ActivitySID that will be assigned to Workers when they are assigned a task from this TaskQueue.
 * @property maxReservedWorkers - The maximum amount of workers to create reservations for the assignment of a task while in this queue.
 * @property taskOrder - TaskOrder will determine which order the Tasks will be assigned to Workers.
 */
export interface UpdateOptions {
  assignmentActivitySid?: string;
  friendlyName?: string;
  maxReservedWorkers?: number;
  reservationActivitySid?: string;
  targetWorkers?: string;
  taskOrder?: task_queue.task_order;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - Human readable description of this TaskQueue
 * @property targetWorkers - A string describing the Worker selection criteria for any Tasks that enter this TaskQueue.
 * @property reservationActivitySid - ActivitySID that will be assigned to Workers when they are reserved for a task from this TaskQueue.
 * @property assignmentActivitySid - ActivitySID that will be assigned to Workers when they are assigned a task from this TaskQueue.
 * @property maxReservedWorkers - The maximum amount of workers to create reservations for the assignment of a task while in this queue.
 * @property taskOrder - TaskOrder will determine which order the Tasks will be assigned to Workers.
 */
export interface UpdateOptions {
  assignmentActivitySid?: string;
  friendlyName?: string;
  maxReservedWorkers?: number;
  reservationActivitySid?: string;
  targetWorkers?: string;
  taskOrder?: task_queue.task_order;
}


declare class TaskQueuePage extends Page {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueuePage
   * @augments Page
   * @description Initialize the TaskQueuePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Taskrouter.V1, response: object, solution: object);

  /**
   * Build an instance of TaskQueueInstance
   *
   * @function getInstance
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueuePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class TaskQueueInstance {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
   * @description Initialize the TaskQueueContext
   *
   * @property accountSid - The ID of the Account that owns this TaskQueue
   * @property assignmentActivitySid - ActivitySID to assign workers once a task is assigned for them
   * @property assignmentActivityName - The assignment_activity_name
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property friendlyName - Filter by a human readable description of a TaskQueue
   * @property maxReservedWorkers - The maximum amount of workers to create reservations for the assignment of a task while in this queue.
   * @property reservationActivitySid - ActivitySID to assign workers once a task is reserved for them
   * @property reservationActivityName - The reservation_activity_name
   * @property sid - The unique ID of the TaskQueue
   * @property targetWorkers - A string describing the Worker selection criteria for any Tasks that enter this TaskQueue.
   * @property taskOrder - TaskOrder will determine which order the Tasks will be assigned to Workers.
   * @property url - The url
   * @property workspaceSid - The ID of the Workspace that owns this TaskQueue
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The ID of the Workspace that owns this TaskQueue
   * @param sid - The sid
   */
  constructor(version: Twilio.Taskrouter.V1, payload: object, workspaceSid: sid, sid: sid);

  _proxy?: TaskQueueContext;
  /**
   * Access the cumulativeStatistics
   *
   * @function cumulativeStatistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
   * @instance
   */
  cumulativeStatistics();
  /**
   * fetch a TaskQueueInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the realTimeStatistics
   *
   * @function realTimeStatistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
   * @instance
   */
  realTimeStatistics();
  /**
   * remove a TaskQueueInstance
   *
   * @function remove
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the statistics
   *
   * @function statistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
   * @instance
   */
  statistics();
  /**
   * Produce a plain JSON object version of the TaskQueueInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
   * @instance
   */
  toJSON();
  /**
   * update a TaskQueueInstance
   *
   * @function update
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class TaskQueueContext {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext
   * @description Initialize the TaskQueueContext
   *
   * @property statistics - statistics resource
   * @property realTimeStatistics - realTimeStatistics resource
   * @property cumulativeStatistics - cumulativeStatistics resource
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Taskrouter.V1, workspaceSid: sid, sid: sid);

  cumulativeStatistics?: Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueCumulativeStatisticsList;
  /**
   * fetch a TaskQueueInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  realTimeStatistics?: Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsList;
  /**
   * remove a TaskQueueInstance
   *
   * @function remove
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  statistics?: Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsList;
  /**
   * update a TaskQueueInstance
   *
   * @function update
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { TaskQueueContext, TaskQueueInstance, TaskQueueList, TaskQueuePage }
