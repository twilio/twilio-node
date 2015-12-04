'use strict';

var _ = require('lodash');
var Instance = require('../../../../base');
var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the IpAccessControlListContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} trunkSid - The trunk_sid
 * @param {sid} sid - The sid
 *
 * @returns {IpAccessControlListContext}
 */
function IpAccessControlListContext(version, trunkSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    trunkSid: trunkSid,
    sid: sid,
  };
  this._uri = _.template('/Trunks/<% trunk_sid %>/IpAccessControlLists/<% sid %>', this._solution);
}

/**
 * Fetch a IpAccessControlListInstance
 *
 * @returns Fetched IpAccessControlListInstance
 */
IpAccessControlListContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new IpAccessControlListInstance(
    this._version,
    payload,
    this._solution.trunkSid,
    this._solution.sid,
  );
};

/**
 * Deletes the IpAccessControlListInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
IpAccessControlListContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};


function IpAccessControlListInstance() {
}

Object.defineProperty(IpAccessControlListInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new IpAccessControlListContext(
        this._version,
        this._solution.trunkSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(IpAccessControlListInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(IpAccessControlListInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(IpAccessControlListInstance.prototype, 'trunkSid', {
  get: function() {
    return this._properties.trunkSid;
  },
});

Object.defineProperty(IpAccessControlListInstance.prototype, 'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(IpAccessControlListInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(IpAccessControlListInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(IpAccessControlListInstance.prototype, 'url', {
  get: function() {
    return this._properties.url;
  },
});

/**
 * Initialize the IpAccessControlListContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} trunkSid: The trunk_sid
 * @param {sid} sid: The sid
 *
 * @returns {IpAccessControlListContext}
 */
IpAccessControlListInstance.prototype.IpAccessControlListInstance = function
    IpAccessControlListInstance(version, payload, trunkSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid // jshint ignore:line,
      sid: payload.sid // jshint ignore:line,
      trunkSid: payload.trunk_sid // jshint ignore:line,
      friendlyName: payload.friendly_name // jshint ignore:line,
      dateCreated: payload.date_created // jshint ignore:line,
      dateUpdated: payload.date_updated // jshint ignore:line,
      url: payload.url // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    trunkSid: trunkSid,
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a IpAccessControlListInstance
 *
 * @returns Fetched IpAccessControlListInstance
 */
IpAccessControlListInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

/**
 * Deletes the IpAccessControlListInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
IpAccessControlListInstance.prototype.delete = function delete(self) {
  return this._proxy.delete();
};

