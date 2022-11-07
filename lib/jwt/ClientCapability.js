"use strict";

var jwt = require("jsonwebtoken");
var qs = require("querystring");

/**
 * @constructor
 * @param filters
 */
class EventStreamScope {
  constructor(filters) {
    this.filters = filters || {};
    this.scope = "scope:stream:subscribe";
  }

  payload() {
    var queryArgs = ["path=/2010-04-01/Events"];

    if (Object.keys(this.filters).length > 0) {
      var queryParams = Object.entries(this.filters).map((filter) => {
        return [qs.escape(filter[0]), qs.escape(filter[1])].join("=");
      });
      var filterParams = queryParams.join("&");

      queryArgs.push(["appParams", qs.escape(filterParams)].join("="));
    }

    var queryString = queryArgs.join("&");
    return [this.scope, queryString].join("?");
  }
}

/**
 * @constructor
 * @param clientName
 */
class IncomingClientScope {
  constructor(clientName) {
    this.clientName = clientName;
    this.scope = "scope:client:incoming";
  }

  payload() {
    var query = ["clientName", qs.escape(this.clientName)].join("=");
    return [this.scope, query].join("?");
  }
}

/**
 * @constructor
 * @param {object} options - ...
 * @param {string} options.applicationSid - the application sid
 * @param {string} [options.clientName] - the client name
 * @param {object} [options.params] - parameters
 */
class OutgoingClientScope {
  constructor(options) {
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
    this.scope = "scope:client:outgoing";
  }

  payload() {
    var queryArgs = [["appSid", qs.escape(this.applicationSid)].join("=")];

    if (typeof this.clientName === "string") {
      queryArgs.push(["clientName", qs.escape(this.clientName)].join("="));
    }

    if (typeof this.params === "object") {
      var queryParams = Object.entries(this.params).map((param) => {
        return [qs.escape(param[0]), qs.escape(param[1])].join("=");
      });
      var filterParams = queryParams.join("&");

      queryArgs.push(["appParams", qs.escape(filterParams)].join("="));
    }

    var queryString = queryArgs.join("&");
    return [this.scope, queryString].join("?");
  }
}

/**
 * @constructor
 * @param options
 */
class ClientCapability {
  constructor(options) {
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

  addScope(scope) {
    this.scopes.push(scope);
  }

  toJwt() {
    const scope = this.scopes.map((scope) => scope.payload()).join(" ");
    var payload = {
      scope: scope,
      iss: this.accountSid,
      exp: Math.floor(new Date() / 1000) + this.ttl,
    };

    return jwt.sign(payload, this.authToken);
  }
}

ClientCapability.EventStreamScope = EventStreamScope;
ClientCapability.IncomingClientScope = IncomingClientScope;
ClientCapability.OutgoingClientScope = OutgoingClientScope;

module.exports = ClientCapability;
