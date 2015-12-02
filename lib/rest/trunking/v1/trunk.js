'use strict';

var _ = require('lodash');
var CredentialListList = require('./trunk/credentialList');
var Instance = require('../../../base');
var InstanceContext = require('../../../base/InstanceContext');
var IpAccessControlListList = require('./trunk/ipAccessControlList');
var OriginationUrlList = require('./trunk/originationUrl');
var PhoneNumberList = require('./trunk/phoneNumber');
var values = require('../../../base/values');

/**
 * Initialize the TrunkContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} sid - The sid
 *
 * @returns {TrunkContext}
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
        this._solution.trunkSid
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
        this._solution.trunkSid
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
        this._solution.trunkSid
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
        this._solution.trunkSid
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

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new TrunkInstance(
    this._version,
    payload,
    this._solution.sid,
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
    'Friendlyname': opts.friendlyName,
    'Domainname': opts.domainName,
    'Disasterrecoveryurl': opts.disasterRecoveryUrl,
    'Disasterrecoverymethod': opts.disasterRecoveryMethod,
    'Recording': opts.recording,
    'Secure': opts.secure,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return new TrunkInstance(
    this._version,
    payload,
    this._solution.sid
  );
};


function TrunkInstance() {
}

Object.defineProperty(TrunkInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new TrunkContext(
        this._version,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(TrunkInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(TrunkInstance.prototype, 'domainName', {
  get: function() {
    return this._properties.domainName;
  },
});

Object.defineProperty(TrunkInstance.prototype, 'disasterRecoveryMethod', {
  get: function() {
    return this._properties.disasterRecoveryMethod;
  },
});

Object.defineProperty(TrunkInstance.prototype, 'disasterRecoveryUrl', {
  get: function() {
    return this._properties.disasterRecoveryUrl;
  },
});

Object.defineProperty(TrunkInstance.prototype, 'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(TrunkInstance.prototype, 'secure', {
  get: function() {
    return this._properties.secure;
  },
});

Object.defineProperty(TrunkInstance.prototype, 'recording', {
  get: function() {
    return this._properties.recording;
  },
});

Object.defineProperty(TrunkInstance.prototype, 'authType', {
  get: function() {
    return this._properties.authType;
  },
});

Object.defineProperty(TrunkInstance.prototype, 'authTypeSet', {
  get: function() {
    return this._properties.authTypeSet;
  },
});

Object.defineProperty(TrunkInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(TrunkInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(TrunkInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(TrunkInstance.prototype, 'url', {
  get: function() {
    return this._properties.url;
  },
});

Object.defineProperty(TrunkInstance.prototype, 'links', {
  get: function() {
    return this._properties.links;
  },
});

/**
 * Initialize the TrunkContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid: The sid
 *
 * @returns {TrunkContext}
 */
TrunkInstance.prototype.TrunkInstance = function TrunkInstance(version, payload,
    sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid,
      domainName: payload.domain_name,
      disasterRecoveryMethod: payload.disaster_recovery_method,
      disasterRecoveryUrl: payload.disaster_recovery_url,
      friendlyName: payload.friendly_name,
      secure: payload.secure,
      recording: payload.recording,
      authType: payload.auth_type,
      authTypeSet: payload.auth_type_set,
      dateCreated: payload.date_created,
      dateUpdated: payload.date_updated,
      sid: payload.sid,
      url: payload.url,
      links: payload.links,
  };

  // Context
  this._context = None;
  this._solution = {
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a TrunkInstance
 *
 * @returns Fetched TrunkInstance
 */
TrunkInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

/**
 * Deletes the TrunkInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
TrunkInstance.prototype.delete = function delete(self) {
  return this._proxy.delete();
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
TrunkInstance.prototype.update = function update(self, opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Access the originationUrls
 *
 * @returns originationUrls
 */
TrunkInstance.prototype.originationUrls = function originationUrls() {
  return this._proxy.originationUrls;
};

/**
 * Access the credentialsLists
 *
 * @returns credentialsLists
 */
TrunkInstance.prototype.credentialsLists = function credentialsLists() {
  return this._proxy.credentialsLists;
};

/**
 * Access the ipAccessControlLists
 *
 * @returns ipAccessControlLists
 */
TrunkInstance.prototype.ipAccessControlLists = function ipAccessControlLists() {
  return this._proxy.ipAccessControlLists;
};

/**
 * Access the phoneNumbers
 *
 * @returns phoneNumbers
 */
TrunkInstance.prototype.phoneNumbers = function phoneNumbers() {
  return this._proxy.phoneNumbers;
};

