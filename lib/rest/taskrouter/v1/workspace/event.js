'use strict';

var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var EventList;
var EventInstance;
var EventContext;

/**
 * Initialize the EventList
 *
 * :param Version version: Version that contains the resource
 * :param workspaceSid: The sid
 *
 * @returns EventList
 */
function EventList(version, workspaceSid) {
  function EventListInstance() {
  }

  // Path Solution
  EventListInstance._solution = {
    workspaceSid: workspaceSid,
  };
  EventListInstance._uri = _.template(
    '/Workspaces/{workspace_sid}/Events',
    this._solution
  );
  /**
   * Streams EventInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.endDate] - The end_date
   * @param string [opts.eventType] - The event_type
   * @param string [opts.minutes] - The minutes
   * @param string [opts.reservationSid] - The reservation_sid
   * @param string [opts.startDate] - The start_date
   * @param string [opts.taskQueueSid] - The task_queue_sid
   * @param string [opts.taskSid] - The task_sid
   * @param string [opts.workerSid] - The worker_sid
   * @param string [opts.workflowSid] - The workflow_sid
   * @param {number} [opts.limit] -
   *          Upper limit for the number of records to return.
   *                            list() guarantees never to return more than limit.
   *                            Default is no limit
   * @param {number} [opts.pageSize=50] -
   *          Number of records to fetch per request,
   *                            when not set will use the default value of 50 records.
   *                            If no pageSize is defined but a limit is defined,
   *                            list() will attempt to read the limit with the most efficient
   *                            page size, i.e. min(limit, 1000)
   * @param {Function} opts.callback - A callback function to process records
   */
  EventListInstance.read = function stream(opts) {
    var limits = this._version.readLimits({
      limit: limit,
      pageSize: pageSize
    })

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists EventInstance records from the API as a list.
   *
   * @param string [opts.endDate] - The end_date
   * @param string [opts.eventType] - The event_type
   * @param string [opts.minutes] - The minutes
   * @param string [opts.reservationSid] - The reservation_sid
   * @param string [opts.startDate] - The start_date
   * @param string [opts.taskQueueSid] - The task_queue_sid
   * @param string [opts.taskSid] - The task_sid
   * @param string [opts.workerSid] - The worker_sid
   * @param string [opts.workflowSid] - The workflow_sid
   * @param {number} [opts.limit]: Upper limit for the number of records to return.
   *                    list() guarantees never to return more than limit.
   *                    Default is no limit
   * @param {number} [opts.pageSize]: Number of records to fetch per request,
   *                    when not set will use the default value of 50 records.
   *                    If no page_size is defined but a limit is defined,
   *                    list() will attempt to read the limit with the most
   *                    efficient page size, i.e. min(limit, 1000)
   *
   * @returns {Array} A list of records
   */
  EventListInstance.read = function list(opts) {
    return this.page();
  };

  /**
   * Retrieve a single page of EventInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.endDate] - The end_date
   * @param string [opts.eventType] - The event_type
   * @param string [opts.minutes] - The minutes
   * @param string [opts.reservationSid] - The reservation_sid
   * @param string [opts.startDate] - The start_date
   * @param string [opts.taskQueueSid] - The task_queue_sid
   * @param string [opts.taskSid] - The task_sid
   * @param string [opts.workerSid] - The worker_sid
   * @param string [opts.workflowSid] - The workflow_sid
   * @param {string} [opts.pageToken]: PageToken provided by the API
   * @param {number} [opts.pageNumber]: Page Number, this value is simply for client state
   * @param {number} [opts.pageSize]: Number of records to return, defaults to 50
   *
   * @returns Page of EventInstance
   */
  EventListInstance.read = function page(opts, page_token=values.unset,
                                          page_number=values.unset,
                                          page_size=values.unset) {
    var params = values.of({
      'Enddate': opts.endDate,
      'Eventtype': opts.eventType,
      'Minutes': opts.minutes,
      'Reservationsid': opts.reservationSid,
      'Startdate': opts.startDate,
      'Taskqueuesid': opts.taskQueueSid,
      'Tasksid': opts.taskSid,
      'Workersid': opts.workerSid,
      'Workflowsid': opts.workflowSid,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return EventPage(
      this._version,
      response,
      this._solution.workspaceSid,
    );
  };

  return EventListInstance;
}

module.exports = {
  EventList: EventList,
  EventInstance: EventInstance,
  EventContext: EventContext
};
