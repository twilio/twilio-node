'use strict';

var _ = require('lodash');
var Q = require('q');
var DependentPhoneNumberList = require(
    './address/dependentPhoneNumber').DependentPhoneNumberList;
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var deserialize = require('../../../../base/deserialize');
var values = require('../../../../base/values');

var AddressPage;
var AddressList;
var AddressInstance;
var AddressContext;

/**
 * Initialize the AddressPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} accountSid - The account_sid
 *
 * @returns AddressPage
 */
function AddressPage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(AddressPage.prototype, Page.prototype);
AddressPage.prototype.constructor = AddressPage;

/**
 * Build an instance of AddressInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns AddressInstance
 */
AddressPage.prototype.getInstance = function getInstance(payload) {
  return new AddressInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * Initialize the AddressList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} accountSid - The account_sid
 *
 * @returns AddressList
 */
function AddressList(version, accountSid) {
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
  /**
   * Create a new AddressInstance
   *
   * @param {string} opts.customerName - The customer_name
   * @param {string} opts.street - The street
   * @param {string} opts.city - The city
   * @param {string} opts.region - The region
   * @param {string} opts.postalCode - The postal_code
   * @param {string} opts.isoCountry - The iso_country
   * @param {string} [opts.friendlyName] - The friendly_name
   *
   * @returns Newly created AddressInstance
   */
  AddressListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameters customerName, street, city, region, postalCode, isoCountry are missing.');  // jshint ignore:line
    }
    if (_.isUndefined(opts.customerName)) {
      throw new Error('Required parameter "customerName" missing.');
    }
    if (_.isUndefined(opts.street)) {
      throw new Error('Required parameter "street" missing.');
    }
    if (_.isUndefined(opts.city)) {
      throw new Error('Required parameter "city" missing.');
    }
    if (_.isUndefined(opts.region)) {
      throw new Error('Required parameter "region" missing.');
    }
    if (_.isUndefined(opts.postalCode)) {
      throw new Error('Required parameter "postalCode" missing.');
    }
    if (_.isUndefined(opts.isoCountry)) {
      throw new Error('Required parameter "isoCountry" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'CustomerName': opts.customerName,
      'Street': opts.street,
      'City': opts.city,
      'Region': opts.region,
      'PostalCode': opts.postalCode,
      'IsoCountry': opts.isoCountry,
      'FriendlyName': opts.friendlyName
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
        this._solution.accountSid
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
   * Streams AddressInstance records from the API.
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
   * @param {string} [opts.customerName] - The customer_name
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.isoCountry] - The iso_country
   */
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
   * Lists AddressInstance records from the API as a list.
   *
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
   *
   * @returns {Array} A list of records
   */
  AddressListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of AddressInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.customerName] - The customer_name
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.isoCountry] - The iso_country
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of AddressInstance
   */
  AddressListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'CustomerName': opts.customerName,
      'FriendlyName': opts.friendlyName,
      'IsoCountry': opts.isoCountry,
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
        this._solution.accountSid
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
   * Constructs a AddressContext
   *
   * @param {string} sid - The sid
   *
   * @returns AddressContext
   */
  AddressListInstance.get = function get(sid) {
    return new AddressContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return AddressListInstance;
}


/**
 * Initialize the AddressContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - The sid
 *
 * @returns {AddressContext}
 */
function AddressInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    city: payload.city, // jshint ignore:line,
    customerName: payload.customer_name, // jshint ignore:line,
    dateCreated: deserialize.rfc2822DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.rfc2822DateTime(payload.date_updated), // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    isoCountry: payload.iso_country, // jshint ignore:line,
    postalCode: payload.postal_code, // jshint ignore:line,
    region: payload.region, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    street: payload.street, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(AddressInstance.prototype, InstanceResource.prototype);
AddressInstance.prototype.constructor = AddressInstance;

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
  },
});

Object.defineProperty(AddressInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'city', {
  get: function() {
    return this._properties.city;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'customerName', {
  get: function() {
    return this._properties.customerName;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'isoCountry', {
  get: function() {
    return this._properties.isoCountry;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'postalCode', {
  get: function() {
    return this._properties.postalCode;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'region', {
  get: function() {
    return this._properties.region;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'street', {
  get: function() {
    return this._properties.street;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Deletes the AddressInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
AddressInstance.prototype.remove = function remove(callback) {
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
 * Fetch a AddressInstance
 *
 * @returns Fetched AddressInstance
 */
AddressInstance.prototype.fetch = function fetch(callback) {
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

/**
 * Update the AddressInstance
 *
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.customerName] - The customer_name
 * @param {string} [opts.street] - The street
 * @param {string} [opts.city] - The city
 * @param {string} [opts.region] - The region
 * @param {string} [opts.postalCode] - The postal_code
 *
 * @returns Updated AddressInstance
 */
AddressInstance.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': opts.friendlyName,
    'CustomerName': opts.customerName,
    'Street': opts.street,
    'City': opts.city,
    'Region': opts.region,
    'PostalCode': opts.postalCode
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

/**
 * Access the dependentPhoneNumbers
 *
 * @returns dependentPhoneNumbers
 */
AddressInstance.prototype.dependentPhoneNumbers = function
    dependentPhoneNumbers() {
  return this._proxy.dependentPhoneNumbers;
};


/**
 * Initialize the AddressContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - The sid
 *
 * @returns {AddressContext}
 */
function AddressContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

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
}

_.extend(AddressContext.prototype, InstanceContext.prototype);
AddressContext.prototype.constructor = AddressContext;

/**
 * Deletes the AddressInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
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

/**
 * Fetch a AddressInstance
 *
 * @returns Fetched AddressInstance
 */
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

/**
 * Update the AddressInstance
 *
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.customerName] - The customer_name
 * @param {string} [opts.street] - The street
 * @param {string} [opts.city] - The city
 * @param {string} [opts.region] - The region
 * @param {string} [opts.postalCode] - The postal_code
 *
 * @returns Updated AddressInstance
 */
AddressContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': opts.friendlyName,
    'CustomerName': opts.customerName,
    'Street': opts.street,
    'City': opts.city,
    'Region': opts.region,
    'PostalCode': opts.postalCode
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
  },
});

module.exports = {
  AddressPage: AddressPage,
  AddressList: AddressList,
  AddressInstance: AddressInstance,
  AddressContext: AddressContext
};
