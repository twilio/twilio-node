'use strict';

var _ = require('lodash');
var Instance = require('../../../../../base');
var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

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
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    queueSid: queueSid,
    callSid: callSid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/Queues/<% queue_sid %>/Members/<% call_sid %>.json', this._solution);
}

/**
 * Fetch a MemberInstance
 *
 * @returns Fetched MemberInstance
 */
MemberContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new MemberInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.queueSid,
    this._solution.callSid,
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
MemberContext.prototype.update = function update(self, url, method) {
  var data = values.of({
    'Url': url,
    'Method': method,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return new MemberInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.queueSid,
    this._solution.callSid
  );
};


function MemberInstance() {
}

Object.defineProperty(MemberInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new MemberContext(
        this._version,
        this._solution.accountSid,
        this._solution.queueSid,
        this._solution.callSid
      );
    return this._context;
  },
});

Object.defineProperty(MemberInstance.prototype, 'callSid', {
  get: function() {
    return this._properties.callSid;
  },
});

Object.defineProperty(MemberInstance.prototype, 'dateEnqueued', {
  get: function() {
    return this._properties.dateEnqueued;
  },
});

Object.defineProperty(MemberInstance.prototype, 'position', {
  get: function() {
    return this._properties.position;
  },
});

Object.defineProperty(MemberInstance.prototype, 'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(MemberInstance.prototype, 'waitTime', {
  get: function() {
    return this._properties.waitTime;
  },
});

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
MemberInstance.prototype.MemberInstance = function MemberInstance(version,
    payload, accountSid, queueSid, callSid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      callSid: payload.call_sid,
      dateEnqueued: payload.date_enqueued,
      position: payload.position,
      uri: payload.uri,
      waitTime: payload.wait_time,
  };

  // Context
  this._context = None;
  this._solution = {
    accountSid: accountSid,
    queueSid: queueSid,
    callSid: callSid || this._properties.callSid,
  };
};

/**
 * Fetch a MemberInstance
 *
 * @returns Fetched MemberInstance
 */
MemberInstance.prototype.fetch = function fetch(self) {
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
MemberInstance.prototype.update = function update(self, url, method) {
  return this._proxy.update(
    url,
    method
  );
};

