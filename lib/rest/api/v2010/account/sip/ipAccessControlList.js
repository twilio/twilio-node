'use strict';

var InstanceContext = require('../../../../../base/InstanceContext');
var IpAddressList = require('./ipAccessControlList/ipAddress');
var values = require('../../../../../base/values');

/**
 * Initialize the IpAccessControlListContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique ip-access-control-list Sid
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
        this._solution.ipAccessControlListSid,
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

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return IpAccessControlListInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
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

  return IpAccessControlListInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
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

