'use strict';

var FeedbackSummaryList = require('./call/feedbackSummary');
var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var CallList;
var CallInstance;
var CallContext;

/**
 * Initialize the CallList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The unique id of the Account responsible for creating this Call
 *
 * @returns CallList
 */
function CallList(version, accountSid) {
  function CallListInstance() {
  }

  CallListInstance._version = version;
  // Path Solution
  CallListInstance._solution = {
    accountSid: accountSid,
  };
  CallListInstance._uri = _.template(
    '/Accounts/{account_sid}/Calls.json',
    CallListInstance._solution
  );

  // Components
  CallListInstance._feedbackSummaries = undefined;

  /**
   * Create a new CallInstance
   *
   * @param string to - Phone number, SIP address or client identifier to call
   * @param string from - Twilio number from which to originate the call
   * @param string [opts.method] - HTTP method to use to fetch TwiML
   * @param string [opts.fallbackUrl] - Fallback URL in case of error
   * @param string [opts.fallbackMethod] - HTTP Method to use with FallbackUrl
   * @param string [opts.statusCallback] - Status Callback URL
   * @param string [opts.statusCallbackMethod] -
   *          HTTP Method to use with StatusCallback
   * @param string [opts.sendDigits] - Digits to send
   * @param string [opts.ifMachine] -
   *          Action to take if a machine has answered the call
   * @param string [opts.timeout] - Number of seconds to wait for an answer
   * @param string [opts.record] - Whether or not to record the Call
   * @param string [opts.url] - Url from which to fetch TwiML
   * @param string [opts.applicationSid] -
   *          ApplicationSid that configures from where to fetch TwiML
   *
   * @returns Newly created CallInstance
   */
  CallListInstance.create = function create(to, from, opts) {
    var data = values.of({
      'To': to,
      'From': from,
      'Method': opts.method,
      'Fallbackurl': opts.fallbackUrl,
      'Fallbackmethod': opts.fallbackMethod,
      'Statuscallback': opts.statusCallback,
      'Statuscallbackmethod': opts.statusCallbackMethod,
      'Senddigits': opts.sendDigits,
      'Ifmachine': opts.ifMachine,
      'Timeout': opts.timeout,
      'Record': opts.record,
      'Url': opts.url,
      'Applicationsid': opts.applicationSid,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new CallInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  };

  /**
   * Streams CallInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.to] - Phone number or Client identifier to filter `to` on
   * @param string [opts.from] -
   *          Phone number or Client identifier to filter `from` on
   * @param string [opts.parentCallSid] - Parent Call Sid to filter on
   * @param call.status [opts.status] - Status to filter on
   * @param string [opts.startTimeBefore] - StartTime to filter on
   * @param string [opts.startTime] - StartTime to filter on
   * @param string [opts.startTimeAfter] - StartTime to filter on
   * @param string [opts.endTimeBefore] - EndTime to filter on
   * @param string [opts.endTime] - EndTime to filter on
   * @param string [opts.endTimeAfter] - EndTime to filter on
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
  CallListInstance.stream = function stream(opts) {
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
   * Lists CallInstance records from the API as a list.
   *
   * @param string [opts.to] - Phone number or Client identifier to filter `to` on
   * @param string [opts.from] -
   *          Phone number or Client identifier to filter `from` on
   * @param string [opts.parentCallSid] - Parent Call Sid to filter on
   * @param call.status [opts.status] - Status to filter on
   * @param string [opts.startTimeBefore] - StartTime to filter on
   * @param string [opts.startTime] - StartTime to filter on
   * @param string [opts.startTimeAfter] - StartTime to filter on
   * @param string [opts.endTimeBefore] - EndTime to filter on
   * @param string [opts.endTime] - EndTime to filter on
   * @param string [opts.endTimeAfter] - EndTime to filter on
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
  CallListInstance.list = function list(opts) {
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
   * Retrieve a single page of CallInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.to] - Phone number or Client identifier to filter `to` on
   * @param string [opts.from] -
   *          Phone number or Client identifier to filter `from` on
   * @param string [opts.parentCallSid] - Parent Call Sid to filter on
   * @param call.status [opts.status] - Status to filter on
   * @param string [opts.startTimeBefore] - StartTime to filter on
   * @param string [opts.startTime] - StartTime to filter on
   * @param string [opts.startTimeAfter] - StartTime to filter on
   * @param string [opts.endTimeBefore] - EndTime to filter on
   * @param string [opts.endTime] - EndTime to filter on
   * @param string [opts.endTimeAfter] - EndTime to filter on
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of CallInstance
   */
  CallListInstance.page = function page(opts) {
    var params = values.of({
      'To': opts.to,
      'From': opts.from,
      'Parentcallsid': opts.parentCallSid,
      'Status': opts.status,
      'Starttime<': opts.starttimebefore,
      'Starttime': opts.startTime,
      'Starttime>': opts.starttimeafter,
      'Endtime<': opts.endtimebefore,
      'Endtime': opts.endTime,
      'Endtime>': opts.endtimeafter,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return CallPage(
      this._version,
      response,
      this._solution.accountSid,
    );
  };

  Object.defineProperty(CallListInstance,
    'feedbackSummaries', {
    get: function feedbackSummaries() {
      if (!this._feedbackSummaries) {
        this._feedbackSummaries = new FeedbackSummaryList(
          this._version,
          this._solution.accountSid
        );
      return this._feedbackSummaries;
    },
  });

  /**
   * Constructs a CallContext
   *
   * :param sid - Call Sid that uniquely identifies the Call to fetch
   *
   * @returns CallContext
   */
  function get(sid) {
    return new CallContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  }

  return CallListInstance;
}

module.exports = {
  CallList: CallList,
  CallInstance: CallInstance,
  CallContext: CallContext
};
