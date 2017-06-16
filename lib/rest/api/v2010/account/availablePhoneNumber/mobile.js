'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var MobileList;
var MobilePage;
var MobileInstance;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.MobileList
 * @description Initialize the MobileList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid -
 *          The 34 character string that uniquely identifies your account.
 * @param {string} countryCode - The ISO Country code to lookup phone numbers for.
 */
/* jshint ignore:end */
MobileList = function MobileList(version, accountSid, countryCode) {
  /* jshint ignore:start */
  /**
   * @function mobile
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.MobileContext}
   */
  /* jshint ignore:end */
  function MobileListInstance(sid) {
    return MobileListInstance.get(sid);
  }

  MobileListInstance._version = version;
  // Path Solution
  MobileListInstance._solution = {
    accountSid: accountSid,
    countryCode: countryCode
  };
  MobileListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/AvailablePhoneNumbers/<%= countryCode %>/Mobile.json' // jshint ignore:line
  )(MobileListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams MobileInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.MobileList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.areaCode] - The area_code
   * @param {string} [opts.contains] - The contains
   * @param {string} [opts.smsEnabled] - The sms_enabled
   * @param {string} [opts.mmsEnabled] - The mms_enabled
   * @param {string} [opts.voiceEnabled] - The voice_enabled
   * @param {string} [opts.excludeAllAddressRequired] -
   *          The exclude_all_address_required
   * @param {string} [opts.excludeLocalAddressRequired] -
   *          The exclude_local_address_required
   * @param {string} [opts.excludeForeignAddressRequired] -
   *          The exclude_foreign_address_required
   * @param {string} [opts.beta] - The beta
   * @param {string} [opts.nearNumber] - The near_number
   * @param {string} [opts.nearLatLong] - The near_lat_long
   * @param {number} [opts.distance] - The distance
   * @param {string} [opts.inPostalCode] - The in_postal_code
   * @param {string} [opts.inRegion] - The in_region
   * @param {string} [opts.inRateCenter] - The in_rate_center
   * @param {string} [opts.inLata] - The in_lata
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
  MobileListInstance.each = function each(opts, callback) {
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
   * @description Lists MobileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.MobileList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.areaCode] - The area_code
   * @param {string} [opts.contains] - The contains
   * @param {string} [opts.smsEnabled] - The sms_enabled
   * @param {string} [opts.mmsEnabled] - The mms_enabled
   * @param {string} [opts.voiceEnabled] - The voice_enabled
   * @param {string} [opts.excludeAllAddressRequired] -
   *          The exclude_all_address_required
   * @param {string} [opts.excludeLocalAddressRequired] -
   *          The exclude_local_address_required
   * @param {string} [opts.excludeForeignAddressRequired] -
   *          The exclude_foreign_address_required
   * @param {string} [opts.beta] - The beta
   * @param {string} [opts.nearNumber] - The near_number
   * @param {string} [opts.nearLatLong] - The near_lat_long
   * @param {number} [opts.distance] - The distance
   * @param {string} [opts.inPostalCode] - The in_postal_code
   * @param {string} [opts.inRegion] - The in_region
   * @param {string} [opts.inRateCenter] - The in_rate_center
   * @param {string} [opts.inLata] - The in_lata
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
  MobileListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.MobileList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.areaCode] - The area_code
   * @param {string} [opts.contains] - The contains
   * @param {string} [opts.smsEnabled] - The sms_enabled
   * @param {string} [opts.mmsEnabled] - The mms_enabled
   * @param {string} [opts.voiceEnabled] - The voice_enabled
   * @param {string} [opts.excludeAllAddressRequired] -
   *          The exclude_all_address_required
   * @param {string} [opts.excludeLocalAddressRequired] -
   *          The exclude_local_address_required
   * @param {string} [opts.excludeForeignAddressRequired] -
   *          The exclude_foreign_address_required
   * @param {string} [opts.beta] - The beta
   * @param {string} [opts.nearNumber] - The near_number
   * @param {string} [opts.nearLatLong] - The near_lat_long
   * @param {number} [opts.distance] - The distance
   * @param {string} [opts.inPostalCode] - The in_postal_code
   * @param {string} [opts.inRegion] - The in_region
   * @param {string} [opts.inRateCenter] - The in_rate_center
   * @param {string} [opts.inLata] - The in_lata
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  MobileListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'AreaCode': _.get(opts, 'areaCode'),
      'Contains': _.get(opts, 'contains'),
      'SmsEnabled': _.get(opts, 'smsEnabled'),
      'MmsEnabled': _.get(opts, 'mmsEnabled'),
      'VoiceEnabled': _.get(opts, 'voiceEnabled'),
      'ExcludeAllAddressRequired': _.get(opts, 'excludeAllAddressRequired'),
      'ExcludeLocalAddressRequired': _.get(opts, 'excludeLocalAddressRequired'),
      'ExcludeForeignAddressRequired': _.get(opts, 'excludeForeignAddressRequired'),
      'Beta': _.get(opts, 'beta'),
      'NearNumber': _.get(opts, 'nearNumber'),
      'NearLatLong': _.get(opts, 'nearLatLong'),
      'Distance': _.get(opts, 'distance'),
      'InPostalCode': _.get(opts, 'inPostalCode'),
      'InRegion': _.get(opts, 'inRegion'),
      'InRateCenter': _.get(opts, 'inRateCenter'),
      'InLata': _.get(opts, 'inLata'),
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
      deferred.resolve(new MobilePage(
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
   * Retrieve a single target page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.MobileList
   * @instance
   *
   * @param {number} [opts.areaCode] - The area_code
   * @param {string} [opts.contains] - The contains
   * @param {string} [opts.smsEnabled] - The sms_enabled
   * @param {string} [opts.mmsEnabled] - The mms_enabled
   * @param {string} [opts.voiceEnabled] - The voice_enabled
   * @param {string} [opts.excludeAllAddressRequired] -
   *          The exclude_all_address_required
   * @param {string} [opts.excludeLocalAddressRequired] -
   *          The exclude_local_address_required
   * @param {string} [opts.excludeForeignAddressRequired] -
   *          The exclude_foreign_address_required
   * @param {string} [opts.beta] - The beta
   * @param {string} [opts.nearNumber] - The near_number
   * @param {string} [opts.nearLatLong] - The near_lat_long
   * @param {number} [opts.distance] - The distance
   * @param {string} [opts.inPostalCode] - The in_postal_code
   * @param {string} [opts.inRegion] - The in_region
   * @param {string} [opts.inRateCenter] - The in_rate_center
   * @param {string} [opts.inLata] - The in_lata
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  MobileListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new MobilePage(
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

  return MobileListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.MobilePage
 * @augments Page
 * @description Initialize the MobilePage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns MobilePage
 */
/* jshint ignore:end */
MobilePage = function MobilePage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(MobilePage.prototype, Page.prototype);
MobilePage.prototype.constructor = MobilePage;

/* jshint ignore:start */
/**
 * Build an instance of MobileInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.MobilePage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns MobileInstance
 */
/* jshint ignore:end */
MobilePage.prototype.getInstance = function getInstance(payload) {
  return new MobileInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.countryCode
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.MobileInstance
 * @description Initialize the MobileContext
 *
 * @property {string} friendlyName - The friendly_name
 * @property {string} phoneNumber - The phone_number
 * @property {string} lata - The lata
 * @property {string} rateCenter - The rate_center
 * @property {number} latitude - The latitude
 * @property {number} longitude - The longitude
 * @property {string} region - The region
 * @property {string} postalCode - The postal_code
 * @property {string} isoCountry - The iso_country
 * @property {string} addressRequirements - The address_requirements
 * @property {string} beta - The beta
 * @property {string} capabilities - The capabilities
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 */
/* jshint ignore:end */
MobileInstance = function MobileInstance(version, payload, accountSid,
                                          countryCode) {
  this._version = version;

  // Marshaled Properties
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.phoneNumber = payload.phone_number; // jshint ignore:line
  this.lata = payload.lata; // jshint ignore:line
  this.rateCenter = payload.rate_center; // jshint ignore:line
  this.latitude = deserialize.decimal(payload.latitude); // jshint ignore:line
  this.longitude = deserialize.decimal(payload.longitude); // jshint ignore:line
  this.region = payload.region; // jshint ignore:line
  this.postalCode = payload.postal_code; // jshint ignore:line
  this.isoCountry = payload.iso_country; // jshint ignore:line
  this.addressRequirements = payload.address_requirements; // jshint ignore:line
  this.beta = payload.beta; // jshint ignore:line
  this.capabilities = payload.capabilities; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    countryCode: countryCode,
  };
};

module.exports = {
  MobileList: MobileList,
  MobilePage: MobilePage,
  MobileInstance: MobileInstance
};
