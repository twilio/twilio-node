'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require(
    '../../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var NewFactorList;
var NewFactorPage;
var NewFactorInstance;

/* jshint ignore:start */
/**
 * Initialize the NewFactorList
 *
 * @constructor Twilio.Verify.V2.ServiceContext.EntityContext.NewFactorList
 *
 * @param {Twilio.Verify.V2} version - Version of the resource
 * @param {string} serviceSid - Service Sid.
 * @param {string} identity - Unique external identifier of the Entity
 */
/* jshint ignore:end */
NewFactorList = function NewFactorList(version, serviceSid, identity) {
  /* jshint ignore:start */
  /**
   * @function newFactors
   * @memberof Twilio.Verify.V2.ServiceContext.EntityContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Verify.V2.ServiceContext.EntityContext.NewFactorContext}
   */
  /* jshint ignore:end */
  function NewFactorListInstance(sid) {
    return NewFactorListInstance.get(sid);
  }

  NewFactorListInstance._version = version;
  // Path Solution
  NewFactorListInstance._solution = {serviceSid: serviceSid, identity: identity};
  NewFactorListInstance._uri = `/Services/${serviceSid}/Entities/${identity}/Factors`;
  /* jshint ignore:start */
  /**
   * create a NewFactorInstance
   *
   * @function create
   * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.NewFactorList#
   *
   * @param {object} opts - Options for request
   * @param {string} opts.friendlyName - The friendly name of this Factor
   * @param {new_factor.factor_types} opts.factorType - The Type of this Factor
   * @param {string} [opts.binding.alg] -
   *          The algorithm used when `factor_type` is `push`
   * @param {string} [opts.binding.publicKey] - The public key encoded in Base64
   * @param {string} [opts.config.appId] -
   *          The ID that uniquely identifies your app in the Google or Apple store
   * @param {new_factor.notification_platforms} [opts.config.notificationPlatform] -
   *          The transport technology used to generate the Notification Token
   * @param {string} [opts.config.notificationToken] -
   *          For APN, the device token. For FCM, the registration token
   * @param {string} [opts.config.sdkVersion] -
   *          The Verify Push SDK version used to configure the factor
   * @param {string} [opts.binding.secret] - The shared secret in Base32
   * @param {number} [opts.config.timeStep] -
   *          How often, in seconds, are TOTP codes generated
   * @param {number} [opts.config.skew] -
   *          The number of past and future time-steps valid at a given time
   * @param {number} [opts.config.codeLength] -
   *          Number of digits for generated TOTP codes
   * @param {new_factor.totp_algorithms} [opts.config.alg] -
   *          The algorithm used to derive the TOTP codes
   * @param {object} [opts.metadata] - Metadata of the factor.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed NewFactorInstance
   */
  /* jshint ignore:end */
  NewFactorListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts['friendlyName'])) {
      throw new Error('Required parameter "opts[\'friendlyName\']" missing.');
    }
    if (_.isUndefined(opts['factorType'])) {
      throw new Error('Required parameter "opts[\'factorType\']" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
      'FactorType': _.get(opts, 'factorType'),
      'Binding.Alg': _.get(opts, 'binding.alg'),
      'Binding.PublicKey': _.get(opts, 'binding.publicKey'),
      'Config.AppId': _.get(opts, 'config.appId'),
      'Config.NotificationPlatform': _.get(opts, 'config.notificationPlatform'),
      'Config.NotificationToken': _.get(opts, 'config.notificationToken'),
      'Config.SdkVersion': _.get(opts, 'config.sdkVersion'),
      'Binding.Secret': _.get(opts, 'binding.secret'),
      'Config.TimeStep': _.get(opts, 'config.timeStep'),
      'Config.Skew': _.get(opts, 'config.skew'),
      'Config.CodeLength': _.get(opts, 'config.codeLength'),
      'Config.Alg': _.get(opts, 'config.alg'),
      'Metadata': serialize.object(_.get(opts, 'metadata'))
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new NewFactorInstance(this._version, payload));
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
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.NewFactorList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  NewFactorListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  NewFactorListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return NewFactorListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the NewFactorPage
 *
 * @constructor Twilio.Verify.V2.ServiceContext.EntityContext.NewFactorPage
 *
 * @param {V2} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {NewFactorSolution} solution - Path solution
 *
 * @returns NewFactorPage
 */
/* jshint ignore:end */
NewFactorPage = function NewFactorPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(NewFactorPage.prototype, Page.prototype);
NewFactorPage.prototype.constructor = NewFactorPage;

/* jshint ignore:start */
/**
 * Build an instance of NewFactorInstance
 *
 * @function getInstance
 * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.NewFactorPage#
 *
 * @param {NewFactorPayload} payload - Payload response from the API
 *
 * @returns NewFactorInstance
 */
/* jshint ignore:end */
NewFactorPage.prototype.getInstance = function getInstance(payload) {
  return new NewFactorInstance(
    this._version,
    payload,
    this._solution.serviceSid,
    this._solution.identity
  );
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.NewFactorPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
NewFactorPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

NewFactorPage.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the NewFactorContext
 *
 * @constructor Twilio.Verify.V2.ServiceContext.EntityContext.NewFactorInstance
 *
 * @property {string} sid - A string that uniquely identifies this Factor.
 * @property {string} accountSid - Account Sid.
 * @property {string} serviceSid - Service Sid.
 * @property {string} entitySid - Entity Sid.
 * @property {string} identity - Unique external identifier of the Entity
 * @property {object} binding - Binding of the factor
 * @property {Date} dateCreated - The date this Factor was created
 * @property {Date} dateUpdated - The date this Factor was updated
 * @property {string} friendlyName - A human readable description of this resource.
 * @property {new_factor.factor_statuses} status - The Status of this Factor
 * @property {new_factor.factor_types} factorType - The Type of this Factor
 * @property {object} config - Configurations for a `factor_type`.
 * @property {object} metadata - Metadata of the factor.
 * @property {string} url - The URL of this resource.
 *
 * @param {V2} version - Version of the resource
 * @param {NewFactorPayload} payload - The instance payload
 * @param {sid} serviceSid - Service Sid.
 * @param {string} identity - Unique external identifier of the Entity
 */
/* jshint ignore:end */
NewFactorInstance = function NewFactorInstance(version, payload, serviceSid,
                                                identity) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.entitySid = payload.entity_sid; // jshint ignore:line
  this.identity = payload.identity; // jshint ignore:line
  this.binding = payload.binding; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.factorType = payload.factor_type; // jshint ignore:line
  this.config = payload.config; // jshint ignore:line
  this.metadata = payload.metadata; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {serviceSid: serviceSid, identity: identity, };
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Verify.V2.ServiceContext.EntityContext.NewFactorInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
NewFactorInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

NewFactorInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  NewFactorList: NewFactorList,
  NewFactorPage: NewFactorPage,
  NewFactorInstance: NewFactorInstance
};