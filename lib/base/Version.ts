"use strict";

import Domain from "./Domain";
import { RequestOpts } from "./BaseTwilio";
import RestException from "./RestException";
import { trim } from "./utility";

export interface PageLimitOptions {
  /**
   * The maximum number of items to fetch
   */
  limit: number;
  /**
   * The maximum number of items to return with every request
   */
  pageSize: number;
}

export interface PageLimit {
  limit: number;
  pageSize: number;
}

export default class Version {
  _domain: Domain;
  _version: Version | string;

  /**
   * @constructor
   *
   * @description Base version object
   *
   * @param {Domain} domain twilio domain
   * @param {Version} version api version
   */
  constructor(domain: Domain, version: string | Version) {
    this._domain = domain;
    this._version = version;
  }

  get domain(): Domain {
    return this._domain;
  }

  /**
   * Generate absolute url from a uri
   *
   * @param  {string} uri uri to transform
   * @return {string} transformed url
   */
  absoluteUrl(uri: string): string {
    return this._domain.absoluteUrl(this.relativeUrl(uri));
  }

  /**
   * Generate relative url from a uri
   *
   * @param  {string} uri uri to transform
   * @return {string} transformed url
   */
  relativeUrl(uri: string): string {
    var result = "";
    if (typeof this._version === "string") {
      const version = trim(this._version, "/");
      result += version;
      result += "/";
    }
    if (typeof uri === "string") {
      uri = trim(uri, "/");
      if (result === "") {
        result += "/";
      }
      result += uri;
    }
    return result;
  }

  /**
   * Make a request against the domain
   *
   * @param  {object} opts request options
   * @return {Promise} promise that resolves to request response
   */
  request(opts: RequestOpts): Promise<any> {
    return this._domain.request({
      ...opts,
      uri: this.relativeUrl(opts.uri),
    });
  }

  /**
   * Create a new record
   * @throws {Error} If response returns non 2xx or 201 status code
   *
   * @param  {object} opts request options
   * @return {Promise} promise that resolves to created record
   */
  create(opts: RequestOpts): Promise<any> {
    var qResponse = this.request(opts);
    qResponse = qResponse.then(function success(response) {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        throw new RestException(response);
      }
      if (typeof response.body === "string") {
        return JSON.parse(response.body);
      }
      return response.body;
    });

