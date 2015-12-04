'use strict';

var _ = require('lodash');
var Instance = require('../../../../base');
var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

var NumberInstance;
var NumberContext;

function NumberInstance() {
}

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
 * Initialize the NumberContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {phone_number} number: The number
 *
 * @returns {NumberContext}
 */
NumberInstance.prototype.NumberInstance = function NumberInstance(version,
    payload, number) {
  Instance.constructor.call(this, version);

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
};

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
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    number: number,
  };
  this._uri = _.template(
    '/Voice/Numbers/<% number %>', // jshint ignore:line
    this._solution
  );
}

/**
 * Fetch a NumberInstance
 *
 * @returns Fetched NumberInstance
 */
NumberContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new NumberInstance(
    this._version,
    payload,
    this._solution.number
  );
};

module.exports = {
  NumberInstance: NumberInstance,
  NumberContext: NumberContext
};
