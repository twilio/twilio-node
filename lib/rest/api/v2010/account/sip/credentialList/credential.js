'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../../base/InstanceResource');
var values = require('../../../../../../base/values');

var CredentialList;
var CredentialInstance;
var CredentialContext;

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
function CredentialInstance(version, payload, accountSid, credentialListSid,
                             sid) {
  InstanceResource.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    sid: payload.sid, // jshint ignore:line,
    accountSid: payload.account_sid, // jshint ignore:line,
    credentialListSid: payload.credential_list_sid, // jshint ignore:line,
    username: payload.username, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    credentialListSid: credentialListSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(CredentialInstance.prototype, InstanceResource.prototype);
CredentialInstance.prototype.constructor = CredentialInstance;

Object.defineProperty(CredentialInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new CredentialContext(
        this._version,
        this._solution.accountSid,
        this._solution.credentialListSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(CredentialInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(CredentialInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(CredentialInstance.prototype,
  'credentialListSid', {
  get: function() {
    return this._properties.credentialListSid;
  },
});

Object.defineProperty(CredentialInstance.prototype,
  'username', {
  get: function() {
    return this._properties.username;
  },
});

Object.defineProperty(CredentialInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(CredentialInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(CredentialInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a CredentialInstance
 *
 * @returns Fetched CredentialInstance
 */
CredentialInstance.prototype.fetch = function fetch() {
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
CredentialInstance.prototype.update = function update(username, password) {
  return this._proxy.update(
    username,
    password
  );
};

/**
 * Deletes the CredentialInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
CredentialInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};


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
  this._uri = _.template(
    '/Accounts/<% account_sid %>/SIP/CredentialLists/<% credential_list_sid %>/Credentials/<% sid %>.json', // jshint ignore:line
    this._solution
  );
}

_.extend(CredentialContext.prototype, InstanceContext.prototype);
CredentialContext.prototype.constructor = CredentialContext;

/**
 * Fetch a CredentialInstance
 *
 * @returns Fetched CredentialInstance
 */
CredentialContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new CredentialInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.credentialListSid,
    this._solution.sid
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
CredentialContext.prototype.update = function update(username, password) {
  var data = values.of({
    'Username': username,
    'Password': password,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

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
 * @returns true if delete succeeds, false otherwise
 */
CredentialContext.prototype.remove = function remove() {
  return this._version.remove('delete', this._uri);
};

module.exports = {
  CredentialList: CredentialList,
  CredentialInstance: CredentialInstance,
  CredentialContext: CredentialContext
};
