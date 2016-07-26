'use strict';

var _ = require('lodash');
var Q = require('q');
var Page = require('../../../../base/Page');
var deserialize = require('../../../../base/deserialize');
var values = require('../../../../base/values');

var SandboxPage;
var SandboxList;
var SandboxInstance;
var SandboxContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SandboxPage
 * @augments Page
 * @description Initialize the SandboxPage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns SandboxPage
 */
/* jshint ignore:end */
function SandboxPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
}

_.extend(SandboxPage.prototype, Page.prototype);
SandboxPage.prototype.constructor = SandboxPage;

/* jshint ignore:start */
/**
 * Build an instance of SandboxInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.SandboxPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns SandboxInstance
 */
/* jshint ignore:end */
SandboxPage.prototype.getInstance = function getInstance(payload) {
  return new SandboxInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SandboxList
 * @description Initialize the SandboxList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The account_sid
 */
/* jshint ignore:end */
function SandboxList(version, accountSid) {
  /* jshint ignore:start */
  /**
   * @function sandbox
   * @memberof Twilio.Api.V2010.AccountContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.SandboxContext}
   */
  /* jshint ignore:end */
  function SandboxListInstance(sid) {
    return SandboxListInstance.get(sid);
  }

  SandboxListInstance._version = version;
  // Path Solution
  SandboxListInstance._solution = {
    accountSid: accountSid
  };
  /* jshint ignore:start */
  /**
   * Constructs a sandbox
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.SandboxList
   * @instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.SandboxContext}
   */
  /* jshint ignore:end */
  SandboxListInstance.get = function get() {
    return new SandboxContext(
      this._version,
      this._solution.accountSid
    );
  };

  return SandboxListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SandboxInstance
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
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 */
/* jshint ignore:end */
function SandboxInstance(version, payload, accountSid) {
  this._version = version;

  // Marshaled Properties
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.pin = deserialize.integer(payload.pin); // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.phoneNumber = payload.phone_number; // jshint ignore:line
  this.applicationSid = payload.application_sid; // jshint ignore:line
  this.apiVersion = payload.api_version; // jshint ignore:line
  this.voiceUrl = payload.voice_url; // jshint ignore:line
  this.voiceMethod = payload.voice_method; // jshint ignore:line
  this.smsUrl = payload.sms_url; // jshint ignore:line
  this.smsMethod = payload.sms_method; // jshint ignore:line
  this.statusCallback = payload.status_callback; // jshint ignore:line
  this.statusCallbackMethod = payload.status_callback_method; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
  };
}

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

/* jshint ignore:start */
/**
 * fetch a SandboxInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.SandboxInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SandboxInstance
 */
/* jshint ignore:end */
SandboxInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a SandboxInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.SandboxInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.voiceUrl] - The voice_url
 * @param {string} [opts.voiceMethod] - The voice_method
 * @param {string} [opts.smsUrl] - The sms_url
 * @param {string} [opts.smsMethod] - The sms_method
 * @param {string} [opts.statusCallback] - The status_callback
 * @param {string} [opts.statusCallbackMethod] - The status_callback_method
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SandboxInstance
 */
/* jshint ignore:end */
SandboxInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SandboxContext
 * @description Initialize the SandboxContext
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {sid} accountSid - The account_sid
 */
/* jshint ignore:end */
function SandboxContext(version, accountSid) {
  this._version = version;

  // Path Solution
  this._solution = {
    accountSid: accountSid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Sandbox.json' // jshint ignore:line
  )(this._solution);
}

/* jshint ignore:start */
/**
 * fetch a SandboxInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.SandboxContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SandboxInstance
 */
/* jshint ignore:end */
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

/* jshint ignore:start */
/**
 * update a SandboxInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.SandboxContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.voiceUrl] - The voice_url
 * @param {string} [opts.voiceMethod] - The voice_method
 * @param {string} [opts.smsUrl] - The sms_url
 * @param {string} [opts.smsMethod] - The sms_method
 * @param {string} [opts.statusCallback] - The status_callback
 * @param {string} [opts.statusCallbackMethod] - The status_callback_method
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SandboxInstance
 */
/* jshint ignore:end */
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
