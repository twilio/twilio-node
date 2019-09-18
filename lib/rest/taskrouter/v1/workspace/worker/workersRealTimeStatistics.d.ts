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
 * Initialize the WorkersRealTimeStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The workspace_sid
 */
declare function WorkersRealTimeStatisticsList(version: V1, workspaceSid: string): WorkersRealTimeStatisticsListInstance;

/**
 * Options to pass to fetch
 *
 * @property taskChannel - Filter cumulative statistics by TaskChannel.
 */
interface WorkersRealTimeStatisticsInstanceFetchOptions {
  taskChannel?: string;
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
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface WorkersRealTimeStatisticsPayload extends WorkersRealTimeStatisticsResource, Page.TwilioResponsePayload {
}

interface WorkersRealTimeStatisticsResource {
  account_sid: string;
  activity_statistics: object[];
  total_workers: number;
  url: string;
  workspace_sid: string;
}

interface WorkersRealTimeStatisticsSolution {
  workspaceSid?: string;
}


declare class WorkersRealTimeStatisticsContext {
  /**
   * Initialize the WorkersRealTimeStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   */
  constructor(version: V1, workspaceSid: string);

  /**
   * fetch a WorkersRealTimeStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkersRealTimeStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkersRealTimeStatisticsInstance) => any): Promise<WorkersRealTimeStatisticsInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class WorkersRealTimeStatisticsInstance extends SerializableClass {
  /**
   * Initialize the WorkersRealTimeStatisticsContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   */
  constructor(version: V1, payload: WorkersRealTimeStatisticsPayload, workspaceSid: string);

  private _proxy: WorkersRealTimeStatisticsContext;
  accountSid: string;
  activityStatistics: object[];
  /**
   * fetch a WorkersRealTimeStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkersRealTimeStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkersRealTimeStatisticsInstance) => any): Promise<WorkersRealTimeStatisticsInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  totalWorkers: number;
  url: string;
  workspaceSid: string;
}


declare class WorkersRealTimeStatisticsPage extends Page<V1, WorkersRealTimeStatisticsPayload, WorkersRealTimeStatisticsResource, WorkersRealTimeStatisticsInstance> {
  /**
   * Initialize the WorkersRealTimeStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: WorkersRealTimeStatisticsSolution);

  /**
   * Build an instance of WorkersRealTimeStatisticsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkersRealTimeStatisticsPayload): WorkersRealTimeStatisticsInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { WorkersRealTimeStatisticsContext, WorkersRealTimeStatisticsInstance, WorkersRealTimeStatisticsInstanceFetchOptions, WorkersRealTimeStatisticsList, WorkersRealTimeStatisticsListInstance, WorkersRealTimeStatisticsPage, WorkersRealTimeStatisticsPayload, WorkersRealTimeStatisticsResource, WorkersRealTimeStatisticsSolution }
