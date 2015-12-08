'use strict';

var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var MediaList;
var MediaInstance;
var MediaContext;

/**
 * Initialize the MediaList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The unique sid that identifies this account
 * :param messageSid: A string that uniquely identifies this message
 *
 * @returns MediaList
 */
function MediaList(version, accountSid, messageSid) {
  function MediaListInstance() {
  }

  MediaListInstance._version = version;
  // Path Solution
  MediaListInstance._solution = {
    accountSid: accountSid,
    messageSid: messageSid,
  };
  MediaListInstance._uri = _.template(
    '/Accounts/{account_sid}/Messages/{message_sid}/Media.json',
    MediaListInstance._solution
  );
  /**
   * Streams MediaInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.dateCreatedBefore] - Filter by date created
   * @param string [opts.dateCreated] - Filter by date created
   * @param string [opts.dateCreatedAfter] - Filter by date created
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
  MediaListInstance.stream = function stream(opts) {
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
   * Lists MediaInstance records from the API as a list.
   *
   * @param string [opts.dateCreatedBefore] - Filter by date created
   * @param string [opts.dateCreated] - Filter by date created
   * @param string [opts.dateCreatedAfter] - Filter by date created
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
  MediaListInstance.list = function list(opts) {
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
   * Retrieve a single page of MediaInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.dateCreatedBefore] - Filter by date created
   * @param string [opts.dateCreated] - Filter by date created
   * @param string [opts.dateCreatedAfter] - Filter by date created
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of MediaInstance
   */
  MediaListInstance.page = function page(opts) {
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

    return MediaPage(
      this._version,
      response,
      this._solution.accountSid,
      this._solution.messageSid,
    );
  };

  /**
   * Constructs a MediaContext
   *
   * :param sid - Fetch by unique media Sid
   *
   * @returns MediaContext
   */
  function get(sid) {
    return new MediaContext(
      this._version,
      this._solution.accountSid,
      this._solution.messageSid,
      sid
    );
  }

  return MediaListInstance;
}

module.exports = {
  MediaList: MediaList,
  MediaInstance: MediaInstance,
  MediaContext: MediaContext
};
