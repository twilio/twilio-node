'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var deserialize = require('../../../../base/deserialize');
var values = require('../../../../base/values');

var ActivityPage;
var ActivityList;
var ActivityInstance;
var ActivityContext;

/**
 * Initialize the ActivityPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} workspaceSid - The workspace_sid
 *
 * @returns ActivityPage
 */
function ActivityPage(version, response, workspaceSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid
  };
}

_.extend(ActivityPage.prototype, Page.prototype);
ActivityPage.prototype.constructor = ActivityPage;

/**
 * Build an instance of ActivityInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns ActivityInstance
 */
ActivityPage.prototype.getInstance = function getInstance(payload) {
  return new ActivityInstance(
    this._version,
    payload,
    this._solution.workspaceSid
  );
};


/**
 * Initialize the ActivityList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} workspaceSid - The workspace_sid
 *
 * @returns ActivityList
 */
function ActivityList(version, workspaceSid) {
  function ActivityListInstance(sid) {
    return ActivityListInstance.get(sid);
  }

  ActivityListInstance._version = version;
  // Path Solution
  ActivityListInstance._solution = {
    workspaceSid: workspaceSid
  };
  ActivityListInstance._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Activities' // jshint ignore:line
  )(ActivityListInstance._solution);
  /**
   * Streams ActivityInstance records from the API.
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
  ActivityListInstance.each = function each(opts, callback) {
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
   * Lists ActivityInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.available] - The available
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
  ActivityListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of ActivityInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.available] - The available
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {Function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  ActivityListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': opts.friendlyName,
      'Available': opts.available,
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
      deferred.resolve(new ActivityPage(
        this._version,
        payload,
        this._solution.workspaceSid
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
   * Create a new ActivityInstance
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {string} opts.friendlyName - The friendly_name
   * @param {string} opts.available - The available
   * @param {Function} [callback] - Callback to handle created record
   *
   * @returns {Promise} Resolves to newly created ActivityInstance
   */
  ActivityListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameters friendlyName, available are missing.');  // jshint ignore:line
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "friendlyName" missing.');
    }
    if (_.isUndefined(opts.available)) {
      throw new Error('Required parameter "available" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': opts.friendlyName,
      'Available': opts.available
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new ActivityInstance(
        this._version,
        payload,
        this._solution.workspaceSid
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
   * Constructs a ActivityContext
   *
   * @param {string} sid - The sid
   *
   * @returns ActivityContext
   */
  ActivityListInstance.get = function get(sid) {
    return new ActivityContext(
      this._version,
      this._solution.workspaceSid,
      sid
    );
  };

  return ActivityListInstance;
}


/**
 * Initialize the ActivityContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
 *
 * @returns {ActivityContext}
 */
function ActivityInstance(version, payload, workspaceSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    available: payload.available, // jshint ignore:line,
    dateCreated: deserialize.iso8601DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.iso8601DateTime(payload.date_updated), // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    workspaceSid: payload.workspace_sid, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(ActivityInstance.prototype, InstanceResource.prototype);
ActivityInstance.prototype.constructor = ActivityInstance;

Object.defineProperty(ActivityInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ActivityContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(ActivityInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ActivityInstance.prototype,
  'available', {
  get: function() {
    return this._properties.available;
  },
});

Object.defineProperty(ActivityInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(ActivityInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(ActivityInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(ActivityInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(ActivityInstance.prototype,
  'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Fetch a ActivityInstance
 *
 * @param {Function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched ActivityInstance
 */
ActivityInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ActivityInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
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
 * Update the ActivityInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {string} opts.friendlyName - The friendly_name
 * @param {Function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated ActivityInstance
 */
ActivityInstance.prototype.update = function update(opts, callback) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameters friendlyName are missing.');  // jshint ignore:line
  }
  if (_.isUndefined(opts.friendlyName)) {
    throw new Error('Required parameter "friendlyName" missing.');
  }

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': opts.friendlyName
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ActivityInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
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
 * Deletes the ActivityInstance
 *
 * @param {Function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
ActivityInstance.prototype.remove = function remove(callback) {
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
 * Initialize the ActivityContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
 *
 * @returns {ActivityContext}
 */
function ActivityContext(version, workspaceSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Activities/<%= sid %>' // jshint ignore:line
  )(this._solution);
}

_.extend(ActivityContext.prototype, InstanceContext.prototype);
ActivityContext.prototype.constructor = ActivityContext;

/**
 * Fetch a ActivityInstance
 *
 * @param {Function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched ActivityInstance
 */
ActivityContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ActivityInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
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
 * Update the ActivityInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {string} opts.friendlyName - The friendly_name
 * @param {Function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated ActivityInstance
 */
ActivityContext.prototype.update = function update(opts, callback) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameters friendlyName are missing.');  // jshint ignore:line
  }
  if (_.isUndefined(opts.friendlyName)) {
    throw new Error('Required parameter "friendlyName" missing.');
  }

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': opts.friendlyName
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ActivityInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
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
 * Deletes the ActivityInstance
 *
 * @param {Function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
ActivityContext.prototype.remove = function remove(callback) {
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

module.exports = {
  ActivityPage: ActivityPage,
  ActivityList: ActivityList,
  ActivityInstance: ActivityInstance,
  ActivityContext: ActivityContext
};
