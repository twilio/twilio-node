'use strict';

var _ = require('lodash');
var Q = require('q');
var BindingList = require('./service/binding').BindingList;
var NotificationList = require('./service/notification').NotificationList;
var Page = require('../../../base/Page');
var deserialize = require('../../../base/deserialize');
var values = require('../../../base/values');

var ServicePage;
var ServiceList;
var ServiceInstance;
var ServiceContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Notify.V1.ServicePage
 * @augments Page
 * @description Initialize the ServicePage
 *
 * @param {Twilio.Notify.V1} version - Version of the resource
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
 * @memberof Twilio.Notify.V1.ServicePage
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
 * @constructor Twilio.Notify.V1.ServiceList
 * @description Initialize the ServiceList
 *
 * @param {Twilio.Notify.V1} version - Version of the resource
 */
/* jshint ignore:end */
function ServiceList(version) {
  /* jshint ignore:start */
  /**
   * @function services
   * @memberof Twilio.Notify.V1
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Notify.V1.ServiceContext}
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
   * @memberof Twilio.Notify.V1.ServiceList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.apnCredentialSid] - The apn_credential_sid
   * @param {string} [opts.gcmCredentialSid] - The gcm_credential_sid
   * @param {string} [opts.messagingServiceSid] - The messaging_service_sid
   * @param {string} [opts.facebookMessengerPageId] - The facebook_messenger_page_id
   * @param {string} [opts.defaultApnNotificationProtocolVersion] -
   *          The default_apn_notification_protocol_version
   * @param {string} [opts.defaultGcmNotificationProtocolVersion] -
   *          The default_gcm_notification_protocol_version
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed ServiceInstance
   */
  /* jshint ignore:end */
  ServiceListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': opts.friendlyName,
      'ApnCredentialSid': opts.apnCredentialSid,
      'GcmCredentialSid': opts.gcmCredentialSid,
      'MessagingServiceSid': opts.messagingServiceSid,
      'FacebookMessengerPageId': opts.facebookMessengerPageId,
      'DefaultApnNotificationProtocolVersion': opts.defaultApnNotificationProtocolVersion,
      'DefaultGcmNotificationProtocolVersion': opts.defaultGcmNotificationProtocolVersion
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
   * @memberof Twilio.Notify.V1.ServiceList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] - The friendly_name
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
   * @memberof Twilio.Notify.V1.ServiceList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] - The friendly_name
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
   * @memberof Twilio.Notify.V1.ServiceList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] - The friendly_name
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
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
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
   * @memberof Twilio.Notify.V1.ServiceList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Notify.V1.ServiceContext}
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
 * @constructor Twilio.Notify.V1.ServiceInstance
 * @description Initialize the ServiceContext
 *
 * @property {string} sid - The sid
 * @property {string} accountSid - The account_sid
 * @property {string} friendlyName - The friendly_name
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} apnCredentialSid - The apn_credential_sid
 * @property {string} gcmCredentialSid - The gcm_credential_sid
 * @property {string} messagingServiceSid - The messaging_service_sid
 * @property {string} facebookMessengerPageId - The facebook_messenger_page_id
 * @property {string} defaultApnNotificationProtocolVersion -
 *          The default_apn_notification_protocol_version
 * @property {string} defaultGcmNotificationProtocolVersion -
 *          The default_gcm_notification_protocol_version
 * @property {string} url - The url
 * @property {string} links - The links
 *
 * @param {Twilio.Notify.V1} version - Version of the resource
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
  this.apnCredentialSid = payload.apn_credential_sid; // jshint ignore:line
  this.gcmCredentialSid = payload.gcm_credential_sid; // jshint ignore:line
  this.messagingServiceSid = payload.messaging_service_sid; // jshint ignore:line
  this.facebookMessengerPageId = payload.facebook_messenger_page_id; // jshint ignore:line
  this.defaultApnNotificationProtocolVersion = payload.default_apn_notification_protocol_version; // jshint ignore:line
  this.defaultGcmNotificationProtocolVersion = payload.default_gcm_notification_protocol_version; // jshint ignore:line
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
 * remove a ServiceInstance
 *
 * @function remove
 * @memberof Twilio.Notify.V1.ServiceInstance
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
 * fetch a ServiceInstance
 *
 * @function fetch
 * @memberof Twilio.Notify.V1.ServiceInstance
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
 * update a ServiceInstance
 *
 * @function update
 * @memberof Twilio.Notify.V1.ServiceInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.apnCredentialSid] - The apn_credential_sid
 * @param {string} [opts.gcmCredentialSid] - The gcm_credential_sid
 * @param {string} [opts.messagingServiceSid] - The messaging_service_sid
 * @param {string} [opts.facebookMessengerPageId] - The facebook_messenger_page_id
 * @param {string} [opts.defaultApnNotificationProtocolVersion] -
 *          The default_apn_notification_protocol_version
 * @param {string} [opts.defaultGcmNotificationProtocolVersion] -
 *          The default_gcm_notification_protocol_version
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
 * Access the bindings
 *
 * @function bindings
 * @memberof Twilio.Notify.V1.ServiceInstance
 * @instance
 *
 * @returns {Twilio.Notify.V1.ServiceContext.BindingList}
 */
