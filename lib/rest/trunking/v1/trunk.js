'use strict';

var _ = require('lodash');
var Q = require('q');
var CredentialListList = require('./trunk/credentialList').CredentialListList;
var InstanceContext = require('../../../base/InstanceContext');
var InstanceResource = require('../../../base/InstanceResource');
var IpAccessControlListList = require(
    './trunk/ipAccessControlList').IpAccessControlListList;
var OriginationUrlList = require('./trunk/originationUrl').OriginationUrlList;
var Page = require('../../../base/Page');
var PhoneNumberList = require('./trunk/phoneNumber').PhoneNumberList;
var deserialize = require('../../../base/deserialize');
var values = require('../../../base/values');

var TrunkPage;
var TrunkList;
var TrunkInstance;
var TrunkContext;

/**
 * Initialize the TrunkPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 *
 * @returns TrunkPage
 */
function TrunkPage(version, response) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {};
}

_.extend(TrunkPage.prototype, Page.prototype);
TrunkPage.prototype.constructor = TrunkPage;

/**
 * Build an instance of TrunkInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns TrunkInstance
 */
TrunkPage.prototype.getInstance = function getInstance(payload) {
  return new TrunkInstance(
    this._version,
    payload
  );
};


/**
 * Initialize the TrunkList
 *
 * @param {Version} version - Version that contains the resource
 *
 * @returns TrunkList
 */
