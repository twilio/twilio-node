'use strict';

var ListResource = require('../../../../../../base/ListResource');
var values = require('../../../../../../base/values');

var CredentialListMappingList;
var CredentialListMappingInstance;
var CredentialListMappingContext;

/**
 * Initialize the CredentialListMappingList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The account_sid
 * :param domainSid: A string that uniquely identifies the SIP Domain
 *
 * @returns CredentialListMappingList
 */
function CredentialListMappingList(version, accountSid, domainSid) {
  function CredentialListMappingListInstance() {
  }

  CredentialListMappingListInstance._version = version;
  // Path Solution
  CredentialListMappingListInstance._solution = {
    accountSid: accountSid,
    domainSid: domainSid,
  };
  CredentialListMappingListInstance._uri = _.template(
    '/Accounts/{account_sid}/SIP/Domains/{domain_sid}/CredentialListMappings.json',
    CredentialListMappingListInstance._solution
  );
  /**
   * Create a new CredentialListMappingInstance
   *
   * @param string credentialListSid - The credential_list_sid
   *
   * @returns Newly created CredentialListMappingInstance
   */
  CredentialListMappingListInstance.create = function create(credentialListSid) {
    var data = values.of({
      'Credentiallistsid': credentialListSid,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new CredentialListMappingInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.domainSid
    );
  };

  /**
   * Streams CredentialListMappingInstance records from the API.
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
  CredentialListMappingListInstance.stream = function stream() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists CredentialListMappingInstance records from the API as a list.
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
  CredentialListMappingListInstance.list = function list() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      limits.pageSize
    );
  };

  /**
   * Retrieve a single page of CredentialListMappingInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of CredentialListMappingInstance
   */
  CredentialListMappingListInstance.page = function page() {
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

    return CredentialListMappingPage(
      this._version,
      response,
      this._solution.accountSid,
      this._solution.domainSid,
    );
  };

  /**
   * Constructs a CredentialListMappingContext
   *
   * :param sid - The sid
   *
   * @returns CredentialListMappingContext
   */
  function get(sid) {
    return new CredentialListMappingContext(
      this._version,
      this._solution.accountSid,
      this._solution.domainSid,
      sid
    );
  }

  return CredentialListMappingListInstance;
}

module.exports = {
  CredentialListMappingList: CredentialListMappingList,
  CredentialListMappingInstance: CredentialListMappingInstance,
  CredentialListMappingContext: CredentialListMappingContext
};
