'use strict';

var Instance = require('../../../../../base');

function RecordInstance() {
}

Object.defineProperty(RecordInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(RecordInstance.prototype, 'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(RecordInstance.prototype, 'category', {
  get: function() {
    return this._properties.category;
  },
});

Object.defineProperty(RecordInstance.prototype, 'count', {
  get: function() {
    return this._properties.count;
  },
});

Object.defineProperty(RecordInstance.prototype, 'countUnit', {
  get: function() {
    return this._properties.countUnit;
  },
});

Object.defineProperty(RecordInstance.prototype, 'description', {
  get: function() {
    return this._properties.description;
  },
});

Object.defineProperty(RecordInstance.prototype, 'endDate', {
  get: function() {
    return this._properties.endDate;
  },
});

Object.defineProperty(RecordInstance.prototype, 'price', {
  get: function() {
    return this._properties.price;
  },
});

Object.defineProperty(RecordInstance.prototype, 'priceUnit', {
  get: function() {
    return this._properties.priceUnit;
  },
});

Object.defineProperty(RecordInstance.prototype, 'startDate', {
  get: function() {
    return this._properties.startDate;
  },
});

Object.defineProperty(RecordInstance.prototype, 'subresourceUris', {
  get: function() {
    return this._properties.subresourceUris;
  },
});

Object.defineProperty(RecordInstance.prototype, 'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(RecordInstance.prototype, 'usage', {
  get: function() {
    return this._properties.usage;
  },
});

Object.defineProperty(RecordInstance.prototype, 'usageUnit', {
  get: function() {
    return this._properties.usageUnit;
  },
});

/**
 * Initialize the RecordContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {RecordContext}
 */
RecordInstance.prototype.RecordInstance = function RecordInstance(version,
    payload, accountSid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid,
      apiVersion: payload.api_version,
      category: payload.category,
      count: payload.count,
      countUnit: payload.count_unit,
      description: payload.description,
      endDate: payload.end_date,
      price: payload.price,
      priceUnit: payload.price_unit,
      startDate: payload.start_date,
      subresourceUris: payload.subresource_uris,
      uri: payload.uri,
      usage: payload.usage,
      usageUnit: payload.usage_unit,
  };

  // Context
  this._context = None;
  this._solution = {
    accountSid: accountSid,
  };
};

