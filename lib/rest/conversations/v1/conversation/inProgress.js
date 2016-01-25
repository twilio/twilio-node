'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var values = require('../../../../base/values');

var InProgressPage;
var InProgressList;
var InProgressInstance;
var InProgressContext;

/**
 * Initialize the InProgressPage
 *
 * :param Version version: Version that contains the resource
 * :param Response response: Response from the API
 *
 * @returns InProgressPage
 */
function InProgressPage(version, response) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {};
}

_.extend(InProgressPage.prototype, Page.prototype);
InProgressPage.prototype.constructor = InProgressPage;

/**
 * Build an instance of InProgressInstance
 *
 * :param dict payload: Payload response from the API
 *
 * @returns InProgressInstance
 */
InProgressPage.prototype.getInstance = function getInstance(payload) {
  return new InProgressInstance(
    this._version,
    payload
  );
};


/**
 * Initialize the InProgressList
 *
 * :param Version version: Version that contains the resource
 *
 * @returns InProgressList
 */
function InProgressList(version) {
  function InProgressListInstance(sid) {
    return InProgressListInstance.get(sid);
  }

  InProgressListInstance._version = version;
  // Path Solution
  InProgressListInstance._solution = {};
  InProgressListInstance._uri = _.template(
    '/Conversations/InProgress' // jshint ignore:line
  )(InProgressListInstance._solution);
  /**
   * Streams InProgressInstance records from the API.
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
   */
  InProgressListInstance.each = function each(opts) {
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
   * Lists InProgressInstance records from the API as a list.
   *
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
  InProgressListInstance.list = function list(opts) {
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
   * Retrieve a single page of InProgressInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of InProgressInstance
   */
  InProgressListInstance.page = function page(opts) {
    opts = opts || {};
    var params = values.of({
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
      return new InProgressPage(
        this._version,
        response
      );
    }.bind(this));

    return promise;
  };

  return InProgressListInstance;
}


/**
 * Initialize the InProgressContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {InProgressContext}
 */
function InProgressInstance(version, payload) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    sid: payload.sid, // jshint ignore:line,
    status: payload.status, // jshint ignore:line,
    duration: payload.duration, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    startTime: payload.start_time, // jshint ignore:line,
    endTime: payload.end_time, // jshint ignore:line,
    accountSid: payload.account_sid, // jshint ignore:line,
    url: payload.url, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {};
}

_.extend(InProgressInstance.prototype, InstanceResource.prototype);
InProgressInstance.prototype.constructor = InProgressInstance;

Object.defineProperty(InProgressInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(InProgressInstance.prototype,
  'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(InProgressInstance.prototype,
  'duration', {
  get: function() {
    return this._properties.duration;
  },
});

Object.defineProperty(InProgressInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(InProgressInstance.prototype,
  'startTime', {
  get: function() {
    return this._properties.startTime;
  },
});

Object.defineProperty(InProgressInstance.prototype,
  'endTime', {
  get: function() {
    return this._properties.endTime;
  },
});

Object.defineProperty(InProgressInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(InProgressInstance.prototype,
  'url', {
  get: function() {
    return this._properties.url;
  },
});

module.exports = {
  InProgressPage: InProgressPage,
  InProgressList: InProgressList,
  InProgressInstance: InProgressInstance,
  InProgressContext: InProgressContext
};
