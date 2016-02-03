// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
'use strict';

var _ = require('lodash');

/**
 * @constructor
 * 
 * @description Base page object to maintain request state.
 *
 * @param {Version} version - A twilio version instance
 * @param {Object} response - The http response
 */
function Page(version, response) {
  var payload = this.processResponse(response);

  this._version = version;
  this._payload = payload;
  this._solution = {};

  this.nextPageUrl = this.getNextPageUrl();
  this.previousPageUrl = this.getPreviousPageUrl();

  this.instances = this.loadInstances(this.loadPage(payload));
}

Page.prototype.META_KEYS = [
  'end',
  'first_page_uri',
  'next_page_uri',
  'last_page_uri',
  'page',
  'page_size',
  'previous_page_uri',
  'total',
  'num_pages',
  'start',
  'uri',
];

Page.prototype.getPreviousPageUrl = function() {
  if ('meta' in this._payload &&
      'previous_page_url' in this._payload.meta &&
      this._payload.previous_page_url) { // jshint ignore:line
    return this._payload.meta.previous_page_url; // jshint ignore:line
  }

  if ('previous_page_uri' in this._payload &&
      this._payload.previous_page_uri) { // jshint ignore:line
    return this._version._domain.absoluteUrl(
        this._payload.previous_page_uri); // jshint ignore:line
  }

  return undefined;
};

Page.prototype.getNextPageUrl = function() {
  if ('meta' in this._payload &&
      'next_page_url' in this._payload.meta &&
      this._payload.meta.next_page_url) { // jshint ignore:line
    return this._payload.meta.next_page_url; // jshint ignore:line
  }

  if ('next_page_uri' in this._payload &&
      this._payload.next_page_uri) { // jshint ignore:line
    return this._version._domain.absoluteUrl(
        this._payload.next_page_uri); // jshint ignore:line
  }

  return undefined;
};

Page.prototype.getInstance = function() {
  throw new Error('Page.get_instance() must be implemented in ' +
      'the derived class');
};

Page.prototype.loadInstances = function(resources) {

  return _.map(resources, function(resource) {
    return this.getInstance(resource);
  }.bind(this));

};

Page.prototype.nextPage = function() {
  if (!this.nextPageUrl) {
    return undefined;
  }

  var promise = this._version._domain.twilio.request({
    method: 'GET', 
    uri: this.nextPageUrl
  });

  promise = promise.then(function(response) {
    return new this.constructor(this._version, response, this._solution);
  }.bind(this));

  return promise;
};

Page.prototype.previousPage = function() {
  if (!this.previousPageUrl) {
    return undefined;
  }

  var promise = this._version._domain.twilio.request({
    method: 'GET', 
    uri: this.previousPageUrl
  });

  promise = promise.then(function(response) {
    return new this.constructor(this._version, response, this._solution);
  }.bind(this));

  return promise;
};

Page.prototype.processResponse = function(response) {
  if (response.statusCode !== 200) {
    throw new Error(_.template('[<%= statusCode %>] Unable to ' +
        'fetch record.\n<%= body %>')(response));
  }

  return JSON.parse(response.body);
};

Page.prototype.loadPage = function(payload) {
  if ('meta' in payload && 'key' in payload.meta) {
    return payload[payload.meta.key];
  }

  var keys = _.chain(payload)
      .keys()
      .difference(this.META_KEYS)
      .value();

  if (keys.length === 1) {
    return payload[keys[0]];
  }

  throw new Error('Page Records cannot be deserialized');
};

module.exports = Page;
