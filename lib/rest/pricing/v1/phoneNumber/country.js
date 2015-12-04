'use strict';

var _ = require('lodash');
var Instance = require('../../../../base');
var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the CountryContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {iso_country_code} isoCountry - The iso_country
 *
 * @returns {CountryContext}
 */
function CountryContext(version, isoCountry) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    isoCountry: isoCountry,
  };
  this._uri = _.template('/PhoneNumbers/Countries/<% iso_country %>', this._solution);
}

/**
 * Fetch a CountryInstance
 *
 * @returns Fetched CountryInstance
 */
CountryContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new CountryInstance(
    this._version,
    payload,
    this._solution.isoCountry,
  );
};


function CountryInstance() {
}

Object.defineProperty(CountryInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new CountryContext(
        this._version,
        this._solution.isoCountry
      );
    }

    return this._context;
  },
});

Object.defineProperty(CountryInstance.prototype, 'country', {
  get: function() {
    return this._properties.country;
  },
});

Object.defineProperty(CountryInstance.prototype, 'isoCountry', {
  get: function() {
    return this._properties.isoCountry;
  },
});

Object.defineProperty(CountryInstance.prototype, 'phoneNumberPrices', {
  get: function() {
    return this._properties.phoneNumberPrices;
  },
});

Object.defineProperty(CountryInstance.prototype, 'priceUnit', {
  get: function() {
    return this._properties.priceUnit;
  },
});

Object.defineProperty(CountryInstance.prototype, 'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(CountryInstance.prototype, 'url', {
  get: function() {
    return this._properties.url;
  },
});

/**
 * Initialize the CountryContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {iso_country_code} isoCountry: The iso_country
 *
 * @returns {CountryContext}
 */
CountryInstance.prototype.CountryInstance = function CountryInstance(version,
    payload, isoCountry) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      country: payload.country // jshint ignore:line,
      isoCountry: payload.iso_country // jshint ignore:line,
      phoneNumberPrices: payload.phone_number_prices // jshint ignore:line,
      priceUnit: payload.price_unit // jshint ignore:line,
      uri: payload.uri // jshint ignore:line,
      url: payload.url // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    isoCountry: isoCountry || this._properties.isoCountry,
  };
};

/**
 * Fetch a CountryInstance
 *
 * @returns Fetched CountryInstance
 */
CountryInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

