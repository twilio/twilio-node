'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the SandboxContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 *
 * @returns {class_name}
 */
function SandboxContext(version, accountSid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/Sandbox.json', this._solution);
}

/**
 * Fetch a SandboxInstance
 *
 * @returns Fetched SandboxInstance
 */
SandboxContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return SandboxInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
  );
};

/**
 * Update the SandboxInstance
 *
 * @param string [opts.voiceUrl] - The voice_url
 * @param string [opts.voiceMethod] - The voice_method
 * @param string [opts.smsUrl] - The sms_url
 * @param string [opts.smsMethod] - The sms_method
 * @param string [opts.statusCallback] - The status_callback
 * @param string [opts.statusCallbackMethod] - The status_callback_method
 *
 * @returns Updated SandboxInstance
 */
SandboxContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Voiceurl': voiceUrl,
    'Voicemethod': voiceMethod,
    'Smsurl': smsUrl,
    'Smsmethod': smsMethod,
    'Statuscallback': statusCallback,
    'Statuscallbackmethod': statusCallbackMethod,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return SandboxInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
  );
};

