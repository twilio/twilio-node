'use strict';

var InstanceContext = require('../../../../../../base/InstanceContext');
var values = require('../../../../../../base/values');

/**
 * Initialize the CredentialContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} credentialListSid: The credential_list_sid
 * @param {sid} sid: The sid
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

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return CredentialInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    credentialListSid=self._solution['credentialListSid'],
    sid=self._solution['sid'],
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

  return CredentialInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    credentialListSid=self._solution['credentialListSid'],
    sid=self._solution['sid'],
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

