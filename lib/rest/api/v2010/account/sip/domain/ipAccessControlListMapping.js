'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../../base/InstanceResource');
var ListResource = require('../../../../../../base/ListResource');
var Page = require('../../../../../../base/Page');
var values = require('../../../../../../base/values');

var IpAccessControlListMappingPage;
var IpAccessControlListMappingList;
var IpAccessControlListMappingInstance;
var IpAccessControlListMappingContext;

/**
 * Initialize the IpAccessControlListMappingPage
 *
 * :param Version version: Version that contains the resource
 * :param Response response: Response from the API
 * :param accountSid: The account_sid
 * :param domainSid: A string that uniquely identifies the SIP Domain
 *
 * @returns IpAccessControlListMappingPage
 */
function IpAccessControlListMappingPage(version, response, accountSid,
                                         domainSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    domainSid: domainSid
  };
}

_.extend(IpAccessControlListMappingPage.prototype, Page.prototype);
IpAccessControlListMappingPage.prototype.constructor = IpAccessControlListMappingPage;

/**
 * Build an instance of IpAccessControlListMappingInstance
 *
 * :param dict payload: Payload response from the API
 *
 * @returns IpAccessControlListMappingInstance
 */
IpAccessControlListMappingPage.prototype.getInstance = function
    getInstance(payload) {
  return new IpAccessControlListMappingInstance(
    this._version,
    payload,
    accountSid=this._solution['accountSid'],
    domainSid=this._solution['domainSid']
  );
};


/**
 * Initialize the IpAccessControlListMappingList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The account_sid
 * :param domainSid: A string that uniquely identifies the SIP Domain
 *
 * @returns IpAccessControlListMappingList
 */
function IpAccessControlListMappingList(version, accountSid, domainSid) {
  function IpAccessControlListMappingListInstance(sid) {
    return IpAccessControlListMappingListInstance.get(sid);
  }

  IpAccessControlListMappingListInstance._version = version;
  // Path Solution
  IpAccessControlListMappingListInstance._solution = {
    accountSid: accountSid,
    domainSid: domainSid
  };
  IpAccessControlListMappingListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/SIP/Domains/<%= domainSid %>/IpAccessControlListMappings.json' // jshint ignore:line
  )(IpAccessControlListMappingListInstance._solution);
  /**
   * Create a new IpAccessControlListMappingInstance
   *
   * @param string ipAccessControlListSid - The ip_access_control_list_sid
   *
   * @returns Newly created IpAccessControlListMappingInstance
   */
  IpAccessControlListMappingListInstance.create = function
      create(ipAccessControlListSid) {
    var version = this._version;

    opts = opts || {};
    var data = values.of({
      'IpAccessControlListSid': ipAccessControlListSid
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    promise = promise.then(function(payload) {
      return new IpAccessControlListMappingInstance(
        version,
        payload,
        solution.accountSid,
        solution.domainSid
      );
    });

    return promise;
  };

  /**
   * Streams IpAccessControlListMappingInstance records from the API.
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
  IpAccessControlListMappingListInstance.stream = function stream() {
    opts = opts || {};

    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists IpAccessControlListMappingInstance records from the API as a list.
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
  IpAccessControlListMappingListInstance.list = function list(opts) {
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
   * Retrieve a single page of IpAccessControlListMappingInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of IpAccessControlListMappingInstance
   */
  IpAccessControlListMappingListInstance.page = function page(opts) {
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
      return new IpAccessControlListMappingPage(
        version,
        response,
        solution.accountSid,
        solution.domainSid
      );
    });

    return promise;
  };

  /**
   * Constructs a IpAccessControlListMappingContext
   *
   * :param sid - The sid
   *
   * @returns IpAccessControlListMappingContext
   */
  IpAccessControlListMappingListInstance.get = function get(sid) {
    return new IpAccessControlListMappingContext(
      this._version,
      this._solution.accountSid,
      this._solution.domainSid,
      sid
    );
  };

  return IpAccessControlListMappingListInstance;
}


/**
 * Initialize the IpAccessControlListMappingContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} domainSid: The domain_sid
 * @param {sid} sid: The sid
 *
 * @returns {IpAccessControlListMappingContext}
 */
function IpAccessControlListMappingInstance(version, payload, accountSid,
                                             domainSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    domainSid: domainSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(IpAccessControlListMappingInstance.prototype, InstanceResource.prototype);
IpAccessControlListMappingInstance.prototype.constructor = IpAccessControlListMappingInstance;

Object.defineProperty(IpAccessControlListMappingInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new IpAccessControlListMappingContext(
        this._version,
        this._solution.accountSid,
        this._solution.domainSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(IpAccessControlListMappingInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(IpAccessControlListMappingInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(IpAccessControlListMappingInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(IpAccessControlListMappingInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(IpAccessControlListMappingInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(IpAccessControlListMappingInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a IpAccessControlListMappingInstance
 *
 * @returns Fetched IpAccessControlListMappingInstance
 */
IpAccessControlListMappingInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Deletes the IpAccessControlListMappingInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
IpAccessControlListMappingInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};


/**
 * Initialize the IpAccessControlListMappingContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} domainSid - The domain_sid
 * @param {sid} sid - The sid
 *
 * @returns {IpAccessControlListMappingContext}
 */
function IpAccessControlListMappingContext(version, accountSid, domainSid, sid)
                                            {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    domainSid: domainSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/SIP/Domains/<%= domainSid %>/IpAccessControlListMappings/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(IpAccessControlListMappingContext.prototype, InstanceContext.prototype);
IpAccessControlListMappingContext.prototype.constructor = IpAccessControlListMappingContext;

/**
 * Fetch a IpAccessControlListMappingInstance
 *
 * @returns Fetched IpAccessControlListMappingInstance
 */
IpAccessControlListMappingContext.prototype.fetch = function fetch() {
  var version = this._version;
  var solution = this._solution;
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new IpAccessControlListMappingInstance(
      version,
      payload,
      solution.accountSid,
      solution.domainSid,
      solution.sid
    );
  });

  return promise;
};

/**
 * Deletes the IpAccessControlListMappingInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
IpAccessControlListMappingContext.prototype.remove = function remove() {
  return this._version.remove({
    method: 'DELETE',
    uri: this._uri
  });
};

module.exports = {
  IpAccessControlListMappingPage: IpAccessControlListMappingPage,
  IpAccessControlListMappingList: IpAccessControlListMappingList,
  IpAccessControlListMappingInstance: IpAccessControlListMappingInstance,
  IpAccessControlListMappingContext: IpAccessControlListMappingContext
};
