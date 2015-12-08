'use strict';

var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var LocalList;
var LocalInstance;
var LocalContext;

/**
 * Initialize the LocalList
 *
 * :param Version version: Version that contains the resource
 * :param ownerAccountSid: A 34 character string that uniquely identifies this resource.
 *
 * @returns LocalList
 */
function LocalList(version, ownerAccountSid) {
  function LocalListInstance() {
  }

  LocalListInstance._version = version;
  // Path Solution
  LocalListInstance._solution = {
    ownerAccountSid: ownerAccountSid,
  };
  LocalListInstance._uri = _.template(
    '/Accounts/{owner_account_sid}/IncomingPhoneNumbers/Local.json',
    LocalListInstance._solution
  );
  /**
   * Streams LocalInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.beta] - The beta
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.phoneNumber] - The phone_number
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
  LocalListInstance.stream = function stream(opts) {
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
   * Lists LocalInstance records from the API as a list.
   *
   * @param string [opts.beta] - The beta
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.phoneNumber] - The phone_number
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
  LocalListInstance.list = function list(opts) {
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
   * Retrieve a single page of LocalInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.beta] - The beta
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.phoneNumber] - The phone_number
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of LocalInstance
   */
  LocalListInstance.page = function page(opts) {
    var params = values.of({
      'Beta': opts.beta,
      'Friendlyname': opts.friendlyName,
      'Phonenumber': opts.phoneNumber,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return LocalPage(
      this._version,
      response,
      this._solution.ownerAccountSid,
    );
  };

  /**
   * Create a new LocalInstance
   *
   * @param string phoneNumber - The phone_number
   * @param string [opts.apiVersion] - The api_version
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.smsApplicationSid] - The sms_application_sid
   * @param string [opts.smsFallbackMethod] - The sms_fallback_method
   * @param string [opts.smsFallbackUrl] - The sms_fallback_url
   * @param string [opts.smsMethod] - The sms_method
   * @param string [opts.smsUrl] - The sms_url
   * @param string [opts.statusCallback] - The status_callback
   * @param string [opts.statusCallbackMethod] - The status_callback_method
   * @param string [opts.voiceApplicationSid] - The voice_application_sid
   * @param string [opts.voiceCallerIdLookup] - The voice_caller_id_lookup
   * @param string [opts.voiceFallbackMethod] - The voice_fallback_method
   * @param string [opts.voiceFallbackUrl] - The voice_fallback_url
   * @param string [opts.voiceMethod] - The voice_method
   * @param string [opts.voiceUrl] - The voice_url
   *
   * @returns Newly created LocalInstance
   */
  LocalListInstance.create = function create(phoneNumber, opts) {
    var data = values.of({
      'Phonenumber': phoneNumber,
      'Apiversion': opts.apiVersion,
      'Friendlyname': opts.friendlyName,
      'Smsapplicationsid': opts.smsApplicationSid,
      'Smsfallbackmethod': opts.smsFallbackMethod,
      'Smsfallbackurl': opts.smsFallbackUrl,
      'Smsmethod': opts.smsMethod,
      'Smsurl': opts.smsUrl,
      'Statuscallback': opts.statusCallback,
      'Statuscallbackmethod': opts.statusCallbackMethod,
      'Voiceapplicationsid': opts.voiceApplicationSid,
      'Voicecalleridlookup': opts.voiceCallerIdLookup,
      'Voicefallbackmethod': opts.voiceFallbackMethod,
      'Voicefallbackurl': opts.voiceFallbackUrl,
      'Voicemethod': opts.voiceMethod,
      'Voiceurl': opts.voiceUrl,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new LocalInstance(
      this._version,
      payload,
      this._solution.ownerAccountSid
    );
  };

  return LocalListInstance;
}

module.exports = {
  LocalList: LocalList,
  LocalInstance: LocalInstance,
  LocalContext: LocalContext
};
