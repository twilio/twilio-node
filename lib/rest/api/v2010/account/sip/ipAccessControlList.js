'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var IpAddressList = require('./ipAccessControlList/ipAddress').IpAddressList;
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var IpAccessControlListList;
var IpAccessControlListPage;
var IpAccessControlListInstance;
var IpAccessControlListContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListList
 * @description Initialize the IpAccessControlListList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 */
/* jshint ignore:end */
IpAccessControlListList = function IpAccessControlListList(version, accountSid)
                                                            {
  /* jshint ignore:start */
  /**
   * @function ipAccessControlLists
   * @memberof Twilio.Api.V2010.AccountContext.SipContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext}
   */
  /* jshint ignore:end */
  function IpAccessControlListListInstance(sid) {
    return IpAccessControlListListInstance.get(sid);
  }

  IpAccessControlListListInstance._version = version;
  // Path Solution
  IpAccessControlListListInstance._solution = {
    accountSid: accountSid
  };
  IpAccessControlListListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/SIP/IpAccessControlLists.json' // jshint ignore:line
  )(IpAccessControlListListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams IpAccessControlListInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListList
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
  IpAccessControlListListInstance.each = function each(opts, callback) {
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

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * @description Lists IpAccessControlListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListList
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
  IpAccessControlListListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of IpAccessControlListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListList
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
  IpAccessControlListListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new IpAccessControlListPage(
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
   * Retrieve a single target page of IpAccessControlListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  IpAccessControlListListInstance.getPage = function getPage(targetUrl, callback)
                                                              {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new IpAccessControlListPage(
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
   * create a IpAccessControlListInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.friendlyName -
   *          A human readable description of this resource
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed IpAccessControlListInstance
   */
  /* jshint ignore:end */
  IpAccessControlListListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "opts.friendlyName" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName')
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new IpAccessControlListInstance(
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

  /* jshint ignore:start */
  /**
   * Constructs a ip_access_control_list
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListList
   * @instance
   *
   * @param {string} sid - Fetch by unique ip-access-control-list Sid
   *
   * @returns {Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext}
   */
  /* jshint ignore:end */
  IpAccessControlListListInstance.get = function get(sid) {
    return new IpAccessControlListContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return IpAccessControlListListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListPage
 * @augments Page
 * @description Initialize the IpAccessControlListPage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns IpAccessControlListPage
 */
/* jshint ignore:end */
IpAccessControlListPage = function IpAccessControlListPage(version, response,
                                                            solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(IpAccessControlListPage.prototype, Page.prototype);
IpAccessControlListPage.prototype.constructor = IpAccessControlListPage;

/* jshint ignore:start */
/**
 * Build an instance of IpAccessControlListInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns IpAccessControlListInstance
 */
/* jshint ignore:end */
IpAccessControlListPage.prototype.getInstance = function getInstance(payload) {
  return new IpAccessControlListInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListInstance
 * @description Initialize the IpAccessControlListContext
 *
 * @property {string} sid - A string that uniquely identifies this resource
 * @property {string} accountSid - The unique sid that identifies this account
 * @property {string} friendlyName - A human readable description of this resource
 * @property {Date} dateCreated - The date this resource was created
 * @property {Date} dateUpdated - The date this resource was last updated
 * @property {string} subresourceUris - The subresource_uris
 * @property {string} uri - The URI for this resource
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique ip-access-control-list Sid
 */
/* jshint ignore:end */
IpAccessControlListInstance = function IpAccessControlListInstance(version,
    payload, accountSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.subresourceUris = payload.subresource_uris; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this.sid,
  };
};

Object.defineProperty(IpAccessControlListInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new IpAccessControlListContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a IpAccessControlListInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed IpAccessControlListInstance
 */
/* jshint ignore:end */
IpAccessControlListInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a IpAccessControlListInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListInstance
 * @instance
 *
 * @param {object} opts - ...
 * @param {string} opts.friendlyName -
 *          A human readable description of this resource
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed IpAccessControlListInstance
 */
/* jshint ignore:end */
IpAccessControlListInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * remove a IpAccessControlListInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed IpAccessControlListInstance
 */
/* jshint ignore:end */
IpAccessControlListInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Access the ipAddresses
 *
 * @function ipAddresses
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListInstance
 * @instance
 *
 * @returns {Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressList}
 */
/* jshint ignore:end */
IpAccessControlListInstance.prototype.ipAddresses = function ipAddresses() {
  return this._proxy.ipAddresses;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext
 * @description Initialize the IpAccessControlListContext
 *
 * @property {Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressList} ipAddresses -
 *          ipAddresses resource
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique ip-access-control-list Sid
 */
/* jshint ignore:end */
IpAccessControlListContext = function IpAccessControlListContext(version,
    accountSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/SIP/IpAccessControlLists/<%= sid %>.json' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._ipAddresses = undefined;
};

/* jshint ignore:start */
/**
 * fetch a IpAccessControlListInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed IpAccessControlListInstance
 */
/* jshint ignore:end */
IpAccessControlListContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new IpAccessControlListInstance(
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

/* jshint ignore:start */
/**
 * update a IpAccessControlListInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext
 * @instance
 *
 * @param {object} opts - ...
 * @param {string} opts.friendlyName -
 *          A human readable description of this resource
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed IpAccessControlListInstance
 */
/* jshint ignore:end */
IpAccessControlListContext.prototype.update = function update(opts, callback) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameter "opts" missing.');
  }
  if (_.isUndefined(opts.friendlyName)) {
    throw new Error('Required parameter "opts.friendlyName" missing.');
  }

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': _.get(opts, 'friendlyName')
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new IpAccessControlListInstance(
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

/* jshint ignore:start */
/**
 * remove a IpAccessControlListInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed IpAccessControlListInstance
 */
/* jshint ignore:end */
IpAccessControlListContext.prototype.remove = function remove(callback) {
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

Object.defineProperty(IpAccessControlListContext.prototype,
  'ipAddresses', {
  get: function() {
    if (!this._ipAddresses) {
      this._ipAddresses = new IpAddressList(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }
    return this._ipAddresses;
  }
});

module.exports = {
  IpAccessControlListList: IpAccessControlListList,
  IpAccessControlListPage: IpAccessControlListPage,
  IpAccessControlListInstance: IpAccessControlListInstance,
  IpAccessControlListContext: IpAccessControlListContext
};
