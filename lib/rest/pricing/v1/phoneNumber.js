'use strict';

var _ = require('lodash');  /* jshint ignore:line */
var CountryList = require('./phoneNumber/country').CountryList;
var Page = require('../../../base/Page');  /* jshint ignore:line */

var PhoneNumberList;
var PhoneNumberPage;
var PhoneNumberInstance;

/* jshint ignore:start */
/**
 * @constructor Twilio.Pricing.V1.PhoneNumberList
 * @description Initialize the PhoneNumberList
 *
 * @param {Twilio.Pricing.V1} version - Version of the resource
 */
/* jshint ignore:end */
PhoneNumberList = function PhoneNumberList(version) {
  /* jshint ignore:start */
  /**
   * @function phoneNumbers
   * @memberof Twilio.Pricing.V1
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Pricing.V1.PhoneNumberContext}
   */
  /* jshint ignore:end */
  function PhoneNumberListInstance(sid) {
    return PhoneNumberListInstance.get(sid);
  }

  PhoneNumberListInstance._version = version;
  // Path Solution
  PhoneNumberListInstance._solution = {};

  // Components
  PhoneNumberListInstance._countries = undefined;

  Object.defineProperty(PhoneNumberListInstance,
    'countries', {
    get: function countries() {
      if (!this._countries) {
        this._countries = new CountryList(
          this._version
        );
      }

      return this._countries;
    }
  });

  return PhoneNumberListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Pricing.V1.PhoneNumberPage
 * @augments Page
 * @description Initialize the PhoneNumberPage
 *
 * @param {Twilio.Pricing.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns PhoneNumberPage
 */
/* jshint ignore:end */
PhoneNumberPage = function PhoneNumberPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(PhoneNumberPage.prototype, Page.prototype);
PhoneNumberPage.prototype.constructor = PhoneNumberPage;

/* jshint ignore:start */
/**
 * Build an instance of PhoneNumberInstance
 *
 * @function getInstance
 * @memberof Twilio.Pricing.V1.PhoneNumberPage
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
 * @constructor Twilio.Pricing.V1.PhoneNumberInstance
 * @description Initialize the PhoneNumberContext
 *
 * @property {string} name - The name
 * @property {string} url - The url
 * @property {string} links - The links
 *
 * @param {Twilio.Pricing.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 */
/* jshint ignore:end */
PhoneNumberInstance = function PhoneNumberInstance(version, payload) {
  this._version = version;

  // Marshaled Properties
  this.name = payload.name; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {};
};

module.exports = {
  PhoneNumberList: PhoneNumberList,
  PhoneNumberPage: PhoneNumberPage,
  PhoneNumberInstance: PhoneNumberInstance
};
