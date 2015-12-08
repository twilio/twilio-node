'use strict';

var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var AddressList;
var AddressInstance;
var AddressContext;

/**
 * Initialize the AddressList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The account_sid
 *
 * @returns AddressList
 */
function AddressList(version, accountSid) {
  function AddressListInstance() {
  }

  AddressListInstance._version = version;
  // Path Solution
  AddressListInstance._solution = {
    accountSid: accountSid,
  };
  AddressListInstance._uri = _.template(
    '/Accounts/{account_sid}/Addresses.json',
    AddressListInstance._solution
  );
  /**
   * Create a new AddressInstance
   *
   * @param string customerName - The customer_name
   * @param string street - The street
   * @param string city - The city
   * @param string region - The region
   * @param string postalCode - The postal_code
   * @param string isoCountry - The iso_country
   * @param string [opts.friendlyName] - The friendly_name
   *
   * @returns Newly created AddressInstance
   */
  AddressListInstance.create = function create(customerName, street, city, region,
                                                postalCode, isoCountry, opts) {
    var data = values.of({
      'Customername': customerName,
      'Street': street,
      'City': city,
      'Region': region,
      'Postalcode': postalCode,
      'Isocountry': isoCountry,
      'Friendlyname': opts.friendlyName,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new AddressInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  };

  /**
   * Streams AddressInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.customerName] - The customer_name
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.isoCountry] - The iso_country
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
  AddressListInstance.stream = function stream(opts) {
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
   * Lists AddressInstance records from the API as a list.
   *
   * @param string [opts.customerName] - The customer_name
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.isoCountry] - The iso_country
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
  AddressListInstance.list = function list(opts) {
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
   * Retrieve a single page of AddressInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.customerName] - The customer_name
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.isoCountry] - The iso_country
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of AddressInstance
   */
  AddressListInstance.page = function page(opts) {
    var params = values.of({
      'Customername': opts.customerName,
      'Friendlyname': opts.friendlyName,
      'Isocountry': opts.isoCountry,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return AddressPage(
      this._version,
      response,
      this._solution.accountSid,
    );
  };

  /**
   * Constructs a AddressContext
   *
   * :param sid - The sid
   *
   * @returns AddressContext
   */
  function get(sid) {
    return new AddressContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  }

  return AddressListInstance;
}

module.exports = {
  AddressList: AddressList,
  AddressInstance: AddressInstance,
  AddressContext: AddressContext
};
