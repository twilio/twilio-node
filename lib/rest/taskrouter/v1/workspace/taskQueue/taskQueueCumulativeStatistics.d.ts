/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * Initialize the TaskQueueCumulativeStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The workspace_sid
 * @param taskQueueSid - The task_queue_sid
 */
declare function TaskQueueCumulativeStatisticsList(version: V1, workspaceSid: string, taskQueueSid: string): TaskQueueCumulativeStatisticsListInstance;

/**
 * Options to pass to fetch
 *
 * @property endDate - Filter cumulative statistics by an end date.
 * @property minutes - Filter cumulative statistics by up to 'x' minutes in the past.
 * @property splitByWaitTime - A comma separated values for viewing splits of tasks canceled and accepted above the given threshold in seconds.
 * @property startDate - Filter cumulative statistics by a start date.
 * @property taskChannel - Filter real-time and cumulative statistics by TaskChannel.
 */
interface TaskQueueCumulativeStatisticsInstanceFetchOptions {
  endDate?: Date;
  minutes?: number;
  splitByWaitTime?: string;
  startDate?: Date;
  taskChannel?: string;
}

interface TaskQueueCumulativeStatisticsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): TaskQueueCumulativeStatisticsContext;
  /**
   * Constructs a task_queue_cumulative_statistics
   */
  get(): TaskQueueCumulativeStatisticsContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface TaskQueueCumulativeStatisticsPayload extends TaskQueueCumulativeStatisticsResource, Page.TwilioResponsePayload {
}

interface TaskQueueCumulativeStatisticsResource {
  account_sid: string;
  avg_task_acceptance_time: number;
  end_time: Date;
  reservations_accepted: number;
  reservations_canceled: number;
  reservations_created: number;
  reservations_rejected: number;
  reservations_rescinded: number;
  reservations_timed_out: number;
  split_by_wait_time: object;
  start_time: Date;
  task_queue_sid: string;
  tasks_canceled: number;
  tasks_completed: number;
  tasks_deleted: number;
  tasks_entered: number;
  tasks_moved: number;
  url: string;
  wait_duration_until_accepted: object;
  wait_duration_until_canceled: object;
  workspace_sid: string;
}

interface TaskQueueCumulativeStatisticsSolution {
  taskQueueSid?: string;
  workspaceSid?: string;
}


declare class TaskQueueCumulativeStatisticsContext {
  /**
   * Initialize the TaskQueueCumulativeStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param taskQueueSid - The task_queue_sid
   */
  constructor(version: V1, workspaceSid: string, taskQueueSid: string);

  /**
   * fetch a TaskQueueCumulativeStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: TaskQueueCumulativeStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: TaskQueueCumulativeStatisticsInstance) => any): Promise<TaskQueueCumulativeStatisticsInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class TaskQueueCumulativeStatisticsInstance extends SerializableClass {
  /**
   * Initialize the TaskQueueCumulativeStatisticsContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   * @param taskQueueSid - The task_queue_sid
   */
  constructor(version: V1, payload: TaskQueueCumulativeStatisticsPayload, workspaceSid: string, taskQueueSid: string);

  private _proxy: TaskQueueCumulativeStatisticsContext;
  accountSid: string;
  avgTaskAcceptanceTime: number;
  endTime: Date;
  /**
   * fetch a TaskQueueCumulativeStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: TaskQueueCumulativeStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: TaskQueueCumulativeStatisticsInstance) => any): Promise<TaskQueueCumulativeStatisticsInstance>;
  reservationsAccepted: number;
  reservationsCanceled: number;
  reservationsCreated: number;
  reservationsRejected: number;
  reservationsRescinded: number;
  reservationsTimedOut: number;
  splitByWaitTime: object;
  startTime: Date;
  taskQueueSid: string;
  tasksCanceled: number;
  tasksCompleted: number;
  tasksDeleted: number;
  tasksEntered: number;
  tasksMoved: number;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
  waitDurationUntilAccepted: object;
  waitDurationUntilCanceled: object;
  workspaceSid: string;
}


declare class TaskQueueCumulativeStatisticsPage extends Page<V1, TaskQueueCumulativeStatisticsPayload, TaskQueueCumulativeStatisticsResource, TaskQueueCumulativeStatisticsInstance> {
  /**
   * Initialize the TaskQueueCumulativeStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: TaskQueueCumulativeStatisticsSolution);

  /**
   * Build an instance of TaskQueueCumulativeStatisticsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TaskQueueCumulativeStatisticsPayload): TaskQueueCumulativeStatisticsInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { TaskQueueCumulativeStatisticsContext, TaskQueueCumulativeStatisticsInstance, TaskQueueCumulativeStatisticsInstanceFetchOptions, TaskQueueCumulativeStatisticsList, TaskQueueCumulativeStatisticsListInstance, TaskQueueCumulativeStatisticsPage, TaskQueueCumulativeStatisticsPayload, TaskQueueCumulativeStatisticsResource, TaskQueueCumulativeStatisticsSolution }
