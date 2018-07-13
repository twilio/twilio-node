/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V1 = require('../../../V1');
import deserialize = require('../../../../../base/deserialize');
import serialize = require('../../../../../base/serialize');
import values = require('../../../../../base/values');

/**
 * @description Initialize the WorkersCumulativeStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The workspace_sid
 */
declare function WorkersCumulativeStatisticsList(version: V1, workspaceSid: string): WorkersCumulativeStatisticsListInstance;

/**
 * Options to pass to fetch
 *
 * @property endDate - Filter cumulative statistics by a end date.
 * @property minutes - Filter cumulative statistics by up to 'x' minutes in the past.
 * @property startDate - Filter cumulative statistics by a start date.
 * @property taskChannel - Filter cumulative statistics by TaskChannel.
 */
export interface FetchOptions {
  endDate?: Date;
  minutes?: number;
  startDate?: Date;
  taskChannel?: string;
}

/**
 * Options to pass to fetch
 *
 * @property endDate - Filter cumulative statistics by a end date.
 * @property minutes - Filter cumulative statistics by up to 'x' minutes in the past.
 * @property startDate - Filter cumulative statistics by a start date.
 * @property taskChannel - Filter cumulative statistics by TaskChannel.
 */
export interface FetchOptions {
  endDate?: Date;
  minutes?: number;
  startDate?: Date;
  taskChannel?: string;
}


declare class WorkersCumulativeStatisticsPage extends Page {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersCumulativeStatisticsPage
   * @augments Page
   * @description Initialize the WorkersCumulativeStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Taskrouter.V1, response: object, solution: object);

  /**
   * Build an instance of WorkersCumulativeStatisticsInstance
   *
   * @function getInstance
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersCumulativeStatisticsPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class WorkersCumulativeStatisticsInstance {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersCumulativeStatisticsInstance
   * @description Initialize the WorkersCumulativeStatisticsContext
   *
   * @property accountSid - The account_sid
   * @property startTime - The start_time
   * @property endTime - The end_time
   * @property activityDurations - The minimum, average, maximum and total time Workers spent in each Activity
   * @property reservationsCreated - The total number of Reservations that were created
   * @property reservationsAccepted - The total number of Reservations that were accepted
   * @property reservationsRejected - The total number of Reservations that were rejected
   * @property reservationsTimedOut - The total number of Reservations that were timed out
   * @property reservationsCanceled - The total number of Reservations that were canceled
   * @property reservationsRescinded - The total number of Reservations that were rescinded
   * @property workspaceSid - The workspace_sid
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   */
  constructor(version: Twilio.Taskrouter.V1, payload: object, workspaceSid: sid);

  _proxy?: WorkersCumulativeStatisticsContext;
  /**
   * fetch a WorkersCumulativeStatisticsInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersCumulativeStatisticsInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: object, callback?: function);
  /**
   * Produce a plain JSON object version of the WorkersCumulativeStatisticsInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersCumulativeStatisticsInstance
   * @instance
   */
  toJSON();
}


declare class WorkersCumulativeStatisticsContext {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersCumulativeStatisticsContext
   * @description Initialize the WorkersCumulativeStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   */
  constructor(version: Twilio.Taskrouter.V1, workspaceSid: sid);

  /**
   * fetch a WorkersCumulativeStatisticsInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersCumulativeStatisticsContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: object, callback?: function);
}

export { WorkersCumulativeStatisticsContext, WorkersCumulativeStatisticsInstance, WorkersCumulativeStatisticsList, WorkersCumulativeStatisticsPage }
