'use strict';

var Instance = require('../../../../../base');

function LocalInstance() {
}

Object.defineProperty(LocalInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(LocalInstance.prototype, 'addressRequirements', {
  get: function() {
    return this._properties.addressRequirements;
  },
});

Object.defineProperty(LocalInstance.prototype, 'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(LocalInstance.prototype, 'beta', {
  get: function() {
    return this._properties.beta;
  },
});

Object.defineProperty(LocalInstance.prototype, 'capabilities', {
  get: function() {
    return this._properties.capabilities;
  },
});

Object.defineProperty(LocalInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(LocalInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(LocalInstance.prototype, 'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(LocalInstance.prototype, 'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(LocalInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(LocalInstance.prototype, 'smsApplicationSid', {
  get: function() {
    return this._properties.smsApplicationSid;
  },
});

Object.defineProperty(LocalInstance.prototype, 'smsFallbackMethod', {
  get: function() {
    return this._properties.smsFallbackMethod;
  },
});

Object.defineProperty(LocalInstance.prototype, 'smsFallbackUrl', {
  get: function() {
    return this._properties.smsFallbackUrl;
  },
});

Object.defineProperty(LocalInstance.prototype, 'smsMethod', {
  get: function() {
    return this._properties.smsMethod;
  },
});

Object.defineProperty(LocalInstance.prototype, 'smsUrl', {
  get: function() {
    return this._properties.smsUrl;
  },
});

Object.defineProperty(LocalInstance.prototype, 'statusCallback', {
  get: function() {
    return this._properties.statusCallback;
  },
});

Object.defineProperty(LocalInstance.prototype, 'statusCallbackMethod', {
  get: function() {
    return this._properties.statusCallbackMethod;
  },
});

Object.defineProperty(LocalInstance.prototype, 'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(LocalInstance.prototype, 'voiceApplicationSid', {
  get: function() {
    return this._properties.voiceApplicationSid;
  },
});

Object.defineProperty(LocalInstance.prototype, 'voiceCallerIdLookup', {
  get: function() {
    return this._properties.voiceCallerIdLookup;
  },
});

Object.defineProperty(LocalInstance.prototype, 'voiceFallbackMethod', {
  get: function() {
    return this._properties.voiceFallbackMethod;
  },
});

Object.defineProperty(LocalInstance.prototype, 'voiceFallbackUrl', {
  get: function() {
    return this._properties.voiceFallbackUrl;
  },
});

Object.defineProperty(LocalInstance.prototype, 'voiceMethod', {
  get: function() {
    return this._properties.voiceMethod;
  },
});

Object.defineProperty(LocalInstance.prototype, 'voiceUrl', {
  get: function() {
    return this._properties.voiceUrl;
  },
});

/**
 * Initialize the LocalContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {LocalContext}
 */
LocalInstance.prototype.LocalInstance = function LocalInstance(version, payload,
    ownerAccountSid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid // jshint ignore:line,
      addressRequirements: payload.address_requirements // jshint ignore:line,
      apiVersion: payload.api_version // jshint ignore:line,
      beta: payload.beta // jshint ignore:line,
      capabilities: payload.capabilities // jshint ignore:line,
      dateCreated: payload.date_created // jshint ignore:line,
      dateUpdated: payload.date_updated // jshint ignore:line,
      friendlyName: payload.friendly_name // jshint ignore:line,
      phoneNumber: payload.phone_number // jshint ignore:line,
      sid: payload.sid // jshint ignore:line,
      smsApplicationSid: payload.sms_application_sid // jshint ignore:line,
      smsFallbackMethod: payload.sms_fallback_method // jshint ignore:line,
      smsFallbackUrl: payload.sms_fallback_url // jshint ignore:line,
      smsMethod: payload.sms_method // jshint ignore:line,
      smsUrl: payload.sms_url // jshint ignore:line,
      statusCallback: payload.status_callback // jshint ignore:line,
      statusCallbackMethod: payload.status_callback_method // jshint ignore:line,
      uri: payload.uri // jshint ignore:line,
      voiceApplicationSid: payload.voice_application_sid // jshint ignore:line,
      voiceCallerIdLookup: payload.voice_caller_id_lookup // jshint ignore:line,
      voiceFallbackMethod: payload.voice_fallback_method // jshint ignore:line,
      voiceFallbackUrl: payload.voice_fallback_url // jshint ignore:line,
      voiceMethod: payload.voice_method // jshint ignore:line,
      voiceUrl: payload.voice_url // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    ownerAccountSid: ownerAccountSid,
  };
};

