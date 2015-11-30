'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the ConnectAppContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique connect-app Sid
 *
 * @returns {class_name}
 */
function ConnectAppContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/ConnectApps/<% sid %>.json', this._solution);
}

/**
 * Fetch a ConnectAppInstance
 *
 * @returns Fetched ConnectAppInstance
 */
ConnectAppContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return ConnectAppInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Update the ConnectAppInstance
 *
 * @param string [opts.authorizeRedirectUrl] - URIL Twilio sends requests when users authorize
 * @param string [opts.companyName] - The company name set for this Connect App.
 * @param string [opts.deauthorizeCallbackMethod] - HTTP method Twilio WIll use making requests to the url
 * @param string [opts.deauthorizeCallbackUrl] - URL Twilio will send a request when a user de-authorizes this app
 * @param string [opts.description] - A more detailed human readable description
 * @param string [opts.friendlyName] - A human readable name for the Connect App.
 * @param string [opts.homepageUrl] - The URL users can obtain more information
 * @param connect_app.permission [opts.permissions] - The set of permissions that your ConnectApp requests.
 *
 * @returns Updated ConnectAppInstance
 */
ConnectAppContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Authorizeredirecturl': authorizeRedirectUrl,
    'Companyname': companyName,
    'Deauthorizecallbackmethod': deauthorizeCallbackMethod,
    'Deauthorizecallbackurl': deauthorizeCallbackUrl,
    'Description': description,
    'Friendlyname': friendlyName,
    'Homepageurl': homepageUrl,
    'Permissions': permissions,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return ConnectAppInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

