'use strict';

var _ = require('lodash');
var Q = require('q');
var Page = require('../../../base/Page');

var PhoneNumberPage;
var PhoneNumberList;
var PhoneNumberInstance;
var PhoneNumberContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Lookups.V1.PhoneNumberPage
 * @augments Page
 * @description Initialize the PhoneNumberPage
 *
 * @param {Twilio.Lookups.V1} version - Version of the resource
 * @param {object} response - Response from the API
 *
 * @returns PhoneNumberPage
 */
/* jshint ignore:end */
function PhoneNumberPage(version, response) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {};
}

_.extend(PhoneNumberPage.prototype, Page.prototype);
PhoneNumberPage.prototype.constructor = PhoneNumberPage;

/* jshint ignore:start */
/**
 * Build an instance of PhoneNumberInstance
 *
 * @function getInstance
 * @memberof Twilio.Lookups.V1.PhoneNumberPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns PhoneNumberInstance
 */
/* jshint ignore:end */
PhoneNumberPage.prototype.getInstance = function getInstance(payload) {
  return new PhoneNumberInstance(
    this._version,
    payload
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Lookups.V1.PhoneNumberList
 * @description Initialize the PhoneNumberList
 *
 * @param {Twilio.Lookups.V1} version - Version of the resource
 */
/* jshint ignore:end */
function PhoneNumberList(version) {
  /* jshint ignore:start */
  /**
   * @function phoneNumbers
   * @memberof Twilio.Lookups.V1
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Lookups.V1.PhoneNumberContext}
   */
  /* jshint ignore:end */
  function PhoneNumberListInstance(sid) {
    return PhoneNumberListInstance.get(sid);
  }

  PhoneNumberListInstance._version = version;
  // Path Solution
  PhoneNumberListInstance._solution = {};
  /* jshint ignore:start */
  /**
   * Constructs a phone_number
   *
   * @function get
   * @memberof Twilio.Lookups.V1.PhoneNumberList
   * @instance
   *
   * @param {string} phoneNumber - The phone_number
   *
   * @returns {Twilio.Lookups.V1.PhoneNumberContext}
   */
  /* jshint ignore:end */
  PhoneNumberListInstance.get = function get(phoneNumber) {
    return new PhoneNumberContext(
      this._version,
      phoneNumber
    );
  };

  return PhoneNumberListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.Lookups.V1.PhoneNumberInstance
 * @description Initialize the PhoneNumberContext
 *
 * @property {string} countryCode - The country_code
 * @property {string} phoneNumber - The phone_number
 * @property {string} nationalFormat - The national_format
 * @property {string} carrier - The carrier
 *
 * @param {Twilio.Lookups.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {phone_number} phoneNumber - The phone_number
 */
/* jshint ignore:end */
function PhoneNumberInstance(version, payload, phoneNumber) {
  this._version = version;

  // Marshaled Properties
  this.countryCode = payload.country_code; // jshint ignore:line
  this.phoneNumber = payload.phone_number; // jshint ignore:line
  this.nationalFormat = payload.national_format; // jshint ignore:line
  this.carrier = payload.carrier; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    phoneNumber: phoneNumber || this.phoneNumber,
  };
}

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

/* jshint ignore:start */
/**
 * fetch a PhoneNumberInstance
 *
 * @function fetch
 * @memberof Twilio.Lookups.V1.PhoneNumberInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.countryCode] - The country_code
 * @param {string} [opts.type] - The type
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed PhoneNumberInstance
 */
/* jshint ignore:end */
PhoneNumberInstance.prototype.fetch = function fetch(opts, callback) {
  return this._proxy.fetch(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Lookups.V1.PhoneNumberContext
 * @description Initialize the PhoneNumberContext
 *
 * @param {Twilio.Lookups.V1} version - Version of the resource
 * @param {phone_number} phoneNumber - The phone_number
 */
/* jshint ignore:end */
function PhoneNumberContext(version, phoneNumber) {
  this._version = version;

  // Path Solution
  this._solution = {
    phoneNumber: phoneNumber,
  };
  this._uri = _.template(
    '/PhoneNumbers/<%= phoneNumber %>' // jshint ignore:line
  )(this._solution);
}

/* jshint ignore:start */
/**
 * fetch a PhoneNumberInstance
 *
 * @function fetch
 * @memberof Twilio.Lookups.V1.PhoneNumberContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.countryCode] - The country_code
 * @param {string} [opts.type] - The type
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed PhoneNumberInstance
 */
/* jshint ignore:end */
PhoneNumberContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
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
