'use strict';

var ListResource = require('../../../../../../base/ListResource');
var values = require('../../../../../../base/values');

var IpAccessControlListMappingList;
var IpAccessControlListMappingInstance;
var IpAccessControlListMappingContext;

/**
 * Initialize the IpAccessControlListMappingList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The account_sid
 * :param domainSid: A string that uniquely identifies the SIP Domain
 *
 * @returns IpAccessControlListMappingList
 */
function IpAccessControlListMappingList(version, accountSid, domainSid) {
  function IpAccessControlListMappingListInstance() {
  }

  // Path Solution
  IpAccessControlListMappingListInstance._solution = {
    accountSid: accountSid,
    domainSid: domainSid,
  };
  IpAccessControlListMappingListInstance._uri = _.template(
    '/Accounts/{account_sid}/SIP/Domains/{domain_sid}/IpAccessControlListMappings.json',
    this._solution
  );
  /**
   * Create a new IpAccessControlListMappingInstance
   *
   * @param string ipAccessControlListSid - The ip_access_control_list_sid
   *
   * @returns Newly created IpAccessControlListMappingInstance
   */
  IpAccessControlListMappingListInstance.create = function
      create(ipAccessControlListSid) {
    var data = values.of({
      'Ipaccesscontrollistsid': ipAccessControlListSid,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new IpAccessControlListMappingInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.domainSid
    );
  };

  /**
   * Streams IpAccessControlListMappingInstance records from the API.
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
  IpAccessControlListMappingListInstance.read = function stream() {
    var limits = this._version.readLimits({
      limit: limit,
      pageSize: pageSize
    })

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists IpAccessControlListMappingInstance records from the API as a list.
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
  IpAccessControlListMappingListInstance.read = function list() {
    return this.page();
  };

  /**
   * Retrieve a single page of IpAccessControlListMappingInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken]: PageToken provided by the API
   * @param {number} [opts.pageNumber]: Page Number, this value is simply for client state
   * @param {number} [opts.pageSize]: Number of records to return, defaults to 50
   *
   * @returns Page of IpAccessControlListMappingInstance
   */
  IpAccessControlListMappingListInstance.read = function
                                                               page(page_token=values.unset, page_number=values.unset, page_size=values.unset) {
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

    return IpAccessControlListMappingPage(
      this._version,
      response,
      this._solution.accountSid,
      this._solution.domainSid,
    );
  };

  return IpAccessControlListMappingListInstance;
}

module.exports = {
  IpAccessControlListMappingList: IpAccessControlListMappingList,
  IpAccessControlListMappingInstance: IpAccessControlListMappingInstance,
  IpAccessControlListMappingContext: IpAccessControlListMappingContext
};
