'use strict';

var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var DomainList;
var DomainInstance;
var DomainContext;

/**
 * Initialize the DomainList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: A 34 character string that uniquely identifies this resource.
 *
 * @returns DomainList
 */
function DomainList(version, accountSid) {
  function DomainListInstance() {
  }

  DomainListInstance._version = version;
  // Path Solution
  DomainListInstance._solution = {
    accountSid: accountSid,
  };
  DomainListInstance._uri = _.template(
    '/Accounts/{account_sid}/SIP/Domains.json',
    DomainListInstance._solution
  );
  /**
   * Streams DomainInstance records from the API.
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
  DomainListInstance.stream = function stream() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists DomainInstance records from the API as a list.
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
  DomainListInstance.list = function list() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      limits.pageSize
    );
  };

  /**
   * Retrieve a single page of DomainInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of DomainInstance
   */
  DomainListInstance.page = function page() {
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

    return DomainPage(
      this._version,
      response,
      this._solution.accountSid,
    );
  };

  /**
   * Create a new DomainInstance
   *
   * @param string domainName - The unique address on Twilio to route SIP traffic
   * @param string [opts.friendlyName] -
   *          A user-specified, human-readable name for the trigger.
   * @param string [opts.voiceUrl] - URL Twilio will request when receiving a call
   * @param string [opts.voiceMethod] - HTTP method to use with voice_url
   * @param string [opts.voiceFallbackUrl] -
   *          URL Twilio will request if an error occurs in executing TwiML
   * @param string [opts.voiceFallbackMethod] -
   *          HTTP method used with voice_fallback_url
   * @param string [opts.voiceStatusCallbackUrl] -
   *          URL that Twilio will request with status updates
   * @param string [opts.voiceStatusCallbackMethod] -
   *          The voice_status_callback_method
   *
   * @returns Newly created DomainInstance
   */
  DomainListInstance.create = function create(domainName, opts) {
    var data = values.of({
      'Domainname': domainName,
      'Friendlyname': opts.friendlyName,
      'Voiceurl': opts.voiceUrl,
      'Voicemethod': opts.voiceMethod,
      'Voicefallbackurl': opts.voiceFallbackUrl,
      'Voicefallbackmethod': opts.voiceFallbackMethod,
      'Voicestatuscallbackurl': opts.voiceStatusCallbackUrl,
      'Voicestatuscallbackmethod': opts.voiceStatusCallbackMethod,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new DomainInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  };

  /**
   * Constructs a DomainContext
   *
   * :param sid - Fetch by unique Domain Sid
   *
   * @returns DomainContext
   */
  function get(sid) {
    return new DomainContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  }

  return DomainListInstance;
}

module.exports = {
  DomainList: DomainList,
  DomainInstance: DomainInstance,
  DomainContext: DomainContext
};
