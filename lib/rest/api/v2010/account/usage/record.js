'use strict';

var _ = require('lodash');
var Q = require('q');
var AllTimeList = require('./record/allTime').AllTimeList;
var DailyList = require('./record/daily').DailyList;
var InstanceResource = require('../../../../../base/InstanceResource');
var LastMonthList = require('./record/lastMonth').LastMonthList;
var MonthlyList = require('./record/monthly').MonthlyList;
var Page = require('../../../../../base/Page');
var ThisMonthList = require('./record/thisMonth').ThisMonthList;
var TodayList = require('./record/today').TodayList;
var YearlyList = require('./record/yearly').YearlyList;
var YesterdayList = require('./record/yesterday').YesterdayList;
var deserialize = require('../../../../../base/deserialize');
var serialize = require('../../../../../base/serialize');
var values = require('../../../../../base/values');

var RecordPage;
var RecordList;
var RecordInstance;
var RecordContext;

/**
 * Initialize the RecordPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns RecordPage
 */
function RecordPage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(RecordPage.prototype, Page.prototype);
RecordPage.prototype.constructor = RecordPage;

/**
 * Build an instance of RecordInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns RecordInstance
 */
RecordPage.prototype.getInstance = function getInstance(payload) {
  return new RecordInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * Initialize the RecordList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns RecordList
 */
function RecordList(version, accountSid) {
  function RecordListInstance(sid) {
    return RecordListInstance.get(sid);
  }

  RecordListInstance._version = version;
  // Path Solution
  RecordListInstance._solution = {
    accountSid: accountSid
  };
  RecordListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Usage/Records.json' // jshint ignore:line
  )(RecordListInstance._solution);

  // Components
  RecordListInstance._allTime = undefined;
  RecordListInstance._daily = undefined;
  RecordListInstance._lastMonth = undefined;
  RecordListInstance._monthly = undefined;
  RecordListInstance._thisMonth = undefined;
  RecordListInstance._today = undefined;
  RecordListInstance._yearly = undefined;
  RecordListInstance._yesterday = undefined;

  /**
   * Streams RecordInstance records from the API.
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
   * @param {record.category} [opts.category] -
   *          Only include usage of a given category
   * @param {moment} [opts.startDateBefore] - Filter by start date
   * @param {moment} [opts.startDate] - Filter by start date
   * @param {moment} [opts.startDateAfter] - Filter by start date
   * @param {moment} [opts.endDateBefore] - Filter by end date
   * @param {moment} [opts.endDate] - Filter by end date
   * @param {moment} [opts.endDateAfter] - Filter by end date
   */
  RecordListInstance.each = function each(opts, callback) {
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
   * Lists RecordInstance records from the API as a list.
   *
   * @param {record.category} [opts.category] -
   *          Only include usage of a given category
   * @param {moment} [opts.startDateBefore] - Filter by start date
   * @param {moment} [opts.startDate] - Filter by start date
   * @param {moment} [opts.startDateAfter] - Filter by start date
   * @param {moment} [opts.endDateBefore] - Filter by end date
   * @param {moment} [opts.endDate] - Filter by end date
   * @param {moment} [opts.endDateAfter] - Filter by end date
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
  RecordListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of RecordInstance records from the API.
   * Request is executed immediately
   *
   * @param {record.category} [opts.category] -
   *          Only include usage of a given category
   * @param {moment} [opts.startDateBefore] - Filter by start date
   * @param {moment} [opts.startDate] - Filter by start date
   * @param {moment} [opts.startDateAfter] - Filter by start date
   * @param {moment} [opts.endDateBefore] - Filter by end date
   * @param {moment} [opts.endDate] - Filter by end date
   * @param {moment} [opts.endDateAfter] - Filter by end date
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of RecordInstance
   */
  RecordListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Category': opts.category,
      'StartDate<': serialize.iso8601Date(opts.startDateBefore),
      'StartDate': serialize.iso8601Date(opts.startDate),
      'StartDate>': serialize.iso8601Date(opts.startDateAfter),
      'EndDate<': serialize.iso8601Date(opts.endDateBefore),
      'EndDate': serialize.iso8601Date(opts.endDate),
      'EndDate>': serialize.iso8601Date(opts.endDateAfter),
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
      deferred.resolve(new RecordPage(
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

  Object.defineProperty(RecordListInstance,
    'allTime', {
    get: function allTime() {
      if (!this._allTime) {
        this._allTime = new AllTimeList(
          this._version,
          this._solution.accountSid
        );
      }

      return this._allTime;
    },
  });

  Object.defineProperty(RecordListInstance,
    'daily', {
    get: function daily() {
      if (!this._daily) {
        this._daily = new DailyList(
          this._version,
          this._solution.accountSid
        );
      }

      return this._daily;
    },
  });

  Object.defineProperty(RecordListInstance,
    'lastMonth', {
    get: function lastMonth() {
      if (!this._lastMonth) {
        this._lastMonth = new LastMonthList(
          this._version,
          this._solution.accountSid
        );
      }

      return this._lastMonth;
    },
  });

  Object.defineProperty(RecordListInstance,
    'monthly', {
    get: function monthly() {
      if (!this._monthly) {
        this._monthly = new MonthlyList(
          this._version,
          this._solution.accountSid
        );
      }

      return this._monthly;
    },
  });

  Object.defineProperty(RecordListInstance,
    'thisMonth', {
    get: function thisMonth() {
      if (!this._thisMonth) {
        this._thisMonth = new ThisMonthList(
          this._version,
          this._solution.accountSid
        );
      }

      return this._thisMonth;
    },
  });

  Object.defineProperty(RecordListInstance,
    'today', {
    get: function today() {
      if (!this._today) {
        this._today = new TodayList(
          this._version,
          this._solution.accountSid
        );
      }

      return this._today;
    },
  });

  Object.defineProperty(RecordListInstance,
    'yearly', {
    get: function yearly() {
      if (!this._yearly) {
        this._yearly = new YearlyList(
          this._version,
          this._solution.accountSid
        );
      }

      return this._yearly;
    },
  });

  Object.defineProperty(RecordListInstance,
    'yesterday', {
    get: function yesterday() {
      if (!this._yesterday) {
        this._yesterday = new YesterdayList(
          this._version,
          this._solution.accountSid
        );
      }

      return this._yesterday;
    },
  });

  return RecordListInstance;
}


/**
 * Initialize the RecordContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {RecordContext}
 */
function RecordInstance(version, payload, accountSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    category: payload.category, // jshint ignore:line,
    count: payload.count, // jshint ignore:line,
    countUnit: payload.count_unit, // jshint ignore:line,
    description: payload.description, // jshint ignore:line,
    endDate: deserialize.rfc2822DateTime(payload.end_date), // jshint ignore:line,
    price: deserialize.decimal(payload.price), // jshint ignore:line,
    priceUnit: payload.price_unit, // jshint ignore:line,
    startDate: deserialize.rfc2822DateTime(payload.start_date), // jshint ignore:line,
    subresourceUris: payload.subresource_uris, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
    usage: payload.usage, // jshint ignore:line,
    usageUnit: payload.usage_unit, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
  };
}

_.extend(RecordInstance.prototype, InstanceResource.prototype);
RecordInstance.prototype.constructor = RecordInstance;

Object.defineProperty(RecordInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(RecordInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(RecordInstance.prototype,
  'category', {
  get: function() {
    return this._properties.category;
  },
});

Object.defineProperty(RecordInstance.prototype,
  'count', {
  get: function() {
    return this._properties.count;
  },
});

Object.defineProperty(RecordInstance.prototype,
  'countUnit', {
  get: function() {
    return this._properties.countUnit;
  },
});

Object.defineProperty(RecordInstance.prototype,
  'description', {
  get: function() {
    return this._properties.description;
  },
});

Object.defineProperty(RecordInstance.prototype,
  'endDate', {
  get: function() {
    return this._properties.endDate;
  },
});

Object.defineProperty(RecordInstance.prototype,
  'price', {
  get: function() {
    return this._properties.price;
  },
});

Object.defineProperty(RecordInstance.prototype,
  'priceUnit', {
  get: function() {
    return this._properties.priceUnit;
  },
});

Object.defineProperty(RecordInstance.prototype,
  'startDate', {
  get: function() {
    return this._properties.startDate;
  },
});

Object.defineProperty(RecordInstance.prototype,
  'subresourceUris', {
  get: function() {
    return this._properties.subresourceUris;
  },
});

Object.defineProperty(RecordInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(RecordInstance.prototype,
  'usage', {
  get: function() {
    return this._properties.usage;
  },
});

Object.defineProperty(RecordInstance.prototype,
  'usageUnit', {
  get: function() {
    return this._properties.usageUnit;
  },
});

module.exports = {
  RecordPage: RecordPage,
  RecordList: RecordList,
  RecordInstance: RecordInstance,
  RecordContext: RecordContext
};
