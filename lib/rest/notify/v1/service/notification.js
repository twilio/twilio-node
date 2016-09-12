'use strict';

var _ = require('lodash');
var Q = require('q');
var Page = require('../../../../base/Page');
var deserialize = require('../../../../base/deserialize');
var values = require('../../../../base/values');

var NotificationPage;
var NotificationList;
var NotificationInstance;
var NotificationContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Notify.V1.ServiceContext.NotificationPage
 * @augments Page
 * @description Initialize the NotificationPage
 *
 * @param {Twilio.Notify.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns NotificationPage
 */
/* jshint ignore:end */
function NotificationPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
}

_.extend(NotificationPage.prototype, Page.prototype);
NotificationPage.prototype.constructor = NotificationPage;

/* jshint ignore:start */
/**
 * Build an instance of NotificationInstance
 *
 * @function getInstance
 * @memberof Twilio.Notify.V1.ServiceContext.NotificationPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns NotificationInstance
 */
/* jshint ignore:end */
NotificationPage.prototype.getInstance = function getInstance(payload) {
  return new NotificationInstance(
    this._version,
    payload,
    this._solution.serviceSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Notify.V1.ServiceContext.NotificationList
 * @description Initialize the NotificationList
 *
 * @param {Twilio.Notify.V1} version - Version of the resource
 * @param {string} serviceSid - The service_sid
 */
/* jshint ignore:end */
function NotificationList(version, serviceSid) {
  /* jshint ignore:start */
  /**
   * @function notifications
   * @memberof Twilio.Notify.V1.ServiceContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Notify.V1.ServiceContext.NotificationContext}
   */
  /* jshint ignore:end */
  function NotificationListInstance(sid) {
    return NotificationListInstance.get(sid);
  }

  NotificationListInstance._version = version;
  // Path Solution
  NotificationListInstance._solution = {
    serviceSid: serviceSid
  };
  NotificationListInstance._uri = _.template(
    '/Services/<%= serviceSid %>/Notifications' // jshint ignore:line
  )(NotificationListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a NotificationInstance
   *
   * @function create
   * @memberof Twilio.Notify.V1.ServiceContext.NotificationList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} opts.serviceSid - The service_sid
   * @param {string|list} [opts.identity] - The identity
   * @param {string|list} [opts.tag] - The tag
   * @param {string} [opts.body] - The body
   * @param {notification.priority} [opts.priority] - The priority
   * @param {number} [opts.ttl] - The ttl
   * @param {string} [opts.title] - The title
   * @param {string} [opts.sound] - The sound
   * @param {string} [opts.action] - The action
   * @param {string} [opts.data] - The data
   * @param {string} [opts.apn] - The apn
   * @param {string} [opts.gcm] - The gcm
   * @param {string} [opts.sms] - The sms
   * @param {string} [opts.facebookMessenger] - The facebook_messenger
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed NotificationInstance
   */
  /* jshint ignore:end */
  NotificationListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Identity': opts.identity,
      'Tag': opts.tag,
      'Body': opts.body,
      'Priority': opts.priority,
      'Ttl': opts.ttl,
      'Title': opts.title,
      'Sound': opts.sound,
      'Action': opts.action,
      'Data': opts.data,
      'Apn': opts.apn,
      'Gcm': opts.gcm,
      'Sms': opts.sms,
      'FacebookMessenger': opts.facebookMessenger
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new NotificationInstance(
        this._version,
        payload
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

  return NotificationListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.Notify.V1.ServiceContext.NotificationInstance
 * @description Initialize the NotificationContext
 *
 * @property {string} sid - The sid
 * @property {string} accountSid - The account_sid
 * @property {string} serviceSid - The service_sid
 * @property {Date} dateCreated - The date_created
 * @property {string} identities - The identities
 * @property {string} tags - The tags
 * @property {notification.priority} priority - The priority
 * @property {number} ttl - The ttl
 * @property {string} title - The title
 * @property {string} body - The body
 * @property {string} sound - The sound
 * @property {string} action - The action
 * @property {string} data - The data
 * @property {string} apn - The apn
 * @property {string} gcm - The gcm
 * @property {string} sms - The sms
 * @property {string} facebookMessenger - The facebook_messenger
 *
 * @param {Twilio.Notify.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 */
/* jshint ignore:end */
function NotificationInstance(version, payload, serviceSid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.identities = payload.identities; // jshint ignore:line
  this.tags = payload.tags; // jshint ignore:line
  this.priority = payload.priority; // jshint ignore:line
  this.ttl = deserialize.integer(payload.ttl); // jshint ignore:line
  this.title = payload.title; // jshint ignore:line
  this.body = payload.body; // jshint ignore:line
  this.sound = payload.sound; // jshint ignore:line
  this.action = payload.action; // jshint ignore:line
  this.data = payload.data; // jshint ignore:line
  this.apn = payload.apn; // jshint ignore:line
  this.gcm = payload.gcm; // jshint ignore:line
  this.sms = payload.sms; // jshint ignore:line
  this.facebookMessenger = payload.facebook_messenger; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    serviceSid: serviceSid,
  };
}

module.exports = {
  NotificationPage: NotificationPage,
  NotificationList: NotificationList,
  NotificationInstance: NotificationInstance,
  NotificationContext: NotificationContext
};
