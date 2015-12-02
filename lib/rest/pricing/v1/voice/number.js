'use strict';

var _ = require('lodash');
var Instance = require('../../../../base');
var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

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
  this._uri = _.template('/Voice/Numbers/<% number %>', this._solution);
}

/**
 * Fetch a NumberInstance
 *
 * @returns Fetched NumberInstance
 */
NumberContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new NumberInstance(
    this._version,
    payload,
    this._solution.number,
  );
};


function NumberInstance() {
}

Object.defineProperty(NumberInstance.prototype, '_proxy', {
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

Object.defineProperty(NumberInstance.prototype, 'number', {
  get: function() {
    return this._properties.number;
  },
});

Object.defineProperty(NumberInstance.prototype, 'country', {
  get: function() {
    return this._properties.country;
  },
});

Object.defineProperty(NumberInstance.prototype, 'isoCountry', {
  get: function() {
    return this._properties.isoCountry;
  },
});

Object.defineProperty(NumberInstance.prototype, 'outboundCallPrice', {
  get: function() {
    return this._properties.outboundCallPrice;
  },
});

Object.defineProperty(NumberInstance.prototype, 'inboundCallPrice', {
  get: function() {
    return this._properties.inboundCallPrice;
  },
});

Object.defineProperty(NumberInstance.prototype, 'priceUnit', {
  get: function() {
    return this._properties.priceUnit;
  },
});

Object.defineProperty(NumberInstance.prototype, 'url', {
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
      number: payload.number,
      country: payload.country,
      isoCountry: payload.iso_country,
      outboundCallPrice: payload.outbound_call_price,
      inboundCallPrice: payload.inbound_call_price,
      priceUnit: payload.price_unit,
      url: payload.url,
  };

  // Context
  this._context = None;
  this._solution = {
    number: number || this._properties.number,
  };
};

/**
 * Fetch a NumberInstance
 *
 * @returns Fetched NumberInstance
 */
NumberInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

