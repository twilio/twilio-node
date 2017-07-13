'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var DependentPhoneNumberList = require(
    './address/dependentPhoneNumber').DependentPhoneNumberList;
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require('../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var AddressList;
var AddressPage;
var AddressInstance;
var AddressContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.AddressList
 * @description Initialize the AddressList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The account_sid
 */
/* jshint ignore:end */
AddressList = function AddressList(version, accountSid) {
  /* jshint ignore:start */
  /**
   * @function addresses
   * @memberof Twilio.Api.V2010.AccountContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.AddressContext}
   */
  /* jshint ignore:end */
  function AddressListInstance(sid) {
    return AddressListInstance.get(sid);
  }

  AddressListInstance._version = version;
  // Path Solution
  AddressListInstance._solution = {
    accountSid: accountSid
  };
  AddressListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Addresses.json' // jshint ignore:line
  )(AddressListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a AddressInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.AddressList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.customerName - The customer_name
   * @param {string} opts.street - The street
   * @param {string} opts.city - The city
   * @param {string} opts.region - The region
   * @param {string} opts.postalCode - The postal_code
   * @param {string} opts.isoCountry - The iso_country
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {boolean} [opts.emergencyEnabled] - The emergency_enabled
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed AddressInstance
   */
  /* jshint ignore:end */
  AddressListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.customerName)) {
      throw new Error('Required parameter "opts.customerName" missing.');
    }
    if (_.isUndefined(opts.street)) {
      throw new Error('Required parameter "opts.street" missing.');
    }
    if (_.isUndefined(opts.city)) {
      throw new Error('Required parameter "opts.city" missing.');
    }
    if (_.isUndefined(opts.region)) {
      throw new Error('Required parameter "opts.region" missing.');
    }
    if (_.isUndefined(opts.postalCode)) {
      throw new Error('Required parameter "opts.postalCode" missing.');
    }
    if (_.isUndefined(opts.isoCountry)) {
      throw new Error('Required parameter "opts.isoCountry" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'CustomerName': _.get(opts, 'customerName'),
      'Street': _.get(opts, 'street'),
      'City': _.get(opts, 'city'),
      'Region': _.get(opts, 'region'),
      'PostalCode': _.get(opts, 'postalCode'),
      'IsoCountry': _.get(opts, 'isoCountry'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'EmergencyEnabled': serialize.bool(_.get(opts, 'emergencyEnabled'))
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new AddressInstance(
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
   * Streams AddressInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.AddressList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.customerName] - The customer_name
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.isoCountry] - The iso_country
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
  AddressListInstance.each = function each(opts, callback) {
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
   * @description Lists AddressInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.AddressList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.customerName] - The customer_name
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.isoCountry] - The iso_country
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
  AddressListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of AddressInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.AddressList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.customerName] - The customer_name
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.isoCountry] - The iso_country
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  AddressListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'CustomerName': _.get(opts, 'customerName'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'IsoCountry': _.get(opts, 'isoCountry'),
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
      deferred.resolve(new AddressPage(
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
   * Retrieve a single target page of AddressInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.AddressList
   * @instance
   *
   * @param {string} [opts.customerName] - The customer_name
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.isoCountry] - The iso_country
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  AddressListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new AddressPage(
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
   * Constructs a address
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.AddressList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Api.V2010.AccountContext.AddressContext}
   */
  /* jshint ignore:end */
  AddressListInstance.get = function get(sid) {
    return new AddressContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return AddressListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.AddressPage
 * @augments Page
 * @description Initialize the AddressPage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns AddressPage
 */
/* jshint ignore:end */
AddressPage = function AddressPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(AddressPage.prototype, Page.prototype);
AddressPage.prototype.constructor = AddressPage;

/* jshint ignore:start */
/**
 * Build an instance of AddressInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.AddressPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns AddressInstance
 */
/* jshint ignore:end */
AddressPage.prototype.getInstance = function getInstance(payload) {
  return new AddressInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.AddressInstance
 * @description Initialize the AddressContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} city - The city
 * @property {string} customerName - The customer_name
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} friendlyName - The friendly_name
 * @property {string} isoCountry - The iso_country
 * @property {string} postalCode - The postal_code
 * @property {string} region - The region
 * @property {string} sid - The sid
 * @property {string} street - The street
 * @property {string} uri - The uri
 * @property {boolean} emergencyEnabled - The emergency_enabled
 * @property {boolean} validated - The validated
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
AddressInstance = function AddressInstance(version, payload, accountSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.city = payload.city; // jshint ignore:line
  this.customerName = payload.customer_name; // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.isoCountry = payload.iso_country; // jshint ignore:line
  this.postalCode = payload.postal_code; // jshint ignore:line
  this.region = payload.region; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.street = payload.street; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line
  this.emergencyEnabled = payload.emergency_enabled; // jshint ignore:line
  this.validated = payload.validated; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this.sid,
  };
};

Object.defineProperty(AddressInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new AddressContext(
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
 * remove a AddressInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.AddressInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AddressInstance
 */
/* jshint ignore:end */
AddressInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * fetch a AddressInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.AddressInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AddressInstance
 */
/* jshint ignore:end */
AddressInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a AddressInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.AddressInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.customerName] - The customer_name
 * @param {string} [opts.street] - The street
 * @param {string} [opts.city] - The city
 * @param {string} [opts.region] - The region
 * @param {string} [opts.postalCode] - The postal_code
 * @param {boolean} [opts.emergencyEnabled] - The emergency_enabled
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AddressInstance
 */
/* jshint ignore:end */
AddressInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * Access the dependentPhoneNumbers
 *
 * @function dependentPhoneNumbers
 * @memberof Twilio.Api.V2010.AccountContext.AddressInstance
 * @instance
 *
 * @returns {Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberList}
 */
/* jshint ignore:end */
AddressInstance.prototype.dependentPhoneNumbers = function
    dependentPhoneNumbers() {
  return this._proxy.dependentPhoneNumbers;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.AddressContext
 * @description Initialize the AddressContext
 *
 * @property {Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberList} dependentPhoneNumbers -
 *          dependentPhoneNumbers resource
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
AddressContext = function AddressContext(version, accountSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Addresses/<%= sid %>.json' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._dependentPhoneNumbers = undefined;
};

/* jshint ignore:start */
/**
 * remove a AddressInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.AddressContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AddressInstance
 */
/* jshint ignore:end */
AddressContext.prototype.remove = function remove(callback) {
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
 * fetch a AddressInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.AddressContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AddressInstance
 */
/* jshint ignore:end */
AddressContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new AddressInstance(
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
 * update a AddressInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.AddressContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.customerName] - The customer_name
 * @param {string} [opts.street] - The street
 * @param {string} [opts.city] - The city
 * @param {string} [opts.region] - The region
 * @param {string} [opts.postalCode] - The postal_code
 * @param {boolean} [opts.emergencyEnabled] - The emergency_enabled
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AddressInstance
 */
/* jshint ignore:end */
AddressContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': _.get(opts, 'friendlyName'),
    'CustomerName': _.get(opts, 'customerName'),
    'Street': _.get(opts, 'street'),
    'City': _.get(opts, 'city'),
    'Region': _.get(opts, 'region'),
    'PostalCode': _.get(opts, 'postalCode'),
    'EmergencyEnabled': serialize.bool(_.get(opts, 'emergencyEnabled'))
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new AddressInstance(
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

Object.defineProperty(AddressContext.prototype,
  'dependentPhoneNumbers', {
  get: function() {
    if (!this._dependentPhoneNumbers) {
      this._dependentPhoneNumbers = new DependentPhoneNumberList(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }
    return this._dependentPhoneNumbers;
  }
});

module.exports = {
  AddressList: AddressList,
  AddressPage: AddressPage,
  AddressInstance: AddressInstance,
  AddressContext: AddressContext
};
