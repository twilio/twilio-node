'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var SandboxList;
var SandboxInstance;
var SandboxContext;

/**
 * Initialize the SandboxList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The account_sid
 *
 * @returns SandboxList
 */
function SandboxList(version, accountSid) {
  function SandboxListInstance(sid) {
    return SandboxListInstance.get(sid);
  }

  SandboxListInstance._version = version;
  // Path Solution
  SandboxListInstance._solution = {
    accountSid: accountSid
  };
  /**
   * Constructs a SandboxContext
   *
   * @returns SandboxContext
   */
  SandboxListInstance.get = function get() {
    return new SandboxContext(
      this._version,
      this._solution.accountSid
    );
  };

  return SandboxListInstance;
}


/**
 * Initialize the SandboxContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 *
 * @returns {SandboxContext}
 */
function SandboxInstance(version, payload, accountSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    pin: payload.pin, // jshint ignore:line,
    accountSid: payload.account_sid, // jshint ignore:line,
    phoneNumber: payload.phone_number, // jshint ignore:line,
    applicationSid: payload.application_sid, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    voiceUrl: payload.voice_url, // jshint ignore:line,
    voiceMethod: payload.voice_method, // jshint ignore:line,
    smsUrl: payload.sms_url, // jshint ignore:line,
    smsMethod: payload.sms_method, // jshint ignore:line,
    statusCallback: payload.status_callback, // jshint ignore:line,
    statusCallbackMethod: payload.status_callback_method, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
  };
}

_.extend(SandboxInstance.prototype, InstanceResource.prototype);
SandboxInstance.prototype.constructor = SandboxInstance;

Object.defineProperty(SandboxInstance.prototype,
  '_proxy', {
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

Object.defineProperty(SandboxInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(SandboxInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(SandboxInstance.prototype,
  'pin', {
  get: function() {
    return this._properties.pin;
  },
});

Object.defineProperty(SandboxInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(SandboxInstance.prototype,
  'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(SandboxInstance.prototype,
  'applicationSid', {
  get: function() {
    return this._properties.applicationSid;
  },
});

Object.defineProperty(SandboxInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(SandboxInstance.prototype,
  'voiceUrl', {
  get: function() {
    return this._properties.voiceUrl;
  },
});

Object.defineProperty(SandboxInstance.prototype,
  'voiceMethod', {
  get: function() {
    return this._properties.voiceMethod;
  },
});

Object.defineProperty(SandboxInstance.prototype,
  'smsUrl', {
  get: function() {
    return this._properties.smsUrl;
  },
});

Object.defineProperty(SandboxInstance.prototype,
  'smsMethod', {
  get: function() {
    return this._properties.smsMethod;
  },
});

Object.defineProperty(SandboxInstance.prototype,
  'statusCallback', {
  get: function() {
    return this._properties.statusCallback;
  },
});

Object.defineProperty(SandboxInstance.prototype,
  'statusCallbackMethod', {
  get: function() {
    return this._properties.statusCallbackMethod;
  },
});

Object.defineProperty(SandboxInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a SandboxInstance
 *
 * @returns Fetched SandboxInstance
 */
SandboxInstance.prototype.fetch = function fetch() {
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
SandboxInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};


/**
 * Initialize the SandboxContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 *
 * @returns {SandboxContext}
 */
function SandboxContext(version, accountSid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Sandbox.json' // jshint ignore:line
  )(this._solution);
}

_.extend(SandboxContext.prototype, InstanceContext.prototype);
SandboxContext.prototype.constructor = SandboxContext;

/**
 * Fetch a SandboxInstance
 *
 * @returns Fetched SandboxInstance
 */
SandboxContext.prototype.fetch = function fetch() {
  var version = this._version;
  var solution = this._solution;
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new SandboxInstance(
      version,
      payload,
      solution.accountSid
    );
  });

  return promise;
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
SandboxContext.prototype.update = function update(opts) {
  var data = values.of({
    'VoiceUrl': opts.voiceUrl || values.unset,
    'VoiceMethod': opts.voiceMethod || values.unset,
    'SmsUrl': opts.smsUrl || values.unset,
    'SmsMethod': opts.smsMethod || values.unset,
    'StatusCallback': opts.statusCallback || values.unset,
    'StatusCallbackMethod': opts.statusCallbackMethod || values.unset,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  return new SandboxInstance(
    this._version,
    payload,
    solution.accountSid
  );
};

module.exports = {
  SandboxList: SandboxList,
  SandboxInstance: SandboxInstance,
  SandboxContext: SandboxContext
};
