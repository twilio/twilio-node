"use strict";

import jwt from "jsonwebtoken";
import qs from "querystring";

export interface Scope {
  scope: string;
  payload(): string;
}

export interface OutgoingClientScopeOptions {
  applicationSid: string;
  clientName?: string;
  params?: object;
}

export interface ClientCapabilityOptions {
  accountSid: string;
  authToken: string;
  ttl?: number;
}

/**
 * @constructor
 * @param filters
 */
export class EventStreamScope implements Scope {
  scope: string = "scope:stream:subscribe";
  filters: object;

  constructor(filters?: object) {
    this.filters = filters || {};
  }

  payload(): string {
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
export class IncomingClientScope implements Scope {
  scope: string = "scope:client:incoming";
  clientName: string;

  constructor(clientName: string) {
    this.clientName = clientName;
  }

  payload(): string {
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
export class OutgoingClientScope implements Scope {
  scope: string = "scope:client:outgoing";
  applicationSid: string;
  clientName?: string;
  params?: object;

  constructor(options: OutgoingClientScopeOptions) {
    if (!options) {
      throw new Error('Required parameter "options" missing.');
    }
    if (typeof options !== "object") {
      throw new TypeError('Parameter "options" must be a type Object');
    }
    if (!options.applicationSid) {
      throw new Error('Required parameter "options.applicationSid" missing.');
    }

    this.applicationSid = options.applicationSid;
    this.clientName = options.clientName;
    this.params = options.params;
  }

  payload(): string {
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
export default class ClientCapability {
  static EventStreamScope = EventStreamScope;
  static IncomingClientScope = IncomingClientScope;
  static OutgoingClientScope = OutgoingClientScope;
  accountSid: string;
  authToken: string;
  ttl: number;
  scopes: Scope[];

  constructor(options: ClientCapabilityOptions) {
    if (!options) {
      throw new Error('Required parameter "options" missing.');
    }
    if (typeof options !== "object") {
      throw new TypeError('Parameter "options" must be a type Object');
    }
    if (!options.accountSid) {
      throw new Error('Required parameter "options.accountSid" missing.');
    }
    if (!options.authToken) {
      throw new Error('Required parameter "options.authToken" missing.');
    }

    this.accountSid = options.accountSid;
    this.authToken = options.authToken;
    this.ttl = options.ttl || 3600;
    this.scopes = [];
  }

  addScope(scope: Scope) {
    this.scopes.push(scope);
  }

  toJwt(): string {
    const scope = this.scopes.map((scope) => scope.payload()).join(" ");
    var payload = {
      scope: scope,
      iss: this.accountSid,
      exp: Math.floor(new Date().valueOf() / 1000) + this.ttl,
    };

    return jwt.sign(payload, this.authToken);
  }
}
