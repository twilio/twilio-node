'use strict';

var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var SmsMessageList;
var SmsMessageInstance;
var SmsMessageContext;

/**
 * Initialize the SmsMessageList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: A 34 character string that uniquely identifies this resource.
 *
 * @returns SmsMessageList
 */
function SmsMessageList(version, accountSid) {
  function SmsMessageListInstance(sid) {
    return this.get(sid);
  }

  SmsMessageListInstance._version = version;
  // Path Solution
  SmsMessageListInstance._solution = {
    accountSid: accountSid,
  };
  SmsMessageListInstance._uri = _.template(
    '/Accounts/{account_sid}/SMS/Messages.json',
    SmsMessageListInstance._solution
  );
  /**
   * Create a new SmsMessageInstance
   *
   * @param string to - The to
   * @param string from - The from
   * @param string [opts.statusCallback] - The status_callback
   * @param string [opts.applicationSid] - The application_sid
   * @param string [opts.body] - The body
   * @param string [opts.mediaUrl] - The media_url
   *
   * @returns Newly created SmsMessageInstance
   */
  SmsMessageListInstance.create = function create(to, from, opts) {
    var data = values.of({
      'To': to,
      'From': from,
      'Statuscallback': opts.statusCallback,
      'Applicationsid': opts.applicationSid,
      'Body': opts.body,
      'Mediaurl': opts.mediaUrl,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new SmsMessageInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  };

  /**
   * Streams SmsMessageInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.to] - The to
   * @param string [opts.from] - The from
   * @param string [opts.dateSentBefore] - The date_sent
   * @param string [opts.dateSent] - The date_sent
   * @param string [opts.dateSentAfter] - The date_sent
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
  SmsMessageListInstance.stream = function stream(opts) {
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
   * Lists SmsMessageInstance records from the API as a list.
   *
   * @param string [opts.to] - The to
   * @param string [opts.from] - The from
   * @param string [opts.dateSentBefore] - The date_sent
   * @param string [opts.dateSent] - The date_sent
   * @param string [opts.dateSentAfter] - The date_sent
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
  SmsMessageListInstance.list = function list(opts) {
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
   * Retrieve a single page of SmsMessageInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.to] - The to
   * @param string [opts.from] - The from
   * @param string [opts.dateSentBefore] - The date_sent
   * @param string [opts.dateSent] - The date_sent
   * @param string [opts.dateSentAfter] - The date_sent
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of SmsMessageInstance
   */
  SmsMessageListInstance.page = function page(opts) {
    var params = values.of({
      'To': opts.to,
      'From': opts.from,
      'Datesent<': opts.datesentbefore,
      'Datesent': opts.dateSent,
      'Datesent>': opts.datesentafter,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return SmsMessagePage(
      this._version,
      response,
      this._solution.accountSid,
    );
  };

  /**
   * Constructs a SmsMessageContext
   *
   * :param sid - The sid
   *
   * @returns SmsMessageContext
   */
  function get(sid) {
    return new SmsMessageContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  }

  return SmsMessageListInstance;
}

module.exports = {
  SmsMessageList: SmsMessageList,
  SmsMessageInstance: SmsMessageInstance,
  SmsMessageContext: SmsMessageContext
};