/* jshint ignore:end */
ServiceInstance.prototype.bindings = function bindings() {
  return this._proxy.bindings;
};

/* jshint ignore:start */
/**
 * Access the notifications
 *
 * @function notifications
 * @memberof Twilio.Notify.V1.ServiceInstance
 * @instance
 *
 * @returns {Twilio.Notify.V1.ServiceContext.NotificationList}
 */
/* jshint ignore:end */
ServiceInstance.prototype.notifications = function notifications() {
  return this._proxy.notifications;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Notify.V1.ServiceContext
 * @description Initialize the ServiceContext
 *
 * @property {Twilio.Notify.V1.ServiceContext.BindingList} bindings -
 *          bindings resource
 * @property {Twilio.Notify.V1.ServiceContext.NotificationList} notifications -
 *          notifications resource
 *
 * @param {Twilio.Notify.V1} version - Version of the resource
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
  this._bindings = undefined;
  this._notifications = undefined;
}

/* jshint ignore:start */
/**
 * remove a ServiceInstance
 *
 * @function remove
 * @memberof Twilio.Notify.V1.ServiceContext
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
 * fetch a ServiceInstance
 *
 * @function fetch
 * @memberof Twilio.Notify.V1.ServiceContext
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
 * update a ServiceInstance
 *
 * @function update
 * @memberof Twilio.Notify.V1.ServiceContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.apnCredentialSid] - The apn_credential_sid
 * @param {string} [opts.gcmCredentialSid] - The gcm_credential_sid
 * @param {string} [opts.messagingServiceSid] - The messaging_service_sid
 * @param {string} [opts.facebookMessengerPageId] - The facebook_messenger_page_id
 * @param {string} [opts.defaultApnNotificationProtocolVersion] -
 *          The default_apn_notification_protocol_version
 * @param {string} [opts.defaultGcmNotificationProtocolVersion] -
 *          The default_gcm_notification_protocol_version
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
    'ApnCredentialSid': opts.apnCredentialSid,
    'GcmCredentialSid': opts.gcmCredentialSid,
    'MessagingServiceSid': opts.messagingServiceSid,
    'FacebookMessengerPageId': opts.facebookMessengerPageId,
    'DefaultApnNotificationProtocolVersion': opts.defaultApnNotificationProtocolVersion,
    'DefaultGcmNotificationProtocolVersion': opts.defaultGcmNotificationProtocolVersion
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
  'bindings', {
  get: function() {
    if (!this._bindings) {
      this._bindings = new BindingList(
        this._version,
        this._solution.sid
      );
    }
    return this._bindings;
  },
});

Object.defineProperty(ServiceContext.prototype,
  'notifications', {
  get: function() {
    if (!this._notifications) {
      this._notifications = new NotificationList(
        this._version,
        this._solution.sid
      );
    }
    return this._notifications;
  },
});

module.exports = {
  ServicePage: ServicePage,
  ServiceList: ServiceList,
  ServiceInstance: ServiceInstance,
  ServiceContext: ServiceContext
};
