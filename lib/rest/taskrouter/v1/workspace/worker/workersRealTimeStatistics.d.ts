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

/**
 * @description Initialize the WorkersRealTimeStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The workspace_sid
 */
declare function WorkersRealTimeStatisticsList(version: V1, workspaceSid: string): WorkersRealTimeStatisticsListInstance;

interface WorkersRealTimeStatisticsResource {
  account_sid: string;
  activity_statistics: string;
  total_workers: number;
  url: string;
  workspace_sid: string;
}

interface WorkersRealTimeStatisticsPayload extends WorkersRealTimeStatisticsResource, Page.TwilioResponsePayload {
}

interface WorkersRealTimeStatisticsSolution {
  workspaceSid?: string;
}

interface WorkersRealTimeStatisticsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WorkersRealTimeStatisticsContext;
  /**
   * Constructs a workers_real_time_statistics
   */
  get(): WorkersRealTimeStatisticsContext;
}

/**
 * Options to pass to fetch
 *
 * @property taskChannel - Filter cumulative statistics by TaskChannel.
 */
export interface WorkersRealTimeStatisticsInstanceFetchOptions {
  taskChannel?: string;
}

/**
 * Options to pass to fetch
 *
 * @property taskChannel - Filter cumulative statistics by TaskChannel.
 */
export interface WorkersRealTimeStatisticsContextFetchOptions {
  taskChannel?: string;
}


declare class WorkersRealTimeStatisticsPage extends Page {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsPage
   * @augments Page
   * @description Initialize the WorkersRealTimeStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Taskrouter.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of WorkersRealTimeStatisticsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class WorkersRealTimeStatisticsInstance {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsInstance
   * @description Initialize the WorkersRealTimeStatisticsContext
   *
   * @property accountSid - The account_sid
   * @property activityStatistics - The current Worker status count breakdown by Activity
   * @property totalWorkers - The total number of Workers
   * @property workspaceSid - The workspace_sid
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   */
  constructor(version: Twilio.Taskrouter.V1, payload: object, workspaceSid: sid);

  _proxy?: WorkersRealTimeStatisticsContext;
  /**
   * fetch a WorkersRealTimeStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkersRealTimeStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkersRealTimeStatisticsInstance) => any);
  /**
   * Produce a plain JSON object version of the WorkersRealTimeStatisticsInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
}


declare class WorkersRealTimeStatisticsContext {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsContext
   * @description Initialize the WorkersRealTimeStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   */
  constructor(version: Twilio.Taskrouter.V1, workspaceSid: sid);

  /**
   * fetch a WorkersRealTimeStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkersRealTimeStatisticsContextFetchOptions, callback?: (error: Error | null, items: WorkersRealTimeStatisticsContext) => any);
}

export { WorkersRealTimeStatisticsContext, WorkersRealTimeStatisticsInstance, WorkersRealTimeStatisticsList, WorkersRealTimeStatisticsListInstance, WorkersRealTimeStatisticsPage, WorkersRealTimeStatisticsPayload, WorkersRealTimeStatisticsResource, WorkersRealTimeStatisticsSolution }
