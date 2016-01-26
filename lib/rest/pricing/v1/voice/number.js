'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var values = require('../../../../base/values');

var NumberPage;
var NumberList;
var NumberInstance;
var NumberContext;

/**
 * Initialize the NumberPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 *
 * @returns NumberPage
 */
function NumberPage(version, response) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {};
}

_.extend(NumberPage.prototype, Page.prototype);
NumberPage.prototype.constructor = NumberPage;

/**
 * Build an instance of NumberInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns NumberInstance
 */
NumberPage.prototype.getInstance = function getInstance(payload) {
  return new NumberInstance(
    this._version,
    payload
  );
};


/**
 * Initialize the NumberList
 *
 * @param {Version} version - Version that contains the resource
 *
 * @returns NumberList
 */
function NumberList(version) {
  function NumberListInstance(sid) {
    return NumberListInstance.get(sid);
  }

  NumberListInstance._version = version;
  // Path Solution
  NumberListInstance._solution = {};
  /**
   * Constructs a NumberContext
   *
   * @param {string} number - The number
   *
   * @returns NumberContext
   */
  NumberListInstance.get = function get(number) {
    return new NumberContext(
      this._version,
      number
    );
  };

  return NumberListInstance;
}


/**
 * Initialize the NumberContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {phone_number} number - The number
 *
 * @returns {NumberContext}
 */
function NumberInstance(version, payload, number) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    number: payload.number, // jshint ignore:line,
    country: payload.country, // jshint ignore:line,
    isoCountry: payload.iso_country, // jshint ignore:line,
    outboundCallPrice: payload.outbound_call_price, // jshint ignore:line,
    inboundCallPrice: payload.inbound_call_price, // jshint ignore:line,
    priceUnit: payload.price_unit, // jshint ignore:line,
    url: payload.url, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    number: number || this._properties.number,
  };
}

_.extend(NumberInstance.prototype, InstanceResource.prototype);
NumberInstance.prototype.constructor = NumberInstance;

Object.defineProperty(NumberInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new NumberContext(
        this._version,
        this._solution.number
      );
    }

    return this._context;
  },
});

Object.defineProperty(NumberInstance.prototype,
  'number', {
  get: function() {
    return this._properties.number;
  },
});

Object.defineProperty(NumberInstance.prototype,
  'country', {
  get: function() {
    return this._properties.country;
  },
});

Object.defineProperty(NumberInstance.prototype,
  'isoCountry', {
  get: function() {
    return this._properties.isoCountry;
  },
});

Object.defineProperty(NumberInstance.prototype,
  'outboundCallPrice', {
  get: function() {
    return this._properties.outboundCallPrice;
  },
});

Object.defineProperty(NumberInstance.prototype,
  'inboundCallPrice', {
  get: function() {
    return this._properties.inboundCallPrice;
  },
});

Object.defineProperty(NumberInstance.prototype,
  'priceUnit', {
  get: function() {
    return this._properties.priceUnit;
  },
});

Object.defineProperty(NumberInstance.prototype,
  'url', {
  get: function() {
    return this._properties.url;
  },
});

/**
 * Fetch a NumberInstance
 *
 * @returns Fetched NumberInstance
 */
NumberInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};


/**
 * Initialize the NumberContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {phone_number} number - The number
 *
 * @returns {NumberContext}
 */
function NumberContext(version, number) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    number: number,
  };
  this._uri = _.template(
    '/Voice/Numbers/<%= number %>' // jshint ignore:line
  )(this._solution);
}

_.extend(NumberContext.prototype, InstanceContext.prototype);
NumberContext.prototype.constructor = NumberContext;

/**
 * Fetch a NumberInstance
 *
 * @returns Fetched NumberInstance
 */
NumberContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new NumberInstance(
      this._version,
      payload,
      this._solution.number
    );
  }.bind(this));

  return promise;
};

module.exports = {
  NumberPage: NumberPage,
  NumberList: NumberList,
  NumberInstance: NumberInstance,
  NumberContext: NumberContext
};
