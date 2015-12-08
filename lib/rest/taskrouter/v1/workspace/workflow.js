'use strict';

var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var WorkflowList;
var WorkflowInstance;
var WorkflowContext;

/**
 * Initialize the WorkflowList
 *
 * :param Version version: Version that contains the resource
 * :param workspaceSid: The workspace_sid
 *
 * @returns WorkflowList
 */
function WorkflowList(version, workspaceSid) {
  function WorkflowListInstance() {
  }

  WorkflowListInstance._version = version;
  // Path Solution
  WorkflowListInstance._solution = {
    workspaceSid: workspaceSid,
  };
  WorkflowListInstance._uri = _.template(
    '/Workspaces/{workspace_sid}/Workflows',
    WorkflowListInstance._solution
  );
  /**
   * Streams WorkflowInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.friendlyName] - The friendly_name
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize=50] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         list() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} opts.callback - A callback function to process records
   */
  WorkflowListInstance.stream = function stream(opts) {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page(
      opts
    );

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists WorkflowInstance records from the API as a list.
   *
   * @param string [opts.friendlyName] - The friendly_name
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   *
   * @returns {Array} A list of records
   */
  WorkflowListInstance.list = function list(opts) {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      opts,
      limits.pageSize
    );
  };

  /**
   * Retrieve a single page of WorkflowInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.friendlyName] - The friendly_name
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of WorkflowInstance
   */
  WorkflowListInstance.page = function page(opts) {
    var params = values.of({
      'Friendlyname': opts.friendlyName,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return WorkflowPage(
      this._version,
      response,
      this._solution.workspaceSid,
    );
  };

  /**
   * Create a new WorkflowInstance
   *
   * @param string friendlyName - The friendly_name
   * @param string configuration - The configuration
   * @param string assignmentCallbackUrl - The assignment_callback_url
   * @param string [opts.fallbackAssignmentCallbackUrl] -
   *          The fallback_assignment_callback_url
   * @param string [opts.taskReservationTimeout] - The task_reservation_timeout
   *
   * @returns Newly created WorkflowInstance
   */
  WorkflowListInstance.create = function create(friendlyName, configuration,
                                                 assignmentCallbackUrl, opts) {
    var data = values.of({
      'Friendlyname': friendlyName,
      'Configuration': configuration,
      'Assignmentcallbackurl': assignmentCallbackUrl,
      'Fallbackassignmentcallbackurl': opts.fallbackAssignmentCallbackUrl,
      'Taskreservationtimeout': opts.taskReservationTimeout,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new WorkflowInstance(
      this._version,
      payload,
      this._solution.workspaceSid
    );
  };

  /**
   * Constructs a WorkflowContext
   *
   * :param sid - The sid
   *
   * @returns WorkflowContext
   */
  function get(sid) {
    return new WorkflowContext(
      this._version,
      this._solution.workspaceSid,
      sid
    );
  }

  return WorkflowListInstance;
}

module.exports = {
  WorkflowList: WorkflowList,
  WorkflowInstance: WorkflowInstance,
  WorkflowContext: WorkflowContext
};
