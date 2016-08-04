'use strict';

var _ = require('lodash');
var Q = require('q');
var Page = require('../../../../base/Page');
var values = require('../../../../base/values');

var UsagePage;
var UsageList;
var UsageInstance;
var UsageContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Wireless.DeviceContext.UsagePage
 * @augments Page
 * @description Initialize the UsagePage
 *
 * @param {Twilio.Preview.Wireless} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns UsagePage
 */
/* jshint ignore:end */
function UsagePage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
}

_.extend(UsagePage.prototype, Page.prototype);
UsagePage.prototype.constructor = UsagePage;

/* jshint ignore:start */
/**
 * Build an instance of UsageInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.Wireless.DeviceContext.UsagePage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns UsageInstance
 */
/* jshint ignore:end */
UsagePage.prototype.getInstance = function getInstance(payload) {
  return new UsageInstance(
    this._version,
    payload,
    this._solution.deviceSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Wireless.DeviceContext.UsageList
 * @description Initialize the UsageList
 *
 * @param {Twilio.Preview.Wireless} version - Version of the resource
 * @param {string} deviceSid - The device_sid
 */
/* jshint ignore:end */
function UsageList(version, deviceSid) {
  /* jshint ignore:start */
  /**
   * @function usage
   * @memberof Twilio.Preview.Wireless.DeviceContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.Wireless.DeviceContext.UsageContext}
   */
  /* jshint ignore:end */
  function UsageListInstance(sid) {
    return UsageListInstance.get(sid);
  }

  UsageListInstance._version = version;
  // Path Solution
  UsageListInstance._solution = {
    deviceSid: deviceSid
  };
  /* jshint ignore:start */
  /**
   * Constructs a usage
   *
   * @function get
   * @memberof Twilio.Preview.Wireless.DeviceContext.UsageList
   * @instance
   *
   * @returns {Twilio.Preview.Wireless.DeviceContext.UsageContext}
   */
  /* jshint ignore:end */
  UsageListInstance.get = function get() {
    return new UsageContext(
      this._version,
      this._solution.deviceSid
    );
  };

  return UsageListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Wireless.DeviceContext.UsageInstance
 * @description Initialize the UsageContext
 *
 * @property {string} deviceSid - The device_sid
 * @property {string} deviceAlias - The device_alias
 * @property {string} accountSid - The account_sid
 * @property {string} period - The period
 * @property {string} commandsUsage - The commands_usage
 * @property {string} commandsCosts - The commands_costs
 * @property {string} dataUsage - The data_usage
 * @property {string} dataCosts - The data_costs
 * @property {string} url - The url
 *
 * @param {Twilio.Preview.Wireless} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid_like} deviceSid - The device_sid
 */
/* jshint ignore:end */
function UsageInstance(version, payload, deviceSid) {
  this._version = version;

  // Marshaled Properties
  this.deviceSid = payload.device_sid; // jshint ignore:line
  this.deviceAlias = payload.device_alias; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.period = payload.period; // jshint ignore:line
  this.commandsUsage = payload.commands_usage; // jshint ignore:line
  this.commandsCosts = payload.commands_costs; // jshint ignore:line
  this.dataUsage = payload.data_usage; // jshint ignore:line
  this.dataCosts = payload.data_costs; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    deviceSid: deviceSid,
  };
}

Object.defineProperty(UsageInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new UsageContext(
        this._version,
        this._solution.deviceSid
      );
    }

    return this._context;
  },
});

/* jshint ignore:start */
/**
 * fetch a UsageInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Wireless.DeviceContext.UsageInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.end] - The end
 * @param {string} [opts.start] - The start
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed UsageInstance
 */
/* jshint ignore:end */
UsageInstance.prototype.fetch = function fetch(opts, callback) {
  return this._proxy.fetch(opts, callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Wireless.DeviceContext.UsageContext
 * @description Initialize the UsageContext
 *
 * @param {Twilio.Preview.Wireless} version - Version of the resource
 * @param {sid_like} deviceSid - The device_sid
 */
/* jshint ignore:end */
function UsageContext(version, deviceSid) {
  this._version = version;

  // Path Solution
  this._solution = {
    deviceSid: deviceSid,
  };
  this._uri = _.template(
    '/Devices/<%= deviceSid %>/Usage' // jshint ignore:line
  )(this._solution);
}

/* jshint ignore:start */
/**
 * fetch a UsageInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Wireless.DeviceContext.UsageContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.end] - The end
 * @param {string} [opts.start] - The start
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed UsageInstance
 */
/* jshint ignore:end */
UsageContext.prototype.fetch = function fetch(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'End': opts.end,
    'Start': opts.start
  });

  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET',
    params: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new UsageInstance(
      this._version,
      payload,
      this._solution.deviceSid
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

module.exports = {
  UsagePage: UsagePage,
  UsageList: UsageList,
  UsageInstance: UsageInstance,
  UsageContext: UsageContext
};
