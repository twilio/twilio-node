var _ = require('lodash');
var Request = require('../../lib/http/request');

function Hologram(request, response) {
  this.request = request;
  this.response = response;
};

function Holodeck() {};

Object.defineProperty(Holodeck.prototype, "requests", {
  get: function() {
    this._requests = this._requests || [];
    return this._requests;
  }
});

Object.defineProperty(Holodeck.prototype, "holograms", {
  get: function() {
    this._holograms = this._holograms || [];
    return this._holograms;
  }
});

Holodeck.prototype.mock = function(response, request) {
  request = request || new Request();
  this._holograms.push(new Hologram(request, response));
};

Holodeck.prototype.assertHasRequest = function(request) {
  if (_.includes(this._requests, request)) {
    return;
  }

  var message = _.template('\nHolodeck has never received a request matching: \n <%= request %>\n')({ request: request });

  // TODO: finish this
  // message = '\nHolodeck never received a request matching: \n + {}\n'.format(request)
  // if self._requests:
  //   message += 'Requests received:\n'
  //   message += '\n'.join(' * {}'.format(r) for r in self.requests)
  // else:
  //   message += 'No Requests received'

  // throw Error(message);
};

Holodeck.prototype.request = function(method, url, opts) {
  opts = opts || {};

  var request = new Request(_.merge({
    method: method,
    url: url
  }, opts));
  this.requests.push(request);

  var response = _.find(this._holograms, function(hologram) {
    return hologram.request === request;
  })

  if (_.isUndefined(response)) {
    return response;
  }

  // TODO: can't find hologram message

  // rest exception?
  throw new Error(404);
};