    return qResponse;
  }

  /**
   * Fetch a instance of a record
   * @throws {Error} If response returns non 2xx or 3xx status code
   *
   * @param  {object} opts request options
   * @return {Promise} promise that resolves to fetched result
   */
  fetch(opts: RequestOpts): Promise<any> {
    var qResponse = this.request(opts);

    qResponse = qResponse.then(function success(response) {
      if (response.statusCode < 200 || response.statusCode >= 400) {
        throw new RestException(response);
      }

      if (typeof response.body === "string") {
        return JSON.parse(response.body);
      }
      return response.body;
    });

    return qResponse;
  }

  /**
   * Fetch a page of records
   *
   * @param  {object} opts request options
   * @return {Promise} promise that resolves to page of records
   */
  page(opts: RequestOpts): Promise<any> {
    return this.request(opts);
  }

  /**
   * Update a record
   * @throws {Error} If response returns non 2xx status code
   *
   * @param  {object} opts request options
   * @return {Promise} promise that resolves to updated result
   */
  update(opts: RequestOpts): Promise<any> {
    var qResponse = this.request(opts);
    qResponse = qResponse.then(function success(response) {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        throw new RestException(response);
      }

      if (typeof response.body === "string") {
        return JSON.parse(response.body);
      }
      return response.body;
    });

    return qResponse;
  }

  /**
   * Delete a record
   * @throws {Error} If response returns a 5xx status
   *
   * @param  {object} opts request options
   * @return {Promise} promise that resolves to true if record was deleted
   */
  remove(opts: RequestOpts): Promise<boolean> {
    var qResponse = this.request(opts);
    qResponse = qResponse.then(function success(response) {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        throw new RestException(response);
      }

      return response.statusCode === 204;
    });

    return qResponse;
  }

  /**
   * Process limits for list requests
   *
   * @param {object} [opts] ...
   * @param {number} [opts.limit] The maximum number of items to fetch
   * @param {number} [opts.pageSize] The maximum number of items to return
   *                                  with every request
   */
  readLimits(opts: PageLimitOptions): PageLimit {
    var limit = opts.limit;
    var pageSize = opts.pageSize;
    if ((limit && !Number.isFinite(limit)) || limit <= 0) {
      throw new TypeError("Parameter limit must be a positive integer");
    }

    if (pageSize && (!Number.isFinite(pageSize) || pageSize <= 0)) {
      throw new TypeError("Parameter pageSize must be a positive integer");
    }

    if (limit && !pageSize) {
      pageSize = limit;
    }

    return {
      limit: limit,
      pageSize: pageSize,
    };
  }

  setPromiseCallback(operationPromise: any, callback: any): Promise<any> {
    if (typeof callback === "function") {
      operationPromise = operationPromise
        .then((value) => callback(null, value))
        .catch((error) => callback(error));
    }
    return operationPromise;
  }

  /**
   * For each record instance, executes a provided callback function with that
   * instance
   *
   * @param {object} [params] Parameters
   * @param {number} [params.limit] The maximum number of record instances to
   *  fetch
   * @param {number} [params.pageSize] The maximum number of records to return
   *  with every request
   * @param {function} params.callback Callback function to call with each
   *  record instance
   * @param {function} [params.done] Optional done function to call when all
   *  records are processed, the limit is reached, or an error occurs.
   *  Receives an error argument if an error occurs. If done is not provided,
   *  the each function will return a promise.
   * @param {function} [callback] Callback function to call with each record.
   *  Receives an onComplete function argument that will short-circuit the for-
   *  each loop that may accept an error argument.
   * @returns {undefined|Promise<undefined>} Returns undefined if a done
   *  function is provided in the params. Returns a promise if a done function
   *  is not provided. Promise resolves when all records processed or if the
   *  limit is reached, and rejects with an error if an error occurs.
   */
  each<T>(
    params?: any,
    callback?: (item: T, done: (err?: Error) => void) => void
  ): Promise<undefined> | undefined {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }
    if (params.callback) {
      callback = params.callback;
    }
    if (typeof callback === "undefined") {
      throw new Error("Callback function must be provided");
    }
    let done = false;
    let doneCalled = false;
    let currentPage = 1;
    let currentResource = 0;
    let limits = {} as PageLimit;
    let promise;
    let pResolve;
    let pReject;
    if (this._version instanceof Version) {
      limits = this._version.readLimits({
        limit: params.limit,
        pageSize: params.pageSize,
      });
    }
    function onComplete(error?: Error) {
      done = true;
      if (typeof params.done === "function" && !doneCalled) {
        params.done(error);
      }
      doneCalled = true;
      if (typeof params.done === "function" && !doneCalled) {
        params.done(error);
      }
      doneCalled = true;
      if (error && typeof pReject === "function") {
        return pReject(error);
      }
      if (!error && typeof pResolve === "function") {
        return pResolve();
      }
    }
    function fetchNextPage(fn) {
      let promise = fn();
      if (typeof promise === "undefined") {
        onComplete();
        return;
      }

      promise.then((page) => {
        try {
          Object.keys(page.instances).forEach(function (instance) {
            if (
              done ||
              (typeof params.limit !== "undefined" &&
                currentResource >= params.limit)
            ) {
              done = true;
              return false;
            }
            currentResource++;
            try {
              callback(page.instances[instance], onComplete);
            } catch (e) {
              throw e;
            }
          });
        } catch (e) {
          return onComplete(e);
        }

        if (!done) {
          currentPage++;
          fetchNextPage(page.nextPage.bind(page));
        } else {
          onComplete();
        }
      });
      promise.catch(onComplete);
    }

    if (typeof params.done !== "function") {
      promise = new Promise((resolve, reject) => {
        pResolve = resolve;
        pReject = reject;
        fetchNextPage(this.page.bind(this, Object.assign(params, limits)));
      });
    } else {
      fetchNextPage(this.page.bind(this, Object.assign(params, limits)));
    }

    return promise;
  }

  list<T>(
    params?: any,
    callback?: (error: Error | null, items: T) => any
  ): Promise<any> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }
    let allResources = [];
    params.callback = function (resource, done) {
      allResources.push(resource);
      if (
        typeof params.limit !== "undefined" &&
        allResources.length === params.limit
      ) {
        done();
      }
    };
    let operationPromise = new Promise((resolve, reject) => {
      params.done = function (error) {
        if (typeof error === "undefined") {
          resolve(allResources);
        } else {
          reject(error);
        }
      };
    });
    if (this._version instanceof Version) {
      operationPromise = this._version.setPromiseCallback(
        operationPromise,
        callback
      );
    }
    this.each(params);
    return operationPromise;
  }
}
