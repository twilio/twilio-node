'use strict';

var ListResource = require('../../../../base/ListResource');
var WorkersStatisticsList = require('./worker/workersStatistics');
var values = require('../../../../base/values');

var WorkerList;
var WorkerInstance;
var WorkerContext;

/**
 * Initialize the WorkerList
 *
 * :param Version version: Version that contains the resource
 * :param workspaceSid: The workspace_sid
 *
 * @returns WorkerList
 */
function WorkerList(version, workspaceSid) {
  function WorkerListInstance() {
  }

  // Path Solution
  WorkerListInstance._solution = {
    workspaceSid: workspaceSid,
  };
  WorkerListInstance._uri = _.template(
    '/Workspaces/{workspace_sid}/Workers',
    this._solution
  );

  // Components
  WorkerListInstance._statistics = undefined;

  /**
   * Streams WorkerInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.activityName] - The activity_name
   * @param string [opts.activitySid] - The activity_sid
   * @param string [opts.available] - The available
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.targetWorkersExpression] - The target_workers_expression
   * @param string [opts.taskQueueName] - The task_queue_name
   * @param string [opts.taskQueueSid] - The task_queue_sid
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
  WorkerListInstance.read = function stream(opts) {
    var limits = this._version.readLimits({
      limit: limit,
      pageSize: pageSize
    })

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists WorkerInstance records from the API as a list.
   *
   * @param string [opts.activityName] - The activity_name
   * @param string [opts.activitySid] - The activity_sid
   * @param string [opts.available] - The available
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.targetWorkersExpression] - The target_workers_expression
   * @param string [opts.taskQueueName] - The task_queue_name
   * @param string [opts.taskQueueSid] - The task_queue_sid
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
  WorkerListInstance.read = function list(opts) {
    return this.page();
  };

  /**
   * Retrieve a single page of WorkerInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.activityName] - The activity_name
   * @param string [opts.activitySid] - The activity_sid
   * @param string [opts.available] - The available
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.targetWorkersExpression] - The target_workers_expression
   * @param string [opts.taskQueueName] - The task_queue_name
   * @param string [opts.taskQueueSid] - The task_queue_sid
   * @param {string} [opts.pageToken]: PageToken provided by the API
   * @param {number} [opts.pageNumber]: Page Number, this value is simply for client state
   * @param {number} [opts.pageSize]: Number of records to return, defaults to 50
   *
   * @returns Page of WorkerInstance
   */
  WorkerListInstance.read = function page(opts, page_token=values.unset,
                                           page_number=values.unset,
                                           page_size=values.unset) {
    var params = values.of({
      'Activityname': opts.activityName,
      'Activitysid': opts.activitySid,
      'Available': opts.available,
      'Friendlyname': opts.friendlyName,
      'Targetworkersexpression': opts.targetWorkersExpression,
      'Taskqueuename': opts.taskQueueName,
      'Taskqueuesid': opts.taskQueueSid,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return WorkerPage(
      this._version,
      response,
      this._solution.workspaceSid,
    );
  };

  /**
   * Create a new WorkerInstance
   *
   * @param string friendlyName - The friendly_name
   * @param string [opts.activitySid] - The activity_sid
   * @param string [opts.attributes] - The attributes
   *
   * @returns Newly created WorkerInstance
   */
  WorkerListInstance.create = function create(friendlyName, opts) {
    var data = values.of({
      'Friendlyname': friendlyName,
      'Activitysid': opts.activitySid,
      'Attributes': opts.attributes,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new WorkerInstance(
      this._version,
      payload,
      this._solution.workspaceSid
    );
  };

  Object.defineProperty(WorkerListInstance,
    'statistics', {
    get: function statistics() {
      if (!this._statistics) {
        this._statistics = new WorkersStatisticsList(
          this._version,
          this._solution.workspaceSid
        );
      return this._statistics;
    },
  });

  return WorkerListInstance;
}

module.exports = {
  WorkerList: WorkerList,
  WorkerInstance: WorkerInstance,
  WorkerContext: WorkerContext
};
