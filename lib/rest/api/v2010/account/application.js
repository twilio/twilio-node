'use strict';

var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var ApplicationList;
var ApplicationInstance;
var ApplicationContext;

/**
 * Initialize the ApplicationList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: A string that uniquely identifies this resource
 *
 * @returns ApplicationList
 */
function ApplicationList(version, accountSid) {
  function ApplicationListInstance(sid) {
    return this.get(sid);
  }

  ApplicationListInstance._version = version;
  // Path Solution
  ApplicationListInstance._solution = {
    accountSid: accountSid,
  };
  ApplicationListInstance._uri = _.template(
    '/Accounts/{account_sid}/Applications.json',
    ApplicationListInstance._solution
  );
  /**
   * Create a new ApplicationInstance
   *
   * @param string friendlyName - Human readable description of this resource
   * @param string [opts.apiVersion] - The API version to use
   * @param string [opts.voiceUrl] -
   *          URL Twilio will make requests to when relieving a call
   * @param string [opts.voiceMethod] - HTTP method to use with the URL
   * @param string [opts.voiceFallbackUrl] - Fallback URL
   * @param string [opts.voiceFallbackMethod] -
   *          HTTP method to use with the fallback url
   * @param string [opts.statusCallback] - URL to hit with status updates
   * @param string [opts.statusCallbackMethod] -
   *          HTTP method to use with the status callback
   * @param string [opts.voiceCallerIdLookup] - True or False
   * @param string [opts.smsUrl] - URL Twilio will request when receiving an SMS
   * @param string [opts.smsMethod] - HTTP method to use with sms_url
   * @param string [opts.smsFallbackUrl] -
   *          Fallback URL if there's an error parsing TwiML
   * @param string [opts.smsFallbackMethod] -
   *          HTTP method to use with sms_fallback_method
   * @param string [opts.smsStatusCallback] -
   *          URL Twilio with request with status updates
   * @param string [opts.messageStatusCallback] -
   *          URL to make requests to with status updates
   *
   * @returns Newly created ApplicationInstance
   */
  ApplicationListInstance.create = function create(friendlyName, opts) {
    var data = values.of({
      'Friendlyname': friendlyName,
      'Apiversion': opts.apiVersion,
      'Voiceurl': opts.voiceUrl,
      'Voicemethod': opts.voiceMethod,
      'Voicefallbackurl': opts.voiceFallbackUrl,
      'Voicefallbackmethod': opts.voiceFallbackMethod,
      'Statuscallback': opts.statusCallback,
      'Statuscallbackmethod': opts.statusCallbackMethod,
      'Voicecalleridlookup': opts.voiceCallerIdLookup,
      'Smsurl': opts.smsUrl,
      'Smsmethod': opts.smsMethod,
      'Smsfallbackurl': opts.smsFallbackUrl,
      'Smsfallbackmethod': opts.smsFallbackMethod,
      'Smsstatuscallback': opts.smsStatusCallback,
      'Messagestatuscallback': opts.messageStatusCallback,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new ApplicationInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  };

  /**
   * Streams ApplicationInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.friendlyName] - Filter by friendly name
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
  ApplicationListInstance.stream = function stream(opts) {
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
   * Lists ApplicationInstance records from the API as a list.
   *
   * @param string [opts.friendlyName] - Filter by friendly name
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
  ApplicationListInstance.list = function list(opts) {
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
   * Retrieve a single page of ApplicationInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.friendlyName] - Filter by friendly name
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of ApplicationInstance
   */
  ApplicationListInstance.page = function page(opts) {
    var params = values.of({
      'Friendlyname': opts.friendlyName,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return ApplicationPage(
      this._version,
      response,
      this._solution.accountSid,
    );
  };

  /**
   * Constructs a ApplicationContext
   *
   * :param sid - Fetch by unique Application Sid
   *
   * @returns ApplicationContext
   */
  function get(sid) {
    return new ApplicationContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  }

  return ApplicationListInstance;
}

module.exports = {
  ApplicationList: ApplicationList,
  ApplicationInstance: ApplicationInstance,
  ApplicationContext: ApplicationContext
};
