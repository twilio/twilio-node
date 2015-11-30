'use strict';

var CredentialListMappingList = require('./domain/credentialListMapping');
var InstanceContext = require('../../../../../base/InstanceContext');
var IpAccessControlListMappingList = require(
    './domain/ipAccessControlListMapping');
var values = require('../../../../../base/values');

/**
 * Initialize the DomainContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique Domain Sid
 *
 * @returns {class_name}
 */
function DomainContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/SIP/Domains/<% sid %>.json', this._solution);

  // Dependents
  this._ipAccessControlListMappings = undefined;
  this._credentialListMappings = undefined;
}

Object.defineProperty(DomainContext.prototype, 'ipAccessControlListMappings', {
  get: function() {
    if (!this._ipAccessControlListMappings) {
      this._ipAccessControlListMappings = new IpAccessControlListMappingList(
        this._version,
        this._solution.accountSid,
        this._solution.domainSid,
      );
    }
    return this._ipAccessControlListMappings;
  },
});

Object.defineProperty(DomainContext.prototype, 'credentialListMappings', {
  get: function() {
    if (!this._credentialListMappings) {
      this._credentialListMappings = new CredentialListMappingList(
        this._version,
        this._solution.accountSid,
        this._solution.domainSid,
      );
    }
    return this._credentialListMappings;
  },
});

/**
 * Fetch a DomainInstance
 *
 * @returns Fetched DomainInstance
 */
DomainContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return DomainInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Update the DomainInstance
 *
 * @param string [opts.apiVersion] - The api_version
 * @param string [opts.friendlyName] - A user-specified, human-readable name for the trigger.
 * @param string [opts.voiceFallbackMethod] - The voice_fallback_method
 * @param string [opts.voiceFallbackUrl] - The voice_fallback_url
 * @param string [opts.voiceMethod] - HTTP method to use with voice_url
 * @param string [opts.voiceStatusCallbackMethod] - The voice_status_callback_method
 * @param string [opts.voiceStatusCallbackUrl] - The voice_status_callback_url
 * @param string [opts.voiceUrl] - The voice_url
 *
 * @returns Updated DomainInstance
 */
DomainContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Apiversion': apiVersion,
    'Friendlyname': friendlyName,
    'Voicefallbackmethod': voiceFallbackMethod,
    'Voicefallbackurl': voiceFallbackUrl,
    'Voicemethod': voiceMethod,
    'Voicestatuscallbackmethod': voiceStatusCallbackMethod,
    'Voicestatuscallbackurl': voiceStatusCallbackUrl,
    'Voiceurl': voiceUrl,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return DomainInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Deletes the DomainInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
DomainContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

