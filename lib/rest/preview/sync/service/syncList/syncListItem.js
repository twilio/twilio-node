'use strict';

var _ = require('lodash');
var Q = require('q');
var Page = require('../../../../../base/Page');
var deserialize = require('../../../../../base/deserialize');
var serialize = require('../../../../../base/serialize');
var values = require('../../../../../base/values');


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemList
 * @description Initialize the SyncListItemList
 *
 * @param {Twilio.Preview.Sync} version - Version of the resource
 * @param {string} serviceSid - The service_sid
 * @param {string} listSid - The list_sid
 */
/* jshint ignore:end */
function SyncListItemList(version, serviceSid, listSid) {
  /* jshint ignore:start */
  /**
   * @function syncListItems
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemContext}
   */
  /* jshint ignore:end */
  function SyncListItemListInstance(sid) {
    return SyncListItemListInstance.get(sid);
  }

  SyncListItemListInstance._version = version;
  // Path Solution
  SyncListItemListInstance._solution = {
    serviceSid: serviceSid,
    listSid: listSid
  };
  SyncListItemListInstance._uri = _.template(
    '/Services/<%= serviceSid %>/Lists/<%= listSid %>/Items' // jshint ignore:line
  )(SyncListItemListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a SyncListItemInstance
   *
   * @function create
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.data - The data
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed SyncListItemInstance
   */
  /* jshint ignore:end */
  SyncListItemListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.data)) {
      throw new Error('Required parameter "opts.data" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Data': serialize.object(_.get(opts, "data", undefined))
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new SyncListItemInstance(
        this._version,
        payload,
        this._solution.serviceSid,
        this._solution.listSid,
        this._solution.index
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
   * Streams SyncListItemInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {sync_list_item.query_result_order} [opts.order] - The order
   * @param {string} [opts.from] - The from
   * @param {sync_list_item.query_from_bound_type} [opts.bounds] - The bounds
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
  SyncListItemListInstance.each = function each(opts, callback) {
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
    var currentResource = 0;
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
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
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
   * @description Lists SyncListItemInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {sync_list_item.query_result_order} [opts.order] - The order
   * @param {string} [opts.from] - The from
   * @param {sync_list_item.query_from_bound_type} [opts.bounds] - The bounds
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
  SyncListItemListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of SyncListItemInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {sync_list_item.query_result_order} [opts.order] - The order
   * @param {string} [opts.from] - The from
   * @param {sync_list_item.query_from_bound_type} [opts.bounds] - The bounds
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SyncListItemListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Order': _.get(opts, "order", undefined),
      'From': _.get(opts, "from", undefined),
      'Bounds': _.get(opts, "bounds", undefined),
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
      deferred.resolve(new SyncListItemPage(
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
   * Constructs a sync_list_item
   *
   * @function get
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemList
   * @instance
   *
   * @param {string} index - The index
   *
   * @returns {Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemContext}
   */
  /* jshint ignore:end */
  SyncListItemListInstance.get = function get(index) {
    return new SyncListItemContext(
      this._version,
      this._solution.serviceSid,
      this._solution.listSid,
      index
    );
  };

  return SyncListItemListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemPage
 * @augments Page
 * @description Initialize the SyncListItemPage
 *
 * @param {Twilio.Preview.Sync} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns SyncListItemPage
 */
/* jshint ignore:end */
function SyncListItemPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
}

_.extend(SyncListItemPage.prototype, Page.prototype);
SyncListItemPage.prototype.constructor = SyncListItemPage;

/* jshint ignore:start */
/**
 * Build an instance of SyncListItemInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns SyncListItemInstance
 */
/* jshint ignore:end */
SyncListItemPage.prototype.getInstance = function getInstance(payload) {
  return new SyncListItemInstance(
    this._version,
    payload,
    this._solution.serviceSid,
    this._solution.listSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemInstance
 * @description Initialize the SyncListItemContext
 *
 * @property {number} index - The index
 * @property {string} accountSid - The account_sid
 * @property {string} serviceSid - The service_sid
 * @property {string} listSid - The list_sid
 * @property {string} url - The url
 * @property {string} revision - The revision
 * @property {string} data - The data
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} createdBy - The created_by
 *
 * @param {Twilio.Preview.Sync} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} serviceSid - The service_sid
 * @param {sid_like} listSid - The list_sid
 * @param {integer} index - The index
 */
/* jshint ignore:end */
function SyncListItemInstance(version, payload, serviceSid, listSid, index) {
  this._version = version;

  // Marshaled Properties
  this.index = deserialize.integer(payload.index); // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.listSid = payload.list_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.revision = payload.revision; // jshint ignore:line
  this.data = payload.data; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.createdBy = payload.created_by; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    serviceSid: serviceSid,
    listSid: listSid,
    index: index || this.index,
  };
}

Object.defineProperty(SyncListItemInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new SyncListItemContext(
        this._version,
        this._solution.serviceSid,
        this._solution.listSid,
        this._solution.index
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a SyncListItemInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SyncListItemInstance
 */
/* jshint ignore:end */
SyncListItemInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a SyncListItemInstance
 *
 * @function remove
 * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SyncListItemInstance
 */
/* jshint ignore:end */
SyncListItemInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * update a SyncListItemInstance
 *
 * @function update
 * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemInstance
 * @instance
 *
 * @param {object} opts - ...
 * @param {string} opts.data - The data
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SyncListItemInstance
 */
/* jshint ignore:end */
SyncListItemInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemContext
 * @description Initialize the SyncListItemContext
 *
 * @param {Twilio.Preview.Sync} version - Version of the resource
 * @param {sid} serviceSid - The service_sid
 * @param {sid_like} listSid - The list_sid
 * @param {integer} index - The index
 */
/* jshint ignore:end */
function SyncListItemContext(version, serviceSid, listSid, index) {
  this._version = version;

  // Path Solution
  this._solution = {
    serviceSid: serviceSid,
    listSid: listSid,
    index: index,
  };
  this._uri = _.template(
    '/Services/<%= serviceSid %>/Lists/<%= listSid %>/Items/<%= index %>' // jshint ignore:line
  )(this._solution);
}

/* jshint ignore:start */
/**
 * fetch a SyncListItemInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SyncListItemInstance
 */
/* jshint ignore:end */
SyncListItemContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new SyncListItemInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.listSid,
      this._solution.index
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
 * remove a SyncListItemInstance
 *
 * @function remove
 * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SyncListItemInstance
 */
/* jshint ignore:end */
SyncListItemContext.prototype.remove = function remove(callback) {
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
 * update a SyncListItemInstance
 *
 * @function update
 * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemContext
 * @instance
 *
 * @param {object} opts - ...
 * @param {string} opts.data - The data
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SyncListItemInstance
 */
/* jshint ignore:end */
SyncListItemContext.prototype.update = function update(opts, callback) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameter "opts" missing.');
  }
  if (_.isUndefined(opts.data)) {
    throw new Error('Required parameter "opts.data" missing.');
  }

  var deferred = Q.defer();
  var data = values.of({
    'Data': serialize.object(_.get(opts, "data", undefined))
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new SyncListItemInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.listSid,
      this._solution.index
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
  SyncListItemList: SyncListItemList,
  SyncListItemPage: SyncListItemPage,
  SyncListItemInstance: SyncListItemInstance,
  SyncListItemContext: SyncListItemContext
};