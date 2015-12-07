'use strict';

var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var TaskQueuesStatisticsList;
var TaskQueuesStatisticsInstance;
var TaskQueuesStatisticsContext;

/**
 * Initialize the TaskQueuesStatisticsList
 *
 * :param Version version: Version that contains the resource
 * :param workspaceSid: The workspace_sid
 *
 * @returns TaskQueuesStatisticsList
 */
function TaskQueuesStatisticsList(version, workspaceSid) {
  function TaskQueuesStatisticsListInstance() {
  }

  // Path Solution
  TaskQueuesStatisticsListInstance._solution = {
    workspaceSid: workspaceSid,
  };
  TaskQueuesStatisticsListInstance._uri = _.template(
    '/Workspaces/{workspace_sid}/TaskQueues/Statistics',
    this._solution
  );
  /**
   * Streams TaskQueuesStatisticsInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.endDate] - The end_date
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.minutes] - The minutes
   * @param string [opts.startDate] - The start_date
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
  TaskQueuesStatisticsListInstance.read = function stream(opts) {
    var limits = this._version.readLimits({
      limit: limit,
      pageSize: pageSize
    })

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists TaskQueuesStatisticsInstance records from the API as a list.
   *
   * @param string [opts.endDate] - The end_date
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.minutes] - The minutes
   * @param string [opts.startDate] - The start_date
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
  TaskQueuesStatisticsListInstance.read = function list(opts) {
    return this.page();
  };

  /**
   * Retrieve a single page of TaskQueuesStatisticsInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.endDate] - The end_date
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.minutes] - The minutes
   * @param string [opts.startDate] - The start_date
   * @param {string} [opts.pageToken]: PageToken provided by the API
   * @param {number} [opts.pageNumber]: Page Number, this value is simply for client state
   * @param {number} [opts.pageSize]: Number of records to return, defaults to 50
   *
   * @returns Page of TaskQueuesStatisticsInstance
   */
  TaskQueuesStatisticsListInstance.read = function page(opts,
                                                         page_token=values.unset,
                                                         page_number=values.unset,
                                                         page_size=values.unset) {
    var params = values.of({
      'Enddate': opts.endDate,
      'Friendlyname': opts.friendlyName,
      'Minutes': opts.minutes,
      'Startdate': opts.startDate,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return TaskQueuesStatisticsPage(
      this._version,
      response,
      this._solution.workspaceSid,
    );
  };

  return TaskQueuesStatisticsListInstance;
}

module.exports = {
  TaskQueuesStatisticsList: TaskQueuesStatisticsList,
  TaskQueuesStatisticsInstance: TaskQueuesStatisticsInstance,
  TaskQueuesStatisticsContext: TaskQueuesStatisticsContext
};
