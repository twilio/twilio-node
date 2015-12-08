'use strict';

var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var ReservationList;
var ReservationInstance;
var ReservationContext;

/**
 * Initialize the ReservationList
 *
 * :param Version version: Version that contains the resource
 * :param workspaceSid: The workspace_sid
 * :param taskSid: The task_sid
 *
 * @returns ReservationList
 */
function ReservationList(version, workspaceSid, taskSid) {
  function ReservationListInstance(sid) {
    return this.get(sid);
  }

  ReservationListInstance._version = version;
  // Path Solution
  ReservationListInstance._solution = {
    workspaceSid: workspaceSid,
    taskSid: taskSid,
  };
  ReservationListInstance._uri = _.template(
    '/Workspaces/{workspace_sid}/Tasks/{task_sid}/Reservations',
    ReservationListInstance._solution
  );
  /**
   * Streams ReservationInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
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
  ReservationListInstance.stream = function stream() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists ReservationInstance records from the API as a list.
   *
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
  ReservationListInstance.list = function list() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      limits.pageSize
    );
  };

  /**
   * Retrieve a single page of ReservationInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of ReservationInstance
   */
  ReservationListInstance.page = function page() {
    var params = values.of({
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return ReservationPage(
      this._version,
      response,
      this._solution.workspaceSid,
      this._solution.taskSid,
    );
  };

  /**
   * Constructs a ReservationContext
   *
   * :param sid - The sid
   *
   * @returns ReservationContext
   */
  function get(sid) {
    return new ReservationContext(
      this._version,
      this._solution.workspaceSid,
      this._solution.taskSid,
      sid
    );
  }

  return ReservationListInstance;
}

module.exports = {
  ReservationList: ReservationList,
  ReservationInstance: ReservationInstance,
  ReservationContext: ReservationContext
};
