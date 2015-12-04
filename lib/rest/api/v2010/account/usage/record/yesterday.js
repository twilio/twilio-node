'use strict';

var Instance = require('../../../../../../base');

function YesterdayInstance() {
}

Object.defineProperty(YesterdayInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(YesterdayInstance.prototype, 'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(YesterdayInstance.prototype, 'category', {
  get: function() {
    return this._properties.category;
  },
});

Object.defineProperty(YesterdayInstance.prototype, 'count', {
  get: function() {
    return this._properties.count;
  },
});

Object.defineProperty(YesterdayInstance.prototype, 'countUnit', {
  get: function() {
    return this._properties.countUnit;
  },
});

Object.defineProperty(YesterdayInstance.prototype, 'description', {
  get: function() {
    return this._properties.description;
  },
});

Object.defineProperty(YesterdayInstance.prototype, 'endDate', {
  get: function() {
    return this._properties.endDate;
  },
});

Object.defineProperty(YesterdayInstance.prototype, 'price', {
  get: function() {
    return this._properties.price;
  },
});

Object.defineProperty(YesterdayInstance.prototype, 'priceUnit', {
  get: function() {
    return this._properties.priceUnit;
  },
});

Object.defineProperty(YesterdayInstance.prototype, 'startDate', {
  get: function() {
    return this._properties.startDate;
  },
});

Object.defineProperty(YesterdayInstance.prototype, 'subresourceUris', {
  get: function() {
    return this._properties.subresourceUris;
  },
});

Object.defineProperty(YesterdayInstance.prototype, 'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(YesterdayInstance.prototype, 'usage', {
  get: function() {
    return this._properties.usage;
  },
});

Object.defineProperty(YesterdayInstance.prototype, 'usageUnit', {
  get: function() {
    return this._properties.usageUnit;
  },
});

/**
 * Initialize the YesterdayContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {YesterdayContext}
 */
YesterdayInstance.prototype.YesterdayInstance = function
    YesterdayInstance(version, payload, accountSid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid // jshint ignore:line,
      apiVersion: payload.api_version // jshint ignore:line,
      category: payload.category // jshint ignore:line,
      count: payload.count // jshint ignore:line,
      countUnit: payload.count_unit // jshint ignore:line,
      description: payload.description // jshint ignore:line,
      endDate: payload.end_date // jshint ignore:line,
      price: payload.price // jshint ignore:line,
      priceUnit: payload.price_unit // jshint ignore:line,
      startDate: payload.start_date // jshint ignore:line,
      subresourceUris: payload.subresource_uris // jshint ignore:line,
      uri: payload.uri // jshint ignore:line,
      usage: payload.usage // jshint ignore:line,
      usageUnit: payload.usage_unit // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
  };
};

