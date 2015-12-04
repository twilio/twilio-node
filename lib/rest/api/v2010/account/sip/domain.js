'use strict';

var _ = require('lodash');
var CredentialListMappingList = require('./domain/credentialListMapping');
var Instance = require('../../../../../base');
var InstanceContext = require('../../../../../base/InstanceContext');
var IpAccessControlListMappingList = require(
    './domain/ipAccessControlListMapping');
var values = require('../../../../../base/values');

var DomainInstance;
var DomainContext;

function DomainInstance() {
}

Object.defineProperty(DomainInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new DomainContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'authType', {
  get: function() {
    return this._properties.authType;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'domainName', {
  get: function() {
    return this._properties.domainName;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'voiceFallbackMethod', {
  get: function() {
    return this._properties.voiceFallbackMethod;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'voiceFallbackUrl', {
  get: function() {
    return this._properties.voiceFallbackUrl;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'voiceMethod', {
  get: function() {
    return this._properties.voiceMethod;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'voiceStatusCallbackMethod', {
  get: function() {
    return this._properties.voiceStatusCallbackMethod;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'voiceStatusCallbackUrl', {
  get: function() {
    return this._properties.voiceStatusCallbackUrl;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'voiceUrl', {
  get: function() {
    return this._properties.voiceUrl;
  },
});

/**
 * Initialize the DomainContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique Domain Sid
 *
 * @returns {DomainContext}
 */
DomainInstance.prototype.DomainInstance = function DomainInstance(version,
    payload, accountSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    authType: payload.auth_type, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    domainName: payload.domain_name, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
    voiceFallbackMethod: payload.voice_fallback_method, // jshint ignore:line,
    voiceFallbackUrl: payload.voice_fallback_url, // jshint ignore:line,
    voiceMethod: payload.voice_method, // jshint ignore:line,
    voiceStatusCallbackMethod: payload.voice_status_callback_method, // jshint ignore:line,
    voiceStatusCallbackUrl: payload.voice_status_callback_url, // jshint ignore:line,
    voiceUrl: payload.voice_url, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a DomainInstance
 *
 * @returns Fetched DomainInstance
 */
DomainInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the DomainInstance
 *
 * @param string [opts.apiVersion] - The api_version
 * @param string [opts.friendlyName] -
 *          A user-specified, human-readable name for the trigger.
 * @param string [opts.voiceFallbackMethod] - The voice_fallback_method
 * @param string [opts.voiceFallbackUrl] - The voice_fallback_url
 * @param string [opts.voiceMethod] - HTTP method to use with voice_url
 * @param string [opts.voiceStatusCallbackMethod] -
 *          The voice_status_callback_method
 * @param string [opts.voiceStatusCallbackUrl] - The voice_status_callback_url
 * @param string [opts.voiceUrl] - The voice_url
 *
 * @returns Updated DomainInstance
 */
DomainInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Deletes the DomainInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
DomainInstance.prototype.delete = function delete() {
  return this._proxy.delete();
};

/**
 * Access the ipAccessControlListMappings
 *
 * @returns ipAccessControlListMappings
 */
DomainInstance.prototype.ipAccessControlListMappings = function
    ipAccessControlListMappings() {
  return this._proxy.ipAccessControlListMappings;
};

/**
 * Access the credentialListMappings
 *
 * @returns credentialListMappings
 */
DomainInstance.prototype.credentialListMappings = function
    credentialListMappings() {
  return this._proxy.credentialListMappings;
};


/**
 * Initialize the DomainContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique Domain Sid
 *
 * @returns {DomainContext}
 */
function DomainContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<% account_sid %>/SIP/Domains/<% sid %>.json', // jshint ignore:line
    this._solution
  );

  // Dependents
  this._ipAccessControlListMappings = undefined;
  this._credentialListMappings = undefined;
}

Object.defineProperty(DomainContext.prototype,
  'ipAccessControlListMappings', {
  get: function() {
    if (!this._ipAccessControlListMappings) {
      this._ipAccessControlListMappings = new IpAccessControlListMappingList(
        this._version,
        this._solution.accountSid,
        this._solution.domainSid
      );
    }
    return this._ipAccessControlListMappings;
  },
});

Object.defineProperty(DomainContext.prototype,
  'credentialListMappings', {
  get: function() {
    if (!this._credentialListMappings) {
      this._credentialListMappings = new CredentialListMappingList(
        this._version,
        this._solution.accountSid,
        this._solution.domainSid
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
DomainContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new DomainInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};

/**
 * Update the DomainInstance
 *
 * @param string [opts.apiVersion] - The api_version
 * @param string [opts.friendlyName] -
 *          A user-specified, human-readable name for the trigger.
 * @param string [opts.voiceFallbackMethod] - The voice_fallback_method
 * @param string [opts.voiceFallbackUrl] - The voice_fallback_url
 * @param string [opts.voiceMethod] - HTTP method to use with voice_url
 * @param string [opts.voiceStatusCallbackMethod] -
 *          The voice_status_callback_method
 * @param string [opts.voiceStatusCallbackUrl] - The voice_status_callback_url
 * @param string [opts.voiceUrl] - The voice_url
 *
 * @returns Updated DomainInstance
 */
DomainContext.prototype.update = function update(opts) {
  var data = values.of({
    'Apiversion': opts.apiVersion,
    'Friendlyname': opts.friendlyName,
    'Voicefallbackmethod': opts.voiceFallbackMethod,
    'Voicefallbackurl': opts.voiceFallbackUrl,
    'Voicemethod': opts.voiceMethod,
    'Voicestatuscallbackmethod': opts.voiceStatusCallbackMethod,
    'Voicestatuscallbackurl': opts.voiceStatusCallbackUrl,
    'Voiceurl': opts.voiceUrl,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  return new DomainInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};

/**
 * Deletes the DomainInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
DomainContext.prototype.delete = function delete() {
  return this._version.delete('delete', this._uri);
};

module.exports = {
  DomainInstance: DomainInstance,
  DomainContext: DomainContext
};
