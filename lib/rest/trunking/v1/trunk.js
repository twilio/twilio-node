'use strict';

var CredentialListList = require('./trunk/credentialList');
var InstanceContext = require('../../../base/InstanceContext');
var IpAccessControlListList = require('./trunk/ipAccessControlList');
var OriginationUrlList = require('./trunk/originationUrl');
var PhoneNumberList = require('./trunk/phoneNumber');
var values = require('../../../base/values');

/**
 * Initialize the TrunkContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} sid: The sid
 *
 * @returns {class_name}
 */
function TrunkContext(version, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    sid: sid,
  };
  this._uri = _.template('/Trunks/<% sid %>', this._solution);

  // Dependents
  this._originationUrls = undefined;
  this._credentialsLists = undefined;
  this._ipAccessControlLists = undefined;
  this._phoneNumbers = undefined;
}

Object.defineProperty(TrunkContext.prototype, 'originationUrls', {
  get: function() {
    if (!this._originationUrls) {
      this._originationUrls = new OriginationUrlList(
        this._version,
        this._solution.trunkSid,
      );
    }
    return this._originationUrls;
  },
});

Object.defineProperty(TrunkContext.prototype, 'credentialsLists', {
  get: function() {
    if (!this._credentialsLists) {
      this._credentialsLists = new CredentialListList(
        this._version,
        this._solution.trunkSid,
      );
    }
    return this._credentialsLists;
  },
});

Object.defineProperty(TrunkContext.prototype, 'ipAccessControlLists', {
  get: function() {
    if (!this._ipAccessControlLists) {
      this._ipAccessControlLists = new IpAccessControlListList(
        this._version,
        this._solution.trunkSid,
      );
    }
    return this._ipAccessControlLists;
  },
});

Object.defineProperty(TrunkContext.prototype, 'phoneNumbers', {
  get: function() {
    if (!this._phoneNumbers) {
      this._phoneNumbers = new PhoneNumberList(
        this._version,
        this._solution.trunkSid,
      );
    }
    return this._phoneNumbers;
  },
});

/**
 * Fetch a TrunkInstance
 *
 * @returns Fetched TrunkInstance
 */
TrunkContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return TrunkInstance(
    this._version,
    payload,
    sid=self._solution['sid'],
  );
};

/**
 * Deletes the TrunkInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
TrunkContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

/**
 * Update the TrunkInstance
 *
 * @param string [opts.friendlyName] - The friendly_name
 * @param string [opts.domainName] - The domain_name
 * @param string [opts.disasterRecoveryUrl] - The disaster_recovery_url
 * @param string [opts.disasterRecoveryMethod] - The disaster_recovery_method
 * @param string [opts.recording] - The recording
 * @param string [opts.secure] - The secure
 *
 * @returns Updated TrunkInstance
 */
TrunkContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Friendlyname': friendlyName,
    'Domainname': domainName,
    'Disasterrecoveryurl': disasterRecoveryUrl,
    'Disasterrecoverymethod': disasterRecoveryMethod,
    'Recording': recording,
    'Secure': secure,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return TrunkInstance(
    this._version,
    payload,
    sid=self._solution['sid'],
  );
};

