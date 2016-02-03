'use strict';

var _ = require('lodash');
var CountryList = require('./phoneNumber/country').CountryList;
var InstanceResource = require('../../../base/InstanceResource');
var Page = require('../../../base/Page');

var PhoneNumberPage;
var PhoneNumberList;
var PhoneNumberInstance;
var PhoneNumberContext;

/**
 * @constructor
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
 * @constructor
 * @description Initialize the PhoneNumberList
 *
 * @param {V1} version - Version that contains the resource
 *
 * @returns {function} - PhoneNumberListInstance
 */
function PhoneNumberList(version) {
  /**
   * @memberof PhoneNumberList
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
    },
  });

  return PhoneNumberListInstance;
}


/**
 * @constructor
 * @augments InstanceResource
 * @description Initialize the PhoneNumberContext
 *
 * @property {string} name - The name
 * @property {string} url - The url
 * @property {string} links - The links
 *
 * @param {V1} version - Version that contains the resource
 * @param {object} payload - The instance payload
 */
function PhoneNumberInstance(version, payload) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    name: payload.name, // jshint ignore:line,
    url: payload.url, // jshint ignore:line,
    links: payload.links, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {};
}

_.extend(PhoneNumberInstance.prototype, InstanceResource.prototype);
PhoneNumberInstance.prototype.constructor = PhoneNumberInstance;

Object.defineProperty(PhoneNumberInstance.prototype,
  'name', {
  get: function() {
    return this._properties.name;
  },
});

Object.defineProperty(PhoneNumberInstance.prototype,
  'url', {
  get: function() {
    return this._properties.url;
  },
});

Object.defineProperty(PhoneNumberInstance.prototype,
  'links', {
  get: function() {
    return this._properties.links;
  },
});

module.exports = {
  PhoneNumberPage: PhoneNumberPage,
  PhoneNumberList: PhoneNumberList,
  PhoneNumberInstance: PhoneNumberInstance,
  PhoneNumberContext: PhoneNumberContext
};
