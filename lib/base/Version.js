'use strict';
var _ = require('lodash');

/**
 * Base version object
 */
function Version(domain, version) {
  this._domain = domain;
  this._version = version;
}

Version.prototype._MAX_PAGE_SIZE = 1000;

Version.prototype.absoluteUrl = function(uri) {
  return this._domain.absoluteUrl(this.relativeUrl(uri));
};

Version.prototype.relativeUrl = function(uri) {
  return _.trim(this._version, '/') + '/' + _.trim(uri, '/');
};

Version.prototype.request = function(opts) {
  return this._domain.request(_.assign({}, opts, {
    uri: this.relativeUrl(opts.uri),
  }));
};

Version.prototype.fetch = function(opts) {
  var qResponse = this.request(opts);
  qResponse.then(
    function success(response) {
      if (response.statusCode !== 200) {
        throw new Error(_.template('[<%= statusCode =>] Unable to ' +
            'fetch record.\n<%= body %>', response));
      }

      return JSON.parse(response.body);
    }
  );

  return qResponse;
};

Version.prototype.update = function(opts) {
  var qResponse = this.request(opts);
  qResponse.then(
    function success(response) {
      if (response.statusCode !== 200) {
        throw new Error(_.template('[<%= statusCode =>] Unable to ' +
            'update record.\n<%= body %>', response));
      }

      return JSON.parse(response.body);
    }
  );

  return qResponse;
};

Version.prototype.remove = function(opts) {
  var qResponse = this.request(opts);
  qResponse.then(
    function success(response) {
      if (500 <= response.statusCode && response.statusCode < 600) {
        throw new Error(_.template('[<%= statusCode =>] Unable to ' +
            'delete record.\n<%= body %>', response));
      }

      return response.statusCode === 204;
    }
  );

  return qResponse;
};

/**
 * @param {number} [opts.limit] The maximum number of items to fetch
 * @param {number} [opts.pageSize] The maximum number of items to return
 *                                  with every request
 */
Version.prototype.readLimits = function(opts) {
  var limit = opts.limit;
  var pageLimit;
  var pageSize = opts.pageSize;

  if (limit) {
    if (pageSize) {
      pageSize = Math.min(pageSize, limit);
    }

    pageLimit = parseInt(Math.ceil(limit / parseFloat(pageSize)), 10);
  }

  return {
    limit: limit,
    pageSize: pageSize,
    pageLimit: pageLimit,
  };
};

Version.prototype.page = Version.prototype.request;

Version.prototype.create = function(opts) {
  var qResponse = this.request(opts);
  qResponse.then(
    function success(response) {
      if (_.includes([200, 201], response.statusCode)) {
        throw new Error(_.template('[<%= statusCode =>] Unable to ' +
            'create record.\n<%= body %>', response));
      }

      return JSON.parse(response.body);
    }
  );

  return qResponse;
};

module.exports = Version;
