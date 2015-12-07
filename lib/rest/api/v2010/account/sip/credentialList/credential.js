'use strict';

var ListResource = require('../../../../../../base/ListResource');
var values = require('../../../../../../base/values');

var CredentialList;
var CredentialInstance;
var CredentialContext;

/**
 * Initialize the CredentialList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The account_sid
 * :param credentialListSid: The credential_list_sid
 *
 * @returns CredentialList
 */
function CredentialList(version, accountSid, credentialListSid) {
  function CredentialListInstance() {
  }

  // Path Solution
  CredentialListInstance._solution = {
    accountSid: accountSid,
    credentialListSid: credentialListSid,
  };
  CredentialListInstance._uri = _.template(
    '/Accounts/{account_sid}/SIP/CredentialLists/{credential_list_sid}/Credentials.json',
    this._solution
  );
  /**
   * Streams CredentialInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
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
  CredentialListInstance.read = function stream() {
    var limits = this._version.readLimits({
      limit: limit,
      pageSize: pageSize
    })

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists CredentialInstance records from the API as a list.
   *
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
  CredentialListInstance.read = function list() {
    return this.page();
  };

  /**
   * Retrieve a single page of CredentialInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken]: PageToken provided by the API
   * @param {number} [opts.pageNumber]: Page Number, this value is simply for client state
   * @param {number} [opts.pageSize]: Number of records to return, defaults to 50
   *
   * @returns Page of CredentialInstance
   */
  CredentialListInstance.read = function page(page_token=values.unset,
                                               page_number=values.unset,
                                               page_size=values.unset) {
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

    return CredentialPage(
      this._version,
      response,
      this._solution.accountSid,
      this._solution.credentialListSid,
    );
  };

  /**
   * Create a new CredentialInstance
   *
   * @param string username - The username
   * @param string password - The password
   *
   * @returns Newly created CredentialInstance
   */
  CredentialListInstance.create = function create(username, password) {
    var data = values.of({
      'Username': username,
      'Password': password,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new CredentialInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.credentialListSid
    );
  };

  return CredentialListInstance;
}

module.exports = {
  CredentialList: CredentialList,
  CredentialInstance: CredentialInstance,
  CredentialContext: CredentialContext
};
