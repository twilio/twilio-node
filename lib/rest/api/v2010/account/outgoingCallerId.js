'use strict';

var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var OutgoingCallerIdList;
var OutgoingCallerIdInstance;
var OutgoingCallerIdContext;

/**
 * Initialize the OutgoingCallerIdList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The unique sid that identifies this account
 *
 * @returns OutgoingCallerIdList
 */
function OutgoingCallerIdList(version, accountSid) {
  function OutgoingCallerIdListInstance(sid) {
    return this.get(sid);
  }

  OutgoingCallerIdListInstance._version = version;
  // Path Solution
  OutgoingCallerIdListInstance._solution = {
    accountSid: accountSid,
  };
  OutgoingCallerIdListInstance._uri = _.template(
    '/Accounts/{account_sid}/OutgoingCallerIds.json',
    OutgoingCallerIdListInstance._solution
  );
  /**
   * Streams OutgoingCallerIdInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.phoneNumber] - Filter by phone number
   * @param string [opts.friendlyName] - Filter by friendly name
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
  OutgoingCallerIdListInstance.stream = function stream(opts) {
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
   * Lists OutgoingCallerIdInstance records from the API as a list.
   *
   * @param string [opts.phoneNumber] - Filter by phone number
   * @param string [opts.friendlyName] - Filter by friendly name
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
  OutgoingCallerIdListInstance.list = function list(opts) {
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
   * Retrieve a single page of OutgoingCallerIdInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.phoneNumber] - Filter by phone number
   * @param string [opts.friendlyName] - Filter by friendly name
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of OutgoingCallerIdInstance
   */
  OutgoingCallerIdListInstance.page = function page(opts) {
    var params = values.of({
      'Phonenumber': opts.phoneNumber,
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

    return OutgoingCallerIdPage(
      this._version,
      response,
      this._solution.accountSid,
    );
  };

  /**
   * Constructs a OutgoingCallerIdContext
   *
   * :param sid - Fetch by unique outgoing-caller-id Sid
   *
   * @returns OutgoingCallerIdContext
   */
  function get(sid) {
    return new OutgoingCallerIdContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  }

  return OutgoingCallerIdListInstance;
}

module.exports = {
  OutgoingCallerIdList: OutgoingCallerIdList,
  OutgoingCallerIdInstance: OutgoingCallerIdInstance,
  OutgoingCallerIdContext: OutgoingCallerIdContext
};