function TrunkList(version) {
  function TrunkListInstance(sid) {
    return TrunkListInstance.get(sid);
  }

  TrunkListInstance._version = version;
  // Path Solution
  TrunkListInstance._solution = {};
  TrunkListInstance._uri = _.template(
    '/Trunks' // jshint ignore:line
  )(TrunkListInstance._solution);
  /**
   * Create a new TrunkInstance
   *
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.domainName] - The domain_name
   * @param {string} [opts.disasterRecoveryUrl] - The disaster_recovery_url
   * @param {string} [opts.disasterRecoveryMethod] - The disaster_recovery_method
   * @param {string} [opts.recording] - The recording
   * @param {string} [opts.secure] - The secure
   *
   * @returns Newly created TrunkInstance
   */
  TrunkListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': opts.friendlyName,
      'DomainName': opts.domainName,
      'DisasterRecoveryUrl': opts.disasterRecoveryUrl,
      'DisasterRecoveryMethod': opts.disasterRecoveryMethod,
      'Recording': opts.recording,
      'Secure': opts.secure
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new TrunkInstance(
        this._version,
        payload
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
   * Streams TrunkInstance records from the API.
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
   */
  TrunkListInstance.each = function each(opts, callback) {
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
   * Lists TrunkInstance records from the API as a list.
   *
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
  TrunkListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of TrunkInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of TrunkInstance
   */
  TrunkListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new TrunkPage(
        this._version,
        payload
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
   * Constructs a TrunkContext
   *
   * @param {string} sid - The sid
   *
   * @returns TrunkContext
   */
  TrunkListInstance.get = function get(sid) {
    return new TrunkContext(
      this._version,
      sid
    );
  };

  return TrunkListInstance;
}


/**
 * Initialize the TrunkContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid - The sid
 *
 * @returns {TrunkContext}
 */
function TrunkInstance(version, payload, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    domainName: payload.domain_name, // jshint ignore:line,
    disasterRecoveryMethod: payload.disaster_recovery_method, // jshint ignore:line,
    disasterRecoveryUrl: payload.disaster_recovery_url, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    secure: payload.secure, // jshint ignore:line,
    recording: payload.recording, // jshint ignore:line,
    authType: payload.auth_type, // jshint ignore:line,
    authTypeSet: payload.auth_type_set, // jshint ignore:line,
    dateCreated: deserialize.iso8601DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.iso8601DateTime(payload.date_updated), // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    url: payload.url, // jshint ignore:line,
    links: payload.links, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    sid: sid || this._properties.sid,
  };
}

_.extend(TrunkInstance.prototype, InstanceResource.prototype);
TrunkInstance.prototype.constructor = TrunkInstance;

Object.defineProperty(TrunkInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new TrunkContext(
        this._version,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(TrunkInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(TrunkInstance.prototype,
  'domainName', {
  get: function() {
    return this._properties.domainName;
  },
});

Object.defineProperty(TrunkInstance.prototype,
  'disasterRecoveryMethod', {
  get: function() {
    return this._properties.disasterRecoveryMethod;
  },
});

Object.defineProperty(TrunkInstance.prototype,
  'disasterRecoveryUrl', {
  get: function() {
    return this._properties.disasterRecoveryUrl;
  },
});

Object.defineProperty(TrunkInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(TrunkInstance.prototype,
  'secure', {
  get: function() {
    return this._properties.secure;
  },
});

Object.defineProperty(TrunkInstance.prototype,
  'recording', {
  get: function() {
    return this._properties.recording;
  },
});

Object.defineProperty(TrunkInstance.prototype,
  'authType', {
  get: function() {
    return this._properties.authType;
  },
});

Object.defineProperty(TrunkInstance.prototype,
  'authTypeSet', {
  get: function() {
    return this._properties.authTypeSet;
  },
});

Object.defineProperty(TrunkInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(TrunkInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(TrunkInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(TrunkInstance.prototype,
  'url', {
  get: function() {
    return this._properties.url;
  },
});

Object.defineProperty(TrunkInstance.prototype,
  'links', {
  get: function() {
    return this._properties.links;
  },
});

/**
 * Fetch a TrunkInstance
 *
 * @returns Fetched TrunkInstance
 */
TrunkInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new TrunkInstance(
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

/**
 * Deletes the TrunkInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
TrunkInstance.prototype.remove = function remove(callback) {
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
 * Update the TrunkInstance
 *
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.domainName] - The domain_name
 * @param {string} [opts.disasterRecoveryUrl] - The disaster_recovery_url
 * @param {string} [opts.disasterRecoveryMethod] - The disaster_recovery_method
 * @param {string} [opts.recording] - The recording
 * @param {string} [opts.secure] - The secure
 *
 * @returns Updated TrunkInstance
 */
TrunkInstance.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': opts.friendlyName,
    'DomainName': opts.domainName,
    'DisasterRecoveryUrl': opts.disasterRecoveryUrl,
    'DisasterRecoveryMethod': opts.disasterRecoveryMethod,
    'Recording': opts.recording,
    'Secure': opts.secure
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new TrunkInstance(
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

/**
 * Access the originationUrls
 *
 * @returns originationUrls
 */
TrunkInstance.prototype.originationUrls = function originationUrls() {
  return this._proxy.originationUrls;
};

/**
 * Access the credentialsLists
 *
 * @returns credentialsLists
 */
TrunkInstance.prototype.credentialsLists = function credentialsLists() {
  return this._proxy.credentialsLists;
};

/**
 * Access the ipAccessControlLists
 *
 * @returns ipAccessControlLists
 */
TrunkInstance.prototype.ipAccessControlLists = function ipAccessControlLists() {
  return this._proxy.ipAccessControlLists;
};

/**
 * Access the phoneNumbers
 *
 * @returns phoneNumbers
 */
TrunkInstance.prototype.phoneNumbers = function phoneNumbers() {
  return this._proxy.phoneNumbers;
};


/**
 * Initialize the TrunkContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} sid - The sid
 *
 * @returns {TrunkContext}
 */
function TrunkContext(version, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    sid: sid,
  };
  this._uri = _.template(
    '/Trunks/<%= sid %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._originationUrls = undefined;
  this._credentialsLists = undefined;
  this._ipAccessControlLists = undefined;
  this._phoneNumbers = undefined;
}

_.extend(TrunkContext.prototype, InstanceContext.prototype);
TrunkContext.prototype.constructor = TrunkContext;

/**
 * Fetch a TrunkInstance
 *
 * @returns Fetched TrunkInstance
 */
TrunkContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new TrunkInstance(
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

/**
 * Deletes the TrunkInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
TrunkContext.prototype.remove = function remove(callback) {
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
 * Update the TrunkInstance
 *
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.domainName] - The domain_name
 * @param {string} [opts.disasterRecoveryUrl] - The disaster_recovery_url
 * @param {string} [opts.disasterRecoveryMethod] - The disaster_recovery_method
 * @param {string} [opts.recording] - The recording
 * @param {string} [opts.secure] - The secure
 *
 * @returns Updated TrunkInstance
 */
TrunkContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': opts.friendlyName,
    'DomainName': opts.domainName,
    'DisasterRecoveryUrl': opts.disasterRecoveryUrl,
    'DisasterRecoveryMethod': opts.disasterRecoveryMethod,
    'Recording': opts.recording,
    'Secure': opts.secure
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new TrunkInstance(
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

Object.defineProperty(TrunkContext.prototype,
  'originationUrls', {
  get: function() {
    if (!this._originationUrls) {
      this._originationUrls = new OriginationUrlList(
        this._version,
        this._solution.sid
      );
    }
    return this._originationUrls;
  },
});

Object.defineProperty(TrunkContext.prototype,
  'credentialsLists', {
  get: function() {
    if (!this._credentialsLists) {
      this._credentialsLists = new CredentialListList(
        this._version,
        this._solution.sid
      );
    }
    return this._credentialsLists;
  },
});

Object.defineProperty(TrunkContext.prototype,
  'ipAccessControlLists', {
  get: function() {
    if (!this._ipAccessControlLists) {
      this._ipAccessControlLists = new IpAccessControlListList(
        this._version,
        this._solution.sid
      );
    }
    return this._ipAccessControlLists;
  },
});

Object.defineProperty(TrunkContext.prototype,
  'phoneNumbers', {
  get: function() {
    if (!this._phoneNumbers) {
      this._phoneNumbers = new PhoneNumberList(
        this._version,
        this._solution.sid
      );
    }
    return this._phoneNumbers;
  },
});

module.exports = {
  TrunkPage: TrunkPage,
  TrunkList: TrunkList,
  TrunkInstance: TrunkInstance,
  TrunkContext: TrunkContext
};
