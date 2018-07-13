/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the BindingList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The service_sid
 */
declare function BindingList(version: V1, serviceSid: string): BindingListInstance;

interface BindingResource {
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

interface BindingListInstance {
  /* jshint ignore:start */
  /**
   * create a BindingInstance
   *
   * @function create
   * @memberof Twilio.Notify.V1.ServiceContext.BindingList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.identity - The Identity to which this Binding belongs to.
   * @param {binding.binding_type} opts.bindingType - The type of the Binding.
   * @param {string} opts.address - The address specific to the channel.
   * @param {string|list} [opts.tag] - The list of tags associated with this Binding.
   * @param {string} [opts.notificationProtocolVersion] -
   *          The version of the protocol used to send the notification.
   * @param {string} [opts.credentialSid] -
   *          The unique identifier of the Credential resource to be used to send notifications to this Binding.
   * @param {string} [opts.endpoint] - DEPRECATED*
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed BindingInstance
   */
  /* jshint ignore:end */
  BindingListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.identity)) {
      throw new Error('Required parameter "opts.identity" missing.');
    }
    if (_.isUndefined(opts.bindingType)) {
      throw new Error('Required parameter "opts.bindingType" missing.');
    }
    if (_.isUndefined(opts.address)) {
      throw new Error('Required parameter "opts.address" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Identity': _.get(opts, 'identity'),
      'BindingType': _.get(opts, 'bindingType'),
      'Address': _.get(opts, 'address'),
      'Tag': serialize.map(_.get(opts, 'tag'), function(e) { return e; }),
      'NotificationProtocolVersion': _.get(opts, 'notificationProtocolVersion'),
      'CredentialSid': _.get(opts, 'credentialSid'),
      'Endpoint': _.get(opts, 'endpoint')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new BindingInstance(
        this._version,
        payload,
        this._solution.serviceSid,
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
   * Streams BindingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Notify.V1.ServiceContext.BindingList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {Date} [opts.startDate] -
   *          Only list Bindings created on or after the given date.
   * @param {Date} [opts.endDate] -
   *          Only list Bindings created on or before the given date.
   * @param {string|list} [opts.identity] -
   *          Only list Bindings that have any of the specified Identities.
   * @param {string|list} [opts.tag] -
   *          Only list Bindings that have all of the specified Tags.
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
  BindingListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of BindingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Notify.V1.ServiceContext.BindingList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  BindingListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new BindingPage(this._version, payload, this._solution));
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
   * @description Lists BindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Notify.V1.ServiceContext.BindingList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {Date} [opts.startDate] -
   *          Only list Bindings created on or after the given date.
   * @param {Date} [opts.endDate] -
   *          Only list Bindings created on or before the given date.
   * @param {string|list} [opts.identity] -
   *          Only list Bindings that have any of the specified Identities.
   * @param {string|list} [opts.tag] -
   *          Only list Bindings that have all of the specified Tags.
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
  BindingListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of BindingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Notify.V1.ServiceContext.BindingList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {Date} [opts.startDate] -
   *          Only list Bindings created on or after the given date.
   * @param {Date} [opts.endDate] -
   *          Only list Bindings created on or before the given date.
   * @param {string|list} [opts.identity] -
   *          Only list Bindings that have any of the specified Identities.
   * @param {string|list} [opts.tag] -
   *          Only list Bindings that have all of the specified Tags.
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  BindingListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'StartDate': serialize.iso8601Date(_.get(opts, 'startDate')),
      'EndDate': serialize.iso8601Date(_.get(opts, 'endDate')),
      'Identity': serialize.map(_.get(opts, 'identity'), function(e) { return e; }),
      'Tag': serialize.map(_.get(opts, 'tag'), function(e) { return e; }),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new BindingPage(this._version, payload, this._solution));
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


declare class BindingPage extends Page {
  /**
   * @constructor Twilio.Notify.V1.ServiceContext.BindingPage
   * @augments Page
   * @description Initialize the BindingPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Notify.V1, response: object, solution: object);

  /**
   * Build an instance of BindingInstance
   *
   * @function getInstance
   * @memberof Twilio.Notify.V1.ServiceContext.BindingPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class BindingInstance {
  /**
   * @constructor Twilio.Notify.V1.ServiceContext.BindingInstance
   * @description Initialize the BindingContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property serviceSid - The service_sid
   * @property credentialSid - The unique identifier of the Credential resource to be used to send notifications to this Binding.
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property notificationProtocolVersion - The version of the protocol used to send the notification.
   * @property endpoint - DEPRECATED*
   * @property identity - The Identity to which this Binding belongs to.
   * @property bindingType - The type of the Binding.
   * @property address - The address specific to the channel.
   * @property tags - The list of tags associated with this Binding.
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Notify.V1, payload: object, serviceSid: sid, sid: sid);

  _proxy?: BindingContext;
  /**
   * fetch a BindingInstance
   *
   * @function fetch
   * @memberof Twilio.Notify.V1.ServiceContext.BindingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a BindingInstance
   *
   * @function remove
   * @memberof Twilio.Notify.V1.ServiceContext.BindingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the BindingInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Notify.V1.ServiceContext.BindingInstance
   * @instance
   */
  toJSON();
}


declare class BindingContext {
  /**
   * @constructor Twilio.Notify.V1.ServiceContext.BindingContext
   * @description Initialize the BindingContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Notify.V1, serviceSid: sid, sid: sid);

  /**
   * fetch a BindingInstance
   *
   * @function fetch
   * @memberof Twilio.Notify.V1.ServiceContext.BindingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a BindingInstance
   *
   * @function remove
   * @memberof Twilio.Notify.V1.ServiceContext.BindingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { BindingContext, BindingInstance, BindingList, BindingListInstance, BindingPage, BindingResource }