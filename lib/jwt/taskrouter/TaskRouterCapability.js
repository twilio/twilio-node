'use strict';

var jwt = require('jsonwebtoken');

/**
 * Create a new Policy
 *
 * @constructor
 * @param {object} options - ...
 * @param {string} [options.url] - Policy URL
 * @param {string} [options.method] - HTTP Method
 * @param {object} [options.queryFilter] - Request query filter allowances
 * @param {object} [options.postFilter] - Request post filter allowances
 * @param {boolean} [options.allowed] - Allow the policy
 */
class Policy {
  constructor(options) {
    options = options || {};
    this.url = options.url;
    this.method = options.method || 'GET';
    this.queryFilter = options.queryFilter || {};
    this.postFilter = options.postFilter || {};
    this.allow = options.allow || true;
  }

  payload() {
    return {
      url: this.url,
      method: this.method,
      query_filter: this.queryFilter,
      post_filter: this.postFilter,
      allow: this.allow
    };
  }
}

/**
 * @constructor
 * @param {object} options - ...
 * @param {string} options.accountSid - account sid
 * @param {string} options.authToken - auth token
 * @param {string} options.workspaceSid - workspace sid
 * @param {string} options.channelId - taskrouter channel id
 * @param {string} [options.friendlyName] - friendly name for the jwt
 * @param {number} [options.ttl] - time to live
 * @param {string} [options.version] - taskrouter version
 */
class TaskRouterCapability {
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
    if (!options.workspaceSid) {
      throw new Error('Required parameter "options.workspaceSid" missing.');
    }
    if (!options.channelId) {
      throw new Error('Required parameter "options.channelId" missing.');
    }

    this.accountSid = options.accountSid;
    this.authToken = options.authToken;
    this.workspaceSid = options.workspaceSid;
    this.channelId = options.channelId;
    this.friendlyName = options.friendlyName;
    this.ttl = options.ttl || 3600;
    this.version = options.version || 'v1';
    this.policies = [];
  }

  addPolicy(policy) {
    this.policies.push(policy);
  }

  toJwt() {
    var payload = {
      iss: this.accountSid,
      exp: (Math.floor(new Date() / 1000)) + this.ttl,
      version: this.version,
      friendly_name: this.friendlyName,
      account_sid: this.accountSid,
      channel: this.channelId,
      workspace_sid: this.workspaceSid,
      policies: this.policies.map((policy) => policy.payload())
    };

    if (this.channelId.startsWith('WK')) {
      payload.worker_sid = this.channelId;
    } else if (this.channelId.startsWith('WQ')) {
      payload.taskqueue_sid = this.channelId;
    }

    return jwt.sign(payload, this.authToken);
  }
}

TaskRouterCapability.Policy = Policy;

module.exports = TaskRouterCapability;
