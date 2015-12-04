'use strict';

var Instance = require('../../../../../../base');

function TodayInstance() {
}

Object.defineProperty(TodayInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(TodayInstance.prototype, 'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(TodayInstance.prototype, 'category', {
  get: function() {
    return this._properties.category;
  },
});

Object.defineProperty(TodayInstance.prototype, 'count', {
  get: function() {
    return this._properties.count;
  },
});

Object.defineProperty(TodayInstance.prototype, 'countUnit', {
  get: function() {
    return this._properties.countUnit;
  },
});

Object.defineProperty(TodayInstance.prototype, 'description', {
  get: function() {
    return this._properties.description;
  },
});

Object.defineProperty(TodayInstance.prototype, 'endDate', {
  get: function() {
    return this._properties.endDate;
  },
});

Object.defineProperty(TodayInstance.prototype, 'price', {
  get: function() {
    return this._properties.price;
  },
});

Object.defineProperty(TodayInstance.prototype, 'priceUnit', {
  get: function() {
    return this._properties.priceUnit;
  },
});

Object.defineProperty(TodayInstance.prototype, 'startDate', {
  get: function() {
    return this._properties.startDate;
  },
});

Object.defineProperty(TodayInstance.prototype, 'subresourceUris', {
  get: function() {
    return this._properties.subresourceUris;
  },
});

Object.defineProperty(TodayInstance.prototype, 'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(TodayInstance.prototype, 'usage', {
  get: function() {
    return this._properties.usage;
  },
});

Object.defineProperty(TodayInstance.prototype, 'usageUnit', {
  get: function() {
    return this._properties.usageUnit;
  },
});

/**
 * Initialize the TodayContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {TodayContext}
 */
TodayInstance.prototype.TodayInstance = function TodayInstance(version, payload,
    accountSid) {
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

