'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the AuthorizedConnectAppContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} connectAppSid: The connect_app_sid
 *
 * @returns {class_name}
 */
function AuthorizedConnectAppContext(version, accountSid, connectAppSid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    connectAppSid: connectAppSid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/AuthorizedConnectApps/<% connect_app_sid %>.json', this._solution);
}

/**
 * Fetch a AuthorizedConnectAppInstance
 *
 * @returns Fetched AuthorizedConnectAppInstance
 */
AuthorizedConnectAppContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return AuthorizedConnectAppInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    connectAppSid=self._solution['connectAppSid'],
  );
};

