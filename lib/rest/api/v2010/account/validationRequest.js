'use strict';

var _ = require('lodash');
var InstanceResource = require('../../../../base/InstanceResource');
var ListResource = require('../../../../base/ListResource');
var Page = require('../../../../base/Page');
var values = require('../../../../base/values');

var ValidationRequestPage;
var ValidationRequestList;
var ValidationRequestInstance;
var ValidationRequestContext;

/**
 * Initialize the ValidationRequestPage
 *
 * :param Version version: Version that contains the resource
 * :param Response response: Response from the API
 * :param accountSid: The account_sid
 *
 * @returns ValidationRequestPage
 */
function ValidationRequestPage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(ValidationRequestPage.prototype, Page.prototype);
ValidationRequestPage.prototype.constructor = ValidationRequestPage;

/**
 * Build an instance of ValidationRequestInstance
 *
 * :param dict payload: Payload response from the API
 *
 * @returns ValidationRequestInstance
 */
ValidationRequestPage.prototype.getInstance = function getInstance(payload) {
  return new ValidationRequestInstance(
    this._version,
    payload,
    accountSid=this._solution['accountSid']
  );
};


/**
 * Initialize the ValidationRequestList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The account_sid
 *
 * @returns ValidationRequestList
 */
function ValidationRequestList(version, accountSid) {
  function ValidationRequestListInstance(sid) {
    return ValidationRequestListInstance.get(sid);
  }

  ValidationRequestListInstance._version = version;
  // Path Solution
  ValidationRequestListInstance._solution = {
    accountSid: accountSid
  };
  ValidationRequestListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/OutgoingCallerIds.json' // jshint ignore:line
  )(ValidationRequestListInstance._solution);
  /**
   * Create a new ValidationRequestInstance
   *
   * @param string phoneNumber - The phone_number
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.callDelay] - The call_delay
   * @param string [opts.extension] - The extension
   * @param string [opts.statusCallback] - The status_callback
   * @param string [opts.statusCallbackMethod] - The status_callback_method
   *
   * @returns Newly created ValidationRequestInstance
   */
  ValidationRequestListInstance.create = function create(phoneNumber, opts) {
    var version = this._version;

    opts = opts || {};
    var data = values.of({
      'PhoneNumber': phoneNumber,
      'FriendlyName': opts.friendlyName,
      'CallDelay': opts.callDelay,
      'Extension': opts.extension,
      'StatusCallback': opts.statusCallback,
      'StatusCallbackMethod': opts.statusCallbackMethod
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    promise = promise.then(function(payload) {
      return new ValidationRequestInstance(
        version,
        payload,
        solution.accountSid
      );
    });

    return promise;
  };

  return ValidationRequestListInstance;
}


/**
 * Initialize the ValidationRequestContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {ValidationRequestContext}
 */
function ValidationRequestInstance(version, payload, accountSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    phoneNumber: payload.phone_number, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    validationCode: payload.validation_code, // jshint ignore:line,
    callSid: payload.call_sid, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
  };
}

_.extend(ValidationRequestInstance.prototype, InstanceResource.prototype);
ValidationRequestInstance.prototype.constructor = ValidationRequestInstance;

Object.defineProperty(ValidationRequestInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ValidationRequestInstance.prototype,
  'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(ValidationRequestInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(ValidationRequestInstance.prototype,
  'validationCode', {
  get: function() {
    return this._properties.validationCode;
  },
});

Object.defineProperty(ValidationRequestInstance.prototype,
  'callSid', {
  get: function() {
    return this._properties.callSid;
  },
});

module.exports = {
  ValidationRequestPage: ValidationRequestPage,
  ValidationRequestList: ValidationRequestList,
  ValidationRequestInstance: ValidationRequestInstance,
  ValidationRequestContext: ValidationRequestContext
};
