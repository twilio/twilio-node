'use strict';

var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var TollFreeList;
var TollFreeInstance;
var TollFreeContext;

/**
 * Initialize the TollFreeList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: A 34 character string that uniquely identifies this resource.
 * :param countryCode: The country_code
 *
 * @returns TollFreeList
 */
function TollFreeList(version, accountSid, countryCode) {
  function TollFreeListInstance(sid) {
    return this.get(sid);
  }

  TollFreeListInstance._version = version;
  // Path Solution
  TollFreeListInstance._solution = {
    accountSid: accountSid,
    countryCode: countryCode,
  };
  TollFreeListInstance._uri = _.template(
    '/Accounts/{account_sid}/AvailablePhoneNumbers/{country_code}/TollFree.json',
    TollFreeListInstance._solution
  );
  /**
   * Streams TollFreeInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.areaCode] - The area_code
   * @param string [opts.contains] - The contains
   * @param string [opts.smsEnabled] - The sms_enabled
   * @param string [opts.mmsEnabled] - The mms_enabled
   * @param string [opts.voiceEnabled] - The voice_enabled
   * @param string [opts.excludeAllAddressRequired] -
   *          The exclude_all_address_required
   * @param string [opts.excludeLocalAddressRequired] -
   *          The exclude_local_address_required
   * @param string [opts.excludeForeignAddressRequired] -
   *          The exclude_foreign_address_required
   * @param string [opts.beta] - The beta
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
  TollFreeListInstance.stream = function stream(opts) {
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
   * Lists TollFreeInstance records from the API as a list.
   *
   * @param string [opts.areaCode] - The area_code
   * @param string [opts.contains] - The contains
   * @param string [opts.smsEnabled] - The sms_enabled
   * @param string [opts.mmsEnabled] - The mms_enabled
   * @param string [opts.voiceEnabled] - The voice_enabled
   * @param string [opts.excludeAllAddressRequired] -
   *          The exclude_all_address_required
   * @param string [opts.excludeLocalAddressRequired] -
   *          The exclude_local_address_required
   * @param string [opts.excludeForeignAddressRequired] -
   *          The exclude_foreign_address_required
   * @param string [opts.beta] - The beta
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
  TollFreeListInstance.list = function list(opts) {
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
   * Retrieve a single page of TollFreeInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.areaCode] - The area_code
   * @param string [opts.contains] - The contains
   * @param string [opts.smsEnabled] - The sms_enabled
   * @param string [opts.mmsEnabled] - The mms_enabled
   * @param string [opts.voiceEnabled] - The voice_enabled
   * @param string [opts.excludeAllAddressRequired] -
   *          The exclude_all_address_required
   * @param string [opts.excludeLocalAddressRequired] -
   *          The exclude_local_address_required
   * @param string [opts.excludeForeignAddressRequired] -
   *          The exclude_foreign_address_required
   * @param string [opts.beta] - The beta
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of TollFreeInstance
   */
  TollFreeListInstance.page = function page(opts) {
    var params = values.of({
      'Areacode': opts.areaCode,
      'Contains': opts.contains,
      'Smsenabled': opts.smsEnabled,
      'Mmsenabled': opts.mmsEnabled,
      'Voiceenabled': opts.voiceEnabled,
      'Excludealladdressrequired': opts.excludeAllAddressRequired,
      'Excludelocaladdressrequired': opts.excludeLocalAddressRequired,
      'Excludeforeignaddressrequired': opts.excludeForeignAddressRequired,
      'Beta': opts.beta,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return TollFreePage(
      this._version,
      response,
      this._solution.accountSid,
      this._solution.countryCode,
    );
  };

  return TollFreeListInstance;
}

module.exports = {
  TollFreeList: TollFreeList,
  TollFreeInstance: TollFreeInstance,
  TollFreeContext: TollFreeContext
};
