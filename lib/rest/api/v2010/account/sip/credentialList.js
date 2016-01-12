'use strict';

var _ = require('lodash');
var CredentialList = require('./credentialList/credential');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var values = require('../../../../../base/values');

var CredentialListList;
var CredentialListInstance;
var CredentialListContext;

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
function CredentialListInstance(version, payload, accountSid, sid) {
  InstanceResource.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    subresourceUris: payload.subresource_uris, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(CredentialListInstance.prototype, InstanceResource.prototype);
CredentialListInstance.prototype.constructor = CredentialListInstance;

Object.defineProperty(CredentialListInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new CredentialListContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(CredentialListInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(CredentialListInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(CredentialListInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(CredentialListInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(CredentialListInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(CredentialListInstance.prototype,
  'subresourceUris', {
  get: function() {
    return this._properties.subresourceUris;
  },
});

Object.defineProperty(CredentialListInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a CredentialListInstance
 *
 * @returns Fetched CredentialListInstance
 */
CredentialListInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the CredentialListInstance
 *
 * @param string friendlyName - The friendly_name
 *
 * @returns Updated CredentialListInstance
 */
CredentialListInstance.prototype.update = function update(friendlyName) {
  return this._proxy.update(
    friendlyName
  );
};

/**
 * Deletes the CredentialListInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
CredentialListInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};

/**
 * Access the credentials
 *
 * @returns credentials
 */
CredentialListInstance.prototype.credentials = function credentials() {
  return this._proxy.credentials;
};


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
  this._uri = _.template(
    '/Accounts/<% account_sid %>/SIP/CredentialLists/<% sid %>.json', // jshint ignore:line
    this._solution
  );

  // Dependents
  this._credentials = undefined;
}

_.extend(CredentialListContext.prototype, InstanceContext.prototype);
CredentialListContext.prototype.constructor = CredentialListContext;

/**
 * Fetch a CredentialListInstance
 *
 * @returns Fetched CredentialListInstance
 */
CredentialListContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new CredentialListInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};

/**
 * Update the CredentialListInstance
 *
 * @param string friendlyName - The friendly_name
 *
 * @returns Updated CredentialListInstance
 */
CredentialListContext.prototype.update = function update(friendlyName) {
  var data = values.of({
    'Friendlyname': friendlyName,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

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
 * @returns true if delete succeeds, false otherwise
 */
CredentialListContext.prototype.remove = function remove() {
  return this._version.remove('delete', this._uri);
};

Object.defineProperty(CredentialListContext.prototype,
  'credentials', {
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

module.exports = {
  CredentialListList: CredentialListList,
  CredentialListInstance: CredentialListInstance,
  CredentialListContext: CredentialListContext
};
