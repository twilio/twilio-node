'use strict';
var _ = require('lodash');
var util = require('util');
var Request = require('../../lib/http/request');
var RequestClient = require('../../lib/base/RequestClient');
var moduleInfo = require('../../package.json');
var os = require('os');

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
      'twilio-node/%s (%s %s) node/%s',
      moduleInfo.version,
      os.platform(),
      os.arch(),
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

Holodeck.prototype.request = async function(opts) {
  opts = opts || {};

  var request = new Request(_.assign({}, opts, {
    auth: {
      username: opts.username,
      password: opts.password,
    }
  }));
  this.requests.push(request);

  const matchedHologramIndex = this.holograms.findIndex(hologram => hologram.request.isEqual(request));

  if (matchedHologramIndex >= 0) {
    const matchedHologram = this.holograms[matchedHologramIndex];
    this.holograms.splice(matchedHologram, 1);

    const response = matchedHologram.response;
    return {
      statusCode: response.statusCode,
      body: response.body,
    };
  } else {
    throw new Error('Failure: holodeck does not contain response');
  }
};

module.exports = Holodeck;
