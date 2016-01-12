'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var values = require('../../../../../base/values');

var ShortCodeList;
var ShortCodeInstance;
var ShortCodeContext;

/**
 * Initialize the ShortCodeContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique short-code Sid
 *
 * @returns {ShortCodeContext}
 */
function ShortCodeInstance(version, payload, accountSid, sid) {
  InstanceResource.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    shortCode: payload.short_code, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    smsFallbackMethod: payload.sms_fallback_method, // jshint ignore:line,
    smsFallbackUrl: payload.sms_fallback_url, // jshint ignore:line,
    smsMethod: payload.sms_method, // jshint ignore:line,
    smsUrl: payload.sms_url, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(ShortCodeInstance.prototype, InstanceResource.prototype);
ShortCodeInstance.prototype.constructor = ShortCodeInstance;

Object.defineProperty(ShortCodeInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ShortCodeContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'shortCode', {
  get: function() {
    return this._properties.shortCode;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'smsFallbackMethod', {
  get: function() {
    return this._properties.smsFallbackMethod;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'smsFallbackUrl', {
  get: function() {
    return this._properties.smsFallbackUrl;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'smsMethod', {
  get: function() {
    return this._properties.smsMethod;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'smsUrl', {
  get: function() {
    return this._properties.smsUrl;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a ShortCodeInstance
 *
 * @returns Fetched ShortCodeInstance
 */
ShortCodeInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the ShortCodeInstance
 *
 * @param string [opts.friendlyName] -
 *          A human readable description of this resource
 * @param string [opts.apiVersion] - The API version to use
 * @param string [opts.smsUrl] - URL Twilio will request when receiving an SMS
 * @param string [opts.smsMethod] - HTTP method to use when requesting the sms url
 * @param string [opts.smsFallbackUrl] -
 *          URL Twilio will request if an error occurs in executing TwiML
 * @param string [opts.smsFallbackMethod] -
 *          HTTP method Twilio will use with sms fallback url
 *
 * @returns Updated ShortCodeInstance
 */
ShortCodeInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};


/**
 * Initialize the ShortCodeContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique short-code Sid
 *
 * @returns {ShortCodeContext}
 */
function ShortCodeContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<% account_sid %>/SMS/ShortCodes/<% sid %>.json', // jshint ignore:line
    this._solution
  );
}

_.extend(ShortCodeContext.prototype, InstanceContext.prototype);
ShortCodeContext.prototype.constructor = ShortCodeContext;

/**
 * Fetch a ShortCodeInstance
 *
 * @returns Fetched ShortCodeInstance
 */
ShortCodeContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new ShortCodeInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};

/**
 * Update the ShortCodeInstance
 *
 * @param string [opts.friendlyName] -
 *          A human readable description of this resource
 * @param string [opts.apiVersion] - The API version to use
 * @param string [opts.smsUrl] - URL Twilio will request when receiving an SMS
 * @param string [opts.smsMethod] - HTTP method to use when requesting the sms url
 * @param string [opts.smsFallbackUrl] -
 *          URL Twilio will request if an error occurs in executing TwiML
 * @param string [opts.smsFallbackMethod] -
 *          HTTP method Twilio will use with sms fallback url
 *
 * @returns Updated ShortCodeInstance
 */
ShortCodeContext.prototype.update = function update(opts) {
  var data = values.of({
    'Friendlyname': opts.friendlyName,
    'Apiversion': opts.apiVersion,
    'Smsurl': opts.smsUrl,
    'Smsmethod': opts.smsMethod,
    'Smsfallbackurl': opts.smsFallbackUrl,
    'Smsfallbackmethod': opts.smsFallbackMethod,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  return new ShortCodeInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};

module.exports = {
  ShortCodeList: ShortCodeList,
  ShortCodeInstance: ShortCodeInstance,
  ShortCodeContext: ShortCodeContext
};
