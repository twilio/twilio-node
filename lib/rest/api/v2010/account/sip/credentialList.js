'use strict';

var CredentialList = require('./credentialList/credential');
var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the CredentialListContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique credential Sid
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
  this._uri = _.template('/Accounts/<% account_sid %>/SIP/CredentialLists/<% sid %>.json', this._solution);

  // Dependents
  this._credentials = undefined;
}

Object.defineProperty(CredentialListContext.prototype, 'credentials', {
  get: function() {
    if (!this._credentials) {
      this._credentials = new CredentialList(
        this._version,
        this._solution.accountSid,
        this._solution.credentialListSid,
      );
    }
    return this._credentials;
  },
});

/**
 * Fetch a CredentialListInstance
 *
 * @returns Fetched CredentialListInstance
 */
CredentialListContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return CredentialListInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Update the CredentialListInstance
 *
 * @param string friendlyName - The friendly_name
 *
 * @returns Updated CredentialListInstance
 */
CredentialListContext.prototype.update = function update(self, friendlyName) {
  var data = values.of({
    'Friendlyname': friendlyName,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return CredentialListInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Deletes the CredentialListInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
CredentialListContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

