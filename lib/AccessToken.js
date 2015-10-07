var crypto = require('crypto');

var ACTION = {
    ALL: '*',
    HTTP: {
        DELETE: 'DELETE',
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT'
    },
    CLIENT: {
        LISTEN: 'listen',
        INVITE: 'invite'
    }
};

/**
 * @constructor
 * @param {string} signingKeySid - the signing key's unique ID
 * @param {string} accountSid - the account's unique ID to which access is scoped
 * @param {string} secret - the secret to sign the token with
 * @param {number} [ttl=3600] - time to live in seconds
 */
function AccessToken(signingKeySid, accountSid, secret, ttl) {
    this.signingKeySid = signingKeySid;
    this.accountSid = accountSid;
    this.secret = secret;
    this.ttl = typeof ttl !== 'undefined' ? ttl : 3600;
    this.grants = [];
};

AccessToken.prototype.addGrant = function (resource, actions) {
    if (actions) actions = [].concat(actions);
    else actions = [ACTION.ALL];
    this.grants.push({'res': resource, 'act': actions});
};

AccessToken.prototype.addEndpointGrant = function (endpoint, actions) {
    if (actions) actions = [].concat(actions);
    else actions = [ACTION.CLIENT.LISTEN, ACTION.CLIENT.INVITE];
    var resource = 'sip:' + endpoint + '@' + this.accountSid 
        + '.endpoint.twilio.com';
    this.grants.push({'res': resource, 'act': actions});
};

AccessToken.prototype.addRestGrant = function (uri, actions) {
    var resource = 'https://api.twilio.com/2010-04-01/Accounts/' +
        this.accountSid + '/' + uri.replace(/^\//, '');
    this.addGrant(resource, actions);
};

AccessToken.prototype.enableNTS = function() {
    this.addRestGrant('/Tokens.json', ACTION.HTTP.POST);
};

AccessToken.prototype.toJwt = function () {
    now = Math.floor(Date.now() / 1000);
    var headers = {
        'cty': 'twilio-sat;v=1'
    };
    var payload = {
        jti: this.signingKeySid + '-' + now,
        iss: this.signingKeySid,
        sub: this.accountSid,
        nbf: now,
        exp: now + this.ttl,
        grants: this.grants
    };

    return jwtEncode(payload, this.secret, headers, 'HS256');
};

AccessToken.prototype.toString = AccessToken.prototype.toJwt;
AccessToken.ACTION = ACTION;

/**
 * support algorithm mapping
 */
var algorithmMap = {
    HS256: 'sha256',
    HS384: 'sha384',
    HS512: 'sha512',
    RS256: 'RSA-SHA256'
};

/**
 * Map algorithm to hmac or sign type, to determine which crypto function to use
 */
var typeMap = {
    HS256: 'hmac',
    HS384: 'hmac',
    HS512: 'hmac',
    RS256: 'sign'
};

/**
 * Encode jwt
 *
 * @param {Object} payload
 * @param {String} key
 * @param {Object} headers
 * @param {String} algorithm
 * @return {String} token
 * @api public
 */
function jwtEncode(payload, key, headers, algorithm) {
    // Check key
    if (!key) {
        throw new Error('Require key');
    }

    // Check algorithm, default is HS256
    if (!algorithm) {
        algorithm = 'HS256';
    }

    var signingMethod = algorithmMap[algorithm];
    var signingType = typeMap[algorithm];
    if (!signingMethod || !signingType) {
        throw new Error('Algorithm not supported');
    }

    // header, typ is fixed value.
    var header = { typ: 'JWT', alg: algorithm };
    // merge provided headers
    if (typeof headers !== 'undefined') {
        for (var attributeName in headers) {
            if (headers.hasOwnProperty(attributeName)) {
                header[attributeName] = headers[attributeName];
            }
        }
    }

    // create segments, all segment should be base64 string
    var segments = [];
    segments.push(base64urlEncode(JSON.stringify(header)));
    segments.push(base64urlEncode(JSON.stringify(payload)));
    segments.push(sign(segments.join('.'), key, signingMethod, signingType));

    return segments.join('.');
}

function base64urlEncode(str) {
    return base64urlEscape(new Buffer(str).toString('base64'));
}

function base64urlEscape(str) {
    return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

function sign(input, key, method, type) {
    var base64str;
    if(type === "hmac") {
        base64str = crypto.createHmac(method, key).update(input).digest('base64');
    }
    else if(type == "sign") {
        base64str = crypto.createSign(method).update(input).sign(key, 'base64');
    }
    else {
        throw new Error('Algorithm type not recognized');
    }

    return base64urlEscape(base64str);
}

module.exports = AccessToken;
