'use strict';

var _ = require('lodash');
var Instance = require('../../../../base');
var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the CredentialListContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} trunkSid - The trunk_sid
 * @param {sid} sid - The sid
 *
 * @returns {CredentialListContext}
 */
function CredentialListContext(version, trunkSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    trunkSid: trunkSid,
    sid: sid,
  };
  this._uri = _.template('/Trunks/<% trunk_sid %>/CredentialLists/<% sid %>', this._solution);
}

/**
 * Fetch a CredentialListInstance
 *
 * @returns Fetched CredentialListInstance
 */
CredentialListContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new CredentialListInstance(
    this._version,
    payload,
    this._solution.trunkSid,
    this._solution.sid,
  );
};

/**
 * Deletes the CredentialListInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
CredentialListContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};


function CredentialListInstance() {
}

Object.defineProperty(CredentialListInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new CredentialListContext(
        this._version,
        this._solution.trunkSid,
        this._solution.sid
      );
    return this._context;
  },
});

Object.defineProperty(CredentialListInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(CredentialListInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(CredentialListInstance.prototype, 'trunkSid', {
  get: function() {
    return this._properties.trunkSid;
  },
});

Object.defineProperty(CredentialListInstance.prototype, 'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(CredentialListInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(CredentialListInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(CredentialListInstance.prototype, 'url', {
  get: function() {
    return this._properties.url;
  },
});

/**
 * Initialize the CredentialListContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} trunkSid: The trunk_sid
 * @param {sid} sid: The sid
 *
 * @returns {CredentialListContext}
 */
CredentialListInstance.prototype.CredentialListInstance = function
    CredentialListInstance(version, payload, trunkSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid,
      sid: payload.sid,
      trunkSid: payload.trunk_sid,
      friendlyName: payload.friendly_name,
      dateCreated: payload.date_created,
      dateUpdated: payload.date_updated,
      url: payload.url,
  };

  // Context
  this._context = None;
  this._solution = {
    trunkSid: trunkSid,
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a CredentialListInstance
 *
 * @returns Fetched CredentialListInstance
 */
CredentialListInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

/**
 * Deletes the CredentialListInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
CredentialListInstance.prototype.delete = function delete(self) {
  return this._proxy.delete();
};

