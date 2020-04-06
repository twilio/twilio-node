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
 * Initialize the WorkflowRealTimeStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The SID of the Workspace that contains the Workflow.
 * @param workflowSid - Returns the list of Tasks that are being controlled by the Workflow with the specified SID value
 */
declare function WorkflowRealTimeStatisticsList(version: V1, workspaceSid: string, workflowSid: string): WorkflowRealTimeStatisticsListInstance;

/**
 * Options to pass to fetch
 *
 * @property taskChannel - Only calculate real-time statistics on this TaskChannel
 */
interface WorkflowRealTimeStatisticsInstanceFetchOptions {
  taskChannel?: string;
}

interface WorkflowRealTimeStatisticsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WorkflowRealTimeStatisticsContext;
  /**
   * Constructs a workflow_real_time_statistics
   */
  get(): WorkflowRealTimeStatisticsContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface WorkflowRealTimeStatisticsPayload extends WorkflowRealTimeStatisticsResource, Page.TwilioResponsePayload {
}

interface WorkflowRealTimeStatisticsResource {
  account_sid: string;
  longest_task_waiting_age: number;
  longest_task_waiting_sid: string;
  tasks_by_priority: object;
  tasks_by_status: object;
  total_tasks: number;
  url: string;
  workflow_sid: string;
  workspace_sid: string;
}

interface WorkflowRealTimeStatisticsSolution {
  workflowSid?: string;
  workspaceSid?: string;
}


declare class WorkflowRealTimeStatisticsContext {
  /**
   * Initialize the WorkflowRealTimeStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The SID of the Workspace with the Workflow to fetch
   * @param workflowSid - Returns the list of Tasks that are being controlled by the Workflow with the specified SID value
   */
  constructor(version: V1, workspaceSid: string, workflowSid: string);

  /**
   * fetch a WorkflowRealTimeStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WorkflowRealTimeStatisticsInstance) => any): Promise<WorkflowRealTimeStatisticsInstance>;
  /**
   * fetch a WorkflowRealTimeStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkflowRealTimeStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkflowRealTimeStatisticsInstance) => any): Promise<WorkflowRealTimeStatisticsInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class WorkflowRealTimeStatisticsInstance extends SerializableClass {
  /**
   * Initialize the WorkflowRealTimeStatisticsContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The SID of the Workspace that contains the Workflow.
   * @param workflowSid - Returns the list of Tasks that are being controlled by the Workflow with the specified SID value
   */
  constructor(version: V1, payload: WorkflowRealTimeStatisticsPayload, workspaceSid: string, workflowSid: string);

  private _proxy: WorkflowRealTimeStatisticsContext;
  accountSid: string;
  /**
   * fetch a WorkflowRealTimeStatisticsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WorkflowRealTimeStatisticsInstance) => any): Promise<WorkflowRealTimeStatisticsInstance>;
  /**
   * fetch a WorkflowRealTimeStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkflowRealTimeStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkflowRealTimeStatisticsInstance) => any): Promise<WorkflowRealTimeStatisticsInstance>;
  longestTaskWaitingAge: number;
  longestTaskWaitingSid: string;
  tasksByPriority: any;
  tasksByStatus: any;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  totalTasks: number;
  url: string;
  workflowSid: string;
  workspaceSid: string;
}


declare class WorkflowRealTimeStatisticsPage extends Page<V1, WorkflowRealTimeStatisticsPayload, WorkflowRealTimeStatisticsResource, WorkflowRealTimeStatisticsInstance> {
  /**
   * Initialize the WorkflowRealTimeStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: WorkflowRealTimeStatisticsSolution);

  /**
   * Build an instance of WorkflowRealTimeStatisticsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkflowRealTimeStatisticsPayload): WorkflowRealTimeStatisticsInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { WorkflowRealTimeStatisticsContext, WorkflowRealTimeStatisticsInstance, WorkflowRealTimeStatisticsInstanceFetchOptions, WorkflowRealTimeStatisticsList, WorkflowRealTimeStatisticsListInstance, WorkflowRealTimeStatisticsPage, WorkflowRealTimeStatisticsPayload, WorkflowRealTimeStatisticsResource, WorkflowRealTimeStatisticsSolution }
