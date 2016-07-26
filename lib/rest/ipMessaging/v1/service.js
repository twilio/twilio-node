'use strict';

var _ = require('lodash');
var Q = require('q');
var ChannelList = require('./service/channel').ChannelList;
var Page = require('../../../base/Page');
var RoleList = require('./service/role').RoleList;
var UserList = require('./service/user').UserList;
var deserialize = require('../../../base/deserialize');
var values = require('../../../base/values');

var ServicePage;
var ServiceList;
var ServiceInstance;
var ServiceContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.IpMessaging.V1.ServicePage
 * @augments Page
 * @description Initialize the ServicePage
 *
 * @param {Twilio.IpMessaging.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns ServicePage
 */
/* jshint ignore:end */
function ServicePage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
}

_.extend(ServicePage.prototype, Page.prototype);
ServicePage.prototype.constructor = ServicePage;

/* jshint ignore:start */
/**
 * Build an instance of ServiceInstance
 *
 * @function getInstance
 * @memberof Twilio.IpMessaging.V1.ServicePage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns ServiceInstance
 */
/* jshint ignore:end */
ServicePage.prototype.getInstance = function getInstance(payload) {
  return new ServiceInstance(
    this._version,
    payload
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.IpMessaging.V1.ServiceList
 * @description Initialize the ServiceList
 *
 * @param {Twilio.IpMessaging.V1} version - Version of the resource
 */
/* jshint ignore:end */
function ServiceList(version) {
  /* jshint ignore:start */
  /**
   * @function services
   * @memberof Twilio.IpMessaging.V1
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.IpMessaging.V1.ServiceContext}
   */
  /* jshint ignore:end */
  function ServiceListInstance(sid) {
    return ServiceListInstance.get(sid);
  }

  ServiceListInstance._version = version;
  // Path Solution
  ServiceListInstance._solution = {};
  ServiceListInstance._uri = _.template(
    '/Services' // jshint ignore:line
  )(ServiceListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a ServiceInstance
   *
   * @function create
   * @memberof Twilio.IpMessaging.V1.ServiceList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.friendlyName - The friendly_name
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed ServiceInstance
   */
  /* jshint ignore:end */
  ServiceListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "opts.friendlyName" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': opts.friendlyName
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new ServiceInstance(
        this._version,
        payload,
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
   * Streams ServiceInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.IpMessaging.V1.ServiceList
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
  ServiceListInstance.each = function each(opts, callback) {
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
   * @description Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.IpMessaging.V1.ServiceList
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
  ServiceListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.IpMessaging.V1.ServiceList
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
  ServiceListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new ServicePage(
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
   * Constructs a service
   *
   * @function get
   * @memberof Twilio.IpMessaging.V1.ServiceList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.IpMessaging.V1.ServiceContext}
   */
  /* jshint ignore:end */
  ServiceListInstance.get = function get(sid) {
    return new ServiceContext(
      this._version,
      sid
    );
  };

  return ServiceListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.IpMessaging.V1.ServiceInstance
 * @description Initialize the ServiceContext
 *
 * @property {string} sid - The sid
 * @property {string} accountSid - The account_sid
 * @property {string} friendlyName - The friendly_name
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} defaultServiceRoleSid - The default_service_role_sid
 * @property {string} defaultChannelRoleSid - The default_channel_role_sid
 * @property {string} defaultChannelCreatorRoleSid -
 *          The default_channel_creator_role_sid
 * @property {string} readStatusEnabled - The read_status_enabled
 * @property {number} typingIndicatorTimeout - The typing_indicator_timeout
 * @property {number} consumptionReportInterval - The consumption_report_interval
 * @property {string} webhooks - The webhooks
 * @property {string} url - The url
 * @property {string} links - The links
 *
 * @param {Twilio.IpMessaging.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
function ServiceInstance(version, payload, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.defaultServiceRoleSid = payload.default_service_role_sid; // jshint ignore:line
  this.defaultChannelRoleSid = payload.default_channel_role_sid; // jshint ignore:line
  this.defaultChannelCreatorRoleSid = payload.default_channel_creator_role_sid; // jshint ignore:line
  this.readStatusEnabled = payload.read_status_enabled; // jshint ignore:line
  this.typingIndicatorTimeout = deserialize.integer(payload.typing_indicator_timeout); // jshint ignore:line
  this.consumptionReportInterval = deserialize.integer(payload.consumption_report_interval); // jshint ignore:line
  this.webhooks = payload.webhooks; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    sid: sid || this.sid,
  };
}

Object.defineProperty(ServiceInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ServiceContext(
        this._version,
        this._solution.sid
      );
    }

    return this._context;
  },
});

/* jshint ignore:start */
/**
 * fetch a ServiceInstance
 *
 * @function fetch
 * @memberof Twilio.IpMessaging.V1.ServiceInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
ServiceInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a ServiceInstance
 *
 * @function remove
 * @memberof Twilio.IpMessaging.V1.ServiceInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
ServiceInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * update a ServiceInstance
 *
 * @function update
 * @memberof Twilio.IpMessaging.V1.ServiceInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.defaultServiceRoleSid] - The default_service_role_sid
 * @param {string} [opts.defaultChannelRoleSid] - The default_channel_role_sid
 * @param {string} [opts.defaultChannelCreatorRoleSid] -
 *          The default_channel_creator_role_sid
 * @param {string} [opts.readStatusEnabled] - The read_status_enabled
 * @param {number} [opts.typingIndicatorTimeout] - The typing_indicator_timeout
 * @param {number} [opts.consumptionReportInterval] -
 *          The consumption_report_interval
 * @param {string} [opts.webhooks] - The webhooks
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
ServiceInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * Access the channels
 *
 * @function channels
 * @memberof Twilio.IpMessaging.V1.ServiceInstance
 * @instance
 *
 * @returns {Twilio.IpMessaging.V1.ServiceContext.ChannelList}
 */
/* jshint ignore:end */
ServiceInstance.prototype.channels = function channels() {
  return this._proxy.channels;
};

/* jshint ignore:start */
/**
 * Access the roles
 *
 * @function roles
 * @memberof Twilio.IpMessaging.V1.ServiceInstance
 * @instance
 *
 * @returns {Twilio.IpMessaging.V1.ServiceContext.RoleList}
 */
/* jshint ignore:end */
ServiceInstance.prototype.roles = function roles() {
  return this._proxy.roles;
};

/* jshint ignore:start */
/**
 * Access the users
 *
 * @function users
 * @memberof Twilio.IpMessaging.V1.ServiceInstance
 * @instance
 *
 * @returns {Twilio.IpMessaging.V1.ServiceContext.UserList}
 */
/* jshint ignore:end */
ServiceInstance.prototype.users = function users() {
  return this._proxy.users;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.IpMessaging.V1.ServiceContext
 * @description Initialize the ServiceContext
 *
 * @property {Twilio.IpMessaging.V1.ServiceContext.ChannelList} channels -
 *          channels resource
 * @property {Twilio.IpMessaging.V1.ServiceContext.RoleList} roles - roles resource
 * @property {Twilio.IpMessaging.V1.ServiceContext.UserList} users - users resource
 *
 * @param {Twilio.IpMessaging.V1} version - Version of the resource
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
function ServiceContext(version, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    sid: sid,
  };
  this._uri = _.template(
    '/Services/<%= sid %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._channels = undefined;
  this._roles = undefined;
  this._users = undefined;
}

/* jshint ignore:start */
/**
 * fetch a ServiceInstance
 *
 * @function fetch
 * @memberof Twilio.IpMessaging.V1.ServiceContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
ServiceContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ServiceInstance(
      this._version,
      payload,
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
 * remove a ServiceInstance
 *
 * @function remove
 * @memberof Twilio.IpMessaging.V1.ServiceContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
ServiceContext.prototype.remove = function remove(callback) {
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
 * update a ServiceInstance
 *
 * @function update
 * @memberof Twilio.IpMessaging.V1.ServiceContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.defaultServiceRoleSid] - The default_service_role_sid
 * @param {string} [opts.defaultChannelRoleSid] - The default_channel_role_sid
 * @param {string} [opts.defaultChannelCreatorRoleSid] -
 *          The default_channel_creator_role_sid
 * @param {string} [opts.readStatusEnabled] - The read_status_enabled
 * @param {number} [opts.typingIndicatorTimeout] - The typing_indicator_timeout
 * @param {number} [opts.consumptionReportInterval] -
 *          The consumption_report_interval
 * @param {string} [opts.webhooks] - The webhooks
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
ServiceContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': opts.friendlyName,
    'DefaultServiceRoleSid': opts.defaultServiceRoleSid,
    'DefaultChannelRoleSid': opts.defaultChannelRoleSid,
    'DefaultChannelCreatorRoleSid': opts.defaultChannelCreatorRoleSid,
    'ReadStatusEnabled': opts.readStatusEnabled,
    'TypingIndicatorTimeout': opts.typingIndicatorTimeout,
    'ConsumptionReportInterval': opts.consumptionReportInterval,
    'Webhooks': opts.webhooks
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ServiceInstance(
      this._version,
      payload,
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

Object.defineProperty(ServiceContext.prototype,
  'channels', {
  get: function() {
    if (!this._channels) {
      this._channels = new ChannelList(
        this._version,
        this._solution.sid
      );
    }
    return this._channels;
  },
});

Object.defineProperty(ServiceContext.prototype,
  'roles', {
  get: function() {
    if (!this._roles) {
      this._roles = new RoleList(
        this._version,
        this._solution.sid
      );
    }
    return this._roles;
  },
});

Object.defineProperty(ServiceContext.prototype,
  'users', {
  get: function() {
    if (!this._users) {
      this._users = new UserList(
        this._version,
        this._solution.sid
      );
    }
    return this._users;
  },
});

module.exports = {
  ServicePage: ServicePage,
  ServiceList: ServiceList,
  ServiceInstance: ServiceInstance,
  ServiceContext: ServiceContext
};
