'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
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
    return TriggerListInstance.get(sid);
  }

  TriggerListInstance._version = version;
  // Path Solution
  TriggerListInstance._solution = {
    accountSid: accountSid
  };
  TriggerListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Usage/Triggers.json' // jshint ignore:line
  )(TriggerListInstance._solution);
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
    var version = this._version;
    opts = opts || {};
    var data = values.of({
      'CallbackUrl': callbackUrl,
      'TriggerValue': triggerValue,
      'UsageCategory': usageCategory,
      'CallbackMethod': opts.callbackMethod || values.unset,
      'FriendlyName': opts.friendlyName || values.unset,
      'Recurring': opts.recurring || values.unset,
      'TriggerBy': opts.triggerBy || values.unset
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    promise = promise.then(function(payload) {
      return new TriggerInstance(
        version,
        payload,
        solution.accountSid
      );
    });

    return promise;
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
      'Recurring': opts.recurring || values.unset,
      'TriggerBy': opts.triggerBy || values.unset,
      'UsageCategory': opts.usageCategory || values.unset,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params
    );

    return TriggerPage(
      this._version,
      response,
      solution.accountSid
    );
  };

  /**
   * Constructs a TriggerContext
   *
   * :param sid - Fetch by unique usage-trigger Sid
   *
   * @returns TriggerContext
   */
  TriggerListInstance.get = function get(sid) {
    return new TriggerContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return TriggerListInstance;
}


/**
 * Initialize the TriggerContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique usage-trigger Sid
 *
 * @returns {TriggerContext}
 */
function TriggerInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    callbackMethod: payload.callback_method, // jshint ignore:line,
    callbackUrl: payload.callback_url, // jshint ignore:line,
    currentValue: payload.current_value, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateFired: payload.date_fired, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    recurring: payload.recurring, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    triggerBy: payload.trigger_by, // jshint ignore:line,
    triggerValue: payload.trigger_value, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
    usageCategory: payload.usage_category, // jshint ignore:line,
    usageRecordUri: payload.usage_record_uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(TriggerInstance.prototype, InstanceResource.prototype);
TriggerInstance.prototype.constructor = TriggerInstance;

Object.defineProperty(TriggerInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new TriggerContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'callbackMethod', {
  get: function() {
    return this._properties.callbackMethod;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'callbackUrl', {
  get: function() {
    return this._properties.callbackUrl;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'currentValue', {
  get: function() {
    return this._properties.currentValue;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'dateFired', {
  get: function() {
    return this._properties.dateFired;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'recurring', {
  get: function() {
    return this._properties.recurring;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'triggerBy', {
  get: function() {
    return this._properties.triggerBy;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'triggerValue', {
  get: function() {
    return this._properties.triggerValue;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'usageCategory', {
  get: function() {
    return this._properties.usageCategory;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'usageRecordUri', {
  get: function() {
    return this._properties.usageRecordUri;
  },
});

/**
 * Fetch a TriggerInstance
 *
 * @returns Fetched TriggerInstance
 */
TriggerInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the TriggerInstance
 *
 * @param string [opts.callbackMethod] - HTTP method to use with callback_url
 * @param string [opts.callbackUrl] -
 *          URL Twilio will request when the trigger fires
 * @param string [opts.friendlyName] -
 *          A user-specified, human-readable name for the trigger.
 *
 * @returns Updated TriggerInstance
 */
TriggerInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Deletes the TriggerInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
TriggerInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};


/**
 * Initialize the TriggerContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique usage-trigger Sid
 *
 * @returns {TriggerContext}
 */
function TriggerContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Usage/Triggers/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(TriggerContext.prototype, InstanceContext.prototype);
TriggerContext.prototype.constructor = TriggerContext;

/**
 * Fetch a TriggerInstance
 *
 * @returns Fetched TriggerInstance
 */
TriggerContext.prototype.fetch = function fetch() {
  var version = this._version;
  var solution = this._solution;
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new TriggerInstance(
      version,
      payload,
      solution.accountSid,
      solution.sid
    );
  });

  return promise;
};

/**
 * Update the TriggerInstance
 *
 * @param string [opts.callbackMethod] - HTTP method to use with callback_url
 * @param string [opts.callbackUrl] -
 *          URL Twilio will request when the trigger fires
 * @param string [opts.friendlyName] -
 *          A user-specified, human-readable name for the trigger.
 *
 * @returns Updated TriggerInstance
 */
TriggerContext.prototype.update = function update(opts) {
  var data = values.of({
    'CallbackMethod': opts.callbackMethod || values.unset,
    'CallbackUrl': opts.callbackUrl || values.unset,
    'FriendlyName': opts.friendlyName || values.unset,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  return new TriggerInstance(
    this._version,
    payload,
    solution.accountSid,
    solution.sid
  );
};

/**
 * Deletes the TriggerInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
TriggerContext.prototype.remove = function remove() {
  return this._version.remove(this._uri);
};

module.exports = {
  TriggerList: TriggerList,
  TriggerInstance: TriggerInstance,
  TriggerContext: TriggerContext
};
