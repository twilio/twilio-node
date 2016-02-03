'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var deserialize = require('../../../../base/deserialize');
var values = require('../../../../base/values');

var SandboxPage;
var SandboxList;
var SandboxInstance;
var SandboxContext;

/**
 * @constructor
 * @augments Page
 * @description Initialize the SandboxPage
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} response - Response from the API
 * @param {string} accountSid - The account_sid
 *
 * @returns SandboxPage
 */
function SandboxPage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(SandboxPage.prototype, Page.prototype);
SandboxPage.prototype.constructor = SandboxPage;

/**
 * Build an instance of SandboxInstance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns SandboxInstance
 */
SandboxPage.prototype.getInstance = function getInstance(payload) {
  return new SandboxInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * @constructor
 * @description Initialize the SandboxList
 *
 * @param {V2010} version - Version that contains the resource
 * @param {string} accountSid - The account_sid
 *
 * @returns {function} - SandboxListInstance
 */
function SandboxList(version, accountSid) {
  /**
   * @memberof SandboxList
   *
   * @param {string} sid - sid of instance
   *
   * @returns SandboxContext
   */
  function SandboxListInstance(sid) {
    return SandboxListInstance.get(sid);
  }

  SandboxListInstance._version = version;
  // Path Solution
  SandboxListInstance._solution = {
    accountSid: accountSid
  };
  /**
   * @memberof SandboxList
   *
   * @description Constructs a SandboxContext
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
 * @constructor
 * @augments InstanceResource
 * @description Initialize the SandboxContext
 *
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {number} pin - The pin
 * @property {string} accountSid - The account_sid
 * @property {string} phoneNumber - The phone_number
 * @property {string} applicationSid - The application_sid
 * @property {string} apiVersion - The api_version
 * @property {string} voiceUrl - The voice_url
 * @property {string} voiceMethod - The voice_method
 * @property {string} smsUrl - The sms_url
 * @property {string} smsMethod - The sms_method
 * @property {string} statusCallback - The status_callback
 * @property {string} statusCallbackMethod - The status_callback_method
 * @property {string} uri - The uri
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 */
function SandboxInstance(version, payload, accountSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    dateCreated: deserialize.rfc2822DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.rfc2822DateTime(payload.date_updated), // jshint ignore:line,
    pin: deserialize.integer(payload.pin), // jshint ignore:line,
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
 * @description Fetch a SandboxInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched SandboxInstance
 */
SandboxInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new SandboxInstance(
      this._version,
      payload,
      this._solution.accountSid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/**
 * @description Update the SandboxInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.voiceUrl] - The voice_url
 * @param {string} [opts.voiceMethod] - The voice_method
 * @param {string} [opts.smsUrl] - The sms_url
 * @param {string} [opts.smsMethod] - The sms_method
 * @param {string} [opts.statusCallback] - The status_callback
 * @param {string} [opts.statusCallbackMethod] - The status_callback_method
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated SandboxInstance
 */
SandboxInstance.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'VoiceUrl': opts.voiceUrl,
    'VoiceMethod': opts.voiceMethod,
    'SmsUrl': opts.smsUrl,
    'SmsMethod': opts.smsMethod,
    'StatusCallback': opts.statusCallback,
    'StatusCallbackMethod': opts.statusCallbackMethod
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new SandboxInstance(
      this._version,
      payload,
      this._solution.accountSid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};


/**
 * @constructor
 * @augments InstanceContext
 * @description Initialize the SandboxContext
 *
 * @param {V2010} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
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
 * @description Fetch a SandboxInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched SandboxInstance
 */
SandboxContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new SandboxInstance(
      this._version,
      payload,
      this._solution.accountSid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/**
 * @description Update the SandboxInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.voiceUrl] - The voice_url
 * @param {string} [opts.voiceMethod] - The voice_method
 * @param {string} [opts.smsUrl] - The sms_url
 * @param {string} [opts.smsMethod] - The sms_method
 * @param {string} [opts.statusCallback] - The status_callback
 * @param {string} [opts.statusCallbackMethod] - The status_callback_method
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated SandboxInstance
 */
SandboxContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'VoiceUrl': opts.voiceUrl,
    'VoiceMethod': opts.voiceMethod,
    'SmsUrl': opts.smsUrl,
    'SmsMethod': opts.smsMethod,
    'StatusCallback': opts.statusCallback,
    'StatusCallbackMethod': opts.statusCallbackMethod
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new SandboxInstance(
      this._version,
      payload,
      this._solution.accountSid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

module.exports = {
  SandboxPage: SandboxPage,
  SandboxList: SandboxList,
  SandboxInstance: SandboxInstance,
  SandboxContext: SandboxContext
};
