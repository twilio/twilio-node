/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the UserBindingList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The service_sid
 * @param identity - The identity
 */
declare function UserBindingList(version: V1, serviceSid: string, identity: string): UserBindingListInstance;

interface UserBindingResource {
  account_sid: string;
  address: string;
  binding_type: string;
  credential_sid: string;
  date_created: Date;
  date_updated: Date;
  endpoint: string;
  identity: string;
  links: string;
  notification_protocol_version: string;
  service_sid: string;
  sid: string;
  tags: string;
  url: string;
}

interface UserBindingListInstance {
  /* jshint ignore:start */
  /**
   * create a UserBindingInstance
   *
   * @function create
   * @memberof Twilio.Notify.V1.ServiceContext.UserContext.UserBindingList
   * @instance
   *
   * @param {object} opts - ...
   * @param {user_binding.binding_type} opts.bindingType - The binding_type
   * @param {string} opts.address - The address
   * @param {string|list} [opts.tag] - The tag
   * @param {string} [opts.notificationProtocolVersion] -
   *          The notification_protocol_version
   * @param {string} [opts.credentialSid] - The credential_sid
   * @param {string} [opts.endpoint] - The endpoint
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed UserBindingInstance
   */
  /* jshint ignore:end */
  UserBindingListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.bindingType)) {
      throw new Error('Required parameter "opts.bindingType" missing.');
    }
    if (_.isUndefined(opts.address)) {
      throw new Error('Required parameter "opts.address" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'BindingType': _.get(opts, 'bindingType'),
      'Address': _.get(opts, 'address'),
      'Tag': serialize.map(_.get(opts, 'tag'), function(e) { return e; }),
      'NotificationProtocolVersion': _.get(opts, 'notificationProtocolVersion'),
      'CredentialSid': _.get(opts, 'credentialSid'),
      'Endpoint': _.get(opts, 'endpoint')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new UserBindingInstance(
        this._version,
        payload,
        this._solution.serviceSid,
        this._solution.identity,
        this._solution.sid
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
   * Streams UserBindingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Notify.V1.ServiceContext.UserContext.UserBindingList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {Date} [opts.startDate] - The start_date
   * @param {Date} [opts.endDate] - The end_date
   * @param {string|list} [opts.tag] - The tag
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   *         callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  UserBindingListInstance.each = function each(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    if (opts.callback) {
      callback = opts.callback;
    }
    if (_.isUndefined(callback)) {
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
          callback(instance, onComplete);
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
   * Retrieve a single target page of UserBindingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Notify.V1.ServiceContext.UserContext.UserBindingList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  UserBindingListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new UserBindingPage(this._version, payload, this._solution));
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
   * @description Lists UserBindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Notify.V1.ServiceContext.UserContext.UserBindingList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {Date} [opts.startDate] - The start_date
   * @param {Date} [opts.endDate] - The end_date
   * @param {string|list} [opts.tag] - The tag
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
  UserBindingListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of UserBindingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Notify.V1.ServiceContext.UserContext.UserBindingList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {Date} [opts.startDate] - The start_date
   * @param {Date} [opts.endDate] - The end_date
   * @param {string|list} [opts.tag] - The tag
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  UserBindingListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'StartDate': serialize.iso8601Date(_.get(opts, 'startDate')),
      'EndDate': serialize.iso8601Date(_.get(opts, 'endDate')),
      'Tag': serialize.map(_.get(opts, 'tag'), function(e) { return e; }),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new UserBindingPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };
}


declare class UserBindingPage extends Page {
  /**
   * @constructor Twilio.Notify.V1.ServiceContext.UserContext.UserBindingPage
   * @augments Page
   * @description Initialize the UserBindingPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Notify.V1, response: object, solution: object);

  /**
   * Build an instance of UserBindingInstance
   *
   * @function getInstance
   * @memberof Twilio.Notify.V1.ServiceContext.UserContext.UserBindingPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class UserBindingInstance {
  /**
   * @constructor Twilio.Notify.V1.ServiceContext.UserContext.UserBindingInstance
   * @description Initialize the UserBindingContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property serviceSid - The service_sid
   * @property credentialSid - The credential_sid
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property notificationProtocolVersion - The notification_protocol_version
   * @property endpoint - The endpoint
   * @property identity - The identity
   * @property bindingType - The binding_type
   * @property address - The address
   * @property tags - The tags
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param identity - The identity
   * @param sid - The sid
   */
  constructor(version: Twilio.Notify.V1, payload: object, serviceSid: sid, identity: string, sid: sid);

  _proxy?: UserBindingContext;
  /**
   * fetch a UserBindingInstance
   *
   * @function fetch
   * @memberof Twilio.Notify.V1.ServiceContext.UserContext.UserBindingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a UserBindingInstance
   *
   * @function remove
   * @memberof Twilio.Notify.V1.ServiceContext.UserContext.UserBindingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the UserBindingInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Notify.V1.ServiceContext.UserContext.UserBindingInstance
   * @instance
   */
  toJSON();
}


declare class UserBindingContext {
  /**
   * @constructor Twilio.Notify.V1.ServiceContext.UserContext.UserBindingContext
   * @description Initialize the UserBindingContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param identity - The identity
   * @param sid - The sid
   */
  constructor(version: Twilio.Notify.V1, serviceSid: sid, identity: sid_like, sid: sid);

  /**
   * fetch a UserBindingInstance
   *
   * @function fetch
   * @memberof Twilio.Notify.V1.ServiceContext.UserContext.UserBindingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a UserBindingInstance
   *
   * @function remove
   * @memberof Twilio.Notify.V1.ServiceContext.UserContext.UserBindingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { UserBindingContext, UserBindingInstance, UserBindingList, UserBindingListInstance, UserBindingPage, UserBindingResource }