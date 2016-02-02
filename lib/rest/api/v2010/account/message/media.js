'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var Page = require('../../../../../base/Page');
var deserialize = require('../../../../../base/deserialize');
var serialize = require('../../../../../base/serialize');
var values = require('../../../../../base/values');

var MediaPage;
var MediaList;
var MediaInstance;
var MediaContext;

/**
 * Initialize the MediaPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} accountSid - The unique sid that identifies this account
 * @param {string} messageSid - A string that uniquely identifies this message
 *
 * @returns MediaPage
 */
function MediaPage(version, response, accountSid, messageSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    messageSid: messageSid
  };
}

_.extend(MediaPage.prototype, Page.prototype);
MediaPage.prototype.constructor = MediaPage;

/**
 * Build an instance of MediaInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns MediaInstance
 */
MediaPage.prototype.getInstance = function getInstance(payload) {
  return new MediaInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.messageSid
  );
};


/**
 * Initialize the MediaList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} accountSid - The unique sid that identifies this account
 * @param {string} messageSid - A string that uniquely identifies this message
 *
 * @returns MediaList
 */
function MediaList(version, accountSid, messageSid) {
  function MediaListInstance(sid) {
    return MediaListInstance.get(sid);
  }

  MediaListInstance._version = version;
  // Path Solution
  MediaListInstance._solution = {
    accountSid: accountSid,
    messageSid: messageSid
  };
  MediaListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Messages/<%= messageSid %>/Media.json' // jshint ignore:line
  )(MediaListInstance._solution);
  /**
   * Streams MediaInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
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
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   * callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  MediaListInstance.each = function each(opts, callback) {
    opts = opts || {};
    if (_.isFunction(opts)) {
      opts = { callback: opts };
    } else if (_.isFunction(callback) && !_.isFunction(opts.callback)) {
      opts.callback = callback;
    }

    if (_.isUndefined(opts.callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done) {
            return false;
          }

          opts.callback(instance, onComplete);
        });

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          onComplete();
        } else if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, opts));
  };

  /**
   * Lists MediaInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {Date} [opts.dateCreatedBefore] - Filter by date created
   * @param {Date} [opts.dateCreated] - Filter by date created
   * @param {Date} [opts.dateCreatedAfter] - Filter by date created
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
   * @param {Function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  MediaListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource) {
      allResources.push(resource);
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /**
   * Retrieve a single page of MediaInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {Date} [opts.dateCreatedBefore] - Filter by date created
   * @param {Date} [opts.dateCreated] - Filter by date created
   * @param {Date} [opts.dateCreatedAfter] - Filter by date created
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {Function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  MediaListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'DateCreated<': serialize.iso8601Date(opts.dateCreatedBefore),
      'DateCreated': serialize.iso8601Date(opts.dateCreated),
      'DateCreated>': serialize.iso8601Date(opts.dateCreatedAfter),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({
      uri: this._uri,
      method: 'GET',
      params: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new MediaPage(
        this._version,
        payload,
        this._solution.accountSid,
        this._solution.messageSid
      ));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /**
   * Constructs a MediaContext
   *
   * @param {string} sid - Fetch by unique media Sid
   *
   * @returns MediaContext
   */
  MediaListInstance.get = function get(sid) {
    return new MediaContext(
      this._version,
      this._solution.accountSid,
      this._solution.messageSid,
      sid
    );
  };

  return MediaListInstance;
}


/**
 * Initialize the MediaContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} messageSid - The message_sid
 * @param {sid} sid - Fetch by unique media Sid
 *
 * @returns {MediaContext}
 */
function MediaInstance(version, payload, accountSid, messageSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    contentType: payload.content_type, // jshint ignore:line,
    dateCreated: deserialize.rfc2822DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.rfc2822DateTime(payload.date_updated), // jshint ignore:line,
    parentSid: payload.parent_sid, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    messageSid: messageSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(MediaInstance.prototype, InstanceResource.prototype);
MediaInstance.prototype.constructor = MediaInstance;

Object.defineProperty(MediaInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new MediaContext(
        this._version,
        this._solution.accountSid,
        this._solution.messageSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(MediaInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(MediaInstance.prototype,
  'contentType', {
  get: function() {
    return this._properties.contentType;
  },
});

Object.defineProperty(MediaInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(MediaInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(MediaInstance.prototype,
  'parentSid', {
  get: function() {
    return this._properties.parentSid;
  },
});

Object.defineProperty(MediaInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(MediaInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Deletes the MediaInstance
 *
 * @param {Function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
MediaInstance.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({
    uri: this._uri,
    method: 'DELETE'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/**
 * Fetch a MediaInstance
 *
 * @param {Function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched MediaInstance
 */
MediaInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new MediaInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.messageSid,
      this._solution.sid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};


/**
 * Initialize the MediaContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} messageSid - The message_sid
 * @param {sid} sid - Fetch by unique media Sid
 *
 * @returns {MediaContext}
 */
function MediaContext(version, accountSid, messageSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    messageSid: messageSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Messages/<%= messageSid %>/Media/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(MediaContext.prototype, InstanceContext.prototype);
MediaContext.prototype.constructor = MediaContext;

/**
 * Deletes the MediaInstance
 *
 * @param {Function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
MediaContext.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({
    uri: this._uri,
    method: 'DELETE'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/**
 * Fetch a MediaInstance
 *
 * @param {Function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched MediaInstance
 */
MediaContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new MediaInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.messageSid,
      this._solution.sid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

module.exports = {
  MediaPage: MediaPage,
  MediaList: MediaList,
  MediaInstance: MediaInstance,
  MediaContext: MediaContext
};
