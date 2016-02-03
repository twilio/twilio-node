'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var deserialize = require('../../../../base/deserialize');
var values = require('../../../../base/values');

var OriginationUrlPage;
var OriginationUrlList;
var OriginationUrlInstance;
var OriginationUrlContext;

/**
 * @constructor
 * @augments Page
 * @description Initialize the OriginationUrlPage
 *
 * @param {V1} version - Version that contains the resource
 * @param {object} response - Response from the API
 * @param {string} trunkSid - The trunk_sid
 *
 * @returns OriginationUrlPage
 */
function OriginationUrlPage(version, response, trunkSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    trunkSid: trunkSid
  };
}

_.extend(OriginationUrlPage.prototype, Page.prototype);
OriginationUrlPage.prototype.constructor = OriginationUrlPage;

/**
 * Build an instance of OriginationUrlInstance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns OriginationUrlInstance
 */
OriginationUrlPage.prototype.getInstance = function getInstance(payload) {
  return new OriginationUrlInstance(
    this._version,
    payload,
    this._solution.trunkSid
  );
};


/**
 * @constructor
 * @description Initialize the OriginationUrlList
 *
 * @param {V1} version - Version that contains the resource
 * @param {string} trunkSid - The trunk_sid
 *
 * @returns {function} - OriginationUrlListInstance
 */
