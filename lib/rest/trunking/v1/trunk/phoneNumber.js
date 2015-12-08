'use strict';

var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var PhoneNumberList;
var PhoneNumberInstance;
var PhoneNumberContext;

/**
 * Initialize the PhoneNumberList
 *
 * :param Version version: Version that contains the resource
 * :param trunkSid: The trunk_sid
 *
 * @returns PhoneNumberList
 */
function PhoneNumberList(version, trunkSid) {
  function PhoneNumberListInstance(sid) {
    return this.get(sid);
  }

  PhoneNumberListInstance._version = version;
  // Path Solution
  PhoneNumberListInstance._solution = {
    trunkSid: trunkSid,
  };
  PhoneNumberListInstance._uri = _.template(
    '/Trunks/{trunk_sid}/PhoneNumbers',
    PhoneNumberListInstance._solution
  );
  /**
   * Create a new PhoneNumberInstance
   *
   * @param string phoneNumberSid - The phone_number_sid
   *
   * @returns Newly created PhoneNumberInstance
   */
  PhoneNumberListInstance.create = function create(phoneNumberSid) {
    var data = values.of({
      'Phonenumbersid': phoneNumberSid,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new PhoneNumberInstance(
      this._version,
      payload,
      this._solution.trunkSid
    );
  };

  /**
   * Streams PhoneNumberInstance records from the API.
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
  PhoneNumberListInstance.stream = function stream() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists PhoneNumberInstance records from the API as a list.
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
  PhoneNumberListInstance.list = function list() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      limits.pageSize
    );
  };

  /**
   * Retrieve a single page of PhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of PhoneNumberInstance
   */
  PhoneNumberListInstance.page = function page() {
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

    return PhoneNumberPage(
      this._version,
      response,
      this._solution.trunkSid,
    );
  };

  /**
   * Constructs a PhoneNumberContext
   *
   * :param sid - The sid
   *
   * @returns PhoneNumberContext
   */
  function get(sid) {
    return new PhoneNumberContext(
      this._version,
      this._solution.trunkSid,
      sid
    );
  }

  return PhoneNumberListInstance;
}

module.exports = {
  PhoneNumberList: PhoneNumberList,
  PhoneNumberInstance: PhoneNumberInstance,
  PhoneNumberContext: PhoneNumberContext
};
