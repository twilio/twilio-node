'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var values = require('../../../../base/values');

var OutgoingCallerIdList;
var OutgoingCallerIdInstance;
var OutgoingCallerIdContext;

/**
 * Initialize the OutgoingCallerIdContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique outgoing-caller-id Sid
 *
 * @returns {OutgoingCallerIdContext}
 */
function OutgoingCallerIdInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    sid: payload.sid, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    accountSid: payload.account_sid, // jshint ignore:line,
    phoneNumber: payload.phone_number, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(OutgoingCallerIdInstance.prototype, InstanceResource.prototype);
OutgoingCallerIdInstance.prototype.constructor = OutgoingCallerIdInstance;

Object.defineProperty(OutgoingCallerIdInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new OutgoingCallerIdContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(OutgoingCallerIdInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(OutgoingCallerIdInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(OutgoingCallerIdInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(OutgoingCallerIdInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(OutgoingCallerIdInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(OutgoingCallerIdInstance.prototype,
  'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(OutgoingCallerIdInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a OutgoingCallerIdInstance
 *
 * @returns Fetched OutgoingCallerIdInstance
 */
OutgoingCallerIdInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the OutgoingCallerIdInstance
 *
 * @param string [opts.friendlyName] -
 *          A human readable description of the caller ID
 *
 * @returns Updated OutgoingCallerIdInstance
 */
OutgoingCallerIdInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Deletes the OutgoingCallerIdInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
OutgoingCallerIdInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};


/**
 * Initialize the OutgoingCallerIdContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique outgoing-caller-id Sid
 *
 * @returns {OutgoingCallerIdContext}
 */
function OutgoingCallerIdContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<% account_sid %>/OutgoingCallerIds/<% sid %>.json', // jshint ignore:line
    this._solution
  );
}

_.extend(OutgoingCallerIdContext.prototype, InstanceContext.prototype);
OutgoingCallerIdContext.prototype.constructor = OutgoingCallerIdContext;

/**
 * Fetch a OutgoingCallerIdInstance
 *
 * @returns Fetched OutgoingCallerIdInstance
 */
OutgoingCallerIdContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new OutgoingCallerIdInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};

/**
 * Update the OutgoingCallerIdInstance
 *
 * @param string [opts.friendlyName] -
 *          A human readable description of the caller ID
 *
 * @returns Updated OutgoingCallerIdInstance
 */
OutgoingCallerIdContext.prototype.update = function update(opts) {
  var data = values.of({
    'Friendlyname': opts.friendlyName,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  return new OutgoingCallerIdInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};

/**
 * Deletes the OutgoingCallerIdInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
OutgoingCallerIdContext.prototype.remove = function remove() {
  return this._version.remove(this._uri);
};

module.exports = {
  OutgoingCallerIdList: OutgoingCallerIdList,
  OutgoingCallerIdInstance: OutgoingCallerIdInstance,
  OutgoingCallerIdContext: OutgoingCallerIdContext
};
