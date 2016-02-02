'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var deserialize = require('../../../../base/deserialize');
var values = require('../../../../base/values');

var OutgoingCallerIdPage;
var OutgoingCallerIdList;
var OutgoingCallerIdInstance;
var OutgoingCallerIdContext;

/**
 * Initialize the OutgoingCallerIdPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} accountSid - The unique sid that identifies this account
 *
 * @returns OutgoingCallerIdPage
 */
function OutgoingCallerIdPage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(OutgoingCallerIdPage.prototype, Page.prototype);
OutgoingCallerIdPage.prototype.constructor = OutgoingCallerIdPage;

/**
 * Build an instance of OutgoingCallerIdInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns OutgoingCallerIdInstance
 */
OutgoingCallerIdPage.prototype.getInstance = function getInstance(payload) {
  return new OutgoingCallerIdInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * Initialize the OutgoingCallerIdList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} accountSid - The unique sid that identifies this account
 *
 * @returns OutgoingCallerIdList
 */
function OutgoingCallerIdList(version, accountSid) {
  function OutgoingCallerIdListInstance(sid) {
    return OutgoingCallerIdListInstance.get(sid);
  }

  OutgoingCallerIdListInstance._version = version;
  // Path Solution
  OutgoingCallerIdListInstance._solution = {
    accountSid: accountSid
  };
  OutgoingCallerIdListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/OutgoingCallerIds.json' // jshint ignore:line
  )(OutgoingCallerIdListInstance._solution);
  /**
   * Streams OutgoingCallerIdInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param {Function} callback - A callback function to process records
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
   * @param {string} [opts.phoneNumber] - Filter by phone number
   * @param {string} [opts.friendlyName] - Filter by friendly name
   */
  OutgoingCallerIdListInstance.each = function each(opts, callback) {
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
   * Lists OutgoingCallerIdInstance records from the API as a list.
   *
   * @param {string} [opts.phoneNumber] - Filter by phone number
   * @param {string} [opts.friendlyName] - Filter by friendly name
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
  OutgoingCallerIdListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of OutgoingCallerIdInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.phoneNumber] - Filter by phone number
   * @param {string} [opts.friendlyName] - Filter by friendly name
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of OutgoingCallerIdInstance
   */
  OutgoingCallerIdListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'PhoneNumber': opts.phoneNumber,
      'FriendlyName': opts.friendlyName,
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
      deferred.resolve(new OutgoingCallerIdPage(
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
   * Constructs a OutgoingCallerIdContext
   *
   * @param {string} sid - Fetch by unique outgoing-caller-id Sid
   *
   * @returns OutgoingCallerIdContext
   */
  OutgoingCallerIdListInstance.get = function get(sid) {
    return new OutgoingCallerIdContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return OutgoingCallerIdListInstance;
}


/**
 * Initialize the OutgoingCallerIdContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique outgoing-caller-id Sid
 *
 * @returns {OutgoingCallerIdContext}
 */
function OutgoingCallerIdInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    sid: payload.sid, // jshint ignore:line,
    dateCreated: deserialize.rfc2822DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.rfc2822DateTime(payload.date_updated), // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    accountSid: payload.account_sid, // jshint ignore:line,
    phoneNumber: payload.phone_number, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(OutgoingCallerIdInstance.prototype, InstanceResource.prototype);
OutgoingCallerIdInstance.prototype.constructor = OutgoingCallerIdInstance;

Object.defineProperty(OutgoingCallerIdInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new OutgoingCallerIdContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(OutgoingCallerIdInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(OutgoingCallerIdInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(OutgoingCallerIdInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(OutgoingCallerIdInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(OutgoingCallerIdInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(OutgoingCallerIdInstance.prototype,
  'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(OutgoingCallerIdInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a OutgoingCallerIdInstance
 *
 * @returns Fetched OutgoingCallerIdInstance
 */
OutgoingCallerIdInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new OutgoingCallerIdInstance(
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
 * Update the OutgoingCallerIdInstance
 *
 * @param {string} [opts.friendlyName] -
 *          A human readable description of the caller ID
 *
 * @returns Updated OutgoingCallerIdInstance
 */
OutgoingCallerIdInstance.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

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
    deferred.resolve(new OutgoingCallerIdInstance(
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
 * Deletes the OutgoingCallerIdInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
OutgoingCallerIdInstance.prototype.remove = function remove(callback) {
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
 * Initialize the OutgoingCallerIdContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique outgoing-caller-id Sid
 *
 * @returns {OutgoingCallerIdContext}
 */
function OutgoingCallerIdContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/OutgoingCallerIds/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(OutgoingCallerIdContext.prototype, InstanceContext.prototype);
OutgoingCallerIdContext.prototype.constructor = OutgoingCallerIdContext;

/**
 * Fetch a OutgoingCallerIdInstance
 *
 * @returns Fetched OutgoingCallerIdInstance
 */
OutgoingCallerIdContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new OutgoingCallerIdInstance(
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
 * Update the OutgoingCallerIdInstance
 *
 * @param {string} [opts.friendlyName] -
 *          A human readable description of the caller ID
 *
 * @returns Updated OutgoingCallerIdInstance
 */
OutgoingCallerIdContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

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
    deferred.resolve(new OutgoingCallerIdInstance(
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
 * Deletes the OutgoingCallerIdInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
OutgoingCallerIdContext.prototype.remove = function remove(callback) {
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
  OutgoingCallerIdPage: OutgoingCallerIdPage,
  OutgoingCallerIdList: OutgoingCallerIdList,
  OutgoingCallerIdInstance: OutgoingCallerIdInstance,
  OutgoingCallerIdContext: OutgoingCallerIdContext
};
