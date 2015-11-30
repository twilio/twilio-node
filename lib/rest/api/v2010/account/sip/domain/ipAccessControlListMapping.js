'use strict';

var InstanceContext = require('../../../../../../base/InstanceContext');
var values = require('../../../../../../base/values');

/**
 * Initialize the IpAccessControlListMappingContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} domainSid: The domain_sid
 * @param {sid} sid: The sid
 *
 * @returns {class_name}
 */
function IpAccessControlListMappingContext(version, accountSid, domainSid, sid)
                                            {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    domainSid: domainSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/SIP/Domains/<% domain_sid %>/IpAccessControlListMappings/<% sid %>.json', this._solution);
}

/**
 * Fetch a IpAccessControlListMappingInstance
 *
 * @returns Fetched IpAccessControlListMappingInstance
 */
IpAccessControlListMappingContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return IpAccessControlListMappingInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    domainSid=self._solution['domainSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Deletes the IpAccessControlListMappingInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
IpAccessControlListMappingContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

