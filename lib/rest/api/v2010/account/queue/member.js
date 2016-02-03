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
 * @constructor Twilio.Api.V2010.AccountContext.QueueContext.MemberPage
 * @augments Page
 * @description Initialize the MemberPage
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} response - Response from the API
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
 * @param {object} payload - Payload response from the API
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
 * @constructor Twilio.Api.V2010.AccountContext.QueueContext.MemberList
 * @description Initialize the MemberList
 *
 * @param {V2010} version - Version that contains the resource
 * @param {string} accountSid - The account_sid
 * @param {string} queueSid - A string that uniquely identifies this queue
 *
 * @returns {function} - MemberListInstance
 */
function MemberList(version, accountSid, queueSid) {
  /**
   * @memberof Twilio.Api.V2010.AccountContext.QueueContext.MemberList
   *
   * @param {string} sid - sid of instance
   *
   * @returns MemberContext
   */
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
   * @memberof MemberList
   *
   * @description Streams MemberInstance records from the API.
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
  MemberListInstance.each = function each(opts, callback) {
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
   * @memberof MemberList
   *
   * @description Lists MemberInstance records from the API as a list.
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
  MemberListInstance.list = function list(opts, callback) {
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
   * @memberof MemberList
   *
   * @description Retrieve a single page of MemberInstance records from the API.
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
  MemberListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new MemberPage(
        this._version,
        payload,
        this._solution.accountSid,
        this._solution.queueSid
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
   * @memberof Twilio.Api.V2010.AccountContext.QueueContext.MemberList
   *
   * @description Constructs a MemberContext
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
 * @constructor Twilio.Api.V2010.AccountContext.QueueContext.MemberInstance
 * @augments InstanceResource
 * @description Initialize the MemberContext
 *
 * @property {string} callSid - Unique string that identifies this resource
 * @property {Date} dateEnqueued - The date the member was enqueued
 * @property {number} position - This member's current position in the queue.
 * @property {string} uri - The uri
 * @property {number} waitTime -
 *          The number of seconds the member has been in the queue.
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} queueSid - The Queue in which to find the members
 * @param {sid} callSid - The call_sid
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
 * @description Fetch a MemberInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched MemberInstance
 */
MemberInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new MemberInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.queueSid,
      this._solution.callSid
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
 * @description Update the MemberInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object} opts - ...
 * @param {string} opts.url - The url
 * @param {string} opts.method - The method
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated MemberInstance
 */
MemberInstance.prototype.update = function update(opts, callback) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameters url, method are missing.');  // jshint ignore:line
  }
  if (_.isUndefined(opts.url)) {
    throw new Error('Required parameter "url" missing.');
  }
  if (_.isUndefined(opts.method)) {
    throw new Error('Required parameter "method" missing.');
  }

  var deferred = Q.defer();
  var data = values.of({
    'Url': opts.url,
    'Method': opts.method
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new MemberInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.queueSid,
      this._solution.callSid
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
 * @constructor Twilio.Api.V2010.AccountContext.QueueContext.MemberContext
 * @augments InstanceContext
 * @description Initialize the MemberContext
 *
 * @param {V2010} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} queueSid - The Queue in which to find the members
 * @param {sid} callSid - The call_sid
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
 * @description Fetch a MemberInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched MemberInstance
 */
MemberContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new MemberInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.queueSid,
      this._solution.callSid
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
 * @description Update the MemberInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object} opts - ...
 * @param {string} opts.url - The url
 * @param {string} opts.method - The method
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated MemberInstance
 */
MemberContext.prototype.update = function update(opts, callback) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameters url, method are missing.');  // jshint ignore:line
  }
  if (_.isUndefined(opts.url)) {
    throw new Error('Required parameter "url" missing.');
  }
  if (_.isUndefined(opts.method)) {
    throw new Error('Required parameter "method" missing.');
  }

  var deferred = Q.defer();
  var data = values.of({
    'Url': opts.url,
    'Method': opts.method
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new MemberInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.queueSid,
      this._solution.callSid
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
  MemberPage: MemberPage,
  MemberList: MemberList,
  MemberInstance: MemberInstance,
  MemberContext: MemberContext
};
