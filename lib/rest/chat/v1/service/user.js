'use strict';

var _ = require('lodash');
var Q = require('q');
var Page = require('../../../../base/Page');
var deserialize = require('../../../../base/deserialize');
var values = require('../../../../base/values');

var UserPage;
var UserList;
var UserInstance;
var UserContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Chat.V1.ServiceContext.UserPage
 * @augments Page
 * @description Initialize the UserPage
 *
 * @param {Twilio.Chat.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns UserPage
 */
/* jshint ignore:end */
function UserPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
}

_.extend(UserPage.prototype, Page.prototype);
UserPage.prototype.constructor = UserPage;

/* jshint ignore:start */
/**
 * Build an instance of UserInstance
 *
 * @function getInstance
 * @memberof Twilio.Chat.V1.ServiceContext.UserPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns UserInstance
 */
/* jshint ignore:end */
UserPage.prototype.getInstance = function getInstance(payload) {
  return new UserInstance(
    this._version,
    payload,
    this._solution.serviceSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Chat.V1.ServiceContext.UserList
 * @description Initialize the UserList
 *
 * @param {Twilio.Chat.V1} version - Version of the resource
 * @param {string} serviceSid - The service_sid
 */
/* jshint ignore:end */
function UserList(version, serviceSid) {
  /* jshint ignore:start */
  /**
   * @function users
   * @memberof Twilio.Chat.V1.ServiceContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Chat.V1.ServiceContext.UserContext}
   */
  /* jshint ignore:end */
  function UserListInstance(sid) {
    return UserListInstance.get(sid);
  }

  UserListInstance._version = version;
  // Path Solution
  UserListInstance._solution = {
    serviceSid: serviceSid
  };
  UserListInstance._uri = _.template(
    '/Services/<%= serviceSid %>/Users' // jshint ignore:line
  )(UserListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a UserInstance
   *
   * @function create
   * @memberof Twilio.Chat.V1.ServiceContext.UserList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.identity - The identity
   * @param {string} [opts.roleSid] - The role_sid
   * @param {string} [opts.attributes] - The attributes
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed UserInstance
   */
  /* jshint ignore:end */
  UserListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.identity)) {
      throw new Error('Required parameter "opts.identity" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Identity': opts.identity,
      'RoleSid': opts.roleSid,
      'Attributes': opts.attributes,
      'FriendlyName': opts.friendlyName
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new UserInstance(
        this._version,
        payload,
        this._solution.serviceSid,
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

  /* jshint ignore:start */
  /**
   * Streams UserInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Chat.V1.ServiceContext.UserList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize=50] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   * callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  UserListInstance.each = function each(opts, callback) {
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

  /* jshint ignore:start */
  /**
   * @description Lists UserInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Chat.V1.ServiceContext.UserList
   * @instance
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
  /* jshint ignore:end */
  UserListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
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

  /* jshint ignore:start */
  /**
   * Retrieve a single page of UserInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Chat.V1.ServiceContext.UserList
   * @instance
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
  /* jshint ignore:end */
  UserListInstance.page = function page(opts, callback) {
    opts = opts || {};

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
      deferred.resolve(new UserPage(
        this._version,
        payload,
        this._solution
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

  /* jshint ignore:start */
  /**
   * Constructs a user
   *
   * @function get
   * @memberof Twilio.Chat.V1.ServiceContext.UserList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Chat.V1.ServiceContext.UserContext}
   */
  /* jshint ignore:end */
  UserListInstance.get = function get(sid) {
    return new UserContext(
      this._version,
      this._solution.serviceSid,
      sid
    );
  };

  return UserListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.Chat.V1.ServiceContext.UserInstance
 * @description Initialize the UserContext
 *
 * @property {string} sid - The sid
 * @property {string} accountSid - The account_sid
 * @property {string} serviceSid - The service_sid
 * @property {string} roleSid - The role_sid
 * @property {string} identity - The identity
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} url - The url
 *
 * @param {Twilio.Chat.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} serviceSid - The service_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
function UserInstance(version, payload, serviceSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.roleSid = payload.role_sid; // jshint ignore:line
  this.identity = payload.identity; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    serviceSid: serviceSid,
    sid: sid || this.sid,
  };
}

Object.defineProperty(UserInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new UserContext(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

/* jshint ignore:start */
/**
 * fetch a UserInstance
 *
 * @function fetch
 * @memberof Twilio.Chat.V1.ServiceContext.UserInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed UserInstance
 */
/* jshint ignore:end */
UserInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a UserInstance
 *
 * @function remove
 * @memberof Twilio.Chat.V1.ServiceContext.UserInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed UserInstance
 */
/* jshint ignore:end */
UserInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * update a UserInstance
 *
 * @function update
 * @memberof Twilio.Chat.V1.ServiceContext.UserInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.roleSid] - The role_sid
 * @param {string} [opts.attributes] - The attributes
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed UserInstance
 */
/* jshint ignore:end */
UserInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Chat.V1.ServiceContext.UserContext
 * @description Initialize the UserContext
 *
 * @param {Twilio.Chat.V1} version - Version of the resource
 * @param {sid} serviceSid - The service_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
function UserContext(version, serviceSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    serviceSid: serviceSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Services/<%= serviceSid %>/Users/<%= sid %>' // jshint ignore:line
  )(this._solution);
}

/* jshint ignore:start */
/**
 * fetch a UserInstance
 *
 * @function fetch
 * @memberof Twilio.Chat.V1.ServiceContext.UserContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed UserInstance
 */
/* jshint ignore:end */
UserContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new UserInstance(
      this._version,
      payload,
      this._solution.serviceSid,
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

/* jshint ignore:start */
/**
 * remove a UserInstance
 *
 * @function remove
 * @memberof Twilio.Chat.V1.ServiceContext.UserContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed UserInstance
 */
/* jshint ignore:end */
UserContext.prototype.remove = function remove(callback) {
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

/* jshint ignore:start */
/**
 * update a UserInstance
 *
 * @function update
 * @memberof Twilio.Chat.V1.ServiceContext.UserContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.roleSid] - The role_sid
 * @param {string} [opts.attributes] - The attributes
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed UserInstance
 */
/* jshint ignore:end */
UserContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'RoleSid': opts.roleSid,
    'Attributes': opts.attributes,
    'FriendlyName': opts.friendlyName
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new UserInstance(
      this._version,
      payload,
      this._solution.serviceSid,
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
  UserPage: UserPage,
  UserList: UserList,
  UserInstance: UserInstance,
  UserContext: UserContext
};
