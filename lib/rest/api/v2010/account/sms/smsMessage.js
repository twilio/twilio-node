'use strict';

var _ = require('lodash');
var Instance = require('../../../../../base');
var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

var SmsMessageInstance;
var SmsMessageContext;

function SmsMessageInstance() {
}

Object.defineProperty(SmsMessageInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new SmsMessageContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'body', {
  get: function() {
    return this._properties.body;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'dateSent', {
  get: function() {
    return this._properties.dateSent;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'direction', {
  get: function() {
    return this._properties.direction;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'from', {
  get: function() {
    return this._properties.from;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'price', {
  get: function() {
    return this._properties.price;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'priceUnit', {
  get: function() {
    return this._properties.priceUnit;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'to', {
  get: function() {
    return this._properties.to;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Initialize the SmsMessageContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: The sid
 *
 * @returns {SmsMessageContext}
 */
SmsMessageInstance.prototype.SmsMessageInstance = function
    SmsMessageInstance(version, payload, accountSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    body: payload.body, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    dateSent: payload.date_sent, // jshint ignore:line,
    direction: payload.direction, // jshint ignore:line,
    from: payload.from, // jshint ignore:line,
    price: payload.price, // jshint ignore:line,
    priceUnit: payload.price_unit, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    status: payload.status, // jshint ignore:line,
    to: payload.to, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
};

/**
 * Deletes the SmsMessageInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
SmsMessageInstance.prototype.delete = function delete() {
  return this._proxy.delete();
};

/**
 * Fetch a SmsMessageInstance
 *
 * @returns Fetched SmsMessageInstance
 */
SmsMessageInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the SmsMessageInstance
 *
 * @param string [opts.body] - The body
 *
 * @returns Updated SmsMessageInstance
 */
SmsMessageInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};


/**
 * Initialize the SmsMessageContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - The sid
 *
 * @returns {SmsMessageContext}
 */
function SmsMessageContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<% account_sid %>/SMS/Messages/<% sid %>.json', // jshint ignore:line
    this._solution
  );
}

/**
 * Deletes the SmsMessageInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
SmsMessageContext.prototype.delete = function delete() {
  return this._version.delete('delete', this._uri);
};

/**
 * Fetch a SmsMessageInstance
 *
 * @returns Fetched SmsMessageInstance
 */
SmsMessageContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new SmsMessageInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};

/**
 * Update the SmsMessageInstance
 *
 * @param string [opts.body] - The body
 *
 * @returns Updated SmsMessageInstance
 */
SmsMessageContext.prototype.update = function update(opts) {
  var data = values.of({
    'Body': opts.body,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  return new SmsMessageInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};

module.exports = {
  SmsMessageInstance: SmsMessageInstance,
  SmsMessageContext: SmsMessageContext
};
