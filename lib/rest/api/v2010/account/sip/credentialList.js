'use strict';

var _ = require('lodash');
var CredentialList = require('./credentialList/credential');
var Instance = require('../../../../../base');
var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the CredentialListContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique credential Sid
 *
 * @returns {CredentialListContext}
 */
function CredentialListContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/SIP/CredentialLists/<% sid %>.json', this._solution);

  // Dependents
  this._credentials = undefined;
}

Object.defineProperty(CredentialListContext.prototype, 'credentials', {
  get: function() {
    if (!this._credentials) {
      this._credentials = new CredentialList(
        this._version,
        this._solution.accountSid,
        this._solution.credentialListSid
      );
    }
    return this._credentials;
  },
});

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
    this._solution.accountSid,
    this._solution.sid,
  );
};

/**
 * Update the CredentialListInstance
 *
 * @param string friendlyName - The friendly_name
 *
 * @returns Updated CredentialListInstance
 */
CredentialListContext.prototype.update = function update(self, friendlyName) {
  var data = values.of({
    'Friendlyname': friendlyName,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return new CredentialListInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
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
        this._solution.accountSid,
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

Object.defineProperty(CredentialListInstance.prototype, 'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(CredentialListInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(CredentialListInstance.prototype, 'subresourceUris', {
  get: function() {
    return this._properties.subresourceUris;
  },
});

Object.defineProperty(CredentialListInstance.prototype, 'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Initialize the CredentialListContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique credential Sid
 *
 * @returns {CredentialListContext}
 */
CredentialListInstance.prototype.CredentialListInstance = function
    CredentialListInstance(version, payload, accountSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid,
      dateCreated: payload.date_created,
      dateUpdated: payload.date_updated,
      friendlyName: payload.friendly_name,
      sid: payload.sid,
      subresourceUris: payload.subresource_uris,
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
 * Fetch a CredentialListInstance
 *
 * @returns Fetched CredentialListInstance
 */
CredentialListInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

/**
 * Update the CredentialListInstance
 *
 * @param string friendlyName - The friendly_name
 *
 * @returns Updated CredentialListInstance
 */
CredentialListInstance.prototype.update = function update(self, friendlyName) {
  return this._proxy.update(
    friendlyName
  );
};

/**
 * Deletes the CredentialListInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
CredentialListInstance.prototype.delete = function delete(self) {
  return this._proxy.delete();
};

/**
 * Access the credentials
 *
 * @returns credentials
 */
CredentialListInstance.prototype.credentials = function credentials() {
  return this._proxy.credentials;
};

