/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { SerializableClass } from '../../../../../interfaces';

declare function TaskQueueStatisticsList(version: V1, workspaceSid: string, taskQueueSid: string): TaskQueueStatisticsListInstance

interface TaskQueueStatisticsResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The cumulative
   */
  cumulative: string;
  /**
   * The realtime
   */
  realtime: string;
  /**
   * The task_queue_sid
   */
  task_queue_sid: string;
  /**
   * The url
   */
  url: string;
  /**
   * The workspace_sid
   */
  workspace_sid: string;
}

interface TaskQueueStatisticsPayload extends TaskQueueStatisticsResource, Page.TwilioResponsePayload {
}

interface TaskQueueStatisticsSolution {
  taskQueueSid: string;
  workspaceSid: string;
}

interface TaskQueueStatisticsListInstance {
  /**
   * Gets context of a single TaskQueueStatistics resource
   */
  (): TaskQueueStatisticsContext;
  /**
   * Gets context of a single TaskQueueStatistics resource
   */
  get(): TaskQueueStatisticsContext;
}

interface TaskQueueStatisticsListFetchOptions {
  /**
   * Filter cumulative statistics by an end date. This is helpful for defining a range of statistics to capture. Input is a GMT ISO 8601 Timestamp.
   */
  endDate?: Date;
  /**
   * Filter cumulative statistics by up to 'x' minutes in the past. This is helpful for statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends. Defaults to 15 minutes.
   */
  minutes?: number;
  /**
   * A comma separated values for viewing splits of tasks canceled and accepted above the given threshold in seconds. Ex: "5,30" would show splits of tasks that were canceled or accepted before or after 5 seconds and respectively, 30 seconds. This is great for showing short abandoned tasks or tasks that failed to meet your SLA.
   */
  splitByWaitTime?: string;
  /**
   * Filter cumulative statistics by a start date. This is helpful for defining a range of statistics to capture. Input is a GMT ISO 8601 Timestamp.
   */
  startDate?: Date;
  /**
   * Filter real-time and cumulative statistics by TaskChannel. Takes in a Unique Name ("voice", "sms", "default", etc.) or a TaskChannelSid.
   */
  taskChannel?: string;
}

interface TaskQueueStatisticsListFetchOptions {
  /**
   * Filter cumulative statistics by an end date. This is helpful for defining a range of statistics to capture. Input is a GMT ISO 8601 Timestamp.
   */
  endDate?: Date;
  /**
   * Filter cumulative statistics by up to 'x' minutes in the past. This is helpful for statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends. Defaults to 15 minutes.
   */
  minutes?: number;
  /**
   * A comma separated values for viewing splits of tasks canceled and accepted above the given threshold in seconds. Ex: "5,30" would show splits of tasks that were canceled or accepted before or after 5 seconds and respectively, 30 seconds. This is great for showing short abandoned tasks or tasks that failed to meet your SLA.
   */
  splitByWaitTime?: string;
  /**
   * Filter cumulative statistics by a start date. This is helpful for defining a range of statistics to capture. Input is a GMT ISO 8601 Timestamp.
   */
  startDate?: Date;
  /**
   * Filter real-time and cumulative statistics by TaskChannel. Takes in a Unique Name ("voice", "sms", "default", etc.) or a TaskChannelSid.
   */
  taskChannel?: string;
}

declare class TaskQueueStatisticsPage extends Page<V1, TaskQueueStatisticsPayload, TaskQueueStatisticsResource, TaskQueueStatisticsInstance> {
  constructor(version: V1, response: Response<string>, solution: TaskQueueStatisticsSolution);

  /**
   * Build an instance of TaskQueueStatisticsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TaskQueueStatisticsPayload): TaskQueueStatisticsInstance;
}

declare class TaskQueueStatisticsInstance extends SerializableClass {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   * @param taskQueueSid - The task_queue_sid
   */
  constructor(version: V1, payload: TaskQueueStatisticsPayload, workspaceSid: string, taskQueueSid: string);

  private _proxy: TaskQueueStatisticsContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The cumulative
   */
  cumulative: string;
  /**
   * fetch a TaskQueueStatisticsInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed TaskQueueStatisticsInstance
   */
  fetch(opts?: TaskQueueStatisticsListFetchOptions): Promise<TaskQueueStatisticsInstance>;
  /**
   * fetch a TaskQueueStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts: TaskQueueStatisticsListFetchOptions, callback: (error: Error | null, items: TaskQueueStatisticsInstance) => any): void;
  /**
   * fetch a TaskQueueStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: TaskQueueStatisticsInstance) => any): void;
  /**
   * The realtime
   */
  realtime: string;
  /**
   * The task_queue_sid
   */
  taskQueueSid: string;
  /**
   * The url
   */
  url: string;
  /**
   * The workspace_sid
   */
  workspaceSid: string;
}

declare class TaskQueueStatisticsContext {
  constructor(version: V1, workspaceSid: string, taskQueueSid: string);

  /**
   * fetch a TaskQueueStatisticsInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed TaskQueueStatisticsInstance
   */
  fetch(opts?: TaskQueueStatisticsListFetchOptions): Promise<TaskQueueStatisticsInstance>;
  /**
   * fetch a TaskQueueStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts: TaskQueueStatisticsListFetchOptions, callback: (error: Error | null, items: TaskQueueStatisticsInstance) => any): void;
  /**
   * fetch a TaskQueueStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: TaskQueueStatisticsInstance) => any): void;
}

export { TaskQueueStatisticsContext, TaskQueueStatisticsInstance, TaskQueueStatisticsList, TaskQueueStatisticsListFetchOptions, TaskQueueStatisticsListInstance, TaskQueueStatisticsPage, TaskQueueStatisticsPayload, TaskQueueStatisticsResource, TaskQueueStatisticsSolution }
