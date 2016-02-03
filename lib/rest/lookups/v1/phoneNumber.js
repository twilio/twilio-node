'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../base/InstanceContext');
var InstanceResource = require('../../../base/InstanceResource');
var Page = require('../../../base/Page');
var values = require('../../../base/values');

var PhoneNumberPage;
var PhoneNumberList;
var PhoneNumberInstance;
var PhoneNumberContext;

/**
 * @constructor Twilio.Lookups.V1.PhoneNumberPage
 * @augments Page
 * @description Initialize the PhoneNumberPage
 *
 * @param {V1} version - Version that contains the resource
 * @param {object} response - Response from the API
 *
 * @returns PhoneNumberPage
 */
function PhoneNumberPage(version, response) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {};
}

_.extend(PhoneNumberPage.prototype, Page.prototype);
PhoneNumberPage.prototype.constructor = PhoneNumberPage;

/**
 * Build an instance of PhoneNumberInstance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns PhoneNumberInstance
 */
PhoneNumberPage.prototype.getInstance = function getInstance(payload) {
  return new PhoneNumberInstance(
    this._version,
    payload
  );
};


/**
 * @constructor Twilio.Lookups.V1.PhoneNumberList
 * @description Initialize the PhoneNumberList
 *
 * @param {V1} version - Version that contains the resource
 *
 * @returns {function} - PhoneNumberListInstance
 */
function PhoneNumberList(version) {
  /**
   * @memberof Twilio.Lookups.V1.PhoneNumberList
   *
   * @param {string} sid - sid of instance
   *
   * @returns PhoneNumberContext
   */
  function PhoneNumberListInstance(sid) {
    return PhoneNumberListInstance.get(sid);
  }

  PhoneNumberListInstance._version = version;
  // Path Solution
  PhoneNumberListInstance._solution = {};
  /**
   * @memberof Twilio.Lookups.V1.PhoneNumberList
   *
   * @description Constructs a PhoneNumberContext
   *
   * @param {string} phoneNumber - The phone_number
   *
   * @returns PhoneNumberContext
   */
  PhoneNumberListInstance.get = function get(phoneNumber) {
    return new PhoneNumberContext(
      this._version,
      phoneNumber
    );
  };

  return PhoneNumberListInstance;
}


/**
 * @constructor Twilio.Lookups.V1.PhoneNumberInstance
 * @augments InstanceResource
 * @description Initialize the PhoneNumberContext
 *
 * @property {string} countryCode - The country_code
 * @property {string} phoneNumber - The phone_number
 * @property {string} nationalFormat - The national_format
 * @property {string} carrier - The carrier
 *
 * @param {V1} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {phone_number} phoneNumber - The phone_number
 */
function PhoneNumberInstance(version, payload, phoneNumber) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    countryCode: payload.country_code, // jshint ignore:line,
    phoneNumber: payload.phone_number, // jshint ignore:line,
    nationalFormat: payload.national_format, // jshint ignore:line,
    carrier: payload.carrier, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    phoneNumber: phoneNumber || this._properties.phoneNumber,
  };
}

_.extend(PhoneNumberInstance.prototype, InstanceResource.prototype);
PhoneNumberInstance.prototype.constructor = PhoneNumberInstance;

Object.defineProperty(PhoneNumberInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new PhoneNumberContext(
        this._version,
        this._solution.phoneNumber
      );
    }

    return this._context;
  },
});

Object.defineProperty(PhoneNumberInstance.prototype,
  'countryCode', {
  get: function() {
    return this._properties.countryCode;
  },
});

Object.defineProperty(PhoneNumberInstance.prototype,
  'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(PhoneNumberInstance.prototype,
  'nationalFormat', {
  get: function() {
    return this._properties.nationalFormat;
  },
});

Object.defineProperty(PhoneNumberInstance.prototype,
  'carrier', {
  get: function() {
    return this._properties.carrier;
  },
});

/**
 * @description Fetch a PhoneNumberInstance
 *
 * @param {string} [opts.countryCode] - The country_code
 * @param {string} [opts.type] - The type
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched PhoneNumberInstance
 */
PhoneNumberInstance.prototype.fetch = function fetch(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'CountryCode': opts.countryCode,
    'Type': opts.type
  });

  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET',
    params: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new PhoneNumberInstance(
      this._version,
      payload,
      this._solution.phoneNumber
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
 * @constructor Twilio.Lookups.V1.PhoneNumberContext
 * @augments InstanceContext
 * @description Initialize the PhoneNumberContext
 *
 * @param {V1} version - Version that contains the resource
 * @param {phone_number} phoneNumber - The phone_number
 */
function PhoneNumberContext(version, phoneNumber) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    phoneNumber: phoneNumber,
  };
  this._uri = _.template(
    '/PhoneNumbers/<%= phoneNumber %>' // jshint ignore:line
  )(this._solution);
}

_.extend(PhoneNumberContext.prototype, InstanceContext.prototype);
PhoneNumberContext.prototype.constructor = PhoneNumberContext;

/**
 * @description Fetch a PhoneNumberInstance
 *
 * @param {string} [opts.countryCode] - The country_code
 * @param {string} [opts.type] - The type
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched PhoneNumberInstance
 */
PhoneNumberContext.prototype.fetch = function fetch(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'CountryCode': opts.countryCode,
    'Type': opts.type
  });

  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET',
    params: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new PhoneNumberInstance(
      this._version,
      payload,
      this._solution.phoneNumber
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
  PhoneNumberPage: PhoneNumberPage,
  PhoneNumberList: PhoneNumberList,
  PhoneNumberInstance: PhoneNumberInstance,
  PhoneNumberContext: PhoneNumberContext
};
