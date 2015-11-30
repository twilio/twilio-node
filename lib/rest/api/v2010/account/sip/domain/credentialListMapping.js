'use strict';

var InstanceContext = require('../../../../../../base/InstanceContext');
var values = require('../../../../../../base/values');

/**
 * Initialize the CredentialListMappingContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} domainSid: The domain_sid
 * @param {sid} sid: The sid
 *
 * @returns {class_name}
 */
function CredentialListMappingContext(version, accountSid, domainSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    domainSid: domainSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/SIP/Domains/<% domain_sid %>/CredentialListMappings/<% sid %>.json', this._solution);
}

/**
 * Fetch a CredentialListMappingInstance
 *
 * @returns Fetched CredentialListMappingInstance
 */
CredentialListMappingContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return CredentialListMappingInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    domainSid=self._solution['domainSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Deletes the CredentialListMappingInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
CredentialListMappingContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

