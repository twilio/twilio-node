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
  this.credentialSid = options.credentialSid;
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
      grant.data = grant.data || {};
      grant.data.endpoint_id = this.endpointId;
    }
    if (this.credentialSid) {
      grant.data = grant.data || {};
      grant.data.credential_sid = this.credentialSid;
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

// Class level properties
IdentityToken.IpMessagingGrant = IpMessagingGrant;
IdentityToken.RTCGrant = RTCGrant;
IdentityToken.DEFAULT_ALGORITHM = 'HS256';
IdentityToken.ALGORITHMS = [
  'HS256',
  'HS384',
  'HS512'
];

_.extend(IdentityToken.prototype, {
  addGrant: function(grant) {
    this.grants.push(grant);
  },

  generate: function(algorithm) {
    algorithm = algorithm || IdentityToken.DEFAULT_ALGORITHM;
    if (!_.contains(IdentityToken.ALGORITHMS, algorithm)) {
      throw new Error('Algorithm not supported. Allowed values are ' +
                      IdentityToken.ALGORITHMS.join(', '));
    }

    var grants = {};
    if (this.identity) { grants.identity = this.identity; }

    _.each(this.grants, function(grant) {
      grants[grant.key] = grant.toPayload();
    });

    var now = Math.floor(Date.now() / 1000);
    var payload = {
      jti: this.keySid + '-' + now,
      grants: grants
    };

    return jwt.sign(payload, this.secret, {
      headers: {
        cty: 'twilio-sit;v=1',
        typ: 'JWT'
      },
      algorithm: algorithm,
      issuer: this.keySid,
      subject: this.accountSid,
      expiresIn: this.ttl
    });
  }
});


module.exports = IdentityToken;
