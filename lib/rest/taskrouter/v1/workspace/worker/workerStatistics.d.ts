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
 * @description Initialize the WorkerStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The workspace_sid
 * @param workerSid - The worker_sid
 */
declare function WorkerStatisticsList(version: V1, workspaceSid: string, workerSid: string): WorkerStatisticsListInstance;

interface WorkerStatisticsResource {
  account_sid: string;
  cumulative: string;
  url: string;
  worker_sid: string;
  workspace_sid: string;
}

interface WorkerStatisticsPayload extends WorkerStatisticsResource, Page.TwilioResponsePayload {
}

interface WorkerStatisticsSolution {
  workerSid?: string;
  workspaceSid?: string;
}

interface WorkerStatisticsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WorkerStatisticsContext;
  /**
   * Constructs a worker_statistics
   */
  get(): WorkerStatisticsContext;
}

/**
 * Options to pass to fetch
 *
 * @property minutes - Filter cumulative statistics by up to 'x' minutes in the past.
 * @property startDate - Filter cumulative statistics by a start date.
 * @property endDate - Filter cumulative statistics by a end date.
 * @property taskChannel - Filter cumulative statistics by TaskChannel.
 */
export interface WorkerStatisticsInstanceFetchOptions {
  endDate?: Date;
  minutes?: number;
  startDate?: Date;
  taskChannel?: string;
}

/**
 * Options to pass to fetch
 *
 * @property minutes - Filter cumulative statistics by up to 'x' minutes in the past.
 * @property startDate - Filter cumulative statistics by a start date.
 * @property endDate - Filter cumulative statistics by a end date.
 * @property taskChannel - Filter cumulative statistics by TaskChannel.
 */
export interface WorkerStatisticsContextFetchOptions {
  endDate?: Date;
  minutes?: number;
  startDate?: Date;
  taskChannel?: string;
}


declare class WorkerStatisticsPage extends Page {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerStatisticsPage
   * @augments Page
   * @description Initialize the WorkerStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Taskrouter.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of WorkerStatisticsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class WorkerStatisticsInstance {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerStatisticsInstance
   * @description Initialize the WorkerStatisticsContext
   *
   * @property accountSid - The account_sid
   * @property cumulative - The cumulative
   * @property workerSid - The worker_sid
   * @property workspaceSid - The workspace_sid
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   * @param workerSid - The worker_sid
   */
  constructor(version: Twilio.Taskrouter.V1, payload: object, workspaceSid: sid, workerSid: sid);

  _proxy?: WorkerStatisticsContext;
  /**
   * fetch a WorkerStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkerStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkerStatisticsInstance) => any);
  /**
   * Produce a plain JSON object version of the WorkerStatisticsInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
}


declare class WorkerStatisticsContext {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerStatisticsContext
   * @description Initialize the WorkerStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param workerSid - The worker_sid
   */
  constructor(version: Twilio.Taskrouter.V1, workspaceSid: sid, workerSid: sid);

  /**
   * fetch a WorkerStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkerStatisticsContextFetchOptions, callback?: (error: Error | null, items: WorkerStatisticsContext) => any);
}

export { WorkerStatisticsContext, WorkerStatisticsInstance, WorkerStatisticsList, WorkerStatisticsListInstance, WorkerStatisticsPage, WorkerStatisticsPayload, WorkerStatisticsResource, WorkerStatisticsSolution }
