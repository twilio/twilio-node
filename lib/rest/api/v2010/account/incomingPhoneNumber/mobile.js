'use strict';

var Instance = require('../../../../../base');

function MobileInstance() {
}

Object.defineProperty(MobileInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(MobileInstance.prototype, 'addressRequirements', {
  get: function() {
    return this._properties.addressRequirements;
  },
});

Object.defineProperty(MobileInstance.prototype, 'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(MobileInstance.prototype, 'beta', {
  get: function() {
    return this._properties.beta;
  },
});

Object.defineProperty(MobileInstance.prototype, 'capabilities', {
  get: function() {
    return this._properties.capabilities;
  },
});

Object.defineProperty(MobileInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(MobileInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(MobileInstance.prototype, 'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(MobileInstance.prototype, 'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(MobileInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(MobileInstance.prototype, 'smsApplicationSid', {
  get: function() {
    return this._properties.smsApplicationSid;
  },
});

Object.defineProperty(MobileInstance.prototype, 'smsFallbackMethod', {
  get: function() {
    return this._properties.smsFallbackMethod;
  },
});

Object.defineProperty(MobileInstance.prototype, 'smsFallbackUrl', {
  get: function() {
    return this._properties.smsFallbackUrl;
  },
});

Object.defineProperty(MobileInstance.prototype, 'smsMethod', {
  get: function() {
    return this._properties.smsMethod;
  },
});

Object.defineProperty(MobileInstance.prototype, 'smsUrl', {
  get: function() {
    return this._properties.smsUrl;
  },
});

Object.defineProperty(MobileInstance.prototype, 'statusCallback', {
  get: function() {
    return this._properties.statusCallback;
  },
});

Object.defineProperty(MobileInstance.prototype, 'statusCallbackMethod', {
  get: function() {
    return this._properties.statusCallbackMethod;
  },
});

Object.defineProperty(MobileInstance.prototype, 'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(MobileInstance.prototype, 'voiceApplicationSid', {
  get: function() {
    return this._properties.voiceApplicationSid;
  },
});

Object.defineProperty(MobileInstance.prototype, 'voiceCallerIdLookup', {
  get: function() {
    return this._properties.voiceCallerIdLookup;
  },
});

Object.defineProperty(MobileInstance.prototype, 'voiceFallbackMethod', {
  get: function() {
    return this._properties.voiceFallbackMethod;
  },
});

Object.defineProperty(MobileInstance.prototype, 'voiceFallbackUrl', {
  get: function() {
    return this._properties.voiceFallbackUrl;
  },
});

Object.defineProperty(MobileInstance.prototype, 'voiceMethod', {
  get: function() {
    return this._properties.voiceMethod;
  },
});

Object.defineProperty(MobileInstance.prototype, 'voiceUrl', {
  get: function() {
    return this._properties.voiceUrl;
  },
});

/**
 * Initialize the MobileContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {MobileContext}
 */
MobileInstance.prototype.MobileInstance = function MobileInstance(version,
    payload, ownerAccountSid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid,
      addressRequirements: payload.address_requirements,
      apiVersion: payload.api_version,
      beta: payload.beta,
      capabilities: payload.capabilities,
      dateCreated: payload.date_created,
      dateUpdated: payload.date_updated,
      friendlyName: payload.friendly_name,
      phoneNumber: payload.phone_number,
      sid: payload.sid,
      smsApplicationSid: payload.sms_application_sid,
      smsFallbackMethod: payload.sms_fallback_method,
      smsFallbackUrl: payload.sms_fallback_url,
      smsMethod: payload.sms_method,
      smsUrl: payload.sms_url,
      statusCallback: payload.status_callback,
      statusCallbackMethod: payload.status_callback_method,
      uri: payload.uri,
      voiceApplicationSid: payload.voice_application_sid,
      voiceCallerIdLookup: payload.voice_caller_id_lookup,
      voiceFallbackMethod: payload.voice_fallback_method,
      voiceFallbackUrl: payload.voice_fallback_url,
      voiceMethod: payload.voice_method,
      voiceUrl: payload.voice_url,
  };

  // Context
  this._context = None;
  this._solution = {
    ownerAccountSid: ownerAccountSid,
  };
};

