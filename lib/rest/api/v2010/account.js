'use strict';

var ListResource = require('../../../base/ListResource');
var values = require('../../../base/values');

var AccountList;
var AccountInstance;
var AccountContext;

/**
 * Initialize the AccountList
 *
 * :param Version version: Version that contains the resource
 *
 * @returns AccountList
 */
function AccountList(version) {
  function AccountListInstance() {
  }

  // Path Solution
  AccountListInstance._solution = {};
  AccountListInstance._uri = _.template(
    '/Accounts.json',
    this._solution
  );
  /**
   * Create a new AccountInstance
   *
   * @param string [opts.friendlyName] - A human readable description of the account
   *
   * @returns Newly created AccountInstance
   */
  AccountListInstance.create = function create(opts) {
    var data = values.of({
      'Friendlyname': opts.friendlyName,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new AccountInstance(
      this._version,
      payload
    );
  };

  /**
   * Streams AccountInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.friendlyName] - FriendlyName to filter on
   * @param account.status [opts.status] - Status to filter on
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
  AccountListInstance.read = function stream(opts) {
    var limits = this._version.readLimits({
      limit: limit,
      pageSize: pageSize
    })

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists AccountInstance records from the API as a list.
   *
   * @param string [opts.friendlyName] - FriendlyName to filter on
   * @param account.status [opts.status] - Status to filter on
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
  AccountListInstance.read = function list(opts) {
    return this.page();
  };

  /**
   * Retrieve a single page of AccountInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.friendlyName] - FriendlyName to filter on
   * @param account.status [opts.status] - Status to filter on
   * @param {string} [opts.pageToken]: PageToken provided by the API
   * @param {number} [opts.pageNumber]: Page Number, this value is simply for client state
   * @param {number} [opts.pageSize]: Number of records to return, defaults to 50
   *
   * @returns Page of AccountInstance
   */
  AccountListInstance.read = function page(opts, page_token=values.unset,
                                            page_number=values.unset,
                                            page_size=values.unset) {
    var params = values.of({
      'Friendlyname': opts.friendlyName,
      'Status': opts.status,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return AccountPage(
      this._version,
      response,
    );
  };

  return AccountListInstance;
}

module.exports = {
  AccountList: AccountList,
  AccountInstance: AccountInstance,
  AccountContext: AccountContext
};
