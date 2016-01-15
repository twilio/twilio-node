'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var ShortCodeList;
var ShortCodeInstance;
var ShortCodeContext;

/**
 * Initialize the ShortCodeList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: A 34 character string that uniquely identifies this resource.
 *
 * @returns ShortCodeList
 */
function ShortCodeList(version, accountSid) {
  function ShortCodeListInstance(sid) {
    return ShortCodeListInstance.get(sid);
  }

  ShortCodeListInstance._version = version;
  // Path Solution
  ShortCodeListInstance._solution = {
    accountSid: accountSid
  };
  ShortCodeListInstance._uri = _.template(
    '/Accounts/<%= accountSid%>/SMS/ShortCodes.json' // jshint ignore:line
  )(ShortCodeListInstance._solution);
  /**
   * Streams ShortCodeInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.friendlyName] - Filter by friendly name
   * @param string [opts.shortCode] - Filter by ShortCode
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize=50] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         list() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} opts.callback - A callback function to process records
   */
  ShortCodeListInstance.stream = function stream(opts) {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page(
      opts
    );

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists ShortCodeInstance records from the API as a list.
   *
   * @param string [opts.friendlyName] - Filter by friendly name
   * @param string [opts.shortCode] - Filter by ShortCode
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   *
   * @returns {Array} A list of records
   */
  ShortCodeListInstance.list = function list(opts) {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      opts,
      limits.pageSize
    );
  };

  /**
   * Retrieve a single page of ShortCodeInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.friendlyName] - Filter by friendly name
   * @param string [opts.shortCode] - Filter by ShortCode
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of ShortCodeInstance
   */
  ShortCodeListInstance.page = function page(opts) {
    var params = values.of({
      'Friendlyname': opts.friendlyName,
      'Shortcode': opts.shortCode,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params
    );

    return ShortCodePage(
      this._version,
      response,
      this._solution.accountSid
    );
  };

  /**
   * Constructs a ShortCodeContext
   *
   * :param sid - Fetch by unique short-code Sid
   *
   * @returns ShortCodeContext
   */
  ShortCodeListInstance.get = function get(sid) {
    return new ShortCodeContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return ShortCodeListInstance;
}


/**
 * Initialize the ShortCodeContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique short-code Sid
 *
 * @returns {ShortCodeContext}
 */
function ShortCodeInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    shortCode: payload.short_code, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    smsFallbackMethod: payload.sms_fallback_method, // jshint ignore:line,
    smsFallbackUrl: payload.sms_fallback_url, // jshint ignore:line,
    smsMethod: payload.sms_method, // jshint ignore:line,
    smsUrl: payload.sms_url, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(ShortCodeInstance.prototype, InstanceResource.prototype);
ShortCodeInstance.prototype.constructor = ShortCodeInstance;

Object.defineProperty(ShortCodeInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ShortCodeContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'shortCode', {
  get: function() {
    return this._properties.shortCode;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'smsFallbackMethod', {
  get: function() {
    return this._properties.smsFallbackMethod;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'smsFallbackUrl', {
  get: function() {
    return this._properties.smsFallbackUrl;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'smsMethod', {
  get: function() {
    return this._properties.smsMethod;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'smsUrl', {
  get: function() {
    return this._properties.smsUrl;
  },
});

Object.defineProperty(ShortCodeInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a ShortCodeInstance
 *
 * @returns Fetched ShortCodeInstance
 */
ShortCodeInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the ShortCodeInstance
 *
 * @param string [opts.friendlyName] -
 *          A human readable description of this resource
 * @param string [opts.apiVersion] - The API version to use
 * @param string [opts.smsUrl] - URL Twilio will request when receiving an SMS
 * @param string [opts.smsMethod] - HTTP method to use when requesting the sms url
 * @param string [opts.smsFallbackUrl] -
 *          URL Twilio will request if an error occurs in executing TwiML
 * @param string [opts.smsFallbackMethod] -
 *          HTTP method Twilio will use with sms fallback url
 *
 * @returns Updated ShortCodeInstance
 */
ShortCodeInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};


/**
 * Initialize the ShortCodeContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique short-code Sid
 *
 * @returns {ShortCodeContext}
 */
function ShortCodeContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid%>/SMS/ShortCodes/<%= sid%>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(ShortCodeContext.prototype, InstanceContext.prototype);
ShortCodeContext.prototype.constructor = ShortCodeContext;

/**
 * Fetch a ShortCodeInstance
 *
 * @returns Fetched ShortCodeInstance
 */
ShortCodeContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new ShortCodeInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.sid
    );
  });

  return promise;
};

/**
 * Update the ShortCodeInstance
 *
 * @param string [opts.friendlyName] -
 *          A human readable description of this resource
 * @param string [opts.apiVersion] - The API version to use
 * @param string [opts.smsUrl] - URL Twilio will request when receiving an SMS
 * @param string [opts.smsMethod] - HTTP method to use when requesting the sms url
 * @param string [opts.smsFallbackUrl] -
 *          URL Twilio will request if an error occurs in executing TwiML
 * @param string [opts.smsFallbackMethod] -
 *          HTTP method Twilio will use with sms fallback url
 *
 * @returns Updated ShortCodeInstance
 */
ShortCodeContext.prototype.update = function update(opts) {
  var data = values.of({
    'Friendlyname': opts.friendlyName,
    'Apiversion': opts.apiVersion,
    'Smsurl': opts.smsUrl,
    'Smsmethod': opts.smsMethod,
    'Smsfallbackurl': opts.smsFallbackUrl,
    'Smsfallbackmethod': opts.smsFallbackMethod,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  return new ShortCodeInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};

module.exports = {
  ShortCodeList: ShortCodeList,
  ShortCodeInstance: ShortCodeInstance,
  ShortCodeContext: ShortCodeContext
};
