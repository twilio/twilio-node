'use strict';

var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var ActivityList;
var ActivityInstance;
var ActivityContext;

/**
 * Initialize the ActivityList
 *
 * :param Version version: Version that contains the resource
 * :param workspaceSid: The workspace_sid
 *
 * @returns ActivityList
 */
function ActivityList(version, workspaceSid) {
  function ActivityListInstance() {
  }

  // Path Solution
  ActivityListInstance._solution = {
    workspaceSid: workspaceSid,
  };
  ActivityListInstance._uri = _.template(
    '/Workspaces/{workspace_sid}/Activities',
    this._solution
  );
  /**
   * Streams ActivityInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.available] - The available
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
  ActivityListInstance.read = function stream(opts) {
    var limits = this._version.readLimits({
      limit: limit,
      pageSize: pageSize
    })

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists ActivityInstance records from the API as a list.
   *
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.available] - The available
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
  ActivityListInstance.read = function list(opts) {
    return this.page();
  };

  /**
   * Retrieve a single page of ActivityInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.available] - The available
   * @param {string} [opts.pageToken]: PageToken provided by the API
   * @param {number} [opts.pageNumber]: Page Number, this value is simply for client state
   * @param {number} [opts.pageSize]: Number of records to return, defaults to 50
   *
   * @returns Page of ActivityInstance
   */
  ActivityListInstance.read = function page(opts, page_token=values.unset,
                                             page_number=values.unset,
                                             page_size=values.unset) {
    var params = values.of({
      'Friendlyname': opts.friendlyName,
      'Available': opts.available,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return ActivityPage(
      this._version,
      response,
      this._solution.workspaceSid,
    );
  };

  /**
   * Create a new ActivityInstance
   *
   * @param string friendlyName - The friendly_name
   * @param string available - The available
   *
   * @returns Newly created ActivityInstance
   */
  ActivityListInstance.create = function create(friendlyName, available) {
    var data = values.of({
      'Friendlyname': friendlyName,
      'Available': available,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new ActivityInstance(
      this._version,
      payload,
      this._solution.workspaceSid
    );
  };

  return ActivityListInstance;
}

module.exports = {
  ActivityList: ActivityList,
  ActivityInstance: ActivityInstance,
  ActivityContext: ActivityContext
};
