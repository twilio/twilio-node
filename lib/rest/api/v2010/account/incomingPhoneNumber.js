'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var values = require('../../../../base/values');

var IncomingPhoneNumberList;
var IncomingPhoneNumberInstance;
var IncomingPhoneNumberContext;

/**
 * Initialize the IncomingPhoneNumberContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} ownerAccountSid: The owner_account_sid
 * @param {sid} sid: Fetch by unique incoming-phone-number Sid
 *
 * @returns {IncomingPhoneNumberContext}
 */
function IncomingPhoneNumberInstance(version, payload, ownerAccountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    addressRequirements: payload.address_requirements, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    beta: payload.beta, // jshint ignore:line,
    capabilities: payload.capabilities, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    phoneNumber: payload.phone_number, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    smsApplicationSid: payload.sms_application_sid, // jshint ignore:line,
    smsFallbackMethod: payload.sms_fallback_method, // jshint ignore:line,
    smsFallbackUrl: payload.sms_fallback_url, // jshint ignore:line,
    smsMethod: payload.sms_method, // jshint ignore:line,
    smsUrl: payload.sms_url, // jshint ignore:line,
    statusCallback: payload.status_callback, // jshint ignore:line,
    statusCallbackMethod: payload.status_callback_method, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
    voiceApplicationSid: payload.voice_application_sid, // jshint ignore:line,
    voiceCallerIdLookup: payload.voice_caller_id_lookup, // jshint ignore:line,
    voiceFallbackMethod: payload.voice_fallback_method, // jshint ignore:line,
    voiceFallbackUrl: payload.voice_fallback_url, // jshint ignore:line,
    voiceMethod: payload.voice_method, // jshint ignore:line,
    voiceUrl: payload.voice_url, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    ownerAccountSid: ownerAccountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(IncomingPhoneNumberInstance.prototype, InstanceResource.prototype);
IncomingPhoneNumberInstance.prototype.constructor = IncomingPhoneNumberInstance;

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new IncomingPhoneNumberContext(
        this._version,
        this._solution.ownerAccountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'addressRequirements', {
  get: function() {
    return this._properties.addressRequirements;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'beta', {
  get: function() {
    return this._properties.beta;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'capabilities', {
  get: function() {
    return this._properties.capabilities;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'smsApplicationSid', {
  get: function() {
    return this._properties.smsApplicationSid;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'smsFallbackMethod', {
  get: function() {
    return this._properties.smsFallbackMethod;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'smsFallbackUrl', {
  get: function() {
    return this._properties.smsFallbackUrl;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'smsMethod', {
  get: function() {
    return this._properties.smsMethod;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'smsUrl', {
  get: function() {
    return this._properties.smsUrl;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'statusCallback', {
  get: function() {
    return this._properties.statusCallback;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'statusCallbackMethod', {
  get: function() {
    return this._properties.statusCallbackMethod;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'voiceApplicationSid', {
  get: function() {
    return this._properties.voiceApplicationSid;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'voiceCallerIdLookup', {
  get: function() {
    return this._properties.voiceCallerIdLookup;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'voiceFallbackMethod', {
  get: function() {
    return this._properties.voiceFallbackMethod;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'voiceFallbackUrl', {
  get: function() {
    return this._properties.voiceFallbackUrl;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'voiceMethod', {
  get: function() {
    return this._properties.voiceMethod;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'voiceUrl', {
  get: function() {
    return this._properties.voiceUrl;
  },
});

/**
 * Update the IncomingPhoneNumberInstance
 *
 * @param string [opts.accountSid] - The new owner of the phone number
 * @param string [opts.apiVersion] - The Twilio REST API version to use
 * @param string [opts.friendlyName] -
 *          A human readable description of this resource
 * @param string [opts.smsApplicationSid] -
 *          Unique string that identifies the application
 * @param string [opts.smsFallbackMethod] - HTTP method used with sms fallback url
 * @param string [opts.smsFallbackUrl] -
 *          URL Twilio will request if an error occurs in executing TwiML
 * @param string [opts.smsMethod] - HTTP method to use with sms url
 * @param string [opts.smsUrl] - URL Twilio will request when receiving an SMS
 * @param string [opts.statusCallback] -
 *          URL Twilio will use to pass status parameters
 * @param string [opts.statusCallbackMethod] -
 *          HTTP method twilio will use with status callback
 * @param string [opts.voiceApplicationSid] -
 *          The unique sid of the application to handle this number
 * @param string [opts.voiceCallerIdLookup] - Look up the caller's caller-ID
 * @param string [opts.voiceFallbackMethod] - HTTP method used with fallback_url
 * @param string [opts.voiceFallbackUrl] -
 *          URL Twilio will request when an error occurs in TwiML
 * @param string [opts.voiceMethod] - HTTP method used with the voice url
 * @param string [opts.voiceUrl] - URL Twilio will request when receiving a call
 *
 * @returns Updated IncomingPhoneNumberInstance
 */
IncomingPhoneNumberInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Fetch a IncomingPhoneNumberInstance
 *
 * @returns Fetched IncomingPhoneNumberInstance
 */
IncomingPhoneNumberInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Deletes the IncomingPhoneNumberInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
IncomingPhoneNumberInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};


/**
 * Initialize the IncomingPhoneNumberContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} ownerAccountSid - The owner_account_sid
 * @param {sid} sid - Fetch by unique incoming-phone-number Sid
 *
 * @returns {IncomingPhoneNumberContext}
 */
function IncomingPhoneNumberContext(version, ownerAccountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    ownerAccountSid: ownerAccountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<% owner_account_sid %>/IncomingPhoneNumbers/<% sid %>.json', // jshint ignore:line
    this._solution
  );
}

_.extend(IncomingPhoneNumberContext.prototype, InstanceContext.prototype);
IncomingPhoneNumberContext.prototype.constructor = IncomingPhoneNumberContext;

/**
 * Update the IncomingPhoneNumberInstance
 *
 * @param string [opts.accountSid] - The new owner of the phone number
 * @param string [opts.apiVersion] - The Twilio REST API version to use
 * @param string [opts.friendlyName] -
 *          A human readable description of this resource
 * @param string [opts.smsApplicationSid] -
 *          Unique string that identifies the application
 * @param string [opts.smsFallbackMethod] - HTTP method used with sms fallback url
 * @param string [opts.smsFallbackUrl] -
 *          URL Twilio will request if an error occurs in executing TwiML
 * @param string [opts.smsMethod] - HTTP method to use with sms url
 * @param string [opts.smsUrl] - URL Twilio will request when receiving an SMS
 * @param string [opts.statusCallback] -
 *          URL Twilio will use to pass status parameters
 * @param string [opts.statusCallbackMethod] -
 *          HTTP method twilio will use with status callback
 * @param string [opts.voiceApplicationSid] -
 *          The unique sid of the application to handle this number
 * @param string [opts.voiceCallerIdLookup] - Look up the caller's caller-ID
 * @param string [opts.voiceFallbackMethod] - HTTP method used with fallback_url
 * @param string [opts.voiceFallbackUrl] -
 *          URL Twilio will request when an error occurs in TwiML
 * @param string [opts.voiceMethod] - HTTP method used with the voice url
 * @param string [opts.voiceUrl] - URL Twilio will request when receiving a call
 *
 * @returns Updated IncomingPhoneNumberInstance
 */
IncomingPhoneNumberContext.prototype.update = function update(opts) {
  var data = values.of({
    'Accountsid': opts.accountSid,
    'Apiversion': opts.apiVersion,
    'Friendlyname': opts.friendlyName,
    'Smsapplicationsid': opts.smsApplicationSid,
    'Smsfallbackmethod': opts.smsFallbackMethod,
    'Smsfallbackurl': opts.smsFallbackUrl,
    'Smsmethod': opts.smsMethod,
    'Smsurl': opts.smsUrl,
    'Statuscallback': opts.statusCallback,
    'Statuscallbackmethod': opts.statusCallbackMethod,
    'Voiceapplicationsid': opts.voiceApplicationSid,
    'Voicecalleridlookup': opts.voiceCallerIdLookup,
    'Voicefallbackmethod': opts.voiceFallbackMethod,
    'Voicefallbackurl': opts.voiceFallbackUrl,
    'Voicemethod': opts.voiceMethod,
    'Voiceurl': opts.voiceUrl,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  return new IncomingPhoneNumberInstance(
    this._version,
    payload,
    this._solution.ownerAccountSid,
    this._solution.sid
  );
};

/**
 * Fetch a IncomingPhoneNumberInstance
 *
 * @returns Fetched IncomingPhoneNumberInstance
 */
IncomingPhoneNumberContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new IncomingPhoneNumberInstance(
    this._version,
    payload,
    this._solution.ownerAccountSid,
    this._solution.sid
  );
};

/**
 * Deletes the IncomingPhoneNumberInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
IncomingPhoneNumberContext.prototype.remove = function remove() {
  return this._version.remove(this._uri);
};

module.exports = {
  IncomingPhoneNumberList: IncomingPhoneNumberList,
  IncomingPhoneNumberInstance: IncomingPhoneNumberInstance,
  IncomingPhoneNumberContext: IncomingPhoneNumberContext
};
