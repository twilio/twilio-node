'use strict';

var _ = require('lodash');
var Q = require('q');
var CredentialListList = require('./trunk/credentialList').CredentialListList;
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
 * @constructor Twilio.Trunking.V1.TrunkPage
 * @augments Page
 * @description Initialize the TrunkPage
 *
 * @param {Twilio.Trunking.V1} version - Version of the resource
 * @param {object} response - Response from the API
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
 * @function getInstance
 * @memberof Twilio.Trunking.V1.TrunkPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
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
 * @constructor Twilio.Trunking.V1.TrunkList
 * @description Initialize the TrunkList
 *
 * @param {Twilio.Trunking.V1} version - Version of the resource
 */
function TrunkList(version) {
  /**
   * @function trunks
   * @memberof Twilio.Trunking.V1
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Trunking.V1.TrunkContext}
   */
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
   * create a TrunkInstance
   *
   * @function create
   * @memberof Twilio.Trunking.V1.TrunkList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.domainName] - The domain_name
   * @param {string} [opts.disasterRecoveryUrl] - The disaster_recovery_url
   * @param {string} [opts.disasterRecoveryMethod] - The disaster_recovery_method
   * @param {string} [opts.recording] - The recording
   * @param {string} [opts.secure] - The secure
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed TrunkInstance
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
   * Streams TrunkInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Trunking.V1.TrunkList
   * @instance
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
   * @description Lists TrunkInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Trunking.V1.TrunkList
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
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Trunking.V1.TrunkList
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
  TrunkListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new TrunkPage(
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
   * Constructs a trunk
   *
   * @function get
   * @memberof Twilio.Trunking.V1.TrunkList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Trunking.V1.TrunkContext}
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
 * @constructor Twilio.Trunking.V1.TrunkInstance
 * @description Initialize the TrunkContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} domainName - The domain_name
 * @property {string} disasterRecoveryMethod - The disaster_recovery_method
 * @property {string} disasterRecoveryUrl - The disaster_recovery_url
 * @property {string} friendlyName - The friendly_name
 * @property {string} secure - The secure
 * @property {string} recording - The recording
 * @property {string} authType - The auth_type
 * @property {string} authTypeSet - The auth_type_set
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} sid - The sid
 * @property {string} url - The url
 * @property {string} links - The links
 *
 * @param {Twilio.Trunking.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid - The sid
 */
function TrunkInstance(version, payload, sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.domainName = payload.domain_name; // jshint ignore:line
  this.disasterRecoveryMethod = payload.disaster_recovery_method; // jshint ignore:line
  this.disasterRecoveryUrl = payload.disaster_recovery_url; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.secure = payload.secure; // jshint ignore:line
  this.recording = payload.recording; // jshint ignore:line
  this.authType = payload.auth_type; // jshint ignore:line
  this.authTypeSet = payload.auth_type_set; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    sid: sid || this.sid,
  };
}

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

/**
 * fetch a TrunkInstance
 *
 * @function fetch
 * @memberof Twilio.Trunking.V1.TrunkInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TrunkInstance
 */
TrunkInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/**
 * remove a TrunkInstance
 *
 * @function remove
 * @memberof Twilio.Trunking.V1.TrunkInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TrunkInstance
 */
TrunkInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/**
 * update a TrunkInstance
 *
 * @function update
 * @memberof Twilio.Trunking.V1.TrunkInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.domainName] - The domain_name
 * @param {string} [opts.disasterRecoveryUrl] - The disaster_recovery_url
 * @param {string} [opts.disasterRecoveryMethod] - The disaster_recovery_method
 * @param {string} [opts.recording] - The recording
 * @param {string} [opts.secure] - The secure
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TrunkInstance
 */
TrunkInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(callback);
};

/**
 * Access the originationUrls
 *
 * @function originationUrls
 * @memberof Twilio.Trunking.V1.TrunkInstance
 * @instance
 *
 * @returns {Twilio.Trunking.V1.TrunkContext.OriginationUrlList}
 */
TrunkInstance.prototype.originationUrls = function originationUrls() {
  return this._proxy.originationUrls;
};

/**
 * Access the credentialsLists
 *
 * @function credentialsLists
 * @memberof Twilio.Trunking.V1.TrunkInstance
 * @instance
 *
 * @returns {Twilio.Trunking.V1.TrunkContext.CredentialListList}
 */
TrunkInstance.prototype.credentialsLists = function credentialsLists() {
  return this._proxy.credentialsLists;
};

/**
 * Access the ipAccessControlLists
 *
 * @function ipAccessControlLists
 * @memberof Twilio.Trunking.V1.TrunkInstance
 * @instance
 *
 * @returns {Twilio.Trunking.V1.TrunkContext.IpAccessControlListList}
 */
TrunkInstance.prototype.ipAccessControlLists = function ipAccessControlLists() {
  return this._proxy.ipAccessControlLists;
};

/**
 * Access the phoneNumbers
 *
 * @function phoneNumbers
 * @memberof Twilio.Trunking.V1.TrunkInstance
 * @instance
 *
 * @returns {Twilio.Trunking.V1.TrunkContext.PhoneNumberList}
 */
TrunkInstance.prototype.phoneNumbers = function phoneNumbers() {
  return this._proxy.phoneNumbers;
};


/**
 * @constructor Twilio.Trunking.V1.TrunkContext
 * @description Initialize the TrunkContext
 *
 * @property {Twilio.Trunking.V1.TrunkContext.OriginationUrlList} originationUrls -
 *          originationUrls resource
 * @property {Twilio.Trunking.V1.TrunkContext.CredentialListList} credentialsLists -
 *          credentialsLists resource
 * @property {Twilio.Trunking.V1.TrunkContext.IpAccessControlListList} ipAccessControlLists -
 *          ipAccessControlLists resource
 * @property {Twilio.Trunking.V1.TrunkContext.PhoneNumberList} phoneNumbers -
 *          phoneNumbers resource
 *
 * @param {Twilio.Trunking.V1} version - Version of the resource
 * @param {sid} sid - The sid
 */
function TrunkContext(version, sid) {
  this._version = version;

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

/**
 * fetch a TrunkInstance
 *
 * @function fetch
 * @memberof Twilio.Trunking.V1.TrunkContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TrunkInstance
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
 * remove a TrunkInstance
 *
 * @function remove
 * @memberof Twilio.Trunking.V1.TrunkContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TrunkInstance
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
 * update a TrunkInstance
 *
 * @function update
 * @memberof Twilio.Trunking.V1.TrunkContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.domainName] - The domain_name
 * @param {string} [opts.disasterRecoveryUrl] - The disaster_recovery_url
 * @param {string} [opts.disasterRecoveryMethod] - The disaster_recovery_method
 * @param {string} [opts.recording] - The recording
 * @param {string} [opts.secure] - The secure
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TrunkInstance
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
