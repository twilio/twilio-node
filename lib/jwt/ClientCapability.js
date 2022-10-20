'use strict';

var jwt = require('jsonwebtoken');
var qs = require('querystring');

/**
 * @constructor
 * @param filters
 */
function EventStreamScope(filters) {
  this.filters = filters || {};
}

EventStreamScope.prototype = Object.assign(EventStreamScope.prototype, {
  scope: 'scope:stream:subscribe',

  payload: function() {
    var queryArgs = ['path=/2010-04-01/Events'];

    if (Object.keys(this.filters).length > 0) {
      var queryParams = Object.entries(this.filters).map(filter => {
        return [qs.escape(filter[0]), qs.escape(filter[1])].join('=');
      })
      var filterParams = queryParams.join('&');

      queryArgs.push(['appParams', qs.escape(filterParams)].join('='));
    }

    var queryString = queryArgs.join('&');
    return [this.scope, queryString].join('?');
  }
});

/**
 * @constructor
 * @param clientName
 */
function IncomingClientScope(clientName) {
  this.clientName = clientName;
}

IncomingClientScope.prototype = Object.assign(IncomingClientScope.prototype, {
  scope: 'scope:client:incoming',

  payload: function() {
    var query = ['clientName', qs.escape(this.clientName)].join('=');
    return [this.scope, query].join('?');
  }
});

/**
 * @constructor
 * @param {object} options - ...
 * @param {string} options.applicationSid - the application sid
 * @param {string} [options.clientName] - the client name
 * @param {object} [options.params] - parameters
 */
function OutgoingClientScope(options) {
  if (!options) {
    throw new Error('Required parameter "options" missing.');
  }
  if (!options.applicationSid) {
    throw new Error('Required parameter "options.applicationSid" missing.');
  }

  options = options || {};
  this.applicationSid = options.applicationSid;
  this.clientName = options.clientName;
  this.params = options.params;
}

OutgoingClientScope.prototype = Object.assign(OutgoingClientScope.prototype, {
  scope: 'scope:client:outgoing',

  payload: function() {
    var queryArgs = [['appSid', qs.escape(this.applicationSid)].join('=')];

    if (typeof this.clientName === 'string') {
      queryArgs.push(['clientName', qs.escape(this.clientName)].join('='));
    }

    if (typeof this.params === 'object') {
      var queryParams = Object.entries(this.params).map(param => {
        return [qs.escape(param[0]), qs.escape(param[1])].join('=');
      })
      var filterParams = queryParams.join('&');

      queryArgs.push(['appParams', qs.escape(filterParams)].join('='));
    }

    var queryString = queryArgs.join('&');
    return [this.scope, queryString].join('?');
  }
});

/**
 * @constructor
 * @param options
 */
function ClientCapability(options) {
  if (!options) {
    throw new Error('Required parameter "options" missing.');
  }
  if (!options.accountSid) {
    throw new Error('Required parameter "options.accountSid" missing.');
  }
  if (!options.authToken) {
    throw new Error('Required parameter "options.authToken" missing.');
  }

  options = options || {};
  this.accountSid = options.accountSid;
  this.authToken = options.authToken;
  this.ttl = options.ttl || 3600;
  this.scopes = [];
}

ClientCapability.EventStreamScope = EventStreamScope;
ClientCapability.IncomingClientScope = IncomingClientScope;
ClientCapability.OutgoingClientScope = OutgoingClientScope;

ClientCapability.prototype = Object.assign(ClientCapability.prototype, {
  addScope: function(scope) {
    this.scopes.push(scope);
  },

  toJwt: function() {
    const scope = this.scopes.map((scope) => scope.payload()).join(' ');
    var payload = {
      scope: scope,
      iss: this.accountSid,
      exp: Math.floor(new Date() / 1000) + this.ttl
    };

    return jwt.sign(payload, this.authToken);
  }
});

module.exports = ClientCapability;
