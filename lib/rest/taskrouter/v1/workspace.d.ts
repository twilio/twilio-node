/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { ActivityList } from './workspace/activity';
import { EventList } from './workspace/event';
import { SerializableClass } from '../../../interfaces';
import { TaskChannelList } from './workspace/taskChannel';
import { TaskList } from './workspace/task';
import { TaskQueueList } from './workspace/taskQueue';
import { WorkerList } from './workspace/worker';
import { WorkflowList } from './workspace/workflow';
import { WorkspaceCumulativeStatisticsList } from './workspace/workspaceCumulativeStatistics';
import { WorkspaceRealTimeStatisticsList } from './workspace/workspaceRealTimeStatistics';
import { WorkspaceStatisticsList } from './workspace/workspaceStatistics';

/**
 * @description Initialize the WorkspaceList
 *
 * @param version - Version of the resource
 */
declare function WorkspaceList(version: V1): WorkspaceListInstance;

interface WorkspaceResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  default_activity_name: string;
  default_activity_sid: string;
  event_callback_url: string;
  events_filter: string;
  friendly_name: string;
  links: string;
  multi_task_enabled: boolean;
  prioritize_queue_order: WorkspaceQueueOrder;
  sid: string;
  timeout_activity_name: string;
  timeout_activity_sid: string;
  url: string;
}

interface WorkspacePayload extends WorkspaceResource, Page.TwilioResponsePayload {
}

interface WorkspaceSolution {
}

interface WorkspaceListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WorkspaceContext;
  /**
   * create a WorkspaceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: WorkspaceListInstanceCreateOptions, callback?: function);
  /**
   * Streams WorkspaceInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: WorkspaceListInstanceEachOptions, callback?: (item: WorkspaceInstance, done: (err?: Error) => void) => void);
  /**
   * Constructs a workspace
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of WorkspaceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists WorkspaceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: WorkspaceListInstanceOptions, callback?: function);
  /**
   * Retrieve a single page of WorkspaceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: WorkspaceListInstancePageOptions, callback?: function);
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
export interface WorkspaceInstanceUpdateOptions {
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
export interface WorkspaceContextUpdateOptions {
  defaultActivitySid?: string;
  eventCallbackUrl?: string;
  eventsFilter?: string;
  friendlyName?: string;
  multiTaskEnabled?: boolean;
  prioritizeQueueOrder?: workspace.queue_order;
  timeoutActivitySid?: string;
}

/**
 * Options to pass to each
 *
 * @property friendlyName - Filter by a workspace's friendly name.
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 */
export interface WorkspaceListInstanceEachOptions {
  callback?: (item: WorkspaceInstance, done: (err?: Error) => void) => void;
  done?: Function;
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property friendlyName - Filter by a workspace's friendly name.
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
export interface WorkspaceListInstanceOptions {
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property friendlyName - Filter by a workspace's friendly name.
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
export interface WorkspaceListInstancePageOptions {
  friendlyName?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

/**
 * Options to pass to create
 *
 * @property friendlyName - Human readable description of this workspace
 * @property eventCallbackUrl - If provided, the Workspace will publish events to this URL.
 * @property eventsFilter - Use this parameter to receive webhooks on EventCallbackUrl for specific events on a workspace.
 * @property multiTaskEnabled - Multi tasking allows workers to handle multiple tasks simultaneously.
 * @property template - One of the available template names.
 * @property prioritizeQueueOrder - Use this parameter to configure whether to prioritize LIFO or FIFO when workers are receiving Tasks from combination of LIFO and FIFO TaskQueues.
 */
export interface WorkspaceListInstanceCreateOptions {
  eventCallbackUrl?: string;
  eventsFilter?: string;
  friendlyName: string;
  multiTaskEnabled?: boolean;
  prioritizeQueueOrder?: workspace.queue_order;
  template?: string;
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
  constructor(version: Twilio.Taskrouter.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of WorkspaceInstance
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
   */
  activities();
  /**
   * Access the cumulativeStatistics
   */
  cumulativeStatistics();
  /**
   * Access the events
   */
  events();
  /**
   * fetch a WorkspaceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the realTimeStatistics
   */
  realTimeStatistics();
  /**
   * remove a WorkspaceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the statistics
   */
  statistics();
  /**
   * Access the taskChannels
   */
  taskChannels();
  /**
   * Access the taskQueues
   */
  taskQueues();
  /**
   * Access the tasks
   */
  tasks();
  /**
   * Produce a plain JSON object version of the WorkspaceInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
  /**
   * update a WorkspaceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: WorkspaceInstanceUpdateOptions, callback?: function);
  /**
   * Access the workers
   */
  workers();
  /**
   * Access the workflows
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
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  realTimeStatistics?: Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceRealTimeStatisticsList;
  /**
   * remove a WorkspaceInstance
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
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: WorkspaceContextUpdateOptions, callback?: function);
  workers?: Twilio.Taskrouter.V1.WorkspaceContext.WorkerList;
  workflows?: Twilio.Taskrouter.V1.WorkspaceContext.WorkflowList;
}

export { WorkspaceContext, WorkspaceInstance, WorkspaceList, WorkspaceListInstance, WorkspacePage, WorkspacePayload, WorkspaceResource, WorkspaceSolution }
