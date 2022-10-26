'use strict';
var RestException = require('./RestException');
import { trim } from './utility';

/**
 * @constructor
 *
 * @description Base version object
 *
 * @param {Domain} domain twilio domain
 * @param {Version} version api version
 */
function Version(domain, version) {
  this._domain = domain;
  this._version = version;
}

/**
 * Generate absolute url from a uri
 *
 * @param  {string} uri uri to transform
 * @return {string} transformed url
 */
Version.prototype.absoluteUrl = function (uri) {
  return this._domain.absoluteUrl(this.relativeUrl(uri));
};

/**
 * Generate relative url from a uri
 *
 * @param  {string} uri uri to transform
 * @return {string} transformed url
 */
Version.prototype.relativeUrl = function(uri) {
  var result = '';
  if (typeof this._version === 'string') {
    const version = trim(this._version,  '/');
    result += version;
    result += '/';
  }
  if (typeof uri === 'string') {
    uri = trim(uri, '/');
    if (result === '') {
      result += '/';
    }
    result += uri;
  }
  return result;
};

/**
 * Make a request against the domain
 *
 * @param  {object} opts request options
 * @return {Promise} promise that resolves to request response
 */
Version.prototype.request = function(opts) {
  return this._domain.request({
    ...opts,
    uri: this.relativeUrl(opts.uri)
  });
};

/**
 * Fetch a instance of a record
 * @throws {Error} If response returns non 2xx or 3xx status code
 *
 * @param  {object} opts request options
 * @return {Promise} promise that resolves to fetched result
 */
Version.prototype.fetch = function (opts) {
  var qResponse = this.request(opts);

  qResponse = qResponse.then(
    function success(response) {
      if (response.statusCode < 200 || response.statusCode >= 400) {
        throw new RestException(response);
      }

      if (typeof response.body === 'string') {
        return JSON.parse(response.body);
      }
      return response.body;
    },
  );

  return qResponse;
};

/**
 * Update a record
 * @throws {Error} If response returns non 2xx status code
 *
 * @param  {object} opts request options
 * @return {Promise} promise that resolves to updated result
 */
Version.prototype.update = function (opts) {
  var qResponse = this.request(opts);
  qResponse = qResponse.then(
    function success(response) {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        throw new RestException(response);
      }

      if (typeof response.body === 'string') {
        return JSON.parse(response.body);
      }
      return response.body;
    },
  );

  return qResponse;
};

/**
 * Delete a record
 * @throws {Error} If response returns a 5xx status
 *
 * @param  {object} opts request options
 * @return {Promise} promise that resolves to true if record was deleted
 */
Version.prototype.remove = function (opts) {
  var qResponse = this.request(opts);
  qResponse = qResponse.then(
    function success(response) {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        throw new RestException(response);
      }

      return response.statusCode === 204;
    },
  );

  return qResponse;
};

/**
 * Create a new record
 * @throws {Error} If response returns non 2xx or 201 status code
 *
 * @param  {object} opts request options
 * @return {Promise} promise that resolves to created record
 */
Version.prototype.create = function (opts) {
  var qResponse = this.request(opts);
  qResponse = qResponse.then(
    function success(response) {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        throw new RestException(response);
      }
      if (typeof response.body === 'string') {
        return JSON.parse(response.body);
      }
      return response.body;
    },
  );

  return qResponse;
};

/**
 * Fetch a page of records
 *
 * @param  {object} opts request options
 * @return {Promise} promise that resolves to page of records
 */
Version.prototype.page = function (opts) {
  return this.request(opts);
};

/**
 * Process limits for list requests
 *
 * @param {object} [opts] ...
 * @param {number} [opts.limit] The maximum number of items to fetch
 * @param {number} [opts.pageSize] The maximum number of items to return
 *                                  with every request
 */
Version.prototype.readLimits = function (opts) {
  var limit = opts.limit;
  var pageSize = opts.pageSize;
  if (limit && (!Number.isFinite(limit)) || limit <= 0) {
    throw new TypeError('Parameter limit must be a positive integer');
  }

  if (pageSize && (!Number.isFinite(pageSize) || pageSize <= 0)) {
    throw new TypeError('Parameter pageSize must be a positive integer');
  }

  if (limit && !pageSize) {
    pageSize = limit;
  }

  return {
    limit: limit,
    pageSize: pageSize,
  };
};

Version.prototype.setPromiseCallback = function (operationPromise, callback) {
  if (typeof callback === 'function') {
    operationPromise = operationPromise
      .then(value => callback(null, value))
      .catch(error => callback(error));
  }
  return operationPromise;
};

Version.prototype.each = function (params, callback) {
  if (typeof params === 'function') {
    callback = params;
    params = {};
  } else {
    params = params || {};
  }
  if (params.callback) {
    callback = params.callback;
  }
  if (typeof callback === 'undefined') {
    throw new Error('Callback function must be provided');
  }
  let done = false;
  let currentPage = 1;
  let currentResource = 0;
  let limits = this._version.readLimits({
    limit: params.limit,
    pageSize: params.pageSize,
  });
  function onComplete(error) {
    done = true;
    if (typeof params.done === 'function') {
      params.done(error);
    }
  }
  function fetchNextPage(fn) {
    let promise = fn();
    if (typeof promise === 'undefined') {
      onComplete();
      return;
    }
    promise.then(page => {
      Object.keys(page.instances).forEach(function (instance) {
        if (done || (typeof params.limit !== 'undefined') && currentResource >= params.limit) {
          done = true;
          return false;
        }
        currentResource++;
        try {
          callback(instance, onComplete);
        } catch (e) {
          throw e;
        }
      });
      if (!done) {
        currentPage++;
        fetchNextPage(page.nextPage.bind(page));
      } else {
        onComplete();
      }
    });
    promise.catch(onComplete);
  }
  fetchNextPage(this.page.bind(this, Object.assign(params, limits)));
};

Version.prototype.list = function (params, callback) {
  if (typeof params === 'function') {
    callback = params;
    params = {};
  } else {
    params = params || {};
  }
  let allResources = [];
  params.callback = function (resource, done) {
    allResources.push(resource);
    if (typeof params.limit !== 'undefined' && allResources.length === params.limit) {
      done();
    }
  };
  let operationPromise = new Promise((resolve, reject) => {
    params.done = function (error) {
      if (typeof error === 'undefined') {
        resolve(allResources);
      } else {
        reject(error);
      }
    };
  });
  operationPromise = this._version.setPromiseCallback(operationPromise, callback);
  this.each(params);
  return operationPromise;
};

module.exports = Version;
