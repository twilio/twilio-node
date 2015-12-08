'use strict';

var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var RecordingList;
var RecordingInstance;
var RecordingContext;

/**
 * Initialize the RecordingList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The account_sid
 * :param callSid: The call_sid
 *
 * @returns RecordingList
 */
function RecordingList(version, accountSid, callSid) {
  function RecordingListInstance() {
  }

  RecordingListInstance._version = version;
  // Path Solution
  RecordingListInstance._solution = {
    accountSid: accountSid,
    callSid: callSid,
  };
  RecordingListInstance._uri = _.template(
    '/Accounts/{account_sid}/Calls/{call_sid}/Recordings.json',
    RecordingListInstance._solution
  );
  /**
   * Streams RecordingInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.dateCreatedBefore] - The date_created
   * @param string [opts.dateCreated] - The date_created
   * @param string [opts.dateCreatedAfter] - The date_created
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
  RecordingListInstance.stream = function stream(opts) {
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
   * Lists RecordingInstance records from the API as a list.
   *
   * @param string [opts.dateCreatedBefore] - The date_created
   * @param string [opts.dateCreated] - The date_created
   * @param string [opts.dateCreatedAfter] - The date_created
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
  RecordingListInstance.list = function list(opts) {
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
   * Retrieve a single page of RecordingInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.dateCreatedBefore] - The date_created
   * @param string [opts.dateCreated] - The date_created
   * @param string [opts.dateCreatedAfter] - The date_created
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of RecordingInstance
   */
  RecordingListInstance.page = function page(opts) {
    var params = values.of({
      'Datecreated<': opts.datecreatedbefore,
      'Datecreated': opts.dateCreated,
      'Datecreated>': opts.datecreatedafter,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return RecordingPage(
      this._version,
      response,
      this._solution.accountSid,
      this._solution.callSid,
    );
  };

  /**
   * Constructs a RecordingContext
   *
   * :param sid - The sid
   *
   * @returns RecordingContext
   */
  function get(sid) {
    return new RecordingContext(
      this._version,
      this._solution.accountSid,
      this._solution.callSid,
      sid
    );
  }

  return RecordingListInstance;
}

module.exports = {
  RecordingList: RecordingList,
  RecordingInstance: RecordingInstance,
  RecordingContext: RecordingContext
};
