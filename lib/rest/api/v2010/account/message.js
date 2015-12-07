'use strict';

var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var MessageList;
var MessageInstance;
var MessageContext;

/**
 * Initialize the MessageList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The unique sid that identifies this account
 *
 * @returns MessageList
 */
function MessageList(version, accountSid) {
  function MessageListInstance() {
  }

  // Path Solution
  MessageListInstance._solution = {
    accountSid: accountSid,
  };
  MessageListInstance._uri = _.template(
    '/Accounts/{account_sid}/Messages.json',
    this._solution
  );
  /**
   * Create a new MessageInstance
   *
   * @param string to - The phone number to receive the message
   * @param string from - The phone number that initiated the message
   * @param string [opts.statusCallback] -
   *          URL Twilio will request when the status changes
   * @param string [opts.applicationSid] - The application to use for callbacks
   * @param string [opts.body] - The body
   * @param string [opts.mediaUrl] - The media_url
   *
   * @returns Newly created MessageInstance
   */
  MessageListInstance.create = function create(to, from, opts) {
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

    return new MessageInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  };

  /**
   * Streams MessageInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.to] - Filter by messages to this number
   * @param string [opts.from] - Filter by from number
   * @param string [opts.dateSentBefore] - Filter by date sent
   * @param string [opts.dateSent] - Filter by date sent
   * @param string [opts.dateSentAfter] - Filter by date sent
   * @param {number} [opts.limit] -
   *          Upper limit for the number of records to return.
   *                            list() guarantees never to return more than limit.
   *                            Default is no limit
   * @param {number} [opts.pageSize=50] -
   *          Number of records to fetch per request,
   *                            when not set will use the default value of 50 records.
   *                            If no pageSize is defined but a limit is defined,
   *                            list() will attempt to read the limit with the most efficient
   *                            page size, i.e. min(limit, 1000)
   * @param {Function} opts.callback - A callback function to process records
   */
  MessageListInstance.read = function stream(opts) {
    var limits = this._version.readLimits({
      limit: limit,
      pageSize: pageSize
    })

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists MessageInstance records from the API as a list.
   *
   * @param string [opts.to] - Filter by messages to this number
   * @param string [opts.from] - Filter by from number
   * @param string [opts.dateSentBefore] - Filter by date sent
   * @param string [opts.dateSent] - Filter by date sent
   * @param string [opts.dateSentAfter] - Filter by date sent
   * @param {number} [opts.limit]: Upper limit for the number of records to return.
   *                    list() guarantees never to return more than limit.
   *                    Default is no limit
   * @param {number} [opts.pageSize]: Number of records to fetch per request,
   *                    when not set will use the default value of 50 records.
   *                    If no page_size is defined but a limit is defined,
   *                    list() will attempt to read the limit with the most
   *                    efficient page size, i.e. min(limit, 1000)
   *
   * @returns {Array} A list of records
   */
  MessageListInstance.read = function list(opts) {
    return this.page();
  };

  /**
   * Retrieve a single page of MessageInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.to] - Filter by messages to this number
   * @param string [opts.from] - Filter by from number
   * @param string [opts.dateSentBefore] - Filter by date sent
   * @param string [opts.dateSent] - Filter by date sent
   * @param string [opts.dateSentAfter] - Filter by date sent
   * @param {string} [opts.pageToken]: PageToken provided by the API
   * @param {number} [opts.pageNumber]: Page Number, this value is simply for client state
   * @param {number} [opts.pageSize]: Number of records to return, defaults to 50
   *
   * @returns Page of MessageInstance
   */
  MessageListInstance.read = function page(opts, page_token=values.unset,
                                            page_number=values.unset,
                                            page_size=values.unset) {
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

    return MessagePage(
      this._version,
      response,
      this._solution.accountSid,
    );
  };

  return MessageListInstance;
}

module.exports = {
  MessageList: MessageList,
  MessageInstance: MessageInstance,
  MessageContext: MessageContext
};
