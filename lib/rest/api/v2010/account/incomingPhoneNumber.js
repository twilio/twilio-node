'use strict';

var ListResource = require('../../../../base/ListResource');
var LocalList = require('./incomingPhoneNumber/local');
var MobileList = require('./incomingPhoneNumber/mobile');
var TollFreeList = require('./incomingPhoneNumber/tollFree');
var values = require('../../../../base/values');

var IncomingPhoneNumberList;
var IncomingPhoneNumberInstance;
var IncomingPhoneNumberContext;

/**
 * Initialize the IncomingPhoneNumberList
 *
 * :param Version version: Version that contains the resource
 * :param ownerAccountSid: A 34 character string that uniquely identifies this resource.
 *
 * @returns IncomingPhoneNumberList
 */
function IncomingPhoneNumberList(version, ownerAccountSid) {
  function IncomingPhoneNumberListInstance(sid) {
    return this.get(sid);
  }

  IncomingPhoneNumberListInstance._version = version;
  // Path Solution
  IncomingPhoneNumberListInstance._solution = {
    ownerAccountSid: ownerAccountSid,
  };
  IncomingPhoneNumberListInstance._uri = _.template(
    '/Accounts/{owner_account_sid}/IncomingPhoneNumbers.json',
    IncomingPhoneNumberListInstance._solution
  );

  // Components
  IncomingPhoneNumberListInstance._local = undefined;
  IncomingPhoneNumberListInstance._mobile = undefined;
  IncomingPhoneNumberListInstance._tollFree = undefined;

  /**
   * Streams IncomingPhoneNumberInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.beta] - Include new phone numbers
   * @param string [opts.friendlyName] - Filter by friendly name
   * @param string [opts.phoneNumber] - Filter by incoming phone number
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
  IncomingPhoneNumberListInstance.stream = function stream(opts) {
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
   * Lists IncomingPhoneNumberInstance records from the API as a list.
   *
   * @param string [opts.beta] - Include new phone numbers
   * @param string [opts.friendlyName] - Filter by friendly name
   * @param string [opts.phoneNumber] - Filter by incoming phone number
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
  IncomingPhoneNumberListInstance.list = function list(opts) {
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
   * Retrieve a single page of IncomingPhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.beta] - Include new phone numbers
   * @param string [opts.friendlyName] - Filter by friendly name
   * @param string [opts.phoneNumber] - Filter by incoming phone number
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of IncomingPhoneNumberInstance
   */
  IncomingPhoneNumberListInstance.page = function page(opts) {
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

    return IncomingPhoneNumberPage(
      this._version,
      response,
      this._solution.ownerAccountSid,
    );
  };

  /**
   * Create a new IncomingPhoneNumberInstance
   *
   * @param string [opts.apiVersion] - The Twilio Rest API version to use
   * @param string [opts.friendlyName] -
   *          A human readable description of this resource
   * @param string [opts.smsApplicationSid] -
   *          Unique string that identifies the application
   * @param string [opts.smsFallbackMethod] - HTTP method used with sms fallback url
   * @param string [opts.smsFallbackUrl] -
   *          URL Twilio will request if an error occurs in executing TwiML
   * @param string [opts.smsMethod] - HTTP method to use with sms url
   * @param string [opts.smsUrl] - URL Twilio will request when receiving an SMS
   * @param string [opts.statusCallback] -
   *          URL Twilio will use to pass status parameters
   * @param string [opts.statusCallbackMethod] -
   *          HTTP method twilio will use with status callback
   * @param string [opts.voiceApplicationSid] -
   *          The unique sid of the application to handle this number
   * @param string [opts.voiceCallerIdLookup] - Look up the caller's caller-ID
   * @param string [opts.voiceFallbackMethod] - HTTP method used with fallback_url
   * @param string [opts.voiceFallbackUrl] -
   *          URL Twilio will request when an error occurs in TwiML
   * @param string [opts.voiceMethod] - HTTP method used with the voice url
   * @param string [opts.voiceUrl] - URL Twilio will request when receiving a call
   * @param string [opts.phoneNumber] - The phone number
   * @param string [opts.areaCode] - The desired area code for the new number
   *
   * @returns Newly created IncomingPhoneNumberInstance
   */
  IncomingPhoneNumberListInstance.create = function create(opts) {
    var data = values.of({
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
      'Phonenumber': opts.phoneNumber,
      'Areacode': opts.areaCode,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new IncomingPhoneNumberInstance(
      this._version,
      payload,
      this._solution.ownerAccountSid
    );
  };

  Object.defineProperty(IncomingPhoneNumberListInstance,
    'local', {
    get: function local() {
      if (!this._local) {
        this._local = new LocalList(
          this._version,
          this._solution.ownerAccountSid
        );
      return this._local;
    },
  });

  Object.defineProperty(IncomingPhoneNumberListInstance,
    'mobile', {
    get: function mobile() {
      if (!this._mobile) {
        this._mobile = new MobileList(
          this._version,
          this._solution.ownerAccountSid
        );
      return this._mobile;
    },
  });

  Object.defineProperty(IncomingPhoneNumberListInstance,
    'tollFree', {
    get: function tollFree() {
      if (!this._tollFree) {
        this._tollFree = new TollFreeList(
          this._version,
          this._solution.ownerAccountSid
        );
      return this._tollFree;
    },
  });

  /**
   * Constructs a IncomingPhoneNumberContext
   *
   * :param sid - Fetch by unique incoming-phone-number Sid
   *
   * @returns IncomingPhoneNumberContext
   */
  function get(sid) {
    return new IncomingPhoneNumberContext(
      this._version,
      this._solution.ownerAccountSid,
      sid
    );
  }

  return IncomingPhoneNumberListInstance;
}

module.exports = {
  IncomingPhoneNumberList: IncomingPhoneNumberList,
  IncomingPhoneNumberInstance: IncomingPhoneNumberInstance,
  IncomingPhoneNumberContext: IncomingPhoneNumberContext
};
