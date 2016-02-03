'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var deserialize = require('../../../../base/deserialize');
var values = require('../../../../base/values');

var ValidationRequestPage;
var ValidationRequestList;
var ValidationRequestInstance;
var ValidationRequestContext;

/**
 * @constructor Twilio.Api.V2010.AccountContext.ValidationRequestPage
 * @augments Page
 * @description Initialize the ValidationRequestPage
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} response - Response from the API
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
 * @param {object} payload - Payload response from the API
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
 * @constructor Twilio.Api.V2010.AccountContext.ValidationRequestList
 * @description Initialize the ValidationRequestList
 *
 * @param {V2010} version - Version that contains the resource
 * @param {string} accountSid - The account_sid
 *
 * @returns {function} - ValidationRequestListInstance
 */
function ValidationRequestList(version, accountSid) {
  /**
   * @memberof Twilio.Api.V2010.AccountContext.ValidationRequestList
   *
   * @param {string} sid - sid of instance
   *
   * @returns ValidationRequestContext
   */
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
   * @memberof ValidationRequestList
   *
   * @description Create a new ValidationRequestInstance
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object} opts - ...
   * @param {string} opts.phoneNumber - The phone_number
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {number} [opts.callDelay] - The call_delay
   * @param {string} [opts.extension] - The extension
   * @param {string} [opts.statusCallback] - The status_callback
   * @param {string} [opts.statusCallbackMethod] - The status_callback_method
   * @param {function} [callback] - Callback to handle created record
   *
   * @returns {Promise} Resolves to newly created ValidationRequestInstance
   */
  ValidationRequestListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameters phoneNumber are missing.');  // jshint ignore:line
    }
    if (_.isUndefined(opts.phoneNumber)) {
      throw new Error('Required parameter "phoneNumber" missing.');
    }

    var deferred = Q.defer();
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
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new ValidationRequestInstance(
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

  return ValidationRequestListInstance;
}


/**
 * @constructor Twilio.Api.V2010.AccountContext.ValidationRequestInstance
 * @augments InstanceResource
 * @description Initialize the ValidationRequestContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} phoneNumber - The phone_number
 * @property {string} friendlyName - The friendly_name
 * @property {number} validationCode - The validation_code
 * @property {string} callSid - The call_sid
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} payload - The instance payload
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
