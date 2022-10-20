'use strict';

var jwt = require('jsonwebtoken');

/**
 * @constructor
 * @param {object} options - ...
 * @param {string} options.workspaceSid - The workspace unique ID
 * @param {string} options.workerSid - The worker unique ID
 * @param {string} options.role - The role of the grant
 */
class TaskRouterGrant {
  constructor(options) {
    options = options || {};
    this.workspaceSid = options.workspaceSid;
    this.workerSid = options.workerSid;
    this.role = options.role;
    this.key = 'task_router';
  }

  toPayload() {
    var grant = {};
    if (this.workspaceSid) { grant.workspace_sid = this.workspaceSid; }
    if (this.workerSid) { grant.worker_sid = this.workerSid; }
    if (this.role) { grant.role = this.role; }
    return grant;
  }
}

/**
 * @constructor
 * @param {object} options - ...
 * @param {string} options.serviceSid - The service unique ID
 * @param {string} options.endpointId - The endpoint ID
 * @param {string} options.deploymentRoleSid - SID of the deployment role to be
 *                 assigned to the user
 * @param {string} options.pushCredentialSid - The Push Credentials SID
 */
class ChatGrant {
  constructor(options) {
    options = options || {};
    this.serviceSid = options.serviceSid;
    this.endpointId = options.endpointId;
    this.deploymentRoleSid = options.deploymentRoleSid;
    this.pushCredentialSid = options.pushCredentialSid;
    this.key = 'chat';
  }

  toPayload() {
    var grant = {};
    if (this.serviceSid) { grant.service_sid = this.serviceSid; }
    if (this.endpointId) { grant.endpoint_id = this.endpointId; }
    if (this.deploymentRoleSid) {
      grant.deployment_role_sid = this.deploymentRoleSid;
    }
    if (this.pushCredentialSid) {
      grant.push_credential_sid = this.pushCredentialSid;
    }
    return grant;
  }
}


/**
 * @constructor
 * @param {object} options - ...
 * @param {string} options.room - The Room name or Room sid.
 */
class VideoGrant {
  constructor(options) {
    options = options || {};
    this.room = options.room;
    this.key = 'video';
  }

  toPayload() {
    var grant = {};
    if (this.room) { grant.room = this.room; }
    return grant;
  }
}

/**
 * @constructor
 * @param {string} options.serviceSid - The service unique ID
 * @param {string} options.endpointId - The endpoint ID
 */
class SyncGrant {
  constructor(options) {
    options = options || {};
    this.serviceSid = options.serviceSid;
    this.endpointId = options.endpointId;
    this.key = 'data_sync';
  }

  toPayload() {
    var grant = {};
    if (this.serviceSid) { grant.service_sid = this.serviceSid; }
    if (this.endpointId) { grant.endpoint_id = this.endpointId; }
    return grant;
  }
}

/**
 * @constructor
 * @param {object} options - ...
 * @param {boolean} options.incomingAllow - Whether or not this endpoint is allowed to receive incoming calls as grants.identity
 * @param {string} options.outgoingApplicationSid - application sid to call when placing outgoing call
 * @param {object} options.outgoingApplicationParams - request params to pass to the application
 * @param {string} options.pushCredentialSid - Push Credential Sid to use when registering to receive incoming call notifications
 * @param {string} options.endpointId - Specify an endpoint identifier for this device, which will allow the developer
 *                 to direct calls to a specific endpoint when multiple devices are associated with a single identity
 */
class VoiceGrant {
  constructor(options) {
    options = options || {};
    this.incomingAllow = options.incomingAllow;
    this.outgoingApplicationSid = options.outgoingApplicationSid;
    this.outgoingApplicationParams = options.outgoingApplicationParams;
    this.pushCredentialSid = options.pushCredentialSid;
    this.endpointId = options.endpointId;
    this.key = 'voice';
  }

  toPayload() {
    var grant = {};
    if (this.incomingAllow === true) {
      grant.incoming = { allow: true };
    }

    if (this.outgoingApplicationSid) {
      grant.outgoing = {};
      grant.outgoing.application_sid = this.outgoingApplicationSid;

      if (this.outgoingApplicationParams) {
        grant.outgoing.params = this.outgoingApplicationParams;
      }
    }

    if (this.pushCredentialSid) {
      grant.push_credential_sid = this.pushCredentialSid;
    }
    if (this.endpointId) {
      grant.endpoint_id = this.endpointId;
    }
    return grant;
  }
}


/**
 * @constructor
 * @param {object} options - ...
 * @param {string} options.grant - The PlaybackGrant retrieved from Twilio's API
 */
class PlaybackGrant {
  constructor(options) {
    options = options || {};
    this.grant = options.grant;
    this.key = 'player';
  }

  toPayload() {
    var grant = {};
    if (this.grant) { grant = this.grant; }
    return grant;
  }
}


/**
 * @constructor
 * @param {string} accountSid - The account's unique ID to which access is scoped
 * @param {string} keySid - The signing key's unique ID
 * @param {string} secret - The secret to sign the token with
 * @param {object} options - ...
 * @param {number} [options.ttl=3600] - Time to live in seconds
 * @param {string} [options.identity] - The identity of the first person
 * @param {number} [options.nbf] - Time from epoch in seconds for not before value
 * @param {string} [options.region] - The region value associated with this account
 */
class AccessToken {
  constructor(accountSid, keySid, secret, options) {
    if (!accountSid) { throw new Error('accountSid is required'); }
    if (!keySid) { throw new Error('keySid is required'); }
    if (!secret) { throw new Error('secret is required'); }
    options = options || {};
  
    this.accountSid = accountSid;
    this.keySid = keySid;
    this.secret = secret;
    this.ttl = options.ttl || 3600;
    this.identity = options.identity;
    this.nbf = options.nbf;
    this.region = options.region;
    this.grants = [];
  }

  addGrant (grant) {
    this.grants.push(grant);
  }

  toJwt (algorithm) {
    algorithm = algorithm || AccessToken.DEFAULT_ALGORITHM;
    if (!AccessToken.ALGORITHMS.includes(algorithm)) {
      throw new Error('Algorithm not supported. Allowed values are ' + AccessToken.ALGORITHMS.join(', '));
    }
  
    var grants = {};
    if (Number.isInteger(this.identity) || typeof this.identity === 'string') { grants.identity = String(this.identity); }

    for (const grant of this.grants) {
      grants[grant.key] = grant.toPayload();
    }

    var now = Math.floor(Date.now() / 1000);
    var payload = {
      jti: this.keySid + '-' + now,
      grants: grants
    };
    if (typeof this.nbf === 'number') { payload.nbf = this.nbf; }
  
    var header = {
      cty: 'twilio-fpa;v=1',
      typ: 'JWT'
    };
  
    if (this.region && typeof this.region === 'string') {
      header.twr = this.region;
    }
  
    return jwt.sign(payload, this.secret, {
      header: header,
      algorithm: algorithm,
      issuer: this.keySid,
      subject: this.accountSid,
      expiresIn: this.ttl
    });
  }
}

// Class level properties
AccessToken.ChatGrant = ChatGrant;
AccessToken.VoiceGrant = VoiceGrant;
AccessToken.SyncGrant = SyncGrant;
AccessToken.VideoGrant = VideoGrant;
AccessToken.TaskRouterGrant = TaskRouterGrant;
AccessToken.PlaybackGrant = PlaybackGrant;
AccessToken.DEFAULT_ALGORITHM = 'HS256';
AccessToken.ALGORITHMS = [
  'HS256',
  'HS384',
  'HS512'
];

module.exports = AccessToken;
