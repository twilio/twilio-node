'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../../base/InstanceResource');
var ListResource = require('../../../../../../base/ListResource');
var Page = require('../../../../../../base/Page');
var values = require('../../../../../../base/values');

var CredentialPage;
var CredentialList;
var CredentialInstance;
var CredentialContext;

/**
 * Initialize the CredentialPage
 *
 * :param Version version: Version that contains the resource
 * :param Response response: Response from the API
 * :param accountSid: The account_sid
 * :param credentialListSid: The credential_list_sid
 *
 * @returns CredentialPage
 */
function CredentialPage(version, response, accountSid, credentialListSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    credentialListSid: credentialListSid
  };
}

_.extend(CredentialPage.prototype, Page.prototype);
CredentialPage.prototype.constructor = CredentialPage;

/**
 * Build an instance of CredentialInstance
 *
 * :param dict payload: Payload response from the API
 *
 * @returns CredentialInstance
 */
CredentialPage.prototype.getInstance = function getInstance(payload) {
  return new CredentialInstance(
    this._version,
    payload,
    accountSid=this._solution['accountSid'],
    credentialListSid=this._solution['credentialListSid']
  );
};


/**
 * Initialize the CredentialList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The account_sid
 * :param credentialListSid: The credential_list_sid
 *
 * @returns CredentialList
 */
function CredentialList(version, accountSid, credentialListSid) {
  function CredentialListInstance(sid) {
    return CredentialListInstance.get(sid);
  }

  CredentialListInstance._version = version;
  // Path Solution
  CredentialListInstance._solution = {
    accountSid: accountSid,
    credentialListSid: credentialListSid
  };
  CredentialListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/SIP/CredentialLists/<%= credentialListSid %>/Credentials.json' // jshint ignore:line
  )(CredentialListInstance._solution);
  /**
   * Streams CredentialInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
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
   * @param {Function} opts.callback - A callback function to process records
   */
  CredentialListInstance.stream = function stream() {
    opts = opts || {};

    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists CredentialInstance records from the API as a list.
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
  CredentialListInstance.list = function list(opts) {
    opts = opts || {};

    var allResources = [];
    opts.callback = function(resource) {
      allResources.push(resource);
    };

    var promise = this.stream(opts);
    promise = promise.then(function() {
      return allResources;
    });

    return promise;
  };

  /**
   * Retrieve a single page of CredentialInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of CredentialInstance
   */
  CredentialListInstance.page = function page(opts) {
    opts = opts || {};

    var version = this._version;
    var solution = this._solution;

    var params = values.of({
      'PageToken': opts.page_token,
      'Page': opts.page_number,
      'PageSize': opts.page_size
    });

    var promise = version.page(
      'GET',
      this._uri,
      params
    );

    promise = promise.then(function(response) {
      return new CredentialPage(
        version,
        response,
        solution.accountSid,
        solution.credentialListSid
      );
    });

    return promise;
  };

  /**
   * Create a new CredentialInstance
   *
   * @param string username - The username
   * @param string password - The password
   *
   * @returns Newly created CredentialInstance
   */
  CredentialListInstance.create = function create(username, password) {
    var version = this._version;

    opts = opts || {};
    var data = values.of({
      'Username': username,
      'Password': password
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    promise = promise.then(function(payload) {
      return new CredentialInstance(
        version,
        payload,
        solution.accountSid,
        solution.credentialListSid
      );
    });

    return promise;
  };

  /**
   * Constructs a CredentialContext
   *
   * :param sid - The sid
   *
   * @returns CredentialContext
   */
  CredentialListInstance.get = function get(sid) {
    return new CredentialContext(
      this._version,
      this._solution.accountSid,
      this._solution.credentialListSid,
      sid
    );
  };

  return CredentialListInstance;
}


/**
 * Initialize the CredentialContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} credentialListSid: The credential_list_sid
 * @param {sid} sid: The sid
 *
 * @returns {CredentialContext}
 */
function CredentialInstance(version, payload, accountSid, credentialListSid,
                             sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    sid: payload.sid, // jshint ignore:line,
    accountSid: payload.account_sid, // jshint ignore:line,
    credentialListSid: payload.credential_list_sid, // jshint ignore:line,
    username: payload.username, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    credentialListSid: credentialListSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(CredentialInstance.prototype, InstanceResource.prototype);
CredentialInstance.prototype.constructor = CredentialInstance;

Object.defineProperty(CredentialInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new CredentialContext(
        this._version,
        this._solution.accountSid,
        this._solution.credentialListSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(CredentialInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(CredentialInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(CredentialInstance.prototype,
  'credentialListSid', {
  get: function() {
    return this._properties.credentialListSid;
  },
});

Object.defineProperty(CredentialInstance.prototype,
  'username', {
  get: function() {
    return this._properties.username;
  },
});

Object.defineProperty(CredentialInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(CredentialInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(CredentialInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a CredentialInstance
 *
 * @returns Fetched CredentialInstance
 */
CredentialInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the CredentialInstance
 *
 * @param string username - The username
 * @param string password - The password
 *
 * @returns Updated CredentialInstance
 */
CredentialInstance.prototype.update = function update(username, password) {
  return this._proxy.update(
    username,
    password
  );
};

/**
 * Deletes the CredentialInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
CredentialInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};


/**
 * Initialize the CredentialContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} credentialListSid - The credential_list_sid
 * @param {sid} sid - The sid
 *
 * @returns {CredentialContext}
 */
function CredentialContext(version, accountSid, credentialListSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    credentialListSid: credentialListSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/SIP/CredentialLists/<%= credentialListSid %>/Credentials/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(CredentialContext.prototype, InstanceContext.prototype);
CredentialContext.prototype.constructor = CredentialContext;

/**
 * Fetch a CredentialInstance
 *
 * @returns Fetched CredentialInstance
 */
CredentialContext.prototype.fetch = function fetch() {
  var version = this._version;
  var solution = this._solution;
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new CredentialInstance(
      version,
      payload,
      solution.accountSid,
      solution.credentialListSid,
      solution.sid
    );
  });

  return promise;
};

/**
 * Update the CredentialInstance
 *
 * @param string username - The username
 * @param string password - The password
 *
 * @returns Updated CredentialInstance
 */
CredentialContext.prototype.update = function update(username, password) {
  var version = this._version;
  var solution = this._solution;

  opts = opts || {};
  var data = values.of({
    'Username': username,
    'Password': password,
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  promise = promise.then(function(payload) {
    return new CredentialInstance(
      version,
      payload,
      solution.accountSid,
      solution.credentialListSid,
      solution.sid
    );
  });

  return promise;
};

/**
 * Deletes the CredentialInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
CredentialContext.prototype.remove = function remove() {
  return this._version.remove({
    method: 'DELETE',
    uri: this._uri
  });
};

module.exports = {
  CredentialPage: CredentialPage,
  CredentialList: CredentialList,
  CredentialInstance: CredentialInstance,
  CredentialContext: CredentialContext
};
