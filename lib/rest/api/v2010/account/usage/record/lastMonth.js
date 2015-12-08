'use strict';

var ListResource = require('../../../../../../base/ListResource');
var values = require('../../../../../../base/values');

var LastMonthList;
var LastMonthInstance;
var LastMonthContext;

/**
 * Initialize the LastMonthList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: A 34 character string that uniquely identifies this resource.
 *
 * @returns LastMonthList
 */
function LastMonthList(version, accountSid) {
  function LastMonthListInstance() {
  }

  LastMonthListInstance._version = version;
  // Path Solution
  LastMonthListInstance._solution = {
    accountSid: accountSid,
  };
  LastMonthListInstance._uri = _.template(
    '/Accounts/{account_sid}/Usage/Records/LastMonth.json',
    LastMonthListInstance._solution
  );
  /**
   * Streams LastMonthInstance records from the API.
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
  LastMonthListInstance.stream = function stream() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists LastMonthInstance records from the API as a list.
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
  LastMonthListInstance.list = function list() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      limits.pageSize
    );
  };

  /**
   * Retrieve a single page of LastMonthInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of LastMonthInstance
   */
  LastMonthListInstance.page = function page() {
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

    return LastMonthPage(
      this._version,
      response,
      this._solution.accountSid,
    );
  };

  return LastMonthListInstance;
}

module.exports = {
  LastMonthList: LastMonthList,
  LastMonthInstance: LastMonthInstance,
  LastMonthContext: LastMonthContext
};
