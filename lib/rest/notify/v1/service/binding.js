'use strict';

var _ = require('lodash');
var Q = require('q');
var Page = require('../../../../base/Page');
var deserialize = require('../../../../base/deserialize');
var serialize = require('../../../../base/serialize');
var values = require('../../../../base/values');

var BindingPage;
var BindingList;
var BindingInstance;
var BindingContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Notify.V1.ServiceContext.BindingPage
 * @augments Page
 * @description Initialize the BindingPage
 *
 * @param {Twilio.Notify.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns BindingPage
 */
/* jshint ignore:end */
function BindingPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
}

_.extend(BindingPage.prototype, Page.prototype);
BindingPage.prototype.constructor = BindingPage;

/* jshint ignore:start */
/**
 * Build an instance of BindingInstance
 *
 * @function getInstance
 * @memberof Twilio.Notify.V1.ServiceContext.BindingPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns BindingInstance
 */
/* jshint ignore:end */
BindingPage.prototype.getInstance = function getInstance(payload) {
  return new BindingInstance(
    this._version,
    payload,
    this._solution.serviceSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Notify.V1.ServiceContext.BindingList
 * @description Initialize the BindingList
 *
 * @param {Twilio.Notify.V1} version - Version of the resource
 * @param {string} serviceSid - The service_sid
 */
/* jshint ignore:end */
function BindingList(version, serviceSid) {
  /* jshint ignore:start */
  /**
   * @function bindings
   * @memberof Twilio.Notify.V1.ServiceContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Notify.V1.ServiceContext.BindingContext}
   */
  /* jshint ignore:end */
  function BindingListInstance(sid) {
    return BindingListInstance.get(sid);
  }

  BindingListInstance._version = version;
  // Path Solution
  BindingListInstance._solution = {
    serviceSid: serviceSid
  };
  BindingListInstance._uri = _.template(
    '/Services/<%= serviceSid %>/Bindings' // jshint ignore:line
  )(BindingListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a BindingInstance
   *
   * @function create
   * @memberof Twilio.Notify.V1.ServiceContext.BindingList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.endpoint - The endpoint
   * @param {string} opts.identity - The identity
   * @param {binding.binding_type} opts.bindingType - The binding_type
   * @param {string} opts.address - The address
   * @param {string|list} [opts.tag] - The tag
   * @param {string} [opts.notificationProtocolVersion] -
   *          The notification_protocol_version
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed BindingInstance
   */
  /* jshint ignore:end */
  BindingListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.endpoint)) {
      throw new Error('Required parameter "opts.endpoint" missing.');
    }
    if (_.isUndefined(opts.identity)) {
      throw new Error('Required parameter "opts.identity" missing.');
    }
    if (_.isUndefined(opts.bindingType)) {
      throw new Error('Required parameter "opts.bindingType" missing.');
    }
    if (_.isUndefined(opts.address)) {
      throw new Error('Required parameter "opts.address" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Endpoint': opts.endpoint,
      'Identity': opts.identity,
      'BindingType': opts.bindingType,
      'Address': opts.address,
      'Tag': opts.tag,
      'NotificationProtocolVersion': opts.notificationProtocolVersion
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new BindingInstance(
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
   * Streams BindingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Notify.V1.ServiceContext.BindingList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.startDateBefore] - The start_date
   * @param {Date} [opts.startDate] - The start_date
   * @param {Date} [opts.startDateAfter] - The start_date
   * @param {Date} [opts.endDateBefore] - The end_date
   * @param {Date} [opts.endDate] - The end_date
   * @param {Date} [opts.endDateAfter] - The end_date
   * @param {string|list} [opts.identity] - The identity
   * @param {string|list} [opts.tag] - The tag
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
  BindingListInstance.each = function each(opts, callback) {
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
   * @description Lists BindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Notify.V1.ServiceContext.BindingList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.startDateBefore] - The start_date
   * @param {Date} [opts.startDate] - The start_date
   * @param {Date} [opts.startDateAfter] - The start_date
   * @param {Date} [opts.endDateBefore] - The end_date
   * @param {Date} [opts.endDate] - The end_date
   * @param {Date} [opts.endDateAfter] - The end_date
   * @param {string|list} [opts.identity] - The identity
   * @param {string|list} [opts.tag] - The tag
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
  BindingListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of BindingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Notify.V1.ServiceContext.BindingList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.startDateBefore] - The start_date
   * @param {Date} [opts.startDate] - The start_date
   * @param {Date} [opts.startDateAfter] - The start_date
   * @param {Date} [opts.endDateBefore] - The end_date
   * @param {Date} [opts.endDate] - The end_date
   * @param {Date} [opts.endDateAfter] - The end_date
   * @param {string|list} [opts.identity] - The identity
   * @param {string|list} [opts.tag] - The tag
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  BindingListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'StartDate<': serialize.iso8601Date(opts.startDateBefore),
      'StartDate': serialize.iso8601Date(opts.startDate),
      'StartDate>': serialize.iso8601Date(opts.startDateAfter),
      'EndDate<': serialize.iso8601Date(opts.endDateBefore),
      'EndDate': serialize.iso8601Date(opts.endDate),
      'EndDate>': serialize.iso8601Date(opts.endDateAfter),
      'Identity': opts.identity,
      'Tag': opts.tag,
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
      deferred.resolve(new BindingPage(
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
   * Constructs a binding
   *
   * @function get
   * @memberof Twilio.Notify.V1.ServiceContext.BindingList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Notify.V1.ServiceContext.BindingContext}
   */
  /* jshint ignore:end */
  BindingListInstance.get = function get(sid) {
    return new BindingContext(
      this._version,
      this._solution.serviceSid,
      sid
    );
  };

  return BindingListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.Notify.V1.ServiceContext.BindingInstance
 * @description Initialize the BindingContext
 *
 * @property {string} sid - The sid
 * @property {string} accountSid - The account_sid
 * @property {string} serviceSid - The service_sid
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} notificationProtocolVersion -
 *          The notification_protocol_version
 * @property {string} endpoint - The endpoint
 * @property {string} identity - The identity
 * @property {string} bindingType - The binding_type
 * @property {string} address - The address
 * @property {string} tags - The tags
 * @property {string} url - The url
 *
 * @param {Twilio.Notify.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} serviceSid - The service_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
function BindingInstance(version, payload, serviceSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.notificationProtocolVersion = payload.notification_protocol_version; // jshint ignore:line
  this.endpoint = payload.endpoint; // jshint ignore:line
  this.identity = payload.identity; // jshint ignore:line
  this.bindingType = payload.binding_type; // jshint ignore:line
  this.address = payload.address; // jshint ignore:line
  this.tags = payload.tags; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    serviceSid: serviceSid,
    sid: sid || this.sid,
  };
}

Object.defineProperty(BindingInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new BindingContext(
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
 * fetch a BindingInstance
 *
 * @function fetch
 * @memberof Twilio.Notify.V1.ServiceContext.BindingInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed BindingInstance
 */
/* jshint ignore:end */
BindingInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a BindingInstance
 *
 * @function remove
 * @memberof Twilio.Notify.V1.ServiceContext.BindingInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed BindingInstance
 */
/* jshint ignore:end */
BindingInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Notify.V1.ServiceContext.BindingContext
 * @description Initialize the BindingContext
 *
 * @param {Twilio.Notify.V1} version - Version of the resource
 * @param {sid} serviceSid - The service_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
function BindingContext(version, serviceSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    serviceSid: serviceSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Services/<%= serviceSid %>/Bindings/<%= sid %>' // jshint ignore:line
  )(this._solution);
}

/* jshint ignore:start */
/**
 * fetch a BindingInstance
 *
 * @function fetch
 * @memberof Twilio.Notify.V1.ServiceContext.BindingContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed BindingInstance
 */
/* jshint ignore:end */
BindingContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new BindingInstance(
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
 * remove a BindingInstance
 *
 * @function remove
 * @memberof Twilio.Notify.V1.ServiceContext.BindingContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed BindingInstance
 */
/* jshint ignore:end */
BindingContext.prototype.remove = function remove(callback) {
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
  BindingPage: BindingPage,
  BindingList: BindingList,
  BindingInstance: BindingInstance,
  BindingContext: BindingContext
};
