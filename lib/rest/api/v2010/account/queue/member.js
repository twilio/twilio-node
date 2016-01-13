'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var MemberList;
var MemberInstance;
var MemberContext;

/**
 * Initialize the MemberList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The account_sid
 * :param queueSid: A string that uniquely identifies this queue
 *
 * @returns MemberList
 */
function MemberList(version, accountSid, queueSid) {
  function MemberListInstance(sid) {
    return MemberListInstance.get(sid);
  }

  MemberListInstance._version = version;
  // Path Solution
  MemberListInstance._solution = {
    accountSid: accountSid,
    queueSid: queueSid
  };
  MemberListInstance._uri = _.template(
    '/Accounts/{account_sid}/Queues/{queue_sid}/Members.json',
    MemberListInstance._solution
  );
  /**
   * Streams MemberInstance records from the API.
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
  MemberListInstance.stream = function stream() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists MemberInstance records from the API as a list.
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
  MemberListInstance.list = function list() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      limits.pageSize
    );
  };

  /**
   * Retrieve a single page of MemberInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of MemberInstance
   */
  MemberListInstance.page = function page() {
    var params = values.of({
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params
    );

    return MemberPage(
      this._version,
      response,
      this._solution.accountSid,
      this._solution.queueSid
    );
  };

  /**
   * Constructs a MemberContext
   *
   * :param callSid - The call_sid
   *
   * @returns MemberContext
   */
  MemberListInstance.get = function get(callSid) {
    return new MemberContext(
      this._version,
      this._solution.accountSid,
      this._solution.queueSid,
      callSid
    );
  };

  return MemberListInstance;
}


/**
 * Initialize the MemberContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} queueSid: The Queue in which to find the members
 * @param {sid} callSid: The call_sid
 *
 * @returns {MemberContext}
 */
function MemberInstance(version, payload, accountSid, queueSid, callSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    callSid: payload.call_sid, // jshint ignore:line,
    dateEnqueued: payload.date_enqueued, // jshint ignore:line,
    position: payload.position, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
    waitTime: payload.wait_time, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    queueSid: queueSid,
    callSid: callSid || this._properties.callSid,
  };
}

_.extend(MemberInstance.prototype, InstanceResource.prototype);
MemberInstance.prototype.constructor = MemberInstance;

Object.defineProperty(MemberInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new MemberContext(
        this._version,
        this._solution.accountSid,
        this._solution.queueSid,
        this._solution.callSid
      );
    }

    return this._context;
  },
});

Object.defineProperty(MemberInstance.prototype,
  'callSid', {
  get: function() {
    return this._properties.callSid;
  },
});

Object.defineProperty(MemberInstance.prototype,
  'dateEnqueued', {
  get: function() {
    return this._properties.dateEnqueued;
  },
});

Object.defineProperty(MemberInstance.prototype,
  'position', {
  get: function() {
    return this._properties.position;
  },
});

Object.defineProperty(MemberInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(MemberInstance.prototype,
  'waitTime', {
  get: function() {
    return this._properties.waitTime;
  },
});

/**
 * Fetch a MemberInstance
 *
 * @returns Fetched MemberInstance
 */
MemberInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the MemberInstance
 *
 * @param string url - The url
 * @param string method - The method
 *
 * @returns Updated MemberInstance
 */
MemberInstance.prototype.update = function update(url, method) {
  return this._proxy.update(
    url,
    method
  );
};


/**
 * Initialize the MemberContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} queueSid - The Queue in which to find the members
 * @param {sid} callSid - The call_sid
 *
 * @returns {MemberContext}
 */
function MemberContext(version, accountSid, queueSid, callSid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    queueSid: queueSid,
    callSid: callSid,
  };
  this._uri = _.template(
    '/Accounts/<% account_sid %>/Queues/<% queue_sid %>/Members/<% call_sid %>.json', // jshint ignore:line
    this._solution
  );
}

_.extend(MemberContext.prototype, InstanceContext.prototype);
MemberContext.prototype.constructor = MemberContext;

/**
 * Fetch a MemberInstance
 *
 * @returns Fetched MemberInstance
 */
MemberContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new MemberInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.queueSid,
    this._solution.callSid
  );
};

/**
 * Update the MemberInstance
 *
 * @param string url - The url
 * @param string method - The method
 *
 * @returns Updated MemberInstance
 */
MemberContext.prototype.update = function update(url, method) {
  var data = values.of({
    'Url': url,
    'Method': method,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  return new MemberInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.queueSid,
    this._solution.callSid
  );
};

module.exports = {
  MemberList: MemberList,
  MemberInstance: MemberInstance,
  MemberContext: MemberContext
};
