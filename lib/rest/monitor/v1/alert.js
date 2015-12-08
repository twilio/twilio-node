'use strict';

var ListResource = require('../../../base/ListResource');
var values = require('../../../base/values');

var AlertList;
var AlertInstance;
var AlertContext;

/**
 * Initialize the AlertList
 *
 * :param Version version: Version that contains the resource
 *
 * @returns AlertList
 */
function AlertList(version) {
  function AlertListInstance(sid) {
    return this.get(sid);
  }

  AlertListInstance._version = version;
  // Path Solution
  AlertListInstance._solution = {};
  AlertListInstance._uri = _.template(
    '/Alerts',
    AlertListInstance._solution
  );
  /**
   * Streams AlertInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.logLevel] - The log_level
   * @param string [opts.startDateBefore] - The start_date
   * @param string [opts.startDate] - The start_date
   * @param string [opts.startDateAfter] - The start_date
   * @param string [opts.endDateBefore] - The end_date
   * @param string [opts.endDate] - The end_date
   * @param string [opts.endDateAfter] - The end_date
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
  AlertListInstance.stream = function stream(opts) {
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
   * Lists AlertInstance records from the API as a list.
   *
   * @param string [opts.logLevel] - The log_level
   * @param string [opts.startDateBefore] - The start_date
   * @param string [opts.startDate] - The start_date
   * @param string [opts.startDateAfter] - The start_date
   * @param string [opts.endDateBefore] - The end_date
   * @param string [opts.endDate] - The end_date
   * @param string [opts.endDateAfter] - The end_date
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
  AlertListInstance.list = function list(opts) {
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
   * Retrieve a single page of AlertInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.logLevel] - The log_level
   * @param string [opts.startDateBefore] - The start_date
   * @param string [opts.startDate] - The start_date
   * @param string [opts.startDateAfter] - The start_date
   * @param string [opts.endDateBefore] - The end_date
   * @param string [opts.endDate] - The end_date
   * @param string [opts.endDateAfter] - The end_date
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of AlertInstance
   */
  AlertListInstance.page = function page(opts) {
    var params = values.of({
      'Loglevel': opts.logLevel,
      'Startdate<': opts.startdatebefore,
      'Startdate': opts.startDate,
      'Startdate>': opts.startdateafter,
      'Enddate<': opts.enddatebefore,
      'Enddate': opts.endDate,
      'Enddate>': opts.enddateafter,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return AlertPage(
      this._version,
      response,
    );
  };

  /**
   * Constructs a AlertContext
   *
   * :param sid - The sid
   *
   * @returns AlertContext
   */
  function get(sid) {
    return new AlertContext(
      this._version,
      sid
    );
  }

  return AlertListInstance;
}

module.exports = {
  AlertList: AlertList,
  AlertInstance: AlertInstance,
  AlertContext: AlertContext
};
