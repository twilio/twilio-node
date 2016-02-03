'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../../base/InstanceResource');
var Page = require('../../../../../../base/Page');
var deserialize = require('../../../../../../base/deserialize');
var values = require('../../../../../../base/values');

var IpAddressPage;
var IpAddressList;
var IpAddressInstance;
var IpAddressContext;

/**
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressPage
 * @augments Page
 * @description Initialize the IpAddressPage
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} response - Response from the API
 * @param {string} accountSid - The account_sid
 * @param {string} ipAccessControlListSid - The ip_access_control_list_sid
 *
 * @returns IpAddressPage
 */
function IpAddressPage(version, response, accountSid, ipAccessControlListSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    ipAccessControlListSid: ipAccessControlListSid
  };
}

_.extend(IpAddressPage.prototype, Page.prototype);
IpAddressPage.prototype.constructor = IpAddressPage;

/**
 * Build an instance of IpAddressInstance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns IpAddressInstance
 */
IpAddressPage.prototype.getInstance = function getInstance(payload) {
  return new IpAddressInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.ipAccessControlListSid
  );
};


/**
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressList
 * @description Initialize the IpAddressList
 *
 * @param {V2010} version - Version that contains the resource
 * @param {string} accountSid - The account_sid
 * @param {string} ipAccessControlListSid - The ip_access_control_list_sid
 *
 * @returns {function} - IpAddressListInstance
 */
function IpAddressList(version, accountSid, ipAccessControlListSid) {
  /**
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressList
   *
   * @param {string} sid - sid of instance
   *
   * @returns IpAddressContext
   */
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
  /**
   * @memberof IpAddressList
   *
   * @description Streams IpAddressInstance records from the API.
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
   * @memberof IpAddressList
   *
   * @description Lists IpAddressInstance records from the API as a list.
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
  IpAddressListInstance.list = function list(opts, callback) {
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
   * @memberof IpAddressList
   *
   * @description Retrieve a single page of IpAddressInstance records from the API.
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
  IpAddressListInstance.page = function page(opts, callback) {
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
        this._solution.accountSid,
        this._solution.ipAccessControlListSid
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
   * @memberof IpAddressList
   *
   * @description Create a new IpAddressInstance
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object} opts - ...
   * @param {string} opts.friendlyName - The friendly_name
   * @param {string} opts.ipAddress - The ip_address
   * @param {function} [callback] - Callback to handle created record
   *
   * @returns {Promise} Resolves to newly created IpAddressInstance
   */
  IpAddressListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameters friendlyName, ipAddress are missing.');  // jshint ignore:line
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "friendlyName" missing.');
    }
    if (_.isUndefined(opts.ipAddress)) {
      throw new Error('Required parameter "ipAddress" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': opts.friendlyName,
      'IpAddress': opts.ipAddress
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
        this._solution.ipAccessControlListSid
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
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressList
   *
   * @description Constructs a IpAddressContext
   *
   * @param {string} sid - The sid
   *
   * @returns IpAddressContext
   */
  IpAddressListInstance.get = function get(sid) {
    return new IpAddressContext(
      this._version,
      this._solution.accountSid,
      this._solution.ipAccessControlListSid,
      sid
    );
  };

  return IpAddressListInstance;
}


/**
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressInstance
 * @augments InstanceResource
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
 * @param {V2010} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} ipAccessControlListSid - The ip_access_control_list_sid
 * @param {sid} sid - The sid
 */
function IpAddressInstance(version, payload, accountSid, ipAccessControlListSid,
                            sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    sid: payload.sid, // jshint ignore:line,
    accountSid: payload.account_sid, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    ipAddress: payload.ip_address, // jshint ignore:line,
    ipAccessControlListSid: payload.ip_access_control_list_sid, // jshint ignore:line,
    dateCreated: deserialize.rfc2822DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.rfc2822DateTime(payload.date_updated), // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    ipAccessControlListSid: ipAccessControlListSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(IpAddressInstance.prototype, InstanceResource.prototype);
IpAddressInstance.prototype.constructor = IpAddressInstance;

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
  },
});

Object.defineProperty(IpAddressInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(IpAddressInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(IpAddressInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(IpAddressInstance.prototype,
  'ipAddress', {
  get: function() {
    return this._properties.ipAddress;
  },
});

Object.defineProperty(IpAddressInstance.prototype,
  'ipAccessControlListSid', {
  get: function() {
    return this._properties.ipAccessControlListSid;
  },
});

Object.defineProperty(IpAddressInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(IpAddressInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(IpAddressInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * @description Fetch a IpAddressInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched IpAddressInstance
 */
IpAddressInstance.prototype.fetch = function fetch(callback) {
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

/**
 * @description Update the IpAddressInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object} opts - ...
 * @param {string} opts.ipAddress - The ip_address
 * @param {string} opts.friendlyName - The friendly_name
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated IpAddressInstance
 */
IpAddressInstance.prototype.update = function update(opts, callback) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameters ipAddress, friendlyName are missing.');  // jshint ignore:line
  }
  if (_.isUndefined(opts.ipAddress)) {
    throw new Error('Required parameter "ipAddress" missing.');
  }
  if (_.isUndefined(opts.friendlyName)) {
    throw new Error('Required parameter "friendlyName" missing.');
  }

  var deferred = Q.defer();
  var data = values.of({
    'IpAddress': opts.ipAddress,
    'FriendlyName': opts.friendlyName
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

/**
 * @description Deletes the IpAddressInstance
 *
 * @param {function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
IpAddressInstance.prototype.remove = function remove(callback) {
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
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.IpAccessControlListContext.IpAddressContext
 * @augments InstanceContext
 * @description Initialize the IpAddressContext
 *
 * @param {V2010} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} ipAccessControlListSid - The ip_access_control_list_sid
 * @param {sid} sid - The sid
 */
function IpAddressContext(version, accountSid, ipAccessControlListSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    ipAccessControlListSid: ipAccessControlListSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/SIP/IpAccessControlLists/<%= ipAccessControlListSid %>/IpAddresses/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(IpAddressContext.prototype, InstanceContext.prototype);
IpAddressContext.prototype.constructor = IpAddressContext;

/**
 * @description Fetch a IpAddressInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched IpAddressInstance
 */
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

/**
 * @description Update the IpAddressInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object} opts - ...
 * @param {string} opts.ipAddress - The ip_address
 * @param {string} opts.friendlyName - The friendly_name
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated IpAddressInstance
 */
IpAddressContext.prototype.update = function update(opts, callback) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameters ipAddress, friendlyName are missing.');  // jshint ignore:line
  }
  if (_.isUndefined(opts.ipAddress)) {
    throw new Error('Required parameter "ipAddress" missing.');
  }
  if (_.isUndefined(opts.friendlyName)) {
    throw new Error('Required parameter "friendlyName" missing.');
  }

  var deferred = Q.defer();
  var data = values.of({
    'IpAddress': opts.ipAddress,
    'FriendlyName': opts.friendlyName
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

/**
 * @description Deletes the IpAddressInstance
 *
 * @param {function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
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
  IpAddressPage: IpAddressPage,
  IpAddressList: IpAddressList,
  IpAddressInstance: IpAddressInstance,
  IpAddressContext: IpAddressContext
};
