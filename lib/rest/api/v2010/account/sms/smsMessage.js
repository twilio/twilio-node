'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var SmsMessageList;
var SmsMessageInstance;
var SmsMessageContext;

/**
 * Initialize the SmsMessageList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: A 34 character string that uniquely identifies this resource.
 *
 * @returns SmsMessageList
 */
function SmsMessageList(version, accountSid) {
  function SmsMessageListInstance(sid) {
    return SmsMessageListInstance.get(sid);
  }

  SmsMessageListInstance._version = version;
  // Path Solution
  SmsMessageListInstance._solution = {
    accountSid: accountSid
  };
  SmsMessageListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/SMS/Messages.json' // jshint ignore:line
  )(SmsMessageListInstance._solution);
  /**
   * Create a new SmsMessageInstance
   *
   * @param string to - The to
   * @param string from - The from
   * @param string [opts.statusCallback] - The status_callback
   * @param string [opts.applicationSid] - The application_sid
   * @param string [opts.body] - The body
   * @param string [opts.mediaUrl] - The media_url
   *
   * @returns Newly created SmsMessageInstance
   */
  SmsMessageListInstance.create = function create(to, from, opts) {
    var version = this._version;

    opts = opts || {};
    var data = values.of({
      'To': to,
      'From': from,
      'StatusCallback': opts.statusCallback,
      'ApplicationSid': opts.applicationSid,
      'Body': opts.body,
      'MediaUrl': opts.mediaUrl
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    promise = promise.then(function(payload) {
      return new SmsMessageInstance(
        version,
        payload,
        solution.accountSid
      );
    });

    return promise;
  };

  /**
   * Streams SmsMessageInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.to] - The to
   * @param string [opts.from] - The from
   * @param string [opts.dateSentBefore] - The date_sent
   * @param string [opts.dateSent] - The date_sent
   * @param string [opts.dateSentAfter] - The date_sent
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
  SmsMessageListInstance.stream = function stream(opts) {
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
   * Lists SmsMessageInstance records from the API as a list.
   *
   * @param string [opts.to] - The to
   * @param string [opts.from] - The from
   * @param string [opts.dateSentBefore] - The date_sent
   * @param string [opts.dateSent] - The date_sent
   * @param string [opts.dateSentAfter] - The date_sent
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
  SmsMessageListInstance.list = function list(opts) {
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
   * Retrieve a single page of SmsMessageInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.to] - The to
   * @param string [opts.from] - The from
   * @param string [opts.dateSentBefore] - The date_sent
   * @param string [opts.dateSent] - The date_sent
   * @param string [opts.dateSentAfter] - The date_sent
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of SmsMessageInstance
   */
  SmsMessageListInstance.page = function page(opts) {
    var params = values.of({
      'To': opts.to,
      'From': opts.from,
      'DateSent<': opts.datesentbefore,
      'DateSent': opts.dateSent,
      'DateSent>': opts.datesentafter,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params
    );

    return SmsMessagePage(
      this._version,
      response,
      solution.accountSid
    );
  };

  /**
   * Constructs a SmsMessageContext
   *
   * :param sid - The sid
   *
   * @returns SmsMessageContext
   */
  SmsMessageListInstance.get = function get(sid) {
    return new SmsMessageContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return SmsMessageListInstance;
}


/**
 * Initialize the SmsMessageContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: The sid
 *
 * @returns {SmsMessageContext}
 */
function SmsMessageInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    body: payload.body, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    dateSent: payload.date_sent, // jshint ignore:line,
    direction: payload.direction, // jshint ignore:line,
    from: payload.from, // jshint ignore:line,
    price: payload.price, // jshint ignore:line,
    priceUnit: payload.price_unit, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    status: payload.status, // jshint ignore:line,
    to: payload.to, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(SmsMessageInstance.prototype, InstanceResource.prototype);
SmsMessageInstance.prototype.constructor = SmsMessageInstance;

Object.defineProperty(SmsMessageInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new SmsMessageContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'body', {
  get: function() {
    return this._properties.body;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'dateSent', {
  get: function() {
    return this._properties.dateSent;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'direction', {
  get: function() {
    return this._properties.direction;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'from', {
  get: function() {
    return this._properties.from;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'price', {
  get: function() {
    return this._properties.price;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'priceUnit', {
  get: function() {
    return this._properties.priceUnit;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'to', {
  get: function() {
    return this._properties.to;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Deletes the SmsMessageInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
SmsMessageInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};

/**
 * Fetch a SmsMessageInstance
 *
 * @returns Fetched SmsMessageInstance
 */
SmsMessageInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the SmsMessageInstance
 *
 * @param string [opts.body] - The body
 *
 * @returns Updated SmsMessageInstance
 */
SmsMessageInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};


/**
 * Initialize the SmsMessageContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - The sid
 *
 * @returns {SmsMessageContext}
 */
function SmsMessageContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/SMS/Messages/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(SmsMessageContext.prototype, InstanceContext.prototype);
SmsMessageContext.prototype.constructor = SmsMessageContext;

/**
 * Deletes the SmsMessageInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
SmsMessageContext.prototype.remove = function remove() {
  return this._version.remove({
    method: 'DELETE',
    uri: this._uri
  });
};

/**
 * Fetch a SmsMessageInstance
 *
 * @returns Fetched SmsMessageInstance
 */
SmsMessageContext.prototype.fetch = function fetch() {
  var version = this._version;
  var solution = this._solution;
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new SmsMessageInstance(
      version,
      payload,
      solution.accountSid,
      solution.sid
    );
  });

  return promise;
};

/**
 * Update the SmsMessageInstance
 *
 * @param string [opts.body] - The body
 *
 * @returns Updated SmsMessageInstance
 */
SmsMessageContext.prototype.update = function update(opts) {
  var version = this._version;
  var solution = this._solution;

  opts = opts || {};
  var data = values.of({
    'Body': opts.body,
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  promise = promise.then(function(payload) {
    return new SmsMessageInstance(
      version,
      payload,
      solution.accountSid,
      solution.sid
    );
  });

  return promise;
};

module.exports = {
  SmsMessageList: SmsMessageList,
  SmsMessageInstance: SmsMessageInstance,
  SmsMessageContext: SmsMessageContext
};
