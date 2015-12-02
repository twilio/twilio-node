'use strict';

var _ = require('lodash');
var Instance = require('../../../../../base');
var InstanceContext = require('../../../../../base/InstanceContext');
var IpAddressList = require('./ipAccessControlList/ipAddress');
var values = require('../../../../../base/values');

/**
 * Initialize the IpAccessControlListContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique ip-access-control-list Sid
 *
 * @returns {IpAccessControlListContext}
 */
function IpAccessControlListContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/SIP/IpAccessControlLists/<% sid %>.json', this._solution);

  // Dependents
  this._ipAddresses = undefined;
}

Object.defineProperty(IpAccessControlListContext.prototype, 'ipAddresses', {
  get: function() {
    if (!this._ipAddresses) {
      this._ipAddresses = new IpAddressList(
        this._version,
        this._solution.accountSid,
        this._solution.ipAccessControlListSid
      );
    }
    return this._ipAddresses;
  },
});

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
    this._solution.accountSid,
    this._solution.sid,
  );
};

/**
 * Update the IpAccessControlListInstance
 *
 * @param string friendlyName - A human readable description of this resource
 *
 * @returns Updated IpAccessControlListInstance
 */
IpAccessControlListContext.prototype.update = function update(self,
    friendlyName) {
  var data = values.of({
    'Friendlyname': friendlyName,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return new IpAccessControlListInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
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
        this._solution.accountSid,
        this._solution.sid
      );
    return this._context;
  },
});

Object.defineProperty(IpAccessControlListInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(IpAccessControlListInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
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

Object.defineProperty(IpAccessControlListInstance.prototype, 'subresourceUris', {
  get: function() {
    return this._properties.subresourceUris;
  },
});

Object.defineProperty(IpAccessControlListInstance.prototype, 'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Initialize the IpAccessControlListContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique ip-access-control-list Sid
 *
 * @returns {IpAccessControlListContext}
 */
IpAccessControlListInstance.prototype.IpAccessControlListInstance = function
    IpAccessControlListInstance(version, payload, accountSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      sid: payload.sid,
      accountSid: payload.account_sid,
      friendlyName: payload.friendly_name,
      dateCreated: payload.date_created,
      dateUpdated: payload.date_updated,
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
 * Fetch a IpAccessControlListInstance
 *
 * @returns Fetched IpAccessControlListInstance
 */
IpAccessControlListInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

/**
 * Update the IpAccessControlListInstance
 *
 * @param string friendlyName - A human readable description of this resource
 *
 * @returns Updated IpAccessControlListInstance
 */
IpAccessControlListInstance.prototype.update = function update(self,
    friendlyName) {
  return this._proxy.update(
    friendlyName
  );
};

/**
 * Deletes the IpAccessControlListInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
IpAccessControlListInstance.prototype.delete = function delete(self) {
  return this._proxy.delete();
};

/**
 * Access the ipAddresses
 *
 * @returns ipAddresses
 */
IpAccessControlListInstance.prototype.ipAddresses = function ipAddresses() {
  return this._proxy.ipAddresses;
};

