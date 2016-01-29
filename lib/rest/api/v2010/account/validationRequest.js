'use strict';

var _ = require('lodash');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var deserialize = require('../../../../base/deserialize');
var values = require('../../../../base/values');

var ValidationRequestPage;
var ValidationRequestList;
var ValidationRequestInstance;
var ValidationRequestContext;

/**
 * Initialize the ValidationRequestPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} accountSid - The account_sid
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
 * @param {obj} payload - Payload response from the API
 *
 * @returns ValidationRequestInstance
 */
ValidationRequestPage.prototype.getInstance = function getInstance(payload) {
  return new ValidationRequestInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * Initialize the ValidationRequestList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} accountSid - The account_sid
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
   * @returns Newly created ValidationRequestInstance
   */
  ValidationRequestListInstance.create = function create(opts) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameters are missing. Please provide: phoneNumber.');  // jshint ignore:line
    }
    if (_.isUndefined(opts.phoneNumber)) {
      throw new Error('Required parameter "phoneNumber" missing.');
    }
    var data = values.of({
      'PhoneNumber': opts.phoneNumber,
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
        this._version,
        payload,
        this._solution.accountSid
      );
    }.bind(this));

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
    validationCode: deserialize.integer(payload.validation_code), // jshint ignore:line,
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
