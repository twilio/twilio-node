'use strict';

var ListResource = require('../../../base/ListResource');
var values = require('../../../base/values');

var WorkspaceList;
var WorkspaceInstance;
var WorkspaceContext;

/**
 * Initialize the WorkspaceList
 *
 * :param Version version: Version that contains the resource
 *
 * @returns WorkspaceList
 */
function WorkspaceList(version) {
  function WorkspaceListInstance(sid) {
    return this.get(sid);
  }

  WorkspaceListInstance._version = version;
  // Path Solution
  WorkspaceListInstance._solution = {};
  WorkspaceListInstance._uri = _.template(
    '/Workspaces',
    WorkspaceListInstance._solution
  );
  /**
   * Streams WorkspaceInstance records from the API.
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
  WorkspaceListInstance.stream = function stream(opts) {
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
   * Lists WorkspaceInstance records from the API as a list.
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
  WorkspaceListInstance.list = function list(opts) {
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
   * Retrieve a single page of WorkspaceInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.friendlyName] - The friendly_name
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of WorkspaceInstance
   */
  WorkspaceListInstance.page = function page(opts) {
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

    return WorkspacePage(
      this._version,
      response,
    );
  };

  /**
   * Create a new WorkspaceInstance
   *
   * @param string friendlyName - The friendly_name
   * @param string [opts.eventCallbackUrl] - The event_callback_url
   * @param string [opts.template] - The template
   *
   * @returns Newly created WorkspaceInstance
   */
  WorkspaceListInstance.create = function create(friendlyName, opts) {
    var data = values.of({
      'Friendlyname': friendlyName,
      'Eventcallbackurl': opts.eventCallbackUrl,
      'Template': opts.template,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new WorkspaceInstance(
      this._version,
      payload
    );
  };

  /**
   * Constructs a WorkspaceContext
   *
   * :param sid - The sid
   *
   * @returns WorkspaceContext
   */
  function get(sid) {
    return new WorkspaceContext(
      this._version,
      sid
    );
  }

  return WorkspaceListInstance;
}

module.exports = {
  WorkspaceList: WorkspaceList,
  WorkspaceInstance: WorkspaceInstance,
  WorkspaceContext: WorkspaceContext
};
