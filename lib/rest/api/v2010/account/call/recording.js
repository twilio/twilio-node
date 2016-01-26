'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var Page = require('../../../../../base/Page');
var deserialize = require('../../../../../base/deserialize');
var serialize = require('../../../../../base/serialize');
var values = require('../../../../../base/values');

var RecordingPage;
var RecordingList;
var RecordingInstance;
var RecordingContext;

/**
 * Initialize the RecordingPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} accountSid - The account_sid
 * @param {string} callSid - The call_sid
 *
 * @returns RecordingPage
 */
function RecordingPage(version, response, accountSid, callSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    callSid: callSid
  };
}

_.extend(RecordingPage.prototype, Page.prototype);
RecordingPage.prototype.constructor = RecordingPage;

/**
 * Build an instance of RecordingInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns RecordingInstance
 */
RecordingPage.prototype.getInstance = function getInstance(payload) {
  return new RecordingInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.callSid
  );
};


/**
 * Initialize the RecordingList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} accountSid - The account_sid
 * @param {string} callSid - The call_sid
 *
 * @returns RecordingList
 */
function RecordingList(version, accountSid, callSid) {
  function RecordingListInstance(sid) {
    return RecordingListInstance.get(sid);
  }

  RecordingListInstance._version = version;
  // Path Solution
  RecordingListInstance._solution = {
    accountSid: accountSid,
    callSid: callSid
  };
  RecordingListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Calls/<%= callSid %>/Recordings.json' // jshint ignore:line
  )(RecordingListInstance._solution);
  /**
   * Streams RecordingInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param {Function} opts.callback - A callback function to process records
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
   * @param {moment} [opts.dateCreatedBefore] - The date_created
   * @param {moment} [opts.dateCreated] - The date_created
   * @param {moment} [opts.dateCreatedAfter] - The date_created
   */
  RecordingListInstance.each = function each(opts) {
    if (!(opts && 'callback' in opts)) {
      throw new Error('opts.callback parameter required');
    }

    var currentPage = 1;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var deferred = Q.defer();
    function fetchNextPage(fn) {
      var promise = fn();

      promise.then(function(page) {
        if (_.isEmpty(page.instances)) {
          deferred.resolve();
        }

        _.each(page.instances, opts.callback);

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          deferred.resolve();
        } else {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(deferred.reject);
    }

    fetchNextPage(_.bind(this.page, this, opts));

    return deferred.promise;
  };

  /**
   * Lists RecordingInstance records from the API as a list.
   *
   * @param {moment} [opts.dateCreatedBefore] - The date_created
   * @param {moment} [opts.dateCreated] - The date_created
   * @param {moment} [opts.dateCreatedAfter] - The date_created
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
  RecordingListInstance.list = function list(opts) {
    opts = opts || {};

    var allResources = [];
    opts.callback = function(resource) {
      allResources.push(resource);
    };

    var promise = this.each(opts);
    promise = promise.then(function() {
      return allResources;
    });

    return promise;
  };

  /**
   * Retrieve a single page of RecordingInstance records from the API.
   * Request is executed immediately
   *
   * @param {moment} [opts.dateCreatedBefore] - The date_created
   * @param {moment} [opts.dateCreated] - The date_created
   * @param {moment} [opts.dateCreatedAfter] - The date_created
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of RecordingInstance
   */
  RecordingListInstance.page = function page(opts) {
    opts = opts || {};
    var params = values.of({
      'DateCreated<': serialize.iso8601Date(opts.dateCreatedBefore),
      'DateCreated': serialize.iso8601Date(opts.dateCreated),
      'DateCreated>': serialize.iso8601Date(opts.dateCreatedAfter),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = version.page(
      'GET',
      this._uri,
      { params: params }
    );

    promise = promise.then(function(response) {
      return new RecordingPage(
        this._version,
        response,
        this._solution.accountSid,
        this._solution.callSid
      );
    }.bind(this));

    return promise;
  };

  /**
   * Constructs a RecordingContext
   *
   * @param {string} sid - The sid
   *
   * @returns RecordingContext
   */
  RecordingListInstance.get = function get(sid) {
    return new RecordingContext(
      this._version,
      this._solution.accountSid,
      this._solution.callSid,
      sid
    );
  };

  return RecordingListInstance;
}


/**
 * Initialize the RecordingContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} callSid - The call_sid
 * @param {sid} sid - The sid
 *
 * @returns {RecordingContext}
 */
function RecordingInstance(version, payload, accountSid, callSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    callSid: payload.call_sid, // jshint ignore:line,
    dateCreated: deserialize.rfc2822DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.rfc2822DateTime(payload.date_updated), // jshint ignore:line,
    duration: payload.duration, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    callSid: callSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(RecordingInstance.prototype, InstanceResource.prototype);
RecordingInstance.prototype.constructor = RecordingInstance;

Object.defineProperty(RecordingInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new RecordingContext(
        this._version,
        this._solution.accountSid,
        this._solution.callSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(RecordingInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(RecordingInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(RecordingInstance.prototype,
  'callSid', {
  get: function() {
    return this._properties.callSid;
  },
});

Object.defineProperty(RecordingInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(RecordingInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(RecordingInstance.prototype,
  'duration', {
  get: function() {
    return this._properties.duration;
  },
});

Object.defineProperty(RecordingInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(RecordingInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a RecordingInstance
 *
 * @returns Fetched RecordingInstance
 */
RecordingInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Deletes the RecordingInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
RecordingInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};


/**
 * Initialize the RecordingContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} callSid - The call_sid
 * @param {sid} sid - The sid
 *
 * @returns {RecordingContext}
 */
function RecordingContext(version, accountSid, callSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    callSid: callSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Calls/<%= callSid %>/Recordings/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(RecordingContext.prototype, InstanceContext.prototype);
RecordingContext.prototype.constructor = RecordingContext;

/**
 * Fetch a RecordingInstance
 *
 * @returns Fetched RecordingInstance
 */
RecordingContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new RecordingInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.callSid,
      this._solution.sid
    );
  }.bind(this));

  return promise;
};

/**
 * Deletes the RecordingInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
RecordingContext.prototype.remove = function remove() {
  return this._version.remove({
    method: 'DELETE',
    uri: this._uri
  });
};

module.exports = {
  RecordingPage: RecordingPage,
  RecordingList: RecordingList,
  RecordingInstance: RecordingInstance,
  RecordingContext: RecordingContext
};
