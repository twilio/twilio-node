'use strict';

var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var TriggerList;
var TriggerInstance;
var TriggerContext;

/**
 * Initialize the TriggerList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: A 34 character string that uniquely identifies this resource.
 *
 * @returns TriggerList
 */
function TriggerList(version, accountSid) {
  function TriggerListInstance(sid) {
    return this.get(sid);
  }

  TriggerListInstance._version = version;
  // Path Solution
  TriggerListInstance._solution = {
    accountSid: accountSid,
  };
  TriggerListInstance._uri = _.template(
    '/Accounts/{account_sid}/Usage/Triggers.json',
    TriggerListInstance._solution
  );
  /**
   * Create a new TriggerInstance
   *
   * @param string callbackUrl - URL Twilio will request when the trigger fires
   * @param string triggerValue - the value at which the trigger will fire
   * @param trigger.usage_category usageCategory -
   *          The usage category the trigger watches
   * @param string [opts.callbackMethod] - HTTP method to use with callback_url
   * @param string [opts.friendlyName] -
   *          A user-specified, human-readable name for the trigger.
   * @param trigger.recurring [opts.recurring] - How this trigger recurs
   * @param trigger.trigger_field [opts.triggerBy] -
   *          The field in the UsageRecord that fires the trigger
   *
   * @returns Newly created TriggerInstance
   */
  TriggerListInstance.create = function create(callbackUrl, triggerValue,
                                                usageCategory, opts) {
    var data = values.of({
      'Callbackurl': callbackUrl,
      'Triggervalue': triggerValue,
      'Usagecategory': usageCategory,
      'Callbackmethod': opts.callbackMethod,
      'Friendlyname': opts.friendlyName,
      'Recurring': opts.recurring,
      'Triggerby': opts.triggerBy,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new TriggerInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  };

  /**
   * Streams TriggerInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param trigger.recurring [opts.recurring] - Filter by recurring
   * @param trigger.trigger_field [opts.triggerBy] - Filter by trigger by
   * @param trigger.usage_category [opts.usageCategory] - Filter by Usage Category
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
  TriggerListInstance.stream = function stream(opts) {
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
   * Lists TriggerInstance records from the API as a list.
   *
   * @param trigger.recurring [opts.recurring] - Filter by recurring
   * @param trigger.trigger_field [opts.triggerBy] - Filter by trigger by
   * @param trigger.usage_category [opts.usageCategory] - Filter by Usage Category
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
  TriggerListInstance.list = function list(opts) {
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
   * Retrieve a single page of TriggerInstance records from the API.
   * Request is executed immediately
   *
   * @param trigger.recurring [opts.recurring] - Filter by recurring
   * @param trigger.trigger_field [opts.triggerBy] - Filter by trigger by
   * @param trigger.usage_category [opts.usageCategory] - Filter by Usage Category
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of TriggerInstance
   */
  TriggerListInstance.page = function page(opts) {
    var params = values.of({
      'Recurring': opts.recurring,
      'Triggerby': opts.triggerBy,
      'Usagecategory': opts.usageCategory,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return TriggerPage(
      this._version,
      response,
      this._solution.accountSid,
    );
  };

  /**
   * Constructs a TriggerContext
   *
   * :param sid - Fetch by unique usage-trigger Sid
   *
   * @returns TriggerContext
   */
  function get(sid) {
    return new TriggerContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  }

  return TriggerListInstance;
}

module.exports = {
  TriggerList: TriggerList,
  TriggerInstance: TriggerInstance,
  TriggerContext: TriggerContext
};
