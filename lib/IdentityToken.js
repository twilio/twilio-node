var _ = require('underscore');
var jwt = require('jsonwebtoken');


/**
 * @constructor
 * @param {string} options.serviceSid - The service unique ID
 * @param {string} options.endpointId - The endpoint ID
 */
function IpMessagingGrant(options) {
  options = options || {};
  this.serviceSid = options.serviceSid;
  this.role = undefined;
  this.endpointId = options.endpointId;
}

_.extend(IpMessagingGrant.prototype, {
  key: 'ip_messaging',

  addRole: function(role) {
    this.role = this.role || [];
    this.role.push(role);
  },

  toPayload: function() {
    var grant = {};
    if (this.serviceSid) { grant.service_sid = this.serviceSid; }
    if (this.role) { grant.role = this.role; }
    if (this.endpointId) {
      grant.data = {
        endpoint_id: this.endpointId
      };
    }
    return grant;
  }
});


/**
 * @constructor
 * @param {string} option.configuration_profile_sid
 *    - The configuration profile unique ID
 */
function RTCGrant(options) {
  options = options || {};
  this.configurationProfileSid = options.configurationProfileSid;
}

_.extend(RTCGrant.prototype, {
  key: 'rtc',
  toPayload: function() {
    var grant = {};
    if (this.configurationProfileSid) {
      grant.configuration_profile_sid = this.configurationProfileSid;
    }
    return grant;
  }
});


/**
 * @constructor
 * @param {string} accountSid - The account's unique ID to which access is scoped
 * @param {string} keySid - The signing key's unique ID
 * @param {string} secret - The secret to sign the token with
 * @param {number} [ttl=3600] - Time to live in seconds
 */
function IdentityToken(accountSid, keySid, secret, ttl) {
  if (!accountSid) { throw new Error('accountSid is required'); }
  if (!keySid) { throw new Error('keySid is required'); }
  if (!secret) { throw new Error('secret is required'); }

  this.accountSid = accountSid;
  this.keySid = keySid;
  this.secret = secret;
  this.ttl = ttl || 3600;
  this.identity = undefined;
  this.grants = [];
}

// Inner classes
IdentityToken.IpMessagingGrant = IpMessagingGrant;
IdentityToken.RTCGrant = RTCGrant;

_.extend(IdentityToken.prototype, {
  addGrant: function(grant) {
    this.grants.push(grant);
  },

  generate: function() {
    if (!this.identity) { throw new Error('identity is required'); }

    var grants = {
      identity: this.identity
    };

    _.each(this.grants, function(grant) {
      grants[grant.key] = grant.toPayload();
    });

    var now = Math.floor(Date.now() / 1000);
    var payload = {
      jti: this.keySid + '-' + now,
      grants: grants
    };

    return jwt.sign(payload, this.secret, {
      algorithm: 'HS256',
      issuer: this.keySid,
      subject: this.accountSid,
      expiresIn: this.ttl
    });
  }
});


module.exports = IdentityToken;
