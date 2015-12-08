'use strict';

var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var ShortCodeList;
var ShortCodeInstance;
var ShortCodeContext;

/**
 * Initialize the ShortCodeList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: A 34 character string that uniquely identifies this resource.
 *
 * @returns ShortCodeList
 */
function ShortCodeList(version, accountSid) {
  function ShortCodeListInstance() {
  }

  ShortCodeListInstance._version = version;
  // Path Solution
  ShortCodeListInstance._solution = {
    accountSid: accountSid,
  };
  ShortCodeListInstance._uri = _.template(
    '/Accounts/{account_sid}/SMS/ShortCodes.json',
    ShortCodeListInstance._solution
  );
  /**
   * Streams ShortCodeInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.friendlyName] - Filter by friendly name
   * @param string [opts.shortCode] - Filter by ShortCode
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
  ShortCodeListInstance.stream = function stream(opts) {
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
   * Lists ShortCodeInstance records from the API as a list.
   *
   * @param string [opts.friendlyName] - Filter by friendly name
   * @param string [opts.shortCode] - Filter by ShortCode
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
  ShortCodeListInstance.list = function list(opts) {
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
   * Retrieve a single page of ShortCodeInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.friendlyName] - Filter by friendly name
   * @param string [opts.shortCode] - Filter by ShortCode
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of ShortCodeInstance
   */
  ShortCodeListInstance.page = function page(opts) {
    var params = values.of({
      'Friendlyname': opts.friendlyName,
      'Shortcode': opts.shortCode,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return ShortCodePage(
      this._version,
      response,
      this._solution.accountSid,
    );
  };

  /**
   * Constructs a ShortCodeContext
   *
   * :param sid - Fetch by unique short-code Sid
   *
   * @returns ShortCodeContext
   */
  function get(sid) {
    return new ShortCodeContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  }

  return ShortCodeListInstance;
}

module.exports = {
  ShortCodeList: ShortCodeList,
  ShortCodeInstance: ShortCodeInstance,
  ShortCodeContext: ShortCodeContext
};
