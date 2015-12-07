'use strict';

var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var QueueList;
var QueueInstance;
var QueueContext;

/**
 * Initialize the QueueList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The account_sid
 *
 * @returns QueueList
 */
function QueueList(version, accountSid) {
  function QueueListInstance() {
  }

  // Path Solution
  QueueListInstance._solution = {
    accountSid: accountSid,
  };
  QueueListInstance._uri = _.template(
    '/Accounts/{account_sid}/Queues.json',
    this._solution
  );
  /**
   * Streams QueueInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
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
  QueueListInstance.read = function stream() {
    var limits = this._version.readLimits({
      limit: limit,
      pageSize: pageSize
    })

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists QueueInstance records from the API as a list.
   *
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
  QueueListInstance.read = function list() {
    return this.page();
  };

  /**
   * Retrieve a single page of QueueInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken]: PageToken provided by the API
   * @param {number} [opts.pageNumber]: Page Number, this value is simply for client state
   * @param {number} [opts.pageSize]: Number of records to return, defaults to 50
   *
   * @returns Page of QueueInstance
   */
  QueueListInstance.read = function page(page_token=values.unset,
                                          page_number=values.unset,
                                          page_size=values.unset) {
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

    return QueuePage(
      this._version,
      response,
      this._solution.accountSid,
    );
  };

  /**
   * Create a new QueueInstance
   *
   * @param string [opts.friendlyName] -
   *          A user-provided string that identifies this queue.
   * @param string [opts.maxSize] - The max number of calls allowed in the queue
   *
   * @returns Newly created QueueInstance
   */
  QueueListInstance.create = function create(opts) {
    var data = values.of({
      'Friendlyname': opts.friendlyName,
      'Maxsize': opts.maxSize,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new QueueInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  };

  return QueueListInstance;
}

module.exports = {
  QueueList: QueueList,
  QueueInstance: QueueInstance,
  QueueContext: QueueContext
};
