'use strict';

var _ = require('lodash');
var Instance = require('../../../../base');
var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the SandboxContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 *
 * @returns {SandboxContext}
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

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new SandboxInstance(
    this._version,
    payload,
    this._solution.accountSid,
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
    'Voiceurl': opts.voiceUrl,
    'Voicemethod': opts.voiceMethod,
    'Smsurl': opts.smsUrl,
    'Smsmethod': opts.smsMethod,
    'Statuscallback': opts.statusCallback,
    'Statuscallbackmethod': opts.statusCallbackMethod,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return new SandboxInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


function SandboxInstance() {
}

Object.defineProperty(SandboxInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new SandboxContext(
        this._version,
        this._solution.accountSid
      );
    }

    return this._context;
  },
});

Object.defineProperty(SandboxInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(SandboxInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(SandboxInstance.prototype, 'pin', {
  get: function() {
    return this._properties.pin;
  },
});

Object.defineProperty(SandboxInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(SandboxInstance.prototype, 'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(SandboxInstance.prototype, 'applicationSid', {
  get: function() {
    return this._properties.applicationSid;
  },
});

Object.defineProperty(SandboxInstance.prototype, 'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(SandboxInstance.prototype, 'voiceUrl', {
  get: function() {
    return this._properties.voiceUrl;
  },
});

Object.defineProperty(SandboxInstance.prototype, 'voiceMethod', {
  get: function() {
    return this._properties.voiceMethod;
  },
});

Object.defineProperty(SandboxInstance.prototype, 'smsUrl', {
  get: function() {
    return this._properties.smsUrl;
  },
});

Object.defineProperty(SandboxInstance.prototype, 'smsMethod', {
  get: function() {
    return this._properties.smsMethod;
  },
});

Object.defineProperty(SandboxInstance.prototype, 'statusCallback', {
  get: function() {
    return this._properties.statusCallback;
  },
});

Object.defineProperty(SandboxInstance.prototype, 'statusCallbackMethod', {
  get: function() {
    return this._properties.statusCallbackMethod;
  },
});

Object.defineProperty(SandboxInstance.prototype, 'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Initialize the SandboxContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 *
 * @returns {SandboxContext}
 */
SandboxInstance.prototype.SandboxInstance = function SandboxInstance(version,
    payload, accountSid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      dateCreated: payload.date_created,
      dateUpdated: payload.date_updated,
      pin: payload.pin,
      accountSid: payload.account_sid,
      phoneNumber: payload.phone_number,
      applicationSid: payload.application_sid,
      apiVersion: payload.api_version,
      voiceUrl: payload.voice_url,
      voiceMethod: payload.voice_method,
      smsUrl: payload.sms_url,
      smsMethod: payload.sms_method,
      statusCallback: payload.status_callback,
      statusCallbackMethod: payload.status_callback_method,
      uri: payload.uri,
  };

  // Context
  this._context = None;
  this._solution = {
    accountSid: accountSid,
  };
};

/**
 * Fetch a SandboxInstance
 *
 * @returns Fetched SandboxInstance
 */
SandboxInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
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
SandboxInstance.prototype.update = function update(self, opts) {
  return this._proxy.update(
    opts
  );
};

