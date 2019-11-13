'use strict';
var _ = require('lodash');
var Q = require('q');
var util = require('util');
var Request = require('../../lib/http/request');
var RequestClient = require('../../lib/base/RequestClient');
var moduleInfo = require('../../package.json');

function Hologram(request, response) {
  this.request = request;
  this.response = response;
}

function Holodeck() {
  this.requests = [];
  this.holograms = [];
}

_.extend(Holodeck.prototype, RequestClient.prototype);

Holodeck.prototype.mock = function(response, request) {
  request = request || new Request();
  this.holograms.push(new Hologram(request, response));
};

Holodeck.prototype.addStandardHeaders = function(request) {
  var standardHeaders = {
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8',
    'User-Agent': util.format(
      'twilio-node/%s (node.js %s)',
      moduleInfo.version,
      process.version
    )
  };
  if (request.method === 'POST') {
    standardHeaders['Content-Type'] = 'application/x-www-form-urlencoded';
  }
  _.assign(request.headers, standardHeaders);
  return request;
};

Holodeck.prototype.assertHasRequest = function(request) {
  var requestWithHeaders = this.addStandardHeaders(request);
  var matchedRequest = _.find(this.requests, function(req) {
    return req.isEqual(request) || req.isEqual(requestWithHeaders);
  });

  if (!_.isUndefined(matchedRequest)) {
    return;
  }

  var message = _.template(
    '\nHolodeck has never received a request matching: \n <%= request %>\n')({ request: request }
  );

  throw new Error(message);
};

Holodeck.prototype.request = function(opts) {
  opts = opts || {};

  var deferred = Q.defer();
  var request = new Request(_.assign({}, opts, {
    auth: {
      username: opts.username,
      password: opts.password
    }
  }));
  this.requests.push(request);

  var matchedHologram = _.find(this.holograms, function(hologram) {
    return hologram.request.isEqual(request);
  });

  setTimeout(function() {
    if (!_.isUndefined(matchedHologram)) {
      var response = matchedHologram.response;
      deferred.resolve({
        statusCode: response.statusCode,
        body: response.body
      });
    } else {
      deferred.reject(new Error('Failure: holodeck does not contain response'));
    }
  }, 1);

  return deferred.promise;
};

module.exports = Holodeck;
