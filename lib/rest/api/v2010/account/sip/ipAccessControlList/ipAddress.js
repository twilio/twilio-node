'use strict';

var InstanceContext = require('../../../../../../base/InstanceContext');
var values = require('../../../../../../base/values');

/**
 * Initialize the IpAddressContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} ipAccessControlListSid: The ip_access_control_list_sid
 * @param {sid} sid: The sid
 *
 * @returns {class_name}
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

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return IpAddressInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    ipAccessControlListSid=self._solution['ipAccessControlListSid'],
    sid=self._solution['sid'],
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

  return IpAddressInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    ipAccessControlListSid=self._solution['ipAccessControlListSid'],
    sid=self._solution['sid'],
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

