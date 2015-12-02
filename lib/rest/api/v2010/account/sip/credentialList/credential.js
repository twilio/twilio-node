'use strict';

var _ = require('lodash');
var Instance = require('../../../../../../base');
var InstanceContext = require('../../../../../../base/InstanceContext');
var values = require('../../../../../../base/values');

/**
 * Initialize the CredentialContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} credentialListSid - The credential_list_sid
 * @param {sid} sid - The sid
 *
 * @returns {CredentialContext}
 */
function CredentialContext(version, accountSid, credentialListSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    credentialListSid: credentialListSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/SIP/CredentialLists/<% credential_list_sid %>/Credentials/<% sid %>.json', this._solution);
}

/**
 * Fetch a CredentialInstance
 *
 * @returns Fetched CredentialInstance
 */
CredentialContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new CredentialInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.credentialListSid,
    this._solution.sid,
  );
};

/**
 * Update the CredentialInstance
 *
 * @param string username - The username
 * @param string password - The password
 *
 * @returns Updated CredentialInstance
 */
CredentialContext.prototype.update = function update(self, username, password) {
  var data = values.of({
    'Username': username,
    'Password': password,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return new CredentialInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.credentialListSid,
    this._solution.sid
  );
};

/**
 * Deletes the CredentialInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
CredentialContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};


function CredentialInstance() {
}

Object.defineProperty(CredentialInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new CredentialContext(
        this._version,
        this._solution.accountSid,
        this._solution.credentialListSid,
        this._solution.sid
      );
    return this._context;
  },
});

Object.defineProperty(CredentialInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(CredentialInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(CredentialInstance.prototype, 'credentialListSid', {
  get: function() {
    return this._properties.credentialListSid;
  },
});

Object.defineProperty(CredentialInstance.prototype, 'username', {
  get: function() {
    return this._properties.username;
  },
});

Object.defineProperty(CredentialInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(CredentialInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(CredentialInstance.prototype, 'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Initialize the CredentialContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} credentialListSid: The credential_list_sid
 * @param {sid} sid: The sid
 *
 * @returns {CredentialContext}
 */
CredentialInstance.prototype.CredentialInstance = function
    CredentialInstance(version, payload, accountSid, credentialListSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      sid: payload.sid,
      accountSid: payload.account_sid,
      credentialListSid: payload.credential_list_sid,
      username: payload.username,
      dateCreated: payload.date_created,
      dateUpdated: payload.date_updated,
      uri: payload.uri,
  };

  // Context
  this._context = None;
  this._solution = {
    accountSid: accountSid,
    credentialListSid: credentialListSid,
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a CredentialInstance
 *
 * @returns Fetched CredentialInstance
 */
CredentialInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

/**
 * Update the CredentialInstance
 *
 * @param string username - The username
 * @param string password - The password
 *
 * @returns Updated CredentialInstance
 */
CredentialInstance.prototype.update = function update(self, username, password)
                                                       {
  return this._proxy.update(
    username,
    password
  );
};

/**
 * Deletes the CredentialInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
CredentialInstance.prototype.delete = function delete(self) {
  return this._proxy.delete();
};

