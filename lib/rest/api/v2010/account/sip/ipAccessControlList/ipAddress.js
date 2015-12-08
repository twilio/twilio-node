'use strict';

var ListResource = require('../../../../../../base/ListResource');
var values = require('../../../../../../base/values');

var IpAddressList;
var IpAddressInstance;
var IpAddressContext;

/**
 * Initialize the IpAddressList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The account_sid
 * :param ipAccessControlListSid: The ip_access_control_list_sid
 *
 * @returns IpAddressList
 */
function IpAddressList(version, accountSid, ipAccessControlListSid) {
  function IpAddressListInstance() {
  }

  IpAddressListInstance._version = version;
  // Path Solution
  IpAddressListInstance._solution = {
    accountSid: accountSid,
    ipAccessControlListSid: ipAccessControlListSid,
  };
  IpAddressListInstance._uri = _.template(
    '/Accounts/{account_sid}/SIP/IpAccessControlLists/{ip_access_control_list_sid}/IpAddresses.json',
    IpAddressListInstance._solution
  );
  /**
   * Streams IpAddressInstance records from the API.
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
  IpAddressListInstance.stream = function stream() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists IpAddressInstance records from the API as a list.
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
  IpAddressListInstance.list = function list() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      limits.pageSize
    );
  };

  /**
   * Retrieve a single page of IpAddressInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of IpAddressInstance
   */
  IpAddressListInstance.page = function page() {
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

    return IpAddressPage(
      this._version,
      response,
      this._solution.accountSid,
      this._solution.ipAccessControlListSid,
    );
  };

  /**
   * Create a new IpAddressInstance
   *
   * @param string friendlyName - The friendly_name
   * @param string ipAddress - The ip_address
   *
   * @returns Newly created IpAddressInstance
   */
  IpAddressListInstance.create = function create(friendlyName, ipAddress) {
    var data = values.of({
      'Friendlyname': friendlyName,
      'Ipaddress': ipAddress,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new IpAddressInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.ipAccessControlListSid
    );
  };

  /**
   * Constructs a IpAddressContext
   *
   * :param sid - The sid
   *
   * @returns IpAddressContext
   */
  function get(sid) {
    return new IpAddressContext(
      this._version,
      this._solution.accountSid,
      this._solution.ipAccessControlListSid,
      sid
    );
  }

  return IpAddressListInstance;
}

module.exports = {
  IpAddressList: IpAddressList,
  IpAddressInstance: IpAddressInstance,
  IpAddressContext: IpAddressContext
};