function OriginationUrlList(version, trunkSid) {
  /**
   * @memberof OriginationUrlList
   *
   * @param {string} sid - sid of instance
   *
   * @returns OriginationUrlContext
   */
  function OriginationUrlListInstance(sid) {
    return OriginationUrlListInstance.get(sid);
  }

  OriginationUrlListInstance._version = version;
  // Path Solution
  OriginationUrlListInstance._solution = {
    trunkSid: trunkSid
  };
  OriginationUrlListInstance._uri = _.template(
    '/Trunks/<%= trunkSid %>/OriginationUrls' // jshint ignore:line
  )(OriginationUrlListInstance._solution);
  /**
   * @memberof OriginationUrlList
   *
   * @description Create a new OriginationUrlInstance
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object} opts - ...
   * @param {number} opts.weight - The weight
   * @param {number} opts.priority - The priority
   * @param {string} opts.enabled - The enabled
   * @param {string} opts.friendlyName - The friendly_name
   * @param {string} opts.sipUrl - The sip_url
   * @param {function} [callback] - Callback to handle created record
   *
   * @returns {Promise} Resolves to newly created OriginationUrlInstance
   */
  OriginationUrlListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameters weight, priority, enabled, friendlyName, sipUrl are missing.');  // jshint ignore:line
    }
    if (_.isUndefined(opts.weight)) {
      throw new Error('Required parameter "weight" missing.');
    }
    if (_.isUndefined(opts.priority)) {
      throw new Error('Required parameter "priority" missing.');
    }
    if (_.isUndefined(opts.enabled)) {
      throw new Error('Required parameter "enabled" missing.');
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "friendlyName" missing.');
    }
    if (_.isUndefined(opts.sipUrl)) {
      throw new Error('Required parameter "sipUrl" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Weight': opts.weight,
      'Priority': opts.priority,
      'Enabled': opts.enabled,
      'FriendlyName': opts.friendlyName,
      'SipUrl': opts.sipUrl
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new OriginationUrlInstance(
        this._version,
        payload,
        this._solution.trunkSid
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
   * @memberof OriginationUrlList
   *
   * @description Streams OriginationUrlInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
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
  OriginationUrlListInstance.each = function each(opts, callback) {
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
   * @memberof OriginationUrlList
   *
   * @description Lists OriginationUrlInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
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
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  OriginationUrlListInstance.list = function list(opts, callback) {
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
   * @memberof OriginationUrlList
   *
   * @description Retrieve a single page of OriginationUrlInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  OriginationUrlListInstance.page = function page(opts, callback) {
    var deferred = Q.defer();
    var data = values.of({
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
      deferred.resolve(new OriginationUrlPage(
        this._version,
        payload,
        this._solution.trunkSid
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
   * @memberof OriginationUrlList
   *
   * @description Constructs a OriginationUrlContext
   *
   * @param {string} sid - The sid
   *
   * @returns OriginationUrlContext
   */
  OriginationUrlListInstance.get = function get(sid) {
    return new OriginationUrlContext(
      this._version,
      this._solution.trunkSid,
      sid
    );
  };

  return OriginationUrlListInstance;
}


/**
 * @constructor
 * @augments InstanceResource
 * @description Initialize the OriginationUrlContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} sid - The sid
 * @property {string} trunkSid - The trunk_sid
 * @property {number} weight - The weight
 * @property {string} enabled - The enabled
 * @property {string} sipUrl - The sip_url
 * @property {string} friendlyName - The friendly_name
 * @property {number} priority - The priority
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} url - The url
 *
 * @param {V1} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} trunkSid - The trunk_sid
 * @param {sid} sid - The sid
 */
function OriginationUrlInstance(version, payload, trunkSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    trunkSid: payload.trunk_sid, // jshint ignore:line,
    weight: deserialize.integer(payload.weight), // jshint ignore:line,
    enabled: payload.enabled, // jshint ignore:line,
    sipUrl: payload.sip_url, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    priority: deserialize.integer(payload.priority), // jshint ignore:line,
    dateCreated: deserialize.iso8601DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.iso8601DateTime(payload.date_updated), // jshint ignore:line,
    url: payload.url, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    trunkSid: trunkSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(OriginationUrlInstance.prototype, InstanceResource.prototype);
OriginationUrlInstance.prototype.constructor = OriginationUrlInstance;

Object.defineProperty(OriginationUrlInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new OriginationUrlContext(
        this._version,
        this._solution.trunkSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype,
  'trunkSid', {
  get: function() {
    return this._properties.trunkSid;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype,
  'weight', {
  get: function() {
    return this._properties.weight;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype,
  'enabled', {
  get: function() {
    return this._properties.enabled;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype,
  'sipUrl', {
  get: function() {
    return this._properties.sipUrl;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype,
  'priority', {
  get: function() {
    return this._properties.priority;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(OriginationUrlInstance.prototype,
  'url', {
  get: function() {
    return this._properties.url;
  },
});

/**
 * @description Fetch a OriginationUrlInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched OriginationUrlInstance
 */
OriginationUrlInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new OriginationUrlInstance(
      this._version,
      payload,
      this._solution.trunkSid,
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
 * @description Deletes the OriginationUrlInstance
 *
 * @param {function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
OriginationUrlInstance.prototype.remove = function remove(callback) {
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
 * @description Update the OriginationUrlInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object|function} opts - ...
 * @param {number} [opts.weight] - The weight
 * @param {number} [opts.priority] - The priority
 * @param {string} [opts.enabled] - The enabled
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.sipUrl] - The sip_url
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated OriginationUrlInstance
 */
OriginationUrlInstance.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Weight': opts.weight,
    'Priority': opts.priority,
    'Enabled': opts.enabled,
    'FriendlyName': opts.friendlyName,
    'SipUrl': opts.sipUrl
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new OriginationUrlInstance(
      this._version,
      payload,
      this._solution.trunkSid,
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
 * @constructor
 * @augments InstanceContext
 * @description Initialize the OriginationUrlContext
 *
 * @param {V1} version - Version that contains the resource
 * @param {sid} trunkSid - The trunk_sid
 * @param {sid} sid - The sid
 */
function OriginationUrlContext(version, trunkSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    trunkSid: trunkSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Trunks/<%= trunkSid %>/OriginationUrls/<%= sid %>' // jshint ignore:line
  )(this._solution);
}

_.extend(OriginationUrlContext.prototype, InstanceContext.prototype);
OriginationUrlContext.prototype.constructor = OriginationUrlContext;

/**
 * @description Fetch a OriginationUrlInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched OriginationUrlInstance
 */
OriginationUrlContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new OriginationUrlInstance(
      this._version,
      payload,
      this._solution.trunkSid,
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
 * @description Deletes the OriginationUrlInstance
 *
 * @param {function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
OriginationUrlContext.prototype.remove = function remove(callback) {
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
 * @description Update the OriginationUrlInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object|function} opts - ...
 * @param {number} [opts.weight] - The weight
 * @param {number} [opts.priority] - The priority
 * @param {string} [opts.enabled] - The enabled
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.sipUrl] - The sip_url
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated OriginationUrlInstance
 */
OriginationUrlContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Weight': opts.weight,
    'Priority': opts.priority,
    'Enabled': opts.enabled,
    'FriendlyName': opts.friendlyName,
    'SipUrl': opts.sipUrl
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new OriginationUrlInstance(
      this._version,
      payload,
      this._solution.trunkSid,
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
  OriginationUrlPage: OriginationUrlPage,
  OriginationUrlList: OriginationUrlList,
  OriginationUrlInstance: OriginationUrlInstance,
  OriginationUrlContext: OriginationUrlContext
};
