'use strict';

var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var NotificationList;
var NotificationInstance;
var NotificationContext;

/**
 * Initialize the NotificationList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The unique sid that identifies this account
 *
 * @returns NotificationList
 */
function NotificationList(version, accountSid) {
  function NotificationListInstance() {
  }

  NotificationListInstance._version = version;
  // Path Solution
  NotificationListInstance._solution = {
    accountSid: accountSid,
  };
  NotificationListInstance._uri = _.template(
    '/Accounts/{account_sid}/Notifications.json',
    NotificationListInstance._solution
  );
  /**
   * Streams NotificationInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.log] - Filter by log level
   * @param string [opts.messageDateBefore] - Filter by date
   * @param string [opts.messageDate] - Filter by date
   * @param string [opts.messageDateAfter] - Filter by date
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
  NotificationListInstance.stream = function stream(opts) {
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
   * Lists NotificationInstance records from the API as a list.
   *
   * @param string [opts.log] - Filter by log level
   * @param string [opts.messageDateBefore] - Filter by date
   * @param string [opts.messageDate] - Filter by date
   * @param string [opts.messageDateAfter] - Filter by date
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
  NotificationListInstance.list = function list(opts) {
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
   * Retrieve a single page of NotificationInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.log] - Filter by log level
   * @param string [opts.messageDateBefore] - Filter by date
   * @param string [opts.messageDate] - Filter by date
   * @param string [opts.messageDateAfter] - Filter by date
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of NotificationInstance
   */
  NotificationListInstance.page = function page(opts) {
    var params = values.of({
      'Log': opts.log,
      'Messagedate<': opts.messagedatebefore,
      'Messagedate': opts.messageDate,
      'Messagedate>': opts.messagedateafter,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return NotificationPage(
      this._version,
      response,
      this._solution.accountSid,
    );
  };

  /**
   * Constructs a NotificationContext
   *
   * :param sid - Fetch by unique notification Sid
   *
   * @returns NotificationContext
   */
  function get(sid) {
    return new NotificationContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  }

  return NotificationListInstance;
}

module.exports = {
  NotificationList: NotificationList,
  NotificationInstance: NotificationInstance,
  NotificationContext: NotificationContext
};
