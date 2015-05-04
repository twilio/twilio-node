var crypto = require('crypto');

/**
 * @constructor
 * @param {string} signingKeySid - the signing key's unique ID
 * @param {string} accountSid - the account's unique ID to which access is scoped
 * @param {string} [tokenId] - a unique ID for this token
 * @param {number} [ttl=3600] - time to live in seconds
 * @param {Object[]} [grants=[]] - the grants given to this token
 */
function ScopedAuthenticationToken(signingKeySid, accountSid, tokenId, ttl, grants) {
    this.signingKeySid = signingKeySid;
    this.accountSid = accountSid;
    this.tokenId = typeof tokenId !== 'undefined' ? tokenId : signingKeySid.concat("-", Math.floor(Date.now() / 1000));
    this.ttl = typeof ttl !== 'undefined' ? ttl : 3600;
    this.grants = typeof grants !== 'undefined' ? grants : [];
};

ScopedAuthenticationToken.prototype.addGrant = function (grant) {
    this.grants.push(grant);
};

ScopedAuthenticationToken.prototype.generateToken = function (secret) {
    var payload = {
        jti: this.tokenId,
        iss: this.signingKeySid,
        sub: this.accountSid,
        nbf: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + this.ttl,
        grants: this.grants
    };

    return jwtEncode(payload, secret, {cty: 'twilio-sat;v=1'});
};

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

module.exports = ScopedAuthenticationToken;
