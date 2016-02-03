'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var MemberList = require('./queue/member').MemberList;
var Page = require('../../../../base/Page');
var deserialize = require('../../../../base/deserialize');
var values = require('../../../../base/values');

var QueuePage;
var QueueList;
var QueueInstance;
var QueueContext;

/**
 * @constructor Twilio.Api.V2010.AccountContext.QueuePage
 * @augments Page
 * @description Initialize the QueuePage
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} response - Response from the API
 * @param {string} accountSid - The account_sid
 *
 * @returns QueuePage
 */
function QueuePage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(QueuePage.prototype, Page.prototype);
QueuePage.prototype.constructor = QueuePage;

/**
 * Build an instance of QueueInstance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns QueueInstance
 */
QueuePage.prototype.getInstance = function getInstance(payload) {
  return new QueueInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * @constructor Twilio.Api.V2010.AccountContext.QueueList
 * @description Initialize the QueueList
 *
 * @param {V2010} version - Version that contains the resource
 * @param {string} accountSid - The account_sid
 *
 * @returns {function} - QueueListInstance
 */
function QueueList(version, accountSid) {
  /**
   * @memberof Twilio.Api.V2010.AccountContext.QueueList
   *
   * @param {string} sid - sid of instance
   *
   * @returns QueueContext
   */
  function QueueListInstance(sid) {
    return QueueListInstance.get(sid);
  }

  QueueListInstance._version = version;
  // Path Solution
  QueueListInstance._solution = {
    accountSid: accountSid
  };
  QueueListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Queues.json' // jshint ignore:line
  )(QueueListInstance._solution);
  /**
   * @memberof QueueList
   *
   * @description Streams QueueInstance records from the API.
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
  QueueListInstance.each = function each(opts, callback) {
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
   * @memberof QueueList
   *
   * @description Lists QueueInstance records from the API as a list.
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
  QueueListInstance.list = function list(opts, callback) {
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
   * @memberof QueueList
   *
   * @description Retrieve a single page of QueueInstance records from the API.
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
  QueueListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new QueuePage(
        this._version,
        payload,
        this._solution.accountSid
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
   * @memberof QueueList
   *
   * @description Create a new QueueInstance
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] -
   *          A user-provided string that identifies this queue.
   * @param {number} [opts.maxSize] - The max number of calls allowed in the queue
   * @param {function} [callback] - Callback to handle created record
   *
   * @returns {Promise} Resolves to newly created QueueInstance
   */
  QueueListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': opts.friendlyName,
      'MaxSize': opts.maxSize
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new QueueInstance(
        this._version,
        payload,
        this._solution.accountSid
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
   * @memberof Twilio.Api.V2010.AccountContext.QueueList
   *
   * @description Constructs a QueueContext
   *
   * @param {string} sid - Fetch by unique queue Sid
   *
   * @returns QueueContext
   */
  QueueListInstance.get = function get(sid) {
    return new QueueContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return QueueListInstance;
}


/**
 * @constructor Twilio.Api.V2010.AccountContext.QueueInstance
 * @augments InstanceResource
 * @description Initialize the QueueContext
 *
 * @property {string} accountSid - The account_sid
 * @property {number} averageWaitTime - Average wait time of members in the queue
 * @property {number} currentSize - The count of calls currently in the queue.
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} friendlyName -
 *          A user-provided string that identifies this queue.
 * @property {number} maxSize - The max number of calls allowed in the queue
 * @property {string} sid - A string that uniquely identifies this queue
 * @property {string} uri - The uri
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique queue Sid
 */
function QueueInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    averageWaitTime: deserialize.integer(payload.average_wait_time), // jshint ignore:line,
    currentSize: deserialize.integer(payload.current_size), // jshint ignore:line,
    dateCreated: deserialize.rfc2822DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.rfc2822DateTime(payload.date_updated), // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    maxSize: deserialize.integer(payload.max_size), // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(QueueInstance.prototype, InstanceResource.prototype);
QueueInstance.prototype.constructor = QueueInstance;

Object.defineProperty(QueueInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new QueueContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'averageWaitTime', {
  get: function() {
    return this._properties.averageWaitTime;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'currentSize', {
  get: function() {
    return this._properties.currentSize;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'maxSize', {
  get: function() {
    return this._properties.maxSize;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * @description Fetch a QueueInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched QueueInstance
 */
QueueInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new QueueInstance(
      this._version,
      payload,
      this._solution.accountSid,
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
 * @description Update the QueueInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - A human readable description of the queue
 * @param {number} [opts.maxSize] - The max number of members allowed in the queue
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated QueueInstance
 */
QueueInstance.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': opts.friendlyName,
    'MaxSize': opts.maxSize
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new QueueInstance(
      this._version,
      payload,
      this._solution.accountSid,
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
 * @description Deletes the QueueInstance
 *
 * @param {function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
QueueInstance.prototype.remove = function remove(callback) {
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
 * Access the members
 *
 * @returns members
 */
QueueInstance.prototype.members = function members() {
  return this._proxy.members;
};


/**
 * @constructor Twilio.Api.V2010.AccountContext.QueueContext
 * @augments InstanceContext
 * @description Initialize the QueueContext
 *
 * @property {Twilio.Api.V2010.AccountContext.QueueContext.MemberList} members -
 *          members resource
 *
 * @param {V2010} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique queue Sid
 */
function QueueContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Queues/<%= sid %>.json' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._members = undefined;
}

_.extend(QueueContext.prototype, InstanceContext.prototype);
QueueContext.prototype.constructor = QueueContext;

/**
 * @description Fetch a QueueInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched QueueInstance
 */
QueueContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new QueueInstance(
      this._version,
      payload,
      this._solution.accountSid,
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
 * @description Update the QueueInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - A human readable description of the queue
 * @param {number} [opts.maxSize] - The max number of members allowed in the queue
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated QueueInstance
 */
QueueContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': opts.friendlyName,
    'MaxSize': opts.maxSize
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new QueueInstance(
      this._version,
      payload,
      this._solution.accountSid,
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
 * @description Deletes the QueueInstance
 *
 * @param {function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
QueueContext.prototype.remove = function remove(callback) {
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

Object.defineProperty(QueueContext.prototype,
  'members', {
  get: function() {
    if (!this._members) {
      this._members = new MemberList(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }
    return this._members;
  },
});

module.exports = {
  QueuePage: QueuePage,
  QueueList: QueueList,
  QueueInstance: QueueInstance,
  QueueContext: QueueContext
};
