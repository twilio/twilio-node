'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var Page = require('../../../../../base/Page');
var deserialize = require('../../../../../base/deserialize');
var values = require('../../../../../base/values');

var MemberPage;
var MemberList;
var MemberInstance;
var MemberContext;

/**
 * Initialize the MemberPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} accountSid - The account_sid
 * @param {string} queueSid - A string that uniquely identifies this queue
 *
 * @returns MemberPage
 */
function MemberPage(version, response, accountSid, queueSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    queueSid: queueSid
  };
}

_.extend(MemberPage.prototype, Page.prototype);
MemberPage.prototype.constructor = MemberPage;

/**
 * Build an instance of MemberInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns MemberInstance
 */
MemberPage.prototype.getInstance = function getInstance(payload) {
  return new MemberInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.queueSid
  );
};


/**
 * Initialize the MemberList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} accountSid - The account_sid
 * @param {string} queueSid - A string that uniquely identifies this queue
 *
 * @returns MemberList
 */
function MemberList(version, accountSid, queueSid) {
  function MemberListInstance(sid) {
    return MemberListInstance.get(sid);
  }

  MemberListInstance._version = version;
  // Path Solution
  MemberListInstance._solution = {
    accountSid: accountSid,
    queueSid: queueSid
  };
  MemberListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Queues/<%= queueSid %>/Members.json' // jshint ignore:line
  )(MemberListInstance._solution);
  /**
   * Streams MemberInstance records from the API.
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
  MemberListInstance.each = function each(opts) {
    opts = opts || {};
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
   * Lists MemberInstance records from the API as a list.
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
  MemberListInstance.list = function list(opts) {
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
   * Retrieve a single page of MemberInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of MemberInstance
   */
  MemberListInstance.page = function page(opts) {
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
      return new MemberPage(
        this._version,
        response,
        this._solution.accountSid,
        this._solution.queueSid
      );
    }.bind(this));

    return promise;
  };

  /**
   * Constructs a MemberContext
   *
   * @param {string} callSid - The call_sid
   *
   * @returns MemberContext
   */
  MemberListInstance.get = function get(callSid) {
    return new MemberContext(
      this._version,
      this._solution.accountSid,
      this._solution.queueSid,
      callSid
    );
  };

  return MemberListInstance;
}


/**
 * Initialize the MemberContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} queueSid - The Queue in which to find the members
 * @param {sid} callSid - The call_sid
 *
 * @returns {MemberContext}
 */
function MemberInstance(version, payload, accountSid, queueSid, callSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    callSid: payload.call_sid, // jshint ignore:line,
    dateEnqueued: deserialize.rfc2822DateTime(payload.date_enqueued), // jshint ignore:line,
    position: deserialize.integer(payload.position), // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
    waitTime: deserialize.integer(payload.wait_time), // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    queueSid: queueSid,
    callSid: callSid || this._properties.callSid,
  };
}

_.extend(MemberInstance.prototype, InstanceResource.prototype);
MemberInstance.prototype.constructor = MemberInstance;

Object.defineProperty(MemberInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new MemberContext(
        this._version,
        this._solution.accountSid,
        this._solution.queueSid,
        this._solution.callSid
      );
    }

    return this._context;
  },
});

Object.defineProperty(MemberInstance.prototype,
  'callSid', {
  get: function() {
    return this._properties.callSid;
  },
});

Object.defineProperty(MemberInstance.prototype,
  'dateEnqueued', {
  get: function() {
    return this._properties.dateEnqueued;
  },
});

Object.defineProperty(MemberInstance.prototype,
  'position', {
  get: function() {
    return this._properties.position;
  },
});

Object.defineProperty(MemberInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(MemberInstance.prototype,
  'waitTime', {
  get: function() {
    return this._properties.waitTime;
  },
});

/**
 * Fetch a MemberInstance
 *
 * @returns Fetched MemberInstance
 */
MemberInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the MemberInstance
 *
 * @param {string} opts.url - The url
 * @param {string} opts.method - The method
 *
 * @returns Updated MemberInstance
 */
MemberInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};


/**
 * Initialize the MemberContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} queueSid - The Queue in which to find the members
 * @param {sid} callSid - The call_sid
 *
 * @returns {MemberContext}
 */
function MemberContext(version, accountSid, queueSid, callSid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    queueSid: queueSid,
    callSid: callSid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Queues/<%= queueSid %>/Members/<%= callSid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(MemberContext.prototype, InstanceContext.prototype);
MemberContext.prototype.constructor = MemberContext;

/**
 * Fetch a MemberInstance
 *
 * @returns Fetched MemberInstance
 */
MemberContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new MemberInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.queueSid,
      this._solution.callSid
    );
  }.bind(this));

  return promise;
};

/**
 * Update the MemberInstance
 *
 * @param {string} opts.url - The url
 * @param {string} opts.method - The method
 *
 * @returns Updated MemberInstance
 */
MemberContext.prototype.update = function update(opts) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameters are missing. Please provide: url, method.');  // jshint ignore:line
  }
  if (_.isUndefined(opts.url)) {
    throw new Error('Required parameter "url" missing.');
  }
  if (_.isUndefined(opts.method)) {
    throw new Error('Required parameter "method" missing.');
  }
  var data = values.of({
    'Url': opts.url,
    'Method': opts.method,
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  promise = promise.then(function(payload) {
    return new MemberInstance(
      this.version,
      payload,
      this._solution.accountSid,
      this._solution.queueSid,
      this._solution.callSid
    );
  }.bind(this));

  return promise;
};

module.exports = {
  MemberPage: MemberPage,
  MemberList: MemberList,
  MemberInstance: MemberInstance,
  MemberContext: MemberContext
};
