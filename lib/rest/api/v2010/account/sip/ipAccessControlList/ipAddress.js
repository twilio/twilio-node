'use strict';

var _ = require('lodash');
var Instance = require('../../../../../../base');
var InstanceContext = require('../../../../../../base/InstanceContext');
var values = require('../../../../../../base/values');

/**
 * Initialize the IpAddressContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} ipAccessControlListSid - The ip_access_control_list_sid
 * @param {sid} sid - The sid
 *
 * @returns {IpAddressContext}
 */
function IpAddressContext(version, accountSid, ipAccessControlListSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    ipAccessControlListSid: ipAccessControlListSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/SIP/IpAccessControlLists/<% ip_access_control_list_sid %>/IpAddresses/<% sid %>.json', this._solution);
}

/**
 * Fetch a IpAddressInstance
 *
 * @returns Fetched IpAddressInstance
 */
IpAddressContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new IpAddressInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.ipAccessControlListSid,
    this._solution.sid,
  );
};

/**
 * Update the IpAddressInstance
 *
 * @param string ipAddress - The ip_address
 * @param string friendlyName - The friendly_name
 *
 * @returns Updated IpAddressInstance
 */
IpAddressContext.prototype.update = function update(self, ipAddress,
                                                     friendlyName) {
  var data = values.of({
    'Ipaddress': ipAddress,
    'Friendlyname': friendlyName,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return new IpAddressInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.ipAccessControlListSid,
    this._solution.sid
  );
};

/**
 * Deletes the IpAddressInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
IpAddressContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};


function IpAddressInstance() {
}

Object.defineProperty(IpAddressInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new IpAddressContext(
        this._version,
        this._solution.accountSid,
        this._solution.ipAccessControlListSid,
        this._solution.sid
      );
    return this._context;
  },
});

Object.defineProperty(IpAddressInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(IpAddressInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(IpAddressInstance.prototype, 'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(IpAddressInstance.prototype, 'ipAddress', {
  get: function() {
    return this._properties.ipAddress;
  },
});

Object.defineProperty(IpAddressInstance.prototype, 'ipAccessControlListSid', {
  get: function() {
    return this._properties.ipAccessControlListSid;
  },
});

Object.defineProperty(IpAddressInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(IpAddressInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(IpAddressInstance.prototype, 'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Initialize the IpAddressContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} ipAccessControlListSid: The ip_access_control_list_sid
 * @param {sid} sid: The sid
 *
 * @returns {IpAddressContext}
 */
IpAddressInstance.prototype.IpAddressInstance = function
    IpAddressInstance(version, payload, accountSid, ipAccessControlListSid, sid)
    {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      sid: payload.sid,
      accountSid: payload.account_sid,
      friendlyName: payload.friendly_name,
      ipAddress: payload.ip_address,
      ipAccessControlListSid: payload.ip_access_control_list_sid,
      dateCreated: payload.date_created,
      dateUpdated: payload.date_updated,
      uri: payload.uri,
  };

  // Context
  this._context = None;
  this._solution = {
    accountSid: accountSid,
    ipAccessControlListSid: ipAccessControlListSid,
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a IpAddressInstance
 *
 * @returns Fetched IpAddressInstance
 */
IpAddressInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

/**
 * Update the IpAddressInstance
 *
 * @param string ipAddress - The ip_address
 * @param string friendlyName - The friendly_name
 *
 * @returns Updated IpAddressInstance
 */
IpAddressInstance.prototype.update = function update(self, ipAddress,
                                                      friendlyName) {
  return this._proxy.update(
    ipAddress,
    friendlyName
  );
};

/**
 * Deletes the IpAddressInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
IpAddressInstance.prototype.delete = function delete(self) {
  return this._proxy.delete();
};

