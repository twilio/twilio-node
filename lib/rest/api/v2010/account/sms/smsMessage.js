'use strict';

var _ = require('lodash');
var Instance = require('../../../../../base');
var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

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
  this._uri = _.template('/Accounts/<% account_sid %>/SMS/Messages/<% sid %>.json', this._solution);
}

/**
 * Deletes the SmsMessageInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
SmsMessageContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

/**
 * Fetch a SmsMessageInstance
 *
 * @returns Fetched SmsMessageInstance
 */
SmsMessageContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new SmsMessageInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid,
  );
};

/**
 * Update the SmsMessageInstance
 *
 * @param string [opts.body] - The body
 *
 * @returns Updated SmsMessageInstance
 */
SmsMessageContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Body': opts.body,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return new SmsMessageInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};


function SmsMessageInstance() {
}

Object.defineProperty(SmsMessageInstance.prototype, '_proxy', {
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

Object.defineProperty(SmsMessageInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(SmsMessageInstance.prototype, 'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(SmsMessageInstance.prototype, 'body', {
  get: function() {
    return this._properties.body;
  },
});

Object.defineProperty(SmsMessageInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(SmsMessageInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(SmsMessageInstance.prototype, 'dateSent', {
  get: function() {
    return this._properties.dateSent;
  },
});

Object.defineProperty(SmsMessageInstance.prototype, 'direction', {
  get: function() {
    return this._properties.direction;
  },
});

Object.defineProperty(SmsMessageInstance.prototype, 'from', {
  get: function() {
    return this._properties.from;
  },
});

Object.defineProperty(SmsMessageInstance.prototype, 'price', {
  get: function() {
    return this._properties.price;
  },
});

Object.defineProperty(SmsMessageInstance.prototype, 'priceUnit', {
  get: function() {
    return this._properties.priceUnit;
  },
});

Object.defineProperty(SmsMessageInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(SmsMessageInstance.prototype, 'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(SmsMessageInstance.prototype, 'to', {
  get: function() {
    return this._properties.to;
  },
});

Object.defineProperty(SmsMessageInstance.prototype, 'uri', {
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
      accountSid: payload.account_sid,
      apiVersion: payload.api_version,
      body: payload.body,
      dateCreated: payload.date_created,
      dateUpdated: payload.date_updated,
      dateSent: payload.date_sent,
      direction: payload.direction,
      from: payload.from,
      price: payload.price,
      priceUnit: payload.price_unit,
      sid: payload.sid,
      status: payload.status,
      to: payload.to,
      uri: payload.uri,
  };

  // Context
  this._context = None;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
};

/**
 * Deletes the SmsMessageInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
SmsMessageInstance.prototype.delete = function delete(self) {
  return this._proxy.delete();
};

/**
 * Fetch a SmsMessageInstance
 *
 * @returns Fetched SmsMessageInstance
 */
SmsMessageInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

/**
 * Update the SmsMessageInstance
 *
 * @param string [opts.body] - The body
 *
 * @returns Updated SmsMessageInstance
 */
SmsMessageInstance.prototype.update = function update(self, opts) {
  return this._proxy.update(
    opts
  );
};

