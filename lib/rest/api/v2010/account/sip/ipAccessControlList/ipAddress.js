'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../../../base/values');  /* jshint ignore:line */

var IpAddressList;
var IpAddressPage;
var IpAddressInstance;
var IpAddressContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressList
 * @description Initialize the IpAddressList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The account_sid
 * @param {string} ipAccessControlListSid - The ip_access_control_list_sid
 */
/* jshint ignore:end */
IpAddressList = function IpAddressList(version, accountSid,
                                        ipAccessControlListSid) {
  /* jshint ignore:start */
  /**
   * @function ipAddresses
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressContext}
   */
  /* jshint ignore:end */
  function IpAddressListInstance(sid) {
    return IpAddressListInstance.get(sid);
  }

  IpAddressListInstance._version = version;
  // Path Solution
  IpAddressListInstance._solution = {
    accountSid: accountSid,
    ipAccessControlListSid: ipAccessControlListSid
  };
  IpAddressListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/SIP/IpAccessControlLists/<%= ipAccessControlListSid %>/IpAddresses.json' // jshint ignore:line
  )(IpAddressListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams IpAddressInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressList
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
  IpAddressListInstance.each = function each(opts, callback) {
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
   * @description Lists IpAddressInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressList
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
  IpAddressListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of IpAddressInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressList
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
  IpAddressListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new IpAddressPage(
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
   * Retrieve a single target page of IpAddressInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  IpAddressListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new IpAddressPage(
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
   * create a IpAddressInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.friendlyName - The friendly_name
   * @param {string} opts.ipAddress - The ip_address
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed IpAddressInstance
   */
  /* jshint ignore:end */
  IpAddressListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "opts.friendlyName" missing.');
    }
    if (_.isUndefined(opts.ipAddress)) {
      throw new Error('Required parameter "opts.ipAddress" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
      'IpAddress': _.get(opts, 'ipAddress')
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new IpAddressInstance(
        this._version,
        payload,
        this._solution.accountSid,
        this._solution.ipAccessControlListSid,
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
   * Constructs a ip_address
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressContext}
   */
  /* jshint ignore:end */
  IpAddressListInstance.get = function get(sid) {
    return new IpAddressContext(
      this._version,
      this._solution.accountSid,
      this._solution.ipAccessControlListSid,
      sid
    );
  };

  return IpAddressListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressPage
 * @augments Page
 * @description Initialize the IpAddressPage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns IpAddressPage
 */
/* jshint ignore:end */
IpAddressPage = function IpAddressPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(IpAddressPage.prototype, Page.prototype);
IpAddressPage.prototype.constructor = IpAddressPage;

/* jshint ignore:start */
/**
 * Build an instance of IpAddressInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns IpAddressInstance
 */
/* jshint ignore:end */
IpAddressPage.prototype.getInstance = function getInstance(payload) {
  return new IpAddressInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.ipAccessControlListSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressInstance
 * @description Initialize the IpAddressContext
 *
 * @property {string} sid - The sid
 * @property {string} accountSid - The account_sid
 * @property {string} friendlyName - The friendly_name
 * @property {string} ipAddress - The ip_address
 * @property {string} ipAccessControlListSid - The ip_access_control_list_sid
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} uri - The uri
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} ipAccessControlListSid - The ip_access_control_list_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
IpAddressInstance = function IpAddressInstance(version, payload, accountSid,
                                                ipAccessControlListSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.ipAddress = payload.ip_address; // jshint ignore:line
  this.ipAccessControlListSid = payload.ip_access_control_list_sid; // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    ipAccessControlListSid: ipAccessControlListSid,
    sid: sid || this.sid,
  };
};

Object.defineProperty(IpAddressInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new IpAddressContext(
        this._version,
        this._solution.accountSid,
        this._solution.ipAccessControlListSid,
        this._solution.sid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a IpAddressInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed IpAddressInstance
 */
/* jshint ignore:end */
IpAddressInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a IpAddressInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.ipAddress] - The ip_address
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed IpAddressInstance
 */
/* jshint ignore:end */
IpAddressInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * remove a IpAddressInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed IpAddressInstance
 */
/* jshint ignore:end */
IpAddressInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressContext
 * @description Initialize the IpAddressContext
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} ipAccessControlListSid - The ip_access_control_list_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
IpAddressContext = function IpAddressContext(version, accountSid,
                                              ipAccessControlListSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    ipAccessControlListSid: ipAccessControlListSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/SIP/IpAccessControlLists/<%= ipAccessControlListSid %>/IpAddresses/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a IpAddressInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed IpAddressInstance
 */
/* jshint ignore:end */
IpAddressContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new IpAddressInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.ipAccessControlListSid,
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
 * update a IpAddressInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.ipAddress] - The ip_address
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed IpAddressInstance
 */
/* jshint ignore:end */
IpAddressContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'IpAddress': _.get(opts, 'ipAddress'),
    'FriendlyName': _.get(opts, 'friendlyName')
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new IpAddressInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.ipAccessControlListSid,
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
 * remove a IpAddressInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed IpAddressInstance
 */
/* jshint ignore:end */
IpAddressContext.prototype.remove = function remove(callback) {
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
  IpAddressList: IpAddressList,
  IpAddressPage: IpAddressPage,
  IpAddressInstance: IpAddressInstance,
  IpAddressContext: IpAddressContext
};
