'use strict';

var _ = require('lodash');

function InstanceContext() {
  this._version = version;
}

/**
 * Build a new instance given a json payload
 * @abstract
 * 
 * @return {InstanceResource} instance of a resource
 */
InstanceContext.prototype.getInstance = function(payload) {
  throw new Error('Page.get_instance() must be implemented in ' +
      'the derived class');
};

InstanceContext.prototype.remove = function(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({
    uri: this._uri,
    method: this._method
  });

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
}